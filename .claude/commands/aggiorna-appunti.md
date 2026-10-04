---
description: Integra nel sito i nuovi PDF delle lezioni e aggiunge esercizi
---
Stai girando senza nessuno davanti: non fare domande, prendi la scelta più ragionevole e annotala
nel riepilogo. Commit e push li fa lo script che ti ha avviato: tu **non** usare git.

1. Leggi `.nuovi-file.txt`: un percorso di PDF per riga. Stanno in `analisi/materiale/` o
   `geometria/materiale/`, e la cartella ti dice la materia.
2. Per ogni PDF:
   - leggilo **tutto, pagina per pagina**. Se è scritto a mano `pdftotext` non basta: renderizza
     le pagine in PNG con PyMuPDF (`python`, modulo `pymupdf`) in una cartella temporanea fuori
     dal progetto e guardale;
   - confrontalo con quello che il sito ha già e integra solo ciò che manca, seguendo
     **esattamente** la sezione «Criteri appunti» di `CLAUDE.md`: convenzioni del prof,
     ordine delle lezioni, struttura delle pagine, formule, formato di esercizi, quiz e
     flashcard, cose da non fare;
   - non riscrivere né riformulare sezioni esistenti: aggiungi o completa. Se una convenzione del
     sito contraddice quella del prof, correggi il sito e annotalo;
   - se il PDF è una versione aggiornata di uno già integrato, aggiorna solo la parte
     corrispondente;
   - per ogni argomento nuovo aggiungi esercizi con soluzione verificata, domande di quiz e, per
     Analisi, flashcard; per Analisi aggiorna anche il `cutoff` predefinito e la card della lezione
     in `analisi/index.html`;
   - in cima alla pagina toccata metti o aggiorna il riquadro «★ Novità delle Lezioni …».
3. Prima di finire: aggiorna `?v=` sui riferimenti locali se hai toccato CSS o JS, e controlla che
   nelle formule non ci sia `<` seguito da una lettera e che i file `data/*.js` si carichino con
   `node` senza errori.
4. Se un PDF è illeggibile o non riguarda una lezione (avvisi, orari), saltalo.
5. Scrivi `logs/ultimo-aggiornamento.md` con: file elaborati, pagine toccate, esercizi e domande
   aggiunti, file saltati e perché, scelte dubbie da ricontrollare.
