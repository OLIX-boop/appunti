/* ============================================================
   voce.js — come dire a voce le dimostrazioni di teoremi.js
   Per ogni teorema:
     apri   = la frase con cui cominciare (enunciato detto bene)
     passi  = un consiglio per ciascun passo, nello stesso ordine di `steps`
     chiudi = come chiudere e la domanda che spesso arriva dopo
   Sono consigli redazionali, non indicazioni della docente.
   ============================================================ */
(function () {
  'use strict';
  const r = String.raw;

  const VOCE = {
    'T-par': {
      apri: r`«Sia $m$ un intero. Dimostro che $m$ è pari se e solo se $m^2$ è pari.» Annuncia subito che le direzioni sono due.`,
      passi: [
        r`«Se $m$ è pari, $m=2h$ con $h$ intero, quindi $m^2=4h^2=2\cdot 2h^2$, che è pari.» Di' sempre che il fattore fra parentesi è un intero.`,
        r`«Se $m$ è dispari, $m=2h+1$ e $m^2=2(2h^2+2h)+1$: dispari.» Questo caso ti serve per l'altro verso: dillo.`,
        r`«Per il verso inverso uso la contronominale: “$m^2$ pari ⇒ $m$ pari” equivale a “$m$ dispari ⇒ $m^2$ dispari”, che ho appena mostrato.» La parola chiave è <em>contronominale</em>, non «assurdo».`
      ],
      chiudi: r`Aggiungi: «È il lemma che uso per dimostrare che $\sqrt2$ è irrazionale.» Spesso la domanda successiva è proprio quella.`
    },

    'T01': {
      apri: r`«Voglio dimostrare che non esiste un razionale il cui quadrato sia $2$. Procedo per assurdo.» Dichiara il metodo nella prima frase.`,
      passi: [
        r`«Suppongo $\sqrt2=\frac mn$ con $m,n$ interi e $n\ne0$.»`,
        r`«Posso supporre la frazione ridotta ai minimi termini, cioè $m$ e $n$ coprimi.» Dillo ad alta voce: è l'ipotesi che produrrà l'assurdo, ed è quella che si dimentica.`,
        r`«Elevando al quadrato ottengo $m^2=2n^2$, quindi $m^2$ è pari.»`,
        r`«Per il lemma sulla parità dei quadrati anche $m$ è pari: $m=2k$.» Cita il lemma per nome.`,
        r`«Sostituendo: $4k^2=2n^2$, cioè $n^2=2k^2$; quindi anche $n$ è pari.» Fai notare che il ragionamento è lo stesso di prima.`,
        r`«Allora $m$ e $n$ sono entrambi pari, contro l'ipotesi che fossero coprimi. Assurdo.» Ripeti quale ipotesi è violata.`
      ],
      chiudi: r`Chiudi con «quindi $\sqrt2\notin\Q$». Se ti chiedono perché serve la coprimalità: senza, non c'è nessuna contraddizione da cui partire.`
    },

    'T-sum': {
      apri: r`«Dimostro per induzione che la somma dei numeri da $0$ a $n$ vale $\frac{n(n+1)}2$.»`,
      passi: [
        r`«Per $n=0$ entrambi i membri valgono $0$.» Breve: la base si dice in una frase.`,
        r`«Suppongo vera la formula per $n$ e la dimostro per $n+1$.» Dichiara ipotesi e tesi separatamente.`,
        r`«Spezzo la somma fino a $n+1$ nella somma fino a $n$, su cui uso l'ipotesi induttiva, più $(n+1)$; raccolgo $(n+1)$ e ottengo $\frac{(n+1)(n+2)}2$.» Indica il punto esatto in cui usi l'ipotesi.`
      ],
      chiudi: r`«Per il principio di induzione la formula vale per ogni $n$.» Conviene citare anche il trucco di Gauss (somma scritta due volte) come controllo intuitivo.`
    },

    'T02': {
      apri: r`«Sia $h$ reale con $h>-1$. Dimostro per induzione che $(1+h)^n\ge1+nh$ per ogni $n$ naturale.» Nell'enunciato l'ipotesi $h>-1$ non va mai saltata.`,
      passi: [
        r`«Per $n=0$: $1\ge1$, vera con l'uguale.»`,
        r`«Ipotesi induttiva: $(1+h)^n\ge1+nh$. Tesi: $(1+h)^{n+1}\ge1+(n+1)h$.»`,
        r`«Osservo subito che da $h>-1$ segue $1+h>0$: mi servirà per moltiplicare senza cambiare verso.» Anticiparlo fa vedere che sai dove sta il punto delicato.`,
        r`«Scrivo $(1+h)^{n+1}=(1+h)^n(1+h)$, così compare la quantità dell'ipotesi induttiva.»`,
        r`«Moltiplico l'ipotesi induttiva per $1+h$, che è positivo, e ottengo $(1+h)^{n+1}\ge(1+nh)(1+h)$.» Di' esplicitamente «positivo, quindi il verso si conserva».`,
        r`«Svolgo: $(1+nh)(1+h)=1+(n+1)h+nh^2$.»`,
        r`«Il termine $nh^2$ è maggiore o uguale a zero, quindi posso toglierlo e resta $1+(n+1)h$.» Concludi citando il principio di induzione.`
      ],
      chiudi: r`Domanda frequente: «Dove hai usato $h>-1$?» Risposta: nel passo in cui moltiplichi per $1+h$. Seconda possibile: «A cosa serve?» A dimostrare che $q^n\to+\infty$ se $q>1$.`
    },

    'T-geo': {
      apri: r`«Sia $q\ne1$. Dimostro che $1+q+\dots+q^n=\frac{1-q^{n+1}}{1-q}$.» Dichiara subito $q\ne1$: senza, la formula divide per zero.`,
      passi: [
        r`«Per $n=0$ ottengo $1$ da entrambe le parti.»`,
        r`«Supposta vera per $n$, aggiungo $q^{n+1}$, faccio denominatore comune e ottengo $\frac{1-q^{n+2}}{1-q}$.»`,
        r`Se ti chiedono un'altra strada: «Moltiplico $S_n$ per $1-q$: i termini si cancellano a due a due e resta $1-q^{n+1}$.» È più veloce e fa bella figura.`
      ],
      chiudi: r`Aggiungi: «Per $q=1$ la somma vale semplicemente $n+1$.» E il collegamento: da qui segue la somma della serie geometrica.`
    },

    'T-tri': {
      apri: r`«Per ogni $a,b$ reali vale $|a+b|\le|a|+|b|$.»`,
      passi: [
        r`«Parto dalla doppia disuguaglianza $-|x|\le x\le|x|$, valida per ogni $x$, e la scrivo per $a$ e per $b$.»`,
        r`«Le sommo membro a membro.»`,
        r`«Una disuguaglianza del tipo $-c\le x\le c$ con $c\ge0$ equivale a $|x|\le c$: ecco la tesi.» Questo passaggio va detto, non dato per scontato.`,
        r`Se c'è tempo: «Ne segue anche la triangolare inversa, $\bigl||a|-|b|\bigr|\le|a-b|$.»`
      ],
      chiudi: r`Possibile domanda: «Quando vale l'uguale?» Quando $a$ e $b$ hanno lo stesso segno, o uno dei due è nullo.`
    },

    'T03': {
      apri: r`«Scrivo $z_1$ e $z_2$ in forma trigonometrica. Dimostro che il prodotto ha per modulo il prodotto dei moduli e per argomento la somma degli argomenti; poi la formula per le potenze, per induzione.»`,
      passi: [
        r`«Moltiplico le due forme e uso $i^2=-1$ per separare parte reale e parte immaginaria.»`,
        r`«Riconosco le formule di addizione del coseno e del seno.» Nomina le due formule: è il cuore della dimostrazione.`,
        r`«Per le potenze: per $n=0$ la formula dà $1$.»`,
        r`«Se vale per $n$, scrivo $z^{n+1}=z^n\cdot z$ e applico la formula del prodotto appena dimostrata.» Di' che usi il risultato precedente.`
      ],
      chiudi: r`Attenzione alla domanda trabocchetto: «Non bastava la forma esponenziale?» No, perché $e^{i\theta}$ è definito proprio tramite seno e coseno: usarlo sarebbe circolare.`
    },

    'T04': {
      apri: r`«Sia $w\ne0$ un complesso e $n\ge1$. Dimostro che l'equazione $z^n=w$ ha esattamente $n$ soluzioni distinte e le scrivo.»`,
      passi: [
        r`«Cerco $z$ in forma trigonometrica e applico de Moivre a $z^n$.»`,
        r`«Due complessi sono uguali se hanno lo stesso modulo e argomenti che differiscono di un multiplo di $2\pi$.» Senza questa frase il sistema non ha giustificazione.`,
        r`«Il modulo è la radice $n$-esima reale positiva di $\rho$; gli argomenti sono $\frac{\theta+2k\pi}n$ con $k$ intero.»`,
        r`«Divido $k$ per $n$: $k=nq+h$ con resto $h$ fra $0$ e $n-1$. Il termine $2q\pi$ non cambia il numero, quindi bastano gli $h$; e questi danno radici distinte perché i loro argomenti distano meno di $2\pi$.» È il passo che distingue chi l'ha capita: dillo con calma.`,
        r`«Geometricamente sono i vertici di un poligono regolare di $n$ lati, sulla circonferenza di raggio $\sqrt[n]\rho$.»`
      ],
      chiudi: r`Domanda tipica: «Come sono disposte le radici dell'unità?» Vertici di un poligono regolare inscritto nella circonferenza unitaria, uno dei quali è $1$.`
    },

    'T-mon': {
      apri: r`«Sia $f$ definita su $A$. Dimostro che $f$ è crescente se e solo se il rapporto incrementale è sempre maggiore o uguale a zero.» Definisci $R$ prima di usarlo.`,
      passi: [
        r`«Il rapporto non cambia se scambio i due punti, quindi posso supporre $x_1\lt x_2$, così il denominatore è positivo.» È l'osservazione che rende tutto semplice: mettila per prima.`,
        r`«Se $f$ cresce il numeratore è $\ge0$, il denominatore è $>0$, quindi $R\ge0$.»`,
        r`«Viceversa scrivo $f(x_2)-f(x_1)=R\cdot(x_2-x_1)$: prodotto di due fattori non negativi.» Chiudi con il caso stretto.`
      ],
      chiudi: r`Ricordati l'esempio di $\frac1x$: decrescente su ciascuna semiretta, ma non su $\R\setminus\{0\}$.`
    },

    'T05': {
      apri: r`«Se una successione ha limite, questo è unico. Procedo per assurdo, con la disuguaglianza triangolare.»`,
      passi: [
        r`«Suppongo che $a_n$ tenda sia a $\ell_1$ sia a $\ell_2$, con $\ell_1\ne\ell_2$, e scrivo le due definizioni di limite.»`,
        r`«Prendo $\nu_\eps$ uguale al massimo dei due indici: da lì in poi valgono entrambe.» Il «massimo dei due» va detto sempre.`,
        r`«Aggiungo e tolgo $a_n$ e uso la disuguaglianza triangolare: $|\ell_1-\ell_2|\lt2\eps$.»`,
        r`«Siccome vale per ogni $\eps$, scelgo $\eps$ pari a metà della distanza fra i due limiti e trovo $|\ell_1-\ell_2|\lt|\ell_1-\ell_2|$: assurdo.» Spiega perché proprio la metà.`
      ],
      chiudi: r`Puoi aggiungere l'immagine: con quell'$\eps$ le due strisce attorno ai limiti sono disgiunte, e la successione non può stare definitivamente in entrambe.`
    },

    'T06': {
      apri: r`«Se $a_n$ converge a $L$ finito, allora esiste $M$ tale che $|a_n|\le M$ per ogni $n$.»`,
      passi: [
        r`«Applico la definizione di limite con $\eps=1$.» Di' che puoi farlo perché la definizione vale per ogni $\eps$.`,
        r`«Da quell'indice in poi, con la triangolare, $|a_n|\lt1+|L|$.»`,
        r`«I termini prima sono in numero finito, quindi i loro moduli hanno un massimo.» Questa è l'idea: la definizione controlla solo la coda.`,
        r`«Prendo $M$ come il massimo fra quei moduli e $1+|L|$.»`
      ],
      chiudi: r`Domanda quasi certa: «Vale il viceversa?» No: $(-1)^n$ è limitata ma non converge.`
    },

    'T07': {
      apri: r`«Se $a_n$ tende a $L>0$, allora $a_n$ è definitivamente positiva; anzi, definitivamente maggiore di $\frac L2$.»`,
      passi: [
        r`«Scelgo $\eps=\frac L2$, che è positivo perché $L$ lo è.» Giustifica la scelta.`,
        r`«Per la definizione di limite, definitivamente $L-\frac L2\lt a_n\lt L+\frac L2$.»`,
        r`«In particolare $a_n>\frac L2>0$. Se $L=+\infty$ uso la definizione con $M=1$.»`,
        r`«Allo stesso modo, se $L\lt0$ la successione è definitivamente negativa.»`,
        r`«Corollario: se $a_n\ge0$ definitivamente e $a_n\to a$, allora $a\ge0$. Per assurdo: se fosse $a\lt0$, la successione sarebbe definitivamente negativa.»`
      ],
      chiudi: r`Sottolinea che la disuguaglianza stretta non passa al limite: $\frac1n>0$ ma il limite è $0$.`
    },

    'T08': {
      apri: r`«Se $a_n\le b_n\le c_n$ definitivamente e $a_n$, $c_n$ tendono allo stesso $L$ finito, allora anche $b_n$ tende a $L$.» Precisa che non si suppone che $b_n$ abbia limite.`,
      passi: [
        r`«Fisso $\eps>0$: devo trovare un indice oltre il quale $|b_n-L|\lt\eps$.»`,
        r`«Scrivo le tre ipotesi, ognuna con il suo indice.»`,
        r`«Prendo il massimo dei tre indici: da lì valgono tutte insieme e ottengo la catena $L-\eps\lt a_n\le b_n\le c_n\lt L+\eps$.»`,
        r`«Quindi $b_n$ sta fra $L-\eps$ e $L+\eps$; per l'arbitrarietà di $\eps$ tende a $L$.»`
      ],
      chiudi: r`Esempio da citare: $\frac{\sin n}n\to0$, perché sta fra $-\frac1n$ e $\frac1n$.`
    },

    'T-infl': {
      apri: r`«Se $a_n$ è limitata e $b_n$ è infinitesima, il prodotto è infinitesimo.»`,
      passi: [
        r`«La limitatezza mi dà $|a_n|\le M$; e $b_n\to0$ equivale a $|b_n|\to0$.»`,
        r`«Allora $0\le|a_nb_n|\le M|b_n|$, che tende a zero: carabinieri.»`,
        r`«Da $|a_nb_n|\to0$ torno a $a_nb_n\to0$.»`
      ],
      chiudi: r`Controesempio pronto: senza limitatezza non vale, $n\cdot\frac1n=1$.`
    },

    'T-alg': {
      apri: r`«Se $a_n\to L$ e $b_n\to M$, entrambi finiti, la somma tende a $L+M$ e il prodotto a $LM$. Dimostro la somma.» A lezione è stata fatta la somma: parti da quella.`,
      passi: [
        r`«Stimo la distanza della somma dal limite con la triangolare.»`,
        r`«Rendo ciascun pezzo minore di $\frac\eps2$, oltre il massimo dei due indici.» Se usi $\eps$ per entrambe e arrivi a $2\eps$, va bene lo stesso: dillo.`,
        r`Per il prodotto: «Aggiungo e tolgo $a_nM$.»`,
        r`«Uso che $a_n$, convergendo, è limitata.» Cita il teorema per nome.`
      ],
      chiudi: r`Possibile domanda: «E con i limiti infiniti?» Valgono le regole dell'aritmetica estesa, tranne le forme indeterminate: elencale.`
    },

    'T-conf': {
      apri: r`«Se $a_n\ge b_n$ definitivamente e i limiti $a$ e $b$ esistono finiti, allora $a\ge b$. È un corollario della permanenza del segno.»`,
      passi: [
        r`«Considero la differenza $c_n=a_n-b_n$, che è definitivamente maggiore o uguale a zero.»`,
        r`«Per l'algebra dei limiti tende ad $a-b$.»`,
        r`«Per il corollario della permanenza del segno il limite è $\ge0$, cioè $a\ge b$.»`
      ],
      chiudi: r`Anche qui: la disuguaglianza stretta non si conserva ($\frac1n>0$, ma i limiti sono uguali).`
    },

    'T09': {
      apri: r`«Ogni successione monotòna ha limite. Faccio il caso crescente: il limite è l'estremo superiore, finito o $+\infty$.»`,
      passi: [
        r`«Se è limitata superiormente, per la completezza di $\R$ esiste finito $L=\sup$.» Nomina la completezza: è il motivo per cui il teorema funziona in $\R$ e non in $\Q$.`,
        r`«Fisso $\eps$: per la caratterizzazione del sup, $L-\eps$ non è un maggiorante, quindi c'è un $a_N>L-\eps$.»`,
        r`«Siccome la successione cresce, tutti i termini dopo $N$ sono ancora maggiori di $L-\eps$.» Qui entra la monotonia: dillo.`,
        r`«E sono tutti minori o uguali a $L$, perché $L$ è un maggiorante. Quindi $|a_n-L|\lt\eps$ definitivamente.»`,
        r`«Se non è limitata, ogni $M$ è superato da qualche termine e, per monotonia, da tutti i successivi: tende a $+\infty$.»`
      ],
      chiudi: r`Applicazione da citare: il numero di Nepero, limite di una successione crescente e limitata.`
    },

    'T-not': {
      apri: r`«Elenco i limiti notevoli e dimostro i principali, come a lezione.» All'orale conviene partire dall'elenco e poi scegliere tu da quale cominciare.`,
      passi: [
        r`«Per $a>1$ uso Bernoulli con $h=a-1$: $a^n\ge1+n(a-1)$, che diverge.»`,
        r`«Per $\sqrt[n]a$ pongo $b_n=\sqrt[n]a-1\ge0$, applico Bernoulli e chiudo con i carabinieri.»`,
        r`«Per $\frac{\sin x}x$ uso la disuguaglianza $\cos x\lt\frac{\sin x}x\lt1$, che viene dal confronto delle aree.» Fai il disegno, se puoi.`,
        r`«Per il logaritmo scrivo il quoziente come logaritmo di $(1+a_n)^{1/a_n}$, che tende a $e$.»`,
        r`Ricorda la forma con gli o-piccoli: è quella che userai negli esercizi.`,
        r`«Per passare dalla variabile reale alle successioni uso il teorema sul limite della funzione composta.»`,
        r`Errore da evitare a voce: $\frac{1-\cos x}{x^2}$ tende a $\frac12$, non a $1$.`
      ],
      chiudi: r`Se ti chiedono «quale preferisci dimostrare?», scegli Bernoulli per $a^n$: è il più breve e mostra un collegamento.`
    },

    'T-inf': {
      apri: r`«Per $n\to+\infty$ vale la gerarchia: logaritmi, potenze, esponenziali, fattoriale, $n^n$, ciascuno trascurabile rispetto al successivo.»`,
      passi: [
        r`«Potenza su esponenziale: il rapporto fra termini consecutivi tende a $\frac1a\lt1$, quindi per il criterio del rapporto per successioni tende a zero.»`,
        r`«Esponenziale su fattoriale: il rapporto vale $\frac a{n+1}$, che tende a zero.»`,
        r`«Fattoriale su $n^n$: il rapporto tende a $\frac1e$.» Qui ritorna il numero di Nepero: fallo notare.`,
        r`«Logaritmo su potenza: parto da $2^x>x$, ricavo $\log_a x\lt x\log_a2$ e concludo con i carabinieri.»`
      ],
      chiudi: r`Spiega perché serve: nei limiti $\frac\infty\infty$ comanda il termine di ordine più alto.`
    },

    'T10': {
      apri: r`«Se la serie $\sum a_m$ converge, allora il termine generale tende a zero.» Chiarisci subito che è solo una condizione <em>necessaria</em>.`,
      passi: [
        r`«Chiamo $S_m$ la somma parziale; per ipotesi tende a un numero reale $S$.»`,
        r`«Per definizione $S_m=S_{m-1}+a_m$, quindi $a_m=S_m-S_{m-1}$.» È tutta qui l'idea: dillo con calma.`,
        r`«Anche $S_{m-1}$ tende a $S$, quindi per l'algebra dei limiti $a_m\to S-S=0$.»`,
        r`«Non è sufficiente: la serie armonica ha termine generale che tende a zero ma diverge.»`
      ],
      chiudi: r`Aggiungi l'uso pratico: letta per contrapposizione, se $a_m\not\to0$ la serie non converge (esempio della lezione: $\arctan\sqrt{m^3+2}\to\frac\pi2$).`
    },

    'T-pos': {
      apri: r`«Una serie a termini non negativi è regolare: converge oppure diverge a $+\infty$.»`,
      passi: [
        r`«$S_{m+1}=S_m+a_{m+1}\ge S_m$ perché $a_{m+1}\ge0$: le somme parziali crescono.»`,
        r`«Per il teorema sulla regolarità delle successioni monotòne il limite esiste: finito o $+\infty$.» Nomina il teorema.`
      ],
      chiudi: r`Fai notare perché è importante: tutti i criteri di confronto si appoggiano su questo fatto.`
    },

    'T-serie-geo': {
      apri: r`«La serie geometrica di ragione $q$ converge se $|q|\lt1$, con somma $\frac1{1-q}$; diverge se $q\ge1$; è indeterminata se $q\le-1$.» Dai subito i tre casi.`,
      passi: [
        r`«Per $q\ne1$ conosco la somma parziale: $S_m=\frac{1-q^{m+1}}{1-q}$, dimostrata per induzione.»`,
        r`«Se $|q|\lt1$, $q^{m+1}\to0$ e la somma è $\frac1{1-q}$.»`,
        r`«Se $q>1$, $q^{m+1}\to+\infty$ e, dividendo per $1-q$ negativo, $S_m\to+\infty$.»`,
        r`«Per $q=1$ le somme valgono $m+1$; per $q\le-1$ la potenza oscilla e il limite non esiste.»`
      ],
      chiudi: r`Utile da aggiungere: se la serie parte da $k=k_0$, la somma è «primo termine fratto $1-q$».`
    },

    'T11': {
      apri: r`«Siano $0\le a_m\le b_m$. Se converge la serie maggiore converge anche la minore; se diverge la minore diverge anche la maggiore.» Dillo nell'ordine: prima l'ipotesi sul segno.`,
      passi: [
        r`«Chiamo $S_m$ e $t_m$ le somme parziali: sommando le disuguaglianze ottengo $S_m\le t_m$.»`,
        r`«Le due serie sono a termini non negativi, quindi regolari: esistono i limiti $s$ e $t$, finiti o $+\infty$.» È il punto in cui usi $a_m\ge0$: sottolinealo.`,
        r`«Se $t$ è finito, per il confronto fra successioni $s\le t$, quindi anche $s$ è finito.»`,
        r`«Se $s=+\infty$, sempre per il confronto $t\ge s$, quindi $t=+\infty$.»`,
        r`«Se la disuguaglianza vale solo definitivamente non cambia nulla: un numero finito di termini non cambia il carattere.»`
      ],
      chiudi: r`Esempio da citare: $\sum\frac{\arctan\sqrt{k+2}}{k^4}$ converge, perché maggiorata da una serie armonica generalizzata con esponente $4$.`
    },

    'T12': {
      apri: r`«Siano $a_m\ge0$, $b_m>0$, e il limite di $\frac{a_m}{b_m}$ esista uguale a $\ell$. Se $\sum b_m$ converge e $\ell$ è finito, converge anche $\sum a_m$; se $\sum b_m$ diverge e $\ell>0$, anche $\sum a_m$ diverge.» Fai attenzione agli intervalli di $\ell$: sono la domanda trabocchetto.`,
      passi: [
        r`«Scrivo la definizione di limite: definitivamente $\ell-\eps\lt\frac{a_m}{b_m}\lt\ell+\eps$.»`,
        r`«Moltiplico per $b_m$, che è positivo, quindi il verso resta.» Di' sempre perché puoi moltiplicare.`,
        r`«Per il primo punto mi basta la disuguaglianza di destra, $a_m\lt(\ell+\eps)b_m$, e il criterio del confronto.»`,
        r`«Per il secondo scelgo $\eps=\frac\ell3$, così il coefficiente a sinistra resta positivo: $\frac{2\ell}3b_m\lt a_m$.» Spiega perché $\eps$ non può essere qualsiasi.`,
        r`«Se $\ell=+\infty$ uso la definizione con $M$: $a_m>M\,b_m$.»`,
        r`«In pratica uso $b_m=\frac1{m^\alpha}$ e guardo $m^\alpha a_m$. Se $a_m\sim b_m$, le due serie hanno lo stesso carattere.»`
      ],
      chiudi: r`Possibile domanda: «Se $\ell=0$ e $\sum b_m$ diverge?» Non si conclude niente: va detto.`
    },

    'T13': {
      apri: r`«Sia $a_n>0$ e il rapporto $\frac{a_{n+1}}{a_n}$ tenda a $\ell$. Se $\ell\lt1$ la serie converge, se $\ell>1$ diverge, se $\ell=1$ il criterio non decide.»`,
      passi: [
        r`«Scelgo un numero $x$ fra $\ell$ e $1$ e prendo $\eps=x-\ell$: definitivamente il rapporto è minore di $x$.» L'idea di prendere un $x$ in mezzo è il cuore: annunciala.`,
        r`«Quindi $a_{m+1}\lt x\,a_m$; per comodità suppongo che valga da $m=1$.»`,
        r`«Iterando, $a_m\lt a_1x^{m-1}$.»`,
        r`«Il secondo membro è il termine di una serie geometrica di ragione $x\lt1$, che converge: concludo con il confronto.»`,
        r`«Se $\ell>1$ scelgo $\eps=\ell-1$: il rapporto è definitivamente maggiore di $1$, la successione cresce, non va a zero e la serie diverge.»`,
        r`«Con $\ell=1$ non decide: $\sum\frac1n$ diverge e $\sum\frac1{n^2}$ converge, e in entrambi il rapporto tende a $1$.»`
      ],
      chiudi: r`Di' quando lo usi: con fattoriali ed esponenziali. Esempio: $\sum\frac1{m!}$, rapporto $\frac1{m+1}\to0$.`
    },

    'T14': {
      apri: r`«Definisco la convergenza assoluta: converge la serie dei moduli. Dimostro che implica la convergenza semplice.» Prima la definizione, poi il teorema.`,
      passi: [
        r`«Parto da $-|a_n|\le a_n\le|a_n|$ e sommo $|a_n|$: $0\le a_n+|a_n|\le2|a_n|$.»`,
        r`«Quindi $\sum(a_n+|a_n|)$ è a termini non negativi.»`,
        r`«È maggiorata da $\sum2|a_n|$, che converge per ipotesi: per il confronto converge.»`,
        r`«Scrivo $a_n=(a_n+|a_n|)-|a_n|$: differenza di due serie convergenti, quindi converge.»`,
        r`«Il viceversa è falso: $\sum\frac{(-1)^n}n$ converge per Leibniz, ma la serie dei moduli è l'armonica.»`
      ],
      chiudi: r`Fai capire a cosa serve: per studiare una serie a segno variabile si guarda prima la serie dei moduli.`
    }
  };

  const AM = (window.AM = window.AM || {});
  AM.VOCE = VOCE;
})();
