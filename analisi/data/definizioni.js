/* ============================================================
   definizioni.js — le definizioni della PRIMA PARTE, come schede
   topic: id dell'argomento in topics.js (serve per il taglio
          "fin dove siamo arrivati a lezione")
   ============================================================ */
(function () {
  'use strict';
  const r = String.raw;

  const D = [
/* ---------------- Sezione 1 ---------------- */
{ id: 'D01', sez: 1, topic: 's1-02', t: r`Allineamento decimale`,
  d: r`Una scrittura $\pm\,c_0,c_1c_2c_3\dots$ con $c_0\in\N$ e $c_i\in\{0,\dots,9\}$. Può essere <strong>finito</strong>, <strong>infinito periodico</strong> o <strong>infinito non periodico</strong>. I razionali corrispondono ai primi due tipi.` },

{ id: 'D02', sez: 1, topic: 's1-02', t: r`L'insieme $\R$`,
  d: r`$\R$ è l'insieme di <strong>tutti</strong> gli allineamenti decimali: finiti, infiniti periodici e infiniti non periodici. Gli elementi di $\R\setminus\Q$ (allineamenti infiniti non periodici) sono gli <strong>irrazionali</strong>.` },

{ id: 'D03', sez: 1, topic: 's1-10', t: r`Maggiorante e minorante`,
  d: r`Sia $E\subseteq\R$. $M\in\R$ è <strong>maggiorante</strong> di $E$ se $x\le M$ per ogni $x\in E$; $m\in\R$ è <strong>minorante</strong> se $x\ge m$ per ogni $x\in E$.<br><br><em>Il maggiorante non deve appartenere a $E$.</em>` },

{ id: 'D04', sez: 1, topic: 's1-10', t: r`Massimo e minimo di un insieme`,
  d: r`$M$ è <strong>massimo</strong> di $E$ se è un maggiorante <em>e</em> $M\in E$. $m$ è <strong>minimo</strong> se è un minorante <em>e</em> $m\in E$.<br><br>Se esistono sono unici. Esempio: $E=(0,2]$ ha $\max E=2$ ma nessun minimo.` },

{ id: 'D05', sez: 1, topic: 's1-11', t: r`Insieme limitato`,
  d: r`$E$ è <strong>limitato superiormente</strong> se ammette almeno un maggiorante; <strong>limitato inferiormente</strong> se ammette almeno un minorante; <strong>limitato</strong> se entrambi, cioè se $\exists K>0$ con $|x|\le K$ per ogni $x\in E$.` },

{ id: 'D06', sez: 1, topic: 's1-12', t: r`Estremo superiore`,
  d: r`$\sup E$ è il <strong>minimo dei maggioranti</strong> di $E$.<br><br><strong>Caratterizzazione</strong> — $L=\sup E$ sse valgono insieme:<br>(1) $x\le L$ per ogni $x\in E$;<br>(2) $\forall\eps>0\ \exists x_\eps\in E:\ x_\eps>L-\eps$.` },

{ id: 'D07', sez: 1, topic: 's1-12', t: r`Estremo inferiore`,
  d: r`$\inf E$ è il <strong>massimo dei minoranti</strong> di $E$.<br><br><strong>Caratterizzazione</strong> — $\ell=\inf E$ sse:<br>(1) $x\ge\ell$ per ogni $x\in E$;<br>(2) $\forall\eps>0\ \exists x_\eps\in E:\ x_\eps<\ell+\eps$.` },

{ id: 'D08', sez: 1, topic: 's1-13', t: r`Proprietà di completezza di $\R$`,
  d: r`Ogni $E\subseteq\R$ <strong>non vuoto e limitato superiormente</strong> ammette estremo superiore <em>in $\R$</em> (simmetricamente per l'inferiore).<br><br>Non vale in $\Q$: $\{x\in\Q:x>0,\ x^2<2\}$ non ha sup in $\Q$.` },

{ id: 'D09', sez: 1, topic: 's1-06', t: r`Principio di induzione`,
  d: r`Se (i) $P(0)$ è vera e (ii) $P(n)\Rightarrow P(n+1)$ per ogni $n$, allora $P(n)$ è vera per ogni $n\in\N$.<br><br>Se la base si verifica in $n_0$, si conclude per ogni $n\ge n_0$.` },

{ id: 'D10', sez: 1, topic: 's1-14', t: r`Radice $n$-esima e potenza reale`,
  d: r`Per $y\ge0$ e $n\ge1$ esiste <strong>unico</strong> $x\ge0$ con $x^n=y$: si scrive $\sqrt[n]y$.<br><br>Per $a>1$ e $x\in\R$: $$a^{x}:=\sup\{a^{q}:q\in\Q,\ q\le x\}.$$ Esiste per <strong>completezza</strong>.` },

{ id: 'D11', sez: 1, topic: 's1-14', t: r`Logaritmo`,
  d: r`Per $a>0$, $a\ne1$, $y>0$: esiste unico $x\in\R$ con $a^{x}=y$, e si pone $x=\log_a y$. Base usuale $a=e$ ($\ln$).<br><br>Anche qui l'esistenza poggia sulla completezza.` },

{ id: 'D12', sez: 1, topic: 's1-16', t: r`Valore assoluto`,
  d: r`$$|x|:=\begin{cases}x & x\ge0\\ -x & x<0\end{cases}=\max\{x,-x\}=\sqrt{x^{2}}.$$ Lettura: $|x|$ è la distanza di $x$ da $0$, e $|x-y|$ la distanza fra $x$ e $y$.` },

{ id: 'D13', sez: 1, topic: 's1-18', t: r`Numero complesso in forma algebrica`,
  d: r`$\C:=\{z=a+ib\ :\ a,b\in\R\}$ con $i^{2}=-1$. $a=\Real z$, $b=\Imag z$ sono numeri <strong>reali</strong>.<br><br>$$(a+ib)(c+id)=(ac-bd)+i(ad+bc)$$ $\C$ è un campo ma <strong>non è ordinato</strong>.` },

{ id: 'D14', sez: 1, topic: 's1-18', t: r`Coniugato e modulo`,
  d: r`$\bar z=a-ib$, &nbsp; $|z|=\sqrt{a^{2}+b^{2}}$, &nbsp; $z\bar z=|z|^{2}$.<br><br>Divisione: $\dfrac zw=\dfrac{z\bar w}{|w|^{2}}$. Geometricamente il coniugio è la riflessione rispetto all'asse reale.` },

{ id: 'D15', sez: 1, topic: 's1-19', t: r`Forma trigonometrica ed esponenziale`,
  d: r`Per $z\ne0$, con $\rho=|z|>0$ e $\theta=\arg z$ (tale che $\cos\theta=\frac a\rho$, $\sin\theta=\frac b\rho$):
$$z=\rho(\cos\theta+i\sin\theta)=\rho e^{i\theta}$$
<strong>Eulero:</strong> $e^{i\theta}:=\cos\theta+i\sin\theta$. L'argomento è definito a meno di $2k\pi$; l'argomento principale del corso sta in $\left[-\frac\pi2,\frac32\pi\right)$: $\theta=\arctan\frac yx$ se $x>0$, $\arctan\frac yx+\pi$ se $x<0$.` },

{ id: 'D16', sez: 1, topic: 's1-22', t: r`Radici $n$-esime di un numero complesso`,
  d: r`Per $w=\rho(\cos\theta+i\sin\theta)\ne0$, le soluzioni di $z^{n}=w$ sono esattamente $n$:
$$z_k=\sqrt[n]\rho\left[\cos\tfrac{\theta+2k\pi}{n}+i\sin\tfrac{\theta+2k\pi}{n}\right],\ k=0,\dots,n-1$$
Sono i vertici di un poligono regolare di $n$ lati.` },

/* ---------------- Sezione 2 ---------------- */
{ id: 'D17', sez: 2, topic: 's2-01', t: r`Funzione, dominio, codominio, immagine`,
  d: r`$f:A\to B$ associa a <em>ogni</em> $x\in A$ <em>uno e un solo</em> $f(x)\in B$.<br><br>$A$ dominio, $B$ codominio, $f(A)=\{f(x):x\in A\}$ <strong>immagine</strong> (in generale $f(A)\subsetneq B$), $G_f=\{(x,f(x))\}$ grafico.` },

{ id: 'D18', sez: 2, topic: 's2-01', t: r`Controimmagine`,
  d: r`Per $E\subseteq B$: $\ f^{-1}(E):=\{x\in A\ :\ f(x)\in E\}$.<br><br><strong>Definita sempre</strong>, anche se $f$ non è invertibile: è un insieme, non il valore di una funzione inversa. Es. $f(x)=x^2$: $f^{-1}(\{4\})=\{-2,2\}$.` },

{ id: 'D19', sez: 2, topic: 's2-03', t: r`Iniettiva, suriettiva, biunivoca`,
  d: r`<strong>Iniettiva:</strong> $f(x_1)=f(x_2)\Rightarrow x_1=x_2$.<br><strong>Suriettiva:</strong> $f(A)=B$.<br><strong>Biunivoca:</strong> entrambe; allora esiste $f^{-1}:B\to A$ con $f^{-1}(y)=x\iff f(x)=y$.` },

{ id: 'D20', sez: 2, topic: 's2-02', t: r`Funzione composta`,
  d: r`Con $f(A)\subseteq C$: $\ (g\circ f)(x):=g(f(x))$ — prima $f$, poi $g$.<br><br><strong>Associativa</strong> ma <strong>non commutativa</strong>: $f(x)=x^2$, $g(x)=x+1$ danno $g\circ f=x^2+1\ne(x+1)^2=f\circ g$.` },

{ id: 'D21', sez: 2, topic: 's2-05', t: r`Funzione monotòna`,
  d: r`Per $x_1<x_2$ in $A$: <strong>crescente</strong> se $f(x_1)\le f(x_2)$, <strong>strettamente crescente</strong> se $<$; analogamente decrescente. <strong>Monotòna</strong> = crescente oppure decrescente.<br><br>Equivale al segno del rapporto incrementale $R=\frac{f(x_2)-f(x_1)}{x_2-x_1}$.` },

{ id: 'D22', sez: 2, topic: 's2-06', t: r`Funzione pari e dispari`,
  d: r`Su dominio <strong>simmetrico</strong>: <strong>pari</strong> se $f(-x)=f(x)$ (grafico simmetrico rispetto all'asse $y$); <strong>dispari</strong> se $f(-x)=-f(x)$ (simmetrico rispetto all'origine).<br><br>Se dispari e definita in $0$: $f(0)=0$.` },

{ id: 'D23', sez: 2, topic: 's2-07', t: r`Funzione periodica`,
  d: r`$f$ è <strong>periodica di periodo $T>0$</strong> se $f(x+T)=f(x)$ per ogni $x$ del dominio. Il più piccolo $T>0$ con questa proprietà, se esiste, è il <strong>periodo minimo</strong>.<br><br>$\sin,\cos$: $T=2\pi$; $\tan$: $T=\pi$.` },

{ id: 'D24', sez: 2, topic: 's2-08', t: r`Sup, inf, max, min di una funzione`,
  d: r`Si applicano le nozioni insiemistiche all'<strong>immagine</strong>: $\sup_A f:=\sup f(A)$, ecc.<br><br>Se $f(x_0)=\max_A f$, $x_0$ è <strong>punto</strong> di massimo. Il massimo è un valore (asse $y$), il punto un'ascissa.` },

{ id: 'D25', sez: 2, topic: 's2-10', t: r`Successione numerica`,
  d: r`Una funzione $a:\N\to\R$; si scrive $a_n$ per $a(n)$ e $(a_n)_{n\in\N}$.<br><br>Il grafico è un insieme di <strong>punti isolati</strong> $(n,a_n)$, non una curva. Il dominio può essere $\{n\ge n_0\}$.` },

{ id: 'D26', sez: 2, topic: 's2-11', t: r`Proprietà vera definitivamente`,
  d: r`$P(n)$ è vera <strong>definitivamente</strong> se $\exists N\in\N$ tale che $P(n)$ è vera per ogni $n>N$; cioè è falsa al più per un numero <strong>finito</strong> di indici.<br><br>Da non confondere con «per infiniti indici».` },

{ id: 'D27', sez: 2, topic: 's2-12', t: r`Limite finito di una successione`,
  d: r`$$\lim_{n\to\infty}a_n=L\in\R\ \overset{\text{def}}{\iff}\ \forall\eps>0\ \exists N\in\N:\ \forall n>N,\ |a_n-L|<\eps$$
Comunque si fissi una striscia attorno a $L$, tutti i termini da un certo indice in poi vi cadono dentro. $N$ dipende da $\eps$.` },

{ id: 'D28', sez: 2, topic: 's2-12', t: r`Limite infinito`,
  d: r`$$\lim_n a_n=+\infty\iff \forall M\in\R\ \exists N:\ \forall n>N,\ a_n>M$$
$$\lim_n a_n=-\infty\iff \forall M\in\R\ \exists N:\ \forall n>N,\ a_n<M$$` },

{ id: 'D29', sez: 2, topic: 's2-13', t: r`Convergente, divergente, regolare, irregolare`,
  d: r`<strong>Convergente:</strong> limite finito. <strong>Divergente:</strong> limite $\pm\infty$. <strong>Regolare:</strong> ammette limite (finito o infinito). <strong>Irregolare:</strong> non ammette limite.<br><br>$(-1)^n$ è irregolare; lo si prova con due sottosuccessioni di limiti diversi.` },

{ id: 'D30', sez: 2, topic: 's2-18', t: r`Forme indeterminate`,
  d: r`Le sette combinazioni in cui il limite <strong>non è determinato</strong> dai soli limiti dei fattori:
$$\infty-\infty,\quad 0\cdot\infty,\quad \frac\infty\infty,\quad \frac00,\quad 1^{\infty},\quad \infty^{0},\quad 0^{0}$$
$\frac{0}{\infty}=0$ <em>non</em> è indeterminata.` },

{ id: 'D31', sez: 2, topic: 's2-22', t: r`Successione infinitesima`,
  d: r`$(a_n)$ è <strong>infinitesima</strong> se $a_n\to0$.<br><br>Proprietà: $a_n\to0\iff|a_n|\to0$ (vale <strong>solo</strong> per il limite $0$). Il prodotto di un'infinitesima per una <strong>limitata</strong> è infinitesimo.` },

{ id: 'D32', sez: 2, topic: 's2-24', t: r`Numero di Nepero`,
  d: r`$$e:=\lim_{n\to\infty}\left(1+\frac1n\right)^{n}$$
<strong>Ben posta</strong> perché la successione è strettamente crescente e limitata superiormente (da $3$), quindi converge per il teorema sulle monotòne. È una forma $1^{\infty}$.` },

{ id: 'D33', sez: 2, topic: 's2-29', t: r`o-piccolo di Landau`,
  d: r`$$a_n=o(b_n)\ \overset{\text{def}}{\iff}\ \frac{a_n}{b_n}\to0$$
«$a_n$ è trascurabile rispetto a $b_n$». Il segno $=$ va letto come «appartiene a»: $o(b_n)$ è una classe. Inoltre $a_n\to0\iff a_n=o(1)$.` },

{ id: 'D34', sez: 2, topic: 's2-28', t: r`Successioni asintoticamente equivalenti`,
  d: r`$$a_n\sim b_n\ \overset{\text{def}}{\iff}\ \frac{a_n}{b_n}\to1$$
Equivale a $a_n=b_n+o(b_n)$. Si può sostituire in <strong>prodotti, quozienti e potenze</strong>, mai in somme, esponenti o logaritmi.` },

{ id: 'D35', sez: 2, topic: 's2-28', t: r`Ordine di infinitesimo e di infinito`,
  d: r`Rispetto al campione $\frac1n$: $a_n$ è infinitesimo di <strong>ordine $\alpha>0$</strong> se $\lim_n n^{\alpha}a_n=\ell\in\R\setminus\{0\}$.<br><br>Rispetto a $n$: $a_n$ è infinito di ordine $\alpha$ se $\lim_n\frac{a_n}{n^{\alpha}}=\ell\ne0$.` },

/* ---------------- Sezione 3 ---------------- */
{ id: 'D36', sez: 3, topic: 's3-01', t: r`Somma parziale e serie`,
  d: r`$s_n:=\sum_{k=0}^{n}a_k$ è la <strong>somma parziale</strong> $n$-esima. La <strong>serie</strong> $\sum_{n\ge0}a_n$ <em>è</em>, per definizione, la successione $(s_n)$.` },

{ id: 'D37', sez: 3, topic: 's3-01', t: r`Carattere di una serie`,
  d: r`Il comportamento di $(s_n)$: <strong>convergente</strong> se $s_n\to S\in\R$ ($S$ è la somma); <strong>divergente</strong> se $s_n\to\pm\infty$; <strong>indeterminata</strong> se $(s_n)$ non ha limite.<br><br>Non cambia modificando un numero finito di termini.` },

{ id: 'D38', sez: 3, topic: 's3-05', t: r`Serie geometrica`,
  d: r`$$\sum_{n=0}^{\infty}q^{n}=\frac{1}{1-q}\ \text{ se }|q|<1;\quad +\infty\ \text{ se }q\ge1;\quad \text{indeterminata se }q\le-1$$
Se parte da $n_0$: <strong>primo termine diviso $1-q$</strong>, cioè $\frac{q^{\,n_0}}{1-q}$.` },

{ id: 'D39', sez: 3, topic: 's3-06', t: r`Serie armonica generalizzata`,
  d: r`$$\sum_{n=1}^{\infty}\frac{1}{n^{\alpha}}\quad\text{converge}\iff\alpha>1$$
Per $\alpha=1$ è la <strong>serie armonica</strong>, che diverge pur avendo termine infinitesimo. È la famiglia campione del confronto asintotico.` },

{ id: 'D40', sez: 3, topic: 's3-04', t: r`Serie telescopica`,
  d: r`Una serie con $a_n=b_n-b_{n+1}$. Allora $s_n=b_0-b_{n+1}$, quindi converge sse $(b_n)$ converge, con somma $b_0-\lim_n b_n$.<br><br>Es. $\sum\frac{1}{n(n+1)}=1$. Telescopica <em>non</em> significa convergente: $\sum\ln(1+\frac1n)$ diverge.` },

{ id: 'D41', sez: 3, topic: 's3-11', t: r`Serie alternata e criterio di Leibniz`,
  d: r`<strong>Alternata:</strong> $\sum(-1)^{n}b_n$ con $b_n\ge0$.<br><br><strong>Leibniz:</strong> se (i) $b_n\ge0$, (ii) $(b_n)$ decrescente, (iii) $b_n\to0$, allora converge, e $|S-s_n|\le b_{n+1}$. Servono <em>tutte e tre</em>.` },

{ id: 'D42', sez: 3, topic: 's3-12', t: r`Convergenza assoluta`,
  d: r`$\sum a_n$ converge <strong>assolutamente</strong> se converge $\sum|a_n|$.<br><br>Assoluta $\Rightarrow$ semplice, ma <strong>non</strong> viceversa: $\sum\frac{(-1)^n}{n}$ converge (Leibniz) senza convergere assolutamente — si dice <em>semplicemente convergente</em>.` },

{ id: 'D43', sez: 3, topic: 's3-03', t: r`Serie a termini non negativi`,
  d: r`Se $a_n\ge0$, le somme parziali sono <strong>crescenti</strong>, quindi la serie è <strong>regolare</strong>: o converge, o diverge a $+\infty$. Mai indeterminata.<br><br>Converge $\iff(s_n)$ è limitata superiormente.` },

{ id: 'D44', sez: 3, topic: 's3-02', t: r`Condizione necessaria per la convergenza`,
  d: r`Se $\sum a_n$ converge, allora $a_n\to0$ (perché $a_n=s_n-s_{n-1}\to S-S=0$).<br><br><strong>Non è sufficiente</strong>: $\sum\frac1n$ ha $\frac1n\to0$ e diverge. Si usa come test di <em>non</em> convergenza.` }
  ];

  const AM = (window.AM = window.AM || {});
  AM.DEFINIZIONI = D;
})();
