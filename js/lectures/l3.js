window.CB_DATA.lectures.push({
  id: 'l3',
  num: 3,
  title: 'Measuring and defining biodiversity',
  short: 'Defining biodiversity',
  reading: 'McGill et al. 2015 assigned for the next class',
  blurb: 'What biodiversity means, how many species exist, the three species concepts and their problems, DNA tools, and why species richness depends on sampling effort.',
  flags: [
    { kind: 'know', text: 'The three species concepts (morphological, biological, evolutionary/phylogenetic) and at least one problem with each.' },
    { kind: 'know', text: 'Why species definitions matter: laws such as the ESA are written, and management assessed, at the species level.' },
    { kind: 'know', text: 'Richness is very sensitive to sampling effort. Know how to read accumulation curves and what rarefaction is for.' },
    { kind: 'note', text: 'The species numbers (about 2 million named, 3–30 million estimated) come back in Lecture 5 when discussing how few species the IUCN has assessed.' }
  ],
  sections: [
    {
      id: 'l3-what',
      title: 'What is biodiversity?',
      html: `
<p class="scenario"><strong>Scenario from class:</strong> you run the Apalachicola National Estuarine Research Reserve and are told to “manage to conserve biodiversity.” What do you measure to show, five years on, that you did a good job?</p>
<p>Biodiversity could mean the number of species in a region, a number that combines richness and evenness, genetic variation, or functional variation. The risk is defining it so broadly that it equals all of biology.</p>
<p class="definition"><strong>Biodiversity</strong> = the variety of organisms at <strong>all levels of biological organization</strong>.</p>
<ol class="chain" aria-label="Levels of biological organization">
  <li>genes</li><li>individuals</li><li>populations</li><li class="hl">species</li><li>communities</li><li>ecosystems</li>
</ol>
<p><strong>Taxonomic diversity focuses on species.</strong> Species get the most attention from national legislation, international treaties and conservation NGOs, because species are what people care about most.</p>`,
      recall: [
        ['Define biodiversity as used in lecture.', 'The variety of organisms at all levels of biological organization.'],
        ['List the levels of biological organization in order.', 'Genes → individuals → populations → species → communities → ecosystems.'],
        ['Why does taxonomic (species) diversity get the most attention?', 'Laws, treaties and NGO messages are all built around species. Species are what people care about most.']
      ]
    },
    {
      id: 'l3-numbers',
      title: 'How many species are there?',
      html: `
<div class="stats">
  <div class="stat"><span class="stat-n">1.5–2M</span><span class="stat-l">species known to science (named)</span></div>
  <div class="stat"><span class="stat-n">3–30M</span><span class="stat-l">credible estimates of total eukaryotic species</span></div>
  <div class="stat"><span class="stat-n">~10,000</span><span class="stat-l">new species described per year</span></div>
</div>
<ul class="keylist">
  <li>More than <strong>half of named species are insects</strong>, and almost <strong>25% are beetles</strong>.</li>
  <li>Insects: about 1 million described and about 9 million estimated.</li>
  <li>Prokaryote diversity is largely unknown, and the word “species” describes it poorly.</li>
  <li>New discoveries are <strong>mostly insects and other invertebrates</strong>. Vertebrates still turn up, but slowly: about 1–5 new birds and 1–5 new mammals per year.</li>
  <li>Recent finds include a dwarf deer (<em>Pudella carlae</em>, 2024), four deep-sea octopuses (2023), a crab spider from an alpine lava field (2024), and the <strong>Burrunan dolphin</strong> (<em>Tursiops australis</em>, 2011), which lives in Port Phillip Bay beside Melbourne, a city of 4.5 million.</li>
</ul>`,
      recall: [
        ['About how many species have been named, and what are credible estimates of total eukaryotic species?', 'About 1.5–2 million named; 3–30 million estimated in total.'],
        ['What share of named species are insects, and what share are beetles?', 'More than half are insects; almost 25% are beetles.'],
        ['What kinds of species make up most new discoveries?', 'Insects and other invertebrates. Only about 1–5 new birds and 1–5 new mammals are found per year.']
      ]
    },
    {
      id: 'l3-concepts',
      title: 'Species concepts',
      html: `
<div class="table-wrap"><table>
  <thead><tr><th>Concept</th><th>A species is…</th><th>Problems / examples</th></tr></thead>
  <tbody>
    <tr><td><strong>Morphological</strong></td><td>A group of individuals with similar <strong>morphology and physiology</strong>.</td><td>Arbitrary. Darwin called “species” a term “arbitrarily given, for the sake of convenience.” Look-alikes can hide separate species (Florida vs. Western scrub jay).</td></tr>
    <tr><td><strong>Biological</strong></td><td>Individuals that <strong>interbreed in the wild to produce viable, fertile offspring</strong>.</td><td>(1) How much interbreeding is enough to call them one species? The coywolf is a coyote × grey wolf hybrid; the zorse is a zebra × horse. (2) Interbreeding is hard to observe directly.</td></tr>
    <tr><td><strong>Evolutionary / phylogenetic</strong></td><td>A <strong>distinct evolutionary lineage</strong> based on average genetic relatedness.</td><td>(1) Different genetic markers can give different trees: for the same frogs, mtDNA and an electrophoretic marker disagree. (2) Where do you draw the line? African elephants have been treated as 1 or 2 species, and <strong>since 2021 the IUCN recognizes savanna (<em>Loxodonta africana</em>, endangered) and forest (<em>L. cyclotis</em>, critically endangered) elephants as separate</strong>. With the Asian elephant, that makes 3 elephant species.</td></tr>
  </tbody>
</table></div>
<p class="callout">“Dichotomous species concept” is <strong>not a thing</strong>. It was the distractor in the clicker question.</p>
<h4>Case: the red wolf (<em>Canis rufus</em>)</h4>
<p>Is it a distinct species, or an isolated population (or hybrid) of grey wolves and coyotes? The competing trees put the red wolf in different positions relative to coyotes and grey wolves, and the answer matters for its protection.</p>
<h4>Why conservation biologists care</h4>
<p>Because <strong>the species is the level at which laws are written and management is assessed</strong>. The US Endangered Species Act (1973) doesn’t define “species.” George &amp; Mayden (2005) argue for using a <strong>hierarchy of species concepts</strong> to compare diversity across all groups.</p>`,
      recall: [
        ['Define the biological species concept and give its two problems.', 'Individuals that interbreed in the wild to produce viable, fertile offspring. Problems: how much interbreeding is enough (coywolf, zorse), and interbreeding is hard to observe.'],
        ['What are two problems with the evolutionary/phylogenetic species concept?', 'Different markers give different trees (mtDNA vs. electrophoretic markers in frogs), and it’s unclear where to draw species lines (1, 2 or 3 elephant species).'],
        ['How many elephant species does the IUCN recognize since 2021, and which is critically endangered?', 'Three: African savanna, African forest and Asian. The African forest elephant (L. cyclotis) is critically endangered.'],
        ['Why do species definitions matter so much in conservation?', 'Laws and management are organized around species, yet the ESA doesn’t define a species.']
      ]
    },
    {
      id: 'l3-evidence',
      title: 'Evidence for a new species: the Burrunan dolphin',
      html: `
<p><em>Tursiops australis</em> was described in 2011. The paper that named it used <strong>mitochondrial DNA, body size, skull shape and tooth count</strong> as evidence of a separate species.</p>
<p class="callout">Clicker: the <strong>least convincing</strong> evidence is that the population is <strong>spatially separated</strong> from other dolphins. Separation alone doesn’t show a distinct species, and it wasn’t one of the paper’s lines of evidence.</p>
<p>A 2020 study of dolphin skulls argues <em>T. australis</em> should <strong>not</strong> be a separate species. The argument is ongoing, which shows how contested species status can be even for large, well-studied mammals.</p>`,
      recall: [
        ['What evidence supported naming Tursiops australis as a new species?', 'Mitochondrial DNA plus morphology: body size, skull shape and tooth count.'],
        ['Why is spatial separation weak evidence of species status?', 'A population can be geographically isolated without being genetically or morphologically distinct.']
      ]
    },
    {
      id: 'l3-tools',
      title: 'DNA barcoding and environmental DNA',
      html: `
<p>Phylogenetic and evolutionary techniques can <strong>rapidly distinguish between species</strong>.</p>
<ul class="keylist">
  <li><strong>DNA barcoding</strong> identifies species from a short standardized DNA sequence. Hebert et al. (2004) found that the skipper butterfly <em>Astraptes fulgerator</em> was actually <strong>ten cryptic species in one</strong>.</li>
  <li><strong>Uses:</strong> conservation, public health, identifying meat and seafood (catching mislabeling), and identifying preserved specimens.</li>
  <li><strong>Environmental DNA (eDNA):</strong> collect stray DNA from the environment, such as a water sample, and detect which species are present without seeing them.</li>
</ul>`,
      recall: [
        ['What did DNA barcoding reveal about Astraptes fulgerator?', 'It was ten cryptic species that look alike (Hebert et al. 2004).'],
        ['What is eDNA and why is it useful?', 'Stray DNA collected from the environment, for example from water. It shows which species are present without observing or catching them.']
      ]
    },
    {
      id: 'l3-richness',
      title: 'Species richness and sampling effort',
      html: `
<p><strong>Species richness</strong> is the number of species in a defined community (birds, trees, insects…) within a defined area. Its advantages: it’s <strong>easy to measure and calculate</strong>, and very simple.</p>
<p>Field A has 6 butterfly species and Field B has 5, so Field A has the higher richness. Now suppose part of Field D wasn’t sampled: it shows 4 species against Field C’s 5, and when the whole field is surveyed it has 6. <strong>Richness is very sensitive to sampling effort.</strong> If effort differs, comparisons are unreliable.</p>
<p class="scenario"><strong>Grazing experiment (University of Florida):</strong> teams measured pollinator richness in different fields. Comparing their numbers sounds easy, but it only works if the <strong>methods are exactly the same</strong>: the same area, time, traps and effort.</p>
${CBFig.accumCurve()}
<ul class="keylist">
  <li><strong>Species accumulation curve:</strong> richness plotted against total sampling effort (m², traps, days, individuals…). You keep finding species, but more slowly.</li>
  <li><strong>Rarefaction</strong> standardizes effort so you can compare sites sampled differently. In the Costa Rica ant example, curves for different elevations are compared at the same number of samples.</li>
  <li>Compare at the <strong>same level of sampling</strong>. You <strong>can’t rarefy across different methods</strong>, such as traps vs. sweep nets.</li>
  <li>In principle you could estimate the <strong>asymptote</strong> (richness with infinite sampling), but that is tricky in many systems.</li>
</ul>`,
      recall: [
        ['Why is species richness hard to compare between two sites?', 'It is very sensitive to sampling effort. More area, time or traps finds more species, so methods must match.'],
        ['What does a species accumulation curve plot?', 'Species found (richness) against cumulative sampling effort.'],
        ['What is rarefaction for, and when can’t you use it?', 'It standardizes sampling effort so sites can be compared at equal effort. It can’t reconcile different sampling methods (traps vs. sweep nets).']
      ]
    }
  ],
  exam: [
    { t: 'mc', topic: 'l3-what', q: 'Which definition of biodiversity was used in lecture?', o: ['The variety of organisms at all levels of biological organization', 'The number of species in a region', 'The genetic variation within a single species', 'The total biomass of living things in an ecosystem'], a: 0, why: 'The other options are narrower measures that each capture only one part of biodiversity.' },
    { t: 'mc', topic: 'l3-what', q: 'Which sequence lists the levels of biological organization from smallest to largest?', o: ['Genes → individuals → populations → species → communities → ecosystems', 'Individuals → genes → species → populations → ecosystems → communities', 'Genes → populations → individuals → communities → species → ecosystems', 'Species → genes → individuals → populations → communities → ecosystems'], a: 0, why: 'Taxonomic diversity sits at the species level in this chain.' },
    { t: 'mc', topic: 'l3-numbers', q: 'Roughly how many species are known to science (named)?', o: ['1.5–2 million', '100,000–200,000', '3–30 million', 'About 9 million'], a: 0, why: '3–30 million is the estimate of total eukaryotic species. About 9 million is the estimate for insects alone.' },
    { t: 'mc', topic: 'l3-numbers', q: 'Almost what fraction of all named species are beetles?', o: ['About 25%', 'About 5%', 'About 50%', 'About 75%'], a: 0, why: 'More than half of named species are insects, and beetles alone are almost a quarter.' },
    { t: 'mc', topic: 'l3-numbers', q: 'Which best describes new species discoveries today?', o: ['About 10,000 per year, mostly insects and other invertebrates', 'About 100 per year, mostly mammals and birds', 'Almost none; nearly all species are now described', 'About 10,000 per year, mostly vertebrates'], a: 0, why: 'Vertebrates are still found, but only about 1–5 new birds and 1–5 new mammals per year.' },
    { t: 'mc', topic: 'l3-concepts', q: 'Which of these is NOT a commonly used species concept?', o: ['Dichotomous species concept', 'Evolutionary species concept', 'Biological species concept', 'Morphological species concept'], a: 0, why: 'The “dichotomous species concept” doesn’t exist.' },
    { t: 'mc', topic: 'l3-concepts', q: 'The coywolf and the zorse best illustrate a problem with which species concept?', o: ['Biological: how much interbreeding is enough to call populations one species?', 'Morphological: similar-looking animals are grouped together', 'Evolutionary: different genetic markers give different trees', 'Ecological: species with the same niche must be one species'], a: 0, why: 'Hybrids show that distinct-looking groups can still interbreed.' },
    { t: 'mc', topic: 'l3-concepts', q: 'For the same frog populations, trees built from mtDNA and from an electrophoretic marker disagree. This shows a problem with which concept?', o: ['Evolutionary/phylogenetic', 'Biological', 'Morphological', 'None; markers always agree when done correctly'], a: 0, why: 'Lineages inferred from different genes can differ, so where a lineage begins depends on the data.' },
    { t: 'mc', topic: 'l3-concepts', q: 'Since 2021, how does the IUCN Red List treat African elephants?', o: ['As two species, savanna (endangered) and forest (critically endangered), for three elephant species in total', 'As one African species, for two elephant species in total', 'As three African species, for four in total', 'As subspecies of the Asian elephant'], a: 0, why: 'This is the “where do you draw the line?” problem of the evolutionary species concept.' },
    { t: 'mc', topic: 'l3-concepts', q: 'Why do conservation biologists care so much about how we define a species?', o: ['Laws are written and management is assessed at the species level', 'Species are the only level at which genetic diversity exists', 'The ESA gives a precise legal definition that must be matched', 'Species definitions determine ecosystem boundaries'], a: 0, why: 'The ESA doesn’t define “species,” which is why George & Mayden suggest a hierarchy of concepts.' },
    { t: 'mc', topic: 'l3-evidence', q: 'Which would be the LEAST convincing evidence that Tursiops australis is a separate species?', o: ['The population is spatially separated from other dolphins', 'Its mitochondrial DNA differs from other dolphins', 'Its skull shape differs from other dolphins', 'Its tooth count differs from other dolphins'], a: 0, why: 'The other three (plus body size) were sections of the paper that named the species. Geographic separation alone doesn’t show distinctness.' },
    { t: 'mc', topic: 'l3-tools', q: 'DNA barcoding revealed that the skipper butterfly Astraptes fulgerator is…', o: ['Ten cryptic species', 'A hybrid of two species', 'Identical to a common European skipper', 'Extinct in the wild'], a: 0, why: 'Hebert et al. 2004, “Ten species in one.”' },
    { t: 'mc', topic: 'l3-tools', q: 'Environmental DNA (eDNA) lets researchers…', o: ['Detect which species are present from stray DNA collected in the environment', 'Clone extinct species from museum specimens', 'Measure the evenness of a community', 'Estimate the age of an ecosystem'], a: 0, why: 'A water or soil sample can reveal species that are never seen.' },
    { t: 'mc', topic: 'l3-richness', q: 'Field C has 5 butterfly species (fully surveyed). Field D shows 4, but only its lower half was sampled. What can you conclude?', o: ['Nothing reliable; richness is very sensitive to sampling effort', 'Field C is more diverse', 'Field D is more diverse because it has fewer species per area', 'The fields are equally diverse'], a: 0, why: 'Unequal effort makes richness comparisons unreliable. Fully surveyed, Field D actually had 6 species.' },
    { t: 'mc', topic: 'l3-richness', q: 'What is rarefaction used for?', o: ['Standardizing sampling effort to compare sites sampled with different effort', 'Estimating the number of rare species in a region', 'Comparing samples collected with traps against samples from sweep nets', 'Removing rare species from a dataset'], a: 0, why: 'Rarefaction can’t fix differences in sampling method, only in amount of effort.' },
    { t: 'mc', topic: 'l3-richness', q: 'A species accumulation curve plots…', o: ['Number of species found against cumulative sampling effort', 'Number of individuals against area', 'Extinction rate against time', 'Abundance of each species against rank'], a: 0, why: 'Effort can be m², traps, days or individuals. The curve rises, then flattens toward an asymptote.' },
    { t: 'recall', topic: 'l3-concepts', q: 'Define the three main species concepts and give one problem or example for each.', model: 'Morphological: grouped by similar morphology and physiology. Problem: arbitrary, and look-alikes can hide distinct species.<br>Biological: individuals that interbreed in the wild to produce viable, fertile offspring. Problems: how much interbreeding is enough (coywolf, zorse), and interbreeding is hard to observe.<br>Evolutionary/phylogenetic: a distinct evolutionary lineage based on average genetic relatedness. Problems: different markers give different trees (frogs), and where to draw lines (1, 2 or 3 elephant species).', points: ['Morphological = similar form/physiology', 'Biological = interbreed in the wild, producing viable fertile offspring', 'Evolutionary = distinct lineage by genetic relatedness', 'A valid problem or example for at least two of the concepts'] },
    { t: 'recall', topic: 'l3-richness', q: 'Teams in a grazing experiment each measured pollinator richness in a different field. Why is comparing their numbers hard, and what tools help?', model: 'Richness is very sensitive to sampling effort: more area, time or traps finds more species. Comparisons only work if methods are exactly the same. Species accumulation curves show how richness grows with effort, and rarefaction compares sites at the same effort, though it can’t fix different methods such as traps vs. sweep nets.', points: ['Richness depends strongly on sampling effort', 'Methods and effort must be identical to compare', 'Accumulation curves / rarefaction standardize effort', 'Rarefaction can’t fix different sampling methods'] },
    { t: 'recall', topic: 'l3-evidence', q: 'What lines of evidence were used to name Tursiops australis, and is its status settled?', model: 'Mitochondrial DNA, body size, skull shape and tooth count. It isn’t settled: a 2020 study of skulls argues it should not be a separate species.', points: ['Genetic evidence (mtDNA)', 'Morphological evidence (body size, skull shape, tooth count)', 'Still debated (2020 skull study disagrees)'] }
  ]
});
