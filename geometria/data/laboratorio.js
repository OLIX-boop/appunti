/* ============================================================
   Laboratorio delle basi: i round dei quattro livelli.
   Solo dati: la logica sta in assets/js/laboratorio.js.
   Ogni numero di questo file si verifica da Node, con l'aritmetica
   esatta di meg.js, prima di pubblicarlo.
   ============================================================ */
(function () {
  'use strict';
  const r = String.raw;

  window.LAB = {

    /* --- Livello 1: dosi di v1, v2 (ed eventualmente v3) per centrare T --- */
    l1: [
      { v: [[1, 0], [0, 1]], T: [3, 2], esito: 'unico', sol: [[3, 2]],
        dopo: r`Con la base canonica le dosi coincidono con le componenti del punto: $(3,2)=3\,\mathbf e_1+2\,\mathbf e_2$. Per questo all'inizio le coordinate sembrano non servire: qui il punto e i suoi numeri sono la stessa cosa.` },
      { v: [[2, 1], [1, 2]], T: [4, 5], esito: 'unico', sol: [[1, 2]],
        dopo: r`$T=1\cdot\vv_1+2\cdot\vv_2$. Stesso gioco, ma ora le dosi $(1,2)$ non sono le componenti $(4,5)$. Quelle dosi sono le <strong>coordinate</strong> di $T$ rispetto a $\{\vv_1,\vv_2\}$: il punto è lo stesso, i numeri cambiano perché hai cambiato i passi con cui cammini.` },
      { v: [[2, 1], [4, 2]], T: [1, 3], esito: 'nessuno', sol: [],
        dopo: r`$\vv_2=2\vv_1$: qualunque dose usi resti sulla retta $y=\tfrac12x$, e $T$ non ci sta. La scia lo mostra: i punti visitati sono tutti su una riga. Quella retta è $\operatorname{span}\{\vv_1,\vv_2\}$, e due vettori così valgono come uno solo.` },
      { v: [[1, 1], [1, -1]], T: [2, -3], esito: 'unico', sol: [[-0.5, 2.5]],
        dopo: r`$T=-\tfrac12\vv_1+\tfrac52\vv_2$. Le dosi possono essere frazionarie e negative: una coordinata negativa vuol dire solo «cammina al contrario».` },
      { v: [[2, 1], [4, 2]], T: [6, 3], esito: 'infiniti', sol: [[3, 0], [1, 1]],
        dopo: r`Hai due ricette diverse per lo stesso punto. Togliendo $1\,\vv_1+1\,\vv_2$ da $3\,\vv_1+0\,\vv_2$ resta $2\vv_1-\vv_2=\vzero$: una combinazione nulla con dosi non tutte nulle, cioè la <strong>dipendenza lineare</strong>. Vuol dire che esiste un giro che ti riporta all'origine, e ogni giro aggiunto a una ricetta ne dà un'altra.` },
      { v: [[1, 2], [2, 1], [1, 1]], T: [3, 3], esito: 'infiniti', sol: [[1, 1, 0], [0, 0, 3]],
        dopo: r`Tre vettori nel piano sono <strong>troppi</strong>: arrivi ovunque, ma mai in un modo solo, perché $\vv_1+\vv_2-3\vv_3=\vzero$. È l'esempio «Troppi» della Lezione 4, letto in $\R^2$: la dimensione è $2$, quindi una base ha esattamente due vettori.` }
    ],

    /* --- Livello 2: lo stesso punto letto su griglie diverse --- */
    l2: [
      { tipo: 'leggi', B: [[1, 0], [1, 1]], P: [3, 2], c: ['1', '2'],
        q: r`Leggi la griglia: quanti passi lungo $\vv_1$ e quanti lungo $\vv_2$ servono per arrivare in $P$?`,
        dopo: r`Le coordinate si leggono contando i passi sulla griglia obliqua. Non serve che gli assi siano perpendicolari né che i vettori siano lunghi $1$: gli appunti lo dicono apposta.` },
      { tipo: 'leggi', B: [[2, 1], [-1, 1]], P: [3, 3], c: ['2', '1'],
        q: r`Altra base. Quali sono le coordinate di $P$ rispetto a $\{\vv_1,\vv_2\}$?`,
        dopo: r`Le componenti di $P$ sono $(3,3)$, le sue coordinate in questa base sono $(2,1)$. Sono due nomi dello stesso punto: il vettore è uno, le coordinate dipendono dalla base.` },
      { tipo: 'leggi', B: [[1, 1], [1, -1]], P: [1, 3], c: ['2', '-1'],
        q: r`Qui serve un passo all'indietro. Coordinate di $P$?`,
        dopo: r`$P=2\vv_1-\vv_2$. Se $P$ sta su un incrocio della griglia le coordinate sono intere, e il segno dice soltanto in che verso percorri l'asse.` },
      { tipo: 'leggi', B: [[1, 2], [2, 1]], P: [1, 1], c: ['1/3', '1/3'],
        q: r`Ora $P$ non sta su un incrocio. La griglia non basta: risolvi $S\mathbf c=\vx$ sul foglio e scrivi il risultato, anche come frazione.`,
        dopo: r`Quando la griglia non aiuta si passa al sistema: $\mathbf c=S^{-1}\vx$. È l'esempio della Lezione 4, dove $\mathbf c=\big(\tfrac{2y-x}{3},\tfrac{2x-y}{3}\big)$. Il sistema fa a conti la stessa cosa che facevi contando i passi.` },
      { tipo: 'costruisci', B: [[1, 0], [0, 1]], P: [3, 1], bersaglio: ['1', '1'], sol: [[2, 0], [1, 1]],
        q: r`Al contrario: trascina le punte di $\vv_1$ e $\vv_2$ finché $P$ ha coordinate $(1,1)$.`,
        dopo: r`Coordinate $(1,1)$ vuol dire $P=\vv_1+\vv_2$: $P$ è la diagonale del parallelogramma. Di basi così ce ne sono infinite. Due numeri da soli non dicono dov'è un punto, finché non dici rispetto a quale base.` },
      { tipo: 'costruisci', B: [[1, 0], [0, 1]], P: [2, 2], bersaglio: ['2', '0'], sol: [[1, 1], [1, 0]],
        q: r`Ora trova una base in cui $P$ ha coordinate $(2,0)$.`,
        dopo: r`Una coordinata nulla vuol dire nessun passo lungo $\vv_2$: $P$ sta sull'asse di $\vv_1$. Quindi $\vv_1=(1,1)$ è obbligato, mentre $\vv_2$ può essere qualunque vettore non parallelo.` },
      { tipo: 'cambio', B: [[1, 2], [2, 1]], Bt: [[1, 1], [1, -1]], c: [2, 1], ct: ['9/2', '-1/2'],
        S: [['1/3', '-1'], ['1/3', '1']],
        q: r`Due griglie insieme (Lezione 5). Il punto $P$ ha coordinate $\mathbf c=(2,1)$ rispetto a $B$, in blu. Quali sono le sue coordinate $\tilde{\mathbf c}$ rispetto a $\tilde B$, in viola?`,
        dopo: r`Lo stesso punto ha due nomi, e $\mathbf c=S\,\tilde{\mathbf c}$ li collega. La direzione è quella che inganna: le colonne di $S$ sono i vettori <em>nuovi</em> scritti nella base <em>vecchia</em>, ma $S$ trasforma le coordinate <em>nuove</em> in quelle <em>vecchie</em>. Per avere le nuove serve $S^{-1}$.` }
    ],

    /* --- Livello 3: tre vettori nello spazio --- */
    l3: [
      { V: [[1, 0, 1], [1, 2, 3], [1, 1, 1]], r: 3,
        dopo: r`Tre pivot: le colonne sono indipendenti e ogni punto di $\R^3$ si raggiunge in un solo modo. È la base $B_2$ della Lezione 4. Il parallelepipedo non è schiacciato: il suo volume è $|\det S|=2$, come vedrai nella <a href="sezioni/8-determinanti.html">Sezione 8</a>.` },
      { V: [[1, 0, 1], [0, 1, 1], [1, 1, 2]], r: 2,
        dopo: r`$\vv_3=\vv_1+\vv_2$: il terzo vettore non aggiunge una direzione nuova, quindi lo span resta un piano. Guardato di taglio, tutto sta su una riga: è il significato di rango $2$.` },
      { V: [[1, 2, 1], [2, 4, 2], [-1, -2, -1]], r: 1,
        dopo: r`Sono tutti multipli di $\vv_1$: $\vv_2=2\vv_1$, $\vv_3=-\vv_1$. Un pivot solo, una direzione sola: lo span è una retta.` },
      { V: [[1, 1, 0], [0, 1, 1], [1, 0, -1]], r: 2,
        dopo: r`$\vv_3=\vv_1-\vv_2$. Nessuno dei tre è multiplo di un altro, eppure sono dipendenti: <strong>controllare a coppie non basta</strong>. Il rango lo vede, l'occhio da solo spesso no.` },
      { tipo: 'parametro', V: [[1, 0, 1], [0, 1, 1], [1, 1, null]], h: 2, da: -3, a: 3, passo: 0.5,
        dopo: r`Con $R_3\to R_3-R_1-R_2$ la terza riga diventa $(0,0,h-2)$: il pivot sparisce esattamente per $h=2$. Quello che hai fatto col cursore è il conto delle tracce con parametro, come in <a href="esercizi.html?sez=5">G5.25</a>: il pivot che dipende da $h$ misura quanto $\vv_3$ sporge dal piano.` }
    ],

    /* --- Livello 4: la matrice è dove finiscono e1 ed e2 --- */
    l4: [
      { tipo: 'dove', A: [[1, 1], [0, 2]], x: [2, 1], y: [3, 2],
        q: r`Le frecce a destra sono $L(\mathbf e_1)$ e $L(\mathbf e_2)$. Tocca il punto del piano di destra dove finisce $\vx=(2,1)$.`,
        dopo: r`$L(2,1)=2L(\mathbf e_1)+1\,L(\mathbf e_2)$: cammini sulle colonne con dosi $x_1,x_2$. È il Livello 1 di nuovo, e dice che $A\vx$ è una combinazione delle colonne di $A$.` },
      { tipo: 'dove', A: [[2, -1], [1, 1]], x: [1, 2], y: [0, 3],
        q: r`Stessa domanda con un'altra mappa: dove finisce $\vx=(1,2)$?`,
        dopo: r`Basta sapere dove vanno $\mathbf e_1$ ed $\mathbf e_2$ per sapere dove va tutto il resto: è il teorema di rappresentazione, $A=[\,L(\mathbf e_1)\,|\,L(\mathbf e_2)\,]$.` },
      { tipo: 'costruisci', bersaglio: [[0, -1], [1, 0]],
        q: r`Trascina le punte di $L(\mathbf e_1)$ e $L(\mathbf e_2)$ finché la F coincide con la sagoma tratteggiata: la F ruotata di $90°$ in senso antiorario.`,
        dopo: r`Non serve nessuna formula: $(1,0)$ finisce in $(0,1)$ e $(0,1)$ finisce in $(-1,0)$, e quelle sono le colonne di $A$.` },
      { tipo: 'costruisci', bersaglio: [[0, 1], [1, 0]],
        q: r`Ora la sagoma è la F specchiata rispetto alla retta $y=x$.`,
        dopo: r`La F è rovesciata, e nessuna rotazione può farlo. Si vede nel segno: $\det A=-1$, mentre la rotazione aveva $\det A=1$.` },
      { tipo: 'costruisci', bersaglio: [[1, 0], [0, 0]],
        q: r`Schiaccia la F sull'asse $x$: ogni punto $(x,y)$ deve finire in $(x,0)$.`,
        dopo: r`$L(\mathbf e_2)=\vzero$: tutto l'asse $y$ è finito nell'origine, ed è il nucleo. L'immagine è l'asse $x$. Una dimensione sopravvive e una sparisce: $r(L)+\dim\ker L=1+1=2$.` },
      { tipo: 'nucleo', ker: [1, -1], sol: [[1, 1], [1, 1]],
        q: r`Costruisci una mappa non nulla che manda $(1,-1)$ in $\vzero$: la retta tratteggiata a sinistra deve finire tutta nell'origine.`,
        dopo: r`$L(1,-1)=L(\mathbf e_1)-L(\mathbf e_2)=\vzero$ vuol dire $L(\mathbf e_1)=L(\mathbf e_2)$: le colonne sono dipendenti. Colonne dipendenti e nucleo non banale sono la stessa cosa detta in due lingue.` },
      { tipo: 'nucleo', ker: [2, -1], im: [1, 2], sol: [[1, 2], [2, 4]],
        q: r`Ora due richieste insieme: $\ker L$ è la retta di $(2,-1)$ e $\Imag L$ è la retta di $(1,2)$.`,
        dopo: r`Le colonne devono stare sulla retta di $(1,2)$ e deve valere $2L(\mathbf e_1)=L(\mathbf e_2)$. A meno di un fattore la matrice è obbligata: $A=\begin{bmatrix}1&2\\2&4\end{bmatrix}$.` },
      { tipo: 'fibra', A: [[1, 2], [2, 4]], b: [3, 6], esito: 'infinite',
        q: r`Con questa $A$, quante soluzioni ha $A\vx=\vb$ se $\vb=(3,6)$?`,
        dopo: r`$\vb$ sta nell'immagine, quindi le soluzioni esistono, e formano una retta <strong>parallela al nucleo</strong>: $\vx_0+\ker A$. È la struttura delle controimmagini della Lezione 4. Ora puoi trascinare $\vb$ e guardare la retta che si sposta.` },
      { tipo: 'fibra', A: [[1, 2], [2, 4]], b: [1, 0], esito: 'nessuna',
        q: r`E se $\vb=(1,0)$?`,
        dopo: r`$\vb$ è fuori dall'immagine: nessun punto del dominio ci arriva. È Rouché-Capelli visto dall'alto: il sistema è incompatibile perché $\vb$ non sta nello span delle colonne di $A$. Trascina $\vb$ sulla retta dell'immagine e le soluzioni ricompaiono.` }
    ]
  };
})();
