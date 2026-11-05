/* ============================================================
   Il capitolo in un punto solo.
   MAPPE: per ogni sezione una frase e la mappa dei concetti.
     nodo = { id, r (riga), t, a (ancora o link), idea, da: [prerequisiti] }
     con `ext: true` il concetto arriva da un'altra sezione.
   PRIMA: la prima lettura guidata, per ora solo la Sezione 5.
   ============================================================ */
(function () {
  'use strict';
  const r = String.raw;

  window.MAPPE = {
    0: {
      frase: r`Il vocabolario del corso: come si scrivono gli insiemi, che cos'è $\R^n$, come si leggono i quantificatori e che cosa vuol dire $\K$.`,
      nodi: [
        { id: 'notazione', r: 0, t: 'Notazione degli insiemi', a: '#notazione', idea: r`Come si scrivono insiemi e appartenenza nel linguaggio del corso.` },
        { id: 'quantificatori', r: 0, t: 'Quantificatori', a: '#quantificatori', idea: r`«Per ogni» ed «esiste»: servono a leggere tutte le definizioni che seguono.` },
        { id: 'rn', r: 1, t: r`Lo spazio $\R^n$`, a: '#rn', da: ['notazione'], idea: r`Le liste di $n$ numeri: il primo esempio di vettori.` },
        { id: 'operazioni', r: 2, t: 'Somma e multipli', a: '#operazioni', da: ['rn'], idea: r`Le due operazioni su cui si regge tutto il corso.` },
        { id: 'scalare', r: 2, t: 'Prodotto scalare', a: '#scalare', da: ['rn'], idea: r`Due vettori entrano, un numero esce.` },
        { id: 'cn', r: 2, t: r`Lo spazio $\C^n$`, a: '#cn', da: ['rn'], idea: r`Le stesse liste, con numeri complessi.` },
        { id: 'campo', r: 3, t: r`La convenzione $\K$`, a: '#campo', da: ['cn'], idea: r`Una sola lettera per dire che un risultato vale sia su $\R$ sia su $\C$.` }
      ]
    },
    1: {
      frase: r`Un sistema lineare si scrive come matrice, si riduce a scala col MEG, e dalla matrice ridotta si legge tutto: se ci sono soluzioni, quante e quali.`,
      nodi: [
        { id: 'sistemi', r: 0, t: 'Sistemi lineari', a: '#sistemi', idea: r`Che cos'è un sistema e che cosa vuol dire risolverlo.` },
        { id: 'matrici', r: 1, t: 'Dal sistema alla matrice', a: '#matrici', da: ['sistemi'], idea: r`Si tengono solo i numeri e si lavora sulla tabella.` },
        { id: 'equivalenza', r: 1, t: 'Operazioni elementari', a: '#equivalenza', da: ['sistemi'], idea: r`Le mosse che cambiano il sistema ma non le sue soluzioni.` },
        { id: 'scala', r: 2, t: 'Matrici a scala e pivot', a: '#scala', da: ['matrici'], idea: r`La forma da cui le soluzioni si leggono subito.` },
        { id: 'meg', r: 3, t: 'Metodo di Gauss (MEG)', a: '#meg', da: ['equivalenza', 'scala'], idea: r`L'algoritmo che porta ogni matrice a scala.` },
        { id: 'zeropivot', r: 4, t: 'Criterio dello 0-pivot', a: '#zeropivot', da: ['meg'], idea: r`Dice se il sistema è impossibile.` },
        { id: 'rango', r: 4, t: 'Rango e incognite libere', a: '#rango', da: ['meg'], idea: r`Dice quante soluzioni ci sono: $n-r$ parametri liberi.` }
      ]
    },
    2: {
      frase: r`Le matrici diventano oggetti da sommare e moltiplicare. Da lì arrivano la forma delle soluzioni, Rouché-Capelli, l'inversa e il modo di calcolarla.`,
      nodi: [
        { id: 'prodotto', r: 0, t: 'Prodotto di matrici', a: '#prodotto', idea: r`Righe per colonne, e l'ordine conta.` },
        { id: 'speciali', r: 1, t: 'Identità e trasposta', a: '#speciali', da: ['prodotto'], idea: r`La matrice che fa da $1$ e l'operazione che scambia righe e colonne.` },
        { id: 'struttura', r: 1, t: 'Struttura delle soluzioni', a: '#struttura', da: ['prodotto'], idea: r`Una soluzione particolare più tutte quelle dell'omogeneo.` },
        { id: 'rc', r: 2, t: 'Rouché-Capelli', a: '#rc', da: ['struttura'], idea: r`Dice se ci sono soluzioni confrontando due ranghi.` },
        { id: 'inversa', r: 2, t: 'Matrice inversa', a: '#inversa', da: ['speciali'], idea: r`La matrice che annulla l'effetto di $A$, quando esiste.` },
        { id: 'cramer', r: 3, t: 'Teorema di Cramer', a: '#cramer', da: ['rc', 'inversa'], idea: r`Un sistema quadrato ha soluzione unica se e solo se $r(A)=n$.` },
        { id: 'megj', r: 3, t: 'MEG-J', a: '#megj', da: ['inversa'], idea: r`Si prosegue il MEG fino alla matrice totalmente ridotta, e così si calcola l'inversa.` },
        { id: 'eqmatrici', r: 4, t: 'Equazioni di matrici', a: '#eqmatrici', da: ['megj'], idea: r`$AX=B$ è un gruppo di sistemi, uno per colonna.` }
      ]
    },
    3: {
      frase: r`Dalle frecce sul foglio a otto assiomi che valgono anche per polinomi e matrici. Poi i sottospazi e lo span: spazi che vivono dentro altri spazi.`,
      nodi: [
        { id: 'prodotto', r: 0, t: 'Invertibilità del prodotto', a: '#prodotto', idea: r`L'ultimo risultato sulle matrici: quando un prodotto è invertibile.` },
        { id: 'vettori', r: 0, t: 'Vettori geometrici', a: '#vettori', idea: r`Le frecce del piano e dello spazio, con somma e multipli.` },
        { id: 'spazi', r: 1, t: 'Spazi vettoriali', a: '#spazi', da: ['vettori'], idea: r`Otto assiomi: è un vettore tutto ciò che si comporta come le frecce.` },
        { id: 'applicazioni', r: 1, t: 'Applicazioni', a: '#applicazioni', idea: r`Iniettive, suriettive, biettive: il vocabolario delle funzioni.` },
        { id: 'sottospazi', r: 2, t: 'Sottospazi', a: '#sottospazio', da: ['spazi'], idea: r`Un pezzo di spazio che resta chiuso rispetto alle operazioni.` },
        { id: 'combinazioni', r: 2, t: 'Combinazioni lineari', a: '#combinazioni', da: ['spazi'], idea: r`Somme di multipli di vettori dati.` },
        { id: 'span', r: 3, t: 'Span', a: '#span', da: ['sottospazi', 'combinazioni'], idea: r`Tutte le combinazioni di certi vettori: è sempre un sottospazio.` },
        { id: 'omogeneo', r: 3, t: r`Soluzioni di $A\vx=\vzero$`, a: '#omogeneo', da: ['sottospazi'], idea: r`Formano un sottospazio: il primo ponte fra sistemi e spazi vettoriali.` }
      ]
    },
    4: {
      frase: r`Il campo $\C$ visto dall'algebra lineare: i sistemi si risolvono come su $\R$, e il teorema fondamentale dell'algebra prepara gli autovalori.`,
      nodi: [
        { id: 'richiami', r: 0, t: 'Richiami', a: '#richiami', idea: r`L'essenziale sui numeri complessi, in poche righe.` },
        { id: 'sistemi', r: 1, t: r`Sistemi su $\C$`, a: '#sistemi', da: ['richiami'], idea: r`Il MEG funziona uguale, perché in $\C$ si può dividere: cambia solo l'aritmetica.` },
        { id: 'tfa', r: 1, t: 'Teorema fondamentale', a: '#tfa', da: ['richiami'], idea: r`Il teorema fondamentale dell'algebra, enunciato nel paragrafo.` },
        { id: 'perche', r: 2, t: 'Perché serve', a: '#perche', da: ['tfa'], idea: r`Garantisce che ogni matrice quadrata abbia autovalori.` }
      ]
    },
    5: {
      frase: r`Una matrice non è solo una tabella: è una mappa. Le basi danno numeri ai vettori, così ogni mappa lineare diventa una matrice, e tutto il capitolo arriva a dire che le dimensioni perse più quelle rimaste fanno il dominio.`,
      nodi: [
        { id: 'span', r: 0, t: 'Span', a: '3-spazi.html#span', ext: true, idea: r`Dalla Sezione 3: tutte le combinazioni di certi vettori. Se non ti è chiaro, parti da lì.` },
        { id: 'lineari', r: 0, t: 'Applicazioni lineari', a: '#lineari', idea: r`Le funzioni che rispettano somma e multipli: $A\vx$ è una di queste.` },
        { id: 'nucleo', r: 1, t: 'Nucleo e immagine', a: '#nucleo', da: ['lineari'], idea: r`Che cosa viene cancellato e dove si può arrivare.` },
        { id: 'inversa', r: 1, t: 'Inversa', a: '#inversa', da: ['lineari'], idea: r`Tornare indietro: per $L_A$ è la stessa cosa di $A$ invertibile.` },
        { id: 'basi', r: 1, t: 'Basi e dimensione', a: '#basi', da: ['span'], idea: r`I passi con cui raggiungi ogni vettore in un solo modo. Le dosi sono le coordinate.` },
        { id: 'rappr', r: 2, t: 'Matrice rappresentativa', a: '#rappresentativa', da: ['lineari', 'basi'], idea: r`Scelte le basi, ogni mappa lineare diventa una matrice.` },
        { id: 'iso', r: 2, t: 'Isomorfismi', a: '#isomorfismi', da: ['inversa', 'basi'], idea: r`Le coordinate trasformano ogni spazio di dimensione $n$ in $\K^n$: polinomi compresi.` },
        { id: 'dip', r: 2, t: 'Dipendenza lineare', a: '#dipendenza', da: ['basi'], idea: r`Quando un vettore è ridondante. Si controlla col rango.` },
        { id: 'passaggio', r: 3, t: 'Passaggio tra basi', a: '#passaggio', da: ['rappr'], idea: r`Lo stesso vettore in due basi: la matrice $S$ traduce le coordinate.` },
        { id: 'rette', r: 3, t: 'Rette e piani', a: '#rette-piani', da: ['nucleo'], idea: r`Un punto più uno span: la stessa forma delle controimmagini.` },
        { id: 'bspan', r: 3, t: 'Basi di span e nucleo', a: '#basi-span', da: ['dip', 'nucleo'], idea: r`Si tolgono i vettori ridondanti, e il MEG dice quali restano.` },
        { id: 'rango', r: 4, t: 'Rango + nullità', a: '#rango', da: ['rappr', 'bspan'], idea: r`Il punto d'arrivo: $r(L)+\dim\ker L=\dim V$.` }
      ]
    },
    6: {
      frase: r`Una sola idea per ogni coppia di oggetti: scrivi il sistema dell'intersezione e leggilo con Rouché-Capelli. Poi il prodotto scalare aggiunge l'ortogonalità e i fasci raccolgono famiglie di rette e piani.`,
      nodi: [
        { id: 'metodo', r: 0, t: 'Un solo metodo', a: '#metodo', idea: r`Si scrive il sistema dell'intersezione e si confrontano i ranghi.` },
        { id: 'rp', r: 1, t: 'Due rette nel piano', a: '#rette-piano', da: ['metodo'], idea: r`Il caso più semplice della ricetta.` },
        { id: 'rs', r: 1, t: 'Due rette nello spazio', a: '#rette-spazio', da: ['metodo'], idea: r`Qui compaiono le rette sghembe.` },
        { id: 'piani', r: 1, t: 'Due piani', a: '#piani', da: ['metodo'], idea: r`La stessa ricetta con due equazioni in tre incognite.` },
        { id: 'rpl', r: 1, t: 'Retta e piano', a: '#retta-piano', da: ['metodo'], idea: r`Un punto, nessuno, oppure la retta sta nel piano.` },
        { id: 'cart', r: 2, t: 'Rette cartesiane', a: '#rette-cart', da: ['rs', 'piani'], idea: r`Nello spazio una retta si scrive con due equazioni.` },
        { id: 'orto', r: 2, t: 'Ortogonalità', a: '#ortogonalita', da: ['piani'], idea: r`Il prodotto scalare dà il vettore normale a un piano.` },
        { id: 'fasci', r: 3, t: 'Fasci', a: '#fasci', da: ['cart'], idea: r`I piani paralleli a un piano dato, o quelli che passano per una retta.` }
      ]
    },
    7: {
      frase: r`Come si completa una base, come si combinano due sottospazi e perché la dimensione della somma non è la somma delle dimensioni: la differenza è l'intersezione.`,
      nodi: [
        { id: 'completamento', r: 0, t: 'Completamento a una base', a: '#completamento', idea: r`Da vettori indipendenti si arriva a una base aggiungendone altri.` },
        { id: 'intersezione', r: 0, t: 'Intersezione', a: '#intersezione', idea: r`I vettori che stanno in entrambi i sottospazi: è ancora un sottospazio.` },
        { id: 'somma', r: 1, t: 'Somma di sottospazi', a: '#somma', da: ['intersezione'], idea: r`L'unione non è un sottospazio: la somma ne prende il posto.` },
        { id: 'diretta', r: 2, t: 'Somma diretta', a: '#diretta', da: ['somma'], idea: r`Le coppie di vettori presi da due spazi, con le operazioni componente per componente.` },
        { id: 'grassmann', r: 2, t: 'Formula di Grassmann', a: '#grassmann', da: ['somma', 'completamento'], idea: r`$\dim(W_1+W_2)=\dim W_1+\dim W_2-\dim(W_1\cap W_2)$.` },
        { id: 'interna', r: 3, t: 'Interna ed esterna', a: '#interna', da: ['diretta', 'grassmann'], idea: r`Se l'intersezione è banale, somma e somma diretta sono la stessa cosa.` },
        { id: 'complementi', r: 4, t: 'Complementi', a: '#complementi', da: ['interna', 'completamento'], idea: r`Il sottospazio che, sommato a $W$ in modo diretto, dà tutto $V$.` },
        { id: 'mspazi', r: 4, t: 'Più di due spazi', a: '#m-spazi', da: ['interna'], idea: r`La somma diretta con un numero finito qualsiasi di spazi.` }
      ]
    },
    8: {
      frase: r`Un solo numero per ogni matrice quadrata: dice se è invertibile, dà formule per l'inversa e per i sistemi, e misura quanto una mappa dilata i volumi.`,
      nodi: [
        { id: 'def', r: 0, t: 'Definizione', a: '#definizione', idea: r`Il numero associato a una matrice quadrata, e il caso $2\times2$.` },
        { id: 'meg', r: 1, t: 'Calcolo col MEG', a: '#con-meg', da: ['def'], idea: r`Si riduce a scala, tenendo il conto dei segni e dei fattori.` },
        { id: 'trasposta', r: 1, t: 'Trasposta e colonne', a: '#trasposta', da: ['def'], idea: r`Quello che vale per le righe vale per le colonne.` },
        { id: 'volumi', r: 1, t: 'Area e volume', a: '#volumi', da: ['def'], idea: r`$|\det|$ misura quanto una mappa dilata aree e volumi.` },
        { id: 'laplace', r: 2, t: 'Sviluppi di Laplace', a: '#laplace', da: ['trasposta'], idea: r`Si calcola sviluppando lungo una riga o una colonna.` },
        { id: 'inv', r: 2, t: 'Invertibilità', a: '#invertibilita', da: ['meg'], idea: r`$\det A\ne0$ dice la stessa cosa di $r(A)=n$.` },
        { id: 'binet', r: 3, t: 'Teorema di Binet', a: '#binet', da: ['inv'], idea: r`$\det(AB)=\det A\,\det B$.` },
        { id: 'inversa', r: 3, t: 'Formula per l\'inversa', a: '#inversa', da: ['laplace', 'inv'], idea: r`$A^{-1}$ scritta con i cofattori e con $\det A$.` },
        { id: 'kronecker', r: 3, t: 'Kronecker', a: '#kronecker', da: ['laplace', 'inv'], idea: r`Il rango si trova coi minori.` },
        { id: 'cramer', r: 4, t: 'Regola di Cramer', a: '#cramer', da: ['inversa'], idea: r`$x_j=\det A_j/\det A$.` },
        { id: 'potenze', r: 4, t: 'Potenze e simili', a: '#potenze', da: ['binet'], idea: r`$\det(A^n)=(\det A)^n$, e le matrici simili.` }
      ]
    }
  };

  window.PRIMA = {
    5: {
      // parti che alla prima lettura restano nascoste: tornano con «Mostra tutto»
      seconda: ['rappr-generale', 'trasformazione', 'passaggio-riferimenti', 'cambio-origine', 'ellisse', 'param-cart', 'davvero', 'osservazioni', 'dip-lineari', 'esempio-p2', 'punti-piano'],
      passi: [
        { h2: 'lineari', titolo: 'Applicazioni lineari',
          perche: r`Finora $A\vx=\vb$ era un sistema da risolvere. Da qui lo guardi in un altro modo: $A$ è una macchina che prende $\vx$ e restituisce $A\vx$, e risolvere il sistema vuol dire chiedersi <em>chi finisce in $\vb$</em>.`,
          idea: r`Una mappa è lineare se rispetta le due operazioni: sommare prima o dopo averla applicata dà lo stesso risultato, e lo stesso vale per i multipli. Per esempio $L(x,y)=(x+y,\ 2x)$ è lineare, mentre $L(x,y)=(x+1,\ y)$ non lo è, perché manda $\vzero$ in $(1,0)$.`,
          domanda: r`$f(x,y)=(x^2,\ y)$ è lineare? Perché?`,
          risposta: r`No. $f(2,0)=(4,0)$, ma $2f(1,0)=(2,0)$: non rispetta i multipli. Nota che $f(\vzero)=\vzero$: quel test serve a escludere, ma da solo non basta a promuovere.` },
        { h2: 'nucleo', titolo: 'Nucleo e immagine',
          perche: r`Ogni mappa si descrive con due domande: <em>che cosa viene cancellato?</em> e <em>dove si può arrivare?</em> Il nucleo risponde alla prima, l'immagine alla seconda.`,
          idea: r`Il nucleo è ciò che finisce in $\vzero$ e sta nel dominio. L'immagine è ciò che si può raggiungere e sta nel codominio. Per esempio $L(x,y)=(x,0)$ schiaccia il piano sull'asse $x$: il nucleo è l'asse $y$, l'immagine è l'asse $x$. Le soluzioni di $L(\vv)=\vw_0$, quando esistono, sono una copia del nucleo spostata.`,
          domanda: r`Con $L(x,y)=(x,0)$, chi va in $(3,0)$? E in $(3,1)$?`,
          risposta: r`In $(3,0)$ va tutta la retta verticale $x=3$, cioè $(3,0)+\ker L$. In $(3,1)$ non va nessuno, perché quel punto non sta nell'immagine.` },
        { h2: 'inversa', titolo: "L'applicazione inversa",
          perche: r`Se una mappa non cancella niente e arriva ovunque, si può tornare indietro. Serve a collegare le mappe a una cosa che già conosci: la matrice inversa.`,
          idea: r`Per $L_A$ tornare indietro vuol dire risolvere $A\vx=\vy$, e questo si può fare sempre e in un modo solo esattamente quando $A$ è invertibile. Per esempio $L(x,y)=(2x,\ y)$ allarga in orizzontale, e l'inversa $L^{-1}(x,y)=(\tfrac12x,\ y)$ restringe.`,
          domanda: r`$L_A$ con $A=\begin{bmatrix}1&2\\2&4\end{bmatrix}$ è biettiva?`,
          risposta: r`No. La seconda riga è il doppio della prima, quindi $r(A)=1$ e $A$ non è invertibile. Per esempio $(2,-1)$ finisce in $\vzero$, quindi $L_A$ non è nemmeno iniettiva.` },
        { h2: 'basi', titolo: 'Basi e dimensione',
          perche: r`Per fare conti servono numeri, e per dare numeri a un vettore serve un riferimento. Una base è esattamente questo. <strong>È il punto chiave del capitolo:</strong> se qui non è chiaro, tutto quello che segue sembra magia.`,
          idea: r`Una base è un insieme di vettori che fanno da <em>passi</em>: ogni vettore dello spazio si raggiunge con quei passi, e in un modo solo. Quanti passi fai lungo ciascuno sono le <strong>coordinate</strong>. Per esempio, con $\vv_1=(1,1)$ e $\vv_2=(1,-1)$ il punto $(3,1)$ ha coordinate $(2,1)$, perché $2\vv_1+\vv_2=(3,1)$. Il punto è lo stesso, i numeri no. La dimensione è quanti passi servono, e non dipende dalla base scelta.`,
          lab: 'livello-1',
          domanda: r`$\{(1,0),(0,1),(1,1)\}$ è una base di $\R^2$? Quale parte della definizione fallisce?`,
          risposta: r`No. Ogni vettore si raggiunge, ma non in un modo solo: $(1,1)=1\cdot(1,0)+1\cdot(0,1)$ e anche $(1,1)=1\cdot(1,1)$. Fallisce l'unicità: i vettori sono troppi.` },
        { h2: 'rappresentativa', titolo: 'La matrice rappresentativa',
          perche: r`Con le coordinate ogni vettore è diventato una lista di numeri. Ora succede la stessa cosa alle mappe: ogni mappa lineare diventa una matrice.`,
          idea: r`Basta sapere dove finiscono i vettori della base, perché il resto segue per linearità. Quei risultati, messi in colonna, sono la matrice. Per esempio $L(x,y)=(x+y,\ 2x)$ ha $L(\mathbf e_1)=(1,2)$ e $L(\mathbf e_2)=(1,0)$, quindi $A=\begin{bmatrix}1&1\\2&0\end{bmatrix}$. Anche trovare le coordinate è un sistema: $\vx=S\mathbf c$, con i vettori della base nelle colonne di $S$.`,
          lab: 'livello-4',
          domanda: r`Qual è la matrice di $L(x,y)=(y,\ x)$?`,
          risposta: r`$L(\mathbf e_1)=(0,1)$ e $L(\mathbf e_2)=(1,0)$, quindi $A=\begin{bmatrix}0&1\\1&0\end{bmatrix}$. Le immagini vanno nelle colonne, non nelle righe.` },
        { h2: 'isomorfismi', titolo: 'Basi e isomorfismi',
          perche: r`Polinomi e matrici non si disegnano e non sono colonne di numeri. Eppure tutto quello che sai su $\K^n$ vale anche per loro, e questo paragrafo spiega perché.`,
          idea: r`Scelta una base, le coordinate traducono ogni vettore in una lista di $n$ numeri senza perdere informazione. Un isomorfismo è proprio questo: un cambio di nomi. Per esempio in $P_2$, con la base $\{1,x,x^2\}$, il polinomio $3-x+2x^2$ diventa $(3,-1,2)$, e da lì si lavora in $\R^3$. In $\K^n$, poi, $n$ vettori sono una base esattamente quando la matrice $S$ che li ha per colonne è invertibile.`,
          domanda: r`Quanto vale $\dim P_3$, e a quale $\R^n$ è isomorfo $P_3$?`,
          risposta: r`$\dim P_3=4$, perché la base $1,x,x^2,x^3$ ha quattro elementi. Quindi $P_3$ è isomorfo a $\R^4$. L'errore classico è dire $3$.` },
        { h2: 'passaggio', titolo: 'Passaggio tra basi',
          perche: r`Stesso vettore, due basi, due liste di coordinate. Serve un traduttore.`,
          idea: r`La matrice di passaggio $S$ ha per colonne i vettori nuovi scritti nella base vecchia, e trasforma le coordinate nuove in quelle vecchie: $\mathbf c=S\tilde{\mathbf c}$. Sembra al contrario, ma ha senso: se sai scrivere i vettori nuovi nella lingua vecchia, sai tradurre dal nuovo al vecchio. Per esempio, dalla base canonica a $\{(1,1),(1,-1)\}$ si ha $S=\begin{bmatrix}1&1\\1&-1\end{bmatrix}$, e le coordinate nuove $(2,1)$ diventano $S(2,1)=(3,1)$.`,
          lab: 'livello-2',
          domanda: r`Con quella stessa $S$, le coordinate nuove $\tilde{\mathbf c}=(0,1)$ a che cosa corrispondono?`,
          risposta: r`$\mathbf c=S(0,1)=(1,-1)$, cioè la seconda colonna di $S$: è il secondo vettore nuovo, ed è logico, perché $(0,1)$ vuol dire un passo lungo quel vettore.` },
        { h2: 'rette-piani', titolo: 'Rette e piani',
          perche: r`Le stesse idee descrivono gli oggetti geometrici: una retta è un punto più tutti i multipli di una direzione.`,
          idea: r`Una retta è $\mathbf r_0+t\mathbf a$ e un piano è $\mathbf r_0+t\mathbf u+s\mathbf v$: un punto di partenza più uno span. È la stessa forma delle controimmagini, soluzione particolare più nucleo. La forma cartesiana dà le equazioni, quella parametrica dà i punti, e col MEG si passa dalla prima alla seconda. Per esempio $x+y=2$ nel piano diventa $(2,0)+t(-1,1)$.`,
          domanda: r`Scrivi in forma parametrica la retta $y=2x$ del piano.`,
          risposta: r`$(0,0)+t(1,2)$: passa per l'origine e ha direzione $(1,2)$. Controllo: i punti sono $(t,2t)$, e $2t=2\cdot t$.` },
        { h2: 'dipendenza', titolo: 'Dipendenza lineare',
          perche: r`Come fai a sapere se dei vettori sono una base senza provare tutti i vettori dello spazio? Con l'indipendenza e il rango.`,
          idea: r`Dei vettori sono dipendenti quando uno è ridondante, cioè si ottiene dagli altri. In formula: esiste una combinazione nulla con coefficienti non tutti nulli. Per esempio in $(1,2),(2,4),(0,1)$ il secondo è il doppio del primo. In $\K^m$ il test è uno solo: metti i vettori in colonna e calcola il rango. Sono indipendenti se il rango è uguale al numero dei vettori.`,
          lab: 'livello-3',
          domanda: r`$(1,0,1)$, $(0,1,1)$, $(1,1,2)$ sono indipendenti?`,
          risposta: r`No: il terzo è la somma dei primi due. La matrice con queste colonne ha rango $2$, meno dei $3$ vettori.` },
        { h2: 'basi-span', titolo: 'Basi di span e nucleo',
          perche: r`Ora sai riconoscere i vettori ridondanti. Se li togli, quelli che restano sono una base dello span.`,
          idea: r`Per uno span: riduci a scala e prendi, nella matrice di <em>partenza</em>, le colonne dei pivot. Per un nucleo: risolvi $A\vx=\vzero$ e raccogli i parametri liberi, così ogni incognita libera dà un vettore della base. Per esempio $x+y+z=0$ ha soluzioni $t(-1,1,0)+s(-1,0,1)$: quei due vettori sono una base del nucleo, che ha dimensione $2$.`,
          domanda: r`Trova una base di $\ker A$ con $A=[\,1\ \ 2\,]$.`,
          risposta: r`$x+2y=0$: con $y=t$ libera si ha $x=-2t$, quindi $\ker A=\operatorname{span}\{(-2,1)\}$, di dimensione $1$.` },
        { h2: 'rango', titolo: 'Rango + nullità',
          perche: r`Tutto il capitolo arriva qui: il numero di pivot ha un significato geometrico.`,
          idea: r`$r(A)$ è la dimensione dell'immagine: quante direzioni sopravvivono. $\dim\ker A$ è quante vengono cancellate. Insieme fanno sempre la dimensione del dominio. Per esempio $L(x,y)=(x,0)$ ne salva una e ne cancella una: $1+1=2$.`,
          domanda: r`Una mappa lineare $L:\R^5\to\R^3$ può essere iniettiva?`,
          risposta: r`No. L'immagine sta in $\R^3$, quindi $r(L)\le3$, e allora $\dim\ker L=5-r(L)\ge2$: il nucleo non è mai solo $\{\vzero\}$.` }
      ]
    }
  };
})();
