/* ============================================================
   formulario.js — la «teoria della pratica» della prima parte
   Ogni blocco: { id, sez, titolo, intro, righe: [{ q, a }], trappole: [...], temi: [...] }
     q = che cosa ti chiedi (resta visibile)      a = che cosa devi sapere (coperta in ripasso)
     temi = temi di esercizi.js su cui esercitarsi
   Convenzioni del corso: Bernoulli con h > -1, argomento principale in [-π/2, 3π/2),
   radici n-esime con w = Re^{iφ}, z = re^{iθ}, h = 0, …, m-1.
   ============================================================ */
(function () {
  'use strict';
  const r = String.raw;

  const F = [

  /* ===================== SEZIONE 1 ===================== */
  {
    id: 'f-algebra', sez: 1, titolo: 'Algebra di base e segno di un polinomio',
    intro: r`Tutto quello che serve prima ancora di cominciare una disequazione.`,
    righe: [
      { q: r`$a^2-b^2$`, a: r`$(a-b)(a+b)$` },
      { q: r`$(a\pm b)^2$ e $(a\pm b)^3$`, a: r`$a^2\pm2ab+b^2$; $\ a^3\pm3a^2b+3ab^2\pm b^3$` },
      { q: r`$a^3-b^3$ e $a^3+b^3$`, a: r`$(a-b)(a^2+ab+b^2)$; $\ (a+b)(a^2-ab+b^2)$` },
      { q: r`Radici di $ax^2+bx+c=0$`, a: r`$x_{1,2}=\dfrac{-b\pm\sqrt\Delta}{2a}$, $\ \Delta=b^2-4ac$; scomposizione $a(x-x_1)(x-x_2)$` },
      { q: r`Segno di $ax^2+bx+c$ con $\Delta>0$`, a: r`Segno di $a$ <strong>fuori</strong> dalle radici, segno opposto <strong>fra</strong> le radici` },
      { q: r`… con $\Delta=0$ e con $\Delta\lt0$`, a: r`$\Delta=0$: segno di $a$ ovunque tranne in $x_1$, dove vale $0$. $\ \Delta\lt0$: sempre il segno di $a$` },
      { q: r`Disequazione fratta $\dfrac{N(x)}{D(x)}\ge0$`, a: r`Studia il segno di $N$ e di $D$ separatamente, metti tutto in una tabella dei segni, escludi gli zeri di $D$. <strong>Mai</strong> moltiplicare per $D$ senza conoscerne il segno` },
      { q: r`Prodotto di più fattori $\ge0$`, a: r`Tabella dei segni: un fattore per riga, poi la regola dei segni colonna per colonna` }
    ],
    trappole: [
      r`Portare tutto a sinistra e fare «denominatore comune» prima di studiare il segno: in una disequazione non si può semplificare un fattore di segno sconosciuto.`
    ],
    temi: ['Disequazioni']
  },
  {
    id: 'f-dominio', sez: 1, titolo: 'Insieme di definizione: le condizioni da imporre',
    intro: r`Prima di risolvere qualunque cosa, si scrivono le condizioni di esistenza.`,
    righe: [
      { q: r`$\sqrt[n]{f(x)}$ con $n$ pari`, a: r`$f(x)\ge0$` },
      { q: r`$\sqrt[n]{f(x)}$ con $n$ dispari`, a: r`Nessuna condizione` },
      { q: r`$\log_a f(x)$`, a: r`$f(x)>0$ (e base $a>0$, $a\ne1$)` },
      { q: r`$\dfrac{N(x)}{D(x)}$`, a: r`$D(x)\ne0$` },
      { q: r`$f(x)^{g(x)}$ con esponente variabile`, a: r`$f(x)>0$, perché si scrive $e^{g(x)\log f(x)}$` },
      { q: r`$\tan f(x)$`, a: r`$f(x)\ne\dfrac\pi2+k\pi$, $k\in\Z$` },
      { q: r`$\arcsin f(x)$, $\arccos f(x)$`, a: r`$-1\le f(x)\le1$` },
      { q: r`$x^{p/q}$ con $q$ dispari (frazione ridotta)`, a: r`Definita su tutto $\R$ se $\frac pq>0$, su $\R\setminus\{0\}$ se $\frac pq\lt0$: convenzione del corso (molti libri la definiscono solo per $x\ge0$)` }
    ],
    trappole: [ r`$\log(x^2)=2\log|x|$, non $2\log x$: il primo è definito per $x\ne0$, il secondo solo per $x>0$.` ],
    temi: ['Insieme di definizione', 'Funzioni elementari']
  },
  {
    id: 'f-modulo', sez: 1, titolo: 'Disequazioni con il valore assoluto',
    intro: r`$|x|=x$ se $x\ge0$, $|x|=-x$ se $x\lt0$. Geometricamente $|a-b|$ è la distanza fra $a$ e $b$.`,
    righe: [
      { q: r`$|f(x)|\lt k$ con $k>0$`, a: r`$-k\lt f(x)\lt k$ (sistema: le due condizioni insieme)` },
      { q: r`$|f(x)|\lt k$ con $k\le0$`, a: r`Nessuna soluzione` },
      { q: r`$|f(x)|>k$ con $k\ge0$`, a: r`$f(x)\lt-k\ \ \lor\ \ f(x)>k$ (unione)` },
      { q: r`$|f(x)|>k$ con $k\lt0$`, a: r`Sempre vera (dove $f$ è definita)` },
      { q: r`$|f(x)|\lt g(x)$`, a: r`$-g(x)\lt f(x)\lt g(x)$: se $g(x)\le0$ il sistema non ha soluzioni da solo` },
      { q: r`$|f(x)|>g(x)$`, a: r`$f(x)\lt-g(x)\ \lor\ f(x)>g(x)$: dove $g(x)\lt0$ è automaticamente vera` },
      { q: r`$|f(x)|=|g(x)|$`, a: r`$f(x)=g(x)\ \lor\ f(x)=-g(x)$` },
      { q: r`$|f(x)|\lt|g(x)|$`, a: r`$f(x)^2\lt g(x)^2$ (entrambi i membri sono $\ge0$, quindi si può elevare al quadrato)` },
      { q: r`Più valori assoluti`, a: r`Trova gli zeri di ciascun argomento, dividi la retta in intervalli, in ogni intervallo togli i moduli con il segno giusto, risolvi, <strong>interseca con l'intervallo</strong>, poi unisci` },
      { q: r`Disuguaglianza triangolare e sua inversa`, a: r`$|a+b|\le|a|+|b|$; $\ \bigl||a|-|b|\bigr|\le|a-b|$` }
    ],
    trappole: [ r`Dimenticare di intersecare con l'intervallo in cui hai tolto i moduli: la soluzione trovata in un caso vale solo dentro quel caso.` ],
    temi: ['Valore assoluto', 'Disequazioni']
  },
  {
    id: 'f-radici', sez: 1, titolo: 'Disequazioni irrazionali',
    intro: r`Con radice di indice pari si può elevare al quadrato solo se i due membri sono non negativi.`,
    righe: [
      { q: r`$\sqrt{f(x)}\lt g(x)$`, a: r`$\begin{cases}f(x)\ge0\\ g(x)>0\\ f(x)\lt g(x)^2\end{cases}$` },
      { q: r`$\sqrt{f(x)}\le g(x)$`, a: r`$\begin{cases}f(x)\ge0\\ g(x)\ge0\\ f(x)\le g(x)^2\end{cases}$` },
      { q: r`$\sqrt{f(x)}>g(x)$`, a: r`$\begin{cases}g(x)\lt0\\ f(x)\ge0\end{cases}\ \cup\ \begin{cases}g(x)\ge0\\ f(x)>g(x)^2\end{cases}$` },
      { q: r`$\sqrt{f(x)}\ge g(x)$`, a: r`$\begin{cases}g(x)\lt0\\ f(x)\ge0\end{cases}\ \cup\ \begin{cases}g(x)\ge0\\ f(x)\ge g(x)^2\end{cases}$` },
      { q: r`$\sqrt{f(x)}=g(x)$`, a: r`$g(x)\ge0$ e $f(x)=g(x)^2$` },
      { q: r`$\sqrt{f(x)}\lt\sqrt{g(x)}$`, a: r`$0\le f(x)\lt g(x)$` },
      { q: r`$\sqrt[3]{f(x)}\lt g(x)$ (indice dispari)`, a: r`$f(x)\lt g(x)^3$: nessuna condizione, l'elevamento a potenza dispari conserva il verso` }
    ],
    trappole: [ r`In $\sqrt f>g$ il caso $g\lt0$ è quello che si dimentica: lì la disequazione è vera ovunque la radice esiste.` ],
    temi: ['Disequazioni']
  },
  {
    id: 'f-explog', sez: 1, titolo: 'Esponenziali e logaritmi',
    intro: r`Il verso si conserva se la base è maggiore di $1$, si inverte se è fra $0$ e $1$.`,
    righe: [
      { q: r`$\log(xy)$, $\ \log\frac xy$, $\ \log x^\alpha$ ($x,y>0$)`, a: r`$\log x+\log y$; $\ \log x-\log y$; $\ \alpha\log x$` },
      { q: r`Cambio di base`, a: r`$\log_a x=\dfrac{\log x}{\log a}$; $\ a^x=e^{x\log a}$; $\ a^{\log_a x}=x$` },
      { q: r`$a^{f(x)}\lt a^{g(x)}$`, a: r`$f(x)\lt g(x)$ se $a>1$; $\ f(x)>g(x)$ se $0\lt a\lt1$` },
      { q: r`$a^{f(x)}\lt b$`, a: r`Se $b\le0$ nessuna soluzione; se $b>0$: $f(x)\lt\log_a b$ per $a>1$, $f(x)>\log_a b$ per $0\lt a\lt1$` },
      { q: r`$\log_a f(x)\lt\log_a g(x)$`, a: r`$0\lt f(x)\lt g(x)$ se $a>1$; $\ f(x)>g(x)>0$ se $0\lt a\lt1$` },
      { q: r`$\log_a f(x)\lt c$`, a: r`$0\lt f(x)\lt a^c$ se $a>1$; $\ f(x)>a^c$ se $0\lt a\lt1$` },
      { q: r`Segno di $\log_a x$`, a: r`Con $a>1$: negativo in $(0,1)$, nullo in $1$, positivo in $(1,+\infty)$` },
      { q: r`Disequazione in $a^x$ o in $\log x$ che si ripete`, a: r`Sostituzione $t=a^x$ (ricorda $t>0$) o $t=\log x$, risolvi in $t$, poi torna indietro` }
    ],
    trappole: [ r`$\log(a+b)\ne\log a+\log b$, e $\log_{1/2}$ è decrescente: con base fra $0$ e $1$ il verso si gira.` ],
    temi: ['Disequazioni', 'Funzioni elementari']
  },
  {
    id: 'f-gonio', sez: 1, titolo: 'Goniometria essenziale',
    intro: r`Il minimo che serve per gli esercizi e per i limiti notevoli.`,
    righe: [
      { q: r`Relazione fondamentale e tangente`, a: r`$\sin^2x+\cos^2x=1$; $\ \tan x=\dfrac{\sin x}{\cos x}$` },
      { q: r`$\sin$ e $\cos$ in $0,\ \frac\pi6,\ \frac\pi4,\ \frac\pi3,\ \frac\pi2$`, a: r`$\sin$: $0,\ \frac12,\ \frac{\sqrt2}2,\ \frac{\sqrt3}2,\ 1$; $\ \cos$: $1,\ \frac{\sqrt3}2,\ \frac{\sqrt2}2,\ \frac12,\ 0$` },
      { q: r`$\sin(\alpha\pm\beta)$ e $\cos(\alpha\pm\beta)$`, a: r`$\sin\alpha\cos\beta\pm\cos\alpha\sin\beta$; $\ \cos\alpha\cos\beta\mp\sin\alpha\sin\beta$` },
      { q: r`Duplicazione`, a: r`$\sin2\alpha=2\sin\alpha\cos\alpha$; $\ \cos2\alpha=\cos^2\alpha-\sin^2\alpha=1-2\sin^2\alpha=2\cos^2\alpha-1$` },
      { q: r`Simmetrie`, a: r`$\sin(-x)=-\sin x$, $\cos(-x)=\cos x$; $\ \sin(\pi-x)=\sin x$, $\cos(\pi-x)=-\cos x$; $\ \sin\left(x+\frac\pi2\right)=\cos x$` },
      { q: r`Disuguaglianze utili`, a: r`$|\sin x|\le1$, $|\cos x|\le1$; $\ |\sin x|\le|x|$; $\ \cos x\lt\dfrac{\sin x}x\lt1$ per $0\lt|x|\le\frac\pi2$` },
      { q: r`Periodi e immagini delle inverse`, a: r`$\sin,\cos$: $2\pi$; $\ \tan$: $\pi$. $\ \arctan:\R\to\left(-\frac\pi2,\frac\pi2\right)$, crescente, $\arctan x\to\pm\frac\pi2$ per $x\to\pm\infty$` }
    ],
    trappole: [ r`$\sin x^2$, $\sin^2x$ e $(\sin x)^2$: il secondo e il terzo sono la stessa cosa, il primo no.` ],
    temi: ['Funzioni elementari', 'Disequazioni']
  },
  {
    id: 'f-supinf', sez: 1, titolo: 'Sup, inf, max, min: come si trovano',
    intro: r`Negli esercizi si indovina il candidato e poi lo si verifica con la caratterizzazione.`,
    righe: [
      { q: r`Caratterizzazione di $M=\sup E$`, a: r`(i) $x\le M$ per ogni $x\in E$; $\ $(ii) $\forall\eps>0\ \exists x\in E:\ x>M-\eps$` },
      { q: r`Caratterizzazione di $m=\inf E$`, a: r`(i) $x\ge m$ per ogni $x\in E$; $\ $(ii) $\forall\eps>0\ \exists x\in E:\ x\lt m+\eps$` },
      { q: r`Quando il sup è un massimo?`, a: r`Quando $\sup E\in E$. Se $E$ non è limitato superiormente, $\sup E=+\infty$ e il massimo non esiste` },
      { q: r`$E=\{a_n:n\in\N\}$: il metodo`, a: r`Studia la monotonia ($a_{n+1}-a_n$ o $\frac{a_{n+1}}{a_n}$). Se è crescente: $\min=a_0$ e $\sup=\lim a_n$. Se è decrescente: $\max=a_0$ e $\inf=\lim a_n$` },
      { q: r`E se c'è $(-1)^n$?`, a: r`Separa gli indici pari e quelli dispari, studia le due sottosuccessioni, poi confronta i loro estremi` },
      { q: r`Come si dimostra la (ii)?`, a: r`Si risolve $a_n>M-\eps$ in $n$ e si mostra che esiste almeno un $n$ che la verifica (di solito $n$ grande)` },
      { q: r`La completezza di $\R$`, a: r`Ogni insieme non vuoto e limitato superiormente ha estremo superiore in $\R$ (in $\Q$ no: $\{q:q^2\lt2\}$)` }
    ],
    trappole: [ r`Scrivere $\max E$ quando il valore non è assunto: per $E=\{1-\frac1n\}$ si ha $\sup E=1$ ma il massimo non esiste.` ],
    temi: ['Estremo superiore', 'Estremi di successioni']
  },
  {
    id: 'f-complessi', sez: 1, titolo: 'Numeri complessi',
    intro: r`$z=x+iy$, $i^2=-1$. Tre forme: algebrica, trigonometrica, esponenziale.`,
    righe: [
      { q: r`Coniugato, modulo, $z\bar z$`, a: r`$\bar z=x-iy$; $\ |z|=\sqrt{x^2+y^2}$; $\ z\bar z=|z|^2$` },
      { q: r`$\dfrac1z$ e il quoziente`, a: r`$\dfrac1z=\dfrac{\bar z}{|z|^2}$; per $\frac{z_1}{z_2}$ si moltiplica sopra e sotto per $\bar z_2$` },
      { q: r`$\Real z$ e $\Imag z$ con il coniugato`, a: r`$\Real z=\dfrac{z+\bar z}2$; $\ \Imag z=\dfrac{z-\bar z}{2i}$` },
      { q: r`Potenze di $i$`, a: r`$i^0=1,\ i^1=i,\ i^2=-1,\ i^3=-i$, poi si ripete con periodo $4$: $i^n=i^{\,n\bmod4}$` },
      { q: r`Argomento principale (convenzione del corso)`, a: r`$\theta=\arctan\frac yx$ se $x>0$; $\ \arctan\frac yx+\pi$ se $x\lt0$; $\ \frac\pi2$ se $x=0,y>0$; $\ -\frac\pi2$ se $x=0,y\lt0$. Sta in $\left[-\frac\pi2,\frac32\pi\right)$` },
      { q: r`Forma trigonometrica ed esponenziale`, a: r`$z=\rho(\cos\theta+i\sin\theta)=\rho e^{i\theta}$, con $e^{i\theta}=\cos\theta+i\sin\theta$ (Eulero)` },
      { q: r`Prodotto, quoziente, potenza`, a: r`$\rho_1e^{i\theta_1}\rho_2e^{i\theta_2}=\rho_1\rho_2e^{i(\theta_1+\theta_2)}$; quoziente: dividi i moduli e sottrai gli argomenti; $z^n=\rho^ne^{in\theta}$ (de Moivre)` },
      { q: r`Radici $m$-esime di $w=Re^{i\varphi}$`, a: r`$z_h=\sqrt[m]R\,e^{i\theta_h}$, $\ \theta_h=\dfrac\varphi m+\dfrac{2h\pi}m$, $\ h=0,\dots,m-1$: vertici di un poligono regolare di $m$ lati` },
      { q: r`$az^2+bz+c=0$ in $\C$`, a: r`$z=\dfrac{-b\pm w}{2a}$, dove $w$ è una radice quadrata (complessa) di $\Delta=b^2-4ac$` },
      { q: r`Valori da ricordare`, a: r`$e^{i\pi}=-1$, $\ e^{i\pi/2}=i$, $\ |e^{i\theta}|=1$; $\ |z_1z_2|=|z_1||z_2|$, $\ \overline{z_1z_2}=\bar z_1\bar z_2$` }
    ],
    trappole: [ r`Calcolare l'argomento solo con $\arctan\frac yx$ anche nel secondo e terzo quadrante: lì va aggiunto $\pi$.`, r`In $\C$ non c'è ordinamento: «$z_1\lt z_2$» non ha senso.` ],
    temi: ['Numeri complessi']
  },

  /* ===================== SEZIONE 2 ===================== */
  {
    id: 'f-notevoli', sez: 2, titolo: 'Limiti notevoli (Lezione 8)',
    intro: r`Con le lettere della lezione. In tutti, $a_n\to0$ con $a_n\ne0$ dove si divide.`,
    righe: [
      { q: r`(a) $\lim a^n$`, a: r`$+\infty$ se $a>1$; $\ 1$ se $a=1$; $\ 0$ se $-1\lt a\lt1$; $\ $non esiste se $a\le-1$` },
      { q: r`(b) $\lim\sqrt[n]a$ ($a>0$) e $\lim\sqrt[n]{n^b}$`, a: r`Entrambi $1$` },
      { q: r`(c) $\left(1+\dfrac\alpha{a_n}\right)^{a_n}$ con $a_n\to\pm\infty$`, a: r`$\to e^\alpha$ (caso particolare: $\left(1+\frac1n\right)^n\to e$)` },
      { q: r`(d) $\dfrac{\sin a_n}{a_n}$ e $\dfrac{1-\cos a_n}{a_n^2}$`, a: r`$\to1$ e $\to\dfrac12$` },
      { q: r`(e) $(1+a_n)^{1/a_n}$ e $\dfrac{\log(1+a_n)}{a_n}$`, a: r`$\to e$ e $\to1$` },
      { q: r`(e) $\dfrac{e^{a_n}-1}{a_n}$ e $\dfrac{(1+a_n)^\alpha-1}{a_n}$`, a: r`$\to1$ e $\to\alpha$` },
      { q: r`(f) $\dfrac{P(n)}{Q(n)}$, gradi $k$ e $h$`, a: r`$\pm\infty$ se $k>h$ (segno di $\frac{a_k}{b_h}$); $\ \frac{a_k}{b_h}$ se $k=h$; $\ 0$ se $k\lt h$` },
      { q: r`(g) $\dfrac{n^b}{\alpha^n}$, $\dfrac{\alpha^n}{n!}$, $\dfrac{n!}{n^n}$ ($b>0$, $\alpha>1$)`, a: r`Tutti $\to0$` },
      { q: r`(h) $\dfrac{\log_a n}{n^b}$ ($a>1$, $b>0$)`, a: r`$\to0$` },
      { q: r`$\dfrac{\tan a_n}{a_n}$ e $\dfrac{\arctan a_n}{a_n}$`, a: r`Entrambi $\to1$ (dal seno e dal coseno, e dalla funzione inversa)` }
    ],
    trappole: [ r`$\dfrac{1-\cos a_n}{a_n^2}\to\frac12$, non $1$; e $\dfrac{1-\cos a_n}{a_n}\to0$.`, r`I notevoli valgono se l'argomento tende a $0$: $\frac{\sin n}{n}\to0$, non $1$.` ],
    temi: ['Limiti notevoli', 'Numero e']
  },
  {
    id: 'f-asintotici', sez: 2, titolo: 'Equivalenze asintotiche e o-piccoli',
    intro: r`$a_n\sim b_n$ se $\frac{a_n}{b_n}\to1$; $\ a_n=o(b_n)$ se $\frac{a_n}{b_n}\to0$. Qui $b_n\to0$.`,
    righe: [
      { q: r`$\sin b_n$, $\ \tan b_n$, $\ \arctan b_n$`, a: r`$\sim b_n$` },
      { q: r`$1-\cos b_n$`, a: r`$\sim\dfrac{b_n^2}2$` },
      { q: r`$e^{b_n}-1$ e $\log(1+b_n)$`, a: r`$\sim b_n$` },
      { q: r`$(1+b_n)^\alpha-1$`, a: r`$\sim\alpha\,b_n$ (per esempio $\sqrt{1+b_n}-1\sim\frac{b_n}2$)` },
      { q: r`$a^{b_n}-1$ ($a>0$)`, a: r`$\sim b_n\log a$ (conseguenza: $a^{b_n}=e^{b_n\log a}$)` },
      { q: r`Polinomio in $n$ per $n\to\infty$`, a: r`$\sim$ il suo termine di grado massimo` },
      { q: r`$\sim$ e $b_n+o(b_n)$`, a: r`$a_n\sim b_n\iff a_n=b_n+o(b_n)$` },
      { q: r`Dove si può sostituire con $\sim$?`, a: r`In <strong>prodotti</strong>, <strong>quozienti</strong> e <strong>potenze con esponente fisso</strong>. Mai in somme e differenze` },
      { q: r`… ed esponenziali e logaritmi? (Esercitazione 5)`, a: r`$e^{a_n}\sim e^{b_n}$ se $a_n\sim b_n$ e il limite di $a_n$ è <strong>finito</strong>. $\ \log a_n\sim\log b_n$ se $a_n\sim b_n$ e $a_n\to\ell\in[0,+\infty]$ con $\ell\ne1$` },
      { q: r`Algebra degli o-piccoli`, a: r`$c\,o(b_n)=o(b_n)$; $\ o(b_n)\pm o(b_n)=o(b_n)$; $\ a_n\,o(b_n)=o(a_nb_n)$; $\ o(a_n)o(b_n)=o(a_nb_n)$; $\ o(o(b_n))=o(b_n)$` },
      { q: r`$o\left(\frac1n\right)+o\left(\frac1{n^2}\right)$ e $o(n)+o(n^2)$`, a: r`$o\left(\frac1n\right)$ e $o(n^2)$: resta sempre il più grande` }
    ],
    trappole: [ r`$\sqrt{n^2+n}-n$: entrambi $\sim n$, ma la differenza tende a $\frac12$, non a $0$. Con una differenza servono gli o-piccoli (o la razionalizzazione).`, r`$\left(1+\frac1n\right)^n$: la base è $\sim1$, ma il limite è $e$. Mai sostituire la base di una potenza con esponente variabile.` ],
    temi: ['Equivalenza asintotica', 'o-piccoli']
  },
  {
    id: 'f-forme', sez: 2, titolo: 'Algebra dei limiti estesa e forme indeterminate',
    intro: r`Cosa si può concludere subito e cosa invece richiede un calcolo.`,
    righe: [
      { q: r`$+\infty+\ell$, $\ +\infty+\infty$`, a: r`$+\infty$ (per $\ell\in\R$)` },
      { q: r`$\ell\cdot(\pm\infty)$ con $\ell\ne0$`, a: r`$\pm\infty$ con la regola dei segni` },
      { q: r`$\dfrac{\ell}{\pm\infty}$ ($\ell\in\R$)`, a: r`$0$` },
      { q: r`$\dfrac{\ell}{0^+}$ con $\ell>0$`, a: r`$+\infty$ (serve conoscere il segno del denominatore)` },
      { q: r`$a^{+\infty}$`, a: r`$+\infty$ se $a>1$; $\ 0$ se $0\le a\lt1$` },
      { q: r`Le sette forme indeterminate`, a: r`$+\infty-\infty,\quad0\cdot\infty,\quad\dfrac\infty\infty,\quad\dfrac00,\quad1^\infty,\quad\infty^0,\quad0^0$` }
    ],
    trappole: [ r`$1^\infty$ è indeterminata: $1^n=1$ ma $\left(1+\frac1n\right)^n\to e$.` ],
    temi: ['Limiti di successioni']
  },
  {
    id: 'f-tecniche', sez: 2, titolo: 'Tecniche per calcolare i limiti',
    intro: r`Riconosci la forma, poi scegli la mossa. Il «quando» conta quanto il «come».`,
    righe: [
      { q: r`Polinomi o somme di potenze`, a: r`Raccogli il termine dominante sopra e sotto` },
      { q: r`Differenza di radici $\sqrt{a_n}-\sqrt{b_n}$ ($\infty-\infty$)`, a: r`Razionalizza: $\sqrt{a_n}-\sqrt{b_n}=\dfrac{a_n-b_n}{\sqrt{a_n}+\sqrt{b_n}}$` },
      { q: r`Forma $1^\infty$: $\ (1+c_n)^{b_n}$ con $c_n\to0$`, a: r`$\left[(1+c_n)^{1/c_n}\right]^{c_nb_n}$: la base tende a $e$, calcola $\lim c_nb_n$` },
      { q: r`Esponente variabile $a_n^{\,b_n}$`, a: r`Scrivi $e^{b_n\log a_n}$ e calcola il limite dell'esponente` },
      { q: r`$\sin n$, $\cos n$, $(-1)^n$, $\arctan(\dots)$`, a: r`Sono limitati: infinitesima per limitata, oppure carabinieri ($-1\le\sin n\le1$)` },
      { q: r`Fattoriali, esponenziali, potenze, logaritmi`, a: r`Gerarchia: $\log^\gamma n\ll n^b\ll\alpha^n\ll n!\ll n^n$; raccogli il più grande` },
      { q: r`Funzioni di qualcosa che tende a $0$`, a: r`Equivalenze asintotiche (in prodotti e quozienti) o limiti notevoli moltiplicando e dividendo` },
      { q: r`Differenza in cui i termini principali si cancellano`, a: r`Scrivi gli sviluppi con gli o-piccoli fino al primo termine che non si cancella` },
      { q: r`Il limite non esiste?`, a: r`Trova due sottosuccessioni con limiti diversi (di solito $n$ pari e $n$ dispari)` },
      { q: r`Prodotto o quoziente con fattoriali`, a: r`Semplifica: $(n+1)!=(n+1)\,n!$; oppure criterio del rapporto per successioni` },
      { q: r`Serve una minorazione per mostrare $+\infty$`, a: r`Bernoulli $(1+h)^n\ge1+nh$ per $h>-1$, poi il confronto per limiti infiniti` }
    ],
    trappole: [ r`Spezzare il limite di un prodotto quando un fattore va a $0$ e l'altro a $\infty$: è una forma indeterminata, non si conclude separatamente.` ],
    temi: ['Limiti di successioni', 'Gerarchia degli infiniti', 'Due carabinieri', 'Non esistenza del limite', 'Numero e']
  },
  {
    id: 'f-criteri-succ', sez: 2, titolo: 'Teoremi e criteri per le successioni',
    intro: r`Gli strumenti per dire se una successione converge, diverge o non ha limite.`,
    righe: [
      { q: r`Convergente ⇒ ?`, a: r`Limitata. Il viceversa è falso: $(-1)^n$` },
      { q: r`Permanenza del segno`, a: r`$a_n\to L>0\Rightarrow a_n>\frac L2>0$ definitivamente; e se $a_n\ge0$ definitivamente allora $\lim a_n\ge0$` },
      { q: r`Confronto (proprietà)`, a: r`$a_n\ge b_n$ definitivamente e limiti finiti $\Rightarrow a\ge b$ (il $>$ diventa $\ge$)` },
      { q: r`Due carabinieri`, a: r`$a_n\le b_n\le c_n$ definitivamente, $a_n,c_n\to L\in\R\ \Rightarrow b_n\to L$` },
      { q: r`Confronto per limiti infiniti`, a: r`$a_n\le b_n$ e $a_n\to+\infty\Rightarrow b_n\to+\infty$; $\ a_n\le b_n$ e $b_n\to-\infty\Rightarrow a_n\to-\infty$` },
      { q: r`Infinitesima per limitata`, a: r`È infinitesima. E $a_n\to0\iff|a_n|\to0$` },
      { q: r`Successione monotòna`, a: r`Ha sempre limite: crescente $\to\sup$, decrescente $\to\inf$ (finito se limitata, $\pm\infty$ altrimenti)` },
      { q: r`Criterio del rapporto per successioni`, a: r`$a_n>0$, $\frac{a_{n+1}}{a_n}\to\ell\lt1\Rightarrow a_n\to0$. (Conseguenza: se $\ell>1$, $a_n\to+\infty$)` },
      { q: r`Come si verifica un limite con la definizione`, a: r`$\forall\eps>0\ \exists\nu_\eps:\ |a_n-\ell|\lt\eps\ \forall n>\nu_\eps$: risolvi la disequazione in $n$ e trova $\nu_\eps$` }
    ],
    trappole: [ r`Il criterio del rapporto con $\ell=1$ non dice nulla.` ],
    temi: ['Due carabinieri', 'Permanenza del segno e confronto', 'Criterio del rapporto', 'Definizione di limite', 'Successioni ricorsive']
  },

  /* ===================== SEZIONE 3 ===================== */
  {
    id: 'f-serie-rif', sez: 3, titolo: 'Le serie di riferimento',
    intro: r`Sono quelle con cui si confronta tutto il resto.`,
    righe: [
      { q: r`Serie geometrica $\sum_{n=0}^\infty q^n$`, a: r`Converge a $\dfrac1{1-q}$ se $|q|\lt1$; diverge se $q\ge1$; indeterminata se $q\le-1$` },
      { q: r`Geometrica che parte da $n_0$`, a: r`$\displaystyle\sum_{n=n_0}^\infty q^n=\frac{q^{n_0}}{1-q}$: primo termine fratto $1-q$` },
      { q: r`Armonica generalizzata $\sum\frac1{n^\alpha}$`, a: r`Converge $\iff\alpha>1$ (l'armonica, $\alpha=1$, diverge)` },
      { q: r`Telescopica $\sum(A_{k+1}-A_k)$`, a: r`$S_m=A_{m+1}-A_1$: converge se $A_k$ converge, con somma $\lim A_k-A_1$` },
      { q: r`$\sum\frac1{n(n+1)}$`, a: r`$=\sum\left(\frac1n-\frac1{n+1}\right)=1$` },
      { q: r`$\sum\frac1{n!}$, $\ \sum\frac{n^b}{a^n}$ ($a>1$)`, a: r`Convergono (rapporto)` }
    ],
    trappole: [ r`Usare $\frac1{1-q}$ quando la serie parte da $n=1$: la somma è $\frac q{1-q}$.` ],
    temi: ['Serie geometrica', 'Serie telescopiche']
  },
  {
    id: 'f-criteri-serie', sez: 3, titolo: 'Criteri per le serie',
    intro: r`Ipotesi comprese: allo scritto i punti stanno nella verifica delle ipotesi.`,
    righe: [
      { q: r`Condizione necessaria`, a: r`$\sum a_n$ converge $\Rightarrow a_n\to0$. Se $a_n\not\to0$ la serie non converge. Non è sufficiente: $\sum\frac1n$` },
      { q: r`Serie a termini $\ge0$`, a: r`Sono regolari: convergono o divergono a $+\infty$` },
      { q: r`Confronto`, a: r`$0\le a_n\le b_n$: $\sum b_n$ converge $\Rightarrow\sum a_n$ converge; $\sum a_n$ diverge $\Rightarrow\sum b_n$ diverge` },
      { q: r`Confronto asintotico`, a: r`$a_n\ge0$, $b_n>0$, $\frac{a_n}{b_n}\to\ell$: $\ \ell\in[0,+\infty)$ e $\sum b_n$ converge $\Rightarrow$ converge; $\ \ell\in(0,+\infty]$ e $\sum b_n$ diverge $\Rightarrow$ diverge` },
      { q: r`… nella forma che si usa davvero`, a: r`$\lim n^\alpha a_n=\ell$: con $\ell$ finito e $\alpha>1$ converge; con $\ell>0$ (anche $+\infty$) e $\alpha\le1$ diverge. Se $a_n\sim b_n$, stesso carattere` },
      { q: r`Rapporto`, a: r`$a_n>0$, $\frac{a_{n+1}}{a_n}\to\ell$: $\ \ell\lt1$ converge, $\ell>1$ diverge, $\ell=1$ non decide` },
      { q: r`Radice`, a: r`$a_n\ge0$, $\sqrt[n]{a_n}\to\ell$: $\ \ell\lt1$ converge, $\ell>1$ diverge, $\ell=1$ non decide` },
      { q: r`Leibniz`, a: r`$\sum(-1)^na_n$ con $a_n$ <strong>positiva, infinitesima, decrescente</strong> converge, e $|s_m-s|\le a_{m+1}$` },
      { q: r`Convergenza assoluta`, a: r`$\sum|a_n|$ converge $\Rightarrow\sum a_n$ converge. Non vale il viceversa: $\sum\frac{(-1)^n}n$` },
      { q: r`Cambiare un numero finito di termini`, a: r`Non cambia il carattere (cambia solo la somma)` }
    ],
    trappole: [ r`Usare confronto o confronto asintotico su una serie con termini di segno variabile: valgono solo con termini $\ge0$.`, r`Rapporto e radice con termini razionali in $n$ danno sempre $\ell=1$: lì si usa il confronto asintotico.` ],
    temi: ['Condizione necessaria', 'Criterio del confronto', 'Confronto asintotico', 'Criterio del rapporto', 'Criterio della radice', 'Serie alternate']
  },
  {
    id: 'f-strategia', sez: 3, titolo: 'Strategia per studiare il carattere di una serie',
    intro: r`L'ordine da seguire, sempre. Scrivi ogni passo: il ragionamento vale punti.`,
    righe: [
      { q: r`Passo 1`, a: r`$a_n\to0$? Se no, la serie non converge e hai finito` },
      { q: r`Passo 2`, a: r`È geometrica o telescopica? Allora si calcola anche la somma` },
      { q: r`Passo 3: termini $\ge0$, con potenze di $n$ e radici`, a: r`Confronto asintotico con $\frac1{n^\alpha}$: trova $a_n\sim\frac c{n^\alpha}$ e leggi $\alpha$` },
      { q: r`Passo 3: termini $\ge0$, con fattoriali o $a^n$`, a: r`Criterio del rapporto` },
      { q: r`Passo 3: termini $\ge0$, con una potenza $n$-esima $(\dots)^n$`, a: r`Criterio della radice` },
      { q: r`Passo 3: $\sin$, $\log$, $e$ di qualcosa che tende a $0$`, a: r`Sostituisci con l'equivalenza asintotica, poi confronto asintotico` },
      { q: r`Passo 4: termini di segno variabile`, a: r`Studia $\sum|a_n|$: se converge, converge assolutamente. Se diverge e la serie è a segno alterno, prova Leibniz` },
      { q: r`Con un parametro`, a: r`Dividi i casi dove cambia il comportamento (per esempio $|q|\lt1$, $=1$, $>1$) e tratta a parte i casi limite in cui il criterio non decide` }
    ],
    trappole: [ r`Fermarsi a «il termine tende a $0$, quindi converge»: è la condizione necessaria, non sufficiente.` ],
    temi: ['Confronto asintotico', 'Criterio del rapporto', 'Serie alternate', 'Condizione necessaria']
  }
  ];

  const AM = (window.AM = window.AM || {});
  AM.FORMULARIO = F;
})();
