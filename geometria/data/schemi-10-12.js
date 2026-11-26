/* ============================================================
   Schemi della prima lettura per le Sezioni 10-12.
   Stessi strumenti di data/schemi.js: uno schema per paragrafo,
   fermo, in SVG; le coordinate degli esempi sono calcolate qui.
   Nei testi degli SVG il segno «minore» si scrive &lt;.
   ============================================================ */
(function () {
  'use strict';

  const { n, svg, T, L, F, P, O, E, B, pan, matrice } = window.SCHEMA_H;
  const CX = [72, 220, 368];

  /** tre carte affiancate: titolo in alto, disegno, righe di commento in fondo */
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

  /** spezzata per i punti dati (già in coordinate del disegno) */
  const linea = (pts, c, w, tratto, chiusa) =>
    '<' + (chiusa ? 'polygon' : 'polyline') + ' points="' + pts.map(p => n(p[0]) + ',' + n(p[1])).join(' ') +
    '" fill="' + (chiusa ? 'currentColor' : 'none') + '"' + (chiusa ? ' fill-opacity=".12"' : '') +
    ' stroke="currentColor" stroke-width="' + (w || 1.8) + '"' + (tratto ? ' stroke-dasharray="5 4"' : '') +
    (c ? ' class="' + c + '"' : '') + ' stroke-linejoin="round"/>';

  /** campiona una curva parametrica t -> [x, y] del piano e la porta nel disegno con q */
  const curva = (q, f, t0, t1, N) => {
    const v = [];
    for (let i = 0; i <= N; i++) v.push(q(...f(t0 + (t1 - t0) * i / N)));
    return v;
  };

  /** angolo retto in o, fra le direzioni unitarie (disegno) d1 e d2 */
  const retto = (o, d1, d2, s, c) => {
    const a = [o[0] + s * d1[0], o[1] + s * d1[1]], b = [o[0] + s * (d1[0] + d2[0]), o[1] + s * (d1[1] + d2[1])], e = [o[0] + s * d2[0], o[1] + s * d2[1]];
    return linea([a, b, e], c || 's-mut', 1.4);
  };
  const dir = (p, q) => { const dx = q[0] - p[0], dy = q[1] - p[1], m = Math.hypot(dx, dy); return [dx / m, dy / m]; };

  /** arco orientato di raggio r attorno a o, dagli angoli a1 ad a2 (radianti, verso matematico) */
  function arco(o, r, a1, a2, c) {
    const pts = [];
    for (let i = 0; i <= 24; i++) { const a = a1 + (a2 - a1) * i / 24; pts.push([o[0] + r * Math.cos(a), o[1] - r * Math.sin(a)]); }
    const u = pts[pts.length - 3], v = pts[pts.length - 1];
    return linea(pts.slice(0, -1), c, 1.6) + F(u[0], u[1], v[0], v[1], c, 1.6);
  }

  /** proiezione obliqua dello spazio: x a destra, z in alto, y in diagonale */
  const spazio = (cx, cy, u) => (x, y, z) => [cx + u * (x - .55 * y), cy - u * (z - .35 * y)];

  /* ---------- Sezione 10 ---------- */

  function s10bilineari() {
    return svg(440, 140, 'Una forma bilineare prende due vettori e restituisce un numero',
      catena(8, [{ t: ['(v, w)', 'due vettori'] }, { t: ['L', 'forma bilineare'], c: 's-blu' }, { t: ['un numero', 'L(v, w) ∈ ℝ'], c: 's-ver' }], 58) +
      T(120, 96, 'L(2v, w) = 2L(v, w)', 's-p') + T(320, 96, 'L(v, 2w) = 2L(v, w)', 's-p') +
      T(220, 120, 'ma L(2v, 2w) = 4L(v, w): lineare un argomento alla volta', 's-p s-ros'));
  }

  function s10scalare() {
    const L4 = (x, y) => x[0] * y[0] + x[1] * y[1] + 3 * (x[0] * y[1] + x[1] * y[0]);
    return svg(440, 160, 'Le tre condizioni di un prodotto scalare e un controesempio',
      catena(6, [{ t: ['bilineare', 'in ogni argomento'] }, { t: ['simmetrica', 'L(u, v) = L(v, u)'] }, { t: ['definita positiva', 'L(v, v) > 0, v ≠ 0'] }], 58) +
      T(220, 90, 'tutte e tre ⇒ prodotto scalare', 's-g s-ver') +
      T(220, 122, 'x₁y₁ + x₂y₂ + 3(x₁y₂ + x₂y₁) in (1, −1) vale ' + L4([1, -1], [1, -1]).toString().replace('-', '−'), 's-p') +
      T(220, 142, '✗ non è definita positiva: non è un prodotto scalare', 's-p s-ros'));
  }

  function s10norma() {
    const q = pan(36, 132, 30), o = q(0, 0), u = q(3.6, .7), v = q(1.1, 3.1);
    const q2 = pan(300, 132, 30), o2 = q2(0, 0), a = [2.4, 1.4], b = [-1.4 * .85, 2.4 * .85], A2 = q2(...a), B2 = q2(...b);
    return svg(440, 176, 'La norma è una lunghezza, la distanza la norma di una differenza; vettori ortogonali',
      T(110, 16, 'Lunghezza e distanza', 's-g') + T(320, 16, 'Ortogonalità', 's-g') +
      F(o[0], o[1], u[0], u[1], 's-blu') + F(o[0], o[1], v[0], v[1], 's-ver') + L(u[0], u[1], v[0], v[1], 's-ros', 2, true) +
      T(u[0] + 4, u[1] + 16, 'u', 's-g s-blu') + T(v[0] - 12, v[1], 'v', 's-g s-ver') +
      T(v[0] - 38, (o[1] + v[1]) / 2 + 6, '‖v‖', 's-p s-ver') +
      T((u[0] + v[0]) / 2 + 8, (u[1] + v[1]) / 2 - 4, '‖v − u‖', 's-p s-ros', 'start') +
      F(o2[0], o2[1], A2[0], A2[1], 's-blu') + F(o2[0], o2[1], B2[0], B2[1], 's-ver') +
      retto(o2, dir(o2, A2), dir(o2, B2), 11) +
      T(A2[0] + 6, A2[1] + 4, 'v', 's-g s-blu', 'start') + T(B2[0] - 8, B2[1] + 4, 'w', 's-g s-ver', 'end') +
      T(330, 160, '⟨v, w⟩ = 0  ⇔  v ⊥ w', 's-p s-g') + T(110, 160, '‖v‖ = √⟨v, v⟩', 's-p s-g'));
  }

  function s10pitagora() {
    const q = pan(24, 140, 24), A = q(0, 0), Bp = q(6, 0), C = q(6, 4);
    return svg(440, 168, 'Il teorema di Pitagora come caso particolare di Carnot',
      F(A[0], A[1], Bp[0], Bp[1], 's-blu') + F(Bp[0], Bp[1], C[0], C[1], 's-ver') + F(A[0], A[1], C[0], C[1], 's-vio', 2.6) +
      retto(Bp, [-1, 0], [0, -1], 11) +
      T((A[0] + Bp[0]) / 2, A[1] + 18, 'a = ‖u‖', 's-p s-blu') + T(Bp[0] + 8, (Bp[1] + C[1]) / 2 + 4, 'b = ‖v‖', 's-p s-ver', 'start') +
      T((A[0] + C[0]) / 2 - 10, (A[1] + C[1]) / 2 - 10, 'c = ‖u + v‖', 's-p s-vio', 'end') +
      T(250, 40, 'Carnot, sempre:', 's-p s-mut', 'start') +
      T(250, 62, '‖u+v‖² = ‖u‖² + ‖v‖² + 2⟨u, v⟩', 's-p s-g', 'start') +
      T(250, 100, 'Se u ⊥ v, ⟨u, v⟩ = 0:', 's-p s-mut', 'start') +
      T(250, 122, 'c² = a² + b²', 's-g s-ver', 'start') +
      T(250, 150, 'è Pitagora', 's-p', 'start'));
  }

  function s10proiezione() {
    const q = pan(30, 156, 40), o = q(0, 0), w = q(1, 1), v = q(3, 2), v0 = q(2.5, 2.5), fine = q(3.3, 3.3), ini = q(-.4, -.4);
    return svg(440, 176, 'La proiezione ortogonale di (3,2) sulla retta y = x',
      L(ini[0], ini[1], fine[0], fine[1], 's-gri', 1.6) + T(fine[0] - 2, fine[1] - 6, 'W', 's-p s-mut') +
      F(o[0], o[1], v[0], v[1], 's-mut') + F(o[0], o[1], v0[0], v0[1], 's-blu', 3) + F(o[0], o[1], w[0], w[1], 's-ver') +
      L(v[0], v[1], v0[0], v0[1], 's-ros', 2, true) + retto(v0, dir(v0, o), dir(v0, v), 9) +
      T(v[0] + 8, v[1] + 4, 'v', 's-g', 'start') + T(v0[0] - 10, v0[1] - 4, 'v₀', 's-g s-blu', 'end') + T(w[0] + 8, w[1] + 10, 'w', 's-g s-ver', 'start') +
      T(214, 36, 'v = (3, 2),  w = (1, 1)', 's-p', 'start') +
      T(214, 64, 't₀ = ⟨v, w⟩ / ‖w‖² = 5/2', 's-p s-g', 'start') +
      T(214, 92, 'v₀ = t₀ w = (5/2, 5/2)', 's-p s-g s-blu', 'start') +
      T(214, 120, 'v − v₀ = (1/2, −1/2)', 's-p s-ros', 'start') +
      T(214, 142, 'è ortogonale a w ✓', 's-p', 'start'));
  }

  function s10csb() {
    const q = pan(30, 132, 34), o = q(0, 0), v = q(3, 2.4), v0 = q(3, 0), w = q(1.5, 0), fine = q(4.6, 0);
    return svg(440, 168, 'La proiezione non è più lunga del vettore: da qui Cauchy-Schwarz',
      L(o[0] - 10, o[1], fine[0], fine[1], 's-gri', 1.6) +
      F(o[0], o[1], v[0], v[1], 's-mut') + F(o[0], o[1], v0[0], v0[1], 's-blu', 3) + F(o[0], o[1], w[0], w[1], 's-ver') +
      L(v[0], v[1], v0[0], v0[1], 's-ros', 2, true) + retto(v0, [-1, 0], [0, -1], 9) +
      T(v[0] - 8, v[1] - 6, 'v', 's-g', 'end') + T(v0[0] + 4, v0[1] + 18, 'v₀', 's-g s-blu') + T(w[0], w[1] + 18, 'w', 's-g s-ver') +
      T(v[0] + 8, (v[1] + v0[1]) / 2 + 4, 'v₁ ⊥ w', 's-p s-ros', 'start') +
      T(236, 34, 'Pitagora: ‖v‖² = ‖v₀‖² + ‖v₁‖²', 's-p', 'start') +
      T(236, 60, 'quindi ‖v₀‖ ≤ ‖v‖', 's-p s-g', 'start') +
      T(236, 86, '‖v₀‖ = |⟨v, w⟩| / ‖w‖', 's-p', 'start') +
      T(236, 114, '|⟨v, w⟩| ≤ ‖v‖ ‖w‖', 's-g s-ver', 'start') +
      T(236, 140, '= solo se v₁ = 0, cioè', 's-p', 'start') + T(236, 156, 'v sulla retta di w', 's-p', 'start'));
  }

  function s10basi() {
    const s1 = spazio(70, 120, 34), s2 = spazio(300, 120, 52), o1 = s1(0, 0, 0), o2 = s2(0, 0, 0);
    const v = [s1(2, 0, 0), s1(0, 1.7, 0), s1(0, 0, 1.5)], u = [s2(1, 0, 0), s2(0, 1, 0), s2(0, 0, 1)];
    const cl = ['s-blu', 's-ver', 's-ara'];
    const et = (p, s, c, dx, dy) => T(p[0] + dx, p[1] + dy, s, 's-g ' + c);
    return svg(440, 196, 'Una base ortogonale e la base ortonormale che si ottiene normalizzando',
      T(100, 16, 'Ortogonale', 's-g') + T(320, 16, 'Ortonormale', 's-g') +
      v.map((p, i) => F(o1[0], o1[1], p[0], p[1], cl[i])).join('') +
      et(v[0], 'v₁', 's-blu', 10, 4) + et(v[1], 'v₂', 's-ver', -10, 12) + et(v[2], 'v₃', 's-ara', -12, 4) +
      F(170, 100, 236, 100, 's-mut', 2) + T(203, 90, '÷ ‖vᵢ‖', 's-p s-mut') +
      u.map((p, i) => F(o2[0], o2[1], p[0], p[1], cl[i])).join('') +
      et(u[0], 'u₁', 's-blu', 10, 4) + et(u[1], 'u₂', 's-ver', -10, 12) + et(u[2], 'u₃', 's-ara', -12, 4) +
      T(220, 168, 'a due a due ⊥ e non nulli ⇒ indipendenti', 's-p') +
      T(220, 186, 'n di loro in dimensione n ⇒ una base', 's-p s-g'));
  }

  function s10fourier() {
    const q = pan(84, 128, 26), o = q(0, 0), v1 = q(1, 1), v2 = q(1, -1), v = q(2, 4), a = q(3, 3);
    // griglia generata da v1 = (1,1) e v2 = (1,-1): rette parallele a v2 per i·v1 e parallele a v1 per j·v2
    let gr = '';
    for (let i = -1; i <= 3; i++) gr += L(...q(i - 1.4, i + 1.4), ...q(i + 1.4, i - 1.4), 's-gri', 1);
    for (let j = -1; j <= 1; j++) gr += L(...q(j - .6, -j - .6), ...q(j + 3.4, -j + 3.4), 's-gri', 1);
    return svg(440, 190, 'Coordinate di (2,4) nella base ortogonale (1,1), (1,−1) con i coefficienti di Fourier',
      gr + L(o[0], o[1], a[0], a[1], 's-blu', 2, true) + L(a[0], a[1], v[0], v[1], 's-ver', 2, true) +
      F(o[0], o[1], v1[0], v1[1], 's-blu') + F(o[0], o[1], v2[0], v2[1], 's-ver') + F(o[0], o[1], v[0], v[1], 's-g', 2.6) +
      T(v1[0] + 6, v1[1] + 14, 'v₁', 's-g s-blu', 'start') + T(v2[0] + 6, v2[1] + 4, 'v₂', 's-g s-ver', 'start') + T(v[0] - 8, v[1] + 2, 'v', 's-g', 'end') +
      T(206, 34, 'c₁ = ⟨v, v₁⟩ / ‖v₁‖² = 6/2 = 3', 's-p', 'start') +
      T(206, 60, 'c₂ = ⟨v, v₂⟩ / ‖v₂‖² = −2/2 = −1', 's-p', 'start') +
      T(206, 92, 'v = 3v₁ − v₂ = (2, 4) ✓', 's-p s-g s-ver', 'start') +
      T(206, 124, 'nessun sistema da risolvere:', 's-p', 'start') + T(206, 142, 'basta un prodotto scalare', 's-p', 'start'));
  }

  function s10gs() {
    const q = pan(50, 120, 84), o = q(0, 0), v1 = q(1, 1), v2 = q(1, 0), pr = q(.5, .5), w2 = q(.5, -.5);
    return svg(440, 178, 'Gram-Schmidt: al secondo vettore si toglie la proiezione sul primo',
      F(o[0], o[1], v1[0], v1[1], 's-blu') + F(o[0], o[1], v2[0], v2[1], 's-mut') +
      L(v2[0], v2[1], pr[0], pr[1], 's-ros', 1.8, true) + P(pr[0], pr[1], 4, 's-ros') +
      F(o[0], o[1], w2[0], w2[1], 's-ver', 3) + retto(o, dir(o, v1), dir(o, w2), 10) +
      T(v1[0] + 6, v1[1], 'w₁ = v₁', 's-g s-blu', 'start') + T(v2[0] + 6, v2[1] + 4, 'v₂', 's-g s-mut', 'start') +
      T(pr[0] - 6, pr[1] - 6, 'proiezione', 's-p s-ros', 'end') + T(w2[0] + 8, w2[1] + 4, 'w₂', 's-g s-ver', 'start') +
      T(228, 40, 'v₁ = (1, 1),  v₂ = (1, 0)', 's-p', 'start') +
      T(228, 68, 'w₂ = v₂ − (⟨v₂, w₁⟩/‖w₁‖²) w₁', 's-p s-g', 'start') +
      T(228, 92, '   = (1, 0) − ½(1, 1) = (½, −½)', 's-p', 'start') +
      T(228, 122, '⟨w₁, w₂⟩ = ½ − ½ = 0 ✓', 's-p s-ver', 'start') +
      T(228, 152, 'poi si normalizza, se serve', 's-p s-mut', 'start'));
  }

  function s10ortogonali() {
    const q = pan(300, 98, 64), o = q(0, 0), c1 = q(.6, .8), c2 = q(-.8, .6), cerchio = curva(q, t => [Math.cos(t), Math.sin(t)], 0, 2 * Math.PI, 60);
    return svg(440, 186, 'Le colonne di una matrice ortogonale sono una base ortonormale',
      T(28, 63, 'Q =', 's-g', 'end') + matrice(56, 54, [['3/5', '−4/5'], ['4/5', '3/5']], 50, 30, ['s-blu', 's-ver']) +
      T(84, 132, 'colonne: norma 1', 's-p') + T(84, 150, 'e ortogonali fra loro', 's-p') +
      linea(cerchio, 's-gri', 1.2, true) + F(o[0], o[1], c1[0], c1[1], 's-blu') + F(o[0], o[1], c2[0], c2[1], 's-ver') +
      retto(o, dir(o, c1), dir(o, c2), 10) +
      T(c1[0] + 6, c1[1], '(3/5, 4/5)', 's-p s-blu', 'start') + T(c2[0] - 6, c2[1], '(−4/5, 3/5)', 's-p s-ver', 'end') +
      T(220, 178, 'QᵀQ = I, quindi Q⁻¹ = Qᵀ', 's-g'));
  }

  function s10spettrale() {
    const q = pan(206, 92, 22), o = q(0, 0);
    const im = curva(q, t => [2 * Math.cos(t) + Math.sin(t), Math.cos(t) + 2 * Math.sin(t)], 0, 2 * Math.PI, 80);
    const ci = curva(q, t => [Math.cos(t), Math.sin(t)], 0, 2 * Math.PI, 50);
    const a1 = q(3 / Math.SQRT2, 3 / Math.SQRT2), a2 = q(1 / Math.SQRT2, -1 / Math.SQRT2);
    return svg(440, 180, 'Una matrice simmetrica deforma il cerchio in un\'ellisse con gli assi lungo autovettori ortogonali',
      T(30, 54, 'A =', 's-g', 'end') + matrice(58, 46, [['2', '1'], ['1', '2']], 30, 28) + T(73, 112, 'A = Aᵀ', 's-p s-g') +
      linea(ci, 's-gri', 1.2, true) + linea(im, 's-mut', 1.8) +
      F(o[0], o[1], a1[0], a1[1], 's-blu', 2.6) + F(o[0], o[1], a2[0], a2[1], 's-ver', 2.6) +
      retto(o, dir(o, a1), dir(o, a2), 9) +
      T(310, 44, 'λ = 3 lungo (1, 1)', 's-p s-blu', 'start') +
      T(310, 70, 'λ = 1 lungo (1, −1)', 's-p s-ver', 'start') +
      T(310, 104, 'autovettori ⊥', 's-p s-g', 'start') + T(310, 122, 'base ortonormale', 's-p', 'start') +
      T(220, 172, 'simmetrica ⇔ ortogonalmente diagonalizzabile', 's-p s-g'));
  }

  function s10isometrie() {
    const fig = [[.4, .3], [2.6, .3], [.4, 1.9]];
    const th = 70 * Math.PI / 180, rot = p => [p[0] * Math.cos(th) - p[1] * Math.sin(th), p[0] * Math.sin(th) + p[1] * Math.cos(th)];
    const q1 = pan(96, 118, 30), q2 = pan(330, 118, 30);
    const fig1 = fig.map(p => q1(...p)), fig1r = fig.map(p => q1(...rot(p))), fig2 = fig.map(p => q2(...p)), fig2r = fig.map(p => q2(-p[0], p[1]));
    const assi = (q) => L(...q(-3, 0), ...q(3, 0), 's-gri', 1) + L(...q(0, -.6), ...q(0, 2.8), 's-gri', 1);
    return svg(440, 196, 'Rotazione e riflessione conservano le distanze; i loro determinanti hanno segni opposti',
      T(110, 16, 'Rotazione', 's-g') + T(330, 16, 'Riflessione', 's-g') +
      assi(q1) + assi(q2) +
      linea(fig1, 's-mut', 1.6, false, true) + linea(fig1r, 's-blu', 1.8, false, true) +
      linea(fig2, 's-mut', 1.6, false, true) + linea(fig2r, 's-ver', 1.8, false, true) +
      T(110, 152, 'det = 1', 's-p s-g s-blu') + T(330, 152, 'det = −1', 's-p s-g s-ver') +
      T(220, 176, 'stesse lunghezze e stessi angoli: QᵀQ = I', 's-p') +
      T(220, 192, 'in una base ortonormale', 's-p s-mut'));
  }

  function s10orientazione() {
    const pannello = (cx, rif, titolo, classe, verso) => {
      const q = pan(cx, 112, 30), o = q(0, 0), u = [2, .5], v = [.7, 2];
      const im = p => rif ? [-p[0], p[1]] : [p[0] * Math.cos(1.9) - p[1] * Math.sin(1.9), p[0] * Math.sin(1.9) + p[1] * Math.cos(1.9)];
      const U = q(...u), V = q(...v), LU = q(...im(u)), LV = q(...im(v));
      const ang = p => Math.atan2(p[1], p[0]);
      return T(cx, 16, titolo, 's-g ' + classe) +
        F(o[0], o[1], U[0], U[1], 's-mut') + F(o[0], o[1], V[0], V[1], 's-mut') + arco(o, 34, ang(u), ang(v), 's-mut') +
        T(U[0] + 4, U[1] + 4, 'u', 's-p', 'start') + T(V[0] + 4, V[1], 'v', 's-p', 'start') +
        F(o[0], o[1], LU[0], LU[1], classe) + F(o[0], o[1], LV[0], LV[1], classe) + arco(o, 44, ang(im(u)), ang(im(v)) + (rif ? 0 : 0), classe) +
        T(LU[0] - 4, LU[1] - 4, 'L(u)', 's-p ' + classe, 'end') + T(LV[0] - 4, LV[1] + 14, 'L(v)', 's-p ' + classe, 'end') +
        T(cx, 160, verso, 's-p');
    };
    return svg(440, 186, 'La rotazione conserva il verso da u a v, la riflessione lo inverte',
      pannello(130, false, 'Rotazione · det = 1', 's-blu', 'il verso da u a v resta') +
      pannello(340, true, 'Riflessione · det = −1', 's-ros', 'il verso si inverte') +
      T(220, 180, 'stessa orientazione ⇔ det > 0', 's-p s-g'));
  }

  function s10complemento() {
    const s = spazio(150, 118, 40), o = s(0, 0, 0);
    const pi = [s(-1.6, -1.4, 0), s(1.8, -1.4, 0), s(1.8, 1.6, 0), s(-1.6, 1.6, 0)];
    const top = s(0, 0, 1.9), bot = s(0, 0, -1.1);
    return svg(440, 200, 'Un piano W e la retta ortogonale W⊥: insieme danno tutto lo spazio',
      linea(pi, 's-blu', 1.6, false, true) + T(pi[2][0] - 8, pi[2][1] + 16, 'W', 's-g s-blu', 'end') +
      L(o[0], o[1], bot[0], bot[1], 's-ver', 2, true) + F(o[0], o[1], top[0], top[1], 's-ver', 2.6) +
      T(top[0] + 8, top[1] + 6, 'W⊥', 's-g s-ver', 'start') + P(o[0], o[1], 3.5, 's-mut') +
      retto(o, dir(o, s(1, 0, 0)), dir(o, s(0, 0, 1)), 10) +
      T(276, 46, 'V = W ⊕ W⊥', 's-g', 'start') +
      T(276, 74, 'dim W⊥ = 3 − 2 = 1', 's-p', 'start') +
      T(276, 110, 'W: A x = 0', 's-p s-mut', 'start') + T(276, 128, 'W⊥ = Row(A)', 's-p s-g', 'start') +
      T(276, 162, 'W = span{generatori}', 's-p s-mut', 'start') + T(276, 180, 'W⊥ = ker(righe)', 's-p s-g', 'start'));
  }

  function s10vettoriale() {
    // qui l'asse y va verso il fondo, in alto a destra, così il parallelogramma si vede bene
    const s = (x, y, z) => [86 + 40 * (x + .6 * y), 150 - 40 * (z + .35 * y)];
    const o = s(0, 0, 0), u = s(2.2, 0, 0), v = s(.5, 1.6, 0), uv = s(2.7, 1.6, 0), w = s(0, 0, 2.6);
    return svg(440, 196, 'Il prodotto vettoriale è ortogonale ai due vettori e lungo quanto l\'area del parallelogramma',
      linea([o, u, uv, v], 's-blu', 1.2, false, true) +
      F(o[0], o[1], u[0], u[1], 's-blu') + F(o[0], o[1], v[0], v[1], 's-ara') + F(o[0], o[1], w[0], w[1], 's-ver', 3) +
      T(u[0] + 6, u[1] + 6, 'u', 's-g s-blu', 'start') + T(v[0] + 4, v[1] - 8, 'v', 's-g s-ara', 'start') + T(w[0] + 8, w[1] + 4, 'u × v', 's-g s-ver', 'start') +
      T((o[0] + uv[0]) / 2 + 10, (o[1] + uv[1]) / 2 + 2, 'area', 's-p s-blu') +
      T(266, 48, '‖u × v‖ = area', 's-p s-g', 'start') +
      T(266, 80, 'u × v ⊥ u  e  u × v ⊥ v', 's-p', 'start') +
      T(266, 112, 'u, v, u × v: mano destra', 's-p', 'start') +
      T(266, 150, '(1,0,0) × (0,1,0) = (0,0,1)', 's-p s-mut', 'start'));
  }

  /* ---------- Sezione 11 ---------- */

  function s11definizione() {
    return svg(440, 170, 'Dalla forma quadratica alla matrice simmetrica: quadrati in diagonale, metà dei termini misti fuori',
      T(100, 56, '3x² − 4xy + y²', 's-g') + F(176, 52, 236, 52, 's-mut', 2) +
      T(268, 59, 'A =', 's-g', 'end') + matrice(300, 48, [['3', '−2'], ['−2', '1']], 44, 30) +
      O(300, 43, 15, 's-blu', 1.6) + O(344, 73, 15, 's-blu', 1.6) + O(344, 43, 17, 's-ros', 1.6) + O(300, 73, 17, 's-ros', 1.6) +
      T(100, 100, 'in diagonale: i quadrati, 3 e 1', 's-p s-blu') +
      T(100, 120, 'fuori: la metà di −4, due volte', 's-p s-ros') +
      T(320, 128, 'Q(x) = ⟨Ax, x⟩', 's-p s-g') +
      T(220, 160, 'la matrice simmetrica è unica', 's-p s-mut'));
  }

  function s11segno() {
    const assi = cx => L(cx - 52, 92, cx + 52, 92, 's-gri', 1) + L(cx, 42, cx, 142, 's-gri', 1);
    return tre(196, 'Forma definita positiva, semidefinita, indefinita: dove è positiva, nulla, negativa', [
      { t: 'Definita', c: 's-blu', d: cx => assi(cx) + E(cx, 92, 18, 12, 's-blu', .08) + E(cx, 92, 34, 23, 's-blu', .05) + E(cx, 92, 48, 33, 's-blu', .03) + P(cx, 92, 3.5, 's-ros') + T(cx + 26, 62, '+', 's-g s-blu'),
        s: ['x² + 2y²', 'zero solo in 0'] },
      { t: 'Semidefinita', c: 's-ara', d: cx => assi(cx) + [-30, -15, 15, 30].map(k => L(cx - 40 + k, 52 + k * 0, cx + 40 + k, 132, 's-ara', 1.2)).join('') + L(cx - 40, 52, cx + 40, 132, 's-ros', 2.4) + T(cx + 36, 70, '+', 's-g s-ara') + T(cx - 36, 124, '+', 's-g s-ara'),
        s: ['(x + y)²', 'zero su una retta'] },
      { t: 'Indefinita', c: 's-ros', d: cx => assi(cx) + L(cx - 46, 46, cx + 46, 138, 's-ros', 2) + L(cx - 46, 138, cx + 46, 46, 's-ros', 2) + T(cx + 38, 97, '+', 's-g s-ver') + T(cx - 38, 97, '+', 's-g s-ver') + T(cx, 58, '−', 's-g s-ros') + T(cx, 138, '−', 's-g s-ros'),
        s: ['x² − y²', 'tutti e due i segni'] }
    ]);
  }

  function s11autovalori() {
    return svg(440, 188, 'Nella base ortonormale di autovettori la forma è una somma di quadrati con gli autovalori',
      catena(6, [{ t: ['Q(x) = ⟨Ax, x⟩'] }, { t: ['x = S y', 'S ortogonale'] }, { t: ['λ₁y₁² + λ₂y₂² + …'], c: 's-ver' }], 50) +
      T(24, 90, 'segni degli autovalori', 's-p s-mut', 'start') + T(416, 90, 'la forma è', 's-p s-mut', 'end') +
      T(24, 114, 'tutti > 0', 's-p s-g', 'start') + T(416, 114, 'definita positiva', 's-p s-blu', 'end') +
      T(24, 136, 'tutti ≥ 0, almeno uno = 0', 's-p s-g', 'start') + T(416, 136, 'semidefinita positiva', 's-p s-ara', 'end') +
      T(24, 158, 'uno > 0 e uno &lt; 0', 's-p s-g', 'start') + T(416, 158, 'indefinita', 's-p s-ros', 'end') +
      T(220, 182, '2×2: det > 0 definita, det &lt; 0 indefinita', 's-p'));
  }

  function s11sylvester() {
    const M = [['−1', '½', '0'], ['½', '−1', '1'], ['0', '1', '−2']], x = 64, y = 60, px = 40, py = 30;
    const quadro = (k, c) => '<rect x="' + (x - 20) + '" y="' + (y - 21) + '" width="' + (k * px) + '" height="' + (k * py) + '" rx="6" fill="none" stroke="currentColor" stroke-width="1.8" class="' + c + '"/>';
    return svg(440, 172, 'I minori di testa del criterio di Sylvester sull\'esempio Q2',
      matrice(x, y, M, px, py) + quadro(1, 's-blu') + quadro(2, 's-ver') + quadro(3, 's-ara') +
      T(236, 40, 'Δ₁ = −1', 's-p s-g s-blu', 'start') + T(236, 64, 'Δ₂ = 1 − ¼ = ¾', 's-p s-g s-ver', 'start') + T(236, 88, 'Δ₃ = det A = −½', 's-p s-g s-ara', 'start') +
      T(236, 118, '−, +, −  ⇒  definita negativa', 's-p s-g', 'start') +
      T(220, 150, 'tutti positivi ⇒ definita positiva', 's-p') +
      T(220, 166, 'un Δₖ = 0 ⇒ solo «non definita»', 's-p s-ros'));
  }

  /* ---------- Sezione 12 ---------- */

  function s12definizione() {
    const ax = 120, ay = 96;
    return svg(440, 196, 'Le coniche come sezioni di un doppio cono',
      L(ax - 70, ay - 80, ax + 70, ay + 80, 's-mut', 1.6) + L(ax + 70, ay - 80, ax - 70, ay + 80, 's-mut', 1.6) +
      L(ax - 54, ay - 58, ax + 54, ay - 46, 's-blu', 2.4) + L(ax + 4, ay + 84, ax + 60, ay + 20, 's-ara', 2.4) + L(ax - 34, ay - 92, ax - 18, ay + 92, 's-ros', 2.4) +
      T(ax + 60, ay - 54, 'ellisse', 's-p s-g s-blu', 'start') + T(ax + 62, ay + 26, 'parabola', 's-p s-g s-ara', 'start') + T(ax - 40, ay + 92, 'iperbole', 's-p s-g s-ros', 'end') +
      T(268, 50, '⟨x, Ax⟩ + 2⟨x, b⟩ + c = 0', 's-p s-g', 'start') +
      T(268, 76, 'A simmetrica, A ≠ 0', 's-p', 'start') +
      T(268, 108, 'in ℝ²: coniche', 's-p', 'start') + T(268, 126, 'in ℝ³: superfici quadriche', 's-p', 'start') +
      T(268, 160, 'b = metà dei coefficienti', 's-p s-mut', 'start') + T(268, 176, 'lineari', 's-p s-mut', 'start'));
  }

  function ellisse(q, c, a, b, th) {
    return curva(q, t => [c[0] + a * Math.cos(t) * Math.cos(th) - b * Math.sin(t) * Math.sin(th), c[1] + a * Math.cos(t) * Math.sin(th) + b * Math.sin(t) * Math.cos(th)], 0, 2 * Math.PI, 60);
  }

  function s12classificazione() {
    const assi = q => L(...q(-1.9, 0), ...q(1.9, 0), 's-gri', 1) + L(...q(0, -1.6), ...q(0, 1.6), 's-gri', 1);
    return tre(190, 'Classificazione metrica e affine di un\'ellisse', [
      { t: 'Di partenza', d: cx => { const q = pan(cx, 90, 26); return assi(q) + linea(ellisse(q, [.6, .3], 1.4, .7, .6), 's-mut') + P(...q(.6, .3), 3, 's-mut'); }, s: ['spostata e ruotata'] },
      { t: 'Metrica', c: 's-blu', d: cx => { const q = pan(cx, 90, 26); return assi(q) + linea(ellisse(q, [0, 0], 1.4, .7, 0), 's-blu', 2.2); }, s: ['x²/a² + y²/b² = 1', 'stesse misure'] },
      { t: 'Affine', c: 's-ver', d: cx => { const q = pan(cx, 90, 26); return assi(q) + linea(ellisse(q, [0, 0], 1, 1, 0), 's-ver', 2.2); }, s: ['x² + y² = 1', 'solo il tipo'] }
    ]) .replace('</svg>', F(112, 90, 172, 90, 's-mut', 1.6) + F(262, 90, 322, 90, 's-mut', 1.6) + '</svg>');
  }

  function s12centro() {
    const q = pan(110, 96, 22), c = [2, -1], el = ellisse(q, c, Math.sqrt(5), Math.sqrt(5), 0), o = q(0, 0), x0 = q(...c);
    return svg(440, 190, 'Il centro risolve A x0 = −b: spostando lì l\'origine sparisce la parte lineare',
      L(...q(-2.2, 0), ...q(4.8, 0), 's-gri', 1) + L(...q(0, -3.4), ...q(0, 2.6), 's-gri', 1) +
      linea(el, 's-blu', 2) + P(x0[0], x0[1], 4.5, 's-ros') + P(o[0], o[1], 3.5, 's-mut') + F(x0[0] - 4, x0[1] - 3, o[0] + 5, o[1] + 3, 's-ros', 1.8) +
      T(x0[0] + 8, x0[1] + 16, 'x₀ = (2, −1)', 's-p s-ros', 'start') +
      T(250, 36, 'x² + y² − 4x + 2y = 0', 's-p s-g', 'start') +
      T(250, 60, 'b = (−2, 1),  A x₀ = −b', 's-p', 'start') +
      T(250, 92, 'con y = x − x₀:', 's-p s-mut', 'start') +
      T(250, 112, '‖y‖² − 5 = 0', 's-p s-g s-blu', 'start') +
      T(250, 144, 'c̃ = c + ⟨x₀, b⟩ = −5', 's-p', 'start') +
      T(250, 168, 'simmetrica rispetto a x₀', 's-p s-mut', 'start'));
  }

  function s12canonica() {
    const assi = q => L(...q(-1.9, 0), ...q(1.9, 0), 's-gri', 1) + L(...q(0, -1.6), ...q(0, 1.6), 's-gri', 1);
    return tre(196, 'Prima si trasla nel centro, poi si ruota negli autovettori', [
      { t: 'Partenza', d: cx => { const q = pan(cx, 84, 24); return assi(q) + linea(ellisse(q, [.7, .4], 1.3, .6, .7), 's-mut'); }, s: ['parte lineare', 'e termini misti'] },
      { t: 'Traslazione', c: 's-blu', d: cx => { const q = pan(cx, 84, 24); return assi(q) + linea(ellisse(q, [0, 0], 1.3, .6, .7), 's-blu', 2); }, s: ['y = x − x₀', 'niente parte lineare'] },
      { t: 'Rotazione', c: 's-ver', d: cx => { const q = pan(cx, 84, 24); return assi(q) + linea(ellisse(q, [0, 0], 1.3, .6, 0), 's-ver', 2); }, s: ['y = Q z', 'niente termini misti'] }
    ]).replace('</svg>', T(220, 150, 'λ₁z₁² + λ₂z₂² + c̃ = 0', 's-g') + F(112, 84, 172, 84, 's-mut', 1.6) + F(262, 84, 322, 84, 's-mut', 1.6) + '</svg>');
  }

  function s12coniche() {
    const ip = (q, s) => curva(q, t => [s * Math.cosh(t), Math.sinh(t)], -1.35, 1.35, 30);
    return tre(196, 'Il segno di det A dice la famiglia della conica', [
      { t: 'det A > 0', c: 's-blu', d: cx => { const q = pan(cx, 84, 26); return linea(ellisse(q, [0, 0], 1.6, .9, 0), 's-blu', 2.2); }, s: ['ellisse', '(o un punto, o vuota)'] },
      { t: 'det A &lt; 0', c: 's-ros', d: cx => { const q = pan(cx, 84, 22); return linea(ip(q, 1), 's-ros', 2.2) + linea(ip(q, -1), 's-ros', 2.2) + L(...q(-2.2, -2.2), ...q(2.2, 2.2), 's-gri', 1, true) + L(...q(-2.2, 2.2), ...q(2.2, -2.2), 's-gri', 1, true); }, s: ['iperbole', '(due rette se c̃ = 0)'] },
      { t: 'det A = 0', c: 's-ara', d: cx => { const q = pan(cx, 120, 24); return linea(curva(q, t => [t, .6 * t * t], -2, 2, 30), 's-ara', 2.2); }, s: ['parabola, senza centro', '(con centro: rette ∥)'] }
    ]);
  }

  function s12r3() {
    return tre(222, 'Ellissoide, iperboloide a una falda e a due falde', [
      { t: 'Ellissoide', c: 's-blu', d: cx => E(cx, 96, 50, 66, 's-blu', .08) + '<ellipse cx="' + cx + '" cy="96" rx="50" ry="14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4" class="s-blu"/>', s: ['+, +, +', 'c̃ di segno opposto'] },
      { t: 'Una falda', c: 's-ver', d: cx => { const q = pan(cx, 96, 20), sx = s => curva(q, t => [s * Math.cosh(t), 1.5 * Math.sinh(t)], -1.25, 1.25, 30); return linea(sx(1), 's-ver', 2) + linea(sx(-1), 's-ver', 2) + E(cx, 96 - 1.5 * Math.sinh(1.25) * 20, Math.cosh(1.25) * 20, 7, 's-ver', .06) + E(cx, 96 + 1.5 * Math.sinh(1.25) * 20, Math.cosh(1.25) * 20, 7, 's-ver', .06) + '<ellipse cx="' + cx + '" cy="96" rx="20" ry="5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3" class="s-ver"/>'; }, s: ['un pezzo solo', 'c̃ con il segno isolato'] },
      { t: 'Due falde', c: 's-ara', d: cx => { const u = 18, T0 = 1.7, q = pan(cx, 96, u), sy = s => curva(q, t => [.9 * Math.sinh(t), s * Math.cosh(t)], -T0, T0, 30), dy = Math.cosh(T0) * u, rx = .9 * Math.sinh(T0) * u; return linea(sy(1), 's-ara', 2) + linea(sy(-1), 's-ara', 2) + E(cx, 96 - dy, rx, 6, 's-ara', .06) + E(cx, 96 + dy, rx, 6, 's-ara', .06); }, s: ['due pezzi', 'c̃ con i due concordi'] }
    ]).replace('</svg>', T(220, 176, 'segni diversi e c̃ = 0: cono', 's-p s-mut') + '</svg>');
  }

  function s12cilindri() {
    const cx = 120;
    return svg(440, 190, 'Un cilindro: la conica del piano scorre lungo la direzione dell\'autovettore di 0',
      E(cx, 40, 54, 16, 's-blu', .08) + '<path d="M' + (cx - 54) + ' 150 A54 16 0 0 0 ' + (cx + 54) + ' 150" fill="none" stroke="currentColor" stroke-width="1.8" class="s-blu"/>' +
      '<path d="M' + (cx - 54) + ' 150 A54 16 0 0 1 ' + (cx + 54) + ' 150" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4" class="s-blu"/>' +
      L(cx - 54, 40, cx - 54, 150, 's-blu', 1.8) + L(cx + 54, 40, cx + 54, 150, 's-blu', 1.8) +
      F(cx, 170, cx, 18, 's-ver', 2) + T(cx + 8, 26, 'W₀', 's-g s-ver', 'start') +
      T(248, 40, 'λ₃ = 0 e c\'è un centro', 's-p s-g', 'start') +
      T(248, 66, 'z non compare:', 's-p', 'start') + T(248, 84, 'λ₁x² + λ₂y² + c̃ = 0', 's-p s-g', 'start') +
      T(248, 116, 'ellittico, iperbolico,', 's-p', 'start') + T(248, 134, 'o coppie di piani', 's-p', 'start') +
      T(248, 166, 'rette parallele a W₀', 's-p s-ver', 'start'));
  }

  function s12paraboloidi() {
    const q1 = pan(110, 150, 22);
    const coppa = linea(curva(q1, t => [t, .55 * t * t], -2.4, 2.4, 40), 's-blu', 2) + E(110, 150 - .55 * 2.4 * 2.4 * 22, 2.4 * 22, 9, 's-blu', .08);
    // la sella z = x² − y² sul quadrato [−1,1]², in proiezione obliqua: bordo e le due parabole per l'origine
    const s3 = (x, y, z) => [330 + 46 * (x - .5 * y), 100 - 46 * (.75 * z - .3 * y)], zf = (x, y) => x * x - y * y;
    const lato = (f) => curva((a, b) => s3(a, b, zf(a, b)), f, 0, 1, 20);
    const bordo = lato(t => [-1 + 2 * t, -1]).concat(lato(t => [1, -1 + 2 * t]), lato(t => [1 - 2 * t, 1]), lato(t => [-1, 1 - 2 * t]));
    const sella = linea(bordo, 's-ros', 1.8, false, true) +
      linea(curva((a, b) => s3(a, b, zf(a, b)), t => [-1 + 2 * t, 0], 0, 1, 20), 's-ros', 2) +
      linea(curva((a, b) => s3(a, b, zf(a, b)), t => [0, -1 + 2 * t], 0, 1, 20), 's-ros', 1.6, true);
    return svg(440, 196, 'Paraboloide ellittico (una coppa) e iperbolico (una sella)',
      T(110, 16, 'Ellittico', 's-g s-blu') + T(330, 16, 'Iperbolico', 's-g s-ros') + coppa + sella +
      T(110, 172, 'altri due concordi', 's-p') + T(330, 172, 'altri due discordi', 's-p') +
      T(220, 190, 'un autovalore 0 e nessun centro: z = αx² + βy²', 's-p s-g'));
  }

  function s12riassunto() {
    const box = (x, y, w, h, righe, c) => B(x, y, w, h, c || 's-mut') + righe.map((r, j) => T(x + w / 2, y + h / 2 - (righe.length - 1) * 8 + 4 + j * 16, r, 's-p' + (j === 0 ? ' s-g' : ''))).join('');
    return svg(440, 226, 'Dal numero di autovalori nulli al nome della quadrica',
      box(140, 4, 160, 34, ['autovalori nulli?'], 's-blu') +
      F(170, 40, 70, 70, 's-mut', 1.6) + F(220, 40, 220, 70, 's-mut', 1.6) + F(270, 40, 370, 70, 's-mut', 1.6) +
      T(110, 58, 'nessuno', 's-p s-mut') + T(232, 62, 'uno', 's-p s-mut', 'start') + T(334, 58, 'due', 's-p s-mut') +
      box(4, 74, 132, 64, ['ellissoide', 'iperboloidi, cono', 'punto, vuota']) +
      box(160, 74, 120, 34, ['c\'è un centro?'], 's-ara') +
      box(304, 74, 132, 64, ['cilindro parabolico', 'piani, vuota']) +
      F(196, 110, 166, 146, 's-mut', 1.6) + F(244, 110, 274, 146, 's-mut', 1.6) +
      T(170, 128, 'sì', 's-p s-mut', 'end') + T(270, 128, 'no', 's-p s-mut', 'start') +
      box(96, 150, 120, 48, ['cilindri', 'ellittico, iperbolico'], 's-ver') +
      box(226, 150, 120, 48, ['paraboloidi', 'ellittico, iperbolico'], 's-ros') +
      T(220, 218, 'poi i segni degli altri autovalori e di c̃', 's-p'));
  }

  function s12simmetria() {
    const q = pan(110, 100, 24), c = [0, 0], th = .5;
    const d1 = [Math.cos(th), Math.sin(th)], d2 = [-Math.sin(th), Math.cos(th)];
    const q2 = pan(330, 150, 24);
    return svg(440, 196, 'I piani di simmetria passano per il centro e sono ortogonali agli autovettori',
      T(110, 16, 'Con centro', 's-g s-blu') + T(330, 16, 'Senza centro', 's-g s-ros') +
      linea(ellisse(q, c, 2.2, 1.1, th), 's-blu', 2) +
      L(...q(-2.9 * d1[0], -2.9 * d1[1]), ...q(2.9 * d1[0], 2.9 * d1[1]), 's-mut', 1.6, true) +
      L(...q(-2 * d2[0], -2 * d2[1]), ...q(2 * d2[0], 2 * d2[1]), 's-mut', 1.6, true) + P(...q(0, 0), 3.5, 's-blu') +
      linea(curva(q2, t => [t, .5 * t * t], -2.4, 2.4, 30), 's-ros', 2) + L(...q2(0, -.6), ...q2(0, 3.6), 's-mut', 1.6, true) +
      T(110, 172, 'due assi: due simmetrie', 's-p') + T(330, 172, 'solo l\'asse', 's-p') +
      T(220, 190, 'in ℝ³: piani ⊥ agli autovettori, per il centro', 's-p s-g'));
  }

  function s12rotazione() {
    const cx = 120, cy = 100;
    return svg(440, 196, 'Due autovalori uguali: le sezioni sono cerchi e c\'è un asse di rotazione',
      // x² + y² + 4z² = 4: semiassi 2, 2, 1, quindi schiacciato lungo l'asse z
      E(cx, cy, 80, 40, 's-blu', .07) + '<ellipse cx="' + cx + '" cy="' + cy + '" rx="80" ry="16" fill="none" stroke="currentColor" stroke-width="1.6" class="s-ver"/>' +
      '<ellipse cx="' + cx + '" cy="' + (cy - 20) + '" rx="' + n(80 * Math.sqrt(3) / 2) + '" ry="14" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3" class="s-ver"/>' +
      L(cx, cy - 74, cx, cy + 74, 's-ros', 1.8, true) + T(cx + 8, cy - 62, 'asse', 's-p s-ros', 'start') +
      T(244, 44, 'x² + y² + 4z² = 4', 's-p s-g', 'start') +
      T(244, 70, 'autovalori 1, 1, 4', 's-p', 'start') +
      T(244, 102, 'sezioni ⊥ all\'asse: cerchi', 's-p s-ver', 'start') +
      T(244, 134, 'asse = autovettore', 's-p s-ros', 'start') + T(244, 152, 'dell\'autovalore semplice', 's-p s-ros', 'start') +
      T(244, 184, 'tre uguali: una sfera', 's-p s-mut', 'start'));
  }

  Object.assign(window.SCHEMI, {
    10: {
      'forme-bilineari': s10bilineari, 'prodotto-scalare': s10scalare, norma: s10norma, pitagora: s10pitagora, proiezione: s10proiezione,
      csb: s10csb, 'basi-ortogonali': s10basi, fourier: s10fourier, 'gram-schmidt': s10gs, 'matrici-ortogonali': s10ortogonali,
      spettrale: s10spettrale, isometrie: s10isometrie, orientazione: s10orientazione, complemento: s10complemento, vettoriale: s10vettoriale
    },
    11: { definizione: s11definizione, segno: s11segno, autovalori: s11autovalori, sylvester: s11sylvester },
    12: {
      definizione: s12definizione, classificazione: s12classificazione, centro: s12centro, canonica: s12canonica, coniche: s12coniche,
      'quadriche-r3': s12r3, cilindri: s12cilindri, paraboloidi: s12paraboloidi, riassunto: s12riassunto, simmetria: s12simmetria, rotazione: s12rotazione
    }
  });
})();
