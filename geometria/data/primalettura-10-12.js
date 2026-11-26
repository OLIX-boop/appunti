/* ============================================================
   Prima lettura delle Sezioni 10-12 (Lezioni 11, 12, 12bis,
   12tres, 14, 15). Stesso formato di data/primalettura.js: una
   frase, pochi punti, una domanda. Gli schemi stanno in
   data/schemi-10-12.js.
   ============================================================ */
(function () {
  'use strict';
  const r = String.raw;

  Object.assign(window.PRIMA, {
    10: {
      seconda: ['funzioni', 'gs-dipendenti'],
      passi: [
        { h2: 'forme-bilineari', titolo: 'Forme bilineari',
          frase: r`Una forma bilineare prende due vettori e restituisce un numero, ed è lineare in ciascuno dei due argomenti.`,
          punti: [
            r`Tenendo fermo un argomento, è lineare nell'altro.`,
            r`Non è lineare nella coppia: $L(2\vv,2\vw)=4L(\vv,\vw)$.`,
            r`Esempi: il prodotto scalare standard e il determinante $\det[\vx|\vy]$ in $\R^2$.`
          ],
          domanda: r`$L(\vx,\vy):=x_1y_1+1$ è una forma bilineare?`,
          risposta: r`No: $L(\vzero,\vy)=1$, mentre una forma bilineare vale $0$ appena un argomento è nullo.` },
        { h2: 'prodotto-scalare', titolo: 'Prodotto scalare',
          frase: r`Un prodotto scalare è una forma bilineare simmetrica e definita positiva; uno spazio vettoriale reale con un prodotto scalare è uno spazio euclideo.`,
          punti: [
            r`Simmetrica: $\langle\vu,\vv\rangle=\langle\vv,\vu\rangle$.`,
            r`Definita positiva: $\langle\vv,\vv\rangle>0$ per ogni $\vv\ne\vzero$.`,
            r`Per dire di no basta un vettore $\vx\ne\vzero$ con $L(\vx,\vx)\le0$.`
          ],
          domanda: r`$x_1y_1+x_2y_2+3(x_1y_2+x_2y_1)$ è un prodotto scalare su $\R^2$?`,
          risposta: r`No: è simmetrica, ma in $\vx=(1,-1)$ vale $1+1-6=-4\lt0$.` },
        { h2: 'norma', titolo: 'Norma e ortogonalità',
          frase: r`La norma è la lunghezza, la distanza è la norma della differenza, e due vettori sono ortogonali se il loro prodotto scalare è zero.`,
          punti: [
            r`$\|\vv\|=\sqrt{\langle\vv,\vv\rangle}$ e $\|\alpha\vv\|=|\alpha|\,\|\vv\|$.`,
            r`Il vettore nullo è ortogonale a tutti.`,
            r`Cambiando prodotto scalare cambiano lunghezze e perpendicolarità.`
          ],
          domanda: r`Con il prodotto standard, quanto valgono $\|(3,-4)\|$ e $\|-2\,(3,-4)\|$?`,
          risposta: r`$5$ e $|-2|\cdot5=10$.` },
        { h2: 'pitagora', titolo: 'Carnot e Pitagora',
          frase: r`Carnot: $\|\vu+\vv\|^2=\|\vu\|^2+\|\vv\|^2+2\langle\vu,\vv\rangle$. Se $\vu\perp\vv$ il termine misto sparisce ed è Pitagora.`,
          punti: [
            r`Si dimostra sviluppando $\langle\vu+\vv,\vu+\vv\rangle$ con linearità e simmetria.`,
            r`Nel piano è il teorema del coseno.`,
            r`Rigirata dà la polarizzazione: $\langle\vu,\vv\rangle=\frac12(\|\vu+\vv\|^2-\|\vu\|^2-\|\vv\|^2)$.`
          ],
          domanda: r`$\|\vu\|=3$, $\|\vv\|=4$ e $\vu\perp\vv$. Quanto vale $\|\vu+\vv\|$?`,
          risposta: r`$5$: $\|\vu+\vv\|^2=9+16=25$.` },
        { h2: 'proiezione', titolo: 'Proiezione su una retta',
          frase: r`La proiezione di $\vv$ sulla retta generata da $\vw$ è il punto della retta più vicino a $\vv$: $\dfrac{\langle\vv,\vw\rangle}{\|\vw\|^2}\vw$.`,
          punti: [
            r`Il numero davanti a $\vw$ è il coefficiente di Fourier.`,
            r`Il resto $\vv-\vv_0$ è ortogonale a $\vw$: è il controllo da fare sempre.`,
            r`Senza denominatore la formula vale solo se $\|\vw\|=1$.`
          ],
          domanda: r`Proiezione di $(1,3)$ sulla retta generata da $(1,1)$?`,
          risposta: r`$\frac{4}{2}(1,1)=(2,2)$. Controllo: $(1,3)-(2,2)=(-1,1)\perp(1,1)$.` },
        { h2: 'csb', titolo: 'Cauchy-Schwarz',
          frase: r`$|\langle\vv,\vw\rangle|\le\|\vv\|\,\|\vw\|$, con l'uguale solo per vettori dipendenti.`,
          punti: [
            r`La dimostrazione: la proiezione non è mai più lunga del vettore (Pitagora).`,
            r`Fa avere senso all'angolo: $\cos\theta=\frac{\langle\vv,\vw\rangle}{\|\vv\|\,\|\vw\|}$.`,
            r`Con Carnot dà la disuguaglianza triangolare.`
          ],
          domanda: r`Può essere $\langle\vv,\vw\rangle=7$ con $\|\vv\|=2$ e $\|\vw\|=3$?`,
          risposta: r`No: per Cauchy-Schwarz $|\langle\vv,\vw\rangle|\le6$.` },
        { h2: 'basi-ortogonali', titolo: 'Basi ortogonali',
          frase: r`Vettori non nulli e a due a due ortogonali sono indipendenti: $n$ di loro, in dimensione $n$, sono una base.`,
          punti: [
            r`Ortonormale vuol dire ortogonale e con tutti i vettori di norma $1$.`,
            r`Da ortogonale a ortonormale: si divide ogni vettore per la sua norma.`,
            r`La base canonica di $\R^n$ è ortonormale.`
          ],
          domanda: r`$(1,1,0)$, $(1,-1,0)$, $(0,0,2)$: è una base di $\R^3$? È ortonormale?`,
          risposta: r`È una base ortogonale: i prodotti sono tutti $0$ e i vettori non sono nulli. Non è ortonormale: le norme sono $\sqrt2$, $\sqrt2$, $2$.` },
        { h2: 'fourier', titolo: 'Coordinate di Fourier',
          frase: r`In una base ortogonale la coordinata $i$-esima è $\langle\vv,\vv_i\rangle/\|\vv_i\|^2$: nessun sistema da risolvere.`,
          punti: [
            r`In una base ortonormale è solo $\langle\vv,\vv_i\rangle$.`,
            r`È il Teorema 4 della Lezione 11, chiesto in Parte C.`,
            r`Controllo: ricomporre $\vv=\sum c_i\vv_i$.`
          ],
          domanda: r`Coordinate di $(2,4)$ nella base ortogonale $\{(1,1),(1,-1)\}$?`,
          risposta: r`$c_1=\frac62=3$, $c_2=\frac{-2}{2}=-1$. Controllo: $3(1,1)-(1,-1)=(2,4)$.` },
        { h2: 'gram-schmidt', titolo: 'Gram-Schmidt',
          frase: r`Gram-Schmidt trasforma una base qualsiasi in una ortogonale: a ogni vettore si tolgono le proiezioni sui vettori già trovati.`,
          punti: [
            r`$\vw_1=\vv_1$, poi $\vw_{i+1}=\vv_{i+1}-\sum_{j\le i}\frac{\langle\vv_{i+1},\vw_j\rangle}{\|\vw_j\|^2}\vw_j$.`,
            r`Si proietta sui $\vw_j$ già ortogonali, non sui $\vv_j$.`,
            r`Alla fine, se serve ortonormale, si normalizza.`
          ],
          domanda: r`Ortogonalizza $\vv_1=(1,1)$, $\vv_2=(1,0)$.`,
          risposta: r`$\vw_1=(1,1)$, $\vw_2=(1,0)-\frac12(1,1)=\bigl(\frac12,-\frac12\bigr)$. Controllo: $\langle\vw_1,\vw_2\rangle=0$.` },
        { h2: 'matrici-ortogonali', titolo: 'Matrici ortogonali',
          frase: r`Una matrice è ortogonale se $Q^TQ=I$: le sue colonne, e anche le sue righe, sono una base ortonormale.`,
          punti: [
            r`L'inversa costa niente: $Q^{-1}=Q^T$.`,
            r`Colonne ortogonali ma non di norma $1$ non bastano.`,
            r`Rotazioni e riflessioni del piano sono matrici ortogonali.`
          ],
          domanda: r`$\begin{bmatrix}1&1\\1&-1\end{bmatrix}$ è ortogonale?`,
          risposta: r`No: le colonne sono ortogonali ma hanno norma $\sqrt2$. Lo è $\frac1{\sqrt2}\begin{bmatrix}1&1\\1&-1\end{bmatrix}$.` },
        { h2: 'spettrale', titolo: 'Teorema spettrale',
          frase: r`Una matrice reale ha una base ortonormale di autovettori se e solo se è simmetrica.`,
          punti: [
            r`Gli autovalori di una matrice simmetrica sono reali.`,
            r`Autovettori di autovalori diversi sono già ortogonali.`,
            r`Gram-Schmidt serve solo dentro un autospazio di dimensione $\ge2$.`
          ],
          domanda: r`$A$ è simmetrica $2\times2$ con due autovalori distinti, e $(1,2)$ è un autovettore. Che direzione ha l'altro autospazio?`,
          risposta: r`È ortogonale a $(1,2)$: $\operatorname{span}\{(2,-1)\}$.` },
        { h2: 'isometrie', titolo: 'Isometrie',
          frase: r`Un'isometria è una mappa lineare biiettiva che conserva il prodotto scalare, cioè le distanze; in basi ortonormali ha matrice ortogonale.`,
          punti: [
            r`Esempi: la rotazione di angolo $\theta$ e la riflessione rispetto a un asse.`,
            r`Un endomorfismo isometrico ha $\det=\pm1$.`,
            r`Gli autovalori di una matrice ortogonale hanno modulo $1$.`
          ],
          domanda: r`In una base ortonormale una mappa ha matrice $\begin{bmatrix}0&-1\\1&0\end{bmatrix}$. È un'isometria?`,
          risposta: r`Sì: le colonne $(0,1)$ e $(-1,0)$ sono ortonormali. È la rotazione di $90^\circ$.` },
        { h2: 'orientazione', titolo: 'Orientazione',
          frase: r`Il segno del determinante distingue le mappe che conservano l'orientazione ($\det>0$) da quelle che la invertono ($\det\lt0$).`,
          punti: [
            r`Rotazione: $\det=1$. Riflessione: $\det=-1$.`,
            r`Due basi hanno la stessa orientazione se la matrice di passaggio ha determinante positivo.`,
            r`Scambiare due vettori della base inverte l'orientazione.`
          ],
          domanda: r`La base $\{\mathbf e_2,\mathbf e_1,\mathbf e_3\}$ ha la stessa orientazione della base canonica?`,
          risposta: r`No: la matrice di passaggio è l'identità con due colonne scambiate, $\det=-1$.` },
        { h2: 'complemento', titolo: 'Completamento ortogonale',
          frase: r`$W^\perp$ è l'insieme dei vettori ortogonali a tutto $W$: è un sottospazio e $V=W\oplus W^\perp$.`,
          punti: [
            r`$\dim W^\perp=\dim V-\dim W$.`,
            r`Se $W$ è dato da equazioni $A\vx=\vzero$: $W^\perp=\operatorname{Row}(A)$.`,
            r`Se $W$ è dato da generatori: $W^\perp$ è il nucleo della matrice che li ha come righe.`
          ],
          domanda: r`$W$ è il piano $x+2y-z=0$ di $\R^3$. Chi è $W^\perp$?`,
          risposta: r`La retta $\operatorname{span}\{(1,2,-1)\}$: i coefficienti dell'equazione.` },
        { h2: 'vettoriale', titolo: 'Prodotto vettoriale',
          frase: r`$\vec u\times\vec v$ è ortogonale a $\vec u$ e a $\vec v$, lungo quanto l'area del parallelogramma, e orientato con la regola della mano destra.`,
          punti: [
            r`Si calcola con il determinante con $\vec\imath,\vec\jmath,\vec k$ nella prima riga.`,
            r`Dà la direzione di una retta ortogonale a un piano.`,
            r`Esiste solo in $\R^3$.`
          ],
          domanda: r`Quanto vale $(1,0,0)\times(0,1,0)$?`,
          risposta: r`$(0,0,1)$, cioè $\vec k$: $\vec\imath,\vec\jmath,\vec k$ è a mano destra.` }
      ]
    },
    11: {
      seconda: [],
      passi: [
        { h2: 'definizione', titolo: 'Forme quadratiche',
          frase: r`Una forma quadratica è un polinomio di secondo grado senza termini lineari né costanti, e si scrive $Q(\vx)=\langle A\vx,\vx\rangle$ con $A$ simmetrica.`,
          punti: [
            r`Sulla diagonale vanno i coefficienti dei quadrati.`,
            r`Fuori dalla diagonale va la <strong>metà</strong> del coefficiente misto.`,
            r`La matrice simmetrica è unica.`
          ],
          domanda: r`Matrice di $3x^2-4xy+y^2$?`,
          risposta: r`$\begin{bmatrix}3&-2\\-2&1\end{bmatrix}$.` },
        { h2: 'segno', titolo: 'Definite e indefinite',
          frase: r`Una forma è definita positiva se è $>0$ fuori dall'origine, semidefinita se è sempre $\ge0$, indefinita se prende tutti e due i segni.`,
          punti: [
            r`Per dire «non definita» basta uno zero fuori dall'origine.`,
            r`Per dire «indefinita» bastano due vettori con segni opposti.`,
            r`$Q$ è definita negativa se e solo se $-Q$ è definita positiva.`
          ],
          domanda: r`Di che tipo è $x^2-y^2$?`,
          risposta: r`Indefinita: $Q(1,0)=1$ e $Q(0,1)=-1$.` },
        { h2: 'autovalori', titolo: 'Il segno dagli autovalori',
          frase: r`La forma ha il segno dei suoi autovalori: tutti positivi, definita positiva; tutti $\ge0$, semidefinita; di segni opposti, indefinita.`,
          punti: [
            r`Nella base ortonormale di autovettori $Q=\lambda_1y_1^2+\dots+\lambda_ny_n^2$.`,
            r`Per una $2\times2$: $\det A>0$ definita (segno di $a_{11}$), $\det A\lt0$ indefinita, $\det A=0$ semidefinita.`
          ],
          domanda: r`$A=\begin{bmatrix}2&1\\1&2\end{bmatrix}$: di che tipo è?`,
          risposta: r`$\det A=3>0$ e $a_{11}=2>0$: definita positiva. Gli autovalori sono $1$ e $3$.` },
        { h2: 'sylvester', titolo: 'Criterio di Sylvester',
          frase: r`Il criterio di Sylvester guarda i minori di testa: tutti positivi vuol dire definita positiva, segni alterni $-,+,-,\dots$ definita negativa.`,
          punti: [
            r`$\Delta_k$ è il determinante delle prime $k$ righe e $k$ colonne.`,
            r`Tutti non nulli ma con altri segni: indefinita.`,
            r`Un $\Delta_k=0$ dice solo «non definita».`
          ],
          domanda: r`Una simmetrica $3\times3$ ha minori di testa $2$, $-1$, $3$. Che cosa dice Sylvester?`,
          risposta: r`Sono tutti non nulli, ma né $+,+,+$ né $-,+,-$: è indefinita.` }
      ]
    },
    12: {
      seconda: ['cilindro-parabolico'],
      passi: [
        { h2: 'definizione', titolo: 'Quadriche e coniche',
          frase: r`Una quadrica è l'insieme degli zeri di un polinomio di secondo grado; nel piano si chiama conica.`,
          punti: [
            r`Si scrive $\langle\vx,A\vx\rangle+2\langle\vx,\vb\rangle+c=0$ con $A$ simmetrica non nulla.`,
            r`Per il $2$ davanti, $\vb$ è la <strong>metà</strong> dei coefficienti lineari.`,
            r`Le coniche: ellisse, iperbole, parabola, più i casi degeneri.`
          ],
          domanda: r`Chi sono $A$ e $\vb$ per $x^2+3y^2+4x-6y=0$?`,
          risposta: r`$A=\diag(1,3)$ e $\vb=(2,-3)$.` },
        { h2: 'classificazione', titolo: 'Affine e metrica',
          frase: r`Passare da un riferimento cartesiano a un altro è un'isometria: la classificazione metrica conserva le misure, quella affine no.`,
          punti: [
            r`Un cambio di riferimento è $\vy=M(\vx-\vx_0)$; è un'isometria se e solo se $M$ è ortogonale.`,
            r`Forma metrica di un'ellisse: $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$. Affine: $x^2+y^2=1$.`
          ],
          domanda: r`$\frac{x^2}4+\frac{y^2}9=1$ e $x^2+y^2=1$ sono la stessa conica per la classificazione affine? E per quella metrica?`,
          risposta: r`Affine sì, sono due ellissi. Metrica no: i semiassi sono $2,3$ contro $1,1$.` },
        { h2: 'centro', titolo: 'Il centro',
          frase: r`Il centro risolve $A\vx_0=-\vb$: spostando lì l'origine sparisce la parte lineare, e la quadrica è simmetrica rispetto al centro.`,
          punti: [
            r`Il nuovo termine noto è $\tilde c=c+\langle\vx_0,\vb\rangle$.`,
            r`Se $A$ è invertibile il centro è unico.`,
            r`Può non esserci (parabola) o essercene una retta.`
          ],
          domanda: r`Centro di $x^2+y^2-4x+2y=0$?`,
          risposta: r`$\vb=(-2,1)$ e $A=I$, quindi $\vx_0=(2,-1)$. È la circonferenza $(x-2)^2+(y+1)^2=5$.` },
        { h2: 'canonica', titolo: 'Forma canonica',
          frase: r`Con $A$ invertibile: si centra, si ruota nella base ortonormale di autovettori, e resta $\lambda_1z_1^2+\dots+\lambda_nz_n^2+\tilde c=0$.`,
          punti: [
            r`La traslazione cambia il termine noto, la rotazione no.`,
            r`Nella forma affine i coefficienti diventano $\pm1$ e il termine noto $-1$ o $0$.`,
            r`Gli autovalori bastano per la forma metrica; gli autovettori servono per gli assi.`
          ],
          domanda: r`Forma canonica metrica di $2x^2+2y^2+2xy-3=0$?`,
          risposta: r`$A=\begin{bmatrix}2&1\\1&2\end{bmatrix}$ ha autovalori $1$ e $3$: $z_1^2+3z_2^2-3=0$, un'ellisse.` },
        { h2: 'coniche', titolo: 'Classificazione delle coniche',
          frase: r`Il segno di $\det A$ dice la famiglia: positivo ellisse, negativo iperbole, zero parabola. Poi si controllano i casi degeneri.`,
          punti: [
            r`$\det A>0$: vuota, un punto o un'ellisse, secondo il segno di $\tilde c$.`,
            r`$\det A\lt0$: un'iperbole, o due rette incidenti se $\tilde c=0$.`,
            r`$\det A=0$: parabola se non c'è centro, altrimenti rette parallele, una retta o il vuoto.`
          ],
          domanda: r`$x^2-4y^2+2x=0$: che conica è?`,
          risposta: r`$\det A=-4\lt0$; centro $(-1,0)$ e $\tilde c=0+\langle(-1,0),(1,0)\rangle=-1\ne0$: un'iperbole.` },
        { h2: 'quadriche-r3', titolo: 'Ellissoidi, iperboloidi, coni',
          frase: r`Con tre autovalori non nulli: tutti concordi danno un ellissoide (o un punto, o il vuoto); di segni diversi un cono o un iperboloide.`,
          punti: [
            r`$\tilde c=0$ con segni diversi: un cono.`,
            r`Una falda o due secondo il segno di $\tilde c$.`,
            r`I semiassi dell'ellissoide sono $\sqrt{|\tilde c/\lambda_i|}$, lungo gli autovettori.`
          ],
          domanda: r`$x^2+y^2-z^2=1$: quante falde?`,
          risposta: r`Una: $z^2=x^2+y^2-1$ ha soluzioni per ogni $z$, quindi la superficie è un pezzo solo.` },
        { h2: 'cilindri', titolo: 'Cilindri',
          frase: r`Se un autovalore è zero ma c'è un centro, la sua variabile sparisce: la quadrica è una conica che scorre lungo una retta.`,
          punti: [
            r`Cilindro ellittico, iperbolico, o coppie di piani.`,
            r`Le rette sono parallele all'autospazio $W_0$ dell'autovalore nullo.`,
            r`Con un autovalore nullo, c'è un centro se e solo se $\vb\perp W_0$.`
          ],
          domanda: r`Che cos'è $x^2+y^2=4$ in $\R^3$?`,
          risposta: r`Un cilindro circolare con asse l'asse $z$: la variabile $z$ non compare.` },
        { h2: 'paraboloidi', titolo: 'Paraboloidi',
          frase: r`Se un autovalore è zero e non c'è centro, la quadrica è un paraboloide, o un cilindro parabolico se gli autovalori nulli sono due.`,
          punti: [
            r`Ellittico se gli altri due autovalori sono concordi, iperbolico (una sella) se discordi.`,
            r`L'asse è parallelo a $W_0$ e passa per le soluzioni di $A\vx=-\vb'$.`,
            r`Nella base giusta è il grafico $z=\alpha x^2+\beta y^2$.`
          ],
          domanda: r`$z=x^2-y^2$ è un paraboloide ellittico o iperbolico?`,
          risposta: r`Iperbolico: gli autovalori $1$ e $-1$ hanno segni opposti. È la sella.` },
        { h2: 'riassunto', titolo: 'Il riassunto',
          frase: r`I segni degli autovalori, più due controlli, il centro e il termine noto, danno il nome a ogni quadrica.`,
          punti: [
            r`Tre autovalori non nulli: ellissoide, cono, iperboloidi.`,
            r`Uno nullo: cilindri se c'è un centro, paraboloidi se non c'è.`,
            r`Due nulli: piani, oppure un cilindro parabolico.`
          ],
          domanda: r`Autovalori $2$, $3$, $0$ e nessun centro: che quadrica è?`,
          risposta: r`Un paraboloide ellittico.` },
        { h2: 'simmetria', titolo: 'Piani di simmetria',
          frase: r`I piani di simmetria passano per il centro e sono ortogonali agli autovettori.`,
          punti: [
            r`Quadriche a centro: almeno tre piani di simmetria.`,
            r`Paraboloidi: solo i piani che contengono l'asse.`,
            r`Cilindri e superfici di rotazione: infiniti.`
          ],
          domanda: r`$\frac{x^2}4+y^2+\frac{z^2}9=1$: quali sono i piani di simmetria?`,
          risposta: r`I tre piani coordinati $x=0$, $y=0$, $z=0$: il centro è l'origine e gli autovettori sono gli assi.` },
        { h2: 'rotazione', titolo: 'Quadriche di rotazione',
          frase: r`Una quadrica è di rotazione quando due autovalori coincidono; l'asse ha la direzione dell'autovettore dell'altro.`,
          punti: [
            r`Tre autovalori uguali: una sfera.`,
            r`Due uguali e non nulli: un solo asse di rotazione.`,
            r`Zero doppio e un centro: un piano o due piani paralleli.`
          ],
          domanda: r`$x^2+y^2+4z^2=4$ è di rotazione? Attorno a quale asse?`,
          risposta: r`Sì: autovalori $1,1,4$. L'asse è l'asse $z$, autovettore dell'autovalore semplice $4$.` }
      ]
    }
  });
})();
