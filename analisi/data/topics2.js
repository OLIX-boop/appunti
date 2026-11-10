/* ============================================================
   topics2.js — programma della SECONDA PARTE
   Fonte: "Programma di massima e bibliografia" — Prof. G. Meglioli
   marks:  "*"  dimostrazione richiesta allo SCRITTO (n° nell'elenco ufficiale)
           "**" dimostrazione richiesta solo all'ORALE
   q:      quesiti teorici collegati (raccolta «Domande di Teoria», seconda parte)

   È una materia a sé ('analisi2') solo per il registro dei progressi:
   così il blocco «Analisi primo parziale» dell'hub resta fermo alle
   Sezioni 1–3. Gli id proseguono quelli della prima parte (s4-01, …)
   e sono chiavi di localStorage: non rinumerarli.
   ============================================================ */
(function () {
  'use strict';
  const r = String.raw;

  const SEZIONI = [
    {
      n: 4,
      slug: 'sezioni/4-limiti.html',
      titolo: 'Limiti di funzioni e continuità',
      sommario: r`Le stesse idee dei limiti di successioni, ma ora $x$ si avvicina a un punto qualsiasi: intorni, punti di accumulazione, limiti destro e sinistro, teorema ponte.`,
      topics: [
        { id: 's4-01', t: r`Le sei definizioni di limite per $x\to\pm\infty$`, q: '2.2' },
        { id: 's4-02', t: r`Intorni circolari (anche destro e sinistro) di un punto; punto di accumulazione di un sottoinsieme di $\R$`, q: '2.1' },
        { id: 's4-03', t: r`Limite per $x\to x_0$: finito e infinito al finito, con il loro disegno`, q: '2.2' },
        { id: 's4-04', t: r`Limiti destro e sinistro; loro legame con l'esistenza e la non esistenza del limite`, q: '2.3' },
        { id: 's4-05', t: 'Unicità del limite, permanenza del segno, teorema del confronto', q: '2.4' },
        { id: 's4-06', t: 'Una funzione infinitesima per una limitata è infinitesima', q: '2.4' },
        { id: 's4-07', t: r`Algebra dei limiti con l'infinito; forme indeterminate`, q: '2.5' },
        { id: 's4-08', t: 'Teorema ponte e sue applicazioni alla non esistenza dei limiti', q: '2.6' },
        { id: 's4-09', t: 'Limiti notevoli', q: '—' },
        { id: 's4-10', t: 'Infiniti, infinitesimi e loro confronto', q: '2.7' },
        { id: 's4-11', t: 'Limiti di funzioni monotòne', q: '2.8' },
        { id: 's4-12', t: 'Calcolo di limiti', q: '—' },
        { id: 's4-13', t: 'Asintoti verticali, orizzontali e obliqui', mark: '**', q: '2.9' },
        { id: 's4-14', t: 'Funzioni continue in un punto e in un insieme', q: '2.10' },
        { id: 's4-15', t: 'Continuità di alcune funzioni elementari', mark: '**', q: '2.11' },
        { id: 's4-16', t: 'Limite e continuità della funzione composta', q: '2.12' },
        { id: 's4-17', t: 'Punti di discontinuità, esempi', q: '2.13' },
        { id: 's4-18', t: 'Permanenza del segno per funzioni continue', q: '2.14' },
        { id: 's4-19', t: 'Teorema di esistenza degli zeri', mark: '*', q: '2.15' },
        { id: 's4-20', t: 'Teorema dei valori intermedi', mark: '*', q: '2.16' },
        { id: 's4-21', t: 'Massimo e minimo assoluto, punti di massimo e di minimo assoluto', q: '2.17' },
        { id: 's4-22', t: 'Teorema di Weierstrass', mark: '*', q: '2.18' },
        { id: 's4-23', t: 'Continuità della funzione inversa', q: '2.19' }
      ]
    }
  ];

  window.AM = window.AM || {};
  window.AM.registraMateria({
    key: 'analisi2',
    nome: 'Analisi Matematica 1',
    sottotitolo: 'Seconda parte',
    base: 'analisi/',
    prefisso: 's',
    qLabel: 'Q ',
    icona: '∫',
    sezioni: SEZIONI
  });
})();
