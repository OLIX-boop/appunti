/* ============================================================
   quesiti.js — i 66 Quesiti Teorici della PRIMA PARTE
   con risposta modello (la traccia che scriveresti all'esame)
   Fonte: "Quesiti Teorici AM1" — Prof. G. Meglioli, a.a. 2026/27
   mark "*" = contiene dimostrazione richiesta allo scritto
   mark "**" = dimostrazione richiesta solo all'orale
   ============================================================ */
(function () {
  'use strict';
  const r = String.raw;

  const Q = [
/* ---------- Sezione 1: numeri reali e complessi ---------- */
{ id: '1.1', sez: 1, t: r`Definire gli insiemi numerici $\N,\Z,\Q$. Come si eseguono somma e prodotto in $\Q$? Come sono ordinati gli elementi di $\Q$?`,
  a: r`$\N=\{0,1,2,3,\dots\}$ numeri naturali; $\Z=\{\dots,-2,-1,0,1,2,\dots\}$ interi relativi, ottenuti da $\N$ aggiungendo gli opposti; $$\Q=\left\{\frac mn\;:\;m\in\Z,\ n\in\Z\setminus\{0\}\right\},$$ dove $\frac mn=\frac{m'}{n'}$ se e solo se $mn'=m'n$ (le frazioni equivalenti individuano lo stesso razionale).<br><br><strong>Operazioni:</strong> $$\frac mn+\frac pq=\frac{mq+np}{nq},\qquad \frac mn\cdot\frac pq=\frac{mp}{nq}.$$ <strong>Ordinamento:</strong> supposti $n,q>0$, $$\frac mn\le\frac pq\iff mq\le np.$$ È un ordinamento <em>totale</em> (due razionali sono sempre confrontabili) e <em>denso</em>: fra due razionali distinti ce n'è sempre un altro, per esempio la media aritmetica. Valgono le inclusioni $\N\subset\Z\subset\Q$.` },

{ id: '1.2', sez: 1, t: r`Cosa si intende per allineamento decimale? Di che tipo può essere? Qual è il collegamento tra $\Q$ e gli allineamenti decimali? E quello tra $\Q$ e i punti di una retta?`,
  a: r`Un <strong>allineamento decimale</strong> è una scrittura $\pm\,c_0,c_1c_2c_3\dots$ con $c_0\in\N$ e $c_i\in\{0,\dots,9\}$. Può essere:<ul><li><strong>finito</strong> (es. $1{,}25$);</li><li><strong>infinito periodico</strong> (es. $0{,}\overline3=\frac13$);</li><li><strong>infinito non periodico</strong> (es. $0{,}101001000\dots$).</li></ul>
<strong>Legame con $\Q$:</strong> eseguendo la divisione euclidea fra numeratore e denominatore, ogni razionale dà un allineamento finito o infinito periodico; viceversa ogni allineamento finito o periodico è un razionale. Dunque $$\Q\;\longleftrightarrow\;\{\text{allineamenti finiti o periodici}\}.$$ Convenzione: si escludono gli allineamenti con periodo $9$, perché $0,\overline9=1$ rappresenterebbe due volte lo stesso numero.<br><br><strong>Legame con la retta:</strong> fissati origine e unità di misura, ogni razionale individua un punto della retta, ma <em>non</em> viceversa: la diagonale del quadrato di lato $1$ ha lunghezza $\sqrt2\notin\Q$. $\Q$ lascia quindi dei «buchi» sulla retta, ed è proprio questo a rendere necessario $\R$.` },

{ id: '1.3', sez: 1, t: r`Dare la definizione di $\R$. Qual è il legame tra $\R$ e i punti di una retta?`,
  a: r`$$\R:=\{\text{tutti gli allineamenti decimali: finiti, infiniti periodici e infiniti non periodici}\}.$$ Gli elementi di $\R\setminus\Q$ (allineamenti infiniti non periodici) si dicono <strong>numeri irrazionali</strong>; per esempio $\sqrt2$, $e$, $\pi$.<br><br>$\R$ è un campo ordinato che estende $\Q$ e, a differenza di $\Q$, è <strong>completo</strong>. Il legame con la retta è una <em>corrispondenza biunivoca</em>: fissati un'origine $O$ e un'unità di misura, a ogni numero reale corrisponde uno e un solo punto della retta e viceversa. Per questo $\R$ si chiama <strong>retta reale</strong>: non ha buchi.` },

{ id: '1.4', sez: 1, mark: '**', teo: 'T-par', t: r`Enunciare e dimostrare il teorema sulla parità dei quadrati.`,
  a: r`<strong>Enunciato.</strong> Sia $m\in\Z$. Allora $m$ è pari $\iff m^2$ è pari (equivalentemente: $m$ è dispari $\iff m^2$ è dispari).<br><br>La dimostrazione completa è nella pagina <em>Teoremi</em>: verso diretto per calcolo diretto, verso inverso per <strong>contrapposizione</strong>.` },

{ id: '1.5', sez: 1, mark: '*', teo: 'T01', t: r`Dimostrare che il numero $\sqrt2$ è irrazionale.`,
  a: r`<strong>Enunciato.</strong> Non esiste $q\in\Q$ con $q^2=2$.<br><br>Dimostrazione <em>per assurdo</em>: si suppone $\sqrt2=\frac mn$ con $m,n$ coprimi, si ottiene $m^2=2n^2$, quindi $m$ pari, quindi $n$ pari — contro la coprimalità. Traccia completa passo per passo nella pagina <em>Teoremi</em>.` },

{ id: '1.6', sez: 1, t: r`Illustrare il principio di induzione.`,
  a: r`Sia $P(n)$ una proposizione dipendente da $n\in\N$. Se
<ol><li><strong>base:</strong> $P(0)$ è vera;</li>
<li><strong>passo induttivo:</strong> per ogni $n\in\N$, $P(n)$ vera $\Rightarrow P(n+1)$ vera,</li></ol>
allora $P(n)$ è vera per ogni $n\in\N$.<br><br>
<strong>Variante.</strong> Se la base si verifica in $n_0\in\N$ anziché in $0$, si conclude che $P(n)$ è vera per ogni $n\ge n_0$.<br><br>
<strong>Idea intuitiva:</strong> l'effetto domino. La base fa cadere la prima tessera; il passo induttivo garantisce che ogni tessera faccia cadere la successiva.<br><br>
<strong>Attenzione:</strong> nel passo induttivo non si dimostra $P(n)$ — la si <em>suppone</em> (ipotesi induttiva) e la si usa per ottenere $P(n+1)$. Entrambe le verifiche sono indispensabili: senza base, $P(n):$ «$n=n+1$» soddisferebbe il passo induttivo pur essendo sempre falsa.` },

{ id: '1.7', sez: 1, mark: '**', teo: 'T-sum', t: r`Scrivere la formula che dà la somma dei primi $n$ naturali.`,
  a: r`$$\sum_{k=0}^{n}k=0+1+2+\dots+n=\frac{n(n+1)}{2}\qquad\forall n\in\N.$$ Si dimostra per induzione (vedi <em>Teoremi</em>). Idea alternativa (Gauss): sommando la lista in avanti e all'indietro si ottengono $n+1$ coppie di somma $n$, da cui $2S=n(n+1)$.` },

{ id: '1.8', sez: 1, mark: '*', teo: 'T02', t: r`Scrivere e dimostrare la disuguaglianza di Bernoulli.`,
  a: r`<strong>Enunciato.</strong> Per ogni $h\in\R$ con $h>-1$ e ogni $n\in\N$: $$(1+h)^n\ge 1+nh.$$ Dimostrazione per induzione; il punto chiave è che $h>-1$ garantisce $1+h>0$, quindi moltiplicare per $(1+h)$ conserva il verso della disuguaglianza. Traccia completa nella pagina <em>Teoremi</em>.` },

{ id: '1.9', sez: 1, mark: '**', teo: 'T-geo', t: r`Cosa si intende per progressione geometrica? Scrivere qual è la sua somma e darne la dimostrazione.`,
  a: r`Una <strong>progressione geometrica</strong> di ragione $q$ è una successione in cui ogni termine si ottiene dal precedente moltiplicando per $q$: $a_0,\,a_0q,\,a_0q^2,\dots$<br><br>Per $q\ne1$: $$\sum_{k=0}^{n}q^k=\frac{1-q^{\,n+1}}{1-q};\qquad\text{se }q=1,\ \sum_{k=0}^n 1=n+1.$$ Dimostrazione per induzione, oppure moltiplicando $S_n$ per $(1-q)$ e osservando che la somma è telescopica (vedi <em>Teoremi</em>).` },

{ id: '1.10', sez: 1, t: r`Sia $E\subseteq\R$. Dare le definizioni di massimo, minimo, maggiorante, minorante di $E$.`,
  a: r`Sia $E\subseteq\R$ non vuoto.
<ul>
<li>$M\in\R$ è <strong>maggiorante</strong> di $E$ se $x\le M$ per ogni $x\in E$.</li>
<li>$m\in\R$ è <strong>minorante</strong> di $E$ se $x\ge m$ per ogni $x\in E$.</li>
<li>$M$ è <strong>massimo</strong> di $E$ (scritto $\max E$) se è un maggiorante <em>e</em> $M\in E$.</li>
<li>$m$ è <strong>minimo</strong> di $E$ (scritto $\min E$) se è un minorante <em>e</em> $m\in E$.</li>
</ul>
<strong>Differenza cruciale:</strong> il maggiorante può stare fuori da $E$, il massimo deve appartenervi. Massimo e minimo, se esistono, sono unici.<br><br>
<strong>Esempio.</strong> $E=(0,2]$: i maggioranti sono $[2,+\infty)$, i minoranti $(-\infty,0]$; $\max E=2$, mentre $\min E$ <em>non esiste</em> perché $0\notin E$.` },

{ id: '1.11', sez: 1, t: r`Dare la definizione di sottoinsieme di $\R$ limitato/illimitato superiormente o inferiormente. Fornirne esempi.`,
  a: r`Sia $E\subseteq\R$ non vuoto.
<ul><li>$E$ è <strong>limitato superiormente</strong> se ammette almeno un maggiorante: $\exists M\in\R:\ x\le M\ \forall x\in E$.</li>
<li>$E$ è <strong>limitato inferiormente</strong> se ammette almeno un minorante.</li>
<li>$E$ è <strong>limitato</strong> se lo è sia superiormente sia inferiormente (equivalentemente: $\exists K>0$ con $|x|\le K$ per ogni $x\in E$).</li></ul>
Negazioni: $E$ è <strong>illimitato superiormente</strong> se $\forall M\in\R\ \exists x\in E:\ x>M$; in tal caso si scrive $\sup E=+\infty$. Analogamente $\inf E=-\infty$.<br><br>
<strong>Esempi.</strong> $[0,1]$ limitato. $[1,+\infty)$ limitato inferiormente ($1$ è minorante), illimitato superiormente. $\N$ limitato inferiormente, illimitato superiormente. $\Z$ illimitato da entrambe le parti. $\left\{\frac1n:n\ge1\right\}$ limitato, con massimo $1$ e senza minimo.` },

{ id: '1.12', sez: 1, t: r`Dare la definizione di estremo superiore e di estremo inferiore. Scrivere una loro caratterizzazione.`,
  a: r`Sia $E\subseteq\R$ non vuoto e limitato superiormente. L'<strong>estremo superiore</strong> $\sup E$ è il <em>minimo dei maggioranti</em> di $E$. Analogamente, se $E$ è limitato inferiormente, l'<strong>estremo inferiore</strong> $\inf E$ è il <em>massimo dei minoranti</em>.<br><br>
<strong>Caratterizzazione di $L=\sup E$</strong> — due proprietà simultanee:
<ol><li>$x\le L$ per ogni $x\in E$ &nbsp;($L$ è un maggiorante);</li>
<li>$\forall\eps>0\ \exists x_\eps\in E:\ x_\eps>L-\eps$ &nbsp;(nessun numero più piccolo di $L$ è maggiorante).</li></ol>
<strong>Caratterizzazione di $\ell=\inf E$:</strong>
<ol><li>$x\ge \ell$ per ogni $x\in E$;</li>
<li>$\forall\eps>0\ \exists x_\eps\in E:\ x_\eps<\ell+\eps$.</li></ol>
<strong>Osservazione.</strong> Se $\max E$ esiste allora $\sup E=\max E$; il viceversa è falso: $E=(0,2)$ ha $\sup E=2$ ma nessun massimo. La proprietà (2) è quella che si usa nelle dimostrazioni (per esempio in quella sulla regolarità delle successioni monotòne).` },

{ id: '1.13', sez: 1, t: r`Enunciare la proprietà di completezza (o di continuità) di $\R$.`,
  a: r`<strong>Proprietà di completezza.</strong> Ogni sottoinsieme $E\subseteq\R$ non vuoto e limitato superiormente ammette estremo superiore <em>in $\R$</em>. Simmetricamente, ogni $E\ne\emptyset$ limitato inferiormente ammette estremo inferiore in $\R$.<br><br>
<strong>Corollario.</strong> Se $E\ne\emptyset$ è limitato, esistono in $\R$ sia $\sup E$ sia $\inf E$.<br><br>
<strong>La proprietà non vale in $\Q$.</strong> Controesempio: $$A=\{x\in\Q\;:\;x>0,\ x^2<2\}.$$ $A$ è non vuoto e limitato superiormente in $\Q$ (per esempio da $2$), ma non ha estremo superiore in $\Q$, perché il candidato naturale sarebbe $\sqrt2\notin\Q$.<br><br>
È la proprietà che distingue $\R$ da $\Q$ ed è alla base dell'esistenza di radici, logaritmi, del limite delle successioni monotòne e del numero $e$.` },

{ id: '1.14', sez: 1, t: r`Descrivere come in $\R$ si definiscono radici, potenze ad esponente razionale e reale, logaritmi. Quale proprietà di $\R$ è fondamentale?`,
  a: r`<strong>Radici.</strong> Per $y\ge0$ e $n\in\N$, $n\ge1$, esiste ed è unico $x\ge0$ con $x^n=y$; si scrive $x=\sqrt[n]y=y^{1/n}$. Se $n$ è dispari la radice si definisce anche per $y<0$.<br><br>
<strong>Potenze razionali.</strong> Per $a>0$ e $q=\frac mn\in\Q$ ($n\ge1$): $$a^{m/n}:=\sqrt[n]{a^{m}}.$$
<strong>Potenze reali.</strong> Per $a>0$ e $x\in\R$ si pone $$a^{x}:=\sup\{a^{q}\;:\;q\in\Q,\ q\le x\}\quad (a>1),$$ e analogamente con l'inf per $0\lt a<1$.<br><br>
<strong>Logaritmi.</strong> Per $a>0$, $a\ne1$, e $y>0$ esiste unico $x\in\R$ con $a^{x}=y$; si pone $x=\log_a y$. La base usuale è $a=e$ (logaritmo naturale, $\ln$).<br><br>
<strong>Proprietà fondamentale:</strong> la <strong>completezza</strong> di $\R$. Tutte queste definizioni sono estremi superiori di opportuni insiemi, e senza completezza tali estremi potrebbero non esistere — in $\Q$ infatti $\sqrt2$ non esiste.` },

{ id: '1.15', sez: 1, t: r`Introdurre le grandezze goniometriche e descriverne le principali proprietà.`,
  a: r`Sulla circonferenza unitaria, un angolo $\theta$ (in radianti: lunghezza dell'arco) individua il punto $P=(\cos\theta,\sin\theta)$. Si definiscono poi $\tan\theta=\frac{\sin\theta}{\cos\theta}$ ($\theta\ne\frac\pi2+k\pi$) e $\cot\theta=\frac{\cos\theta}{\sin\theta}$.<br><br>
<strong>Proprietà principali</strong>
<ul><li><em>Identità fondamentale:</em> $\sin^2\theta+\cos^2\theta=1$; in particolare $|\sin\theta|\le1$, $|\cos\theta|\le1$.</li>
<li><em>Periodicità:</em> $\sin,\cos$ hanno periodo $2\pi$; $\tan$ ha periodo $\pi$.</li>
<li><em>Parità:</em> $\cos(-\theta)=\cos\theta$ (pari), $\sin(-\theta)=-\sin\theta$ (dispari), $\tan$ dispari.</li>
<li><em>Formule di addizione:</em> $$\sin(\alpha\pm\beta)=\sin\alpha\cos\beta\pm\cos\alpha\sin\beta,$$ $$\cos(\alpha\pm\beta)=\cos\alpha\cos\beta\mp\sin\alpha\sin\beta.$$</li>
<li><em>Duplicazione:</em> $\sin2\theta=2\sin\theta\cos\theta$, $\cos2\theta=\cos^2\theta-\sin^2\theta=1-2\sin^2\theta$.</li>
<li><em>Inverse:</em> $\arcsin:[-1,1]\to[-\frac\pi2,\frac\pi2]$, $\arccos:[-1,1]\to[0,\pi]$, $\arctan:\R\to(-\frac\pi2,\frac\pi2)$.</li></ul>
Le formule di addizione sono esattamente ciò che serve per dimostrare le formule di de Moivre.` },

{ id: '1.16', sez: 1, t: r`Dare la definizione di valore assoluto di un numero reale e spiegarne le principali proprietà.`,
  a: r`$$|x|:=\begin{cases}x & \text{se }x\ge0\\ -x & \text{se }x<0\end{cases}\qquad\text{equivalentemente}\qquad |x|=\max\{x,-x\}=\sqrt{x^2}.$$
<strong>Proprietà.</strong>
<ul><li>$|x|\ge0$, e $|x|=0\iff x=0$;</li>
<li>$|-x|=|x|$ e $-|x|\le x\le |x|$;</li>
<li>$|xy|=|x||y|$, $\left|\frac xy\right|=\frac{|x|}{|y|}$ ($y\ne0$);</li>
<li>per $c>0$: $|x|\le c\iff -c\le x\le c$, e $|x|\ge c\iff x\le -c$ oppure $x\ge c$;</li>
<li><em>disuguaglianza triangolare:</em> $|x+y|\le|x|+|y|$, e la forma inversa $\bigl||x|-|y|\bigr|\le|x-y|$.</li></ul>
<strong>Significato geometrico:</strong> $|x|$ è la distanza di $x$ dall'origine sulla retta reale, e $|x-y|$ è la distanza fra $x$ e $y$. È questa lettura che rende naturale la definizione di limite: $|a_n-L|<\eps$ significa «$a_n$ dista da $L$ meno di $\eps$».` },

{ id: '1.17', sez: 1, mark: '**', teo: 'T-tri', t: r`Scrivere e dimostrare la disuguaglianza triangolare.`,
  a: r`$$|a+b|\le|a|+|b|\qquad\forall a,b\in\R.$$ Dimostrazione: si sommano $-|a|\le a\le|a|$ e $-|b|\le b\le|b|$, ottenendo $-(|a|+|b|)\le a+b\le|a|+|b|$, cioè la tesi. Vedi <em>Teoremi</em> per i dettagli e per la forma inversa.` },

{ id: '1.18', sez: 1, t: r`Introdurre l'insieme $\C$ dei numeri complessi. Come si eseguono le operazioni algebriche in forma algebrica?`,
  a: r`Si introduce l'<strong>unità immaginaria</strong> $i$ con $i^2=-1$ e si pone $$\C:=\{z=a+ib\;:\;a,b\in\R\}.$$ $a=\Real z$ è la <em>parte reale</em>, $b=\Imag z$ la <em>parte immaginaria</em> (entrambe numeri <em>reali</em>). Due complessi sono uguali sse hanno uguali parte reale e parte immaginaria.<br><br>
<strong>Operazioni</strong> (con $z=a+ib$, $w=c+id$):
$$z+w=(a+c)+i(b+d),$$ $$zw=(ac-bd)+i(ad+bc)\quad\text{(si svolge il prodotto e si usa }i^2=-1).$$
<strong>Coniugato:</strong> $\bar z=a-ib$; <strong>modulo:</strong> $|z|=\sqrt{a^2+b^2}$. Vale $z\bar z=|z|^2$.<br><br>
<strong>Divisione:</strong> si moltiplica numeratore e denominatore per il coniugato del denominatore: $$\frac zw=\frac{z\bar w}{|w|^2}=\frac{(a+ib)(c-id)}{c^2+d^2}.$$
$\C$ è un campo, ma <strong>non è ordinato</strong>: non esiste un ordinamento compatibile con le operazioni (se esistesse, $i^2=-1$ dovrebbe essere $\ge0$).` },

{ id: '1.19', sez: 1, t: r`Illustrare la forma trigonometrica di un numero complesso, la formula di Eulero e la forma esponenziale.`,
  a: r`Sia $z=a+ib\ne0$. Posti $$\rho=|z|=\sqrt{a^2+b^2}\ (>0),\qquad \theta=\arg z\ \text{tale che}\ \cos\theta=\frac a\rho,\ \sin\theta=\frac b\rho,$$ si ha la <strong>forma trigonometrica</strong> $$z=\rho(\cos\theta+i\sin\theta).$$ L'argomento $\theta$ è determinato a meno di multipli di $2\pi$; nel corso l'<em>argomento principale</em> si sceglie in $\left[-\frac\pi2,\frac32\pi\right)$, cioè $\theta=\arctan\frac ba$ se $a>0$ e $\theta=\arctan\frac ba+\pi$ se $a<0$ (e $\pm\frac\pi2$ se $a=0$, secondo il segno di $b$).<br><br>
<strong>Formula di Eulero:</strong> $$e^{i\theta}:=\cos\theta+i\sin\theta.$$ Da cui la <strong>forma esponenziale</strong> $z=\rho\,e^{i\theta}$.<br><br>
Conseguenze immediate: $|e^{i\theta}|=1$; $e^{i\theta_1}e^{i\theta_2}=e^{i(\theta_1+\theta_2)}$ (è de Moivre); $\overline{e^{i\theta}}=e^{-i\theta}$; l'identità di Eulero $e^{i\pi}+1=0$. Le formule $\cos\theta=\frac{e^{i\theta}+e^{-i\theta}}{2}$ e $\sin\theta=\frac{e^{i\theta}-e^{-i\theta}}{2i}$ seguono direttamente.` },

{ id: '1.20', sez: 1, mark: '*', teo: 'T03', t: r`Scrivere e dimostrare le formule di de Moivre per il prodotto e le potenze di numeri complessi.`,
  a: r`$$z_1z_2=\rho_1\rho_2\bigl[\cos(\theta_1+\theta_2)+i\sin(\theta_1+\theta_2)\bigr],\qquad z^n=\rho^n\bigl[\cos(n\theta)+i\sin(n\theta)\bigr].$$ Il prodotto si dimostra svolgendo il conto e riconoscendo le formule di addizione; la potenza per induzione. Traccia completa nella pagina <em>Teoremi</em>.` },

{ id: '1.21', sez: 1, t: r`Descrivere il significato geometrico di prodotto e somma in $\C$.`,
  a: r`Identifichiamo $z=a+ib$ con il punto $(a,b)$ del piano di <strong>Argand-Gauss</strong>.<br><br>
<strong>Somma:</strong> è la somma vettoriale — regola del parallelogramma. In particolare $|z_1+z_2|\le|z_1|+|z_2|$ (disuguaglianza triangolare in $\C$), e $|z_1-z_2|$ è la distanza fra i due punti.<br><br>
<strong>Prodotto:</strong> per de Moivre, moltiplicare per $w=\rho e^{i\varphi}$ equivale a comporre
<ul><li>una <strong>omotetia</strong> di fattore $\rho=|w|$ (dilatazione/contrazione), e</li>
<li>una <strong>rotazione</strong> di angolo $\varphi=\arg w$ attorno all'origine.</li></ul>
Casi notevoli: moltiplicare per $i$ ruota di $\frac\pi2$; moltiplicare per $-1$ ruota di $\pi$; il coniugio $z\mapsto\bar z$ è la riflessione rispetto all'asse reale.` },

{ id: '1.22', sez: 1, mark: '*', teo: 'T04', t: r`Scrivere e dimostrare la formula sulle radici $n$-esime di un numero complesso. Come sono disposte le radici $n$-esime dell'unità?`,
  a: r`Per $w=\rho(\cos\theta+i\sin\theta)\ne0$, l'equazione $z^n=w$ ha esattamente $n$ soluzioni $$z_k=\sqrt[n]\rho\left[\cos\frac{\theta+2k\pi}{n}+i\sin\frac{\theta+2k\pi}{n}\right],\quad k=0,\dots,n-1.$$ Sono i vertici di un poligono regolare di $n$ lati inscritto nella circonferenza di raggio $\sqrt[n]\rho$.<br><br>
<strong>Radici $n$-esime dell'unità</strong> ($w=1$): $z_k=e^{2k\pi i/n}$, $k=0,\dots,n-1$. Stanno sulla circonferenza unitaria, equispaziate di $\frac{2\pi}{n}$, con $z_0=1$. La loro somma è $0$ per $n\ge2$ (somma di una progressione geometrica di ragione $e^{2\pi i/n}\ne1$). Dimostrazione completa nella pagina <em>Teoremi</em>.` },

/* ---------- Sezione 2: funzioni ---------- */
{ id: '1.23', sez: 2, t: r`Dare le definizioni di: funzione tra insiemi, dominio, codominio, insieme immagine, grafico, controimmagine.`,
  a: r`Una <strong>funzione</strong> $f:A\to B$ è una legge che a <em>ogni</em> elemento $x\in A$ associa <em>uno e un solo</em> elemento $f(x)\in B$.
<ul><li><strong>Dominio:</strong> $A$ (dove la funzione è definita).</li>
<li><strong>Codominio:</strong> $B$ (l'insieme di arrivo).</li>
<li><strong>Immagine:</strong> $f(A)=\{f(x):x\in A\}\subseteq B$ — i valori effettivamente assunti. In generale $f(A)\subsetneq B$.</li>
<li><strong>Grafico:</strong> $G_f=\{(x,f(x)):x\in A\}\subseteq A\times B$.</li>
<li><strong>Controimmagine</strong> di $E\subseteq B$: $f^{-1}(E)=\{x\in A: f(x)\in E\}$.</li></ul>
<strong>Attenzione:</strong> la scrittura $f^{-1}(E)$ ha senso <em>sempre</em>, anche se $f$ non è invertibile: è un insieme, non il valore di una funzione inversa.<br><br>
<strong>Esempio.</strong> $f:\R\to\R$, $f(x)=x^2$: dominio $\R$, codominio $\R$, immagine $[0,+\infty)$, $f^{-1}(\{4\})=\{-2,2\}$, $f^{-1}(\{-1\})=\emptyset$.` },

{ id: '1.24', sez: 2, t: r`Illustrare la nozione di funzione composta. La composizione di funzioni è commutativa?`,
  a: r`Date $f:A\to B$ e $g:C\to D$ con $f(A)\subseteq C$, la <strong>composta</strong> $g\circ f:A\to D$ è definita da $$(g\circ f)(x)=g\bigl(f(x)\bigr).$$ Si applica <em>prima</em> $f$, poi $g$.<br><br>
<strong>No, non è commutativa.</strong> In generale $g\circ f\ne f\circ g$, e spesso una sola delle due è definita. Controesempio: $f(x)=x^2$, $g(x)=x+1$; allora $$(g\circ f)(x)=x^2+1,\qquad (f\circ g)(x)=(x+1)^2=x^2+2x+1,$$ che differiscono per ogni $x\ne0$.<br><br>
La composizione è però <strong>associativa</strong>: $h\circ(g\circ f)=(h\circ g)\circ f$.` },

{ id: '1.25', sez: 2, t: r`Dare le definizioni di funzioni iniettive, suriettive, biunivoche. Come si definisce la funzione inversa?`,
  a: r`Sia $f:A\to B$.
<ul><li><strong>Iniettiva</strong> se $x_1\ne x_2\Rightarrow f(x_1)\ne f(x_2)$; equivalentemente $f(x_1)=f(x_2)\Rightarrow x_1=x_2$. Graficamente: ogni retta orizzontale incontra il grafico al più una volta.</li>
<li><strong>Suriettiva</strong> se $f(A)=B$, cioè $\forall y\in B\ \exists x\in A: f(x)=y$.</li>
<li><strong>Biunivoca</strong> (o bigettiva) se è iniettiva e suriettiva.</li></ul>
Se $f$ è biunivoca, la <strong>funzione inversa</strong> $f^{-1}:B\to A$ è definita da $$f^{-1}(y)=x\iff f(x)=y,$$ e verifica $f^{-1}\circ f=\mathrm{id}_A$, $f\circ f^{-1}=\mathrm{id}_B$.<br><br>
<strong>Osservazioni.</strong> Ogni funzione iniettiva diventa biunivoca restringendo il codominio all'immagine. I grafici di $f$ e $f^{-1}$ sono simmetrici rispetto alla bisettrice $y=x$. Esempio: $f(x)=x^2$ non è iniettiva su $\R$, ma lo è su $[0,+\infty)$, dove ha inversa $\sqrt{\cdot}$.` },

{ id: '1.26', sez: 2, t: r`Cosa si intende per funzione reale di variabile reale? E per insieme di definizione? Come si rappresenta il grafico?`,
  a: r`Una <strong>funzione reale di variabile reale</strong> è una funzione $f:A\to\R$ con $A\subseteq\R$.<br><br>
Quando $f$ è assegnata tramite un'espressione analitica senza specificare $A$, per <strong>insieme (o campo) di definizione</strong> si intende il più grande sottoinsieme di $\R$ su cui l'espressione ha senso: denominatori non nulli, argomenti di radici di indice pari $\ge0$, argomenti di logaritmi $>0$, argomenti di $\arcsin$ e $\arccos$ in $[-1,1]$.<br><br>
<strong>Esempio.</strong> $f(x)=\dfrac{\ln(x-1)}{\sqrt{4-x^2}}$: serve $x-1>0$ e $4-x^2>0$, dunque $A=(1,2)$.<br><br>
<strong>Grafico:</strong> l'insieme $G_f=\{(x,f(x)):x\in A\}$ del piano cartesiano. Un sottoinsieme del piano è grafico di una funzione se e solo se ogni retta verticale lo incontra al più in un punto.` },

{ id: '1.27', sez: 2, t: r`Dare la definizione di funzione crescente, decrescente, monotòna. Fornire esempi. Enunciare e dimostrare il collegamento tra monotonia e rapporto incrementale.`,
  a: r`Sia $f:A\to\R$, $A\subseteq\R$. Per ogni $x_1,x_2\in A$ con $x_1\lt x_2$:
<ul><li><strong>crescente</strong> se $f(x_1)\le f(x_2)$; <strong>strettamente crescente</strong> se $f(x_1)\lt f(x_2)$;</li>
<li><strong>decrescente</strong> se $f(x_1)\ge f(x_2)$; <strong>strettamente decrescente</strong> se $f(x_1)>f(x_2)$;</li>
<li><strong>monotòna</strong> se è crescente oppure decrescente.</li></ul>
<strong>Esempi.</strong> $x^3$ e $e^x$ strettamente crescenti su $\R$; $\ln x$ str. crescente su $(0,+\infty)$; $e^{-x}$ str. decrescente; una funzione costante è sia crescente sia decrescente (non strettamente); $x^2$ non è monotòna su $\R$ ma lo è su $[0,+\infty)$.<br><br>
<strong>Collegamento con il rapporto incrementale.</strong> Definito, per $x_1\ne x_2$ in $A$, $$R(x_1,x_2)=\frac{f(x_2)-f(x_1)}{x_2-x_1},$$ si ha: <em>$f$ è crescente su $A$ $\iff$ $R(x_1,x_2)\ge0$ per ogni $x_1\ne x_2$</em> (str. crescente $\iff R>0$; decrescente $\iff R\le0$).<br><br>
<strong>Dimostrazione.</strong> ($\Rightarrow$) Siano $x_1\ne x_2$; a meno di scambiarli supponiamo $x_1\lt x_2$, cosicché $x_2-x_1>0$. Se $f$ è crescente, $f(x_2)-f(x_1)\ge0$, e il rapporto di un numero $\ge0$ per uno $>0$ è $\ge0$: $R\ge0$. ($\Leftarrow$) Se $R(x_1,x_2)\ge0$ e $x_1\lt x_2$, allora $x_2-x_1>0$, quindi $f(x_2)-f(x_1)=R\cdot(x_2-x_1)\ge0$, cioè $f(x_1)\le f(x_2)$: $f$ è crescente. $\blacksquare$<br><br>
Il vantaggio è che $R$ non dipende dall'ordine di $x_1,x_2$: la monotonia diventa una condizione di <em>segno</em>, che nel calcolo differenziale diventerà il segno di $f'$.` },

{ id: '1.28', sez: 2, t: r`Dare le definizioni di funzioni pari e dispari. Fornirne esempi.`,
  a: r`Sia $A\subseteq\R$ <strong>simmetrico</strong> rispetto all'origine ($x\in A\Rightarrow -x\in A$) e $f:A\to\R$.
<ul><li>$f$ è <strong>pari</strong> se $f(-x)=f(x)$ per ogni $x\in A$ — grafico simmetrico rispetto all'<em>asse $y$</em>;</li>
<li>$f$ è <strong>dispari</strong> se $f(-x)=-f(x)$ per ogni $x\in A$ — grafico simmetrico rispetto all'<em>origine</em>.</li></ul>
<strong>Esempi.</strong> Pari: $x^2$, $x^{2k}$, $\cos x$, $|x|$, $\cosh x$. Dispari: $x^3$, $x^{2k+1}$, $\sin x$, $\tan x$, $\arctan x$, $\sgn x$.<br><br>
<strong>Osservazioni.</strong> Se $f$ è dispari ed è definita in $0$, allora $f(0)=0$. La maggior parte delle funzioni non è né pari né dispari (es. $e^x$). Ogni $f$ su dominio simmetrico si scrive in modo unico come somma di una parte pari e una dispari: $f(x)=\frac{f(x)+f(-x)}2+\frac{f(x)-f(-x)}2$. Sapere che una funzione è pari o dispari dimezza il lavoro nello studio di grafico.` },

{ id: '1.29', sez: 2, t: r`Dare la definizione di funzione periodica. Fornirne esempi.`,
  a: r`$f:A\to\R$ è <strong>periodica di periodo $T>0$</strong> se per ogni $x\in A$ si ha $x+T\in A$ e $$f(x+T)=f(x).$$ Se esiste il più piccolo $T>0$ con questa proprietà, esso si dice <strong>periodo minimo</strong> (o fondamentale).<br><br>
<strong>Esempi.</strong> $\sin x$ e $\cos x$ hanno periodo minimo $2\pi$; $\tan x$ e $\cot x$ hanno periodo minimo $\pi$; $\sin(\omega x)$ ha periodo $\frac{2\pi}{|\omega|}$; la funzione «parte frazionaria» $x-\lfloor x\rfloor$ ha periodo $1$.<br><br>
<strong>Osservazioni.</strong> Se $T$ è periodo, lo è anche $kT$ per ogni $k\in\N$, $k\ge1$. Una funzione costante è periodica ma non ha periodo minimo. Per studiare una funzione periodica basta studiarla su un intervallo di ampiezza $T$.` },

{ id: '1.30', sez: 2, t: r`Dare le definizioni di funzioni limitate superiormente o inferiormente, di massimo e minimo di funzioni, di estremo superiore e inferiore di funzioni.`,
  a: r`Sia $f:A\to\R$. Tutte le nozioni si ottengono applicando quelle per gli insiemi all'<strong>insieme immagine</strong> $f(A)$.
<ul><li>$f$ è <strong>limitata superiormente</strong> se $f(A)$ lo è: $\exists M\in\R: f(x)\le M\ \forall x\in A$. Analogamente inferiormente; <strong>limitata</strong> se $\exists K>0: |f(x)|\le K\ \forall x\in A$.</li>
<li><strong>Estremo superiore:</strong> $\displaystyle\sup_{A}f:=\sup f(A)$; <strong>estremo inferiore:</strong> $\displaystyle\inf_A f:=\inf f(A)$. Esistono sempre in $\R\cup\{\pm\infty\}$.</li>
<li><strong>Massimo:</strong> $\max_A f:=\max f(A)$, se esiste; in tal caso ogni $x_0\in A$ con $f(x_0)=\max_A f$ si dice <strong>punto di massimo (assoluto)</strong>. Analogamente per il minimo.</li></ul>
<strong>Caratterizzazione di $L=\sup_A f$:</strong> (i) $f(x)\le L\ \forall x\in A$; (ii) $\forall\eps>0\ \exists x_\eps\in A: f(x_\eps)>L-\eps$.<br><br>
<strong>Esempi.</strong> $f(x)=\arctan x$ su $\R$: $\sup=\frac\pi2$, $\inf=-\frac\pi2$, nessun massimo né minimo. $f(x)=\sin x$ su $\R$: $\max=1$, $\min=-1$, assunti in infiniti punti. Distinguere sempre il <em>valore</em> (massimo) dal <em>punto</em> in cui è assunto.` },

{ id: '1.31', sez: 2, t: r`Introdurre le funzioni elementari e disegnarne il grafico.`,
  a: r`<strong>Potenze</strong> $x^\alpha$: per $\alpha=n$ intero positivo pari ($x^2$) grafico a parabola, funzione pari, non iniettiva; per $n$ dispari ($x^3$) dispari, str. crescente su $\R$; per $\alpha<0$ ($\frac1x$) iperbole con asintoti; per $\alpha=\frac12$ ($\sqrt x$) definita su $[0,+\infty)$, crescente e concava. Nel corso, $x^{p/q}$ ($p,q$ coprimi) è definita su $[0,+\infty)$ se $q$ è pari e su tutto $\R$ se $q$ è dispari; $x^{-p/q}=\frac1{x^{p/q}}$ su $(0,+\infty)$ o su $\R\setminus\{0\}$.<br><br>
<strong>Esponenziale</strong> $a^x$ ($a>0$, $a\ne1$): dominio $\R$, immagine $(0,+\infty)$, sempre positiva, passa per $(0,1)$; str. crescente se $a>1$, str. decrescente se $0\lt a<1$; asintoto orizzontale $y=0$.<br><br>
<strong>Logaritmo</strong> $\log_a x$: inverso dell'esponenziale, dominio $(0,+\infty)$, immagine $\R$, passa per $(1,0)$, asintoto verticale $x=0$; grafico simmetrico a quello di $a^x$ rispetto a $y=x$.<br><br>
<strong>Trigonometriche</strong> $\sin x$, $\cos x$ (periodo $2\pi$, immagine $[-1,1]$), $\tan x$ e $\cot x$ (periodo $\pi$, immagine $\R$, asintoti verticali in $\frac\pi2+k\pi$ e in $k\pi$). <strong>Inverse:</strong> $\arcsin:[-1,1]\to\left[-\frac\pi2,\frac\pi2\right]$, $\arccos:[-1,1]\to[0,\pi]$, $\arctan:\R\to\left(-\frac\pi2,\frac\pi2\right)$, $\operatorname{arccot}:\R\to(0,\pi)$, ottenute restringendo la funzione diretta a un intervallo dove è iniettiva.<br><br>
<strong>Altre:</strong> $|x|$ (pari, $\min=0$), $\sgn x$ (valori $-1,0,1$), parte intera $[x]$, il più grande intero $\le x$ (a gradini; $[-0{,}5]=-1$).<br><br>
<strong>Iperboliche:</strong> $\sinh x=\frac{e^x-e^{-x}}2$ (dispari, crescente), $\cosh x=\frac{e^x+e^{-x}}2$ (pari, $\min=1$), $\tanh x=\frac{\sinh x}{\cosh x}$ (immagine $(-1,1)$), con $\cosh^2x-\sinh^2x=1$.<br><br>
Sulla pagina della Sezione 2 c'è la scheda completa (dominio, immagine, proprietà) e una galleria interattiva con tutti questi grafici e le trasformazioni $af(bx+c)+d$.` },

{ id: '1.32', sez: 2, t: r`Dare la definizione di successione numerica. Fornirne esempi.`,
  a: r`Una <strong>successione numerica</strong> è una funzione $a:\N\to\R$. Si scrive $a_n$ invece di $a(n)$, e la successione si indica con $(a_n)_{n\in\N}$ o $\{a_n\}$. Il dominio può anche essere $\{n\in\N: n\ge n_0\}$ (per esempio $\frac1n$ richiede $n\ge1$).<br><br>
<strong>Modi per assegnarla:</strong> per <em>formula esplicita</em> ($a_n=\frac{1}{n+1}$) oppure per <em>ricorrenza</em> ($a_0=1$, $a_{n+1}=\frac12(a_n+\frac2{a_n})$).<br><br>
<strong>Esempi.</strong> $a_n=n$ (divergente a $+\infty$); $a_n=\frac1n$ (infinitesima); $a_n=(-1)^n$ (limitata, irregolare); $a_n=\left(1+\frac1n\right)^n\to e$; $a_n=n!$; la successione di Fibonacci.<br><br>
Il grafico è un insieme di punti isolati $(n,a_n)$ del piano: non una curva.` },

{ id: '1.33', sez: 2, t: r`Dare la definizione di successione crescente, decrescente, monotòna. Fornirne esempi.`,
  a: r`$(a_n)$ è
<ul><li><strong>crescente</strong> se $a_n\le a_{n+1}$ per ogni $n$; <strong>strettamente crescente</strong> se $a_n\lt a_{n+1}$;</li>
<li><strong>decrescente</strong> se $a_n\ge a_{n+1}$; <strong>strettamente decrescente</strong> se $a_n>a_{n+1}$;</li>
<li><strong>monotòna</strong> se crescente oppure decrescente.</li></ul>
Basta confrontare termini <em>consecutivi</em>: per transitività segue $a_n\le a_m$ per ogni $n\le m$.<br><br>
<strong>Come si verifica in pratica:</strong> studiando il segno di $a_{n+1}-a_n$, oppure (se $a_n>0$) confrontando il rapporto $\frac{a_{n+1}}{a_n}$ con $1$.<br><br>
<strong>Esempi.</strong> $a_n=n^2$ str. crescente; $a_n=\frac1n$ str. decrescente; $a_n=(-1)^n$ non monotòna; $a_n=\left(1+\frac1n\right)^n$ str. crescente (ed è il fatto che rende ben posta la definizione di $e$).<br><br>
Le successioni monotòne sono importantissime perché sono sempre <strong>regolari</strong>.` },

{ id: '1.34', sez: 2, t: r`Dare le definizioni di successione limitata superiormente o inferiormente, di massimo e minimo di successioni, di estremo superiore e inferiore. Fornirne esempi.`,
  a: r`Si applicano le nozioni insiemistiche all'immagine $E=\{a_n:n\in\N\}$.
<ul><li><strong>Limitata superiormente:</strong> $\exists M\in\R:\ a_n\le M\ \forall n$. Analogamente inferiormente. <strong>Limitata:</strong> $\exists K>0: |a_n|\le K\ \forall n$.</li>
<li>$\sup_n a_n:=\sup E$, $\inf_n a_n:=\inf E$ (esistono sempre in $\R\cup\{\pm\infty\}$).</li>
<li>$\max_n a_n$ e $\min_n a_n$ esistono solo se il sup (risp. l'inf) è <em>assunto</em> da qualche termine.</li></ul>
<strong>Esempi.</strong> $a_n=\frac1n$ ($n\ge1$): limitata, $\max=1$ (per $n=1$), $\inf=0$ non assunto, quindi nessun minimo. $a_n=(-1)^n$: limitata, $\max=1$, $\min=-1$. $a_n=n$: limitata inferiormente con $\min=0$, illimitata superiormente ($\sup=+\infty$). $a_n=-n^2$: illimitata inferiormente, $\max=0$.<br><br>
<strong>Legame importante:</strong> ogni successione convergente è limitata (ma non viceversa: $(-1)^n$).` },

{ id: '1.35', sez: 2, t: r`Cosa si intende per proprietà vera definitivamente?`,
  a: r`Una proprietà $P(n)$ si dice vera <strong>definitivamente</strong> se esiste $N\in\N$ tale che $P(n)$ è vera per ogni $n>N$. In simboli: $$\exists N\in\N:\ \forall n>N,\ P(n)\ \text{è vera}.$$ Equivalentemente: $P(n)$ è falsa al più per un numero <em>finito</em> di indici.<br><br>
<strong>Perché è la nozione giusta.</strong> Il limite di una successione dipende solo dalla sua <em>coda</em>: modificare (o eliminare) un numero finito di termini non altera né l'esistenza né il valore del limite. Per questo quasi tutti i teoremi sui limiti richiedono ipotesi solo «definitivamente».<br><br>
<strong>Esempi.</strong> $a_n=n-100$ è definitivamente positiva (da $n=101$). La successione $a_n=\frac{(-1)^n}{n}$ non è definitivamente positiva. «$\frac1n<\eps$» è vera definitivamente per ogni $\eps>0$ fissato.` },

{ id: '1.36', sez: 2, t: r`Scrivere le definizioni di limite (finito e infinito) di una successione. Spiegarne il significato, servendosi anche di disegni.`,
  a: r`<strong>Limite finito.</strong> $\displaystyle\lim_{n\to\infty}a_n=L\in\R$ se $$\forall\eps>0\ \ \exists N\in\N\ :\ \forall n>N,\quad |a_n-L|<\eps,$$ cioè $L-\eps\lt a_n\lt L+\eps$: <em>comunque si fissi una striscia orizzontale attorno a $L$, tutti i termini da un certo indice in poi vi cadono dentro.</em> Fuori dalla striscia restano al più finiti termini. Nota che $N$ dipende da $\eps$: più stretta è la striscia, più in là bisogna andare.<br><br>
<strong>Limite $+\infty$.</strong> $\displaystyle\lim_n a_n=+\infty$ se $$\forall M\in\R\ \ \exists N\in\N\ :\ \forall n>N,\quad a_n>M.$$
<strong>Limite $-\infty$.</strong> $$\forall M\in\R\ \ \exists N\in\N\ :\ \forall n>N,\quad a_n\lt M.$$
In tutti i casi la struttura è la stessa: <em>per ogni intorno del candidato limite, la successione vi appartiene definitivamente.</em> Questo permette di unificare le tre definizioni in un'unica formulazione con gli intorni (anche di $\pm\infty$).<br><br>
Nella pagina della Sezione 2 c'è un visualizzatore interattivo della striscia $\eps$–$N$.` },

{ id: '1.37', sez: 2, t: r`Dare le definizioni di successione convergente, divergente, regolare, irregolare.`,
  a: r`<ul><li><strong>Convergente:</strong> esiste finito $\lim_n a_n=L\in\R$.</li>
<li><strong>Divergente:</strong> $\lim_n a_n=+\infty$ oppure $-\infty$.</li>
<li><strong>Regolare:</strong> ammette limite, finito o infinito (cioè è convergente oppure divergente).</li>
<li><strong>Irregolare</strong> (o indeterminata, o oscillante): non ammette limite, né finito né infinito.</li></ul>
<strong>Esempi.</strong> $\frac1n\to0$ convergente; $n^2\to+\infty$ divergente (dunque regolare); $-\ln n\to-\infty$ divergente; $(-1)^n$ irregolare; $(-1)^n n$ irregolare e illimitata.<br><br>
<strong>Come si prova l'irregolarità:</strong> esibendo due sottosuccessioni con limiti diversi. Per $(-1)^n$: $a_{2k}=1\to1$ e $a_{2k+1}=-1\to-1$; se il limite esistesse, per unicità ogni sottosuccessione dovrebbe tendere allo stesso valore.` },

{ id: '1.38', sez: 2, mark: '*', teo: 'T05', t: r`Enunciare e dimostrare il teorema di unicità del limite.`,
  a: r`<strong>Enunciato.</strong> Se una successione ammette limite, questo è unico: $a_n\to\ell_1$ e $a_n\to\ell_2$ implicano $\ell_1=\ell_2$.<br><br>Dimostrazione per assurdo, come a lezione: per $n>\nu_\eps=\max\{\nu_{1,\eps},\nu_{2,\eps}\}$, con la disuguaglianza triangolare, $|\ell_1-\ell_2|\le|a_n-\ell_1|+|a_n-\ell_2|\lt 2\eps$; scegliendo $\eps=\frac{|\ell_1-\ell_2|}{2}$ si ottiene $|\ell_1-\ell_2|\lt|\ell_1-\ell_2|$, assurdo. Traccia completa nella pagina <em>Teoremi</em>.` },

{ id: '1.39', sez: 2, mark: '*', teo: 'T06', t: r`Dimostrare che una successione convergente è limitata.`,
  a: r`<strong>Enunciato.</strong> $a_n\to L\in\R\ \Rightarrow\ \exists M>0: |a_n|\le M\ \forall n$.<br><br>Si applica la definizione con $\eps=1$ per stimare la coda ($|a_n|<1+|L|$) e si prende il massimo con i finitamente molti termini iniziali. Il viceversa è falso: $(-1)^n$. Traccia completa nella pagina <em>Teoremi</em>.` },

{ id: '1.40', sez: 2, mark: '**', teo: 'T-alg', t: r`Enunciare e dimostrare il teorema sull'algebra dei limiti.`,
  a: r`<strong>Enunciato.</strong> Se $a_n\to L\in\R$ e $b_n\to M\in\R$, allora:
$$a_n\pm b_n\to L\pm M,\qquad a_nb_n\to LM,\qquad \frac{a_n}{b_n}\to\frac LM\ (M\ne0),\qquad |a_n|\to|L|.$$
Somma: disuguaglianza triangolare e $\eps/2$. Prodotto: «aggiungi e togli» $a_nM$, usando che $(a_n)$ è limitata perché convergente. Traccia completa nella pagina <em>Teoremi</em>.` },

{ id: '1.41', sez: 2, t: r`Descrivere l'algebra di limiti con l'infinito. Cosa si intende per forme indeterminate?`,
  a: r`Nell'<strong>aritmetica estesa</strong> di $\overline\R=\R\cup\{\pm\infty\}$ si pone, per $L\in\R$:
$$L+(+\infty)=+\infty,\quad (+\infty)+(+\infty)=+\infty,\quad L\cdot(+\infty)=\begin{cases}+\infty & L>0\\ -\infty & L<0\end{cases},$$
$$\frac{L}{\pm\infty}=0,\qquad \frac{L}{0^+}=\begin{cases}+\infty & L>0\\ -\infty & L<0\end{cases},\qquad (+\infty)\cdot(+\infty)=+\infty.$$
Le <strong>forme indeterminate</strong> (o di indecisione) sono le combinazioni per cui il limite <em>non è determinato</em> dai soli limiti dei fattori: servono altre informazioni. Sono sette:
$$+\infty-\infty,\qquad 0\cdot\infty,\qquad \frac{\infty}{\infty},\qquad \frac00,\qquad 1^{\infty},\qquad \infty^{0},\qquad 0^{0}.$$
<strong>Esempio che spiega perché.</strong> Con $a_n=n^2$, $b_n=n$ (entrambe $\to+\infty$): $a_n-b_n\to+\infty$, $b_n-a_n\to-\infty$, ma $(n+1)-n\to1$. La stessa forma $\infty-\infty$ dà risultati diversi.<br><br>
Le forme indeterminate si risolvono con: raccoglimento del termine dominante, gerarchia degli infiniti, limiti notevoli, equivalenze asintotiche e o-piccoli.` },

{ id: '1.42', sez: 2, mark: '*', teo: 'T07', t: r`Enunciare e dimostrare il teorema sulla permanenza del segno (per successioni).`,
  a: r`<strong>Enunciato.</strong> Se $a_n\to L>0$ allora $a_n>\frac L2>0$ definitivamente (simmetricamente per $L<0$).<br><br>Dimostrazione: si applica la definizione con $\eps=\frac L2$. <strong>Forma inversa:</strong> se $a_n\ge0$ definitivamente e $a_n\to L$, allora $L\ge0$ — <em>non</em> $L>0$ (controesempio $\frac1n$). Traccia completa nella pagina <em>Teoremi</em>.` },

{ id: '1.43', sez: 2, mark: '**', teo: 'T-conf', t: r`Enunciare e dimostrare la proprietà del confronto (per successioni).`,
  a: r`<strong>Enunciato.</strong> Se $a_n\to L$, $b_n\to M$ e $a_n\le b_n$ definitivamente, allora $L\le M$.<br><br>Per assurdo, con $\eps=\frac{L-M}2$ se fosse $L>M$. Anche qui la disuguaglianza stretta non si conserva: da $a_n\lt b_n$ segue solo $L\le M$. Traccia completa nella pagina <em>Teoremi</em>.` },

{ id: '1.44', sez: 2, mark: '*', teo: 'T08', t: r`Enunciare e dimostrare il teorema del confronto (o dei due carabinieri).`,
  a: r`<strong>Enunciato.</strong> Se $a_n\le b_n\le c_n$ definitivamente e $a_n\to L$, $c_n\to L$ con $L\in\R$, allora $b_n\to L$.<br><br>Dimostrazione: per $\eps>0$ fissato si prende $N=\max\{N_1,N_2,N_3\}$ e si incastra $b_n$ nella catena $L-\eps\lt a_n\le b_n\le c_n\lt L+\eps$. Notare che l'esistenza del limite di $(b_n)$ non è un'ipotesi, è la tesi. Traccia completa nella pagina <em>Teoremi</em>.` },

{ id: '1.45', sez: 2, t: r`Che proprietà hanno le successioni infinitesime e il loro modulo?`,
  a: r`$(a_n)$ si dice <strong>infinitesima</strong> se $a_n\to0$.<br><br>
<strong>Proprietà fondamentale:</strong> $$a_n\to0\iff |a_n|\to0.$$
<em>Dimostrazione.</em> Basta osservare che $\bigl||a_n|-0\bigr|=|a_n|=|a_n-0|$: le due definizioni di limite sono letteralmente la stessa condizione $|a_n|<\eps$. $\blacksquare$<br><br>
<strong>Attenzione:</strong> questa equivalenza vale <em>solo</em> per il limite $0$. In generale $|a_n|\to|L|$ non implica $a_n\to L$: per $a_n=(-1)^n$ si ha $|a_n|=1\to1$, ma $(a_n)$ è irregolare.<br><br>
Altre proprietà: somma e differenza di infinitesime è infinitesima; il prodotto di un'infinitesima per una limitata è infinitesimo (quesito successivo); se $a_n\to L$ allora $a_n-L$ è infinitesima — è il modo standard di ricondurre un limite qualunque a un limite nullo.` },

{ id: '1.46', sez: 2, t: r`Di quale proprietà gode una successione data dal prodotto di una successione infinitesima per una limitata?`,
  a: r`<strong>Teorema.</strong> Se $a_n\to0$ e $(b_n)$ è limitata, allora $a_nb_n\to0$.<br><br>
<em>Dimostrazione.</em> Per ipotesi $\exists K>0$ con $|b_n|\le K$ per ogni $n$. Sia $\eps>0$: poiché $a_n\to0$, $\exists N$ tale che $|a_n|<\frac\eps K$ per ogni $n>N$. Allora $$|a_nb_n-0|=|a_n||b_n|\le K|a_n|\lt K\cdot\frac{\eps}{K}=\eps\qquad\forall n>N.$$ Dunque $a_nb_n\to0$. $\blacksquare$<br><br>
<strong>Perché è utile:</strong> risolve forme $0\cdot(\text{oscillante})$ dove l'algebra dei limiti non si applica, perché $(b_n)$ non deve avere limite — basta che sia limitata.<br><br>
<strong>Esempi.</strong> $\dfrac{\sin n}{n}=\frac1n\cdot\sin n\to0$; $\dfrac{(-1)^n}{n}\to0$; $\dfrac{\cos(n!)}{\sqrt n}\to0$.` },

{ id: '1.47', sez: 2, mark: '*', teo: 'T09', t: r`Enunciare e dimostrare il teorema sulla regolarità delle successioni monotòne.`,
  a: r`<strong>Enunciato.</strong> Ogni successione monotòna è regolare. Se $(a_n)$ è crescente, $\lim_n a_n=\sup_n a_n$ (finito se limitata superiormente, $+\infty$ altrimenti); se decrescente, $\lim_n a_n=\inf_n a_n$.<br><br>Dimostrazione: il candidato limite è $L=\sup_n a_n$, che esiste per <em>completezza</em>; la caratterizzazione del sup fornisce $a_N>L-\eps$ e la monotonia propaga la stima a tutta la coda. Traccia completa nella pagina <em>Teoremi</em>.` },

{ id: '1.48', sez: 2, t: r`Dare la definizione di numero di Nepero. Perché è ben posta?`,
  a: r`$$e:=\lim_{n\to\infty}\left(1+\frac1n\right)^{n}.$$
<strong>Perché la definizione è ben posta.</strong> Bisogna sapere che il limite <em>esiste</em>. Posto $a_n=\left(1+\frac1n\right)^n$ si dimostra che
<ol><li>$(a_n)$ è <strong>strettamente crescente</strong>;</li>
<li>$(a_n)$ è <strong>limitata superiormente</strong> (per esempio da $3$).</li></ol>
Per il teorema sulla <em>regolarità delle successioni monotòne</em>, $(a_n)$ converge, e il suo limite — che si dimostra essere irrazionale e anzi trascendente — si chiama $e$. Numericamente $e\simeq2{,}718281\dots$, e vale $2\lt e<3$.<br><br>
Si noti che si tratta di una forma indeterminata $1^{\infty}$: la base tende a $1$ e l'esponente a $+\infty$, e i due effetti si bilanciano. Non si può concludere né $1$ né $+\infty$.<br><br>
<strong>Generalizzazione utile:</strong> $\left(1+\frac{c}{n}\right)^n\to e^{c}$, e più in generale se $x_n\to0$ con $x_n\ne0$, $(1+x_n)^{1/x_n}\to e$.` },

{ id: '1.49', sez: 2, mark: '**', teo: 'T-not', t: r`Elencare i principali limiti notevoli di successioni e dimostrarli.`,
  a: r`Per $x_n\to0$, $x_n\ne0$ definitivamente:
$$\frac{\sin x_n}{x_n}\to1,\quad \frac{1-\cos x_n}{x_n^{2}}\to\frac12,\quad \frac{\tan x_n}{x_n}\to1,\quad \frac{\arctan x_n}{x_n}\to1,$$
$$\frac{e^{x_n}-1}{x_n}\to1,\quad \frac{\ln(1+x_n)}{x_n}\to1,\quad \frac{(1+x_n)^{\alpha}-1}{x_n}\to\alpha.$$
Inoltre $\left(1+\frac1n\right)^n\to e$ e $\sqrt[n]{n}\to1$.<br><br>
Equivalentemente, con gli o-piccoli per $x\to0$: $\sin x=x+o(x)$, $\cos x=1-\frac{x^2}2+o(x^2)$, $e^x=1+x+o(x)$, $\ln(1+x)=x+o(x)$, $(1+x)^\alpha=1+\alpha x+o(x)$. Vedi <em>Teoremi</em> per il dettaglio.` },

{ id: '1.50', sez: 2, t: r`Enunciare il criterio del rapporto per successioni.`,
  a: r`<strong>Criterio.</strong> Sia $a_n>0$ definitivamente ed esista $$\ell=\lim_{n\to\infty}\frac{a_{n+1}}{a_n}.$$
<ul><li>Se $\ell<1$, allora $a_n\to0$.</li>
<li>Se $\ell>1$ (anche $\ell=+\infty$), allora $a_n\to+\infty$.</li>
<li>Se $\ell=1$, il criterio <strong>non decide</strong>.</li></ul>
<strong>Controesempi per $\ell=1$:</strong> $a_n=n\to+\infty$ e $a_n=\frac1n\to0$ hanno entrambe $\frac{a_{n+1}}{a_n}\to1$.<br><br>
<strong>Quando usarlo:</strong> quando compaiono fattoriali, esponenziali o prodotti, dove il rapporto si semplifica bene. È lo strumento standard per dimostrare la gerarchia degli infiniti: per esempio $a_n=\frac{2^n}{n!}$ ha $\frac{a_{n+1}}{a_n}=\frac{2}{n+1}\to0<1$, quindi $a_n\to0$.<br><br>
Da non confondere con l'omonimo criterio per le <em>serie</em>: qui la conclusione riguarda il comportamento di $a_n$, non della somma.` },

{ id: '1.51', sez: 2, mark: '**', teo: 'T-inf', t: r`Discutere il confronto tra gli infiniti (fornendo le dimostrazioni).`,
  a: r`Per $n\to+\infty$, con $\alpha,\beta>0$ e $a>1$: $$(\ln n)^{\beta}\ll n^{\alpha}\ll a^{\,n}\ll n!\ll n^{\,n},$$ dove $x_n\ll y_n$ significa $\frac{x_n}{y_n}\to0$ (cioè $y_n$ è un infinito di ordine superiore).<br><br>
Ogni anello si dimostra con il criterio del rapporto per successioni; vedi <em>Teoremi</em> per i conti. In pratica: in un quoziente di infiniti, comanda il termine più a destra nella gerarchia.` },

{ id: '1.52', sez: 2, t: r`Dare le definizioni riguardanti i confronti asintotici per successioni infinite e infinitesime.`,
  a: r`Siano $(a_n)$, $(b_n)$ entrambe infinite (o entrambe infinitesime), con $b_n\ne0$ definitivamente, e sia $$\ell=\lim_{n\to\infty}\frac{a_n}{b_n}.$$
<ul><li>Se $\ell=0$: $a_n$ è un infinito di <strong>ordine inferiore</strong> a $b_n$ (risp. un infinitesimo di <strong>ordine superiore</strong>). Si scrive $a_n=o(b_n)$.</li>
<li>Se $\ell=\pm\infty$: $a_n$ è un infinito di <strong>ordine superiore</strong> (risp. un infinitesimo di ordine inferiore).</li>
<li>Se $\ell\in\R\setminus\{0\}$: $a_n$ e $b_n$ sono dello <strong>stesso ordine</strong>. Se in particolare $\ell=1$ si dicono <strong>asintoticamente equivalenti</strong>, $a_n\sim b_n$.</li>
<li>Se $\ell$ non esiste: le due successioni <strong>non sono confrontabili</strong>.</li></ul>
<strong>Ordine rispetto a un campione.</strong> Per gli infinitesimi si usa il campione $\frac1n$: si dice che $a_n$ è infinitesimo di ordine $\alpha>0$ se $\lim_n n^{\alpha}a_n=\ell\in\R\setminus\{0\}$. Per gli infiniti si usa $n$: $a_n$ è infinito di ordine $\alpha$ se $\lim_n\frac{a_n}{n^{\alpha}}=\ell\ne0$.<br><br>
<strong>Esempio di non confrontabilità:</strong> $a_n=n(2+(-1)^n)$ e $b_n=n$: il rapporto oscilla fra $1$ e $3$.` },

{ id: '1.53', sez: 2, t: r`Dare la definizione di successioni asintoticamente equivalenti. Scrivere e dimostrare le proprietà dell'equivalenza asintotica.`,
  a: r`<strong>Definizione.</strong> $a_n\sim b_n$ (per $n\to\infty$) se $b_n\ne0$ definitivamente e $$\lim_{n\to\infty}\frac{a_n}{b_n}=1.$$
<strong>Proprietà (è una relazione di equivalenza).</strong>
<ul><li><em>Riflessiva:</em> $a_n\sim a_n$ (se $a_n\ne0$ def.), perché $\frac{a_n}{a_n}=1$.</li>
<li><em>Simmetrica:</em> se $a_n\sim b_n$ allora $\frac{b_n}{a_n}=\left(\frac{a_n}{b_n}\right)^{-1}\to1$ per l'algebra dei limiti (lecito perché il limite $1\ne0$), quindi $b_n\sim a_n$.</li>
<li><em>Transitiva:</em> se $a_n\sim b_n$ e $b_n\sim c_n$, allora $\frac{a_n}{c_n}=\frac{a_n}{b_n}\cdot\frac{b_n}{c_n}\to1\cdot1=1$.</li></ul>
<strong>Proprietà operative.</strong> Se $a_n\sim \tilde a_n$ e $b_n\sim\tilde b_n$:
<ul><li>$a_nb_n\sim\tilde a_n\tilde b_n$ e $\dfrac{a_n}{b_n}\sim\dfrac{\tilde a_n}{\tilde b_n}$ &nbsp;(<em>si può sostituire in prodotti e quozienti</em>);</li>
<li>$a_n^{\alpha}\sim\tilde a_n^{\alpha}$;</li>
<li>se $a_n\sim b_n$, allora $\lim_n a_n=\lim_n b_n$ (se uno dei due esiste).</li></ul>
<strong>Attenzione — errore classico.</strong> Non si può sostituire dentro una <strong>somma</strong>: da $a_n\sim\tilde a_n$ e $b_n\sim\tilde b_n$ <em>non</em> segue $a_n+b_n\sim\tilde a_n+\tilde b_n$. Controesempio: $a_n=n+1\sim n$, $b_n=-n$; allora $a_n+b_n=1$, ma $n+(-n)=0$. Né si può sostituire dentro un esponente o un logaritmo.` },

{ id: '1.54', sez: 2, t: r`Introdurre il concetto di o-piccolo di Landau. Fare degli esempi.`,
  a: r`<strong>Definizione.</strong> Date $(a_n)$ e $(b_n)$ con $b_n\ne0$ definitivamente, si scrive $$a_n=o(b_n)\qquad (n\to\infty)$$ se $$\lim_{n\to\infty}\frac{a_n}{b_n}=0.$$ Si legge «$a_n$ è o-piccolo di $b_n$» e significa che $a_n$ è <em>trascurabile</em> rispetto a $b_n$.<br><br>
<strong>Esempi.</strong> $n=o(n^2)$; $n^2=o(2^n)$; $\ln n=o(n)$; $\frac1{n^2}=o\!\left(\frac1n\right)$; $\sin\frac1n-\frac1n=o\!\left(\frac1n\right)$; $a_n\to0\iff a_n=o(1)$.<br><br>
<strong>Attenzione alla notazione.</strong> $o(b_n)$ non è un oggetto preciso ma una <em>classe</em> di successioni: il segno $=$ va letto come «appartiene a». Per questo $o(n)+o(n)=o(n)$ è corretto, ma non si può semplificare: da $a_n=o(n)$ e $c_n=o(n)$ non segue $a_n=c_n$.<br><br>
<strong>Legame con $\sim$:</strong> $a_n\sim b_n\iff a_n=b_n+o(b_n)$.` },

{ id: '1.55', sez: 2, t: r`Descrivere l'algebra degli o-piccoli.`,
  a: r`Per $n\to\infty$ (le stesse regole valgono per $x\to0$ nel calcolo dei limiti di funzioni):
<ul><li>$o(b_n)\pm o(b_n)=o(b_n)$ &nbsp;(somma di trascurabili è trascurabile);</li>
<li>$c\cdot o(b_n)=o(b_n)$ per ogni costante $c\ne0$;</li>
<li>$a_n\cdot o(b_n)=o(a_nb_n)$; in particolare $b_n\cdot o(b_n)=o(b_n^2)$;</li>
<li>$o(a_n)\cdot o(b_n)=o(a_nb_n)$;</li>
<li>$o\bigl(o(b_n)\bigr)=o(b_n)$;</li>
<li><strong>principio di assorbimento:</strong> se $a_n=o(b_n)$, allora $a_n+b_n\sim b_n$, e $o(b_n)+o(a_n)=o(b_n)$ — sopravvive il termine di ordine <em>inferiore</em> di trascurabilità, cioè il più grande.</li>
<li>per potenze con $\alpha>\beta>0$ e $x\to0$: $o(x^{\alpha})+o(x^{\beta})=o(x^{\beta})$ (vince l'esponente più piccolo); per $n\to\infty$ con potenze di $n$ vince l'esponente più grande.</li></ul>
<strong>Esempio d'uso.</strong> $$\frac{\sin\frac1n-\frac1n}{\frac1{n^3}}:\quad \sin x=x-\frac{x^3}{6}+o(x^3)\Rightarrow \sin\frac1n-\frac1n=-\frac{1}{6n^3}+o\!\left(\frac1{n^3}\right)\Rightarrow \text{il limite è }-\frac16.$$
<strong>Regola d'oro:</strong> quando si usano gli sviluppi, tutti i termini vanno spinti <em>allo stesso ordine</em>, altrimenti si perdono informazioni o si producono cancellazioni illecite.` },

/* ---------- Sezione 3: serie ---------- */
{ id: '1.56', sez: 3, t: r`Dare le definizioni di somma parziale e di serie numerica. Cosa si intende per carattere di una serie?`,
  a: r`Data una successione $(a_n)_{n\ge0}$, si dice <strong>somma parziale $n$-esima</strong> $$s_n:=\sum_{k=0}^{n}a_k=a_0+a_1+\dots+a_n.$$ La <strong>serie</strong> $\displaystyle\sum_{n=0}^{\infty}a_n$ è, per definizione, la successione $(s_n)$ delle somme parziali; $a_n$ si chiama <em>termine generale</em>.<br><br>
Il <strong>carattere</strong> della serie è il comportamento di $(s_n)$:
<ul><li><strong>convergente</strong> se $s_n\to S\in\R$; in tal caso $S$ si dice <em>somma</em> della serie e si scrive $\sum_{n\ge0}a_n=S$;</li>
<li><strong>divergente</strong> (a $+\infty$ o $-\infty$) se $s_n\to\pm\infty$;</li>
<li><strong>indeterminata</strong> (o irregolare) se $(s_n)$ non ammette limite.</li></ul>
<strong>Esempi.</strong> $\sum 2^{-n}$ converge (somma $2$); $\sum\frac1n$ diverge; $\sum(-1)^n$ è indeterminata ($s_n$ vale $1,0,1,0,\dots$).<br><br>
<strong>Osservazione.</strong> Il carattere non cambia se si modifica un numero finito di termini (cambia semmai la somma). Per questo l'indice iniziale è irrilevante per stabilire il carattere.` },

{ id: '1.57', sez: 3, mark: '*', teo: 'T10', t: r`Enunciare e dimostrare la condizione necessaria per la convergenza di una serie. È anche sufficiente?`,
  a: r`<strong>Enunciato.</strong> Se $\sum_n a_n$ converge, allora $a_n\to0$.<br><br>
Dimostrazione: $a_n=s_n-s_{n-1}\to S-S=0$.<br><br>
<strong>Non è sufficiente:</strong> la serie armonica $\sum_{n\ge1}\frac1n$ ha $\frac1n\to0$ ma diverge. Si usa quindi come test di <em>non</em> convergenza: se $a_n\not\to0$, la serie non converge. Traccia completa nella pagina <em>Teoremi</em>.` },

{ id: '1.58', sez: 3, mark: '**', teo: 'T-pos', t: r`Qual è il carattere delle serie a termini non negativi? Perché?`,
  a: r`Una serie a termini non negativi ($a_n\ge0$) è sempre <strong>regolare</strong>: o converge, o diverge a $+\infty$. Non può essere indeterminata.<br><br>
Motivo: $s_{n+1}-s_n=a_{n+1}\ge0$, quindi $(s_n)$ è crescente, e ogni successione monotòna è regolare. In particolare $$\sum_n a_n\ \text{converge}\iff (s_n)\ \text{è limitata superiormente},$$ e in tal caso la somma è $\sup_n s_n$. È il fatto che rende possibili tutti i criteri di convergenza.` },

{ id: '1.59', sez: 3, mark: '**', teo: 'T-serie-geo', t: r`Introdurre la serie geometrica. Discuterne la convergenza e scriverne la somma (dandone la dimostrazione).`,
  a: r`<strong>Serie geometrica</strong> di ragione $q\in\R$: $\displaystyle\sum_{n=0}^{\infty}q^{n}$.
$$\sum_{n=0}^{\infty}q^{n}=\begin{cases}\dfrac{1}{1-q} & \text{se }|q|<1\quad(\text{converge})\\[6pt] +\infty & \text{se }q\ge1\quad(\text{diverge})\\[4pt] \text{non esiste} & \text{se }q\le-1\quad(\text{indeterminata}).\end{cases}$$
Dimostrazione: si parte dalla somma parziale $s_n=\frac{1-q^{n+1}}{1-q}$ e si passa al limite. Vedi <em>Teoremi</em>.<br><br>
<strong>Forma utile negli esercizi:</strong> se la serie parte da $n=n_0$, $$\sum_{n=n_0}^{\infty}q^{n}=\frac{q^{\,n_0}}{1-q}\qquad(|q|<1):$$ <em>primo termine diviso $1-q$</em>.` },

{ id: '1.60', sez: 3, t: r`Introdurre la serie armonica e la serie armonica generalizzata, mettendo in luce, per quest'ultima, quando converge o diverge.`,
  a: r`<strong>Serie armonica:</strong> $\displaystyle\sum_{n=1}^{\infty}\frac1n$. Il termine generale è infinitesimo, ma la serie <strong>diverge</strong> a $+\infty$.<br><br>
<em>Dimostrazione classica (Oresme), per raggruppamento:</em> $$1+\frac12+\underbrace{\left(\frac13+\frac14\right)}_{>\,2\cdot\frac14=\frac12}+\underbrace{\left(\frac15+\dots+\frac18\right)}_{>\,4\cdot\frac18=\frac12}+\dots$$ Ogni blocco di $2^{k}$ termini ha somma $>\frac12$, quindi $s_{2^m}>1+\frac m2\to+\infty$.<br><br>
<strong>Serie armonica generalizzata:</strong> $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n^{\alpha}}$, con $\alpha\in\R$: $$\boxed{\ \text{converge}\iff\alpha>1;\qquad \text{diverge}\iff\alpha\le1.\ }$$ (Per $\alpha\le0$ il termine generale non tende a $0$, quindi la serie diverge già per la condizione necessaria.)<br><br>
È la <strong>famiglia campione</strong> di riferimento: nel criterio del confronto asintotico si confronta quasi sempre con $\frac1{n^{\alpha}}$.<br><br>
<strong>Variante da ricordare:</strong> $\displaystyle\sum_{n\ge2}\frac{1}{n(\ln n)^{\beta}}$ converge $\iff\beta>1$.` },

{ id: '1.61', sez: 3, mark: '*', teo: 'T11', t: r`Enunciare e dimostrare il criterio del confronto (per le serie).`,
  a: r`<strong>Enunciato.</strong> Se $0\le a_n\le b_n$ definitivamente: $\sum b_n$ converge $\Rightarrow\sum a_n$ converge; $\sum a_n$ diverge $\Rightarrow\sum b_n$ diverge.<br><br>
Dimostrazione: le somme parziali sono crescenti e $A_n\le B_n\le B$, dunque $(A_n)$ è crescente e limitata, quindi convergente. La seconda implicazione è la contronominale. Traccia completa nella pagina <em>Teoremi</em>.` },

{ id: '1.62', sez: 3, mark: '*', teo: 'T12', t: r`Enunciare e dimostrare il criterio del confronto asintotico (per le serie). Esplicitarlo nel caso in cui si utilizza la serie armonica.`,
  a: r`<strong>Enunciato.</strong> Siano $a_n\ge0$, $b_n>0$ definitivamente e $\ell=\lim_n\frac{a_n}{b_n}$. Se $\ell\in(0,+\infty)$ le due serie hanno lo stesso carattere; se $\ell=0$ e $\sum b_n$ converge allora $\sum a_n$ converge; se $\ell=+\infty$ e $\sum b_n$ diverge allora $\sum a_n$ diverge.<br><br>
Dimostrazione: da $\frac\ell2<\frac{a_n}{b_n}<\frac{3\ell}2$ si ricava $\frac\ell2 b_n\lt a_n<\frac{3\ell}2 b_n$ e si applica il criterio del confronto.<br><br>
<strong>Forma con la serie armonica generalizzata (quella che si usa davvero).</strong> Se $a_n\ge0$ e $$a_n\sim\frac{c}{n^{\alpha}}\quad\text{con }c>0,$$ allora $\sum a_n$ converge $\iff\alpha>1$.<br><br>
<em>Esempio.</em> $a_n=\dfrac{3n+2}{n^3-n+1}\sim\dfrac{3n}{n^3}=\dfrac{3}{n^2}$, e poiché $\alpha=2>1$ la serie converge. Traccia completa nella pagina <em>Teoremi</em>.` },

{ id: '1.63', sez: 3, mark: '*', teo: 'T13', t: r`Enunciare e dimostrare il criterio del rapporto (per le serie).`,
  a: r`<strong>Enunciato.</strong> Sia $a_n>0$ definitivamente ed esista $L=\lim_n\frac{a_{n+1}}{a_n}$. Se $L<1$ la serie converge; se $L>1$ diverge; se $L=1$ il criterio non decide.<br><br>
Dimostrazione: per $L<1$ si sceglie $q\in(L,1)$, si ottiene $a_{N+k}\lt q^k a_N$ e si confronta con la serie geometrica. Per $L>1$ il termine generale non tende a $0$. Controesempi per $L=1$: $\sum\frac1n$ e $\sum\frac1{n^2}$. Traccia completa nella pagina <em>Teoremi</em>.` },

{ id: '1.64', sez: 3, t: r`Enunciare il criterio della radice (per le serie).`,
  a: r`<strong>Criterio della radice.</strong> Sia $a_n\ge0$ definitivamente ed esista $$L=\lim_{n\to\infty}\sqrt[n]{a_n}.$$
<ul><li>Se $L<1$: la serie $\sum a_n$ <strong>converge</strong>.</li>
<li>Se $L>1$ (anche $L=+\infty$): la serie <strong>diverge</strong>.</li>
<li>Se $L=1$: il criterio <strong>non decide</strong>.</li></ul>
<strong>Idea della dimostrazione.</strong> Se $L<1$, scelto $q\in(L,1)$, definitivamente $\sqrt[n]{a_n}\lt q$, cioè $a_n\lt q^{n}$: confronto con la serie geometrica convergente. Se $L>1$, definitivamente $a_n>1$, quindi $a_n\not\to0$.<br><br>
<strong>Quando usarlo:</strong> quando il termine generale contiene <strong>potenze $n$-esime</strong>, per esempio $a_n=\left(\frac{n}{2n+1}\right)^{n}$, dove $\sqrt[n]{a_n}=\frac{n}{2n+1}\to\frac12<1$: converge.<br><br>
<strong>Relazione col criterio del rapporto:</strong> se esiste il limite del rapporto, esiste anche quello della radice e coincide. La radice è quindi (leggermente) più potente; ma i casi $L=1$ restano indecisi per entrambi.` },

{ id: '1.65', sez: 3, t: r`Cosa si intende per serie alternate? Enunciare il criterio di Leibniz.`,
  a: r`Una <strong>serie alternata</strong> ha termini di segno alternato: $$\sum_{n}(-1)^{n}b_n\qquad\text{con }b_n\ge0.$$
<strong>Criterio di Leibniz.</strong> Se
<ol><li>$b_n\ge0$ per ogni $n$;</li>
<li>$(b_n)$ è <strong>decrescente</strong> (almeno definitivamente);</li>
<li>$b_n\to0$,</li></ol>
allora la serie $\sum_n(-1)^n b_n$ <strong>converge</strong>. Inoltre, detta $S$ la somma e $s_n$ la somma parziale, vale la <strong>stima dell'errore</strong> $$|S-s_n|\le b_{n+1},$$ e $S$ è compresa fra due somme parziali consecutive.<br><br>
<strong>Le tre ipotesi servono tutte.</strong> Senza la monotonia il criterio può fallire anche con $b_n\to0$. Esempio classico: $\sum_{n\ge1}\frac{(-1)^n}{n}$ converge (a $-\ln2$) ma non converge assolutamente: è <em>semplicemente convergente</em>.<br><br>
<strong>Strategia operativa per le serie a segno variabile:</strong> prima si prova la convergenza assoluta (studiando $\sum|a_n|$ con i criteri per serie positive); se $\sum|a_n|$ diverge e la serie è alternata, si prova Leibniz.` },

{ id: '1.66', sez: 3, mark: '*', teo: 'T14', t: r`Cosa si intende per convergenza assoluta di una serie? Qual è la relazione tra convergenza semplice e assoluta?`,
  a: r`<strong>Definizione.</strong> La serie $\sum_n a_n$ converge <strong>assolutamente</strong> se converge la serie dei moduli $\sum_n|a_n|$.<br><br>
<strong>Teorema.</strong> La convergenza assoluta implica la convergenza semplice: $$\sum_n|a_n|\ \text{converge}\ \Longrightarrow\ \sum_n a_n\ \text{converge},\qquad\text{e}\qquad \left|\sum_n a_n\right|\le\sum_n|a_n|.$$
<em>Dimostrazione:</em> si pone $b_n=a_n+|a_n|\in[0,2|a_n|]$, si applica il criterio del confronto a $\sum b_n$ e si scrive $\sum a_n=\sum b_n-\sum|a_n|$.<br><br>
<strong>Il viceversa è falso.</strong> $\sum_{n\ge1}\frac{(-1)^{n}}{n}$ converge per Leibniz ma $\sum\frac1n$ diverge: si dice <strong>semplicemente convergente</strong> (o condizionatamente convergente).<br><br>
<strong>Perché la distinzione conta.</strong> In una serie assolutamente convergente si possono riordinare i termini senza cambiare la somma; in una serie semplicemente convergente no — per il teorema di Riemann sul riordinamento, riordinandola si può ottenere qualunque somma. Traccia completa nella pagina <em>Teoremi</em>.` }
  ];

  const AM = (window.AM = window.AM || {});
  AM.QUESITI = Q;
})();
