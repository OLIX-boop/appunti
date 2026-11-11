/* ============================================================
   Schemi della prima lettura per le altre sezioni (0-4, 6-9).
   Stessi strumenti di data/schemi.js: uno schema per paragrafo,
   fermo, in SVG. Negli attributi e nei testi degli SVG il segno
   «minore» si scrive &lt;.
   ============================================================ */
(function () {
  'use strict';

  const { n, svg, T, L, F, P, O, E, B, pan, griglia, grigliaObliqua, matrice } = window.SCHEMA_H;
  const CX = [72, 220, 368];

  const poli = (pts, c, op) =>
    '<polygon points="' + pts.map(p => n(p[0]) + ',' + n(p[1])).join(' ') + '" fill="currentColor" fill-opacity="' + (op === undefined ? .14 : op) +
    '" stroke="currentColor" stroke-width="1.6" class="' + c + '"/>';

  /** piano disegnato di scorcio: (x,y) è l'angolo in basso a sinistra */
  const piano = (x, y, w, h, sh, c, op) => poli([[x, y], [x + w, y], [x + w + sh, y - h], [x + sh, y - h]], c, op);

  /** tre carte affiancate: titolo in alto, disegno, due righe di commento in fondo */
  function tre(h, aria, carte) {
    return svg(440, h, aria, carte.map((k, i) => {
      const cx = CX[i], righe = k.s || [];
      return T(cx, 15, k.t, 's-g ' + (k.c || '')) + k.d(cx) +
        righe.map((r, j) => T(cx, h - (righe.length - 1 - j) * 15 - 5, r, 's-p')).join('');
    }).join(''));
  }

  /** riquadri in fila uniti da frecce; ogni voce è {t: [righe], c: classe} */
  function catena(y, voci, h) {
    const gap = 20, w = (432 - gap * (voci.length - 1)) / voci.length;
    return voci.map((v, i) => {
      const x = 4 + i * (w + gap), c = v.c || 's-mut', righe = v.t;
      const y0 = y + h / 2 - (righe.length - 1) * 8 + 4;
      return B(n(x), y, n(w), h, c) + righe.map((r, j) => T(x + w / 2, y0 + j * 16, r, 's-p ' + (j === 0 ? 's-g' : ''))).join('') +
        (i < voci.length - 1 ? F(x + w + 2, y + h / 2, x + w + gap - 1, y + h / 2, 's-mut', 2) : '');
    }).join('');
  }

  /** un concetto al centro e quattro modi equivalenti di dirlo */
  function mozzo(aria, centro, classe, voci) {
    const c = [220, 112];
    const pos = [[6, 12], [292, 12], [6, 168], [292, 168]];
    return svg(440, 226, aria,
      voci.map((v, i) => {
        const p = pos[i], cxb = p[0] + 71, y0 = p[1] + 27 - (v.length - 1) * 8 + 4;
        const ax = i % 2 ? 270 : 170, ay = i < 2 ? 92 : 132, bx = i % 2 ? 300 : 140, by = i < 2 ? 62 : 168;
        return B(p[0], p[1], 142, 54, 's-mut') + v.map((r, j) => T(cxb, y0 + j * 16, r, 's-p')).join('') + L(ax, ay, bx, by, 's-mut', 2);
      }).join('') +
      B(150, 88, 140, 48, classe, .16) + centro.map((r, j) => T(220, c[1] + 5 - (centro.length - 1) * 8 + j * 16, r, 's-g ' + classe)).join(''));
  }

  /** punti e frecce per classificare una funzione */
  function pallini(cx, sinistra, destra, frecce, classe) {
    const y = i => 40 + i * 34, xs = cx - 40, xd = cx + 40;
    let s = '';
    for (let i = 0; i < sinistra; i++) s += P(xs, y(i), 4.5, 's-mut');
    for (let i = 0; i < destra; i++) s += P(xd, y(i), 4.5, 's-mut');
    frecce.forEach(a => { s += F(xs + 6, y(a[0]), xd - 6, y(a[1]), classe, 2); });
    return s;
  }

  /* ---------- Sezione 0 ---------- */

  function s0notazione() {
    const nomi = ['ℂ', 'ℝ', 'ℚ', 'ℤ', 'ℕ₀', 'ℕ'];
    let s = '';
    nomi.forEach((t, i) => {
      const x = 6 + i * 30, y = 6 + i * 11, w = 428 - i * 60, h = 134 - i * 22;
      s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="10" fill="currentColor" fill-opacity=".05" stroke="currentColor" stroke-width="1.4" class="s-blu"/>' +
        T(x + 15, y + h / 2 + 5, t, 's-g s-blu');
    });
    return svg(440, 216, 'Gli insiemi numerici uno dentro l\'altro; appartenenza e inclusione',
      s + T(110, 170, '1 ∈ {1, 2}', 's-g s-ver') + T(110, 188, 'un elemento in un insieme', 's-p') +
      T(330, 170, '{1} ⊆ {1, 2}', 's-g s-ver') + T(330, 188, 'un insieme dentro un insieme', 's-p') +
      T(220, 210, 'In questo corso ℕ parte da 1, in Analisi da 0', 's-p s-ros'));
  }

  function s0rn() {
    const q = pan(24, 140, 22), o = q(0, 0), u = q(1, 2), v = q(3, 1), w = q(4, 3);
    return svg(440, 160, 'Somma di due vettori di R2 e i conti componente per componente',
      grigliaObliqua(q, [1, 0], [0, 1], 6, 's-gri', [14, 44, 130, 106]) +
      L(u[0], u[1], w[0], w[1], 's-gri', 1.5, true) + L(v[0], v[1], w[0], w[1], 's-gri', 1.5, true) +
      F(o[0], o[1], u[0], u[1], 's-blu') + F(o[0], o[1], v[0], v[1], 's-ara') + F(o[0], o[1], w[0], w[1], 's-ver', 3) +
      T(u[0] - 16, u[1] + 2, '(1, 2)', 's-p s-blu') + T(v[0] + 4, v[1] + 16, '(3, 1)', 's-p s-ara') + T(w[0] + 6, w[1] + 2, '(4, 3)', 's-p s-ver', 'start') +
      T(190, 36, 'Somma, posto per posto', 's-p s-mut', 'start') + T(190, 56, '(1, 2) + (3, 1) = (4, 3)', 's-g', 'start') +
      T(190, 88, 'Multipli, posto per posto', 's-p s-mut', 'start') + T(190, 108, '2 · (1, 2) = (2, 4)', 's-g', 'start') +
      T(190, 136, 'Prodotto scalare: esce un numero', 's-p s-mut', 'start') + T(190, 154, '(1, 2) · (3, 1) = 3 + 2 = 5', 's-g', 'start'));
  }

  function s0quantificatori() {
    const xs = [40, 80, 120, 160], base = 130;
    let a = '', b = '';
    xs.forEach(x => {
      a += P(x, base, 4.5, 's-mut') + F(x, base - 7, x + 14, 66, 's-ver', 2) + P(x + 14, 58, 4.5, 's-ver');
      b += P(x + 220, base, 4.5, 's-mut') + F(x + 220, base - 7, 324, 56, 's-ros', 2);
    });
    return svg(440, 196, 'Cambiando l\'ordine dei quantificatori la frase cambia significato',
      T(110, 16, '∀x ∃y (y > x)', 's-g s-ver') + T(330, 16, '∃y ∀x (y > x)', 's-g s-ros') + a + b + P(330, 48, 6, 's-ros') +
      T(110, 152, 'x', 's-p') + T(330, 152, 'x', 's-p') +
      T(110, 172, 'Vera: ogni x ha il suo y', 's-p s-g') + T(110, 188, 'basta y = x + 1', 's-p') +
      T(330, 172, 'Falsa: un y solo per tutti', 's-p s-g') + T(330, 188, 'nessun reale batte tutti', 's-p'));
  }

  function s0campo() {
    return svg(440, 176, 'K significa R oppure C',
      B(180, 8, 80, 44, 's-blu', .16) + T(220, 36, '𝕂', 's-g s-blu') +
      F(190, 54, 116, 92, 's-mut', 2) + F(250, 54, 324, 92, 's-mut', 2) +
      B(70, 94, 80, 40, 's-mut') + T(110, 119, 'ℝ', 's-g') + B(290, 94, 80, 40, 's-mut') + T(330, 119, 'ℂ', 's-g') +
      T(220, 156, 'Bastano somma, prodotto e divisione per numeri ≠ 0', 's-p') +
      T(220, 172, 'quindi MEG, rango e Rouché-Capelli valgono in entrambi', 's-p'));
  }

  /* ---------- Sezione 1 ---------- */

  function s1sistemi() {
    return svg(440, 132, 'Dal sistema alla matrice completa',
      T(80, 42, 'x + 2y = 3', 's-g') + T(80, 76, '4x + y = 5', 's-g') + F(146, 58, 200, 58, 's-mut', 2) +
      matrice(244, 42, [['1', '2', '3'], ['4', '1', '5']], 42, 34, ['s-blu', 's-blu', 's-ara']) + L(306, 22, 306, 90, 's-mut', 1.6, true) +
      T(265, 118, 'coefficienti: A', 's-p s-blu') + T(345, 118, 'noti: b', 's-p s-ara') + T(80, 118, 'una riga per equazione', 's-p'));
  }

  function s1equivalenza() {
    const riga = (y, op, a, b) => T(66, y + 12, op, 's-g') + matrice(170, y, a, 30, 24, null) + F(222, y + 12, 262, y + 12, 's-mut', 2) + matrice(300, y, b, 30, 24, null);
    return svg(440, 244, 'Le tre operazioni elementari sulle righe',
      riga(26, 'R₁ ↔ R₂', [['1', '2'], ['2', '5']], [['2', '5'], ['1', '2']]) +
      riga(96, 'R₂ → 2R₂', [['1', '2'], ['2', '5']], [['1', '2'], ['4', '10']]) +
      riga(166, 'R₂ → R₂ − 2R₁', [['1', '2'], ['2', '5']], [['1', '2'], ['0', '1']]) +
      T(220, 236, 'L\'aspetto cambia, le soluzioni no', 's-g s-ver'));
  }

  function s1scala() {
    const x0 = 54, y0 = 44, px = 42, py = 36;
    const M = [['2', '1', '0', '3'], ['0', '0', '1', '4'], ['0', '0', '0', '5']];
    const c = (j, i) => [x0 + j * px, y0 + i * py - 5];
    return svg(440, 168, 'Una matrice a scala con i pivot cerchiati e una che non lo è',
      '<path d="M' + (x0 - 21) + ' ' + (y0 + 13) + ' H' + (x0 + px + 21) + ' V' + (y0 + 13 + py) + ' H' + (x0 + 2 * px + 21) + ' V' + (y0 + 13 + 2 * py) + ' H' + (x0 + 3 * px + 19) + '" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" class="s-ver"/>' +
      O(...c(0, 0), 14, 's-ros', 2) + O(...c(2, 1), 14, 's-ros', 2) + O(...c(3, 2), 14, 's-ros', 2) + matrice(x0, y0, M, px, py, null) +
      T(118, 154, '✓ A scala: i pivot scendono a destra', 's-p s-g s-ver') +
      matrice(336, 62, [['1', '2'], ['3', '0']], 38, 34, null) + T(355, 154, '✗ Non a scala', 's-p s-g s-ros'));
  }

  function s1meg() {
    const m = (x, M) => matrice(x, 44, M, 26, 30, null);
    return svg(440, 160, 'Il MEG crea zeri sotto un pivot alla volta',
      m(30, [['1', '2', '1'], ['2', '5', '3'], ['1', '3', '3']]) + F(116, 74, 152, 74, 's-mut', 2) +
      m(176, [['1', '2', '1'], ['0', '1', '1'], ['0', '1', '2']]) + F(262, 74, 298, 74, 's-mut', 2) +
      O(322, 39, 12, 's-ros', 1.8) + O(348, 69, 12, 's-ros', 1.8) + O(374, 99, 12, 's-ros', 1.8) +
      m(322, [['1', '2', '1'], ['0', '1', '1'], ['0', '0', '1']]) +
      T(134, 132, 'R₂ − 2R₁', 's-p') + T(134, 148, 'R₃ − R₁', 's-p') + T(280, 132, 'R₃ − R₂', 's-p') + T(348, 148, 'a scala', 's-p s-g s-ver'));
  }

  function s1lettura() {
    return svg(440, 216, 'Dalla matrice a scala alle soluzioni',
      B(130, 4, 180, 40, 's-mut') + T(220, 29, 'C\'è uno 0-pivot?', 's-g') +
      F(160, 46, 86, 84, 's-ros', 2) + T(106, 60, 'sì', 's-p s-ros') + F(280, 46, 330, 84, 's-mut', 2) + T(322, 60, 'no', 's-p') +
      B(6, 86, 160, 44, 's-ros') + T(86, 113, 'Nessuna soluzione', 's-g s-ros') +
      B(266, 86, 130, 40, 's-mut') + T(331, 111, 'r = n ?', 's-g') +
      F(296, 128, 220, 166, 's-ver', 2) + T(244, 142, 'sì', 's-p s-ver') + F(366, 128, 374, 166, 's-blu', 2) + T(388, 150, 'no', 's-p s-blu') +
      B(120, 168, 160, 44, 's-ver') + T(200, 195, 'Una soluzione', 's-g s-ver') +
      B(292, 168, 144, 44, 's-blu') + T(364, 188, 'Infinite', 's-g s-blu') + T(364, 204, 'n − r libere', 's-p'));
  }

  /* ---------- Sezione 2 ---------- */

  function s2algebra() {
    return svg(440, 168, 'Il prodotto di matrici riga per colonna',
      '<rect x="20" y="28" width="72" height="26" rx="6" class="s-blu" fill="currentColor" fill-opacity=".16"/>' +
      '<rect x="148" y="28" width="26" height="62" rx="6" class="s-ara" fill="currentColor" fill-opacity=".16"/>' +
      matrice(38, 46, [['1', '2'], ['3', '4']], 36, 32, null) + matrice(161, 46, [['5', '6'], ['7', '8']], 36, 32, null) +
      T(232, 66, '=', 's-g') + O(285, 41, 16, 's-ver', 2) + matrice(285, 46, [['19', '22'], ['43', '50']], 46, 32, null) +
      T(220, 124, '1 · 5 + 2 · 7 = 19', 's-g s-ver') + T(220, 144, 'riga 1 di A per colonna 1 di B', 's-p') +
      T(220, 162, 'I tipi: (m × n) · (n × k) dà m × k', 's-p'));
  }

  function s2struttura() {
    const o = [40, 138], d = [44, -18], x0 = [84, 76];
    const pt = (b, t) => [b[0] + t * d[0], b[1] + t * d[1]];
    const a1 = pt(o, -.6), a2 = pt(o, 5.4), b1 = pt(x0, -1), b2 = pt(x0, 3.8), f = pt(x0, 2);
    return svg(440, 182, 'Le soluzioni sono una soluzione particolare più l\'omogeneo',
      L(a1[0], a1[1], a2[0], a2[1], 's-ara', 2.4, true) + L(b1[0], b1[1], b2[0], b2[1], 's-blu', 3.4) +
      P(o[0], o[1], 5, 's-mut') + T(o[0] - 2, o[1] + 18, '0', 's-p') +
      F(o[0], o[1], x0[0], x0[1], 's-vio', 2.4) + T(50, 102, 'x₀', 's-g s-vio') + P(x0[0], x0[1], 5, 's-blu') +
      F(x0[0], x0[1], f[0], f[1], 's-ara', 3) + T(pt(x0, 1)[0] + 6, pt(x0, 1)[1] + 18, 'v', 's-g s-ara') +
      T(262, 18, 'soluzioni di Ax = b', 's-g s-blu', 'start') + T(300, 62, 'soluzioni di Ax = 0', 's-g s-ara', 'start') +
      T(220, 176, 'tutte le soluzioni = x₀ + v', 's-g'));
  }

  function s2rc() {
    const m = (cx, M, x) => matrice(cx - x, 50, M, 22, 28, null);
    const bar = xb => L(xb, 30, xb, 92, 's-mut', 1.6, true);
    return tre(158, 'I tre casi di Rouché-Capelli', [
      { t: 'Nessuna', c: 's-ros', s: ['riga 0 = 5', 'rg A ≠ rg[A|b]'], d: cx => m(cx, [['1', '2', '3'], ['0', '0', '5']], 22) + bar(cx + 11) + O(cx + 22, 73, 12, 's-ros', 1.8) },
      { t: 'Una sola', c: 's-ver', s: ['r = n = 2', 'ogni colonna ha un pivot'], d: cx => m(cx, [['1', '2', '3'], ['0', '1', '4']], 22) + bar(cx + 11) },
      { t: 'Infinite', c: 's-blu', s: ['r = 2, n = 3', 'x₂ è libera'], d: cx => m(cx, [['1', '2', '1', '3'], ['0', '0', '1', '2']], 33) + bar(cx + 22) }
    ]);
  }

  function s2inversa() {
    return mozzo('Le condizioni di invertibilità dicono la stessa cosa', ['A invertibile'], 's-ver', [
      ['rg A = n'], ['Ax = 0 ha solo', 'la soluzione banale'], ['Ax = b ha una sola', 'soluzione per ogni b'], ['det A ≠ 0']
    ]);
  }

  function s2cramer() {
    return svg(440, 190, 'Teorema di Cramer: soluzione unica se e solo se il rango è n',
      B(150, 4, 140, 38, 's-mut') + T(220, 28, 'Sistema n × n', 's-g') +
      F(180, 44, 100, 80, 's-ver', 2) + F(260, 44, 340, 80, 's-ros', 2) +
      T(112, 62, 'r(A) = n', 's-p s-ver', 'end') + T(328, 62, 'r(A) ≠ n', 's-p s-ros', 'start') +
      B(6, 82, 200, 50, 's-ver') + T(106, 104, 'Una sola soluzione', 's-g s-ver') + T(106, 122, 'per ogni b', 's-p') +
      B(234, 82, 200, 50, 's-ros') + T(334, 104, 'Dipende da b', 's-g s-ros') + T(334, 122, 'nessuna oppure infinite', 's-p') +
      T(220, 162, 'Per 2 × 2: invertibile se e solo se ad − bc ≠ 0', 's-p s-g') +
      T(220, 182, 'Il teorema dice quando, la regola di Cramer dice quanto vale', 's-p'));
  }

  function s2megj() {
    const m = (x, M) => matrice(x, 44, M, 28, 32, null);
    return svg(440, 160, 'Il MEG-J porta A|I in I|inversa di A',
      m(40, [['2', '1', '1', '0'], ['1', '1', '0', '1']]) + L(82, 24, 82, 90, 's-mut', 1.6, true) +
      F(158, 62, 262, 62, 's-ver', 2.6) + T(210, 52, 'MEG-J', 's-g s-ver') +
      m(292, [['1', '0', '1', '−1'], ['0', '1', '−1', '2']]) + L(334, 24, 334, 90, 's-mut', 1.6, true) +
      T(82, 112, '[A | I]', 's-g') + T(350, 112, '[I | A⁻¹]', 's-g') +
      T(220, 134, '1: zeri sotto i pivot · 2: pivot uguali a 1', 's-p') + T(220, 152, '3: zeri sopra i pivot, dall\'ultimo', 's-p'));
  }

  function s2eqmatrici() {
    const nomi = [['A x = b₁', 'prima colonna'], ['A x′ = b₂', 'seconda colonna'], ['A x″ = b₃', 'terza colonna']];
    return svg(440, 188, 'Una equazione di matrici è un gruppo di sistemi',
      T(220, 26, 'A · [ x | x′ | x″ ] = [ b₁ | b₂ | b₃ ]', 's-g') +
      nomi.map((v, i) => F(220, 36, CX[i], 66, 's-mut', 2) + B(CX[i] - 66, 68, 132, 46, 's-blu') + T(CX[i], 90, v[0], 's-g') + T(CX[i], 106, v[1], 's-p')).join('') +
      T(220, 142, 'Stessa A: basta un solo MEG-J su [A | B]', 's-g s-ver') +
      T(220, 164, 'A invertibile: AX = B dà X = A⁻¹B', 's-p') + T(220, 182, 'e YA = B dà Y = BA⁻¹: il lato conta', 's-p'));
  }

  /* ---------- Sezione 3 ---------- */

  function s3prodotto() {
    const macchina = (x, y, t, c) => B(x, y, 86, 40, c, .14) + T(x + 43, y + 25, t, 's-g ' + c);
    return svg(440, 186, 'Il prodotto si disfa partendo dall\'ultima matrice applicata',
      T(20, 36, 'x', 's-g') + F(32, 32, 74, 32, 's-mut', 2) + macchina(76, 12, 'B', 's-blu') + F(164, 32, 206, 32, 's-mut', 2) +
      macchina(208, 12, 'A', 's-ara') + F(296, 32, 338, 32, 's-mut', 2) + T(372, 37, 'ABx', 's-g') +
      T(372, 111, 'ABx', 's-g') + F(338, 106, 296, 106, 's-mut', 2) + macchina(208, 86, 'A⁻¹', 's-ara') + F(206, 106, 164, 106, 's-mut', 2) +
      macchina(76, 86, 'B⁻¹', 's-blu') + F(74, 106, 32, 106, 's-mut', 2) + T(20, 111, 'x', 's-g') +
      T(220, 154, '(AB)⁻¹ = B⁻¹A⁻¹', 's-g s-ver') + T(220, 176, 'Vale per matrici quadrate: l\'ultima applicata si toglie per prima', 's-p'));
  }

  function s3vettori() {
    return tre(150, 'Vettori liberi, somma e multipli', [
      { t: 'Stesso vettore', s: ['conta lo spostamento,', 'non dove lo disegni'], d: cx => F(cx - 56, 92, cx - 14, 62, 's-blu', 2.6) + F(cx - 20, 72, cx + 22, 42, 's-blu', 2.6) + F(cx + 4, 104, cx + 46, 74, 's-blu', 2.6) },
      { t: 'Somma', s: ['il secondo parte dove', 'finisce il primo'], d: cx => F(cx - 54, 96, cx + 6, 80, 's-blu', 2.6) + F(cx + 6, 80, cx + 30, 40, 's-ara', 2.6) + F(cx - 54, 96, cx + 30, 40, 's-ver', 3) + T(cx - 30, 72, 'u + v', 's-p s-ver') },
      { t: 'Multipli', s: ['stessa direzione,', 'lunghezza diversa'], d: cx => L(cx - 56, 104, cx + 52, 40, 's-gri', 1.2, true) + F(cx, 72, cx + 40, 48, 's-ara', 2.6) + F(cx, 72, cx - 40, 96, 's-ros', 2.6) + F(cx, 72, cx + 20, 60, 's-blu', 3.6) + T(cx + 44, 62, '2v', 's-p s-ara') + T(cx - 34, 110, '−v', 's-p s-ros') + T(cx + 2, 54, 'v', 's-p s-blu') }
    ]);
  }

  function s3spazi() {
    return mozzo('Tanti oggetti diversi con le stesse regole', ['Spazio', 'vettoriale'], 's-blu', [
      ['Frecce'], ['Liste: ℝⁿ e ℂⁿ'], ['Matrici m × n'], ['Polinomi e funzioni']
    ]);
  }

  function s3applicazioni() {
    return tre(176, 'Iniettiva, suriettiva, biunivoca', [
      { t: 'Iniettiva', c: 's-blu', s: ['al massimo una', 'controimmagine'], d: cx => pallini(cx, 2, 3, [[0, 0], [1, 2]], 's-blu') },
      { t: 'Suriettiva', c: 's-ara', s: ['almeno una', 'controimmagine'], d: cx => pallini(cx, 3, 2, [[0, 0], [1, 0], [2, 1]], 's-ara') },
      { t: 'Biunivoca', c: 's-ver', s: ['esattamente una', 'controimmagine'], d: cx => pallini(cx, 3, 3, [[0, 0], [1, 1], [2, 2]], 's-ver') }
    ]);
  }

  function s3sottospazi() {
    const assi = cx => L(cx - 56, 78, cx + 56, 78, 's-gri', 1.4) + L(cx, 28, cx, 124, 's-gri', 1.4) + P(cx, 78, 4, 's-mut');
    return tre(172, 'Una retta per l\'origine è un sottospazio, una retta spostata e un cerchio no', [
      { t: '✓ Sottospazio', c: 's-ver', s: ['retta per l\'origine:', 'si resta dentro'], d: cx => assi(cx) + L(cx - 44, 112, cx + 44, 44, 's-ver', 3) },
      { t: '✗ Manca lo 0', c: 's-ros', s: ['retta spostata:', '0 non ci sta'], d: cx => assi(cx) + L(cx - 54, 92, cx + 26, 30, 's-ros', 3) },
      { t: '✗ Non è chiuso', c: 's-ros', s: ['cerchio: il doppio', 'di u esce fuori'], d: cx => assi(cx) + '<circle cx="' + cx + '" cy="78" r="26" fill="none" stroke="currentColor" stroke-width="3" class="s-ros"/>' + F(cx, 78, cx + 37, 41, 's-blu', 2.2) + T(cx + 42, 40, '2u', 's-p s-blu', 'start') }
    ]);
  }

  /* ---------- Sezione 4 ---------- */

  function s4richiami() {
    const q = pan(120, 88, 34), z = q(2, 1), zb = q(2, -1), o = q(0, 0);
    return svg(440, 176, 'Un numero complesso nel piano, con il suo coniugato',
      L(40, 88, 240, 88, 's-mut', 1.4) + L(120, 14, 120, 162, 's-mut', 1.4) + T(246, 92, 'Re', 's-p', 'start') + T(126, 22, 'Im', 's-p', 'start') +
      L(z[0], z[1], zb[0], zb[1], 's-gri', 1.4, true) + F(o[0], o[1], z[0], z[1], 's-blu', 2.8) + P(zb[0], zb[1], 5, 's-vio') +
      T(z[0] + 8, z[1] - 4, 'z = 2 + i', 's-g s-blu', 'start') + T(zb[0] + 8, zb[1] + 8, 'z̄ = 2 − i', 's-g s-vio', 'start') +
      T(q(1, .5)[0] - 4, q(1, .5)[1] - 8, '|z|', 's-p s-blu', 'end') +
      T(344, 40, 'i² = −1', 's-g') + T(344, 66, 'z z̄ = |z|²', 's-g') + T(344, 92, 'si può dividere', 's-p s-ver') + T(344, 118, 'non si confronta:', 's-p s-ros') + T(344, 134, 'z > 0 non ha senso', 's-p s-ros'));
  }

  function s4sistemi() {
    return svg(440, 146, 'Il MEG su C: la seconda riga è i volte la prima',
      matrice(70, 44, [['i', '1'], ['−1', 'i']], 42, 34, null) + F(140, 62, 214, 62, 's-mut', 2) + T(177, 52, 'R₂ − iR₁', 's-p') +
      matrice(252, 44, [['i', '1'], ['0', '0']], 42, 34, null) +
      T(370, 50, 'rango 1', 's-g s-ros') + T(370, 70, 'singolare', 's-p') +
      T(220, 118, 'Tutte le entrate sono non nulle, eppure non è invertibile', 's-p') +
      T(220, 138, 'I passi del MEG sono gli stessi, cambia solo l\'aritmetica', 's-p s-g'));
  }

  function s4tfa() {
    const q = pan(110, 84, 36);
    return svg(440, 168, 'Le radici di z alla seconda più uno sono i e meno i',
      L(30, 84, 200, 84, 's-mut', 1.4) + L(110, 12, 110, 156, 's-mut', 1.4) + T(206, 88, 'ℝ', 's-p', 'start') + T(116, 20, 'iℝ', 's-p', 'start') +
      O(q(0, 1)[0], q(0, 1)[1], 7, 's-ver', 2.6) + O(q(0, -1)[0], q(0, -1)[1], 7, 's-ver', 2.6) +
      T(q(0, 1)[0] + 12, q(0, 1)[1] + 5, 'i', 's-g s-ver', 'start') + T(q(0, -1)[0] + 12, q(0, -1)[1] + 5, '−i', 's-g s-ver', 'start') +
      T(330, 44, 'z² + 1 = (z − i)(z + i)', 's-g') + T(330, 72, 'grado 2, due radici', 's-p s-ver') +
      T(330, 100, 'Su ℝ nessuna radice:', 's-p s-ros') + T(330, 116, 'la retta non le vede', 's-p s-ros') + T(330, 144, 'Su ℂ ci sono sempre tutte', 's-p s-g'));
  }

  /* ---------- Sezione 6 ---------- */

  function s6metodo() {
    return svg(440, 176, 'La ricetta unica per la posizione reciproca',
      catena(6, [{ t: ['Scrivi il sistema', 'dell\'intersezione'] }, { t: ['Calcola', 'i due ranghi'] }, { t: ['Rouché-', 'Capelli'] }], 54) +
      F(366, 62, 366, 92, 's-mut', 2) + F(330, 62, 220, 92, 's-mut', 2) + F(300, 62, 74, 92, 's-mut', 2) +
      B(6, 94, 136, 44, 's-ros') + T(74, 121, 'Nessun punto', 's-g s-ros') +
      B(152, 94, 136, 44, 's-ver') + T(220, 121, 'Un punto', 's-g s-ver') +
      B(298, 94, 136, 44, 's-blu') + T(366, 121, 'Infiniti punti', 's-g s-blu') +
      T(220, 166, 'Poi si traduce in geometria', 's-p s-g'));
  }

  function s6rettepiano() {
    return tre(160, 'Due rette nel piano: incidenti, parallele, coincidenti', [
      { t: 'Incidenti', c: 's-ver', s: ['r(A) = 2', 'un punto'], d: cx => L(cx - 54, 112, cx + 50, 44, 's-blu', 3) + L(cx - 54, 46, cx + 50, 112, 's-ara', 3) + P(cx - 1, 78, 5.5, 's-ver') },
      { t: 'Parallele', c: 's-ros', s: ['r(A) = 1, r([A|b]) = 2', 'nessun punto'], d: cx => L(cx - 54, 84, cx + 40, 36, 's-blu', 3) + L(cx - 40, 118, cx + 54, 70, 's-ara', 3) },
      { t: 'Coincidenti', c: 's-blu', s: ['r(A) = r([A|b]) = 1', 'infiniti punti'], d: cx => L(cx - 54, 112, cx + 50, 44, 's-blu', 6) + L(cx - 54, 112, cx + 50, 44, 's-ara', 2.2) }
    ]);
  }

  function s6rettespazio() {
    const cubo = cx => {
      const x = cx - 46, y = 112, w = 70, h = 62, s = 22;
      return L(x, y, x + w, y, 's-gri', 1.2) + L(x, y - h, x + w, y - h, 's-gri', 1.2) + L(x, y, x, y - h, 's-gri', 1.2) + L(x + w, y, x + w, y - h, 's-gri', 1.2) +
        L(x + s, y - h - s + 4, x + w + s, y - h - s + 4, 's-gri', 1.2) + L(x, y - h, x + s, y - h - s + 4, 's-gri', 1.2) + L(x + w, y - h, x + w + s, y - h - s + 4, 's-gri', 1.2) +
        L(x + w, y, x + w + s, y - s + 4, 's-gri', 1.2) + L(x + w + s, y - s + 4, x + w + s, y - h - s + 4, 's-gri', 1.2);
    };
    return tre(164, 'Due rette nello spazio: parallele, incidenti, sghembe', [
      { t: 'Parallele', c: 's-mut', s: ['direzioni dipendenti', 'r(A) = 1'], d: cx => cubo(cx) + L(cx - 46, 112, cx + 24, 112, 's-blu', 3.4) + L(cx - 24, 72, cx + 46, 72, 's-ara', 3.4) },
      { t: 'Incidenti', c: 's-ver', s: ['un punto comune', 'r([A|b]) = 2'], d: cx => cubo(cx) + L(cx - 46, 112, cx + 24, 50, 's-blu', 3.4) + L(cx - 46, 50, cx + 24, 112, 's-ara', 3.4) + P(cx - 11, 81, 5, 's-ver') },
      { t: 'Sghembe', c: 's-ros', s: ['mai un punto comune', 'r([A|b]) = 3'], d: cx => cubo(cx) + L(cx - 46, 112, cx + 24, 112, 's-blu', 3.4) + L(cx - 46, 50, cx + 46, 32, 's-ara', 3.4) }
    ]);
  }

  function s6piani() {
    return tre(164, 'Due piani nello spazio: paralleli, coincidenti, incidenti', [
      { t: 'Paralleli', c: 's-ros', s: ['r(A) = 1, r([A|d]) = 2', 'nessun punto'], d: cx => piano(cx - 62, 72, 92, 38, 30, 's-blu') + piano(cx - 62, 124, 92, 38, 30, 's-ara') },
      { t: 'Coincidenti', c: 's-blu', s: ['r(A) = r([A|d]) = 1', 'tutto il piano'], d: cx => piano(cx - 62, 104, 92, 50, 30, 's-blu', .3) },
      { t: 'Incidenti', c: 's-ver', s: ['r(A) = 2', 'una retta'], d: cx => piano(cx - 62, 96, 92, 40, 30, 's-blu') + poli([[cx - 18, 124], [cx + 24, 118], [cx + 24, 42], [cx - 18, 48]], 's-ara') + L(cx - 18, 78, cx + 24, 76, 's-ver', 4) }
    ]);
  }

  function s6rettapiano() {
    return tre(160, 'Retta e piano: incidenti, parallela, contenuta', [
      { t: 'Incidenti', c: 's-ver', s: ['viene t = numero', 'un punto'], d: cx => L(cx - 8, 112, cx + 24, 30, 's-blu', 3) + piano(cx - 62, 110, 92, 44, 30, 's-gri', .5) + L(cx + 8, 76, cx + 24, 30, 's-blu', 3) + P(cx + 8, 76, 5, 's-ver') },
      { t: 'Parallela', c: 's-ros', s: ['viene 0 = 1', 'nessun punto'], d: cx => piano(cx - 62, 118, 92, 44, 30, 's-gri', .5) + L(cx - 56, 48, cx + 50, 40, 's-blu', 3) },
      { t: 'Contenuta', c: 's-blu', s: ['viene 1 = 1', 'infiniti punti'], d: cx => piano(cx - 62, 118, 92, 58, 30, 's-gri', .5) + L(cx - 46, 96, cx + 46, 76, 's-blu', 3.4) }
    ]);
  }

  function s6rettecart() {
    return svg(440, 156, 'Una retta nello spazio è l\'intersezione di due piani',
      piano(14, 118, 170, 56, 50, 's-blu') + poli([[100, 142], [172, 132], [172, 22], [100, 32]], 's-ara') + L(100, 88, 172, 84, 's-ver', 5) +
      T(250, 40, 'piano 1:  x + y + z = 2', 's-p s-blu', 'start') + T(250, 62, 'piano 2:  x + 2y − z = 0', 's-p s-ara', 'start') +
      T(250, 92, 'retta: tutte e due insieme', 's-g s-ver', 'start') + T(250, 120, 'coefficienti: direzione', 's-p', 'start') + T(250, 138, 'termini noti: posizione', 's-p', 'start'));
  }

  function s6ortogonalita() {
    return svg(440, 172, 'I coefficienti di un piano danno il vettore normale',
      piano(6, 128, 140, 58, 44, 's-blu') + P(92, 100, 4.5, 's-mut') +
      F(92, 100, 92, 22, 's-ver', 3.2) + F(92, 100, 152, 90, 's-ara', 3) +
      T(100, 28, '(a, b, c)', 's-g s-ver', 'start') + T(156, 90, 'u', 's-g s-ara', 'start') +
      T(208, 36, 'ax + by + cz = d', 's-g', 'start') + T(208, 68, 'normale: multiplo di (a, b, c)', 's-p s-ver', 'start') +
      T(208, 94, 'parallelo: a u₁ + b u₂ + c u₃ = 0', 's-p s-ara', 'start') + T(208, 128, 'ortogonali se ⟨x, y⟩ = 0', 's-g', 'start') + T(96, 160, 'il piano e la sua normale', 's-p'));
  }

  function s6fasci() {
    const pagina = (cx, a, classe) => poli([[cx, 128], [cx + 66 * Math.cos(a), 128 - 66 * Math.sin(a) * .34], [cx + 66 * Math.cos(a), 56 - 66 * Math.sin(a) * .34], [cx, 56]], classe, .16);
    return svg(440, 176, 'Due famiglie di piani: paralleli a un piano e passanti per una retta',
      T(110, 16, 'Piani paralleli', 's-g') + piano(30, 66, 120, 30, 36, 's-blu') + piano(30, 102, 120, 30, 36, 's-blu') + piano(30, 138, 120, 30, 36, 's-blu') +
      T(110, 158, 'ax + by + cz = q', 's-p s-g') + T(110, 172, 'cambia solo q', 's-p') +
      T(330, 16, 'Piani per una retta', 's-g') + pagina(330, .3, 's-ara') + pagina(330, 1.15, 's-ara') + pagina(330, 2.6, 's-ara') + L(330, 56, 330, 128, 's-ver', 4.4) +
      T(330, 158, 'p · piano₁ + q · piano₂ = 0', 's-p s-g') + T(330, 172, 'una condizione sceglie il piano', 's-p'));
  }

  /* ---------- Sezione 7 ---------- */

  function s7completamento() {
    const x0 = 112, passo = 44;
    let fasce = '';
    [0, 1, 2].forEach(j => { fasce += '<rect x="' + (x0 + j * passo - 15) + '" y="26" width="30" height="92" rx="6" class="s-ver" fill="currentColor" fill-opacity=".14"/>'; });
    return svg(440, 176, 'Completare a una base: prima i vettori dati, poi la canonica',
      fasce + matrice(x0, 48, [['1', '1', '1', '0', '0'], ['1', '2', '0', '1', '0'], ['1', '3', '0', '0', '1']], passo, 30, ['s-blu', 's-blu']) +
      T(x0, 14, 'v₁', 's-g s-blu') + T(x0 + passo, 14, 'v₂', 's-g s-blu') + T(x0 + 2 * passo, 14, 'e₁', 's-g') + T(x0 + 3 * passo, 14, 'e₂', 's-g') + T(x0 + 4 * passo, 14, 'e₃', 's-g') +
      T(220, 142, 'Pivot nelle prime tre colonne', 's-p') + T(220, 164, 'Base: { v₁, v₂, e₁ }', 's-g s-ver'));
  }

  function s7intersezione() {
    const q = pan(110, 106, 36), a = q(1, 1), b = q(-1, 1), c = q(0, 2), o = q(0, 0);
    return svg(440, 186, 'Due rette per l\'origine: la loro unione non è chiusa rispetto alla somma',
      L(q(-1.9, -1.9)[0], q(-1.9, -1.9)[1], q(2.1, 2.1)[0], q(2.1, 2.1)[1], 's-blu', 2.6) + L(q(1.9, -1.9)[0], q(1.9, -1.9)[1], q(-2.1, 2.1)[0], q(-2.1, 2.1)[1], 's-ara', 2.6) +
      L(a[0], a[1], c[0], c[1], 's-gri', 1.4, true) + L(b[0], b[1], c[0], c[1], 's-gri', 1.4, true) +
      F(o[0], o[1], a[0], a[1], 's-blu', 3) + F(o[0], o[1], b[0], b[1], 's-ara', 3) + P(c[0], c[1], 5.5, 's-ros') + P(o[0], o[1], 5.5, 's-ver') +
      T(c[0] + 10, c[1] + 2, '(0, 2)', 's-p s-ros', 'start') +
      T(310, 30, 'W₁: y = x', 's-g s-blu') + T(310, 52, 'W₂: y = −x', 's-g s-ara') +
      T(310, 88, 'W₁ ∩ W₂ = {0}', 's-g s-ver') + T(310, 106, 'è un sottospazio', 's-p') +
      T(310, 140, '(1, 1) + (−1, 1) = (0, 2)', 's-p s-g') + T(310, 158, 'esce dall\'unione', 's-p s-ros'));
  }

  function s7somma() {
    const q = pan(100, 112, 30), u = [1, 1], v = [2, -1];
    const a = q(1, 1), b = q(2, -1), c = q(3, 0), o = q(0, 0);
    return svg(440, 170, 'Ogni vettore della somma è un vettore di W1 più uno di W2',
      L(q(-1.8, -1.8)[0], q(-1.8, -1.8)[1], q(1.8, 1.8)[0], q(1.8, 1.8)[1], 's-blu', 2.4) + L(q(-1.6, .8)[0], q(-1.6, .8)[1], q(3.2, -1.6)[0], q(3.2, -1.6)[1], 's-ara', 2.4) +
      L(a[0], a[1], c[0], c[1], 's-gri', 1.4, true) + L(b[0], b[1], c[0], c[1], 's-gri', 1.4, true) +
      F(o[0], o[1], a[0], a[1], 's-blu', 3) + F(o[0], o[1], b[0], b[1], 's-ara', 3) + F(o[0], o[1], c[0], c[1], 's-ver', 3.2) +
      T(a[0] - 8, a[1] - 8, 'w₁', 's-g s-blu') + T(b[0] - 2, b[1] + 18, 'w₂', 's-g s-ara') + T(c[0] + 8, c[1] + 4, 'w₁ + w₂', 's-g s-ver', 'start') +
      T(340, 96, 'W₁ + W₂', 's-g') + T(340, 116, 'raccoglie tutte queste somme', 's-p') + T(340, 136, 'generatori: quelli dei due', 's-p') + T(340, 156, 'messi insieme', 's-p'));
  }

  function s7diretta() {
    return svg(440, 146, 'La somma diretta incolla le coordinate',
      B(10, 14, 110, 50, 's-blu') + T(65, 36, '(a, b)', 's-g s-blu') + T(65, 54, 'in U', 's-p') +
      T(146, 44, '⊕', 's-g') +
      B(170, 14, 110, 50, 's-ara') + T(225, 36, '(c, d)', 's-g s-ara') + T(225, 54, 'in V', 's-p') +
      F(286, 39, 316, 39, 's-mut', 2) + B(320, 14, 112, 50, 's-ver') + T(376, 36, '(a, b, c, d)', 's-g s-ver') + T(376, 54, 'in U ⊕ V', 's-p') +
      T(220, 96, 'dim(U ⊕ V) = dim U + dim V', 's-g') + T(220, 118, 'Le operazioni si fanno sulle due parti separatamente', 's-p') + T(220, 136, 'Esempio: 𝕂² ⊕ 𝕂² ≅ 𝕂⁴', 's-p'));
  }

  function s7grassmann() {
    const q = (x, c, t) => B(x, 24, 52, 44, c, .18) + T(x + 26, 51, t, 's-g ' + c);
    return svg(440, 186, 'La formula di Grassmann: l\'intersezione va tolta perché contata due volte',
      T(150, 16, 'W₁', 's-g s-blu') + T(290, 16, 'W₂', 's-g s-ara') +
      q(92, 's-blu', '1') + q(192, 's-ver', '∩') + q(292, 's-ara', '2') +
      '<rect x="88" y="20" width="160" height="52" rx="10" fill="none" stroke="currentColor" stroke-width="2" class="s-blu"/>' +
      '<rect x="188" y="20" width="160" height="52" rx="10" fill="none" stroke="currentColor" stroke-width="2" class="s-ara"/>' +
      T(220, 102, 'dim(W₁ + W₂) = 2 + 2 − 1 = 3', 's-g') +
      T(220, 126, 'Il pezzo in comune sta in tutti e due: si conta una volta sola', 's-p') +
      T(220, 154, 'dim(W₁ + W₂) = dim W₁ + dim W₂ − dim(W₁ ∩ W₂)', 's-g s-ver') +
      T(220, 176, 'Dal rango di tutti i generatori ricavi l\'intersezione', 's-p'));
  }

  function s7interna() {
    return svg(440, 176, 'Somma diretta interna: due rette sì, due piani no',
      T(110, 16, '✓ Due rette di ℝ²', 's-g s-ver') +
      L(30, 120, 190, 40, 's-blu', 3) + L(40, 36, 180, 124, 's-ara', 3) + P(110, 80, 5.5, 's-ver') +
      T(110, 148, 'in comune solo 0', 's-p s-g') + T(110, 164, 'ℝ² = W₁ ⊕ W₂', 's-p') +
      T(330, 16, '✗ Due piani di ℝ³', 's-g s-ros') +
      piano(250, 110, 110, 44, 36, 's-blu') + poli([[300, 132], [344, 126], [344, 34], [300, 40]], 's-ara') + L(300, 88, 344, 86, 's-ros', 4.4) +
      T(330, 148, 'in comune una retta', 's-p s-g') + T(330, 164, 'la somma non è diretta', 's-p'));
  }

  function s7complementi() {
    return svg(440, 178, 'Un piano ha infiniti complementi: ogni retta per l\'origine fuori dal piano',
      piano(30, 134, 170, 62, 50, 's-blu') + P(130, 104, 4.5, 's-mut') +
      L(130, 104, 130, 22, 's-ver', 3.4) + L(130, 104, 196, 34, 's-ara', 3) + L(130, 104, 72, 40, 's-ara', 3) +
      T(138, 28, 'W⊥', 's-g s-ver', 'start') + T(200, 34, 'U', 's-g s-ara', 'start') + T(58, 40, 'U′', 's-g s-ara', 'end') + T(60, 156, 'W', 's-g s-blu') +
      T(330, 44, 'W ⊕ U = ℝ³', 's-g') + T(330, 68, 'vale anche per U′: non è unico', 's-p') +
      T(330, 104, 'Si completa una base di W:', 's-p') + T(330, 122, 'i vettori aggiunti generano U', 's-p') + T(330, 154, 'W⊥: quello perpendicolare', 's-p s-ver'));
  }

  function s7mspazi() {
    const pezzo = (x, w, t, c) => B(x, 40, w, 46, c, .16) + T(x + w / 2, 68, t, 's-g ' + c);
    return svg(440, 136, 'Un vettore si scompone in un solo modo in tanti pezzi',
      T(220, 20, '(3, 1, 2) in ℝ³', 's-g') +
      pezzo(18, 120, '(3, 0, 0)', 's-blu') + T(150, 68, '+', 's-g') + pezzo(162, 120, '(0, 1, 0)', 's-ara') + T(294, 68, '+', 's-g') + pezzo(306, 118, '(0, 0, 2)', 's-vio') +
      T(78, 104, 'span{e₁}', 's-p') + T(222, 104, 'span{e₂}', 's-p') + T(365, 104, 'span{e₃}', 's-p') +
      T(220, 128, 'Ogni vettore si scrive così in un modo solo', 's-p s-g s-ver'));
  }

  /* ---------- Sezione 8 ---------- */

  function s8definizione() {
    const riga = (y, a, b, c) => T(14, y, a, 's-g', 'start') + F(222, y - 5, 258, y - 5, 's-mut', 2) + T(268, y, b, 's-g ' + c, 'start');
    return svg(440, 182, 'Come cambia il determinante a ogni mossa del MEG',
      riga(26, 'Scambi due righe', 'cambia segno', 's-ros') +
      riga(62, 'Moltiplichi una riga per λ', 'si moltiplica per λ', 's-ara') +
      riga(98, 'Sommi un multiplo di un\'altra', 'non cambia', 's-ver') +
      riga(134, 'Matrice triangolare alta', 'prodotto diagonale', 's-blu') +
      T(220, 172, 'Per 2 × 2: det A = ad − bc', 's-g'));
  }

  function s8meg() {
    const m = (x, M) => matrice(x, 44, M, 24, 28, null);
    return svg(440, 158, 'Il determinante si calcola riducendo a scala',
      m(22, [['0', '1', '1'], ['3', '4', '6'], ['3', '2', '2']]) + T(112, 74, '= −', 's-g') +
      m(140, [['3', '2', '2'], ['0', '2', '4'], ['0', '1', '1']]) + T(230, 74, '= −', 's-g') +
      O(258, 39, 12, 's-ros', 1.6) + O(282, 67, 12, 's-ros', 1.6) + O(306, 95, 12, 's-ros', 1.6) +
      m(258, [['3', '2', '2'], ['0', '2', '4'], ['0', '0', '−1']]) + T(366, 74, '= 6', 's-g s-ver', 'start') +
      T(112, 130, 'uno scambio: segno −', 's-p') + T(300, 130, '−(3 · 2 · (−1)) = 6', 's-p s-g') +
      T(220, 152, 'Una riga nulla in fondo vuol dire det A = 0', 's-p'));
  }

  function s8trasposta() {
    return svg(440, 150, 'Il determinante di A e della trasposta sono uguali',
      matrice(70, 44, [['1', '2'], ['3', '4']], 42, 32, null) + T(92, 104, 'det = −2', 's-p s-g') +
      F(150, 56, 224, 56, 's-mut', 2) + T(187, 46, 'scambio righe', 's-p') + T(187, 72, 'e colonne', 's-p') +
      matrice(264, 44, [['1', '3'], ['2', '4']], 42, 32, null) + T(286, 104, 'det = −2', 's-p s-g') +
      T(220, 128, 'Per il determinante righe e colonne valgono uguale', 's-p s-g') +
      T(220, 146, 'Per risolvere un sistema si usano solo le righe', 's-p s-ros'));
  }

  function s8laplace() {
    const s = (i, j) => ((i + j) % 2 ? '−' : '+');
    let scacchi = '';
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) scacchi += T(372 + j * 22, 36 + i * 24, s(i, j), 's-g ' + ((i + j) % 2 ? 's-ros' : 's-ver'));
    return svg(440, 160, 'Lo sviluppo di Laplace lungo la prima riga',
      '<rect x="20" y="20" width="102" height="28" rx="6" class="s-blu" fill="currentColor" fill-opacity=".16"/>' +
      matrice(40, 40, [['1', '0', '2'], ['2', '1', '3'], ['0', '3', '1']], 30, 28, null) +
      T(232, 40, 'Si cancella riga e colonna', 's-p') + T(232, 60, 'di ogni numero della riga', 's-p') +
      T(392, 104, 'segni', 's-p') + scacchi +
      T(220, 128, '1 · |1 3; 3 1| − 0 · (…) + 2 · |2 1; 0 3|', 's-g') +
      T(220, 150, '= −8 + 12 = 4', 's-g s-ver'));
  }

  function s8invertibilita() {
    return mozzo('Le condizioni equivalenti al determinante non nullo', ['det A ≠ 0'], 's-ver', [
      ['A invertibile'], ['r(A) = n'], ['Righe e colonne', 'indipendenti'], ['x ↦ Ax biettiva']
    ]);
  }

  function s8binet() {
    return svg(440, 152, 'Il determinante del prodotto è il prodotto dei determinanti',
      B(16, 12, 110, 50, 's-blu') + T(71, 34, 'A', 's-g s-blu') + T(71, 52, 'det A = 2', 's-p') +
      T(148, 42, '·', 's-g') + B(170, 12, 110, 50, 's-ara') + T(225, 34, 'B', 's-g s-ara') + T(225, 52, 'det B = 3', 's-p') +
      F(286, 37, 314, 37, 's-mut', 2) + B(318, 12, 110, 50, 's-ver') + T(373, 34, 'AB', 's-g s-ver') + T(373, 52, 'det = 2 · 3 = 6', 's-p') +
      T(220, 90, '✓ det(AB) = det A · det B', 's-g s-ver') +
      T(220, 114, '✗ det(A + B) non è det A + det B', 's-g s-ros') +
      T(220, 138, '✗ det(λA) è λⁿ det A, non λ det A', 's-g s-ros'));
  }

  function s8inversa() {
    const m = (x, M) => matrice(x, 44, M, 30, 30, null);
    return svg(440, 160, 'Formula per l\'inversa con i cofattori',
      m(30, [['1', '2'], ['3', '4']]) + T(45, 110, 'A', 's-g') + T(45, 126, 'det A = −2', 's-p') +
      F(92, 58, 124, 58, 's-mut', 2) + m(150, [['4', '−3'], ['−2', '1']]) + T(165, 110, 'cofattori C', 's-g') +
      F(212, 58, 244, 58, 's-mut', 2) + m(270, [['4', '−2'], ['−3', '1']]) + T(285, 110, 'trasposta Cᵀ', 's-g') + T(378, 58, 'divido', 's-p') + T(378, 74, 'per det A', 's-p') +
      T(220, 150, 'A⁻¹ = Cᵀ / det A', 's-g s-ver'));
  }

  function s8cramer() {
    const m = (x, M, col) => matrice(x, 46, M, 28, 28, col);
    return svg(440, 166, 'Regola di Cramer: si sostituisce una colonna con i termini noti',
      T(220, 14, '2x + y = 5,  x + 3y = 5', 's-g') +
      m(36, [['2', '1'], ['1', '3']], null) + T(50, 110, 'det A = 5', 's-p s-g') +
      m(190, [['5', '1'], ['5', '3']], ['s-ara', null]) + T(204, 110, 'det A₁ = 10', 's-p s-g') +
      m(344, [['2', '5'], ['1', '5']], [null, 's-ara']) + T(358, 110, 'det A₂ = 5', 's-p s-g') +
      T(220, 136, 'x = 10 / 5 = 2,  y = 5 / 5 = 1', 's-g s-ver') + T(220, 158, 'La colonna di b prende il posto dell\'incognita cercata', 's-p'));
  }

  function s8kronecker() {
    return svg(440, 164, 'Teorema di Kronecker: un minore non nullo e i suoi orlati',
      '<rect x="20" y="24" width="94" height="66" rx="6" class="s-blu" fill="currentColor" fill-opacity=".16"/>' +
      '<rect x="14" y="18" width="142" height="108" rx="8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-dasharray="5 4" class="s-ara"/>' +
      matrice(44, 44, [['1', '2', '3'], ['2', '1', '0'], ['3', '3', '3']], 42, 32, null) +
      T(186, 44, 'minore di ordine 2: −3 ≠ 0', 's-p s-g s-blu', 'start') + T(186, 66, 'quindi r ≥ 2', 's-p', 'start') +
      T(186, 98, 'unico orlato: det M = 0', 's-p s-g s-ara', 'start') + T(186, 120, 'quindi r = 2', 's-g s-ver', 'start') +
      T(220, 154, 'Il rango è l\'ordine del più grande minore non nullo', 's-p'));
  }

  function s8potenze() {
    return svg(440, 174, 'Matrici simili: la stessa mappa vista in due basi',
      B(16, 12, 130, 42, 's-vio') + T(81, 38, 'Base nuova', 's-p s-g s-vio') + F(150, 33, 288, 33, 's-vio', 2.6) + T(219, 24, 'B = S⁻¹AS', 's-g s-vio') +
      B(292, 12, 132, 42, 's-vio') + T(358, 38, 'Base nuova', 's-p s-g s-vio') +
      F(81, 58, 81, 96, 's-mut', 2) + T(90, 82, 'S', 's-p', 'start') + F(358, 96, 358, 58, 's-mut', 2) + T(350, 82, 'S⁻¹', 's-p', 'end') +
      B(16, 98, 130, 42, 's-blu') + T(81, 124, 'Base vecchia', 's-p s-g s-blu') + F(150, 119, 288, 119, 's-blu', 2.6) + T(219, 110, 'A', 's-g s-blu') +
      B(292, 98, 132, 42, 's-blu') + T(358, 124, 'Base vecchia', 's-p s-g s-blu') +
      T(220, 164, 'Stessa mappa, quindi stesso determinante', 's-g s-ver'));
  }

  function s8volumi() {
    const qa = pan(30, 66, 40), qb = pan(236, 66, 40);
    const q1 = [qa(0, 0), qa(1, 0), qa(1, 1), qa(0, 1)], q2 = [qb(0, 0), qb(2, 0), qb(3, 1), qb(1, 1)];
    return svg(440, 124, 'Il valore assoluto del determinante è il fattore di dilatazione delle aree',
      poli(q1, 's-blu', .18) + T(50, 52, '1', 's-g s-blu') + T(52, 86, 'area 1', 's-p s-g') +
      F(100, 46, 216, 46, 's-mut', 2) + T(158, 36, 'det = 2', 's-g s-ver') +
      poli(q2, 's-ver', .18) + T(316, 52, '2', 's-g s-ver') + T(314, 86, 'area 2', 's-p s-g') +
      T(220, 116, '|det| dilata le aree, il segno dice se la figura si rovescia', 's-p'));
  }

  /* ---------- Sezione 9 ---------- */

  const COL3 = ['s-blu', 's-ver', 's-vio'];
  /** pedice e esponente veri dentro un testo SVG */
  const pd = (b, s) => b + '<tspan baseline-shift="sub" font-size="10">' + s + '</tspan>';
  const ap = (b, s) => b + '<tspan baseline-shift="super" font-size="10">' + s + '</tspan>';
  const MG = pd('m', 'g'), MA = pd('m', 'a'), WL = pd('W', 'λ');

  function s9problema() {
    const A = [['3', '0', '−2'], ['1', '1', '−1'], ['1', '0', '0']], D = [['2', '0', '0'], ['0', '1', '0'], ['0', '0', '1']];
    return svg(440, 172, 'In una base qualsiasi la matrice è piena; in una base di autovettori è diagonale',
      T(70, 16, 'Base qualsiasi', 's-g') + matrice(40, 50, A, 30, 26) +
      F(132, 72, 268, 72, 's-ver', 2.4) + T(200, 62, 'S⁻¹AS', 's-g s-ver') +
      T(330, 16, 'Base di autovettori', 's-g s-ver') + matrice(300, 50, D, 30, 26, COL3) +
      T(70, 136, 'Esempio 1', 's-p') + T(330, 136, 'diagonale', 's-p') +
      T(220, 162, 'Colonna j = coordinate di L(vⱼ), e qui L(vⱼ) = λⱼ vⱼ', 's-p s-g'));
  }

  function s9autovettori() {
    // A = [[2,1],[0,3]]: u = (1,1) è autovettore (λ = 3), w = (0,1) no
    const A = (x, y) => [2 * x + y, 3 * y];
    const q = pan(40, 162, 28), o = q(0, 0);
    const u = [1, 1], Au = A(...u), w = [0, 1], Aw = A(...w);
    return svg(440, 182, 'Un autovettore resta sulla sua retta, un vettore qualsiasi cambia direzione',
      L(...q(-0.4, 0), ...q(3.5, 0), 's-gri', 1) + L(...q(0, -0.4), ...q(0, 3.5), 's-gri', 1) +
      L(...q(-0.4, -0.4), ...q(3.5, 3.5), 's-ver', 1.2, true) +
      F(...o, ...q(...Au), 's-ver', 2.2) + F(...o, ...q(...u), 's-blu', 3) +
      F(...o, ...q(...Aw), 's-ros', 1.6) + F(...o, ...q(...w), 's-ros', 3) +
      T(q(...u)[0] + 12, q(...u)[1] + 6, 'u', 's-g s-blu', 'start') + T(q(...Au)[0] + 8, q(...Au)[1] + 4, 'Au', 's-g s-ver', 'start') +
      T(q(...w)[0] - 8, q(...w)[1] + 4, 'w', 's-g s-ros', 'end') + T(q(...Aw)[0] - 8, q(...Aw)[1], 'Aw', 's-g s-ros', 'end') +
      T(262, 51, 'A =', 's-g', 'end') + matrice(300, 40, [['2', '1'], ['0', '3']], 26, 22) +
      T(250, 104, 'u = (1,1):  Au = (3,3) = 3u', 's-p s-blu', 'start') + T(250, 122, 'autovettore, λ = 3', 's-g s-ver', 'start') +
      T(250, 148, 'w = (0,1):  Aw = (1,3)', 's-p s-ros', 'start') + T(250, 166, 'non è un multiplo di w', 's-g s-ros', 'start'));
  }

  function s9matrici() {
    const S = [['2', '0', '1'], ['1', '1', '0'], ['1', '0', '1']], D = [['2', '0', '0'], ['0', '1', '0'], ['0', '0', '1']];
    return svg(440, 182, 'Le colonne di S sono autovettori, la diagonale di D sono gli autovalori, nello stesso ordine',
      T(90, 16, 'S: autovettori in colonna', 's-g') + matrice(60, 50, S, 30, 26, COL3) +
      T(330, 16, 'D: autovalori', 's-g') + matrice(300, 50, D, 30, 26, COL3) +
      T(205, 80, 'A = S D S⁻¹', 's-g') +
      T(220, 138, 'A(2,1,1) = 2·(2,1,1)', 's-p s-blu') + T(220, 155, 'A(0,1,0) = 1·(0,1,0)', 's-p s-ver') +
      T(220, 172, 'A(1,0,1) = 1·(1,0,1)', 's-p s-vio'));
  }

  function s9polinomio() {
    return svg(440, 116, 'Da A v = λ v al determinante: λ è autovalore se e solo se det(A − λI) = 0',
      catena(10, [{ t: ['A v = λ v', 'con v ≠ 0'] }, { t: ['(A − λI) v = 0', 'non banale'] }, { t: ['det(A − λI) = 0', 'λ è autovalore'], c: 's-ver' }], 62) +
      T(220, 100, 'L\'autospazio di λ è ' + WL + ' = ker(A − λI)', 's-p s-g'));
  }

  function s9calcolo() {
    return svg(440, 116, 'I quattro passi per trovare autovalori e autospazi',
      catena(10, [{ t: ['1 · p(λ)', 'radici'] }, { t: ['2 · A − λI', 'a scala'] }, { t: ['3 · variabili', 'libere'] }, { t: ['4 · A v = λ v', 'controllo'], c: 's-ver' }], 62) +
      T(220, 100, 'dim ' + WL + ' = n − r(A − λI) = numero di variabili libere', 's-p s-g'));
  }

  function s9molteplicita() {
    const riga = (y, nome, mg, esito, classe) => {
      let s = T(58, y + 5, nome, 's-g');
      for (let i = 0; i < 2; i++) {
        const x = 130 + i * 38;
        s += B(x, y - 14, 28, 28, 's-mut', 0) + (i < mg ? B(x + 4, y - 10, 20, 20, classe, .7) : '');
      }
      return s + T(220, y + 5, MG + ' = ' + mg + ',  ' + MA + ' = 2', 's-p', 'start') + T(430, y + 5, esito, 's-g ' + classe, 'end');
    };
    return svg(440, 150, 'Molteplicità algebrica e geometrica di λ = 1 negli Esempi 1 e 2',
      T(163, 16, 'λ = 1, doppio', 's-p s-g') +
      riga(48, 'Esempio 1', 2, 'regolare', 's-ver') + riga(96, 'Esempio 2', 1, 'irregolare', 's-ros') +
      T(220, 140, 'riquadri: ' + MA + ' (dal polinomio) · pieni: ' + MG + ' (dall\'autospazio)', 's-p'));
  }

  function s9criterio() {
    return svg(440, 224, 'Il criterio: autovalori nel campo, poi ogni autovalore regolare',
      B(110, 8, 210, 40, 's-blu') + T(215, 33, 'Autovalori tutti nel campo?', 's-g s-blu') +
      F(322, 28, 344, 28, 's-ros', 2) + T(333, 20, 'no', 's-p s-ros') + B(348, 8, 88, 40, 's-ros') + T(392, 33, 'non diag.', 's-p s-g s-ros') +
      F(215, 50, 215, 78, 's-ver', 2) + T(225, 68, 'sì', 's-p s-ver', 'start') +
      B(110, 80, 210, 44, 's-blu') + T(215, 99, 'Ogni autovalore regolare?', 's-g s-blu') + T(215, 116, MG + ' = ' + MA, 's-p') +
      F(322, 102, 344, 102, 's-ros', 2) + T(333, 94, 'no', 's-p s-ros') + B(348, 82, 88, 40, 's-ros') + T(392, 107, 'non diag.', 's-p s-g s-ros') +
      F(215, 126, 215, 154, 's-ver', 2) + T(225, 144, 'sì', 's-p s-ver', 'start') +
      B(110, 156, 210, 36, 's-ver', .16) + T(215, 179, 'Diagonalizzabile', 's-g s-ver') +
      T(220, 214, 'Scorciatoia: n autovalori distinti ⇒ diagonalizzabile', 's-p'));
  }

  function s9base() {
    const S = [['2', '0', '1'], ['1', '1', '0'], ['1', '0', '1']], D = [['2', '0', '0'], ['0', '1', '0'], ['0', '0', '1']];
    const col = ['s-blu', 's-ver', 's-ver'];
    return svg(440, 164, 'Le basi degli autospazi messe insieme danno le colonne di S',
      B(4, 18, 132, 36, 's-blu') + T(70, 41, 'W₂: (2,1,1)', 's-p s-g s-blu') +
      B(4, 66, 132, 54, 's-ver') + T(70, 89, 'W₁: (0,1,0)', 's-p s-g s-ver') + T(70, 107, 'e (1,0,1)', 's-p s-g s-ver') +
      F(142, 68, 176, 68, 's-mut', 2) +
      matrice(204, 46, S, 28, 24, col) + T(232, 128, 'S', 's-g') +
      matrice(334, 46, D, 28, 24, col) + T(362, 128, 'D', 's-g') +
      T(220, 154, 'Ogni colonna di S va con lo stesso posto di D', 's-p'));
  }

  function s9potenze() {
    const phi = (1 + Math.sqrt(5)) / 2;
    const F = [1, 1]; while (F.length < 8) F.push(F[F.length - 1] + F[F.length - 2]);
    let s = T(8, 58, 'k', 's-p s-g', 'start') + T(8, 84, 'Fₖ', 's-p s-g s-blu', 'start') + T(8, 110, 'φᵏ/√5', 's-p s-g s-ver', 'start');
    for (let k = 1; k <= 8; k++) {
      const x = 80 + (k - 1) * 46;
      s += T(x, 58, String(k), 's-p') + T(x, 84, String(F[k - 1]), 's-g s-blu') +
        T(x, 110, (Math.pow(phi, k) / Math.sqrt(5)).toFixed(2).replace('.', ','), 's-p s-ver');
    }
    return svg(440, 146, 'I numeri di Fibonacci sono gli interi più vicini a φ alla k diviso radice di 5',
      T(220, 22, 'Aᵏ = S Dᵏ S⁻¹,   Dᵏ = diag(λ₁ᵏ, λ₂ᵏ)', 's-g') + L(4, 68, 436, 68, 's-gri', 1) + s +
      T(220, 138, 'Fₖ è l\'intero più vicino a φᵏ/√5', 's-p s-g'));
  }

  function s9traccia() {
    return svg(440, 140, 'Traccia e determinante di una matrice 2 per 2 e i suoi autovalori',
      T(26, 59, 'A =', 's-g', 'end') + matrice(60, 50, [['4', '2'], ['−1', '1']], 36, 28) +
      O(60, 45, 15, 's-ver', 1.6) + O(96, 73, 15, 's-ver', 1.6) +
      T(160, 40, 'tr A = 4 + 1 = 5 = 2 + 3', 's-p', 'start') +
      T(160, 66, 'det A = 4 − (−2) = 6 = 2 · 3', 's-p', 'start') +
      T(160, 96, 'somma 5, prodotto 6  ⇒  λ = 2, 3', 's-g s-ver', 'start') +
      T(220, 130, 'Per una 2×2:  p(λ) = λ² − tr(A) λ + det(A)', 's-p'));
  }

  function s9invarianza() {
    return svg(440, 168, 'Matrici simili hanno lo stesso polinomio caratteristico; il viceversa è falso',
      B(8, 8, 424, 38, 's-ver', .1) + T(220, 32, 'B = S⁻¹AS  ⇒  ' + pd('P', 'B') + ' = ' + pd('P', 'A'), 's-g s-ver') +
      matrice(84, 90, [['1', '0'], ['0', '1']], 28, 26) + matrice(328, 90, [['1', '1'], ['0', '1']], 28, 26) +
      T(220, 96, 'stesso P(λ) = (1 − λ)²', 's-p') + T(220, 116, 'ma NON simili', 's-g s-ros') +
      T(98, 156, MG + '(1) = 2', 's-p') + T(342, 156, MG + '(1) = 1', 's-p'));
  }

  function s9esponenziale() {
    return svg(440, 116, 'Il sistema y′ = A y si risolve con l\'esponenziale di una matrice diagonalizzabile',
      catena(10, [{ t: ['y′ = A y', 'y(0) = y₀'] }, { t: ['A = S D S⁻¹', 'diagonalizzabile'] }, { t: ['y(t) = eᵗᴬ y₀', 'eᵗᴬ = S eᵗᴰ S⁻¹'], c: 's-ver' }], 62) +
      T(220, 100, 'eᵗᴰ = diag(' + ap('e', 'λ₁t') + ', …, ' + ap('e', 'λₙt') + ')', 's-p s-g'));
  }

  Object.assign(window.SCHEMI, {
    0: { notazione: s0notazione, rn: s0rn, quantificatori: s0quantificatori, campo: s0campo },
    1: { sistemi: s1sistemi, equivalenza: s1equivalenza, scala: s1scala, meg: s1meg, lettura: s1lettura },
    2: { algebra: s2algebra, struttura: s2struttura, rc: s2rc, inversa: s2inversa, cramer: s2cramer, megj: s2megj, eqmatrici: s2eqmatrici },
    3: { prodotto: s3prodotto, vettori: s3vettori, spazi: s3spazi, applicazioni: s3applicazioni, sottospazi: s3sottospazi },
    4: { richiami: s4richiami, sistemi: s4sistemi, tfa: s4tfa },
    6: { metodo: s6metodo, 'rette-piano': s6rettepiano, 'rette-spazio': s6rettespazio, piani: s6piani, 'retta-piano': s6rettapiano, 'rette-cart': s6rettecart, ortogonalita: s6ortogonalita, fasci: s6fasci },
    7: { completamento: s7completamento, intersezione: s7intersezione, somma: s7somma, diretta: s7diretta, grassmann: s7grassmann, interna: s7interna, complementi: s7complementi, 'm-spazi': s7mspazi },
    8: { definizione: s8definizione, 'con-meg': s8meg, trasposta: s8trasposta, laplace: s8laplace, invertibilita: s8invertibilita, binet: s8binet, inversa: s8inversa, cramer: s8cramer, kronecker: s8kronecker, potenze: s8potenze, volumi: s8volumi },
    9: { problema: s9problema, autovettori: s9autovettori, matrici: s9matrici, polinomio: s9polinomio, calcolo: s9calcolo, molteplicita: s9molteplicita, criterio: s9criterio, base: s9base, 'potenze-diag': s9potenze, traccia: s9traccia, invarianza: s9invarianza, esponenziale: s9esponenziale }
  });
})();
