/* ============================================================
   Prima lettura: lo strato semplice sopra gli appunti.
   Ogni passo è: una frase, uno schema (data/schemi.js), pochi punti
   brevi e una domanda. Le definizioni del prof restano nella pagina,
   dietro un clic. Per ora esiste solo la Sezione 5.
   ============================================================ */
(function () {
  'use strict';
  const r = String.raw;

  window.PRIMA = {
    5: {
      // parti da seconda lettura: restano nascoste anche nella versione degli appunti
      seconda: ['rappr-generale', 'trasformazione', 'passaggio-riferimenti', 'cambio-origine', 'ellisse', 'param-cart', 'davvero', 'osservazioni', 'dip-lineari', 'esempio-p2', 'punti-piano'],
      passi: [
        { h2: 'lineari', titolo: 'Applicazioni lineari',
          frase: r`Una mappa lineare è una trasformazione che non rompe la griglia.`,
          punti: [
            r`L'origine resta ferma, e le rette restano rette, parallele e alla stessa distanza. Al massimo la griglia viene schiacciata.`,
            r`In formula: $L(\vu+\vv)=L(\vu)+L(\vv)$ e $L(\lambda\vu)=\lambda L(\vu)$.`,
            r`Ogni matrice ne dà una: $L_A(\vx)=A\vx$. Così $A\vx=\vb$ diventa una domanda semplice: <em>chi finisce in $\vb$?</em>`
          ],
          domanda: r`$f(x,y)=(x^2,\ y)$ è lineare? Perché?`,
          risposta: r`No. $f(2,0)=(4,0)$, ma $2f(1,0)=(2,0)$: non rispetta i multipli. Nota che $f(\vzero)=\vzero$: quel test serve a escludere, ma da solo non basta a promuovere.` },
        { h2: 'nucleo', titolo: 'Nucleo e immagine',
          frase: r`Ogni mappa si capisce con due domande: che cosa viene cancellato, e dove si può arrivare?`,
          punti: [
            r`Il <strong>nucleo</strong> $\ker L$ è ciò che finisce in $\vzero$. Sta nel dominio.`,
            r`L'<strong>immagine</strong> $\Imag L$ è ciò che si può raggiungere. Sta nel codominio.`,
            r`Se $\ker L=\{\vzero\}$, non viene cancellato niente: $L$ è iniettiva.`,
            r`Chi va in $\vw_0$? Nessuno, se $\vw_0$ è fuori dall'immagine. Altrimenti $\vv_0+\ker L$: una soluzione più tutto il nucleo.`
          ],
          domanda: r`Con $L(x,y)=(x,0)$, chi va in $(3,0)$? E in $(3,1)$?`,
          risposta: r`In $(3,0)$ va tutta la retta verticale $x=3$, cioè $(3,0)+\ker L$. In $(3,1)$ non va nessuno, perché quel punto non sta nell'immagine.` },
        { h2: 'inversa', titolo: "L'applicazione inversa",
          frase: r`Si torna indietro solo se nessun punto si perde e ogni punto viene raggiunto.`,
          punti: [
            r`Una mappa così si chiama <strong>biettiva</strong>, e l'inversa $L^{-1}$ disfa quello che ha fatto $L$.`,
            r`Per una matrice: $L_A$ è biettiva esattamente quando $A$ è invertibile, e allora $L_A^{-1}=L_{A^{-1}}$.`
          ],
          domanda: r`$L_A$ con $A=\begin{bmatrix}1&2\\2&4\end{bmatrix}$ è biettiva?`,
          risposta: r`No. La seconda riga è il doppio della prima, quindi $r(A)=1$ e $A$ non è invertibile. Per esempio $(2,-1)$ finisce in $\vzero$, quindi $L_A$ non è nemmeno iniettiva.` },
        { h2: 'basi', titolo: 'Basi e dimensione',
          frase: r`Una base è un sistema di passi: con quei passi raggiungi ogni punto, e in un modo solo.`,
          punti: [
            r`Quanti passi fai lungo ciascun vettore sono le <strong>coordinate</strong>.`,
            r`Stesso punto, base diversa, numeri diversi: $(3,1)$ nella griglia canonica è $(2,1)$ nella griglia di $\vv_1=(1,1)$ e $\vv_2=(1,-1)$.`,
            r`La <strong>dimensione</strong> è quanti passi servono, e non dipende dalla base scelta.`
          ],
          lab: 'livello-1',
          domanda: r`$\{(1,0),(0,1),(1,1)\}$ è una base di $\R^2$? Che cosa non va?`,
          risposta: r`No. Ogni punto si raggiunge, ma non in un modo solo: $(1,1)=1\cdot(1,0)+1\cdot(0,1)$ e anche $(1,1)=1\cdot(1,1)$. I vettori sono troppi.` },
        { h2: 'rappresentativa', titolo: 'La matrice rappresentativa',
          frase: r`Una mappa lineare è decisa da dove manda i vettori della base. Quei risultati, in colonna, sono la matrice.`,
          punti: [
            r`Per $L(x,y)=(x+y,\ 2x)$: $L(\mathbf e_1)=(1,2)$ e $L(\mathbf e_2)=(1,0)$, e sono le due colonne di $A$.`,
            r`Anche le coordinate passano da una matrice: $\vx=S\mathbf c$, con i vettori della base in colonna in $S$.`
          ],
          lab: 'livello-4',
          domanda: r`Qual è la matrice di $L(x,y)=(y,\ x)$?`,
          risposta: r`$L(\mathbf e_1)=(0,1)$ e $L(\mathbf e_2)=(1,0)$, quindi $A=\begin{bmatrix}0&1\\1&0\end{bmatrix}$. Le immagini vanno nelle colonne, non nelle righe.` },
        { h2: 'isomorfismi', titolo: 'Basi e isomorfismi',
          frase: r`Le coordinate traducono polinomi e matrici in liste di numeri, quindi quello che sai su $\K^n$ vale anche per loro.`,
          punti: [
            r`Un <strong>isomorfismo</strong> è un cambio di nomi: gli oggetti cambiano nome, i conti restano gli stessi.`,
            r`Ogni spazio di dimensione $n$ è isomorfo a $\K^n$.`,
            r`In $\K^n$: $n$ vettori sono una base se e solo se la matrice $S$ che li ha in colonna è invertibile.`
          ],
          domanda: r`Quanto vale $\dim P_3$, e a quale $\R^n$ è isomorfo $P_3$?`,
          risposta: r`$\dim P_3=4$, perché la base $1,x,x^2,x^3$ ha quattro elementi. Quindi $P_3$ è isomorfo a $\R^4$. L'errore classico è dire $3$.` },
        { h2: 'passaggio', titolo: 'Passaggio tra basi',
          frase: r`Due basi sono due lingue per dire lo stesso punto, e la matrice $S$ è il traduttore.`,
          punti: [
            r`Le colonne di $S$ sono i vettori nuovi scritti nella base vecchia.`,
            r`$S$ va dalle coordinate nuove alle vecchie: $\mathbf c=S\tilde{\mathbf c}$. Sembra al contrario, ma è il verso giusto.`,
            r`Per andare dalle vecchie alle nuove serve $S^{-1}$.`
          ],
          lab: 'livello-2',
          domanda: r`Con la $S$ dello schema, le coordinate nuove $\tilde{\mathbf c}=(0,1)$ a che cosa corrispondono?`,
          risposta: r`$\mathbf c=S(0,1)=(1,-1)$, cioè la seconda colonna di $S$: è il secondo vettore nuovo, ed è logico, perché $(0,1)$ vuol dire un passo lungo quel vettore.` },
        { h2: 'rette-piani', titolo: 'Rette e piani',
          frase: r`Una retta o un piano sono uno span spostato: un punto di partenza più le direzioni ammesse.`,
          punti: [
            r`Retta: $\mathbf r_0+t\mathbf a$. Piano: $\mathbf r_0+t\mathbf u+s\mathbf v$.`,
            r`È la stessa forma delle soluzioni di un sistema: una soluzione più il nucleo.`,
            r`La forma cartesiana dà le equazioni, quella parametrica dà i punti. Col MEG si passa dalla prima alla seconda.`
          ],
          domanda: r`Scrivi in forma parametrica la retta $y=2x$ del piano.`,
          risposta: r`$(0,0)+t(1,2)$: passa per l'origine e ha direzione $(1,2)$. Controllo: i punti sono $(t,2t)$, e $2t=2\cdot t$.` },
        { h2: 'dipendenza', titolo: 'Dipendenza lineare',
          frase: r`Dei vettori sono dipendenti se uno è di troppo: si ottiene dagli altri.`,
          punti: [
            r`In formula: esiste una combinazione che dà $\vzero$ con coefficienti non tutti nulli. È il giro che si chiude.`,
            r`Con due vettori basta vedere se sono multipli. Con tre o più no: serve il rango.`
          ],
          lab: 'livello-3',
          domanda: r`$(1,0,1)$, $(0,1,1)$, $(1,1,2)$ sono indipendenti?`,
          risposta: r`No: il terzo è la somma dei primi due. La matrice con queste colonne ha rango $2$, meno dei $3$ vettori.` },
        { h2: 'basi-span', titolo: 'Basi di span e nucleo',
          frase: r`Togliendo i vettori di troppo resta una base, e il MEG dice quali tenere.`,
          punti: [
            r`Span: riduci a scala e prendi le colonne dei pivot dalla matrice di <em>partenza</em>, non da quella ridotta.`,
            r`Nucleo: risolvi $A\vx=\vzero$. Ogni incognita libera dà un vettore della base.`
          ],
          domanda: r`Trova una base di $\ker A$ con $A=[\,1\ \ 2\,]$.`,
          risposta: r`$x+2y=0$: con $y=t$ libera si ha $x=-2t$, quindi $\ker A=\operatorname{span}\{(-2,1)\}$, di dimensione $1$.` },
        { h2: 'rango', titolo: 'Rango + nullità',
          frase: r`Ogni dimensione del dominio o sopravvive o viene cancellata: non ci sono altre possibilità.`,
          punti: [
            r`Sopravvivono $r(L)$ dimensioni: è la dimensione dell'immagine, e per una matrice è il numero di pivot.`,
            r`Vengono cancellate $\dim\ker L$ dimensioni: è la nullità.`,
            r`Insieme fanno tutto il dominio: $r(L)+\dim\ker L=\dim V$.`
          ],
          domanda: r`Una mappa lineare $L:\R^5\to\R^3$ può essere iniettiva?`,
          risposta: r`No. L'immagine sta in $\R^3$, quindi $r(L)\le3$, e allora $\dim\ker L=5-r(L)\ge2$: il nucleo non è mai solo $\{\vzero\}$.` }
      ]
    }
  };
})();
