/* ============================================================
   Il capitolo in un punto solo.
   MAPPE: per ogni sezione una frase e la mappa dei concetti.
     nodo = { id, r (riga), t, a (ancora o link), idea, da: [prerequisiti] }
     con `ext: true` il concetto arriva da un'altra sezione.
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
    },
    9: {
      frase: r`Si cerca una base in cui una mappa lineare ha matrice diagonale: esiste se e solo se ogni autovalore ha un autospazio grande quanto la sua molteplicità.`,
      nodi: [
        { id: 'problema', r: 0, t: 'Il problema', a: '#problema', idea: r`Una base in cui la matrice di $L$ è diagonale, se esiste.` },
        { id: 'autovettori', r: 0, t: 'Autovettori e autovalori', a: '#autovettori', idea: r`$L(\vv)=\lambda\vv$ con $\vv\ne\vzero$: vettori che la mappa allunga soltanto.` },
        { id: 'matrici', r: 1, t: 'Diagonalizzare una matrice', a: '#matrici', da: ['problema', 'autovettori'], idea: r`$S^{-1}AS=D$, con gli autovettori nelle colonne di $S$.` },
        { id: 'polinomio', r: 1, t: 'Polinomio caratteristico', a: '#polinomio', da: ['autovettori'], idea: r`Gli autovalori sono le radici di $\det(A-\lambda I)$.` },
        { id: 'calcolo', r: 2, t: 'Calcolo degli autospazi', a: '#calcolo', da: ['polinomio'], idea: r`Il MEG su $A-\lambda I$, e poi il controllo $A\vv=\lambda\vv$.` },
        { id: 'molteplicita', r: 2, t: 'Molteplicità', a: '#molteplicita', da: ['polinomio'], idea: r`$m_a$ dal polinomio, $m_g$ dall'autospazio: $1\le m_g\le m_a$.` },
        { id: 'traccia', r: 2, t: 'Traccia e determinante', a: '#traccia', da: ['polinomio'], idea: r`La somma degli autovalori è la traccia, il prodotto è il determinante.` },
        { id: 'criterio', r: 3, t: 'Criterio', a: '#criterio', da: ['molteplicita', 'matrici'], idea: r`Diagonalizzabile se e solo se ogni autovalore è regolare.` },
        { id: 'invarianza', r: 3, t: 'Invarianza', a: '#invarianza', da: ['molteplicita', 'matrici'], idea: r`Matrici simili hanno lo stesso polinomio caratteristico, quindi gli stessi autovalori con le stesse molteplicità.` },
        { id: 'base', r: 4, t: 'Trovare $S$ e $D$', a: '#base', da: ['criterio'], idea: r`Si mettono insieme le basi degli autospazi.` },
        { id: 'potenze', r: 5, t: 'Potenze e Fibonacci', a: '#potenze-diag', da: ['base'], idea: r`$A^k=SD^kS^{-1}$, e la formula di Binet.` },
        { id: 'esponenziale', r: 5, t: 'Esponenziale', a: '#esponenziale', da: ['base'], idea: r`$e^{tA}=S\diag(e^{t\lambda_i})S^{-1}$ risolve i sistemi di equazioni differenziali.` }
      ]
    },
    10: {
      frase: r`Un prodotto scalare dà lunghezze, angoli e perpendicolarità. Nelle basi ortonormali le coordinate e le proiezioni si calcolano con un prodotto scalare, e ogni matrice simmetrica ha una base ortonormale di autovettori.`,
      nodi: [
        { id: 'bilineari', r: 0, t: 'Forme bilineari', a: '#forme-bilineari', idea: r`Due vettori entrano, un numero esce, ed è lineare in ciascun argomento.` },
        { id: 'scalare', r: 1, t: 'Prodotto scalare', a: '#prodotto-scalare', da: ['bilineari'], idea: r`Una forma bilineare simmetrica e definita positiva.` },
        { id: 'norma', r: 2, t: 'Norma e ortogonalità', a: '#norma', da: ['scalare'], idea: r`$\|\vv\|=\sqrt{\langle\vv,\vv\rangle}$, e $\vv\perp\vw$ se $\langle\vv,\vw\rangle=0$.` },
        { id: 'pitagora', r: 3, t: 'Carnot e Pitagora', a: '#pitagora', da: ['norma'], idea: r`$\|\vu+\vv\|^2=\|\vu\|^2+\|\vv\|^2+2\langle\vu,\vv\rangle$.` },
        { id: 'basi', r: 3, t: 'Basi ortogonali', a: '#basi-ortogonali', da: ['norma'], idea: r`Vettori non nulli e a due a due ortogonali sono sempre indipendenti.` },
        { id: 'proiezione', r: 4, t: 'Proiezione su una retta', a: '#proiezione', da: ['pitagora'], idea: r`Il punto della retta più vicino a $\vv$: $\frac{\langle\vv,\vw\rangle}{\|\vw\|^2}\vw$.` },
        { id: 'fourier', r: 4, t: 'Coordinate di Fourier', a: '#fourier', da: ['basi'], idea: r`In una base ortogonale $c_i=\langle\vv,\vv_i\rangle/\|\vv_i\|^2$, senza sistemi.` },
        { id: 'csb', r: 5, t: 'Cauchy-Schwarz', a: '#csb', da: ['proiezione'], idea: r`$|\langle\vv,\vw\rangle|\le\|\vv\|\,\|\vw\|$: da qui l'angolo e la disuguaglianza triangolare.` },
        { id: 'gs', r: 5, t: 'Gram-Schmidt', a: '#gram-schmidt', da: ['proiezione', 'basi'], idea: r`Da una base qualsiasi a una ortogonale, togliendo a ogni vettore le proiezioni sui precedenti.` },
        { id: 'complemento', r: 5, t: 'Completamento ortogonale', a: '#complemento', da: ['proiezione'], idea: r`$W^\perp$, e $V=W\oplus W^\perp$.` },
        { id: 'ortogonali', r: 6, t: 'Matrici ortogonali', a: '#matrici-ortogonali', da: ['gs'], idea: r`$Q^TQ=I$: le colonne sono una base ortonormale.` },
        { id: 'vettoriale', r: 6, t: 'Prodotto vettoriale', a: '#vettoriale', da: ['complemento'], idea: r`In $\R^3$, un vettore ortogonale a due vettori dati.` },
        { id: 'diag', r: 6, t: 'Autovalori', a: '9-diagonalizzazione.html', ext: true, idea: r`Dalla Sezione 9: autovalori, autospazi, diagonalizzazione con $S$ e $D$.` },
        { id: 'spettrale', r: 7, t: 'Teorema spettrale', a: '#spettrale', da: ['ortogonali', 'diag'], idea: r`Ortogonalmente diagonalizzabile se e solo se simmetrica.` },
        { id: 'isometrie', r: 7, t: 'Isometrie', a: '#isometrie', da: ['ortogonali'], idea: r`Le mappe che conservano le distanze hanno matrici ortogonali.` },
        { id: 'orientazione', r: 8, t: 'Orientazione', a: '#orientazione', da: ['isometrie'], idea: r`Il segno del determinante: rotazione contro riflessione.` }
      ]
    },
    11: {
      frase: r`Una forma quadratica è una matrice simmetrica. Il suo segno si legge dai segni degli autovalori, oppure, senza calcolarli, dai minori di testa.`,
      nodi: [
        { id: 'definizione', r: 0, t: 'Forme quadratiche', a: '#definizione', idea: r`$Q(\vx)=\langle A\vx,\vx\rangle$ con $A$ simmetrica.` },
        { id: 'spettrale', r: 0, t: 'Teorema spettrale', a: '10-euclidei.html#spettrale', ext: true, idea: r`Dalla Sezione 10: una matrice simmetrica si diagonalizza con una base ortonormale.` },
        { id: 'segno', r: 1, t: 'Definite e indefinite', a: '#segno', da: ['definizione'], idea: r`Sempre positiva, sempre $\ge0$, o di tutti e due i segni.` },
        { id: 'autovalori', r: 2, t: 'Il segno dagli autovalori', a: '#autovalori', da: ['segno', 'spettrale'], idea: r`Nella base giusta $Q=\sum\lambda_iy_i^2$: decidono i segni dei $\lambda_i$.` },
        { id: 'duepdue', r: 3, t: r`Il caso $2\times2$`, a: '#due-per-due', da: ['autovalori'], idea: r`Basta il segno di $\det A$, e poi quello di $a_{11}$.` },
        { id: 'sylvester', r: 3, t: 'Criterio di Sylvester', a: '#sylvester', da: ['autovalori'], idea: r`I minori di testa: tutti positivi, o a segni alterni.` }
      ]
    },
    12: {
      frase: r`Una traslazione nel centro toglie la parte lineare, una rotazione nella base di autovettori toglie i termini misti: restano i segni degli autovalori e del termine noto, e una tabella dice che figura è.`,
      nodi: [
        { id: 'definizione', r: 0, t: 'Quadriche e coniche', a: '#definizione', idea: r`Gli zeri di $\langle\vx,A\vx\rangle+2\langle\vx,\vb\rangle+c$.` },
        { id: 'forme', r: 0, t: 'Forme quadratiche', a: '11-forme.html', ext: true, idea: r`Dalla Sezione 11: matrice simmetrica e segni degli autovalori.` },
        { id: 'classificazione', r: 1, t: 'Affine e metrica', a: '#classificazione', da: ['definizione'], idea: r`Con le isometrie si conservano le misure: è la forma che chiede l'esame.` },
        { id: 'centro', r: 1, t: 'Il centro', a: '#centro', da: ['definizione'], idea: r`$A\vx_0=-\vb$: spostando l'origine lì sparisce la parte lineare.` },
        { id: 'canonica', r: 2, t: 'Forma canonica', a: '#canonica', da: ['classificazione', 'centro', 'forme'], idea: r`$\sum\lambda_iz_i^2+\tilde c=0$ quando $A$ è invertibile.` },
        { id: 'coniche', r: 3, t: 'Coniche', a: '#coniche', da: ['canonica'], idea: r`Ellisse, iperbole, parabola, più i casi degeneri.` },
        { id: 'r3', r: 3, t: 'Ellissoidi, iperboloidi, coni', a: '#quadriche-r3', da: ['canonica'], idea: r`Le quadriche di $\R^3$ con tre autovalori non nulli.` },
        { id: 'cilindri', r: 4, t: 'Cilindri', a: '#cilindri', da: ['r3'], idea: r`Un autovalore nullo e un centro: una conica che scorre lungo una retta.` },
        { id: 'paraboloidi', r: 4, t: 'Paraboloidi', a: '#paraboloidi', da: ['r3'], idea: r`Un autovalore nullo e nessun centro.` },
        { id: 'riassunto', r: 5, t: 'Il riassunto', a: '#riassunto', da: ['cilindri', 'paraboloidi'], idea: r`La tabella: dai segni al nome della quadrica.` },
        { id: 'simmetria', r: 6, t: 'Piani di simmetria', a: '#simmetria', da: ['riassunto'], idea: r`Per il centro, ortogonali agli autovettori.` },
        { id: 'rotazione', r: 6, t: 'Quadriche di rotazione', a: '#rotazione', da: ['riassunto'], idea: r`Servono due autovalori uguali.` }
      ]
    }
  };
})();
