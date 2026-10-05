# CLAUDE.md

Hub di appunti interattivi per il primo anno di Ingegneria Informatica al Politecnico di Milano
(Analisi Matematica 1, Geometria e Algebra Lineare, Fondamenti di Informatica), pubblicato su
GitHub Pages: <https://olix-boop.github.io/appunti/>. Sito statico: HTML, CSS e JavaScript
scritti a mano, nessun framework e nessun passaggio di build. Struttura dei file e procedura per
aggiungere una materia sono nel `README.md`.

## Criteri appunti

### Fonte e convenzioni: comanda il prof

- La fonte sono i PDF in `<materia>/materiale/`: gli appunti dei docenti, identici a quelli presi
  a lezione, quindi gli appunti personali dello studente non servono. Molti sono **scritti a
  mano** e `pdftotext` non li legge: si renderizzano le pagine con PyMuPDF (`pymupdf`) e si
  leggono **tutte**, pagina per pagina.
- Il sito usa **le convenzioni e la notazione del prof**, non quelle dei libri. Casi già
  stabiliti:
  - Analisi: Bernoulli con $h>-1$; argomento principale in $\left[-\frac\pi2,\frac32\pi\right)$
    ($\arctan\frac yx$ se $x>0$, $+\pi$ se $x<0$); $x^{p/q}$ con $q$ dispari definita su tutto
    $\R$; limite scritto con $\ell$ e $\nu_\eps$, e $\forall M>0$ per i limiti infiniti;
    radici $n$-esime con $w=Re^{i\varphi}$, $z=re^{i\theta}$, $h=0,\dots,m-1$ e il ragionamento
    $k=mq+h$; unicità del limite dimostrata con la disuguaglianza triangolare; dopo la permanenza
    del segno due corollari (Lezione 7): $a_n\ge0\Rightarrow a\ge0$ per assurdo, e la proprietà
    del confronto dimostrata da quello applicato a $a_n-b_n$.
  - Geometria: $\K$ per il campo, $\M_{\K}(m,n)$ per le matrici, $\tau_{\vv}$ per le traslazioni,
    gli assiomi di spazio vettoriale numerati (i)–(viii) nel suo ordine, «matrice
    **totalmente ridotta**» (non «forma a scala ridotta»), MEG-J in tre parti (MEG,
    normalizzazione, seconda eliminazione).
  - Se una convenzione del corso differisce dai libri, si scrive quella del corso e si aggiunge
    una nota breve che spiega la differenza.
- **Refusi negli appunti del prof**: si segnalano in piccolo (`small muted`) nel punto in cui
  servono, senza cambiare il suo risultato quando è corretto.
- **Stelline.** Per Analisi `*` = dimostrazione richiesta allo scritto e `**` = all'orale: vengono
  dal programma ufficiale (badge «dim. scritto · n° N» / «dim. orale»). Per Geometria non c'è un
  documento equivalente: le stelline sono **redazionali** («risultato centrale» / «da conoscere»)
  e non vanno mai presentate come richieste del docente.
- Quando un argomento non è ancora negli appunti pubblicati (es. i sottospazi di Geometria), si
  usa la definizione standard e lo si **dichiara** esplicitamente.

### Ordine degli argomenti

- Le sezioni e le voci della checklist (`data/topics.js`) seguono **l'ordine del programma
  ufficiale**; dentro una sezione, l'**ordine delle lezioni** del prof. Gli addendum stanno dopo
  la lezione a cui si riferiscono (es. Geometria §6 MEG-J e §7 equazioni di matrici dopo Cramer).
- Gli id degli argomenti sono prefissati per materia (`s2-07` Analisi, `g2-17` Geometria) e
  **non si rinumerano** con leggerezza: sono le chiavi di `localStorage` con i progressi dello
  studente. Se una sezione cambia numero serve una migrazione una tantum (c'è l'esempio in
  `geometria/data/topics.js`, `geo:migrato-sez4`).
- Ad ogni lezione nuova di Analisi si aggiorna il taglio predefinito `cutoff` in
  `analisi/primo-parziale.html` e si aggiunge la card della lezione nella sezione «Materiale» di
  `analisi/index.html`.

### Struttura di una pagina di sezione

Nell'ordine:

1. `header.topbar`: `☰` (`#menuBtn`), marchio della materia, `nav.topnav` con tutte le pagine
   della materia più «Piano» e «Parziali», pulsante tema `#themeBtn`.
2. `aside.sidebar`: indice della pagina; ogni `h2` e i `h3` importanti hanno una voce (`.sub`
   per i `h3`). Se aggiungi un paragrafo, aggiungi anche la voce.
3. `main`:
   - `.page-head` con `.eyebrow`, `h1` e `p.lead`;
   - un riquadro `box tip` «↳ Dove stiamo andando» o simile;
   - dopo un aggiornamento importante, un riquadro `box warnb` «★ Novità delle Lezioni …» con un
     link a ogni punto nuovo, perché le aggiunte in mezzo alla pagina non si trovano;
   - `h2#checklist` + card di avanzamento + `div#checklistBox`;
   - paragrafi `h2` numerati «N · Titolo», con sottoparagrafi `h3`;
   - `h2#test` «Mettiti alla prova» con `#quizBox`; `h2#errori` «Errori tipici» in un `box trap`;
   - `.btnrow` di navigazione: sezione successiva, precedente, esercizi della sezione.
4. `footer`: «… · Appunti non ufficiali».

Componenti: `box def` (definizione), `box teo` (teorema), `box prop` (proposizione / formula),
`box tip` (intuizione, «perché»), `box trap` (errori, con titolo «✗ …»), `box warnb`
(avvertenze), `box ex`; `details.reveal.proof` con `.steps` per le dimostrazioni **a passi
coperti** (ogni passo: `.step-cue` = la domanda, `.step-content` = la risposta, rivelata al clic);
`.widget` per i grafici interattivi (`plot.js`); `.tablewrap` attorno a ogni tabella.

### Stile dei testi

- Italiano, registro da compagno di corso bravo: si spiega il **perché**, non solo il come.
- Ogni dimostrazione d'esame è a passi coperti, e le domande dei passi sono quelle che uno
  studente si fa davvero («Qual è la scelta furba di ε?», «Dove entra l'ipotesi?»).
- Ogni sezione ha i suoi errori tipici, e i controesempi da citare all'esame stanno in un riquadro.
- Esempi presi dagli appunti del prof quando esistono, segnalati con «(Lezione N)» o «Esempio N
  degli appunti».

### Formule

- Sul sito: **KaTeX** da CDN con auto-render (`AM.typeset` in `assets/js/app.js`). Le macro
  (`\R \N \Z \Q \C \K \vx \vb \vv \vzero \M \rg \eps \Real \Imag …`) sono dichiarate lì: se ne
  usi una nuova, va aggiunta lì.
- Nei file `data/*.js` le stringhe con LaTeX sono **sempre** template `String.raw` (`` r`…` ``),
  mai stringhe tra apici o doppi apici: altrimenti `\g`, `\b`, `\v` vengono mangiati come escape.
- **Mai `<` seguito da una lettera dentro una formula** (`$x_1<x_2$`): il browser lo prende per un
  tag e il resto del paragrafo sparisce senza errori. Si scrive `\lt` (anche `$r\lt n$`).
- Le formule **non si disegnano nei `<option>`**: lì `AM.testoPiano` le converte in Unicode
  (x², ∑, √n, 1/n). Usa LaTeX semplice (`\dfrac`, `^{}`, `_{}`, `\sqrt`, `\operatorname{}`).
- Ogni contenitore con scorrimento orizzontale tiene dentro le formule grazie a
  `.katex { position: relative }`: non toglierlo, altrimenti le tabelle allargano la pagina sul
  telefono.

### Esercizi, quiz, flashcard: formato e difficoltà

- **Esercizi** (`data/esercizi.js`): `{ id: 'E2.11', sez, tema, d, t, hints: [...], sol }`.
  - `d` = difficoltà 1–3: 1 applicazione diretta, 2 tipico d'esame (la maggioranza), 3 richiede
    un'idea o unisce più argomenti.
  - 2–4 `hints` **progressivi**: il primo orienta, l'ultimo quasi risolve.
  - `sol` completa e in passi, con il **controllo** finale (sostituzione, prodotto, verifica) e,
    quando serve, una «Morale» o «Attenzione».
  - Gli id proseguono la numerazione della sezione e non si riusano.
- **Quiz** (`data/quiz.js`): `{ id: 'Q54', sez, tag, q, opts: [4 opzioni], a: 0, why }`.
  - La risposta giusta è **sempre la prima** (`a: 0`): le opzioni vengono mescolate a runtime.
  - I distrattori sono errori plausibili, cioè le idee sbagliate tipiche; `why` spiega perché la
    giusta è giusta **e** perché le altre sono sbagliate.
- **Flashcard** (`analisi/data/definizioni.js`): `{ id: 'D50', sez, topic, t, d }`; `topic`
  collega la scheda alla voce della checklist, che serve all'allenamento quotidiano (ripetizione
  dilazionata SM-2 in `assets/js/srs.js`) per rispettare il taglio «fin dove siete arrivati».
- **Teoremi** (`data/teoremi.js`): `{ id, n, sez, mark, q, titolo, enunciato, idea, steps:
  [{cue, body}], note }`; `n` è il numero della dimostrazione nel programma ufficiale, se c'è.
- **Tutti i conti numerici si verificano** prima di scriverli: aritmetica esatta con
  `assets/js/meg.js` (`MEG.riduci`, `MEG.riduciJ`) da Node, oppure a mano con il controllo
  finale. Mai pubblicare una soluzione non verificata.

### Verifiche in PDF (fuori dal sito)

- Vanno sul Desktop, **non** nel repository e non sul sito.
- Struttura: copertina con istruzioni; Parte A vero/falso con motivazione; Parte B a blocchi, ognuno
  con un **Promemoria** della teoria minima e gli esercizi spezzati in passi a), b), c); riquadri
  «Fermati e rifletti» e «Trappola»; **indizi** e **soluzioni** in fondo, su pagine separate;
  griglia di autovalutazione che rimanda alle sezioni del sito.
- Resa: HTML stampato con Chrome headless; formule con **MathJax in SVG** (`fontCache: 'none'`),
  non KaTeX, perché i font web nel PDF si vedono male in molti lettori; font di sistema (Cambria,
  Segoe UI); margini ampi e **cornice disegnata dopo la stampa** con PyMuPDF su ogni pagina,
  perché le app per telefono ritagliano il bianco e i margini spariscono.
- Prima di consegnare: controllo del testo estratto (nessun `$` o comando LaTeX rimasto, nessun
  errore MathJax), font incorporati, margini misurati, anteprima delle pagine dense.

### Prima di pubblicare

- Dopo modifiche a CSS o JS: `?v=AAAAMMGG` (con suffisso a, b, c…) su **tutti** i riferimenti
  locali, sennò il browser serve il file vecchio.
- Verifica nel browser (server `sito` in `.claude/launch.json`, porta 8765), non solo a codice:
  nessun `.katex-error`, nessun testo visibile con `$` o `\frac` rimasto, nessun tag spurio, nessun
  id duplicato; per le modifiche di layout anche a 375px di larghezza, dove la pagina non deve
  superare lo schermo e la riga di pulsanti della `topnav` deve essere toccabile.
- Commit in italiano, all'imperativo, con il perché nel corpo; poi push su `main`. Lo studente ha
  chiesto commit e push senza conferma ogni volta.

### Automazione dei PDF nuovi

- All'accesso a Windows (con 10 minuti di ritardo) l'attività pianificata «Aggiorna Appunti»
  lancia `.claude/aggiorna-appunti.ps1`: cerca PDF nuovi o cambiati in `analisi/materiale/` e
  `geometria/materiale/`, avvia `claude -p "/aggiorna-appunti"` (comando in
  `.claude/commands/aggiorna-appunti.md`), poi fa commit e push. Log in `logs/` (ignorata da git).
- I PDF già elaborati sono registrati in `.appunti-state.json` (percorso → dimensione, ignorato da
  git). **Se integri un PDF a mano in una sessione, aggiungilo lì**, altrimenti al prossimo
  accesso l'automazione lo rielabora.
- In Windows PowerShell 5.1 non chiamare comandi esterni con `2>$null` o `2>&1` quando
  `$ErrorActionPreference = "Stop"`: ogni riga su stderr, anche un avviso di git, diventa un
  errore fatale. Nello script c'è la funzione `Esegui` apposta.

### Cose da non fare

- Non usare `<` seguito da una lettera nelle formule; non usare stringhe non `String.raw` per il
  LaTeX nei dati.
- Non dare lo **stesso id** a un titolo e a un contenitore (`h2#x` + `div#x`): `getElementById`
  prende il titolo e ci scrive dentro. I contenitori si chiamano `…Box`.
- Non generare HTML o JS con LaTeX dentro script Python o heredoc con escape: `\v`, `\b`, `\x`
  diventano caratteri di controllo. Si usa l'editor di file, oppure si leggono i blocchi da file.
- Non nascondere la `topnav` sul telefono: è l'unico modo di raggiungere le altre pagine.
- Non spacciare le stelline di Geometria per richieste ufficiali.
- Non usare le convenzioni dei libri quando il prof ne usa un'altra.
- Non rinumerare gli id degli argomenti senza migrare i progressi in `localStorage`.
- Non togliere i PDF dei docenti da `materiale/`: la decisione di includerli è dello studente ed è
  chiusa.
- Non mettere le verifiche in PDF nel repository.
