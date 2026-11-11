/* ============================================================
   Temi d'esame di Geometria (Gumenyuk), classificati a mano.
   Fonte: la cartella «Esami» scaricata dal Drive del corso, letta
   l'11/11/2026. Le statistiche della pagina esami.html si calcolano
   da qui: ogni numero sulla pagina viene da questi elenchi.
   ============================================================ */
(function () {
  'use strict';
  const r = String.raw;

  window.ESAMI_GEO = {
    // le prove lette; completo = appello con Parti A, B e C
    prove: [
      { id: 'mt24', nome: 'Prova in itinere', data: '13/11/2024', tipo: 'itinere' },
      { id: 'g25', nome: 'Appello di gennaio', data: '15/01/2025', tipo: 'completo' },
      { id: 'f25', nome: 'Appello di febbraio', data: '03/02/2025', tipo: 'completo' },
      { id: 's25', nome: 'Appello di settembre', data: '05/09/2025', tipo: 'completo' },
      { id: 'mt25', nome: 'Prova in itinere', data: '11/11/2025', tipo: 'itinere' },
      { id: 'g26', nome: 'Appello di gennaio', data: '20/01/2026', tipo: 'completo' },
      { id: 'f26', nome: 'Appello di febbraio', data: '12/02/2026', tipo: 'completo' },
      { id: 'j26', nome: 'Appello di giugno', data: '23/06/2026', tipo: 'completo' },
      { id: 'mt26', nome: 'Prova in itinere (la tua)', data: '30/10/2026', tipo: 'itinere' }
    ],

    // macro-argomenti: sez = sezione del sito che lo copre, null se non è ancora stato fatto a lezione
    argomenti: {
      A: { t: 'Sistemi lineari, rango, Rouché-Capelli', sez: [1, 2] },
      B: { t: 'Algebra delle matrici, inversa', sez: [2] },
      C: { t: 'Sottospazi, span, equazioni', sez: [3, 5] },
      D: { t: 'Basi, dimensione, dipendenza', sez: [5] },
      E: { t: 'Applicazioni lineari: nucleo, immagine, iniettività', sez: [5] },
      F: { t: 'Coordinate, matrice rappresentativa, cambio di base', sez: [5] },
      G: { t: 'Somma, intersezione, Grassmann', sez: [7] },
      H: { t: 'Rette, piani, sottospazi affini', sez: [6] },
      I: { t: 'Determinanti', sez: [8] },
      J: { t: 'Autovalori, diagonalizzazione, similitudine', sez: [9, 8] },
      K: { t: 'Prodotto scalare, ortogonalità, proiezioni', sez: null },
      L: { t: 'Matrici simmetriche, forme quadratiche', sez: null },
      M: { t: 'Coniche e quadriche', sez: null }
    },

    // Parte A: le domande a risposta multipla. p = schema ricorrente della domanda
    quesiti: [
      ['mt24', 1, 'A', 'sistema'], ['mt24', 2, 'C', 'sottospazio'], ['mt24', 3, 'F', 'coordinate'], ['mt24', 4, 'H', 'posizione'],
      ['mt24', 5, 'B', 'matrici'], ['mt24', 6, 'A', 'rango'], ['mt24', 7, 'E', 'iniettiva'], ['mt24', 8, 'B', 'inversa'],
      ['mt24', 9, 'F', 'rappresentativa'], ['mt24', 10, 'F', 'rappresentativa'], ['mt24', 11, 'H', 'posizione'], ['mt24', 12, 'G', 'grassmann'],
      ['g25', 1, 'A', 'sistema'], ['g25', 2, 'K', 'scalare'], ['g25', 3, 'K', 'affine'], ['g25', 4, 'K', 'scalare'],
      ['g25', 5, 'I', 'determinante'], ['g25', 6, 'B', 'matrici'], ['g25', 7, 'E', 'iniettiva'], ['g25', 8, 'L', 'quadratica'],
      ['g25', 9, 'L', 'simmetrica'], ['g25', 10, 'M', 'conica'], ['g25', 11, 'J', 'simili'], ['g25', 12, 'F', 'rappresentativa'],
      ['f25', 1, 'A', 'sistema'], ['f25', 2, 'A', 'sistema'], ['f25', 3, 'G', 'grassmann'], ['f25', 4, 'J', 'simili'],
      ['f25', 5, 'A', 'rango'], ['f25', 6, 'E', 'lineare'], ['f25', 7, 'E', 'lineare'], ['f25', 8, 'L', 'quadratica'],
      ['f25', 9, 'F', 'coordinate'], ['f25', 10, 'J', 'simili'], ['f25', 11, 'B', 'inversa'], ['f25', 12, 'J', 'diagonalizzabile'],
      ['s25', 1, 'J', 'diagonalizzabile'], ['s25', 2, 'L', 'simmetrica'], ['s25', 3, 'H', 'posizione'], ['s25', 4, 'F', 'rappresentativa'],
      ['s25', 5, 'E', 'iniettiva'], ['s25', 6, 'F', 'coordinate'], ['s25', 7, 'A', 'sistema'], ['s25', 8, 'E', 'lineare'],
      ['s25', 9, 'F', 'passaggio'], ['s25', 10, 'J', 'simili'], ['s25', 11, 'L', 'quadratica'], ['s25', 12, 'M', 'conica'],
      ['mt25', 1, 'B', 'inversa'], ['mt25', 2, 'B', 'matrici'], ['mt25', 3, 'F', 'rappresentativa'], ['mt25', 4, 'E', 'iniettiva'],
      ['g26', 1, 'E', 'iniettiva'], ['g26', 2, 'I', 'determinante'], ['g26', 3, 'K', 'scalare'], ['g26', 4, 'J', 'simili'],
      ['g26', 5, 'K', 'scalare'], ['g26', 6, 'L', 'quadratica'], ['g26', 7, 'A', 'sistema'], ['g26', 8, 'D', 'dimensione'],
      ['g26', 9, 'G', 'grassmann'], ['g26', 10, 'C', 'equazioni'],
      ['f26', 1, 'A', 'sistema'], ['f26', 2, 'C', 'sottospazio'], ['f26', 3, 'G', 'grassmann'], ['f26', 4, 'F', 'rappresentativa'],
      ['f26', 5, 'I', 'determinante'], ['f26', 6, 'J', 'diagonalizzabile'], ['f26', 7, 'K', 'scalare'], ['f26', 8, 'M', 'conica'],
      ['f26', 9, 'H', 'posizione'], ['f26', 10, 'D', 'dimensione'],
      ['j26', 1, 'L', 'quadratica'], ['j26', 2, 'A', 'sistema'], ['j26', 3, 'B', 'matrici'], ['j26', 4, 'C', 'sottospazio'],
      ['j26', 5, 'C', 'equazioni'], ['j26', 6, 'H', 'affine'], ['j26', 7, 'K', 'affine'], ['j26', 8, 'K', 'scalare'],
      ['j26', 9, 'E', 'iniettiva'], ['j26', 10, 'L', 'simmetrica'],
      ['mt26', 1, 'H', 'posizione'], ['mt26', 2, 'A', 'sistema'], ['mt26', 3, 'F', 'coordinate'], ['mt26', 4, 'E', 'iniettiva'], ['mt26', 5, 'G', 'grassmann']
    ],

    // come si presentano gli schemi ricorrenti della Parte A
    schemi: {
      sistema: { t: 'Quante soluzioni ha il sistema?', es: 'spesso con un parametro: si guarda il rango di A e della completa' },
      rango: { t: 'Rango di una matrice con parametro', es: 'MEG, poi i valori del parametro che fanno sparire un pivot' },
      matrici: { t: 'Quale prodotto o somma è definito, quale matrice è simmetrica', es: 'si controllano i tipi m×n' },
      inversa: { t: 'Qual è l\'inversa (o la soluzione con l\'inversa)', es: 'si moltiplica A per il candidato e si vede se dà I' },
      sottospazio: { t: 'Quale insieme è un sottospazio?', es: 'prima si guarda se contiene lo 0, poi la chiusura' },
      equazioni: { t: 'Equazioni di uno span, o base di un sottospazio dato da equazioni', es: 'nucleo di una matrice e viceversa' },
      dimensione: { t: 'Dimensione di uno span o numero di generatori', es: 'rango della matrice dei vettori' },
      lineare: { t: 'Quale mappa è lineare, cosa conserva una mappa lineare', es: 'L(0)=0, niente quadrati né costanti' },
      iniettiva: { t: 'La mappa è iniettiva, suriettiva, isomorfismo?', es: 'quasi sempre basta confrontare le dimensioni con rango + nullità' },
      coordinate: { t: 'Coordinate di un vettore (anche matrice o polinomio) in una base', es: 'si risolve un sistema' },
      rappresentativa: { t: 'Matrice rappresentativa, anche in basi non canoniche', es: 'colonne = coordinate delle immagini dei vettori della base' },
      passaggio: { t: 'Matrice di passaggio fra due basi', es: 'attenzione all\'ordine dei vettori' },
      grassmann: { t: 'Dimensioni di U ∩ W e U + W', es: 'Grassmann e i limiti dati dalle dimensioni' },
      posizione: { t: 'Posizione reciproca di rette e piani', es: 'si scrive il sistema dell\'intersezione' },
      affine: { t: 'Sottospazi affini e distanze', es: 'parametriche, cartesiane, distanza punto–iperpiano' },
      determinante: { t: 'Proprietà del determinante sulle colonne', es: 'linearità in una colonna, det(cM) = cⁿ det M' },
      simili: { t: 'Quale matrice è simile a questa?', es: 'stesso polinomio caratteristico non basta: servono gli autospazi' },
      diagonalizzabile: { t: 'Per quali valori è diagonalizzabile?', es: 'autovalori distinti oppure molteplicità geometrica = algebrica' },
      scalare: { t: 'Prodotto scalare: norme, angoli, disuguaglianze', es: 'Cauchy-Schwarz, polarizzazione, prodotto definito da una matrice' },
      quadratica: { t: 'Segnatura o definitezza di una forma quadratica', es: 'segni degli autovalori della matrice simmetrica' },
      simmetrica: { t: 'Matrici simmetriche: autovettori ortogonali, nucleo', es: 'autospazi di autovalori diversi sono ortogonali' },
      conica: { t: 'Che conica è?', es: 'matrice della parte quadratica, centro, autovalori' }
    },

    // Parte B: ogni punto di ogni esercizio, con il suo argomento; tipi = tipi di esercizio coinvolti
    esercizi: [
      { prova: 'mt26', n: 1, tipi: ['sottospazi', 'mappa'], punti: ['G', 'G', 'E', 'A'], t: 'Col(A), U + W e U ∩ W, nucleo di L_A, soluzioni di Ax = b' },
      { prova: 'g25', n: 1, tipi: ['mappa', 'sottospazi'], punti: ['E', 'E', 'E', 'G'], t: 'L(A) = Av su M(2,2): linearità, nucleo e immagine, L(H), H + ker L e H ∩ ker L' },
      { prova: 'g25', n: 2, tipi: ['rappresentativa', 'autovalori'], punti: ['F', 'J', 'J', 'J'], t: 'Endomorfismo di P₂ con derivate: matrice, autovalori e autovettori, L⁵ applicata a un polinomio' },
      { prova: 'g25', n: 3, tipi: ['coniche'], punti: ['M', 'M', 'M'], t: 'Quadrica: forma canonica metrica, piani di simmetria, cambio di coordinate' },
      { prova: 'f25', n: 1, tipi: ['geometria'], punti: ['H', 'H', 'H'], t: 'Retta parallela per un punto, piano che contiene due rette, retta perpendicolare' },
      { prova: 'f25', n: 2, tipi: ['rappresentativa', 'autovalori'], punti: ['F', 'J', 'F', 'J'], t: 'Endomorfismo di ℝ³: matrice, diagonalizzabilità, matrice in un\'altra base, similitudine' },
      { prova: 'f25', n: 3, tipi: ['scalare', 'simmetriche'], punti: ['K', 'K', 'K', 'L'], t: 'Prodotto scalare su P₁: verifica, proiezione, base ortonormale, base di autovettori' },
      { prova: 's25', n: 1, tipi: ['mappa'], punti: ['E', 'E', 'E'], t: 'T(A) = CAC⁻¹: linearità, iniettività, rango conservato' },
      { prova: 's25', n: 2, tipi: ['sottospazi'], punti: ['D', 'G', 'G'], t: 'Sottospazi di polinomi: basi, U ∩ W, U + W, scrittura come somma' },
      { prova: 's25', n: 3, tipi: ['coniche'], punti: ['M', 'M', 'M'], t: 'Conica come luogo di punti: equazione, forma canonica, asse e vertice' },
      { prova: 'mt25', n: 1, tipi: ['mappa', 'sottospazi', 'geometria'], punti: ['E', 'C', 'G', 'H'], t: 'L: ℝ³ → P₂: immagine e nucleo, sottospazio {L = F}, intersezione, posizione di due rette' },
      { prova: 'g26', n: 1, tipi: ['coniche'], punti: ['M', 'M', 'M', 'M'], t: 'Conica come luogo di punti: equazione, centro, forma canonica, asse' },
      { prova: 'g26', n: 2, tipi: ['scalare'], punti: ['D', 'K', 'K', 'K'], t: 'Span in ℝ⁴: dimensione, base ortonormale, proiezioni, nucleo e immagine della proiezione' },
      { prova: 'g26', n: 3, tipi: ['rappresentativa', 'mappa'], punti: ['D', 'E', 'F'], t: 'Base di M(2,2), nucleo e Col di A, nucleo e immagine dell\'endomorfismo associato' },
      { prova: 'f26', n: 1, tipi: ['sottospazi'], punti: ['C', 'K', 'G'], t: 'Equazione cartesiana di U, U⊥ parametrico, U ∩ W e U + W' },
      { prova: 'f26', n: 2, tipi: ['mappa', 'rappresentativa'], punti: ['D', 'E', 'F', 'E'], t: 'L(X) = AX + XᵀA: base, linearità, matrice in basi date, immagine e nucleo' },
      { prova: 'f26', n: 3, tipi: ['simmetriche', 'autovalori'], punti: ['L', 'J', 'J', 'L'], t: 'A simmetrica: A² simmetrica, autovalori di A², A² definita positiva' },
      { prova: 'j26', n: 1, tipi: ['geometria'], punti: ['H', 'H', 'H'], t: 'Sottospazi affini in ℝ⁴: equazioni cartesiane, intersezione, somma' },
      { prova: 'j26', n: 2, tipi: ['mappa', 'autovalori'], punti: ['E', 'C', 'D', 'J'], t: 'Trasposta su M(3,3): simmetriche e antisimmetriche, basi, autospazi, diagonalizzabilità' },
      { prova: 'j26', n: 3, tipi: ['scalare'], punti: ['K', 'K', 'K'], t: 'Norme e angolo, basi ortogonali di H e H⊥, esistenza di un\'isometria' }
    ],

    tipi: {
      mappa: { t: 'Applicazione lineare fra spazi di matrici o polinomi', fare: 'linearità, nucleo, immagine, iniettiva o suriettiva', sez: 5 },
      sottospazi: { t: 'Sottospazi: basi, U ∩ W, U + W', fare: 'basi, equazioni, Grassmann', sez: 7 },
      rappresentativa: { t: 'Matrice rappresentativa e cambio di base', fare: 'colonne = coordinate delle immagini', sez: 5 },
      autovalori: { t: 'Autovalori, autovettori, diagonalizzazione', fare: 'polinomio caratteristico, autospazi, molteplicità', sez: 9 },
      coniche: { t: 'Coniche e quadriche', fare: 'forma canonica metrica, classificazione, assi', sez: null },
      scalare: { t: 'Prodotto scalare, Gram-Schmidt, proiezioni', fare: 'basi ortonormali, proiezioni, U⊥', sez: null },
      geometria: { t: 'Rette, piani e sottospazi affini', fare: 'equazioni, parallele, perpendicolari, intersezioni', sez: 6 },
      simmetriche: { t: 'Matrici simmetriche e forme quadratiche', fare: 'autovalori reali, definitezza', sez: null }
    },

    // Parte C: tipo = def (definizione), teo (enunciato e dimostrazione), es (esempio da costruire)
    teoria: [
      { prova: 'g25', tipo: 'def', t: 'Dipendenza e indipendenza lineare', sito: '5-lineari.html#dip-def' },
      { prova: 'g25', tipo: 'def', t: 'Matrice ortogonale', sito: null },
      { prova: 'g25', tipo: 'teo', t: 'Formula di Grassmann', sito: '7-grassmann.html#grassmann' },
      { prova: 'g25', tipo: 'es', t: 'Una mappa lineare suriettiva ma non biiettiva' },
      { prova: 'g25', tipo: 'es', t: 'Una forma quadratica su ℝ², non nulla, semidefinita positiva ma non definita' },
      { prova: 'f25', tipo: 'def', t: 'Complemento ortogonale di un sottospazio', sito: '7-grassmann.html#ortogonale' },
      { prova: 'f25', tipo: 'def', t: 'Dimensione di uno spazio vettoriale', sito: '5-lineari.html#dimensione' },
      { prova: 'f25', tipo: 'teo', t: 'Invertibilità del prodotto di due matrici', sito: '3-spazi.html#prodotto' },
      { prova: 'f25', tipo: 'es', t: 'Una base ortonormale di ℝ² non fatta di multipli della canonica, con le coordinate di (2,1)' },
      { prova: 'f25', tipo: 'es', t: 'Una matrice 3×3 con tre autospazi distinti', sito: '9-diagonalizzazione.html#esempi-parte-c' },
      { prova: 's25', tipo: 'def', t: 'Sottospazio di uno spazio vettoriale', sito: '3-spazi.html#sottospazio' },
      { prova: 's25', tipo: 'def', t: 'Inversa di una matrice quadrata', sito: '2-matrici.html#inversa' },
      { prova: 's25', tipo: 'teo', t: 'Determinante di matrici simili', sito: '8-determinanti.html#simili' },
      { prova: 's25', tipo: 'es', t: 'Uno spazio vettoriale di dimensione infinita' },
      { prova: 's25', tipo: 'es', t: 'Una matrice 3×3 non diagonale, ortogonalmente diagonalizzabile, con un autovalore multiplo' },
      { prova: 'g26', tipo: 'def', t: 'Endomorfismo diagonalizzabile', sito: '9-diagonalizzazione.html#problema' },
      { prova: 'g26', tipo: 'def', t: 'Forma quadratica definita positiva', sito: null },
      { prova: 'g26', tipo: 'teo', t: 'Coordinate rispetto a una base ortogonale (coefficienti di Fourier)', sito: null },
      { prova: 'g26', tipo: 'es', t: 'Una matrice 2×2 diagonalizzabile su ℂ ma non su ℝ', sito: '9-diagonalizzazione.html#esempi-parte-c' },
      { prova: 'g26', tipo: 'es', t: 'Due rette U, W per l\'origine di ℝ³ con U + W uguale al piano x + y + z = 0' }
    ]
  };
})();
