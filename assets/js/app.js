/* ============================================================
   app.js — infrastruttura della guida di studio
   tema · sidebar · KaTeX · reveal · progressi · quiz · flashcard
   ============================================================ */
(function () {
  'use strict';

  const NS = 'am1:';
  const store = {
    get(k, def) {
      try { const v = localStorage.getItem(NS + k); return v === null ? def : JSON.parse(v); }
      catch (e) { return def; }
    },
    set(k, v) { try { localStorage.setItem(NS + k, JSON.stringify(v)); } catch (e) {} },
    del(k) { try { localStorage.removeItem(NS + k); } catch (e) {} },
    keys() {
      const out = [];
      try { for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k.indexOf(NS) === 0) out.push(k.slice(NS.length)); } } catch (e) {}
      return out;
    }
  };
  window.AM = window.AM || {};
  AM.store = store;

  /* ---------------- Toast ---------------- */
  let toastEl = null, toastT = null;
  AM.toast = function (msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    requestAnimationFrame(() => toastEl.classList.add('show'));
    clearTimeout(toastT);
    toastT = setTimeout(() => toastEl.classList.remove('show'), 1900);
  };

  /* ---------------- Tema ---------------- */
  (function theme() {
    const saved = store.get('theme', null);
    if (saved) document.documentElement.setAttribute('data-theme', saved);
    document.addEventListener('click', e => {
      const b = e.target.closest('#themeBtn');
      if (!b) return;
      const cur = document.documentElement.getAttribute('data-theme');
      const sysDark = matchMedia('(prefers-color-scheme: dark)').matches;
      const now = cur ? cur : (sysDark ? 'dark' : 'light');
      const next = now === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      store.set('theme', next);
      document.dispatchEvent(new CustomEvent('themechange'));
    });
  })();

  /* ---------------- KaTeX ---------------- */
  AM.typeset = function (root) {
    if (typeof renderMathInElement !== 'function') return;
    try {
      renderMathInElement(root || document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\[', right: '\\]', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false }
        ],
        throwOnError: false,
        ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'option'],
        macros: {
          '\\R': '\\mathbb{R}', '\\N': '\\mathbb{N}', '\\Z': '\\mathbb{Z}',
          '\\Q': '\\mathbb{Q}', '\\C': '\\mathbb{C}', '\\K': '\\mathbb{K}',
          // vettori e matrici (Geometria e Algebra Lineare)
          '\\vx': '\\mathbf{x}', '\\vy': '\\mathbf{y}', '\\vb': '\\mathbf{b}',
          '\\vv': '\\mathbf{v}', '\\vu': '\\mathbf{u}', '\\vzero': '\\mathbf{0}',
          '\\M': '\\mathcal{M}', '\\vw': '\\mathbf{w}',
          '\\rg': '\\operatorname{rg}', '\\tr': '\\operatorname{tr}',
          '\\diag': '\\operatorname{diag}', '\\dett': '\\operatorname{det}',
          '\\eps': '\\varepsilon', '\\dd': '\\,\\mathrm{d}',
          '\\sgn': '\\operatorname{sgn}', '\\Real': '\\operatorname{Re}', '\\Imag': '\\operatorname{Im}',
          '\\arccot': '\\operatorname{arccot}', '\\sen': '\\operatorname{sen}'
        }
      });
    } catch (e) { console.warn('KaTeX:', e); }
    // Nei menu a tendina KaTeX non può disegnare: le formule diventano testo semplice.
    (root || document.body).querySelectorAll('option').forEach(function (o) {
      if (o.textContent.indexOf('$') >= 0) o.textContent = AM.testoPiano(o.textContent);
    });
  };

  /* LaTeX semplice → testo Unicode leggibile (x², ∑, √n, 1/n, ≤ …), per <option> e titoli */
  var APICE = { '0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','n':'ⁿ','x':'ˣ','i':'ⁱ','k':'ᵏ','+':'⁺','-':'⁻','(':'⁽',')':'⁾' };
  var PEDICE = { '0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉','n':'ₙ','k':'ₖ','i':'ᵢ','j':'ⱼ','+':'₊','-':'₋' };
  var SIMBOLI = { pi:'π', infty:'∞', sum:'∑', le:'≤', leq:'≤', ge:'≥', geq:'≥', lt:'<', gt:'>', ne:'≠', times:'×', cdot:'·',
                  to:'→', in:'∈', N:'ℕ', Z:'ℤ', Q:'ℚ', R:'ℝ', C:'ℂ', K:'𝕂', eps:'ε', varepsilon:'ε', alpha:'α', theta:'θ', ell:'ℓ' };
  function mappa(s, tab, segno) {
    // se un carattere non ha l'apice/pedice Unicode si scrive ^(…): il segno è un segnaposto,
    // altrimenti la regola successiva su «^x» riconvertirebbe la parentesi
    var mark = segno === '^' ? '\u0006' : '\u0007';
    for (var k = 0, o = ''; k < s.length; k++) { if (!tab[s[k]]) return mark + (s.length > 1 ? '(' + s + ')' : s); o += tab[s[k]]; }
    return o;
  }
  function semplice(a) { return /^([\w.√π^]+|√?\([^()]*\)[\w^]*)$/.test(a) ? a : '(' + a + ')'; }
  AM.testoPiano = function (s) {
    return s.replace(/\$([^$]+)\$/g, function (_, t) {
      t = t.replace(/\\left|\\right|\\[,;!]|\\displaystyle/g, '')
           .replace(/\\operatorname\{([^{}]*)\}/g, '$1')
           .replace(/\\\{/g, '\u0001').replace(/\\\}/g, '\u0002')
           .replace(/\\sqrt\[3\]\{([^{}]*)\}/g, '∛$1')
           .replace(/\\sqrt\{([^{}]*)\}/g, function (m, a) { return '√' + semplice(a); })
           .replace(/\\sqrt\s*(\w)/g, '√$1');
      for (var g = 0; g < 2; g++)
        t = t.replace(/\\d?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, function (m, a, b) { return '\u0003' + semplice(a) + '/' + semplice(b) + '\u0004'; });
      t = t.replace(/\\d?frac\s*(\w)\s*(\w)/g, '\u0003$1/$2\u0004')
           .replace(/\\(sin|cos|tan|ln|log|arctan|lim|max|min|sup|inf)(?![a-z_])\s*/g, '$1 ')
           // «sin 1/√n» è ambiguo: una frazione subito dopo una funzione va fra parentesi
           .replace(/(sin|cos|tan|ln|log|arctan) \u0003([^\u0004]*)\u0004/g, '$1($2)')
           .replace(/[\u0003\u0004]/g, '')
           .replace(/\\([A-Za-z]+)/g, function (m, c) { return SIMBOLI[c] || c; })
           .replace(/\^\{([^{}]*)\}/g, function (m, a) { return mappa(a, APICE, '^'); })
           .replace(/\^(\S)/g, function (m, a) { return mappa(a, APICE, '^'); })
           .replace(/_\{([^{}]*)\}/g, function (m, a) { return mappa(a, PEDICE, '_'); })
           .replace(/_(\w)/g, function (m, a) { return mappa(a, PEDICE, '_'); })
           .replace(/[{}]/g, '').replace(/\u0001/g, '{').replace(/\u0002/g, '}')
           .replace(/\u0006/g, '^').replace(/\u0007/g, '_')
           .replace(/ +\(/g, '(').replace(/\s+/g, ' ').trim();
      return t;
    });
  };

  /* ---------------- Sidebar mobile ---------------- */
  (function sidebar() {
    const sb = document.querySelector('.sidebar');
    if (!sb) return;
    let scrim = document.querySelector('.scrim');
    if (!scrim) { scrim = document.createElement('div'); scrim.className = 'scrim'; document.body.appendChild(scrim); }
    const close = () => { sb.classList.remove('open'); scrim.classList.remove('on'); };
    document.addEventListener('click', e => {
      if (e.target.closest('#menuBtn')) { sb.classList.toggle('open'); scrim.classList.toggle('on'); return; }
      if (e.target === scrim) close();
      if (e.target.closest('.sidebar a')) close();
    });
    addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  })();

  /* ---------------- Scrollspy ---------------- */
  (function spy() {
    const links = Array.from(document.querySelectorAll('.sidebar a[href^="#"]'));
    if (!links.length) return;
    const map = new Map();
    links.forEach(a => {
      const el = document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)));
      if (el) map.set(el, a);
    });
    if (!map.size) return;
    let ticking = false;
    const upd = () => {
      ticking = false;
      let best = null, bestTop = -Infinity;
      map.forEach((a, el) => {
        const t = el.getBoundingClientRect().top - 90;
        if (t <= 0 && t > bestTop) { bestTop = t; best = a; }
      });
      links.forEach(a => a.classList.remove('active'));
      if (best) best.classList.add('active');
      else if (links[0]) links[0].classList.add('active');
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
    upd();
  })();

  /* ---------------- Reveal: blur & step ---------------- */
  (function reveal() {
    document.addEventListener('click', e => {
      const b = e.target.closest('.blur');
      if (b) { b.classList.toggle('shown'); return; }
      const s = e.target.closest('.step-content');
      if (s) { s.classList.add('shown'); return; }
      const all = e.target.closest('[data-reveal-all]');
      if (all) {
        const sel = all.getAttribute('data-reveal-all');
        const scope = sel ? document.querySelector(sel) : all.closest('.box, .reveal-body, section, main') || document;
        const nodes = scope.querySelectorAll('.step-content, .blur');
        const anyHidden = Array.from(nodes).some(n => !n.classList.contains('shown'));
        nodes.forEach(n => n.classList.toggle('shown', anyHidden));
        all.textContent = anyHidden ? 'Nascondi tutto' : 'Mostra tutto';
        return;
      }
    });
  })();

  /* ---------------- Progressi (checkbox argomenti) ---------------- */
  function refreshProgress() {
    document.querySelectorAll('[data-progress-for]').forEach(bar => {
      const g = bar.getAttribute('data-progress-for');
      const boxes = document.querySelectorAll('input[data-topic^="' + g + '"]');
      let done = 0, tot = 0;
      if (boxes.length) {
        tot = boxes.length;
        boxes.forEach(b => { if (b.checked) done++; });
      } else {
        // conteggio da localStorage (dashboard: gli argomenti stanno su altre pagine)
        const idx = AM.TOPIC_INDEX || {};
        const list = idx[g] || [];
        tot = list.length;
        list.forEach(id => { if (store.get('topic:' + id, false)) done++; });
      }
      const pct = tot ? Math.round(done / tot * 100) : 0;
      const fill = bar.querySelector('span');
      if (fill) fill.style.width = pct + '%';
      bar.classList.toggle('ok', pct === 100);
      const out = document.querySelector('[data-progress-txt="' + g + '"]');
      if (out) out.textContent = done + '/' + tot;
      const pctOut = document.querySelector('[data-progress-pct="' + g + '"]');
      if (pctOut) pctOut.textContent = pct + '%';
    });
  }
  AM.refreshProgress = refreshProgress;

  (function topics() {
    document.querySelectorAll('input[data-topic]').forEach(cb => {
      cb.checked = store.get('topic:' + cb.dataset.topic, false);
      cb.addEventListener('change', () => {
        store.set('topic:' + cb.dataset.topic, cb.checked);
        refreshProgress();
      });
    });
    refreshProgress();
  })();

  /* ---------------- Quiz ---------------- */
  const LET = ['A', 'B', 'C', 'D', 'E', 'F'];

  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  AM.shuffle = shuffle;

  /**
   * Monta un quiz a risposta multipla.
   * questions: [{id, q, opts:[], a:index, why, tag}]
   */
  AM.mountQuiz = function (container, questions, opts) {
    opts = opts || {};
    const el = typeof container === 'string' ? document.querySelector(container) : container;
    if (!el) return;
    let qs = opts.shuffle === false ? questions.slice() : shuffle(questions);
    if (opts.limit) qs = qs.slice(0, opts.limit);
    let i = 0, right = 0, answered = 0;
    const statKey = opts.statKey || null;

    function render() {
      if (i >= qs.length) {
        const pct = qs.length ? Math.round(right / qs.length * 100) : 0;
        el.innerHTML =
          '<div class="quiz"><div class="center">' +
          '<div class="stat-val" style="color:' + (pct >= 70 ? 'var(--ok)' : pct >= 50 ? 'var(--warn)' : 'var(--danger)') + '">' + pct + '%</div>' +
          '<div class="stat-lab">' + right + ' risposte corrette su ' + qs.length + '</div>' +
          '<p class="small muted" style="margin-top:14px">' +
          (pct >= 70 ? 'Ottimo. Soglia del parziale (7/14 nella prima parte) ampiamente superata.'
                     : pct >= 50 ? 'Sei sopra la soglia minima, ma il margine è sottile: ripassa gli errori.'
                     : 'Sotto la soglia. Torna alla teoria della sezione prima di rifare il test.') +
          '</p>' +
          '<div class="btnrow" style="justify-content:center"><button class="btn primary" data-restart>Rifai il test</button></div>' +
          '</div></div>';
        el.querySelector('[data-restart]').onclick = () => { qs = shuffle(questions); if (opts.limit) qs = qs.slice(0, opts.limit); i = 0; right = 0; answered = 0; render(); };
        AM.typeset(el);
        return;
      }
      const q = qs[i];
      const order = opts.shuffleOpts === false ? q.opts.map((_, k) => k) : shuffle(q.opts.map((_, k) => k));
      el.innerHTML =
        '<div class="quiz">' +
        '<div class="quiz-meta"><span>Domanda ' + (i + 1) + ' di ' + qs.length + '</span>' +
        '<span>' + (q.tag ? '<span class="badge">' + q.tag + '</span> ' : '') + 'corrette: ' + right + '/' + answered + '</span></div>' +
        '<div class="quiz-q">' + q.q + '</div>' +
        '<div class="quiz-opts">' +
        order.map((oi, k) => '<button class="quiz-opt" data-oi="' + oi + '"><span class="k">' + LET[k] + '</span><span>' + q.opts[oi] + '</span></button>').join('') +
        '</div><div class="quiz-fb hidden"></div>' +
        '<div class="btnrow hidden" data-next-row><button class="btn primary" data-next>Avanti →</button></div>' +
        '</div>';
      const fb = el.querySelector('.quiz-fb');
      el.querySelectorAll('.quiz-opt').forEach(b => {
        b.onclick = () => {
          if (b.classList.contains('locked')) return;
          const ok = parseInt(b.dataset.oi, 10) === q.a;
          answered++;
          if (ok) right++;
          el.querySelectorAll('.quiz-opt').forEach(x => {
            x.classList.add('locked');
            const xi = parseInt(x.dataset.oi, 10);
            if (xi === q.a) x.classList.add('right');
            else if (x === b) x.classList.add('wrong');
          });
          fb.className = 'quiz-fb ' + (ok ? 'right' : 'wrong');
          fb.innerHTML = '<strong>' + (ok ? '✓ Corretto.' : '✗ Non è questa.') + '</strong> ' + (q.why || '');
          el.querySelector('[data-next-row]').classList.remove('hidden');
          if (statKey) {
            const s = store.get('quizstat:' + statKey, { r: 0, t: 0 });
            s.r += ok ? 1 : 0; s.t += 1; store.set('quizstat:' + statKey, s);
          }
          AM.typeset(fb);
        };
      });
      el.querySelector('[data-next]').onclick = () => { i++; render(); };
      AM.typeset(el);
    }
    render();
  };

  /* ---------------- Flashcard con ripetizione dilazionata ---------------- */
  const LEITNER = [0, 1, 2, 4, 8, 16, 32]; // giorni per box 0..6
  const DAY = 86400000;

  AM.srs = {
    state(id) { return store.get('srs:' + id, { box: 0, due: 0, seen: 0 }); },
    save(id, s) { store.set('srs:' + id, s); },
    grade(id, good) {
      const s = this.state(id);
      s.box = good ? Math.min(LEITNER.length - 1, s.box + 1) : 0;
      s.due = Date.now() + LEITNER[s.box] * DAY;
      s.seen = (s.seen || 0) + 1;
      s.last = good;
      this.save(id, s);
      return s;
    },
    due(id) { return this.state(id).due <= Date.now(); },
    summary(ids) {
      let dueN = 0, learned = 0, fresh = 0;
      ids.forEach(id => {
        const s = this.state(id);
        if (!s.seen) fresh++;
        else if (s.box >= 4) learned++;
        if (s.due <= Date.now()) dueN++;
      });
      return { due: dueN, learned, fresh, tot: ids.length };
    }
  };

  /**
   * Monta un mazzo di flashcard.
   * cards: [{id, front, back, tag, badge}]
   */
  AM.mountCards = function (container, cards, opts) {
    opts = opts || {};
    const el = typeof container === 'string' ? document.querySelector(container) : container;
    if (!el) return null;
    let deck = [], idx = 0, flipped = false;

    function build() {
      let pool = cards.slice();
      if (opts.filter) pool = pool.filter(opts.filter);
      if (opts.onlyDue) pool = pool.filter(c => AM.srs.due(c.id));
      deck = opts.order === 'fixed' ? pool : shuffle(pool);
      idx = 0; flipped = false;
    }

    function render() {
      if (!deck.length) {
        el.innerHTML = '<div class="fc"><div class="fc-empty"><strong>Nessuna scheda da ripassare ora.</strong>' +
          '<p class="small" style="margin-top:8px">Hai completato il ripasso programmato. Torna più tardi, oppure togli il filtro “solo da ripassare”.</p></div></div>';
        return;
      }
      if (idx >= deck.length) {
        el.innerHTML = '<div class="fc"><div class="fc-empty"><div class="stat-val" style="color:var(--ok)">✓</div>' +
          '<strong>Giro completato</strong><p class="small" style="margin-top:6px">' + deck.length + ' schede riviste.</p>' +
          '<div class="btnrow" style="justify-content:center"><button class="btn primary" data-again>Ricomincia</button></div></div></div>';
        el.querySelector('[data-again]').onclick = () => { build(); render(); };
        return;
      }
      const c = deck[idx];
      const s = AM.srs.state(c.id);
      el.innerHTML =
        '<div class="fc">' +
        '<div class="fc-head">' +
        '<span class="muted">' + (idx + 1) + ' / ' + deck.length + (c.tag ? ' · <strong>' + c.tag + '</strong>' : '') + '</span>' +
        '<span>' + (c.badge || '') + ' <span class="badge ' + (s.box >= 4 ? 'ok' : s.box >= 2 ? 'warn' : '') + '">livello ' + s.box + '/6</span></span>' +
        '</div>' +
        '<div class="fc-front">' + c.front + '</div>' +
        '<div class="fc-back' + (flipped ? '' : ' hidden') + '">' + c.back + '</div>' +
        '<div class="fc-actions">' +
        (flipped
          ? '<button class="btn" data-g="0" style="border-color:var(--danger);color:var(--danger)">✗ Non la sapevo</button>' +
            '<button class="btn" data-g="1" style="border-color:var(--warn);color:var(--warn)">~ Incerto</button>' +
            '<button class="btn" data-g="2" style="border-color:var(--ok);color:var(--ok)">✓ La sapevo</button>'
          : '<button class="btn primary" data-flip>Mostra la risposta</button>' +
            '<button class="btn ghost" data-skip>Salta</button>') +
        '</div></div>';

      const flip = el.querySelector('[data-flip]');
      if (flip) flip.onclick = () => { flipped = true; render(); };
      const skip = el.querySelector('[data-skip]');
      if (skip) skip.onclick = () => { idx++; flipped = false; render(); };
      el.querySelectorAll('[data-g]').forEach(b => {
        b.onclick = () => {
          const g = parseInt(b.dataset.g, 10);
          if (g === 1) { const st = AM.srs.state(c.id); st.due = Date.now() + DAY; st.seen = (st.seen || 0) + 1; AM.srs.save(c.id, st); }
          else AM.srs.grade(c.id, g === 2);
          idx++; flipped = false; render();
          if (opts.onGrade) opts.onGrade();
        };
      });
      AM.typeset(el);
    }

    build(); render();
    return { rebuild() { build(); render(); }, setOpts(o) { Object.assign(opts, o); build(); render(); } };
  };

  /* ---------------- Timer ---------------- */
  AM.timer = function (el, seconds, onEnd) {
    let left = seconds, t = null, running = false;
    const paint = () => {
      const m = Math.floor(left / 60), s = left % 60;
      el.textContent = m + ':' + String(s).padStart(2, '0');
      el.classList.toggle('low', left <= 300);
    };
    paint();
    return {
      start() {
        if (running) return; running = true;
        t = setInterval(() => {
          left--; paint();
          if (left <= 0) { clearInterval(t); running = false; if (onEnd) onEnd(); }
        }, 1000);
      },
      pause() { clearInterval(t); running = false; },
      reset(s) { clearInterval(t); running = false; left = s !== undefined ? s : seconds; paint(); },
      get left() { return left; },
      get running() { return running; }
    };
  };

  /* ---------------- Reset dati ---------------- */
  AM.resetAll = function () {
    if (!confirm('Azzero tutti i progressi salvati su questo dispositivo (argomenti completati, statistiche quiz, ripetizione dilazionata). Procedo?')) return;
    store.keys().forEach(k => { if (k !== 'theme') store.del(k); });
    location.reload();
  };

  /* ---------------- Init ---------------- */
  function init() {
    AM.typeset(document.body);
    // link attivo nella topnav
    const here = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.topnav a').forEach(a => {
      const t = a.getAttribute('href').split('/').pop().split('#')[0];
      if (t === here) a.classList.add('active');
    });
    refreshProgress();
    document.dispatchEvent(new CustomEvent('am:ready'));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  // KaTeX arriva in modo asincrono: ri-renderizza al load
  addEventListener('load', () => AM.typeset(document.body));
})();
