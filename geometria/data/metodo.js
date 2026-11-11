/* ============================================================
   «Come si risolve»: i dati dell'allenatore di riconoscimento.
   Ogni voce è un punto vero di un tema d'esame (vedi esami.js):
   prima si sceglie il tipo, poi la prima mossa. Nelle mosse la
   giusta è sempre la prima (l'ordine si mescola a runtime), e ogni
   mossa sbagliata dice dove porta.
   ============================================================ */
(function () {
  'use strict';
  const r = String.raw;

  window.METODO_GEO = {
    // le schede della pagina, in ordine di frequenza nei temi (esercizi su 20)
    tipi: [
      { k: 'mappa', t: 'Applicazione lineare', n: 7 },
      { k: 'sottospazi', t: 'Sottospazi: ∩ e +', n: 5 },
      { k: 'rappresentativa', t: 'Matrice rappresentativa', n: 4 },
      { k: 'autovalori', t: 'Autovalori', n: 4 },
      { k: 'geometria', t: 'Rette e piani', n: 3 }
    ],

    allenatore: [
      { fonte: 'Gennaio 2025 · 1.1', tipo: 'mappa',
        testo: r`Siano $\vv:=(1,1)$ e $L:\M_{\R}(2,2)\to\R^{2}$, $L(A):=A\vv$. Dimostrare che $L$ è un'applicazione lineare.`,
        segnale: r`Una funzione definita da una formula e la parola «lineare».`,
        mosse: [
          { t: r`Scrivere $L(\alpha A_1+\beta A_2)$ e usare le proprietà del prodotto di matrici`, poi: r`In una riga: $(\alpha A_1+\beta A_2)\vv=\alpha A_1\vv+\beta A_2\vv=\alpha L(A_1)+\beta L(A_2)$. È la definizione.` },
          { t: r`Scrivere la matrice rappresentativa di $L$`, poi: r`Per avere una matrice rappresentativa bisogna già sapere che $L$ è lineare: il ragionamento gira in tondo.` },
          { t: r`Verificare che $L(\mathbf 0)=\vzero$`, poi: r`È necessario ma non basta: anche $A\mapsto(\det A,\,0)$ manda la matrice nulla in $\vzero$, e non è lineare.` }
        ] },

      { fonte: 'Gennaio 2025 · 1.2', tipo: 'mappa',
        testo: r`Con $L(A):=A\vv$, $\vv=(1,1)$, determinare il nucleo $\ker(L)$ e l'immagine $\operatorname{im}(L)$.`,
        segnale: r`«Nucleo» e «immagine» di una mappa data da una formula.`,
        mosse: [
          { t: r`Calcolare $L$ su una matrice generica $\begin{bmatrix}a&b\\c&d\end{bmatrix}$ e porre il risultato uguale a $\vzero$`, poi: r`$a+b=0$, $c+d=0$: due variabili libere, $\dim\ker L=2$. Poi rango + nullità: $\dim\operatorname{im}L=4-2=2$, cioè $\operatorname{im}L=\R^{2}$.` },
          { t: r`Ridurre a scala il vettore $\vv$`, poi: r`$\vv$ è un dato, non la mappa: le incognite sono gli elementi di $A$.` },
          { t: r`Cercare gli autovalori di $L$`, poi: r`Gli autovalori esistono solo per un endomorfismo: qui $L$ va da uno spazio di dimensione $4$ in $\R^{2}$.` }
        ] },

      { fonte: 'Gennaio 2025 · 1.4', tipo: 'sottospazi',
        testo: r`Con $H:=\{A\in\M_{\R}(2,2):\ A^{T}=A\}$ e il nucleo di $L(A):=A\vv$, determinare $\dim(H+\ker L)$ e $\dim(H\cap\ker L)$.`,
        segnale: r`Due sottospazi e i simboli $+$ e $\cap$.`,
        mosse: [
          { t: r`Mettere a sistema le equazioni di $H$ ($c=b$) e di $\ker L$, trovare $\dim(H\cap\ker L)$, poi Grassmann`, poi: r`Il sistema ha rango $3$ su $4$ incognite: $\dim(H\cap\ker L)=1$, e $\dim(H+\ker L)=3+2-1=4$.` },
          { t: r`Sommare le dimensioni: $3+2=5$`, poi: r`$5$ supera $4$, la dimensione di $\M_{\R}(2,2)$: manca il termine dell'intersezione.` },
          { t: r`Unire le equazioni dei due sottospazi per trovare la somma`, poi: r`Unendo le equazioni si ottiene l'<strong>intersezione</strong>. Per la somma si uniscono i <strong>generatori</strong>.` }
        ] },

      { fonte: 'Gennaio 2025 · 2.1', tipo: 'rappresentativa',
        testo: r`Sia $L:P_2\to P_2$, $L(p):=(t+1)p'+(t^{2}+1)p''$. Trovare la matrice rappresentativa di $L$ rispetto alla base $\{1,t,t^{2}\}$.`,
        segnale: r`«Matrice rappresentativa rispetto alla base».`,
        mosse: [
          { t: r`Calcolare $L(1)$, $L(t)$, $L(t^{2})$ e mettere le loro coordinate in colonna`, poi: r`$L(1)=0$, $L(t)=1+t$, $L(t^{2})=2+2t+4t^{2}$: le colonne sono $(0,0,0)$, $(1,1,0)$, $(2,2,4)$.` },
          { t: r`Mettere le coordinate delle immagini in riga`, poi: r`Si ottiene la trasposta, e $A\vx$ non dà più le coordinate di $L(p)$.` },
          { t: r`Calcolare il polinomio caratteristico di $L$`, poi: r`Per il polinomio caratteristico serve prima la matrice: è il passo dopo, non il primo.` }
        ] },

      { fonte: 'Gennaio 2025 · 2.4', tipo: 'autovalori',
        testo: r`Per la stessa $L$, i polinomi $1$, $1+t$, $2+2t+3t^{2}$ sono autovettori con autovalori $0$, $1$, $4$. Calcolare $L^{\circ5}(3+3t+3t^{2})$.`,
        segnale: r`Una potenza della mappa e gli autovettori già trovati.`,
        mosse: [
          { t: r`Scrivere $3+3t+3t^{2}$ come combinazione degli autovettori`, poi: r`$3+3t+3t^{2}=(1+t)+(2+2t+3t^{2})$, e $L^{\circ5}$ moltiplica ogni pezzo per $\lambda^{5}$: $(1+t)+1024\,(2+2t+3t^{2})=2049+2049t+3072t^{2}$.` },
          { t: r`Applicare $L$ cinque volte di seguito`, poi: r`Si arriva, ma con cinque derivate prime e seconde e un errore quasi garantito: è proprio la strada che l'esercizio vuole evitare.` },
          { t: r`Calcolare $A^{5}$ moltiplicando la matrice per sé stessa`, poi: r`Funziona, ma sono quattro prodotti $3\times3$; con gli autovettori il conto sta in una riga.` }
        ] },

      { fonte: 'Febbraio 2025 · 2.2', tipo: 'autovalori',
        testo: r`Sia $T:\R^{3}\to\R^{3}$, $T(x,y,z):=(x+y+z,\ y+z,\ z)$. Stabilire se $T$ è diagonalizzabile.`,
        segnale: r`La parola «diagonalizzabile».`,
        mosse: [
          { t: r`Scrivere la matrice, trovare gli autovalori e confrontare $m_g$ e $m_a$ di quello multiplo`, poi: r`Triangolare con diagonale $1,1,1$: $m_a(1)=3$, ma $r(A-I)=2$ dà $m_g(1)=1$. Non diagonalizzabile.` },
          { t: r`Controllare che $\det A\ne0$`, poi: r`$\det A=1$, ma invertibile non vuol dire diagonalizzabile: questa matrice è invertibile e non è diagonalizzabile.` },
          { t: r`Dire che è triangolare, quindi diagonalizzabile`, poi: r`Triangolare dice dove sono gli autovalori, non quanto sono grandi gli autospazi.` }
        ] },

      { fonte: 'Febbraio 2025 · 2.3', tipo: 'rappresentativa',
        testo: r`Trovare la matrice di $T$ (quella di prima) rispetto alla base $B:=\{(1,2,0),(1,1,1),(1,1,0)\}$, la stessa nel dominio e nel codominio.`,
        segnale: r`Una base diversa dalla canonica, la stessa nel dominio e nel codominio.`,
        mosse: [
          { t: r`Calcolare $S^{-1}AS$, con $S$ la matrice che ha i vettori di $B$ in colonna`, poi: r`$S^{-1}AS=\begin{bmatrix}-1&-1&-1\\0&1&0\\4&3&3\end{bmatrix}$. Controllo: $T(1,2,0)=(3,2,0)=-(1,2,0)+4(1,1,0)$ ✓.` },
          { t: r`Calcolare $SAS^{-1}$`, poi: r`È la formula al contrario: la colonna $j$ deve contenere le coordinate di $T(\vb_j)$ rispetto a $B$, e questa no.` },
          { t: r`Applicare $T$ ai vettori di $B$ e metterli in colonna così come sono`, poi: r`Quelle sono le coordinate rispetto alla base <strong>canonica</strong>: vanno ancora riscritte rispetto a $B$.` }
        ] },

      { fonte: 'Febbraio 2025 · 1.2', tipo: 'geometria',
        testo: r`$\ell_1:\ 2x+4y+3z=7,\ 2x-4y-z=-5$, e $\ell_2$ è la parallela a $\ell_1$ per $(2,1,4)$. Trovare il piano che contiene $\ell_1$ e $\ell_2$.`,
        segnale: r`Rette e piani in $\R^{3}$, con le loro equazioni.`,
        mosse: [
          { t: r`Prendere il fascio dei piani per $\ell_1$ e imporre il passaggio per $(2,1,4)$`, poi: r`$13\alpha+\beta=0$, quindi $(\alpha,\beta)=(1,-13)$ e il piano è $-3x+7y+2z=9$.` },
          { t: r`Mettere a sistema le equazioni di $\ell_1$ e di $\ell_2$`, poi: r`Due rette parallele distinte non hanno punti comuni: il sistema è impossibile e non dice nulla sul piano.` },
          { t: r`Prendere il piano per $(2,1,4)$ perpendicolare a $\ell_1$`, poi: r`Quel piano taglia $\ell_1$ in un punto solo: non la contiene.` }
        ] },

      { fonte: 'Febbraio 2025 · 1.3', tipo: 'geometria',
        testo: r`Trovare la retta perpendicolare a $\ell_1$ (quella di prima) e passante per $(6,-1,3)$. Due rette perpendicolari si intersecano formando un angolo retto.`,
        segnale: r`«Retta perpendicolare a una retta, per un punto».`,
        mosse: [
          { t: r`Scrivere $\ell_1$ in parametrica e imporre che il vettore dal suo punto generico a $(6,-1,3)$ sia ortogonale alla direzione`, poi: r`Viene $t_0=1$: il piede è $(0,1,1)$ e la retta ha direzione $(6,-2,2)$.` },
          { t: r`Usare come direzione il vettore normale di uno dei due piani che definiscono $\ell_1$`, poi: r`È ortogonale a $\ell_1$, ma la retta per $(6,-1,3)$ con quella direzione in genere non incontra $\ell_1$: due rette perpendicolari devono intersecarsi.` },
          { t: r`Usare come direzione quella di $\ell_1$`, poi: r`Si ottiene la parallela, il contrario di ciò che serve.` }
        ] },

      { fonte: 'Settembre 2025 · 1.2', tipo: 'mappa',
        testo: r`Sia $T:\M_{\R}(2,2)\to\M_{\R}(2,2)$, $T(A):=CAC^{-1}$, con $C$ invertibile. Stabilire se $T$ è iniettiva.`,
        segnale: r`«Iniettiva» detto di una mappa.`,
        mosse: [
          { t: r`Controllare il nucleo: $CAC^{-1}=0$ implica $A=C^{-1}\,0\,C=0$`, poi: r`$\ker T=\{0\}$, quindi $T$ è iniettiva.` },
          { t: r`Calcolare $\det T(A)$`, poi: r`$\det(CAC^{-1})=\det A$ parla di $A$, non di quante matrici hanno la stessa immagine.` },
          { t: r`Scrivere $T(A)$ elemento per elemento e risolvere un sistema in quattro incognite`, poi: r`Funziona, ma con due prodotti di matrici da fare; l'argomento sul nucleo sta in una riga.` }
        ] },

      { fonte: 'Settembre 2025 · 2.2', tipo: 'sottospazi',
        testo: r`In $\R[t]_{\le2}$: $U:=\{p:\ p(1)=2p(0)\}$ e $W:=\operatorname{span}\{t-1,\ t^{2}\}$. Trovare una base di $U\cap W$.`,
        segnale: r`Due sottospazi di polinomi, uno con una condizione e uno con generatori, e il simbolo $\cap$.`,
        mosse: [
          { t: r`Scrivere l'elemento generico di $W$, $\alpha(t-1)+\beta t^{2}$, e imporre la condizione di $U$`, poi: r`$p(1)=\beta$, $p(0)=-\alpha$: la condizione è $2\alpha+\beta=0$, e $U\cap W=\operatorname{span}\{2t^{2}-t+1\}$.` },
          { t: r`Prendere i vettori comuni alle basi di $U$ e $W$`, poi: r`Le due basi non hanno elementi in comune, eppure l'intersezione non è nulla: un suo vettore può non stare in nessuna delle due basi.` },
          { t: r`Unire le basi di $U$ e $W$ ed estrarre una base`, poi: r`Così si ottiene una base di $U+W$, non di $U\cap W$.` }
        ] },

      { fonte: 'Settembre 2025 · 2.3', tipo: 'sottospazi',
        testo: r`Con gli stessi $U$ e $W$, scrivere $p(t)=t$ come somma di un polinomio di $U$ e di uno di $W$. La scrittura è unica?`,
        segnale: r`«Scrivere come somma» di elementi di due sottospazi, e «unica».`,
        mosse: [
          { t: r`Vedere che $U+W$ è tutto lo spazio, poi guardare $U\cap W$: la scrittura è unica solo se l'intersezione è $\{0\}$`, poi: r`$t=\frac12(t-1)+\frac12(1+t)$, e non è unica, perché $U\cap W\ne\{0\}$.` },
          { t: r`Rispondere «unica, perché $U+W$ è tutto lo spazio»`, poi: r`Che la somma sia tutto lo spazio dice che la scrittura <strong>esiste</strong>; l'unicità dipende dall'intersezione.` },
          { t: r`Cercare $t$ dentro $U$ o dentro $W$`, poi: r`$t$ non sta in nessuno dei due ($p(1)=1\ne0=2p(0)$): serve un pezzo in ciascuno.` }
        ] },

      { fonte: 'Febbraio 2026 · 1.i', tipo: 'sottospazi',
        testo: r`Sia $U:=\operatorname{span}\{(1,0,0,-2),(0,1,1,0),(1,-1,0,0)\}\subset\R^{4}$. Scrivere un'equazione cartesiana di $U$.`,
        segnale: r`Un sottospazio dato con generatori e la richiesta delle sue equazioni.`,
        mosse: [
          { t: r`Ridurre a scala $[\vv_1|\vv_2|\vv_3|\vx]$ e imporre che l'ultima colonna non abbia pivot`, poi: r`Resta la riga $(0,0,0\,|\,2x+2y-2z+w)$: l'equazione è $2x+2y-2z+w=0$.` },
          { t: r`Calcolare il nucleo della matrice che ha i tre vettori in colonna`, poi: r`Quel nucleo dice quali combinazioni dei tre vettori danno zero (qui solo quella banale), non quali $(x,y,z,w)$ stanno in $U$.` },
          { t: r`Scrivere $x_1+x_2+x_3+x_4=0$`, poi: r`È l'equazione di $W$, l'altro sottospazio del tema.` }
        ] },

      { fonte: 'Febbraio 2026 · 2.iii', tipo: 'rappresentativa',
        testo: r`Sia $L:W\to\M_{\R}(2,2)$, $L(X):=AX+X^{T}A$, con $W$ di dimensione $3$. Scrivere la matrice di $L$ rispetto a una base $C=\{C_1,C_2,C_3\}$ di $W$ e alla base canonica $B$ di $\M_{\R}(2,2)$.`,
        segnale: r`«Matrice rappresentativa rispetto alla base $C$ e alla base $B$».`,
        mosse: [
          { t: r`Calcolare $L(C_1)$, $L(C_2)$, $L(C_3)$ e scrivere in colonna le loro coordinate rispetto a $B$`, poi: r`Viene una matrice $4\times3$, con colonne $(2,3,-1,0)$, $(0,4,4,0)$, $(0,2,2,0)$.` },
          { t: r`Aspettarsi una matrice $3\times3$, perché $W$ ha tre vettori di base`, poi: r`Le righe sono tante quanto la dimensione del <strong>codominio</strong>, $4$: la matrice è $4\times3$.` },
          { t: r`Mettere le coordinate in riga`, poi: r`Si ottiene una $3\times4$, la trasposta: la regola è «colonna $j$ = coordinate dell'immagine del vettore $j$».` }
        ] },

      { fonte: 'Giugno 2026 · 2.4', tipo: 'autovalori',
        testo: r`Sia $\tau:\M_{\R}(3,3)\to\M_{\R}(3,3)$, $\tau(M):=M^{T}$. Determinare gli autospazi di $\tau$ e stabilire se è diagonalizzabile.`,
        segnale: r`«Autospazi» e «diagonalizzabile» per un endomorfismo dato a parole.`,
        mosse: [
          { t: r`Cercare le $M$ con $M^{T}=\lambda M$: le simmetriche danno $\lambda=1$, le antisimmetriche $\lambda=-1$`, poi: r`$m_g(1)+m_g(-1)=6+3=9=\dim V$: le due basi insieme sono una base di autovettori, quindi $\tau$ è diagonalizzabile.` },
          { t: r`Scrivere la matrice $9\times9$ di $\tau$ e calcolarne il polinomio caratteristico`, poi: r`Si arriva, ma con un determinante $9\times9$; ragionare sulla definizione è immediato.` },
          { t: r`Dire che $\tau$ non ha autovalori, perché non è una matrice`, poi: r`Anche una mappa fra spazi di matrici ha autovalori e autovettori, definiti da $\tau(M)=\lambda M$: qui sono $1$ e $-1$.` }
        ] },

      { fonte: 'Giugno 2026 · 1.2', tipo: 'geometria',
        testo: r`In $\R^{4}$ sono dati i sottospazi affini $\mathcal A:=P_0+U$ e $\mathcal B:=Q_0+W$. Stabilire se $\mathcal A\cap\mathcal B$ è vuoto.`,
        segnale: r`«Sottospazi affini», cioè un punto più un sottospazio.`,
        mosse: [
          { t: r`Scrivere equazioni cartesiane di $\mathcal A$ e $\mathcal B$ e metterle a sistema`, poi: r`Viene $x-y+z=1$ e $x-y+z=-1$: il sistema è impossibile, l'intersezione è vuota.` },
          { t: r`Calcolare $U\cap W$`, poi: r`Quella è l'intersezione delle giaciture, che passano per l'origine: qui $U=W$, eppure $\mathcal A$ e $\mathcal B$ non si toccano.` },
          { t: r`Controllare se $P_0=Q_0$`, poi: r`Punti diversi non dicono nulla: lo stesso sottospazio affine si può scrivere partendo da punti diversi.` }
        ] },

      { fonte: 'In itinere 30/10/2026 · d', tipo: 'mappa',
        testo: r`$A$ è $4\times4$ e $\ker A=\operatorname{span}\{(1,1,-1,0)\}$. Trovare tutti gli $\vx$ con $A\vx=(1,1,2,0)$, che è la terza colonna di $A$.`,
        segnale: r`«Tutti i vettori» con $L_A(\vx)$ uguale a un vettore dato.`,
        mosse: [
          { t: r`Una soluzione particolare più il nucleo`, poi: r`$(0,0,1,0)$ dà proprio la terza colonna, quindi $\vx=(0,0,1,0)+t(1,1,-1,0)$, $t\in\R$.` },
          { t: r`Calcolare $A^{-1}(1,1,2,0)$`, poi: r`$A$ non è invertibile: il nucleo non è banale.` },
          { t: r`Rispondere solo $\vx=(0,0,1,0)$`, poi: r`È una soluzione, ma non tutte: con il nucleo non banale le soluzioni sono infinite.` }
        ] },

      { fonte: 'Gennaio 2026 · 3.3', tipo: 'rappresentativa',
        testo: r`$L$ è l'endomorfismo di $\M_{\R}(2,2)$ che ha matrice $A$ rispetto alla base $B$, e hai già trovato $\ker A$ e $\operatorname{Col}(A)$ in $\R^{4}$. Determinare nucleo e immagine di $L$.`,
        segnale: r`Un endomorfismo dato attraverso la sua matrice rispetto a una base.`,
        mosse: [
          { t: r`Leggere i vettori di $\ker A$ e di $\operatorname{Col}(A)$ come coordinate rispetto a $B$ e ricostruire le matrici`, poi: r`Per esempio $(1,0,1,0)$ diventa $B_1+B_3=\begin{bmatrix}1&0\\0&1\end{bmatrix}$, un elemento dell'immagine.` },
          { t: r`Rispondere $\ker L=\ker A$`, poi: r`$\ker A$ sta in $\R^{4}$, $\ker L$ in $\M_{\R}(2,2)$: vanno tradotti con le coordinate.` },
          { t: r`Leggere i vettori come coordinate rispetto alla base canonica`, poi: r`La matrice è scritta rispetto a $B$: con la base canonica si ottengono matrici sbagliate.` }
        ] },

      { fonte: 'In itinere 11/11/2025 · d', tipo: 'geometria',
        testo: r`$\ell_1:=\{(a,b,c):\ (a+c)+bt+(a+c)t^{2}=1+t^{2}\}$ e $\ell_2:\ \mathbf r=(0,0,2)+t(1,0,0)$. Verificare che $\ell_1$ è una retta e trovare la posizione reciproca.`,
        segnale: r`«Posizione reciproca» di due rette.`,
        mosse: [
          { t: r`Scrivere $\ell_1$ come sistema ($a+c=1$, $b=0$), passare alla parametrica, poi confrontare le direzioni e cercare punti comuni`, poi: r`Direzioni $(1,0,-1)$ e $(1,0,0)$, non parallele, e un punto comune $(-1,0,2)$: incidenti.` },
          { t: r`Concludere «sghembe» perché le direzioni non sono parallele`, poi: r`Non parallele vuol dire incidenti <strong>oppure</strong> sghembe: il punto comune va cercato.` },
          { t: r`Concludere che $\ell_1$ è un piano, perché ha tre incognite`, poi: r`Le equazioni indipendenti sono due, $a+c=1$ e $b=0$: $3-2=1$, è una retta.` }
        ] }
    ]
  };
})();
