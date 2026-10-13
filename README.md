# Appunti — Ingegneria Informatica, Politecnico di Milano

Appunti interattivi del primo anno, raccolti in un unico sito.

👉 **<https://olix-boop.github.io/appunti/>**

| Materia | Contenuto | Stato |
|---|---|---|
| [Analisi Matematica 1](https://olix-boop.github.io/appunti/analisi/) | Numeri reali e complessi · successioni e limiti · serie numeriche | prima parte completa (primo parziale) |
| [Geometria e Algebra Lineare](https://olix-boop.github.io/appunti/geometria/) | Preliminari · sistemi lineari e MEG · matrici e invertibilità · spazi vettoriali · numeri complessi · applicazioni lineari e rango | programma svolto finora |
| [Fondamenti di Informatica](https://olix-boop.github.io/appunti/informatica/) | Algoritmi · macchina astratta C · istruzioni · array e stringhe | 5 capitoli |

## Cosa c'è dentro

Non è materiale da leggere, è materiale da **usare**:

- **dimostrazioni a passi coperti** — provi a ricordare il passo successivo, poi lo riveli;
- **esercizi con suggerimenti progressivi** — un aiuto alla volta, lo svolgimento solo alla fine;
- **widget interattivi** — piano di Argand, visualizzatore ε–N, gerarchia degli infiniti,
  **MEG passo per passo in aritmetica esatta**, Rouché-Capelli al variare del termine noto,
  esecutori simulati per gli algoritmi in C;
- **flashcard con ripetizione dilazionata** (Leitner: 1, 2, 4, 8, 16, 32 giorni);
- **simulazione d'esame cronometrata** per Analisi, con le soglie reali della prova in itinere.

L'avanzamento (argomenti spuntati, statistiche dei test, stato del ripasso) è salvato in
`localStorage`: resta sul dispositivo e non viene inviato da nessuna parte.

## Struttura

```
index.html                 hub: le tre materie
assets/
  css/style.css            tema chiaro/scuro, layout, componenti  (condiviso)
  js/materie.js            registro delle materie e checklist     (condiviso)
  js/app.js                tema, KaTeX, reveal, progressi, quiz, flashcard, timer
  js/plot.js               motore di grafici su canvas, senza dipendenze
  js/meg.js                eliminazione di Gauss su frazioni esatte
analisi/
  index.html teoremi.html quesiti.html esercizi.html simulazione.html
  sezioni/1-numeri.html 2-successioni.html 3-serie.html
  data/                    topics · teoremi · quesiti · esercizi · quiz
  materiale/               PDF del corso
geometria/
  index.html teoremi.html esercizi.html
  sezioni/0-preliminari.html 1-sistemi.html 2-matrici.html 3-complessi.html
  data/                    topics · teoremi · esercizi · quiz
  materiale/               PDF del corso
informatica/               single-page app autonoma, installabile come PWA
```

**I contenuti stanno tutti in `<materia>/data/`**: per aggiungere materiale non serve toccare l'HTML.

### Aggiungere una materia

1. crea `<materia>/data/topics.js` che chiama `AM.registraMateria({...})` con `key`, `base`,
   `prefisso` (la lettera iniziale degli id degli argomenti) e l'elenco delle sezioni;
2. aggiungi una card in `index.html` con `data-progress-for="<key>"`;
3. le barre di avanzamento, le checklist e il riepilogo dell'hub si aggiornano da soli.

Gli id degli argomenti vanno prefissati per materia (`s1-01` per Analisi, `g1-01` per Geometria),
così le chiavi di `localStorage` non collidono.

### Aggiungere contenuto a una materia esistente

- **nuovo argomento** → una voce in `data/topics.js`;
- **nuovo teorema** → un oggetto in `data/teoremi.js` con `steps: [{cue, body}]`;
- **nuovo esercizio** → un oggetto in `data/esercizi.js` con `hints: []` e `sol`;
- **nuova domanda** → un oggetto in `data/quiz.js` (la risposta giusta va in `a`, le opzioni
  vengono mescolate a ogni giro).

Nei file dati le stringhe con LaTeX usano ``r`…` `` (`String.raw`), così i backslash non vanno
raddoppiati. Le macro disponibili (`\R`, `\C`, `\K`, `\vx`, `\vb`, `\vzero`, `\rg`, …) sono
dichiarate in `assets/js/app.js`.

## Dipendenze

Solo [KaTeX](https://katex.org) da CDN per le formule e Google Fonts. Tutto il resto — grafici,
MEG, flashcard, quiz, timer — è JavaScript scritto a mano: niente framework, niente build step.
Basta aprire `index.html`, oppure:

```bash
python -m http.server 8765
```

## Note

Appunti **non ufficiali**, scritti come supporto allo studio personale. In caso di discrepanza
fanno fede i programmi ufficiali, le lezioni e i testi indicati nelle bibliografie dei corsi.

Per Analisi, le marcature `(*)` e `(**)` sulle dimostrazioni vengono dal **programma ufficiale**
della Prof. Meglioli. Per Geometria non esiste un documento equivalente: lì le stelline sono
**redazionali** e indicano il peso del risultato, non una richiesta della docenza.

I PDF nelle cartelle `materiale/` sono materiale didattico dei rispettivi docenti.
