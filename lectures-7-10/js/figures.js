/* Figure builders for Lectures 7–10.
   Every figure is inline SVG or HTML styled through the theme tokens in style.css.
   Colour code shared by the life-cycle diagrams and matrices:
   S (survive and stay) = series1, G (survive and grow) = series3, F (reproduce) = series2. */
(function () {
  'use strict';

  var uidN = 0;
  function uid(p) { uidN += 1; return p + uidN; }
  function r1(v) { return Math.round(v * 10) / 10; }
  function fmt(v, dp) {
    return Number(v).toLocaleString('en-US', { maximumFractionDigits: dp === undefined ? 2 : dp });
  }
  function T(x, y, s, cls, anchor) {
    return '<text x="' + r1(x) + '" y="' + r1(y) + '"' + (anchor ? ' text-anchor="' + anchor + '"' : '') + ' class="' + (cls || '') + '">' + s + '</text>';
  }
  function L(x1, y1, x2, y2, cls, extra) {
    return '<line x1="' + r1(x1) + '" y1="' + r1(y1) + '" x2="' + r1(x2) + '" y2="' + r1(y2) + '" class="' + cls + '"' + (extra || '') + '/>';
  }
  function poly(pts, cls) {
    return '<polyline points="' + pts.map(function (p) { return r1(p[0]) + ',' + r1(p[1]); }).join(' ') + '" class="' + cls + '"/>';
  }
  function svgFig(w, h, label, body, caption, minW) {
    return '<figure class="fig"><div class="fig-scroll"><svg viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' + label + '"' +
      (minW ? ' style="min-width:' + minW + 'px"' : '') + '>' + body + '</svg></div>' +
      (caption ? '<figcaption>' + caption + '</figcaption>' : '') + '</figure>';
  }
  function markers(id) {
    return '<defs>' + ['s', 'g', 'f', 'm'].map(function (k) {
      return '<marker id="' + id + k + '" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="mk-' + k + '"/></marker>';
    }).join('') + '</defs>';
  }
  // small seeded PRNG so "random" figures are identical on every load
  function rng(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function gauss(rand) {
    var u = 1 - rand(), v = rand();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  }
  function legend(items, x, y) {
    var out = '', cx = x;
    items.forEach(function (it) {
      out += '<line x1="' + cx + '" y1="' + (y - 4) + '" x2="' + (cx + 22) + '" y2="' + (y - 4) + '" class="' + it[0] + '"' + (it[2] ? ' stroke-dasharray="5 4"' : '') + '/>' +
        T(cx + 28, y, it[1], 't-legend');
      cx += 40 + it[1].length * 6.4;
    });
    return out;
  }

  /* ---------- Lecture 7 ---------- */

  // 5 m × 8 m field, five 1 m² quadrats, 28 individuals (3 inside quadrats)
  function quadratField() {
    var s = 32, ox = 44, oy = 30;
    function X(m) { return ox + m * s; }
    function Y(m) { return oy + m * s; }
    var quads = [[0.5, 0.6], [3.2, 1.9], [1.6, 3.8], [3.6, 5.4], [0.7, 6.4]];
    var inside = [[0.9, 1.1], [2.1, 4.3], [1.2, 6.9]];
    var outside = [[2.2, 0.4], [4.3, 0.5], [1.8, 1.3], [4.6, 1.2], [0.3, 2.2], [2.5, 2.4], [1.2, 2.9], [4.5, 3.2], [3.0, 3.3], [0.4, 3.9],
      [3.1, 4.4], [4.4, 4.3], [0.9, 5.0], [2.4, 5.3], [1.5, 5.8], [4.7, 6.1], [2.9, 6.6], [2.3, 7.2], [4.2, 7.0], [0.3, 7.7],
      [3.5, 7.6], [1.8, 7.6], [3.8, 3.9], [2.7, 0.9], [0.4, 4.6]];
    var g = '<rect x="' + ox + '" y="' + oy + '" width="' + 5 * s + '" height="' + 8 * s + '" class="field"/>';
    quads.forEach(function (q) { g += '<rect x="' + X(q[0]) + '" y="' + Y(q[1]) + '" width="' + s + '" height="' + s + '" class="quad"/>'; });
    outside.forEach(function (p) { g += '<circle cx="' + r1(X(p[0])) + '" cy="' + r1(Y(p[1])) + '" r="4" class="dot"><title>Not in a quadrat: missed by the sample</title></circle>'; });
    inside.forEach(function (p) { g += '<circle cx="' + r1(X(p[0])) + '" cy="' + r1(Y(p[1])) + '" r="4.5" class="dot-hit ring"><title>Counted: inside a quadrat</title></circle>'; });
    g += T(X(2.5), oy - 10, '5 m', 't-muted', 'middle') + T(ox - 10, Y(4) + 4, '8 m', 't-muted', 'end');
    var tx = 250, ty = 56, lines = [
      ['Sampled: 5 quadrats × 1 m² = 5 m²', 't-strong'],
      ['Individuals inside quadrats: 3', 't-strong'],
      ['Average density = 3 ÷ 5 = 0.6 per m²', 't-accent'],
      ['Field area = 5 m × 8 m = 40 m²', 't-strong'],
      ['Estimate = 0.6 × 40 = 24 individuals', 't-accent'],
      ['A true census counts 28', 't-muted']
    ];
    lines.forEach(function (l, i) { g += T(tx, ty + i * 34, l[0], l[1]); });
    g += '<circle cx="' + tx + '" cy="' + (ty + 6 * 34 + 6) + '" r="4.5" class="dot-hit ring"/>' + T(tx + 12, ty + 6 * 34 + 10, 'counted', 't-muted') +
      '<circle cx="' + (tx + 90) + '" cy="' + (ty + 6 * 34 + 6) + '" r="4" class="dot"/>' + T(tx + 102, ty + 6 * 34 + 10, 'present but not sampled', 't-muted');
    return svgFig(560, 300, 'A 5 by 8 metre field with 28 individuals and five 1 square metre quadrats. Three individuals fall inside quadrats, so density is 0.6 per square metre and the estimate is 24, against a true count of 28.', g,
      'Extrapolating from quadrats (after the lecture’s example). The estimate misses the true count because the quadrats happened to land in sparse spots.');
  }

  // regular vs random vs clumped, with one identical quadrat dropped on each
  function distPatterns() {
    var W = 150, rand = rng(11), sets = [];
    var reg = [];
    for (var i = 0; i < 4; i++) for (var j = 0; j < 4; j++) reg.push([(i + 0.5) * W / 4 + (rand() - 0.5) * 6, (j + 0.5) * W / 4 + (rand() - 0.5) * 6]);
    var ran = [];
    for (i = 0; i < 16; i++) ran.push([8 + rand() * (W - 16), 8 + rand() * (W - 16)]);
    var clu = [], centers = [[34, 34], [118, 44], [116, 122]];
    centers.forEach(function (c, k) {
      var n = k === 0 ? 6 : 5;
      for (var m = 0; m < n; m++) {
        var a = rand() * Math.PI * 2, d = 3 + rand() * 11;
        clu.push([c[0] + Math.cos(a) * d, c[1] + Math.sin(a) * d]);
      }
    });
    sets.push(['Regular', 'easy to sample well', reg], ['Random', 'moderate error', ran], ['Clumped', 'large errors', clu]);
    var qx = 55, qy = 68, qs = 40, g = '';
    sets.forEach(function (st, k) {
      var ox = 20 + k * 185, oy = 12;
      var hits = st[2].filter(function (p) { return p[0] >= qx && p[0] <= qx + qs && p[1] >= qy && p[1] <= qy + qs; }).length;
      g += '<rect x="' + ox + '" y="' + oy + '" width="' + W + '" height="' + W + '" class="field"/>';
      st[2].forEach(function (p) { g += '<circle cx="' + r1(ox + p[0]) + '" cy="' + r1(oy + p[1]) + '" r="3.6" class="dot-hit"/>'; });
      g += '<rect x="' + (ox + qx) + '" y="' + (oy + qy) + '" width="' + qs + '" height="' + qs + '" class="quad dash"><title>Sample quadrat: ' + hits + ' inside</title></rect>';
      g += T(ox + W / 2, oy + W + 22, st[0], 't-strong', 'middle') + T(ox + W / 2, oy + W + 38, st[1], 't-muted', 'middle') +
        T(ox + W / 2, oy + W + 54, 'same quadrat catches ' + hits, 't-num', 'middle');
    });
    return svgFig(560, 236, 'Three fields of 16 individuals: regular, random and clumped. The same dashed quadrat catches about one individual in the regular and random fields and none in the clumped one, though clumps elsewhere hold five or six.', g,
      'Sixteen individuals in each field. In the clumped field a quadrat either lands in a clump (big overestimate) or in empty space (zero).');
  }

  // distance sampling: counts by distance band and the fitted line
  function distanceHist() {
    var X0 = 76, X1 = 420, Y0 = 206, Y1 = 36;
    function px(m) { return X0 + (m / 100) * (X1 - X0); }
    function py(n) { return Y0 - (n / 5) * (Y0 - Y1); }
    function bar(m0, m1, n, tip) {
      var x0 = px(m0) + 1, x1 = px(m1) - 1, top = py(n);
      return '<path d="M' + x0 + ',' + Y0 + ' V' + (top + 4) + ' Q' + x0 + ',' + top + ' ' + (x0 + 4) + ',' + top + ' H' + (x1 - 4) + ' Q' + x1 + ',' + top + ' ' + x1 + ',' + (top + 4) + ' V' + Y0 + ' Z" class="bar1"><title>' + tip + '</title></path>' +
        T(x0 + 14, top + 24, n + ' seen', 't-onbar');
    }
    var g = '';
    [0, 1, 2, 3, 4, 5].forEach(function (v) {
      g += L(X0, py(v), X1, py(v), 'grid') + T(X0 - 8, py(v) + 4, v, 't-num', 'end');
    });
    [0, 25, 50, 75, 100].forEach(function (v) { g += T(px(v), Y0 + 18, v, 't-num', 'middle'); });
    g += bar(0, 50, 4, '0–50 m: 4 zebras seen') + bar(50, 100, 2, '50–100 m: 2 zebras seen');
    g += L(X0, Y0, X1, Y0, 'stroke-muted');
    g += L(px(0), py(5), px(100), py(1), 'stroke-series2 dash');
    g += L(px(75), Y0, px(75), py(2) - 4, 'stroke-ink dash') + '<circle cx="' + px(75) + '" cy="' + py(2) + '" r="5" class="series2-fill ring"><title>The fitted line reaches 2, half the near-band count, at 75 m</title></circle>';
    g += T(px(75) + 8, py(2) - 30, 'half-width ≈ 75 m', 't-strong');
    g += T((X0 + X1) / 2, Y0 + 38, 'Distance from the road (m)', 't-strong', 'middle');
    g += T(20, (Y0 + Y1) / 2, 'Zebras counted', 't-strong', 'middle').replace('<text ', '<text transform="rotate(-90 20 ' + (Y0 + Y1) / 2 + ')" ');
    return svgFig(500, 256, 'Zebras counted by distance from the road: 4 in the 0 to 50 metre band and 2 in the 50 to 100 metre band. A fitted line through the counts falls to half the near-band count at 75 metres, the effective strip half-width.', g,
      'Counts fall with distance because far zebras are harder to see, not because there are fewer of them. The dashed line reaches half the near count at 75 m.');
  }

  /* ---------- Lecture 8 ---------- */

  function lambdaPanels() {
    var g = '', specs = [
      ['λ < 1', 'R < 0 · decline', function (t) { return 92 * Math.pow(0.87, t); }],
      ['λ = 1', 'R = 0 · stable', function () { return 50; }],
      ['λ > 1', 'R > 0 · growth', function (t) { return 8 * Math.pow(1.13, t); }]
    ];
    specs.forEach(function (sp, k) {
      var ox = 30 + k * 180, W = 150, H = 110, oy = 16, pts = [];
      for (var t = 0; t <= 20; t++) pts.push([ox + (t / 20) * W, oy + H - (Math.min(sp[2](t), 100) / 100) * H]);
      g += '<rect x="' + ox + '" y="' + oy + '" width="' + W + '" height="' + H + '" class="fill-bg"/>' +
        L(ox, oy, ox, oy + H, 'stroke-muted') + L(ox, oy + H, ox + W, oy + H, 'stroke-muted') +
        poly(pts, 'line-series1') +
        T(ox - 6, oy + 10, 'N', 't-muted', 'end') + T(ox + W, oy + H + 14, 'time →', 't-muted', 'end') +
        T(ox + W / 2, oy + H + 36, sp[0], 't-accent', 'middle') + T(ox + W / 2, oy + H + 52, sp[1], 't-muted', 'middle');
    });
    return svgFig(560, 186, 'Three population curves: declining when lambda is below 1, flat when lambda equals 1, rising ever faster when lambda is above 1.', g,
      'Geometric growth for the three ranges of λ (and R = λ − 1).');
  }

  function logisticCurve() {
    var X0 = 70, X1 = 500, Y0 = 236, Y1 = 30, K = 1000, N0 = 20, r = 0.15, TMAX = 60, NMAX = 1250;
    function px(t) { return X0 + (t / TMAX) * (X1 - X0); }
    function py(n) { return Y0 - (n / NMAX) * (Y0 - Y1); }
    function logi(t) { return K / (1 + ((K - N0) / N0) * Math.exp(-r * t)); }
    var lp = [], ep = [], t;
    for (t = 0; t <= TMAX; t += 0.5) lp.push([px(t), py(logi(t))]);
    for (t = 0; t <= TMAX; t += 0.5) { var e = N0 * Math.exp(r * t); if (e > NMAX) break; ep.push([px(t), py(e)]); }
    var g = '';
    [0, 250, 500, 750, 1000].forEach(function (v) { g += L(X0, py(v), X1, py(v), 'grid') + T(X0 - 8, py(v) + 4, fmt(v), 't-num', 'end'); });
    g += L(X0, Y0, X1, Y0, 'stroke-muted');
    g += L(X0, py(K), X1, py(K), 'stroke-ink dash') + T(X1, py(K) - 8, 'K, carrying capacity', 't-strong', 'end');
    g += poly(ep, 'line-series2') + poly(lp, 'line-series1');
    var th = Math.log((K - N0) / N0) / r;
    g += '<circle cx="' + r1(px(th)) + '" cy="' + r1(py(K / 2)) + '" r="5" class="series1-fill ring"><title>N = K/2 = 500: fastest growth</title></circle>' +
      T(px(th) + 10, py(K / 2) + 16, 'fastest growth at N = K/2', 't-strong');
    g += T(px(1), py(560), 'births ≫ deaths', 't-muted') + T(px(1), py(560) + 14, 'resources abundant', 't-muted');
    g += T(px(41), py(720), 'birth rates fall and/or', 't-muted') + T(px(41), py(720) + 14, 'death rates rise until', 't-muted') + T(px(41), py(720) + 28, 'births = deaths', 't-muted');
    g += T(px(21) - 6, py(1180), 'exponential: never stops', 't-muted', 'end');
    g += T((X0 + X1) / 2, Y0 + 20, 'Time →', 't-strong', 'middle');
    g += legend([['line-series1', 'Logistic'], ['line-series2', 'Exponential (geometric)']], X0, Y0 + 44);
    return svgFig(560, 290, 'Logistic curve rising slowly, then fastest at half of K, then leveling off at carrying capacity K of 1000. An exponential curve from the same start keeps accelerating.', g,
      'Same start, same R. Density dependence bends the logistic curve (teal) toward K; the exponential curve (amber) never stops.');
  }

  function survivorship() {
    var X0 = 70, X1 = 490, Y0 = 250, Y1 = 30;
    function px(x) { return X0 + (x / 100) * (X1 - X0); }
    function py(lg) { return Y0 - (lg / 3) * (Y0 - Y1); }
    function curve(f) {
      var pts = [];
      for (var x = 0; x <= 100; x += 1) { var v = f(x); if (v < 0) break; pts.push([px(x), py(v)]); }
      return pts;
    }
    var I = curve(function (x) { var l = 1000 * Math.exp(-Math.pow(x / 72, 7)); return l < 1 ? -1 : Math.log(l) / Math.LN10; });
    var II = curve(function (x) { return 3 - 3 * x / 100; });
    var III = curve(function (x) { return 3 - 2.2 * (1 - Math.exp(-x / 6)) - 0.8 * x / 100; });
    var g = '';
    [[0, '1'], [1, '10'], [2, '100'], [3, '1,000']].forEach(function (v) { g += L(X0, py(v[0]), X1, py(v[0]), 'grid') + T(X0 - 8, py(v[0]) + 4, v[1], 't-num', 'end'); });
    [0, 25, 50, 75, 100].forEach(function (v) { g += T(px(v), Y0 + 18, v, 't-num', 'middle'); });
    g += L(X0, Y0, X1, Y0, 'stroke-muted');
    g += poly(III, 'line-series3') + poly(II, 'line-series2') + poly(I, 'line-series1');
    g += T(px(30), py(3) - 8, 'Type I · humans', 't-strong');
    g += T(px(30), py(2.2), 'Type II · birds, marmots', 't-strong');
    g += T(px(40), py(0) - 10, 'Type III · trees', 't-strong');
    g += T((X0 + X1) / 2, Y0 + 38, 'Age (% of maximum life span)', 't-strong', 'middle');
    g += T(18, (Y0 + Y1) / 2, 'Survivors (log scale)', 't-strong', 'middle').replace('<text ', '<text transform="rotate(-90 18 ' + (Y0 + Y1) / 2 + ')" ');
    g += legend([['line-series1', 'Type I'], ['line-series2', 'Type II'], ['line-series3', 'Type III']], X0, Y0 + 62);
    return svgFig(560, 322, 'Survivorship curves on a log scale starting from 1000 individuals. Type I stays high then drops near the end of life. Type II is a straight diagonal line. Type III plunges early and then flattens.', g,
      'On a log axis, constant mortality (Type II) is a straight line.');
  }

  function eagleProjection() {
    var X0 = 76, X1 = 460, Y0 = 236, Y1 = 28;
    function px(yr) { return X0 + ((yr - 1989) / 18) * (X1 - X0); }
    function py(n) { return Y0 - (n / 12000) * (Y0 - Y1); }
    var a = [], b = [];
    for (var yr = 1989; yr <= 2007; yr++) {
      a.push([px(yr), py(2250 * Math.pow(1.071, yr - 1989))]);
      b.push([px(yr), py(2250 * Math.pow(1.09, yr - 1989))]);
    }
    var g = '';
    [0, 4000, 8000, 12000].forEach(function (v) { g += L(X0, py(v), X1, py(v), 'grid') + T(X0 - 8, py(v) + 4, fmt(v), 't-num', 'end'); });
    [1989, 1995, 2001, 2007].forEach(function (v) { g += T(px(v), Y0 + 18, v, 't-num', 'middle'); });
    g += L(X0, Y0, X1, Y0, 'stroke-muted');
    g += L(X0, py(10000), X1, py(10000), 'stroke-ink dash') + T(X0 + 6, py(10000) - 8, 'Delisting target: 10,000 pairs', 't-strong');
    g += poly(a, 'line-series1') + poly(b, 'line-series2');
    g += '<circle cx="' + r1(px(2007)) + '" cy="' + r1(py(7733)) + '" r="5" class="series1-fill ring"><title>λ = 1.071: about 7,733 pairs in 2007</title></circle>';
    g += '<circle cx="' + r1(px(2007)) + '" cy="' + r1(py(10613)) + '" r="5" class="series2-fill ring"><title>λ = 1.09: about 10,613 pairs in 2007</title></circle>';
    g += T(px(2007) + 10, py(10613) + 4, '≈10,613', 't-strong') + T(px(2007) + 10, py(7733) + 4, '≈7,733', 't-strong');
    g += T(20, (Y0 + Y1) / 2, 'Breeding pairs', 't-strong', 'middle').replace('<text ', '<text transform="rotate(-90 20 ' + (Y0 + Y1) / 2 + ')" ');
    g += legend([['line-series1', 'λ = 1.071 (from 1988–89)'], ['line-series2', 'λ = 1.09 (from 1975–89)']], X0, Y0 + 46);
    return svgFig(560, 296, 'Bald eagle breeding pairs projected from 2,250 in 1989 to 2007. With lambda 1.071 the projection reaches about 7,733, below the 10,000 target. With lambda 1.09 it reaches about 10,613, above it.', g,
      'Two estimates of λ, 18 years of compounding: one misses the target and one clears it.');
  }

  /* ---------- Lecture 9 ---------- */

  function nodeArrow(a, b, R, cls, mk, label, side, extraGap) {
    var dx = b[0] - a[0], dy = b[1] - a[1], d = Math.sqrt(dx * dx + dy * dy), ux = dx / d, uy = dy / d;
    var sx = a[0] + ux * (R + 3), sy = a[1] + uy * (R + 3), ex = b[0] - ux * (R + 4 + (extraGap || 0)), ey = b[1] - uy * (R + 4 + (extraGap || 0));
    // label sits beside the arrow's midpoint; anchor it away from the line so steep arrows don't cross the text
    var nx = -uy * side, ny = ux * side;
    var mx = (sx + ex) / 2 + nx * 10, my = (sy + ey) / 2 + ny * 10;
    var anchor = nx > 0.35 ? 'start' : nx < -0.35 ? 'end' : 'middle';
    var yoff = ny > 0.35 ? 12 : ny < -0.35 ? -2 : 4;
    return L(sx, sy, ex, ey, cls, ' marker-end="url(#' + mk + ')"') + (label ? T(mx, my + yoff, label, 't-strong', anchor) : '');
  }
  function selfLoop(c, R, deg, cls, mk, label) {
    var a = deg * Math.PI / 180, d = 0.5, k = 50;
    function P(rr, ang) { return r1(c[0] + rr * Math.cos(ang)) + ',' + r1(c[1] + rr * Math.sin(ang)); }
    var path = '<path d="M' + P(R + 1, a - d) + ' C' + P(R + k, a - d - 0.3) + ' ' + P(R + k, a + d + 0.3) + ' ' + P(R + 4, a + d) + '" class="' + cls + '" marker-end="url(#' + mk + ')"/>';
    var lx = c[0] + (R + k - 6) * Math.cos(a), ly = c[1] + (R + k - 6) * Math.sin(a);
    var anchor = Math.abs(Math.cos(a)) < 0.3 ? 'middle' : (Math.cos(a) > 0 ? 'start' : 'end');
    if (anchor !== 'middle') lx += Math.cos(a) > 0 ? -6 : 6;
    return path + (label ? T(lx, ly + (Math.sin(a) < -0.5 ? -2 : Math.sin(a) > 0.5 ? 12 : 4), label, 't-strong', anchor) : '');
  }
  function nodeCircle(c, R, l1, l2) {
    return '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + R + '" class="node"/>' +
      (l2 ? T(c[0], c[1] - 3, l1, 't-node', 'middle') + T(c[0], c[1] + 13, l2, 't-node', 'middle') : T(c[0], c[1] + 5, l1, 't-node', 'middle'));
  }
  function sgfKey(x, y) {
    return '<rect x="' + x + '" y="' + (y - 10) + '" width="12" height="12" rx="2" class="mk-s"/>' + T(x + 18, y, 'S · survive and stay', 't-legend') +
      '<rect x="' + (x + 160) + '" y="' + (y - 10) + '" width="12" height="12" rx="2" class="mk-g"/>' + T(x + 178, y, 'G · survive and grow', 't-legend') +
      '<rect x="' + (x + 320) + '" y="' + (y - 10) + '" width="12" height="12" rx="2" class="mk-f"/>' + T(x + 338, y, 'F · reproduce', 't-legend');
  }

  // loggerhead life cycle; vals = true labels each arrow with its rate
  function lifeCycle(vals) {
    var id = uid('lc'), R = 40;
    var N = [240, 350], SJ = [150, 210], LJ = [330, 120], SA = [510, 210], A = [420, 350];
    function lab(sym, v) { return vals ? sym + ' ' + v : sym; }
    var g = markers(id);
    g += nodeArrow(N, SJ, R, 'ln-g', id + 'g', lab('G₁', '0.675'), 1);
    g += nodeArrow(SJ, LJ, R, 'ln-g', id + 'g', lab('G₂', '0.047'), 1);
    g += nodeArrow(LJ, SA, R, 'ln-g', id + 'g', lab('G₃', '0.019'), 1);
    g += nodeArrow(SA, A, R, 'ln-g', id + 'g', lab('G₄', '0.061'), -1);
    g += nodeArrow(SA, N, R, 'ln-f', id + 'f', lab('F₄', '4.665'), -1);
    g += nodeArrow(A, N, R, 'ln-f', id + 'f', lab('F₅', '61.896'), 1);
    g += selfLoop(SJ, R, 180, 'ln-s', id + 's', lab('S₂', '0.703'));
    g += selfLoop(LJ, R, -90, 'ln-s', id + 's', lab('S₃', '0.657'));
    g += selfLoop(SA, R, 0, 'ln-s', id + 's', lab('S₄', '0.682'));
    g += selfLoop(A, R, 40, 'ln-s', id + 's', lab('S₅', '0.809'));
    g += nodeCircle(N, R, 'nestlings') + nodeCircle(SJ, R, 'small', 'juveniles') + nodeCircle(LJ, R, 'large', 'juveniles') +
      nodeCircle(SA, R, 'subadults') + nodeCircle(A, R, 'mature', 'adults');
    g += sgfKey(120, 452);
    return svgFig(660, 468, 'Loggerhead life cycle with five stages. Nestlings grow to small juveniles, then large juveniles, subadults and mature adults. Each stage from small juveniles on has a survive-and-stay loop. Subadults and mature adults both produce nestlings.' +
      (vals ? ' Rates: G1 0.675, S2 0.703, G2 0.047, S3 0.657, G3 0.019, S4 0.682, G4 0.061, S5 0.809, F4 4.665, F5 61.896.' : ''), g,
      vals ? 'Loggerhead life cycle with the rates from the mark–recapture table. Nestlings have no stay loop: after one year they are small juveniles or dead.'
        : 'Circles are stages; arrows are transitions. Nestlings last one year, so they have no stay loop.');
  }

  function salmonCycle() {
    var id = uid('sc'), R = 44, O = [260, 126], J = [140, 256], Rv = [380, 256];
    var g = markers(id);
    g += nodeArrow(J, O, R, 'ln-g', id + 'g', 'migrate to sea', -1);
    g += nodeArrow(O, Rv, R, 'ln-g', id + 'g', 'swim upstream', -1);
    g += nodeArrow(Rv, J, R, 'ln-f', id + 'f', 'breed, then die', -1);
    g += selfLoop(O, R, -90, 'ln-s', id + 's', 'several years at sea');
    g += nodeCircle(J, R, 'juveniles') + nodeCircle(O, R, 'adults', 'in ocean') + nodeCircle(Rv, R, 'adults', 'in river');
    return svgFig(520, 330, 'Sockeye salmon life cycle. Juveniles migrate to the ocean. Ocean adults have a stay loop for several years at sea, then swim upstream to become river adults, who breed and die, producing juveniles. River adults have no stay loop.', g,
      'The clicker answer: only ocean adults stay in their stage for several years. River adults breed and die, so there is no stay loop on them.');
  }

  function foodWeb() {
    var id = uid('fw'), W = 124, H = 40;
    var B = { wolf: [290, 40], coy: [110, 150], lamb: [230, 262], ewe: [450, 262] };
    function edge(a, b, dx, dy) {
      var t = Math.min((W / 2) / Math.max(Math.abs(dx), 1e-6), (H / 2) / Math.max(Math.abs(dy), 1e-6));
      return [a[0] + dx * t, a[1] + dy * t];
    }
    function arrow(a, b, cls, mk, label, lx, ly, anchor) {
      var dx = b[0] - a[0], dy = b[1] - a[1], d = Math.sqrt(dx * dx + dy * dy);
      var s = edge(a, b, dx / d, dy / d), e = edge(b, a, -dx / d, -dy / d);
      e = [e[0] - (dx / d) * 5, e[1] - (dy / d) * 5];
      return L(s[0], s[1], e[0], e[1], cls, ' marker-end="url(#' + mk + ')"') + (label ? T(lx, ly, label, 't-strong', anchor || 'middle') : '');
    }
    function box(c, t) { return '<rect x="' + (c[0] - W / 2) + '" y="' + (c[1] - H / 2) + '" width="' + W + '" height="' + H + '" rx="8" class="box"/>' + T(c[0], c[1] + 5, t, 't-node', 'middle'); }
    var g = markers(id);
    g += arrow(B.wolf, B.coy, 'ln-m', id + 'm', 'eat coyotes & pups', 170, 82, 'end');
    g += arrow(B.wolf, B.lamb, 'ln-m', id + 'm', 'eat', 250, 160, 'end');
    g += arrow(B.wolf, B.ewe, 'ln-m', id + 'm', 'eat', 390, 150, 'start');
    g += arrow(B.coy, B.lamb, 'ln-m', id + 'm', 'eat lambs', 140, 222, 'end');
    g += arrow(B.lamb, B.ewe, 'ln-g', id + 'g', 'grow up', 340, 252);
    g += '<path d="M' + (B.ewe[0] - 20) + ',' + (B.ewe[1] + H / 2) + ' Q340,322 ' + (B.lamb[0] + 26) + ',' + (B.lamb[1] + H / 2 + 5) + '" class="ln-f" marker-end="url(#' + id + 'f)"/>' + T(340, 316, 'reproduce', 't-strong', 'middle');
    g += box(B.wolf, 'Wolves') + box(B.coy, 'Coyotes') + box(B.lamb, 'Lambs') + box(B.ewe, 'Ewes');
    g += T(290, 90, 'wolf control removes these →', 't-muted', 'start');
    return svgFig(560, 336, 'Dall sheep food web. Wolves eat coyotes, lambs and ewes. Coyotes eat lambs. Lambs grow into ewes, and ewes produce lambs.', g,
      'Remove wolves and you also remove a coyote predator. Released coyotes eat more lambs (mesopredator release).');
  }

  /* ---------- matrices (HTML) ---------- */

  var TURTLE = [[0, 0, 0, 4.665, 61.896], [0.675, 0.703, 0, 0, 0], [0, 0.047, 0.657, 0, 0], [0, 0, 0.019, 0.682, 0], [0, 0, 0, 0.061, 0.8091]];
  var TST = ['Nestlings', 'Small juv.', 'Large juv.', 'Subadults', 'Adults'];
  var SHEEP = [[0, 0, 0.41, 0.36], [0.34, 0.47, 0, 0], [0, 0.47, 0.83, 0], [0, 0, 0.1, 0.82]];
  var SST = ['Lambs', 'Pre-breeding', 'Young ewes', 'Old ewes'];
  var GEN = [['S₁', 'F₂', 'F₃', 'F₄', 'F₅'], ['G₁', 'S₂', '0', '0', '0'], ['0', 'G₂', 'S₃', '0', '0'], ['0', '0', 'G₃', 'S₄', '0'], ['0', '0', '0', 'G₄', 'S₅']];

  function cellKind(r, c) {
    if (r === 0 && c > 0) return 'f';
    if (r === c) return 's';
    if (r === c + 1) return 'g';
    return 'z';
  }
  // opts: kind 'turtle' | 'sheep' | 'generic', col (0-based column to outline), hit [[r,c]], extra {r,c,v,dr,dc,dv}, caption
  function matrix(opts) {
    opts = opts || {};
    var kind = opts.kind || 'turtle';
    var M = kind === 'sheep' ? SHEEP : kind === 'generic' ? GEN : TURTLE;
    var names = kind === 'sheep' ? SST : TST;
    var n = M.length;
    var hits = {};
    (opts.hit || []).forEach(function (h) { hits[h[0] + '-' + h[1]] = true; });
    var head = '<thead><tr><th></th><th colspan="' + n + '" class="mx-axis">This year → (column = from)</th></tr><tr><th class="mx-axis">Next year ↓ (row = to)</th>' +
      names.map(function (s, i) { return '<th scope="col">' + (i + 1) + ' ' + s + '</th>'; }).join('') + '</tr></thead>';
    var body = '<tbody>' + M.map(function (row, r) {
      return '<tr><th scope="row">' + (r + 1) + ' ' + names[r] + '</th>' + row.map(function (v, c) {
        var k = cellKind(r, c), shown = v, cls;
        if (opts.extra && opts.extra.r === r && opts.extra.c === c) { shown = opts.extra.v; cls = 'mx-x'; }
        else if (opts.extra && opts.extra.dr === r && opts.extra.dc === c) { shown = opts.extra.dv; cls = 'mx-x'; }
        else {
          var zero = kind === 'generic' ? v === '0' : v === 0;
          cls = zero ? 'mx-z' : 'mx-' + k;
        }
        if (opts.col === c) cls += ' mx-col';
        if (hits[r + '-' + c]) cls += ' mx-hit';
        return '<td class="' + cls + '">' + shown + '</td>';
      }).join('') + '</tr>';
    }).join('') + '</tbody>';
    var label = kind === 'sheep' ? 'Dall sheep projection matrix' : kind === 'generic' ? 'Generic five-stage projection matrix' : 'Loggerhead sea turtle projection matrix';
    return '<figure class="fig"><div class="mx-scroll"><table class="mx"><caption class="sr-only">' + label + '. Columns are the stage this year; rows are the stage next year.</caption>' + head + body + '</table></div>' +
      '<ul class="mx-key"><li><span class="sw sw-f"></span>F · reproduce (top row)</li><li><span class="sw sw-s"></span>S · survive and stay (diagonal)</li><li><span class="sw sw-g"></span>G · survive and grow (below diagonal)</li></ul>' +
      (opts.caption ? '<figcaption>' + opts.caption + '</figcaption>' : '') + '</figure>';
  }

  /* ---------- Lecture 10 ---------- */

  function projectAll(M, v, years) {
    var tot = [v.reduce(function (s, x) { return s + x; }, 0)], lam = [];
    for (var t = 0; t < years; t++) {
      var nv = M.map(function (row) { return row.reduce(function (s, x, j) { return s + x * v[j]; }, 0); });
      var s1 = nv.reduce(function (s, x) { return s + x; }, 0);
      lam.push(s1 / tot[tot.length - 1]);
      tot.push(s1);
      v = nv;
    }
    return { tot: tot, lam: lam };
  }

  function stableStage() {
    var runs = [
      ['Start: 100 nestlings', [100, 0, 0, 0, 0], [0, 25, 50, 75, 100]],
      ['Start: 100 subadults', [0, 0, 0, 100, 0], [0, 500, 1000, 1500, 2000, 2500]]
    ];
    var g = '', YEARS = 25;
    runs.forEach(function (rn, k) {
      var res = projectAll(TURTLE, rn[1], YEARS);
      var ox = 70 + k * 265, W = 190, oy = 34, H = 170, ymax = rn[2][rn[2].length - 1];
      function px(t) { return ox + (t / YEARS) * W; }
      function py(v) { return oy + H - (v / ymax) * H; }
      g += T(ox, 18, rn[0], 't-strong');
      rn[2].forEach(function (v) { g += L(ox, py(v), ox + W, py(v), 'grid') + T(ox - 6, py(v) + 4, fmt(v), 't-num', 'end'); });
      [0, 5, 10, 15, 20, 25].forEach(function (v) { g += T(px(v), oy + H + 16, v, 't-num', 'middle'); });
      g += L(ox, oy + H, ox + W, oy + H, 'stroke-muted');
      g += poly(res.tot.map(function (v, t) { return [px(t), py(v)]; }), 'line-series1');
      g += '<circle cx="' + r1(px(1)) + '" cy="' + r1(py(res.tot[1])) + '" r="4.5" class="series1-fill ring"><title>Year 1: ' + fmt(res.tot[1], 1) + ' turtles, λ = ' + fmt(res.lam[0], 3) + '</title></circle>';
      g += '<circle cx="' + r1(px(20)) + '" cy="' + r1(py(res.tot[20])) + '" r="4.5" class="series1-fill ring"><title>Year 20: λ = ' + fmt(res.lam[19], 3) + '</title></circle>';
      g += T(ox + W, oy + H + 36, 'year 1 λ = ' + fmt(res.lam[0], 3) + ' · year 20 λ = ' + fmt(res.lam[19], 2), 't-muted', 'end');
    });
    g += T(280, 262, 'Years', 't-strong', 'middle');
    return svgFig(560, 272, 'Total loggerheads projected for 25 years with the lecture matrix. Starting with 100 nestlings the total falls steadily. Starting with 100 subadults it jumps to about 2,100 by year 6, then falls. Both end up declining at lambda of about 0.95.', g,
      'Projected with the lecture’s loggerhead matrix. Very different first years, same fate once the stage structure stabilizes: about 5% decline per year.');
  }

  function scenarioLines() {
    var X0 = 64, X1 = 440, Y0 = 226, Y1 = 26, YEARS = 30;
    function px(t) { return X0 + (t / YEARS) * (X1 - X0); }
    function py(v) { return Y0 - (v / 130) * (Y0 - Y1); }
    var sc = [['TEDs', 1.006, 'line-series1', 'series1-fill'], ['Protect beaches', 0.974, 'line-series3', 'series3-fill'], ['No protection', 0.951, 'line-series2', 'series2-fill']];
    var g = '';
    [0, 25, 50, 75, 100, 125].forEach(function (v) { g += L(X0, py(v), X1, py(v), 'grid') + T(X0 - 8, py(v) + 4, v, 't-num', 'end'); });
    [0, 10, 20, 30].forEach(function (v) { g += T(px(v), Y0 + 18, v, 't-num', 'middle'); });
    g += L(X0, Y0, X1, Y0, 'stroke-muted');
    sc.forEach(function (s) {
      var pts = [];
      for (var t = 0; t <= YEARS; t++) pts.push([px(t), py(100 * Math.pow(s[1], t))]);
      var end = 100 * Math.pow(s[1], YEARS);
      g += poly(pts, s[2]) + '<circle cx="' + r1(px(YEARS)) + '" cy="' + r1(py(end)) + '" r="4.5" class="' + s[3] + ' ring"><title>' + s[0] + ': λ = ' + s[1] + ', ' + fmt(end, 0) + ' after 30 years</title></circle>' +
        T(px(YEARS) + 10, py(end) + 4, s[0] + ' · λ = ' + s[1], 't-strong');
    });
    g += T((X0 + X1) / 2, Y0 + 38, 'Years from now', 't-strong', 'middle');
    g += T(18, (Y0 + Y1) / 2, 'Population (start = 100)', 't-strong', 'middle').replace('<text ', '<text transform="rotate(-90 18 ' + (Y0 + Y1) / 2 + ')" ');
    return svgFig(640, 270, 'Thirty-year projections from 100 turtles. With TEDs, lambda 1.006, the population slowly grows to about 120. Protecting beaches, lambda 0.974, it falls to about 45. With no protection, lambda 0.951, it falls to about 22.', g,
      'Each line compounds that scenario’s long-run λ from lecture (100 × λ<sup>t</sup>). The lecture’s full matrix runs wiggle in the first few years before settling to these rates.');
  }

  function detStoch() {
    var X0 = 64, X1 = 470, Y0 = 226, Y1 = 26, YEARS = 50, rand = rng(7), runs = [], ymax = 0;
    for (var k = 0; k < 10; k++) {
      var n = 100, path = [100];
      for (var t = 1; t <= YEARS; t++) { n *= Math.max(0.5, 1.01 + 0.09 * gauss(rand)); path.push(n); }
      runs.push(path);
      path.forEach(function (v) { if (v > ymax) ymax = v; });
    }
    var top = Math.ceil(ymax / 100) * 100;
    function px(t) { return X0 + (t / YEARS) * (X1 - X0); }
    function py(v) { return Y0 - (Math.min(v, top) / top) * (Y0 - Y1); }
    var g = '', step = top > 600 ? 200 : 100;
    for (var v = 0; v <= top; v += step) g += L(X0, py(v), X1, py(v), 'grid') + T(X0 - 8, py(v) + 4, fmt(v), 't-num', 'end');
    [0, 10, 20, 30, 40, 50].forEach(function (v) { g += T(px(v), Y0 + 18, v, 't-num', 'middle'); });
    g += L(X0, Y0, X1, Y0, 'stroke-muted');
    var below = 0, det = 100 * Math.pow(1.01, YEARS);
    runs.forEach(function (p) {
      if (p[YEARS] < det) below++;
      g += poly(p.map(function (val, t) { return [px(t), py(val)]; }), 'spag');
    });
    var dp = [];
    for (t = 0; t <= YEARS; t++) dp.push([px(t), py(100 * Math.pow(1.01, t))]);
    g += poly(dp, 'line-series1') + '<circle cx="' + r1(px(YEARS)) + '" cy="' + r1(py(det)) + '" r="5" class="series1-fill ring"/>' +
      T(px(YEARS) + 10, py(det) + 4, 'deterministic', 't-strong') + T(px(YEARS) + 10, py(det) + 18, '≈' + fmt(det, 0), 't-num');
    g += T((X0 + X1) / 2, Y0 + 38, 'Years', 't-strong', 'middle');
    g += legend([['line-series1', 'λ = 1.01 every year'], ['spag', '10 stochastic runs (λ varies around 1.01)']], X0, Y0 + 60);
    return svgFig(600, 300, 'Population trajectories over 50 years from 100 individuals. The deterministic line rises smoothly to about 164. Ten stochastic runs with the same average lambda fan out widely; ' + below + ' of the 10 end below the deterministic line.', g,
      'Same start and same average λ. Stochastic runs fan out into a distribution, and ' + below + ' of these 10 finish below the deterministic prediction.');
  }

  function geoMeanChart() {
    var X0 = 64, X1 = 440, Y0 = 226, Y1 = 26;
    function px(t) { return X0 + (t / 10) * (X1 - X0); }
    function py(v) { return Y0 - (v / 1000) * (Y0 - Y1); }
    var c = [150], alt = [150];
    for (var t = 1; t <= 10; t++) { c.push(c[t - 1] * 1.2); alt.push(alt[t - 1] * (t % 2 === 1 ? 1.1 : 1.3)); }
    var g = '';
    [0, 250, 500, 750, 1000].forEach(function (v) { g += L(X0, py(v), X1, py(v), 'grid') + T(X0 - 8, py(v) + 4, fmt(v), 't-num', 'end'); });
    [0, 2, 4, 6, 8, 10].forEach(function (v) { g += T(px(v), Y0 + 18, v, 't-num', 'middle'); });
    g += L(X0, Y0, X1, Y0, 'stroke-muted');
    g += poly(alt.map(function (v, i) { return [px(i), py(v)]; }), 'line-series2') + poly(c.map(function (v, i) { return [px(i), py(v)]; }), 'line-series1');
    alt.forEach(function (v, i) { g += '<circle cx="' + r1(px(i)) + '" cy="' + r1(py(v)) + '" r="3.5" class="series2-fill ring"><title>Year ' + i + ', alternating: ' + fmt(v, 1) + '</title></circle>'; });
    c.forEach(function (v, i) { g += '<circle cx="' + r1(px(i)) + '" cy="' + r1(py(v)) + '" r="3.5" class="series1-fill ring"><title>Year ' + i + ', constant 1.2: ' + fmt(v, 1) + '</title></circle>'; });
    g += T(px(10) + 10, py(c[10]) - 4, 'constant 1.2: ' + fmt(c[10], 0), 't-strong') + T(px(10) + 10, py(alt[10]) + 14, 'alternating: ' + fmt(alt[10], 0), 't-strong');
    g += T((X0 + X1) / 2, Y0 + 38, 'Years', 't-strong', 'middle');
    g += legend([['line-series1', 'λ = 1.2 every year'], ['line-series2', 'λ alternates 1.1, 1.3 (mean 1.2)']], X0, Y0 + 60);
    return svgFig(600, 300, 'Insects starting at 150. With lambda 1.2 every year they reach about 929 after 10 years. With lambda alternating 1.1 and 1.3, which also averages 1.2, they reach about 897.', g,
      'Same arithmetic mean, fewer insects. The long-run rate is the geometric mean, √(1.1 × 1.3) ≈ 1.196.');
  }

  window.CBFig = {
    quadratField: quadratField,
    distPatterns: distPatterns,
    distanceHist: distanceHist,
    lambdaPanels: lambdaPanels,
    logisticCurve: logisticCurve,
    survivorship: survivorship,
    eagleProjection: eagleProjection,
    lifeCycle: lifeCycle,
    salmonCycle: salmonCycle,
    foodWeb: foodWeb,
    matrix: matrix,
    stableStage: stableStage,
    scenarioLines: scenarioLines,
    detStoch: detStoch,
    geoMeanChart: geoMeanChart,
    TURTLE: TURTLE,
    TURTLE_STAGES: ['nestlings', 'small juveniles', 'large juveniles', 'subadults', 'mature adults'],
    SHEEP: SHEEP,
    SHEEP_STAGES: ['lambs', 'pre-breeding ewes', 'young ewes', 'old ewes']
  };
  window.CB_DATA = { lectures: [] };
})();
