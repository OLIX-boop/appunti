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
        { id: 'g2-14', t: r`Calcolo dell'inversa con il MEG-J: $[A\,|\,I]\longrightarrow[I\,|\,A^{-1}]$`, q: 'Lez. 2 bis' },
        { id: 'g2-15', t: r`Inversa di una matrice $2\times2$: $ad-bc\ne0$ (il determinante in generale è nella Sezione 8)`, q: 'Lez. 2' },
        { id: 'g2-16', t: r`Teorema di Cramer: un sistema quadrato ha una unica soluzione $\iff r(A)=n$`, mark: '*', q: 'Lez. 2' },
        { id: 'g2-17', t: r`Eliminazione di Gauss-Jordan (MEG-J); matrice <em>totalmente ridotta</em> (unica)`, q: 'Lez. 2 bis' },
        { id: 'g2-18', t: r`Equazioni con matrici incognite: $AX=B$, $YA=B$, $A$ singolare, trasposizione`, q: 'Lez. 2 tres' }
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
        { id: 'g3-16', t: r`Iniettiva, suriettiva, biunivoca (secondo il numero di controimmagini)`, mark: '*', q: 'ALG p. 122' },
        { id: 'g3-17', t: r`Sottospazio: $W\ne\emptyset$ chiuso rispetto a somma e prodotto per scalare; contiene sempre $\vzero$`, mark: '*', q: 'Lez. 3' },
        { id: 'g3-18', t: r`Esempi e non-esempi: piani per l'origine, sfera unitaria, $\{\vzero\}$, funzioni derivabili`, q: 'Lez. 3' },
        { id: 'g3-19', t: r`Combinazione lineare $\sum_j\alpha_j\vv_j$`, q: 'Lez. 3' },
        { id: 'g3-20', t: r`$\operatorname{span}\{\vv_1,\dots,\vv_n\}$ è un sottospazio`, mark: '*', q: 'Lez. 3' },
        { id: 'g3-21', t: r`Le soluzioni di $A\vx=\vzero$ sono un sottospazio, quelle di $A\vx=\vb$ con $\vb\ne\vzero$ no`, mark: '**', q: 'Lez. 3' }
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
    },
    {
      n: 5,
      slug: 'sezioni/5-lineari.html',
      titolo: 'Applicazioni lineari, basi, dimensione, rango',
      sommario: r`Le mappe che rispettano somma e prodotto per scalare: nucleo, immagine, dipendenza lineare e il teorema di rango + nullità.`,
      // Gli id non seguono l'ordine di lettura: g5-18..g5-30 (Lezione 4 pp. 21-84 e
      // Lezione 5 pp. 1-28) sono arrivati dopo e stanno nella posizione delle lezioni.
      topics: [
        { id: 'g5-01', t: r`Applicazione lineare: additività e omogeneità; $L(\vzero)=\vzero$`, mark: '*', q: 'Lez. 4' },
        { id: 'g5-02', t: r`Esempi: $ax+b$ è lineare $\iff b=0$; la derivata; l'integrale su $C[0,1]$`, q: 'Lez. 4' },
        { id: 'g5-03', t: r`$L_A(\vx)=A\vx$; la composta di lineari è lineare e $L_B\circ L_A=L_{BA}$`, mark: '**', q: 'Lez. 4' },
        { id: 'g5-04', t: r`Nucleo e immagine; sono sottospazi`, mark: '*', q: 'Lez. 4' },
        { id: 'g5-05', t: r`Struttura delle controimmagini; $L$ iniettiva $\iff\ker L=\{\vzero\}$`, mark: '*', q: 'Lez. 4' },
        { id: 'g5-18', t: r`Applicazione inversa; l'inversa di una lineare biettiva è lineare`, q: 'Lez. 4' },
        { id: 'g5-19', t: r`$L_A$ biettiva $\iff A$ invertibile, e $L_A^{-1}=L_{A^{-1}}$`, mark: '*', q: 'Lez. 4' },
        { id: 'g5-20', t: r`Sistemi di riferimento nel piano e nello spazio; coordinate di vettori e di punti`, q: 'Lez. 4' },
        { id: 'g5-21', t: r`Base di uno spazio vettoriale e vettore delle coordinate`, mark: '*', q: 'Lez. 4' },
        { id: 'g5-22', t: r`Teorema sulla dimensione; $\dim V$, $\dim P_n=n+1$, spazi di dimensione infinita`, mark: '**', q: 'Lez. 4' },
        { id: 'g5-23', t: r`Teorema di rappresentazione: $A=[L(\mathbf e_1)|\dots|L(\mathbf e_n)]$`, mark: '*', q: 'Lez. 4' },
        { id: 'g5-24', t: r`Mappa di parametrizzazione e mappa delle coordinate: $\mathbf c=S^{-1}\vx$`, q: 'Lez. 4' },
        { id: 'g5-25', t: r`Matrice rappresentativa rispetto a due basi (Teorema 5)`, mark: '*', q: 'Lez. 4' },
        { id: 'g5-26', t: r`Isomorfismi; ogni spazio di dimensione $n$ è isomorfo a $\K^n$`, mark: '**', q: 'Lez. 4' },
        { id: 'g5-27', t: r`Basi in $\K^n$: $B$ è una base $\iff S=[\vv_1|\dots|\vv_n]$ è invertibile`, mark: '*', q: 'Lez. 4' },
        { id: 'g5-28', t: r`Passaggio tra due basi: $\mathbf c=S\tilde{\mathbf c}$`, mark: '*', q: 'Lez. 5' },
        { id: 'g5-29', t: r`Come cambia la matrice rappresentativa: $\tilde A=S_W^{-1}AS_V$`, mark: '**', q: 'Lez. 5' },
        { id: 'g5-30', t: r`Passaggio tra sistemi di riferimento; rotazione degli assi`, q: 'Lez. 5' },
        { id: 'g5-06', t: r`Cambio di origine: $[x;y]=[x_{O'};y_{O'}]+S\,[x';y']$`, q: 'Lez. 5' },
        { id: 'g5-07', t: r`Rette in forma parametrica $\mathbf r=\mathbf r_0+t\mathbf a$; l'esempio dell'ellisse`, q: 'Lez. 5' },
        { id: 'g5-08', t: r`Piani in forma parametrica $\mathbf r=\mathbf r_0+t\mathbf u+s\mathbf v$`, q: 'Lez. 5' },
        { id: 'g5-09', t: r`Da cartesiana a parametrica e viceversa ($\ker A=\operatorname{span}\{\vv_j\}$)`, q: 'Lez. 5' },
        { id: 'g5-10', t: r`Dipendenza lineare; dipendenti $\iff$ uno è combinazione degli altri`, mark: '*', q: 'Lez. 6' },
        { id: 'g5-11', t: r`Teorema delle condizioni di base`, mark: '**', q: 'Lez. 6' },
        { id: 'g5-12', t: r`Indipendenza in $\K^m$ col rango: $r([\vv_1|\dots|\vv_n])=n$`, mark: '*', q: 'Lez. 6' },
        { id: 'g5-13', t: r`Indipendenza tramite le coordinate; le mappe lineari conservano la dipendenza`, mark: '**', q: 'Lez. 6' },
        { id: 'g5-14', t: r`Insiemi di generatori; basi di span (colonne pivot) e di nucleo`, q: 'Lez. 6' },
        { id: 'g5-15', t: r`Rango per righe e per colonne; $\operatorname{Im}L_A=\operatorname{Col}(A)$; rango di una mappa`, mark: '**', q: 'Lez. 6' },
        { id: 'g5-16', t: r`Teorema di rango + nullità`, mark: '*', q: 'Lez. 6' },
        { id: 'g5-17', t: r`Un punto sta in un piano? Equazione cartesiana di un piano col rango`, q: 'Lez. 6' }
      ]
    },
    {
      n: 6,
      slug: 'sezioni/6-posizione.html',
      titolo: 'Posizione reciproca, ortogonalità, fasci',
      sommario: r`Rette e piani si incontrano, sono paralleli o sghembi: lo decide il sistema dell'intersezione. Poi il prodotto scalare e i fasci.`,
      topics: [
        { id: 'g6-01', t: r`Vettori direzione; rette incidenti, parallele (senso largo e stretto), sghembe`, q: 'Lez. 7' },
        { id: 'g6-02', t: r`Due rette nel piano, parametriche: il sistema $A\binom ts=\vec r_2-\vec r_1$ con $A=[\vec v_1|-\vec v_2]$`, mark: '*', q: 'Lez. 7' },
        { id: 'g6-03', t: r`Due rette nel piano, cartesiane: incidenti $\iff a_1b_2-a_2b_1\ne0$`, q: 'Lez. 7' },
        { id: 'g6-04', t: r`Due rette nello spazio: i quattro casi e il criterio con $\vec u,\vec v,\vec b$`, mark: '*', q: 'Lez. 7' },
        { id: 'g6-05', t: r`$ax+by+cz=d$ descrive un piano $\iff(a,b,c)\ne\underline0$`, q: 'Lez. 7' },
        { id: 'g6-06', t: r`Due piani con equazioni cartesiane: paralleli, coincidenti, incidenti`, mark: '*', q: 'Lez. 7' },
        { id: 'g6-07', t: r`Due piani parametrici, o uno per tipo: i piani spostati e la sostituzione`, q: 'Lez. 7' },
        { id: 'g6-08', t: r`Retta e piano: incidenti, paralleli, retta contenuta`, mark: '*', q: 'Lez. 7' },
        { id: 'g6-09', t: r`$U\subset V$ si controlla sui generatori; $\vu\in\operatorname{span}$ e dipendenza lineare`, mark: '**', q: 'Add. Lez. 7' },
        { id: 'g6-10', t: r`Rette cartesiane nello spazio; il sistema omogeneo è la retta parallela per l'origine`, q: 'Lez. 7' },
        { id: 'g6-11', t: r`Due rette cartesiane nello spazio: distinguere sghembe da parallele`, mark: '*', q: 'Lez. 7' },
        { id: 'g6-12', t: r`Prodotto scalare geometrico e standard $\langle\vx,\vy\rangle$; ortogonalità in $\R^{n}$`, q: 'Add. Lez. 7' },
        { id: 'g6-13', t: r`Vettore normale: $\vec u\perp\Pi\iff\vec u$ è multiplo di $(a,b,c)$`, mark: '*', q: 'Lez. 7' },
        { id: 'g6-14', t: r`Problemi di perpendicolarità: piano e retta normali, rette ortogonali`, q: 'Lez. 7' },
        { id: 'g6-15', t: r`Fasci: definizione; rette per un punto; piani paralleli a un piano dato`, q: 'Lez. 7' },
        { id: 'g6-16', t: r`Fascio di piani per una retta; parametri definiti a meno di un multiplo`, mark: '*', q: 'Lez. 7' },
        { id: 'g6-17', t: r`Problemi con i fasci: piano per retta e punto, ortogonale a un vettore, parallelo a una retta`, q: 'Lez. 7' }
      ]
    },
    {
      n: 7,
      slug: 'sezioni/7-grassmann.html',
      titolo: 'Completamento a base, somma di sottospazi, Grassmann',
      sommario: r`Costruire una base attorno a vettori dati, sommare e intersecare sottospazi, e la formula che lega le quattro dimensioni.`,
      topics: [
        { id: 'g7-01', t: r`Completamento a una base: il problema e la ricetta in $\K^{n}$ (conta l'ordine)`, mark: '*', q: 'ALG pp. 180-184' },
        { id: 'g7-02', t: r`Riferimento adatto a un piano; completamento in $P_3$ tramite l'isomorfismo con $\R^{4}$`, q: 'Lez. 8' },
        { id: 'g7-03', t: r`L'intersezione di sottospazi è un sottospazio`, mark: '*', q: 'Lez. 8' },
        { id: 'g7-04', t: r`L'unione di sottospazi in generale non lo è: il controesempio`, q: 'Lez. 8' },
        { id: 'g7-05', t: r`Somma $W_1+W_2$: è un sottospazio, generatori, il più piccolo che li contiene`, mark: '*', q: 'Lez. 8' },
        { id: 'g7-06', t: r`Calcolo: base della somma e dell'intersezione`, q: 'Lez. 8' },
        { id: 'g7-07', t: r`Somma diretta $U\oplus V$: coppie ordinate; $\K^{n}\oplus\K^{m}\cong\K^{n+m}$`, q: 'ALG p. 197' },
        { id: 'g7-08', t: r`Base e dimensione di $U\oplus V$`, mark: '**', q: 'Lez. 8' },
        { id: 'g7-09', t: r`Formula di Grassmann`, mark: '*', q: 'Lez. 8' },
        { id: 'g7-10', t: r`$W_1\cap W_2=\{\vzero\}\iff W_1+W_2\cong W_1\oplus W_2$; somma interna ed esterna`, mark: '**', q: 'Lez. 8' },
        { id: 'g7-11', t: r`Complemento di un sottospazio: esistenza, calcolo, infiniti complementi`, q: 'ALG pp. 239-242' },
        { id: 'g7-12', t: r`Complemento ortogonale $W^{\perp}$ e suo calcolo`, q: 'Lez. 8' },
        { id: 'g7-13', t: r`Somma diretta di $m$ spazi; scrittura unica`, q: 'Lez. 8' }
      ]
    },
    {
      n: 8,
      slug: 'sezioni/8-determinanti.html',
      titolo: 'Determinanti',
      sommario: r`Il numero che dice se una matrice è invertibile: calcolo, Laplace, Binet, inversa, Cramer, Kronecker, matrici simili, volumi.`,
      topics: [
        { id: 'g8-01', t: r`Il determinante come unica mappa con le proprietà (i)–(iv)`, mark: '*', q: 'Lez. 9' },
        { id: 'g8-02', t: r`Determinante $2\times2$; calcolo con il MEG`, mark: '*', q: 'Lez. 9' },
        { id: 'g8-03', t: r`$\det A\ne0\iff r(A)=n$`, mark: '*', q: 'Lez. 9' },
        { id: 'g8-04', t: r`Regola di Sarrus (solo ordine 3)`, q: 'Lez. 9' },
        { id: 'g8-05', t: r`$\det(A^{T})=\det A$; proprietà sulle colonne; matrici triangolari basse`, q: 'Lez. 9' },
        { id: 'g8-06', t: r`Minore complementare e cofattore (complemento algebrico)`, q: 'Lez. 9' },
        { id: 'g8-07', t: r`Sviluppi di Laplace lungo una riga o una colonna`, mark: '*', q: 'Lez. 9' },
        { id: 'g8-08', t: r`Le condizioni equivalenti (a)–(k): invertibilità, rango, indipendenza, $L_A$`, mark: '*', q: 'ALG pp. 271-281' },
        { id: 'g8-09', t: r`Righe nulle o proporzionali danno $\det=0$; $n$ vettori sono base $\iff\det\ne0$`, q: 'Lez. 9' },
        { id: 'g8-10', t: r`Teorema di Binet; $\det(A^{-1})=1/\det A$`, mark: '*', q: 'Lez. 9' },
        { id: 'g8-11', t: r`Formula di Laplace per l'inversa: $A^{-1}=\frac{1}{\det A}C^{T}$`, mark: '*', q: 'Lez. 9' },
        { id: 'g8-12', t: r`Regola di Cramer: $x_j=\det A_j/\det A$`, mark: '*', q: 'Lez. 9' },
        { id: 'g8-13', t: r`Minori di una matrice; minori che orlano; teorema di Kronecker`, mark: '*', q: 'Lez. 9' },
        { id: 'g8-14', t: r`Rango e base dell'immagine con i minori orlati`, q: 'Lez. 9' },
        { id: 'g8-15', t: r`Potenze di una matrice; $\det(A^{n})=(\det A)^{n}$; Fibonacci`, q: 'Lez. 9' },
        { id: 'g8-16', t: r`Matrici simili: relazione di equivalenza, stesso determinante, $B^{n}=S^{-1}A^{n}S$`, mark: '*', q: 'Lez. 9' },
        { id: 'g8-17', t: r`Il determinante $2\times2$ come area con segno; volumi e orientamento`, mark: '**', q: 'Lez. 9' },
        { id: 'g8-18', t: r`Determinante di un endomorfismo: non dipende dalla base`, q: 'Lez. 9' },
        { id: 'g8-19', t: r`Ipervolume e $\operatorname{Vol}_n(L(K))=|\det L|\operatorname{Vol}_n(K)$; ellisse ed ellissoide`, q: 'Lez. 9' }
      ]
    },
    {
      n: 9,
      slug: 'sezioni/9-diagonalizzazione.html',
      titolo: 'Diagonalizzazione',
      sommario: r`Autovalori e autovettori, polinomio caratteristico, molteplicità, il criterio di diagonalizzabilità, potenze, traccia, invarianza per similitudine.`,
      topics: [
        { id: 'g9-01', t: r`Il problema della diagonalizzazione; endomorfismo diagonalizzabile`, q: 'Lez. 10' },
        { id: 'g9-02', t: r`Autovettori e autovalori di un endomorfismo; $\lambda=0\iff\ker L\ne\{\vzero\}$`, mark: '*', q: 'Lez. 10' },
        { id: 'g9-03', t: r`Teorema 1: $L$ diagonalizzabile $\iff$ $A$ simile a una diagonale; le colonne di $S$ sono autovettori`, mark: '*', q: 'Lez. 10' },
        { id: 'g9-04', t: r`Matrice diagonalizzabile su $\K$; su $\R$ contro su $\C$; autovalori di una matrice`, q: 'Lez. 10' },
        { id: 'g9-05', t: r`Proposizione 1: autospazio $\ker(A-\lambda I)$; $\lambda$ autovalore $\iff\det(A-\lambda I)=0$`, mark: '*', q: 'Lez. 10' },
        { id: 'g9-06', t: r`Polinomio caratteristico; autovalori delle matrici triangolari`, q: 'Lez. 10' },
        { id: 'g9-07', t: r`Calcolo di autovalori e autospazi; i controlli (il MEG non conserva gli autovalori)`, q: 'Lez. 10' },
        { id: 'g9-08', t: r`Molteplicità algebrica e geometrica; $1\le m_g\le m_a$; autovalori regolari`, mark: '*', q: 'Lez. 10' },
        { id: 'g9-09', t: r`Criterio di diagonalizzabilità su $\C$ e su $\R$; $n$ autovalori distinti`, mark: '*', q: 'Lez. 10' },
        { id: 'g9-10', t: r`Lemma sugli autospazi; base di autovettori, le matrici $S$ e $D$`, mark: '*', q: 'Lez. 10' },
        { id: 'g9-11', t: r`Potenze $A^k=SD^kS^{-1}$; formula di Binet per Fibonacci`, q: 'Lez. 10' },
        { id: 'g9-12', t: r`Traccia; $\det A=\prod\lambda_i$ e $\tr A=\sum\lambda_i$; il caso $2\times2$`, mark: '**', q: 'Lez. 10' },
        { id: 'g9-13', t: r`Invarianza del polinomio caratteristico per similitudine; il viceversa è falso`, mark: '*', q: 'Lez. 10' },
        { id: 'g9-14', t: r`Esponenziale di una matrice e sistemi di equazioni differenziali`, q: 'Lez. 10' }
      ]
    }
  ];

  window.AM = window.AM || {};
  window.AM.registraMateria({
    key: 'geometria',
    nome: 'Geometria e Algebra Lineare',
    sottotitolo: 'Sistemi lineari, matrici, spazi vettoriali, applicazioni lineari, determinanti, diagonalizzazione',
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
