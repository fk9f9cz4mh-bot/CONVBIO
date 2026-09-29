(function () {
  var G = window.CBGen;

  window.CB_DATA.lectures.push({
    id: 'l8',
    num: 8,
    title: 'Population dynamics in conservation',
    short: 'Growth models',
    nav: 'Growth',
    reading: 'Textbook Ch. 13, pp. 426–433',
    blurb: 'Predicting what happens next: the BIDE equation, geometric growth and λ, estimating λ from counts, logistic growth and carrying capacity, and why age and stage matter.',
    flags: [
      { kind: 'know', text: 'The range of λ and R, and roughly what a big or small value is: λ &gt; 1 (R &gt; 0) growth, λ = 1 (R = 0) stable, λ &lt; 1 (R &lt; 0) decline.' },
      { kind: 'know', text: 'N<sub>t+1</sub> = λN<sub>t</sub> and λ = N<sub>t+1</sub> ÷ N<sub>t</sub>. Don’t round during a multi-step calculation; round only at the end if asked.' },
      { kind: 'skip', text: 'Continuous-time versions (dN/dt with lowercase r): “I will not test you on the continuous time versions.”' },
      { kind: 'skip', text: 'λ = (N<sub>t</sub> ÷ N<sub>0</sub>)<sup>1/t</sup> isn’t needed for the exam, but you use it in the exercises. N<sub>t</sub> = λ<sup>t</sup>N<sub>0</sub>: “should understand but will not use on exam.”' },
      { kind: 'note', text: 'Midterm calculations are meant to be easy. You shouldn’t need a calculator, and only a simple four-function calculator is allowed.' }
    ],
    sections: [
      {
        id: 'l8-models',
        title: 'From counting to predicting',
        html: `
<p>With about 384 right whales left, the next questions are <strong>what will happen</strong> and <strong>how best to improve the outcome</strong>. Should managers focus on entanglement in fishing gear, or on ship strikes?</p>
<div class="compare">
  <div class="compare-col"><p class="eyebrow">Route 1 · Experiment</p><p>Try different approaches, collect data, and see which works best.</p><p><strong>The catch:</strong> it may be unethical or infeasible, and by the time you know whether it worked, it might be too late.</p></div>
  <div class="compare-col"><p class="eyebrow">Route 2 · Model</p><p>Use math to predict what will happen under each option. Lectures 8–10 build this route.</p></div>
</div>`,
        recall: [
          ['Why use a model rather than an experiment to choose how to help right whales?', 'An experiment may be unethical or infeasible with so few whales, and the answer could come too late. A model predicts the outcome of each option now.']
        ]
      },
      {
        id: 'l8-bide',
        title: 'BIDE: the four ways a population changes',
        html: `
<p>Populations change through <strong>B</strong>irths, <strong>I</strong>mmigration, <strong>D</strong>eaths and <strong>E</strong>migration (the book’s BIDE parameters).</p>
<p class="formula">N<sub>t+1</sub> = N<sub>t</sub> + B − D + I − E</p>
<p>These can be measured as <strong>per-capita rates</strong>. If 1/5 of females have a female calf each year, the number of female births is 0.2 × N<sub>t</sub>. If 1/5 of females die each year, deaths are 0.2 × N<sub>t</sub>.</p>
<p>For an endangered species we often set <strong>I = 0 and E = 0</strong>: movement may be negligible, or this may be the only population left. Then:</p>
<p class="formula">N<sub>t+1</sub> = N<sub>t</sub> + (B − D) = N<sub>t</sub> + R·N<sub>t</sub> = (1 + R)·N<sub>t</sub></p>
<p><strong>R</strong> is the birth rate per female minus the death rate per female (models often track females only). Write <strong>λ = 1 + R</strong> and you have the geometric growth equation. If λ = 1.1, then R = 0.1; from N<sub>t</sub> = 100, both 100 × 1.1 and 100 + 0.1 × 100 give 110.</p>`,
        recall: [
          ['Write the BIDE equation.', 'N<sub>t+1</sub> = N<sub>t</sub> + B − D + I − E.'],
          ['Why are I and E often set to zero for endangered species?', 'Movement may be negligible, or it may be the only remaining population.'],
          ['How are R and λ related?', 'λ = 1 + R, where R is the per-capita birth rate minus the per-capita death rate.']
        ]
      },
      {
        id: 'l8-geometric',
        title: 'Geometric growth and λ',
        html: `
<p class="formula">N<sub>t+1</sub> = λN<sub>t</sub></p>
<p>λ (lambda) is the <strong>finite rate of increase</strong>: the factor the population is multiplied by each time step. Geometric growth happens when a population reproduces in synchrony at regular intervals (discrete time) and the growth rate stays the same.</p>
${CBFig.lambdaPanels()}
<div class="table-wrap"><table class="num">
  <thead><tr><th>λ</th><th>R = λ − 1</th><th>Meaning</th></tr></thead>
  <tbody>
    <tr><td>0.90</td><td>−0.10</td><td>Losing 10% per year</td></tr>
    <tr><td>0.95</td><td>−0.05</td><td>Losing 5% per year (loggerheads, Lecture 10)</td></tr>
    <tr><td>1.00</td><td>0</td><td>Stable</td></tr>
    <tr><td>1.071</td><td>0.071</td><td>Growing about 7% per year (bald eagles, 1988–89)</td></tr>
    <tr><td>1.10</td><td>0.10</td><td>Growing 10% per year</td></tr>
  </tbody>
</table></div>
<h4>Projecting forward</h4>
<p>100 whales with λ = 1.1 per year: next year 100 × 1.1 = <strong>110</strong>.</p>
<p>100 individuals with λ = 0.9: year 1 = 90, year 2 = 81, year 3 = 72.9 (losing 10% each year). Each step multiplies by λ again, so N<sub>t+2</sub> = λ·λ·N<sub>t</sub> and in general</p>
<p class="formula">N<sub>t</sub> = λ<sup>t</sup>N<sub>0</sub></p>
<p>Year 10: 0.9<sup>10</sup> × 100 ≈ 34.87 (report 34 or 35). <span class="muted">Understand this form; you won’t have to use it on the exam.</span></p>
<h4>Don’t round along the way</h4>
<p>Rates are essentially probabilities. Ten female turtles each have a 10% chance of breeding and a 6% chance of dying per year: N<sub>t+1</sub> = N<sub>t</sub> + 0.1N<sub>t</sub> − 0.06N<sub>t</sub> = 1.04N<sub>t</sub>. So 10 → 10.4 → 10.8 → 11.2 → 11.7. Fractional turtles are fine mid-calculation; round at the end if asked.</p>
<p><strong>Where λ comes from:</strong> build it up from demographic rates (births and deaths), or estimate it from past population change.</p>`,
        recall: [
          ['What do λ &lt; 1, λ = 1 and λ &gt; 1 mean, and what are the matching values of R?', 'Decline (R &lt; 0), stable (R = 0), growth (R &gt; 0).'],
          ['λ = 0.9 and N₀ = 100. What is N₂?', '100 × 0.9 × 0.9 = 81.'],
          ['Why shouldn’t you round in the middle of a calculation?', 'The rates are probabilities, so fractional individuals are fine; rounding each step compounds the error. Round at the end.']
        ]
      },
      {
        id: 'l8-lambda',
        title: 'Estimating λ from counts',
        html: `
<p class="formula">λ = N<sub>t+1</sub> ÷ N<sub>t</sub></p>
<p>If N<sub>t</sub> = 10 and N<sub>t+1</sub> = 11, λ = 1.1. If 1,000 individuals become 950, λ = <strong>0.95</strong>. (−0.05 is R, not λ.)</p>
<h4>Bald eagle: when will it reach 10,000 pairs?</h4>
<p class="scenario">It is 1990. Bald eagles can come off the endangered species list once they exceed 10,000 breeding pairs. You think there were 2,100 pairs in 1988 and 2,250 in 1989.</p>
<ul class="keylist">
  <li>λ = 2,250 ÷ 2,100 ≈ <strong>1.071</strong>. Projecting 18 years: N<sub>2007</sub> = 2,250 × 1.071<sup>18</sup> ≈ <strong>7,733</strong>, short of the target.</li>
  <li>Using 1975 (700 pairs) to 1989 instead: λ = (2,250 ÷ 700)<sup>1/14</sup> ≈ <strong>1.09</strong>, so N<sub>2007</sub> ≈ 2,250 × 1.09<sup>18</sup> ≈ <strong>10,613</strong>, above it.</li>
</ul>
${CBFig.eagleProjection()}
<p class="callout">A small difference in λ compounds into a large difference over 18 years, so the years you estimate λ from matter.</p>
<h4>What the geometric model leaves out</h4>
<p>N<sub>t+1</sub> = λN<sub>t</sub> has <strong>no density dependence</strong>: λ never changes, so a growing population grows forever.</p>`,
        recall: [
          ['1,000 individuals become 950 a year later. What is λ, and what is R?', 'λ = 0.95. R = −0.05.'],
          ['Bald eagles: 2,100 pairs in 1988 and 2,250 in 1989. What is λ?', '2,250 ÷ 2,100 ≈ 1.071.'],
          ['What is missing from the geometric growth model?', 'Density dependence. λ never changes.']
        ]
      },
      {
        id: 'l8-logistic',
        title: 'Logistic growth and carrying capacity',
        html: `
<p class="definition"><strong>Core principle of population regulation:</strong> no closed population stops increasing unless its birth rate or death rate changes with density. It stops increasing when <strong>birth rate = death rate</strong>.</p>
<p class="formula">N<sub>t+1</sub> = N<sub>t</sub> + R·N<sub>t</sub>(1 − N<sub>t</sub>/K)</p>
<p>Equivalently, N<sub>t+1</sub> = N<sub>t</sub> + R·N<sub>t</sub>(K − N<sub>t</sub>)/K. <strong>K</strong> is the <strong>carrying capacity</strong>, the maximum population size the environment can support indefinitely. R is the per-capita growth rate (λ − 1).</p>
${CBFig.logisticCurve()}
<ul class="keylist">
  <li>At first resources are abundant and births exceed deaths, so the population increases rapidly.</li>
  <li>Growth is fastest in the middle; then resources become limiting.</li>
  <li><strong>Birth rates fall and/or death rates rise until births = deaths</strong>, and the population stabilizes at K.</li>
</ul>
<p><strong>Real example:</strong> harbor seals in Washington state grew after the Marine Mammal Protection Act of 1972, then leveled off. The early years alone look exponential.</p>
<p><strong>Worked example:</strong> R = 0.1, K = 1,000, N<sub>0</sub> = 100. Year 1: 100 + 0.1 × 100 × (1 − 100/1,000) = <strong>109</strong>. Year 2: 109 + 0.1 × 109 × (1 − 109/1,000) ≈ <strong>118.7</strong>.</p>
<h4>Which model when?</h4>
<p>In a very small population, N<sub>t</sub>/K is near 0, so (1 − N<sub>t</sub>/K) ≈ 1 and the logistic equation becomes N<sub>t+1</sub> = (1 + R)N<sub>t</sub> = λN<sub>t</sub>. <strong>In a small population, the logistic and exponential models give the same predictions.</strong> That is why conservation biology often uses the simpler geometric model even though logistic growth is more realistic.</p>
<div class="compare">
  <div class="compare-col"><p class="eyebrow">Geometric (exponential)</p><ul><li>Appropriate for <strong>small populations</strong></li><li>Good for <strong>short-term</strong> prediction</li><li><strong>Easier to parameterize</strong>: needs only today’s births and deaths. Logistic also needs to know how those will change in the future.</li></ul></div>
  <div class="compare-col"><p class="eyebrow">Logistic</p><ul><li>Necessary for <strong>moderate to large populations</strong></li><li>Necessary for <strong>longer-term</strong> predictions</li><li>Still relatively easy to parameterize and use</li><li>Used for <strong>harvested populations</strong> (subtract the harvest: N<sub>t+1</sub> = N<sub>t</sub> + rN<sub>t</sub>(1 − N<sub>t</sub>/K) − H) and <strong>competitors of a threatened species</strong>, such as elephants and other savanna herbivores</li></ul></div>
</div>
<p class="muted small">Exercise 1 applies both models to conservation and management problems.</p>`,
        recall: [
          ['State the core principle of population regulation.', 'No closed population stops increasing unless its birth or death rate changes with density. It stops when births = deaths.'],
          ['What happens to the logistic equation when N is tiny compared with K?', '(1 − N/K) ≈ 1, so it becomes N<sub>t+1</sub> = (1 + R)N<sub>t</sub> = λN<sub>t</sub>: the same prediction as geometric growth.'],
          ['Give two advantages of each model for conservation.', 'Geometric: suits small populations and short-term predictions, and is easier to parameterize. Logistic: needed for moderate to large populations and long-term predictions; used for harvests and competitors.']
        ]
      },
      {
        id: 'l8-structure',
        title: 'Why age and stage matter',
        html: `
<p class="scenario">16 female right whales each calve every 2 years, and deaths are rare. Next year: 16 survivors plus 8 calves (16 × 0.5), half of them female, so 4 new females. That makes 20 females. Do we now have 20 potential mothers?</p>
<p><strong>No. The baby females aren’t ready to breed.</strong> Count-based models (geometric and logistic) assume all individuals are the same and ignore age and size.</p>
<p class="definition"><strong>Vital rates:</strong> the processes that change population size, including rates of birth, death, growth and fecundity. They often depend on age or size.</p>
<p><strong>Age-, stage- or size-structured models</strong> allow different vital rates for different classes of individuals.</p>
<dl class="terms">
  <dt>Age-specific survival</dt><dd>The chance that an individual of age x survives to age x + 1.</dd>
  <dt>Age-specific fecundity</dt><dd>The average number of offspring produced by a female while she is age x.</dd>
</dl>
<h4>Survivorship curves</h4>
${CBFig.survivorship()}
<ul class="keylist">
  <li><strong>Type I (humans):</strong> high survival until old age, then a steep drop.</li>
  <li><strong>Type II (birds):</strong> constant mortality at every age. Marmots have about a 45% chance of dying every year regardless of age, which gives exponential decline: a curve on a normal axis, a <strong>straight line on a log axis</strong>.</li>
  <li><strong>Type III (trees):</strong> very high death rates when small, much better survival once they get big.</li>
</ul>
<h4>Fecundity changes with age too</h4>
<p>Dusky smoothhound sharks have more pups per litter as they get older. In human hunter-gatherers and chimpanzees, births per female per year rise, peak in early adulthood and then decline.</p>
<p class="callout"><strong>Why it matters:</strong> any factor that changes survival or fecundity can change the population growth rate. Managers look for the age-specific birth and death rates that most strongly influence growth, then target them to shrink a pest population or grow an endangered one.</p>`,
        recall: [
          ['Why aren’t 20 female right whales necessarily 20 potential mothers?', 'Four of them are new calves that can’t breed yet. Count-based models treat every individual as the same.'],
          ['Define age-specific survival and age-specific fecundity.', 'Survival: the chance an individual of age x survives to age x + 1. Fecundity: the average number of offspring a female produces while she is age x.'],
          ['Match survivorship Types I, II and III to their examples.', 'Type I humans (die old); Type II birds and marmots (constant mortality, straight on a log axis); Type III trees (very high early mortality).']
        ]
      }
    ],
    exam: [
      { t: 'mc', topic: 'l8-models', q: 'Why build a model rather than run an experiment to choose right whale management?', o: ['An experiment may be unethical or infeasible, and the answer could come too late', 'Models are always more accurate than field data', 'Experiments can’t measure births and deaths', 'Models don’t need any data'], a: 0, why: 'Models still need data such as birth and death rates to parameterize them.' },
      { t: 'mc', topic: 'l8-bide', q: 'In N<sub>t+1</sub> = N<sub>t</sub> + B − D + I − E, why are I and E often set to 0 for endangered species?', o: ['Movement may be negligible, or it may be the only population', 'Immigration always equals emigration', 'Births and deaths are too hard to measure', 'Endangered species never disperse'], a: 0, why: 'With I = E = 0, the equation becomes N<sub>t+1</sub> = N<sub>t</sub> + (B − D).' },
      { t: 'mc', topic: 'l8-geometric', q: 'A population has λ = 0.95. What does this mean?', o: ['It is declining by 5% per year', 'It is growing by 95% per year', 'It is declining by 95% per year', 'It is stable'], a: 0, why: 'R = λ − 1 = −0.05, a 5% loss each year.' },
      { t: 'mc', topic: 'l8-geometric', q: 'Which pair of values is consistent?', o: ['λ = 1.1 and R = 0.1', 'λ = 1.1 and R = 1.1', 'λ = 0.9 and R = 0.1', 'λ = 1 and R = 1'], a: 0, why: 'λ = 1 + R. A stable population has λ = 1 and R = 0.' },
      { t: 'mc', topic: 'l8-lambda', q: 'You count 1,000 individuals, and 950 one year later. What is λ?', o: ['0.95', '−0.05', '0.05', '−50', '50'], a: 0, why: 'λ = N<sub>t+1</sub> ÷ N<sub>t</sub> = 950 ÷ 1,000. The value −0.05 is R.' },
      { t: 'mc', topic: 'l8-lambda', q: 'What is missing from the geometric model N<sub>t+1</sub> = λN<sub>t</sub>?', o: ['Density dependence: λ never changes', 'Births', 'Deaths', 'A starting population size'], a: 0, why: 'Births and deaths are folded into λ. What’s missing is any change in λ as the population grows.' },
      { t: 'mc', topic: 'l8-lambda', q: 'Projected to 2007, bald eagles reach about 7,733 pairs using 1988–89 counts but about 10,613 using 1975–89 counts. What’s the lesson?', o: ['Small differences in λ compound into large differences over many years', 'Eagles must be modeled with logistic growth', 'Eagles were actually declining', 'λ can’t be estimated from counts'], a: 0, why: 'λ = 1.071 versus 1.09, compounded over 18 years, decides whether the 10,000-pair target is met.' },
      { t: 'mc', topic: 'l8-logistic', q: 'According to the core principle of population regulation, a closed population stops increasing only when…', o: ['Its birth or death rate changes with density, until births = deaths', 'It reaches 10,000 individuals', 'Immigration stops', 'λ becomes negative'], a: 0, why: 'λ can’t be negative. Growth stops when density pushes births down or deaths up until they match.' },
      { t: 'mc', topic: 'l8-logistic', q: 'In the logistic model, what is K?', o: ['Carrying capacity: the maximum population the environment can support indefinitely', 'The per-capita growth rate', 'The number harvested each year', 'The starting population size'], a: 0, why: 'At K, births = deaths and the population stops growing.' },
      { t: 'mc', topic: 'l8-logistic', q: 'Why do the logistic and geometric models give the same predictions for a very small population?', o: ['N/K is near 0, so (1 − N/K) ≈ 1 and the logistic equation reduces to λN<sub>t</sub>', 'Because K equals N in small populations', 'Because R is zero in small populations', 'They never give the same predictions'], a: 0, why: 'That is one reason conservation biology often uses the simpler geometric model.' },
      { t: 'mc', topic: 'l8-logistic', q: 'Which is an advantage of the geometric model in conservation biology?', o: ['It can be parameterized from today’s births and deaths', 'It is necessary for large populations', 'It is best for long-term predictions', 'It includes carrying capacity'], a: 0, why: 'The logistic model also needs to know how birth and death rates will change as the population grows.' },
      { t: 'mc', topic: 'l8-logistic', q: 'For which problem is the logistic model necessary?', o: ['Setting a sustainable harvest for a large fish stock', 'Projecting next year’s count for 30 remaining condors', 'Converting frog calls into relative abundance', 'Estimating λ from two years of counts'], a: 0, why: 'Harvested and moderate to large populations need density dependence. Competitors of threatened species, like elephants, are another use.' },
      { t: 'mc', topic: 'l8-structure', q: 'Count-based models such as geometric and logistic growth assume that…', o: ['All individuals are the same, ignoring age and size', 'Each age class has its own survival rate', 'The population is open to immigration', 'Fecundity peaks in middle age'], a: 0, why: 'Structured models relax this by giving each class its own vital rates.' },
      { t: 'mc', topic: 'l8-structure', q: '16 female right whales each calve every 2 years; half the calves are female; deaths are rare. Next year there are 20 females. Why aren’t there 20 potential mothers?', o: ['The 4 new females are calves that can’t breed yet', 'Half of the 20 are males', 'Right whales breed only every 4 years', 'Deaths cancel out the births'], a: 0, why: 'This is the motivation for age- and stage-structured models.' },
      { t: 'mc', topic: 'l8-structure', q: 'Marmots have about a 45% chance of dying every year regardless of age. Which survivorship curve is this?', o: ['Type II: constant mortality, a straight line on a log axis', 'Type I: most die in old age', 'Type III: most die very young', 'None: survivorship curves are only for plants'], a: 0, why: 'Constant mortality produces exponential decline, which plots as a straight line on a log scale.' },
      { t: 'mc', topic: 'l8-structure', q: 'Why do managers study how vital rates change with age?', o: ['To find the age-specific rates that most influence growth, and target them', 'Because age doesn’t affect population growth', 'To calculate carrying capacity', 'To estimate detection probability'], a: 0, why: 'The same logic drives the loggerhead turtle analysis in Lecture 10.' },
      { t: 'num', topic: 'l8-geometric', q: 'λ = 0.9 and you start in year 0 with 100 individuals. How many are there in year 3? (Don’t round until the end.)', a: 72.9, tol: 0.05, unit: 'individuals', why: '100 × 0.9 = 90; 90 × 0.9 = 81; 81 × 0.9 = 72.9. Or 100 × 0.9³.' },
      { t: 'num', topic: 'l8-bide', q: 'Each female turtle has a 10% chance of breeding (producing one female) and a 6% chance of dying per year. Ignoring immigration and emigration, what is λ?', a: 1.04, tol: 0.001, why: 'N<sub>t+1</sub> = N<sub>t</sub> + 0.1N<sub>t</sub> − 0.06N<sub>t</sub> = 1.04N<sub>t</sub>. R = 0.04, λ = 1 + R.' },
      { t: 'num', topic: 'l8-lambda', q: 'There were 2,100 bald eagle breeding pairs in 1988 and 2,250 in 1989. What is λ? (three decimals)', a: 1.0714, tol: 0.0015, why: 'λ = 2,250 ÷ 2,100 ≈ 1.071.' },
      { t: 'num', topic: 'l8-logistic', q: 'Logistic growth with R = 0.1 and K = 1,000. Starting from 100 individuals in year 0, how many are there in year 1?', a: 109, tol: 0.05, unit: 'individuals', why: '100 + 0.1 × 100 × (1 − 100/1,000) = 100 + 10 × 0.9 = 109.' },
      { t: 'num', topic: 'l8-logistic', stretch: true, q: 'Continue the last one: R = 0.1, K = 1,000, and N<sub>1</sub> = 109. What is N<sub>2</sub>? (one decimal)', a: 118.71, tol: 0.06, unit: 'individuals', why: '109 + 0.1 × 109 × (1 − 109/1,000) = 109 + 10.9 × 0.891 ≈ 118.7.' },
      {
        t: 'num', topic: 'l8-geometric', gen: function () {
          var lam = G.pick([0.8, 0.85, 0.9, 0.95, 1.05, 1.1, 1.2, 1.25]);
          var N = G.pick([40, 50, 80, 100, 120, 200, 250, 400, 500, 1000]);
          var steps = G.pick([1, 1, 2]), a = N * Math.pow(lam, steps);
          return {
            q: 'A population of ' + G.fmt(N) + ' has λ = ' + lam + ' per year (geometric growth). How many individuals will there be in ' + (steps === 1 ? '1 year' : '2 years') + '? (one decimal if needed)',
            a: a, tol: Math.max(0.051, a * 0.001), unit: 'individuals',
            why: 'N = ' + G.fmt(N) + ' × ' + lam + (steps === 2 ? ' × ' + lam : '') + ' = ' + G.fmt(a) + '. ' + (lam < 1 ? 'λ &lt; 1, so the population loses ' + Math.round((1 - lam) * 100) + '% per year.' : 'λ &gt; 1, so it grows ' + Math.round((lam - 1) * 100) + '% per year.')
          };
        }
      },
      {
        t: 'num', topic: 'l8-lambda', gen: function () {
          var Nt = G.pick([200, 400, 500, 800, 1000, 1250, 2000, 2500]);
          var lam = G.pick([0.8, 0.85, 0.9, 0.92, 0.95, 0.96, 1.04, 1.05, 1.08, 1.1, 1.2]);
          var N1 = Math.round(Nt * lam), a = N1 / Nt, R = a - 1;
          return {
            q: 'A population had ' + G.fmt(Nt) + ' individuals last year and has ' + G.fmt(N1) + ' this year. What is λ? (two decimals)',
            a: a, tol: 0.0051,
            why: 'λ = N<sub>t+1</sub> ÷ N<sub>t</sub> = ' + G.fmt(N1) + ' ÷ ' + G.fmt(Nt) + ' = ' + G.fmt(a) + '. R = λ − 1 = ' + G.fmt(R) + (R < 0 ? ', a ' + Math.round(-R * 100) + '% decline.' : ', ' + Math.round(R * 100) + '% growth.')
          };
        }
      },
      {
        t: 'num', topic: 'l8-bide', gen: function () {
          if (Math.random() < 0.5) {
            var N = G.rint(60, 400), B = G.rint(5, Math.round(N * 0.3)), D = G.rint(5, Math.round(N * 0.3)), I = G.rint(0, 20), E = G.rint(0, 20);
            var a = N + B - D + I - E;
            return {
              q: 'A population has ' + N + ' individuals. Over the year there are ' + B + ' births, ' + D + ' deaths, ' + I + ' immigrants and ' + E + ' emigrants. What is N<sub>t+1</sub>?',
              a: a, tol: 0.51, unit: 'individuals',
              why: 'N<sub>t+1</sub> = N<sub>t</sub> + B − D + I − E = ' + N + ' + ' + B + ' − ' + D + ' + ' + I + ' − ' + E + ' = ' + a + '.'
            };
          }
          var n = G.pick([20, 40, 50, 80, 100, 200]), b = G.pick([0.1, 0.2, 0.25, 0.3]), d = G.pick([0.05, 0.1, 0.15, 0.2]);
          var ans = n + b * n - d * n;
          return {
            q: 'There are ' + n + ' females. Each year a fraction ' + b + ' of them produce a female offspring and a fraction ' + d + ' die. With no immigration or emigration, how many females are there next year?',
            a: ans, tol: Math.max(0.051, ans * 0.001), unit: 'females',
            why: 'N<sub>t+1</sub> = N<sub>t</sub> + bN<sub>t</sub> − dN<sub>t</sub> = ' + n + ' + ' + G.fmt(b * n) + ' − ' + G.fmt(d * n) + ' = ' + G.fmt(ans) + '. Here λ = 1 + ' + b + ' − ' + d + ' = ' + G.fmt(1 + b - d) + '.'
          };
        }
      },
      {
        t: 'num', topic: 'l8-logistic', gen: function () {
          var K = G.pick([500, 1000, 2000, 5000]), frac = G.pick([0.1, 0.2, 0.25, 0.5, 0.75, 0.8, 0.9]), N = K * frac, R = G.pick([0.1, 0.2, 0.3, 0.5]);
          var add = R * N * (1 - frac), a = N + add;
          return {
            q: 'Logistic growth with R = ' + R + ' and K = ' + G.fmt(K) + '. This year N = ' + G.fmt(N) + '. What is N next year? (one decimal if needed)',
            a: a, tol: Math.max(0.051, a * 0.0005), unit: 'individuals',
            why: 'N<sub>t+1</sub> = N + R·N(1 − N/K) = ' + G.fmt(N) + ' + ' + R + ' × ' + G.fmt(N) + ' × (1 − ' + frac + ') = ' + G.fmt(N) + ' + ' + G.fmt(add) + ' = ' + G.fmt(a) + '. Geometric growth would give ' + G.fmt(N * (1 + R)) + '; the (1 − N/K) term slows growth as N approaches K.'
          };
        }
      },
      { t: 'recall', topic: 'l8-geometric', q: 'Explain λ and R: how they are related, what values mean growth, stability and decline, and how you calculate λ from two counts.', model: 'The geometric model is N<sub>t+1</sub> = λN<sub>t</sub>, where λ is the finite rate of increase. R is the per-capita birth rate minus death rate, and λ = 1 + R. λ &gt; 1 (R &gt; 0) means growth, λ = 1 (R = 0) stable, λ &lt; 1 (R &lt; 0) decline; λ = 0.95 is a 5% annual decline and λ = 1.1 is 10% growth. From two counts, λ = N<sub>t+1</sub> ÷ N<sub>t</sub> (1,000 → 950 gives 0.95).', points: ['N<sub>t+1</sub> = λN<sub>t</sub>', 'λ = 1 + R, with R = births − deaths per capita', 'Correct ranges for growth, stable and decline', 'λ = N<sub>t+1</sub> ÷ N<sub>t</sub>, with an example'] },
      { t: 'recall', topic: 'l8-logistic', q: 'Compare geometric and logistic growth: the logistic equation, what K is, when the two agree, and when each is the better tool in conservation.', model: 'Logistic: N<sub>t+1</sub> = N<sub>t</sub> + R·N<sub>t</sub>(1 − N<sub>t</sub>/K). K is the carrying capacity; as N approaches it, birth rates fall and/or death rates rise until births = deaths. In a small population N/K ≈ 0, so the logistic equation reduces to λN<sub>t</sub> and both give the same predictions. Geometric: suits small populations and short-term predictions and is easier to parameterize (today’s births and deaths). Logistic: needed for moderate to large populations and long-term predictions, e.g. harvested populations or competitors of a threatened species.', points: ['Logistic equation with (1 − N/K)', 'K = carrying capacity, where births = deaths', 'Same predictions when the population is small', 'Geometric for small/short-term/easy; logistic for large/long-term/harvest'] },
      { t: 'recall', topic: 'l8-structure', q: 'Why do we need age- or stage-structured models? Use the right whale example and survivorship curves in your answer.', model: 'Count-based models assume every individual is the same. But 16 female right whales that produce 4 female calves give 20 females, not 20 potential mothers, because calves can’t breed. Vital rates (birth, death, growth, fecundity) depend on age or size: age-specific survival is the chance of surviving from age x to x + 1, and age-specific fecundity is offspring per female at age x. Survivorship curves show this: Type I (humans) die mostly old; Type II (birds, marmots) have constant mortality; Type III (trees) die mostly young. Managers look for the age-specific rates that most affect growth and target them.', points: ['Count-based models treat all individuals as identical', 'Right whale calves can’t breed yet', 'Age-specific survival and fecundity defined', 'Survivorship Types I–III with examples, or targeting influential rates'] }
    ]
  });
})();
