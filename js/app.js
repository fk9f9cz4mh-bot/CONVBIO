/* ConsBio Recall: notes, quick-recall cards, closed-book exams and a gap map.
   Progress lives in localStorage (this browser only) and every access is guarded. */
(function () {
  'use strict';

  var LECT = window.CB_DATA.lectures.slice().sort(function (a, b) { return a.num - b.num; });
  var byId = {};
  var SECTIONS = {};
  var ALLQ = [];
  LECT.forEach(function (l) {
    byId[l.id] = l;
    l.sections.forEach(function (s) { SECTIONS[s.id] = { lecture: l, section: s }; });
    l.exam.forEach(function (q, i) {
      q.id = l.id + '-q' + (i + 1);
      q.lecture = l.id;
      ALLQ.push(q);
    });
  });

  var FIGS = {
    accumCompare: function () { return window.CBFig.accumCompare(false); },
    phyloTree: function () { return window.CBFig.phyloTree('Numbers are branch lengths. Only the vertical branches count.'); }
  };

  var app = document.getElementById('app');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- storage ---------- */
  var KEY = 'consbio-recall-v1';
  var store = { q: {}, exams: {} };
  try {
    var raw = localStorage.getItem(KEY);
    if (raw) {
      var parsed = JSON.parse(raw);
      store.q = parsed.q || {};
      store.exams = parsed.exams || {};
    }
  } catch (e) { /* storage unavailable: run without saved progress */ }
  function persist() {
    try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* ignore */ }
  }

  /* ---------- mastery & Red-List-style status ---------- */
  var CONF_W = { sure: 1, unsure: 0.75, guess: 0.5 };
  var STATUS = {
    LC: ['Least Concern', 'solid'],
    NT: ['Near Threatened', 'mostly solid'],
    VU: ['Vulnerable', 'shaky'],
    EN: ['Endangered', 'major gap'],
    CR: ['Critically Endangered', 'critical gap'],
    NE: ['Not Evaluated', 'not tested yet']
  };
  function masteryOf(rec) { return rec.score * (rec.conf ? CONF_W[rec.conf] : 1); }
  function codeFor(p) { return p >= 0.9 ? 'LC' : p >= 0.75 ? 'NT' : p >= 0.6 ? 'VU' : p >= 0.4 ? 'EN' : 'CR'; }
  function statusOf(questions) {
    var done = questions.filter(function (q) { return store.q[q.id]; });
    if (!done.length) return { code: 'NE', pct: null, done: 0, total: questions.length };
    var m = done.reduce(function (s, q) { return s + masteryOf(store.q[q.id]); }, 0) / done.length;
    return { code: codeFor(m), pct: m, done: done.length, total: questions.length };
  }
  function topicQs(topicId) { return ALLQ.filter(function (q) { return q.topic === topicId; }); }
  function topicStatus(topicId) { return statusOf(topicQs(topicId)); }
  function chip(code, extra) {
    var s = STATUS[code];
    return '<span class="rl rl-' + code.toLowerCase() + '" title="' + s[0] + ': ' + s[1] + (extra ? ' · ' + extra : '') + '">' + code + '</span>';
  }
  function pct(x) { return Math.round(x * 100) + '%'; }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pad(n) { return n < 10 ? '0' + n : String(n); }
  function scrollToEl(el) {
    if (!el) return;
    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }
  function typeCounts(qs) {
    var c = { mc: 0, num: 0, recall: 0 };
    qs.forEach(function (q) { c[q.t]++; });
    return c;
  }
  function typeSummary(qs) {
    var c = typeCounts(qs), parts = [];
    if (c.mc) parts.push(c.mc + ' multiple choice');
    if (c.num) parts.push(c.num + ' calculation' + (c.num > 1 ? 's' : ''));
    if (c.recall) parts.push(c.recall + ' free recall');
    return parts.join(' · ');
  }

  /* ---------- nav ---------- */
  function setNav(active) {
    var nav = document.querySelector('.topnav');
    document.querySelectorAll('.topnav a').forEach(function (a) {
      var on = a.getAttribute('data-nav') === active;
      a.classList.toggle('on', on);
      if (on) {
        a.setAttribute('aria-current', 'page');
        if (nav && nav.scrollWidth > nav.clientWidth) nav.scrollLeft = a.offsetLeft - nav.offsetLeft - (nav.clientWidth - a.offsetWidth) / 2;
      } else a.removeAttribute('aria-current');
    });
  }

  /* ---------- routing ---------- */
  var current = { view: null, id: null };
  var activeExam = null;

  function route() {
    var h = decodeURIComponent((location.hash || '').replace(/^#/, ''));
    if (!h || h === 'home') return showHome(null);
    if (h === 'gaps') return showHome('gaps');
    if (h === 'mixed') return showMixed();
    var m = /^(l\d)(?:-(.+))?$/.exec(h);
    if (m && byId[m[1]]) {
      var lec = byId[m[1]];
      var fresh = showLecture(lec);
      var target = null;
      if (m[2] === 'exam') target = document.getElementById(lec.id + '-exam');
      else if (m[2]) {
        target = document.getElementById(h);
        if (target && current.testing) revealNotes(lec);
      }
      if (target) {
        if (fresh) requestAnimationFrame(function () { scrollToEl(target); });
        else scrollToEl(target);
      }
      return;
    }
    showHome(null);
  }

  /* ---------- home ---------- */
  function lectureStatus(l) { return statusOf(l.exam); }

  function showHome(focus) {
    activeExam = null;
    current = { view: 'home', id: null };
    setNav('home');
    document.title = 'Conservation Biology Recall';
    var totalQ = ALLQ.length;
    var html = '';
    html += '<section class="hero">' +
      '<p class="eyebrow">Conservation Biology · Lectures 2–6</p>' +
      '<h1>Study the high-yield notes, then test yourself with the notes closed.</h1>' +
      '<p class="lede">Each lecture has condensed notes built from the slides, quick-recall prompts after every section, and a closed-book exam at the end. Your answers are scored like an IUCN Red List assessment, so you can see at a glance which topics are secure and which are endangered.</p>' +
      '<div class="hero-actions"><a class="btn primary" href="#l2">Start with Lecture 2</a><a class="btn" href="#mixed">Mixed exam across all lectures</a></div>' +
      '</section>';

    html += '<section class="block"><div class="block-head"><h2>Lectures</h2><p class="muted">' + LECT.length + ' lectures · ' + totalQ + ' exam questions</p></div><ol class="lec-list">';
    LECT.forEach(function (l) {
      var st = lectureStatus(l);
      var ex = store.exams[l.id];
      var meta = ex ? 'Last ' + pct(ex.last) + ' · best ' + pct(ex.best) : 'Exam not taken yet';
      html += '<li class="lec-row">' +
        '<a class="lec-num" href="#' + l.id + '" aria-label="Lecture ' + l.num + '">' + pad(l.num) + '</a>' +
        '<div class="lec-body">' +
        '<h3><a href="#' + l.id + '">' + esc(l.title) + '</a></h3>' +
        '<p>' + esc(l.blurb) + '</p>' +
        '<p class="lec-meta"><span>' + l.sections.length + ' sections</span><span>' + l.exam.length + ' questions</span><span>' + meta + '</span></p>' +
        '</div>' +
        '<div class="lec-side">' + chip(st.code, st.done + '/' + st.total + ' questions answered') +
        '<div class="lec-links"><a class="btn small" href="#' + l.id + '">Notes</a><a class="btn small primary" href="#' + l.id + '-exam">Exam</a></div></div>' +
        '</li>';
    });
    html += '</ol></section>';

    html += renderGapMap();

    html += '<section class="block how"><h2>How to use this</h2><ol class="steps">' +
      '<li><strong>Read one lecture’s notes.</strong> They are condensed from the slides, with the instructor’s “know this” and “not on the test” flags at the top.</li>' +
      '<li><strong>Answer the quick-recall prompts in your head</strong> before tapping to reveal. Retrieval, not rereading, is what builds memory.</li>' +
      '<li><strong>Take the exam with the notes hidden.</strong> Pick an answer, submit, and go to the next question. Optionally rate how sure you are first, so lucky guesses and confident mistakes get flagged.</li>' +
      '<li><strong>Work the gaps.</strong> Follow the links from your results to the weak sections, then retry only the flagged questions. Come back in a day or two and take the gap-targeted exam.</li>' +
      '</ol></section>';

    app.innerHTML = html;
    bindReset();
    if (focus === 'gaps') requestAnimationFrame(function () { scrollToEl(document.getElementById('gaps')); });
    else window.scrollTo(0, 0);
  }

  function renderGapMap() {
    var counts = { CR: 0, EN: 0, VU: 0, NT: 0, LC: 0, NE: 0 };
    var rows = LECT.map(function (l) {
      var items = l.sections.map(function (s) {
        var st = topicStatus(s.id);
        counts[st.code]++;
        return '<li><a class="gap" href="#' + s.id + '">' + chip(st.code, st.done + '/' + st.total + ' answered') + '<span>' + esc(s.title) + '</span></a></li>';
      }).join('');
      return '<div class="gap-row"><p class="gap-lec"><a href="#' + l.id + '">Lecture ' + l.num + '</a></p><ul class="gap-list">' + items + '</ul></div>';
    }).join('');
    var answered = ALLQ.filter(function (q) { return store.q[q.id]; }).length;
    var legend = ['CR', 'EN', 'VU', 'NT', 'LC', 'NE'].map(function (c) {
      return '<li>' + chip(c) + '<span>' + STATUS[c][0] + ' <span class="muted">(' + STATUS[c][1] + ')</span></span><b>' + counts[c] + '</b></li>';
    }).join('');
    return '<section class="block" id="gaps"><div class="block-head"><h2>Your gap map</h2><p class="muted">' + answered + ' of ' + ALLQ.length + ' questions answered in this browser</p></div>' +
      '<p class="block-intro">Every topic is assessed from your most recent answer to each of its questions. A correct answer you marked “unsure” counts 75%, and a correct guess counts 50%.</p>' +
      '<div class="gap-wrap"><ul class="legend">' + legend + '</ul><div class="gap-rows">' + rows + '</div></div>' +
      '<div class="gap-actions"><a class="btn primary" href="#mixed">Take a gap-targeted exam</a><button type="button" class="btn ghost" id="reset-progress">Reset all progress</button></div>' +
      '</section>';
  }

  function bindReset() {
    var b = document.getElementById('reset-progress');
    if (!b) return;
    var armed = false, timer = null;
    b.addEventListener('click', function () {
      if (!armed) {
        armed = true;
        b.textContent = 'Click again to erase all progress';
        b.classList.add('danger');
        timer = setTimeout(function () { armed = false; b.textContent = 'Reset all progress'; b.classList.remove('danger'); }, 4000);
        return;
      }
      clearTimeout(timer);
      store = { q: {}, exams: {} };
      persist();
      showHome('gaps');
    });
  }

  /* ---------- lecture page ---------- */
  var FLAG_LABEL = { know: 'Know this', skip: 'Not on the test', note: 'Heads-up' };

  function showLecture(l) {
    if (current.view === 'lecture' && current.id === l.id) return false;
    activeExam = null;
    current = { view: 'lecture', id: l.id, testing: false };
    setNav(l.id);
    document.title = 'Lecture ' + l.num + ' · Conservation Biology Recall';
    var idx = LECT.indexOf(l);
    var prev = LECT[idx - 1], next = LECT[idx + 1];

    var toc = l.sections.map(function (s) {
      var st = topicStatus(s.id);
      return '<li><a href="#' + s.id + '"><span data-topic-chip="' + s.id + '">' + chip(st.code, st.done + '/' + st.total + ' answered') + '</span><span>' + esc(s.title) + '</span></a></li>';
    }).join('');

    var flags = l.flags.map(function (f) {
      return '<li class="flag flag-' + f.kind + '"><span class="flag-l">' + FLAG_LABEL[f.kind] + '</span><span>' + f.text + '</span></li>';
    }).join('');

    var sections = l.sections.map(function (s) {
      var rc = s.recall.map(function (r, i) {
        return '<details class="rc"><summary><span class="rc-n">' + (i + 1) + '</span><span class="rc-q">' + r[0] + '</span><span class="rc-hint">Reveal</span></summary><div class="rc-a">' + r[1] + '</div></details>';
      }).join('');
      return '<section class="note-sec" id="' + s.id + '"><h2>' + esc(s.title) + '</h2>' + s.html +
        '<div class="recall-set"><p class="eyebrow">Quick recall: answer before you reveal</p>' + rc + '</div></section>';
    }).join('');

    var html = '<article class="lecture" id="lecture-' + l.id + '">' +
      '<header class="lec-head">' +
      '<p class="lec-label"><span>Lecture</span><span class="lec-big">' + pad(l.num) + '</span></p>' +
      '<div class="lec-head-text"><h1>' + esc(l.title) + '</h1><p class="lede">' + esc(l.blurb) + '</p>' +
      '<dl class="meta"><div><dt>Reading</dt><dd>' + esc(l.reading) + '</dd></div><div><dt>Exam</dt><dd>' + l.exam.length + ' questions: ' + typeSummary(l.exam) + '</dd></div></dl></div>' +
      '</header>' +
      '<div class="lec-layout">' +
      '<aside class="toc" aria-label="Sections"><p class="eyebrow">In this lecture</p><ol>' + toc +
      '<li class="toc-exam"><a href="#' + l.id + '-exam"><span class="rl rl-exam">✎</span><span>Active recall exam</span></a></li></ol></aside>' +
      '<div class="lec-main">' +
      '<div class="notes" id="' + l.id + '-notes">' +
      '<section class="flags"><p class="eyebrow">From the instructor’s slides</p><ul>' + flags + '</ul></section>' +
      sections + '</div>' +
      '<div class="notes-hidden" id="' + l.id + '-hidden" hidden><p><strong>Notes are hidden while you take the exam.</strong> Answer from memory first; you’ll get links back to every weak section at the end.</p><button type="button" class="btn small" data-act="show-notes">Show notes anyway</button></div>' +
      '<section class="exam-panel" id="' + l.id + '-exam" aria-live="polite"></section>' +
      '<nav class="pager" aria-label="Other lectures">' +
      (prev ? '<a href="#' + prev.id + '"><span class="muted">← Lecture ' + prev.num + '</span><span>' + esc(prev.short) + '</span></a>' : '<a href="#home"><span class="muted">←</span><span>All lectures</span></a>') +
      (next ? '<a class="next" href="#' + next.id + '"><span class="muted">Lecture ' + next.num + ' →</span><span>' + esc(next.short) + '</span></a>' : '<a class="next" href="#mixed"><span class="muted">Next →</span><span>Mixed exam</span></a>') +
      '</nav></div></div></article>';

    app.innerHTML = html;
    window.scrollTo(0, 0);

    app.querySelector('[data-act="show-notes"]').addEventListener('click', function () { revealNotes(l); });
    renderExamIntro(l);
    return true;
  }

  function hideNotes(l) {
    current.testing = true;
    document.getElementById(l.id + '-notes').hidden = true;
    document.getElementById(l.id + '-hidden').hidden = false;
    document.getElementById('lecture-' + l.id).classList.add('testing');
  }
  function revealNotes(l) {
    current.testing = false;
    var n = document.getElementById(l.id + '-notes');
    if (!n) return;
    n.hidden = false;
    document.getElementById(l.id + '-hidden').hidden = true;
    document.getElementById('lecture-' + l.id).classList.remove('testing');
  }
  function refreshChips() {
    document.querySelectorAll('[data-topic-chip]').forEach(function (el) {
      var st = topicStatus(el.getAttribute('data-topic-chip'));
      el.innerHTML = chip(st.code, st.done + '/' + st.total + ' answered');
    });
  }

  function renderExamIntro(l) {
    var host = document.getElementById(l.id + '-exam');
    var ex = store.exams[l.id];
    host.innerHTML = '<div class="exam-intro">' +
      '<p class="eyebrow">Active recall exam · Lecture ' + l.num + '</p>' +
      '<h2>Close the book. What do you actually remember?</h2>' +
      '<p>' + l.exam.length + ' questions in random order: ' + typeSummary(l.exam) + '. The notes above are hidden while you work. After each answer you’ll see the correct answer and why; at the end, every topic gets a status and a link back to its notes.</p>' +
      '<ul class="exam-rules">' +
      '<li><strong>Multiple choice and calculations:</strong> pick an answer, press <strong>Submit answer</strong> to see if you’re right, then <strong>Next question</strong>. Tapping Sure, Unsure or Guessing before you submit is optional, but it lets the results flag confident mistakes and lucky guesses.</li>' +
      '<li><strong>Free recall:</strong> type everything you remember, then tick the key points your answer covered.</li>' +
      '<li><strong>Keyboard:</strong> 1–5 picks an option, S / U / G sets sure, unsure or guessing, Enter submits and then moves on.</li>' +
      '</ul>' +
      (ex ? '<p class="muted">Last attempt ' + pct(ex.last) + ' · best ' + pct(ex.best) + '</p>' : '') +
      '<button type="button" class="btn primary big" data-act="start">Start the exam</button>' +
      '</div>';
    host.querySelector('[data-act="start"]').addEventListener('click', function () {
      hideNotes(l);
      runExam(host, {
        key: l.id,
        label: 'Lecture ' + l.num,
        questions: l.exam,
        record: true,
        onEnd: function () { revealNotes(l); refreshChips(); },
        onRestart: function () { hideNotes(l); }
      });
      scrollToEl(host);
    });
  }

  /* ---------- mixed / gap-targeted ---------- */
  function showMixed() {
    activeExam = null;
    current = { view: 'mixed', id: null };
    setNav('mixed');
    document.title = 'Mixed exam · Conservation Biology Recall';
    var answered = ALLQ.filter(function (q) { return store.q[q.id]; }).length;
    app.innerHTML = '<section class="mixed">' +
      '<p class="eyebrow">Interleaved practice</p>' +
      '<h1>Mixed exams</h1>' +
      '<p class="lede">Real exams mix topics, and interleaving lectures makes retrieval harder in a useful way. Pick a format.</p>' +
      '<div class="mixed-grid">' +
      '<div class="mixed-opt"><h2>Balanced</h2><p>25 questions: 5 drawn at random from each of Lectures 2–6.</p><button type="button" class="btn primary" data-mode="balanced">Start balanced exam</button></div>' +
      '<div class="mixed-opt"><h2>Gap-targeted</h2><p>20 questions chosen from your weakest spots: misses first, then lucky guesses and partial recalls, then questions you haven’t seen.' + (answered ? '' : ' <span class="muted">You haven’t answered anything yet, so this will be a random draw.</span>') + '</p><button type="button" class="btn primary" data-mode="gaps">Start gap-targeted exam</button></div>' +
      '</div>' +
      '<section class="exam-panel" id="mixed-exam" aria-live="polite"></section>' +
      '</section>';
    window.scrollTo(0, 0);
    var host = document.getElementById('mixed-exam');
    app.querySelectorAll('[data-mode]').forEach(function (b) {
      b.addEventListener('click', function () {
        var mode = b.getAttribute('data-mode');
        var qs = mode === 'balanced' ? pickBalanced(5) : pickGaps(20);
        runExam(host, {
          key: mode === 'balanced' ? 'mixed' : 'gaps',
          label: mode === 'balanced' ? 'Balanced mixed exam' : 'Gap-targeted exam',
          questions: qs,
          record: false,
          showLecture: true,
          onEnd: function () {},
          onRestart: function () {}
        });
        scrollToEl(host);
      });
    });
  }
  function pickBalanced(n) {
    var out = [];
    LECT.forEach(function (l) { out = out.concat(shuffle(l.exam.slice()).slice(0, n)); });
    return out;
  }
  function pickGaps(n) {
    var scored = ALLQ.map(function (q) {
      var r = store.q[q.id];
      var p = r ? masteryOf(r) : 0.6;
      return { q: q, p: p + Math.random() * 0.05 };
    });
    scored.sort(function (a, b) { return a.p - b.p; });
    return scored.slice(0, n).map(function (x) { return x.q; });
  }

  /* ---------- exam engine ---------- */
  var LETTERS = 'ABCDE';
  var CONF_LABEL = { sure: 'Sure', unsure: 'Unsure', guess: 'Guessing' };
  var FLAG_INFO = {
    misconception: ['Confident mistake', 'You were sure, and wrong. Fix this one first.'],
    missed: ['Missed', ''],
    lucky: ['Right, but unsure', 'Correct, but you weren’t confident. Shore it up.'],
    partial: ['Partial recall', '']
  };

  function runExam(host, cfg) {
    var root = cfg.root || cfg;
    var items = shuffle(cfg.questions.slice()).map(function (q) {
      return { q: q, order: q.t === 'mc' ? shuffle(q.o.map(function (_, i) { return i; })) : null };
    });
    var i = 0;
    var results = [];
    var ui = {};
    activeExam = { key: handleKey };

    renderQ();

    function sectionTitle(q) { return SECTIONS[q.topic] ? SECTIONS[q.topic].section.title : ''; }

    function renderQ() {
      var it = items[i], q = it.q;
      ui = { sel: null, conf: null, done: false };
      var typeLabel = q.t === 'mc' ? 'Multiple choice' : q.t === 'num' ? 'Calculation' : 'Free recall';
      var lecTag = cfg.showLecture ? '<span class="tag">Lecture ' + byId[q.lecture].num + '</span>' : '';
      var body = '';
      if (q.fig && FIGS[q.fig]) body += '<div class="q-fig">' + FIGS[q.fig]() + '</div>';
      if (q.t === 'mc') {
        body += '<div class="opts" role="radiogroup" aria-label="Answer options">' + it.order.map(function (oi, k) {
          return '<button type="button" class="opt" role="radio" aria-checked="false" data-k="' + k + '"><span class="opt-key">' + LETTERS[k] + '</span><span class="opt-text">' + q.o[oi] + '</span></button>';
        }).join('') + '</div>' + confHtml();
        body += '<div class="q-actions"><button type="button" class="btn primary" data-act="check" disabled>Submit answer</button><span class="q-hint muted" data-hint>Pick an answer, then submit</span></div>';
      } else if (q.t === 'num') {
        body += '<div class="num-row"><label for="num-' + q.id + '">Your answer</label><input type="text" inputmode="decimal" autocomplete="off" id="num-' + q.id + '" placeholder="e.g. 0.42">' + (q.unit ? '<span class="unit">' + q.unit + '</span>' : '') + '</div>' + confHtml();
        body += '<div class="q-actions"><button type="button" class="btn primary" data-act="check" disabled>Submit answer</button><span class="q-hint muted" data-hint>Enter a number, then submit</span></div>';
      } else {
        body += '<label class="sr-only" for="ans-' + q.id + '">Your answer</label><textarea id="ans-' + q.id + '" rows="5" placeholder="Write everything you can remember before you look at the key."></textarea>';
        body += '<div class="q-actions"><button type="button" class="btn primary" data-act="reveal" disabled>Compare with the key</button><button type="button" class="btn ghost" data-act="idk">I don’t know yet, show me</button></div>';
      }
      host.innerHTML = '<div class="exam-card">' +
        '<div class="exam-top"><span class="exam-count">' + cfg.label + ' · Question ' + (i + 1) + ' of ' + items.length + '</span>' +
        '<span class="exam-tags"><span class="tag">' + typeLabel + '</span>' + lecTag + (q.stretch ? '<span class="tag stretch">Stretch</span>' : '') + '</span></div>' +
        '<div class="progress" aria-hidden="true"><span style="width:' + (i / items.length * 100).toFixed(1) + '%"></span></div>' +
        '<p class="q-topic">' + esc(sectionTitle(q)) + '</p>' +
        '<h3 class="q-text" tabindex="-1">' + q.q + '</h3>' + body +
        '<div class="fb-slot"></div></div>';
      bindQ(it);
      if (i > 0) host.querySelector('.q-text').focus({ preventScroll: true });
    }

    function confHtml() {
      return '<div class="conf" role="radiogroup" aria-label="How sure are you? (optional)"><span class="conf-l">How sure are you? <span class="muted">(optional)</span></span>' +
        ['sure', 'unsure', 'guess'].map(function (c) {
          return '<button type="button" class="chip" role="radio" aria-checked="false" data-c="' + c + '">' + CONF_LABEL[c] + '</button>';
        }).join('') + '</div>';
    }

    function updateCheck() {
      var btn = host.querySelector('[data-act="check"]');
      if (!btn) return;
      var q = items[i].q;
      var hasAns = q.t === 'mc' ? ui.sel !== null : (host.querySelector('input').value.trim() !== '');
      btn.disabled = !hasAns;
      var hint = host.querySelector('[data-hint]');
      if (hint) hint.hidden = !btn.disabled;
    }

    function selectOpt(k) {
      if (ui.done) return;
      ui.sel = k;
      host.querySelectorAll('.opt').forEach(function (b) {
        var on = +b.getAttribute('data-k') === k;
        b.classList.toggle('sel', on);
        b.setAttribute('aria-checked', on ? 'true' : 'false');
      });
      updateCheck();
    }
    function selectConf(c) {
      if (ui.done) return;
      ui.conf = c;
      host.querySelectorAll('.chip[data-c]').forEach(function (b) {
        var on = b.getAttribute('data-c') === c;
        b.classList.toggle('sel', on);
        b.setAttribute('aria-checked', on ? 'true' : 'false');
      });
      updateCheck();
    }

    function bindQ(it) {
      var q = it.q;
      host.querySelectorAll('.opt').forEach(function (b) {
        b.addEventListener('click', function () { selectOpt(+b.getAttribute('data-k')); });
      });
      host.querySelectorAll('.chip[data-c]').forEach(function (b) {
        b.addEventListener('click', function () { selectConf(b.getAttribute('data-c')); });
      });
      var input = host.querySelector('input');
      if (input) input.addEventListener('input', updateCheck);
      var check = host.querySelector('[data-act="check"]');
      if (check) check.addEventListener('click', function () { doCheck(it); });
      var ta = host.querySelector('textarea');
      if (ta) {
        var rev = host.querySelector('[data-act="reveal"]');
        ta.addEventListener('input', function () { rev.disabled = ta.value.trim().length < 1; });
        rev.addEventListener('click', function () { doReveal(it, false); });
        host.querySelector('[data-act="idk"]').addEventListener('click', function () { doReveal(it, true); });
      }
    }

    function feedback(ok, head, bodyHtml, cls) {
      var slot = host.querySelector('.fb-slot');
      var last = i === items.length - 1;
      slot.innerHTML = '<div class="fb ' + (cls || (ok ? 'ok' : 'bad')) + '" role="status"><p class="fb-head">' + head + '</p>' + bodyHtml + '</div>' +
        '<div class="q-actions"><button type="button" class="btn primary" data-act="next">' + (last ? 'See my results' : 'Next question →') + '</button></div>';
      var nb = slot.querySelector('[data-act="next"]');
      nb.addEventListener('click', next);
      nb.focus({ preventScroll: true });
      var card = host.querySelector('.exam-card');
      var r = slot.getBoundingClientRect();
      if (r.bottom > window.innerHeight) slot.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
      if (card) card.classList.add('answered');
    }

    function doCheck(it) {
      if (ui.done) return;
      var q = it.q, correct, response;
      if (q.t === 'mc') {
        var correctK = it.order.indexOf(q.a);
        correct = ui.sel === correctK;
        response = q.o[it.order[ui.sel]];
        host.querySelectorAll('.opt').forEach(function (b) {
          var k = +b.getAttribute('data-k');
          b.disabled = true;
          if (k === correctK) b.classList.add('right');
          else if (k === ui.sel) b.classList.add('wrong');
        });
      } else {
        var input = host.querySelector('input');
        var v = parseFloat(input.value.replace(',', '.').replace(/[^0-9.\-]/g, ''));
        correct = !isNaN(v) && Math.abs(v - q.a) <= q.tol;
        response = input.value.trim();
        input.readOnly = true;
        input.classList.add(correct ? 'right' : 'wrong');
      }
      host.querySelectorAll('.chip[data-c]').forEach(function (b) { b.disabled = true; });
      host.querySelector('[data-act="check"]').parentNode.hidden = true;
      ui.done = true;
      // confidence is optional: an unrated right answer counts as sure, an unrated wrong one as a plain miss
      var flag = correct ? (ui.conf === 'unsure' || ui.conf === 'guess' ? 'lucky' : null) : (ui.conf === 'sure' ? 'misconception' : 'missed');
      record(it, correct ? 1 : 0, ui.conf, flag, response);
      var answerText = q.t === 'mc' ? q.o[q.a] : String(q.a) + (q.unit || '');
      var head = correct ? (flag === 'lucky' ? 'Correct, though you weren’t sure' : 'Correct') : (flag === 'misconception' ? 'Not quite, and you were sure. Worth a close look.' : 'Not quite');
      var body = (correct ? '' : '<p>Answer: <strong>' + answerText + '</strong></p>') + '<p>' + q.why + '</p>';
      feedback(correct, head, body, correct && flag === 'lucky' ? 'meh' : null);
    }

    function doReveal(it, idk) {
      if (ui.done) return;
      var q = it.q;
      var ta = host.querySelector('textarea');
      ta.readOnly = true;
      host.querySelector('[data-act="reveal"]').parentNode.hidden = true;
      var slot = host.querySelector('.fb-slot');
      if (idk) {
        ui.done = true;
        record(it, 0, null, 'missed', ta.value.trim());
        feedback(false, 'Here’s the key. Study it, then try again later.', '<div class="key">' + q.model + '</div>');
        return;
      }
      slot.innerHTML = '<div class="key-box"><p class="eyebrow">Answer key</p><div class="key">' + q.model + '</div></div>' +
        '<fieldset class="points"><legend>Tick each key point your answer actually included</legend>' +
        q.points.map(function (p, k) {
          return '<label><input type="checkbox" id="pt-' + q.id + '-' + k + '" data-p="' + k + '"><span>' + p + '</span></label>';
        }).join('') + '</fieldset>' +
        '<div class="q-actions"><button type="button" class="btn primary" data-act="grade">Record my score</button></div>';
      var gb = slot.querySelector('[data-act="grade"]');
      gb.addEventListener('click', function () {
        var boxes = slot.querySelectorAll('input[type="checkbox"]');
        var got = 0;
        boxes.forEach(function (b) {
          if (b.checked) { got++; b.setAttribute('checked', ''); }
          b.disabled = true;
        });
        var score = got / boxes.length;
        ui.done = true;
        var flag = score >= 1 ? null : score > 0 ? 'partial' : 'missed';
        record(it, score, null, flag, ta.value.trim(), got + ' of ' + boxes.length + ' points');
        gb.parentNode.remove();
        var head = score >= 1 ? 'Full recall: all ' + boxes.length + ' points' : 'You covered ' + got + ' of ' + boxes.length + ' key points';
        var keep = slot.innerHTML;
        feedback(score >= 1, head, '', score >= 1 ? 'ok' : score > 0 ? 'meh' : 'bad');
        slot.insertAdjacentHTML('afterbegin', keep);
      });
      var firstBox = slot.querySelector('input[type="checkbox"]');
      if (firstBox) firstBox.focus({ preventScroll: true });
    }

    function record(it, score, conf, flag, response, detail) {
      results.push({ q: it.q, score: score, conf: conf, flag: flag, response: response, detail: detail || '' });
      store.q[it.q.id] = { score: score, conf: conf, at: Date.now() };
      persist();
    }

    function next() {
      if (i < items.length - 1) {
        i++;
        renderQ();
        var card = host.querySelector('.exam-card');
        if (card && card.getBoundingClientRect().top < 0) scrollToEl(host);
      } else {
        showResults();
      }
    }

    function handleKey(e) {
      if (!host.isConnected) { activeExam = null; return; }
      var tag = (e.target && e.target.tagName) || '';
      var typing = tag === 'TEXTAREA' || tag === 'INPUT';
      var q = items[i] && items[i].q;
      if (!q || !host.querySelector('.exam-card')) return;
      if (e.key === 'Enter' && !e.shiftKey && tag !== 'TEXTAREA' && tag !== 'BUTTON' && tag !== 'A') {
        var btn = host.querySelector('[data-act="next"]') || host.querySelector('[data-act="check"]:not([disabled])');
        if (btn) { e.preventDefault(); btn.click(); }
        return;
      }
      if (typing || e.metaKey || e.ctrlKey || e.altKey || ui.done) return;
      if (q.t === 'mc' && /^[1-5]$/.test(e.key)) {
        var k = +e.key - 1;
        if (k < items[i].order.length) { e.preventDefault(); selectOpt(k); }
      } else if (q.t !== 'recall') {
        var map = { s: 'sure', u: 'unsure', g: 'guess' };
        var c = map[e.key.toLowerCase()];
        if (c) { e.preventDefault(); selectConf(c); }
      }
    }

    function showResults() {
      activeExam = null;
      var n = results.length;
      var pts = results.reduce(function (s, r) { return s + r.score; }, 0);
      var raw = pts / n;
      var mast = results.reduce(function (s, r) { return s + masteryOf(r); }, 0) / n;
      if (cfg.record) {
        var prev = store.exams[cfg.key];
        store.exams[cfg.key] = { last: raw, best: prev ? Math.max(prev.best, raw) : raw, at: Date.now(), n: n };
        persist();
      }
      var byTopic = {}, order = [];
      results.forEach(function (r) {
        if (!byTopic[r.q.topic]) { byTopic[r.q.topic] = { pts: 0, n: 0, m: 0 }; order.push(r.q.topic); }
        var t = byTopic[r.q.topic];
        t.pts += r.score; t.n++; t.m += masteryOf(r);
      });
      order.sort(function (a, b) { return byTopic[a].m / byTopic[a].n - byTopic[b].m / byTopic[b].n; });
      var flagged = results.filter(function (r) { return r.flag; });
      var rank = { misconception: 0, missed: 1, partial: 2, lucky: 3 };
      flagged.sort(function (a, b) { return rank[a.flag] - rank[b.flag]; });
      var fc = { misconception: 0, missed: 0, partial: 0, lucky: 0 };
      flagged.forEach(function (r) { fc[r.flag]++; });

      var topicRows = order.map(function (id) {
        var t = byTopic[id], m = t.m / t.n;
        var sec = SECTIONS[id];
        return '<tr><td>' + chip(codeFor(m)) + '</td><td><a href="#' + id + '">' + esc(sec.section.title) + '</a>' + (cfg.showLecture ? ' <span class="muted small">L' + sec.lecture.num + '</span>' : '') + '</td>' +
          '<td class="bar-cell"><span class="bar"><span style="width:' + (m * 100).toFixed(0) + '%"></span></span></td><td class="num">' + (Math.round(t.pts * 10) / 10) + ' / ' + t.n + '</td></tr>';
      }).join('');

      var reviewItems = flagged.map(function (r) {
        var q = r.q, info = FLAG_INFO[r.flag];
        var correctText = q.t === 'mc' ? q.o[q.a] : q.t === 'num' ? String(q.a) + (q.unit || '') : '';
        var yours = r.response ? esc(r.response) : '<span class="muted">(no answer)</span>';
        var body = '<p class="rv-q">' + q.q + '</p>';
        if (q.t === 'recall') {
          body += '<p class="rv-a"><span class="muted">You wrote:</span> ' + yours + (r.detail ? ' <span class="muted">(' + r.detail + ')</span>' : '') + '</p><div class="key">' + q.model + '</div>';
        } else {
          body += '<p class="rv-a"><span class="muted">You said:</span> ' + yours + (r.conf ? ' <span class="muted">(' + CONF_LABEL[r.conf].toLowerCase() + ')</span>' : '') + '</p>' +
            '<p class="rv-a"><span class="muted">Answer:</span> <strong>' + correctText + '</strong></p><p class="rv-why">' + q.why + '</p>';
        }
        var sec = SECTIONS[q.topic];
        return '<li class="rv rv-' + r.flag + '"><p class="rv-flag"><span class="flagchip">' + info[0] + '</span>' + (info[1] ? '<span class="muted small">' + info[1] + '</span>' : '') + '</p>' + body +
          '<p class="rv-link"><a href="#' + q.topic + '">Review: ' + esc(sec.section.title) + (cfg.showLecture ? ' (Lecture ' + sec.lecture.num + ')' : '') + ' →</a></p></li>';
      }).join('');

      var summary = [];
      if (fc.misconception) summary.push('<li><span class="flagchip f-misconception">' + fc.misconception + '</span> confident mistake' + (fc.misconception > 1 ? 's' : '') + '</li>');
      if (fc.missed) summary.push('<li><span class="flagchip f-missed">' + fc.missed + '</span> missed</li>');
      if (fc.partial) summary.push('<li><span class="flagchip f-partial">' + fc.partial + '</span> partial recall</li>');
      if (fc.lucky) summary.push('<li><span class="flagchip f-lucky">' + fc.lucky + '</span> right but unsure</li>');

      host.innerHTML = '<div class="results">' +
        '<p class="eyebrow">Results · ' + cfg.label + '</p>' +
        '<div class="score-row"><p class="score-big">' + pct(raw) + '</p><div class="score-side">' +
        '<p><strong>' + (Math.round(pts * 10) / 10) + ' of ' + n + ' points</strong></p>' +
        '<p>Confidence-weighted mastery ' + pct(mast) + ' ' + chip(codeFor(mast)) + ' <span class="muted">' + STATUS[codeFor(mast)][0] + '</span></p></div></div>' +
        (summary.length ? '<ul class="flag-summary">' + summary.join('') + '</ul>' : '<p class="all-clear">Nothing flagged. Every answer was correct and confident. Come back in a few days to check it stuck.</p>') +
        '<h3>By topic, weakest first</h3>' +
        '<div class="table-wrap"><table class="topic-table"><thead><tr><th>Status</th><th>Topic</th><th>Mastery</th><th class="num">Points</th></tr></thead><tbody>' + topicRows + '</tbody></table></div>' +
        (flagged.length ? '<h3>Review these ' + flagged.length + '</h3><ol class="review">' + reviewItems + '</ol>' : '') +
        '<div class="q-actions results-actions">' +
        (flagged.length ? '<button type="button" class="btn primary" data-act="retry">Retry the ' + flagged.length + ' flagged question' + (flagged.length > 1 ? 's' : '') + '</button>' : '') +
        '<button type="button" class="btn" data-act="restart">' + (root.key === 'mixed' || root.key === 'gaps' ? 'New ' + root.label.toLowerCase() : 'Retake the full exam') + '</button>' +
        '<a class="btn ghost" href="#gaps">See your gap map</a></div>' +
        '</div>';

      cfg.onEnd();
      scrollToEl(host);

      var retry = host.querySelector('[data-act="retry"]');
      if (retry) retry.addEventListener('click', function () {
        cfg.onRestart();
        runExam(host, { key: root.key + '-retry', label: 'Retry · ' + root.label, questions: flagged.map(function (r) { return r.q; }), record: false, showLecture: root.showLecture, onEnd: root.onEnd, onRestart: root.onRestart, root: root });
        scrollToEl(host);
      });
      host.querySelector('[data-act="restart"]').addEventListener('click', function () {
        cfg.onRestart();
        var qs = root.key === 'mixed' ? pickBalanced(5) : root.key === 'gaps' ? pickGaps(20) : root.questions;
        runExam(host, { key: root.key, label: root.label, questions: qs, record: root.record, showLecture: root.showLecture, onEnd: root.onEnd, onRestart: root.onRestart, root: root });
        scrollToEl(host);
      });
    }
  }

  document.addEventListener('keydown', function (e) {
    if (activeExam) activeExam.key(e);
  });

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (a && a.getAttribute('href') === location.hash) {
      e.preventDefault();
      route();
    }
  });

  window.addEventListener('hashchange', route);
  route();
})();
