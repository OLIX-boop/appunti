# aggiorna-appunti.ps1
# Avviato dall'Utilita di pianificazione all'accesso a Windows (con 10 minuti di ritardo).
# Trova i PDF nuovi nelle cartelle sorgente della tabella "Mappa corsi" di CLAUDE.md (WeBeep e
# materiale/), li copia in materiale/ del corso, li passa a Claude Code, poi commit e push.
#
# Prova a vuoto (non copia, non lancia Claude, non tocca il manifest):
#   powershell -ExecutionPolicy Bypass -File .claude\aggiorna-appunti.ps1 -DryRun
# Resoconto di un intervallo di commit gia esistente, solo a schermo:
#   powershell -ExecutionPolicy Bypass -File .claude\aggiorna-appunti.ps1 -ProvaResoconto abc123..def456
#
# File prodotti (in logs\, ignorata da git):
#   storico-aggiornamenti.md  una scheda per ogni avvio con lavoro, la piu recente in cima: cosa ha
#                             detto Claude + cosa e' cambiato davvero secondo git
#   ultimo-aggiornamento.md   il riepilogo scritto da Claude nell'ultimo avvio
#   run-AAAAMMGG-HHMM.log     log tecnico di ogni avvio
param([switch]$DryRun, [string]$ProvaResoconto)

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
$Storico   = Join-Path $LogDir "storico-aggiornamenti.md"
$Ultimo    = Join-Path $LogDir "ultimo-aggiornamento.md"
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

# git con l'output letto come UTF-8 (i titoli hanno accenti) e restituito come righe
function GitTesto {
    $ErrorActionPreference = "Continue"
    $enc = $null
    try { $enc = [Console]::OutputEncoding; [Console]::OutputEncoding = New-Object System.Text.UTF8Encoding $false } catch { }
    try { & git -C $RepoDir @args 2>$null } finally { if ($enc) { try { [Console]::OutputEncoding = $enc } catch { } } }
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

# --- Resoconto oggettivo: cosa e' cambiato fra due commit, letto da git ---
# Non dipende da cio' che Claude dichiara: guarda i paragrafi (h2/h3 con id) comparsi nelle pagine
# e gli oggetti con un id nuovo nei file data/*.js (esercizi, quiz, flashcard, teoremi, ...).
function Resoconto($da, $a) {
    $out = New-Object System.Collections.Generic.List[string]
    $tipi = [ordered]@{ "topics.js" = "Voci nuove della checklist"; "teoremi.js" = "Teoremi nuovi"; "definizioni.js" = "Flashcard nuove";
                        "esercizi.js" = "Esercizi nuovi"; "quiz.js" = "Domande nuove del quiz"; "quesiti.js" = "Quesiti di teoria nuovi" }

    $piuId = [ordered]@{}; $menoId = @{}; $piuH = [ordered]@{}; $menoH = @{}; $cur = $null
    foreach ($l in (GitTesto diff --unified=0 $da $a -- "*.js" "*.html")) {
        if ($l.StartsWith("+++ ")) { $cur = $l.Substring(4) -replace '^b/', ''; continue }
        if ($l.StartsWith("--- ") -or $l.StartsWith("diff ") -or $l.StartsWith("@@") -or $l.StartsWith("index ")) { continue }
        if (-not ($l.StartsWith("+") -or $l.StartsWith("-"))) { continue }
        $piu = $l.StartsWith("+"); $t = $l.Substring(1)
        if ($cur -like "*/data/*.js") {
            foreach ($m in [regex]::Matches($t, "\bid:\s*'([^']+)'")) {
                $k = "$cur|" + $m.Groups[1].Value
                if ($piu) { $piuId[$k] = 1 } else { $menoId[$k] = 1 }
            }
        }
        if ($cur -like "*.html") {
            foreach ($m in [regex]::Matches($t, '<h([23])\s+id="([^"]+)"[^>]*>(.*?)</h\1>')) {
                $k = "$cur#" + $m.Groups[2].Value
                $titolo = $m.Groups[3].Value -replace '<span class="badge[^"]*">.*?</span>', ''
                if ($piu) { $piuH[$k] = (($titolo -replace '<[^>]+>', '') -replace '\s+', ' ').Trim() } else { $menoH[$k] = 1 }
            }
        }
    }

    $out.Add("### Cosa è cambiato davvero (ricavato da git)")
    $out.Add("")
    $nuoviH = @($piuH.Keys | Where-Object { -not $menoH.ContainsKey($_) })
    if ($nuoviH.Count) {
        $out.Add("**Paragrafi nuovi nelle pagine ($($nuoviH.Count))**")
        foreach ($k in $nuoviH) { $f, $id = $k -split '#', 2; $out.Add("- ``$f`` → $($piuH[$k])") }
        $out.Add("")
    }

    $testi = @{}
    $nuoviId = @($piuId.Keys | Where-Object { -not $menoId.ContainsKey($_) })
    foreach ($nome in $tipi.Keys) {
        $qui = @($nuoviId | Where-Object { ($_ -split '\|')[0] -like "*/$nome" })
        if (-not $qui.Count) { continue }
        $out.Add("**$($tipi[$nome]) ($($qui.Count))**")
        foreach ($k in $qui) {
            $f, $id = $k -split '\|', 2
            if (-not $testi.ContainsKey($f)) { $testi[$f] = (GitTesto show "${a}:$f") -join "`n" }
            $tx = $testi[$f]; $i = $tx.IndexOf("id: '$id'"); $fin = if ($i -ge 0) { $tx.Substring($i, [Math]::Min(1200, $tx.Length - $i)) } else { "" }
            $desc = ""
            foreach ($campo in @("titolo", "tema", "q", "t")) {
                # r`...` (con apostrofi dentro) oppure '...'
                $m = [regex]::Match($fin, "\b${campo}:\s*(?:r?``([^``]*)``|'([^']*)')")
                if ($m.Success) { $v = if ($m.Groups[1].Success) { $m.Groups[1].Value } else { $m.Groups[2].Value }; $desc = ($v -replace '<[^>]+>', '' -replace '\s+', ' ').Trim(); break }
            }
            if ($desc.Length -gt 110) { $desc = $desc.Substring(0, 107) + "..." }
            $diff = [regex]::Match($fin, "\bd:\s*(\d)"); $extra = if ($nome -eq "esercizi.js" -and $diff.Success) { " (difficoltà $($diff.Groups[1].Value))" } else { "" }
            $materia = ($f -split '/')[0]
            $out.Add("- **$id** · $desc$extra · _$($materia)_")
        }
        $out.Add("")
    }
    if (-not $nuoviH.Count -and -not $nuoviId.Count) { $out.Add("_Nessun paragrafo, esercizio, domanda o flashcard nuovi: solo modifiche a contenuti esistenti._"); $out.Add("") }

    # File toccati, senza quelli cambiati solo per il numero di versione anti-cache (?v=...)
    $soloVersione = 0; $toccati = @()
    foreach ($l in (GitTesto diff --numstat $da $a)) {
        $p = $l -split "`t"
        if ($p.Count -ne 3) { continue }
        if ($p[0] -eq "-") { $toccati += "- ``$($p[2])`` (file binario, es. PDF)"; continue }
        $righe = GitTesto diff --unified=0 $da $a -- $p[2]
        $tolte = @($righe | Where-Object { $_ -match '^-(?!--)' } | ForEach-Object { $_.Substring(1) -replace '\?v=[^"'']*', '' } | Sort-Object)
        $messe = @($righe | Where-Object { $_ -match '^\+(?!\+\+)' } | ForEach-Object { $_.Substring(1) -replace '\?v=[^"'']*', '' } | Sort-Object)
        if ($tolte.Count -gt 0 -and ($tolte -join "`n") -eq ($messe -join "`n")) { $soloVersione++; continue }
        $toccati += "- ``$($p[2])`` (+$($p[0]) −$($p[1]))"
    }
    $out.Add("**File toccati ($($toccati.Count))**")
    $toccati | ForEach-Object { $out.Add($_) }
    if ($soloVersione) { $out.Add("- _e $soloVersione pagine cambiate solo nel numero di versione anti-cache_") }
    $url = ((GitTesto remote get-url origin) -replace '\.git$', '') -replace '^git@github\.com:', 'https://github.com/'
    if ($url) { $out.Add(""); $out.Add("**Ogni riga cambiata:** $url/compare/$da...$a") }
    return $out
}

function AggiungiAlloStorico($righe) {
    $vecchio = if (Test-Path -LiteralPath $Storico) { Get-Content -LiteralPath $Storico -Raw -Encoding UTF8 } else { "" }
    $vecchio = $vecchio -replace '^# Storico degli aggiornamenti automatici\s*(Una scheda per ogni avvio[^\n]*\n)?\s*', ''
    $testa = "# Storico degli aggiornamenti automatici`n`nUna scheda per ogni avvio con lavoro da fare, la più recente in cima.`n`n"
    $testo = $testa + (($righe -join "`n") + "`n`n---`n`n") + $vecchio
    [IO.File]::WriteAllText($Storico, $testo, (New-Object System.Text.UTF8Encoding $false))
}

# --- Solo resoconto di un intervallo esistente (per provare o rileggere un aggiornamento passato) ---
if ($ProvaResoconto) {
    $da, $a = $ProvaResoconto -split '\.\.', 2
    $enc = [Console]::OutputEncoding
    try { [Console]::OutputEncoding = New-Object System.Text.UTF8Encoding $false } catch { }
    Resoconto $da $a | ForEach-Object { Write-Host $_ }
    try { [Console]::OutputEncoding = $enc } catch { }
    return
}

$nElaborati = 0
$esito = "OK"
$avviato = $false     # true solo se c'e' stato davvero lavoro da fare: popup e storico solo allora
$lista = @()
$primaCommit = $null
$errore = $null

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
    $primaCommit = (GitTesto rev-parse --short HEAD) | Select-Object -First 1

    # Copia in materiale: le pagine linkano i PDF da li
    foreach ($x in $lista) {
        if ($x.Origine -ne $x.Copia) {
            New-Item -ItemType Directory -Force -Path (Split-Path $x.Copia -Parent) | Out-Null
            Copy-Item -LiteralPath $x.Origine -Destination $x.Copia -Force
        }
    }
    # A Claude il percorso d'origine: e' quello che corrisponde alla colonna "Cartella sorgente"
    $lista | ForEach-Object { $_.Origine } | Set-Content -LiteralPath $ListFile -Encoding utf8
    Remove-Item -LiteralPath $Ultimo -ErrorAction SilentlyContinue

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
    $errore = $_.Exception.Message
    Log ("ERRORE: " + $errore)
}
finally {
    Log "Esito: $esito ; PDF elaborati: $nElaborati"
    if ($avviato -and -not $DryRun) {
        # --- scheda per lo storico ---
        $s = New-Object System.Collections.Generic.List[string]
        $s.Add("## " + (Get-Date -Format "yyyy-MM-dd HH:mm") + " · $esito · $($lista.Count) PDF")
        $s.Add("")
        $s.Add("**PDF**")
        foreach ($x in $lista) { $s.Add("- [$($x.Corso)] $(Split-Path $x.Origine -Leaf)") }
        $s.Add("")
        if ($errore) {
            $s.Add("**Errore:** $errore")
            $s.Add("")
            $s.Add("Dettagli tecnici: ``$LogFile``. Il punto di ripristino è il commit ``$primaCommit``.")
        } else {
            $s.Add("### Cosa dice Claude")
            $s.Add("")
            if (Test-Path -LiteralPath $Ultimo) {
                # i titoli del riepilogo scendono di livello per restare dentro la scheda
                (Get-Content -LiteralPath $Ultimo -Encoding UTF8) | ForEach-Object { $s.Add(($_ -replace '^(#{1,3}) ', '$1### ')) }
            } else { $s.Add("_Claude non ha scritto logs/ultimo-aggiornamento.md._") }
            $s.Add("")
            if ($primaCommit) { try { Resoconto $primaCommit "HEAD" | ForEach-Object { $s.Add($_) } } catch { $s.Add("_Resoconto da git non riuscito: $($_.Exception.Message)_") } }
        }
        try { AggiungiAlloStorico $s } catch { Log ("Storico non aggiornato: " + $_.Exception.Message) }

        if ($Popup) {
            $icona = if ($esito -eq "FALLITO") { 16 } else { 64 }
            $testo = "Esito: $esito`nPDF elaborati: $nElaborati`n`nVuoi aprire il resoconto (cosa e' stato aggiunto agli appunti)?"
            try {
                $r = (New-Object -ComObject WScript.Shell).Popup($testo, 0, "Aggiorna Appunti", 4 + $icona)
                if ($r -eq 6) { Start-Process notepad.exe -ArgumentList "`"$Storico`"" }
            } catch { }
        }
    }
}
