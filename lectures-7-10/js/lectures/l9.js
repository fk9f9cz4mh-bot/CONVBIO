(function () {
  var G = window.CBGen;

  window.CB_DATA.lectures.push({
    id: 'l9',
    num: 9,
    title: 'Evaluating population interventions',
    short: 'Stage-structured models',
    nav: 'Matrices',
    reading: 'Prugh & Arthur 2015 (focus on the introduction and methods)',
    blurb: 'Splitting a population into ages or stages: life-cycle diagrams for loggerhead turtles and salmon, turning mark–recapture data into transition rates, reading a projection matrix, and the Dall sheep wolf-control paradox.',
    flags: [
      { kind: 'know', text: '<strong>Columns are this year, rows are next year.</strong> Count over the columns to find the stage now, and down the rows to find the stage next year. Stage 2 → stage 5 is in column 2, row 5.' },
      { kind: 'know', text: 'What each position means: <strong>F</strong> (top row) = new stage-1 individuals produced per individual; <strong>S</strong> (diagonal) = survive and stay; <strong>G</strong> (just below the diagonal) = survive and grow. The letters aren’t standard (the book writes P for G), but the meaning of each position is.' },
      { kind: 'know', text: 'Survival is built into every transition rate.' },
      { kind: 'note', text: 'The book’s <strong>Leslie matrix</strong> is the age-structured version and slightly simpler: every age gets its own row, so nobody stays in a class.' }
    ],
    sections: [
      {
        id: 'l9-structured',
        title: 'From counts to structured models',
        html: `
<p>A count-based model has one pool of <strong>individuals</strong> with two loops: <strong>survival</strong> and <strong>reproduction</strong>. Structured (demographic) models split that pool into classes, each with its own vital rates.</p>
<div class="table-wrap"><table>
  <thead><tr><th>Structure</th><th>Classes defined by</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td><strong>Age</strong></td><td>Years since birth</td><td>1–2 yrs → 3–4 → 5–6 → 7+</td></tr>
    <tr><td><strong>Stage</strong></td><td>Life-history stage</td><td>egg → larva → pupa → adult</td></tr>
    <tr><td><strong>Size</strong></td><td>Body size</td><td>&lt;5 cm → 5–10 → 10–24 → 24+ cm</td></tr>
  </tbody>
</table></div>
<p>Two early decisions: <strong>which ages or stages</strong> to use, and <strong>the time step</strong>.</p>
<ul class="keylist">
  <li><strong>Age-specific survival:</strong> the chance that an individual of age x survives to age x + 1.</li>
  <li><strong>Age-specific fecundity:</strong> the average number of offspring a female produces while she is age x.</li>
</ul>`,
        recall: [
          ['Give an example of age, stage and size structure.', 'Age: 1–2, 3–4, 5–6, 7+ years. Stage: egg, larva, pupa, adult. Size: &lt;5, 5–10, 10–24, 24+ cm.'],
          ['What two things do you decide first when structuring a model?', 'Which ages or stages to use, and the time step.']
        ]
      },
      {
        id: 'l9-lifecycle',
        title: 'Building a model: the loggerhead life cycle',
        html: `
<p>Steps for building a stage-structured model, using loggerhead sea turtles:</p>
<ol class="keylist">
  <li><strong>Understand your species.</strong> Loggerheads nest on beaches; hatchlings head to the open ocean, later move to nearshore foraging areas, then mate and return to the beach to nest.</li>
  <li><strong>Decide how many stages to include</strong>, using biological intuition and what the data will allow.</li>
  <li><strong>Gather data</strong> and calculate the transition rates.</li>
  <li><strong>Make the model</strong>: the transition (projection) matrix.</li>
</ol>
<div class="table-wrap"><table class="num">
  <thead><tr><th>#</th><th>Stage</th><th>Ages (years)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Nestlings (and eggs)</td><td>First year</td></tr>
    <tr><td>2</td><td>Small juveniles</td><td>1–7</td></tr>
    <tr><td>3</td><td>Large juveniles</td><td>8–15</td></tr>
    <tr><td>4</td><td>Subadults</td><td>16–21 (mostly non-breeding)</td></tr>
    <tr><td>5</td><td>Mature adults</td><td>22–55 (breeding)</td></tr>
  </tbody>
</table></div>
<h4>Life-cycle diagram</h4>
<p>Circles are <strong>stages</strong>; arrows are <strong>transitions</strong>, each with a rate. There are three kinds of arrow:</p>
${CBFig.lifeCycle(false)}
<h4>Clicker: sockeye salmon</h4>
<p class="scenario">Juveniles migrate to the ocean. Adults live in the ocean for several years. Adults travel upstream, breed and die.</p>
${CBFig.salmonCycle()}`,
        recall: [
          ['List the four steps for building a stage-structured model.', 'Understand your species; decide how many stages (biological intuition and what the data allow); gather data and calculate transitions; make the matrix.'],
          ['Name the five loggerhead stages in order.', 'Nestlings (first year), small juveniles (1–7), large juveniles (8–15), subadults (16–21), mature adults (22–55).'],
          ['Why is there no stay loop on river-adult salmon?', 'They breed once and die, so none remain in that stage the next year.']
        ]
      },
      {
        id: 'l9-rates',
        title: 'From field data to transition rates',
        html: `
<p>Mark 1,000 turtles in each stage, then see where the survivors are a year later. (“Eggs” counts female eggs only.)</p>
<div class="table-wrap"><table class="num">
  <thead><tr><th></th><th>Nestlings</th><th>Small juv.</th><th>Large juv.</th><th>Subadults</th><th>Adults</th></tr></thead>
  <tbody>
    <tr><td>Marked in year 1</td><td>1,000</td><td>1,000</td><td>1,000</td><td>1,000</td><td>1,000</td></tr>
    <tr><td>Recaptured in the <strong>same</strong> class</td><td>0</td><td>703</td><td>657</td><td>682</td><td>809</td></tr>
    <tr><td>Recaptured in the <strong>next larger</strong> class</td><td>675</td><td>47</td><td>19</td><td>61</td><td>—</td></tr>
    <tr><td>Female eggs per female per year</td><td>0</td><td>0</td><td>0</td><td>4.665</td><td>61.896</td></tr>
  </tbody>
</table></div>
<p>Each stage needs up to three kinds of transition:</p>
<ol class="keylist">
  <li><strong>S</strong>, the fraction <strong>surviving but not growing</strong>. Small juveniles: 703 ÷ 1,000 = <strong>0.703</strong>.</li>
  <li><strong>G</strong>, the fraction <strong>surviving and growing</strong> into the next stage. Nestlings → small juveniles: 675 ÷ 1,000 = <strong>0.675</strong>.</li>
  <li><strong>F</strong>, the number of <strong>female offspring per year per surviving female</strong>. Mature adults: 61.896.</li>
</ol>
<p class="callout"><strong>Survival is included in every transition rate.</strong> An animal that dies counts toward neither S nor G, so a stage’s total annual survival is S + G. Small juveniles survive at 0.703 + 0.047 = 0.75 per year, so 25% die.</p>
<p class="muted small">Salmon make these parameters easy to measure: returning adults are counted at fish ladders (or even the “salmon cannon”), with electronic tags to identify individuals.</p>`,
        recall: [
          ['From the table, what fraction of small juveniles stay small juveniles next year?', '703 ÷ 1,000 = 0.703. That is S₂.'],
          ['What does G mean, and what is G for nestlings?', 'The fraction that survive and grow into the next stage. Nestlings: 675 ÷ 1,000 = 0.675.'],
          ['What does “survival is included in every transition rate” mean for S and G?', 'Both count only survivors, so S + G is the stage’s total annual survival (small juveniles: 0.75).']
        ]
      },
      {
        id: 'l9-matrix',
        title: 'The projection matrix',
        html: `
<p class="definition"><strong>Population projection matrix (P):</strong> a summary of all the transition probabilities, that is, all the vital rates, in one table.</p>
${CBFig.matrix({ kind: 'generic' })}
<p class="callout"><strong>How to read it:</strong> count over the <strong>columns</strong> to find the stage <strong>this year</strong> (where individuals come from). Count down the <strong>rows</strong> to find the stage <strong>next year</strong> (where they go). Stage 2 → stage 5 is column 2, row 5. Stage 4 → stage 1 is column 4, row 1, which is F₄: reproduction. Treat the matrix as a place to look up survival, growth and fecundity.</p>
<ul class="keylist">
  <li><strong>F<sub>i</sub></strong> (top row): number of new stage-1 individuals produced by an average individual of stage i per year.</li>
  <li><strong>S<sub>i</sub></strong> (diagonal): proportion of stage i surviving and <strong>staying</strong> in stage i per year.</li>
  <li><strong>G<sub>i</sub></strong> (just below the diagonal): proportion of stage i surviving and <strong>growing</strong> into stage i + 1 per year. The book calls it P<sub>i</sub>.</li>
</ul>
<p>Filled in with the loggerhead data:</p>
${CBFig.matrix({ kind: 'turtle', caption: 'The adults’ stay rate is 0.8091 (809 of 1,000 recaptured as adults).' })}
<h4>Clicker: a new term appears</h4>
${CBFig.matrix({ kind: 'turtle', extra: { r: 3, c: 1, v: '0.01', dr: 2, dc: 1, dv: '0.037' } })}
<p>A 0.01 appears in <strong>column 2, row 4</strong>, and the 0.047 above it drops to 0.037. Column 2 is small juveniles this year; row 4 is subadults next year. So the new term is <strong>small juveniles growing straight into subadults</strong>, skipping the large-juvenile stage.</p>
<h4>Leslie matrix (the book’s version)</h4>
<p>The Leslie matrix is the <strong>age-structured</strong> version and slightly simpler: every age gets its own row and column. Nobody can stay the same age for two years, so below the top-left corner the diagonal is all zeros. Survival to the next age sits just below the diagonal, and fecundities fill the top row (the top-left cell is F₁, reproduction by the youngest age).</p>
<h4>Why bother with a matrix?</h4>
<p>Recall the count-based model N<sub>t+1</sub> = λN<sub>t</sub>. The structured version is</p>
<p class="formula">N<sub>t+1</sub> = P · N<sub>t</sub></p>
<p>where N<sub>t</sub> and N<sub>t+1</sub> are <strong>vectors</strong> (a count for each stage) and <strong>P plays the same role as λ</strong>. Lecture 10 uses it to project populations forward.</p>`,
        recall: [
          ['In a projection matrix, what do the columns and rows represent?', 'Columns = stage this year (where individuals come from). Rows = stage next year (where they go).'],
          ['Where do F, S and G sit in a stage-structured matrix?', 'F on the top row; S on the diagonal; G just below the diagonal.'],
          ['A 0.01 appears in column 2, row 4 of the turtle matrix. What process is it?', 'Small juveniles growing directly into subadults, skipping large juveniles.'],
          ['What role does P play in N<sub>t+1</sub> = P·N<sub>t</sub>?', 'The same role λ plays in the count-based model. N<sub>t</sub> is now a vector of stage counts.']
        ]
      },
      {
        id: 'l9-dall',
        title: 'Dall sheep: does killing wolves help sheep?',
        html: `
<p>Prugh &amp; Arthur (2015), “Optimal predator management for mountain sheep conservation depends on the strength of mesopredator release.” Laura Prugh is a wildlife biologist now at UW, and Stephen Arthur works for the National Park Service. Papers like this are part of how wildlife managers make decisions.</p>
${CBFig.foodWeb()}
<ul class="keylist">
  <li><strong>Wolves eat sheep</strong>, both adults and lambs.</li>
  <li><strong>Coyotes eat lambs.</strong></li>
  <li><strong>Wolves eat coyotes</strong>, including coyote pups.</li>
</ul>
<p>So “wolf control” means fewer wolves killing sheep, but <strong>more coyotes</strong> killing lambs. What is the net effect? Answering that needs a model with age structure, because the two predators kill different ages.</p>
<h4>The model</h4>
<p>A female-only, post-birth-pulse matrix with four stages: lambs (0–1), pre-breeding ewes (1–2), young ewes (3–11) and old ewes (12+). They decided how to break the population down: <strong>age-structured, but lumping some ages together</strong>.</p>
${CBFig.matrix({ kind: 'sheep', caption: 'Stage 1 = lambs (0–1), 2 = pre-breeding ewes (1–2), 3 = young ewes (3–11), 4 = old ewes (12+). Only young and old ewes reproduce.' })}
<p>Survival in each stage subtracts each cause of death, added together:</p>
<p class="formula">s<sub>i</sub> = 1 − wolf<sub>i</sub> − coyote<sub>i</sub> − other<sub>i</sub></p>
<p>Lambs: 1 − 0.26 (coyotes) − 0.02 (wolves) − 0.38 (other) = 1 − 0.66 = <strong>0.34</strong>, the G₁ in column 1.</p>
<details class="more"><summary>How the other entries were built (for reference)</summary>
<p>Top row: fecundity × survival (f·s<sub>y</sub> = 0.41, f·s<sub>o</sub> = 0.36). Pre-breeding ewes split their survival between staying, (1 − t<sub>y</sub>)·s<sub>y</sub>, and moving on, t<sub>y</sub>·s<sub>y</sub>, with t<sub>y</sub> = 0.5, giving 0.47 each. Young ewes move to the old stage with t<sub>o</sub> = 0.11. Each transition probability is the inverse of the number of years spent in that stage.</p></details>
<p class="callout"><strong>Key result:</strong> removing wolves resulted in <strong>lower</strong> sheep population growth rates in their simulations. Wolf control released coyotes, and the extra coyote predation on lambs outweighed the adults saved from wolves. As the title says, the best predator management depends on how strongly coyotes are released.</p>
<p class="muted">“All models are wrong, some models are useful.”</p>`,
        recall: [
          ['Why might wolf control lower Dall sheep growth?', 'Wolves kill coyotes. Removing wolves releases coyotes (mesopredator release), which eat lambs, and the extra lamb deaths can outweigh the adults saved.'],
          ['What were the four Dall sheep stages?', 'Lambs (0–1), pre-breeding ewes (1–2), young ewes (3–11), old ewes (12+).'],
          ['How was lamb survival calculated?', '1 − 0.26 (coyote) − 0.02 (wolf) − 0.38 (other) = 0.34.']
        ]
      }
    ],
    exam: [
      { t: 'mc', topic: 'l9-structured', q: 'Egg → larva → pupa → adult is an example of…', o: ['Stage structure', 'Age structure', 'Size structure', 'A count-based model'], a: 0, why: 'Age structure uses years since birth; size structure uses body size.' },
      { t: 'mc', topic: 'l9-lifecycle', q: 'According to lecture, how do you decide how many stages to include?', o: ['Biological intuition and what the data will allow', 'Always use exactly five stages', 'One stage per year of life', 'As few as possible to simplify the math'], a: 0, why: 'Loggerheads got five stages because their biology and the available data supported five.' },
      { t: 'mc', topic: 'l9-lifecycle', q: 'Sockeye salmon: juveniles migrate to the ocean, adults live there for several years, then travel upstream, breed and die. Which life-cycle diagram fits (stages: juveniles, ocean adults, river adults)?', o: ['Juveniles → ocean adults (with a stay loop) → river adults (no stay loop) → juveniles by reproduction', 'Juveniles → ocean adults → river adults, with stay loops on both adult stages', 'Juveniles ⇄ ocean adults, and river adults with a stay loop', 'Juveniles with a stay loop → river adults → ocean adults'], a: 0, why: 'Only ocean adults remain in their stage for several years. River adults breed and die, so they can’t stay.' },
      { t: 'mc', topic: 'l9-lifecycle', q: 'Why do loggerhead nestlings have no “stay” arrow in the life-cycle diagram?', o: ['The nestling stage lasts one year, so survivors always move on to small juveniles', 'Nestlings never survive', 'Nestlings reproduce instead', 'Stay arrows are only drawn for adults'], a: 0, why: 'In the data, 0 of 1,000 marked nestlings were recaptured as nestlings and 675 as small juveniles.' },
      { t: 'mc', topic: 'l9-rates', q: '1,000 small juveniles were marked. A year later 703 were recaptured as small juveniles and 47 as large juveniles. What is S₂?', o: ['0.703', '0.047', '0.75', '0.675'], a: 0, why: 'S is survive and stay. G₂ = 0.047, and S + G = 0.75 is total survival.' },
      { t: 'mc', topic: 'l9-rates', q: 'What does “survival is included in each transition rate” mean?', o: ['S and G count only survivors, so together they give the stage’s total survival', 'Survival is a separate row in the matrix', 'Fecundity ignores survival', 'Every individual survives in the model'], a: 0, why: 'An animal that dies contributes to neither S nor G.' },
      { t: 'mc', topic: 'l9-rates', q: 'In the loggerhead data, 61.896 is…', o: ['The number of female eggs per mature adult female per year', 'The number of adults recaptured', 'The survival rate of adults', 'Total eggs, male and female'], a: 0, why: '“Eggs” in the table means female eggs only, because the model tracks females.' },
      { t: 'mc', topic: 'l9-matrix', q: 'Where in a projection matrix do you find the fraction of individuals going from stage 2 this year to stage 5 next year?', o: ['Column 2, row 5', 'Row 2, column 5', 'Column 5, row 2', 'On the diagonal'], a: 0, fig: 'genericMatrix', why: 'Columns are this year (from), rows are next year (to).' },
      { t: 'mc', topic: 'l9-matrix', q: 'In the loggerhead matrix, the entry in column 4, row 1 (4.665) represents…', o: ['Fecundity: new nestlings produced per subadult per year', 'Subadults surviving and staying subadults', 'Nestlings growing into subadults', 'The survival rate of nestlings'], a: 0, fig: 'turtleMatrix', why: 'Column 4 = subadults this year; row 1 = nestlings next year. Going to stage 1 means reproduction.' },
      { t: 'mc', topic: 'l9-matrix', q: 'Where are the “survive and stay” (S) terms in a stage-structured matrix?', o: ['On the diagonal', 'On the top row', 'Just below the diagonal', 'In the last column'], a: 0, why: 'Staying means going from stage i to stage i: column i, row i.' },
      { t: 'mc', topic: 'l9-matrix', q: 'A 0.01 is added in column 2, row 4 of the loggerhead matrix. What process might it represent?', o: ['Small juveniles growing directly into subadults', 'Subadults shrinking into small juveniles', 'Small juveniles returning to the nestling stage', 'Additional subadult reproduction'], a: 0, fig: 'turtleMatrixExtra', why: 'Column 2 = small juveniles this year; row 4 = subadults next year.' },
      { t: 'mc', topic: 'l9-matrix', q: 'How does a Leslie matrix differ from the stage matrix used for turtles?', o: ['Every age gets its own row, so no one stays in a class and the stay terms are 0', 'It has no fecundity terms', 'Its rows are this year and its columns next year', 'It only works for plants'], a: 0, why: 'You can’t be age 3 two years in a row, so survival only moves individuals to the next age.' },
      { t: 'mc', topic: 'l9-matrix', q: 'In N<sub>t+1</sub> = P · N<sub>t</sub>, what are N<sub>t</sub> and P?', o: ['N<sub>t</sub> is a vector of counts for each stage; P is the projection matrix, playing the role of λ', 'N<sub>t</sub> is the total population; P is the probability of detection', 'N<sub>t</sub> is the carrying capacity; P is the harvest', 'Both are single numbers'], a: 0, why: 'The matrix version of N<sub>t+1</sub> = λN<sub>t</sub>.' },
      { t: 'mc', topic: 'l9-dall', q: 'Wolves eat sheep and coyotes; coyotes eat lambs. What happens to coyotes if wolves are removed?', o: ['They increase (mesopredator release) and kill more lambs', 'They decrease', 'Nothing, because wolves don’t affect coyotes', 'They switch to eating only adult sheep'], a: 0, why: 'Wolves eat coyotes and their pups, so wolf control releases coyotes.' },
      { t: 'mc', topic: 'l9-dall', q: 'What was the key result of Prugh & Arthur’s Dall sheep model?', o: ['Removing wolves can lower sheep population growth, depending on how strongly coyotes are released', 'Removing wolves always increases sheep growth', 'Coyotes have no effect on sheep', 'Sheep growth doesn’t depend on predators'], a: 0, why: 'Extra coyote predation on lambs can outweigh the sheep saved from wolves.' },
      { t: 'mc', topic: 'l9-dall', q: 'Why did the Dall sheep question need an age-structured model rather than a count-based one?', o: ['The two predators kill different ages: coyotes take lambs, wolves take adults and lambs', 'Sheep populations don’t change size', 'Count-based models can’t include any predators', 'Age structure is required by law'], a: 0, why: 'Trading adult deaths for lamb deaths only makes sense if the model knows the difference.' },
      { t: 'mc', topic: 'l9-dall', q: 'How did Prugh & Arthur structure the sheep population?', o: ['Age-structured but lumping some ages: lambs, pre-breeding ewes, young ewes, old ewes', 'One class per year of age from 0 to 20', 'By horn size', 'Males and females separately'], a: 0, why: 'It is a female-only model; lumping ages keeps it simple enough to parameterize.' },
      { t: 'num', topic: 'l9-rates', q: '1,000 large juveniles are marked; a year later 657 are recaptured as large juveniles and 19 as subadults. What is G₃, the fraction surviving and growing? (three decimals)', a: 0.019, tol: 0.0006, why: 'G₃ = 19 ÷ 1,000 = 0.019. S₃ = 0.657, and total survival is 0.676.' },
      { t: 'num', topic: 'l9-rates', q: 'Subadult loggerheads: 682 of 1,000 stay subadults and 61 become adults. What is total annual subadult survival? (three decimals)', a: 0.743, tol: 0.0006, why: 'S₄ + G₄ = 0.682 + 0.061 = 0.743, so about 26% die each year.' },
      {
        t: 'num', topic: 'l9-rates', gen: function () {
          var st = G.pick([['small juveniles', 'large juveniles'], ['large juveniles', 'subadults'], ['subadults', 'mature adults'], ['caterpillars', 'pupae'], ['seedlings', 'saplings']]);
          var marked = G.pick([500, 800, 1000, 2000]);
          var same = G.rint(Math.round(marked * 0.4), Math.round(marked * 0.8));
          var grow = G.rint(Math.round(marked * 0.01), Math.round(marked * 0.15));
          var ask = G.pick(['S', 'G', 'surv', 'mort']);
          var S = same / marked, Gr = grow / marked, a, what, why;
          if (ask === 'S') { a = S; what = 'S, the fraction surviving and staying'; why = 'S = ' + same + ' ÷ ' + marked + ' = ' + G.fmt(S, 4) + '.'; }
          else if (ask === 'G') { a = Gr; what = 'G, the fraction surviving and growing'; why = 'G = ' + grow + ' ÷ ' + marked + ' = ' + G.fmt(Gr, 4) + '.'; }
          else if (ask === 'surv') { a = S + Gr; what = 'the total annual survival of ' + st[0]; why = 'Survival = S + G = (' + same + ' + ' + grow + ') ÷ ' + marked + ' = ' + G.fmt(S + Gr, 4) + '.'; }
          else { a = 1 - S - Gr; what = 'the annual mortality of ' + st[0]; why = 'Mortality = 1 − (S + G) = 1 − (' + same + ' + ' + grow + ') ÷ ' + marked + ' = ' + G.fmt(1 - S - Gr, 4) + '.'; }
          return {
            q: 'You mark ' + G.fmt(marked) + ' ' + st[0] + '. A year later, ' + same + ' are recaptured still as ' + st[0] + ' and ' + grow + ' as ' + st[1] + '. Assume every survivor was recaptured. What is ' + what + '? (three decimals)',
            a: a, tol: 0.0011, why: why + ' Survival is included in both S and G.'
          };
        }
      },
      {
        t: 'num', topic: 'l9-dall', gen: function () {
          var coy = G.pick([0.1, 0.15, 0.2, 0.26, 0.3]), wolf = G.pick([0.02, 0.05, 0.08, 0.1]), oth = G.pick([0.1, 0.2, 0.25, 0.3, 0.38]);
          if (Math.random() < 0.35) {
            var coy2 = coy * 1.6, wolf2 = wolf * 0.2, s0 = 1 - coy - wolf - oth, s1 = 1 - coy2 - wolf2 - oth;
            return {
              q: 'Lamb mortality: ' + coy + ' to coyotes, ' + wolf + ' to wolves and ' + oth + ' to other causes. Wolf control cuts wolf predation by 80%, but released coyotes raise coyote predation by 60%. What is lamb survival after wolf control? (three decimals)',
              a: s1, tol: 0.0011,
              why: 'New coyote = ' + coy + ' × 1.6 = ' + G.fmt(coy2) + '; new wolf = ' + wolf + ' × 0.2 = ' + G.fmt(wolf2) + '. s = 1 − ' + G.fmt(coy2) + ' − ' + G.fmt(wolf2) + ' − ' + oth + ' = ' + G.fmt(s1) + ', compared with ' + G.fmt(s0) + ' before. ' + (s1 < s0 ? 'Wolf control made lamb survival worse.' : 'Here lamb survival still improved.')
            };
          }
          var s = 1 - coy - wolf - oth;
          return {
            q: 'In a Dall sheep model, a proportion ' + coy + ' of lambs are killed by coyotes each year, ' + wolf + ' by wolves and ' + oth + ' by other causes. What is lamb survival? (three decimals)',
            a: s, tol: 0.0011,
            why: 's = 1 − wolf − coyote − other = 1 − ' + wolf + ' − ' + coy + ' − ' + oth + ' = ' + G.fmt(s) + '. Prugh &amp; Arthur’s lambs: 1 − 0.26 − 0.02 − 0.38 = 0.34.'
          };
        }
      },
      { t: 'recall', topic: 'l9-matrix', q: 'Explain how to read a stage-structured projection matrix: what columns and rows mean, where F, S and G sit, and what one turtle entry means.', model: 'Columns are the stage this year (where individuals come from); rows are the stage next year (where they go). F values sit on the top row: new stage-1 individuals produced per individual of each stage. S values sit on the diagonal: the fraction surviving and staying. G values sit just below the diagonal: the fraction surviving and growing into the next stage. Example: column 2, row 2 = 0.703, small juveniles surviving and staying small juveniles; column 5, row 1 = 61.896, female eggs per adult per year. Survival is included in every transition rate.', points: ['Columns = this year, rows = next year', 'F top row = reproduction', 'S diagonal = stay; G below diagonal = grow', 'A correct worked example from the turtle matrix'] },
      { t: 'recall', topic: 'l9-lifecycle', q: 'Walk through building a stage-structured model for loggerhead sea turtles.', model: '1) Understand the species: nesting beaches, open ocean, nearshore foraging, mating. 2) Decide how many stages, using biological intuition and what the data allow: nestlings (first year), small juveniles (1–7), large juveniles (8–15), subadults (16–21), mature adults (22–55). 3) Gather data (mark animals in each stage, record who stays, who grows, and female eggs per female) and calculate S, G and F. 4) Build the life-cycle diagram and the projection matrix.', points: ['Understand the life history', 'Choose stages using biology and available data', 'Gather data and calculate S, G, F', 'Build the diagram/matrix'] },
      { t: 'recall', topic: 'l9-dall', q: 'Explain the Dall sheep wolf-control paradox and why answering it required a structured model.', model: 'Wolves eat adult sheep and lambs, and also eat coyotes and their pups. Coyotes eat lambs. Removing wolves saves some sheep from wolves but releases coyotes (mesopredator release), which kill more lambs. Because the predators hit different ages, Prugh &amp; Arthur used a female-only, age-structured matrix (lambs, pre-breeding, young and old ewes) with survival = 1 − wolf − coyote − other predation. Their key result: wolf removal can lower sheep population growth when coyote predation rises enough.', points: ['Food web: wolves eat sheep and coyotes; coyotes eat lambs', 'Wolf removal → more coyotes (mesopredator release)', 'Different predators kill different ages, so an age-structured model is needed', 'Result: wolf control can lower sheep growth'] }
    ]
  });
})();
