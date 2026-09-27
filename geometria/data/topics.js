/* ============================================================
   topics.js — programma di Geometria e Algebra Lineare
   Fonte: lezioni del Prof. Pavel Gumenyuk (Politecnico di Milano)
   Libro: E. Schlesinger, "Algebra lineare e geometria" [ALG]
   Il campo q rimanda alle pagine di [ALG] indicate a lezione.
   Macro: \K = campo, \vx \vb \vv \vzero = vettori (vedi app.js)
   ============================================================ */
(function () {
  'use strict';
  const r = String.raw;

  const SEZIONI = [
    {
      n: 0,
      slug: 'sezioni/0-preliminari.html',
      titolo: 'Preliminari e linguaggio',
      sommario: r`Il vocabolario minimo: insiemi, quantificatori, lo spazio $\K^n$ e il prodotto scalare standard.`,
      topics: [
        { id: 'g0-01', t: r`Notazione per gli insiemi; $:=$ contro $=$; $\in$ contro $\subseteq$`, q: 'prelim.' },
        { id: 'g0-02', t: r`Gli insiemi numerici $\N,\N_0,\Z,\Q,\R,\C$ nella notazione del corso`, q: 'prelim.' },
        { id: 'g0-03', t: r`Lo spazio $\R^n$: definizione e interpretazione geometrica`, q: 'prelim.' },
        { id: 'g0-04', t: r`Operazioni in $\R^n$: somma e prodotto per uno scalare`, q: 'prelim.' },
        { id: 'g0-05', t: r`Prodotto scalare standard $\vx\cdot\vy=\sum_{k} x_k y_k$`, q: 'prelim.' },
        { id: 'g0-06', t: r`Lo spazio $\C^n$; perché in questo corso non vi si definisce il prodotto scalare`, q: 'prelim.' },
        { id: 'g0-07', t: r`Quantificatori $\forall$, $\exists$, $\exists!$`, q: 'prelim.' },
        { id: 'g0-08', t: r`Il campo $\K$: convenzione per enunciati validi sia in $\R$ sia in $\C$`, q: 'Lez. 1' }
      ]
    },
    {
      n: 1,
      slug: 'sezioni/1-sistemi.html',
      titolo: 'Sistemi lineari, matrici e metodo di Gauss',
      sommario: r`Dal sistema alla matrice completa, e un algoritmo che li risolve tutti: il MEG.`,
      topics: [
        { id: 'g1-01', t: r`Sistema lineare di $m$ equazioni in $n$ incognite; coefficienti e termini noti`, q: 'pp. 67-74' },
        { id: 'g1-02', t: r`Soluzione di un sistema; le soluzioni vivono in $\K^n$`, q: 'pp. 67-74' },
        { id: 'g1-03', t: r`Sistemi compatibili e incompatibili; sistemi omogenei`, q: 'pp. 67-74' },
        { id: 'g1-04', t: r`Matrici: tipo $m\times n$, righe, colonne, notazione $A=[a_{ij}]$`, q: 'pp. 67-74' },
        { id: 'g1-05', t: r`Matrice dei coefficienti $A$ e matrice completa $[A\,|\,\vb]$`, q: 'pp. 67-74' },
        { id: 'g1-06', t: r`Forma matriciale $A\vx=\vb$`, q: 'pp. 84-94' },
        { id: 'g1-07', t: r`Operazioni elementari sulle righe; sistemi equivalenti`, mark: '*', q: 'pp. 84-94' },
        { id: 'g1-08', t: r`Numero di zeri iniziali $\ell_i$; definizione di matrice a scala`, q: 'pp. 84-94' },
        { id: 'g1-09', t: r`Pivot di una matrice a scala`, q: 'pp. 84-94' },
        { id: 'g1-10', t: r`Teorema (MEG): ogni matrice si riduce a scala in un numero finito di operazioni`, q: 'pp. 84-94' },
        { id: 'g1-11', t: r`Sostituzione all'indietro`, q: 'pp. 84-94' },
        { id: 'g1-12', t: r`Incognite di base (pivotali) e incognite libere`, q: 'pp. 84-94' },
        { id: 'g1-13', t: r`Il criterio dello 0-pivot: quando il sistema è incompatibile`, mark: '*', q: 'pp. 84-94' },
        { id: 'g1-14', t: r`Rango $r$ come numero di pivot; $r\le\min\{m,n\}$`, mark: '*', q: 'pp. 84-94' }
      ]
    },
    {
      n: 2,
      slug: 'sezioni/2-matrici.html',
      titolo: 'Algebra delle matrici e invertibilità',
      sommario: r`Le matrici come oggetti algebrici, la struttura delle soluzioni, e quando un sistema ha una sola soluzione.`,
      topics: [
        { id: 'g2-01', t: r`Somma di matrici e prodotto per uno scalare; lo spazio $\K^{m\times n}$`, q: 'pp. 75-81' },
        { id: 'g2-02', t: r`Prodotto righe per colonne; condizione sui tipi`, q: 'pp. 75-81' },
        { id: 'g2-03', t: r`Il prodotto non è commutativo; divisori dello zero`, mark: '*', q: 'pp. 75-81' },
        { id: 'g2-04', t: r`Associatività e distributività del prodotto`, mark: '**', q: 'pp. 75-81' },
        { id: 'g2-05', t: r`Matrice trasposta; $(AB)^{T}=B^{T}A^{T}$`, mark: '**', q: 'pp. 75-81' },
        { id: 'g2-06', t: r`Matrici quadrate, diagonali, triangolari; matrice identità $I_n$`, q: 'pp. 75-81' },
        { id: 'g2-07', t: r`Prodotto per una matrice diagonale; $AI_n=A$ e $I_nB=B$`, mark: '**', q: 'pp. 75-81' },
        { id: 'g2-08', t: r`Struttura delle soluzioni: $\vx=\vx_0+$ soluzione dell'omogeneo`, mark: '*', q: 'pp. 94-105' },
        { id: 'g2-09', t: r`Il sistema omogeneo $A\vx=\vzero$ e i suoi $n-r$ parametri liberi`, mark: '*', q: 'pp. 94-105' },
        { id: 'g2-10', t: r`Teorema di Rouché-Capelli`, mark: '*', q: 'pp. 94-105' },
        { id: 'g2-11', t: r`Discussione di un sistema al variare di un parametro`, q: 'pp. 94-105' },
        { id: 'g2-12', t: r`Matrice inversa: definizione e unicità`, mark: '*', q: 'cap. 3 §1-5' },
        { id: 'g2-13', t: r`Condizioni di invertibilità; $(AB)^{-1}=B^{-1}A^{-1}$`, mark: '*', q: 'cap. 3 §1-5' },
        { id: 'g2-14', t: r`Calcolo dell'inversa con il MEG: $[A\,|\,I]\longrightarrow[I\,|\,A^{-1}]$`, q: 'cap. 3 §1-5' },
        { id: 'g2-15', t: r`Determinante $2\times2$ e $3\times3$; sviluppo di Laplace`, q: 'cap. 3 §1-5' },
        { id: 'g2-16', t: r`Teorema di Cramer`, mark: '*', q: 'cap. 3 §1-5' },
        { id: 'g2-17', t: r`Eliminazione di Gauss-Jordan (MEG-J); forma a scala <em>ridotta</em>`, q: 'cap. 3 §6' },
        { id: 'g2-18', t: r`Equazioni con matrici incognite: $AX=B$, $XA=B$, casi misti`, q: 'Lez. 2 tres' }
      ]
    },
    {
      n: 3,
      slug: 'sezioni/3-spazi.html',
      titolo: 'Vettori e spazi vettoriali',
      sommario: r`Dai vettori disegnati con le frecce alla definizione astratta: otto assiomi che si applicano anche alle matrici e ai polinomi.`,
      topics: [
        { id: 'g3-01', t: r`Invertibilità del prodotto: $AB$ invertibile $\iff$ lo sono $A$ e $B$`, mark: '*', q: 'Lez. 3' },
        { id: 'g3-02', t: r`Segmenti orientati ed equipollenza; vettori liberi`, q: 'ALG §1.3' },
        { id: 'g3-03', t: r`Traslazioni $\tau_{\vv}$; somma di due vettori con la regola del triangolo`, mark: '*', q: 'ALG §1.3' },
        { id: 'g3-04', t: r`La somma è ben posta: non dipende dal punto $A$ scelto`, mark: '*', q: 'ALG §1.3' },
        { id: 'g3-05', t: r`Vettore nullo, vettore opposto, differenza`, q: 'ALG §1.3' },
        { id: 'g3-06', t: r`Prodotto di un vettore per uno scalare; vettori paralleli`, q: 'ALG §1.3' },
        { id: 'g3-07', t: r`Componenti: i vettori del piano si identificano con $\R^2$, quelli dello spazio con $\R^3$`, q: 'ALG §1.3' },
        { id: 'g3-08', t: r`Definizione di spazio vettoriale su $\K$: le due operazioni`, mark: '*', q: 'ALG §4.1' },
        { id: 'g3-09', t: r`Gli otto assiomi (i)–(viii)`, mark: '*', q: 'ALG §4.1' },
        { id: 'g3-10', t: r`Esempi: $\R^n$, $\C^n$, i vettori liberi del piano e dello spazio`, q: 'ALG §4.1' },
        { id: 'g3-11', t: r`Lo spazio $\M_{\K}(m,n)$ delle matrici`, q: 'ALG §4.1' },
        { id: 'g3-12', t: r`Altri esempi: polinomi, funzioni, successioni`, q: 'ALG §4.2' },
        { id: 'g3-13', t: r`Conseguenze degli assiomi: unicità dello zero, $0\cdot\vv=\vzero$, $(-1)\vv=-\vv$`, mark: '**', q: 'ALG §4.1' },
        { id: 'g3-14', t: r`Applicazioni $f:X\to Y$: dominio, codominio, immagine`, q: 'ALG p. 122' },
        { id: 'g3-15', t: r`Controimmagine $f^{-1}(B):=\{x\in X: f(x)\in B\}$`, q: 'ALG p. 122' },
        { id: 'g3-16', t: r`Iniettiva, suriettiva, biunivoca (secondo il numero di controimmagini)`, mark: '*', q: 'ALG p. 122' }
      ]
    },
    {
      n: 4,
      slug: 'sezioni/4-complessi.html',
      titolo: 'Numeri complessi',
      sommario: r`Il campo $\C$ visto dal lato dell'algebra lineare: serve per risolvere sistemi su $\C$ e, più avanti, per gli autovalori.`,
      topics: [
        { id: 'g4-01', t: r`Costruzione di $\C$; forma algebrica, parte reale e immaginaria`, q: 'App. I' },
        { id: 'g4-02', t: r`Operazioni, coniugato, modulo; $z\bar z=|z|^{2}$`, q: 'App. I' },
        { id: 'g4-03', t: r`Piano di Gauss; forma trigonometrica ed esponenziale`, q: 'App. I' },
        { id: 'g4-04', t: r`Formule di de Moivre; radici $n$-esime`, q: 'App. I' },
        { id: 'g4-05', t: r`Teorema fondamentale dell'algebra; $\C$ algebricamente chiuso`, q: 'App. I' },
        { id: 'g4-06', t: r`Sistemi a coefficienti complessi: il MEG funziona identico su $\C$`, q: 'Lez. 1' }
      ]
    }
  ];

  window.AM = window.AM || {};
  window.AM.registraMateria({
    key: 'geometria',
    nome: 'Geometria e Algebra Lineare',
    sottotitolo: 'Sistemi lineari, matrici, invertibilità',
    base: 'geometria/',
    prefisso: 'g',
    qLabel: '',
    icona: '⎡⎤',
    // NB: a differenza di Analisi, qui non esiste un programma ufficiale che
    // marchi le dimostrazioni richieste. Queste etichette sono redazionali:
    // segnalano il peso del risultato, non una richiesta della docenza.
    markLabels: { '*': 'risultato centrale', '**': 'da conoscere' },
    sezioni: SEZIONI
  });

  /* I numeri complessi erano la Sezione 3 e ora sono la 4: sposto gli
     argomenti gia' spuntati sui nuovi id, una volta sola.
     Va fatto dopo app.js, che e' quello che definisce AM.store. */
  if (typeof document === 'undefined') return;   // caricato fuori dal browser (controlli)
  document.addEventListener('am:ready', function migra() {
    var S = window.AM && window.AM.store;
    if (!S || S.get('geo:migrato-sez4', false)) return;
    for (var i = 1; i <= 6; i++) {
      var vecchio = 'topic:g3-0' + i, nuovo = 'topic:g4-0' + i;
      if (S.get(vecchio, null) === true) S.set(nuovo, true);
      S.del(vecchio);
    }
    S.set('geo:migrato-sez4', true);
    if (S.get('topic:g4-01', false) !== false && AM.refreshProgress) AM.refreshProgress();
  });
})();
