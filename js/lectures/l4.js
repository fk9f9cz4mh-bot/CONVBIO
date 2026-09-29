window.CB_DATA.lectures.push({
  id: 'l4',
  num: 4,
  title: 'Patterns and trends in biodiversity',
  short: 'Patterns & trends',
  reading: 'McGill et al. 2015; textbook Ch. 3 (Box 3.3, Figs 3.9–3.13) and Ch. 4',
  blurb: 'Evenness, the Shannon and Simpson indices, phylogenetic and functional diversity, ecoregions, alpha/beta/gamma diversity, and how biodiversity is changing at each spatial scale.',
  flags: [
    { kind: 'know', text: 'The instructor’s checklist: richness (understand and calculate), accumulation curves (read and compare), rarefaction (what it’s for), evenness (the basic idea), Shannon diversity (how it differs from richness). Metrics depend on sampling effort, and some are more sensitive to rare species than others.' },
    { kind: 'skip', text: 'You do NOT need the equation γ = α × β. You DO need to know that alpha and beta combine in a positive way to make gamma.' },
    { kind: 'skip', text: 'The scorpion story is not on the test.' },
    { kind: 'note', text: 'Exams focus on material covered in both lecture and reading. Details found only in the reading are less likely to appear.' }
  ],
  sections: [
    {
      id: 'l4-richness',
      title: 'Reading accumulation curves',
      html: `
<p><strong>Richness summary:</strong> it seems simple, but it depends heavily on sampling effort and area. To compare sites, use the same effort or rarefy the data. A true “total richness” is hard to get.</p>
${CBFig.accumCompare(true)}
<div class="table-wrap"><table>
  <thead><tr><th>Clicker answer</th><th>Verdict</th></tr></thead>
  <tbody>
    <tr><td>B has more species (16 &gt; 13)</td><td><strong>No.</strong> At equal effort A has more. B only has more because it was sampled more.</td></tr>
    <tr><td>A has more species</td><td><strong>Defensible</strong> at equal effort, but it’s harder to say how many each would have at 20 samples, or in the whole field.</td></tr>
    <tr><td>Impossible to say</td><td>“Impossible” is a little strong. It is <em>more complicated</em> to say with these data.</td></tr>
  </tbody>
</table></div>`,
      recall: [
        ['A shows 13 species after 12 samples; B shows 16 after 20. Is B more diverse?', 'Not necessarily. Compare at equal effort: at 9 samples A had 13 and B had 8. B’s higher total reflects more sampling.'],
        ['What is the golden rule for comparing richness between sites?', 'Compare at the same sampling effort, using identical methods or rarefaction.']
      ]
    },
    {
      id: 'l4-evenness',
      title: 'Evenness: why richness isn’t enough',
      html: `
<p>Two tree communities each have <strong>4 species</strong>. Community 1 is split 25 / 25 / 25 / 25%. Community 2 is split 6 / 12 / 70 / 12%. Same richness, but Community 1 is more diverse because it is <strong>more even</strong>.</p>
<p class="definition"><strong>Species evenness</strong> describes the relative abundance of the different species. Similar abundances mean more evenness.</p>
<p><strong>Disadvantages of richness</strong> as a metric:</p>
<ul>
  <li>It <strong>does not account for relative abundance</strong>.</li>
  <li>It is <strong>very sensitive to rare species</strong>. A field of 35 red flowers has richness 1; add a single purple flower and richness doubles to 2.</li>
</ul>`,
      recall: [
        ['Define species evenness.', 'The relative abundance of species compared with one another. Similar abundances mean high evenness.'],
        ['Name two disadvantages of species richness.', 'It ignores relative abundance, and it is very sensitive to rare species: one extra individual can add a whole species.']
      ]
    },
    {
      id: 'l4-shannon',
      title: 'Shannon and Simpson indices',
      html: `
<p><strong>Shannon diversity</strong> combines richness and evenness:</p>
<p class="formula">H = − Σ p<sub>i</sub> ln(p<sub>i</sub>)</p>
<p class="muted small">p<sub>i</sub> = proportion of individuals belonging to species i. Sum over all s species in the community.</p>
<h4>Worked example (20 individuals)</h4>
<div class="table-wrap"><table class="num">
  <thead><tr><th>Species</th><th>Count</th><th>p<sub>i</sub></th><th>ln p<sub>i</sub></th><th>p<sub>i</sub> ln p<sub>i</sub></th></tr></thead>
  <tbody>
    <tr><td>Yellow</td><td>17</td><td>0.85</td><td>−0.163</td><td>−0.139</td></tr>
    <tr><td>Orange</td><td>1</td><td>0.05</td><td>−2.996</td><td>−0.150</td></tr>
    <tr><td>Purple</td><td>1</td><td>0.05</td><td>−2.996</td><td>−0.150</td></tr>
    <tr><td>Brown</td><td>1</td><td>0.05</td><td>−2.996</td><td>−0.150</td></tr>
    <tr class="hl"><td>Total</td><td>20</td><td>1.00</td><td></td><td>−0.586 → <strong>H = 0.586</strong></td></tr>
  </tbody>
</table></div>
<p>A second community with the same four species but a more even split has H = 1.388. Richness is identical (4), and Shannon tells them apart.</p>
<h4>How H responds</h4>
<div class="table-wrap"><table class="num">
  <thead><tr><th>Community</th><th>Change</th><th>H</th></tr></thead>
  <tbody>
    <tr><td>1 species</td><td>Start</td><td>0 = −(1·ln 1)</td></tr>
    <tr><td>2 species, 3 : 1</td><td>Add a species</td><td>0.56</td></tr>
    <tr><td>2 species, 2 : 2</td><td>Make more even</td><td>0.69</td></tr>
    <tr><td>3 species, equal</td><td>Add more species</td><td>1.10</td></tr>
  </tbody>
</table></div>
<p class="callout"><strong>H is based on proportions.</strong> Two fields with the same relative abundances have the same H even if one has far more individuals. Four species at 25% each always gives H = ln 4 ≈ 1.39.</p>
<h4>Simpson index</h4>
<p class="formula">Simpson = Σ p<sub>i</sub><sup>2</sup></p>
<p>This is the <strong>probability that two individuals drawn at random are the same species</strong>. It is <strong>relatively insensitive to rare species</strong>. By this formula a <em>higher</em> value means one species dominates, so diversity is <em>lower</em>.</p>
<p class="muted small">“Diversity” or “biodiversity” in a paper can mean richness, Shannon diversity or another metric. Check which one.</p>`,
      recall: [
        ['Write the Shannon index and say what it combines.', 'H = −Σ pᵢ ln pᵢ. It combines richness and evenness.'],
        ['What is H for a community with only one species?', '0, because p = 1 and ln 1 = 0.'],
        ['Two fields have the same four species at 25% each, but one has 10× more individuals. Compare their H.', 'Identical (ln 4 ≈ 1.39). Shannon uses proportions, not totals.'],
        ['What does the Simpson index Σpᵢ² represent, and how does it treat rare species?', 'The probability that two random individuals are the same species. It is relatively insensitive to rare species.']
      ]
    },
    {
      id: 'l4-phylo',
      title: 'Phylogenetic diversity (PD)',
      html: `
<ul class="keylist">
  <li>Species are <strong>weighted by their evolutionary distinctiveness</strong>.</li>
  <li>PD is calculated on a phylogenetic tree as <strong>the sum of all branch lengths connecting all the species</strong> in the set.</li>
  <li>It measures the <strong>evolutionary dispersion</strong> of a biota. Four snails plus one more snail has the same richness as four snails plus a frog, but the frog community has much higher PD.</li>
</ul>
<h4>How to read a tree</h4>
<ul>
  <li>Add up the branch lengths that connect your species.</li>
  <li>Only the lengths running <strong>away from the species names</strong> matter.</li>
  <li>The spacing used to arrange species at the tips <strong>does not represent evolution</strong>.</li>
</ul>
${CBFig.phyloTree()}
<p class="muted small">Practice: PD of {A, B} = 2 + 2 = 4. PD of {A, E} = 2 + 2 + 2 + 6 = 12. Try the three-species sets yourself before the exam.</p>`,
      recall: [
        ['How is phylogenetic diversity calculated?', 'Sum all the branch lengths on the phylogenetic tree that connect the species in the set.'],
        ['On a tree drawn with tips across the top, which dimension doesn’t represent evolution?', 'The side-to-side spacing between tips (the connectors). Only the branch lengths running away from the tips count.'],
        ['Why does adding a frog to a snail community raise PD more than adding another snail?', 'The frog is evolutionarily distant, so it adds a long branch. Another snail adds only a short one.']
      ]
    },
    {
      id: 'l4-functional',
      title: 'Functional diversity (FD)',
      html: `
<ul class="keylist">
  <li>Species are <strong>weighted by their ecological distinctiveness</strong>.</li>
  <li>FD is calculated from <strong>traits representing niche dimensions</strong>, meaning how each species affects ecosystem function.
    <ul><li>Plant traits: root depth, plant height, leaf type, pollination mechanism.</li><li>Animal traits: body size, diet, habitat, metabolic rate.</li></ul></li>
  <li>It measures ecological dispersion, the <strong>diversity of ecological roles</strong> in a community.</li>
  <li>To calculate FD <strong>you have to decide what to measure</strong>. The choice of traits shapes the answer.</li>
  <li>Interactions between species, such as <strong>food web</strong> complexity, describe another aspect of diversity.</li>
</ul>
<p class="callout">Across 4,536 terrestrial mammal species, PD and FD both rise with species richness. <strong>Diversity metrics tend to be correlated, but not perfectly.</strong></p>`,
      recall: [
        ['What is functional diversity based on? Give two plant and two animal traits.', 'Traits that represent niche dimensions. Plants: root depth, height (also leaf type, pollination). Animals: body size, diet (also habitat, metabolic rate).'],
        ['PD vs. FD: what is each species weighted by?', 'PD: evolutionary distinctiveness. FD: ecological distinctiveness (traits and roles).']
      ]
    },
    {
      id: 'l4-ecosystem',
      title: 'Ecosystem diversity',
      html: `
<p class="definition"><strong>Ecoregions</strong> are large areas with a similar mix of environmental conditions and a relatively distinct group of organisms. The textbook uses realms and biomes.</p>
<ul>
  <li>The EPA recognizes 104 ecoregions in the US.</li>
  <li><strong>Ecoregions are defined differently depending on the goals</strong> of whoever draws them. Two EPA versions of Florida’s ecoregions don’t match.</li>
</ul>
<p class="callout"><strong>Why spend so long on species concepts and biodiversity?</strong> They are the most common language for conversations about conservation, in this course, in science and with the public. Biodiversity concepts are often at the core of how we describe conservation goals.</p>`,
      recall: [
        ['Define an ecoregion.', 'A large area with a similar mix of environmental conditions and a relatively distinct group of organisms.'],
        ['Why don’t all ecoregion maps agree?', 'Ecoregions are drawn to suit the goals of the person defining them.']
      ]
    },
    {
      id: 'l4-scales',
      title: 'Alpha, beta and gamma diversity',
      html: `
<div class="table-wrap"><table>
  <thead><tr><th>Scale</th><th>Meaning</th></tr></thead>
  <tbody>
    <tr><td><strong>Alpha (α)</strong></td><td><strong>Within-habitat</strong> diversity of a local community at some scale of interest: a pond, a field, a reef, 1,000 m².</td></tr>
    <tr><td><strong>Beta (β)</strong></td><td><strong>Between-habitat</strong> diversity: the change (turnover) in species composition over distance. Highest where habitat varies over fine spatial scales, such as heterogeneous habitat, hills or mountains.</td></tr>
    <tr><td><strong>Gamma (γ)</strong></td><td><strong>Total diversity over a large area</strong> such as a biome, continent or ocean basin. It reflects the combined influence of alpha and beta. McGill et al. call it regional-scale alpha.</td></tr>
  </tbody>
</table></div>
<div class="fig-pair">
${CBFig.sites([['A', 'B', 'C'], ['C', 'A', 'B'], ['B', 'A', 'C']], '<strong>High alpha, low beta.</strong> Every site has all three species, so sites look alike.')}
${CBFig.sites([['A', 'A', 'A'], ['C', 'C', 'C'], ['B', 'B', 'B']], '<strong>High beta, low alpha.</strong> Each site has one species, and composition turns over completely between sites.')}
</div>
<p>Both regions above have the <strong>same gamma diversity</strong> (3 species). Gamma is a positive function of alpha and beta. The textbook writes γ = α × β, but you don’t need the equation.</p>
<p><strong>Region X vs. Y:</strong> sites in region X have higher alpha (5 species each vs. 3), but region X has lower beta and lower gamma, because its sites share the same species.</p>
<h4>Why the scale matters</h4>
<p>A human impact can change diversity at only one scale, or raise it at one scale while lowering it at another. <strong>Development</strong> reduces the bird species richness of each site (alpha ↓) and makes sites more similar (beta ↓). Lower alpha plus lower beta means <strong>lower gamma</strong>.</p>`,
      recall: [
        ['Define alpha, beta and gamma diversity.', 'Alpha: within-habitat (local) diversity. Beta: turnover in composition between habitats. Gamma: total diversity over a large region, combining alpha and beta.'],
        ['Where is beta diversity highest?', 'Where habitat changes over fine spatial scales: heterogeneous landscapes, hills and mountains.'],
        ['Development lowers local richness and makes sites more similar. What happens to beta and gamma?', 'Both fall. More similarity means lower beta, and lower alpha plus lower beta means lower gamma.']
      ]
    },
    {
      id: 'l4-trends',
      title: 'How biodiversity is changing at each scale',
      html: `
<p>McGill et al. (2015), “Fifteen forms of biodiversity trend in the Anthropocene,” define alpha diversity at several scales (global, biogeographic, meta-community, local) instead of using gamma.</p>
<div class="table-wrap"><table class="trends">
  <thead><tr><th>Measure</th><th>Trend</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td>Global alpha</td><td><span class="trend down">↓ Going down</span></td><td><strong>Extinction rate exceeds speciation rate</strong> globally.</td></tr>
    <tr><td>Biogeographic alpha (continent/region)</td><td><span class="trend up">↑ Going up</span></td><td><strong>Invasions</strong> are adding species to regional biotas faster than extinctions remove them.</td></tr>
    <tr><td>Local alpha</td><td><span class="trend flat">→ No consistent trend</span></td><td>Up in some studies, down in others. Vellend et al.: across 168 vegetation monitoring studies the overall trend was not different from zero.</td></tr>
    <tr><td>Spatial beta</td><td><span class="trend down">↓ Going down</span></td><td><strong>Communities are becoming more similar</strong> (homogenization).</td></tr>
    <tr><td>Temporal beta (turnover)</td><td><span class="trend up">↑ Going up</span></td><td>Communities are being <strong>changed and disrupted</strong> over time.</td></tr>
  </tbody>
</table></div>
<h4>Take-home messages</h4>
<ul>
  <li>Biodiversity is important, and it is complicated to measure well.</li>
  <li><strong>Global biodiversity is declining</strong>, and may be in crisis.</li>
  <li>Patterns are more complicated at smaller scales <strong>because of introduced non-native species</strong>.</li>
  <li><strong>Rising similarity between habitats and communities is a huge problem.</strong></li>
</ul>`,
      recall: [
        ['What is the trend in global alpha diversity, and why?', 'Declining, because extinction outpaces speciation.'],
        ['Why is biogeographic (continental) alpha diversity going up?', 'Invasions add species to regional biotas faster than extinctions remove them.'],
        ['What happens to local alpha, spatial beta and temporal beta?', 'Local alpha: no consistent trend. Spatial beta: down (communities homogenizing). Temporal beta: up (communities disrupted).']
      ]
    }
  ],
  exam: [
    { t: 'mc', topic: 'l4-richness', q: 'Accumulation curves: A shows 13 species (12 samples), B shows 16 species (20 samples). After 9 samples, A had 13 and B had 8. Which conclusion is best supported?', fig: 'accumCompare', o: ['At equal sampling effort, A has more species', 'B has more species because 16 > 13', 'Both ecosystems have the same true richness', 'A has fewer species because its curve flattened'], a: 0, why: 'B’s larger total reflects more sampling. Richness must be compared at equal effort, though totals for the whole field are still uncertain.' },
    { t: 'mc', topic: 'l4-evenness', q: 'Community 1 has four tree species at 25% each. Community 2 has the same four species at 6%, 12%, 70% and 12%. Which statement is correct?', o: ['Same richness, but Community 1 is more diverse because it is more even', 'Community 2 is more diverse because one species dominates', 'They are equally diverse because richness is the same', 'Community 1 has higher richness'], a: 0, why: 'Evenness means similar relative abundance. Shannon diversity rewards it.' },
    { t: 'mc', topic: 'l4-evenness', q: 'A field has 35 red flowers. Adding one purple flower changes richness from 1 to 2. This illustrates that richness…', o: ['Is very sensitive to rare species', 'Is insensitive to rare species', 'Measures evenness', 'Is based on proportions'], a: 0, why: 'One individual can double richness. This is a key disadvantage of richness.' },
    { t: 'mc', topic: 'l4-shannon', q: 'Which change would NOT change the Shannon index H of a community?', o: ['Doubling the number of individuals of every species', 'Adding a new species', 'Making abundances more even', 'Removing a rare species'], a: 0, why: 'H depends only on proportions (pᵢ). Doubling everyone leaves every proportion unchanged.' },
    { t: 'mc', topic: 'l4-shannon', q: 'What is the Shannon index of a community containing only one species?', o: ['0', '1', 'ln(1) = 1', 'It cannot be calculated'], a: 0, why: 'H = −(1 × ln 1) = 0, and ln 1 = 0.' },
    { t: 'mc', topic: 'l4-shannon', q: 'The Simpson index Σpᵢ² is best described as…', o: ['The probability two randomly drawn individuals are the same species; relatively insensitive to rare species', 'The number of species in a sample; very sensitive to rare species', 'The sum of branch lengths on a phylogeny', 'The turnover of species between sites'], a: 0, why: 'Because rare species have tiny pᵢ, squaring makes their contribution almost nothing.' },
    { t: 'mc', topic: 'l4-phylo', q: 'How is phylogenetic diversity (PD) calculated?', o: ['Sum of all branch lengths connecting the species on a phylogenetic tree', 'Number of distinct genera in the community', 'Average trait difference among species', 'Number of species multiplied by their evenness'], a: 0, why: 'PD weights species by evolutionary distinctiveness.' },
    { t: 'mc', topic: 'l4-phylo', q: 'Using the tree shown, which group of species represents the MOST phylogenetic diversity?', fig: 'phyloTree', o: ['A, C, E', 'A, B', 'A, C', 'B, C, D'], a: 0, why: 'PD: {A,B} = 4; {A,C} = 8; {B,C,D} = 10; {A,C,E} = 16. E sits on a long, distinct branch, and A and C come from different clades.' },
    { t: 'mc', topic: 'l4-phylo', q: 'On a phylogenetic tree, which feature does NOT represent evolutionary distance?', o: ['The spacing used to arrange species at the tips', 'The lengths of branches running away from the species names', 'The branch leading to a distantly related species', 'The sum of branches connecting two species'], a: 0, why: 'Tip spacing is layout only. Branch lengths are what count.' },
    { t: 'mc', topic: 'l4-functional', q: 'Functional diversity weights species by…', o: ['Ecological distinctiveness, measured with traits such as body size, diet, root depth', 'Evolutionary distinctiveness, measured with branch lengths', 'Their abundance in the community', 'How recently they were described by science'], a: 0, why: 'FD captures the diversity of ecological roles. You must decide which traits to measure.' },
    { t: 'mc', topic: 'l4-functional', q: 'Across 4,536 terrestrial mammal species, how do richness, PD and FD relate?', o: ['They tend to be correlated, but not perfectly', 'They are perfectly correlated, so any one will do', 'They are unrelated', 'PD and FD decrease as richness increases'], a: 0, why: 'Because the correlation is imperfect, the metric you choose can change which places look most diverse.' },
    { t: 'mc', topic: 'l4-ecosystem', q: 'Two EPA maps of Florida’s ecoregions differ. Why?', o: ['Ecoregions are defined differently depending on the goals of the person defining them', 'One map contains an error', 'Florida has no distinct ecoregions', 'Ecoregions change every few years'], a: 0, why: 'An ecoregion is a large area with similar conditions and a relatively distinct biota, and the boundaries depend on purpose.' },
    { t: 'mc', topic: 'l4-scales', q: 'Three ponds each contain species A, B and C. Which describes this region?', o: ['High alpha diversity, low beta diversity', 'Low alpha diversity, high beta diversity', 'High alpha and high beta diversity', 'Zero gamma diversity'], a: 0, why: 'Each site has all the species (high alpha), and composition doesn’t change between sites (low beta). Gamma = 3.' },
    { t: 'mc', topic: 'l4-scales', q: 'Where would you expect the highest beta diversity?', o: ['A mountainous landscape where habitat changes over short distances', 'A uniform prairie that looks the same for 100 km', 'A single well-mixed pond', 'A monoculture crop field'], a: 0, why: 'Beta is highest where habitats vary over fine spatial scales.' },
    { t: 'mc', topic: 'l4-scales', q: 'Development reduces alpha diversity and increases similarity between sites. Development therefore…', o: ['Reduces beta diversity and reduces gamma diversity', 'Reduces beta diversity and increases gamma diversity', 'Increases beta diversity and reduces gamma diversity', 'Increases beta diversity and increases gamma diversity'], a: 0, why: 'More similarity means lower beta. Lower alpha and lower beta combine into lower gamma.' },
    { t: 'mc', topic: 'l4-trends', q: 'What is the dominant pattern of change for GLOBAL alpha diversity?', o: ['Going down: extinction exceeds speciation', 'Going up: invasions add species', 'About the same', 'Going up: speciation has accelerated'], a: 0, why: 'At the scale of the whole planet, invasions only move species around. Extinctions are real losses.' },
    { t: 'mc', topic: 'l4-trends', q: 'What is the dominant pattern of change for BIOGEOGRAPHIC (continental) alpha diversity?', o: ['Going up: invasions add species faster than extinctions remove them', 'Going down: extinction exceeds speciation', 'About the same everywhere', 'Going down: habitat loss removes species'], a: 0, why: 'Introduced species raise regional species lists.' },
    { t: 'mc', topic: 'l4-trends', q: 'What is the dominant pattern for LOCAL alpha diversity around the world?', o: ['About as likely to go up as down', 'Going down at most locations', 'Going up at most locations', 'Zero change everywhere'], a: 0, why: 'Vellend et al. found no significant overall trend across 168 studies. Local dynamics are complex.' },
    { t: 'mc', topic: 'l4-trends', q: 'Spatial beta diversity is ___, while temporal beta diversity (turnover) is ___.', o: ['going down (communities more similar); going up (communities disrupted)', 'going up; going down', 'going down; going down', 'unchanged; going up'], a: 0, why: 'Homogenization lowers spatial beta, while disruption raises turnover through time.' },
    { t: 'num', topic: 'l4-shannon', q: 'A community has 17 yellow, 1 orange, 1 purple and 1 brown flower (20 individuals). Calculate the Shannon index H to two decimals.', a: 0.587, tol: 0.012, why: 'p = 0.85, 0.05, 0.05, 0.05. H = −[0.85 ln 0.85 + 3 × (0.05 ln 0.05)] = −[−0.138 − 0.449] ≈ 0.587. The slide rounds each term and shows 0.586; both are fine.' },
    { t: 'num', topic: 'l4-shannon', q: 'A field has 2 species: 30 of species X and 10 of species Y. Calculate H to two decimals.', a: 0.562, tol: 0.012, why: 'p = 0.75 and 0.25. H = −(0.75 ln 0.75 + 0.25 ln 0.25) = −(−0.216 − 0.347) ≈ 0.56.' },
    { t: 'num', topic: 'l4-shannon', q: 'A field has 4 species with 12 individuals each. Calculate H to two decimals.', a: 1.386, tol: 0.012, why: 'Each p = 0.25. H = −4 × (0.25 ln 0.25) = ln 4 ≈ 1.39. Any community with 4 equally abundant species gives the same value.' },
    { t: 'recall', topic: 'l4-scales', q: 'Define alpha, beta and gamma diversity, and explain how they relate.', model: 'Alpha: diversity within a local habitat or community. Beta: turnover in species composition between habitats or over distance. Gamma: total diversity over a large region. Gamma is a positive function of alpha and beta (γ = α × β in the textbook): regions with rich sites and high turnover have the highest gamma.', points: ['Alpha = local / within-habitat', 'Beta = turnover / between-habitat', 'Gamma = regional total', 'Alpha and beta combine positively to give gamma'] },
    { t: 'recall', topic: 'l4-trends', q: 'Summarize McGill et al.’s trends for global alpha, biogeographic alpha, local alpha, spatial beta and temporal beta, with the reason for each.', model: 'Global alpha ↓ (extinction > speciation). Biogeographic alpha ↑ (invasions add species faster than extinctions remove them). Local alpha: no consistent trend (up in some places, down in others). Spatial beta ↓ (communities becoming more similar). Temporal beta ↑ (communities changing and being disrupted).', points: ['Global alpha down, because extinction > speciation', 'Biogeographic alpha up, because of invasions', 'Local alpha shows no consistent trend', 'Spatial beta down (homogenization)', 'Temporal beta up (disruption)'] },
    { t: 'recall', topic: 'l4-phylo', q: 'Contrast phylogenetic diversity and functional diversity: what each weights species by, and how each is measured.', model: 'PD weights species by evolutionary distinctiveness. It is the sum of branch lengths connecting the species on a phylogenetic tree. FD weights species by ecological distinctiveness. It is measured from traits representing niche dimensions (root depth, height, body size, diet, metabolic rate) and reflects the diversity of ecological roles.', points: ['PD = evolutionary distinctiveness', 'PD = sum of branch lengths', 'FD = ecological distinctiveness', 'FD = measured from functional traits / niche roles'] }
  ]
});
