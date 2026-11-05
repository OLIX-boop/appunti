/* ============================================================
   laboratorio.js — Laboratorio delle basi (Geometria)
   Quattro livelli in cui si risponde o si agisce PRIMA di vedere
   il risultato. I round stanno in geometria/data/laboratorio.js.
   Tutti i confronti sui numeri passano dalle frazioni esatte di
   meg.js: 1/3 è 1/3, non 0,3333.
   ============================================================ */
(function () {
  'use strict';

  const r = String.raw;
  const F = MEG.F;
  const LAB = window.LAB;
  const PED = ['₁', '₂', '₃'];
  const COL = ['accent', 'warn', 'purple'];
  const el = id => document.getElementById(id);

  /* ---------------- aritmetica ---------------- */

  /** «3», «-2», «1/3», «1,5», «0.5» → frazione esatta; null se il testo non è un numero */
  function frazione(testo) {
    const s = String(testo).trim().replace(/−/g, '-').replace(',', '.');
    let m = /^([+-]?\d+)\/(\d+)$/.exec(s);
    if (m) return +m[2] === 0 ? null : F(+m[1], +m[2]);
    if (/^[+-]?\d+$/.test(s)) return F(+s);
    m = /^([+-]?)(\d*)\.(\d+)$/.exec(s);
    if (m) {
      const d = Math.pow(10, m[3].length), n = (+m[2] || 0) * d + (+m[3]);
      return F(m[1] === '-' ? -n : n, d);
    }
    return null;
  }

  const val = f => f.n / f.d;
  /** i numeri dei cursori sono multipli di 1/2: si passa alle frazioni senza errori */
  const daNumero = x => F(Math.round(x * 2), 2);
  const comeFrazione = x => (typeof x === 'object' ? x : typeof x === 'string' ? frazione(x) : daNumero(x));

  /** coordinate esatte di P rispetto a {u,v}, con la regola di Cramer; null se u e v sono dipendenti */
  function coordinate(u, v, P) {
    const d = u[0] * v[1] - u[1] * v[0];
    if (d === 0) return null;
    return [F(P[0] * v[1] - P[1] * v[0], d), F(u[0] * P[1] - u[1] * P[0], d)];
  }

  /** rango, determinante e direzioni di nucleo e immagine di una matrice 2×2 */
  function analizza(A) {
    const a = A[0][0], b = A[0][1], c = A[1][0], d = A[1][1];
    const det = a * d - b * c, nulla = !a && !b && !c && !d;
    const out = { det, r: det !== 0 ? 2 : nulla ? 0 : 1, ker: null, im: null };
    if (out.r === 1) {
      const riga = (a || b) ? [a, b] : [c, d];
      out.ker = [riga[1], -riga[0]];
      out.im = (a || c) ? [a, c] : [b, d];
    }
    return out;
  }

  const paralleli = (u, v) => u[0] * v[1] - u[1] * v[0] === 0;
  const uguali = (A, B) => JSON.stringify(A) === JSON.stringify(B);

  /* ---------------- formule ---------------- */

  const texN = x => F.tex(comeFrazione(x));
  const texMat = M => '\\begin{bmatrix}' + M.map(riga => riga.map(texN).join('&')).join('\\\\') + '\\end{bmatrix}';
  const texCol = v => texMat(v.map(x => [x]));
  const texPunto = v => '(' + v.map(texN).join(',') + ')';

  /** a·c₁ + b·c₂ = d, con i segni giusti */
  function texEq(a, b, d) {
    const termine = (k, n, primo) => {
      if (k === 0) return '';
      const modulo = Math.abs(k) === 1 ? '' : Math.abs(k);
      return (k < 0 ? '-' : primo ? '' : '+') + modulo + n;
    };
    return (termine(a, 'c_1', true) + termine(b, 'c_2', a === 0) || '0') + '=' + d;
  }

  /* ---------------- disegno 2D (sopra plot.js) ---------------- */

  function piano(id, raggio) {
    const tacche = [];
    for (let v = -raggio; v <= raggio; v++) tacche.push({ v, label: v % 2 ? '' : String(v) });
    return new Plot(id, {
      xmin: -raggio, xmax: raggio, ymin: -raggio, ymax: raggio, equal: true, aspect: 1,
      pad: { l: 24, r: 10, t: 10, b: 16 }, xticks: tacche, yticks: tacche
    });
  }

  /** griglia obliqua generata da u e v */
  function griglia(p, u, v, o) {
    const N = 14, a = o.alpha === undefined ? .38 : o.alpha;
    for (let i = -N; i <= N; i++) {
      p.seg(i * u[0] - N * v[0], i * u[1] - N * v[1], i * u[0] + N * v[0], i * u[1] + N * v[1], { color: o.c2, width: 1.1, alpha: a });
      p.seg(i * v[0] - N * u[0], i * v[1] - N * u[1], i * v[0] + N * u[0], i * v[1] + N * u[1], { color: o.c1, width: 1.1, alpha: a });
    }
  }

  /** retta per q0 con direzione d, lunga abbastanza da uscire dal grafico */
  function retta(p, d, o, q0) {
    const l = Math.hypot(d[0], d[1]) || 1, ux = d[0] / l * 30, uy = d[1] / l * 30;
    const x = q0 ? q0[0] : 0, y = q0 ? q0[1] : 0;
    p.seg(x - ux, y - uy, x + ux, y + uy, o);
  }

  /** cammino c₁·u poi c₂·v, a partire dall'origine */
  function cammino(p, dosi, vettori, colori) {
    let a = [0, 0];
    vettori.forEach((v, k) => {
      const b = [a[0] + dosi[k] * v[0], a[1] + dosi[k] * v[1]];
      if (dosi[k]) p.arrow(a[0], a[1], b[0], b[1], { color: colori[k] || colori[0], width: 3.2, head: 10 });
      a = b;
    });
    return a;
  }

  function freccia(p, v, nome, colore, alpha) {
    p.arrow(0, 0, v[0], v[1], { color: colore, width: 2.6, alpha: alpha === undefined ? 1 : alpha, head: 9 });
    p.text(v[0], v[1], nome, { color: colore, size: 13, bold: true, halo: true, dx: 6, dy: -3 });
  }

  /** il mirino: punto da raggiungere o da tenere fermo */
  function mirino(p, q, nome) {
    p.dot(q[0], q[1], { r: 8, hollow: true, color: 'ok', width: 2.4 });
    p.dot(q[0], q[1], { r: 2.6, color: 'ok' });
    p.text(q[0], q[1], nome, { color: 'ok', size: 13, bold: true, halo: true, dx: 11, dy: -6 });
  }

  function maniglia(p, q, colore) {
    p.dot(q[0], q[1], { r: 8, color: colore, ring: true });
  }

  function poligono(p, punti, o) {
    const c = p.ctx;
    c.save();
    c.beginPath();
    punti.forEach((q, k) => { if (k) c.lineTo(p.X(q[0]), p.Y(q[1])); else c.moveTo(p.X(q[0]), p.Y(q[1])); });
    c.closePath();
    if (o.riempi) { c.fillStyle = p.col(o.riempi); c.globalAlpha = o.alpha === undefined ? .22 : o.alpha; c.fill(); }
    if (o.bordo) {
      c.globalAlpha = 1; c.strokeStyle = p.col(o.bordo); c.lineWidth = o.width || 2;
      c.lineJoin = 'round'; c.setLineDash(o.dash ? [6, 5] : []); c.stroke();
    }
    c.restore();
  }

  /**
   * Punti trascinabili su un grafico, con scatto ai numeri interi.
   * Sul telefono la pagina scorre finché il dito non prende una maniglia.
   * opz.fine() parte quando si lascia la presa: passare sopra la soluzione non basta.
   */
  function trascina(p, opz) {
    const cv = p.cv, R = 5;
    let presa = null;
    const relativo = (cx, cy) => { const b = cv.getBoundingClientRect(); return [cx - b.left, cy - b.top]; };
    const trova = (px, py, raggio) => {
      let meglio = null, dist = raggio;
      opz.elenco().forEach(m => {
        const d = Math.hypot(p.X(m.q[0]) - px, p.Y(m.q[1]) - py);
        if (d <= dist) { dist = d; meglio = m; }
      });
      return meglio;
    };
    const muovi = (cx, cy) => {
      const q = relativo(cx, cy);
      const x = Math.max(-R, Math.min(R, Math.round(p.invX(q[0]))));
      const y = Math.max(-R, Math.min(R, Math.round(p.invY(q[1]))));
      opz.sposta(presa.id, [x, y]);
    };
    cv.addEventListener('mousedown', e => {
      const q = relativo(e.clientX, e.clientY);
      presa = trova(q[0], q[1], 20);
      if (presa) { e.preventDefault(); cv.style.cursor = 'grabbing'; }
    });
    window.addEventListener('mousemove', e => {
      if (presa) { muovi(e.clientX, e.clientY); return; }
      const b = cv.getBoundingClientRect();
      if (e.clientX < b.left || e.clientX > b.right || e.clientY < b.top || e.clientY > b.bottom) return;
      const q = relativo(e.clientX, e.clientY);
      cv.style.cursor = trova(q[0], q[1], 20) ? 'grab' : (opz.cursore ? opz.cursore() : '');
    });
    const lascia = () => { if (presa && opz.fine) opz.fine(); presa = null; };
    window.addEventListener('mouseup', () => { lascia(); cv.style.cursor = ''; });
    cv.addEventListener('touchstart', e => {
      const t = e.touches[0], q = relativo(t.clientX, t.clientY);
      presa = trova(q[0], q[1], 34);
      if (presa) e.preventDefault();
    }, { passive: false });
    cv.addEventListener('touchmove', e => {
      if (!presa) return;
      e.preventDefault();
      muovi(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: false });
    cv.addEventListener('touchend', lascia);
  }

  /* ---------------- disegno 3D, senza dipendenze ---------------- */

  const sc3 = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
  const piu3 = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  const meno3 = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const dot3 = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const lung3 = a => Math.sqrt(dot3(a, a));
  const unit3 = a => sc3(a, 1 / (lung3(a) || 1));
  const cross3 = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

  class Scena3D {
    constructor(cv) {
      this.cv = cv;
      this.c = cv.getContext('2d');
      this.yaw = -2.2; this.pitch = .42;
      this.d = 34;                       // prospettiva lieve: serve la profondità, non l'effetto
      this.raggio = 4;
      this.disegna = null;
      this._misura();
      new ResizeObserver(() => { this._misura(); this.ridisegna(); }).observe(cv.parentElement);
      document.addEventListener('themechange', () => this.ridisegna());
      this._controlli();
    }

    _misura() {
      const w = Math.max(220, this.cv.parentElement.clientWidth), dpr = window.devicePixelRatio || 1;
      this.cv.style.width = '100%';
      this.cv.style.height = w + 'px';
      this.cv.width = Math.round(w * dpr);
      this.cv.height = Math.round(w * dpr);
      this.c.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.W = this.H = w;
      this.u = w / (2 * this.raggio);
    }

    _controlli() {
      const cv = this.cv;
      let prec = null;
      const ruota = (x, y) => {
        this.yaw -= (x - prec[0]) * .009;
        this.pitch = Math.max(-1.5, Math.min(1.5, this.pitch + (y - prec[1]) * .009));
        prec = [x, y];
        this.ridisegna();
      };
      cv.addEventListener('mousedown', e => { prec = [e.clientX, e.clientY]; cv.style.cursor = 'grabbing'; e.preventDefault(); });
      window.addEventListener('mousemove', e => { if (prec) ruota(e.clientX, e.clientY); });
      window.addEventListener('mouseup', () => { prec = null; cv.style.cursor = 'grab'; });
      cv.addEventListener('touchstart', e => { prec = [e.touches[0].clientX, e.touches[0].clientY]; e.preventDefault(); }, { passive: false });
      cv.addEventListener('touchmove', e => { e.preventDefault(); ruota(e.touches[0].clientX, e.touches[0].clientY); }, { passive: false });
      cv.addEventListener('touchend', () => { prec = null; });
      cv.addEventListener('keydown', e => {
        const passo = { ArrowLeft: [.12, 0], ArrowRight: [-.12, 0], ArrowUp: [0, -.12], ArrowDown: [0, .12] }[e.key];
        if (!passo) return;
        e.preventDefault();
        this.yaw += passo[0];
        this.pitch = Math.max(-1.5, Math.min(1.5, this.pitch + passo[1]));
        this.ridisegna();
      });
    }

    colore(nome) {
      return getComputedStyle(document.documentElement).getPropertyValue('--' + nome).trim() || nome;
    }

    proietta(P) {
      const cy = Math.cos(this.yaw), sy = Math.sin(this.yaw), cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
      const x1 = P[0] * cy - P[1] * sy, y1 = P[0] * sy + P[1] * cy;
      const su = P[2] * cp + y1 * sp, prof = -y1 * cp + P[2] * sp, f = this.d / (this.d - prof);
      return { x: this.W / 2 + x1 * f * this.u, y: this.H / 2 - su * f * this.u, z: prof };
    }

    /** direzione dalla scena verso l'osservatore */
    vista() {
      const cy = Math.cos(this.yaw), sy = Math.sin(this.yaw), cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
      return [-cp * sy, -cp * cy, sp];
    }

    /** sposta la vista verso la direzione w; parte solo perché lo chiede lo studente */
    guardaDa(w) {
      const pitch = Math.asin(Math.max(-1, Math.min(1, w[2]))), cp = Math.cos(pitch) || 1;
      let yaw = Math.atan2(-w[0] / cp, -w[1] / cp);
      while (yaw - this.yaw > Math.PI) yaw -= 2 * Math.PI;
      while (yaw - this.yaw < -Math.PI) yaw += 2 * Math.PI;
      const fermo = matchMedia('(prefers-reduced-motion: reduce)').matches;
      const y0 = this.yaw, p0 = this.pitch, t0 = performance.now(), dur = fermo ? 0 : 650;
      const passo = t => {
        const s = dur ? Math.min(1, (t - t0) / dur) : 1, m = s * s * (3 - 2 * s);
        this.yaw = y0 + (yaw - y0) * m;
        this.pitch = p0 + (pitch - p0) * m;
        this.ridisegna();
        if (s < 1) requestAnimationFrame(passo);
      };
      requestAnimationFrame(passo);
    }

    linea(A, B, o) {
      const a = this.proietta(A), b = this.proietta(B), c = this.c;
      c.save();
      c.strokeStyle = this.colore(o.colore); c.lineWidth = o.width || 1.5;
      c.globalAlpha = o.alpha === undefined ? 1 : o.alpha; c.lineCap = 'round';
      c.setLineDash(o.dash ? [5, 4] : []);
      c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.stroke();
      c.restore();
    }

    poligono(punti, o) {
      const c = this.c;
      c.save();
      c.beginPath();
      punti.forEach((P, k) => { const q = this.proietta(P); if (k) c.lineTo(q.x, q.y); else c.moveTo(q.x, q.y); });
      c.closePath();
      if (o.riempi) { c.fillStyle = this.colore(o.riempi); c.globalAlpha = o.alpha === undefined ? .16 : o.alpha; c.fill(); }
      if (o.bordo) { c.globalAlpha = o.alphaBordo === undefined ? .7 : o.alphaBordo; c.strokeStyle = this.colore(o.bordo); c.lineWidth = o.width || 1.2; c.stroke(); }
      c.restore();
    }

    /** freccia dall'origine; la parte dietro al piano di normale n si vede più tenue */
    freccia(B, o) {
      const vista = this.vista(), N = 18;
      const dietro = P => !!o.n && dot3(P, o.n) * dot3(vista, o.n) < -1e-9;
      for (let i = 0; i < N; i++) {
        const A1 = sc3(B, i / N), A2 = sc3(B, (i + 1) / N);
        this.linea(A1, A2, { colore: o.colore, width: 3, alpha: dietro(sc3(B, (i + .5) / N)) ? .35 : 1 });
      }
      const a = this.proietta(sc3(B, .9)), b = this.proietta(B), ang = Math.atan2(b.y - a.y, b.x - a.x), s = 11, c = this.c;
      c.save();
      c.fillStyle = this.colore(o.colore);
      c.beginPath(); c.moveTo(b.x, b.y);
      c.lineTo(b.x - s * Math.cos(ang - .42), b.y - s * Math.sin(ang - .42));
      c.lineTo(b.x - s * Math.cos(ang + .42), b.y - s * Math.sin(ang + .42));
      c.closePath(); c.fill(); c.restore();
      this.testo(B, o.nome, o.colore);
    }

    testo(P, s, colore) {
      const q = this.proietta(P), c = this.c;
      c.save();
      c.font = '700 13px ' + (this.colore('font-sans') || 'sans-serif');
      c.textAlign = 'left'; c.textBaseline = 'bottom';
      c.strokeStyle = this.colore('bg-elev'); c.lineWidth = 3.5; c.lineJoin = 'round';
      c.strokeText(s, q.x + 6, q.y - 3);
      c.fillStyle = this.colore(colore);
      c.fillText(s, q.x + 6, q.y - 3);
      c.restore();
    }

    ridisegna() {
      const c = this.c;
      c.fillStyle = this.colore('bg-elev');
      c.fillRect(0, 0, this.W, this.H);
      for (let i = -3; i <= 3; i++) {
        this.linea([i, -3, 0], [i, 3, 0], { colore: 'border', width: 1, alpha: .75 });
        this.linea([-3, i, 0], [3, i, 0], { colore: 'border', width: 1, alpha: .75 });
      }
      ['x', 'y', 'z'].forEach((nome, k) => {
        const fine = [0, 0, 0]; fine[k] = 3.5;
        this.linea(sc3(fine, -1), fine, { colore: 'text-muted', width: 1.4 });
        this.testo(fine, nome, 'text-muted');
      });
      if (this.disegna) this.disegna(this);
    }
  }

  /* ---------------- impalcatura dei livelli ---------------- */

  function scrivi(nodo, html, tipo) {
    nodo.innerHTML = html;
    nodo.className = 'lab-fb' + (tipo ? ' ' + tipo : '');
    nodo.hidden = false;
    AM.typeset(nodo);
  }

  /** testata con i pallini dei round, salvataggio degli esiti, passaggio al round dopo */
  function creaLivello(id, rounds, prossimo, avvia) {
    const chiave = 'lab:' + id, testa = el(id + 'Testa');
    let esiti = AM.store.get(chiave, {}) || {};
    const L = { i: 0, n: rounds.length };

    function testata() {
      testa.innerHTML = '<span>Round ' + (L.i + 1) + ' di ' + L.n + '</span><span class="lab-punti">' +
        rounds.map((_, k) => '<button type="button" class="lab-punto' + (k in esiti ? (esiti[k] ? ' ok' : ' no') : '') +
          (k === L.i ? ' ora' : '') + '" data-k="' + k + '" aria-label="Vai al round ' + (k + 1) + '"></button>').join('') + '</span>';
      testa.querySelectorAll('.lab-punto').forEach(b => { b.onclick = () => L.vai(+b.dataset.k); });
    }

    L.vai = function (i) { L.i = i; testata(); avvia(rounds[i], i); };

    /** registra il primo esito del round: rifarlo non cancella com'era andata la prima volta */
    L.esito = function (giusto) {
      if (!(L.i in esiti)) { esiti[L.i] = !!giusto; AM.store.set(chiave, esiti); }
      testata();
      riepilogo();
    };

    L.avanti = function (zona) {
      const ultimo = L.i === L.n - 1;
      zona.innerHTML = ultimo
        ? '<a class="btn primary" href="#' + prossimo + '">Livello finito: avanti ↓</a> <button type="button" class="btn ghost" data-rifai>Rifai il livello</button>'
        : '<button type="button" class="btn primary" data-avanti>Round successivo</button>';
      const av = zona.querySelector('[data-avanti]'), rif = zona.querySelector('[data-rifai]');
      if (av) av.onclick = () => L.vai(L.i + 1);
      if (rif) rif.onclick = () => { esiti = {}; AM.store.set(chiave, esiti); riepilogo(); L.vai(0); };
    };

    const primo = rounds.findIndex((_, k) => !(k in esiti));
    L.parti = () => L.vai(primo < 0 ? 0 : primo);
    return L;
  }

  function riepilogo() {
    const box = el('labStat');
    box.innerHTML = [['l1', 'Raggiungi il bersaglio'], ['l2', 'Due griglie'], ['l3', 'Nello spazio'], ['l4', 'Dove vanno e₁, e₂']].map((x, k) => {
      const e = AM.store.get('lab:' + x[0], {}) || {}, fatti = Object.keys(e).length, giusti = Object.keys(e).filter(i => e[i]).length;
      return '<a class="card stat" href="#livello-' + (k + 1) + '"><div class="stat-val">' + fatti + '/' + LAB[x[0]].length + '</div>' +
        '<div class="stat-lab">' + x[1] + (fatti ? '<br>' + giusti + ' giuste al primo colpo' : '') + '</div></a>';
    }).join('');
  }

  /* ---------------- Livello 1: raggiungi il bersaglio ---------------- */

  const RISPOSTE1 = [['unico', 'Sì, in un solo modo'], ['infiniti', 'Sì, in infiniti modi'], ['nessuno', 'No, in nessun modo']];

  function livello1() {
    const p = piano('l1Plot', 6), box = el('l1Box');
    let R, dosi, scia, fase, previsione, ricette, svela;
    const punta = () => R.v.reduce((s, v, k) => [s[0] + dosi[k] * v[0], s[1] + dosi[k] * v[1]], [0, 0]);
    const centrato = () => { const q = punta(); return Math.abs(q[0] - R.T[0]) < 1e-9 && Math.abs(q[1] - R.T[1]) < 1e-9; };

    p.draw(() => {
      if (!R) return;
      if (svela) {
        if (R.esito === 'nessuno') retta(p, R.v[0], { color: 'ok', width: 7, alpha: .28 });
        else if (R.v.length === 2 && !paralleli(R.v[0], R.v[1])) griglia(p, R.v[0], R.v[1], { c1: 'accent', c2: 'warn', alpha: .3 });
      }
      scia.forEach(q => p.dot(q[0], q[1], { r: 2.2, color: 'faint' }));
      R.v.forEach((v, k) => freccia(p, v, 'v' + PED[k], COL[k], .5));
      mirino(p, R.T, 'T');
      const q = cammino(p, dosi, R.v, COL);
      p.dot(q[0], q[1], { r: 5, color: 'text', ring: true });
    });

    const L = creaLivello('l1', LAB.l1, 'livello-2', avvia);

    function chiudi(fb, zona) {
      fase = 'fine';
      svela = true;
      p.redraw();
      const giusto = previsione === R.esito;
      L.esito(giusto);
      const scelta = RISPOSTE1.find(x => x[0] === previsione)[1];
      scrivi(fb, (giusto ? '<strong>✓ Previsione giusta.</strong> ' : '<strong>✗ Avevi detto «' + scelta + '».</strong> ') + R.dopo, giusto ? 'ok' : 'no');
      L.avanti(zona);
    }

    function avvia(rr) {
      R = rr; dosi = rr.v.map(() => 0); scia = [[0, 0]]; fase = 'previsione'; previsione = null; ricette = []; svela = false;
      const lista = rr.v.map((v, k) => '$\\vv_' + (k + 1) + '=' + texPunto(v) + '$').join(rr.v.length === 2 ? ' e ' : ', ');
      box.innerHTML =
        '<p class="lab-q">Si può arrivare in $T=' + texPunto(rr.T) + '$ con una combinazione di ' + lista + '?</p>' +
        '<div class="lab-opts">' + RISPOSTE1.map(x => '<button type="button" class="lab-opt" data-v="' + x[0] + '">' + x[1] + '</button>').join('') + '</div>' +
        '<div class="lab-dosi">' + rr.v.map((_, k) =>
          '<label class="lab-dose"><span style="color:var(--' + COL[k] + ')">dose di $\\vv_' + (k + 1) + '$</span>' +
          '<input type="range" min="-4" max="4" step="0.5" value="0" disabled data-k="' + k + '"><output>0</output></label>').join('') + '</div>' +
        '<div class="lab-fb" hidden></div><div class="lab-azioni"></div>';
      AM.typeset(box);
      p.redraw();

      const fb = box.querySelector('.lab-fb'), zona = box.querySelector('.lab-azioni');
      const cursori = Array.from(box.querySelectorAll('input[type=range]'));

      function mostraDosi() {
        cursori.forEach((c, k) => {
          c.value = dosi[k];
          c.nextElementSibling.textContent = String(dosi[k]).replace('.', ',');
        });
      }

      cursori.forEach(c => c.addEventListener('input', () => {
        dosi[+c.dataset.k] = parseFloat(c.value);
        mostraDosi();
        const q = punta();
        if (!scia.some(s => s[0] === q[0] && s[1] === q[1])) scia.push(q);
        p.redraw();
        if (fase !== 'mani' || !centrato()) return;
        if (R.esito === 'unico') { chiudi(fb, zona); return; }
        const ricetta = dosi.join(',');
        if (ricette.indexOf(ricetta) < 0) ricette.push(ricetta);
        if (ricette.length >= 2) chiudi(fb, zona);
        else scrivi(fb, 'Ci sei. Ora arrivaci <strong>in un altro modo</strong>, con dosi diverse.');
      }));

      box.querySelectorAll('.lab-opt').forEach(b => {
        b.onclick = () => {
          if (fase !== 'previsione') return;
          previsione = b.dataset.v;
          fase = 'mani';
          b.classList.add('scelta');
          box.querySelectorAll('.lab-opt').forEach(x => { x.disabled = true; });
          cursori.forEach(c => { c.disabled = false; });
          scrivi(fb, 'Ora verifica con le mani: muovi i cursori e cerca di centrare $T$. La scia grigia segna dove sei già passato.');
          zona.innerHTML = '<button type="button" class="btn" data-resa>Non ci arrivo</button>';
          zona.querySelector('[data-resa]').onclick = () => {
            if (R.sol.length) { dosi = R.sol[0].slice(); mostraDosi(); }
            chiudi(fb, zona);
          };
        };
      });
    }

    L.parti();
  }

  /* ---------------- Livello 2: stesso punto, due griglie ---------------- */

  function livello2() {
    const p = piano('l2Plot', 6), box = el('l2Box');
    let R, B, P, fase, sbagli, prova, giusta, zonaFb, zonaAz, datiVivi;

    p.draw(() => {
      if (!R) return;
      const base = R.tipo === 'cambio' ? R.Bt : B, ok = !paralleli(base[0], base[1]);
      if (R.tipo === 'cambio') {
        griglia(p, B[0], B[1], { c1: 'accent', c2: 'accent', alpha: .15 });
        griglia(p, R.Bt[0], R.Bt[1], { c1: 'purple', c2: 'purple', alpha: .3 });
        freccia(p, B[0], 'v' + PED[0], 'accent'); freccia(p, B[1], 'v' + PED[1], 'accent');
        freccia(p, R.Bt[0], 'ṽ' + PED[0], 'purple'); freccia(p, R.Bt[1], 'ṽ' + PED[1], 'purple');
      } else {
        if (ok) griglia(p, B[0], B[1], { c1: 'accent', c2: 'warn' });
        else if (B[0][0] || B[0][1] || B[1][0] || B[1][1]) retta(p, (B[0][0] || B[0][1]) ? B[0] : B[1], { color: 'danger', width: 5, alpha: .25 });
        freccia(p, B[0], 'v' + PED[0], 'accent'); freccia(p, B[1], 'v' + PED[1], 'warn');
      }
      if (prova) {
        const q = cammino(p, prova.map(val), base, ['danger']);
        p.dot(q[0], q[1], { r: 5.5, color: 'danger', ring: true });
      }
      if (giusta) cammino(p, giusta.map(val), base, ['ok']);
      mirino(p, P, 'P');
      if (R.tipo === 'costruisci' && fase === 'gioco') { maniglia(p, B[0], 'accent'); maniglia(p, B[1], 'warn'); }
    });

    trascina(p, {
      elenco: () => (R && R.tipo === 'costruisci' && fase === 'gioco' ? [{ id: 0, q: B[0] }, { id: 1, q: B[1] }] : []),
      sposta: (id, q) => {
        if (uguali(B[id], q)) return;
        B[id] = q;
        aggiornaCostruisci();
        p.redraw();
      },
      fine: () => verificaCostruisci()
    });

    const L = creaLivello('l2', LAB.l2, 'livello-3', avvia);

    function aggiornaCostruisci() {
      const c = coordinate(B[0], B[1], P);
      if (!c) { datiVivi.innerHTML = '$\\vv_1$ e $\\vv_2$ sono paralleli: <strong>non è una base</strong>, e le coordinate di $P$ non esistono o non sono uniche.'; AM.typeset(datiVivi); return; }
      datiVivi.innerHTML = 'Coordinate attuali di $P$: $' + texPunto(c) + '$';
      AM.typeset(datiVivi);
    }

    function verificaCostruisci() {
      const c = coordinate(B[0], B[1], P);
      if (fase !== 'gioco' || !c || !F.eq(c[0], frazione(R.bersaglio[0])) || !F.eq(c[1], frazione(R.bersaglio[1]))) return;
      fase = 'fine';
      L.esito(true);
      giusta = c;
      p.redraw();
      scrivi(zonaFb, '<strong>✓ Ci sei:</strong> $P=' + texN(c[0]) + '\\,\\vv_1+' + texN(c[1]) + '\\,\\vv_2$. ' + R.dopo, 'ok');
      L.avanti(zonaAz);
    }

    function controllo(c) {
      const base = R.tipo === 'cambio' ? R.Bt : B;
      const Sm = [[base[0][0], base[1][0]], [base[0][1], base[1][1]]];
      if (R.tipo === 'cambio') {
        return '$S\\tilde{\\mathbf c}=' + texMat(R.S) + texCol(R.ct) + '=' + texCol(R.c) + '=\\mathbf c$ ✓';
      }
      return '$S\\mathbf c=' + texMat(Sm) + texCol(c) + '=' + texCol(P) + '=\\vx$ ✓';
    }

    function risolto(c, mostrata) {
      const primoColpo = sbagli === 0 && !mostrata;
      fase = 'fine';
      prova = null;
      giusta = c;
      p.redraw();
      L.esito(primoColpo);
      const testa = mostrata ? 'Ecco la risposta.' : primoColpo ? '✓ Giusto al primo colpo.' : '✓ Giusto.';
      scrivi(zonaFb, '<strong>' + testa + '</strong> <span class="lab-formula">' + controllo(c) + '</span>' + R.dopo, mostrata ? 'no' : 'ok');
      L.avanti(zonaAz);
    }

    function avvia(rr) {
      R = rr; B = rr.B.map(v => v.slice()); fase = 'gioco'; sbagli = 0; prova = null; giusta = null;
      if (rr.tipo === 'cambio') {
        P = [rr.c[0] * B[0][0] + rr.c[1] * B[1][0], rr.c[0] * B[0][1] + rr.c[1] * B[1][1]];
      } else P = rr.P;

      const nomi = rr.tipo === 'cambio' ? ['\\tilde c_1', '\\tilde c_2'] : ['c_1', 'c_2'];
      const datiBase = rr.tipo === 'cambio'
        ? '<p class="small muted lab-dati">$B=\\{' + texPunto(B[0]) + ',' + texPunto(B[1]) + '\\}$, $\\tilde B=\\{' + texPunto(rr.Bt[0]) + ',' + texPunto(rr.Bt[1]) + '\\}$</p>'
        : rr.tipo === 'leggi'
          ? '<p class="small muted lab-dati">$\\vv_1=' + texPunto(B[0]) + '$, $\\vv_2=' + texPunto(B[1]) + '$, $P=' + texPunto(P) + '$</p>'
          : '<p class="small muted lab-dati">$P=' + texPunto(P) + '$</p>';

      box.innerHTML = '<p class="lab-q">' + rr.q + '</p>' + datiBase +
        (rr.tipo === 'costruisci'
          ? '<div class="readout lab-vivi"></div>'
          : '<div class="lab-campi">' + nomi.map(n => '<label>$' + n + '=$ <input type="text" autocomplete="off" inputmode="text" aria-label="coordinata"></label>').join('') +
            '<button type="button" class="btn primary sm" data-controlla>Controlla</button></div>') +
        '<div class="lab-fb" hidden></div><div class="lab-azioni"></div>';
      AM.typeset(box);
      zonaFb = box.querySelector('.lab-fb');
      zonaAz = box.querySelector('.lab-azioni');
      p.redraw();

      if (rr.tipo === 'costruisci') {
        datiVivi = box.querySelector('.lab-vivi');
        aggiornaCostruisci();
        zonaAz.innerHTML = '<button type="button" class="btn ghost" data-resa>Mostrami una soluzione</button>';
        zonaAz.querySelector('[data-resa]').onclick = () => {
          B = R.sol.map(v => v.slice());
          fase = 'fine';
          L.esito(false);
          const c = coordinate(B[0], B[1], P);
          giusta = c;
          p.redraw();
          datiVivi.innerHTML = 'Coordinate attuali di $P$: $' + texPunto(c) + '$';
          AM.typeset(datiVivi);
          scrivi(zonaFb, '<strong>Ecco una soluzione.</strong> ' + R.dopo, 'no');
          L.avanti(zonaAz);
        };
        return;
      }

      const campi = Array.from(box.querySelectorAll('.lab-campi input'));
      const giusti = (rr.tipo === 'cambio' ? rr.ct : rr.c).map(frazione);

      function controlla() {
        if (fase !== 'gioco') return;
        const c = campi.map(i => frazione(i.value));
        if (!c[0] || !c[1]) { scrivi(zonaFb, 'Scrivi due numeri: vanno bene anche frazioni come 1/3.'); return; }
        if (F.eq(c[0], giusti[0]) && F.eq(c[1], giusti[1])) { risolto(c, false); return; }
        sbagli++;
        prova = c;
        p.redraw();
        const base = rr.tipo === 'cambio' ? rr.Bt : B;
        const arrivo = [0, 1].map(k => F.add(F.mul(c[0], F(base[0][k])), F.mul(c[1], F(base[1][k]))));
        let testo = '<strong>Non ancora.</strong> Con questi numeri arrivi in $' + texPunto(arrivo) + '$, il punto rosso, e non in $P=' + texPunto(P) + '$.';
        if (sbagli >= 2) {
          testo += ' Scrivi il sistema riga per riga: $\\begin{cases}' +
            texEq(base[0][0], base[1][0], P[0]).replace(/c_/g, rr.tipo === 'cambio' ? '\\tilde c_' : 'c_') + '\\\\' +
            texEq(base[0][1], base[1][1], P[1]).replace(/c_/g, rr.tipo === 'cambio' ? '\\tilde c_' : 'c_') + '\\end{cases}$';
          zonaAz.innerHTML = '<button type="button" class="btn ghost" data-resa>Mostrami la risposta</button>';
          zonaAz.querySelector('[data-resa]').onclick = () => {
            campi.forEach((i, k) => { i.value = F.str(giusti[k]); });
            risolto(giusti, true);
          };
        }
        scrivi(zonaFb, testo, 'no');
      }

      box.querySelector('[data-controlla]').onclick = controlla;
      campi.forEach(i => i.addEventListener('keydown', e => { if (e.key === 'Enter') controlla(); }));
    }

    L.parti();
  }

  /* ---------------- Livello 3: nello spazio il rango si vede ---------------- */

  const RISPOSTE3 = [[1, '$r=1$: stanno su una retta'], [2, '$r=2$: stanno in un piano'], [3, '$r=3$: riempiono lo spazio']];

  function livello3() {
    const sc = new Scena3D(el('l3Scena')), box = el('l3Box');
    let R, h, svela, riduzione;

    const vettori = () => R.V.map(v => v.map(x => (x === null ? h : x)));
    /** il MEG sulla matrice che ha i tre vettori per colonne */
    function meg() {
      const V = vettori();
      const M = [0, 1, 2].map(i => [0, 1, 2].map(j => daNumero(V[j][i])));
      return MEG.riduci(M, 3);
    }

    function pianoSpan(s, a, b) {
      const e1 = unit3(a), e2 = unit3(meno3(b, sc3(e1, dot3(b, e1)))), m = 3.5;
      const P = (x, y) => piu3(sc3(e1, x), sc3(e2, y));
      s.poligono([P(-m, -m), P(m, -m), P(m, m), P(-m, m)], { riempi: 'ok', alpha: .16, bordo: 'ok' });
      for (let i = -3; i <= 3; i++) {
        s.linea(P(i, -m), P(i, m), { colore: 'ok', width: 1, alpha: .35 });
        s.linea(P(-m, i), P(m, i), { colore: 'ok', width: 1, alpha: .35 });
      }
    }

    function parallelepipedo(s, V) {
      const O = [0, 0, 0], [a, b, c] = V;
      const facce = [
        [O, a, piu3(a, b), b], [c, piu3(a, c), piu3(piu3(a, b), c), piu3(b, c)],
        [O, a, piu3(a, c), c], [b, piu3(a, b), piu3(piu3(a, b), c), piu3(b, c)],
        [O, b, piu3(b, c), c], [a, piu3(a, b), piu3(piu3(a, b), c), piu3(a, c)]
      ];
      const prof = f => f.reduce((t, P) => t + s.proietta(P).z, 0) / 4;
      facce.sort((x, y) => prof(x) - prof(y)).forEach(f => s.poligono(f, { riempi: 'ok', alpha: .13, bordo: 'ok', alphaBordo: .55 }));
    }

    /** primi due vettori indipendenti fra i tre */
    function dueIndipendenti(V) {
      for (let i = 0; i < 3; i++) for (let j = i + 1; j < 3; j++) {
        if (lung3(cross3(V[i], V[j])) > 1e-9) return [V[i], V[j]];
      }
      return null;
    }

    sc.disegna = s => {
      if (!R) return;
      const V = vettori(), par = R.tipo === 'parametro';
      let n = null;
      if (par) {
        n = unit3(cross3(V[0], V[1]));
        pianoSpan(s, V[0], V[1]);
        const scarto = dot3(V[2], n);
        if (Math.abs(scarto) > 1e-9) s.linea(V[2], meno3(V[2], sc3(n, scarto)), { colore: 'danger', width: 2, dash: true });
      } else if (svela) {
        const rg = riduzione.rangoA;
        if (rg === 3) parallelepipedo(s, V);
        else if (rg === 2) {
          const d = dueIndipendenti(V);
          n = unit3(cross3(d[0], d[1]));
          pianoSpan(s, d[0], d[1]);
        } else {
          const d = unit3(V[0]);
          s.linea(sc3(d, -5), sc3(d, 5), { colore: 'ok', width: 7, alpha: .28 });
        }
      }
      V.forEach(v => {
        const ombra = [v[0], v[1], 0];
        s.linea([0, 0, 0], ombra, { colore: 'text-faint', width: 1, dash: true, alpha: .8 });
        s.linea(v, ombra, { colore: 'text-faint', width: 1, dash: true, alpha: .8 });
      });
      V.forEach((v, k) => s.freccia(v, { colore: COL[k], nome: 'v' + PED[k], n }));
    };

    const L = creaLivello('l3', LAB.l3, 'livello-4', avvia);

    function diTaglio() {
      const V = vettori(), d = dueIndipendenti(V);
      const n = unit3(cross3(d[0], d[1])), w = sc3(n, dot3(sc.vista(), n));
      const dir = meno3(sc.vista(), w);
      sc.guardaDa(lung3(dir) > 1e-6 ? unit3(dir) : unit3(d[0]));
    }

    function tabellaMEG() {
      const q = meg();
      return '<div class="lab-meg">' + MEG.html(q.finale, { pivot: q.pivot }) + '</div>';
    }

    function avvia(rr) {
      R = rr; svela = false; riduzione = null;
      h = rr.tipo === 'parametro' ? -1 : 0;
      const zonaDati = () => vettori().map((v, k) => '$\\vv_' + (k + 1) + '=' + texPunto(rr.tipo === 'parametro' && k === 2 ? [v[0], v[1]] : v).replace(/\)$/, rr.tipo === 'parametro' && k === 2 ? ',h)' : ')') + '$').join(', ');

      if (rr.tipo === 'parametro') {
        box.innerHTML = '<p class="lab-q">Il piano verde è lo span di $\\vv_1$ e $\\vv_2$. Per quale valore di $h$ il vettore $\\vv_3$ ci finisce dentro?</p>' +
          '<p class="small muted lab-dati">' + zonaDati() + '. Il tratteggio rosso misura quanto $\\vv_3$ sporge dal piano.</p>' +
          '<label class="lab-dose"><span>$h$</span><input type="range" min="' + rr.da + '" max="' + rr.a + '" step="' + rr.passo + '" value="' + h + '"><output>' + h + '</output></label>' +
          '<div class="lab-azioni lab-prima"><button type="button" class="btn sm" data-taglio>Guarda di taglio</button> <button type="button" class="btn primary sm" data-conferma>Confermo questo $h$</button></div>' +
          '<div class="lab-fb" hidden></div><div class="lab-azioni lab-dopo"></div>';
        AM.typeset(box);
        const fb = box.querySelector('.lab-fb'), cur = box.querySelector('input[type=range]');
        let tentativi = 0, finito = false;
        cur.addEventListener('input', () => {
          h = parseFloat(cur.value);
          cur.nextElementSibling.textContent = String(h).replace('.', ',');
          sc.ridisegna();
        });
        box.querySelector('[data-taglio]').onclick = diTaglio;
        box.querySelector('[data-conferma]').onclick = () => {
          if (finito) return;
          tentativi++;
          const q = meg();
          if (h === rr.h) {
            finito = true;
            L.esito(tentativi === 1);
            scrivi(fb, '<strong>✓ Con $h=' + String(h).replace('.', ',') + '$ il rango scende a ' + q.rangoA + '.</strong> ' + tabellaMEG() + rr.dopo, 'ok');
            L.avanti(box.querySelector('.lab-dopo'));
          } else {
            scrivi(fb, '<strong>Non ancora.</strong> Con $h=' + String(h).replace('.', ',') + '$ il rango è ' + q.rangoA + ': $\\vv_3$ è ancora fuori dal piano. Prova a guardare di taglio: i tre vettori devono stare su una riga.', 'no');
          }
        };
        sc.ridisegna();
        return;
      }

      box.innerHTML = '<p class="lab-q">Ruota la scena trascinandola. Quanto vale il rango di $[\\,\\vv_1\\,|\\,\\vv_2\\,|\\,\\vv_3\\,]$?</p>' +
        '<p class="small muted lab-dati">' + zonaDati() + '. Se trovi un punto di vista da cui i tre sembrano stare su una riga, sono complanari. Puoi anche fare il MEG sul foglio.</p>' +
        '<div class="lab-opts">' + RISPOSTE3.map(x => '<button type="button" class="lab-opt" data-v="' + x[0] + '">' + x[1] + '</button>').join('') + '</div>' +
        '<div class="lab-fb" hidden></div><div class="lab-azioni"></div>';
      AM.typeset(box);
      const fb = box.querySelector('.lab-fb'), zona = box.querySelector('.lab-azioni');
      box.querySelectorAll('.lab-opt').forEach(b => {
        b.onclick = () => {
          const v = +b.dataset.v, giusto = v === rr.r;
          riduzione = meg();
          svela = true;
          box.querySelectorAll('.lab-opt').forEach(x => {
            x.disabled = true;
            if (+x.dataset.v === rr.r) x.classList.add('giusta');
          });
          if (!giusto) b.classList.add('sbagliata');
          L.esito(giusto);
          sc.ridisegna();
          scrivi(fb, (giusto ? '<strong>✓ Giusto.</strong> ' : '<strong>✗ Il rango è ' + rr.r + '.</strong> ') + 'Il MEG conta le direzioni vere: ' + rr.r + (rr.r === 1 ? ' pivot.' : ' pivot.') + tabellaMEG() + rr.dopo, giusto ? 'ok' : 'no');
          L.avanti(zona);
          if (rr.r === 2) {
            const t = document.createElement('button');
            t.type = 'button'; t.className = 'btn'; t.textContent = 'Guarda di taglio';
            t.onclick = diTaglio;
            zona.insertBefore(t, zona.firstChild);
            zona.insertBefore(document.createTextNode(' '), t.nextSibling);
          }
        };
      });
      sc.ridisegna();
    }

    L.parti();
  }

  /* ---------------- Livello 4: la matrice è dove finiscono e₁ ed e₂ ---------------- */

  // La F: non ha simmetrie, quindi si vede subito se è ruotata o rovesciata.
  const FIGURA = [[0, 0], [.6, 0], [.6, 1.2], [1.5, 1.2], [1.5, 1.8], [.6, 1.8], [.6, 2.4], [1.8, 2.4], [1.8, 3], [0, 3]];
  const RISPOSTE4 = [['nessuna', 'Nessuna'], ['una', 'Una sola'], ['infinite', 'Infinite']];

  function livello4() {
    const d = piano('l4Dom', 6), c = piano('l4Cod', 6);
    const domanda = el('l4Q'), dati = el('l4Dati'), box = el('l4Box');
    let R, A, fase, sbagli, tocco, b, zonaFb, zonaAz;

    const col = k => [A[0][k], A[1][k]];
    const applica = (M, x) => [M[0][0] * x[0] + M[0][1] * x[1], M[1][0] * x[0] + M[1][1] * x[1]];
    const mobile = () => R && ((R.tipo === 'costruisci' || R.tipo === 'nucleo') && fase === 'gioco');

    /** una soluzione di Ax = b se b sta nell'immagine di una A di rango 1, altrimenti null */
    function particolare() {
      const m = analizza(A);
      if (!paralleli(m.im, b)) return null;
      const k = (A[0][0] || A[1][0]) ? 0 : 1, cc = col(k), i = cc[0] ? 0 : 1, t = b[i] / cc[i];
      return k === 0 ? [t, 0] : [0, t];
    }

    d.draw(() => {
      if (!R) return;
      const m = analizza(A);
      if (m.r === 0) poligono(d, [[-7, -7], [7, -7], [7, 7], [-7, 7]], { riempi: 'danger', alpha: .12 });
      if (R.tipo === 'nucleo') retta(d, R.ker, { color: 'danger', width: 2, dash: true });
      if (m.r === 1 && R.tipo !== 'fibra') retta(d, m.ker, { color: 'danger', width: 6, alpha: .3 });
      if (R.tipo === 'fibra') {
        retta(d, m.ker, { color: 'danger', width: 6, alpha: .3 });
        d.text(m.ker[0] * 1.6, m.ker[1] * 1.6, 'ker A', { color: 'danger', size: 12, bold: true, halo: true, dx: 6 });
        const x0 = fase === 'fine' ? particolare() : null;
        if (x0) {
          retta(d, m.ker, { color: 'ok', width: 3 }, x0);
          d.dot(x0[0], x0[1], { r: 5, color: 'ok', ring: true });
        }
      }
      poligono(d, FIGURA, { riempi: 'purple', alpha: .22, bordo: 'purple' });
      freccia(d, [1, 0], 'e₁', 'accent'); freccia(d, [0, 1], 'e₂', 'warn');
      if (R.tipo === 'dove') {
        if (fase === 'fine') cammino(d, R.x, [[1, 0], [0, 1]], ['accent', 'warn']);
        mirino(d, R.x, 'x');
      }
    });

    c.draw(() => {
      if (!R) return;
      const m = analizza(A), immagine = FIGURA.map(q => applica(A, q));
      griglia(c, col(0), col(1), { c1: 'accent', c2: 'warn', alpha: .26 });
      if (m.r === 1) retta(c, m.im, { color: 'ok', width: 6, alpha: .3 });
      if (R.tipo === 'costruisci') poligono(c, FIGURA.map(q => applica(R.bersaglio, q)), { bordo: 'ok', width: 2.2, dash: true });
      if (m.r === 0) c.dot(0, 0, { r: 7, color: 'ok' });
      poligono(c, immagine, { riempi: 'purple', alpha: .25, bordo: 'purple' });
      freccia(c, col(0), 'L(e₁)', 'accent'); freccia(c, col(1), 'L(e₂)', 'warn');
      if (R.tipo === 'dove') {
        if (tocco) c.dot(tocco[0], tocco[1], { r: 5.5, color: 'danger', ring: true });
        if (fase === 'fine') { cammino(c, R.x, [col(0), col(1)], ['accent', 'warn']); mirino(c, R.y, 'L(x)'); }
      }
      if (mobile()) { maniglia(c, col(0), 'accent'); maniglia(c, col(1), 'warn'); }
      if (R.tipo === 'fibra') {
        mirino(c, b, 'b');
        if (fase === 'fine') maniglia(c, b, 'ok');
      }
    });

    trascina(c, {
      elenco: () => {
        if (mobile()) return [{ id: 0, q: col(0) }, { id: 1, q: col(1) }];
        if (R && R.tipo === 'fibra' && fase === 'fine') return [{ id: 'b', q: b }];
        return [];
      },
      sposta: (id, q) => {
        if (id === 'b') {
          if (uguali(b, q)) return;
          b = q;
          ridisegna();
          scriviDati();
          return;
        }
        if (A[0][id] === q[0] && A[1][id] === q[1]) return;
        A[0][id] = q[0]; A[1][id] = q[1];
        ridisegna();
        scriviDati();
      },
      fine: () => verifica(),
      cursore: () => (R && R.tipo === 'dove' && fase === 'gioco' ? 'crosshair' : '')
    });

    function ridisegna() { d.redraw(); c.redraw(); }

    function scriviDati() {
      const m = analizza(A);
      let t = '$A=' + texMat(A) + '$ &nbsp; $r(L)=' + m.r + '$, $\\dim\\ker L=' + (2 - m.r) + '$, somma $=2$';
      if (m.r === 2) t += ', $\\det A=' + m.det + '$';
      if (R.tipo === 'nucleo') t += '<br>$L' + texPunto(R.ker) + '=' + texPunto(applica(A, R.ker)) + '$' + (R.im ? ', immagine: ' + (m.r === 1 ? 'retta di $' + texPunto(m.im) + '$' : m.r === 2 ? 'tutto $\\R^2$' : '$\\{\\vzero\\}$') : '');
      if (R.tipo === 'fibra' && fase === 'fine') {
        const x0 = particolare();
        t += x0
          ? '<br>$\\vb=' + texPunto(b) + '$ sta nell\'immagine: soluzioni $\\vx=' + texPunto(x0) + '+t' + texPunto(analizza(A).ker) + '$'
          : '<br>$\\vb=' + texPunto(b) + '$ è fuori dall\'immagine: nessuna soluzione';
      }
      dati.innerHTML = t;
      AM.typeset(dati);
    }

    /** primoColpo finisce nei progressi; tipo è il colore del responso */
    function riuscito(primoColpo, testa, tipo) {
      fase = 'fine';
      L.esito(primoColpo);
      ridisegna();
      scriviDati();
      scrivi(zonaFb, testa + ' ' + R.dopo, tipo || (primoColpo ? 'ok' : 'no'));
      L.avanti(zonaAz);
    }

    function verifica() {
      if (fase !== 'gioco') return;
      const m = analizza(A);
      if (R.tipo === 'costruisci' && uguali(A, R.bersaglio)) riuscito(true, '<strong>✓ Coincide.</strong>');
      if (R.tipo === 'nucleo') {
        const zero = uguali(applica(A, R.ker), [0, 0]);
        if (zero && m.r === 1 && (!R.im || paralleli(m.im, R.im))) riuscito(true, '<strong>✓ Ci sei.</strong>');
      }
    }

    const L = creaLivello('l4', LAB.l4, 'errori', avvia);

    c.cv.addEventListener('click', e => {
      if (!R || R.tipo !== 'dove' || fase !== 'gioco') return;
      const q = c.cv.getBoundingClientRect();
      const x = Math.round(c.invX(e.clientX - q.left)), y = Math.round(c.invY(e.clientY - q.top));
      if (x === R.y[0] && y === R.y[1]) {
        tocco = null;
        riuscito(sbagli === 0, sbagli === 0 ? '<strong>✓ Giusto al primo colpo.</strong>' : '<strong>✓ Giusto.</strong>', 'ok');
        return;
      }
      sbagli++;
      tocco = [x, y];
      ridisegna();
      let testo = '<strong>Non ancora.</strong> Hai toccato $' + texPunto(tocco) + '$.';
      testo += ' Prova così: $L' + texPunto(R.x) + '=' + texN(R.x[0]) + '\\cdot L(\\mathbf e_1)' + (R.x[1] < 0 ? '' : '+') + texN(R.x[1]) + '\\cdot L(\\mathbf e_2)$. Parti dall\'origine e cammina sulle due frecce.';
      scrivi(zonaFb, testo, 'no');
      if (sbagli >= 2) {
        zonaAz.innerHTML = '<button type="button" class="btn ghost" data-resa>Mostrami la risposta</button>';
        zonaAz.querySelector('[data-resa]').onclick = () => { tocco = null; riuscito(false, '<strong>Ecco la risposta.</strong>'); };
      }
    });

    function avvia(rr) {
      R = rr; fase = 'gioco'; sbagli = 0; tocco = null; b = rr.b ? rr.b.slice() : null;
      A = rr.A ? rr.A.map(x => x.slice()) : [[1, 0], [0, 1]];
      domanda.innerHTML = rr.q;
      AM.typeset(domanda);
      box.innerHTML = (rr.tipo === 'fibra'
        ? '<div class="lab-opts lab-opts-riga">' + RISPOSTE4.map(x => '<button type="button" class="lab-opt" data-v="' + x[0] + '">' + x[1] + '</button>').join('') + '</div>'
        : '') + '<div class="lab-fb" hidden></div><div class="lab-azioni"></div>';
      zonaFb = box.querySelector('.lab-fb');
      zonaAz = box.querySelector('.lab-azioni');
      ridisegna();
      scriviDati();

      if (rr.tipo === 'costruisci' || rr.tipo === 'nucleo') {
        zonaAz.innerHTML = '<button type="button" class="btn ghost" data-resa>Mostrami una soluzione</button>';
        zonaAz.querySelector('[data-resa]').onclick = () => {
          A = (rr.tipo === 'costruisci' ? rr.bersaglio : rr.sol).map(x => x.slice());
          riuscito(false, '<strong>Ecco una soluzione.</strong>');
        };
      }
      if (rr.tipo === 'fibra') {
        box.querySelectorAll('.lab-opt').forEach(o => {
          o.onclick = () => {
            const giusto = o.dataset.v === rr.esito;
            box.querySelectorAll('.lab-opt').forEach(x => {
              x.disabled = true;
              if (x.dataset.v === rr.esito) x.classList.add('giusta');
            });
            if (!giusto) o.classList.add('sbagliata');
            riuscito(giusto, giusto ? '<strong>✓ Giusto.</strong>' : '<strong>✗ Non proprio.</strong>');
          };
        });
      }
    }

    L.parti();
  }

  /* ---------------- avvio ---------------- */

  document.addEventListener('am:ready', function () {
    riepilogo();
    livello1();
    livello2();
    livello3();
    livello4();
  });
})();
