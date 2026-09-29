window.CB_DATA.lectures.push({
  id: 'l6',
  num: 6,
  title: 'Extinction and de-extinction',
  short: 'Extinction & de-extinction',
  reading: 'McCauley et al. 2017; textbook Box 8.2',
  blurb: 'Extinction rates in long-term context, whether we are in a sixth mass extinction, the Endangered Species Act, what biodiversity loss does to ecosystems, and three ways to “reverse” extinction.',
  flags: [
    { kind: 'know', text: 'The ESA is best structured to protect vertebrate animals. It protects distinct populations of animals but not of plants or invertebrates, bans all “take” of listed animals on private land but only “malicious damage” to listed plants, and invertebrates are badly underrepresented.' },
    { kind: 'skip', text: 'You don’t need to memorize the finer legal details of the ESA, such as the exact wording of the five listing criteria.' },
    { kind: 'know', text: 'The three de-extinction options: what each does, whether it restores genetic diversity, and whether it truly reverses an extinction.' }
  ],
  sections: [
    {
      id: 'l6-context',
      title: 'Extinction rates in long-term context',
      html: `
<p>Status is uncertain for many species, but the longer a species goes unseen, the more confident we become that it’s extinct.</p>
<ul class="keylist">
  <li><strong>Recorded extinctions:</strong> about 1,359 during the Holocene (the ~11,700 years since the last ice age), and about 786 since 1500 CE. Birds and mammals dominate the older records.</li>
  <li><strong>A 2025 update</strong> (Proc. R. Soc. B): <strong>most recorded extinctions happened in the 19th and 20th centuries</strong>. <strong>Habitat loss is the biggest current “threat,”</strong> while <strong>invasive species were a big “cause”</strong> of past extinctions.</li>
  <li><strong>Fossil record:</strong> simple species (bivalve mollusks, plankton) last about <strong>10 million years</strong> on average before extinction. Mammal species tend not to persist more than <strong>3 million years</strong>.</li>
  <li><strong>Recent extinction rates are far above background rates.</strong> Speciation rates are probably also up, but much less than extinction rates.</li>
</ul>`,
      recall: [
        ['According to the 2025 analysis, what is the biggest current threat, and what was a big cause of past extinctions?', 'Habitat loss is the biggest current threat. Invasive species were a big cause of recorded extinctions.'],
        ['How long do species typically last in the fossil record?', 'Simple species such as bivalves and plankton: about 10 million years. Mammals: usually no more than about 3 million years.'],
        ['In which centuries did most recorded extinctions occur?', 'The 19th and 20th centuries.']
      ]
    },
    {
      id: 'l6-mass',
      title: 'Are we in a sixth mass extinction?',
      html: `
<p>Each of the <strong>Big Five</strong> mass extinctions (Ordovician, Devonian, Permian, Triassic, Cretaceous) caused the <strong>loss of more than 75% of species</strong>.</p>
<ul class="keylist">
  <li>Confirmed extinctions in the last 500 years are a small percentage of most groups. Adding currently <strong>threatened</strong> species raises the numbers a lot.</li>
  <li>Box 8.2: terrestrial amphibian, bird and mammal extinctions could reach the <strong>75% threshold within 240–540 years</strong> at current rates.</li>
  <li>The current rate isn’t known precisely, but it may be <strong>up to 1,000 times higher</strong> than the long-term average.</li>
</ul>
<p class="callout"><strong>The instructor’s interpretation:</strong> we have <strong>not yet experienced</strong> a mass extinction, but we <strong>could be on track</strong> for one over time.</p>`,
      recall: [
        ['What defines each of the Big Five mass extinctions?', 'The loss of more than 75% of species.'],
        ['Are we in a sixth mass extinction, according to the instructor?', 'Not yet, but we could be on track for one. Rates may be up to 1,000× background, and vertebrate losses could reach 75% within 240–540 years.']
      ]
    },
    {
      id: 'l6-esa',
      title: 'The Endangered Species Act (1973)',
      html: `
<ul class="keylist">
  <li>A <strong>US federal law</strong>, managed by the <strong>US Fish &amp; Wildlife Service</strong> and the <strong>National Marine Fisheries Service</strong>.</li>
  <li>Designed to protect critically imperiled species from extinction as a “consequence of economic growth and development untempered by adequate concern and conservation.”</li>
</ul>
<h4>What it actually does</h4>
<ul>
  <li>The <strong>federal government must avoid adverse impacts on critical habitat</strong>.</li>
  <li>It <strong>prohibits all “take” of listed animals on private land</strong>, but only <strong>“malicious damage” to listed plants</strong>.</li>
  <li>It protects <strong>“distinct populations” of animals, but not of plants or invertebrates</strong>.</li>
</ul>
<p class="callout"><strong>So the ESA is best structured to protect vertebrate animals.</strong> In the lecture’s comparison, invertebrates are about 84% of threatened and endangered species (IUCN-based) but only about 16% of ESA-listed species, while plants are 57% of the ESA list.</p>
<details class="more"><summary>Five listing criteria (for reference, not memorization)</summary>
<ol><li>Present or threatened destruction, modification or curtailment of habitat or range.</li><li>Overutilization for commercial, recreational, scientific or educational purposes.</li><li>Decline due to disease or predation.</li><li>Inadequate existing regulatory mechanisms.</li><li>Other natural or manmade factors affecting continued existence.</li></ol></details>
<h4>Successes and shortcomings</h4>
<div class="compare">
  <div class="compare-col">
    <p class="eyebrow">Successes</p>
    <ul>
      <li>Prevented about <strong>227 extinctions</strong> (Taylor et al. 2005).</li>
      <li>Bald eagle recovery.</li>
      <li><strong>Manatee</strong> downgraded from Endangered to Threatened (~9,790 estimated today). A 2025 proposal would split it into the <strong>Florida manatee (threatened)</strong> and the <strong>Antillean manatee (endangered)</strong>. They look alike and can only be told apart by skeletal measurements or genetics, but their ranges, threats and needs differ. This is a species-concept question from Lecture 3 with legal consequences.</li>
    </ul>
  </div>
  <div class="compare-col">
    <p class="eyebrow">Shortcomings</p>
    <ul>
      <li><strong>42 species went extinct while being considered</strong> for listing.</li>
      <li>Listing takes <strong>more than 10 years</strong> on average.</li>
      <li><strong>40–90% of US species on the IUCN Red List are not listed</strong> under the ESA (Harris et al. 2012).</li>
    </ul>
  </div>
</div>`,
      recall: [
        ['Which agencies manage the ESA?', 'The US Fish & Wildlife Service and the National Marine Fisheries Service.'],
        ['Why is the ESA best structured to protect vertebrates?', 'It protects distinct populations of animals but not plants or invertebrates, bans all take of listed animals on private land but only malicious damage to plants, and invertebrates are badly underrepresented.'],
        ['Name three shortcomings of the ESA.', '42 species went extinct while under consideration; listing takes more than 10 years on average; 40–90% of US species on the IUCN Red List aren’t ESA-listed.']
      ]
    },
    {
      id: 'l6-function',
      title: 'Functional consequences of biodiversity loss',
      html: `
<p>Leopold: “To keep every cog and wheel is the first precaution of intelligent tinkering.” What is biodiversity good for?</p>
<ul>
  <li>It is a source of <strong>provisioning services</strong>, such as new medicines.</li>
  <li>It drives <strong>supporting services</strong>, which means <strong>ecosystem function</strong>.</li>
</ul>
<p><strong>Ecosystem functions:</strong> primary productivity, soil fertility, water quality and availability, <strong>resistance</strong> to disturbance, and speed of recovery (<strong>resilience</strong>).</p>
<h4>Cedar Creek biodiversity experiment (Minnesota)</h4>
<p>The plots differ in <strong>number of species but not number of individuals</strong>. <strong>Productivity</strong> (plant cover) <strong>increases with diversity</strong> and levels off at high richness (Tilman et al. 1996). The <strong>capacity to resist disturbance</strong> (drought) also increases with diversity (Tilman et al. 1994).</p>
<h4>What lost species did</h4>
<ul class="keylist">
  <li><strong>Passenger pigeon:</strong> dense nesting broke branches and opened light gaps for pioneer trees; vast flocks moved nutrients across the landscape; nesting colonies dumped huge nutrient loads and changed fire regimes; heavy seed predation and long-distance dispersal shaped forest composition. Competition with other seed eaters such as rodents affected disease dynamics. <strong>Its extinction is hypothesized to have increased Lyme disease risk</strong>, with more acorns left for mice, which host Lyme-carrying ticks.</li>
  <li><strong>Mammoth:</strong> trampling sped up leaf-litter decay and nutrient cycling; migrating herds moved nutrients; packing down snow cooled the ground; heavy animals crushed moss and let palatable grasses and herbs grow.</li>
</ul>`,
      recall: [
        ['List four ecosystem functions.', 'Any four of: primary productivity, soil fertility, water quality and availability, resistance to disturbance, resilience (speed of recovery).'],
        ['What did Tilman’s Cedar Creek experiments show?', 'With the same number of individuals, plots with more species were more productive (saturating) and more resistant to drought.'],
        ['What change is hypothesized to follow the passenger pigeon’s extinction?', 'Increased Lyme disease risk: without pigeons competing for acorns, rodent hosts of Lyme-carrying ticks increased.']
      ]
    },
    {
      id: 'l6-rewild',
      title: 'Pleistocene Park and choosing what to revive',
      html: `
<p><strong>The problem:</strong> the world is warming and Arctic permafrost is melting, causing disease outbreaks, giant craters and flooding. Decomposing organic matter releases methane and CO₂, which could cause runaway climate change.</p>
<p><strong>The idea (Pleistocene Park, Siberia):</strong> <strong>grassland reflects more heat and stays cooler</strong> than forest or shrub. Large herbivores can turn the land back into grassland, and <strong>trampling snow lets the ground freeze more deeply</strong> in winter (Beer et al. 2020). Yaks, bison, horses and other cold-tolerant grazers have had some success.</p>
<p>But to control trees you need something larger, with the ecological role of an elephant that can survive a Siberian winter. That leads to the idea of using <strong>extinct</strong> large herbivores such as the mammoth or the “Siberian unicorn.”</p>
<h4>Which species should we revive? (McCauley et al. 2017)</h4>
<p>They propose <strong>focusing on function</strong>:</p>
<ol>
  <li>Prefer species with <strong>low functional redundancy</strong>, meaning no living species fills their role.</li>
  <li>Prefer species that <strong>went extinct recently</strong>.</li>
  <li>Prefer species that can be <strong>returned to functionally meaningful abundance</strong>.</li>
</ol>`,
      recall: [
        ['Why would large herbivores help keep Siberian permafrost frozen?', 'They maintain grassland, which reflects more heat, and trampling snow lets the ground freeze deeper in winter.'],
        ['What are McCauley et al.’s three criteria for choosing de-extinction candidates?', 'Low functional redundancy; extinct recently; can be restored to functionally meaningful abundance.']
      ]
    },
    {
      id: 'l6-methods',
      title: 'Three ways to “reverse” extinction',
      html: `
<div class="table-wrap"><table class="methods">
  <thead><tr><th>Option</th><th>How</th><th>Adds lost genetic diversity?</th><th>Truly reverses extinction?</th><th>Examples</th></tr></thead>
  <tbody>
    <tr><td><strong>1. Breed something similar from existing DNA</strong> (“back-breeding”)</td><td>Selectively breed living relatives, or borrow genes from other living species (CRISPR), to recreate the lost form or function.</td><td class="no">No</td><td class="no">No, but it can <strong>replace a lost ecological function</strong>. It definitely works.</td><td><strong>Aurochs</strong> (extinct 1600s): cross primitive cattle breeds for a wild grazer that keeps grasslands open, prioritizing function over genotype.</td></tr>
    <tr><td><strong>2. Mix existing DNA with DNA from the extinct organism</strong></td><td>Edit extinct-species genes into a living relative’s genome.</td><td class="yes">Yes</td><td class="no">No</td><td><strong>Mammoth</strong> (Colossal): Asian elephant plus mammoth genes for hair, small ears and fat, carried by an African elephant surrogate. Will it still be an Asian elephant? <strong>“Dire wolves”</strong> (2025): a grey wolf clone with 20 dire-wolf gene edits, “optimistically 1/100,000th dire wolf.” <strong>Passenger pigeon</strong>: editing band-tailed pigeon genes.</td></tr>
    <tr><td><strong>3. Insert the extinct genome into a modern surrogate</strong> (cloning)</td><td>Clone from preserved cells, using existing technology (Dolly the sheep).</td><td class="yes">Yes</td><td class="yes">Yes, the only option that does</td><td><strong>Pyrenean ibex</strong> (extinct 2000): one clone born in 2003 died almost immediately from a lung defect. <strong>Gastric-brooding frog</strong> (extinct 1983): embryos died within 24 hours; the project seems abandoned. <strong>Mammoth</strong> (~10,000 yr): is there enough intact DNA, and a compatible surrogate?</td></tr>
  </tbody>
</table></div>
<p><strong>Challenges for options 2 and 3:</strong> can we recover enough intact DNA, identify the relevant genes, and find a modern surrogate that works? Cloning will probably work someday with good DNA. With ancient DNA it is unclear.</p>`,
      recall: [
        ['Which de-extinction option truly reverses an extinction, and why?', 'Option 3, cloning the extinct genome into a surrogate. The offspring carries the extinct species’ own genome.'],
        ['What can back-breeding (Option 1) achieve, and what can’t it?', 'It can restore a lost ecological function (aurochs proxy). It adds no lost genetic diversity and doesn’t truly reverse extinction.'],
        ['Is Colossal’s 2025 “dire wolf” a reversed extinction?', 'No. It is a grey wolf clone with about 20 dire-wolf gene edits, “optimistically 1/100,000th dire wolf.”']
      ]
    }
  ],
  exam: [
    { t: 'mc', topic: 'l6-context', q: 'A 2025 analysis of recent extinctions concluded that…', o: ['Habitat loss is the biggest current threat, while invasive species were a big cause of past extinctions', 'Climate change caused most recorded extinctions', 'Overexploitation is the only significant threat', 'Most recorded extinctions happened before 1500 CE'], a: 0, why: 'Most recorded extinctions occurred in the 19th and 20th centuries.' },
    { t: 'mc', topic: 'l6-context', q: 'In the fossil record, how long do mammal species typically persist?', o: ['Usually no more than about 3 million years', 'About 10 million years', 'About 100,000 years', 'More than 50 million years'], a: 0, why: 'Simple species such as bivalves and plankton average about 10 million years.' },
    { t: 'mc', topic: 'l6-context', q: 'How do recent speciation rates compare with extinction rates?', o: ['Speciation is probably up, but much less than extinction', 'Speciation now exceeds extinction', 'Both are at background levels', 'Speciation has stopped entirely'], a: 0, why: 'Recent extinction rates are far above background, so global diversity falls.' },
    { t: 'mc', topic: 'l6-mass', q: 'Each of the “Big Five” mass extinctions resulted in the loss of…', o: ['More than 75% of species', 'More than 25% of species', 'More than 95% of families', 'About 50% of vertebrates'], a: 0, why: 'That 75% threshold is the benchmark for judging whether we’re in a sixth.' },
    { t: 'mc', topic: 'l6-mass', q: 'What was the instructor’s interpretation of the “sixth mass extinction” question?', o: ['We have not experienced one yet but could be on track for one over time', 'We are already well past the 75% threshold', 'Current rates are at background levels, so there’s no concern', 'Mass extinctions can only be caused by asteroids'], a: 0, why: 'Rates may be up to 1,000× background, and vertebrates could hit 75% losses within 240–540 years.' },
    { t: 'mc', topic: 'l6-esa', q: 'The Endangered Species Act is managed by…', o: ['US Fish & Wildlife Service and National Marine Fisheries Service', 'The IUCN and the EPA', 'The US Forest Service and National Park Service', 'Individual state wildlife agencies only'], a: 0, why: 'The ESA (1973) is US federal law, unlike the non-legislative IUCN Red List.' },
    { t: 'mc', topic: 'l6-esa', q: 'Which group is the ESA best structured to protect?', o: ['Vertebrate animals', 'Flowering plants', 'Pollinating insects', 'It protects all groups equally'], a: 0, why: 'Distinct populations are protected for animals only; all take of animals is banned on private land but only malicious damage to plants; invertebrates are underrepresented.' },
    { t: 'mc', topic: 'l6-esa', q: 'On private land, the ESA…', o: ['Prohibits all “take” of listed animals, but only “malicious damage” to listed plants', 'Prohibits all harm to listed plants and animals equally', 'Does not apply at all', 'Protects plants more strictly than animals'], a: 0, why: 'This asymmetry is part of why plants and invertebrates get weaker protection.' },
    { t: 'mc', topic: 'l6-esa', q: 'Which is a documented shortcoming of the ESA?', o: ['42 species went extinct while being considered for listing', 'No species has ever been removed from the list', 'It prevented zero extinctions', 'It lists more species than the IUCN Red List'], a: 0, why: 'Listing also averages more than 10 years, and 40–90% of US species on the IUCN Red List aren’t ESA-listed. The ESA did prevent about 227 extinctions.' },
    { t: 'mc', topic: 'l6-esa', q: 'The 2025 proposal for West Indian manatees would…', o: ['Split them into the Florida manatee (threatened) and the Antillean manatee (endangered)', 'Remove all manatees from the ESA list', 'Merge manatees with dugongs into one species', 'Uplist all manatees to critically endangered'], a: 0, why: 'The subspecies look alike and are told apart by skeletal measurements or genetics, but their threats and needs differ.' },
    { t: 'mc', topic: 'l6-function', q: 'In the Cedar Creek (Minnesota) experiments, plots differed in number of species but not number of individuals. What happened as diversity increased?', o: ['Productivity and resistance to drought both increased', 'Productivity decreased due to competition', 'Nothing changed, since individuals were held constant', 'Resistance to drought decreased'], a: 0, why: 'Tilman et al. 1994 and 1996. Productivity rises then levels off.' },
    { t: 'mc', topic: 'l6-function', q: 'The passenger pigeon’s extinction is hypothesized to have caused which change in eastern North America?', o: ['Increased Lyme disease risk', 'Decline of eastern gray squirrels', 'Increased nutrient transport', 'Lighter, more open-canopy forests'], a: 0, why: 'Pigeons competed with rodents for seeds. Without them, rodents that host Lyme-carrying ticks increased. Pigeons had opened the canopy and moved nutrients, so losing them did the opposite of options C and D.' },
    { t: 'mc', topic: 'l6-function', q: 'Which of these is NOT one of the ecosystem functions listed in lecture?', o: ['Number of species named by taxonomists', 'Primary productivity', 'Resistance to disturbance', 'Speed of recovery (resilience)'], a: 0, why: 'The functions listed: productivity, soil fertility, water quality/availability, resistance and resilience.' },
    { t: 'mc', topic: 'l6-rewild', q: 'Pleistocene Park uses large herbivores in Siberia mainly to…', o: ['Restore grassland that reflects heat and let the ground freeze deeper, protecting permafrost', 'Produce meat for local communities', 'Increase tree cover to absorb carbon', 'Test cloning technology in the cold'], a: 0, why: 'Grassland stays cooler than forest, and trampled snow insulates less.' },
    { t: 'mc', topic: 'l6-rewild', q: 'Which is NOT one of McCauley et al.’s (2017) criteria for choosing de-extinction candidates?', o: ['Choose the most charismatic species to build public support', 'Choose species with low functional redundancy', 'Choose species that went extinct recently', 'Choose species that can be returned to functionally meaningful abundance'], a: 0, why: 'Their framework is about ecological function, not charisma.' },
    { t: 'mc', topic: 'l6-methods', q: 'Cross-breeding primitive cattle to recreate an aurochs-like wild grazer is an example of which approach?', o: ['Option 1, back-breeding: restores function, adds no lost genetic diversity', 'Option 2, splicing aurochs DNA into cattle', 'Option 3, cloning an aurochs genome into a surrogate', 'Not a de-extinction approach'], a: 0, why: 'The Tauros project prioritizes ecological function over genotype or phenotype match.' },
    { t: 'mc', topic: 'l6-methods', q: 'Which de-extinction approach is the only one that truly reverses an extinction?', o: ['Inserting the extinct genome into a modern surrogate (cloning)', 'Back-breeding from living relatives', 'Mixing extinct DNA into a living relative’s genome', 'Rewilding with ecological proxies'], a: 0, why: 'Cloning recovers the actual genome. It is based on existing technology, but it is unclear whether it works with ancient DNA.' },
    { t: 'mc', topic: 'l6-methods', q: 'Colossal’s 2025 “dire wolves” are best described as…', o: ['Grey wolf clones with about 20 dire-wolf gene edits, “optimistically 1/100,000th dire wolf”', 'Full clones of dire wolves from frozen tissue', 'Hybrids of coyotes and grey wolves', 'Back-bred domestic dogs'], a: 0, why: 'This is closest to Option 2 and doesn’t truly reverse the extinction.' },
    { t: 'mc', topic: 'l6-methods', q: 'What happened when scientists cloned the Pyrenean ibex (extinct in 2000)?', o: ['One animal was born in 2003 but died almost immediately from a lung defect', 'A breeding population was re-established', 'No embryos ever developed', 'The clone turned out to be a domestic goat'], a: 0, why: 'DNA had been collected from Celia, the last of her species. The attempt shows how hard Option 3 is even with good DNA.' },
    { t: 'recall', topic: 'l6-methods', q: 'Compare the three de-extinction options: what each does, whether it restores genetic diversity, whether it truly reverses extinction, and one example of each.', model: 'Option 1, breed something similar from existing DNA (back-breeding/gene borrowing): no genetic diversity restored and no true reversal, but it can replace lost function. Example: aurochs proxy.<br>Option 2, mix extinct DNA into a living relative: restores some lost genetic diversity but no true reversal; needs intact DNA and known genes. Examples: mammoth-edited Asian elephant, 2025 dire wolves, passenger pigeon project.<br>Option 3, insert the extinct genome into a surrogate (cloning): restores genetic diversity and truly reverses extinction, but needs good DNA and a compatible surrogate. Examples: Pyrenean ibex (2003 clone died), gastric-brooding frog.', points: ['Option 1: function only, no genetic diversity, no true reversal', 'Option 2: adds genetic diversity, no true reversal', 'Option 3 (cloning): true reversal', 'A correct example for at least two options'] },
    { t: 'recall', topic: 'l6-esa', q: 'What does the ESA actually do (three main provisions), and what are two of its shortcomings?', model: 'Provisions: the federal government must avoid adverse impacts on critical habitat; all “take” of listed animals is prohibited on private land (plants are protected only from malicious damage); distinct populations of animals, but not plants or invertebrates, can be protected.<br>Shortcomings: 42 species went extinct while being considered; listing takes more than 10 years on average; 40–90% of IUCN-listed US species aren’t ESA-listed; invertebrates are underrepresented.', points: ['Federal agencies must avoid harming critical habitat', 'Take of animals vs. malicious damage of plants on private land', 'Distinct populations protected for animals only', 'At least two valid shortcomings'] },
    { t: 'recall', topic: 'l6-function', q: 'List the ecosystem functions discussed in lecture, and describe what Tilman’s experiments showed about diversity and function.', model: 'Functions: primary productivity, soil fertility, water quality and availability, resistance to disturbance, and resilience (speed of recovery).<br>Tilman’s Cedar Creek experiments held the number of individuals constant and varied species number. Productivity increased with diversity (leveling off at high richness), and so did resistance to drought.', points: ['At least three ecosystem functions', 'Same number of individuals, different number of species', 'Productivity increases with diversity', 'Drought resistance increases with diversity'] },
    { t: 'recall', topic: 'l6-mass', q: 'Are we in a sixth mass extinction? Lay out the evidence the lecture used and the instructor’s conclusion.', model: 'Each of the Big Five lost more than 75% of species. Confirmed extinctions in the last 500 years are still a small percentage of most groups, but current rates may be up to 1,000× background, and counting threatened species, terrestrial amphibians, birds and mammals could hit 75% losses within 240–540 years. Conclusion: we have not had a mass extinction yet, but we could be on track for one.', points: ['Big Five = >75% of species lost', 'Current rates far above background (up to ~1,000×)', 'Threatened species could push losses to 75% within centuries', 'Not yet a mass extinction, but possibly on track'] }
  ]
});
