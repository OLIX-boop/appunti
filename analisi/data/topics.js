/* ============================================================
   topics.js — programma della PRIMA PARTE (primo parziale)
   Fonte: "Programma di massima e bibliografia" — Prof. G. Meglioli
   marks:  "*"  dimostrazione richiesta allo SCRITTO
           "**" dimostrazione richiesta solo all'ORALE
   q:      quesiti teorici collegati
   ============================================================ */
(function () {
  'use strict';
  const r = String.raw;

  const SEZIONI = [
    {
      n: 1,
      slug: 'sezioni/1-numeri.html',
      titolo: 'Numeri reali e complessi',
      sommario: r`Da $\N$ a $\C$: costruzione di $\R$, completezza, induzione, e il piano di Argand-Gauss.`,
      topics: [
        { id: 's1-01', t: r`Gli insiemi numerici $\N,\Z,\Q$; operazioni e ordinamento in $\Q$`, q: '1.1' },
        { id: 's1-02', t: r`Allineamenti decimali; legame con $\Q$ e con la retta`, q: '1.2' },
        { id: 's1-03', t: 'Richiami di logica: connettivi, implicazione, contronominale, tipi di dimostrazione', q: '—' },
        { id: 's1-04', t: 'Teorema sulla parità dei quadrati', mark: '**', q: '1.4' },
        { id: 's1-05', t: r`Irrazionalità di $\sqrt2$`, mark: '*', q: '1.5' },
        { id: 's1-06', t: 'Il principio di induzione', q: '1.6' },
        { id: 's1-07', t: 'Somma dei primi $n$ naturali', mark: '**', q: '1.7' },
        { id: 's1-08', t: 'Disuguaglianza di Bernoulli', mark: '*', q: '1.8' },
        { id: 's1-09', t: 'Somma di una progressione geometrica', mark: '**', q: '1.9' },
        { id: 's1-10', t: r`Massimo, minimo, maggiorante, minorante di $E\subseteq\R$`, q: '1.10' },
        { id: 's1-11', t: 'Insiemi limitati e illimitati superiormente/inferiormente', q: '1.11' },
        { id: 's1-12', t: 'Estremo superiore e inferiore; loro caratterizzazione', q: '1.12' },
        { id: 's1-13', t: r`Proprietà di completezza (o di continuità) di $\R$`, q: '1.13' },
        { id: 's1-14', t: 'Radici, potenze ad esponente razionale e reale, logaritmi', q: '1.14' },
        { id: 's1-15', t: 'Grandezze goniometriche e loro proprietà', q: '1.15' },
        { id: 's1-16', t: 'Valore assoluto e sue proprietà', q: '1.16' },
        { id: 's1-17', t: 'Disuguaglianza triangolare', mark: '**', q: '1.17' },
        { id: 's1-18', t: r`L'insieme $\C$: forma algebrica e operazioni`, q: '1.18' },
        { id: 's1-19', t: 'Forma trigonometrica, formula di Eulero, forma esponenziale', q: '1.19' },
        { id: 's1-20', t: r`Significato geometrico di somma e prodotto in $\C$`, q: '1.21' },
        { id: 's1-21', t: 'Formule di de Moivre per prodotto e potenze', mark: '*', q: '1.20' },
        { id: 's1-22', t: r`Radici $n$-esime di un numero complesso; radici dell'unità`, mark: '*', q: '1.22' },
        { id: 's1-23', t: r`Teorema fondamentale dell'algebra`, q: '—' }
      ]
    },
    {
      n: 2,
      slug: 'sezioni/2-successioni.html',
      titolo: 'Funzioni, successioni e limiti di successioni',
      sommario: 'Il linguaggio delle funzioni, poi il primo vero concetto di Analisi: il limite.',
      topics: [
        { id: 's2-01', t: 'Funzioni tra insiemi: dominio, codominio, immagine, controimmagine, grafico', q: '1.23' },
        { id: 's2-02', t: 'Funzione composta; la composizione non è commutativa', q: '1.24' },
        { id: 's2-03', t: 'Funzioni iniettive, suriettive, biunivoche; funzione inversa', q: '1.25' },
        { id: 's2-04', t: 'Funzioni reali di variabile reale; insieme di definizione', q: '1.26' },
        { id: 's2-05', t: 'Funzioni monotòne e collegamento con il rapporto incrementale', q: '1.27' },
        { id: 's2-06', t: 'Funzioni pari e dispari', q: '1.28' },
        { id: 's2-07', t: 'Funzioni periodiche', q: '1.29' },
        { id: 's2-08', t: 'Funzioni limitate; massimo, minimo, estremo superiore e inferiore di funzioni', q: '1.30' },
        { id: 's2-09', t: 'Funzioni elementari e loro grafici', q: '1.31' },
        { id: 's2-10', t: 'Successioni numeriche; successioni monotòne e limitate', q: '1.32–1.34' },
        { id: 's2-11', t: 'Proprietà vere definitivamente', q: '1.35' },
        { id: 's2-12', t: 'Definizioni di limite (finito e infinito) di una successione', q: '1.36' },
        { id: 's2-13', t: 'Successioni convergenti, divergenti, regolari, irregolari', q: '1.37' },
        { id: 's2-14', t: 'Unicità del limite', mark: '*', q: '1.38' },
        { id: 's2-15', t: 'Una successione convergente è limitata', mark: '*', q: '1.39' },
        { id: 's2-16', t: 'Sottosuccessioni e non esistenza del limite', q: '—' },
        { id: 's2-17', t: 'Algebra dei limiti', mark: '**', q: '1.40' },
        { id: 's2-18', t: r`Algebra dei limiti con l'infinito; forme indeterminate`, q: '1.41' },
        { id: 's2-19', t: 'Permanenza del segno', mark: '*', q: '1.42' },
        { id: 's2-20', t: 'Proprietà del confronto', mark: '**', q: '1.43' },
        { id: 's2-21', t: 'Teorema del confronto (dei due carabinieri)', mark: '*', q: '1.44' },
        { id: 's2-22', t: 'Successioni infinitesime; infinitesima × limitata', mark: '**', q: '1.45–1.46' },
        { id: 's2-23', t: 'Regolarità delle successioni monotòne', mark: '*', q: '1.47' },
        { id: 's2-24', t: 'Il numero di Nepero $e$', q: '1.48' },
        { id: 's2-25', t: 'Limiti notevoli di successioni', mark: '**', q: '1.49' },
        { id: 's2-26', t: 'Criterio del rapporto per successioni', q: '1.50' },
        { id: 's2-27', t: 'Confronto tra infiniti', mark: '**', q: '1.51' },
        { id: 's2-28', t: 'Equivalenze asintotiche e loro proprietà', q: '1.52–1.53' },
        { id: 's2-29', t: r`L'o-piccolo di Landau e la sua algebra`, q: '1.54–1.55' }
      ]
    },
    {
      n: 3,
      slug: 'sezioni/3-serie.html',
      titolo: 'Serie numeriche',
      sommario: 'Sommare infiniti addendi: quando ha senso, e come deciderlo senza calcolare la somma.',
      topics: [
        { id: 's3-01', t: 'Somma parziale, serie numerica, carattere di una serie', q: '1.56' },
        { id: 's3-02', t: 'Condizione necessaria per la convergenza', mark: '*', q: '1.57' },
        { id: 's3-03', t: 'Carattere delle serie a termini non negativi', mark: '**', q: '1.58' },
        { id: 's3-04', t: 'Serie telescopiche', q: '—' },
        { id: 's3-05', t: 'Serie geometrica: carattere e somma', mark: '**', q: '1.59' },
        { id: 's3-06', t: 'Serie armonica e serie armonica generalizzata', q: '1.60' },
        { id: 's3-07', t: 'Criterio del confronto', mark: '*', q: '1.61' },
        { id: 's3-08', t: 'Criterio del confronto asintotico', mark: '*', q: '1.62' },
        { id: 's3-09', t: 'Criterio del rapporto', mark: '*', q: '1.63' },
        { id: 's3-10', t: 'Criterio della radice', q: '1.64' },
        { id: 's3-11', t: 'Serie alternate e criterio di Leibniz', q: '1.65' },
        { id: 's3-12', t: 'Convergenza assoluta implica convergenza semplice', mark: '*', q: '1.66' }
      ]
    }
  ];

  window.AM = window.AM || {};
  window.AM.registraMateria({
    key: 'analisi',
    nome: 'Analisi Matematica 1',
    sottotitolo: 'Prima parte — primo parziale',
    base: 'analisi/',
    prefisso: 's',
    qLabel: 'Q ',
    icona: '∫',
    sezioni: SEZIONI
  });
})();
