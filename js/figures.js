/* Figure builders shared by the lecture content files.
   Every figure is inline SVG or HTML styled through the theme tokens in style.css. */
(function () {
  'use strict';

  function fmt(n) {
    return n.toLocaleString('en-US');
  }

  // Lecture 2: the two axes that organize current debates
  function axes2x2() {
    return (
      '<figure class="fig">' +
      '<div class="fig-scroll"><svg viewBox="0 0 520 300" role="img" aria-label="Two axes: preservation ethic versus sustainable use ethic, and focus on pristine versus human-dominated systems. Most conservation biologists fall on a diagonal from preservation and pristine to sustainable use and human-dominated.">' +
      '<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="fill-muted"/></marker></defs>' +
      '<ellipse cx="260" cy="150" rx="128" ry="34" transform="rotate(-33 260 150)" class="fill-soft stroke-accent"/>' +
      '<text x="260" y="154" text-anchor="middle" transform="rotate(-33 260 150)" class="t-accent">Most conservation biologists</text>' +
      '<line x1="118" y1="150" x2="402" y2="150" class="stroke-muted" marker-start="url(#ar)" marker-end="url(#ar)"/>' +
      '<line x1="260" y1="44" x2="260" y2="256" class="stroke-muted" marker-start="url(#ar)" marker-end="url(#ar)"/>' +
      '<text x="108" y="146" text-anchor="end" class="t-strong">Preservation</text>' +
      '<text x="108" y="162" text-anchor="end" class="t-strong">ethic</text>' +
      '<text x="412" y="146" class="t-strong">Sustainable</text>' +
      '<text x="412" y="162" class="t-strong">use ethic</text>' +
      '<text x="260" y="30" text-anchor="middle" class="t-strong">Focus on human-dominated systems</text>' +
      '<text x="260" y="280" text-anchor="middle" class="t-strong">Focus on pristine systems</text>' +
      '</svg></div>' +
      '<figcaption>The lecture’s map of the debate. People disagree on both axes, and most conservation biologists sit somewhere along the diagonal.</figcaption>' +
      '</figure>'
    );
  }

  // Lecture 2: mammal biomass (PNAS 2023)
  function biomassBars() {
    var rows = [
      ['Domesticated mammals', 630, 'mostly cattle'],
      ['Humans', 390, ''],
      ['Wild marine mammals', 40, 'mostly baleen whales'],
      ['Wild land mammals', 20, 'elephants are the largest share']
    ];
    var x0 = 176, scale = 300 / 700, y = 26, out = '';
    rows.forEach(function (r) {
      var w = Math.max(r[1] * scale, 3);
      out +=
        '<text x="' + (x0 - 10) + '" y="' + (y + 15) + '" text-anchor="end" class="t-strong">' + r[0] + '</text>' +
        '<rect x="' + x0 + '" y="' + y + '" width="' + w.toFixed(1) + '" height="22" rx="3" class="fill-series1"><title>' + r[0] + ': about ' + r[1] + ' Mt</title></rect>' +
        '<text x="' + (x0 + w + 8) + '" y="' + (y + 15) + '" class="t-num">≈' + r[1] + ' Mt</text>';
      if (r[2]) out += '<text x="' + (x0 + w + 72) + '" y="' + (y + 15) + '" class="t-muted">' + r[2] + '</text>';
      y += 34;
    });
    return (
      '<figure class="fig">' +
      '<div class="fig-scroll"><svg viewBox="0 0 640 170" role="img" aria-label="Earth’s mammals by total biomass: domesticated about 630 megatons, humans about 390, wild marine about 40, wild land about 20.">' +
      '<line x1="' + x0 + '" y1="18" x2="' + x0 + '" y2="' + (y - 4) + '" class="stroke-muted"/>' +
      out +
      '<text x="' + x0 + '" y="' + (y + 14) + '" class="t-muted">1 Mt = 1 million tonnes</text>' +
      '</svg></div>' +
      '<figcaption>Earth’s mammals by total biomass (PNAS, 2023). Wild mammals are roughly 6% of the total; most of the planet’s mammal biomass is people and our livestock.</figcaption>' +
      '</figure>'
    );
  }

  // Lecture 3: a generic species accumulation curve
  function accumCurve() {
    var X0 = 60, X1 = 460, Y0 = 210, Y1 = 30, smax = 40, k = 14, pts = [];
    for (var e = 0; e <= 60; e += 1) {
      var s = smax * (1 - Math.exp(-e / k));
      pts.push((X0 + (e / 60) * (X1 - X0)).toFixed(1) + ',' + (Y0 - (s / 45) * (Y0 - Y1)).toFixed(1));
    }
    var yA = (Y0 - (smax / 45) * (Y0 - Y1)).toFixed(1);
    return (
      '<figure class="fig">' +
      '<div class="fig-scroll"><svg viewBox="0 0 490 260" role="img" aria-label="Species accumulation curve: species found rises steeply with sampling effort, then levels off toward an asymptote.">' +
      '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X1 + '" y2="' + Y0 + '" class="stroke-muted"/>' +
      '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X0 + '" y2="' + Y1 + '" class="stroke-muted"/>' +
      '<line x1="' + X0 + '" y1="' + yA + '" x2="' + X1 + '" y2="' + yA + '" class="stroke-muted dash"/>' +
      '<text x="' + (X1 - 4) + '" y="' + (yA - 8) + '" text-anchor="end" class="t-muted">asymptote: true total richness (hard to estimate)</text>' +
      '<polyline points="' + pts.join(' ') + '" class="line-series1"/>' +
      '<text x="' + ((X0 + X1) / 2) + '" y="' + (Y0 + 30) + '" text-anchor="middle" class="t-strong">Sampling effort (m², traps, days, individuals…)</text>' +
      '<text x="18" y="' + ((Y0 + Y1) / 2) + '" text-anchor="middle" transform="rotate(-90 18 ' + ((Y0 + Y1) / 2) + ')" class="t-strong">Species found (richness)</text>' +
      '<text x="' + (X0 + 70) + '" y="' + (Y0 - 70) + '" class="t-muted">steep: each sample adds new species</text>' +
      '<text x="' + (X0 + 205) + '" y="' + (Y1 + 40) + '" class="t-muted">flat: mostly re-finding species</text>' +
      '</svg></div>' +
      '<figcaption>Species accumulation curve: richness plotted against the total sampling effort.</figcaption>' +
      '</figure>'
    );
  }

  // Lecture 4: the two-ecosystem accumulation clicker
  var A = [1, 3, 5, 7, 9, 10, 12, 13, 13, 13, 13, 13];
  var B = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 11, 11, 12, 13, 14, 14, 15, 16, 16];
  function accumCompare(annotate) {
    var X0 = 56, X1 = 470, Y0 = 220, Y1 = 24;
    function px(i) { return X0 + (i / 20) * (X1 - X0); }
    function py(s) { return Y0 - (s / 20) * (Y0 - Y1); }
    function series(arr, cls, shape) {
      var pts = arr.map(function (s, i) { return px(i + 1).toFixed(1) + ',' + py(s).toFixed(1); });
      var marks = arr.map(function (s, i) {
        var x = px(i + 1), y = py(s);
        return shape === 'sq'
          ? '<rect x="' + (x - 4) + '" y="' + (y - 4) + '" width="8" height="8" class="' + cls + '-fill ring"/>'
          : '<circle cx="' + x + '" cy="' + y + '" r="4.5" class="' + cls + '-fill ring"/>';
      }).join('');
      return '<polyline points="' + pts.join(' ') + '" class="line-' + cls + '"/>' + marks;
    }
    var ticks = '';
    [0, 5, 10, 15, 20].forEach(function (v) {
      ticks += '<line x1="' + X0 + '" y1="' + py(v) + '" x2="' + X1 + '" y2="' + py(v) + '" class="grid"/>' +
        '<text x="' + (X0 - 8) + '" y="' + (py(v) + 4) + '" text-anchor="end" class="t-num">' + v + '</text>' +
        '<text x="' + px(v) + '" y="' + (Y0 + 18) + '" text-anchor="middle" class="t-num">' + v + '</text>';
    });
    var ann = '';
    if (annotate) {
      ann = '<line x1="' + px(9) + '" y1="' + Y0 + '" x2="' + px(9) + '" y2="' + (Y1 + 6) + '" class="stroke-ink dash"/>' +
        '<text x="' + (px(9) + 6) + '" y="' + (Y1 + 4) + '" class="t-strong">9 samples: A = 13, B = 8</text>';
    }
    return (
      '<figure class="fig">' +
      '<div class="fig-scroll"><svg viewBox="0 0 560 262" role="img" aria-label="Accumulation curves. Ecosystem A levels off at 13 species after about 9 samples, with 12 samples total. Ecosystem B is still rising and reaches 16 species after 20 samples; after 9 samples it had 8.">' +
      ticks +
      '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X1 + '" y2="' + Y0 + '" class="stroke-muted"/>' +
      series(A, 'series1', 'c') + series(B, 'series2', 'sq') + ann +
      '<text x="' + px(8) + '" y="' + (py(13) - 12) + '" class="t-strong">Ecosystem A · 13 spp.</text>' +
      '<text x="' + (px(20) - 4) + '" y="' + (py(16) - 12) + '" text-anchor="end" class="t-strong">Ecosystem B · 16 spp.</text>' +
      '<text x="' + ((X0 + X1) / 2) + '" y="' + (Y0 + 38) + '" text-anchor="middle" class="t-strong">Number of samples</text>' +
      '<text x="16" y="' + ((Y0 + Y1) / 2) + '" text-anchor="middle" transform="rotate(-90 16 ' + ((Y0 + Y1) / 2) + ')" class="t-strong">Cumulative species</text>' +
      '</svg></div>' +
      '<figcaption>' + (annotate
        ? 'Compare at equal effort. At 9 samples A has 13 species and B has 8. B only “wins” because it was sampled more.'
        : 'Ecosystem A (circles, 12 samples) and ecosystem B (squares, 20 samples).') + '</figcaption>' +
      '</figure>'
    );
  }

  // Lecture 4: phylogenetic tree for PD (tips A–E, branch lengths in units)
  function phyloTree(caption) {
    var seg = function (x1, y1, x2, y2) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" class="branch"/>'; };
    var conn = function (x1, y, x2) { return '<line x1="' + x1 + '" y1="' + y + '" x2="' + x2 + '" y2="' + y + '" class="branch conn"/>'; };
    var lab = function (x, y, t) { return '<text x="' + x + '" y="' + y + '" class="t-num">' + t + '</text>'; };
    var tip = function (x, t) { return '<text x="' + x + '" y="22" text-anchor="middle" class="t-tip">' + t + '</text>'; };
    var s = '';
    s += seg(60, 30, 60, 90) + seg(140, 30, 140, 90) + conn(60, 90, 140) + seg(100, 90, 100, 150);
    s += seg(230, 30, 230, 90) + seg(310, 30, 310, 90) + conn(230, 90, 310) + seg(270, 90, 270, 150);
    s += conn(100, 150, 270) + seg(185, 150, 185, 210);
    s += seg(430, 30, 430, 210) + conn(185, 210, 430) + seg(307.5, 210, 307.5, 230);
    s += lab(66, 64, '2') + lab(146, 64, '2') + lab(236, 64, '2') + lab(316, 64, '2') + lab(106, 124, '2') + lab(276, 124, '2') + lab(191, 184, '2') + lab(436, 124, '6');
    s += tip(60, 'A') + tip(140, 'B') + tip(230, 'C') + tip(310, 'D') + tip(430, 'E');
    return (
      '<figure class="fig">' +
      '<div class="fig-scroll"><svg viewBox="0 0 490 245" role="img" aria-label="Phylogenetic tree. A and B are sisters, each on a branch of 2 units; C and D are sisters, each on a branch of 2. The AB and CD ancestors each connect by 2 units to a shared ancestor, which connects by 2 units to the root. E sits alone on a 6-unit branch from the root.">' +
      s + '</svg></div>' +
      '<figcaption>' + (caption || 'Numbers are branch lengths. Only the vertical branches count; the horizontal connectors just arrange the tips.') + '</figcaption>' +
      '</figure>'
    );
  }

  // Lecture 5: species–area relationship S = c·A^z with c = 4.7, z = 0.28
  function sarCurve() {
    var c = 4.7, z = 0.282, X0 = 60, X1 = 470, Y0 = 220, Y1 = 24;
    function S(a) { return c * Math.pow(a, z); }
    function px(a) { return X0 + (a / 10000) * (X1 - X0); }
    function py(s) { return Y0 - (s / 70) * (Y0 - Y1); }
    var pts = [];
    for (var a = 0; a <= 10000; a += 100) pts.push(px(a).toFixed(1) + ',' + py(a === 0 ? 0 : S(a)).toFixed(1));
    var grid = '';
    [0, 10, 20, 30, 40, 50, 60, 70].forEach(function (v) {
      grid += '<line x1="' + X0 + '" y1="' + py(v) + '" x2="' + X1 + '" y2="' + py(v) + '" class="grid"/>' +
        '<text x="' + (X0 - 8) + '" y="' + (py(v) + 4) + '" text-anchor="end" class="t-num">' + v + '</text>';
    });
    [0, 2000, 4000, 6000, 8000, 10000].forEach(function (v) {
      grid += '<text x="' + px(v) + '" y="' + (Y0 + 18) + '" text-anchor="middle" class="t-num">' + fmt(v) + '</text>';
    });
    function step(a1, a2, label, dy) {
      var y1 = py(S(a1)), y2 = py(S(a2));
      return '<line x1="' + px(a1) + '" y1="' + y1 + '" x2="' + px(a2) + '" y2="' + y1 + '" class="stroke-ink dash"/>' +
        '<line x1="' + px(a2) + '" y1="' + y1 + '" x2="' + px(a2) + '" y2="' + y2 + '" class="stroke-series2"/>' +
        '<circle cx="' + px(a1) + '" cy="' + y1 + '" r="4" class="series1-fill ring"/>' +
        '<circle cx="' + px(a2) + '" cy="' + y2 + '" r="4" class="series1-fill ring"/>' +
        '<text x="' + (px(a2) + 8) + '" y="' + (y1 + dy) + '" class="t-strong">' + label + '</text>';
    }
    return (
      '<figure class="fig">' +
      '<div class="fig-scroll"><svg viewBox="0 0 500 262" role="img" aria-label="Species–area curve rising steeply at small areas and flattening at large areas. Shrinking a 4,000 hectare patch to 2,000 hectares loses about 9 species; shrinking a 10,000 hectare patch to 8,000 loses about 4.">' +
      grid +
      '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X1 + '" y2="' + Y0 + '" class="stroke-muted"/>' +
      '<polyline points="' + pts.join(' ') + '" class="line-series1"/>' +
      step(2000, 4000, '4,000 → 2,000 ha: −9 species', 26) +
      step(8000, 10000, '', 14) +
      '<text x="' + px(10000) + '" y="' + (py(S(8000)) - 26) + '" text-anchor="end" class="t-strong">10,000 → 8,000 ha: −4 species</text>' +
      '<text x="' + ((X0 + X1) / 2) + '" y="' + (Y0 + 38) + '" text-anchor="middle" class="t-strong">Area (ha)</text>' +
      '<text x="16" y="' + ((Y0 + Y1) / 2) + '" text-anchor="middle" transform="rotate(-90 16 ' + ((Y0 + Y1) / 2) + ')" class="t-strong">Number of species (S)</text>' +
      '</svg></div>' +
      '<figcaption>S = C·A<sup>z</sup> (here C ≈ 4.7, z ≈ 0.28). Removing the same 2,000 ha costs more species from a small patch than from a large one.</figcaption>' +
      '</figure>'
    );
  }

  // Lecture 4: boxes of sites for alpha / beta / gamma
  function sites(list, caption) {
    return (
      '<figure class="fig sites-fig"><div class="sites">' +
      list.map(function (s) { return '<div class="site" aria-label="Site with species ' + s.join(', ') + '">' + s.map(function (x) { return '<span>' + x + '</span>'; }).join('') + '</div>'; }).join('') +
      '</div><figcaption>' + caption + '</figcaption></figure>'
    );
  }

  window.CBFig = {
    axes2x2: axes2x2,
    biomassBars: biomassBars,
    accumCurve: accumCurve,
    accumCompare: accumCompare,
    phyloTree: phyloTree,
    sarCurve: sarCurve,
    sites: sites
  };
  window.CB_DATA = { lectures: [] };
})();
