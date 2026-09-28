/* ============================================================
   esercizi.js — palestra di Geometria e Algebra Lineare
   d: 1 base · 2 standard · 3 impegnativo
   ============================================================ */
(function () {
  'use strict';
  const r = String.raw;

  const E = [

/* ==================== SEZIONE 1: MEG ==================== */
{ id: 'G1.1', sez: 1, tema: 'Riduzione a scala', d: 1,
  t: r`Ridurre a scala con il MEG la matrice $$A=\begin{bmatrix}1&2&-1\\2&5&1\\3&7&0\end{bmatrix}$$ e determinarne il rango.`,
  hints: [ r`Il pivot della prima colonna è già $a_{11}=1$: annulla gli elementi sotto di esso.`,
           r`$R_2\to R_2-2R_1$ e $R_3\to R_3-3R_1$.`,
           r`Dopo il primo passo la terza riga diventa uguale alla seconda: che cosa succede facendo $R_3\to R_3-R_2$?` ],
  sol: r`<strong>Primo passo</strong> — pivot $a_{11}=1$, annullo sotto:
$$R_2\to R_2-2R_1,\qquad R_3\to R_3-3R_1$$
$$\begin{bmatrix}1&2&-1\\2&5&1\\3&7&0\end{bmatrix}\longrightarrow\begin{bmatrix}1&2&-1\\0&1&3\\0&1&3\end{bmatrix}$$
<strong>Secondo passo</strong> — pivot $a_{22}=1$, annullo sotto:
$$R_3\to R_3-R_2\qquad\Longrightarrow\qquad U=\begin{bmatrix}1&2&-1\\0&1&3\\0&0&0\end{bmatrix}$$
<strong>Verifica che sia a scala.</strong> Gli zeri iniziali sono $\ell_1=0$, $\ell_2=1$, $\ell_3=3=n$: crescono strettamente fino alla riga nulla, che sta in fondo. ✓<br><br>
<strong>Rango.</strong> I pivot sono $2$ (posti $(1,1)$ e $(2,2)$), quindi
$$\boxed{\rg A=2}$$
Coerente con $r\le\min\{3,3\}=3$. La terza riga di $A$ era la somma delle prime due, e il MEG l'ha fatta emergere azzerandola. $\blacksquare$` },

{ id: 'G1.2', sez: 1, tema: 'Risoluzione di sistemi', d: 2,
  t: r`Risolvere con il MEG il sistema $$\begin{cases}x+2y+z=4\\ 2x+5y-z=3\\ 3x+7y+2z=12\end{cases}$$`,
  hints: [ r`Scrivi la matrice completa $[A\,|\,\vb]$ e riducila a scala.`,
           r`Dopo il primo passo controlla se compare uno 0-pivot nella colonna dei termini noti.`,
           r`Se non c'è, conta i pivot: $r$ rispetto a $n=3$ dice quante soluzioni ci sono.` ],
  sol: r`<strong>Matrice completa e riduzione.</strong>
$$[A\,|\,\vb]=\left[\begin{array}{ccc|c}1&2&1&4\\2&5&-1&3\\3&7&2&12\end{array}\right]
\xrightarrow[R_3-3R_1]{R_2-2R_1}
\left[\begin{array}{ccc|c}1&2&1&4\\0&1&-3&-5\\0&1&-1&0\end{array}\right]$$
$$\xrightarrow{R_3-R_2}\left[\begin{array}{ccc|c}1&2&1&4\\0&1&-3&-5\\0&0&2&5\end{array}\right]$$
<strong>Compatibilità.</strong> Nessun pivot nella colonna dei termini noti: niente 0-pivot, il sistema è compatibile. I pivot sono $3$, quindi $\rg A=\rg[A\,|\,\vb]=3=n$: per Rouché-Capelli la soluzione è <strong>unica</strong>.<br><br>
<strong>Sostituzione all'indietro.</strong>
$$2z=5\ \Longrightarrow\ z=\tfrac52$$
$$y-3z=-5\ \Longrightarrow\ y=-5+3\cdot\tfrac52=\tfrac52$$
$$x+2y+z=4\ \Longrightarrow\ x=4-2\cdot\tfrac52-\tfrac52=4-5-\tfrac52=-\tfrac72$$
$$\boxed{(x,y,z)=\left(-\tfrac72,\ \tfrac52,\ \tfrac52\right)}$$
<strong>Verifica</strong> nella terza equazione: $3(-\frac72)+7\cdot\frac52+2\cdot\frac52=-\frac{21}{2}+\frac{35}{2}+5=7+5=12$ ✓ $\blacksquare$` },

{ id: 'G1.3', sez: 1, tema: 'Incognite libere', d: 2,
  t: r`Risolvere e descrivere tutte le soluzioni di $$\begin{cases}x_1+2x_2+\ \ \ \ \ \ +x_4=1\\ x_1+2x_2+2x_3+4x_4=1\\ 2x_1+4x_2+2x_3+5x_4=2\end{cases}$$`,
  hints: [ r`È il sistema $3\times4$: con $n=4$ incognite e al più $3$ pivot, avrai per forza incognite libere.`,
           r`Riduci $[A\,|\,\vb]$ a scala e individua le colonne con pivot.`,
           r`Le incognite corrispondenti alle colonne <em>senza</em> pivot sono libere: assegna loro un parametro.` ],
  sol: r`<strong>Riduzione.</strong>
$$\left[\begin{array}{cccc|c}1&2&0&1&1\\1&2&2&4&1\\2&4&2&5&2\end{array}\right]
\xrightarrow[R_3-2R_1]{R_2-R_1}
\left[\begin{array}{cccc|c}1&2&0&1&1\\0&0&2&3&0\\0&0&2&3&0\end{array}\right]
\xrightarrow{R_3-R_2}
\left[\begin{array}{cccc|c}1&2&0&1&1\\0&0&2&3&0\\0&0&0&0&0\end{array}\right]$$
<strong>Lettura.</strong> Pivot nelle colonne $1$ e $3$ $\Rightarrow r=2$. Nessuno 0-pivot $\Rightarrow$ compatibile. Incognite:
<ul><li><strong>di base</strong> (colonne con pivot): $x_1,x_3$;</li>
<li><strong>libere</strong> (colonne senza pivot): $x_2,x_4$ — sono $n-r=4-2=2$.</li></ul>
<strong>Parametri.</strong> Poniamo $x_2=t$, $x_4=s$ con $t,s\in\K$.
$$2x_3+3s=0\ \Longrightarrow\ x_3=-\tfrac32 s$$
$$x_1+2t+s=1\ \Longrightarrow\ x_1=1-2t-s$$
<strong>Soluzione in forma vettoriale</strong> (quella che il teorema sulla struttura prevede):
$$\vx=\begin{bmatrix}1\\0\\0\\0\end{bmatrix}+t\begin{bmatrix}-2\\1\\0\\0\end{bmatrix}+s\begin{bmatrix}-1\\0\\-\tfrac32\\1\end{bmatrix},\qquad t,s\in\K$$
Il primo vettore è una soluzione particolare $\vx_0$; gli altri due sono $\vv_1,\vv_2$ e generano le soluzioni dell'omogeneo. Nota che $\vv_1,\vv_2$ dipendono solo da $A$. $\blacksquare$` },

{ id: 'G1.4', sez: 1, tema: 'Riduzione a scala', d: 1,
  t: r`Dire quali delle seguenti matrici sono a scala, giustificando con gli $\ell_i$:
$$A=\begin{bmatrix}0&1&0&0\\0&2&1&2\\0&0&0&5\end{bmatrix},\quad B=\begin{bmatrix}1&2&3\\0&0&0\\0&0&1\end{bmatrix},\quad C=\begin{bmatrix}0&2&3&0\\0&0&0&1\\0&0&0&0\end{bmatrix}$$`,
  hints: [ r`$\ell_i$ è il numero di zeri <em>iniziali</em> della riga $i$ (vale $n$ se la riga è nulla).`,
           r`La condizione è $\ell_1<\ell_2<\dots$ finché $\ell_i<n$; le righe nulle devono stare in fondo.` ],
  sol: r`<strong>Matrice $A$</strong> ($n=4$): $\ell_1=1$, $\ell_2=1$, $\ell_3=3$.<br>
Poiché $\ell_1=\ell_2$ la crescita <em>non</em> è stretta: <strong>non è a scala</strong>.<br><br>
<strong>Matrice $B$</strong> ($n=3$): $\ell_1=0$, $\ell_2=3$ (riga nulla), $\ell_3=2$.<br>
Si ha $\ell_2>\ell_3$: la riga nulla non è in fondo. <strong>Non è a scala</strong>.<br><br>
<strong>Matrice $C$</strong> ($n=4$): $\ell_1=1$, $\ell_2=3$, $\ell_3=4=n$.<br>
Crescita stretta fino alla riga nulla, che è l'ultima: <strong>è a scala</strong> ✓<br>
I pivot sono nei posti $(1,2)$ e $(2,4)$, quindi $\rg C=2$. $\blacksquare$<br><br>
<em>Nota:</em> il criterio guarda solo la <em>posizione</em> degli zeri iniziali, non i valori. $C$ è a scala anche se i pivot non valgono $1$.` },

/* ============= SEZIONE 2: matrici e teoremi ============= */
{ id: 'G2.1', sez: 2, tema: 'Prodotto di matrici', d: 1,
  t: r`Date $$A=\begin{bmatrix}1&2\\0&-1\\3&1\end{bmatrix},\qquad B=\begin{bmatrix}2&0&1\\1&3&-2\end{bmatrix}$$ calcolare, quando è possibile, $AB$ e $BA$.`,
  hints: [ r`Controlla i tipi <strong>prima</strong> di calcolare: il prodotto $XY$ esiste se le colonne di $X$ sono quante le righe di $Y$.`,
           r`$A$ è $3\times2$, $B$ è $2\times3$: entrambi i prodotti esistono, ma di tipo diverso.`,
           r`$[AB]_{ij}$ è il prodotto scalare della riga $i$ di $A$ per la colonna $j$ di $B$.` ],
  sol: r`<strong>Tipi.</strong> $A$ è $3\times2$ e $B$ è $2\times3$. Quindi $AB$ è $3\times3$ e $BA$ è $2\times2$: esistono entrambi ma <em>non sono confrontabili</em>.<br><br>
<strong>Calcolo di $AB$</strong> ($3\times3$):
$$AB=\begin{bmatrix}1\cdot2+2\cdot1 & 1\cdot0+2\cdot3 & 1\cdot1+2\cdot(-2)\\ 0\cdot2+(-1)\cdot1 & 0\cdot0+(-1)\cdot3 & 0\cdot1+(-1)(-2)\\ 3\cdot2+1\cdot1 & 3\cdot0+1\cdot3 & 3\cdot1+1\cdot(-2)\end{bmatrix}=\begin{bmatrix}4&6&-3\\-1&-3&2\\7&3&1\end{bmatrix}$$
<strong>Calcolo di $BA$</strong> ($2\times2$):
$$BA=\begin{bmatrix}2\cdot1+0\cdot0+1\cdot3 & 2\cdot2+0\cdot(-1)+1\cdot1\\ 1\cdot1+3\cdot0+(-2)\cdot3 & 1\cdot2+3\cdot(-1)+(-2)\cdot1\end{bmatrix}=\begin{bmatrix}5&5\\-5&-3\end{bmatrix}$$
$$\boxed{AB\ \text{è }3\times3,\quad BA\ \text{è }2\times2:\ \text{il prodotto non è commutativo}}$$
Qui la non commutatività è evidente già dai <em>tipi</em>, prima ancora che dai valori. $\blacksquare$` },

{ id: 'G2.2', sez: 2, tema: 'Rouché-Capelli', d: 2,
  t: r`Discutere, al variare di $k\in\R$, il sistema $$\begin{cases}x+y+z=1\\ x+ky+z=2\\ x+y+kz=3\end{cases}$$`,
  hints: [ r`Riduci a scala trattando $k$ come una costante, ma <strong>senza mai dividere per quantità che possono annullarsi</strong>.`,
           r`$R_2-R_1$ e $R_3-R_1$ danno righe con $(k-1)$ come coefficiente: è lì che si biforca la discussione.`,
           r`Separa i casi $k\ne1$ e $k=1$, e usa Rouché-Capelli in ciascuno.` ],
  sol: r`<strong>Riduzione</strong> (le operazioni sono lecite per ogni $k$, perché non dividiamo per nulla):
$$\left[\begin{array}{ccc|c}1&1&1&1\\1&k&1&2\\1&1&k&3\end{array}\right]
\xrightarrow[R_3-R_1]{R_2-R_1}
\left[\begin{array}{ccc|c}1&1&1&1\\0&k-1&0&1\\0&0&k-1&2\end{array}\right]$$
La matrice è già a scala quando $k\ne1$.<br><br>
<strong>Caso $k\ne1$.</strong> I pivot sono $1$, $k-1$, $k-1$: tre pivot, quindi $\rg A=\rg[A\,|\,\vb]=3=n$. Per Rouché-Capelli la soluzione è <strong>unica</strong>:
$$z=\frac{2}{k-1},\qquad y=\frac{1}{k-1},\qquad x=1-y-z=1-\frac{3}{k-1}=\frac{k-4}{k-1}$$
<strong>Caso $k=1$.</strong> La matrice ridotta diventa
$$\left[\begin{array}{ccc|c}1&1&1&1\\0&0&0&1\\0&0&0&2\end{array}\right]$$
La seconda riga è l'equazione $0=1$: c'è uno <strong>0-pivot</strong>. Quindi $\rg A=1$ ma $\rg[A\,|\,\vb]=2$, e il sistema è <strong>incompatibile</strong>.<br><br>
$$\boxed{\begin{aligned}k\ne1 &\ \Rightarrow\ \text{soluzione unica}\\ k=1 &\ \Rightarrow\ \text{nessuna soluzione}\end{aligned}}$$
<em>Nota metodologica:</em> l'errore classico è dividere subito per $k-1$ per «normalizzare» il pivot. Se lo fai, perdi proprio il caso $k=1$, che è quello interessante. In presenza di parametri, <strong>non dividere mai</strong> per un'espressione che può annullarsi senza discuterla. $\blacksquare$` },

{ id: 'G2.3', sez: 2, tema: 'Matrice inversa', d: 2,
  t: r`Calcolare, se esiste, l'inversa di $$A=\begin{bmatrix}1&2&0\\0&1&3\\1&1&-2\end{bmatrix}$$ usando il metodo $[A\,|\,I]\to[I\,|\,A^{-1}]$.`,
  hints: [ r`Affianca la matrice identità e applica il MEG fino a ottenere $I$ a sinistra.`,
           r`Dopo aver ottenuto la forma a scala, prosegui verso l'alto (Gauss-Jordan) per azzerare anche sopra i pivot.`,
           r`Se durante la riduzione ottieni una riga nulla a sinistra, $\rg A<3$ e l'inversa non esiste.` ],
  sol: r`<strong>Affiancamento e discesa.</strong>
$$\left[\begin{array}{ccc|ccc}1&2&0&1&0&0\\0&1&3&0&1&0\\1&1&-2&0&0&1\end{array}\right]
\xrightarrow{R_3-R_1}
\left[\begin{array}{ccc|ccc}1&2&0&1&0&0\\0&1&3&0&1&0\\0&-1&-2&-1&0&1\end{array}\right]$$
$$\xrightarrow{R_3+R_2}
\left[\begin{array}{ccc|ccc}1&2&0&1&0&0\\0&1&3&0&1&0\\0&0&1&-1&1&1\end{array}\right]$$
Tre pivot $\Rightarrow\rg A=3\Rightarrow A$ è invertibile.<br><br>
<strong>Risalita (Gauss-Jordan).</strong>
$$\xrightarrow{R_2-3R_3}
\left[\begin{array}{ccc|ccc}1&2&0&1&0&0\\0&1&0&3&-2&-3\\0&0&1&-1&1&1\end{array}\right]
\xrightarrow{R_1-2R_2}
\left[\begin{array}{ccc|ccc}1&0&0&-5&4&6\\0&1&0&3&-2&-3\\0&0&1&-1&1&1\end{array}\right]$$
$$\boxed{A^{-1}=\begin{bmatrix}-5&4&6\\3&-2&-3\\-1&1&1\end{bmatrix}}$$
<strong>Verifica</strong> (prima riga di $A$ per prima colonna di $A^{-1}$): $1(-5)+2\cdot3+0(-1)=-5+6=1$ ✓; prima riga per seconda colonna: $1\cdot4+2(-2)+0=0$ ✓. $\blacksquare$` },

{ id: 'G2.4', sez: 2, tema: 'Invertibilità', d: 2,
  t: r`Per quali $t\in\R$ la matrice $$A=\begin{bmatrix}1&t\\t&4\end{bmatrix}$$ è invertibile? Per tali $t$, scrivere $A^{-1}$.`,
  hints: [ r`Per una matrice $2\times2$ l'invertibilità equivale a $\det A\ne0$.`,
           r`$\det\begin{bmatrix}a&b\\c&d\end{bmatrix}=ad-bc$.`,
           r`Formula: $A^{-1}=\dfrac{1}{\det A}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}$ — si scambiano gli elementi diagonali e si cambia segno agli altri.` ],
  sol: r`<strong>Determinante.</strong>
$$\det A=1\cdot4-t\cdot t=4-t^{2}=(2-t)(2+t)$$
<strong>Condizione di invertibilità.</strong>
$$\det A\ne0\iff t\ne2\ \text{ e }\ t\ne-2$$
$$\boxed{A\ \text{è invertibile}\iff t\in\R\setminus\{-2,\,2\}}$$
<strong>Inversa.</strong> Per tali $t$:
$$A^{-1}=\frac{1}{4-t^{2}}\begin{bmatrix}4&-t\\-t&1\end{bmatrix}$$
<strong>Che cosa succede nei casi esclusi.</strong> Per $t=2$: $A=\begin{bmatrix}1&2\\2&4\end{bmatrix}$, la seconda riga è il doppio della prima, quindi $\rg A=1<2$. Il sistema omogeneo $A\vx=\vzero$ ha soluzioni non banali (per esempio $(2,-1)$), coerentemente con le condizioni di invertibilità. Analogamente per $t=-2$. $\blacksquare$` },

{ id: 'G2.5', sez: 2, tema: 'Cramer', d: 2,
  t: r`Risolvere con il teorema di Cramer $$\begin{cases}2x+y-z=3\\ x-y+2z=0\\ 3x+2y+z=7\end{cases}$$ calcolando la sola incognita $y$.`,
  hints: [ r`Cramer dà $x_j=\dfrac{\det A_j}{\det A}$, dove $A_j$ ha la colonna $j$ sostituita da $\vb$.`,
           r`Per $y$ serve $j=2$: sostituisci la <strong>seconda</strong> colonna.`,
           r`Calcola prima $\det A$: se fosse $0$, Cramer non sarebbe applicabile.` ],
  sol: r`<strong>Matrice dei coefficienti e determinante.</strong>
$$A=\begin{bmatrix}2&1&-1\\1&-1&2\\3&2&1\end{bmatrix}$$
Sviluppo lungo la prima riga:
$$\det A=2\begin{vmatrix}-1&2\\2&1\end{vmatrix}-1\begin{vmatrix}1&2\\3&1\end{vmatrix}+(-1)\begin{vmatrix}1&-1\\3&2\end{vmatrix}$$
$$=2(-1-4)-1(1-6)-1(2+3)=-10+5-5=-10$$
Poiché $\det A=-10\ne0$, Cramer è applicabile e la soluzione è unica.<br><br>
<strong>Matrice $A_2$</strong> — si sostituisce la <em>seconda</em> colonna con $\vb=(3,0,7)^{T}$:
$$A_2=\begin{bmatrix}2&3&-1\\1&0&2\\3&7&1\end{bmatrix}$$
Sviluppo lungo la seconda riga (contiene uno zero, conviene):
$$\det A_2=-1\begin{vmatrix}3&-1\\7&1\end{vmatrix}+0-2\begin{vmatrix}2&3\\3&7\end{vmatrix}=-1(3+7)-2(14-9)=-10-10=-20$$
<strong>Conclusione.</strong>
$$y=\frac{\det A_2}{\det A}=\frac{-20}{-10}=2$$
$$\boxed{y=2}$$
<em>Perché Cramer qui è sensato:</em> serviva una sola incognita. Per averle tutte e tre, il MEG sarebbe stato più rapido di quattro determinanti $3\times3$. $\blacksquare$` },

{ id: 'G2.6', sez: 2, tema: 'Struttura delle soluzioni', d: 3,
  t: r`Sia $A$ di tipo $3\times5$ con $\rg A=2$. Sapendo che $\vx_0=(1,0,1,0,2)^{T}$ è soluzione di $A\vx=\vb$, rispondere motivando:
<ol><li>quante soluzioni ha il sistema?</li>
<li>da quanti parametri dipendono?</li>
<li>il sistema $A\vx=\vzero$ ha soluzioni non banali?</li>
<li>se $\vx_1=(0,1,1,1,0)^{T}$ è un'altra soluzione di $A\vx=\vb$, che cosa si può dire di $\vx_1-\vx_0$?</li></ol>`,
  hints: [ r`Non serve conoscere $A$: bastano $m$, $n$, $r$ e i teoremi.`,
           r`Il numero di parametri liberi è $n-r$, dove $n$ è il numero di <em>incognite</em>.`,
           r`Per l'ultimo punto usa il teorema sulla struttura delle soluzioni.` ],
  sol: r`Qui $m=3$ (equazioni), $n=5$ (incognite), $r=2$.<br><br>
<strong>1. Quante soluzioni.</strong> Il sistema è compatibile per ipotesi (ci è data una soluzione $\vx_0$). Poiché $r=2<5=n$, per Rouché-Capelli le soluzioni sono <strong>infinite</strong>.<br><br>
<strong>2. Quanti parametri.</strong>
$$n-r=5-2=3$$
Le soluzioni dipendono da <strong>3 parametri liberi</strong>: ci sono $2$ incognite di base e $3$ libere.<br><br>
<strong>3. L'omogeneo.</strong> Sì. $A\vx=\vzero$ è sempre compatibile, e ha soluzioni non banali $\iff r<n$; qui $2<5$. Anzi, le sue soluzioni sono $$S_0=\{t_1\vv_1+t_2\vv_2+t_3\vv_3\ :\ t_i\in\K\}$$ con $\vv_1,\vv_2,\vv_3$ dipendenti solo da $A$.<br><br>
<strong>4. La differenza.</strong> Per il teorema sulla struttura,
$$A(\vx_1-\vx_0)=A\vx_1-A\vx_0=\vb-\vb=\vzero,$$
quindi $\vx_1-\vx_0=(-1,1,0,1,-2)^{T}$ è una <strong>soluzione del sistema omogeneo</strong> associato — ed è non banale, coerentemente con il punto 3.<br><br>
<em>Morale:</em> con $m$, $n$, $r$ e i teoremi si risponde a tutto senza fare un solo conto su $A$. È il tipo di domanda che distingue chi ha capito la teoria da chi sa solo eseguire il MEG. $\blacksquare$` },

{ id: 'G2.7', sez: 2, tema: 'Prodotto di matrici', d: 3,
  t: r`Siano $A,B$ quadrate di ordine $n$. Dire se le seguenti affermazioni sono vere o false, con dimostrazione o controesempio.
<ol><li>Se $AB=O$ allora $A=O$ oppure $B=O$.</li>
<li>Se $A$ e $B$ sono invertibili, anche $A+B$ lo è.</li>
<li>$(A+B)^{2}=A^{2}+2AB+B^{2}$.</li>
<li>Se $A$ è invertibile e $AB=AC$, allora $B=C$.</li></ol>`,
  hints: [ r`Tre sono false: cerca controesempi $2\times2$ piccoli, con $0$ e $1$.`,
           r`Per la (3), sviluppa $(A+B)(A+B)$ senza dare per scontata la commutatività.`,
           r`Per la (4), che cosa puoi moltiplicare a sinistra?` ],
  sol: r`<strong>1. FALSA.</strong> Controesempio:
$$A=\begin{bmatrix}0&1\\0&0\end{bmatrix},\quad B=\begin{bmatrix}0&1\\0&0\end{bmatrix}\ \Longrightarrow\ AB=\begin{bmatrix}0&0\\0&0\end{bmatrix}=O$$
con $A\ne O$ e $B\ne O$. Le matrici hanno <em>divisori dello zero</em>.<br><br>
<strong>2. FALSA.</strong> Prendi $B=-A$ con $A$ invertibile: entrambe sono invertibili ma $A+B=O$, che non lo è. Più semplice ancora: $A=I_2$, $B=-I_2$.<br><br>
<strong>3. FALSA in generale.</strong> Sviluppando con cura:
$$(A+B)^{2}=(A+B)(A+B)=A^{2}+AB+BA+B^{2}$$
che vale $A^{2}+2AB+B^{2}$ <strong>se e solo se</strong> $AB=BA$. Controesempio con le matrici dell'esercizio G2.7.1 modificate: $A=\begin{bmatrix}0&1\\0&0\end{bmatrix}$, $B=\begin{bmatrix}0&0\\1&0\end{bmatrix}$ danno $AB=\begin{bmatrix}1&0\\0&0\end{bmatrix}\ne\begin{bmatrix}0&0\\0&1\end{bmatrix}=BA$.<br><br>
<strong>4. VERA.</strong> Moltiplicando a sinistra per $A^{-1}$:
$$AB=AC\ \Longrightarrow\ A^{-1}(AB)=A^{-1}(AC)\ \Longrightarrow\ (A^{-1}A)B=(A^{-1}A)C\ \Longrightarrow\ I_nB=I_nC\ \Longrightarrow\ B=C$$
<em>Attenzione all'ordine:</em> si moltiplica <strong>a sinistra</strong>, perché $A$ sta a sinistra in entrambi i membri. Da $BA=CA$ si concluderebbe moltiplicando a destra. $\blacksquare$` },

/* ====== SEZIONE 2: aggiunte (MEG-J e equazioni di matrici) ====== */
{ id: 'G2.8', sez: 2, tema: 'Gauss-Jordan', d: 2,
  t: r`Trovare con il MEG-J la <strong>totalmente ridotta</strong> della matrice $$A=\begin{bmatrix}1&2&-1&3\\2&4&1&9\\1&2&3&7\end{bmatrix}$$ e indicare rango, incognite dipendenti e libere del sistema omogeneo associato.`,
  hints: [ r`Parte 1 (MEG): annulla sotto i pivot.`,
           r`Parte 2: normalizza ogni pivot a $1$. Parte 3: annulla anche <em>sopra</em> i pivot, dall'ultimo al primo.`,
           r`Le colonne <em>senza</em> pivot corrispondono alle incognite libere.` ],
  sol: r`<strong>Parte 1 · MEG.</strong>
$$\begin{bmatrix}1&2&-1&3\\2&4&1&9\\1&2&3&7\end{bmatrix}
\xrightarrow[R_3-R_1]{R_2-2R_1}
\begin{bmatrix}1&2&-1&3\\0&0&3&3\\0&0&4&4\end{bmatrix}
\xrightarrow{R_3-\frac43R_2}
\begin{bmatrix}1&2&-1&3\\0&0&3&3\\0&0&0&0\end{bmatrix}$$
<strong>Parte 2 · normalizzazione e Parte 3 · seconda eliminazione</strong> (è ciò che distingue il MEG-J dal MEG). Normalizzo il pivot della riga 2 e annullo sopra:
$$\xrightarrow{\frac13R_2}\begin{bmatrix}1&2&-1&3\\0&0&1&1\\0&0&0&0\end{bmatrix}
\xrightarrow{R_1+R_2}\begin{bmatrix}1&2&0&4\\0&0&1&1\\0&0&0&0\end{bmatrix}$$
Questa è la <strong>totalmente ridotta</strong> di $A$: ogni pivot vale $1$ ed è l'unico elemento non nullo della sua colonna. È unica: qualunque sequenza di operazioni si usi, si arriva qui.<br><br>
<strong>Lettura.</strong> Pivot nelle colonne 1 e 3 ⟹ $\rg A=2$.
<ul><li>incognite dipendenti: $x_1,x_3$;</li>
<li>incognite libere: $x_2,x_4$, cioè $n-r=4-2=2$.</li></ul>
Dal sistema omogeneo: $x_3=-x_4$ e $x_1=-2x_2-4x_4$, da cui
$$\vx=t\begin{bmatrix}-2\\1\\0\\0\end{bmatrix}+s\begin{bmatrix}-4\\0\\-1\\1\end{bmatrix}$$
<em>Perché conviene la totalmente ridotta:</em> le soluzioni si leggono <strong>senza</strong> sostituzione all'indietro. È lo stesso motivo per cui il MEG-J è il metodo per calcolare l'inversa. $\blacksquare$` },

{ id: 'G2.9', sez: 2, tema: 'Equazioni di matrici', d: 2,
  t: r`Risolvere l'equazione matriciale $AX=B$, dove $$A=\begin{bmatrix}1&2\\1&3\end{bmatrix},\qquad B=\begin{bmatrix}3&1\\5&0\end{bmatrix}.$$`,
  hints: [ r`Se $A$ è invertibile puoi moltiplicare <strong>a sinistra</strong> per $A^{-1}$: da che lato sta $A$?`,
           r`Controlla $\det A$ prima di tutto.`,
           r`In alternativa, e spesso più rapido: riduci $[A\,|\,B]$ con il MEG-J fino a $[I\,|\,X]$.` ],
  sol: r`<strong>Esiste ed è unica?</strong> $\det A=1\cdot3-2\cdot1=1\ne0$, quindi $A$ è invertibile e la soluzione esiste ed è unica.<br><br>
<strong>Attenzione al lato.</strong> $A$ moltiplica $X$ <em>da sinistra</em>, quindi si moltiplica a sinistra per $A^{-1}$:
$$AX=B\ \Longrightarrow\ A^{-1}(AX)=A^{-1}B\ \Longrightarrow\ (A^{-1}A)X=A^{-1}B\ \Longrightarrow\ X=A^{-1}B.$$
<em>Non</em> $X=BA^{-1}$: il prodotto non è commutativo.<br><br>
<strong>Metodo 1 — calcolo l'inversa.</strong>
$$A^{-1}=\frac{1}{\det A}\begin{bmatrix}3&-2\\-1&1\end{bmatrix}=\begin{bmatrix}3&-2\\-1&1\end{bmatrix}$$
$$X=A^{-1}B=\begin{bmatrix}3&-2\\-1&1\end{bmatrix}\begin{bmatrix}3&1\\5&0\end{bmatrix}=\begin{bmatrix}9-10&3-0\\-3+5&-1+0\end{bmatrix}=\begin{bmatrix}-1&3\\2&-1\end{bmatrix}$$
<strong>Metodo 2 — MEG-J sulla matrice affiancata</strong> (più rapido, e diagnostica insieme):
$$[A\,|\,B]=\left[\begin{array}{cc|cc}1&2&3&1\\1&3&5&0\end{array}\right]
\xrightarrow{R_2-R_1}\left[\begin{array}{cc|cc}1&2&3&1\\0&1&2&-1\end{array}\right]
\xrightarrow{R_1-2R_2}\left[\begin{array}{cc|cc}1&0&-1&3\\0&1&2&-1\end{array}\right]$$
$$\boxed{X=\begin{bmatrix}-1&3\\2&-1\end{bmatrix}}$$
<strong>Verifica:</strong> $AX=\begin{bmatrix}1&2\\1&3\end{bmatrix}\begin{bmatrix}-1&3\\2&-1\end{bmatrix}=\begin{bmatrix}-1+4&3-2\\-1+6&3-3\end{bmatrix}=\begin{bmatrix}3&1\\5&0\end{bmatrix}=B$ ✓<br><br>
<em>Nota:</em> per $XA=B$ si moltiplica <strong>a destra</strong>: $X=BA^{-1}$. Sbagliare il lato è l'errore più frequente in questi esercizi. $\blacksquare$` },

{ id: 'G2.10', sez: 2, tema: 'Gauss-Jordan', d: 2,
  t: r`Stabilire se $A=\begin{bmatrix}1&1&0\\0&1&1\\1&0&2\end{bmatrix}$ è invertibile e, in caso affermativo, calcolare $A^{-1}$ con il MEG-J.`,
  hints: [ r`Riduci $[A\,|\,I_3]$. Dopo la Parte 1 sai già se $A$ è invertibile: conta i pivot nella parte sinistra.`,
           r`Parte 2: l'unico pivot da normalizzare è quello della terza riga.`,
           r`Parte 3: parti dal pivot della riga 3 e risali.` ],
  sol: r`<strong>Parte 1 · MEG.</strong>
$$\left[\begin{array}{ccc|ccc}1&1&0&1&0&0\\0&1&1&0&1&0\\1&0&2&0&0&1\end{array}\right]
\xrightarrow{R_3\to R_3-R_1}
\left[\begin{array}{ccc|ccc}1&1&0&1&0&0\\0&1&1&0&1&0\\0&-1&2&-1&0&1\end{array}\right]
\xrightarrow{R_3\to R_3+R_2}
\left[\begin{array}{ccc|ccc}1&1&0&1&0&0\\0&1&1&0&1&0\\0&0&3&-1&1&1\end{array}\right]$$
Tre pivot a sinistra: $\rg A=3$, quindi <strong>$A$ è invertibile</strong>.<br><br>
<strong>Parte 2 · normalizzazione.</strong>
$$\xrightarrow{R_3\to\frac13R_3}\left[\begin{array}{ccc|ccc}1&1&0&1&0&0\\0&1&1&0&1&0\\0&0&1&-\frac13&\frac13&\frac13\end{array}\right]$$
<strong>Parte 3 · seconda eliminazione.</strong>
$$\xrightarrow{R_2\to R_2-R_3}\left[\begin{array}{ccc|ccc}1&1&0&1&0&0\\0&1&0&\frac13&\frac23&-\frac13\\0&0&1&-\frac13&\frac13&\frac13\end{array}\right]
\xrightarrow{R_1\to R_1-R_2}\left[\begin{array}{ccc|ccc}1&0&0&\frac23&-\frac23&\frac13\\0&1&0&\frac13&\frac23&-\frac13\\0&0&1&-\frac13&\frac13&\frac13\end{array}\right]$$
$$\boxed{A^{-1}=\frac13\begin{bmatrix}2&-2&1\\1&2&-1\\-1&1&1\end{bmatrix}}$$
<strong>Controllo:</strong> $A\cdot\begin{bmatrix}2&-2&1\\1&2&-1\\-1&1&1\end{bmatrix}=\begin{bmatrix}3&0&0\\0&3&0\\0&0&3\end{bmatrix}$, e diviso per $3$ dà $I_3$ ✓ $\blacksquare$` },

{ id: 'G2.11', sez: 2, tema: 'Equazioni di matrici', d: 2,
  t: r`Sia $A=\begin{bmatrix}1&2\\2&4\end{bmatrix}$. Risolvere $AX=B$ nei due casi
<ol><li>$B=\begin{bmatrix}3&1\\6&3\end{bmatrix}$</li><li>$B=\begin{bmatrix}3&1\\6&2\end{bmatrix}$</li></ol>`,
  hints: [ r`$\det A=4-4=0$: $A$ è singolare, quindi $X=A^{-1}B$ non si può usare.`,
           r`Riduci $[A\,|\,B]$: ogni colonna di $B$ è un sistema con la stessa $A$.`,
           r`Se anche una sola colonna è incompatibile, l'equazione di matrici non ha soluzioni.` ],
  sol: r`$A$ è $2\times2$ e $B$ è $2\times2$, quindi $X\in\M_{\K}(2,2)$. $\det A=0$: $A$ è <strong>singolare</strong>, si usa il MEG su $[A\,|\,B]$.<br><br>
<strong>1.</strong> $$\left[\begin{array}{cc|cc}1&2&3&1\\2&4&6&3\end{array}\right]\xrightarrow{R_2\to R_2-2R_1}\left[\begin{array}{cc|cc}1&2&3&1\\0&0&0&1\end{array}\right]$$
La seconda colonna di $B$ dà uno <strong>0-pivot</strong>: la seconda riga dice $0=1$ per il sistema $A\vx'=\begin{bmatrix}1\\3\end{bmatrix}$. La prima colonna sarebbe risolubile, ma non basta: <strong>l'equazione non ha soluzioni</strong>.<br><br>
<strong>2.</strong> $$\left[\begin{array}{cc|cc}1&2&3&1\\2&4&6&2\end{array}\right]\xrightarrow{R_2\to R_2-2R_1}\left[\begin{array}{cc|cc}1&2&3&1\\0&0&0&0\end{array}\right]$$
È già totalmente ridotta. Per ogni colonna $x_2$ è libera: $x_1=3-2t$, $x_2=t$ e $x_1'=1-2t'$, $x_2'=t'$.
$$X=\begin{bmatrix}3-2t&1-2t'\\t&t'\end{bmatrix},\qquad t,t'\in\K .$$
<em>Morale:</em> con $A$ singolare la soluzione non è mai unica. O non c'è, o ce ne sono infinite. $\blacksquare$` },

{ id: 'G2.12', sez: 2, tema: 'Equazioni di matrici', d: 3,
  t: r`Sia $A=\begin{bmatrix}1&0\\0&1\\1&1\end{bmatrix}$. Trovare tutte le matrici $C$ tali che $CA=I$, e stabilire se esiste $B$ tale che $AB=I$.`,
  hints: [ r`Tipi: perché $CA$ sia definita e quadrata, $C$ deve essere $2\times3$ e $CA=I_2$.`,
           r`L'incognita sta a sinistra: trasponi. $(CA)^T=A^TC^T$, quindi $A^TX=I_2$ con $X=C^T$.`,
           r`Per $AB=I_3$: il sistema omogeneo $B\vx=\vzero$ ha $2$ equazioni e $3$ incognite.` ],
  sol: r`<strong>$CA=I_2$.</strong> $C\in\M_{\K}(2,3)$. Trasponendo: $A^TX=I_2$ con $X=C^T\in\M_{\K}(3,2)$, e
$$[A^T\,|\,I_2]=\left[\begin{array}{ccc|cc}1&0&1&1&0\\0&1&1&0&1\end{array}\right]$$
è <strong>già totalmente ridotta</strong>. $x_3$ è libera in entrambe le colonne:
$$x_1=1-t,\ x_2=-t,\ x_3=t;\qquad x_1'=-t',\ x_2'=1-t',\ x_3'=t'.$$
$$X=\begin{bmatrix}1-t&-t'\\-t&1-t'\\t&t'\end{bmatrix}\quad\Longrightarrow\quad C=X^T=\begin{bmatrix}1-t&-t&t\\-t'&1-t'&t'\end{bmatrix},\qquad t,t'\in\K .$$
<strong>Controllo:</strong> prima riga di $C$ per le colonne di $A$: $(1-t)+t=1$ e $-t+t=0$; seconda riga: $-t'+t'=0$ e $(1-t')+t'=1$ ✓<br><br>
<strong>$AB=I_3$: impossibile.</strong> $B$ sarebbe $2\times3$. Il sistema $B\vx=\vzero$ ha $2$ equazioni in $3$ incognite, quindi ha una soluzione $\vx\ne\vzero$. Allora
$$\vx=I_3\vx=(AB)\vx=A(B\vx)=A\vzero=\vzero,$$
assurdo.<br><br>
<em>Morale:</em> per una matrice non quadrata possono esserci infinite «inverse da un lato» e nessuna dall'altro. È il motivo per cui l'inversa si definisce solo per le quadrate (Esempio 3 degli appunti). $\blacksquare$` },

/* ====== SEZIONE 3: vettori e spazi vettoriali ====== */
{ id: 'G3.1', sez: 3, tema: 'Spazi vettoriali', d: 2,
  t: r`Stabilire quali dei seguenti sottoinsiemi di $\R^{2}$ sono spazi vettoriali con le operazioni usuali:
<ol><li>$U=\{(x,y)\ :\ y=2x\}$</li>
<li>$W=\{(x,y)\ :\ y=2x+1\}$</li>
<li>$Z=\{(x,y)\ :\ xy=0\}$</li></ol>`,
  hints: [ r`Il primo controllo, sempre: contiene il vettore nullo $(0,0)$?`,
           r`Poi la <strong>chiusura</strong>: sommando due elementi si resta dentro? Moltiplicando per uno scalare?`,
           r`Per $Z$, prova a sommare $(1,0)$ e $(0,1)$.` ],
  sol: r`<strong>1. $U=\{(x,y):y=2x\}$ — SÌ.</strong><br>
Zero: $(0,0)$ ha $0=2\cdot0$ ✓<br>
Somma: se $(x_1,2x_1)$ e $(x_2,2x_2)$ stanno in $U$, la somma è $(x_1+x_2,\ 2x_1+2x_2)=(x_1+x_2,\ 2(x_1+x_2))\in U$ ✓<br>
Scalare: $\lambda(x,2x)=(\lambda x,2\lambda x)\in U$ ✓<br>
Gli otto assiomi si ereditano da $\R^{2}$. È una <strong>retta per l'origine</strong>.<br><br>
<strong>2. $W=\{(x,y):y=2x+1\}$ — NO.</strong><br>
Basta il primo controllo: $(0,0)$ richiederebbe $0=1$, falso. <strong>Non contiene il vettore nullo</strong>, quindi l'assioma (iii) non può valere.<br>
Fallisce anche la chiusura: $(0,1)$ e $(1,3)$ stanno in $W$, ma la loro somma $(1,4)$ no, perché $4\ne2\cdot1+1=3$.<br>
È una retta che <em>non</em> passa per l'origine.<br><br>
<strong>3. $Z=\{(x,y):xy=0\}$ — NO.</strong><br>
Contiene lo zero ✓ ed è chiuso per scalari ✓ (se $xy=0$ allora $(\lambda x)(\lambda y)=\lambda^{2}xy=0$). Ma <strong>non è chiuso per somma</strong>:
$$(1,0)\in Z,\quad (0,1)\in Z,\quad\text{ma}\quad (1,0)+(0,1)=(1,1)\notin Z$$ perché $1\cdot1=1\ne0$.<br>
Geometricamente $Z$ è l'unione dei due assi: due rette per l'origine, ma la loro unione non è uno spazio vettoriale.<br><br>
<div class="box tip" style="margin-bottom:0"><strong>Il metodo, in ordine:</strong> 1) c'è lo zero? 2) chiuso per somma? 3) chiuso per scalare? Se una fallisce, hai finito. Gli otto assiomi non serve verificarli: si ereditano automaticamente dallo spazio più grande.</div> $\blacksquare$` },

{ id: 'G3.2', sez: 3, tema: 'Spazi vettoriali', d: 2,
  t: r`Dimostrare, usando solo gli assiomi, che in ogni spazio vettoriale vale $$0\cdot\vv=\vzero\qquad\text{per ogni }\vv\in V.$$ Indicare quale assioma si usa a ogni passaggio.`,
  hints: [ r`$0$ è lo scalare zero, $\vzero$ è il vettore nullo: sono oggetti diversi, ed è proprio questo il punto.`,
           r`Scrivi $0$ come $0+0$ e usa la distributiva rispetto alla somma di <em>scalari</em>.`,
           r`Alla fine somma a entrambi i membri l'opposto di $0\vv$, che esiste per l'assioma (iv).` ],
  sol: r`<strong>Dimostrazione.</strong>
$$0\vv=(0+0)\vv \overset{\text{(vi)}}{=} 0\vv+0\vv$$
dove si è usata la proprietà distributiva rispetto alla somma di scalari.<br><br>
Per l'assioma <strong>(iv)</strong> esiste l'opposto $-(0\vv)$. Sommandolo a entrambi i membri:
$$0\vv+\bigl(-(0\vv)\bigr)=\bigl(0\vv+0\vv\bigr)+\bigl(-(0\vv)\bigr)$$
A sinistra si ottiene $\vzero$ per (iv). A destra si applica l'associatività <strong>(ii)</strong>:
$$\vzero=0\vv+\Bigl(0\vv+\bigl(-(0\vv)\bigr)\Bigr)\overset{\text{(iv)}}{=}0\vv+\vzero\overset{\text{(iii)}}{=}0\vv$$
$$\boxed{0\cdot\vv=\vzero}$$
<strong>Assiomi usati:</strong> (vi) distributiva sugli scalari, (iv) esistenza dell'opposto, (ii) associatività, (iii) elemento neutro.<br><br>
<div class="box trap" style="margin-bottom:0"><strong>Perché non è ovvio.</strong> Sembra «zero per qualcosa fa zero», ma a sinistra $0$ è uno <em>scalare</em> del campo e a destra $\vzero$ è un <em>vettore</em>: sono oggetti di natura diversa, e nessun assioma li collega direttamente. Il legame va costruito, ed è esattamente quello che fa questa dimostrazione.</div> $\blacksquare$` },

{ id: 'G3.3', sez: 3, tema: 'Applicazioni', d: 1,
  t: r`Sia $f:\R\to\R$ definita da $f(x)=x^{2}$. Calcolare:
<br>(a) $f^{-1}([1,4])$; &nbsp;(b) $f^{-1}((-4,1))$; &nbsp;(c) $f^{-1}(\{0\})$; &nbsp;(d) $f^{-1}((-\infty,0))$.
<br>Dire poi se $f$ è iniettiva e se è suriettiva.`,
  hints: [ r`$f^{-1}(B)=\{x\in\R: f(x)\in B\}$: cerca tutti gli $x$ il cui quadrato cade in $B$.`,
           r`Ricorda che $x^{2}\ge0$ sempre: i valori negativi non hanno controimmagini.`,
           r`Per (b) attenzione: la parte negativa di $(-4,1)$ non contribuisce.` ],
  sol: r`<strong>(a)</strong> $1\le x^{2}\le4\iff 1\le|x|\le2$, quindi
$$f^{-1}([1,4])=[-2,-1]\cup[1,2]$$
<strong>(b)</strong> $-4<x^{2}<1$. La condizione $x^{2}>-4$ è sempre vera; resta $x^{2}<1$, cioè $|x|<1$:
$$f^{-1}((-4,1))=(-1,1)$$
<strong>(c)</strong> $x^{2}=0\iff x=0$:
$$f^{-1}(\{0\})=\{0\}$$
<strong>(d)</strong> Nessun reale ha quadrato negativo:
$$f^{-1}((-\infty,0))=\emptyset$$
<strong>Iniettiva?</strong> No: $f(-1)=f(1)=1$, quindi $y=1$ ha <em>due</em> controimmagini, mentre l'iniettività ne richiede al massimo una.<br><br>
<strong>Suriettiva?</strong> No: $f(\R)=[0,+\infty)\ne\R$, e infatti ogni $y<0$ ha zero controimmagini.<br><br>
<em>Osservazione:</em> $f^{-1}$ è perfettamente definita in tutti e quattro i casi, benché $f$ <strong>non</strong> sia invertibile. La controimmagine di un <em>insieme</em> esiste sempre. $\blacksquare$` },

{ id: 'G3.4', sez: 3, tema: 'Vettori geometrici', d: 2,
  t: r`Siano $\vec u=(3,-1)$ e $\vec v=(-1,2)$ vettori del piano. Calcolare $2\vec u-3\vec v$, e stabilire se $\vec w=(7,-5)$ è parallelo a $\vec u$.`,
  hints: [ r`Le operazioni geometriche si traducono componente per componente.`,
           r`Due vettori non nulli sono paralleli se uno è multiplo scalare dell'altro: cerca $\lambda$ con $\vec w=\lambda\vec u$.`,
           r`Il $\lambda$ dev'essere lo <strong>stesso</strong> per entrambe le componenti.` ],
  sol: r`<strong>Combinazione lineare.</strong>
$$2\vec u=(6,-2),\qquad 3\vec v=(-3,6)$$
$$2\vec u-3\vec v=(6-(-3),\ -2-6)=(9,-8)$$
<strong>Parallelismo.</strong> Cerchiamo $\lambda\in\R$ con $\vec w=\lambda\vec u$, cioè
$$(7,-5)=\lambda(3,-1)=(3\lambda,\ -\lambda)$$
Dalla prima componente: $\lambda=\tfrac73$. Dalla seconda: $-\lambda=-5$, cioè $\lambda=5$.<br><br>
I due valori <strong>non coincidono</strong> ($\tfrac73\ne5$), quindi non esiste un tale $\lambda$:
$$\boxed{\vec w\ \text{non è parallelo a}\ \vec u}$$
<em>Controllo rapido:</em> per vettori del piano, $\vec u$ e $\vec w$ sono paralleli se e solo se $$\det\begin{bmatrix}3&7\\-1&-5\end{bmatrix}=3(-5)-7(-1)=-15+7=-8\ne0,$$ e infatti non lo sono. Se il determinante fosse nullo sarebbero paralleli. $\blacksquare$` },

/* ============ SEZIONE 4: numeri complessi ============ */
{ id: 'G4.1', sez: 4, tema: 'Numeri complessi', d: 2,
  t: r`Risolvere in $\C$ il sistema $$\begin{cases}(1+i)z+w=2\\ z+(1-i)w=0\end{cases}$$`,
  hints: [ r`Il MEG funziona identico su $\C$: le operazioni elementari usano solo somma, prodotto e divisione, tutte disponibili in $\C$.`,
           r`Conviene scambiare le righe per avere il pivot $1$ in alto: risparmia divisioni fra complessi.`,
           r`Ricorda $(1+i)(1-i)=1-i^{2}=2$.` ],
  sol: r`<strong>Scambio delle righe</strong> (pivot più comodo):
$$\left[\begin{array}{cc|c}1+i&1&2\\1&1-i&0\end{array}\right]\xrightarrow{R_1\leftrightarrow R_2}\left[\begin{array}{cc|c}1&1-i&0\\1+i&1&2\end{array}\right]$$
<strong>Eliminazione.</strong> $R_2\to R_2-(1+i)R_1$. Serve
$$(1+i)(1-i)=1-i^{2}=1+1=2,$$
quindi il nuovo elemento in posizione $(2,2)$ è $1-2=-1$:
$$\left[\begin{array}{cc|c}1&1-i&0\\0&-1&2\end{array}\right]$$
<strong>Compatibilità.</strong> Due pivot, nessuno 0-pivot, $n=2$: $r=2=n$, soluzione unica.<br><br>
<strong>Sostituzione all'indietro.</strong>
$$-w=2\ \Longrightarrow\ w=-2$$
$$z+(1-i)w=0\ \Longrightarrow\ z=-(1-i)(-2)=2(1-i)=2-2i$$
$$\boxed{z=2-2i,\qquad w=-2}$$
<strong>Verifica</strong> nella prima equazione originale:
$$(1+i)(2-2i)+(-2)=2(1+i)(1-i)-2=2\cdot2-2=2\ ✓$$
<em>Osservazione:</em> non c'è nulla di speciale nel caso complesso. Rouché-Capelli, rango e struttura delle soluzioni valgono su $\K$ qualunque, e $\C$ è solo una delle due scelte possibili. $\blacksquare$` },

{ id: 'G4.2', sez: 4, tema: 'Numeri complessi', d: 1,
  t: r`Calcolare $\det A$ e stabilire se $A$ è invertibile, dove $$A=\begin{bmatrix}i&1\\-1&i\end{bmatrix}$$`,
  hints: [ r`La formula $\det=ad-bc$ vale su qualunque campo, quindi anche su $\C$.`,
           r`Attenzione al segno: $bc=1\cdot(-1)$.` ],
  sol: r`$$\det A=i\cdot i-1\cdot(-1)=i^{2}+1=-1+1=0$$
$$\boxed{\det A=0\ \Longrightarrow\ A\ \text{non è invertibile}}$$
<strong>Conferma con il rango.</strong> La seconda riga è $(-1,i)=i\cdot(i,1)$... verifichiamo: $i\cdot(i,1)=(i^2,i)=(-1,i)$ ✓. Dunque $R_2=iR_1$: le righe sono proporzionali e $\rg A=1<2$.<br><br>
<strong>Conseguenza.</strong> Il sistema omogeneo $A\vx=\vzero$ ha soluzioni non banali: da $iz+w=0$ si ricava $w=-iz$, quindi
$$\vx=t\begin{bmatrix}1\\-i\end{bmatrix},\qquad t\in\C$$
$n-r=2-1=1$ parametro, come previsto. $\blacksquare$<br><br>
<em>Trappola:</em> su $\C$ una matrice a entrate tutte non nulle può benissimo avere determinante nullo. Non fidarti dell'aspetto «pieno» della matrice.` }

  ];

  const AM = (window.AM = window.AM || {});
  AM.ESERCIZI_GEO = E;
})();
