/* ============================================================
   esercizi.js — palestra della PRIMA PARTE
   d: difficoltà 1 (base) · 2 (standard d'esame) · 3 (impegnativo)
   hints: suggerimenti progressivi; sol: svolgimento completo
   ============================================================ */
(function () {
  'use strict';
  const r = String.raw;

  const E = [

/* ======================= SEZIONE 1 ======================= */
{ id: 'E1.1', sez: 1, tema: 'Induzione', d: 1,
  t: r`Dimostrare per induzione che $\displaystyle\sum_{k=1}^{n}k^{2}=\frac{n(n+1)(2n+1)}{6}$ per ogni $n\ge1$.`,
  hints: [ r`Verifica la base in $n=1$: primo membro $1$, secondo membro $\frac{1\cdot2\cdot3}{6}=1$.`,
           r`Nel passo induttivo aggiungi $(n+1)^2$ all'ipotesi induttiva e <strong>raccogli $(n+1)$</strong>.`,
           r`Dopo il raccoglimento resta $\frac{n(2n+1)+6(n+1)}{6}=\frac{2n^2+7n+6}{6}$: fattorizza il trinomio.` ],
  sol: r`<strong>Base.</strong> $n=1$: $\sum_{k=1}^{1}k^2=1$ e $\frac{1\cdot 2\cdot 3}{6}=1$. Vera.<br><br>
<strong>Passo induttivo.</strong> Supponiamo $\sum_{k=1}^{n}k^2=\frac{n(n+1)(2n+1)}{6}$. Allora
$$\sum_{k=1}^{n+1}k^{2}=\frac{n(n+1)(2n+1)}{6}+(n+1)^{2}=(n+1)\cdot\frac{n(2n+1)+6(n+1)}{6}=(n+1)\cdot\frac{2n^{2}+7n+6}{6}.$$
Poiché $2n^{2}+7n+6=(n+2)(2n+3)$, si ottiene
$$\sum_{k=1}^{n+1}k^{2}=\frac{(n+1)(n+2)(2n+3)}{6}=\frac{(n+1)\bigl[(n+1)+1\bigr]\bigl[2(n+1)+1\bigr]}{6},$$
che è esattamente $P(n+1)$. Per il principio di induzione la formula vale per ogni $n\ge1$. $\blacksquare$` },

{ id: 'E1.2', sez: 1, tema: 'Induzione', d: 2,
  t: r`Dimostrare che $2^{n}>n^{2}$ per ogni $n\ge5$.`,
  hints: [ r`La base non è $n=0$: qui parte da $n_0=5$. Verifica $2^5=32>25$.`,
           r`Nel passo: $2^{n+1}=2\cdot2^{n}>2n^{2}$. Ti basta mostrare che $2n^{2}\ge(n+1)^{2}$.`,
           r`$2n^{2}-(n+1)^{2}=n^{2}-2n-1=(n-1)^{2}-2>0$ non appena $n\ge3$.` ],
  sol: r`<strong>Base ($n_0=5$).</strong> $2^{5}=32>25=5^{2}$. Vera.<br><br>
<strong>Passo induttivo.</strong> Sia $n\ge5$ e supponiamo $2^{n}>n^{2}$. Allora
$$2^{\,n+1}=2\cdot 2^{n}>2n^{2}.$$
Basta dunque provare che $2n^{2}\ge(n+1)^{2}$ per $n\ge5$. Infatti
$$2n^{2}-(n+1)^{2}=n^{2}-2n-1=(n-1)^{2}-2\ \ge\ (5-1)^{2}-2=14>0.$$
Quindi $2^{\,n+1}>2n^{2}\ge(n+1)^{2}$, cioè $P(n+1)$. Per induzione la disuguaglianza vale per ogni $n\ge5$. $\blacksquare$<br><br>
<em>Nota.</em> Per $n=2,3,4$ la disuguaglianza è falsa o non stretta ($4=4$, $8<9$, $16=16$): la scelta $n_0=5$ è necessaria.` },

{ id: 'E1.3', sez: 1, tema: 'Estremo superiore', d: 1,
  t: r`Determinare $\sup$, $\inf$ e, se esistono, $\max$ e $\min$ dell'insieme $$E=\left\{\frac{n}{n+1}\;:\;n\in\N\right\}.$$`,
  hints: [ r`Calcola i primi elementi: $0,\ \frac12,\ \frac23,\ \frac34,\dots$ Cosa fa la successione?`,
           r`Scrivi $\frac{n}{n+1}=1-\frac{1}{n+1}$: è strettamente crescente e $<1$.`,
           r`Per il sup usa la caratterizzazione: dato $\eps>0$, trova $n$ con $1-\frac1{n+1}>1-\eps$.` ],
  sol: r`Scriviamo $a_n=\dfrac{n}{n+1}=1-\dfrac{1}{n+1}$.<br><br>
<strong>Minimo.</strong> $(a_n)$ è strettamente crescente (perché $\frac1{n+1}$ decresce), quindi il valore più piccolo è $a_0=0$, che appartiene a $E$: $$\min E=\inf E=0.$$
<strong>Estremo superiore.</strong> Per ogni $n$ si ha $a_n=1-\frac1{n+1}<1$, dunque $1$ è un maggiorante. Inoltre, fissato $\eps>0$, scegliendo $n>\frac1\eps-1$ si ottiene $$a_n=1-\frac{1}{n+1}>1-\eps.$$ Nessun numero minore di $1$ è quindi maggiorante: per la caratterizzazione, $$\sup E=1.$$
<strong>Massimo.</strong> Non esiste: $1\notin E$, perché $\frac{n}{n+1}=1$ richiederebbe $n=n+1$. $\blacksquare$` },

{ id: 'E1.4', sez: 1, tema: 'Estremo superiore', d: 2,
  t: r`Determinare $\sup,\inf,\max,\min$ dell'insieme $$E=\left\{(-1)^{n}+\frac1n\;:\;n\ge1\right\}.$$`,
  hints: [ r`Separa i casi $n$ pari e $n$ dispari: ottieni due sottoinsiemi.`,
           r`Per $n=2k$: $1+\frac{1}{2k}$, decrescente verso $1$. Per $n=2k+1$: $-1+\frac1{2k+1}$, crescente verso $-1$.`,
           r`Il massimo del primo blocco si ha per $n=2$; il minimo del secondo per $n=1$.` ],
  sol: r`Distinguiamo la parità di $n$.<br><br>
<strong>$n$ pari</strong>, $n=2k$ con $k\ge1$: gli elementi sono $1+\frac{1}{2k}$, cioè $\frac32,\ \frac54,\ \frac76,\dots$ — successione <em>decrescente</em> con estremo superiore assunto in $k=1$: il valore massimo di questo blocco è $\frac32$ (per $n=2$), e l'estremo inferiore del blocco è $1$, non assunto.<br><br>
<strong>$n$ dispari</strong>, $n=2k+1$ con $k\ge0$: gli elementi sono $-1+\frac{1}{2k+1}$, cioè $0,\ -\frac23,\ -\frac45,\dots$ — successione <em>decrescente</em>, con valore massimo $0$ (per $n=1$) ed estremo inferiore $-1$, non assunto.<br><br>
<strong>Conclusione.</strong> $$\max E=\sup E=\frac32\quad(\text{assunto per }n=2),\qquad \inf E=-1,\qquad \min E\ \text{non esiste}.$$
Infatti $-1$ è un minorante (tutti gli elementi dispari sono $>-1$, tutti i pari sono $>1$) e per ogni $\eps>0$ esiste $n$ dispari con $-1+\frac1n<-1+\eps$; ma $-1\notin E$. $\blacksquare$` },

{ id: 'E1.5', sez: 1, tema: 'Valore assoluto', d: 2,
  t: r`Risolvere la disequazione $$|x-1|+|x+2|\le 5.$$`,
  hints: [ r`I punti che annullano i valori assoluti sono $x=1$ e $x=-2$: dividi $\R$ in tre intervalli.`,
           r`Su $(-\infty,-2)$ entrambe le espressioni sono negative: $|x-1|=1-x$, $|x+2|=-x-2$.`,
           r`Interpretazione geometrica: cerchi i punti la cui somma delle distanze da $1$ e da $-2$ è $\le5$.` ],
  sol: r`I punti critici sono $x=-2$ e $x=1$.<br><br>
<strong>Caso $x<-2$.</strong> $|x-1|=1-x$, $|x+2|=-x-2$. La disequazione diventa $$1-x-x-2\le5\iff -2x\le6\iff x\ge-3.$$ Intersecando con $x<-2$: $\;-3\le x<-2$.<br><br>
<strong>Caso $-2\le x<1$.</strong> $|x-1|=1-x$, $|x+2|=x+2$: $$1-x+x+2=3\le5,$$ sempre vera. Tutto l'intervallo $[-2,1)$ è soluzione.<br><br>
<strong>Caso $x\ge1$.</strong> $|x-1|=x-1$, $|x+2|=x+2$: $$x-1+x+2\le5\iff 2x\le4\iff x\le2.$$ Intersecando: $1\le x\le2$.<br><br>
<strong>Unione:</strong> $$\boxed{\,S=[-3,2]\,}$$
<em>Lettura geometrica:</em> $|x-1|+|x+2|$ è la somma delle distanze di $x$ da $1$ e da $-2$. Fra i due punti tale somma vale costantemente $3$; fuori cresce di $2$ per ogni unità, e raggiunge $5$ a distanza $1$ dagli estremi, cioè in $-3$ e $2$. $\blacksquare$` },

{ id: 'E1.6', sez: 1, tema: 'Valore assoluto', d: 2,
  t: r`Risolvere la disequazione $$|2x-3|<|x+1|.$$`,
  hints: [ r`Entrambi i membri sono $\ge0$: puoi elevare al quadrato conservando l'equivalenza.`,
           r`$|a|<|b|\iff a^2\lt b^2\iff a^2-b^2<0$: fattorizza come differenza di quadrati.`,
           r`$(2x-3)^2-(x+1)^2=\bigl[(2x-3)-(x+1)\bigr]\bigl[(2x-3)+(x+1)\bigr]$.` ],
  sol: r`Poiché entrambi i membri sono non negativi, la disequazione equivale a $(2x-3)^{2}<(x+1)^{2}$, cioè $(2x-3)^{2}-(x+1)^{2}<0$. Fattorizzando la differenza di quadrati:
$$\bigl[(2x-3)-(x+1)\bigr]\cdot\bigl[(2x-3)+(x+1)\bigr]<0\iff (x-4)(3x-2)<0.$$
Le radici sono $x=\frac23$ e $x=4$; la parabola ha concavità verso l'alto, quindi il prodotto è negativo fra le radici:
$$\boxed{\,S=\left(\tfrac23,\,4\right).}$$
<em>Verifica rapida:</em> $x=0$ dà $3<1$ falso (fuori); $x=1$ dà $1<2$ vero (dentro); $x=5$ dà $7<6$ falso (fuori). $\blacksquare$` },

{ id: 'E1.7', sez: 1, tema: 'Numeri complessi', d: 1,
  t: r`Scrivere $z=-1+i\sqrt3$ in forma trigonometrica ed esponenziale, e calcolare $z^{6}$.`,
  hints: [ r`Calcola prima il modulo $\rho=\sqrt{a^2+b^2}$.`,
           r`Per l'argomento fai attenzione al <strong>quadrante</strong>: qui $a<0$ e $b>0$, quindi $z$ è nel secondo quadrante.`,
           r`Per la potenza usa de Moivre: modulo elevato alla sesta, argomento moltiplicato per $6$.` ],
  sol: r`<strong>Modulo.</strong> $\rho=|z|=\sqrt{(-1)^{2}+(\sqrt3)^{2}}=\sqrt{1+3}=2$.<br><br>
<strong>Argomento.</strong> Deve valere $\cos\theta=-\frac12$ e $\sin\theta=\frac{\sqrt3}{2}$: il punto sta nel <em>secondo quadrante</em>, quindi $$\theta=\frac{2\pi}{3}.$$
(Attenzione: $\arctan\frac{\sqrt3}{-1}=-\frac\pi3$ darebbe l'angolo sbagliato — va corretto di $\pi$.)<br><br>
<strong>Forme.</strong> $$z=2\left(\cos\frac{2\pi}{3}+i\sin\frac{2\pi}{3}\right)=2e^{\,i\frac{2\pi}{3}}.$$
<strong>Potenza (de Moivre).</strong>
$$z^{6}=2^{6}\left(\cos\frac{12\pi}{3}+i\sin\frac{12\pi}{3}\right)=64\bigl(\cos4\pi+i\sin4\pi\bigr)=64.$$
Dunque $z^{6}=64$, numero reale positivo. $\blacksquare$<br><br>
<em>Controllo:</em> $z$ è $2$ volte una radice sesta dell'unità-per-$64$; infatti $\frac{2\pi}{3}\cdot6=4\pi\equiv0 \pmod{2\pi}$.` },

{ id: 'E1.8', sez: 1, tema: 'Numeri complessi', d: 2,
  t: r`Risolvere in $\C$ l'equazione $z^{4}=-16$ e rappresentare le soluzioni nel piano di Argand-Gauss.`,
  hints: [ r`Scrivi il secondo membro in forma trigonometrica: $-16=16(\cos\pi+i\sin\pi)$.`,
           r`Applica la formula delle radici $n$-esime con $\rho=16$, $\theta=\pi$, $n=4$.`,
           r`$\sqrt[4]{16}=2$ e gli argomenti sono $\frac{\pi+2k\pi}{4}$ per $k=0,1,2,3$.` ],
  sol: r`Scriviamo $w=-16$ in forma trigonometrica: $\rho=16$, $\theta=\pi$, cioè $w=16(\cos\pi+i\sin\pi)$.<br><br>
Le radici quarte sono
$$z_k=\sqrt[4]{16}\left[\cos\frac{\pi+2k\pi}{4}+i\sin\frac{\pi+2k\pi}{4}\right]=2\left[\cos\frac{(2k+1)\pi}{4}+i\sin\frac{(2k+1)\pi}{4}\right],\quad k=0,1,2,3.$$
Esplicitamente:
$$z_0=2\left(\cos\frac\pi4+i\sin\frac\pi4\right)=\sqrt2+i\sqrt2,\qquad z_1=2\left(\cos\frac{3\pi}4+i\sin\frac{3\pi}4\right)=-\sqrt2+i\sqrt2,$$
$$z_2=-\sqrt2-i\sqrt2,\qquad z_3=\sqrt2-i\sqrt2.$$
<strong>Geometria.</strong> Tutte hanno modulo $2$: stanno sulla circonferenza di raggio $2$, agli angoli $\frac\pi4,\frac{3\pi}4,\frac{5\pi}4,\frac{7\pi}4$ — i vertici di un <em>quadrato</em> inscritto, ruotato di $45°$. Le soluzioni sono a due a due coniugate, com'era da attendersi perché i coefficienti dell'equazione $z^4+16=0$ sono reali. $\blacksquare$` },

{ id: 'E1.9', sez: 1, tema: 'Numeri complessi', d: 2,
  t: r`Calcolare $\displaystyle\frac{(1+i)^{10}}{(1-i)^{8}}$.`,
  hints: [ r`Porta $1+i$ e $1-i$ in forma esponenziale: entrambi hanno modulo $\sqrt2$.`,
           r`$1+i=\sqrt2\,e^{i\pi/4}$ e $1-i=\sqrt2\,e^{-i\pi/4}$.`,
           r`Poi è solo algebra di esponenziali: i moduli si dividono, gli argomenti si sottraggono.` ],
  sol: r`In forma esponenziale: $1+i=\sqrt2\,e^{i\pi/4}$ e $1-i=\sqrt2\,e^{-i\pi/4}$ (moduli $\sqrt2$, argomenti $\pm\frac\pi4$).<br><br>
$$(1+i)^{10}=(\sqrt2)^{10}e^{\,i\,10\pi/4}=32\,e^{\,i\,5\pi/2},\qquad (1-i)^{8}=(\sqrt2)^{8}e^{-i\,8\pi/4}=16\,e^{-i\,2\pi}=16.$$
Quindi
$$\frac{(1+i)^{10}}{(1-i)^{8}}=\frac{32}{16}\,e^{\,i\,5\pi/2}=2\,e^{\,i\pi/2}=2i,$$
avendo usato $e^{i5\pi/2}=e^{i(\pi/2+2\pi)}=e^{i\pi/2}=i$.<br><br>
$$\boxed{\,\frac{(1+i)^{10}}{(1-i)^{8}}=2i\,}$$
<em>Scorciatoia utile:</em> $(1+i)^{2}=2i$ e $(1-i)^{2}=-2i$, da cui $(1+i)^{10}=(2i)^{5}=32i^{5}=32i$ e $(1-i)^{8}=(-2i)^{4}=16i^{4}=16$. $\blacksquare$` },

{ id: 'E1.10', sez: 1, tema: 'Numeri complessi', d: 3,
  t: r`Determinare il luogo dei punti $z\in\C$ tali che $|z-1|=|z+i|$, e descriverlo geometricamente.`,
  hints: [ r`$|z-w|$ è la <strong>distanza</strong> fra i punti $z$ e $w$ del piano. Che luogo è «equidistante da due punti»?`,
           r`In alternativa poni $z=x+iy$ e svolgi i moduli al quadrato.`,
           r`$|z-1|^2=(x-1)^2+y^2$ e $|z+i|^2=x^2+(y+1)^2$.` ],
  sol: r`<strong>Via algebrica.</strong> Posto $z=x+iy$ con $x,y\in\R$:
$$|z-1|^{2}=(x-1)^{2}+y^{2},\qquad |z+i|^{2}=x^{2}+(y+1)^{2}.$$
Uguagliando (lecito: i moduli sono $\ge0$):
$$x^{2}-2x+1+y^{2}=x^{2}+y^{2}+2y+1\iff -2x=2y\iff y=-x.$$
<strong>Via geometrica.</strong> $|z-1|$ è la distanza di $z$ dal punto $A=(1,0)$ e $|z+i|=|z-(-i)|$ è la distanza dal punto $B=(0,-1)$. Il luogo dei punti equidistanti da $A$ e $B$ è l'<strong>asse del segmento</strong> $AB$: passa per il punto medio $\left(\frac12,-\frac12\right)$ ed è perpendicolare ad $AB$, che ha direzione $(-1,-1)$. Si ottiene di nuovo la retta $y=-x$.<br><br>
$$\boxed{\,\{z\in\C\,:\,|z-1|=|z+i|\}=\{x+iy\,:\,y=-x\}\,}$$ $\blacksquare$` },

{ id: 'E1.11', sez: 1, tema: 'Numeri complessi', d: 1,
  t: r`Calcolare le radici quadrate di $w=-1+\sqrt3\,i$. <span class="small muted">(Lezione 4)</span>`,
  hints: [ r`Scrivi $w=Re^{i\varphi}$: modulo e argomento. Attenzione al quadrante.`,
           r`Le radici quadrate hanno modulo $\sqrt R$ e argomenti $\theta_h=\frac{\varphi+2h\pi}{2}=\frac\varphi2+h\pi$, con $h=0,1$.` ],
  sol: r`<strong>Modulo.</strong> $R=\sqrt{(-1)^2+(\sqrt3)^2}=2$.<br>
<strong>Argomento.</strong> $\tan\varphi=\frac{\sqrt3}{-1}=-\sqrt3$ con $x<0$: $\varphi=\arctan(-\sqrt3)+\pi=-\frac\pi3+\pi=\frac23\pi$ (secondo quadrante). Quindi $w=2e^{i\frac23\pi}$.<br><br>
<strong>Radici.</strong> $r=\sqrt2$, $\theta_h=\frac\varphi2+h\pi$:
$$h=0:\ \theta_0=\frac\pi3,\qquad h=1:\ \theta_1=\frac\pi3+\pi=\frac43\pi.$$
$$z_0=\sqrt2\,e^{i\frac\pi3}=\sqrt2\left(\frac12+\frac{\sqrt3}{2}i\right),\qquad z_1=\sqrt2\,e^{i\frac43\pi}=\sqrt2\left(-\frac12-\frac{\sqrt3}{2}i\right).$$
<strong>Controllo:</strong> $z_1=-z_0$, come deve essere per due radici quadrate; e $z_0^2=2e^{i\frac23\pi}=w$ ✓ $\blacksquare$` },

{ id: 'E1.12', sez: 1, tema: 'Numeri complessi', d: 3,
  t: r`Determinare le soluzioni in $\C$ dell'equazione $$\bigl[z^3-(1+\sqrt3\,i)^9\bigr]\,\bigl(z+\bar z+1\bigr)=0$$ e rappresentarle nel piano complesso. Detto $A$ l'insieme delle soluzioni, rappresentare $B=\{w\in\C\ :\ w=iz,\ z\in A\}$. <span class="small muted">(Lezione 4: è il tipo di esercizio d'esame)</span>`,
  hints: [ r`Un prodotto è nullo se e solo se è nullo almeno un fattore: le soluzioni sono l'<strong>unione</strong> di quelle dei due fattori.`,
           r`Per il primo fattore: $1+\sqrt3\,i=2e^{i\frac\pi3}$, quindi $(1+\sqrt3\,i)^9=2^9e^{i3\pi}=2^9e^{i\pi}$. Poi radici cubiche.`,
           r`Per il secondo: con $z=a+ib$, $z+\bar z=2a$.`,
           r`Moltiplicare per $i=e^{i\frac\pi2}$ lascia il modulo invariato e aggiunge $\frac\pi2$ all'argomento: è una rotazione.` ],
  sol: r`<strong>Primo fattore.</strong> $1+\sqrt3\,i$ ha modulo $2$ e argomento $\frac\pi3$, quindi
$$z^3=(2e^{i\frac\pi3})^9=2^9e^{i3\pi}=2^9e^{i\pi}=:w,\qquad R=2^9,\ \varphi=\pi.$$
Radici cubiche: $r=\sqrt[3]{2^9}=8$, $\theta_h=\frac{\pi+2h\pi}{3}$, $h=0,1,2$:
$$z_0=8e^{i\frac\pi3}=4+4\sqrt3\,i,\qquad z_1=8e^{i\pi}=-8,\qquad z_2=8e^{i\frac53\pi}=4-4\sqrt3\,i.$$
Sono i vertici di un triangolo equilatero sulla circonferenza di raggio $8$.<br><br>
<strong>Secondo fattore.</strong> Con $z=a+ib$: $a+ib+a-ib+1=0\iff 2a+1=0\iff a=-\frac12$. Sono tutti i $z=-\frac12+ib$, $b\in\R$: la <strong>retta verticale</strong> $\Real z=-\frac12$.<br><br>
$$A=\left\{z\in\C:\ \Real z=-\tfrac12\right\}\cup\{z_0,z_1,z_2\}.$$
<strong>L'insieme $B$.</strong> $i=\cos\frac\pi2+i\sin\frac\pi2$: moltiplicare per $i$ lascia il modulo invariato e somma $\frac\pi2$ all'argomento, cioè <strong>ruota di $\frac\pi2$</strong> in senso antiorario.
<ul><li>i tre punti: $iz_0=-4\sqrt3+4i$, &nbsp; $iz_1=-8i$, &nbsp; $iz_2=4\sqrt3+4i$ (stessa circonferenza di raggio $8$, triangolo ruotato);</li>
<li>la retta: $i\left(-\frac12+ib\right)=-b-\frac12\,i$, che al variare di $b\in\R$ descrive la <strong>retta orizzontale</strong> $\Imag w=-\frac12$.</li></ul>
$$B=\left\{w\in\C:\ \Imag w=-\tfrac12\right\}\cup\{-4\sqrt3+4i,\ -8i,\ 4\sqrt3+4i\}.\quad\blacksquare$$` },

{ id: 'E1.13', sez: 1, tema: 'Estremo superiore', d: 2,
  t: r`Sia $A=\{x\in\R\ :\ x>\sqrt{6-x}\}$. Determinare $\sup A$, $\inf A$ ed eventualmente $\max A$ e $\min A$. <span class="small muted">(Lezione 4)</span>`,
  hints: [ r`La radice deve essere definita: $6-x\ge0$.`,
           r`Il secondo membro è $\ge0$, quindi serve $x\ge0$: solo allora si può elevare al quadrato conservando il verso.`,
           r`Poi $x^2>6-x\iff x^2+x-6>0\iff(x+3)(x-2)>0$.` ],
  sol: r`$$x>\sqrt{6-x}\iff\begin{cases}6-x\ge0\\ x\ge0\\ x^2>6-x\end{cases}\iff\begin{cases}x\le6\\ x\ge0\\ x<-3\ \vee\ x>2\end{cases}$$
La seconda condizione serve perché $\sqrt{6-x}\ge0$: se $x<0$ la disuguaglianza è falsa, e solo con entrambi i membri non negativi elevare al quadrato è un'equivalenza.<br><br>
Intersecando: $A=(2,6]$.
<ul><li>$\inf A=2$, ma $2\notin A$ (in $x=2$: $2>\sqrt4=2$ è falso): <strong>il minimo non esiste</strong>;</li>
<li>$\sup A=6$ e $6\in A$ ($6>\sqrt0=0$): $\max A=6$.</li></ul> $\blacksquare$` },

{ id: 'E1.14', sez: 1, tema: 'Estremo superiore', d: 2,
  t: r`Sia $A=\{x\in\R\ :\ \sqrt{x+3}>x+1\}$. Determinare $\sup A$, $\inf A$ ed eventualmente $\max A$ e $\min A$.`,
  hints: [ r`Rispetto all'esercizio precedente qui la radice sta a sinistra: il segno di $x+1$ non è fissato.`,
           r`Se $x+1<0$ la disuguaglianza è vera appena la radice è definita. Se $x+1\ge0$ si può elevare al quadrato.`,
           r`L'insieme delle soluzioni è l'<strong>unione</strong> dei due casi.` ],
  sol: r`Condizione di esistenza: $x\ge-3$. Si distinguono due casi.<br><br>
<strong>Caso $x+1<0$</strong>, cioè $-3\le x<-1$: il primo membro è $\ge0$ e il secondo $<0$, quindi la disuguaglianza è <strong>sempre vera</strong>. Contributo: $[-3,-1)$.<br><br>
<strong>Caso $x+1\ge0$</strong>, cioè $x\ge-1$: entrambi i membri sono $\ge0$ e si può elevare al quadrato:
$$x+3>(x+1)^2\iff x^2+x-2<0\iff(x+2)(x-1)<0\iff-2\lt x<1.$$
Con $x\ge-1$: contributo $[-1,1)$.<br><br>
<strong>Unione:</strong> $A=[-3,-1)\cup[-1,1)=[-3,1)$.
<ul><li>$\min A=\inf A=-3$ ($-3\in A$: $\sqrt0=0>-2$ ✓);</li>
<li>$\sup A=1$, ma $1\notin A$ ($\sqrt4=2>2$ è falso): <strong>il massimo non esiste</strong>.</li></ul>
<em>La differenza con E1.13:</em> lì la radice stava a destra, quindi $x\ge0$ era una condizione necessaria; qui sta a sinistra e il caso «secondo membro negativo» dà soluzioni gratis. Dimenticarlo è l'errore più comune. $\blacksquare$` },

/* ======================= SEZIONE 2 ======================= */
{ id: 'E2.1', sez: 2, tema: 'Limiti di successioni', d: 1,
  t: r`Calcolare $\displaystyle\lim_{n\to\infty}\frac{3n^{2}+2n-1}{n^{2}-5n+4}$.`,
  hints: [ r`È una forma $\frac{\infty}{\infty}$: raccogli il termine dominante sopra e sotto.`,
           r`Il termine dominante è $n^2$ in entrambi.` ],
  sol: r`Forma indeterminata $\frac\infty\infty$. Raccogliamo $n^{2}$:
$$\frac{3n^{2}+2n-1}{n^{2}-5n+4}=\frac{n^{2}\left(3+\frac2n-\frac1{n^{2}}\right)}{n^{2}\left(1-\frac5n+\frac4{n^{2}}\right)}=\frac{3+\frac2n-\frac1{n^{2}}}{1-\frac5n+\frac4{n^{2}}}\longrightarrow\frac{3+0-0}{1-0+0}=3.$$
$$\boxed{\,\lim=3\,}$$
<em>Regola generale:</em> per un quoziente di polinomi di gradi $p$ e $q$, il limite è $0$ se $p\lt q$, $\pm\infty$ se $p>q$, e il rapporto dei coefficienti direttivi se $p=q$. $\blacksquare$` },

{ id: 'E2.2', sez: 2, tema: 'Limiti di successioni', d: 2,
  t: r`Calcolare $\displaystyle\lim_{n\to\infty}\left(\sqrt{n^{2}+n}-n\right)$.`,
  hints: [ r`È una forma $\infty-\infty$: non si può concludere direttamente.`,
           r`Razionalizza moltiplicando e dividendo per $\sqrt{n^2+n}+n$.`,
           r`Dopo la razionalizzazione resta $\frac{n}{\sqrt{n^2+n}+n}$: raccogli $n$.` ],
  sol: r`Forma indeterminata $\infty-\infty$. Razionalizziamo:
$$\sqrt{n^{2}+n}-n=\frac{\left(\sqrt{n^{2}+n}-n\right)\left(\sqrt{n^{2}+n}+n\right)}{\sqrt{n^{2}+n}+n}=\frac{(n^{2}+n)-n^{2}}{\sqrt{n^{2}+n}+n}=\frac{n}{\sqrt{n^{2}+n}+n}.$$
Raccogliamo ora $n$ al denominatore (per $n>0$, $\sqrt{n^2+n}=n\sqrt{1+\frac1n}$):
$$\frac{n}{n\left(\sqrt{1+\frac1n}+1\right)}=\frac{1}{\sqrt{1+\frac1n}+1}\longrightarrow\frac{1}{\sqrt1+1}=\frac12.$$
$$\boxed{\,\lim=\tfrac12\,}$$
<em>Metodo alternativo (o-piccoli):</em> $\sqrt{n^2+n}=n\sqrt{1+\frac1n}=n\left(1+\frac{1}{2n}+o\!\left(\frac1n\right)\right)=n+\frac12+o(1)$, da cui la differenza tende a $\frac12$. $\blacksquare$` },

{ id: 'E2.3', sez: 2, tema: 'Gerarchia degli infiniti', d: 2,
  t: r`Calcolare $\displaystyle\lim_{n\to\infty}\frac{n^{3}+2^{n}}{3^{n}-n^{2}}$.`,
  hints: [ r`Usa la gerarchia: $n^\alpha\ll a^n$. Qual è il termine dominante sopra? E sotto?`,
           r`Sopra domina $2^n$, sotto domina $3^n$. Raccoglili.`,
           r`Resta essenzialmente $\left(\frac23\right)^n\to0$.` ],
  sol: r`Per la gerarchia degli infiniti $n^{3}\ll2^{n}$ e $n^{2}\ll3^{n}$. Raccogliamo i termini dominanti:
$$\frac{n^{3}+2^{n}}{3^{n}-n^{2}}=\frac{2^{n}\left(\frac{n^{3}}{2^{n}}+1\right)}{3^{n}\left(1-\frac{n^{2}}{3^{n}}\right)}=\left(\frac23\right)^{n}\cdot\frac{\frac{n^{3}}{2^{n}}+1}{1-\frac{n^{2}}{3^{n}}}.$$
Poiché $\frac{n^{3}}{2^{n}}\to0$ e $\frac{n^{2}}{3^{n}}\to0$, il secondo fattore tende a $\frac{0+1}{1-0}=1$; inoltre $\left(\frac23\right)^{n}\to0$ perché $\left|\frac23\right|<1$. Per l'algebra dei limiti:
$$\boxed{\,\lim=0\,}$$ $\blacksquare$` },

{ id: 'E2.4', sez: 2, tema: 'Numero e', d: 2,
  t: r`Calcolare $\displaystyle\lim_{n\to\infty}\left(1+\frac{2}{n}\right)^{3n}$ e $\displaystyle\lim_{n\to\infty}\left(\frac{n+1}{n+3}\right)^{n}$.`,
  hints: [ r`Forma $1^{\infty}$: riconduci alla forma $\left(1+\frac1{m}\right)^{m}$.`,
           r`Per il primo: $\left(1+\frac2n\right)^{3n}=\left[\left(1+\frac2n\right)^{n/2}\right]^{6}$.`,
           r`Per il secondo scrivi $\frac{n+1}{n+3}=1+\frac{-2}{n+3}$.` ],
  sol: r`<strong>Primo limite.</strong> Poniamo $m=\frac n2$ (cioè $\frac2n=\frac1m$):
$$\left(1+\frac2n\right)^{3n}=\left[\left(1+\frac{2}{n}\right)^{\frac n2}\right]^{6}\longrightarrow e^{6},$$
perché $\left(1+\frac2n\right)^{n/2}\to e$ e la funzione $t\mapsto t^{6}$ è continua.<br><br>
<strong>Secondo limite.</strong>
$$\frac{n+1}{n+3}=\frac{(n+3)-2}{n+3}=1+\frac{-2}{n+3}.$$
Quindi
$$\left(1+\frac{-2}{n+3}\right)^{n}=\left[\left(1+\frac{-2}{n+3}\right)^{\frac{n+3}{-2}}\right]^{\frac{-2n}{n+3}}\longrightarrow e^{-2},$$
poiché la base tende a $e$ e l'esponente $\frac{-2n}{n+3}\to-2$.<br><br>
$$\boxed{\,e^{6}\quad\text{e}\quad e^{-2}\,}$$
<em>Regola pratica:</em> $\left(1+\frac{c}{n}\right)^{\alpha n}\to e^{\,\alpha c}$. $\blacksquare$` },

{ id: 'E2.5', sez: 2, tema: 'Due carabinieri', d: 2,
  t: r`Calcolare $\displaystyle\lim_{n\to\infty}\sum_{k=1}^{n}\frac{1}{n^{2}+k}$.`,
  hints: [ r`Non puoi calcolare la somma esplicitamente: stima ogni addendo dall'alto e dal basso.`,
           r`Per $1\le k\le n$: $n^2+1\le n^2+k\le n^2+n$.`,
           r`La somma ha $n$ addendi, quindi è compresa fra $\frac{n}{n^2+n}$ e $\frac{n}{n^2+1}$.` ],
  sol: r`Per ogni $k$ con $1\le k\le n$ vale $n^{2}+1\le n^{2}+k\le n^{2}+n$, dunque, invertendo (tutti i termini sono positivi),
$$\frac{1}{n^{2}+n}\le\frac{1}{n^{2}+k}\le\frac{1}{n^{2}+1}.$$
Sommando su $k=1,\dots,n$ (sono $n$ addendi):
$$\underbrace{\frac{n}{n^{2}+n}}_{=:a_n}\;\le\;\sum_{k=1}^{n}\frac{1}{n^{2}+k}\;\le\;\underbrace{\frac{n}{n^{2}+1}}_{=:c_n}.$$
Ora
$$a_n=\frac{n}{n^{2}+n}=\frac{1}{n+1}\to0,\qquad c_n=\frac{n}{n^{2}+1}=\frac{\frac1n}{1+\frac1{n^{2}}}\to0.$$
Per il <strong>teorema dei due carabinieri</strong>,
$$\boxed{\,\lim_{n\to\infty}\sum_{k=1}^{n}\frac{1}{n^{2}+k}=0\,}$$ $\blacksquare$` },

{ id: 'E2.6', sez: 2, tema: 'Successioni ricorsive', d: 3,
  t: r`Sia $a_0=0$ e $a_{n+1}=\sqrt{2+a_n}$ per $n\ge0$. Provare che $(a_n)$ converge e calcolarne il limite.`,
  hints: [ r`Strategia standard: dimostra per induzione che è <strong>limitata</strong> (per esempio $0\le a_n<2$), poi che è <strong>crescente</strong>.`,
           r`Una volta stabilita la convergenza a un certo $L$, passa al limite nella relazione ricorsiva.`,
           r`Al limite: $L=\sqrt{2+L}$, cioè $L^2-L-2=0$. Scarta la radice negativa.` ],
  sol: r`<strong>Passo 1: limitatezza.</strong> Proviamo per induzione che $0\le a_n<2$ per ogni $n$.<br>
Base: $a_0=0\in[0,2)$. Passo: se $0\le a_n<2$, allora $2\le 2+a_n<4$, quindi $$\sqrt2\le a_{n+1}=\sqrt{2+a_n}<2,$$ e in particolare $0\le a_{n+1}<2$. ✓<br><br>
<strong>Passo 2: monotonia.</strong> Proviamo che $a_{n+1}\ge a_n$. Poiché $a_n\ge0$,
$$a_{n+1}\ge a_n\iff \sqrt{2+a_n}\ge a_n\iff 2+a_n\ge a_n^{2}\iff a_n^{2}-a_n-2\le0\iff (a_n-2)(a_n+1)\le0,$$
che è vera perché $0\le a_n<2$ implica $a_n-2<0$ e $a_n+1>0$. Dunque $(a_n)$ è crescente. ✓<br><br>
<strong>Passo 3: convergenza.</strong> $(a_n)$ è crescente e limitata superiormente: per il teorema sulla <em>regolarità delle successioni monotòne</em> converge a un limite finito $L=\sup_n a_n\in[0,2]$.<br><br>
<strong>Passo 4: calcolo del limite.</strong> Passando al limite in $a_{n+1}=\sqrt{2+a_n}$ (lecito: $(a_{n+1})$ è una traslazione di $(a_n)$, quindi ha lo stesso limite, e $t\mapsto\sqrt{2+t}$ è continua):
$$L=\sqrt{2+L}\ \Longrightarrow\ L^{2}=2+L\ \Longrightarrow\ L^{2}-L-2=0\ \Longrightarrow\ L\in\{2,-1\}.$$
Poiché $a_n\ge0$ per ogni $n$, per la permanenza del segno $L\ge0$: si scarta $-1$.
$$\boxed{\,\lim_{n\to\infty}a_n=2\,}$$ $\blacksquare$<br><br>
<em>Nota metodologica:</em> i passi 1–3 servono a garantire che il limite <strong>esista</strong>. Passare al limite nella ricorsione senza averlo provato è l'errore più grave in questo tipo di esercizio: la sola equazione $L=\sqrt{2+L}$ non dimostra nulla.` },

{ id: 'E2.7', sez: 2, tema: 'o-piccoli', d: 3,
  t: r`Calcolare $\displaystyle\lim_{n\to\infty}n^{2}\left(e^{1/n}-1-\frac1n\right)$.`,
  hints: [ r`Poni $x=\frac1n\to0$: il limite diventa $\lim_{x\to0}\frac{e^{x}-1-x}{x^{2}}$.`,
           r`Serve lo sviluppo di $e^x$ al <strong>secondo</strong> ordine, non al primo.`,
           r`$e^{x}=1+x+\frac{x^{2}}{2}+o(x^{2})$.` ],
  sol: r`Posto $x=\frac1n$ (con $x\to0^+$), il limite si riscrive come
$$\lim_{x\to0}\frac{e^{x}-1-x}{x^{2}}.$$
Usiamo lo sviluppo di Mac-Laurin al secondo ordine:
$$e^{x}=1+x+\frac{x^{2}}{2}+o(x^{2}).$$
Allora
$$e^{x}-1-x=\frac{x^{2}}{2}+o(x^{2}),$$
e dunque
$$\frac{e^{x}-1-x}{x^{2}}=\frac{\frac{x^{2}}{2}+o(x^{2})}{x^{2}}=\frac12+\frac{o(x^{2})}{x^{2}}\longrightarrow\frac12+0=\frac12.$$
$$\boxed{\,\lim=\tfrac12\,}$$
<em>Attenzione:</em> fermarsi a $e^{x}=1+x+o(x)$ darebbe $\frac{o(x)}{x^2}$, forma non determinata — lo sviluppo va spinto fino all'ordine in cui compare il primo termine non nullo. $\blacksquare$` },

{ id: 'E2.8', sez: 2, tema: 'Definizione di limite', d: 2,
  t: r`Verificare, usando la definizione, che $\displaystyle\lim_{n\to\infty}\frac{2n+1}{n+3}=2$. Determinare esplicitamente $N(\eps)$ per $\eps=10^{-2}$.`,
  hints: [ r`Devi maggiorare $\left|\frac{2n+1}{n+3}-2\right|$ e renderlo $<\eps$.`,
           r`Fai la differenza mettendo a denominatore comune.`,
           r`Ottieni $\frac{5}{n+3}<\eps$, cioè $n>\frac5\eps-3$.` ],
  sol: r`<strong>Stima della distanza dal candidato limite.</strong>
$$\left|\frac{2n+1}{n+3}-2\right|=\left|\frac{2n+1-2(n+3)}{n+3}\right|=\left|\frac{-5}{n+3}\right|=\frac{5}{n+3},$$
dove l'ultimo passaggio usa $n+3>0$.<br><br>
<strong>Imporre la condizione.</strong> Sia $\eps>0$. Allora
$$\frac{5}{n+3}<\eps\iff n+3>\frac5\eps\iff n>\frac5\eps-3.$$
Basta dunque scegliere $$N(\eps)=\left\lceil\frac5\eps-3\right\rceil$$ (o qualunque intero maggiore): per ogni $n>N(\eps)$ si ha $\left|\frac{2n+1}{n+3}-2\right|<\eps$. Essendo $\eps>0$ arbitrario, il limite è $2$. $\blacksquare$<br><br>
<strong>Caso $\eps=10^{-2}$.</strong> $\frac{5}{10^{-2}}-3=500-3=497$, quindi $N=497$: per ogni $n\ge498$ la distanza da $2$ è minore di $0{,}01$.<br><br>
<em>Verifica:</em> per $n=498$, $\frac{5}{501}\approx0{,}00998<0{,}01$. ✓` },

{ id: 'E2.9', sez: 2, tema: 'Limiti notevoli', d: 2,
  t: r`Calcolare $\displaystyle\lim_{n\to\infty}n\left(1-\cos\frac{1}{\sqrt n}\right)$ e $\displaystyle\lim_{n\to\infty}\frac{n^{2}\sin\frac1n-n}{\ln\left(1+\frac1n\right)}$.`,
  hints: [ r`Primo: usa $1-\cos x\sim\frac{x^{2}}{2}$ con $x=\frac{1}{\sqrt n}$.`,
           r`Secondo: sviluppa $\sin x=x-\frac{x^{3}}{6}+o(x^{3})$ con $x=\frac1n$ — il termine $n^{2}\cdot\frac1n=n$ si cancella con $-n$.`,
           r`A denominatore $\ln\left(1+\frac1n\right)\sim\frac1n$.` ],
  sol: r`<strong>Primo limite.</strong> Posto $x=\frac{1}{\sqrt n}\to0$, si ha $n=\frac{1}{x^{2}}$ e, dal limite notevole $1-\cos x\sim\frac{x^{2}}{2}$:
$$n\left(1-\cos\frac{1}{\sqrt n}\right)=\frac{1-\cos x}{x^{2}}\longrightarrow\frac12.$$
<strong>Secondo limite.</strong> Con $x=\frac1n\to0$ usiamo $\sin x=x-\frac{x^{3}}{6}+o(x^{3})$:
$$n^{2}\sin\frac1n-n=n^{2}\left(\frac1n-\frac{1}{6n^{3}}+o\!\left(\frac{1}{n^{3}}\right)\right)-n=n-\frac{1}{6n}+o\!\left(\frac1n\right)-n=-\frac{1}{6n}+o\!\left(\frac1n\right).$$
Al denominatore $\ln\left(1+\frac1n\right)=\frac1n+o\!\left(\frac1n\right)\sim\frac1n$. Quindi
$$\frac{-\frac{1}{6n}+o\!\left(\frac1n\right)}{\frac1n+o\!\left(\frac1n\right)}\longrightarrow-\frac16.$$
$$\boxed{\,\tfrac12\quad\text{e}\quad-\tfrac16\,}$$ $\blacksquare$` },

{ id: 'E2.10', sez: 2, tema: 'Funzioni elementari', d: 1,
  t: r`Determinare l'insieme di definizione di
<ol><li>$f(x)=\dfrac{\sqrt{1-x^2}}{x^{1/3}}$</li><li>$g(x)=\arcsin(2x-1)+\ln x$</li><li>$h(x)=x^{-1/2}+[x]$</li></ol>
<span class="small muted">(Usa le convenzioni del corso, Lezione 5.)</span>`,
  hints: [ r`Radice quadrata: argomento $\ge0$. Denominatore: diverso da zero. E $x^{1/3}$, con $q=3$ dispari, nel corso è definita su tutto $\R$.`,
           r`$\arcsin$ è definita solo su $[-1,1]$; $\ln$ solo su $(0,+\infty)$.`,
           r`$x^{-1/2}=\frac1{\sqrt x}$ ha $q=2$ pari: serve $x>0$. La parte intera è definita ovunque.` ],
  sol: r`<strong>1.</strong> Serve $1-x^2\ge0\iff-1\le x\le1$, e $x^{1/3}\ne0\iff x\ne0$. Il denominatore $x^{1/3}$, con $q=3$ dispari, è definito anche per $x\lt 0$ (convenzione del corso). Quindi $$D_f=[-1,0)\cup(0,1].$$
<em>Attenzione:</em> con la convenzione dei libri, che definiscono $x^{1/3}$ solo per $x\ge0$, verrebbe $(0,1]$. All'esame segui il corso.<br><br>
<strong>2.</strong> $-1\le2x-1\le1\iff0\le x\le1$, e $x>0$. Intersecando: $$D_g=(0,1].$$
<strong>3.</strong> $x^{-1/2}=\frac1{\sqrt x}$ richiede $x>0$; $[x]$ è definita su tutto $\R$. Quindi $$D_h=(0,+\infty).\quad\blacksquare$$` },

{ id: 'E2.11', sez: 2, tema: 'Estremi di successioni', d: 2,
  t: r`Sia $a_n=\dfrac{n-1}{n+1}$, $n\in\N$. Stabilire se è monotòna e determinarne $\sup$, $\inf$ ed eventualmente $\max$ e $\min$, verificando il $\sup$ con la caratterizzazione.`,
  hints: [ r`Riscrivi $a_n=1-\frac{2}{n+1}$.`,
           r`Il primo termine è $a_0=-1$. Che cosa fa $\frac2{n+1}$ al crescere di $n$?`,
           r`Per il $\sup=\Lambda$: (i) $a_n\le\Lambda$ per ogni $n$; (ii) $\forall\eps>0\ \exists n_\eps:\ a_{n_\eps}>\Lambda-\eps$.` ],
  sol: r`$a_n=\dfrac{(n+1)-2}{n+1}=1-\dfrac{2}{n+1}$.<br><br>
<strong>Monotonia.</strong> $\frac2{n+1}$ è strettamente decrescente, quindi $a_n$ è <strong>strettamente crescente</strong>. In modo diretto: $a_n\lt a_{n+1}\iff\frac2{n+2}\lt\frac2{n+1}\iff n+1\lt n+2$, sempre vero.<br><br>
<strong>Minimo.</strong> Essendo crescente, il più piccolo è il primo termine: $\min\{a_n\}=\inf\{a_n\}=a_0=-1$.<br><br>
<strong>Estremo superiore: $\Lambda=1$.</strong>
<ul><li>(i) $a_n=1-\frac2{n+1}\lt 1$ per ogni $n$: $1$ è un maggiorante.</li>
<li>(ii) Fissato $\eps>0$: $a_n>1-\eps\iff\frac2{n+1}\lt\eps\iff n>\frac2\eps-1$. Basta prendere $n_\eps=\left[\frac2\eps\right]$, che è $>\frac2\eps-1$.</li></ul>
<strong>Massimo.</strong> Non esiste: $a_n=1$ richiederebbe $\frac2{n+1}=0$, impossibile.<br><br>
<em>In sintesi:</em> $a_n$ è limitata, $\min=\inf=-1$, $\sup=1$, nessun massimo. $\blacksquare$` },

{ id: 'E2.12', sez: 2, tema: 'Definizione di limite', d: 2,
  t: r`Verificare con la definizione che
<ol><li>$\displaystyle\lim_{n\to+\infty}\sqrt n=+\infty$;</li><li>$\displaystyle\lim_{n\to+\infty}(3-n)=-\infty$.</li></ol>
<span class="small muted">Usa la forma degli appunti: $\forall M>0\ \exists\nu_M$ …</span>`,
  hints: [ r`Per $+\infty$: fissato $M>0$, risolvi $\sqrt n>M$ rispetto a $n$.`,
           r`Per $-\infty$ la condizione è $a_n\lt -M$: risolvi $3-n\lt -M$.`,
           r`$\nu$ va scelto naturale: usa la parte intera.` ],
  sol: r`<strong>1.</strong> Fissato $M>0$: $\sqrt n>M\iff n>M^2$, perché entrambi i membri sono $\ge0$. Con $\nu_M:=\left[M^2\right]$, per ogni $n>\nu_M$ si ha $n\ge[M^2]+1>M^2$, quindi $\sqrt n>M$. Questa è la definizione di $\sqrt n\to+\infty$.<br><br>
<strong>2.</strong> Fissato $M>0$: $3-n\lt -M\iff n>M+3$. Con $\nu_M:=[M]+3$, per ogni $n>\nu_M$ si ha $n\ge[M]+4>M+3$, quindi $a_n\lt -M$. Questa è la definizione di $a_n\to-\infty$. $\blacksquare$` },

{ id: 'E2.13', sez: 2, tema: 'Non esistenza del limite', d: 2,
  t: r`Stabilire se ammettono limite:
<ol><li>$a_n=(-1)^n\dfrac{n}{n+1}$;</li><li>$b_n=(-1)^n\,n$.</li></ol>`,
  hints: [ r`Separa gli indici pari ($n=2k$) da quelli dispari ($n=2k+1$).`,
           r`Se due sottosuccessioni hanno limiti diversi, il limite non esiste (per l'unicità).` ],
  sol: r`<strong>1.</strong> $a_{2k}=\dfrac{2k}{2k+1}\to1$ e $a_{2k+1}=-\dfrac{2k+1}{2k+2}\to-1$. Due sottosuccessioni con limiti diversi: <strong>il limite non esiste</strong>. La successione però è limitata, perché $|a_n|\lt 1$: limitata non vuol dire convergente.<br><br>
<strong>2.</strong> $b_{2k}=2k\to+\infty$ e $b_{2k+1}=-(2k+1)\to-\infty$. <strong>Il limite non esiste</strong>, nemmeno infinito. È illimitata sia superiormente sia inferiormente, eppure non è divergente: divergere vuol dire tendere a $+\infty$ <em>oppure</em> a $-\infty$, non «diventare grande in modulo». $\blacksquare$` },

/* ======================= SEZIONE 3 ======================= */
{ id: 'E3.1', sez: 3, tema: 'Serie telescopiche', d: 1,
  t: r`Studiare il carattere e, se possibile, calcolare la somma di $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n(n+1)}$.`,
  hints: [ r`Decomponi in fratti semplici: $\frac{1}{n(n+1)}=\frac An+\frac B{n+1}$.`,
           r`Trovi $A=1$, $B=-1$. Scrivi la somma parziale e osserva le cancellazioni.`,
           r`$s_n=\left(1-\frac12\right)+\left(\frac12-\frac13\right)+\dots+\left(\frac1n-\frac1{n+1}\right)$.` ],
  sol: r`<strong>Decomposizione.</strong> $$\frac{1}{n(n+1)}=\frac{1}{n}-\frac{1}{n+1}.$$
<strong>Somma parziale (telescopica).</strong>
$$s_n=\sum_{k=1}^{n}\left(\frac1k-\frac1{k+1}\right)=\left(1-\frac12\right)+\left(\frac12-\frac13\right)+\dots+\left(\frac1n-\frac1{n+1}\right)=1-\frac{1}{n+1}.$$
Tutti i termini intermedi si cancellano a due a due.<br><br>
<strong>Limite.</strong> $$\lim_{n\to\infty}s_n=\lim_{n\to\infty}\left(1-\frac1{n+1}\right)=1.$$
La serie <strong>converge</strong> e $$\boxed{\,\sum_{n=1}^{\infty}\frac{1}{n(n+1)}=1\,}$$ $\blacksquare$<br><br>
<em>Nota.</em> Le serie telescopiche sono fra le pochissime di cui si sa calcolare la somma esatta. Riconoscerle vale punti: cerca sempre se $a_n=b_n-b_{n+1}$.` },

{ id: 'E3.2', sez: 3, tema: 'Confronto asintotico', d: 1,
  t: r`Studiare il carattere della serie $\displaystyle\sum_{n=1}^{\infty}\frac{3n+2}{n^{3}-n+1}$.`,
  hints: [ r`I termini sono positivi definitivamente: puoi usare il confronto asintotico.`,
           r`Tieni solo i termini dominanti a numeratore e denominatore.`,
           r`Ottieni $a_n\sim\frac{3}{n^{2}}$: confronta con la serie armonica generalizzata.` ],
  sol: r`I termini sono positivi per $n\ge1$. Per $n\to\infty$ dominano $3n$ a numeratore e $n^{3}$ a denominatore:
$$a_n=\frac{3n+2}{n^{3}-n+1}=\frac{3n\left(1+\frac{2}{3n}\right)}{n^{3}\left(1-\frac1{n^{2}}+\frac1{n^{3}}\right)}\sim\frac{3n}{n^{3}}=\frac{3}{n^{2}}.$$
Applichiamo il <strong>criterio del confronto asintotico</strong> con $b_n=\frac1{n^{2}}$:
$$\lim_{n\to\infty}\frac{a_n}{b_n}=3\in(0,+\infty),$$
quindi le due serie hanno lo stesso carattere. Poiché $\sum\frac1{n^{2}}$ è la serie armonica generalizzata con $\alpha=2>1$, essa converge.
$$\boxed{\,\text{la serie converge}\,}$$ $\blacksquare$` },

{ id: 'E3.3', sez: 3, tema: 'Criterio del rapporto', d: 2,
  t: r`Studiare il carattere di $\displaystyle\sum_{n=1}^{\infty}\frac{n!}{n^{n}}$ e di $\displaystyle\sum_{n=1}^{\infty}\frac{(n!)^{2}}{(2n)!}$.`,
  hints: [ r`Ci sono fattoriali: il criterio del rapporto è la scelta naturale.`,
           r`Per la prima: $\frac{a_{n+1}}{a_n}=\frac{(n+1)!}{(n+1)^{n+1}}\cdot\frac{n^{n}}{n!}$. Semplifica $(n+1)!=(n+1)\,n!$.`,
           r`Ottieni $\left(\frac{n}{n+1}\right)^{n}=\frac{1}{\left(1+\frac1n\right)^{n}}\to\frac1e$.` ],
  sol: r`<strong>Prima serie.</strong> $a_n=\frac{n!}{n^{n}}>0$. Calcoliamo il rapporto:
$$\frac{a_{n+1}}{a_n}=\frac{(n+1)!}{(n+1)^{\,n+1}}\cdot\frac{n^{n}}{n!}=\frac{(n+1)\,n!}{(n+1)^{\,n+1}}\cdot\frac{n^{n}}{n!}=\frac{n^{n}}{(n+1)^{n}}=\left(\frac{n}{n+1}\right)^{n}=\frac{1}{\left(1+\frac1n\right)^{n}}.$$
Poiché $\left(1+\frac1n\right)^{n}\to e$, si ha $\frac{a_{n+1}}{a_n}\to\frac1e\approx0{,}368<1$: per il <strong>criterio del rapporto</strong> la serie <strong>converge</strong>.<br><br>
<strong>Seconda serie.</strong> $a_n=\frac{(n!)^{2}}{(2n)!}>0$:
$$\frac{a_{n+1}}{a_n}=\frac{\bigl((n+1)!\bigr)^{2}}{(2n+2)!}\cdot\frac{(2n)!}{(n!)^{2}}=\frac{(n+1)^{2}\,(n!)^{2}}{(2n+2)(2n+1)\,(2n)!}\cdot\frac{(2n)!}{(n!)^{2}}=\frac{(n+1)^{2}}{(2n+2)(2n+1)}.$$
Semplificando $2n+2=2(n+1)$:
$$\frac{a_{n+1}}{a_n}=\frac{(n+1)^{2}}{2(n+1)(2n+1)}=\frac{n+1}{2(2n+1)}\longrightarrow\frac14<1.$$
Anche questa serie <strong>converge</strong>. $\blacksquare$<br><br>
<em>Da ricordare:</em> $(n+1)!=(n+1)\,n!$ e $(2n+2)!=(2n+2)(2n+1)(2n)!$ — la semplificazione dei fattoriali è il passaggio dove si sbaglia più spesso.` },

{ id: 'E3.4', sez: 3, tema: 'Criterio della radice', d: 2,
  t: r`Studiare il carattere di $\displaystyle\sum_{n=1}^{\infty}\left(\frac{3n+1}{4n+5}\right)^{n}$ e di $\displaystyle\sum_{n=1}^{\infty}\left(1-\frac1n\right)^{n^{2}}$.`,
  hints: [ r`Compaiono potenze $n$-esime: prova il criterio della radice.`,
           r`Per la seconda, $\sqrt[n]{a_n}=\left(1-\frac1n\right)^{n}$. Ricordi a cosa tende?`,
           r`$\left(1-\frac1n\right)^{n}\to e^{-1}$.` ],
  sol: r`<strong>Prima serie.</strong> $a_n=\left(\frac{3n+1}{4n+5}\right)^{n}\ge0$ e
$$\sqrt[n]{a_n}=\frac{3n+1}{4n+5}=\frac{3+\frac1n}{4+\frac5n}\longrightarrow\frac34<1.$$
Per il <strong>criterio della radice</strong> la serie <strong>converge</strong>.<br><br>
<strong>Seconda serie.</strong> $a_n=\left(1-\frac1n\right)^{n^{2}}\ge0$ (per $n\ge1$) e
$$\sqrt[n]{a_n}=\left(1-\frac1n\right)^{n}\longrightarrow e^{-1}=\frac1e\approx0{,}368<1.$$
Anche questa serie <strong>converge</strong>. $\blacksquare$<br><br>
<em>Segnale da riconoscere:</em> ogni volta che l'esponente è $n$ (o $n^2$, o $an+b$), la radice $n$-esima semplifica tutto. Con esponenti costanti, invece, la radice non aiuta e serve il confronto asintotico.` },

{ id: 'E3.5', sez: 3, tema: 'Serie geometrica', d: 1,
  t: r`Calcolare la somma di $\displaystyle\sum_{n=2}^{\infty}\frac{3^{n}+(-2)^{n}}{5^{n}}$.`,
  hints: [ r`Spezza in due serie geometriche di ragione $\frac35$ e $-\frac25$.`,
           r`Attenzione: le serie partono da $n=2$, non da $n=0$.`,
           r`Formula: $\sum_{n\ge n_0}q^{n}=\frac{q^{\,n_0}}{1-q}$.` ],
  sol: r`Spezziamo (lecito: entrambe le serie convergono assolutamente):
$$\sum_{n=2}^{\infty}\frac{3^{n}+(-2)^{n}}{5^{n}}=\sum_{n=2}^{\infty}\left(\frac35\right)^{n}+\sum_{n=2}^{\infty}\left(-\frac25\right)^{n}.$$
Entrambe sono geometriche con $|q|<1$, quindi convergono. Usando $\sum_{n\ge n_0}q^{n}=\frac{q^{\,n_0}}{1-q}$:
$$\sum_{n=2}^{\infty}\left(\frac35\right)^{n}=\frac{\left(\frac35\right)^{2}}{1-\frac35}=\frac{\frac{9}{25}}{\frac25}=\frac{9}{25}\cdot\frac52=\frac{9}{10},$$
$$\sum_{n=2}^{\infty}\left(-\frac25\right)^{n}=\frac{\left(-\frac25\right)^{2}}{1-\left(-\frac25\right)}=\frac{\frac{4}{25}}{\frac75}=\frac{4}{25}\cdot\frac57=\frac{4}{35}.$$
Sommando:
$$\frac{9}{10}+\frac{4}{35}=\frac{63}{70}+\frac{8}{70}=\frac{71}{70}.$$
$$\boxed{\,\sum_{n=2}^{\infty}\frac{3^{n}+(-2)^{n}}{5^{n}}=\frac{71}{70}\,}$$ $\blacksquare$` },

{ id: 'E3.6', sez: 3, tema: 'Serie alternate', d: 2,
  t: r`Studiare la convergenza semplice e assoluta di $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n}}{\sqrt n}$ e di $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n}}{n^{2}+1}$.`,
  hints: [ r`Parti sempre dalla convergenza assoluta: studia $\sum|a_n|$.`,
           r`Per la prima, $\sum\frac{1}{\sqrt n}=\sum\frac{1}{n^{1/2}}$ ha $\alpha=\frac12\le1$.`,
           r`Se l'assoluta fallisce e la serie è alternata, verifica le tre ipotesi di Leibniz.` ],
  sol: r`<strong>Prima serie.</strong> <em>Assoluta:</em> $\sum\left|\frac{(-1)^{n}}{\sqrt n}\right|=\sum\frac{1}{n^{1/2}}$ è armonica generalizzata con $\alpha=\frac12\le1$, quindi <strong>diverge</strong>: non c'è convergenza assoluta.<br>
<em>Semplice (Leibniz):</em> posto $b_n=\frac{1}{\sqrt n}$, si ha (i) $b_n\ge0$; (ii) $b_n$ è strettamente decrescente; (iii) $b_n\to0$. Tutte e tre le ipotesi sono soddisfatte, quindi la serie <strong>converge semplicemente</strong> ma non assolutamente: è <em>semplicemente convergente</em>.<br><br>
<strong>Seconda serie.</strong> <em>Assoluta:</em> $\sum\frac{1}{n^{2}+1}$ con $\frac{1}{n^{2}+1}\sim\frac{1}{n^{2}}$ e $\alpha=2>1$: per confronto asintotico <strong>converge</strong>.<br>
Dunque la serie converge <strong>assolutamente</strong>, e per il teorema «assoluta $\Rightarrow$ semplice» converge anche semplicemente. $\blacksquare$<br><br>
<em>Metodo da seguire sempre, in quest'ordine:</em> 1) $a_n\to0$? (se no, si è già concluso) 2) converge assolutamente? 3) se no ed è alternata, Leibniz.` },

{ id: 'E3.7', sez: 3, tema: 'Condizione necessaria', d: 1,
  t: r`Studiare il carattere di $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n}\,n}{n+1}$ e di $\displaystyle\sum_{n=1}^{\infty}\left(1+\frac1n\right)^{n}$.`,
  hints: [ r`Prima di ogni criterio, controlla sempre se $a_n\to0$.`,
           r`Per la prima: $\frac{n}{n+1}\to1$, quindi $a_n$ oscilla fra valori vicini a $\pm1$.`,
           r`Per la seconda: $a_n\to e\ne0$.` ],
  sol: r`<strong>Prima serie.</strong> $a_n=\frac{(-1)^{n}n}{n+1}$. Si ha $\frac{n}{n+1}\to1$, quindi $|a_n|\to1\ne0$ e la successione $(a_n)$ oscilla fra valori prossimi a $+1$ e $-1$: in particolare $a_n\not\to0$. Per la <strong>condizione necessaria</strong> la serie <strong>non converge</strong>; essendo a segno alternato con termini che non tendono a $0$, le somme parziali oscillano: la serie è <strong>indeterminata</strong>.<br><br>
<em>Osservazione:</em> Leibniz qui non si applica, perché l'ipotesi $b_n\to0$ è violata.<br><br>
<strong>Seconda serie.</strong> $a_n=\left(1+\frac1n\right)^{n}\to e\approx2{,}718\ne0$. Ancora per la condizione necessaria la serie non converge; poiché i termini sono positivi, essa <strong>diverge a $+\infty$</strong>. $\blacksquare$<br><br>
<em>Morale:</em> il controllo $a_n\to0$ costa dieci secondi e talvolta risolve l'esercizio da solo. Farlo sempre per primo.` },

{ id: 'E3.8', sez: 3, tema: 'Confronto asintotico', d: 2,
  t: r`Studiare il carattere di $\displaystyle\sum_{n=1}^{\infty}\left(1-\cos\frac1n\right)$ e di $\displaystyle\sum_{n=1}^{\infty}\sin\frac{1}{\sqrt n}$.`,
  hints: [ r`Usa i limiti notevoli come equivalenze asintotiche: $1-\cos x\sim\frac{x^{2}}{2}$, $\sin x\sim x$ per $x\to0$.`,
           r`Qui $x=\frac1n\to0$ e $x=\frac{1}{\sqrt n}\to0$.`,
           r`Poi confronta con la serie armonica generalizzata.` ],
  sol: r`<strong>Prima serie.</strong> I termini sono positivi. Con $x=\frac1n\to0$ e il limite notevole $1-\cos x\sim\frac{x^{2}}{2}$:
$$a_n=1-\cos\frac1n\sim\frac{1}{2n^{2}}.$$
Per il criterio del confronto asintotico (con $b_n=\frac1{n^2}$, $\ell=\frac12\in(0,+\infty)$) la serie ha lo stesso carattere di $\sum\frac{1}{n^{2}}$, che converge perché $\alpha=2>1$. Dunque <strong>converge</strong>.<br><br>
<strong>Seconda serie.</strong> I termini sono positivi definitivamente. Con $x=\frac1{\sqrt n}\to0$ e $\sin x\sim x$:
$$a_n=\sin\frac{1}{\sqrt n}\sim\frac{1}{\sqrt n}=\frac{1}{n^{1/2}}.$$
Qui $\alpha=\frac12\le1$, quindi la serie di confronto <strong>diverge</strong> e, per il confronto asintotico, anche $\sum\sin\frac{1}{\sqrt n}$ <strong>diverge a $+\infty$</strong>. $\blacksquare$<br><br>
<em>Errore da evitare:</em> il fatto che $a_n\to0$ non dice nulla sul carattere — in entrambi gli esempi il termine generale è infinitesimo, ma solo la prima serie converge. Conta la <em>velocità</em> con cui tende a zero.` },

{ id: 'E3.9', sez: 3, tema: 'Serie telescopiche', d: 2,
  t: r`Studiare il carattere di $\displaystyle\sum_{n=1}^{\infty}\left(\sqrt{n+1}-\sqrt n\right)$ e di $\displaystyle\sum_{n=1}^{\infty}\ln\!\left(1+\frac1n\right)$.`,
  hints: [ r`Entrambe sono telescopiche: scrivi la somma parziale.`,
           r`Per la seconda usa $\ln\left(1+\frac1n\right)=\ln\frac{n+1}{n}=\ln(n+1)-\ln n$.`,
           r`Il termine generale tende a $0$ in entrambi i casi — ma questo non basta.` ],
  sol: r`<strong>Prima serie.</strong> La somma parziale è telescopica:
$$s_n=\sum_{k=1}^{n}\left(\sqrt{k+1}-\sqrt k\right)=\sqrt{n+1}-\sqrt1=\sqrt{n+1}-1\longrightarrow+\infty.$$
La serie <strong>diverge a $+\infty$</strong>.<br><br>
<strong>Seconda serie.</strong> Usando $\ln\left(1+\frac1n\right)=\ln(n+1)-\ln n$:
$$s_n=\sum_{k=1}^{n}\bigl[\ln(k+1)-\ln k\bigr]=\ln(n+1)-\ln1=\ln(n+1)\longrightarrow+\infty.$$
Anche questa serie <strong>diverge a $+\infty$</strong>. $\blacksquare$<br><br>
<strong>Osservazione importante.</strong> In entrambi i casi il termine generale è infinitesimo: $\sqrt{n+1}-\sqrt n=\frac{1}{\sqrt{n+1}+\sqrt n}\sim\frac{1}{2\sqrt n}$ e $\ln\left(1+\frac1n\right)\sim\frac1n$. Il confronto asintotico conferma: $\alpha=\frac12\le1$ e $\alpha=1\le1$, entrambe divergenti. Sono controesempi «gemelli» della serie armonica alla non sufficienza della condizione necessaria.` },

{ id: 'E3.10', sez: 3, tema: 'Criterio del rapporto', d: 2,
  t: r`Determinare per quali $x>0$ converge la serie $\displaystyle\sum_{n=1}^{\infty}\frac{x^{n}}{n}$, e studiare a parte i casi limite.`,
  hints: [ r`Applica il criterio del rapporto trattando $x$ come parametro.`,
           r`$\frac{a_{n+1}}{a_n}=x\cdot\frac{n}{n+1}\to x$. Il criterio decide per $x\ne1$.`,
           r`Il caso $x=1$ va studiato a parte: che serie diventa?` ],
  sol: r`I termini sono positivi per $x>0$. Applichiamo il <strong>criterio del rapporto</strong>:
$$\frac{a_{n+1}}{a_n}=\frac{x^{\,n+1}}{n+1}\cdot\frac{n}{x^{n}}=x\cdot\frac{n}{n+1}\longrightarrow x.$$
<ul><li>Se $x<1$: il limite è $<1$, la serie <strong>converge</strong>.</li>
<li>Se $x>1$: il limite è $>1$, la serie <strong>diverge</strong>.</li>
<li>Se $x=1$: il criterio non decide. Ma la serie diventa $\sum\frac1n$, la serie <strong>armonica</strong>, che <strong>diverge</strong>.</li></ul>
$$\boxed{\,\text{converge}\iff 0\lt x<1\,}$$
<em>Completamento (fuori dal parametro richiesto).</em> Per $x=-1$ si ottiene $\sum\frac{(-1)^{n}}{n}$, che converge per Leibniz ma non assolutamente; per $x<-1$ il termine generale non tende a $0$ e la serie è indeterminata. L'insieme di convergenza è dunque $[-1,1)$. $\blacksquare$` }

  ];

  const AM = (window.AM = window.AM || {});
  AM.ESERCIZI = E;
  AM.temiEsercizi = (sez) => [...new Set(E.filter(e => !sez || e.sez === sez).map(e => e.tema))];
})();
