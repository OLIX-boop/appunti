/* ============================================================
   meg.js — metodo di eliminazione di Gauss, passo per passo
   Aritmetica esatta su frazioni: niente errori di arrotondamento,
   e i numeri restano leggibili come a lezione.
   Notazione del corso: l_i = zeri iniziali, pivot, 0-pivot, rango r.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- frazioni esatte ---------------- */
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; }

  function F(n, d) {
    if (d === undefined) d = 1;
    if (d === 0) throw new Error('denominatore nullo');
    if (d < 0) { n = -n; d = -d; }
    var g = gcd(n, d);
    return { n: n / g, d: d / g };
  }
  F.add = function (a, b) { return F(a.n * b.d + b.n * a.d, a.d * b.d); };
  F.sub = function (a, b) { return F(a.n * b.d - b.n * a.d, a.d * b.d); };
  F.mul = function (a, b) { return F(a.n * b.n, a.d * b.d); };
  F.div = function (a, b) { if (b.n === 0) throw new Error('divisione per zero'); return F(a.n * b.d, a.d * b.n); };
  F.neg = function (a) { return F(-a.n, a.d); };
  F.isZero = function (a) { return a.n === 0; };
  F.eq = function (a, b) { return a.n * b.d === b.n * a.d; };
  F.str = function (a) { return a.d === 1 ? String(a.n) : a.n + '/' + a.d; };
  F.tex = function (a) {
    if (a.d === 1) return String(a.n);
    return (a.n < 0 ? '-' : '') + '\\tfrac{' + Math.abs(a.n) + '}{' + a.d + '}';
  };

  /* ---------------- il MEG ---------------- */

  function clone(M) { return M.map(function (r) { return r.slice(); }); }

  /** numero di zeri iniziali della riga (n se tutta nulla) */
  function elle(riga) {
    for (var j = 0; j < riga.length; j++) if (!F.isZero(riga[j])) return j;
    return riga.length;
  }

  /**
   * Riduce a scala [A|b] registrando ogni passo.
   * M: matrice di frazioni (m x (nA + nB)); nA = colonne dei coefficienti.
   * Restituisce { passi: [...], finale, rangoA, rangoTot, pivot }
   */
  function riduci(M, nA) {
    M = clone(M);
    var m = M.length, tot = M[0].length;
    var passi = [{ M: clone(M), op: 'Matrice di partenza', tipo: 'start', pivot: [] }];
    var pivot = [];   // [{i, j}]
    var riga = 0;

    for (var col = 0; col < tot && riga < m; col++) {
      // cerca un pivot nella colonna col, dalla riga 'riga' in giù
      var p = -1;
      for (var i = riga; i < m; i++) if (!F.isZero(M[i][col])) { p = i; break; }
      if (p < 0) continue;                      // colonna tutta nulla sotto: si passa oltre

      if (p !== riga) {
        var t = M[p]; M[p] = M[riga]; M[riga] = t;
        passi.push({
          M: clone(M), tipo: 'scambio',
          op: 'R<sub>' + (riga + 1) + '</sub> ↔ R<sub>' + (p + 1) + '</sub>',
          spiega: 'Serve un elemento non nullo in posizione pivot: si scambiano le due righe.',
          pivot: pivot.concat([{ i: riga, j: col }]), attive: [riga, p]
        });
      }

      pivot = pivot.concat([{ i: riga, j: col }]);

      for (var k = riga + 1; k < m; k++) {
        if (F.isZero(M[k][col])) continue;
        var f = F.div(M[k][col], M[riga][col]);
        for (var j = 0; j < tot; j++) M[k][j] = F.sub(M[k][j], F.mul(f, M[riga][j]));
        passi.push({
          M: clone(M), tipo: 'elimina',
          op: combina(k, f, riga),
          spiega: 'Si annulla l\'elemento sotto il pivot, sottraendo un multiplo della riga del pivot.',
          pivot: pivot.slice(), attive: [k]
        });
      }
      riga++;
    }

    // L'ultimo pivot (o gli ultimi) possono essere individuati senza che segua
    // alcuna eliminazione: in quel caso non viene registrato un nuovo passo e
    // l'ultimo passo resterebbe con l'elenco dei pivot incompleto.
    passi[passi.length - 1].pivot = pivot.slice();
    passi[passi.length - 1].finale = true;

    var rangoTot = pivot.length;
    var rangoA = pivot.filter(function (p) { return p.j < nA; }).length;
    var zeroPivot = pivot.some(function (p) { return p.j >= nA; });

    return {
      passi: passi, finale: M, pivot: pivot,
      rangoA: rangoA, rangoTot: rangoTot, zeroPivot: zeroPivot, nA: nA, m: m
    };
  }

  /** «R_k − (f)·R_p» scritto in modo leggibile: f = 1 → «− R_p», f = −1 → «+ R_p» */
  function combina(k, f, p) {
    var R = function (i) { return 'R<sub>' + (i + 1) + '</sub>'; };
    var segno = f.n > 0 ? ' − ' : ' + ', a = F(Math.abs(f.n), f.d);
    return R(k) + ' → ' + R(k) + segno + (F.eq(a, F(1)) ? '' : F.str(a) + '·') + R(p);
  }

  /**
   * MEG-J (eliminazione di Gauss-Jordan) nelle tre parti degli appunti:
   *   Parte 1 — MEG (a scala);  Parte 2 — normalizzazione (pivot = 1);
   *   Parte 3 — seconda eliminazione (zeri sopra i pivot, dall'ultimo al primo).
   * Il risultato è la matrice totalmente ridotta, che è unica.
   * Ogni passo porta il campo fase (0 = partenza, 1, 2, 3).
   */
  function riduciJ(M, nA) {
    var r = riduci(M, nA);
    var passi = r.passi.map(function (p, k) {
      var q = {}; for (var c in p) q[c] = p[c];
      q.fase = k === 0 ? 0 : 1; delete q.finale;
      return q;
    });
    var A = clone(r.finale), piv = r.pivot, tot = A[0].length;
    var R = function (i) { return 'R<sub>' + (i + 1) + '</sub>'; };

    // Parte 2: normalizzazione, tutte le righe in un passo (come negli appunti)
    var ops = [], righe = [];
    piv.forEach(function (p) {
      var v = A[p.i][p.j];
      if (F.eq(v, F(1))) return;
      var inv = F.div(F(1), v);
      for (var j = 0; j < tot; j++) A[p.i][j] = F.mul(A[p.i][j], inv);
      var coef = F.eq(inv, F(-1)) ? '−' : (inv.d === 1 && inv.n > 0 ? F.str(inv) : '(' + F.str(inv) + ')') + '·';
      ops.push(R(p.i) + ' → ' + coef + R(p.i));
      righe.push(p.i);
    });
    if (ops.length) passi.push({
      M: clone(A), fase: 2, tipo: 'normalizza', op: ops.join(', &nbsp;'),
      spiega: 'Ogni riga non nulla si divide per il proprio pivot: ora tutti i pivot valgono 1.',
      pivot: piv.slice(), attive: righe
    });

    // Parte 3: seconda eliminazione, dal pivot più in basso verso l'alto
    for (var q = piv.length - 1; q >= 0; q--) {
      var p = piv[q];
      ops = []; righe = [];
      for (var k = 0; k < p.i; k++) {
        var f = A[k][p.j];
        if (F.isZero(f)) continue;
        for (var j = 0; j < tot; j++) A[k][j] = F.sub(A[k][j], F.mul(f, A[p.i][j]));
        ops.push(combina(k, f, p.i));
        righe.push(k);
      }
      if (ops.length) passi.push({
        M: clone(A), fase: 3, tipo: 'risali', op: ops.join(', &nbsp;'),
        spiega: 'Si annullano gli elementi sopra il pivot della riga ' + (p.i + 1) + ', usando quella riga (che ha il pivot uguale a 1).',
        pivot: piv.slice(), attive: righe
      });
    }
    passi[passi.length - 1].finale = true;

    return {
      passi: passi, finale: A, pivot: piv,
      rangoA: r.rangoA, rangoTot: r.rangoTot, zeroPivot: r.zeroPivot, nA: nA, m: r.m
    };
  }

  /* ---------------- resa a schermo ---------------- */

  /**
   * Costruisce l'HTML di una matrice, con colonna aumentata e pivot evidenziati.
   * opts: { nA, pivot:[{i,j}], attive:[i], elle:true }
   */
  function html(M, opts) {
    opts = opts || {};
    var nA = opts.nA !== undefined ? opts.nA : M[0].length;
    var piv = opts.pivot || [];
    var attive = opts.attive || [];
    function isPivot(i, j) { return piv.some(function (p) { return p.i === i && p.j === j; }); }

    var out = '<table class="matrice"><tbody>';
    for (var i = 0; i < M.length; i++) {
      out += '<tr' + (attive.indexOf(i) >= 0 ? ' class="attiva"' : '') + '>';
      out += '<td class="lab">R<sub>' + (i + 1) + '</sub></td>';
      out += '<td class="bra"></td>';
      for (var j = 0; j < M[i].length; j++) {
        var cls = [];
        if (isPivot(i, j)) cls.push(j >= nA ? 'zeropivot' : 'pivot');
        if (j === nA) cls.push('sep');
        out += '<td class="' + cls.join(' ') + '">' + F.str(M[i][j]) + '</td>';
      }
      out += '<td class="ket"></td>';
      if (opts.elle) {
        var l = elle(M[i]);
        out += '<td class="lab elle">ℓ<sub>' + (i + 1) + '</sub>=' + l + '</td>';
      }
      out += '</tr>';
    }
    out += '</tbody></table>';
    return out;
  }

  /** true se la matrice è a scala secondo il criterio degli l_i */
  function aScala(M) {
    var n = M[0].length, prec = -1;
    for (var i = 0; i < M.length; i++) {
      var l = elle(M[i]);
      if (l === n) {                       // riga nulla: tutte le successive devono esserlo
        for (var k = i + 1; k < M.length; k++) if (elle(M[k]) !== n) return false;
        return true;
      }
      if (l <= prec) return false;
      prec = l;
    }
    return true;
  }

  /** analisi finale del sistema ridotto */
  function analizza(res) {
    var n = res.nA;
    var a = {
      rangoA: res.rangoA, rangoTot: res.rangoTot, n: n, m: res.m,
      compatibile: !res.zeroPivot,
      libere: n - res.rangoA
    };
    if (!a.compatibile) a.esito = 'incompatibile';
    else if (a.rangoA === n) a.esito = 'unica';
    else a.esito = 'infinite';
    return a;
  }

  window.MEG = {
    F: F, riduci: riduci, riduciJ: riduciJ, html: html, elle: elle, aScala: aScala, analizza: analizza,
    /** comodo: costruisce una matrice di frazioni da numeri interi */
    da: function (righe) { return righe.map(function (r) { return r.map(function (x) { return F(x); }); }); }
  };
})();
