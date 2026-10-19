/* ============================================================
   teoremi.js — dimostrazioni della PRIMA PARTE, passo per passo
   mark "*"  → richiesta nella prova SCRITTA (n = numero ufficiale)
   mark "**" → richiesta solo nella eventuale prova ORALE
   ============================================================ */
(function () {
  'use strict';
  const r = String.raw;

  const TEOREMI = [

  /* ===================== SEZIONE 1 ===================== */
  {
    id: 'T-par', sez: 1, mark: '**', q: '1.4',
    titolo: 'Parità dei quadrati',
    enunciato: r`Sia $m\in\Z$. Allora: $m$ è pari $\iff$ $m^2$ è pari. Equivalentemente, $m$ è dispari $\iff$ $m^2$ è dispari.`,
    idea: r`Verso diretto per calcolo; verso inverso per contrapposizione — non per assurdo.`,
    steps: [
      { cue: r`Verso $\Rightarrow$, caso pari`, body: r`Se $m$ è pari, per definizione $\exists\,h\in\Z:\ m=2h$. Allora $m^2=(2h)^2=4h^2=2\underbrace{(2h^2)}_{\in\,\Z}$, quindi $m^2$ è pari.` },
      { cue: r`Verso $\Rightarrow$, caso dispari`, body: r`Se $m$ è dispari, $\exists\,h\in\Z:\ m=2h+1$. Allora $m^2=4h^2+4h+1=2\underbrace{(2h^2+2h)}_{\in\,\Z}+1$, quindi $m^2$ è dispari.` },
      { cue: r`Verso $\Leftarrow$: come si ottiene senza fatica?`, body: r`Per <strong>contrapposizione</strong>. L'implicazione «$m^2$ pari $\Rightarrow$ $m$ pari» è logicamente equivalente alla sua contronominale «$m$ dispari $\Rightarrow$ $m^2$ dispari», che è esattamente il passo 2, già dimostrato. $\blacksquare$` }
    ],
    note: r`È il lemma che serve per $\sqrt2\notin\Q$. All'esame conviene enunciarlo come lemma <em>prima</em> di attaccare l'irrazionalità, così la dimostrazione principale resta pulita.`
  },
  {
    id: 'T01', n: 1, sez: 1, mark: '*', q: '1.5',
    titolo: r`Irrazionalità di $\sqrt2$`,
    enunciato: r`Non esiste alcun numero razionale $q$ tale che $q^2=2$. In simboli: $\sqrt2\notin\Q$.`,
    idea: r`Per assurdo, usando la rappresentazione ridotta ai minimi termini: la parità «contagia» sia il numeratore sia il denominatore, contraddicendo la coprimalità.`,
    steps: [
      { cue: 'Come si imposta la dimostrazione?', body: r`Per <strong>assurdo</strong>: neghiamo la tesi e supponiamo $\sqrt2\in\Q$. Allora $\exists\,m,n\in\Z$, $n\neq0$, tali che $\sqrt2=\dfrac{m}{n}$.` },
      { cue: 'Quale riduzione lecita rende la dimostrazione possibile?', body: r`Senza perdita di generalità possiamo supporre $m$ ed $n$ <strong>coprimi</strong> (frazione ridotta ai minimi termini): se avessero un fattore comune, lo semplificheremmo. Questa ipotesi è l'innesco della contraddizione.` },
      { cue: 'Elevare al quadrato', body: r`$$2=\frac{m^2}{n^2}\quad\Longrightarrow\quad m^2=2n^2.$$ Dunque $m^2$ è pari.` },
      { cue: 'Applicare il lemma sulla parità', body: r`Per il teorema sulla parità dei quadrati, $m^2$ pari $\Rightarrow$ $m$ pari, cioè $\exists\,k\in\Z:\ m=2k$.` },
      { cue: 'Sostituire e ripetere il ragionamento', body: r`$$m^2=2n^2\ \Longrightarrow\ (2k)^2=2n^2\ \Longrightarrow\ 4k^2=2n^2\ \Longrightarrow\ n^2=2k^2,$$ quindi $n^2$ è pari e, ancora per il lemma, $n$ è pari.` },
      { cue: "Dov'è l'assurdo?", body: r`Abbiamo ottenuto che $m$ ed $n$ sono <strong>entrambi pari</strong>, cioè hanno il fattore comune $2$: ma li avevamo scelti coprimi. Contraddizione. Dunque l'ipotesi $\sqrt2\in\Q$ è falsa e $\sqrt2\notin\Q$. $\blacksquare$` }
    ],
    note: r`Errore tipico: dimenticare l'ipotesi di coprimalità. Senza di essa il ragionamento non produce alcuna contraddizione (si può scendere all'infinito, ma va detto esplicitamente). Secondo errore: usare «$m^2$ pari $\Rightarrow$ $m$ pari» senza averlo dimostrato — è proprio il lemma precedente.`
  },
  {
    id: 'T-sum', sez: 1, mark: '**', q: '1.7',
    titolo: 'Somma dei primi $n$ naturali',
    enunciato: r`$$\forall n\in\N:\qquad \sum_{k=0}^{n}k \;=\; 0+1+2+\dots+n \;=\; \frac{n(n+1)}{2}.$$`,
    idea: r`Induzione: aggiungere $(n+1)$ e raccoglierlo.`,
    steps: [
      { cue: 'Base', body: r`$P(0)$: il primo membro vale $0$, il secondo $\dfrac{0\cdot1}{2}=0$. Vera.` },
      { cue: 'Passo induttivo: che cosa si suppone e che cosa si vuole?', body: r`Supponiamo vera $P(n)$, cioè $\sum_{k=0}^n k=\dfrac{n(n+1)}{2}$ (<em>ipotesi induttiva</em>). Vogliamo $P(n+1)$, cioè $\sum_{k=0}^{n+1}k=\dfrac{(n+1)(n+2)}{2}$.` },
      { cue: 'Il conto', body: r`$$\sum_{k=0}^{n+1}k=\underbrace{\sum_{k=0}^{n}k}_{\text{ip. induttiva}}+(n+1)=\frac{n(n+1)}{2}+(n+1)=(n+1)\left(\frac n2+1\right)=\frac{(n+1)(n+2)}{2}.$$ Quindi $P(n+1)$ è vera e, per il principio di induzione, $P(n)$ vale $\forall n\in\N$. $\blacksquare$` }
    ],
    note: r`Nel passo induttivo il punto in cui si <em>usa</em> l'ipotesi va indicato esplicitamente: è la parte che il correttore cerca.`
  },
  {
    id: 'T02', n: 2, sez: 1, mark: '*', q: '1.8',
    titolo: 'Disuguaglianza di Bernoulli',
    enunciato: r`Sia $h\in\R$ con $h>-1$. Allora $$(1+h)^n\;\ge\;1+nh\qquad\forall n\in\N.$$`,
    idea: r`Induzione su $n$. Il punto delicato è <em>perché</em> si può moltiplicare per $(1+h)$ senza invertire il verso.`,
    steps: [
      { cue: 'Base $n=0$', body: r`$(1+h)^0=1$ e $1+0\cdot h=1$: la disuguaglianza vale (con l'uguale). $P(0)$ è vera.` },
      { cue: 'Passo induttivo: enunciare ipotesi e tesi', body: r`Ipotesi induttiva: $(1+h)^n\ge 1+nh$. Tesi: $(1+h)^{n+1}\ge 1+(n+1)h$.` },
      { cue: r`Qual è l'uso cruciale dell'ipotesi $h>-1$?`, body: r`Da $h>-1$ segue $1+h>0$. Moltiplicare i due membri di una disuguaglianza per un numero <strong>positivo</strong> ne conserva il verso. È esattamente qui che l'ipotesi entra in gioco: se fosse $1+h<0$ il verso si invertirebbe e la dimostrazione crollerebbe.` },
      { cue: r`Mossa 1: far comparire $(1+h)^n$ — perché è l'unico modo di usare l'ipotesi`, body: r`Per la proprietà delle potenze si stacca un fattore: $$(1+h)^{n+1}=(1+h)^{n}\cdot(1+h).$$ Serve a questo: l'ipotesi induttiva parla di $(1+h)^n$, quindi bisogna prima farlo <em>apparire</em>.` },
      { cue: r`Mossa 2: sostituire $(1+h)^n$ con $1+nh$ — attenzione, non è un'uguaglianza`, body: r`Si usa il fatto generale: <strong>se $A\ge B$ e $c\ge0$, allora $A\,c\ge B\,c$.</strong><br><br>Qui $A=(1+h)^n$, $B=1+nh$ (è l'<em>ipotesi induttiva</em> $A\ge B$) e $c=1+h>0$ (è l'<em>ipotesi $h>-1$</em>). Moltiplicando i due membri dell'ipotesi induttiva per $(1+h)$: $$(1+h)^{n}\cdot(1+h)\;\ge\;(1+nh)\cdot(1+h).$$ Il fattore $(1+h)$ resta <strong>identico</strong> da entrambe le parti: cambia solo $(1+h)^n$, che viene rimpiazzato da qualcosa di più piccolo. Un prodotto in cui un fattore diminuisce (e l'altro è $\ge0$) non può crescere.` },
      { cue: 'Mossa 3: svolgere il prodotto', body: r`$$(1+nh)(1+h)=1+h+nh+nh^{2}=1+(n+1)h+nh^{2}.$$ Mettendo insieme le tre mosse: $$(1+h)^{n+1}\;\ge\;1+(n+1)h+nh^{2}.$$` },
      { cue: 'Ultimo passo: come si conclude?', body: r`Poiché $n\ge0$ e $h^2\ge0$, si ha $nh^2\ge0$, dunque $$1+(n+1)h+nh^2\;\ge\;1+(n+1)h.$$ Per transitività $(1+h)^{n+1}\ge 1+(n+1)h$, cioè $P(n+1)$. Per il principio di induzione la tesi vale $\forall n\in\N$. $\blacksquare$` }
    ],
    note: r`Si ha uguaglianza se e solo se $n=0$, $n=1$ oppure $h=0$. La disuguaglianza è il motore della dimostrazione che $q^n\to+\infty$ per $q>1$ (basta porre $q=1+h$ con $h>0$). Perché $h>-1$ e non $h\ge-1$? Non per evitare una divisione per zero: nella formula non si divide mai, e con $h=-1$ la disuguaglianza è vera lo stesso ($0^n=0\ge1-n$ per $n\ge1$). Il corso la enuncia con $h>-1$ perché così $1+h>0$ e nel passo induttivo si moltiplica per un numero <em>positivo</em>: all'esame si scrive l'enunciato del corso.`
  },
  {
    id: 'T-geo', sez: 1, mark: '**', q: '1.9',
    titolo: 'Somma di una progressione geometrica',
    enunciato: r`Sia $q\in\R$, $q\ne1$. Allora $$\sum_{k=0}^{n}q^k=1+q+q^2+\dots+q^n=\frac{1-q^{\,n+1}}{1-q}\qquad\forall n\in\N.$$`,
    idea: r`Induzione; in alternativa il «trucco telescopico» $(1-q)S_n$.`,
    steps: [
      { cue: 'Base', body: r`$n=0$: primo membro $=q^0=1$; secondo membro $=\dfrac{1-q}{1-q}=1$ (lecito perché $q\ne1$). Vera.` },
      { cue: 'Passo induttivo', body: r`Supponiamo $\sum_{k=0}^{n}q^k=\dfrac{1-q^{n+1}}{1-q}$. Allora $$\sum_{k=0}^{n+1}q^k=\frac{1-q^{n+1}}{1-q}+q^{n+1}=\frac{1-q^{n+1}+q^{n+1}(1-q)}{1-q}=\frac{1-q^{n+2}}{1-q},$$ che è $P(n+1)$. $\blacksquare$` },
      { cue: 'Dimostrazione alternativa (più rapida)', body: r`Posto $S_n=\sum_{k=0}^n q^k$, si ha $$(1-q)S_n=\sum_{k=0}^n q^k-\sum_{k=0}^n q^{k+1}=q^0-q^{n+1}=1-q^{n+1}$$ (somma telescopica), da cui la tesi dividendo per $1-q\ne0$.` }
    ],
    note: r`Se $q=1$ la formula non ha senso e la somma vale semplicemente $n+1$. Questa identità è la base del calcolo della somma della <strong>serie</strong> geometrica.`
  },
  {
    id: 'T-tri', sez: 1, mark: '**', q: '1.17',
    titolo: 'Disuguaglianza triangolare',
    enunciato: r`$$\forall a,b\in\R:\qquad |a+b|\;\le\;|a|+|b|.$$`,
    idea: r`Usare $|x|=\max\{x,-x\}$, oppure sommare le due disuguaglianze $-|a|\le a\le|a|$.`,
    steps: [
      { cue: 'Punto di partenza', body: r`Per ogni $x\in\R$ vale $-|x|\le x\le |x|$. Scriviamo queste catene per $a$ e per $b$: $$-|a|\le a\le|a|,\qquad -|b|\le b\le |b|.$$` },
      { cue: 'Sommare membro a membro', body: r`$$-(|a|+|b|)\;\le\;a+b\;\le\;|a|+|b|.$$` },
      { cue: 'Conclusione', body: r`Una disuguaglianza della forma $-c\le x\le c$ (con $c\ge0$) equivale a $|x|\le c$. Con $x=a+b$ e $c=|a|+|b|$ si ottiene $|a+b|\le|a|+|b|$. $\blacksquare$` },
      { cue: 'Corollario da ricordare', body: r`$$\bigl|\,|a|-|b|\,\bigr|\;\le\;|a-b|\qquad\text{(disuguaglianza triangolare inversa).}$$ Si ottiene da $|a|=|(a-b)+b|\le|a-b|+|b|$, cioè $|a|-|b|\le|a-b|$, e scambiando i ruoli di $a$ e $b$.` }
    ],
    note: r`L'uguaglianza vale se e solo se $a$ e $b$ hanno lo stesso segno (o uno dei due è nullo).`
  },
  {
    id: 'T03', n: 3, sez: 1, mark: '*', q: '1.20',
    titolo: 'Formule di de Moivre',
    enunciato: r`Siano $z_1=\rho_1(\cos\theta_1+i\sin\theta_1)$ e $z_2=\rho_2(\cos\theta_2+i\sin\theta_2)$. Allora
$$z_1z_2=\rho_1\rho_2\bigl[\cos(\theta_1+\theta_2)+i\sin(\theta_1+\theta_2)\bigr]$$
e, per ogni $n\in\N$, $$z^{\,n}=\rho^{\,n}\bigl[\cos(n\theta)+i\sin(n\theta)\bigr].$$`,
    idea: r`Prodotto: moltiplicare e riconoscere le formule di addizione. Potenza: induzione sul prodotto appena dimostrato.`,
    steps: [
      { cue: 'Svolgere il prodotto', body: r`$$z_1z_2=\rho_1\rho_2(\cos\theta_1+i\sin\theta_1)(\cos\theta_2+i\sin\theta_2)$$ $$=\rho_1\rho_2\Bigl[(\cos\theta_1\cos\theta_2-\sin\theta_1\sin\theta_2)+i(\sin\theta_1\cos\theta_2+\cos\theta_1\sin\theta_2)\Bigr],$$ avendo usato $i^2=-1$.` },
      { cue: 'Riconoscere le formule di addizione', body: r`$\cos\theta_1\cos\theta_2-\sin\theta_1\sin\theta_2=\cos(\theta_1+\theta_2)$ e $\sin\theta_1\cos\theta_2+\cos\theta_1\sin\theta_2=\sin(\theta_1+\theta_2)$. Dunque $$z_1z_2=\rho_1\rho_2\bigl[\cos(\theta_1+\theta_2)+i\sin(\theta_1+\theta_2)\bigr].$$ <em>Il prodotto moltiplica i moduli e somma gli argomenti.</em>` },
      { cue: 'Potenza: base induttiva', body: r`$n=0$: $z^0=1=\rho^0(\cos0+i\sin0)$. Vera. (Oppure si parte da $n=1$, banale.)` },
      { cue: 'Potenza: passo induttivo', body: r`Supposto $z^n=\rho^n[\cos(n\theta)+i\sin(n\theta)]$, applichiamo la formula del prodotto a $z^{n+1}=z^n\cdot z$: $$z^{n+1}=\rho^n\rho\bigl[\cos(n\theta+\theta)+i\sin(n\theta+\theta)\bigr]=\rho^{n+1}\bigl[\cos((n+1)\theta)+i\sin((n+1)\theta)\bigr].$$ Per induzione la formula vale $\forall n\in\N$. $\blacksquare$` }
    ],
    note: r`In forma esponenziale è immediata: $z_1z_2=\rho_1e^{i\theta_1}\rho_2e^{i\theta_2}=\rho_1\rho_2e^{i(\theta_1+\theta_2)}$. Ma attenzione: se l'esercizio chiede «dimostrare de Moivre», usare $e^{i\theta}$ è circolare, perché la formula di Eulero è definita a partire da seno e coseno. All'esame usa le formule di addizione.`
  },
  {
    id: 'T04', n: 4, sez: 1, mark: '*', q: '1.22',
    titolo: 'Radici $n$-esime di un numero complesso',
    enunciato: r`Sia $w=\rho(\cos\theta+i\sin\theta)\in\C$, $w\ne0$, e sia $n\ge1$ intero. L'equazione $z^n=w$ ha <strong>esattamente $n$</strong> soluzioni distinte, date da
$$z_k=\sqrt[n]{\rho}\left[\cos\frac{\theta+2k\pi}{n}+i\sin\frac{\theta+2k\pi}{n}\right],\qquad k=0,1,\dots,n-1.$$`,
    idea: r`Scrivere l'incognita in forma trigonometrica, applicare de Moivre e usare che due numeri complessi coincidono sse hanno lo stesso modulo e argomenti congrui modulo $2\pi$.`,
    steps: [
      { cue: r`Porre l'incognita in forma trigonometrica`, body: r`Cerchiamo $z=r(\cos\varphi+i\sin\varphi)$ con $r>0$. Per de Moivre $$z^n=r^n\bigl[\cos(n\varphi)+i\sin(n\varphi)\bigr].$$` },
      { cue: 'Quando due complessi in forma trigonometrica sono uguali?', body: r`Quando hanno lo stesso modulo e argomenti che differiscono per un multiplo intero di $2\pi$. Imponendo $z^n=w$: $$\begin{cases} r^n=\rho\\[2pt] n\varphi=\theta+2k\pi,\quad k\in\Z.\end{cases}$$` },
      { cue: 'Risolvere il sistema', body: r`La prima equazione ha <strong>un'unica</strong> soluzione $r=\sqrt[n]\rho>0$ (radice $n$-esima reale positiva: esiste ed è unica per la completezza di $\R$). Dalla seconda $$\varphi_k=\frac{\theta+2k\pi}{n},\qquad k\in\Z.$$` },
      { cue: 'Perché le soluzioni distinte sono esattamente $n$? (divisione con resto, come a lezione)', body: r`Si divide $k$ per $n$: $k=nq+h$ con $q\in\Z$ e resto $h\in\{0,1,\dots,n-1\}$. Allora $$\varphi_k=\frac\theta n+\frac{2\pi(nq+h)}{n}=\frac\theta n+\frac{2h\pi}{n}+2q\pi,$$ e $2q\pi$ non cambia il numero complesso: ogni $k\in\Z$ ripete la radice di un $h\in\{0,\dots,n-1\}$.<br><br>Queste $n$ sono <strong>distinte</strong>: i loro argomenti distano fra loro $\frac{2(h-h')\pi}{n}$ con $0<|h-h'|\le n-1$, cioè meno di $2\pi$, quindi non differiscono di un multiplo di $2\pi$. Le radici sono esattamente $n$. $\blacksquare$` },
      { cue: 'Lettura geometrica', body: r`Tutte le radici hanno lo stesso modulo $\sqrt[n]\rho$: stanno sulla circonferenza di quel raggio. Gli argomenti differiscono di $\frac{2\pi}{n}$: sono i <strong>vertici di un poligono regolare di $n$ lati</strong> inscritto in quella circonferenza. Per $w=1$ si ottengono le <em>radici $n$-esime dell'unità</em> $z_k=e^{2k\pi i/n}$, con $z_0=1$, la cui somma è $0$ per $n\ge2$.` }
    ],
    note: r`Negli appunti la notazione è $w=Re^{i\varphi}$, $z=re^{i\theta}$, radici $\theta_h=\frac\varphi m+\frac{2h\pi}{m}$, $h=0,\dots,m-1$: stesso teorema, lettere diverse. Attenzione: in $\C$ il simbolo $\sqrt[n]{w}$ non individua un solo numero — sono $n$. Il simbolo $\sqrt[n]{\rho}$ nella formula invece è la radice <em>reale positiva</em> di un numero reale positivo, ed è unica.`
  },

  /* ===================== SEZIONE 2 ===================== */
  {
    id: 'T-mon', sez: 2, mark: '**', q: '1.27',
    titolo: 'Monotonia e rapporto incrementale',
    enunciato: r`Sia $f:A\to\R$, $A\subseteq\R$, e per $x_1\ne x_2$ in $A$ sia $R(x_1,x_2)=\dfrac{f(x_2)-f(x_1)}{x_2-x_1}$. Allora $$f\ \text{crescente su }A\iff R(x_1,x_2)\ge0\quad\forall x_1\ne x_2\in A,$$ e $f$ strettamente crescente $\iff R>0$ (analogamente decrescente $\iff R\le0$).`,
    idea: r`È solo una questione di segni: il denominatore si rende positivo ordinando i due punti, e allora numeratore e rapporto hanno lo stesso segno.`,
    steps: [
      { cue: r`Prima osservazione: $R$ dipende dall'ordine dei punti?`, body: r`No: $R(x_2,x_1)=\dfrac{f(x_1)-f(x_2)}{x_1-x_2}=R(x_1,x_2)$, perché cambiano segno numeratore e denominatore. Quindi si può sempre supporre $x_1\lt x_2$, cioè $x_2-x_1>0$.` },
      { cue: r`Verso $\Rightarrow$`, body: r`Siano $x_1\lt x_2$. Se $f$ è crescente, $f(x_2)-f(x_1)\ge0$; il quoziente di un numero $\ge0$ per uno $>0$ è $\ge0$: $R(x_1,x_2)\ge0$.` },
      { cue: r`Verso $\Leftarrow$`, body: r`Se $R(x_1,x_2)\ge0$ e $x_1\lt x_2$, allora $f(x_2)-f(x_1)=R(x_1,x_2)\cdot(x_2-x_1)$ è prodotto di due fattori $\ge0$, quindi $f(x_1)\le f(x_2)$: $f$ è crescente. Con $R>0$ si ottiene $f(x_1)\lt f(x_2)$, cioè la stretta crescenza. $\blacksquare$` }
    ],
    note: r`Nel PDF dei quesiti il 1.27 è <strong>blu</strong> (dimostrazione solo all'orale), anche se nel programma di massima non ha il simbolo $(**)$: qui si segue il PDF dei quesiti, che è più specifico. Esempio da citare: $\frac1x$ è decrescente su $(0,+\infty)$ e su $(-\infty,0)$ ma non su $\R\setminus\{0\}$. Il segno di $R$ diventerà, nel calcolo differenziale, il segno di $f'$.`
  },
  {
    id: 'T05', n: 5, sez: 2, mark: '*', q: '1.38',
    titolo: 'Unicità del limite',
    enunciato: r`Se una successione $\{a_n\}$ ammette limite, allora questo è <strong>unico</strong>: se $a_n\to\ell_1$ e $a_n\to\ell_2$, allora $\ell_1=\ell_2$.`,
    idea: r`Per assurdo, con la disuguaglianza triangolare (è la versione della Lezione 6): da un certo indice in poi $a_n$ è vicino sia a $\ell_1$ sia a $\ell_2$, quindi $|\ell_1-\ell_2|\lt 2\eps$ per ogni $\eps>0$; con $\eps=\frac{|\ell_1-\ell_2|}{2}$ si ha l'assurdo.`,
    steps: [
      { cue: 'Impostazione (per assurdo)', body: r`Supponiamo $\ell_1\ne\ell_2$ entrambi limiti. Dalla definizione: $$\forall\eps>0\ \exists\nu_{1,\eps}:\ |a_n-\ell_1|\lt\eps\ \ \forall n>\nu_{1,\eps},\qquad \forall\eps>0\ \exists\nu_{2,\eps}:\ |a_n-\ell_2|\lt\eps\ \ \forall n>\nu_{2,\eps}.$$` },
      { cue: 'Da quale indice valgono entrambe?', body: r`Posto $\nu_\eps:=\max\{\nu_{1,\eps},\nu_{2,\eps}\}$, per ogni $n>\nu_\eps$ valgono <strong>insieme</strong> $|a_n-\ell_1|\lt\eps$ e $|a_n-\ell_2|\lt\eps$.` },
      { cue: r`Si stima $|\ell_1-\ell_2|$: quale strumento?`, body: r`Si aggiunge e toglie $a_n$ e si usa la <strong>disuguaglianza triangolare</strong>: $$|\ell_1-\ell_2|=|\ell_1-a_n+a_n-\ell_2|\le|a_n-\ell_1|+|a_n-\ell_2|\lt 2\eps.$$` },
      { cue: r`La scelta di $\eps$ che produce l'assurdo`, body: r`La stima vale per ogni $\eps>0$: con $\eps:=\dfrac{|\ell_1-\ell_2|}{2}>0$ si ottiene $|\ell_1-\ell_2|\lt|\ell_1-\ell_2|$. Assurdo, quindi $\ell_1=\ell_2$. $\blacksquare$` }
    ],
    note: r`Lettura geometrica: con quell'$\eps$ le strisce $S_{\ell_1,\eps}$ e $S_{\ell_2,\eps}$ sono disgiunte, ma i punti $(n,a_n)$ dovrebbero stare definitivamente in entrambe. Versione equivalente: con $\ell_1\lt\ell_2$ e $\eps=\frac{\ell_2-\ell_1}2$ si trova definitivamente $a_n\lt\frac{\ell_1+\ell_2}2\lt a_n$. Il teorema vale anche con limiti infiniti. Errore tipico: prendere $\eps=|\ell_1-\ell_2|$ invece della metà, perché allora le strisce si sovrappongono.`
  },
  {
    id: 'T06', n: 6, sez: 2, mark: '*', q: '1.39',
    titolo: 'Ogni successione convergente è limitata',
    enunciato: r`Se $a_n\to L\in\R$, allora $(a_n)$ è limitata: $\exists\,M>0$ tale che $|a_n|\le M$ per ogni $n\in\N$.`,
    idea: r`La definizione controlla la <em>coda</em>; i primi termini sono in numero finito, quindi hanno un massimo.`,
    steps: [
      { cue: r`Usare la definizione con una scelta concreta di $\eps$`, body: r`Poiché $a_n\to L$, la definizione vale per <em>ogni</em> $\eps>0$: scegliamo $\eps=1$. Allora $\exists\,N\in\N$ tale che $$\forall n>N:\quad |a_n-L|<1.$$` },
      { cue: 'Stimare la coda', body: r`Per $n>N$, usando la disuguaglianza triangolare: $$|a_n|=|(a_n-L)+L|\le|a_n-L|+|L|<1+|L|.$$` },
      { cue: 'E i primi termini?', body: r`Gli indici $n\in\{0,1,\dots,N\}$ sono in numero <strong>finito</strong>: l'insieme $\{|a_0|,|a_1|,\dots,|a_N|\}$ è finito, dunque ammette massimo.` },
      { cue: 'Mettere insieme i due pezzi', body: r`Poniamo $$M:=\max\bigl\{|a_0|,|a_1|,\dots,|a_N|,\;1+|L|\bigr\}.$$ Allora $|a_n|\le M$ per ogni $n\in\N$: la successione è limitata. $\blacksquare$` }
    ],
    note: r`<strong>Il viceversa è falso</strong>: $a_n=(-1)^n$ è limitata ma non converge. Il controesempio va saputo a memoria, perché la domanda «vale anche il viceversa?» è ricorrente. Conseguenza utile: una successione <em>non limitata</em> non può convergere.`
  },
  {
    id: 'T07', n: 7, sez: 2, mark: '*', q: '1.42',
    titolo: 'Permanenza del segno',
    enunciato: r`Sia $a_n\to L$ con $L>0$ (eventualmente $L=+\infty$). Allora $(a_n)$ è definitivamente positiva: $\exists\,N$ tale che $a_n>0$ per ogni $n>N$. Anzi, vale la stima più forte $a_n>\dfrac L2$ definitivamente.`,
    idea: r`Scegliere $\eps=L/2$: l'intorno di $L$ di quel raggio è tutto contenuto nella semiretta positiva.`,
    steps: [
      { cue: r`La scelta di $\eps$`, body: r`Poiché $L>0$, il numero $\eps:=\dfrac L2$ è strettamente positivo ed è quindi una scelta lecita nella definizione di limite.` },
      { cue: 'Applicare la definizione', body: r`$\exists\,N$ tale che $\forall n>N$: $$|a_n-L|<\frac L2\quad\Longleftrightarrow\quad L-\frac L2\lt a_n\lt L+\frac L2.$$` },
      { cue: 'Conclusione', body: r`In particolare $a_n>L-\dfrac L2=\dfrac L2>0$ per ogni $n>N$. $\blacksquare$<br><br>Se $L=+\infty$: applicando la definizione con $M=1$ si ottiene $a_n>1>0$ definitivamente.` },
      { cue: 'Versione simmetrica', body: r`Se $L<0$, analogamente $a_n<\dfrac L2<0$ definitivamente.` },
      { cue: 'Corollario 1 (Lezione 7): il teorema letto al contrario', body: r`<strong>Se $a_n\to a$ e $a_n\ge0$ definitivamente, allora $a\ge0$.</strong><br><br><em>Dimostrazione per assurdo.</em> Se fosse $a<0$, per la permanenza del segno (versione simmetrica) sarebbe $a_n<0$ definitivamente, contro l'ipotesi $a_n\ge0$. Quindi $a\ge0$. $\blacksquare$<br><br>Vale anche con l'ipotesi $a_n>0$, ma la tesi resta $a\ge0$: <strong>non</strong> $a>0$.` }
    ],
    note: r`Controesempio da citare: $a_n=\dfrac1n>0$ per ogni $n$, ma $a=0$. La disuguaglianza <em>stretta</em> non si conserva al limite: passando al limite $>$ diventa $\ge$. È l'errore più frequente su questo teorema. Dal corollario 1 segue il corollario 2, la proprietà del confronto.`
  },
  {
    id: 'T08', n: 8, sez: 2, mark: '*', q: '1.44',
    titolo: 'Teorema del confronto (dei due carabinieri)',
    enunciato: r`Siano $(a_n),(b_n),(c_n)$ tali che $a_n\le b_n\le c_n$ definitivamente. Se $a_n\to L$ e $c_n\to L$ con $L\in\R$, allora anche $b_n\to L$.`,
    idea: r`Incastrare $b_n$ fra le due code: entrambe finiscono nell'intorno $(L-\eps,L+\eps)$, quindi ci finisce anche ciò che sta in mezzo.`,
    steps: [
      { cue: 'Fissare il dato arbitrario', body: r`Sia $\eps>0$ fissato ad arbitrio. Dobbiamo esibire $N$ tale che $|b_n-L|<\eps$ per ogni $n>N$.` },
      { cue: 'Tradurre le tre ipotesi', body: r`$\exists N_1:\ \forall n>N_1,\ L-\eps\lt a_n\lt L+\eps$;<br>$\exists N_2:\ \forall n>N_2,\ L-\eps\lt c_n\lt L+\eps$;<br>$\exists N_3:\ \forall n>N_3,\ a_n\le b_n\le c_n$.` },
      { cue: 'Come si combinano?', body: r`Posto $N:=\max\{N_1,N_2,N_3\}$, per ogni $n>N$ valgono tutte e tre contemporaneamente, quindi $$L-\eps\lt a_n\le b_n\le c_n\lt L+\eps.$$` },
      { cue: 'Conclusione', body: r`Dalla catena segue $L-\eps\lt b_n\lt L+\eps$, cioè $|b_n-L|<\eps$, per ogni $n>N$. Essendo $\eps>0$ arbitrario, $b_n\to L$. $\blacksquare$` }
    ],
    note: r`Osservazioni chiave: (i) <strong>non</strong> si suppone che $(b_n)$ ammetta limite — è proprio la tesi; (ii) l'ipotesi «definitivamente» basta, il comportamento iniziale è irrilevante; (iii) i due limiti devono essere <em>lo stesso</em> $L$ finito. Applicazione tipica: $\left|\frac{\sin n}{n}\right|\le\frac1n\to0$.`
  },
  {
    id: 'T-infl', sez: 2, mark: '**', q: '1.46',
    titolo: 'Infinitesima per limitata è infinitesima',
    enunciato: r`Siano $\{a_n\}$ una successione <strong>limitata</strong> e $\{b_n\}$ una successione <strong>infinitesima</strong> ($b_n\to0$). Allora $a_nb_n\to0$.`,
    idea: r`Si incastra $|a_nb_n|$ fra $0$ e $M|b_n|$ e si usano i due carabinieri, passando per il lemma $x_n\to0\iff|x_n|\to0$ (Lezione 8).`,
    steps: [
      { cue: 'Le due ipotesi tradotte', body: r`$\{a_n\}$ limitata: $\exists M>0$ con $|a_n|\le M$ per ogni $n$. $\{b_n\}$ infinitesima: per il lemma anche $|b_n|\to0$.` },
      { cue: 'I due carabinieri', body: r`$$0\le|a_nb_n|=|a_n|\,|b_n|\le M|b_n|\longrightarrow0.$$ Per il teorema dei due carabinieri $|a_nb_n|\to0$.` },
      { cue: 'Conclusione', body: r`Per il lemma, da $|a_nb_n|\to0$ segue $a_nb_n\to0$. $\blacksquare$` }
    ],
    note: r`Esempio della lezione: $\frac{\sin n}{n}=\sin n\cdot\frac1n\to0$, perché $|\sin n|\le1$. La limitatezza è necessaria: con $a_n=n$ e $b_n=\frac1n$ si ha $a_nb_n=1$. Il (**) viene dalla guida allo studio della settimana 4.`
  },
  {
    id: 'T-alg', sez: 2, mark: '**', q: '1.40',
    titolo: 'Algebra dei limiti (caso somma e prodotto)',
    enunciato: r`Se $a_n\to L\in\R$ e $b_n\to M\in\R$, allora $a_n+b_n\to L+M$, $a_nb_n\to LM$ e, se $M\ne0$, $\dfrac{a_n}{b_n}\to\dfrac LM$.`,
    idea: r`Per la somma si spezza l'errore con la disuguaglianza triangolare e si usa $\eps/2$; per il prodotto si aggiunge e toglie un termine e si usa la limitatezza di $(a_n)$. A lezione (Lezione 7) è stata dimostrata la somma, usando $\eps$ per entrambe le successioni e arrivando a $\lt 2\eps$: va bene lo stesso, perché $2\eps$ è un positivo arbitrario.`,
    steps: [
      { cue: 'Somma: la stima di partenza', body: r`$$|(a_n+b_n)-(L+M)|=|(a_n-L)+(b_n-M)|\le|a_n-L|+|b_n-M|.$$` },
      { cue: r`Somma: la scelta di $\eps/2$`, body: r`Sia $\eps>0$. Poiché $a_n\to L$, $\exists N_1:\ n>N_1\Rightarrow|a_n-L|<\eps/2$; poiché $b_n\to M$, $\exists N_2:\ n>N_2\Rightarrow|b_n-M|<\eps/2$. Per $n>\max\{N_1,N_2\}$ la somma delle due stime dà $<\eps$. $\blacksquare$` },
      { cue: r`Prodotto: il trucco dell'"aggiungi e togli"`, body: r`$$|a_nb_n-LM|=|a_nb_n-a_nM+a_nM-LM|\le|a_n|\,|b_n-M|+|M|\,|a_n-L|.$$` },
      { cue: 'Prodotto: perché serve il teorema precedente?', body: r`Perché $(a_n)$ converge, dunque è <strong>limitata</strong>: $\exists K>0$ con $|a_n|\le K$. Allora $$|a_nb_n-LM|\le K|b_n-M|+|M|\,|a_n-L|,$$ e i due addendi si rendono minori di $\eps/2$ scegliendo $n$ abbastanza grande. $\blacksquare$` }
    ],
    note: r`Il teorema richiede che <strong>entrambi</strong> i limiti esistano finiti. Con i limiti infiniti valgono le regole dell'aritmetica estesa, con le sette forme indeterminate $\infty-\infty$, $0\cdot\infty$, $\frac\infty\infty$, $\frac00$, $1^\infty$, $\infty^0$, $0^0$.`
  },
  {
    id: 'T-conf', sez: 2, mark: '**', q: '1.43',
    titolo: 'Proprietà del confronto (corollario 2 della permanenza del segno)',
    enunciato: r`Siano $a_n\to a$ e $b_n\to b$ (finiti), con $a_n\ge b_n$ definitivamente. Allora $a\ge b$.`,
    idea: r`Come a lezione: si riduce al corollario 1 guardando la differenza $c_n=a_n-b_n$, che è $\ge0$ e tende ad $a-b$.`,
    steps: [
      { cue: 'Quale successione conviene guardare?', body: r`La differenza $c_n:=a_n-b_n$. Per ipotesi $c_n\ge0$ definitivamente.` },
      { cue: r`A che cosa tende $c_n$?`, body: r`Per l'<strong>algebra dei limiti</strong> (entrambi i limiti sono finiti): $c_n=a_n-b_n\to a-b$.` },
      { cue: 'Conclusione', body: r`$c_n\ge0$ definitivamente e $c_n\to a-b$: per il <strong>corollario 1</strong> (permanenza del segno letta al contrario) $a-b\ge0$, cioè $a\ge b$. $\blacksquare$` }
    ],
    note: r`Anche qui la disuguaglianza <strong>stretta non si conserva</strong>: da $a_n>b_n$ segue solo $a\ge b$. Controesempio: $a_n=\frac1n>0=b_n$, ma entrambi i limiti valgono $0$.<br><br><em>Dimostrazione alternativa, diretta.</em> Per assurdo $a\lt b$; con $\eps=\frac{b-a}{2}$ definitivamente $a_n\lt\frac{a+b}{2}\lt b_n$, contro $a_n\ge b_n$.`
  },
  {
    id: 'T09', n: 9, sez: 2, mark: '*', q: '1.47',
    titolo: 'Regolarità delle successioni monotòne',
    enunciato: r`Ogni successione monotòna è regolare (ammette limite, finito o infinito). Precisamente, se $(a_n)$ è crescente allora $$\lim_{n\to\infty}a_n=\sup_{n\in\N}a_n,$$ finito se $(a_n)$ è limitata superiormente, uguale a $+\infty$ altrimenti. Simmetricamente, se $(a_n)$ è decrescente il limite è $\inf_n a_n$.`,
    idea: r`La caratterizzazione del sup fornisce un elemento $a_N>L-\eps$; la monotonia propaga la disuguaglianza a tutta la coda.`,
    steps: [
      { cue: 'Caso crescente e limitata superiormente: chi è il candidato limite?', body: r`L'insieme $E=\{a_n:n\in\N\}$ è non vuoto e limitato superiormente; per la <strong>proprietà di completezza</strong> di $\R$ esiste finito $$L:=\sup E.$$ Dimostriamo che $a_n\to L$.` },
      { cue: 'Usare la caratterizzazione del sup', body: r`Sia $\eps>0$. Per la seconda proprietà caratteristica del sup, $L-\eps$ non è un maggiorante di $E$: dunque $$\exists\,N\in\N\ \text{tale che}\ a_N>L-\eps.$$` },
      { cue: 'Dove entra la monotonia?', body: r`Poiché $(a_n)$ è crescente, per ogni $n>N$ si ha $a_n\ge a_N>L-\eps$. La disuguaglianza trovata su <em>un solo</em> indice si propaga a tutta la coda.` },
      { cue: r`Chiudere la stima dall'alto`, body: r`D'altra parte $L$ è un maggiorante di $E$, quindi $a_n\le L\lt L+\eps$ per ogni $n$. Mettendo insieme: $$\forall n>N:\quad L-\eps\lt a_n\le L\lt L+\eps\ \Longrightarrow\ |a_n-L|<\eps.$$ Per l'arbitrarietà di $\eps$, $a_n\to L$. $\blacksquare$` },
      { cue: 'Caso crescente e illimitata superiormente', body: r`Sia $M\in\R$ arbitrario. Poiché $E$ non è limitato superiormente, $M$ non è un maggiorante: $\exists N$ con $a_N>M$. Per monotonia $a_n\ge a_N>M$ per ogni $n>N$. Per l'arbitrarietà di $M$ segue $a_n\to+\infty$. $\blacksquare$` }
    ],
    note: r`È il teorema che rende «ben posta» la definizione del numero di Nepero: $\left(1+\frac1n\right)^n$ è crescente e limitata superiormente, dunque converge, e il suo limite si chiama $e$. Nota che il teorema garantisce l'<em>esistenza</em> del limite senza calcolarlo: è il prototipo dei risultati di esistenza basati sulla completezza.`
  },
  {
    id: 'T-not', sez: 2, mark: '**', q: '1.49',
    titolo: 'Limiti notevoli di successioni (elenco operativo)',
    enunciato: r`Per $x_n\to0$ con $x_n\ne0$ definitivamente:
$$\frac{\sin x_n}{x_n}\to1,\quad \frac{1-\cos x_n}{x_n^2}\to\frac12,\quad \frac{e^{x_n}-1}{x_n}\to1,\quad \frac{\ln(1+x_n)}{x_n}\to1,\quad \frac{(1+x_n)^\alpha-1}{x_n}\to\alpha,\quad \frac{\tan x_n}{x_n}\to 1,\quad\frac{\arctan x_n}{x_n}\to1.$$
Inoltre $\left(1+\dfrac1n\right)^n\to e$ e, più in generale, $\left(1+\dfrac{c}{n}\right)^n\to e^{c}$.`,
    idea: r`Tutti si riducono a equivalenze asintotiche di ordine 1 attorno a $0$; sono la base del calcolo dei limiti con gli o-piccoli. Le dimostrazioni chieste all'orale sono quelle della Lezione 8: Bernoulli per $a^n$ e $\sqrt[n]a$, la disuguaglianza $\cos x\lt\frac{\sin x}x\lt1$ per seno e coseno, il limite del numero $e$ per logaritmo ed esponenziale.`,
    steps: [
      { cue: r`(a) $a^n\to+\infty$ per $a>1$: come?`, body: r`Bernoulli con $x=a-1>0$: $a^n\ge1+n(a-1)\to+\infty$, e si conclude con il confronto per limiti infiniti. Per $|a|\lt 1$: $|a^n|=\frac{1}{(1/|a|)^n}\to0$. Per $a\le-1$: $a^{2k}$ e $a^{2k+1}$ hanno limiti diversi, quindi il limite non esiste.` },
      { cue: r`(b) $\sqrt[n]a\to1$ per $a\ge1$: come?`, body: r`$b_n=\sqrt[n]a-1\ge0$ e, per Bernoulli, $a=(1+b_n)^n\ge1+nb_n$, quindi $0\le b_n\le\frac{a-1}{n}\to0$: carabinieri. Per $0\lt a\lt 1$ si passa al reciproco.` },
      { cue: r`(d) $\frac{\sin a_n}{a_n}\to1$: da quale disuguaglianza?`, body: r`$\cos x\lt\frac{\sin x}{x}\lt1$ per $0\lt|x|\le\frac\pi2$, dal confronto fra le aree di triangolo, settore e triangolo. Prima si mostra $\cos a_n\to1$ (con $0\le1-\cos a_n\lt\sin^2a_n$ e $|\sin a_n|\lt|a_n|$), poi i due carabinieri.` },
      { cue: r`(e) $\frac{\log(1+a_n)}{a_n}\to1$ e $\frac{e^{a_n}-1}{a_n}\to1$: come?`, body: r`$\frac{\log(1+a_n)}{a_n}=\log(1+a_n)^{1/a_n}\to\log e=1$. Poi, con $b_n=e^{a_n}-1\to0$: $\frac{e^{a_n}-1}{a_n}=\frac{b_n}{\log(1+b_n)}\to1$.` },
      { cue: 'Forma equivalente con gli o-piccoli (da memorizzare)', body: r`Per $x\to0$: $$\sin x=x+o(x),\quad \cos x=1-\frac{x^2}{2}+o(x^2),\quad e^x=1+x+o(x),$$ $$\ln(1+x)=x+o(x),\quad (1+x)^\alpha=1+\alpha x+o(x),\quad \tan x=x+o(x),\quad \arctan x=x+o(x).$$` },
      { cue: 'Il ruolo del teorema-ponte / della composizione', body: r`I limiti notevoli si enunciano per la <em>variabile reale</em> $x\to0$; per trasferirli a una successione $x_n\to0$ si usa il teorema sul limite della funzione composta (oppure il teorema ponte). All'esame basta citarlo.` },
      { cue: 'Errore classico', body: r`$\dfrac{1-\cos x}{x^2}\to\dfrac12$, <strong>non</strong> $1$. E $\dfrac{1-\cos x}{x}\to0$: la scelta della potenza al denominatore cambia tutto.` }
    ],
    note: r`Questi limiti diventano davvero potenti quando li usi come sostituzioni asintotiche: se $x_n\to0$ allora $\sin x_n\sim x_n$, e puoi sostituire dentro prodotti e quozienti (mai dentro somme!).`
  },
  {
    id: 'T-inf', sez: 2, mark: '**', q: '1.51',
    titolo: 'Confronto tra infiniti (gerarchia)',
    enunciato: r`Per $n\to+\infty$, con $\alpha>0$, $a>1$, $\beta>0$:
$$(\ln n)^\beta \;\ll\; n^\alpha \;\ll\; a^{\,n} \;\ll\; n! \;\ll\; n^{\,n},$$
dove $x_n\ll y_n$ significa $\dfrac{x_n}{y_n}\to0$.`,
    idea: r`Ogni anello della catena si prova con il criterio del rapporto per successioni, o con Bernoulli.`,
    steps: [
      { cue: r`$n^\alpha \ll a^n$`, body: r`Posto $c_n=\dfrac{n^\alpha}{a^n}$, si ha $$\frac{c_{n+1}}{c_n}=\left(\frac{n+1}{n}\right)^\alpha\cdot\frac1a\longrightarrow\frac1a<1.$$ Per il <strong>criterio del rapporto per successioni</strong> ($\ell<1\Rightarrow c_n\to0$), segue $c_n\to0$.` },
      { cue: r`$a^n \ll n!$`, body: r`Con $c_n=\dfrac{a^n}{n!}$: $\dfrac{c_{n+1}}{c_n}=\dfrac{a}{n+1}\to0<1$, dunque $c_n\to0$.` },
      { cue: r`$n!\ll n^n$`, body: r`Con $c_n=\dfrac{n!}{n^n}$: $\dfrac{c_{n+1}}{c_n}=\left(\dfrac{n}{n+1}\right)^{n}=\dfrac{1}{\left(1+\frac1n\right)^{n}}\to\dfrac1e<1$, dunque $c_n\to0$.` },
      { cue: r`$\log_a n \ll n^b$: la dimostrazione della lezione`, body: r`Da $2^x\ge2^{[x]}=(1+1)^{[x]}\ge1+[x]>x$ segue $\log_a x\lt x\log_a2$. Con $x=n^{b/2}$: $\frac{\log_a n}{n^{b/2}}\lt\frac2b\log_a2$, quindi $$0\lt\frac{\log_a n}{n^b}=\frac{\log_a n}{n^{b/2}}\cdot\frac1{n^{b/2}}\lt\frac2b\,\frac{\log_a2}{n^{b/2}}\to0.$$ Carabinieri. Per $(\ln n)^\beta\ll n^\alpha$ basta elevare alla $\beta$: $\frac{(\ln n)^\beta}{n^\alpha}=\left(\frac{\ln n}{n^{\alpha/\beta}}\right)^\beta$.` }
    ],
    note: r`Regola operativa: «logaritmi &lt; potenze &lt; esponenziali &lt; fattoriali &lt; $n^n$». Nei quozienti, il termine dominante detta il risultato — ed è quasi sempre il modo più rapido per risolvere una forma $\frac\infty\infty$ senza de l'Hôpital.`
  },

  /* ===================== SEZIONE 3 ===================== */
  {
    id: 'T10', n: 10, sez: 3, mark: '*', q: '1.57',
    titolo: 'Condizione necessaria per la convergenza di una serie',
    enunciato: r`Se la serie $\displaystyle\sum_{n=0}^{\infty}a_n$ converge, allora $a_n\to0$.`,
    idea: r`Il termine generale è la differenza di due somme parziali consecutive, che tendono allo stesso limite.`,
    steps: [
      { cue: 'Notazione', body: r`Sia $s_n=\displaystyle\sum_{k=0}^{n}a_k$ la somma parziale $n$-esima. Per ipotesi $s_n\to S\in\R$.` },
      { cue: "L'osservazione chiave", body: r`Per ogni $n\ge1$: $$a_n=s_n-s_{n-1}.$$` },
      { cue: 'Conclusione', body: r`La successione $(s_{n-1})$ è una traslazione di $(s_n)$, quindi converge anch'essa a $S$. Per l'algebra dei limiti $$\lim_{n\to\infty}a_n=\lim_{n\to\infty}(s_n-s_{n-1})=S-S=0.\qquad\blacksquare$$` },
      { cue: 'È anche sufficiente?', body: r`<strong>No.</strong> Controesempio obbligatorio: la <em>serie armonica</em> $\displaystyle\sum_{n\ge1}\frac1n$ ha termine generale $\frac1n\to0$ ma diverge a $+\infty$.` }
    ],
    note: r`Uso pratico: è un test di <strong>non</strong> convergenza. Se $a_n\not\to0$ la serie certamente non converge — ed è la prima cosa da controllare in ogni esercizio. Se invece $a_n\to0$ il test non dice nulla e bisogna passare ai criteri.`
  },
  {
    id: 'T-pos', sez: 3, mark: '**', q: '1.58',
    titolo: 'Carattere delle serie a termini non negativi',
    enunciato: r`Se $a_n\ge0$ per ogni $n$, allora la serie $\sum a_n$ è <strong>regolare</strong>: o converge, o diverge a $+\infty$. Non può essere indeterminata.`,
    idea: r`Le somme parziali formano una successione crescente; si applica il teorema sulle successioni monotòne.`,
    steps: [
      { cue: 'Monotonia delle somme parziali', body: r`$s_{n+1}-s_n=a_{n+1}\ge0$, dunque $(s_n)$ è <strong>crescente</strong>.` },
      { cue: 'Applicare il teorema sulle monotòne', body: r`Una successione crescente è regolare: converge a $\sup_n s_n$ se è limitata superiormente, diverge a $+\infty$ altrimenti. $\blacksquare$` }
    ],
    note: r`È il risultato che rende possibili tutti i criteri di convergenza per serie a termini positivi: per decidere il carattere basta stabilire se le somme parziali sono limitate.`
  },
  {
    id: 'T-serie-geo', sez: 3, mark: '**', q: '1.59',
    titolo: 'Serie geometrica',
    enunciato: r`Sia $q\in\R$. La serie $\displaystyle\sum_{n=0}^{\infty}q^n$:
<ul><li>converge se $|q|<1$, con somma $\dfrac{1}{1-q}$;</li>
<li>diverge a $+\infty$ se $q\ge1$;</li>
<li>è indeterminata (irregolare) se $q\le-1$.</li></ul>`,
    idea: r`Si conosce la somma parziale in forma chiusa, quindi basta passare al limite.`,
    steps: [
      { cue: 'Somma parziale', body: r`Per $q\ne1$, dalla progressione geometrica: $$s_n=\sum_{k=0}^{n}q^k=\frac{1-q^{\,n+1}}{1-q}.$$` },
      { cue: 'Caso $|q|<1$', body: r`Si ha $q^{\,n+1}\to0$, dunque $$s_n\longrightarrow\frac{1-0}{1-q}=\frac{1}{1-q}.$$ La serie converge con questa somma.` },
      { cue: 'Caso $q>1$', body: r`$q^{\,n+1}\to+\infty$ e $1-q<0$, quindi $s_n\to+\infty$: la serie diverge.` },
      { cue: r`Casi $q=1$ e $q\le-1$`, body: r`Se $q=1$: $s_n=n+1\to+\infty$, diverge.<br>Se $q=-1$: $s_n$ vale alternativamente $1$ e $0$, dunque non ammette limite: serie <em>indeterminata</em>.<br>Se $q<-1$: $q^{n+1}$ è irregolare e illimitata, quindi $s_n$ non ammette limite. $\blacksquare$` }
    ],
    note: r`Se la serie parte da $n=n_0$ anziché da $0$, la somma è $\dfrac{q^{\,n_0}}{1-q}$: <em>primo termine diviso $1-q$</em>. È la forma che serve davvero negli esercizi.`
  },
  {
    id: 'T11', n: 11, sez: 3, mark: '*', q: '1.61',
    titolo: 'Criterio del confronto (per serie)',
    enunciato: r`Siano $0\le a_m\le b_m$ per ogni $m\in\N$ (basta definitivamente). Allora:
<ul><li>(i) se $\sum_{m=1}^{\infty}b_m$ converge, allora $\sum_{m=1}^{\infty}a_m$ converge;</li>
<li>(ii) se $\sum_{m=1}^{\infty}a_m$ diverge, allora $\sum_{m=1}^{\infty}b_m$ diverge.</li></ul>`,
    idea: r`Come a lezione (Lezione 10): le due serie sono a termini non negativi, quindi regolari; le loro somme parziali sono ordinate, e la proprietà del confronto fra successioni passa l'ordine ai limiti.`,
    steps: [
      { cue: 'Le somme parziali', body: r`Siano $S_m=\sum_{k=1}^m a_k$ e $t_m=\sum_{k=1}^m b_k$. Da $0\le a_k\le b_k$, sommando per $k=1,\dots,m$: $$S_m\le t_m\qquad\forall m\in\N.$$` },
      { cue: 'Perché i limiti esistono?', body: r`Le due serie sono a <strong>termini non negativi</strong>, quindi per il teorema precedente sono <strong>regolari</strong>: esistono $$s=\lim_{m\to\infty}S_m=\sum_{m=1}^\infty a_m\in[0,+\infty],\qquad t=\lim_{m\to\infty}t_m=\sum_{m=1}^\infty b_m\in[0,+\infty].$$` },
      { cue: r`(i) Se $\sum b_m$ converge`, body: r`Allora $t\in\R$. Per la proprietà del confronto fra successioni, da $S_m\le t_m$ segue $s\le t$; quindi $s$ non può essere $+\infty$, cioè $s\in\R$: $\sum a_m$ converge.` },
      { cue: r`(ii) Se $\sum a_m$ diverge`, body: r`Allora $s=+\infty$ e, sempre per il confronto fra successioni, $t\ge s=+\infty$, cioè $t=+\infty$: $\sum b_m$ diverge. $\blacksquare$` },
      { cue: 'E se la disuguaglianza vale solo definitivamente?', body: r`Cambiare un numero finito di termini non cambia il carattere di una serie (cambia solo la somma): si applica il ragionamento alla coda in cui $0\le a_m\le b_m$.` }
    ],
    note: r`L'ipotesi $a_m\ge0$ è essenziale: serve perché le serie siano regolari. Esempi della lezione: $\sum\frac{\arctan\sqrt{k+2}}{k^4}$ converge, maggiorando con $\frac{20}{k^4}$ (il prof sceglie $20$; bastava $\frac{\pi/2}{k^4}$); $\sum\frac{\sin k+3}{\sqrt k}$ diverge, minorando con $\frac2{\sqrt k}$. Il confronto va fatto nel verso giusto: maggiorare con una serie <em>divergente</em> non dice nulla.`
  },
  {
    id: 'T12', n: 12, sez: 3, mark: '*', q: '1.62',
    titolo: 'Criterio del confronto asintotico',
    enunciato: r`Siano $a_m\ge0$ e $b_m>0$ per ogni $m\in\N$, e supponiamo che esista $$\lim_{m\to\infty}\frac{a_m}{b_m}=\ell\in[0,+\infty].$$
<ul><li>(i) Se $\sum b_m$ converge e $\ell\in[0,+\infty)$, allora $\sum a_m$ converge.</li>
<li>(ii) Se $\sum b_m$ diverge e $\ell\in(0,+\infty]$, allora $\sum a_m$ diverge.</li></ul>
<strong>Corollario.</strong> Se $a_m,b_m>0$ e $a_m\sim b_m$ (cioè $\ell=1$), le due serie hanno lo stesso carattere.`,
    idea: r`Dalla definizione di limite si ricava una disuguaglianza fra $a_m$ e un multiplo di $b_m$, poi si applica il criterio del confronto. Per (i) serve la stima dall'alto, per (ii) quella dal basso.`,
    steps: [
      { cue: r`(i) Che cosa dà la definizione di limite?`, body: r`Per $\ell$ finito: $\forall\eps>0\ \exists\nu_\eps\in\N$ tale che $$\ell-\eps\lt\frac{a_m}{b_m}\lt\ell+\eps\qquad\forall m>\nu_\eps.$$` },
      { cue: r`Come si toglie il denominatore?`, body: r`Poiché $b_m>0$, moltiplicando non cambia il verso: $$(\ell-\eps)\,b_m\lt a_m\lt(\ell+\eps)\,b_m\qquad\forall m>\nu_\eps.$$` },
      { cue: r`(i) Conclusione: quale metà serve?`, body: r`Quella di destra, $a_m\lt(\ell+\eps)b_m$. Se $\sum b_m$ converge, converge anche $\sum(\ell+\eps)b_m$; per il <strong>criterio del confronto</strong> $\sum a_m$ converge. (Funziona anche con $\ell=0$.)` },
      { cue: r`(ii) con $\ell$ finito e positivo: quale $\eps$?`, body: r`Serve che $\ell-\eps$ resti positivo: il prof sceglie $\eps=\frac\ell3$. Allora $$\left(\ell-\frac\ell3\right)b_m=\frac{2\ell}3\,b_m\lt a_m\qquad\forall m>\nu_{\ell/3}.$$ Se $\sum b_m$ diverge, diverge anche $\sum\frac{2\ell}3b_m$, e per il confronto diverge $\sum a_m$.` },
      { cue: r`(ii) con $\ell=+\infty$`, body: r`$\forall M>0\ \exists\nu_M$ tale che $\frac{a_m}{b_m}>M$, cioè $a_m>M\,b_m$, per ogni $m>\nu_M$. Dalla divergenza di $\sum b_m$ e dal confronto segue che $\sum a_m$ diverge. $\blacksquare$` },
      { cue: 'La forma con la serie armonica generalizzata', body: r`Con $b_m=\frac1{m^\alpha}$ il limite diventa $\lim m^\alpha a_m=\ell$, e: <ul><li>se $\ell\in[0,+\infty)$ e $\alpha>1$, $\sum a_m$ converge;</li><li>se $\ell\in(0,+\infty]$ e $0\lt\alpha\le1$, $\sum a_m$ diverge.</li></ul> Il corollario è il caso $\ell=1$: se $a_m\sim b_m$ le due serie hanno lo stesso carattere.` }
    ],
    note: r`I casi che <em>non</em> decidono: $\ell=0$ con $\sum b_m$ divergente, e $\ell=+\infty$ con $\sum b_m$ convergente. Esempi della Lezione 10: $\sum\log\left(1+\frac1{m^2}\right)$ converge ($\sim\frac1{m^2}$); $\sum\frac{\sqrt{m+1}-\sqrt m}{\sqrt{m^2+m+1}}$ converge, con $\ell=\frac12$ rispetto a $\frac1{m^{3/2}}$ (attenzione: $a_m\sim\frac12\cdot\frac1{m^{3/2}}$, non $\sim\frac1{m^{3/2}}$); $\sum\sin\frac1m\arctan\left(m^2+\sqrt{e^m-1}\right)$ diverge, con $\ell=\frac\pi2$ rispetto a $\frac1m$.`
  },
  {
    id: 'T13', n: 13, sez: 3, mark: '*', q: '1.63',
    titolo: 'Criterio del rapporto (per serie)',
    enunciato: r`Sia $a_n>0$ per ogni $n\in\N$ e supponiamo che esista $$\lim_{n\to+\infty}\frac{a_{n+1}}{a_n}=:\ell.$$
<ul><li>(i) Se $\ell\lt1$, la serie $\sum_{n=1}^\infty a_n$ converge.</li>
<li>(ii) Se $\ell>1$ (anche $\ell=+\infty$), la serie diverge.</li></ul>
Se $\ell=1$ il criterio non decide.`,
    idea: r`Se $\ell\lt1$, da un certo punto ogni termine è più piccolo del precedente per un fattore fisso $x\lt1$: la serie è dominata da una geometrica di ragione $x$. Se $\ell>1$ i termini crescono e non vanno a zero.`,
    steps: [
      { cue: r`(i) Quale ragione si sceglie per il confronto?`, body: r`Un $x\in(\ell,1)$, che esiste perché $\ell\lt1$ (ed è $x>0$). Con $\eps:=x-\ell>0$, per la definizione di limite $\exists\nu\in\N$ tale che $$0\lt\frac{a_{m+1}}{a_m}\lt\ell+\eps=x\qquad\forall m\ge\nu.$$ A sinistra si può scrivere $0$ invece di $\ell-\eps$, perché i termini sono positivi.` },
      { cue: 'Che disuguaglianza si ottiene sui termini?', body: r`Moltiplicando per $a_m>0$: $a_{m+1}\lt x\,a_m$. Per comodità (come a lezione) supponiamo $\nu=1$: cambiare un numero finito di termini non cambia il carattere.` },
      { cue: 'Iterare', body: r`$a_2\lt a_1x$, $\ a_3\lt a_2x\lt a_1x^2$, e così via: $$a_m\lt a_1x^{m-1}=:b_m\qquad\forall m\in\N.$$` },
      { cue: 'Con quale serie si confronta?', body: r`$$\sum_{m=1}^\infty b_m=a_1\sum_{m=1}^\infty x^{m-1}=a_1\sum_{k=0}^\infty x^k,$$ una <strong>serie geometrica</strong> di ragione $0\lt x\lt1$, quindi convergente. Per il criterio del confronto $\sum a_m$ converge.<br><span class="small muted">Negli appunti il fattore $a_1$ cade nell'ultimo passaggio: non cambia il carattere.</span>` },
      { cue: r`(ii) $\ell>1$: quale $\eps$?`, body: r`$\eps=\ell-1>0$, così $\ell-\eps=1$ e definitivamente $$\frac{a_{m+1}}{a_m}>1\iff a_{m+1}>a_m.$$ La successione è definitivamente crescente e positiva, quindi <strong>non è infinitesima</strong>: la condizione necessaria non vale. Essendo a termini positivi la serie è regolare, quindi diverge. $\blacksquare$` },
      { cue: r`Perché con $\ell=1$ non si può dire niente?`, body: r`Perché $\sum\frac1n$ diverge e $\sum\frac1{n^2}$ converge, e in entrambi i casi $\frac{a_{n+1}}{a_n}\to1$. I due esempi vanno citati.` }
    ],
    note: r`Osservazione del prof: se $\ell\lt1$, il criterio del rapporto <em>per successioni</em> dice già che $a_n\to0$; ma non basta, serve il confronto con la geometrica. Esempi della Lezione 11: $\sum\frac1{m!}$ converge ($\ell=0$). Quando usarlo: con <strong>fattoriali</strong> ed <strong>esponenziali</strong>; sui termini razionali in $n$ dà sempre $\ell=1$ e non serve.`
  },
  {
    id: 'T14', n: 14, sez: 3, mark: '*', q: '1.66',
    titolo: 'La convergenza assoluta implica la convergenza semplice',
    enunciato: r`Una serie $\sum_{n=1}^\infty a_n$ si dice <strong>assolutamente convergente</strong> se $\sum_{n=1}^\infty|a_n|$ converge.<br><strong>Teorema.</strong> Una serie assolutamente convergente è anche convergente (semplicemente).`,
    idea: r`Si aggiunge $|a_n|$ a tutti i termini: si ottiene una serie a termini non negativi, dominata da $2|a_n|$, e poi si toglie di nuovo.`,
    steps: [
      { cue: 'Da quale disuguaglianza si parte?', body: r`$-|a_n|\le a_n\le|a_n|$. Sommando $|a_n|$ a tutti i membri: $$0\le a_n+|a_n|\le2|a_n|\qquad\forall n\in\N.$$` },
      { cue: r`Che cosa si ricava su $\sum(a_n+|a_n|)$?`, body: r`È una serie a <strong>termini non negativi</strong>, maggiorata termine a termine da $\sum2|a_n|$.` },
      { cue: 'Applicare il criterio del confronto', body: r`Per ipotesi $\sum|a_n|\lt+\infty$, quindi anche $2\sum|a_n|\lt+\infty$. Per il confronto $\sum(a_n+|a_n|)$ converge.` },
      { cue: 'Come si torna alla serie di partenza?', body: r`$$\sum_{n=1}^\infty a_n=\sum_{n=1}^\infty\bigl(a_n+|a_n|-|a_n|\bigr)=\underbrace{\sum_{n=1}^\infty(a_n+|a_n|)}_{\text{converge (appena visto)}}-\underbrace{\sum_{n=1}^\infty|a_n|}_{\text{converge (ipotesi)}},$$ e la differenza di due serie convergenti converge, per l'algebra dei limiti. $\blacksquare$` },
      { cue: 'Il viceversa vale?', body: r`<strong>No.</strong> $\sum\frac{(-1)^n}{n}$ converge per il criterio di Leibniz, ma $\sum\left|\frac{(-1)^n}{n}\right|=\sum\frac1n$ è la serie armonica, che diverge: converge <em>semplicemente</em> ma non assolutamente.` }
    ],
    note: r`È il modo di trattare le serie a segno variabile con gli strumenti delle serie a termini positivi: si passa ai moduli e, se quella serie converge, si è finito. Se invece $\sum|a_n|$ diverge non si conclude nulla e si prova Leibniz. Esempio di riepilogo della Lezione 11: $\sum\frac{(\tan\alpha)^m\log m}{m^2}$ converge assolutamente per $|\tan\alpha|\le1$.`
  }
  ];

  const AM = (window.AM = window.AM || {});
  AM.TEOREMI = TEOREMI;
  AM.teoremiScritto = () => TEOREMI.filter(t => t.mark === '*').sort((a, b) => a.n - b.n);
  AM.teoremiOrale   = () => TEOREMI.filter(t => t.mark === '**');
})();
