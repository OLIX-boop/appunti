---
description: Integra i nuovi PDF delle lezioni nel sito Appunti e genera esercizi
---
Stai girando senza nessuno davanti: non fare domande, prendi la scelta più ragionevole e annotala nel riepilogo.

1. Leggi `.nuovi-file.txt`: un percorso di PDF per riga.
2. Per ogni PDF:
   - smistalo nel corso giusto usando la tabella "Mappa corsi" di CLAUDE.md: confronta il percorso del file con la colonna "Cartella sorgente". Se nessuna riga corrisponde, ricava il corso dal contenuto del PDF, crea la pagina del corso con la stessa struttura delle altre, aggiungi la riga mancante alla tabella e segnalalo nel riepilogo;
   - ricava l'argomento dal contenuto;
   - integra il contenuto nella pagina HTML di quel corso seguendo **esattamente** i criteri della sezione "Criteri appunti" di CLAUDE.md (struttura, stile, formule, ordine cronologico);
   - non riscrivere né riformulare sezioni già esistenti: aggiungi o completa;
   - se il PDF è una versione aggiornata di uno già integrato, aggiorna solo la parte corrispondente;
   - per ogni argomento nuovo aggiungi esercizi con soluzione, come da CLAUDE.md.
3. Se un PDF è una scansione illeggibile o non riguarda la lezione (es. avvisi, orari), saltalo.
4. Alla fine scrivi `logs/ultimo-aggiornamento.md` con: file elaborati, pagine toccate, esercizi aggiunti, file saltati e perché, scelte dubbie da ricontrollare.
