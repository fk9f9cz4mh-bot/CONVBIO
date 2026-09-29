/* Helpers for calculation questions that draw fresh numbers each time they are asked.
   A question with a `gen` function returns { q, a, tol, why } (plus optional unit / figHtml). */
(function () {
  'use strict';

  function rint(lo, hi) { return lo + Math.floor(Math.random() * (hi - lo + 1)); }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function fmt(v, dp) {
    return Number(v).toLocaleString('en-US', { maximumFractionDigits: dp === undefined ? 3 : dp });
  }
  // absolute tolerance: at least `min` (default: accept rounding to a whole number), else a relative slice of the answer
  function tol(a, rel, min) { return Math.max(min === undefined ? 0.51 : min, Math.abs(a) * (rel === undefined ? 0.005 : rel)); }

  window.CBGen = { rint: rint, pick: pick, fmt: fmt, tol: tol };
})();
