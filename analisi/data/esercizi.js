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

/* ====== SEZIONE 1: dalle Esercitazioni 1-3 (soluzioni del tutor) ====== */
{ id: 'E1.15', sez: 1, tema: 'Disequazioni', d: 2,
  t: r`Risolvere $x+1>\sqrt{-x^2-2x}$. <span class="small muted">(Esercitazione 1)</span>`,
  hints: [ r`Prima il dominio della radice: $-x^2-2x\ge0$.`,
           r`Se $x+1\lt 0$ la disuguaglianza è falsa, perché il secondo membro è $\ge0$. Dove $x+1\ge0$ si può elevare al quadrato.`,
           r`Al quadrato: $2x^2+4x+1>0$; tieni solo le soluzioni in $(-1,0]$.` ],
  sol: r`<strong>Dominio.</strong> $-x^2-2x\ge0\iff x(x+2)\le0\iff-2\le x\le0$.<br><br>
<strong>Dove il primo membro è negativo.</strong> Per $x\in[-2,-1)$ si ha $x+1\lt 0\le\sqrt{\cdots}$: falsa. In $x=-1$ diventa $0>1$: falsa.<br><br>
<strong>Per $x\in(-1,0]$</strong> entrambi i membri sono $\ge0$ e si può elevare al quadrato:
$$(x+1)^2>-x^2-2x\iff2x^2+4x+1>0\iff x\lt -1-\tfrac{\sqrt2}2\ \vee\ x>-1+\tfrac{\sqrt2}2.$$
La prima è fuori da $(-1,0]$; resta
$$\boxed{-1+\frac{\sqrt2}{2}\lt x\le0.}$$
<em>Controllo:</em> in $x=0$: $1>0$ ✓; in $x=-0{,}5$ (fuori, perché $-1+\frac{\sqrt2}2\approx-0{,}29$): $0{,}5>\sqrt{0{,}75}\approx0{,}87$ è falso ✓. $\blacksquare$` },

{ id: 'E1.16', sez: 1, tema: 'Disequazioni', d: 2,
  t: r`Risolvere $\dfrac{\log_{1/2}(x^2-1)}{2^x-\frac{1}{2\sqrt2}}>0$. <span class="small muted">(Esercitazione 1)</span>`,
  hints: [ r`Esistenza del logaritmo: $x^2-1>0$.`,
           r`$\log_{1/2}$ è decrescente: $\log_{1/2}(y)>0\iff0\lt y\lt 1$. Il verso <strong>cambia</strong>.`,
           r`Denominatore: $\frac1{2\sqrt2}=2^{-3/2}$. Poi tabella dei segni.` ],
  sol: r`<strong>Esistenza:</strong> $x^2-1>0\iff x\lt -1\vee x>1$.<br><br>
<strong>Numeratore $>0$.</strong> La base $\frac12$ è minore di $1$, quindi il verso cambia: $x^2-1\lt 1\iff-\sqrt2\lt x\lt\sqrt2$.<br>
<strong>Denominatore $>0$.</strong> $2^x>2^{-3/2}\iff x>-\frac32$ (base $2>1$, il verso resta).<br><br>
<strong>Tabella dei segni</strong> sul dominio $(-\infty,-1)\cup(1,+\infty)$, con i punti $-\frac32\lt-\sqrt2\lt-1$ e $1\lt\sqrt2$:
<ul><li>$x\lt -\frac32$: num $-$, den $-$ ⇒ $+$;</li><li>$-\frac32\lt x\lt -\sqrt2$: num $-$, den $+$ ⇒ $-$;</li><li>$-\sqrt2\lt x\lt -1$: $+$, $+$ ⇒ $+$;</li><li>$1\lt x\lt\sqrt2$: $+$, $+$ ⇒ $+$;</li><li>$x>\sqrt2$: $-$, $+$ ⇒ $-$.</li></ul>
$$\boxed{x\lt -\frac32\ \ \vee\ \ -\sqrt2\lt x\lt -1\ \ \vee\ \ 1\lt x\lt\sqrt2.}$$
<em>Attenzione:</em> l'errore tipico è non cambiare verso con la base $\frac12$. $\blacksquare$` },

{ id: 'E1.17', sez: 1, tema: 'Disequazioni', d: 2,
  t: r`Risolvere $2^{\,2\cos^2x+5\sin x-3}-4^{\sin x}>0$. <span class="small muted">(Esercitazione 1)</span>`,
  hints: [ r`Scrivi $4^{\sin x}=2^{2\sin x}$: con la stessa base $2>1$ si confrontano gli esponenti.`,
           r`$\cos^2x=1-\sin^2x$, poi poni $t=\sin x$.`,
           r`Viene $\frac12\lt\sin x\lt1$: disegna la circonferenza goniometrica.` ],
  sol: r`Con base $2>1$ il verso si conserva:
$$2\cos^2x+5\sin x-3>2\sin x\iff2-2\sin^2x+3\sin x-3>0.$$
Con $t=\sin x$: $-2t^2+3t-1>0\iff2t^2-3t+1\lt 0\iff\frac12\lt t\lt 1$.<br><br>
Torniamo a $x$: $\sin x=\frac12$ per $x=\frac\pi6+2k\pi$ o $x=\frac56\pi+2k\pi$, e $\sin x=1$ per $x=\frac\pi2+2k\pi$. Quindi
$$\boxed{\frac\pi6+2k\pi\lt x\lt\frac56\pi+2k\pi,\quad x\ne\frac\pi2+2k\pi,\quad k\in\Z.}$$
<em>Controllo:</em> $x=\frac\pi2$ va escluso perché lì $t=1$ e $2t^2-3t+1=0$, non $\lt 0$. $\blacksquare$` },

{ id: 'E1.18', sez: 1, tema: 'Disequazioni', d: 3,
  t: r`Risolvere $\sqrt{\log^2x-3\log x+2}>2(\log x-1)$, dove $\log$ è il logaritmo naturale. <span class="small muted">(Esercitazione 1)</span>`,
  hints: [ r`Esistenza: $x>0$. Poni $t=\log x$: $\sqrt{t^2-3t+2}>2(t-1)$.`,
           r`La radice esiste per $t\le1$ o $t\ge2$. Per $t\le1$ il secondo membro è $\le0$: basta capire quando la radice è $>0$.`,
           r`Per $t\ge2$ entrambi i membri sono $\ge0$: eleva al quadrato.` ],
  sol: r`Esistenza del logaritmo: $x>0$. Con $t=\log x$: $\sqrt{t^2-3t+2}>2(t-1)$.<br><br>
<strong>Esistenza della radice:</strong> $(t-1)(t-2)\ge0\iff t\le1\vee t\ge2$, cioè $0\lt x\le e$ oppure $x\ge e^2$.<br><br>
<strong>Caso $t\le1$.</strong> Il secondo membro è $\le0$ e la radice è $\ge0$, nulla solo per $t=1$: la disuguaglianza è vera per $t\lt 1$ ($0\lt x\lt e$) e falsa per $t=1$ ($x=e$, dove diventa $0>0$).<br><br>
<strong>Caso $t\ge2$.</strong> Entrambi i membri sono $\ge0$: $t^2-3t+2>4(t-1)^2\iff3t^2-5t+2\lt 0\iff\frac23\lt t\lt 1$, incompatibile con $t\ge2$.<br><br>
$$\boxed{0\lt x\lt e.}$$
<em>Controllo:</em> $x=e^3$, $t=3$: $\sqrt2\approx1{,}41>4$ è falso ✓. $\blacksquare$` },

{ id: 'E1.19', sez: 1, tema: 'Disequazioni', d: 2,
  t: r`Risolvere $\log_2(\arctan x+4)\ge\cos^2x$. <span class="small muted">(Esercitazione 1)</span>`,
  hints: [ r`Non si risolve con i conti: si stimano i due membri.`,
           r`$\arctan x>-\frac\pi2$ per ogni $x$. Quanto vale almeno $\arctan x+4$?`,
           r`$\log_2$ è crescente e $\cos^2x\le1$.` ],
  sol: r`<strong>Dominio.</strong> Serve $\arctan x+4>0$, e poiché $\arctan x>-\frac\pi2$: $\arctan x+4>4-\frac\pi2=\frac12(8-\pi)>0$. Il dominio è tutto $\R$.<br><br>
<strong>Stima.</strong> $\log_2$ è strettamente crescente, e $4-\frac\pi2>4-2=2$, quindi per ogni $x$
$$\log_2(\arctan x+4)>\log_2\!\left(4-\frac\pi2\right)>\log_2 2=1\ge\cos^2x.$$
$$\boxed{\text{vera per ogni }x\in\R.}$$
<em>Morale:</em> quando compaiono funzioni diverse (logaritmo, arcotangente, coseno) che non si possono «mescolare», si cerca una costante che separi i due membri. $\blacksquare$` },

{ id: 'E1.20', sez: 1, tema: 'Insieme di definizione', d: 3,
  t: r`Determinare l'insieme di definizione di $f(x)=\dfrac{\left[\log\left(\sqrt x+\sqrt{|1-x|}\right)\right]^{3/4}}{e^{\sin(x^2)}}$. <span class="small muted">(Esercitazione 1)</span>`,
  hints: [ r`Elenca le condizioni: radice di $x$, argomento del logaritmo, base della potenza $\frac34$, denominatore.`,
           r`$(\dots)^{3/4}=\sqrt[4]{(\dots)^3}$ richiede base $\ge0$ ($q=4$ pari): $\log(\dots)\ge0\iff\sqrt x+\sqrt{|1-x|}\ge1$.`,
           r`Scrivi $\sqrt{|1-x|}\ge1-\sqrt x$ e distingui $x>1$, $x=1$, $0\le x\lt 1$.` ],
  sol: r`<strong>Condizioni:</strong> $x\ge0$; $\sqrt x+\sqrt{|1-x|}>0$; $\log\left(\sqrt x+\sqrt{|1-x|}\right)\ge0$ (potenza $\frac34$, cioè radice quarta); $e^{\sin(x^2)}\ne0$.<br>
L'ultima è sempre vera; la seconda vale per ogni $x\ge0$, perché i due addendi sono $\ge0$ e non si annullano insieme. Resta $\sqrt x+\sqrt{|1-x|}\ge1$, cioè $\sqrt{|1-x|}\ge1-\sqrt x$.
<ul><li>$x>1$: il secondo membro è $\lt 0$, vera.</li><li>$x=1$: $0\ge0$, vera.</li>
<li>$0\le x\lt 1$: entrambi i membri sono $\ge0$, si eleva al quadrato: $1-x\ge1-2\sqrt x+x\iff2\sqrt x(\sqrt x-1)\le0$, vera perché $\sqrt x\ge0$ e $\sqrt x-1\lt 0$.</li></ul>
$$\boxed{\text{dom}\,f=[0,+\infty).}$$ $\blacksquare$` },

{ id: 'E1.21', sez: 1, tema: 'Estremo superiore', d: 2,
  t: r`Trovare $\sup$, $\inf$, ed eventualmente $\max$ e $\min$, di $S=\{\log(1+3x):\ x\in\R,\ |x-2|\le\sqrt x\}$. <span class="small muted">(Esercitazione 1)</span>`,
  hints: [ r`Prima risolvi $|x-2|\le\sqrt x$ (con $x\ge0$): entrambi i membri sono $\ge0$.`,
           r`Viene un intervallo chiuso. Su di esso $x\mapsto\log(1+3x)$ è composizione di funzioni crescenti.` ],
  sol: r`$|x-2|\le\sqrt x$, con $x\ge0$: elevando al quadrato, $x^2-5x+4\le0\iff(x-1)(x-4)\le0\iff1\le x\le4$. Lì $1+3x>0$, quindi il logaritmo è definito.<br><br>
$g(x)=1+3x$ è strettamente crescente e $\log$ pure: la composta $\log(1+3x)$ è strettamente crescente su $[1,4]$. Quindi
$$\min S=\inf S=\log4,\qquad \max S=\sup S=\log13.$$ $\blacksquare$` },

{ id: 'E1.22', sez: 1, tema: 'Estremo superiore', d: 2,
  t: r`Trovare $\sup$, $\inf$, ed eventualmente $\max$ e $\min$, di $S=\left\{x\in\R:\ x>0,\ \cos\frac1x=0\right\}$. <span class="small muted">(Esercitazione 1)</span>`,
  hints: [ r`$\cos t=0\iff t=\frac\pi2+k\pi$. Ricava $x$.`,
           r`Con $x>0$ restano $x=\frac{2}{\pi(1+2k)}$ con $k\in\N$: una successione decrescente.`,
           r`Per l'$\inf$: dato $\eps>0$, trova $k$ con $\frac2{\pi(1+2k)}\lt\eps$.` ],
  sol: r`$\cos\frac1x=0\iff\frac1x=\frac\pi2+k\pi\iff x=\frac{2}{\pi(1+2k)}$, $k\in\Z$; con $x>0$ servono $k\in\N$. Quindi $S=\{a_k\}_{k\in\N}$ con $a_k=\frac2{\pi(1+2k)}$, strettamente decrescente.<br><br>
<strong>Massimo:</strong> $\max S=\sup S=a_0=\frac2\pi$.<br>
<strong>Estremo inferiore: $0$.</strong> (1) $0\lt x$ per ogni $x\in S$. (2) Dato $\eps>0$: $\frac2{\pi(1+2m)}\lt\eps\iff m>\frac12\left(\frac2{\pi\eps}-1\right)$, e un tale $m\in\N$ esiste. Quindi nessun $\eps>0$ è un minorante.<br>
<strong>Minimo:</strong> non esiste, perché $0\notin S$. $\blacksquare$` },

{ id: 'E1.23', sez: 1, tema: 'Estremo superiore', d: 1,
  t: r`Trovare $\sup$, $\inf$, ed eventualmente $\max$ e $\min$, di $S=\left\{x\in\R:\ \log x\ge\sqrt[3]{\sin x}\right\}\cap[e,+\infty)$. <span class="small muted">(Esercitazione 1)</span>`,
  hints: [ r`Non serve risolvere la disuguaglianza: su $[e,+\infty)$ quanto vale almeno $\log x$?`,
           r`E quanto vale al più $\sqrt[3]{\sin x}$?` ],
  sol: r`Per $x\ge e$: $\log x\ge1$. Per ogni $x$: $\sin x\le1$, quindi $\sqrt[3]{\sin x}\le1$. Allora $\log x\ge1\ge\sqrt[3]{\sin x}$ su tutto $[e,+\infty)$, e $S=[e,+\infty)$.
$$\min S=\inf S=e,\qquad\sup S=+\infty,\ \text{nessun massimo}.$$ $\blacksquare$` },

{ id: 'E1.24', sez: 1, tema: 'Estremo superiore', d: 2,
  t: r`Trovare $\sup$, $\inf$, ed eventualmente $\max$ e $\min$, di $S=\{a\in\R:\ \log(x^2-2ax+a)\ \text{è definita per ogni }x\in\R\}$. <span class="small muted">(Esercitazione 1, svolto nell'Esercitazione 2)</span>`,
  hints: [ r`Serve $x^2-2ax+a>0$ per ogni $x$: una parabola rivolta verso l'alto sempre positiva.`,
           r`Quando succede? Guarda il discriminante.` ],
  sol: r`Serve $x^2-2ax+a>0$ per ogni $x\in\R$: la parabola è rivolta verso l'alto, quindi ciò accade se e solo se $\Delta=4a^2-4a=4a(a-1)\lt 0\iff0\lt a\lt 1$.
$$S=(0,1):\quad\sup S=1,\quad\inf S=0,\quad\text{né massimo né minimo}.$$
<em>Controllo:</em> per $a=0$ si ha $x^2$, che si annulla in $0$; per $a=1$ si ha $(x-1)^2$, nulla in $1$: gli estremi sono davvero esclusi. $\blacksquare$` },

{ id: 'E1.25', sez: 1, tema: 'Estremo superiore', d: 2,
  t: r`Trovare $\sup$, $\inf$, ed eventualmente $\max$ e $\min$, di $S=\left\{x\in\R\setminus\{\pm2\}:\ \dfrac{2x+1}{x-2}-\dfrac{5}{2(x+2)}\lt\dfrac12\right\}$. <span class="small muted">(Esercitazione 1, svolto nell'Esercitazione 2)</span>`,
  hints: [ r`Porta tutto a sinistra e fai il denominatore comune $2(x-2)(x+2)$.`,
           r`Il numeratore viene $3x^2+5x+18$: che segno ha?` ],
  sol: r`Portando tutto a primo membro, con denominatore comune $2(x-2)(x+2)$, il numeratore è
$$2(2x+1)(x+2)-5(x-2)-(x-2)(x+2)=3x^2+5x+18.$$
Il suo discriminante è $25-216\lt 0$: è sempre positivo. La disuguaglianza equivale quindi a $(x-2)(x+2)\lt 0\iff-2\lt x\lt 2$.
$$S=(-2,2):\quad\sup S=2,\quad\inf S=-2,\quad\text{né massimo né minimo}.$$ $\blacksquare$` },

{ id: 'E1.26', sez: 1, tema: 'Estremo superiore', d: 3,
  t: r`Trovare $\sup$, $\inf$, ed eventualmente $\max$ e $\min$, di $S=\{x\in\Q:\ x\ge-1,\ x^2-2\le(2-x)(x+\sqrt2)\}$. <span class="small muted">(Esercitazione 2)</span>`,
  hints: [ r`Prima in $\R$: $(x+\sqrt2)(x-\sqrt2)\le(2-x)(x+\sqrt2)$. Raccogli $x+\sqrt2$.`,
           r`In $\R$ viene $[-\sqrt2,\,1+\frac{\sqrt2}2]$. Poi interseca con $[-1,+\infty)$ e con $\Q$.`,
           r`Il $\sup$ è un elemento di $S$? Per rispondere: $1+\frac{\sqrt2}2$ è razionale?` ],
  sol: r`In $\R$: $(x+\sqrt2)(x-\sqrt2)-(2-x)(x+\sqrt2)\le0\iff(x+\sqrt2)(2x-2-\sqrt2)\le0\iff-\sqrt2\le x\le1+\frac{\sqrt2}2$.<br>
Intersecando: $S=\left[-1,\,1+\frac{\sqrt2}2\right]\cap\Q$.<br><br>
<ul><li>$\inf S=-1$, e $-1\in\Q$: $\min S=-1$.</li>
<li>$\sup S=1+\frac{\sqrt2}2$ (i razionali sono densi, quindi se ne trovano vicini quanto si vuole). Ma $1+\frac{\sqrt2}2\notin\Q$: altrimenti $2\left(1+\frac{\sqrt2}2\right)-2=\sqrt2$ sarebbe razionale, assurdo. Quindi <strong>il massimo non esiste</strong>.</li></ul>
<em>Morale:</em> in $\Q$ un insieme limitato può non avere massimo anche se in $\R$ ce l'avrebbe: è l'incompletezza di $\Q$. $\blacksquare$` },

{ id: 'E1.27', sez: 1, tema: 'Estremo superiore', d: 2,
  t: r`Trovare $\sup$, $\inf$, ed eventualmente $\max$ e $\min$, di $S=\{x\in\R:\ x\lt 0,\ |3x+1|\ge|2-2x|\}$. <span class="small muted">(Esercitazione 2, soluzione degli esercizi assegnati)</span>`,
  hints: [ r`Con due valori assoluti, i due membri sono $\ge0$: si può elevare al quadrato.`,
           r`Viene $5x^2+14x-3\ge0$. Poi interseca con $x\lt 0$.` ],
  sol: r`Entrambi i membri sono $\ge0$: $(3x+1)^2\ge(2-2x)^2\iff5x^2+14x-3\ge0\iff x\le-3\ \vee\ x\ge\frac15$.<br>
<span class="small muted">Il tutor arriva allo stesso risultato dividendo per $|2-2x|$ e studiando $\left|\frac{3x+1}{2-2x}\right|\ge1$; il quadrato è più rapido.</span><br><br>
Con $x\lt 0$: $S=(-\infty,-3]$.
$$\max S=\sup S=-3,\qquad\inf S=-\infty,\ \text{nessun minimo}.$$
<em>Controllo:</em> $x=-3$: $|-8|=8\ge|8|=8$ ✓; $x=-1$: $2\ge4$ è falso ✓. $\blacksquare$` },

{ id: 'E1.28', sez: 1, tema: 'Estremo superiore', d: 3,
  t: r`Trovare $\sup$, $\inf$, ed eventualmente $\max$ e $\min$, di $S=\{a\in\R:\ a-a|x|\le|x-1|\ \ \forall x\in\R\}$. <span class="small muted">(Esercitazione 2, soluzione degli esercizi assegnati)</span>`,
  hints: [ r`Scrivi la condizione come $a(1-|x|)\le|x-1|$ e prova valori particolari di $x$: $x=0$ e $|x|$ grande.`,
           r`Da $x=0$ viene $a\le1$; facendo crescere $|x|$ viene $a\ge-1$.`,
           r`Poi verifica che ogni $a\in[-1,1]$ va bene, separando $|x|\le1$ e $|x|>1$.` ],
  sol: r`La condizione è $a(1-|x|)\le|x-1|$ per ogni $x$.<br><br>
<strong>Condizioni necessarie.</strong> Con $x=0$: $a\le1$. Con $x>1$: $-a(x-1)\le x-1$, cioè $a\ge-1$.<br><br>
<strong>Sono sufficienti.</strong> Sia $a\in[-1,1]$.
<ul><li>Se $|x|\le1$: $1-|x|\ge0$, quindi $a(1-|x|)\le1-|x|\le|1-x|$ (disuguaglianza triangolare: $1\le|1-x|+|x|$).</li>
<li>Se $|x|>1$: $a(1-|x|)=-a(|x|-1)\le|x|-1\le|x-1|$.</li></ul>
$$S=[-1,1]:\quad\max S=\sup S=1,\quad\min S=\inf S=-1.$$
<span class="small muted">Il tutor lo risolve confrontando i grafici di $|x-1|$ e di $a(1-|x|)$ al variare di $a$: stesso risultato.</span> $\blacksquare$` },

{ id: 'E1.29', sez: 1, tema: 'Numeri complessi', d: 1,
  t: r`Scrivere in forma algebrica $(2+3i)^2$, $\dfrac{3-i}{3+i}$ e $\dfrac{(1+i)^2}{1-i}$; calcolare $i^{22}$ e $i^{1361}$. <span class="small muted">(Esercitazione 2)</span>`,
  hints: [ r`Per il quoziente si moltiplica sopra e sotto per il coniugato del denominatore.`,
           r`Le potenze di $i$ si ripetono ogni $4$: scrivi l'esponente come $4k+r$.` ],
  sol: r`$(2+3i)^2=4+12i+9i^2=-5+12i$.<br>
$\dfrac{3-i}{3+i}=\dfrac{(3-i)^2}{9+1}=\dfrac{8-6i}{10}=\dfrac45-\dfrac35i$.<br>
$\dfrac{(1+i)^2}{1-i}=\dfrac{2i}{1-i}=\dfrac{2i(1+i)}{2}=i+i^2=-1+i$.<br><br>
<strong>Potenze di $i$:</strong> $i^0=1$, $i^1=i$, $i^2=-1$, $i^3=-i$, poi si ripete. Con $m=4k+r$, $r\in\{0,1,2,3\}$: $i^m=(i^4)^k\,i^r=i^r$.<br>
$22=5\cdot4+2\Rightarrow i^{22}=i^2=-1$; $\ 1361=340\cdot4+1\Rightarrow i^{1361}=i$.<br>
<em>Potenze negative:</em> $i^{-1}=\frac1i=\frac{\bar i}{|i|^2}=-i$. $\blacksquare$` },

{ id: 'E1.30', sez: 1, tema: 'Numeri complessi', d: 1,
  t: r`Calcolare il modulo di $z=-2i(3+i)(2+4i)(1+i)$ e di $w=\dfrac{(3+4i)(-1+2i)}{(-1-i)(3-i)}$. <span class="small muted">(Esercitazione 2)</span>`,
  hints: [ r`Non moltiplicare: il modulo di un prodotto è il prodotto dei moduli.`,
           r`E il modulo di un quoziente è il quoziente dei moduli.` ],
  sol: r`$|z|=|-2i|\cdot|3+i|\cdot|2+4i|\cdot|1+i|=2\cdot\sqrt{10}\cdot\sqrt{20}\cdot\sqrt2=2\cdot\sqrt2\sqrt5\cdot2\sqrt5\cdot\sqrt2=\boxed{40}$.<br><br>
$|w|=\dfrac{|3+4i|\,|-1+2i|}{|-1-i|\,|3-i|}=\dfrac{5\sqrt5}{\sqrt2\sqrt{10}}=\dfrac{5\sqrt5}{2\sqrt5}=\boxed{\dfrac52}$. $\blacksquare$` },

{ id: 'E1.31', sez: 1, tema: 'Numeri complessi', d: 2,
  t: r`Risolvere in $\C$, in forma algebrica, $z\bar z-z+\dfrac i4=0$. <span class="small muted">(Esercitazione 2)</span>`,
  hints: [ r`Con $z=a+ib$: $z\bar z=a^2+b^2$.`,
           r`Un numero complesso è nullo se e solo se parte reale e parte immaginaria sono nulle: viene un sistema reale.` ],
  sol: r`Con $z=a+ib$: $a^2+b^2-a-ib+\frac i4=0\iff(a^2+b^2-a)+i\left(\frac14-b\right)=0$, cioè
$$\begin{cases}a^2+b^2-a=0\\ \frac14-b=0\end{cases}\Longrightarrow b=\frac14,\quad a^2-a+\frac1{16}=0\Longrightarrow a=\frac12\pm\frac{\sqrt3}4.$$
$$\boxed{z_{1,2}=\left(\frac12\pm\frac{\sqrt3}4\right)+\frac14\,i.}$$ $\blacksquare$` },

{ id: 'E1.32', sez: 1, tema: 'Numeri complessi', d: 2,
  t: r`Scrivere in forma trigonometrica ed esponenziale $z=i$ e $z=\dfrac{1}{-3+3i}$. <span class="small muted">(Esercitazione 2)</span>`,
  hints: [ r`Per il secondo conviene passare dal reciproco: $w=-3+3i$, e $\frac1w=\frac{\bar w}{|w|^2}$.`,
           r`Il coniugato ha lo stesso modulo e argomento opposto.` ],
  sol: r`$i=1\cdot\left[\cos\frac\pi2+i\sin\frac\pi2\right]=e^{i\pi/2}$.<br><br>
$w=-3+3i$: $|w|=3\sqrt2$ e $\arg w=\frac34\pi$ (II quadrante). Allora
$$\frac1w=\frac{\bar w}{|w|^2}=\frac{3\sqrt2\,e^{-i\frac34\pi}}{18}=\frac{1}{3\sqrt2}\left[\cos\left(-\tfrac34\pi\right)+i\sin\left(-\tfrac34\pi\right)\right]=\frac{1}{3\sqrt2}\,e^{-i\frac34\pi}.$$
<span class="small muted">Con la convenzione del corso, l'argomento <em>principale</em> sta in $\left[-\frac\pi2,\frac32\pi\right)$: è $\frac54\pi$, che individua lo stesso numero. Come forma trigonometrica va bene qualunque argomento.</span><br>
<em>Controllo:</em> $\frac1{-3+3i}=\frac{-3-3i}{18}=-\frac16-\frac16i$, e $\frac{1}{3\sqrt2}\cos\left(-\frac34\pi\right)=-\frac16$ ✓. $\blacksquare$` },

{ id: 'E1.33', sez: 1, tema: 'Numeri complessi', d: 2,
  t: r`Dato $z=\dfrac{\sqrt3}2-\dfrac i2$, calcolare $z^6$ e $z^{22}$. <span class="small muted">(Esercitazione 2)</span>`,
  hints: [ r`Scrivi $z$ in forma trigonometrica: $|z|=1$, e un argomento è $-\frac\pi6$.`,
           r`De Moivre per $z^6$. Per $z^{22}$ usa $22=3\cdot6+4$.` ],
  sol: r`$|z|=1$ e $z=\cos\left(-\frac\pi6\right)+i\sin\left(-\frac\pi6\right)$. Per de Moivre
$$z^6=\cos(-\pi)+i\sin(-\pi)=-1.$$
$$z^{22}=(z^6)^3\,z^4=(-1)^3z^4=-\left[\cos\left(-\tfrac23\pi\right)+i\sin\left(-\tfrac23\pi\right)\right]=-\left[-\tfrac12-\tfrac{\sqrt3}2i\right]=\boxed{\tfrac12+\tfrac{\sqrt3}2\,i=e^{i\pi/3}}.$$
<em>Controllo diretto:</em> $22\cdot\left(-\frac\pi6\right)=-\frac{11}3\pi\equiv\frac\pi3$ a meno di $4\pi$ ✓. $\blacksquare$` },

{ id: 'E1.34', sez: 1, tema: 'Numeri complessi', d: 3,
  t: r`Risolvere in $\C$: $\dfrac{i}{z^2}=(1+i)\,\bar z\,|z|$. <span class="small muted">(Esercitazione 2)</span>`,
  hints: [ r`Serve $z\ne0$. Forma esponenziale: $z=\rho e^{i\theta}$, $i=e^{i\pi/2}$, $1+i=\sqrt2e^{i\pi/4}$.`,
           r`Uguaglia i moduli e gli argomenti (questi a meno di $2k\pi$).` ],
  sol: r`Con $z=\rho e^{i\theta}$, $\rho>0$:
$$\frac{e^{i\pi/2}}{\rho^2e^{2i\theta}}=\sqrt2e^{i\pi/4}\cdot\rho e^{-i\theta}\cdot\rho\iff e^{i(\frac\pi2-2\theta)}=\sqrt2\rho^4e^{i(\frac\pi4-\theta)}.$$
<strong>Moduli:</strong> $\sqrt2\rho^4=1\Rightarrow\rho=2^{-1/8}$. <strong>Argomenti:</strong> $\frac\pi2-2\theta=\frac\pi4-\theta+2k\pi\Rightarrow\theta=\frac\pi4-2k\pi$: un solo numero complesso.
$$\boxed{z=\frac{e^{i\pi/4}}{\sqrt[8]2}=\frac{1+i}{\sqrt[8]{2^5}}.}$$ $\blacksquare$` },

{ id: 'E1.35', sez: 1, tema: 'Numeri complessi', d: 2,
  t: r`(Prima prova in itinere 2018.) Risolvere in $\C$ $(z+\bar z)(z^6+11i)=0$ e rappresentare le soluzioni. <span class="small muted">(Esercitazione 2)</span>`,
  hints: [ r`Un prodotto è nullo se e solo se lo è uno dei fattori: unisci le soluzioni dei due.`,
           r`$z+\bar z=2\,\Real z$. E $z^6=-11i$: radici seste di $11e^{i\frac32\pi}$.` ],
  sol: r`<strong>$z+\bar z=0$</strong> $\iff\Real z=0$: tutto l'<strong>asse immaginario</strong>.<br><br>
<strong>$z^6=-11i$.</strong> $|-11i|=11$, $\arg(-11i)=\frac32\pi$. Per la formula delle radici:
$$z_k=\sqrt[6]{11}\left[\cos\left(\frac\pi4+k\frac\pi3\right)+i\sin\left(\frac\pi4+k\frac\pi3\right)\right],\quad k=0,\dots,5,$$
cioè gli argomenti $\frac\pi4,\frac7{12}\pi,\frac{11}{12}\pi,\frac54\pi,\frac{19}{12}\pi,\frac{23}{12}\pi$: i vertici di un <strong>esagono regolare</strong> sulla circonferenza di raggio $\sqrt[6]{11}$.<br><br>
Le soluzioni sono l'asse immaginario unito ai sei vertici. $\blacksquare$` },

{ id: 'E1.36', sez: 1, tema: 'Numeri complessi', d: 2,
  t: r`Risolvere in $\C$: $(z-2)^3=-i$. <span class="small muted">(Esercitazione 2, svolto nell'Esercitazione 3)</span>`,
  hints: [ r`Poni $w=z-2$: le soluzioni di $w^3=-i$ sono le radici terze di $-i=e^{-i\pi/2}$.`,
           r`Poi torna a $z=w+2$: è una traslazione di $2$ verso destra.` ],
  sol: r`$w^3=-i=e^{-i\pi/2}$: $w_k=\cos\left(-\frac\pi6+\frac{2\pi}3k\right)+i\sin\left(-\frac\pi6+\frac{2\pi}3k\right)$, $k=0,1,2$:
$$w_0=\frac{\sqrt3}2-\frac12i,\qquad w_1=i,\qquad w_2=-\frac{\sqrt3}2-\frac12i.$$
Con $z=w+2$:
$$\boxed{z_0=\frac{4+\sqrt3-i}{2},\qquad z_1=2+i,\qquad z_2=\frac{4-\sqrt3-i}{2}.}$$
Sono i vertici di un triangolo equilatero sulla circonferenza di centro $2$ e raggio $1$.<br>
<em>Controllo:</em> $(z_1-2)^3=i^3=-i$ ✓. $\blacksquare$` },

{ id: 'E1.37', sez: 1, tema: 'Numeri complessi', d: 2,
  t: r`Risolvere in $\C$: $z^2=\bar z^{\,3}$. <span class="small muted">(Esercitazione 2, svolto nell'Esercitazione 3)</span>`,
  hints: [ r`Forma esponenziale: $z=\rho e^{i\theta}$ e $\bar z=\rho e^{-i\theta}$.`,
           r`Moduli: $\rho^2=\rho^3$, quindi $\rho=0$ o $\rho=1$. Argomenti: $2\theta=-3\theta+2k\pi$.` ],
  sol: r`$\rho^2e^{2i\theta}=\rho^3e^{-3i\theta}$: $\rho^2=\rho^3\Rightarrow\rho=0$ (cioè $z=0$) o $\rho=1$; e $5\theta=2k\pi\Rightarrow\theta=\frac{2k\pi}5$.
$$\boxed{z=0\quad\text{e}\quad z_k=e^{\frac{2k\pi}5i},\ k=0,1,2,3,4:}$$
l'origine e le cinque radici quinte dell'unità, vertici di un pentagono regolare. $\blacksquare$` },

{ id: 'E1.38', sez: 1, tema: 'Numeri complessi', d: 3,
  t: r`Risolvere in $\C$: $(z+\bar z)\left(\dfrac1{z^2}+2z^2-i\sqrt3\,\dfrac{\bar z}{z}\right)=0$. <span class="small muted">(Esercitazione 2, svolto nell'Esercitazione 3)</span>`,
  hints: [ r`Serve $z\ne0$. Primo fattore: $z+\bar z=0$.`,
           r`Secondo: moltiplica per $z^2$ e usa $z\bar z=|z|^2$: $2z^4=-1+\sqrt3|z|^2i$.`,
           r`In forma esponenziale uguaglia i moduli: $2\rho^4=\sqrt{1+3\rho^4}$. Con $t=\rho^4$ è un'equazione di secondo grado.` ],
  sol: r`Serve $z\ne0$.<br>
<strong>Primo fattore:</strong> $z+\bar z=2\,\Real z=0$: l'asse immaginario <strong>senza l'origine</strong>.<br><br>
<strong>Secondo fattore.</strong> Moltiplicando per $z^2$: $1+2z^4-i\sqrt3|z|^2=0$, cioè $2z^4=-1+\sqrt3\rho^2i$. Moduli: $2\rho^4=\sqrt{1+3\rho^4}\Rightarrow4\rho^8=1+3\rho^4$; con $t=\rho^4$: $4t^2-3t-1=0\Rightarrow t=1$ (l'altra, $-\frac14$, è negativa). Quindi $\rho=1$ e $2e^{4i\theta}=-1+\sqrt3i=2e^{i\frac23\pi}$ (II quadrante: $\arctan(-\sqrt3)+\pi=\frac23\pi$).<br>
$4\theta=\frac23\pi+2k\pi\Rightarrow\theta=\frac\pi6+k\frac\pi2$, $k=0,1,2,3$:
$$z_0=\tfrac{\sqrt3}2+\tfrac12i,\quad z_1=-\tfrac12+\tfrac{\sqrt3}2i,\quad z_2=-z_0,\quad z_3=-z_1.$$
Soluzioni: l'asse immaginario privato dell'origine, più i quattro vertici del quadrato. $\blacksquare$` },

{ id: 'E1.39', sez: 1, tema: 'Numeri complessi', d: 3,
  t: r`Risolvere in $\C$: $z^2+\dfrac i{z^2}=-\dfrac{\bar z^{\,2}}{2}$. <span class="small muted">(Esercitazione 2, svolto nell'Esercitazione 3)</span>`,
  hints: [ r`Moltiplica per $z^2$ ($z\ne0$) e usa $z^2\bar z^2=|z|^4$: $z^4=-\frac{|z|^4}2-i$.`,
           r`Uguaglia i moduli: $\rho^4=\sqrt{\frac{\rho^8}4+1}$.`,
           r`Trovato $\rho$, il secondo membro è un numero preciso: scrivilo in forma esponenziale e prendi le radici quarte.` ],
  sol: r`Moltiplicando per $z^2$: $z^4+i=-\frac{|z|^4}2$, cioè $z^4=w:=-\frac{\rho^4}2-i$.<br>
<strong>Moduli:</strong> $\rho^4=\sqrt{\frac{\rho^8}4+1}\Rightarrow\frac34\rho^8=1\Rightarrow\rho=\left(\frac43\right)^{1/8}$.<br>
Allora $w=-\frac1{\sqrt3}-i$, con $|w|=\frac2{\sqrt3}$ e argomento $\arctan\sqrt3+\pi=\frac43\pi$ (III quadrante).<br>
<strong>Argomenti:</strong> $4\theta=\frac43\pi+2k\pi\Rightarrow\theta=\frac\pi3+k\frac\pi2$.
$$\boxed{z_k=\left(\tfrac43\right)^{1/8}e^{i\left(\frac\pi3+k\frac\pi2\right)},\quad k=0,1,2,3,}$$
con $z_2=-z_0$ e $z_3=-z_1$. $\blacksquare$` },

{ id: 'E1.40', sez: 1, tema: 'Numeri complessi', d: 2,
  t: r`Rappresentare nel piano complesso:
<ol><li>$A=\left\{2\le|z|\le3,\ \frac\pi6\le\arg z\le\frac\pi3\right\}$ e $B=\left\{\frac{-1+i}{\sqrt2}\,z:\ z\in A\right\}$;</li>
<li>$A=\{0\le\Real z\le1,\ 0\le\Imag z\le1\}$ e $B=\{iz+1+i:\ z\in A\}$;</li>
<li>$A=\{(\Real z-2)^2+(\Imag z+1)^2=1\}$, $B=\{3z:\ z\in A\}$, $C=\left\{\frac1i\,w+2:\ w\in B\right\}$.</li></ol>
<span class="small muted">(Esercitazione 3)</span>`,
  hints: [ r`Moltiplicare per $e^{i\varphi}$ ruota di $\varphi$; per un reale $r>0$ dilata; sommare una costante trasla.`,
           r`$\frac{-1+i}{\sqrt2}=e^{i\frac34\pi}$, $\ i=e^{i\pi/2}$, $\ \frac1i=-i=e^{-i\pi/2}$.` ],
  sol: r`<strong>1.</strong> $A$ è uno spicchio di corona circolare fra i raggi $2$ e $3$ e gli angoli $\frac\pi6$, $\frac\pi3$. Poiché $\frac{-1+i}{\sqrt2}=e^{i\frac34\pi}$ ha modulo $1$, $B$ è $A$ <strong>ruotato di $\frac34\pi$</strong>: stessi raggi, angoli fra $\frac{11}{12}\pi$ e $\frac{13}{12}\pi$.<br><br>
<strong>2.</strong> $A$ è il quadrato $[0,1]\times[0,1]$. Moltiplicare per $i$ ruota di $\frac\pi2$ in senso antiorario: $[-1,0]\times[0,1]$; $+1$ trasla a destra: $[0,1]\times[0,1]$; $+i$ trasla in alto: $B=[0,1]\times[1,2]$.<br><br>
<strong>3.</strong> $A$ è la circonferenza di centro $P=2-i$ e raggio $1$. $B$: moltiplicare per $3$ dilata, quindi centro $3P=6-3i$ e raggio $3$. $C$: $\frac1i=-i$ ruota di $\frac\pi2$ in senso <strong>orario</strong> e poi $+2$ trasla: centro $-i(6-3i)+2=-1-6i$, raggio $3$.<br>
<em>Controllo:</em> il centro si trasforma come un punto qualsiasi: $-i\cdot6+(-i)(-3i)+2=-6i-3+2$ ✓. $\blacksquare$` },

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

{ id: 'E2.14', sez: 2, tema: 'Permanenza del segno e confronto', d: 1,
  t: r`Sia $(a_n)$ una successione convergente ad $a$.
<ol><li>Se $2\le a_n\le5$ per ogni $n$, dimostrare che $2\le a\le5$.</li>
<li>Se $a_n\lt 5$ per ogni $n$, è vero che $a\lt 5$?</li>
<li>Se $a_n\to a$ e $a_n^2\le a_n$ per ogni $n$, dimostrare che $0\le a\le1$.</li></ol>`,
  hints: [ r`Una costante è una successione: $b_n=2$ tende a $2$. Usa la proprietà del confronto due volte.`,
           r`Al limite «$\lt$» diventa «$\le$»: cerca una successione che si avvicina a $5$ da sotto.`,
           r`Per l'algebra dei limiti $a_n^2\to a^2$. Applica il confronto ad $a_n^2\le a_n$ e risolvi la disuguaglianza in $a$.` ],
  sol: r`<strong>1.</strong> Le successioni costanti $b_n=2$ e $c_n=5$ tendono a $2$ e a $5$. Da $a_n\ge b_n$ e dalla proprietà del confronto segue $a\ge2$; da $c_n\ge a_n$ segue $5\ge a$. Quindi $2\le a\le5$.<br><br>
<strong>2.</strong> <strong>No.</strong> Controesempio: $a_n=5-\frac1n\lt 5$ per ogni $n\ge1$, ma $a_n\to5$. Si può concludere solo $a\le5$: passando al limite la disuguaglianza stretta diventa larga.<br><br>
<strong>3.</strong> Per l'algebra dei limiti $a_n^2\to a^2$. Da $a_n^2\le a_n$ e dalla proprietà del confronto: $a^2\le a$, cioè $a(a-1)\le0$, cioè $0\le a\le1$.<br>
<em>Controllo:</em> con $a_n=\frac12+\frac1{4n}$ si ha $a_n\in\left(\frac12,1\right)$, quindi $a_n^2\le a_n$, e il limite $\frac12$ sta in $[0,1]$ ✓.<br><br>
<em>Morale:</em> il confronto si applica anche alle costanti, e trasforma una disuguaglianza fra successioni in una disuguaglianza fra limiti, sempre larga. $\blacksquare$` },

/* ====== SEZIONE 2: dall'Esercitazione 3 (soluzioni del tutor) ====== */
{ id: 'E2.15', sez: 2, tema: 'Insieme di definizione', d: 2,
  t: r`Trovare il dominio di $f(x)=\dfrac{\log\big(\tan(\arcsin x)\big)}{(1-2x)^{2/3}}$. <span class="small muted">(Esercitazione 3)</span>`,
  hints: [ r`Dall'interno verso l'esterno: $\arcsin$ vuole $x\in[-1,1]$; $\tan$ vuole un argomento diverso da $\pm\frac\pi2$.`,
           r`Il logaritmo vuole $\tan(\arcsin x)>0$, cioè $\arcsin x\in\left(0,\frac\pi2\right)$.`,
           r`$(1-2x)^{2/3}=\sqrt[3]{(1-2x)^2}$ è definita ovunque ($q=3$ dispari), ma sta al denominatore.` ],
  sol: r`<ul><li>$\arcsin x$: $x\in[-1,1]$;</li>
<li>$\tan(\arcsin x)$: $\arcsin x\ne\pm\frac\pi2\iff x\in(-1,1)$;</li>
<li>$\log(\dots)$: $\tan(\arcsin x)>0\iff\arcsin x>0\iff x\in(0,1)$;</li>
<li>denominatore: $(1-2x)^{2/3}\ne0\iff x\ne\frac12$.</li></ul>
$$\boxed{\text{dom}\,f=(0,1)\setminus\left\{\tfrac12\right\}.}$$ $\blacksquare$` },

{ id: 'E2.16', sez: 2, tema: 'Insieme di definizione', d: 1,
  t: r`Trovare il dominio di $g(x)=\dfrac{\log|1-\sin(2x)|}{\sqrt{\cos x+2}}$. <span class="small muted">(Esercitazione 3)</span>`,
  hints: [ r`Quanto vale al minimo $\cos x+2$?`,
           r`$|1-\sin2x|\ge0$ sempre: il logaritmo chiede solo che non sia $0$.` ],
  sol: r`$-1\le\cos x\le1\Rightarrow1\le\cos x+2\le3$: radice e frazione non danno problemi.<br>
Il logaritmo chiede $|1-\sin2x|>0\iff\sin2x\ne1\iff2x\ne\frac\pi2+2k\pi\iff x\ne\frac\pi4+k\pi$.
$$\boxed{\text{dom}\,g=\R\setminus\left\{\tfrac\pi4+k\pi:\ k\in\Z\right\}.}$$ $\blacksquare$` },

{ id: 'E2.17', sez: 2, tema: 'Insieme di definizione', d: 3,
  t: r`Trovare il dominio di $f(x)=\arcsin(\arccos x)\cdot\log\big(x|x|-2x+3\big)$. <span class="small muted">(Esercitazione 3)</span>`,
  hints: [ r`$\arcsin$ vuole l'argomento in $[-1,1]$: serve $-1\le\arccos x\le1$, con $x\in[-1,1]$.`,
           r`$\arccos x\ge0$ sempre; $\arccos x\le1\iff x\ge\cos1$, perché $\arccos$ è decrescente.`,
           r`Su $[\cos1,1]$ si ha $x>0$, quindi $|x|=x$: l'argomento del logaritmo è $x^2-2x+3$.` ],
  sol: r`<strong>$\arcsin(\arccos x)$.</strong> Serve $x\in[-1,1]$ e $-1\le\arccos x\le1$. La prima disuguaglianza è sempre vera ($\arccos x\in[0,\pi]$); la seconda, poiché $\arccos$ è strettamente decrescente e $\arccos(\cos1)=1$, dà $x\ge\cos1$. Quindi $x\in[\cos1,1]$, e $\cos1>0$ perché $1\lt\frac\pi2$.<br><br>
<strong>Logaritmo.</strong> Per $x>0$: $x|x|-2x+3=x^2-2x+3$, con $\Delta=4-12\lt 0$: sempre positivo.
$$\boxed{\text{dom}\,f=[\cos1,\,1].}$$ $\blacksquare$` },

{ id: 'E2.18', sez: 2, tema: 'Funzione inversa', d: 3,
  t: r`Sia $f(x)=\arctan\left(\log\dfrac{x-1}{x+1}\right)$.
<ol><li>Determinarne il dominio.</li><li>Verificare che è iniettiva.</li><li>Scrivere esplicitamente l'inversa e l'immagine.</li></ol>
<span class="small muted">(Esercitazione 3)</span>`,
  hints: [ r`$\arctan$ e $\log$ sono iniettive: basta che lo sia $g(x)=\frac{x-1}{x+1}$.`,
           r`Per l'inversa risolvi $f(x)=y$ in $x$: serve $y\in\left(-\frac\pi2,\frac\pi2\right)$, poi $\log g(x)=\tan y$.`,
           r`Arrivi a $x=\frac{1+e^{\tan y}}{1-e^{\tan y}}$: per quali $y$ esiste?` ],
  sol: r`<strong>1.</strong> Solo il logaritmo pone condizioni: $\frac{x-1}{x+1}>0\iff x\lt -1\vee x>1$. Dominio: $(-\infty,-1)\cup(1,+\infty)$.<br><br>
<strong>2.</strong> Composizione di iniettive è iniettiva; basta $g(x)=\frac{x-1}{x+1}$: $g(x)=g(y)\iff(x-1)(y+1)=(x+1)(y-1)\iff2x=2y$.<br><br>
<strong>3.</strong> $f(x)=y$ richiede $y\in\left(-\frac\pi2,\frac\pi2\right)$ e poi
$$\log\frac{x-1}{x+1}=\tan y\iff x-1=e^{\tan y}(x+1)\iff x=\frac{1+e^{\tan y}}{1-e^{\tan y}},$$
che esiste per $e^{\tan y}\ne1$, cioè $y\ne0$. Quindi
$$\text{Im}\,f=\left(-\tfrac\pi2,\tfrac\pi2\right)\setminus\{0\},\qquad f^{-1}(y)=\frac{1+e^{\tan y}}{1-e^{\tan y}}.$$
<em>Controllo:</em> $f(3)=\arctan\log\frac12$; con $y=\arctan\log\frac12$ si ha $e^{\tan y}=\frac12$ e $f^{-1}(y)=\frac{3/2}{1/2}=3$ ✓. $\blacksquare$` },

{ id: 'E2.19', sez: 2, tema: 'Iniettività', d: 2,
  t: r`Sia $f(x)=e^{\sqrt{|x^2-2x-3|}}$.
<ol><li>Determinarne dominio e immagine.</li><li>Verificare che non è iniettiva.</li><li>Trovare sottoinsiemi del dominio su cui è iniettiva, la cui unione dia tutto il dominio.</li></ol>
<span class="small muted">(Esercitazione 3)</span>`,
  hints: [ r`$|x^2-2x-3|\ge0$ sempre: il dominio è $\R$.`,
           r`$x^2-2x-3=(x+1)(x-3)$: dove si annulla $f$ vale $e^0=1$.`,
           r`$|x^2-2x-3|$ è monotòna su $(-\infty,-1]$, $[-1,1]$, $[1,3]$, $[3,+\infty)$.` ],
  sol: r`<strong>1.</strong> Dominio $\R$. L'immagine di $|x^2-2x-3|$ è $[0,+\infty)$, quella di $\sqrt{\ }$ su $[0,+\infty)$ è $[0,+\infty)$, e $e^t$ per $t\ge0$ ha immagine $[1,+\infty)$. Quindi $\text{Im}\,f=[1,+\infty)$.<br><br>
<strong>2.</strong> $f(-1)=e^0=1=f(3)$: non è iniettiva.<br><br>
<strong>3.</strong> $|x^2-2x-3|$ è iniettiva separatamente su $I_1=(-\infty,-1]$, $I_2=[-1,1]$, $I_3=[1,3]$, $I_4=[3,+\infty)$, e $e^x$, $\sqrt x$ sono iniettive: $f$ lo è su ciascun $I_j$, e $I_1\cup I_2\cup I_3\cup I_4=\R$. $\blacksquare$` },

{ id: 'E2.20', sez: 2, tema: 'Monotonia e parità', d: 1,
  t: r`<ol><li>Quali fra $f(x)=\log(2-x^5)$, $g(x)=\sqrt{\arcsin(x^3+x)}$, $h(x)=x\sin x$ sono monotòne nel proprio dominio?</li>
<li>Quali fra $\log|x|+x^4$, $1+x^6$, $\arctan(x^3)$, $1+x^5$ sono pari o dispari?</li></ol>
<span class="small muted">(Esercitazione 3)</span>`,
  hints: [ r`Composizione di due strettamente crescenti è crescente; di una crescente e una decrescente è decrescente.`,
           r`Per $h$ basta un controesempio con tre punti. Per la parità calcola $f(-x)$, dopo aver controllato che il dominio sia simmetrico.` ],
  sol: r`<strong>1.</strong> $f$: dominio $x\lt\sqrt[5]2$; $2-x^5$ è strettamente decrescente e $\log$ crescente, quindi $f$ è <strong>strettamente decrescente</strong>.<br>
$g$: $x^3+x$, $\arcsin$ e $\sqrt{\ }$ sono strettamente crescenti, quindi $g$ è <strong>strettamente crescente</strong> sul suo dominio.<br>
$h$: <strong>non monotòna</strong>: $0\lt\frac\pi2\lt\pi$ ma $h(0)=h(\pi)=0$ e $h\left(\frac\pi2\right)=\frac\pi2$.<br><br>
<strong>2.</strong> $\log|x|+x^4$ (dominio $\R\setminus\{0\}$): <strong>pari</strong>. $1+x^6$: <strong>pari</strong>. $\arctan(x^3)$: <strong>dispari</strong>, composizione di due dispari. $1+x^5$: <strong>né pari né dispari</strong>, perché $1-x^5$ non è né $1+x^5$ né $-(1+x^5)$. $\blacksquare$` },

{ id: 'E2.21', sez: 2, tema: 'Estremi di successioni', d: 2,
  t: r`Stabilire se $a_n=\log\dfrac{n+3}{n+1}$ e $b_n=\dfrac1{n^2+1}+(-1)^nn+n$ ($n\in\N$) sono limitate superiormente o inferiormente; calcolarne $\sup$ e $\inf$. <span class="small muted">(Esercitazione 3)</span>`,
  hints: [ r`$\frac{n+3}{n+1}=1+\frac2{n+1}$: che monotonia ha $a_n$?`,
           r`Per l'$\inf$ di $a_n$ verifica $a_n\to0$ con la definizione.`,
           r`$b_n$: separa $n$ pari ($\frac1{n^2+1}+2n$) da $n$ dispari ($\frac1{n^2+1}$).` ],
  sol: r`<strong>$a_n$.</strong> $a_n=\log\left(1+\frac2{n+1}\right)$: composizione di $\log$ crescente e di $1+\frac2{n+1}$ strettamente decrescente, quindi <strong>strettamente decrescente</strong>. $\max=\sup=a_0=\log3$. Inoltre $a_n>\log1=0$.<br>
$a_n\to0$: dato $\eps>0$, $\log\left(1+\frac2{n+1}\right)\lt\eps\iff n>\frac{2}{e^\eps-1}-1$, quindi basta $\nu_\eps=\left[\frac2{e^\eps-1}-1\right]+1$. Allora $\inf a_n=0$, e non è minimo.<br><br>
<strong>$b_n$.</strong> Per $n$ pari $b_n=\frac1{n^2+1}+2n$, per $n$ dispari $b_n=\frac1{n^2+1}$. Sempre $b_n>0$: limitata inferiormente. Sui pari $b_n\to+\infty$: $\sup b_n=+\infty$. Sui dispari $b_n\to0$: $\inf b_n=0$, non raggiunto. Le due sottosuccessioni hanno limiti diversi: $\lim b_n$ <strong>non esiste</strong>. $\blacksquare$` },

{ id: 'E2.22', sez: 2, tema: 'Definizione di limite', d: 2,
  t: r`Verificare con la definizione che $\displaystyle\lim_{n\to\infty}\frac{n}{n^2+2}=0$, mentre $\displaystyle\lim_{n\to\infty}\log n\cdot\left|\sin\left(\frac\pi2n\right)\right|$ non esiste. <span class="small muted">(Esercitazione 3)</span>`,
  hints: [ r`$0\lt\frac{n}{n^2+2}\lt\frac n{n^2}=\frac1n$: basta $\frac1n\lt\eps$.`,
           r`Per la seconda guarda gli $n$ pari e quelli dispari: quanto vale $\left|\sin\frac{\pi n}2\right|$?`,
           r`Escludi sia un limite finito sia $+\infty$ (non può essere $-\infty$, perché i termini sono $\ge0$).` ],
  sol: r`<strong>1.</strong> $0\lt\frac{n}{n^2+2}\lt\frac1n\lt\eps$ per $n>\frac1\eps$: basta $\nu_\eps=\left[\frac1\eps\right]+1$.<br><br>
<strong>2.</strong> Sia $b_n=\log n\cdot\left|\sin\frac{\pi n}2\right|$. Per $n$ dispari $\left|\sin\frac{\pi n}2\right|=1$ e $b_n=\log n\to+\infty$; per $n$ pari $b_n=0$.
<ul><li>Un limite finito $\ell$ non c'è: sui dispari $|b_n-\ell|\lt\eps$ non può valere definitivamente, perché $\log n\to+\infty$.</li>
<li>Nemmeno $+\infty$: dovrebbe essere $b_n>M$ definitivamente, ma $b_n=0$ per ogni $n$ pari.</li></ul>
Il limite non esiste. <span class="small muted">Più rapido: due sottosuccessioni con limiti diversi, $0$ e $+\infty$.</span> $\blacksquare$` },

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
