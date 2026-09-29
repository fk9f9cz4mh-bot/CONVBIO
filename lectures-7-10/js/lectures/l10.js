(function () {
  var G = window.CBGen;
  var P = CBFig.TURTLE, PN = CBFig.TURTLE_STAGES, D = CBFig.SHEEP, DN = CBFig.SHEEP_STAGES;

  window.CB_DATA.lectures.push({
    id: 'l10',
    num: 10,
    title: 'Population viability analysis',
    short: 'Projection & PVA',
    nav: 'PVA',
    reading: 'Textbook Ch. 13, pp. 408–413 and 433–439 (not on Midterm 1)',
    blurb: 'Putting the matrix to work: stage vectors and one-step projections, stable stage structure, how the loggerhead PVA pointed to turtle excluder devices, and why environmental stochasticity lowers expected population size.',
    flags: [
      { kind: 'know', text: 'Matrix algebra won’t be tested directly, but you must understand how matrices work, identify what each element means, and <strong>project a single stage forward</strong> (100 subadults × 0.061 = 6.1 adults).' },
      { kind: 'know', text: 'A one-year λ depends on the stage distribution. In the long run the population reaches a <strong>stable stage structure</strong> and grows or shrinks geometrically (loggerheads: λ ≈ 0.95).' },
      { kind: 'know', text: 'With environmental stochasticity the long-run growth rate is the <strong>geometric mean</strong> of λ, not the arithmetic mean, so more variability means lower predicted populations.' },
      { kind: 'note', text: '<strong>Midterm 1 material ends with the loggerhead PVA</strong> (the TED history and summary). Stochastic dynamics comes after that line.' }
    ],
    sections: [
      {
        id: 'l10-project',
        title: 'Stage vectors and one-step projections',
        html: `
<p class="definition"><strong>Stage distribution vector (N<sub>t</sub>):</strong> a column showing the number of individuals in each stage.</p>
<div class="vec-row">
  <div class="table-wrap"><table class="num"><thead><tr><th>Loggerhead stage</th><th>N<sub>t</sub></th></tr></thead><tbody>
    <tr><td>1 Nestlings</td><td>200</td></tr><tr><td>2 Small juveniles</td><td>100</td></tr><tr><td>3 Large juveniles</td><td>100</td></tr><tr><td>4 Subadults</td><td>100</td></tr><tr><td>5 Adults</td><td>500</td></tr><tr><td><strong>Total</strong></td><td><strong>1,000</strong></td></tr>
  </tbody></table></div>
  <div class="table-wrap"><table class="num"><thead><tr><th>Right whales</th><th>N<sub>t</sub></th></tr></thead><tbody>
    <tr><td>As a count</td><td>20 females</td></tr><tr><td>As a vector: juveniles</td><td>4</td></tr><tr><td>As a vector: adults</td><td>16</td></tr>
  </tbody></table></div>
</div>
<p>The structured model multiplies the matrix by the vector: N<sub>t+1</sub> = P · N<sub>t</sub>. Full matrix algebra won’t be tested, but you need to <strong>project a single stage</strong>: take the number in that stage and multiply it down that stage’s <strong>column</strong>. Each row gives next year’s count in that stage.</p>
${CBFig.matrix({ kind: 'turtle', col: 3, caption: 'Column 4 (outlined) is what one subadult becomes by next year.' })}
<div class="table-wrap"><table class="num">
  <thead><tr><th>Start: 100 subadults</th><th>Calculation</th><th>Next year</th></tr></thead>
  <tbody>
    <tr><td>Nestlings (row 1)</td><td>100 × 4.665</td><td><strong>≈ 466</strong></td></tr>
    <tr><td>Small juveniles (row 2)</td><td>100 × 0</td><td>0</td></tr>
    <tr><td>Large juveniles (row 3)</td><td>100 × 0</td><td>0</td></tr>
    <tr><td>Subadults (row 4)</td><td>100 × 0.682</td><td><strong>≈ 68</strong></td></tr>
    <tr><td>Adults (row 5)</td><td>100 × 0.061</td><td><strong>6.1</strong></td></tr>
    <tr class="hl"><td><strong>Total</strong></td><td></td><td><strong>≈ 540 → λ ≈ 5.4</strong></td></tr>
  </tbody>
</table></div>
<p>There are no small or large juveniles next year because column 4 has zeros in rows 2 and 3: a subadult can only stay, mature, or produce nestlings.</p>
<p>Start instead with <strong>100 nestlings</strong>: next year there are 100 × 0.675 = 67.5 small juveniles and nothing else, so λ = 67.5 ÷ 100 = <strong>0.675</strong>.</p>
<details class="more"><summary>Textbook Leslie-matrix example</summary>
<p>Four ages with fecundities 0, 1.0, 1.6 and 1.1 and survival 0.7, 0.4 and 0.2. Start with (58, 45, 13, 6) = 122. Next year: age 1 = 1.0 × 45 + 1.6 × 13 + 1.1 × 6 ≈ 72; age 2 = 0.7 × 58 ≈ 41; age 3 = 0.4 × 45 = 18; age 4 = 0.2 × 13 ≈ 3. Total 134, so λ = 134 ÷ 122 ≈ 1.098.</p></details>`,
        recall: [
          ['How do you project a single stage forward one year?', 'Multiply the number in that stage by each entry in its column. Each row gives next year’s count in that stage.'],
          ['100 subadults now: how many adults and nestlings next year?', '100 × 0.061 = 6.1 adults and 100 × 4.665 ≈ 466 nestlings (plus 68 subadults that stay).'],
          ['Why do 100 subadults produce no small or large juveniles next year?', 'Column 4 has zeros in rows 2 and 3. Subadults can only stay, grow into adults or produce nestlings.']
        ]
      },
      {
        id: 'l10-stable',
        title: 'Stable stage structure',
        html: `
<p>So is the loggerhead population growing 5.4-fold a year (from 100 subadults), or shrinking 32% a year (from 100 nestlings)? <strong>Neither.</strong> The one-year λ changes whenever the stage distribution vector changes. To learn the population’s fate, make predictions over longer times.</p>
${CBFig.stableStage()}
<ul class="keylist">
  <li>A matrix model predicts a long-term <strong>stable stage structure</strong>: the same proportion of individuals in each stage over time.</li>
  <li>At the stable stage structure, the population grows or shrinks <strong>geometrically at a consistent rate</strong>.</li>
  <li>Loggerheads started from 100 nestlings or from 100 subadults both reach <strong>λ ≈ 0.95 by year 20</strong>: declining about 5% per year.</li>
</ul>
<div class="table-wrap"><table class="num">
  <thead><tr><th>Stage</th><th>Nestlings</th><th>Small juv.</th><th>Large juv.</th><th>Subadults</th><th>Adults</th></tr></thead>
  <tbody><tr><td>Stable share (%)</td><td>23.85</td><td>64.78</td><td>10.33</td><td>0.73</td><td>0.31</td></tr></tbody>
</table></div>
<p class="muted small">This is the vector used in the lecture’s recovery clicker. Less than 1% of loggerheads are adults at any time.</p>
<p class="callout warn"><strong>Limits:</strong> over long times a matrix model predicts geometric growth, so it shares the geometric model’s limitations. It works best for small populations and gets worse as population size changes, because nothing in it is density dependent.</p>`,
        recall: [
          ['100 nestlings give a first-year λ of 0.675; 100 subadults give 5.4. Which is the real λ?', 'Neither. One-year λ depends on the starting stage distribution. Both settle to the stable stage structure with λ ≈ 0.95.'],
          ['Define stable stage structure.', 'The long-run state in which the proportion of individuals in each stage stays the same and the population grows or shrinks geometrically at a constant rate.'],
          ['What limitation does a matrix model share with the geometric model?', 'No density dependence: it works best for small populations and worse as population size changes.']
        ]
      },
      {
        id: 'l10-pva',
        title: 'PVA: beaches or fishing nets?',
        html: `
<p class="definition"><strong>Population viability analysis (PVA):</strong> methods for predicting population trends and the risk of extinction. They include estimates of population size, predictions about the trend, and predictions about variability over time.</p>
<h4>Two sources of loggerhead mortality</h4>
<div class="compare">
  <div class="compare-col"><p class="eyebrow">1 · Beaches (nestlings)</p><p>Hatchlings die on nesting beaches, and beach lighting makes them more vulnerable. Fixes: protecting nests and turning beachfront lights out (May–October) or shielding them.</p></div>
  <div class="compare-col"><p class="eyebrow">2 · Ocean (juveniles and adults)</p><p>Turtles drown in fishing nets. Fix: <strong>turtle excluder devices (TEDs)</strong>, which let turtles escape from trawl nets.</p></div>
</div>
<p>Status: <strong>declining, λ = 0.951</strong>. Both options are costly. Which one should managers pay for? Use the model as a simulated experiment:</p>
<div class="table-wrap"><table>
  <thead><tr><th>Scenario</th><th>Change to the matrix</th><th class="num">λ</th><th>Outcome</th></tr></thead>
  <tbody>
    <tr><td>No protection</td><td>None</td><td class="num">0.951</td><td class="no">Declining about 5% a year</td></tr>
    <tr><td>Protect beaches</td><td>Nestling survival raised to 100% (G₁ = 1)</td><td class="num">0.974</td><td class="no">Still declining</td></tr>
    <tr class="hl"><td>Use TEDs</td><td>Large-juvenile mortality cut by 25%</td><td class="num">1.006</td><td class="yes">Growing</td></tr>
  </tbody>
</table></div>
${CBFig.scenarioLines()}
<p class="callout"><strong>Even perfect nestling survival can’t save loggerheads, but a 25% cut in large-juvenile mortality can.</strong> λ depends much more on the survival of large juveniles (and older turtles) than on egg and hatchling survival.</p>
<h4>Elasticity (sensitivity) analysis</h4>
<p>Asks how much the growth rate changes when you change each vital rate. For loggerheads (after Crowder et al. 1994), cutting egg and hatchling mortality, even by 90%, never makes the growth rate positive, while the same cuts in <strong>large-juvenile</strong> mortality give the biggest gain. PVA tells you <strong>where to focus conservation effort</strong>:</p>
<ul>
  <li>Loggerhead turtles: beaches or fishing nets?</li>
  <li>Right whales: fishing gear or container ships?</li>
  <li>Coral reef fish: fishing or coastal land use?</li>
</ul>
<h4>What happened next</h4>
<ul class="timeline">
  <li><b>1987</b><span>TEDs required offshore, May–August</span></li>
  <li><b>1988</b><span>Court challenges and delays</span></li>
  <li><b>1990</b><span>TEDs implemented seasonally</span></li>
  <li><b>1993</b><span>Year-round TEDs offshore</span></li>
  <li><b>1994</b><span>Year-round and inshore TEDs</span></li>
  <li><b>2021</b><span>Rules keep adjusting (new rules, for example)</span></li>
</ul>
<p>Loggerhead nest counts on Florida’s core index beaches (1989–2025) swing widely from year to year. Very mobile species are especially hard to conserve: tracked loggerheads travel across the Gulf of Mexico and the Caribbean.</p>
<p class="callout"><strong>Summary:</strong> models predict future populations and short- to medium-term growth, and let you run simulated experiments to compare management options.</p>`,
        recall: [
          ['What three kinds of prediction make up a PVA?', 'Estimates of population size, predictions about the trend, and predictions about variability over time, used to assess extinction risk.'],
          ['What did the loggerhead model predict for beach protection versus TEDs?', 'Beaches (100% nestling survival): λ = 0.974, still declining. TEDs (25% less large-juvenile mortality): λ = 1.006, growing.'],
          ['What does an elasticity or sensitivity analysis tell managers?', 'Which vital rates change λ the most, so effort goes where it matters most.']
        ]
      },
      {
        id: 'l10-stoch',
        title: 'Deterministic vs. stochastic models',
        html: `
<div class="compare">
  <div class="compare-col"><p class="eyebrow">Deterministic</p><p>Always gives the <strong>same outcome</strong> for a given set of initial conditions: births &gt; deaths and the population rises, births = deaths and it stays flat, births &lt; deaths and it declines.</p></div>
  <div class="compare-col"><p class="eyebrow">Stochastic</p><p>Can give a <strong>range of outcomes</strong> from the same initial conditions, because rates vary randomly from year to year.</p></div>
</div>
${CBFig.detStoch()}
<p>Randomness matters most when <strong>studying small populations</strong> and when making <strong>short- to medium-term predictions</strong>. Most population viability analyses include some form of stochasticity.</p>
<p class="definition"><strong>Environmental stochasticity:</strong> temporal variation in vital rates driven by changes in the biotic or abiotic environment (good years and bad years).</p>
<p>A stochastic PVA draws a random λ each year and multiplies: year 1, 1.1 × 100 = 110; year 2, 0.9 × 110 = 99; year 3, 1.2 × 99 ≈ 119. Repeating this thousands of times (Monte Carlo) gives a distribution of outcomes, like the Dall sheep λ histograms.</p>`,
        recall: [
          ['What is the difference between a deterministic and a stochastic model?', 'Deterministic: the same outcome every time for given starting conditions. Stochastic: a range of outcomes from the same start.'],
          ['When is stochasticity most important?', 'For small populations and for short- to medium-term predictions.'],
          ['Define environmental stochasticity.', 'Temporal variation in vital rates driven by changes in the biotic or abiotic environment.']
        ]
      },
      {
        id: 'l10-geomean',
        title: 'Why variability lowers growth',
        html: `
<p class="scenario">An insect has λ = 1.2 and N₀ = 150. After 10 years: 150 × 1.2<sup>10</sup> ≈ <strong>929</strong>.</p>
<p class="scenario">Now good and bad years alternate: λ<sub>good</sub> = 1.3 and λ<sub>bad</sub> = 1.1, still averaging 1.2. After 10 years: 150 × 1.1 × 1.3 × 1.1 × … ≈ <strong>897</strong>, fewer than 929.</p>
${CBFig.geoMeanChart()}
<p class="callout">The long-run λ is the <strong>geometric mean</strong>, not the arithmetic mean. For two years: √(1.3 × 1.1) = √1.43 ≈ 1.196, a little below 1.2. <strong>Bad years have a large influence</strong> because growth multiplies.</p>
<p class="muted small">Extreme case: alternate λ = 2.0 and λ = 0.5. The arithmetic mean is 1.25, but 2.0 × 0.5 = 1, so the population goes nowhere.</p>
<p>With random years (50% good, 50% bad), outcomes spread out. One run with mostly bad years ends at 543; another with mostly good years ends at 1,253.</p>
<ul class="keylist">
  <li>Models with no stochasticity predict <strong>a population size</strong>.</li>
  <li>Models with stochasticity predict <strong>a distribution of population sizes</strong>.</li>
  <li><strong>More stochasticity means lower predicted populations.</strong></li>
</ul>
<h4>Who is most at risk?</h4>
<p>Environmental stochasticity affects growth rates of populations <strong>of any size</strong>: if the summer has no rain, it has no rain for all the plants, however many there are. But <strong>local and small populations are often most at risk</strong>. A species found across a continent is unlikely to have an unusually dry year everywhere at once.</p>`,
        recall: [
          ['λ = 1.2 every year versus alternating 1.3 and 1.1: which gives more after 10 years?', 'Constant 1.2: about 929 versus 897. Variability lowers growth.'],
          ['Why is the long-run growth rate the geometric mean?', 'Growth multiplies from year to year, so a bad year pulls the product down more than a good year pushes it up.'],
          ['Environmental stochasticity affects populations of any size. Why are small, local populations most at risk?', 'A bad year can hit their whole range at once. A continent-wide species is unlikely to have a bad year everywhere simultaneously.']
        ]
      }
    ],
    exam: [
      { t: 'mc', topic: 'l10-project', q: 'A loggerhead stage vector reads (1,000, 300, 100, 80, 250) for nestlings, small juveniles, large juveniles, subadults and adults. How many subadults are there?', o: ['80 (row 4)', '100', '250', '300'], a: 0, why: 'Each row of the vector is one stage, in the same order as the matrix.' },
      { t: 'mc', topic: 'l10-project', q: 'Using the loggerhead matrix, how many adults would you expect next year if you have 100 subadults now (and nothing else)?', o: ['About 6', 'About 2', 'About 68', 'About 81', 'About 466'], a: 0, fig: 'turtleMatrix', why: '100 × 0.061 = 6.1 (column 4, row 5). 68 is the subadults that stay; 466 is nestlings.' },
      { t: 'mc', topic: 'l10-project', q: 'Same 100 subadults: how many nestlings would you expect next year?', o: ['About 466', 'About 68', 'About 6', 'About 81', 'About 622'], a: 0, fig: 'turtleMatrix', why: '100 × 4.665 (column 4, row 1).' },
      { t: 'mc', topic: 'l10-project', q: 'Why do 100 subadults produce no small or large juveniles next year?', o: ['Column 4 has zeros in rows 2 and 3: subadults can only stay, mature or produce nestlings', 'All the subadults die', 'Juveniles aren’t counted in the model', 'Rows 2 and 3 are fecundity rows'], a: 0, fig: 'turtleMatrix', why: 'Reproduction always lands in row 1 (nestlings), not in the juvenile rows.' },
      { t: 'mc', topic: 'l10-project', q: 'Start with 100 nestlings and nothing else. What is λ for the first year?', o: ['0.675', '1.67', '4.66', '61.90', '66.55'], a: 0, fig: 'turtleMatrix', why: 'Next year there are only 67.5 small juveniles, so λ = 67.5 ÷ 100.' },
      { t: 'mc', topic: 'l10-stable', q: '100 nestlings give a first-year λ of 0.675; 100 subadults give 5.4. What is the turtles’ fate?', o: ['Both reach the stable stage structure and decline about 5% per year (λ ≈ 0.95)', 'The population grows 5.4-fold every year', 'The population shrinks 32% every year forever', 'It depends on the starting vector forever'], a: 0, why: 'One-year λ depends on the stage distribution. Long-run λ doesn’t.' },
      { t: 'mc', topic: 'l10-stable', q: 'What is a stable stage structure?', o: ['A constant proportion of individuals in each stage, with geometric growth or decline at a constant rate', 'The same number of individuals in every stage', 'A population at carrying capacity', 'A population with no juveniles'], a: 0, why: 'The proportions stay fixed while every stage grows or shrinks by λ each year.' },
      { t: 'mc', topic: 'l10-stable', q: 'Over long times a matrix model predicts geometric growth. What limitation comes with that?', o: ['It works best for small populations and worse as population size changes', 'It can’t handle more than two stages', 'It always predicts extinction', 'It requires stochasticity'], a: 0, why: 'There is no density dependence in the matrix.' },
      { t: 'mc', topic: 'l10-pva', q: 'What does a population viability analysis predict?', o: ['Population size, its trend and its variability over time, to assess extinction risk', 'Only species richness', 'Only carrying capacity', 'Detection probability for a survey'], a: 0, why: 'PVA = methods for predicting population trends and risk of extinction.' },
      { t: 'mc', topic: 'l10-pva', q: 'Loggerheads were declining (λ = 0.951). According to the model, which action would let them recover?', o: ['Cutting large-juvenile mortality by 25% (TEDs)', 'Raising nestling survival to 100% (beach protection)', 'Neither action can save them', 'Both give the same result'], a: 0, why: 'Beach protection: λ = 0.974, still declining. TEDs: λ = 1.006, growing.' },
      { t: 'mc', topic: 'l10-pva', q: 'Why doesn’t even 100% nestling survival push loggerhead λ above 1?', o: ['λ is much more sensitive to survival of large juveniles and older stages than to hatchling survival', 'Nestlings aren’t in the matrix', 'Beach protection lowers fecundity', 'Nestling survival is already 100%'], a: 0, why: 'Most extra hatchlings still die as juveniles before breeding. The elasticity analysis shows large-juvenile survival matters most.' },
      { t: 'mc', topic: 'l10-pva', q: 'What does an elasticity (sensitivity) analysis tell you?', o: ['How much λ changes when each vital rate changes, showing where to focus effort', 'How many individuals you failed to detect', 'Whether a population is at carrying capacity', 'The geometric mean of λ'], a: 0, why: 'For loggerheads it pointed at large-juvenile survival, and so at TEDs.' },
      { t: 'mc', topic: 'l10-pva', q: 'What was the policy outcome of the loggerhead PVA?', o: ['TEDs became required, starting offshore in 1987 and expanding to year-round inshore use by 1994', 'Beach lighting was banned nationwide in 1987', 'All shrimp trawling was banned', 'No policy changed'], a: 0, why: 'Court challenges delayed implementation, and the rules are still being adjusted (for example in 2021).' },
      { t: 'mc', topic: 'l10-stoch', q: 'A deterministic model…', o: ['Always gives the same outcome for a given set of initial conditions', 'Gives a range of outcomes from the same starting point', 'Always predicts extinction', 'Includes environmental stochasticity'], a: 0, why: 'Stochastic models produce a distribution of outcomes instead.' },
      { t: 'mc', topic: 'l10-stoch', q: 'Stochasticity is most important when…', o: ['Studying small populations and making short- to medium-term predictions', 'Studying very large populations over millions of years', 'A population is at carrying capacity', 'You have a complete census'], a: 0, why: 'Most PVAs include some form of stochasticity for this reason.' },
      { t: 'mc', topic: 'l10-stoch', q: 'Environmental stochasticity is…', o: ['Temporal variation in vital rates driven by changes in the biotic or abiotic environment', 'Random differences in offspring sex', 'Error from sampling too few quadrats', 'A permanent drop in carrying capacity'], a: 0, why: 'Sampling error (Lecture 7) is about our estimates. Environmental stochasticity is real variation in the population’s own rates.' },
      { t: 'mc', topic: 'l10-geomean', q: 'An insect grows with λ = 1.2 every year, reaching 929 from 150 after 10 years. If good (λ = 1.3) and bad (λ = 1.1) years alternate instead, after 10 years it will have…', o: ['Fewer than 929', 'Exactly 929', 'More than 929'], a: 0, why: 'About 897. The arithmetic mean is still 1.2, but the geometric mean is about 1.196.' },
      { t: 'mc', topic: 'l10-geomean', q: 'With environmental variability, the long-run growth rate equals…', o: ['The geometric mean of the yearly λ values', 'The arithmetic mean of the yearly λ values', 'The largest yearly λ', 'The smallest yearly λ'], a: 0, why: 'Growth multiplies, so bad years have an outsized influence.' },
      { t: 'mc', topic: 'l10-geomean', q: 'Adding more environmental stochasticity to a population model tends to…', o: ['Lower the predicted population size', 'Raise the predicted population size', 'Have no effect on average', 'Make the model deterministic'], a: 0, why: 'More stochasticity means lower predicted populations.' },
      { t: 'mc', topic: 'l10-geomean', q: 'Environmental stochasticity affects populations of any size. Why are small, local populations most at risk?', o: ['A bad year can hit their whole range at once; a continent-wide species is unlikely to have a bad year everywhere', 'Large populations are immune to weather', 'Small populations have higher λ', 'Only small populations experience droughts'], a: 0, why: 'A drought hits every plant in the area regardless of population size, but a widespread species spreads its risk.' },
      { t: 'mc', topic: 'l10-geomean', stretch: true, q: 'A population alternates λ = 2.0 and λ = 0.5. What happens over time?', o: ['It returns to the same size every two years (geometric mean = 1)', 'It grows 25% per year (arithmetic mean = 1.25)', 'It doubles every year', 'It goes extinct within two years'], a: 0, why: '2.0 × 0.5 = 1, so √1 = 1. The arithmetic mean badly overstates growth.' },
      { t: 'num', topic: 'l10-project', q: 'Using the loggerhead matrix, you start with 100 subadults and nothing else. How many adults do you expect next year? (one decimal)', a: 6.1, tol: 0.051, unit: 'adults', fig: 'turtleMatrix', why: 'Column 4 (subadults this year), row 5 (adults next year): 100 × 0.061 = 6.1.' },
      { t: 'num', topic: 'l10-project', q: 'Starting from 100 subadults, the total next year is about 466 + 68 + 6 = 540. What is λ for this first year? (one decimal)', a: 5.4, tol: 0.06, why: 'λ = N<sub>t+1</sub> ÷ N<sub>t</sub> = 540 ÷ 100 = 5.4. That is a one-year value that depends on starting with all subadults.' },
      { t: 'num', topic: 'l10-project', stretch: true, q: 'Textbook Leslie example: the age vector goes from (58, 45, 13, 6) to (72, 41, 18, 3) in one year. What is λ? (three decimals)', a: 1.098, tol: 0.0015, why: 'Totals: 58 + 45 + 13 + 6 = 122 and 72 + 41 + 18 + 3 = 134. λ = 134 ÷ 122 ≈ 1.098.' },
      {
        t: 'num', topic: 'l10-project', gen: function () {
          var cells = [];
          for (var r = 0; r < 5; r++) for (var c = 0; c < 5; c++) if (P[r][c] > 0) cells.push([r, c]);
          var cell = G.pick(cells), r0 = cell[0], c0 = cell[1], n = G.pick([50, 100, 200, 250, 400, 500, 1000]);
          var v = P[r0][c0], a = n * v;
          var kind = r0 === 0 ? 'reproduction (top row)' : r0 === c0 ? 'surviving and staying (diagonal)' : 'surviving and growing (below the diagonal)';
          return {
            q: 'Using the loggerhead matrix, you have ' + n + ' ' + PN[c0] + ' now and nothing else. How many ' + PN[r0] + ' do you expect next year? (one decimal)',
            a: a, tol: Math.max(0.051, a * 0.001), figHtml: CBFig.matrix({ kind: 'turtle' }),
            why: 'Column ' + (c0 + 1) + ' (' + PN[c0] + ' this year), row ' + (r0 + 1) + ' (' + PN[r0] + ' next year): ' + n + ' × ' + v + ' = ' + G.fmt(a) + '. This entry is ' + kind + '.'
          };
        }
      },
      {
        t: 'num', topic: 'l10-stable', gen: function () {
          var c0 = G.pick([0, 1, 2, 3]), n = G.pick([50, 100, 200]);
          var parts = [], tot = 0;
          for (var r = 0; r < 4; r++) if (D[r][c0] > 0) { var x = n * D[r][c0]; tot += x; parts.push(G.fmt(x) + ' ' + DN[r] + ' (× ' + D[r][c0] + ')'); }
          var a = tot / n;
          return {
            q: 'Using the Dall sheep matrix, start with ' + n + ' ' + DN[c0] + ' and nothing else. What is λ for the first year? (two decimals)',
            a: a, tol: 0.0051, figHtml: CBFig.matrix({ kind: 'sheep' }),
            why: 'Multiply down column ' + (c0 + 1) + ': ' + parts.join(' + ') + ' = ' + G.fmt(tot) + '. λ = ' + G.fmt(tot) + ' ÷ ' + n + ' = ' + G.fmt(a) + '. This one-year λ depends on the starting stage; once the stage structure stabilizes, this matrix grows at about λ = 1.01.'
          };
        }
      },
      {
        t: 'num', topic: 'l10-geomean', gen: function () {
          var N = G.pick([100, 150, 200, 500]), good = G.pick([1.2, 1.3, 1.4, 1.5]), bad = G.pick([0.7, 0.8, 0.9, 1.1]);
          var len = G.pick([3, 4]), seq = [], prod = 1;
          for (var i = 0; i < len; i++) { var gd = Math.random() < 0.5; seq.push(gd ? 'good' : 'bad'); prod *= gd ? good : bad; }
          var a = N * prod;
          return {
            q: 'N₀ = ' + N + '. λ is ' + good + ' in good years and ' + bad + ' in bad years. The next ' + len + ' years are: ' + seq.join(', ') + '. What is N after ' + len + ' years? (one decimal)',
            a: a, tol: Math.max(0.051, a * 0.001), unit: 'individuals',
            why: 'Multiply year by year: ' + N + ' × ' + seq.map(function (s) { return s === 'good' ? good : bad; }).join(' × ') + ' = ' + G.fmt(a, 2) + '. Only the number of good and bad years matters, not their order.'
          };
        }
      },
      { t: 'recall', topic: 'l10-stable', q: 'Explain why the first-year λ of a matrix model can mislead you, and what a stable stage structure is. Use the loggerhead numbers.', model: 'One-year λ depends on the stage distribution vector. Starting with 100 loggerhead subadults gives about 466 nestlings, 68 subadults and 6 adults, so λ ≈ 5.4; starting with 100 nestlings gives only 67.5 small juveniles, so λ = 0.675. Over longer times the model reaches a stable stage structure, with the same proportion in each stage every year (about 24% nestlings, 65% small juveniles, 10% large juveniles, under 1% subadults and adults), and the population then changes geometrically at a constant rate: λ ≈ 0.95, a 5% annual decline, from either start. Like the geometric model, it works best for small populations because it has no density dependence.', points: ['One-year λ depends on the starting stage vector (5.4 vs 0.675)', 'Stable stage structure = constant proportions in each stage', 'Then geometric change at a constant λ (≈ 0.95 for loggerheads)', 'Same limitation as geometric: no density dependence'] },
      { t: 'recall', topic: 'l10-pva', q: 'Describe the loggerhead PVA: the two management options, what the model predicted for each, why, and what happened.', model: 'Loggerheads were declining (λ = 0.951) with mortality on beaches (nestlings) and in the ocean (juveniles and adults drowning in nets). Both fixes are costly. In the model, raising nestling survival to 100% (beach protection) gave λ = 0.974, still declining; cutting large-juvenile mortality by 25% (TEDs) gave λ = 1.006, growing. λ is far more sensitive to the survival of large juveniles and older stages than to hatchlings, as the elasticity analysis shows. TEDs were required offshore from 1987, delayed by court challenges, then made seasonal (1990), year-round offshore (1993) and year-round inshore (1994), with rules still being adjusted.', points: ['Beach vs ocean (TED) options; baseline λ = 0.951', 'Beach protection λ = 0.974, still declining', 'TEDs λ = 1.006, growing', 'Why: large-juvenile survival matters most (elasticity); TEDs adopted from 1987'] },
      { t: 'recall', topic: 'l10-geomean', q: 'What is environmental stochasticity, and why does it lower the expected size of a population? Use the insect example.', model: 'Environmental stochasticity is temporal variation in vital rates driven by changes in the biotic or abiotic environment. With λ = 1.2 every year, 150 insects become about 929 in 10 years. If good (1.3) and bad (1.1) years alternate, the arithmetic mean is still 1.2, but the result is only about 897, because growth multiplies and the long-run rate is the geometric mean (√1.43 ≈ 1.196). Bad years have a large influence. So stochastic models predict a distribution of outcomes, and more stochasticity means lower predicted populations. It affects populations of any size, but small, local populations are most at risk.', points: ['Definition: variation in vital rates over time from the environment', 'Constant 1.2 → 929 vs alternating 1.3/1.1 → 897', 'Long-run λ = geometric mean, so bad years weigh heavily', 'More stochasticity → lower predictions; small/local populations most at risk'] }
    ]
  });
})();
