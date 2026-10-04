# aggiorna-appunti.ps1
# Avviato dall'Utilita di pianificazione all'accesso a Windows (con 10 minuti di ritardo).
# Trova i PDF nuovi nelle cartelle materiale/ del progetto e li passa a Claude Code, che li
# integra nel sito seguendo CLAUDE.md. Poi fa commit e push, cosi il sito si aggiorna.
#
# Per aggiungere una lezione: metti il PDF in analisi\materiale o geometria\materiale.
# Log di ogni avvio: logs\run-AAAAMMGG-HHMM.log ; riepilogo di Claude: logs\ultimo-aggiornamento.md

# ===== CONFIGURA QUI =====
# cartella del progetto = quella che contiene .claude\ (funziona anche se il progetto si sposta)
$RepoDir  = Split-Path $PSScriptRoot -Parent
$Sorgenti = @(
    (Join-Path $RepoDir "analisi\materiale"),
    (Join-Path $RepoDir "geometria\materiale")
)
# Il programma di installazione di Claude Code mette l'eseguibile qui; l'Utilita di
# pianificazione non sempre vede il PATH dell'utente, quindi si usa il percorso completo.
$ClaudeExe = Join-Path $env:USERPROFILE ".local\bin\claude.exe"
if (-not (Test-Path $ClaudeExe)) { $ClaudeExe = "claude" }
# Comandi che Claude puo eseguire da solo: python serve a leggere i PDF scritti a mano
# (PyMuPDF), node a verificare i conti con assets/js/meg.js.
$Permessi = "Read,Edit,Write,Glob,Grep,Bash(python:*),Bash(node:*)"
$Push     = $true      # $false = commit solo in locale, il sito non si aggiorna
# =========================

$ErrorActionPreference = "Stop"
$StateFile = Join-Path $RepoDir ".appunti-state.json"
$ListFile  = Join-Path $RepoDir ".nuovi-file.txt"
$LogDir    = Join-Path $RepoDir "logs"
New-Item -ItemType Directory -Force -Path $LogDir | Out-Null
$LogFile   = Join-Path $LogDir ("run-" + (Get-Date -Format "yyyyMMdd-HHmm") + ".log")

function Log($testo) { $testo | Out-File $LogFile -Append -Encoding utf8 }

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

# Manifest dei PDF gia elaborati: percorso -> dimensione
$manifest = @{}
if (Test-Path $StateFile) {
    (Get-Content $StateFile -Raw | ConvertFrom-Json).PSObject.Properties |
        ForEach-Object { $manifest[$_.Name] = [long]$_.Value }
}

$pdf = foreach ($s in $Sorgenti) {
    if (Test-Path $s) { Get-ChildItem $s -Recurse -File -Filter *.pdf -ErrorAction SilentlyContinue }
}

# Nuovo = mai visto, oppure dimensione cambiata (il prof ha ricaricato il file)
$nuovi = @($pdf | Where-Object { -not $manifest.ContainsKey($_.FullName) -or $manifest[$_.FullName] -ne $_.Length })

if ($nuovi.Count -eq 0) {
    Log "Nessun PDF nuovo."
    exit 0
}

$nuovi.FullName | Set-Content $ListFile -Encoding utf8
Log "PDF nuovi: $($nuovi.Count)"
$nuovi.FullName | ForEach-Object { Log "  $_" }

Set-Location $RepoDir

# Punto di ripristino: se Claude combina guai -> git reset --hard HEAD~1 (o il commit precedente)
Esegui git add -A | Out-Null
Esegui git commit -m "Prima dell'aggiornamento automatico $(Get-Date -Format s)" | Out-Null

$codice = Esegui $ClaudeExe -p "/aggiorna-appunti" --permission-mode acceptEdits --allowedTools $Permessi

if ($codice -eq 0) {
    foreach ($f in $nuovi) { $manifest[$f.FullName] = $f.Length }
    $manifest | ConvertTo-Json | Set-Content $StateFile -Encoding utf8
    Remove-Item $ListFile -ErrorAction SilentlyContinue
    Esegui git add -A | Out-Null
    Esegui git commit -m "Integra automaticamente i PDF nuovi ($(Get-Date -Format s))" | Out-Null
    if ($Push) {
        $p = Esegui git push origin main
        if ($p -ne 0) { Log "Push non riuscito ($p): i commit restano in locale, riprova con git push." }
    }
} else {
    # Il manifest non viene aggiornato: al prossimo avvio riprova con gli stessi file
    Log "Claude terminato con errore ($codice): al prossimo accesso riprova con gli stessi PDF."
}
