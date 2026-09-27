/* ============================================================
   teoremi.js — risultati principali di Geometria e Algebra Lineare
   Notazione del corso (Prof. Gumenyuk):
     K       il campo (R oppure C)
     [A|b]   matrice completa del sistema Ax = b
     l_i     numero di zeri iniziali della riga i
     r       rango = numero di pivot della matrice ridotta
     0-pivot pivot che cade nella colonna dei termini noti
   mark "*"  risultato centrale · "**" da conoscere
   ============================================================ */
(function () {
  'use strict';
  const r = String.raw;

  const TEOREMI = [

  /* ================= SEZIONE 1: sistemi e MEG ================= */
  {
    id: 'G-op', sez: 1, mark: '*', q: 'ALG pp. 84-94',
    titolo: 'Le operazioni elementari non cambiano le soluzioni',
    enunciato: r`Sia $[A\,|\,\vb]$ la matrice completa di un sistema lineare. Se $[A'\,|\,\vb']$ si ottiene da $[A\,|\,\vb]$ mediante una delle <strong>operazioni elementari sulle righe</strong>
<ol><li>scambiare due righe;</li>
<li>moltiplicare una riga per uno scalare $\lambda\ne0$;</li>
<li>sommare a una riga un multiplo di un'altra riga,</li></ol>
allora i due sistemi sono <strong>equivalenti</strong>: hanno esattamente lo stesso insieme di soluzioni.`,
    idea: r`Ogni operazione è <em>invertibile</em>, e ciascuna trasforma una soluzione in una soluzione. Invertibilità + conservazione danno l'uguaglianza dei due insiemi.`,
    steps: [
      { cue: r`Che cosa bisogna dimostrare, esattamente?`, body: r`L'uguaglianza di due insiemi: $S=S'$, dove $S$ sono le soluzioni del sistema di partenza e $S'$ quelle del trasformato. Si prova per doppia inclusione, $S\subseteq S'$ e $S'\subseteq S$.` },
      { cue: r`Inclusione $S\subseteq S'$, operazione (2)`, body: r`Sia $\vx\in S$: tutte le equazioni sono uguaglianze valide. Se moltiplico l'$i$-esima per $\lambda$, da $\sum_j a_{ij}x_j=b_i$ segue $\sum_j(\lambda a_{ij})x_j=\lambda b_i$: l'equazione nuova è ancora soddisfatta, le altre non sono toccate. Dunque $\vx\in S'$.` },
      { cue: r`Inclusione $S\subseteq S'$, operazione (3)`, body: r`Se $\vx$ soddisfa la riga $i$ e la riga $k$, allora soddisfa anche la loro combinazione: sommando membro a membro $\sum_j a_{ij}x_j=b_i$ e $\lambda\sum_j a_{kj}x_j=\lambda b_k$ si ottiene proprio la riga nuova. L'operazione (1) è ovvia: cambia solo l'ordine delle equazioni.` },
      { cue: r`Perché vale anche l'inclusione opposta? (è il punto che quasi tutti saltano)`, body: r`Perché <strong>ogni operazione elementare è invertibile, e l'inversa è dello stesso tipo</strong>: lo scambio si annulla riscambiando; la moltiplicazione per $\lambda\ne0$ si annulla moltiplicando per $\lambda^{-1}$ (ed è qui che serve $\lambda\ne0$); l'aggiunta di $\lambda R_k$ si annulla aggiungendo $-\lambda R_k$. Applicando il ragionamento precedente all'operazione inversa si ottiene $S'\subseteq S$. Dunque $S=S'$. $\blacksquare$` }
    ],
    note: r`L'ipotesi $\lambda\ne0$ nell'operazione (2) è indispensabile: moltiplicare una riga per $0$ la cancella e può <em>aggiungere</em> soluzioni. Esempio: da $x=1$ si otterrebbe $0=0$, vera per ogni $x$. È l'unico punto in cui l'operazione perderebbe l'invertibilità.`
  },
  {
    id: 'G-meg', sez: 1, mark: '**', q: 'ALG pp. 84-94',
    titolo: 'Teorema del MEG: riduzione a scala',
    enunciato: r`Esiste un algoritmo — il <strong>metodo di eliminazione di Gauss</strong> — che trasforma una matrice qualsiasi in una matrice <strong>a scala</strong> mediante un numero <em>finito</em> di operazioni elementari sulle righe.`,
    idea: r`A lezione è enunciato <em>senza dimostrazione</em>: quello che conta è saper eseguire l'algoritmo e sapere perché termina.`,
    steps: [
      { cue: r`Definizione: quando una matrice è a scala?`, body: r`Detto $\ell_i$ il <strong>numero di zeri iniziali</strong> della riga $i$ (con $\ell_i=n$ se la riga è tutta nulla), la matrice è <em>a scala</em> se $$\ell_1<\ell_2<\dots<\ell_k \quad\text{finché }\ell_i<n,$$ cioè gli zeri iniziali crescono strettamente fino alle eventuali righe nulle, che stanno in fondo.` },
      { cue: r`Che cos'è un pivot?`, body: r`Il <strong>pivot</strong> della riga $i$ (non nulla) è il suo primo elemento non nullo, che occupa il posto $(i,\ \ell_i+1)$. In una matrice a scala i pivot scendono verso destra a ogni riga.` },
      { cue: r`Lo schema dell'algoritmo`, body: r`Si individua la prima colonna non tutta nulla; si porta in cima con uno scambio una riga con elemento non nullo in quella colonna (il pivot); si annullano con l'operazione (3) tutti gli elementi sotto il pivot; si ripete sulla sottomatrice che resta, ignorando la riga e la colonna appena sistemate.` },
      { cue: r`Perché termina?`, body: r`Perché a ogni passo la sottomatrice da trattare perde almeno una riga e una colonna: dopo al più $\min\{m,n\}$ passi non resta nulla da fare. È questo a rendere il numero di operazioni <strong>finito</strong>. $\blacksquare$` }
    ],
    note: r`Il risultato <em>non</em> è unico: matrici a scala diverse possono derivare dalla stessa $A$ secondo le scelte fatte. È però unico il <strong>numero di pivot</strong>, cioè il rango. Per l'unicità della forma servirebbe la riduzione a scala <em>ridotta</em> (Gauss-Jordan).`
  },
  {
    id: 'G-zero', sez: 1, mark: '*', q: 'ALG pp. 84-94',
    titolo: 'Criterio dello 0-pivot (compatibilità)',
    enunciato: r`Sia $[A\,|\,\vb]\xrightarrow{\ \text{MEG}\ }[U\,|\,\vb']$ con $[U\,|\,\vb']$ a scala. Allora il sistema $A\vx=\vb$ è <strong>incompatibile</strong> (non ammette soluzioni) se e solo se in $[U\,|\,\vb']$ compare un pivot nella <strong>colonna dei termini noti</strong> — uno <em>0-pivot</em>, cioè una riga della forma $$[\,0\ \ 0\ \cdots\ 0\ \,|\ c\,]\qquad\text{con } c\neq0.$$`,
    idea: r`Quella riga è l'equazione $0=c$: falsa comunque si scelgano le incognite.`,
    steps: [
      { cue: r`Se c'è uno 0-pivot, perché non ci sono soluzioni?`, body: r`La riga corrispondente è l'equazione $$0\cdot x_1+0\cdot x_2+\dots+0\cdot x_n=c,\qquad c\ne0,$$ cioè $0=c$: falsa per <em>ogni</em> $\vx\in\K^n$. Il sistema ridotto non ha soluzioni, e per il teorema sulle operazioni elementari nemmeno quello di partenza.` },
      { cue: r`Se non c'è, perché le soluzioni esistono?`, body: r`Allora ogni riga non nulla di $[U\,|\,\vb']$ ha il pivot in una colonna dei <em>coefficienti</em>. Si assegnano valori arbitrari alle incognite libere e si ricavano le incognite pivotali con la <strong>sostituzione all'indietro</strong>, partendo dall'ultima riga non nulla: ogni pivot è $\ne0$, quindi ogni divisione è lecita. Si ottiene così almeno una soluzione. $\blacksquare$` },
      { cue: r`La lettura in termini di rango`, body: r`Uno 0-pivot c'è esattamente quando la matrice completa ha un pivot in più della matrice dei coefficienti: $$\text{incompatibile}\iff \rg[A\,|\,\vb]=\rg A+1.$$ È la forma in cui il criterio diventa il teorema di Rouché-Capelli.` }
    ],
    note: r`Errore tipico: cercare lo 0-pivot <em>prima</em> di aver completato la riduzione a scala. Una riga può apparire "impossibile" a metà strada e sistemarsi dopo, o viceversa. Il criterio si applica solo alla matrice <strong>già a scala</strong>.`
  },
  {
    id: 'G-rango', sez: 1, mark: '*', q: 'ALG pp. 84-94',
    titolo: 'Il rango e la disuguaglianza $r\le\min\{m,n\}$',
    enunciato: r`Sia $A$ di tipo $m\times n$ e sia $U$ una sua riduzione a scala. Il <strong>rango</strong> $r=\rg A$ è il numero di pivot di $U$. Vale $$r\le m\qquad\text{e}\qquad r\le n,\qquad\text{dunque}\qquad r\le\min\{m,n\}.$$`,
    idea: r`Ogni pivot occupa una riga tutta sua e una colonna tutta sua.`,
    steps: [
      { cue: r`Perché $r\le m$?`, body: r`Ogni riga di $U$ contiene <strong>al più un pivot</strong> (il primo elemento non nullo della riga). Quindi il numero di pivot non supera il numero di righe: $r\le m$.` },
      { cue: r`Perché $r\le n$?`, body: r`In una matrice a scala gli indici di colonna dei pivot sono <strong>strettamente crescenti</strong> ($\ell_1<\ell_2<\dots$), dunque due pivot non stanno mai nella stessa colonna. Quindi $$r=\#\{\text{pivot}\}\le\#\{\text{colonne}\}=n.\qquad\blacksquare$$` },
      { cue: r`Perché il rango è ben definito?`, body: r`Perché — e questo si ammette a lezione — <em>tutte</em> le riduzioni a scala di $A$ hanno lo stesso numero di pivot, pur potendo differire come matrici. Senza questo fatto la definizione dipenderebbe dalle scelte fatte durante il MEG.` }
    ],
    note: r`$\rg A$ conta i pivot della matrice dei <em>coefficienti</em>; $\rg[A\,|\,\vb]$ conta quelli della matrice <em>completa</em>. I due numeri differiscono al più di $1$, e differiscono esattamente quando c'è uno 0-pivot.`
  },

  /* ============ SEZIONE 2: algebra delle matrici ============ */
  {
    id: 'G-noncomm', sez: 2, mark: '*', q: 'ALG pp. 75-81',
    titolo: 'Il prodotto di matrici non è commutativo',
    enunciato: r`In generale $AB\ne BA$, anche quando entrambi i prodotti sono definiti e dello stesso tipo. Inoltre esistono <strong>divisori dello zero</strong>: $AB=O$ non implica $A=O$ oppure $B=O$.`,
    idea: r`Bastano due controesempi $2\times2$, da tenere a memoria.`,
    steps: [
      { cue: r`Controesempio alla commutatività`, body: r`$$A=\begin{bmatrix}0&1\\0&0\end{bmatrix},\quad B=\begin{bmatrix}0&0\\1&0\end{bmatrix} \Longrightarrow AB=\begin{bmatrix}1&0\\0&0\end{bmatrix},\quad BA=\begin{bmatrix}0&0\\0&1\end{bmatrix}.$$ Dunque $AB\ne BA$.` },
      { cue: r`Controesempio sui divisori dello zero`, body: r`Con la stessa $A$: $$A^{2}=\begin{bmatrix}0&1\\0&0\end{bmatrix}\begin{bmatrix}0&1\\0&0\end{bmatrix}=\begin{bmatrix}0&0\\0&0\end{bmatrix}=O,$$ pur essendo $A\ne O$. Una matrice non nulla con $A^k=O$ si dice <em>nilpotente</em>.` },
      { cue: r`Che cosa si perde, in pratica?`, body: r`Non si può semplificare: da $AB=AC$ <strong>non</strong> segue $B=C$ (a meno che $A$ non sia invertibile). E $(A+B)^2=A^2+AB+BA+B^2$, che si riduce alla formula del quadrato del binomio solo se $A$ e $B$ commutano. $\blacksquare$` }
    ],
    note: r`Ulteriore asimmetria: se $A$ è $m\times n$ e $B$ è $n\times k$, il prodotto $AB$ esiste ma $BA$ è definito solo se $k=m$. La commutatività può fallire già a livello di <em>tipi</em>, prima ancora che di valori.`
  },
  {
    id: 'G-trasp', sez: 2, mark: '**', q: 'ALG pp. 75-81',
    titolo: 'Trasposta di un prodotto',
    enunciato: r`Siano $A$ di tipo $m\times n$ e $B$ di tipo $n\times k$. Allora $$(AB)^{T}=B^{T}A^{T}.$$ In particolare l'ordine dei fattori <strong>si inverte</strong>.`,
    idea: r`Si confrontano le entrate $(i,j)$ dei due membri; sono la stessa somma.`,
    steps: [
      { cue: r`Controllo dei tipi (da fare sempre per primo)`, body: r`$AB$ è $m\times k$, quindi $(AB)^{T}$ è $k\times m$. Dall'altra parte $B^{T}$ è $k\times n$ e $A^{T}$ è $n\times m$, quindi $B^{T}A^{T}$ è $k\times m$. I tipi coincidono: il confronto ha senso. (Con l'ordine <em>non</em> invertito, $A^TB^T$ in generale non sarebbe neppure definito.)` },
      { cue: r`Il conto sulle entrate`, body: r`$$\bigl[(AB)^{T}\bigr]_{ij}=[AB]_{ji}=\sum_{s=1}^{n}a_{js}b_{si}.$$` },
      { cue: r`L'altro membro`, body: r`$$\bigl[B^{T}A^{T}\bigr]_{ij}=\sum_{s=1}^{n}[B^{T}]_{is}[A^{T}]_{sj}=\sum_{s=1}^{n}b_{si}a_{js}.$$ Le due somme hanno gli stessi addendi (il prodotto di scalari è commutativo), quindi coincidono per ogni $i,j$. $\blacksquare$` }
    ],
    note: r`Regola generale da ricordare: trasposizione e inversione <strong>rovesciano l'ordine</strong> — $(AB)^T=B^TA^T$ e $(AB)^{-1}=B^{-1}A^{-1}$ — mentre la somma no: $(A+B)^T=A^T+B^T$.`
  },
  {
    id: 'G-struttura', sez: 2, mark: '*', q: 'ALG pp. 94-105',
    titolo: 'Struttura delle soluzioni di un sistema lineare',
    enunciato: r`Sia $A\vx=\vb$ compatibile e sia $\vx_0$ una sua soluzione <em>particolare</em>. Allora l'insieme di <strong>tutte</strong> le soluzioni è
$$S=\{\vx_0+\vv\ :\ \vv\in S_0\},$$ dove $S_0$ è l'insieme delle soluzioni del <strong>sistema omogeneo associato</strong> $A\vx=\vzero$.<br><br>
Inoltre, se $r=\rg A$, esistono $\vv_1,\dots,\vv_{n-r}\in\K^{n}$ tali che $$S_0=\{t_1\vv_1+\dots+t_{n-r}\vv_{n-r}\ :\ t_1,\dots,t_{n-r}\in\K\}.$$`,
    idea: r`Sottrarre due soluzioni annulla il termine noto: la differenza risolve l'omogeneo.`,
    steps: [
      { cue: r`Inclusione $\supseteq$: perché $\vx_0+\vv$ è soluzione?`, body: r`Se $A\vx_0=\vb$ e $A\vv=\vzero$, allora per la <strong>linearità</strong> del prodotto matrice-vettore $$A(\vx_0+\vv)=A\vx_0+A\vv=\vb+\vzero=\vb.$$` },
      { cue: r`Inclusione $\subseteq$: il passaggio chiave`, body: r`Sia $\vx$ una soluzione qualsiasi. Poniamo $\vv:=\vx-\vx_0$. Allora $$A\vv=A\vx-A\vx_0=\vb-\vb=\vzero,$$ dunque $\vv\in S_0$ e $\vx=\vx_0+\vv$ ha la forma richiesta. $\blacksquare$` },
      { cue: r`Da dove vengono gli $n-r$ parametri?`, body: r`Dal MEG: dopo la riduzione a scala, le colonne con pivot corrispondono alle $r$ <strong>incognite di base</strong>, le altre alle <strong>incognite libere</strong>, che sono $n-r$. Assegnando a turno il valore $1$ a una libera e $0$ alle altre, e risolvendo all'indietro, si ottengono i vettori $\vv_1,\dots,\vv_{n-r}$.` },
      { cue: r`Osservazione che vale punti all'esame`, body: r`I vettori $\vv_1,\dots,\vv_{n-r}$ dipendono <strong>solo da $A$</strong>, non da $\vb$; è $\vx_0$ a dipendere da entrambi. Perciò, cambiando il termine noto, la «direzione» dell'insieme delle soluzioni non cambia: si sposta soltanto.` }
    ],
    note: r`Lettura geometrica: $S$ è $S_0$ <em>traslato</em> di $\vx_0$. Se $r=n$ non ci sono parametri liberi e la soluzione è unica; se $r<n$ ce ne sono $n-r$ e le soluzioni sono infinite (su $\K$ infinito). Il sistema omogeneo non è mai incompatibile: $\vx=\vzero$ è sempre soluzione.`
  },
  {
    id: 'G-rc', sez: 2, mark: '*', q: 'ALG pp. 94-105',
    titolo: 'Teorema di Rouché-Capelli',
    enunciato: r`Il sistema $A\vx=\vb$, con $A$ di tipo $m\times n$, è <strong>compatibile</strong> se e solo se
$$\rg A=\rg[A\,|\,\vb].$$
In tal caso, posto $r$ il valore comune:
<ul><li>se $r=n$ la soluzione è <strong>unica</strong>;</li>
<li>se $r<n$ le soluzioni sono <strong>infinite</strong>, descritte da $n-r$ parametri liberi.</li></ul>`,
    idea: r`È il criterio dello 0-pivot riscritto con i ranghi.`,
    steps: [
      { cue: r`Il legame fra i due ranghi`, body: r`Riduciamo a scala la matrice completa: $[A\,|\,\vb]\to[U\,|\,\vb']$. Le stesse operazioni riducono $A$ a $U$. Ogni pivot di $U$ è un pivot di $[U\,|\,\vb']$, e l'unico pivot in più possibile è quello nella colonna dei termini noti. Quindi $$\rg[A\,|\,\vb]=\rg A\quad\text{oppure}\quad \rg[A\,|\,\vb]=\rg A+1.$$` },
      { cue: r`Traduzione del criterio dello 0-pivot`, body: r`Il secondo caso si verifica <em>esattamente</em> quando compare uno 0-pivot, cioè quando il sistema è incompatibile. Dunque $$\text{compatibile}\iff\rg A=\rg[A\,|\,\vb].$$` },
      { cue: r`Il caso $r=n$`, body: r`Se $r=n$, ogni colonna dei coefficienti contiene un pivot: non restano incognite libere. La sostituzione all'indietro determina univocamente $x_n$, poi $x_{n-1}$, e così via. La soluzione è unica.` },
      { cue: r`Il caso $r<n$`, body: r`Restano $n-r\ge1$ incognite libere, a cui si può assegnare qualunque valore in $\K$: per ogni scelta si ottiene una soluzione diversa. Le soluzioni sono infinite e formano, per il teorema sulla struttura, un traslato di uno spazio con $n-r$ parametri. $\blacksquare$` }
    ],
    note: r`Il teorema <strong>non richiede $m=n$</strong>: vale per matrici rettangolari qualsiasi. Attenzione a non confondere «infinite soluzioni» con «tutte le $\vx$»: sono infinite ma vincolate. E il numero di parametri è $n-r$, dove $n$ è il numero di <em>incognite</em>, non di equazioni.`
  },
  {
    id: 'G-omog', sez: 2, mark: '*', q: 'ALG pp. 94-105',
    titolo: 'Sistemi omogenei: soluzioni non banali',
    enunciato: r`Il sistema omogeneo $A\vx=\vzero$ è sempre compatibile ($\vx=\vzero$ è soluzione, detta <em>banale</em>). Ammette soluzioni <strong>non banali</strong> se e solo se $r<n$, cioè $\rg A<n$.<br><br>
In particolare, se $m<n$ (meno equazioni che incognite) esistono sempre soluzioni non banali.`,
    idea: r`Tutto discende da Rouché-Capelli, perché l'omogeneo non può mai essere incompatibile.`,
    steps: [
      { cue: r`Perché è sempre compatibile?`, body: r`Perché $A\vzero=\vzero$: la soluzione banale c'è sempre. Equivalentemente, la colonna dei termini noti è nulla, quindi non può mai ospitare un pivot: nessuno 0-pivot è possibile e $\rg A=\rg[A\,|\,\vzero]$.` },
      { cue: r`Quando ci sono anche soluzioni non banali?`, body: r`Per Rouché-Capelli la soluzione è unica se e solo se $r=n$; ma l'unica soluzione, in tal caso, è quella banale. Dunque esistono soluzioni non banali $\iff r<n$.` },
      { cue: r`Il corollario con $m<n$`, body: r`Sappiamo che $r\le\min\{m,n\}\le m$. Se $m<n$ allora $r\le m<n$, quindi $r<n$ ed esistono soluzioni non banali. $\blacksquare$` }
    ],
    note: r`Questo corollario è usatissimo: «un sistema omogeneo con più incognite che equazioni ha sempre soluzioni non banali». Più avanti diventerà: $n$ vettori in uno spazio di dimensione $<n$ sono sempre linearmente dipendenti.`
  },
  {
    id: 'G-inv1', sez: 2, mark: '*', q: 'ALG cap. 3',
    titolo: 'Unicità della matrice inversa',
    enunciato: r`Sia $A$ quadrata di ordine $n$. Se esiste $B$ con $AB=BA=I_n$, allora tale $B$ è <strong>unica</strong>; si scrive $B=A^{-1}$ e $A$ si dice <em>invertibile</em>.`,
    idea: r`Il trucco classico: si prendono due inverse e si incastrano in un prodotto triplo.`,
    steps: [
      { cue: r`Impostazione`, body: r`Supponiamo che $B$ e $C$ siano entrambe inverse di $A$: $$AB=BA=I_n\qquad\text{e}\qquad AC=CA=I_n.$$` },
      { cue: r`Il passaggio (da ricordare a memoria)`, body: r`$$B=BI_n=B(AC)=(BA)C=I_nC=C.$$ Si è usata l'<strong>associatività</strong> del prodotto e la proprietà $I_n$ elemento neutro. Dunque $B=C$. $\blacksquare$` },
      { cue: r`Dove serve ciascuna ipotesi?`, body: r`Per scrivere $B=B I_n$ serve $AC=I_n$ (inversa <em>destra</em> di $A$); per scrivere $I_nC=C$ serve $BA=I_n$ (inversa <em>sinistra</em>). Servono cioè entrambe le uguaglianze, una per ciascuna delle due candidate.` }
    ],
    note: r`Per matrici <strong>quadrate</strong> si dimostra che una sola delle due condizioni basta: se $AB=I_n$ allora automaticamente $BA=I_n$. Per matrici rettangolari questo è falso, e possono esistere inverse solo da un lato.`
  },
  {
    id: 'G-inv2', sez: 2, mark: '*', q: 'ALG cap. 3',
    titolo: 'Condizioni di invertibilità e inversa di un prodotto',
    enunciato: r`Sia $A$ quadrata di ordine $n$. Sono <strong>equivalenti</strong>:
<ol><li>$A$ è invertibile;</li>
<li>$\rg A=n$ (rango massimo);</li>
<li>il sistema omogeneo $A\vx=\vzero$ ha solo la soluzione banale;</li>
<li>per ogni $\vb\in\K^{n}$ il sistema $A\vx=\vb$ ha una e una sola soluzione;</li>
<li>$\det A\ne0$.</li></ol>
Inoltre, se $A$ e $B$ sono invertibili dello stesso ordine, $AB$ è invertibile e $$(AB)^{-1}=B^{-1}A^{-1}.$$`,
    idea: r`Le equivalenze si leggono tutte attraverso Rouché-Capelli; la formula del prodotto si verifica per calcolo diretto.`,
    steps: [
      { cue: r`(1) $\Rightarrow$ (4)`, body: r`Se esiste $A^{-1}$, moltiplicando $A\vx=\vb$ a sinistra per $A^{-1}$ si ottiene $\vx=A^{-1}\vb$: la soluzione esiste ed è forzata, quindi unica.` },
      { cue: r`(4) $\Rightarrow$ (2) e (2) $\Leftrightarrow$ (3)`, body: r`Se per ogni $\vb$ la soluzione è unica, per Rouché-Capelli deve essere $r=n$. Viceversa, con $r=n$ non ci sono incognite libere e l'omogeneo ha solo la soluzione banale: questo dà (2) $\Leftrightarrow$ (3).` },
      { cue: r`(2) $\Rightarrow$ (1): come si costruisce l'inversa?`, body: r`Se $\rg A=n$, il MEG riduce $A$ a una matrice a scala con $n$ pivot, e proseguendo (Gauss-Jordan) fino a $I_n$. Applicando <em>le stesse</em> operazioni alla matrice affiancata si ottiene $$[A\,|\,I_n]\ \xrightarrow{\ \text{MEG}\ }\ [I_n\,|\,A^{-1}],$$ che è anche l'algoritmo pratico per calcolare l'inversa.` },
      { cue: r`La formula $(AB)^{-1}=B^{-1}A^{-1}$`, body: r`Basta verificare la definizione: $$(AB)(B^{-1}A^{-1})=A(BB^{-1})A^{-1}=AI_nA^{-1}=AA^{-1}=I_n,$$ e simmetricamente $(B^{-1}A^{-1})(AB)=I_n$. Per l'unicità dell'inversa, $B^{-1}A^{-1}$ <em>è</em> l'inversa di $AB$. $\blacksquare$` }
    ],
    note: r`L'ordine si inverte: $(AB)^{-1}=B^{-1}A^{-1}$, <strong>non</strong> $A^{-1}B^{-1}$. Si capisce dall'analogia con vestirsi e svestirsi: per disfare «prima calze, poi scarpe» si tolgono prima le scarpe. E attenzione: la somma di matrici invertibili può non essere invertibile ($A$ e $-A$).`
  },
  {
    id: 'G-cramer', sez: 2, mark: '*', q: 'ALG cap. 3',
    titolo: 'Teorema di Cramer',
    enunciato: r`Sia $A$ quadrata di ordine $n$ con $\det A\ne0$. Allora il sistema $A\vx=\vb$ ha <strong>una e una sola</strong> soluzione, data da
$$x_j=\frac{\det A_j}{\det A},\qquad j=1,\dots,n,$$
dove $A_j$ è la matrice ottenuta da $A$ <strong>sostituendo la $j$-esima colonna con il vettore $\vb$</strong>.`,
    idea: r`Esistenza e unicità vengono dall'invertibilità; la formula si ottiene dalla regola $A^{-1}=\frac{1}{\det A}\operatorname{adj}A$.`,
    steps: [
      { cue: r`Esistenza e unicità`, body: r`$\det A\ne0$ equivale all'invertibilità di $A$. Allora $\vx=A^{-1}\vb$ è soluzione, ed è l'unica: se $A\vx_1=A\vx_2=\vb$, moltiplicando per $A^{-1}$ si ottiene $\vx_1=\vx_2$.` },
      { cue: r`Da dove esce la formula`, body: r`Dalla scrittura dell'inversa tramite la matrice dei cofattori, $$A^{-1}=\frac{1}{\det A}\,\operatorname{adj}A,\qquad (\operatorname{adj}A)_{ij}=C_{ji},$$ con $C_{ji}=(-1)^{i+j}\det(A_{\hat j\hat i})$. La componente $j$-esima di $\vx=A^{-1}\vb$ vale allora $$x_j=\frac{1}{\det A}\sum_{i=1}^{n}C_{ij}\,b_i.$$` },
      { cue: r`Il riconoscimento finale`, body: r`La somma $\sum_i C_{ij}b_i$ è esattamente lo <strong>sviluppo di Laplace lungo la colonna $j$</strong> della matrice $A_j$, cioè di $A$ con la colonna $j$ rimpiazzata da $\vb$. Dunque $\sum_i C_{ij}b_i=\det A_j$ e $$x_j=\frac{\det A_j}{\det A}.\qquad\blacksquare$$` },
      { cue: r`Quando conviene usarlo davvero`, body: r`Quasi mai per risolvere: richiede $n+1$ determinanti di ordine $n$, contro il costo molto minore del MEG. Serve invece quando si vuole <strong>una sola</strong> incognita, o quando i coefficienti dipendono da un <strong>parametro</strong> e si vuole discutere il sistema in forma chiusa.` }
    ],
    note: r`Ipotesi da non dimenticare: $A$ <strong>quadrata</strong> e $\det A\ne0$. Se $\det A=0$ la formula non ha senso (si dividerebbe per zero) e il sistema va discusso con Rouché-Capelli: può essere incompatibile oppure avere infinite soluzioni.`
  },

  /* ====== SEZIONE 3: vettori e spazi vettoriali ====== */
  {
    id: 'G-prod', sez: 3, mark: '*', q: 'Lez. 3',
    titolo: 'Invertibilità del prodotto di matrici',
    enunciato: r`Siano $A,B$ matrici <strong>quadrate</strong> dello stesso ordine $n$. Allora
$$AB\ \text{è invertibile}\iff A\ \text{e}\ B\ \text{sono entrambe invertibili},$$
e in tal caso $(AB)^{-1}=B^{-1}A^{-1}$.`,
    idea: r`Un verso si verifica per calcolo diretto; l'altro si legge dalla moltiplicatività del determinante.`,
    steps: [
      { cue: r`Verso $\Leftarrow$`, body: r`Se esistono $A^{-1}$ e $B^{-1}$, si verifica che $B^{-1}A^{-1}$ è l'inversa di $AB$: $$(AB)(B^{-1}A^{-1})=A(BB^{-1})A^{-1}=AI_nA^{-1}=I_n,$$ e simmetricamente $(B^{-1}A^{-1})(AB)=I_n$. Per l'unicità dell'inversa, $(AB)^{-1}=B^{-1}A^{-1}$.` },
      { cue: r`Verso $\Rightarrow$: quale strumento conviene?`, body: r`Il <strong>determinante</strong>, perché è moltiplicativo: $\det(AB)=\det A\cdot\det B$. Se $AB$ è invertibile allora $\det(AB)\ne0$, dunque $\det A\cdot\det B\ne0$.` },
      { cue: r`Conclusione`, body: r`Un prodotto di scalari è non nullo solo se entrambi i fattori lo sono: $\det A\ne0$ e $\det B\ne0$, cioè $A$ e $B$ sono invertibili. $\blacksquare$` },
      { cue: r`Variante senza determinante`, body: r`Posto $C=(AB)^{-1}$: da $A(BC)=I_n$ segue che $A$ ha inversa destra, da $(CA)B=I_n$ che $B$ ha inversa sinistra. Per matrici quadrate ciascuna delle due condizioni implica l'invertibilità.` }
    ],
    note: r`L'ipotesi «quadrate» è essenziale. Con $A$ di tipo $1\times2$ e $B$ di tipo $2\times1$, il prodotto $AB$ è $1\times1$ e può essere invertibile, mentre per $A$ e $B$ la parola «inversa» non ha nemmeno senso.`
  },
  {
    id: 'G-somma', sez: 3, mark: '*', q: 'ALG §1.3',
    titolo: 'La somma di vettori liberi è ben posta',
    enunciato: r`Siano $\vec u,\vec v$ vettori liberi. Fissato un punto $A$, si pongano $B:=\tau_{\vec u}(A)$ e $C:=\tau_{\vec v}(B)$. Allora il vettore libero rappresentato da $\overrightarrow{AC}$ <strong>non dipende dalla scelta di $A$</strong>, ed è quindi determinato univocamente da $\vec u$ e $\vec v$. Lo si chiama $\vec u+\vec v$.`,
    idea: r`Cambiando il punto di partenza, tutta la figura trasla: i segmenti orientati ottenuti sono equipollenti, dunque rappresentano lo stesso vettore libero.`,
    steps: [
      { cue: r`Perché serve dimostrarlo?`, body: r`Perché la definizione contiene una <strong>scelta arbitraria</strong> — il punto $A$. Se il risultato ne dipendesse, non definirebbe un'operazione fra vettori ma una funzione anche del punto: sarebbe <em>mal posta</em>.` },
      { cue: r`L'impostazione`, body: r`Siano $A$ e $A'$ due punti qualsiasi, e siano $B=\tau_{\vec u}(A)$, $C=\tau_{\vec v}(B)$, $B'=\tau_{\vec u}(A')$, $C'=\tau_{\vec v}(B')$. Bisogna mostrare che $\overrightarrow{AC}$ e $\overrightarrow{A'C'}$ sono equipollenti.` },
      { cue: r`Il passaggio chiave`, body: r`La traslazione che porta $A$ in $A'$ porta anche $B$ in $B'$ (entrambi ottenuti applicando $\tau_{\vec u}$) e quindi $C$ in $C'$ (applicando $\tau_{\vec v}$). Le traslazioni <strong>conservano direzione, verso e lunghezza</strong>.` },
      { cue: r`Conclusione`, body: r`Dunque $\overrightarrow{A'C'}$ si ottiene da $\overrightarrow{AC}$ per traslazione: i due segmenti orientati sono equipollenti e rappresentano lo stesso vettore libero. $\blacksquare$` },
      { cue: r`Il corollario che si legge nel disegno`, body: r`Partendo da $A$ con $\vec v$ e poi $\vec u$ si arriva allo stesso punto $C$: i due cammini chiudono un <strong>parallelogramma</strong>. È la dimostrazione geometrica di $\vec u+\vec v=\vec v+\vec u$.` }
    ],
    note: r`È lo stesso tipo di verifica che serve ogni volta che si definisce un'operazione su <em>classi di equivalenza</em>: bisogna controllare che il risultato non cambi cambiando rappresentante.`
  },
  {
    id: 'G-assiomi', sez: 3, mark: '**', q: 'ALG §4.1',
    titolo: 'Conseguenze elementari degli assiomi',
    enunciato: r`In ogni spazio vettoriale $V$ su $\K$:
<br>(a) il vettore nullo è <strong>unico</strong>; &nbsp;(b) l'opposto di ogni vettore è <strong>unico</strong>;
<br>(c) $0\cdot\vv=\vzero$; &nbsp;(d) $(-1)\vv=-\vv$; &nbsp;(e) $\lambda\vzero=\vzero$.`,
    idea: r`Nessuna di queste è un assioma: si ricavano tutte dagli otto, e le dimostrazioni sono di due righe.`,
    steps: [
      { cue: r`(a) Unicità dello zero`, body: r`Siano $\vzero$ e $\vzero'$ entrambi neutri. Allora $$\vzero=\vzero+\vzero'=\vzero',$$ dove la prima uguaglianza usa la neutralità di $\vzero'$ e la seconda quella di $\vzero$ (con la commutatività).` },
      { cue: r`(b) Unicità dell'opposto`, body: r`Se $\vw$ e $\vw'$ sono entrambi opposti di $\vv$: $$\vw=\vw+\vzero=\vw+(\vv+\vw')=(\vw+\vv)+\vw'=\vzero+\vw'=\vw'.$$ Si usano solo (ii), (iii) e (iv).` },
      { cue: r`(c) $0\cdot\vv=\vzero$ — l'idea è «aggiungi e togli»`, body: r`Per l'assioma (vi): $$0\vv=(0+0)\vv=0\vv+0\vv.$$ Sommando a entrambi i membri l'opposto di $0\vv$ si ottiene $\vzero=0\vv$. $\blacksquare$` },
      { cue: r`(d) $(-1)\vv=-\vv$`, body: r`Si verifica che $(-1)\vv$ fa da opposto: $$\vv+(-1)\vv\overset{\text{(viii)}}{=}1\vv+(-1)\vv\overset{\text{(vi)}}{=}\bigl(1+(-1)\bigr)\vv=0\vv\overset{\text{(c)}}{=}\vzero.$$ Per l'unicità dell'opposto, $(-1)\vv=-\vv$. $\blacksquare$` },
      { cue: r`(e) $\lambda\vzero=\vzero$`, body: r`Per (v): $\lambda\vzero=\lambda(\vzero+\vzero)=\lambda\vzero+\lambda\vzero$; sommando l'opposto di $\lambda\vzero$ si conclude. $\blacksquare$` }
    ],
    note: r`Nota quali assiomi servono dove: (c) usa la distributiva sugli <em>scalari</em> (vi), mentre (e) usa quella sui <em>vettori</em> (v). Sono simmetriche ma distinte, e all'esame conviene citare il numero dell'assioma usato.`
  },

  /* ============ SEZIONE 4: numeri complessi ============ */
  {
    id: 'G-tfa', sez: 4, mark: '**', q: 'ALG App. I',
    titolo: 'Teorema fondamentale dell\'algebra',
    enunciato: r`Ogni polinomio $P(z)=a_nz^{n}+\dots+a_1z+a_0$ di grado $n\ge1$ a coefficienti in $\C$ ammette almeno una radice in $\C$. Iterando, $$P(z)=a_n(z-z_1)(z-z_2)\cdots(z-z_n),$$ con le radici contate secondo molteplicità.`,
    idea: r`Si enuncia e si usa; la dimostrazione esula dal corso.`,
    steps: [
      { cue: r`Che cosa significa «algebricamente chiuso»`, body: r`Che ogni equazione polinomiale non costante ha soluzione dentro $\C$: passando da $\R$ a $\C$ non si risolve solo $x^{2}=-1$, ma <em>ogni</em> equazione polinomiale.` },
      { cue: r`Il corollario sui coefficienti reali`, body: r`Se i coefficienti sono <strong>reali</strong>, le radici non reali compaiono a coppie coniugate: se $P(z_0)=0$ allora $P(\bar z_0)=0$. Di conseguenza un polinomio reale di grado dispari ha sempre almeno una radice reale.` },
      { cue: r`Perché conta in algebra lineare`, body: r`Perché il polinomio caratteristico di una matrice ha sempre $n$ radici in $\C$: su $\C$ ogni matrice quadrata ha autovalori, mentre su $\R$ può non averne (una rotazione del piano, per esempio). È il motivo per cui $\C$ compare in un corso di geometria.` }
    ],
    note: r`Collegamento diretto con Analisi 1: la stessa Appendice tratta forma trigonometrica, de Moivre e radici $n$-esime. Se li hai già studiati lì, qui non c'è nulla di nuovo — cambia solo l'uso che se ne fa.`
  }
  ];

  const AM = (window.AM = window.AM || {});
  AM.TEOREMI_GEO = TEOREMI;
})();
