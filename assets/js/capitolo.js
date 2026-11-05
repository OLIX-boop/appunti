/* ============================================================
   capitolo.js — il capitolo in un punto solo (Geometria)
   Al posto della checklist: una frase, la mappa dei concetti e una
   spunta sola. Dove esistono i dati (window.PRIMA) aggiunge la prima
   lettura: un paragrafo alla volta, senza dimostrazioni, con l'idea
   prima della definizione e una domanda prima di andare avanti.
   I contenuti stanno in geometria/data/mappe.js.
   ============================================================ */
(function () {
  'use strict';

  const AM = window.AM;

  /* ---------------- mappa ---------------- */

  function creaMappa(box, M) {
    const nodi = M.nodi, perId = {};
    nodi.forEach(n => { perId[n.id] = n; });
    const righe = [];
    nodi.forEach(n => { (righe[n.r] = righe[n.r] || []).push(n); });

    box.innerHTML =
      '<p class="cap-frase">' + M.frase + '</p>' +
      '<div class="mappa"><svg class="mappa-fili" aria-hidden="true"></svg>' +
      righe.map(riga => '<div class="mappa-riga" data-n="' + riga.length + '">' + riga.map(n =>
        '<button type="button" class="mappa-nodo' + (n.ext ? ' esterno' : '') + '" data-id="' + n.id + '">' + n.t + '</button>').join('') + '</div>').join('') +
      '</div><div class="mappa-info" aria-live="polite"></div>';

    const mappa = box.querySelector('.mappa'), svg = box.querySelector('svg'), info = box.querySelector('.mappa-info');
    const bottone = id => mappa.querySelector('[data-id="' + id + '"]');
    const figli = id => nodi.filter(n => (n.da || []).indexOf(id) >= 0).map(n => n.id);

    function fili() {
      const R = mappa.getBoundingClientRect();
      if (!R.width) return;
      svg.setAttribute('viewBox', '0 0 ' + R.width + ' ' + R.height);
      svg.innerHTML = nodi.map(n => (n.da || []).map(d => {
        const a = bottone(d).getBoundingClientRect(), b = bottone(n.id).getBoundingClientRect();
        const x1 = a.left + a.width / 2 - R.left, y1 = a.bottom - R.top;
        const x2 = b.left + b.width / 2 - R.left, y2 = b.top - R.top, m = (y1 + y2) / 2;
        return '<path data-da="' + d + '" data-a="' + n.id + '" d="M' + x1 + ' ' + y1 + ' C' + x1 + ' ' + m + ' ' + x2 + ' ' + m + ' ' + x2 + ' ' + y2 + '"/>';
      }).join('')).join('');
      segna();
    }

    let scelto = null;

    function risali(id, visti) {
      (perId[id].da || []).forEach(d => { if (!visti[d]) { visti[d] = true; risali(d, visti); } });
      return visti;
    }

    function segna() {
      mappa.querySelectorAll('.mappa-nodo').forEach(b => b.classList.remove('sel', 'pre', 'dopo', 'spento'));
      svg.querySelectorAll('path').forEach(p => p.setAttribute('class', ''));
      if (!scelto) return;
      const prima = risali(scelto, {}), dopo = {};
      figli(scelto).forEach(f => { dopo[f] = true; });
      nodi.forEach(n => {
        const b = bottone(n.id);
        if (n.id === scelto) b.classList.add('sel');
        else if (prima[n.id]) b.classList.add('pre');
        else if (dopo[n.id]) b.classList.add('dopo');
        else b.classList.add('spento');
      });
      svg.querySelectorAll('path').forEach(p => {
        const da = p.getAttribute('data-da'), a = p.getAttribute('data-a');
        if ((prima[da] && (prima[a] || a === scelto))) p.setAttribute('class', 'pre');
        else if (da === scelto) p.setAttribute('class', 'dopo');
      });
    }

    function mostra(id) {
      scelto = id;
      segna();
      const n = perId[id], pre = (n.da || []).map(d => perId[d].t), post = figli(id).map(d => perId[d].t);
      info.innerHTML = '<strong>' + n.t + '.</strong> ' + n.idea +
        (pre.length ? '<div class="mappa-rel"><span class="pre">Prima serve:</span> ' + pre.join(' · ') + '</div>' : '') +
        (post.length ? '<div class="mappa-rel"><span class="dopo">Porta a:</span> ' + post.join(' · ') + '</div>' : '') +
        '<div class="mappa-vai"><a class="btn sm" href="' + n.a + '">' + (n.ext ? 'Vai alla Sezione 3' : 'Vai al paragrafo') + '</a></div>';
      AM.typeset(info);
    }

    mappa.addEventListener('click', e => {
      const b = e.target.closest('.mappa-nodo');
      if (b) mostra(b.dataset.id);
    });

    info.innerHTML = '<span class="muted">Tocca un riquadro: vedi di che cosa parla, che cosa serve prima e dove porta.</span>';
    AM.typeset(mappa);
    AM.typeset(box.querySelector('.cap-frase'));
    fili();
    new ResizeObserver(fili).observe(mappa);
    // KaTeX e i font arrivano dopo: le altezze dei riquadri possono cambiare
    addEventListener('load', fili);
  }

  /* ---------------- una spunta sola ---------------- */

  function creaSpunta(box, n) {
    const sez = AM.materia('geometria').sezioni.find(s => s.n === n);
    const ids = sez.topics.map(t => t.id);
    const riga = document.createElement('label');
    riga.className = 'cap-fatto';
    riga.innerHTML = '<input type="checkbox"><span>Ho studiato tutto il capitolo</span>';
    const cb = riga.querySelector('input');
    cb.checked = ids.every(id => AM.store.get('topic:' + id, false));
    cb.addEventListener('change', () => {
      ids.forEach(id => AM.store.set('topic:' + id, cb.checked));
    });
    box.appendChild(riga);
  }

  /* ---------------- prima lettura ---------------- */

  function creaPrimaLettura(box, n, P) {
    const main = document.querySelector('main');
    const N = P.passi.length, chiave = 'prima:g' + n;
    const stato = Object.assign({ attiva: true, passo: 0 }, AM.store.get(chiave, {}) || {});
    const salva = () => AM.store.set(chiave, stato);

    // a ogni figlio di main il suo passo: 0 è l'introduzione, -1 ciò che arriva dopo la prima lettura
    const ordine = P.passi.map(p => p.h2);
    let corrente = 0;
    Array.from(main.children).forEach(f => {
      if (f.tagName === 'H2' && f.id !== 'mappa') {
        const k = ordine.indexOf(f.id);
        corrente = k >= 0 ? k + 1 : -1;
      }
      // alla partenza restano titolo e mappa: i riquadri dell'introduzione tornano in «Mostra tutto»
      f.dataset.passo = (corrente === 0 && f.matches('.box')) ? -1 : corrente;
    });

    // parti da seconda lettura: dall'h3 indicato fino al titolo successivo
    let nascondi = false;
    Array.from(main.children).forEach(f => {
      if (f.tagName === 'H2' || f.tagName === 'H3') nascondi = P.seconda.indexOf(f.id) >= 0;
      if (nascondi) f.classList.add('seconda');
    });

    // l'idea subito sotto il titolo, la domanda in fondo al paragrafo
    P.passi.forEach((p, k) => {
      const h2 = document.getElementById(p.h2), figli = main.querySelectorAll('[data-passo="' + (k + 1) + '"]');
      const idea = document.createElement('div');
      idea.className = 'box tip prima-solo';
      idea.dataset.passo = k + 1;
      idea.innerHTML = '<div class="box-title">↳ Perché ti serve</div><p>' + p.perche + '</p>' +
        '<p class="' + (p.lab ? '' : 'mb0') + '"><strong>L\'idea.</strong> ' + p.idea + '</p>' +
        (p.lab ? '<p class="mb0"><a href="../laboratorio.html#' + p.lab + '">Provalo con le mani nel laboratorio →</a></p>' : '');
      h2.after(idea);
      const dom = document.createElement('div');
      dom.className = 'box prima-solo prima-domanda';
      dom.dataset.passo = k + 1;
      dom.innerHTML = '<div class="box-title">✎ Prima di andare avanti</div><p>' + p.domanda + '</p>' +
        '<details class="reveal sol prima-check"><summary>Ho risposto: fammi controllare</summary>' +
        '<div class="reveal-body"><p class="mb0">' + p.risposta + '</p></div></details>';
      figli[figli.length - 1].after(dom);
      AM.typeset(idea);
      AM.typeset(dom);
    });

    const testa = document.createElement('div');
    testa.className = 'passo-testa prima-solo';
    main.prepend(testa);
    const piede = document.createElement('div');
    piede.className = 'passo-piede prima-solo';
    main.appendChild(piede);

    const interruttore = document.createElement('div');
    interruttore.className = 'cap-modo';
    box.appendChild(interruttore);

    const titolo = i => (i === 0 ? 'Mappa del capitolo' : P.passi[i - 1].titolo);

    function disegna() {
      document.body.classList.toggle('prima-on', stato.attiva);
      main.querySelectorAll('[data-passo]').forEach(f => f.classList.toggle('qui', +f.dataset.passo === stato.passo));
      const i = stato.passo;
      testa.innerHTML = '<div class="passo-riga"><strong>Prima lettura</strong><span class="muted">' +
        (i === 0 ? 'Partenza' : 'Passo ' + i + ' di ' + N) + '</span>' +
        '<button type="button" class="btn ghost sm" data-tutto>Mostra tutto il capitolo</button></div>' +
        '<div class="passo-barra"><span style="width:' + Math.round(i / N * 100) + '%"></span></div>';
      piede.innerHTML =
        (i > 0 ? '<button type="button" class="btn" data-vai="' + (i - 1) + '">← ' + titolo(i - 1) + '</button>' : '') +
        (i < N
          ? '<button type="button" class="btn primary" data-vai="' + (i + 1) + '">' + (i === 0 ? 'Inizia' : 'Avanti') + ': ' + titolo(i + 1) + ' →</button>'
          : '<button type="button" class="btn primary" data-tutto>Fatto: passa al capitolo completo</button>');
      if (i === N) {
        piede.insertAdjacentHTML('afterbegin', '<p class="passo-fine"><strong>Prima lettura finita.</strong> Hai la struttura del capitolo. Ora nel capitolo completo trovi dimostrazioni, approfondimenti, quiz ed errori tipici.</p>');
      }
      interruttore.innerHTML = stato.attiva ? ''
        : '<button type="button" class="btn sm" data-prima>Leggilo un passo alla volta</button>' +
          '<span class="muted small">Un paragrafo per volta, l\'idea prima della definizione, le dimostrazioni dopo.</span>';
      AM.typeset(testa);
      AM.typeset(piede);
    }

    function vai(i, inCima) {
      stato.passo = Math.max(0, Math.min(N, i));
      salva();
      disegna();
      if (inCima) window.scrollTo({ top: 0, behavior: 'auto' });
    }

    function imposta(attiva, i) {
      stato.attiva = attiva;
      if (i !== undefined) stato.passo = i;
      salva();
      disegna();
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    document.addEventListener('click', e => {
      const vaiBtn = e.target.closest('[data-vai]');
      if (vaiBtn) { vai(+vaiBtn.dataset.vai, true); return; }
      if (e.target.closest('[data-tutto]')) { imposta(false); return; }
      if (e.target.closest('[data-prima]')) { imposta(true); return; }
      // un link interno a un paragrafo di un altro passo: prima si apre quel passo, poi il browser ci scorre
      const a = e.target.closest('a[href^="#"]');
      if (!a || !stato.attiva) return;
      const dest = document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)));
      const contenitore = dest && dest.closest('[data-passo]');
      if (!contenitore) return;
      const k = +contenitore.dataset.passo;
      if (k < 0) imposta(false);
      else if (k !== stato.passo) vai(k, false);
    }, true);

    // l'indice laterale non può usare i titoli nascosti: in prima lettura segna il passo aperto
    const spia = () => {
      if (!stato.attiva) return;
      document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
      const id = stato.passo ? P.passi[stato.passo - 1].h2 : 'mappa';
      const link = document.querySelector('.sidebar a[href="#' + id + '"]');
      if (link) link.classList.add('active');
    };
    addEventListener('scroll', () => requestAnimationFrame(() => requestAnimationFrame(spia)), { passive: true });

    if (location.hash) {
      const dest = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      const contenitore = dest && dest.closest('[data-passo]');
      if (contenitore && +contenitore.dataset.passo >= 0) stato.passo = +contenitore.dataset.passo;
      else if (contenitore) stato.attiva = false;
    }
    disegna();
    spia();
  }

  /* ---------------- ingresso ---------------- */

  /** Riempie il contenitore con frase, mappa, spunta e, se c'è, la prima lettura. */
  AM.mappaCapitolo = function (sel, n) {
    const box = document.querySelector(sel), M = window.MAPPE && window.MAPPE[n];
    if (!box || !M) return;
    creaMappa(box, M);
    creaSpunta(box, n);
    const P = window.PRIMA && window.PRIMA[n];
    if (P) creaPrimaLettura(box, n, P);
  };
})();
