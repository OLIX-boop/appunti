# aggiorna-appunti.ps1
# Avviato dall'Utilita di pianificazione all'accesso a Windows (con 10 minuti di ritardo).
# Trova i PDF nuovi nelle cartelle sorgente della tabella "Mappa corsi" di CLAUDE.md (WeBeep e
# materiale/), li copia in materiale/ del corso, li passa a Claude Code, poi commit e push.
#
# Prova a vuoto (non copia, non lancia Claude, non tocca il manifest):
#   powershell -ExecutionPolicy Bypass -File .claude\aggiorna-appunti.ps1 -DryRun
# Log: logs\run-AAAAMMGG-HHMM.log ; riepilogo di Claude: logs\ultimo-aggiornamento.md
param([switch]$DryRun)

# ===== CONFIGURA QUI =====
# cartella del progetto = quella che contiene .claude\ (funziona anche se il progetto si sposta)
$RepoDir = Split-Path $PSScriptRoot -Parent
# Il programma di installazione di Claude Code mette l'eseguibile qui; l'Utilita di
# pianificazione non sempre vede il PATH dell'utente, quindi si usa il percorso completo.
$ClaudeExe = Join-Path $env:USERPROFILE ".local\bin\claude.exe"
if (-not (Test-Path $ClaudeExe)) { $ClaudeExe = "claude" }
# Comandi che Claude puo eseguire da solo: python serve a leggere i PDF scritti a mano
# (PyMuPDF), node a verificare i conti con assets/js/meg.js.
$Permessi = "Read,Edit,Write,Glob,Grep,Bash(python:*),Bash(node:*)"
$Push     = $true      # $false = commit solo in locale, il sito non si aggiorna
$Popup    = $true      # finestra di fine lavoro con l'esito
# Pezzi di percorso da ignorare sempre (non sono lezioni di quest'anno). Confronto senza
# distinguere maiuscole e minuscole.
$Escludi  = @("Esami degli anni precedenti", "TEMI D'ESAME", "EDIZIONE 2025-2026", "000BLANK.pdf")
# =========================

$ErrorActionPreference = "Stop"
$StateFile = Join-Path $RepoDir ".appunti-state.json"
$ListFile  = Join-Path $RepoDir ".nuovi-file.txt"
$LogDir    = Join-Path $RepoDir "logs"
New-Item -ItemType Directory -Force -Path $LogDir | Out-Null
$LogFile   = Join-Path $LogDir ("run-" + (Get-Date -Format "yyyyMMdd-HHmm") + $(if ($DryRun) { "-dryrun" } else { "" }) + ".log")

function Log($testo) {
    $testo | Out-File $LogFile -Append -Encoding utf8
    if ($DryRun) { Write-Host $testo }
}

# Comandi esterni (git, claude) con l'output nel log. In Windows PowerShell 5.1, con
# ErrorActionPreference = Stop, ogni riga scritta su stderr (anche gli avvisi di git sui fine
# riga) diventerebbe un errore fatale: qui si torna a Continue e si guarda il codice di uscita.
function Esegui {
    $prima = $ErrorActionPreference
    $ErrorActionPreference = "Continue"
    try {
        $exe, $argomenti = $args
        & $exe @argomenti 2>&1 | ForEach-Object { "$_" } | Out-File $LogFile -Append -Encoding utf8
        return $LASTEXITCODE
    } finally { $ErrorActionPreference = $prima }
}

function Escluso($percorso) {
    foreach ($e in $Escludi) { if ($percorso.IndexOf($e, [StringComparison]::OrdinalIgnoreCase) -ge 0) { return $true } }
    return $false
}

function Assoluto($p) { if ([IO.Path]::IsPathRooted($p)) { $p } else { Join-Path $RepoDir $p } }

# --- Mappa corsi: letta da CLAUDE.md, unica fonte per lo script e per Claude ---
function LeggiMappa {
    $righe = Get-Content -LiteralPath (Join-Path $RepoDir "CLAUDE.md") -Encoding UTF8
    $dentro = $false; $mappa = @()
    foreach ($r in $righe) {
        if ($r -match '^###\s+Mappa corsi') { $dentro = $true; continue }
        if ($dentro -and $r -match '^#') { break }
        if (-not $dentro -or $r -notmatch '^\|') { continue }
        $c = $r.Trim().Trim('|').Split('|') | ForEach-Object { $_.Trim() }
        if ($c.Count -lt 5 -or $c[1] -notmatch '`') { continue }   # intestazione e separatore
        $sorgenti = [regex]::Matches($c[1], '`([^`]+)`') | ForEach-Object { Assoluto $_.Groups[1].Value }
        $copia    = Assoluto ([regex]::Match($c[3], '`([^`]+)`').Groups[1].Value)
        $mappa += [pscustomobject]@{ Corso = $c[0]; Sorgenti = @($sorgenti); Copia = $copia; Attivo = ($c[4] -match '^s') }
    }
    return $mappa
}

$nElaborati = 0
$esito = "OK"
$avviato = $false     # true solo se c'e' stato davvero lavoro da fare: il popup appare solo allora

try {
    $mappa = LeggiMappa
    if (-not $mappa) { throw "Tabella 'Mappa corsi' non trovata in CLAUDE.md" }
    $attivi = @($mappa | Where-Object { $_.Attivo })
    Log ("Corsi attivi: " + (($attivi | ForEach-Object { $_.Corso }) -join ", "))
    $mappa | Where-Object { -not $_.Attivo } | ForEach-Object { Log ("Corso non attivo, ignorato: " + $_.Corso) }

    # Manifest dei PDF gia elaborati: percorso -> dimensione
    $manifest = @{}
    if (Test-Path -LiteralPath $StateFile) {
        (Get-Content -LiteralPath $StateFile -Raw | ConvertFrom-Json).PSObject.Properties |
            ForEach-Object { $manifest[$_.Name] = [long]$_.Value }
    }
    # Impronte dei PDF gia elaborati: un file identico altrove (es. WeBeep) non va rifatto
    $impronteFatte = @{}
    foreach ($p in $manifest.Keys) {
        if ((Test-Path -LiteralPath $p) -and (Get-Item -LiteralPath $p).Length -eq $manifest[$p]) {
            $impronteFatte[(Get-FileHash -LiteralPath $p -Algorithm SHA256).Hash] = $p
        }
    }

    # Raccolta: per ogni impronta un solo elemento (lo stesso PDF in WeBeep e in materiale conta una volta)
    $nuovi = [ordered]@{}; $duplicati = @(); $nEsclusi = 0
    foreach ($corso in $attivi) {
        foreach ($s in $corso.Sorgenti) {
            if (-not (Test-Path -LiteralPath $s)) { Log "Cartella sorgente assente: $s"; continue }
            foreach ($f in Get-ChildItem -LiteralPath $s -Recurse -File -Filter *.pdf -ErrorAction SilentlyContinue) {
                if (Escluso $f.FullName) { $nEsclusi++; continue }
                if ($manifest.ContainsKey($f.FullName) -and $manifest[$f.FullName] -eq $f.Length) { continue }
                $h = (Get-FileHash -LiteralPath $f.FullName -Algorithm SHA256).Hash
                if ($impronteFatte.ContainsKey($h)) { $duplicati += $f; continue }
                if (-not $nuovi.Contains($h)) {
                    $dest = Join-Path $corso.Copia $f.Name
                    $nuovi[$h] = [pscustomobject]@{ Corso = $corso.Corso; Origine = $f.FullName; Copia = $dest; Dimensione = $f.Length; Altri = @() }
                } else { $nuovi[$h].Altri += $f.FullName }
            }
        }
    }
    $lista = @($nuovi.Values)
    Log "PDF esclusi dai filtri: $nEsclusi ; identici a PDF gia elaborati: $($duplicati.Count) ; nuovi: $($lista.Count)"

    if ($lista.Count -eq 0) {
        Log "Nessun PDF nuovo."
        if (-not $DryRun -and $duplicati.Count -gt 0) {
            # i duplicati si registrano subito, cosi la prossima volta non si ricalcola l'impronta
            foreach ($f in $duplicati) { $manifest[$f.FullName] = $f.Length }
            $manifest | ConvertTo-Json | Set-Content -LiteralPath $StateFile -Encoding utf8
        }
        return
    }

    foreach ($x in $lista) {
        $azione = if ($x.Origine -eq $x.Copia) { "gia in materiale" }
                  elseif (Test-Path -LiteralPath $x.Copia) { "copia, SOSTITUISCE la versione in materiale" }
                  else { "copia in materiale" }
        Log ("  [" + $x.Corso + "] " + $x.Origine)
        Log ("      -> " + $x.Copia + "  (" + $azione + ")")
    }

    if ($DryRun) { Log "Prova a vuoto: nessun file copiato, Claude non avviato, manifest non modificato."; return }

    $avviato = $true
    Set-Location -LiteralPath $RepoDir

    # Punto di ripristino: se Claude combina guai -> git reset --hard al commit precedente
    Esegui git add -A | Out-Null
    Esegui git commit -m "Prima dell'aggiornamento automatico $(Get-Date -Format s)" | Out-Null

    # Copia in materiale: le pagine linkano i PDF da li
    foreach ($x in $lista) {
        if ($x.Origine -ne $x.Copia) {
            New-Item -ItemType Directory -Force -Path (Split-Path $x.Copia -Parent) | Out-Null
            Copy-Item -LiteralPath $x.Origine -Destination $x.Copia -Force
        }
    }
    # A Claude il percorso d'origine: e' quello che corrisponde alla colonna "Cartella sorgente"
    $lista | ForEach-Object { $_.Origine } | Set-Content -LiteralPath $ListFile -Encoding utf8

    $cartelleEsterne = $attivi | ForEach-Object { $_.Sorgenti } | Where-Object { -not $_.StartsWith($RepoDir) -and (Test-Path -LiteralPath $_) }
    $addDirs = $cartelleEsterne | ForEach-Object { "--add-dir"; $_ }
    $codice = Esegui $ClaudeExe -p "/aggiorna-appunti" --permission-mode acceptEdits --allowedTools $Permessi @addDirs

    if ($codice -ne 0) {
        # Il manifest non viene aggiornato: al prossimo avvio riprova con gli stessi file
        throw "Claude terminato con errore ($codice): al prossimo accesso riprova con gli stessi PDF."
    }

    foreach ($x in $lista) {
        foreach ($p in @($x.Origine, $x.Copia) + $x.Altri) { if (Test-Path -LiteralPath $p) { $manifest[$p] = (Get-Item -LiteralPath $p).Length } }
    }
    foreach ($f in $duplicati) { $manifest[$f.FullName] = $f.Length }
    $manifest | ConvertTo-Json | Set-Content -LiteralPath $StateFile -Encoding utf8
    Remove-Item -LiteralPath $ListFile -ErrorAction SilentlyContinue
    $nElaborati = $lista.Count

    Esegui git add -A | Out-Null
    Esegui git commit -m "Integra automaticamente $nElaborati PDF nuovi ($(Get-Date -Format s))" | Out-Null
    if ($Push) {
        $p = Esegui git push origin main
        if ($p -ne 0) { Log "Push non riuscito ($p): i commit restano in locale, riprova con git push."; $esito = "OK (push non riuscito)" }
    }
}
catch {
    $esito = "FALLITO"
    $avviato = $true
    Log ("ERRORE: " + $_.Exception.Message)
}
finally {
    Log "Esito: $esito ; PDF elaborati: $nElaborati"
    if ($Popup -and $avviato -and -not $DryRun) {
        $icona = if ($esito -eq "FALLITO") { 16 } else { 64 }
        $testo = "Esito: $esito`nPDF elaborati: $nElaborati`n`nDettagli: $LogFile"
        try { (New-Object -ComObject WScript.Shell).Popup($testo, 0, "Aggiorna Appunti", $icona) | Out-Null } catch { }
    }
}
