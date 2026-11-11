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
  mano** e `pdftotext` non li legge, e leggerli come immagini consuma troppi token. Si leggono
  **tutti**, pagina per pagina, così:
  1. prima si trascrivono con `python strumenti/trascrivi.py "<pdf>"` (API di Gemini, chiave in
     `GEMINI_API_KEY`): il testo va in `trascrizioni/<materia>/` (esclusa da git), e se esiste
     già non si rifà;
  2. si lavora sul `.md`. Si guarda l'immagine (PyMuPDF, solo la pagina o il ritaglio che serve)
     **soltanto** per i punti segnati `[?]` o `[!?`, per le figure, e per ogni matrice o conto che
     non torna alla verifica con Node;
  3. la trascrizione non è una fonte: i refusi si segnalano solo dopo averli visti sull'originale.
  Se il modello predefinito risponde 503 (sovraccarico) o 429 (quota del piano gratuito), prima
  di arrendersi si prova un altro modello con `--modello` (`--modelli` li elenca): il 19/10/2026
  `gemini-3.5-flash` ha retto 11 pagine, poi `gemini-3.5-flash-lite` le altre, con qualità
  sufficiente ma qualche indice sbagliato in più. La quota gratuita vale circa 20 richieste al
  giorno **per modello**: un PDF lungo si divide su più modelli, perché lo script riprende dalle
  pagine mancanti. Il 10/11/2026 `gemini-3.8-flash` e `gemini-3.7-flash` davano solo 429/503,
  `gemini-3.5-flash` funzionava ma a circa due minuti a pagina e `gemini-3.5-flash-lite` era
  veloce: per lavorare in parallelo si copia il PDF nello scratchpad con due nomi diversi e si
  lancia una metà delle pagine per copia, su modelli diversi (due processi sullo stesso `.md` si
  cancellano a vicenda le pagine). L'11/11/2026 `gemini-2.5-flash` e `gemini-2.5-flash-lite` non
  esistevano più; hanno retto `gemini-3.5-flash-lite`, `gemini-3.1-flash-lite`,
  `gemini-flash-lite-latest` e `gemini-3.1-flash-lite-preview`, mentre `gemini-3.6-flash` si è
  fermato in 429 dopo 14 pagine (le ultime 3 lette dalle immagini). Sulle pagine quasi vuote Gemini può inventare testo leggendo l'inchiostro
  dell'altra facciata: un esercizio senza enunciato si controlla sull'immagine (è successo con
  l'esercitazione del 14 ottobre, p. 14). Se lo script non è utilizzabile (manca la
  chiave, quota finita su tutti i modelli) si torna alle immagini in griglie 2×2 a risoluzione
  moderata.
- Il sito usa **le convenzioni e la notazione del prof**, non quelle dei libri. Casi già
  stabiliti:
  - Analisi: Bernoulli con $h>-1$; argomento principale in $\left[-\frac\pi2,\frac32\pi\right)$
    ($\arctan\frac yx$ se $x>0$, $+\pi$ se $x<0$); $x^{p/q}$ con $q$ dispari definita su tutto
    $\R$; limite scritto con $\ell$ e $\nu_\eps$, e $\forall M>0$ per i limiti infiniti;
    radici $n$-esime con $w=Re^{i\varphi}$, $z=re^{i\theta}$, $h=0,\dots,m-1$ e il ragionamento
    $k=mq+h$; unicità del limite dimostrata con la disuguaglianza triangolare; dopo la permanenza
    del segno due corollari (Lezione 7): $a_n\ge0\Rightarrow a\ge0$ per assurdo, e la proprietà
    del confronto dimostrata da quello applicato a $a_n-b_n$. Seconda parte: limiti di funzioni
    con $\delta=\delta_{\eps,x_0}$ e gli intorni $I_r(x_0)$, $I_r^\pm(x_0)$; le quindici
    definizioni di limite numerate (1)–(15) come nella Lezione 12; $\nu_\eps>0$ per
    $x\to+\infty$ e $\nu_\eps\lt0$ per $x\to-\infty$; permanenza del segno con $f(x)>\frac M2$;
    $\log$ per il logaritmo naturale, $\operatorname{tg}$, $\operatorname{arctg}$.
  - Geometria: $\K$ per il campo, $\M_{\K}(m,n)$ per le matrici, $\tau_{\vv}$ per le traslazioni,
    gli assiomi di spazio vettoriale numerati (i)–(viii) nel suo ordine, «matrice
    **totalmente ridotta**» (non «forma a scala ridotta»), MEG-J in tre parti (MEG,
    normalizzazione, seconda eliminazione); **teorema di Cramer** = «soluzione unica $\iff r(A)=n$»
    (Lezione 2), **regola di Cramer** = $x_j=\det A_j/\det A$ (Lezione 9); $\langle\vx,\vy\rangle$
    per il prodotto scalare standard, $C^{T}$ (non $\operatorname{adj}$) nell'inversa, «fascio»
    (non «fascia»), $A=[\vec v_1|-\vec v_2]$ per l'intersezione di due rette. Diagonalizzazione
    (Lezione 10): $P_A(\lambda)=\det(A-\lambda I)$ (non $\det(\lambda I-A)$), $W_\lambda$ per
    l'autospazio, $m_a$ e $m_g$, autovalore **regolare**/**irregolare** se $m_g=m_a$ o no,
    $S^{-1}AS=D$ con gli autovettori nelle colonne di $S$, «diagonalizzabile» senza campo = su $\C$.
    La parte 2 della Lezione 10 rimanda a «Lezione 8» e «Lezione 7» con la numerazione del 2024.
  - Se una convenzione del corso differisce dai libri, si scrive quella del corso e si aggiunge
    una nota breve che spiega la differenza.
- **Refusi negli appunti del prof**: si segnalano in piccolo (`small muted`) nel punto in cui
  servono, senza cambiare il suo risultato quando è corretto.
- **Stelline.** Per Analisi `*` = dimostrazione richiesta allo scritto e `**` = all'orale: vengono
  dal programma ufficiale (badge «dim. scritto · n° N» / «dim. orale»). Per Geometria non c'è un
  documento equivalente: le stelline sono **redazionali** («risultato centrale» / «da conoscere»)
  e non vanno mai presentate come richieste del docente.
- Quando un argomento non è ancora negli appunti pubblicati (com'era il metodo dei minori di
  Kronecker, usato dal tutor di Geometria il 7 ottobre e arrivato solo con la Lezione 9), si usa
  la definizione standard e lo si **dichiara** esplicitamente; appena il prof lo tratta, si
  allinea il sito alla sua versione.
- Anche le soluzioni dei **tutor** si verificano: se un passaggio è sbagliato si corregge e lo si
  segnala in piccolo (`small muted`), come per i refusi del prof.

### Ordine degli argomenti

- Le sezioni e le voci della checklist (`data/topics.js`) seguono **l'ordine del programma
  ufficiale**; dentro una sezione, l'**ordine delle lezioni** del prof. Gli addendum stanno dopo
  la lezione a cui si riferiscono (es. Geometria §6 MEG-J e §7 equazioni di matrici dopo Cramer).
- Gli id degli argomenti sono prefissati per materia (`s2-07` Analisi, `g2-17` Geometria) e
  **non si rinumerano** con leggerezza: sono le chiavi di `localStorage` con i progressi dello
  studente. Se una sezione cambia numero serve una migrazione una tantum (c'è l'esempio in
  `geometria/data/topics.js`, `geo:migrato-sez4`).
- Ad ogni lezione nuova di Analisi si aggiunge la card della lezione nella sezione «Materiale» di
  `analisi/seconda.html` (fino alla Lezione 11 stavano in `analisi/index.html`).
- **Seconda parte di Analisi** (dalla Lezione 12): casa `analisi/seconda.html`, sezioni
  `analisi/sezioni/4-limiti.html` e seguenti, programma in `analisi/data/topics2.js`, registrato
  come materia a sé (`analisi2`) perché il blocco «Analisi primo parziale» dell'hub resti fermo alle
  Sezioni 1–3. Quiz, esercizi, quesiti, teoremi e `voce.js` restano nei file condivisi, con
  `sez: 4` e seguenti; nelle pagine condivise (Teoremi, Quesiti, Esercizi) ogni sezione nuova
  vuole il suo chip di filtro (e in `teoremi.html` anche l'elenco `[1, 2, 3, 4…]` dell'indice).
  Le pagine della seconda parte hanno la topnav corta: Piano (`seconda.html`), le sezioni nuove,
  Teoremi, Quesiti, Domande, Esercizi, Prima parte. I quesiti della seconda parte si scrivono man
  mano che il prof spiega l'argomento, non tutti in anticipo.

### Struttura di una pagina di sezione

Nell'ordine:

1. `header.topbar`: `☰` (`#menuBtn`), marchio della materia, `nav.topnav` con tutte le pagine
   della materia più «Piano», pulsante tema `#themeBtn`.
2. `aside.sidebar`: indice della pagina; ogni `h2` e i `h3` importanti hanno una voce (`.sub`
   per i `h3`). Se aggiungi un paragrafo, aggiungi anche la voce.
3. `main`:
   - `.page-head` con `.eyebrow`, `h1` e `p.lead`;
   - un riquadro `box tip` «↳ Dove stiamo andando» o simile;
   - dopo un aggiornamento importante, un riquadro `box warnb` «★ Novità delle Lezioni …» con un
     link a ogni punto nuovo, perché le aggiunte in mezzo alla pagina non si trovano;
   - Analisi: `h2#checklist` + card di avanzamento + `div#checklistBox`. Geometria: niente checklist,
     solo `h2#mappa` + `div#mappaBox`, riempito da `AM.mappaCapitolo` (vedi «Mappa e prima lettura»);
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
- **Flashcard** (`analisi/data/definizioni.js`): `{ id: 'D50', sez, topic, t, d }`. Dal 06/11/2026
  nessuna pagina le mostra: l'Allenamento è stato eliminato con i parziali, e la pagina col suo motore
  `assets/js/srs.js` si recupera dalla storia di git se servirà per la sessione.
- **Teoremi** (`data/teoremi.js`): `{ id, n, sez, mark, q, titolo, enunciato, idea, steps:
  [{cue, body}], note }`; `n` è il numero della dimostrazione nel programma ufficiale, se c'è.
- **Tutti i conti numerici si verificano** prima di scriverli: aritmetica esatta con
  `assets/js/meg.js` (`MEG.riduci`, `MEG.riduciJ`) da Node, oppure a mano con il controllo
  finale. Mai pubblicare una soluzione non verificata.

### Mappa e prima lettura (Geometria)

- Lo studente ha chiesto di togliere le checklist di Geometria: il capitolo si riassume in **un punto
  solo**, cioè una frase, la mappa dei concetti e una spunta unica. La spunta scrive tutte le voci di
  `data/topics.js` della sezione, così le barre di avanzamento restano vere e gli id non cambiano.
- I dati stanno in `geometria/data/`: `mappe.js` per le dieci sezioni; `primalettura.js` e `schemi.js`
  per la Sezione 5, `primalettura-altre.js` e `schemi-altre.js` per le altre nove. La logica è in
  `assets/js/capitolo.js`, lo stile in `assets/css/capitolo.css`.
  Nella mappa i prerequisiti di un nodo stanno sempre in una riga più in alto, e `a` è un'ancora che esiste.
  Al massimo **tre nodi per riga**: con quattro, sul telefono la riga va a capo e le frecce passano
  dietro i nodi della seconda metà.
- Le statistiche d'esame stanno in `geometria/data/esami.js` (pagina `geometria/esami.html`): quando
  arriva una lezione su un argomento segnato «non ancora a lezione», si aggiornano `sez` di
  `argomenti` e `tipi` e il `sito` delle voci di `teoria`.
- La **prima lettura** serve a studiare il capitolo la prima volta. Ogni paragrafo, nell'ordine del prof,
  è uno strato semplice: **una frase, uno schema, pochi punti brevi, una domanda**. Le definizioni del
  prof restano nella pagina dietro un clic («versione degli appunti»), e «Mostra tutto il capitolo»
  riporta la pagina completa. Non riscrive gli appunti, ci aggiunge sopra uno strato.
- Lo studente ha chiesto di semplificare il più possibile e di avere **uno schema in ogni paragrafo**.
  Gli schemi sono SVG fermi: spiegano l'idea, non decorano, e si leggono anche a 375px. Le coordinate
  degli esempi si calcolano nel codice, e ogni schema si guarda davvero: un cerchio sul pivot sbagliato
  si vede solo così.
- Ogni `h2` numerato di una sezione ha il suo passo, nello stesso ordine: se aggiungi un paragrafo agli
  appunti (Lezione nuova), aggiungi anche il passo, lo schema e il nodo della mappa, e controlla sul
  browser che il passo si veda. Le parti da seconda lettura si elencano in `seconda`.

### Laboratorio (`geometria/laboratorio.html`)

- Ogni round chiede una **risposta o una mossa prima** di mostrare il risultato, e un errore mostra
  dove porta la risposta sbagliata. Lo studente non vuole grafici decorativi né animazioni che
  partono da sole: si muove solo ciò che muove lui.
- I round stanno in `geometria/data/laboratorio.js`, la logica in `assets/js/laboratorio.js`, lo stile
  in `assets/css/laboratorio.css`. I numeri dei round si verificano con Node, come tutti gli altri.
- Il risultato di un trascinamento si controlla **al rilascio**: passare sopra la soluzione non basta.
- Le prove nel browser scrivono i progressi in `localStorage` (chiavi `am1:lab:l1`–`l4`): dopo aver
  collaudato vanno cancellate, sennò lo studente trova i round già fatti.

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
- Verifica nel browser (server `sito` in `.claude/launch.json`, porta 8766), non solo a codice:
  nessun `.katex-error`, nessun testo visibile con `$` o `\frac` rimasto, nessun tag spurio, nessun
  id duplicato; per le modifiche di layout anche a 375px di larghezza, dove la pagina non deve
  superare lo schermo e la riga di pulsanti della `topnav` deve essere toccabile.
- Commit in italiano, all'imperativo, con il perché nel corpo; poi push su `main`. Lo studente ha
  chiesto commit e push senza conferma ogni volta.

### Sincronizzazione con WeBeep (a richiesta)

Non c'è nessuna automazione: l'aggiornamento si fa in sessione, quando lo studente chiede di
«controllare gli appunti». WeBeep Sync scarica il materiale dei corsi in `C:\WeBeep`.

| Corso | Cartella WeBeep | Pagine | PDF copiati in |
|---|---|---|---|
| Analisi Matematica 1 | `C:\WeBeep\ANALISI MATEMATICA 1` | `analisi/` | `analisi\materiale` |
| Geometria e Algebra Lineare | `C:\WeBeep\[2026-27] GEOMETRIA E ALGEBRA LINEARE 082747 (GUMENYUK PAVEL)` | `geometria/` | `geometria\materiale` |
| Fondamenti di Informatica | `C:\WeBeep\FONDAMENTI DI INFORMATICA` | `informatica/` | — (da decidere) |

Procedura:

1. **Cosa c'è di nuovo**: confronta i PDF della cartella WeBeep del corso con quelli in
   `materiale/` per **contenuto** (SHA-256), non per nome. Un PDF con lo stesso nome ma impronta
   diversa è una versione aggiornata dal prof. In PowerShell i percorsi vanno sempre passati con
   `-LiteralPath`: la cartella di Geometria ha le parentesi quadre, che altrimenti sono caratteri jolly.
2. **Cosa non è materiale da integrare**: esami degli anni precedenti, temi d'esame vecchi,
   edizioni passate dei corsi, file vuoti come `000BLANK.pdf`. Si elencano allo studente, non si
   integrano come lezioni.
3. **Copia** i PDF nuovi nella cartella `materiale/` del corso: le pagine li linkano da lì.
4. **Integra** ogni lezione seguendo i «Criteri appunti», nell'ordine delle lezioni; le note delle
   esercitazioni diventano esercizi con la soluzione del prof.
5. **Riepilogo** allo studente: file trovati, cosa è stato integrato e dove, cosa è stato saltato e
   perché.

`informatica/` è un'app a pagina singola presa da un altro repository, con una struttura che i
«Criteri appunti» non descrivono: va deciso con lo studente come integrarla prima di farlo.

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
