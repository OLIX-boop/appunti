/* ============================================================
   «Come si risolve» (Geometria)
   - AM.allenatore(sel, dati): un punto d'esame alla volta; prima si
     sceglie il tipo, poi la prima mossa. Ogni scelta sbagliata dice
     dove porta. Niente si muove da solo e niente resta salvato.
   - AM.eserciziInline(): disegna dentro la pagina gli esercizi di
     data/esercizi.js elencati in data-ids, come nella Palestra.
   ============================================================ */
(function () {
  'use strict';
  const AM = (window.AM = window.AM || {});

  function mescola(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function sali(el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 76;
    if (y < window.scrollY) window.scrollTo(0, y);
  }

  AM.allenatore = function (sel, dati) {
    const box = document.querySelector(sel);
    if (!box) return;
    const tipi = dati.tipi;
    const nomi = {};
    tipi.forEach(t => { nomi[t.k] = t.t; });
    let ordine = mescola(dati.allenatore), i = 0, punti = { tipo: 0, mossa: 0, fatti: 0 };

    function disegna() {
      if (i >= ordine.length) { fine(); return; }
      const v = ordine[i];
      box.innerHTML =
        '<div class="all-carta">' +
          '<div class="all-testa"><span>Punto ' + (i + 1) + ' di ' + ordine.length + '</span><span class="badge">' + v.fonte + '</span></div>' +
          '<p class="all-testo">' + v.testo + '</p>' +
          '<p class="all-q">1 · Che tipo di esercizio è?</p>' +
          '<div class="all-opts riga" data-fase="tipo">' +
            tipi.map(t => '<button type="button" class="all-opt" data-k="' + t.k + '">' + t.t + '</button>').join('') +
          '</div>' +
          '<div class="all-fase2"></div>' +
        '</div>';
      AM.typeset(box);
      box.querySelectorAll('[data-fase="tipo"] .all-opt').forEach(b => b.addEventListener('click', () => sceltaTipo(v, b)));
    }

    function sceltaTipo(v, b) {
      const giusto = b.dataset.k === v.tipo;
      box.querySelectorAll('[data-fase="tipo"] .all-opt').forEach(x => {
        x.disabled = true;
        if (x.dataset.k === v.tipo) x.classList.add('giusta');
      });
      if (giusto) punti.tipo++; else b.classList.add('sbagliata');
      const mosse = mescola(v.mosse.map((m, j) => Object.assign({ giusta: j === 0 }, m)));
      const f2 = box.querySelector('.all-fase2');
      f2.innerHTML =
        '<div class="all-esito ' + (giusto ? 'si' : 'no') + '"><p>' +
          (giusto ? '✓ Sì. ' : '✗ È <strong>' + nomi[v.tipo] + '</strong>. ') + 'Il segnale: ' + v.segnale +
        '</p></div>' +
        '<p class="all-q">2 · Qual è la prima mossa che conviene?</p>' +
        '<div class="all-opts" data-fase="mossa">' +
          mosse.map((m, j) => '<button type="button" class="all-opt" data-j="' + j + '">' + m.t + '</button>').join('') +
        '</div>' +
        '<div class="all-fase3"></div>';
      AM.typeset(f2);
      f2.querySelectorAll('[data-fase="mossa"] .all-opt').forEach(x =>
        x.addEventListener('click', () => sceltaMossa(v, mosse, +x.dataset.j)));
    }

    function sceltaMossa(v, mosse, j) {
      const m = mosse[j], giusta = mosse.find(x => x.giusta);
      box.querySelectorAll('[data-fase="mossa"] .all-opt').forEach(x => {
        x.disabled = true;
        if (mosse[+x.dataset.j].giusta) x.classList.add('giusta');
      });
      if (m.giusta) punti.mossa++;
      else box.querySelector('[data-fase="mossa"] [data-j="' + j + '"]').classList.add('sbagliata');
      punti.fatti++;
      const f3 = box.querySelector('.all-fase3');
      f3.innerHTML =
        '<div class="all-esito ' + (m.giusta ? 'si' : 'no') + '">' +
          (m.giusta
            ? '<p>✓ ' + m.poi + '</p>'
            : '<p>✗ <strong>Dove porta:</strong> ' + m.poi + '</p><p><strong>Conviene invece:</strong> ' + giusta.t + '. ' + giusta.poi + '</p>') +
        '</div>' +
        '<div class="all-piede">' +
          '<button type="button" class="btn primary" data-avanti>' + (i + 1 < ordine.length ? 'Prossimo punto →' : 'Vedi il risultato') + '</button>' +
          '<a class="btn" href="#' + v.tipo + '">Apri la scheda</a>' +
          '<span class="all-punti">tipo ' + punti.tipo + '/' + punti.fatti + ' · mossa ' + punti.mossa + '/' + punti.fatti + '</span>' +
        '</div>';
      AM.typeset(f3);
      f3.querySelector('[data-avanti]').addEventListener('click', () => { i++; disegna(); sali(box); });
    }

    function fine() {
      box.innerHTML =
        '<div class="all-carta">' +
          '<p class="all-q">Fatto: ' + punti.fatti + ' punti d\'esame.</p>' +
          '<p>Tipo riconosciuto <strong>' + punti.tipo + '</strong> volte su ' + punti.fatti +
          ', prima mossa giusta <strong>' + punti.mossa + '</strong> volte su ' + punti.fatti + '.</p>' +
          '<p class="small muted">Dove hai sbagliato il tipo, rileggi «Come lo riconosci» della scheda; dove hai sbagliato la mossa, il suo albero.</p>' +
          '<div class="all-piede"><button type="button" class="btn primary" data-ricomincia>Ricomincia in un altro ordine</button></div>' +
        '</div>';
      box.querySelector('[data-ricomincia]').addEventListener('click', () => {
        ordine = mescola(dati.allenatore); i = 0; punti = { tipo: 0, mossa: 0, fatti: 0 };
        disegna(); sali(box);
      });
    }

    disegna();
  };

  function pallini(d) {
    return '<span class="badge ' + (d === 1 ? 'ok' : d === 2 ? 'warn' : 'star') + '">' + '●'.repeat(d) + '</span>';
  }

  AM.eserciziInline = function (esercizi) {
    document.querySelectorAll('[data-ids]').forEach(box => {
      const ids = box.dataset.ids.split(',').map(s => s.trim());
      box.innerHTML = ids.map(id => {
        const e = esercizi.find(x => x.id === id);
        if (!e) return '';
        const aiuti = e.hints.map((h, k) =>
          '<details class="reveal hint"><summary>💡 Suggerimento ' + (k + 1) + '</summary>' +
          '<div class="reveal-body"><p class="mb0">' + h + '</p></div></details>').join('');
        return '<section class="card" style="margin-bottom:18px">' +
          '<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:10px">' +
            '<span class="badge">' + e.id + '</span>' + pallini(e.d) + '<span class="badge">Sez. ' + e.sez + '</span></div>' +
          '<div style="font-size:16px;margin-bottom:14px">' + e.t + '</div>' + aiuti +
          '<details class="reveal sol"><summary>✓ Svolgimento completo</summary><div class="reveal-body">' + e.sol + '</div></details>' +
          '</section>';
      }).join('');
      AM.typeset(box);
    });
  };
})();
