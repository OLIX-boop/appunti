/* ============================================================
   Schemi della prima lettura: uno per paragrafo, fermi, in SVG.
   Le coordinate degli esempi sono calcolate qui dentro, non scritte
   a mano, così il disegno dice esattamente quello che dice il testo.
   I colori arrivano da capitolo.css, quindi seguono il tema.
   ============================================================ */
(function () {
  'use strict';

  const n = x => Math.round(x * 10) / 10;
  let progressivo = 0;

  const svg = (w, h, titolo, corpo) =>
    '<svg class="schema" viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' + titolo + '">' + corpo + '</svg>';

  const T = (x, y, s, c, a) =>
    '<text x="' + n(x) + '" y="' + n(y) + '" text-anchor="' + (a || 'middle') + '"' + (c ? ' class="' + c + '"' : '') + '>' + s + '</text>';

  const L = (x1, y1, x2, y2, c, w, tratto) =>
    '<line x1="' + n(x1) + '" y1="' + n(y1) + '" x2="' + n(x2) + '" y2="' + n(y2) + '" stroke="currentColor" stroke-width="' + (w || 1) + '"' +
    (tratto ? ' stroke-dasharray="5 4"' : '') + (c ? ' class="' + c + '"' : '') + ' stroke-linecap="round"/>';

  /** freccia da (x1,y1) a (x2,y2) */
  function F(x1, y1, x2, y2, c, w) {
    const a = Math.atan2(y2 - y1, x2 - x1), s = 10, lx = x2 - s * .8 * Math.cos(a), ly = y2 - s * .8 * Math.sin(a);
    const p = [[x2, y2], [x2 - s * Math.cos(a - .42), y2 - s * Math.sin(a - .42)], [x2 - s * Math.cos(a + .42), y2 - s * Math.sin(a + .42)]];
    return '<g' + (c ? ' class="' + c + '"' : '') + '>' + L(x1, y1, lx, ly, '', w || 2.4) +
      '<polygon fill="currentColor" points="' + p.map(q => n(q[0]) + ',' + n(q[1])).join(' ') + '"/></g>';
  }

  const P = (x, y, r, c) => '<circle cx="' + n(x) + '" cy="' + n(y) + '" r="' + r + '" fill="currentColor"' + (c ? ' class="' + c + '"' : '') + '/>';
  const O = (x, y, r, c, w) => '<circle cx="' + n(x) + '" cy="' + n(y) + '" r="' + r + '" fill="none" stroke="currentColor" stroke-width="' + (w || 2) + '"' + (c ? ' class="' + c + '"' : '') + '/>';
  const E = (x, y, rx, ry, c, op) =>
    '<ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + ry + '" fill="currentColor" fill-opacity="' + (op === undefined ? .1 : op) +
    '" stroke="currentColor" stroke-width="1.8"' + (c ? ' class="' + c + '"' : '') + '/>';
  const B = (x, y, w, h, c, op) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="8" fill="currentColor" fill-opacity="' + (op === undefined ? .08 : op) +
    '" stroke="currentColor" stroke-width="1.6"' + (c ? ' class="' + c + '"' : '') + '/>';

  /** pannello: da coordinate del piano a coordinate del disegno */
  const pan = (cx, cy, u) => (a, b) => [cx + a * u, cy - b * u];

  /** griglia curvata da f, con N linee per parte */
  function griglia(q, f, N, c) {
    let s = '<g class="' + c + '" fill="none" stroke="currentColor" stroke-width="1">';
    const linea = pt => {
      const v = [];
      for (let t = -N; t <= N + 1e-9; t += .25) v.push(q(...pt(t)));
      return '<polyline points="' + v.map(p => n(p[0]) + ',' + n(p[1])).join(' ') + '"/>';
    };
    for (let i = -N; i <= N; i++) { s += linea(t => f(i, t)) + linea(t => f(t, i)); }
    return s + '</g>';
  }

  /** griglia dritta generata da u e v, tagliata dal rettangolo dato */
  function grigliaObliqua(q, u, v, N, c, rett) {
    const id = 'taglio' + (++progressivo);
    let s = '<clipPath id="' + id + '"><rect x="' + rett[0] + '" y="' + rett[1] + '" width="' + rett[2] + '" height="' + rett[3] + '"/></clipPath>' +
      '<g class="' + c + '" clip-path="url(#' + id + ')">';
    for (let i = -N; i <= N; i++) {
      const a = q(i * u[0] - N * v[0], i * u[1] - N * v[1]), b = q(i * u[0] + N * v[0], i * u[1] + N * v[1]);
      const e = q(i * v[0] - N * u[0], i * v[1] - N * u[1]), f = q(i * v[0] + N * u[0], i * v[1] + N * u[1]);
      s += L(a[0], a[1], b[0], b[1]) + L(e[0], e[1], f[0], f[1]);
    }
    return s + '</g>';
  }

  /** matrice scritta con le parentesi quadre; colori[j] è la classe della colonna j */
  function matrice(x, y, M, passoX, passoY, colori) {
    const r = M.length, c = M[0].length, w = (c - 1) * passoX + 34, h = (r - 1) * passoY + 34, t = y - 22;
    const quadra = (px, verso) => '<path d="M' + (px + verso * 7) + ' ' + t + ' h' + (-verso * 7) + ' v' + h + ' h' + (verso * 7) + '" fill="none" stroke="currentColor" stroke-width="1.8"/>';
    let s = quadra(x - 17, 1) + quadra(x - 17 + w, -1);
    M.forEach((riga, i) => riga.forEach((v, j) => {
      s += T(x + j * passoX, y + i * passoY, v, 's-g' + (colori && colori[j] ? ' ' + colori[j] : ''));
    }));
    return s;
  }

  function lineari() {
    const pannello = (cx, cy, f, titolo, classe, spostata) => {
      const q = pan(cx, cy, 22), o = q(...f(0, 0));
      return griglia(q, f, 2, 's-gri') + (spostata ? O(cx, cy, 5, 's-ros') : '') + P(o[0], o[1], 5, 's-blu') + T(cx, cy + 82, titolo, classe);
    };
    return svg(440, 346, 'Griglia di partenza, griglia dopo una mappa lineare e due casi non lineari',
      pannello(110, 74, (x, y) => [x, y], 'Griglia di partenza', 's-g') +
      pannello(330, 74, (x, y) => [x + .6 * y, .25 * x + y], '✓ Lineare: resta una griglia', 's-g s-ver') +
      pannello(110, 244, (x, y) => [x + 1, y + .7], '✗ L\'origine si è spostata', 's-g s-ros', true) +
      pannello(330, 244, (x, y) => [x + .2 * y * y, y + .16 * x * x - .4], '✗ Le rette si piegano', 's-g s-ros', true));
  }

  function nucleo() {
    const zero = [335, 132];
    return svg(440, 244, 'Il nucleo finisce tutto in zero, l\'immagine è ciò che si raggiunge',
      T(105, 16, 'Dominio V', 's-g') + T(335, 16, 'Codominio W', 's-g') +
      E(105, 124, 94, 102, 's-gri', .06) + E(335, 124, 94, 102, 's-gri', .06) +
      E(96, 172, 62, 38, 's-ros', .14) + E(335, 104, 66, 62, 's-ver', .14) +
      T(96, 196, 'ker L', 's-g s-ros') + T(335, 62, 'Im L', 's-g s-ver') +
      F(70, 160, zero[0] - 7, zero[1] + 2, 's-ros', 1.8) + F(100, 164, zero[0] - 7, zero[1] + 3, 's-ros', 1.8) + F(128, 172, zero[0] - 7, zero[1] + 4, 's-ros', 1.8) +
      P(70, 160, 3.5, 's-ros') + P(100, 164, 3.5, 's-ros') + P(128, 172, 3.5, 's-ros') +
      F(92, 66, 306, 84, 's-ver', 1.8) + F(124, 100, 356, 100, 's-ver', 1.8) + P(92, 66, 3.5, 's-ver') + P(124, 100, 3.5, 's-ver') +
      P(zero[0], zero[1], 5, 's-ros') + T(zero[0] + 13, zero[1] + 5, '0', 's-g s-ros', 'start') +
      P(335, 190, 4, 's-gri') + T(335, 208, 'qui non arriva', 's-p') + T(335, 222, 'nessuno', 's-p'));
  }

  function inversa() {
    const col = (cx, freccette, destra, titolo, sotto, classe, doppie) => {
      let s = '';
      const y = i => 44 + i * 42, xs = cx - 42, xd = cx + 42;
      [0, 1, 2].forEach(i => { s += P(xs, y(i), 5, 's-mut'); });
      destra.forEach(i => { s += P(xd, y(i), 5, 's-mut'); });
      freccette.forEach(a => {
        s += F(xs + 7, y(a[0]), xd - 7, y(a[1]), classe, 2);
        if (doppie) s += F(xd - 7, y(a[1]) + 7, xs + 7, y(a[0]) + 7, 's-vio', 1.5);
      });
      return s + T(cx, 16, titolo, 's-g ' + classe) + T(cx, 158, sotto[0], 's-p') + T(cx, 174, sotto[1], 's-p');
    };
    return svg(440, 182, 'Una mappa biettiva si inverte, le altre due no',
      col(72, [[0, 0], [1, 1], [2, 2]], [0, 1, 2], '✓ Biettiva', ['si torna indietro', 'con L⁻¹'], 's-ver', true) +
      col(220, [[0, 0], [1, 0], [2, 2]], [0, 1, 2], '✗ Due nello stesso', ['non sai da dove', 'sei partito'], 's-ros') +
      col(368, [[0, 0], [1, 2], [2, 2]], [0, 1, 2], '✗ Punto scoperto', ['un punto', 'non è raggiunto'], 's-ros'));
  }

  function basi() {
    // lo stesso P=(3,1), con la base canonica e con v₁=(1,1), v₂=(1,−1)
    const P1 = [3, 1], v1 = [1, 1], v2 = [1, -1], c = [2, 1];
    const qa = pan(34, 110, 30), qb = pan(254, 110, 30);
    const rA = [12, 28, 190, 136], rB = [232, 28, 190, 136];
    const a0 = qa(0, 0), a1 = qa(3, 0), a2 = qa(3, 1);
    const b0 = qb(0, 0), b1 = qb(c[0] * v1[0], c[0] * v1[1]), b2 = qb(c[0] * v1[0] + c[1] * v2[0], c[0] * v1[1] + c[1] * v2[1]);
    const mini = (cx, frecce, titolo, sotto, classe, retta) => {
      const o = [cx - 26, 268];
      let s = retta ? L(o[0] - 18, o[1] + 9, o[0] + 92, o[1] - 46, 's-gri', 1.5, true) : '';
      frecce.forEach((f, i) => { s += F(o[0], o[1], o[0] + f[0], o[1] - f[1], ['s-blu', 's-ara', 's-vio'][i]); });
      return s + T(cx, 216, titolo, 's-g ' + classe) + T(cx, 300, sotto, 's-p');
    };
    return svg(440, 310, 'Lo stesso punto ha coordinate diverse su due griglie; due vettori nel piano sono il numero giusto',
      T(107, 16, 'Griglia canonica', 's-g') + T(327, 16, 'Griglia di v₁ e v₂', 's-g') +
      grigliaObliqua(qa, [1, 0], [0, 1], 8, 's-gri', rA) + grigliaObliqua(qb, v1, v2, 8, 's-gri', rB) +
      F(a0[0], a0[1], a1[0], a1[1], 's-blu') + F(a1[0], a1[1], a2[0], a2[1], 's-ara') +
      F(b0[0], b0[1], b1[0], b1[1], 's-blu') + F(b1[0], b1[1], b2[0], b2[1], 's-ara') +
      O(a2[0], a2[1], 6, 's-ver', 2.4) + O(b2[0], b2[1], 6, 's-ver', 2.4) +
      T(a2[0] + 11, a2[1] - 7, 'P', 's-g s-ver', 'start') + T(b2[0] + 11, b2[1] - 7, 'P', 's-g s-ver', 'start') +
      T(107, 184, 'coordinate (3, 1)', 's-g') + T(327, 184, 'coordinate (2, 1)', 's-g') +
      mini(72, [[56, 28]], 'Troppo pochi', 'non arrivi ovunque', 's-ros', true) +
      mini(220, [[56, 28], [52, -14]], 'Giusti', 'ogni punto, un modo', 's-ver') +
      mini(368, [[56, 28], [52, -14], [14, 42]], 'Troppi', 'più modi per un punto', 's-ros'));
  }

  function rappresentativa() {
    const qa = pan(66, 112, 32), qb = pan(292, 112, 32);
    const o1 = qa(0, 0), e1 = qa(1, 0), e2 = qa(0, 1);
    const o2 = qb(0, 0), l1 = qb(1, 2), l2 = qb(1, 0);
    return svg(440, 240, 'Le colonne della matrice sono le immagini di e1 ed e2',
      grigliaObliqua(qa, [1, 0], [0, 1], 6, 's-gri', [20, 30, 120, 100]) + grigliaObliqua(qb, [1, 0], [0, 1], 6, 's-gri', [246, 30, 150, 100]) +
      F(o1[0], o1[1], e1[0], e1[1], 's-blu', 3) + F(o1[0], o1[1], e2[0], e2[1], 's-ara', 3) +
      T(e1[0] + 6, e1[1] - 7, 'e₁', 's-g s-blu', 'start') + T(e2[0] + 7, e2[1] + 4, 'e₂', 's-g s-ara', 'start') +
      F(158, 76, 232, 76, 's-mut', 2) + T(195, 66, 'L', 's-g') +
      F(o2[0], o2[1], l1[0], l1[1], 's-blu', 3) + F(o2[0], o2[1], l2[0], l2[1], 's-ara', 3) +
      T(l1[0] + 8, l1[1] + 5, 'L(e₁) = (1, 2)', 's-g s-blu', 'start') + T(l2[0] + 8, l2[1] + 5, 'L(e₂) = (1, 0)', 's-g s-ara', 'start') +
      T(166, 190, 'A =', 's-g') + matrice(214, 172, [['1', '1'], ['2', '0']], 42, 30, ['s-blu', 's-ara']) +
      T(214, 234, 'L(e₁)', 's-p s-blu') + T(256, 234, 'L(e₂)', 's-p s-ara'));
  }

  function isomorfismi() {
    const righe = [['1', '(1, 0, 0)'], ['x', '(0, 1, 0)'], ['x²', '(0, 0, 1)']];
    let s = T(110, 18, 'Polinomi di P₂', 's-g') + T(330, 18, 'Vettori di ℝ³', 's-g') +
      L(20, 28, 420, 28, 's-gri', 1.2);
    righe.forEach((r, i) => {
      const y = 52 + i * 26;
      s += T(110, y, r[0]) + T(330, y, r[1]) + F(180, y - 5, 262, y - 5, 's-mut', 1.5) + F(262, y - 5, 180, y - 5, 's-mut', 1.5);
    });
    s += L(20, 124, 420, 124, 's-gri', 1.2) +
      T(110, 148, '3 − x + 2x²', 's-g s-blu') + T(330, 148, '(3, −1, 2)', 's-g s-blu') + F(180, 143, 262, 143, 's-blu', 2) + F(262, 143, 180, 143, 's-blu', 2) +
      L(20, 162, 420, 162, 's-gri', 1.2) +
      T(110, 186, '(1 + x) + (2 − x) = 3', 's-g') + T(330, 186, '(1, 1, 0) + (2, −1, 0) = (3, 0, 0)', 's-p s-g') +
      T(220, 214, 'Stessi conti, nomi diversi', 's-g s-ver');
    return svg(440, 224, 'Dizionario fra polinomi e vettori di R3', s);
  }

  function passaggio() {
    return svg(440, 244, 'La matrice S traduce le coordinate nuove in quelle vecchie',
      B(10, 24, 150, 74, 's-vio') + B(280, 24, 150, 74, 's-blu') +
      T(85, 52, 'Coordinate nuove', 's-p s-g s-vio') + T(85, 80, 'c̃ = (2, 1)', 's-g') +
      T(355, 52, 'Coordinate vecchie', 's-p s-g s-blu') + T(355, 80, 'c = (3, 1)', 's-g') +
      F(166, 46, 274, 46, 's-ver', 2.6) + T(220, 36, 'S', 's-g s-ver') +
      F(274, 80, 166, 80, 's-ros', 2.6) + T(220, 100, 'S⁻¹', 's-g s-ros') +
      T(150, 164, 'S =', 's-g') + matrice(198, 150, [['1', '1'], ['1', '−1']], 44, 30, ['s-vio', 's-vio']) +
      T(198, 118, 'ṽ₁', 's-p s-vio') + T(242, 118, 'ṽ₂', 's-p s-vio') +
      T(220, 226, 'Colonne di S: i vettori nuovi scritti nella base vecchia', 's-p'));
  }

  function rette() {
    const o = [38, 138], a = [40, -20], r0 = [78, 74];
    const pt = (b, t) => [b[0] + t * a[0], b[1] + t * a[1]];
    const s1 = pt(o, -.5), s2 = pt(o, 3.6), l1 = pt(r0, -.9), l2 = pt(r0, 2.9), fine = pt(r0, 1);
    const o2 = [248, 150], r2 = [292, 96], u = [46, -8], v = [18, -34];
    const q = (t, s) => [r2[0] + t * u[0] + s * v[0], r2[1] + t * u[1] + s * v[1]];
    const bordo = [q(-1, -.8), q(2, -.8), q(2, 1.4), q(-1, 1.4)];
    let griglie = '';
    for (let t = -1; t <= 2; t++) { const a1 = q(t, -.8), b1 = q(t, 1.4); griglie += L(a1[0], a1[1], b1[0], b1[1], 's-ver', 1); }
    for (let s = 0; s <= 1; s++) { const a1 = q(-1, s), b1 = q(2, s); griglie += L(a1[0], a1[1], b1[0], b1[1], 's-ver', 1); }
    return svg(440, 206, 'Una retta è uno span spostato, un piano anche',
      L(s1[0], s1[1], s2[0], s2[1], 's-gri', 1.8, true) + L(l1[0], l1[1], l2[0], l2[1], 's-blu', 3) +
      P(o[0], o[1], 4.5, 's-mut') + T(o[0] - 8, o[1] + 16, 'O', 's-p') +
      F(o[0], o[1], r0[0], r0[1], 's-vio', 2.2) + T(46, 96, 'r₀', 's-g s-vio') +
      F(r0[0], r0[1], fine[0], fine[1], 's-ara', 3) + T(fine[0] - 2, fine[1] + 20, 'a', 's-g s-ara') +
      T(152, 118, 'span di a', 's-p') +
      T(110, 182, 'Retta: r₀ + t a', 's-g') + T(110, 198, 'lo span di a, spostato', 's-p') +
      '<polygon points="' + bordo.map(p => n(p[0]) + ',' + n(p[1])).join(' ') + '" fill="currentColor" fill-opacity=".14" stroke="currentColor" stroke-width="1.6" class="s-ver"/>' +
      griglie +
      P(o2[0], o2[1], 4.5, 's-mut') + T(o2[0] - 8, o2[1] + 16, 'O', 's-p') +
      F(o2[0], o2[1], r2[0], r2[1], 's-vio', 2.2) + T(254, 118, 'r₀', 's-g s-vio') +
      F(r2[0], r2[1], r2[0] + u[0], r2[1] + u[1], 's-blu', 3) + F(r2[0], r2[1], r2[0] + v[0], r2[1] + v[1], 's-ara', 3) +
      T(r2[0] + u[0] + 2, r2[1] + u[1] + 18, 'u', 's-g s-blu') + T(r2[0] + v[0] - 11, r2[1] + v[1] + 2, 'v', 's-g s-ara') +
      T(330, 182, 'Piano: r₀ + t u + s v', 's-g') + T(330, 198, 'lo span di u e v, spostato', 's-p'));
  }

  function dipendenza() {
    // v₁=(1,2), v₂=(2,1), v₃=(1,1): v₁+v₂−3v₃=0, il giro si chiude
    const v1 = [1, 2], v2 = [2, 1], v3 = [1, 1];
    const q = pan(322, 124, 26), o = q(0, 0), a = q(...v1), b = q(v1[0] + v2[0], v1[1] + v2[1]);
    const ritorno = q(v1[0] + v2[0] - 3 * v3[0], v1[1] + v2[1] - 3 * v3[1]);
    return svg(440, 288, 'Vettori indipendenti e dipendenti, e il test col rango',
      F(30, 116, 92, 88, 's-blu', 3) + F(30, 116, 100, 124, 's-ara', 3) + T(96, 82, 'v₁', 's-g s-blu') + T(112, 132, 'v₂', 's-g s-ara') +
      F(166, 116, 196, 98, 's-blu', 4) + L(166, 116, 240, 73, 's-ara', 2.2) + T(190, 86, 'v₁', 's-g s-blu') + T(252, 76, 'v₂', 's-g s-ara') +
      F(o[0], o[1], a[0], a[1], 's-blu', 3) + F(a[0], a[1], b[0], b[1], 's-ara', 3) + F(b[0], b[1], ritorno[0] + 6, ritorno[1] - 6, 's-vio', 3) +
      T(a[0] - 16, a[1], 'v₁', 's-g s-blu') + T((a[0] + b[0]) / 2 - 12, a[1] - 20, 'v₂', 's-g s-ara') + T(q(2, .9)[0] + 14, q(2, .9)[1] + 8, '−3v₃', 's-g s-vio', 'start') +
      T(66, 158, '✓ Due direzioni', 's-g s-ver') + T(66, 174, 'indipendenti', 's-p') +
      T(208, 158, '✗ Una direzione', 's-g s-ros') + T(208, 174, 'v₂ è un multiplo di v₁', 's-p') +
      T(362, 158, '✗ Il giro si chiude', 's-g s-ros') + T(362, 174, 'torni in 0: dipendenti', 's-p') +
      B(4, 196, 126, 36, 's-mut') + T(67, 219, 'Vettori in colonna', 's-p') + F(132, 214, 156, 214, 's-mut', 2) +
      B(158, 196, 62, 36, 's-mut') + T(189, 219, 'MEG', 's-g') + F(222, 214, 246, 214, 's-mut', 2) +
      B(248, 196, 188, 36, 's-mut') + T(342, 219, 'Conta i pivot', 's-g') +
      T(120, 262, 'tanti pivot quanti vettori', 's-p s-ver') + T(120, 278, 'indipendenti', 's-g s-ver') +
      T(330, 262, 'meno pivot che vettori', 's-p s-ros') + T(330, 278, 'dipendenti', 's-g s-ros'));
  }

  function basiSpan() {
    return svg(440, 278, 'Le due ricette per trovare una base di uno span e di un nucleo',
      T(8, 16, 'Base di uno span', 's-g', 'start') +
      '<rect x="51" y="34" width="28" height="88" rx="6" class="s-ver" fill="currentColor" fill-opacity=".14"/>' +
      '<rect x="131" y="34" width="28" height="88" rx="6" class="s-ver" fill="currentColor" fill-opacity=".14"/>' +
      matrice(65, 58, [['1', '2', '1'], ['2', '4', '1'], ['1', '2', '1']], 40, 28, null) +
      T(65, 138, 'v₁', 's-p') + T(105, 138, 'v₂', 's-p') + T(145, 138, 'v₃', 's-p') +
      F(186, 78, 244, 78, 's-mut', 2) + T(215, 68, 'MEG', 's-p') +
      O(285, 53, 13, 's-ros', 1.8) + O(365, 81, 13, 's-ros', 1.8) +
      matrice(285, 58, [['1', '2', '1'], ['0', '0', '−1'], ['0', '0', '0']], 40, 28, null) +
      T(220, 160, 'Pivot nelle colonne 1 e 3: base {v₁, v₃}, presi dalla partenza', 's-p s-ver') +
      L(8, 176, 432, 176, 's-gri', 1.2) +
      T(8, 198, 'Base di un nucleo', 's-g', 'start') +
      B(4, 210, 112, 36, 's-mut') + T(60, 233, 'x + y + z = 0', 's-p') + F(118, 228, 138, 228, 's-mut', 2) +
      B(140, 210, 108, 36, 's-mut') + T(194, 233, 'y = t,  z = s', 's-p') + F(250, 228, 270, 228, 's-mut', 2) +
      B(272, 210, 164, 36, 's-ver') + T(354, 233, 't(−1,1,0) + s(−1,0,1)', 's-p') +
      T(220, 268, 'Due incognite libere, due vettori della base', 's-p s-ver'));
  }

  function rango() {
    let s = T(220, 16, 'Dominio: dim V = 5', 's-g');
    for (let i = 0; i < 5; i++) {
      const x = 44 + i * 74, classe = i < 3 ? 's-blu' : 's-ros';
      s += B(x, 30, 64, 44, classe, .16) + T(x + 32, 58, i < 3 ? '✓' : '✗', 's-g ' + classe);
    }
    s += F(155, 80, 155, 118, 's-blu', 2.6) + F(329, 80, 329, 118, 's-ros', 2.6) +
      B(44, 122, 212, 58, 's-blu') + T(150, 146, 'Sopravvivono', 's-g s-blu') + T(150, 168, 'r(L) = 3, l\'immagine', 's-p') +
      B(266, 122, 138, 58, 's-ros') + T(335, 146, 'Cancellate', 's-g s-ros') + T(335, 168, 'dim ker L = 2', 's-p') +
      T(220, 210, '3 + 2 = 5', 's-g') + T(220, 230, 'Ogni dimensione del dominio finisce in uno dei due riquadri', 's-p');
    return svg(440, 238, 'Rango più nullità: dimensioni che sopravvivono più dimensioni cancellate', s);
  }

  window.SCHEMI = {
    5: { lineari, nucleo, inversa, basi, rappresentativa, isomorfismi, passaggio, 'rette-piani': rette, dipendenza, 'basi-span': basiSpan, rango }
  };
  // gli strumenti servono anche agli schemi delle altre sezioni (data/schemi-altre.js)
  window.SCHEMA_H = { n, svg, T, L, F, P, O, E, B, pan, griglia, grigliaObliqua, matrice };
})();
