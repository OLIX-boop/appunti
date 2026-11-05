/* ============================================================
   Prima lettura delle altre sezioni (0-4, 6-8).
   Stesso formato di data/primalettura.js: una frase, pochi punti,
   una domanda. Gli schemi stanno in data/schemi-altre.js.
   ============================================================ */
(function () {
  'use strict';
  const r = String.raw;

  Object.assign(window.PRIMA, {
    0: {
      seconda: [],
      passi: [
        { h2: 'notazione', titolo: 'Notazione per gli insiemi',
          frase: r`Un insieme si scrive in due modi: elencando gli elementi o dicendo la proprietà che hanno.`,
          punti: [
            r`$x\in A$: $x$ è un elemento di $A$. $B\subseteq A$: tutto $B$ sta dentro $A$.`,
            r`$:=$ vuol dire «uguale per definizione». $=$ è un fatto, che di norma va dimostrato.`
          ],
          domanda: r`$\{1\}\in\{1,2\}$ è scritto bene?`,
          risposta: r`No: $\{1\}$ è un insieme, quindi si scrive $\{1\}\subseteq\{1,2\}$. Oppure $1\in\{1,2\}$: a sinistra di $\in$ ci va un elemento.` },
        { h2: 'rn', titolo: r`Lo spazio $\R^n$`,
          frase: r`$\R^n$ è l'insieme delle liste di $n$ numeri, e con le liste si fanno i conti posto per posto.`,
          punti: [
            r`In $\R^2$ e $\R^3$ le liste si possono disegnare come frecce.`,
            r`Il prodotto scalare moltiplica posto per posto e somma: il risultato è un numero, non un vettore.`,
            r`$\C^n$ è la stessa cosa con numeri complessi, ma qui non ha un prodotto scalare.`
          ],
          domanda: r`Quanto vale $(1,0,2)\cdot(2,5,1)$?`,
          risposta: r`$1\cdot2+0\cdot5+2\cdot1=4$: un numero.` },
        { h2: 'quantificatori', titolo: 'Quantificatori',
          frase: r`$\forall$ vuol dire «per ogni», $\exists$ «esiste almeno uno», $\exists!$ «ne esiste esattamente uno».`,
          punti: [
            r`Si leggono da sinistra a destra, come una frase.`,
            r`L'ordine cambia il significato: scambiando $\forall$ ed $\exists$ una frase vera può diventare falsa.`
          ],
          domanda: r`$\exists!\,x\in\R$ tale che $x^2=4$ è vera?`,
          risposta: r`No: le soluzioni sono due, $2$ e $-2$. Diventa vera chiedendo $x>0$, come nell'esempio degli appunti.` },
        { h2: 'campo', titolo: r`La convenzione $\K$`,
          frase: r`$\K$ vuol dire «vale sia per $\R$ sia per $\C$»: un solo enunciato al posto di due.`,
          punti: [
            r`Il MEG e il rango usano solo somma, prodotto e divisione per numeri non nulli.`,
            r`Queste operazioni esistono in entrambi i campi, quindi i risultati valgono in entrambi.`
          ],
          domanda: r`Perché un risultato sul MEG si può enunciare su $\K$?`,
          risposta: r`Perché il MEG usa solo somme, prodotti e divisioni per numeri non nulli, che esistono sia in $\R$ sia in $\C$.` }
      ]
    },
    1: {
      seconda: [],
      passi: [
        { h2: 'sistemi', titolo: 'Che cos\'è un sistema lineare',
          frase: r`Un sistema lineare è una tabella di numeri: le incognite dicono solo in che colonna sta ciascun numero.`,
          punti: [
            r`Si scrive $A\vx=\vb$: $A$ contiene i coefficienti, $\vb$ i termini noti.`,
            r`La matrice completa $[A\,|\,\vb]$ mette tutto in una tabella.`,
            r`Compatibile: ha almeno una soluzione. Omogeneo: $\vb=\vzero$, e allora $\vx=\vzero$ è sempre una soluzione.`
          ],
          domanda: r`Scrivi la matrice completa di $x-y=2$, $2x+3y=1$.`,
          risposta: r`$\left[\begin{array}{cc|c}1&-1&2\\2&3&1\end{array}\right]$: una riga per equazione, una colonna per incognita, l'ultima per i termini noti.` },
        { h2: 'equivalenza', titolo: 'Operazioni elementari',
          frase: r`Tre mosse cambiano l'aspetto del sistema ma non le sue soluzioni.`,
          punti: [
            r`Scambiare due righe.`,
            r`Moltiplicare una riga per un numero diverso da zero.`,
            r`Sommare a una riga un multiplo di un'altra.`
          ],
          domanda: r`Perché nella seconda mossa il numero deve essere diverso da zero?`,
          risposta: r`Perché moltiplicando per $0$ la riga sparisce: perdi un'equazione e le soluzioni cambiano. Con $\lambda\ne0$ puoi sempre tornare indietro dividendo per $\lambda$.` },
        { h2: 'scala', titolo: 'Matrici a scala',
          frase: r`Una matrice è a scala quando, scendendo di riga, gli zeri iniziali aumentano.`,
          punti: [
            r`Il primo numero non nullo di ogni riga si chiama <strong>pivot</strong>.`,
            r`Scendendo, i pivot si spostano verso destra, e le righe nulle stanno in fondo.`
          ],
          domanda: r`$\begin{bmatrix}1&2\\3&0\end{bmatrix}$ è a scala?`,
          risposta: r`No: la seconda riga non ha zeri iniziali, come la prima. Gli zeri iniziali devono crescere.` },
        { h2: 'meg', titolo: 'Il metodo di Gauss',
          frase: r`Il MEG porta qualsiasi matrice a scala, creando zeri sotto un pivot alla volta.`,
          punti: [
            r`Prendi la prima colonna non nulla e porta in alto una riga con un numero non nullo: è il pivot.`,
            r`Usa il pivot per annullare i numeri sotto di lui.`,
            r`Ripeti sulla parte che resta.`
          ],
          domanda: r`Con quale operazione annulli il $6$ in $\begin{bmatrix}2&1\\6&5\end{bmatrix}$?`,
          risposta: r`$R_2\to R_2-3R_1$, che dà la riga $(0,\ 2)$.` },
        { h2: 'lettura', titolo: 'Leggere la matrice ridotta',
          frase: r`Dalla matrice a scala si legge tutto: se ci sono soluzioni, e quante.`,
          punti: [
            r`Una riga $[\,0\ \cdots\ 0\ |\ c\,]$ con $c\ne0$ è uno <strong>0-pivot</strong>: dice $0=c$, quindi nessuna soluzione.`,
            r`Il <strong>rango</strong> $r$ è il numero di pivot.`,
            r`Senza 0-pivot ci sono $n-r$ incognite libere: se sono zero, la soluzione è una sola.`
          ],
          domanda: r`$\left[\begin{array}{ccc|c}1&2&1&3\\0&0&1&2\end{array}\right]$: quante soluzioni ha?`,
          risposta: r`Niente 0-pivot, $r=2$ e $n=3$: infinite soluzioni con $3-2=1$ incognita libera, $x_2$.` }
      ]
    },
    2: {
      seconda: ['laboratorio', 'labj', 'eq-trasposta'],
      passi: [
        { h2: 'algebra', titolo: 'Algebra delle matrici',
          frase: r`Il prodotto di matrici si fa righe per colonne, e non si comporta come il prodotto fra numeri.`,
          punti: [
            r`Servono tante colonne in $A$ quante righe in $B$.`,
            r`$AB$ e $BA$ di solito sono diverse, e $AB=O$ non obbliga $A$ o $B$ a essere nulle.`,
            r`Trasposta: righe e colonne si scambiano, e $(AB)^T=B^TA^T$.`
          ],
          domanda: r`$A$ è $2\times3$ e $B$ è $3\times4$. Di che tipo è $AB$? Esiste $BA$?`,
          risposta: r`$AB$ è $2\times4$. $BA$ non esiste: $B$ ha $4$ colonne e $A$ ha $2$ righe.` },
        { h2: 'struttura', titolo: 'Struttura delle soluzioni',
          frase: r`Le soluzioni di $A\vx=\vb$ sono una soluzione qualsiasi più tutte quelle di $A\vx=\vzero$.`,
          punti: [
            r`$\vx_0$ è una soluzione particolare, $\vv$ risolve il sistema omogeneo.`,
            r`Funziona perché $A(\vx_0+\vv)=\vb+\vzero=\vb$.`
          ],
          domanda: r`$\vx_0=(1,1)$ risolve $A\vx=\vb$ e $(2,-1)$ risolve $A\vx=\vzero$. Trova un'altra soluzione di $A\vx=\vb$.`,
          risposta: r`$(1,1)+(2,-1)=(3,0)$.` },
        { h2: 'rc', titolo: 'Teorema di Rouché-Capelli',
          frase: r`Un sistema ha soluzioni se e solo se aggiungere i termini noti non fa salire il rango.`,
          punti: [
            r`Compatibile $\iff\rg A=\rg[A\,|\,\vb]$.`,
            r`Se $r=n$ la soluzione è una sola. Se $r\lt n$ sono infinite, con $n-r$ parametri.`,
            r`Un sistema omogeneo è sempre compatibile, e ha soluzioni non banali se e solo se $r\lt n$.`
          ],
          domanda: r`Un sistema omogeneo con $3$ equazioni e $5$ incognite può avere solo la soluzione banale?`,
          risposta: r`No: $r\le3\lt5$, quindi restano almeno $2$ incognite libere e ci sono soluzioni non banali.` },
        { h2: 'inversa', titolo: 'Matrice inversa',
          frase: r`L'inversa $A^{-1}$ è la matrice che annulla l'effetto di $A$: $AA^{-1}=A^{-1}A=I_n$.`,
          punti: [
            r`Esiste solo per alcune matrici quadrate, e le frasi dello schema dicono tutte la stessa cosa.`,
            r`$(AB)^{-1}=B^{-1}A^{-1}$: l'ordine si inverte, come togliersi prima le scarpe e poi le calze.`
          ],
          domanda: r`Se $A$ e $B$ sono invertibili, $A+B$ lo è sempre?`,
          risposta: r`No: $A$ e $-A$ sono invertibili, ma $A+(-A)=O$ non lo è.` },
        { h2: 'cramer', titolo: 'Il teorema di Cramer',
          frase: r`Un sistema quadrato ha una sola soluzione esattamente quando $r(A)=n$.`,
          punti: [
            r`Se $r(A)=n$ c'è una sola soluzione per ogni $\vb$.`,
            r`Se $r(A)\ne n$, per alcuni $\vb$ non ci sono soluzioni e per altri ce ne sono infinite.`
          ],
          domanda: r`Con $A=\begin{bmatrix}1&2\\2&4\end{bmatrix}$ il sistema ha una sola soluzione per ogni $\vb$?`,
          risposta: r`No: $ad-bc=4-4=0$, quindi $r(A)=1\ne2$.` },
        { h2: 'megj', titolo: 'MEG-J',
          frase: r`Il MEG-J continua il MEG fino alla matrice totalmente ridotta, da cui le soluzioni si leggono senza altri conti.`,
          punti: [
            r`Di matrici a scala ce ne sono tante, la totalmente ridotta è una sola.`,
            r`Per l'inversa: $[A\,|\,I]$ diventa $[I\,|\,A^{-1}]$.`
          ],
          domanda: r`Riducendo $[A\,|\,I]$, che cosa ti dice una riga nulla nella parte sinistra?`,
          risposta: r`Che $\rg A\lt n$: $A$ non è invertibile, e ci si può fermare lì.` },
        { h2: 'eqmatrici', titolo: 'Equazioni con matrici incognite',
          frase: r`$AX=B$ è un gruppo di sistemi con la stessa $A$, uno per ogni colonna di $B$.`,
          punti: [
            r`Primo passo, sempre: capire il tipo di $X$.`,
            r`Se $A$ non è invertibile si fa il MEG-J su $[A\,|\,B]$, e ogni colonna si risolve per conto suo.`
          ],
          domanda: r`$A$ è $2\times2$ e $B$ è $2\times3$. Di che tipo è $X$ in $AX=B$?`,
          risposta: r`$2\times3$: $X$ deve avere $2$ righe perché $AX$ sia definito, e tante colonne quante $B$.` }
      ]
    },
    3: {
      seconda: ['conseguenze'],
      passi: [
        { h2: 'prodotto', titolo: 'Invertibilità del prodotto',
          frase: r`Un prodotto di matrici quadrate è invertibile solo se lo sono entrambi i fattori.`,
          punti: [
            r`$AB$ invertibile $\iff$ $A$ e $B$ invertibili.`,
            r`Con matrici rettangolari è falso.`
          ],
          domanda: r`Quanto vale $(ABC)^{-1}$, se $A,B,C$ sono invertibili?`,
          risposta: r`$C^{-1}B^{-1}A^{-1}$: si disfa partendo dall'ultima.` },
        { h2: 'vettori', titolo: 'Vettori geometrici',
          frase: r`Un vettore è uno spostamento: contano direzione, verso e lunghezza, non dove lo disegni.`,
          punti: [
            r`Somma: metti il secondo vettore dove finisce il primo.`,
            r`Con un riferimento ogni vettore diventa $(x,y)$, e le operazioni diventano conti sulle componenti.`
          ],
          domanda: r`$\vec u=(2,1)$, $\vec v=(-1,3)$: quanto vale $\vec u+2\vec v$?`,
          risposta: r`$(2,1)+(-2,6)=(0,7)$.` },
        { h2: 'spazi', titolo: 'Spazi vettoriali',
          frase: r`Uno spazio vettoriale è qualunque insieme in cui somma e multipli funzionano come con le frecce.`,
          punti: [
            r`Servono due operazioni che restano dentro l'insieme e otto regole, gli assiomi (i)–(viii).`,
            r`I primi quattro riguardano la somma, gli altri il prodotto per scalare.`,
            r`Da qui in poi «vettore» non vuol dire più «freccia»: anche una matrice è un vettore.`
          ],
          domanda: r`I polinomi di grado esattamente $2$ formano uno spazio vettoriale?`,
          risposta: r`No: $(x^2+1)+(-x^2)=1$ ha grado $0$, quindi la somma esce dall'insieme. Con grado $\le2$ invece funziona.` },
        { h2: 'applicazioni', titolo: 'Applicazioni',
          frase: r`Una funzione si classifica contando quante controimmagini ha ogni punto del codominio.`,
          punti: [
            r`Ogni $x$ ha esattamente un'immagine, ma un $y$ può avere zero, una o molte controimmagini.`,
            r`$f^{-1}(B)$, con $B$ insieme, è la controimmagine, ed esiste sempre.`
          ],
          domanda: r`$f(x)=x^2$ da $\R$ in $\R$ è iniettiva? È suriettiva?`,
          risposta: r`Non è iniettiva, perché $f(-1)=f(1)$. Non è suriettiva, perché nessun $x$ dà $-1$.` },
        { h2: 'sottospazi', titolo: 'Sottospazi e span',
          frase: r`Un sottospazio è un pezzo di spazio chiuso: sommando e moltiplicando non si esce mai.`,
          punti: [
            r`Contiene sempre $\vzero$: se non c'è, non è un sottospazio.`,
            r`Una combinazione lineare è una somma di multipli. Lo <strong>span</strong> è l'insieme di tutte le combinazioni, ed è sempre un sottospazio.`,
            r`Le soluzioni di $A\vx=\vzero$ sono un sottospazio, quelle di $A\vx=\vb$ con $\vb\ne\vzero$ no.`
          ],
          domanda: r`$\{(x,y):x+y=1\}$ è un sottospazio di $\R^2$?`,
          risposta: r`No: $(0,0)$ non ci sta, perché $0+0\ne1$.` }
      ]
    },
    4: {
      seconda: [],
      passi: [
        { h2: 'richiami', titolo: 'Richiami essenziali',
          frase: r`Un numero complesso è $x+iy$ con la regola $i^2=-1$: si può sempre dividere, ma non si può confrontare.`,
          punti: [
            r`$z\bar z=|z|^2$ è il trucco per dividere.`,
            r`$\C$ è un campo: è tutto ciò che serve al MEG.`
          ],
          domanda: r`Quanto vale $(1+i)(1-i)$?`,
          risposta: r`$1-i^2=1+1=2$.` },
        { h2: 'sistemi', titolo: r`Sistemi lineari su $\C$`,
          frase: r`Su $\C$ non cambia niente: MEG, rango e Rouché-Capelli funzionano uguale.`,
          punti: [
            r`Il MEG usa solo somma, prodotto e divisione per elementi non nulli.`,
            r`Gli errori sono di aritmetica: tieni a mente $(1+i)(1-i)=2$ e $(1+i)^2=2i$.`
          ],
          domanda: r`Perché $R_2-iR_1$ azzera la seconda riga di $\begin{bmatrix}i&1\\-1&i\end{bmatrix}$?`,
          risposta: r`Perché $-1-i\cdot i=-1+1=0$ e $i-i\cdot1=0$.` },
        { h2: 'tfa', titolo: 'Teorema fondamentale dell\'algebra',
          frase: r`In $\C$ ogni polinomio di grado $n\ge1$ si spezza in $n$ fattori di primo grado.`,
          punti: [
            r`Ha sempre almeno una radice, e iterando $P(z)=a_n(z-z_1)\cdots(z-z_n)$.`,
            r`Le radici si contano con la loro molteplicità.`,
            r`Servirà per gli autovalori: su $\C$ ogni matrice quadrata ne ha.`
          ],
          domanda: r`Quali sono le radici di $z^2+4$?`,
          risposta: r`$z=2i$ e $z=-2i$: infatti $z^2+4=(z-2i)(z+2i)$.` }
      ]
    },
    6: {
      seconda: ['rs-lab', 'piani-param', 'piani-misti', 'inclusione', 'perp-esempi', 'fascio-extra'],
      passi: [
        { h2: 'metodo', titolo: 'Un solo metodo',
          frase: r`Due oggetti si incontrano dove valgono entrambe le equazioni: basta scrivere quel sistema e leggerlo.`,
          punti: [
            r`Le tabelle dei casi non vanno imparate: ogni riga è Rouché-Capelli letto sul disegno.`,
            r`Due rette sono parallele se le loro direzioni sono dipendenti.`
          ],
          domanda: r`Che cosa vuol dire, geometricamente, che il sistema dell'intersezione non ha soluzioni?`,
          risposta: r`Che i due oggetti non hanno punti in comune.` },
        { h2: 'rette-piano', titolo: 'Due rette nel piano',
          frase: r`Due rette nel piano sono incidenti, parallele o coincidenti, e lo dice il sistema.`,
          punti: [
            r`Il sistema è $A(t,s)^T=\vb$, con $A=[\vec v_1|-\vec v_2]$ e $\vb=\vec r_2-\vec r_1$.`,
            r`Direzioni indipendenti: si incontrano in un punto.`,
            r`Direzioni dipendenti: parallele, e coincidono se anche $\vb$ è multiplo della direzione.`
          ],
          domanda: r`$2x+4y=1$ e $3x+6y=2$ che rette sono?`,
          risposta: r`$r(A)=1$ e $r([A|\vb])=2$: nessuna soluzione, quindi parallele distinte.` },
        { h2: 'rette-spazio', titolo: 'Due rette nello spazio',
          frase: r`Nello spazio c'è un caso in più: due rette possono non incontrarsi senza essere parallele. Sono sghembe.`,
          punti: [
            r`Il sistema è lo stesso, ma $\vb$ ha tre componenti, e $r([A|\vb])$ può arrivare a $3$.`,
            r`Usa due parametri diversi, $t$ e $s$: lo stesso punto può avere valori diversi sulle due rette.`
          ],
          domanda: r`Due rette hanno direzioni indipendenti e $r([A|\vb])=3$. Che rette sono?`,
          risposta: r`Sghembe: il sistema non ha soluzioni e le direzioni non sono parallele.` },
        { h2: 'piani', titolo: 'Due piani',
          frase: r`Due piani nello spazio sono paralleli, coincidenti oppure si tagliano in una retta. Mai in un punto solo.`,
          punti: [
            r`$ax+by+cz=d$ è un piano perché lascia due incognite libere.`,
            r`$r(A)=1$: stessa giacitura. $r(A)=2$: si tagliano, con un parametro libero.`
          ],
          domanda: r`$x+y-z=1$ e $z-x-y=2$ che piani sono?`,
          risposta: r`I coefficienti della seconda sono $-1$ volte quelli della prima, ma i termini noti non tornano: paralleli distinti.` },
        { h2: 'retta-piano', titolo: 'Una retta e un piano',
          frase: r`Una retta incontra un piano in un punto, in nessun punto, oppure ci sta dentro.`,
          punti: [
            r`Con la retta parametrica e il piano cartesiano: sostituisci $x,y,z$ nell'equazione del piano.`,
            r`Il risultato dice quale dei tre casi è: lo schema li mostra tutti.`
          ],
          domanda: r`$\Pi:\ x+y+z=1$ e $l:\ (1,1,-1)+t(1,0,1)$: che cosa succede?`,
          risposta: r`Sostituendo, $(1+t)+1+(-1+t)=1$, cioè $t=0$. Si incontrano in $(1,1,-1)$.` },
        { h2: 'rette-cart', titolo: 'Rette con equazioni cartesiane',
          frase: r`Nello spazio una retta è l'intersezione di due piani: si scrive con due equazioni.`,
          punti: [
            r`La direzione sta nei coefficienti, la posizione nei termini noti.`,
            r`Cambiare un termine noto sposta la retta senza ruotarla.`,
            r`Il sistema omogeneo descrive la retta parallela che passa per l'origine.`
          ],
          domanda: r`Perché servono due equazioni con coefficienti indipendenti?`,
          risposta: r`Perché in $\R^3$ il rango $2$ lascia $3-2=1$ parametro libero, cioè una retta.` },
        { h2: 'ortogonalita', titolo: 'Ortogonalità',
          frase: r`Due vettori sono ortogonali se il loro prodotto scalare è zero, e i coefficienti di un piano sono la sua normale.`,
          punti: [
            r`$\langle\vx,\vy\rangle=x_1y_1+\dots+x_ny_n$.`,
            r`$(a,b,c)$ è ortogonale al piano $ax+by+cz=d$.`,
            r`$\vec u$ è perpendicolare al piano se è multiplo di $(a,b,c)$, parallelo se $au_1+bu_2+cu_3=0$.`
          ],
          domanda: r`$\vec u=(1,1,1)$ è parallelo al piano $-x-y+2z=2$?`,
          risposta: r`Sì: $-1-1+2=0$, quindi soddisfa l'omogenea associata.` },
        { h2: 'fasci', titolo: 'Fasci',
          frase: r`Un fascio è una famiglia di rette o piani descritta da un parametro: poi una condizione sceglie quello giusto.`,
          punti: [
            r`Nel fascio dei piani per una retta, $(p,q)$ e $(2p,2q)$ danno lo stesso piano.`,
            r`Per questo una condizione sola basta a individuarlo.`
          ],
          domanda: r`Trova il piano parallelo a $2x+3y+4z=5$ che passa per $(-1,0,1)$.`,
          risposta: r`Nel fascio $2x+3y+4z=q$ si sostituisce il punto: $-2+0+4=2$, quindi $q=2$.` }
      ]
    },
    7: {
      seconda: ['riferimento-piano', 'completa-pn', 'grassmann-lab'],
      passi: [
        { h2: 'completamento', titolo: 'Completamento a una base',
          frase: r`Se hai dei vettori indipendenti, puoi sempre aggiungerne altri fino ad arrivare a una base.`,
          punti: [
            r`Metti in colonna prima i tuoi vettori, poi la base canonica.`,
            r`Riduci a scala e prendi le colonne dei pivot dalla matrice di partenza.`,
            r`L'ordine conta: con la canonica davanti, i tuoi vettori resterebbero fuori.`
          ],
          domanda: r`Perché si controlla prima che i vettori dati siano indipendenti?`,
          risposta: r`Perché se sono dipendenti nessuna aggiunta li farà diventare parte di una base.` },
        { h2: 'intersezione', titolo: 'Intersezione',
          frase: r`L'intersezione di sottospazi è ancora un sottospazio, l'unione di solito no.`,
          punti: [
            r`Se sono dati con equazioni: si mettono insieme tutte le equazioni.`,
            r`Se sono dati con gli span: si cerca un vettore comune, risolvendo un sistema.`
          ],
          domanda: r`I vettori comuni ai piani $x+y+z=0$ e $x-z=0$ di $\R^3$ che cosa formano?`,
          risposta: r`Una retta per l'origine: il sistema delle due equazioni ha rango $2$, quindi $3-2=1$ parametro.` },
        { h2: 'somma', titolo: 'Somma di sottospazi',
          frase: r`La somma $W_1+W_2$ è il più piccolo sottospazio che contiene entrambi.`,
          punti: [
            r`I suoi vettori sono $\vw_1+\vw_2$, con $\vw_1\in W_1$ e $\vw_2\in W_2$.`,
            r`Per generarla basta mettere insieme i generatori dei due.`,
            r`Per una base si prendono le colonne dei pivot.`
          ],
          domanda: r`$W_1=\operatorname{span}\{(1,0,0)\}$, $W_2=\operatorname{span}\{(0,1,0)\}$. Che cos'è $W_1+W_2$?`,
          risposta: r`Il piano $z=0$, cioè $\operatorname{span}\{(1,0,0),(0,1,0)\}$.` },
        { h2: 'diretta', titolo: 'Somma diretta',
          frase: r`La somma diretta $U\oplus V$ è lo spazio delle coppie $(\vu,\vv)$: incolla due spazi qualsiasi.`,
          punti: [
            r`Le operazioni si fanno componente per componente.`,
            r`Una base si ottiene unendo una base di $U$ e una di $V$, quindi le dimensioni si sommano.`
          ],
          domanda: r`Quanto vale $\dim(\R^3\oplus\R^2)$?`,
          risposta: r`$3+2=5$.` },
        { h2: 'grassmann', titolo: 'Formula di Grassmann',
          frase: r`Sommando le dimensioni di due sottospazi, l'intersezione viene contata due volte: per questo va tolta.`,
          punti: [
            r`Negli esercizi: il rango di tutti i generatori dà $\dim(W_1+W_2)$.`,
            r`La formula dà poi $\dim(W_1\cap W_2)$ senza risolvere nessun sistema.`
          ],
          domanda: r`Due piani distinti per l'origine generano $\R^3$. Quanto vale la dimensione della loro intersezione?`,
          risposta: r`$3=2+2-d$, quindi $d=1$: una retta.` },
        { h2: 'interna', titolo: 'Somma diretta interna',
          frase: r`Se due sottospazi si toccano solo in $\vzero$, la loro somma è diretta.`,
          punti: [
            r`$W_1\cap W_2=\{\vzero\}\iff W_1+W_2\cong W_1\oplus W_2$.`,
            r`Allora si scrive $W=W_1\oplus W_2$, anche dentro uno stesso spazio.`
          ],
          domanda: r`Si può avere $\R^3=W_1\oplus W_2$ con due piani per l'origine?`,
          risposta: r`No: due piani per l'origine hanno in comune almeno una retta, e infatti $2+2\ne3$.` },
        { h2: 'complementi', titolo: 'Complementi',
          frase: r`Un complemento di $W$ è ciò che manca per arrivare a tutto lo spazio in modo diretto.`,
          punti: [
            r`Si prende una base di $W$, la si completa, e i vettori aggiunti generano un complemento.`,
            r`Il complemento ortogonale $W^\perp$ è fatto dai vettori perpendicolari a tutto $W$.`
          ],
          domanda: r`Perché non si dice «il» complemento?`,
          risposta: r`Perché non è unico: per un piano per l'origine di $\R^3$ va bene qualunque retta per l'origine fuori dal piano.` },
        { h2: 'm-spazi', titolo: 'Più di due spazi',
          frase: r`La somma diretta funziona con quanti spazi vuoi: ogni vettore si scrive in un solo modo come somma di pezzi.`,
          punti: [
            r`$V=\bigoplus_i W_i$ se ogni $\vv$ si scrive in un solo modo come $\vw_1+\dots+\vw_m$.`
          ],
          domanda: r`Scomponi $(2,5,7)$ lungo $\operatorname{span}\{\mathbf e_1\}$, $\operatorname{span}\{\mathbf e_2\}$, $\operatorname{span}\{\mathbf e_3\}$.`,
          risposta: r`$(2,0,0)+(0,5,0)+(0,0,7)$, e non c'è un altro modo.` }
      ]
    },
    8: {
      seconda: ['kron-base', 'fibonacci', 'endomorfismo', 'ipervolume'],
      passi: [
        { h2: 'definizione', titolo: 'Definizione',
          frase: r`Il determinante è il numero che segue le mosse del MEG: ogni mossa dice come cambia.`,
          punti: [
            r`Le tre mosse del MEG, più il valore sulla matrice finale: questa è la definizione.`,
            r`Per questo la definizione è già un modo di calcolarlo.`
          ],
          domanda: r`Quanto vale $\begin{vmatrix}2&5\\0&3\end{vmatrix}$?`,
          risposta: r`È triangolare alta: $2\cdot3=6$. Con la formula: $6-0=6$.` },
        { h2: 'con-meg', titolo: 'Calcolo con il MEG',
          frase: r`Per calcolare un determinante si riduce a scala, tenendo il conto di segni e fattori.`,
          punti: [
            r`Alla fine si moltiplicano i numeri sulla diagonale.`,
            r`$\det A\ne0\iff r(A)=n$.`,
            r`Sarrus funziona solo per l'ordine $3$.`
          ],
          domanda: r`Una matrice $3\times3$ ha rango $2$. Quanto vale il suo determinante?`,
          risposta: r`$0$, perché $\det A\ne0$ solo se $r(A)=3$.` },
        { h2: 'trasposta', titolo: 'Trasposta e colonne',
          frase: r`$\det(A^T)=\det A$, quindi tutto quello che vale per le righe vale anche per le colonne.`,
          punti: [
            r`Per un determinante puoi mescolare operazioni su righe e colonne.`,
            r`Una triangolare bassa ha come determinante il prodotto della diagonale.`
          ],
          domanda: r`Perché nel MEG per un sistema non si possono usare le colonne?`,
          risposta: r`Perché le operazioni sulle colonne cambiano le soluzioni del sistema. Il determinante invece le sopporta.` },
        { h2: 'laplace', titolo: 'Sviluppi di Laplace',
          frase: r`Laplace riduce un determinante grande a determinanti più piccoli, sviluppando lungo una riga o una colonna.`,
          punti: [
            r`$C_{ij}=(-1)^{i+j}\det(A_{ij})$, dove $A_{ij}$ è $A$ senza riga $i$ e colonna $j$.`,
            r`$\det A$ è la somma, lungo la riga scelta, di elemento per cofattore.`,
            r`Scegli la riga o la colonna con più zeri.`
          ],
          domanda: r`Che segno ha il cofattore in posizione $(2,3)$?`,
          risposta: r`$(-1)^{2+3}=-1$: negativo.` },
        { h2: 'invertibilita', titolo: 'Invertibilità e dipendenza',
          frase: r`Per una matrice quadrata, tante frasi diverse dicono la stessa cosa: $\det A\ne0$.`,
          punti: [
            r`O sono tutte vere o sono tutte false: si passa da una all'altra a seconda dell'esercizio.`,
            r`$n$ vettori di $\K^n$ sono una base se e solo se $\det[\vv_1|\dots|\vv_n]\ne0$.`,
            r`Una riga nulla o due righe proporzionali danno subito $\det A=0$.`
          ],
          domanda: r`$(1,2)$ e $(3,6)$ sono una base di $\R^2$?`,
          risposta: r`No: $\det=1\cdot6-3\cdot2=0$, perché il secondo vettore è il triplo del primo.` },
        { h2: 'binet', titolo: 'Teorema di Binet',
          frase: r`Il determinante trasforma il prodotto di matrici in prodotto di numeri.`,
          punti: [
            r`Quindi $\det(A^{-1})=1/\det A$.`,
            r`Binet riguarda il prodotto: la somma non si comporta così.`
          ],
          domanda: r`$A$ è $3\times3$ e $\det A=2$. Quanto vale $\det(2A)$?`,
          risposta: r`$2^3\cdot2=16$.` },
        { h2: 'inversa', titolo: 'Formula per l\'inversa',
          frase: r`L'inversa si può scrivere con una formula: la trasposta dei cofattori, divisa per il determinante.`,
          punti: [
            r`$A^{-1}=\dfrac{1}{\det A}\,C^{T}$. Attento a usare $C^T$, non $C$.`,
            r`Per matrici grandi il MEG-J costa molto meno.`
          ],
          domanda: r`Perché la formula non funziona se $\det A=0$?`,
          risposta: r`Perché dovresti dividere per zero: infatti $A$ non è invertibile.` },
        { h2: 'cramer', titolo: 'Regola di Cramer',
          frase: r`La regola di Cramer dà ogni incognita come rapporto di due determinanti.`,
          punti: [
            r`$x_j=\det A_j/\det A$, dove $A_j$ è $A$ con la colonna $j$ sostituita da $\vb$.`,
            r`Serve $\det A\ne0$.`,
            r`Conviene per una sola incognita o con un parametro: per tutto il sistema il MEG costa meno.`
          ],
          domanda: r`In un sistema $3\times3$, quanti determinanti servono per tutte le incognite?`,
          risposta: r`Quattro: $\det A$ più uno per ogni incognita.` },
        { h2: 'kronecker', titolo: 'Teorema di Kronecker',
          frase: r`Il rango è l'ordine del più grande minore non nullo.`,
          punti: [
            r`Un minore è il determinante di una sottomatrice quadrata.`,
            r`Parti da un minore non nullo e guarda quelli che lo orlano: se sono tutti nulli, il rango è l'ordine di partenza.`,
            r`Conviene soprattutto con un parametro.`
          ],
          domanda: r`Una matrice ha un minore di ordine $3$ non nullo. Che cosa sai del rango?`,
          risposta: r`Che $r\ge3$.` },
        { h2: 'potenze', titolo: 'Potenze e matrici simili',
          frase: r`Due matrici simili sono la stessa mappa vista in due basi: per questo hanno lo stesso determinante.`,
          punti: [
            r`$A,B$ sono simili se $B=S^{-1}AS$ con $S$ invertibile.`,
            r`$\det(A^n)=(\det A)^n$, e $B^n=S^{-1}A^nS$.`,
            r`Il viceversa è falso: stesso determinante non vuol dire simili.`
          ],
          domanda: r`$\det A=3$ e $B=S^{-1}AS$. Quanto vale $\det B$?`,
          risposta: r`$3$: per Binet $\det S^{-1}\cdot\det A\cdot\det S=\det A$.` },
        { h2: 'volumi', titolo: 'Area e volume',
          frase: r`$|\det A|$ dice di quanto una mappa dilata aree e volumi, e il segno dice se rovescia la figura.`,
          punti: [
            r`In $\R^2$ il parallelogramma di due vettori ha area $|\det[\vec u|\vec v]|$.`,
            r`Con $\det=0$ la figura viene schiacciata.`
          ],
          domanda: r`Una mappa ha $\det L=-3$. Che cosa fa a un quadrato di area $2$?`,
          risposta: r`Lo trasforma in una figura di area $6$, rovesciandone l'orientamento.` }
      ]
    }
  });
})();
