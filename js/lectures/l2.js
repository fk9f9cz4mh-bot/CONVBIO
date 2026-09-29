window.CB_DATA.lectures.push({
  id: 'l2',
  num: 2,
  title: 'The history of conservation and human impacts',
  short: 'History & human impacts',
  reading: 'Textbook: parts of Ch. 2 and Ch. 6',
  blurb: 'What conservation biology is, the three historical ethics that still divide the field, ecosystem services, and how far human impacts reach.',
  flags: [
    { kind: 'skip', text: 'You don’t need dates or details of early conservation history (Song dynasty forests, the Iroquois seventh-generation principle, Norman royal forests). Know that conservation practices are very old and found in cultures worldwide.' },
    { kind: 'know', text: 'The three ethics (preservationist, resource conservation, land ethic): who, what idea, and what legacy.' },
    { kind: 'know', text: 'The four ecosystem service categories. You should be able to sort any example into one of them.' },
    { kind: 'note', text: 'On the Nature Conservancy and Dow question, the instructor said any of the answers could be reasonable. Expect to explain the trade-off, not to pick a “right” side.' }
  ],
  sections: [
    {
      id: 'l2-what',
      title: 'What conservation biology is (and isn’t)',
      html: `
<p>Conservation biology is:</p>
<ul class="keylist">
  <li><strong>Concerned with detecting problems.</strong> Example: long-term monitoring data showing fish populations trending down.</li>
  <li><strong>Concerned with evaluating solutions.</strong> Example: <em>Structured Decision Making</em> (Box 2.3). A trigger starts the loop: define the <b>problem</b>, set <b>objectives</b>, list <b>alternatives</b>, predict <b>consequences</b>, weigh <b>trade-offs</b>, then <b>decide and act</b>. Laws, policies, values and uncertainty all feed in.</li>
  <li><strong>A multidisciplinary science.</strong> It draws on the biological sciences (population biology, ecology, taxonomy, genetics), resource management (forestry, fisheries, wildlife), the social sciences (psychology, sociology, environmental economics, geography) and the humanities (history, law, politics, philosophy, the arts).</li>
</ul>
<p class="callout warn"><strong>It is NOT an exact science.</strong> Ecological and evolutionary data are messy, and it is a <strong>crisis discipline</strong>: decisions have to be made quickly, with limited information.</p>
<h4>Triage: where effort goes</h4>
<div class="table-wrap"><table>
  <thead><tr><th>Category</th><th>Situation</th><th>Priority</th></tr></thead>
  <tbody>
    <tr><td>Beyond urgency</td><td>Dying anyway</td><td>Low</td></tr>
    <tr class="hl"><td>Absolute urgency</td><td>Can be saved with action</td><td><strong>Focus of much conservation biology</strong></td></tr>
    <tr><td>Relative urgency</td><td>Will live anyway</td><td>Low</td></tr>
  </tbody>
</table></div>`,
      recall: [
        ['Of “detects problems / evaluates solutions / multidisciplinary / exact science,” which does NOT describe conservation biology, and why?', 'An exact science. Ecological data are messy and it is a crisis discipline: decisions are made quickly with limited information.'],
        ['In conservation triage, which group gets the most attention?', 'The “absolute urgency” group: species or systems that can be saved if we act. Ones dying anyway or fine anyway get less.'],
        ['What are the steps of Structured Decision Making?', 'Problem → objectives → alternatives → consequences → trade-offs/optimization → decide and take action, then repeat.']
      ]
    },
    {
      id: 'l2-history',
      title: 'Conservation is old: roots before 1850',
      html: `
<p><strong>Why study the history?</strong> We are not the first generation worried about our effects on the planet, and <strong>today’s conflicts reflect very old divisions</strong> in how people think about nature.</p>
<p>Clicker answer: of the examples offered, the earliest formal conservation was the <strong>sacred forests of the Song dynasty in China (~960 CE)</strong>. It came before Norman royal forests (~1100), the Iroquois seventh-generation principle (1142) and the paper “What is conservation biology?” (1985). The take-away is that conservation and sustainability practices are <em>very old and appear in cultures worldwide</em>.</p>
<ul class="keylist">
  <li><strong>The Maya</strong> practiced forest conservation about 1,500 years ago (Lentz &amp; Hockaday 2009), and the civilization still eventually collapsed.</li>
  <li><strong>Religious ideas of stewardship.</strong> Exodus 23:10–11 says to leave land fallow in the seventh year. Tertullian (~200 CE) wrote “We are burdensome to the world, the resources are scarcely adequate for us.” Sacred groves were protected in India, West Africa (Osun-Osogbo, Nigeria), Europe and Greece.</li>
  <li><strong>Royal hunting grounds.</strong> The royal hunt was central to political cultures from the Middle East to China. By 1200, Royal Forests covered almost a quarter of England, kept for hunting and for naval oak.</li>
</ul>`,
      recall: [
        ['Why does the history of conservation matter for today’s debates?', 'We are not the first generation concerned about our impacts, and modern conflicts reflect very old divisions in how people think about nature.'],
        ['Give two kinds of conservation practiced before 1850.', 'Religious stewardship (fallow years, sacred groves) and enclosure of royal hunting grounds (Royal Forests of England). The Maya also managed forests about 1,500 years ago.']
      ]
    },
    {
      id: 'l2-ethics',
      title: 'Three ethics, 1850–1950',
      html: `
<div class="table-wrap"><table class="ethics">
  <thead><tr><th>Ethic</th><th>Key people</th><th>Core idea</th><th>Legacy</th></tr></thead>
  <tbody>
    <tr><td><strong>Romantic–transcendental</strong> (preservationist)</td><td>Thoreau (<em>Walden</em>, 1854), Emerson, <strong>John Muir</strong></td><td>Preserve nature for its <strong>spiritual and aesthetic value</strong>. “In wilderness is the preservation of the world.” “Everybody needs beauty as well as bread…”</td><td><strong>US National Parks</strong> (Yellowstone 1872, Yosemite 1890). Muir founded the Sierra Club (1892).</td></tr>
    <tr><td><strong>Resource conservation</strong></td><td><strong>Gifford Pinchot</strong>, first Chief of the US Forest Service (1905–1910). Teddy Roosevelt. Hunters.</td><td><strong>“Wise use”</strong> (sustainable use): “the greatest good of the greatest number for the longest time.”</td><td><strong>US National Forests</strong></td></tr>
    <tr><td><strong>Evolutionary–ecological land ethic</strong></td><td><strong>Aldo Leopold</strong>, <em>A Sand County Almanac</em> (1949)</td><td>Humans are part of a complex ecological community. “A thing is right when it tends to preserve the integrity, stability, and beauty of the biotic community.” “The first rule of intelligent tinkering is to save all the pieces.”</td><td>Brings ecology and evolution into conservation</td></tr>
  </tbody>
</table></div>
<p>Hunters know you can’t hunt without animals, and animals need habitat. Many hunters, Teddy Roosevelt included, became strong conservation advocates.</p>
<h4>From science to public policy</h4>
<p>By the mid-1900s science was increasingly applied to conservation, but conservation still wasn’t a major part of public policy <strong>because the public didn’t perceive a problem</strong>. That changed after synthetic pesticides were adopted in the 1950s. <strong>DDT biomagnifies</strong>: it becomes more concentrated at each step up the food chain. <strong>Rachel Carson’s <em>Silent Spring</em> (1962)</strong> made the contamination of the environment a public issue.</p>`,
      recall: [
        ['Who said “the greatest good of the greatest number for the longest time,” and which ethic is it?', 'Gifford Pinchot, the resource conservation (“wise use”) ethic. Its legacy is the US National Forests.'],
        ['Which ethic produced the US National Parks, and who are its key figures?', 'The romantic–transcendental (preservationist) ethic: Muir, Thoreau and Emerson. It values nature spiritually.'],
        ['What is Leopold’s land ethic in one sentence?', 'Humans are part of the biotic community, and an action is right when it preserves that community’s integrity, stability and beauty.'],
        ['What pushed conservation into public policy in the mid-1900s?', 'The public finally perceived a problem: synthetic pesticides such as DDT biomagnifying up food chains, publicized by Carson’s Silent Spring (1962).']
      ]
    },
    {
      id: 'l2-controversy',
      title: 'Current controversies: leave it alone, or use it wisely?',
      html: `
${CBFig.axes2x2()}
<div class="compare">
  <div class="compare-col">
    <p class="eyebrow">Preservation side</p>
    <h4>Soulé, “What is conservation biology?” (1985)</h4>
    <ul>
      <li>Natural communities are products of coevolution.</li>
      <li>Ecological processes have thresholds.</li>
      <li>Diversity, ecological complexity and evolution are good.</li>
      <li><strong>Biotic diversity has intrinsic value</strong>, regardless of its usefulness to people.</li>
    </ul>
    <p class="muted">Aligned NGOs: Sierra Club, National Audubon Society</p>
  </div>
  <div class="compare-col">
    <p class="eyebrow">Sustainable-use side</p>
    <h4>Kareiva &amp; Marvier, “What is conservation science?” (2012)</h4>
    <ul>
      <li><strong>Pristine nature, untouched by humans, no longer exists.</strong></li>
      <li>The fate of nature and people are deeply intertwined, and nature can be surprisingly resilient.</li>
      <li>Conservation must happen <strong>within human-altered landscapes</strong> and needs people’s support.</li>
      <li>Conservationists <strong>must work with corporations</strong> and pursue conservation and economic goals together, while respecting human rights and equity.</li>
    </ul>
    <p class="muted">Aligned NGOs: The Nature Conservancy, Ducks Unlimited, Trout Unlimited</p>
  </div>
</div>
<p>The underlying split is <strong>preservation (leave it alone)</strong> versus <strong>conservation (use it wisely)</strong>, and it is still a deep divide in conservation science.</p>
<h4>Case: The Nature Conservancy (TNC)</h4>
<ul class="timeline">
  <li><b>1915</b> The Ecological Society of America forms. Members argue over whether it should only support research or also work to preserve natural areas.</li>
  <li><b>1950</b> A small group breaks off to form TNC and take “direct action” to save threatened natural areas.</li>
  <li><b>1955</b> TNC’s first land acquisition. Buying land stays its core tool.</li>
  <li><b>Now</b> TNC works closely with business, including managing private working forests for sustainable products. It took <strong>$10 million from Dow Chemical</strong> to factor the value of nature into Dow’s business decisions.</li>
</ul>
<p class="callout">Was TNC right to take Dow’s money? Critics say it distracts from protecting land, greenwashes a polluter, or corrupts. Supporters say you have to engage the most problematic industries, and small gains are still gains. <strong>The instructor said any of these could be a reasonable answer.</strong></p>`,
      recall: [
        ['What two axes organize current conservation debates?', 'Preservation ethic ↔ sustainable-use ethic, and focus on pristine systems ↔ focus on human-dominated systems. Most conservation biologists fall on the diagonal between them.'],
        ['Soulé (1985) vs. Kareiva & Marvier (2012): which says biodiversity has intrinsic value, and which says pristine nature no longer exists?', 'Soulé: intrinsic value (preservation side). Kareiva & Marvier: pristine nature is gone, so work in human-altered landscapes and with corporations (sustainable-use side).'],
        ['How did TNC begin, and how has it changed?', 'It split from the Ecological Society of America in 1950 to take direct action, buying land from 1955. It now works with businesses, including a $10M partnership with Dow Chemical.']
      ]
    },
    {
      id: 'l2-services',
      title: 'Ecosystem services',
      html: `
<p><strong>Ecosystem services</strong> are the benefits people obtain from ecosystems. The Millennium Ecosystem Assessment sorts them into four categories:</p>
<div class="svc-grid">
  <div class="svc"><p class="eyebrow">Provisioning</p><p><strong>Things we harvest.</strong> Food, fresh water, timber and raw materials, medicines, biotechnology.</p><p class="ex">Picking blackberries to make pies</p></div>
  <div class="svc"><p class="eyebrow">Regulating</p><p><strong>Control of natural processes.</strong> Air and water purification, climate regulation, erosion control, pest and disease control, pollination, disaster mitigation.</p><p class="ex">Mangroves shielding villages from storms (about 1 life saved per 68 ha of mangrove)</p></div>
  <div class="svc"><p class="eyebrow">Cultural</p><p><strong>Non-material benefits.</strong> Recreation, ecotourism, health, spiritual and aesthetic value, education, cultural heritage.</p><p class="ex">Birdwatching in Costa Rica; wilderness nourishing the soul</p></div>
  <div class="svc wide"><p class="eyebrow">Supporting</p><p><strong>Processes that make all the other services possible</strong> and benefit us only indirectly: resource capture, biomass production, decomposition, nutrient recycling.</p><p class="ex">Rain falling and helping crops grow (as classified in the Lecture 3 review)</p></div>
</div>
<p class="callout"><strong>Trap:</strong> harvesting solar energy with panels is <strong>not</strong> an ecosystem service, because it doesn’t require an ecosystem.</p>
<h4>Why the framework is debated</h4>
<ul>
  <li>It is increasingly common and very useful.</li>
  <li>It is controversial because it <strong>encourages thinking in trade-offs</strong> between services.</li>
  <li>It <strong>deals poorly with things that can’t be valued</strong>, or that have infinite value.</li>
</ul>
<p>On the ethics axis, the preservation end tends to focus on <strong>biodiversity</strong> and the sustainable-use end on <strong>ecosystem services</strong>.</p>`,
      recall: [
        ['Name the four ecosystem service categories and give one example of each.', 'Provisioning (food, timber, water); regulating (mangrove storm protection, pollination); cultural (birdwatching, spiritual value); supporting (nutrient cycling, decomposition).'],
        ['Why is solar power not an ecosystem service?', 'Capturing sunlight with panels doesn’t require an ecosystem. Services are benefits that come from ecosystems.'],
        ['Give two criticisms of the ecosystem-services framework.', 'It encourages trading one service off against another, and it handles poorly things that can’t be priced or have infinite value.']
      ]
    },
    {
      id: 'l2-impacts',
      title: 'How far human impacts reach',
      html: `
<p>Humans occupy a tiny slice of Earth’s history but have caused large changes to its ecosystems. Much of Earth’s capacity now supports people and domesticated animals.</p>
${CBFig.biomassBars()}
<ul class="keylist">
  <li><strong>Human impacts are old.</strong> The <strong>Pleistocene overkill hypothesis</strong> says hunting by prehistoric humans caused the extinction of large-bodied animals (giant sloths, sabre-toothed cats, mammoths) across whole continents. A 2023 study linked late-Quaternary megafauna extinctions to <strong>human range expansion, not climate change</strong>.</li>
  <li><strong>Pressure is still increasing</strong>, and impacts occur pretty much everywhere. Night-time satellite images of Earth show the lights.</li>
  <li><strong>Habitat loss is high in many biomes.</strong> The most converted (Mediterranean woodlands, temperate forest-steppe, temperate broadleaf forest) have lost more than half their area. Boreal forest and tundra have lost the least.</li>
  <li><strong>The oceans:</strong> about <strong>80% of fish stocks</strong> are fished as hard as they can sustain, or harder (FAO 2026).</li>
</ul>
<p>What determines how intense human impacts are? That question sets up the IPAT equation in Lecture 5.</p>
<p class="callout">Lecture summary: questions about why and how to conserve are old and persistent, and there is no single right answer. The instructor’s view is that the scale of human impacts means we can’t ignore conservation opportunities in human-dominated landscapes.</p>`,
      recall: [
        ['Rank Earth’s mammals by biomass: humans, domesticated animals, wild marine, wild land.', 'Domesticated (~630 Mt) > humans (~390 Mt) > wild marine (~40 Mt) > wild land (~20 Mt).'],
        ['What is the Pleistocene overkill hypothesis, and what did the 2023 study find?', 'Prehistoric human hunting drove large animals extinct across continents. The 2023 study tied megafauna extinctions to human range expansion rather than climate change.'],
        ['About what share of fish stocks are fished at or beyond their sustainable limit?', 'About 80%.']
      ]
    }
  ],
  exam: [
    { t: 'mc', topic: 'l2-what', q: 'Which of the following does NOT describe conservation biology?', o: ['An exact science', 'Concerned with detecting problems', 'Concerned with evaluating solutions', 'A multidisciplinary science'], a: 0, why: 'Ecological and evolutionary data are messy, and conservation is a crisis discipline that must decide quickly with limited information.' },
    { t: 'mc', topic: 'l2-what', q: 'Calling conservation biology a “crisis discipline” means that…', o: ['Decisions often must be made quickly with limited information', 'It only studies species that are already extinct', 'It ignores the social sciences to move faster', 'Its predictions are exact once enough data are collected'], a: 0, why: 'Waiting for complete data isn’t an option, so conservation biologists act under uncertainty.' },
    { t: 'mc', topic: 'l2-what', q: 'In conservation triage, much of conservation biology focuses on which group?', o: ['Species that can be saved if we act (“absolute urgency”)', 'Species that are dying regardless of action (“beyond urgency”)', 'Species that will persist without help (“relative urgency”)', 'All three equally'], a: 0, why: 'Limited resources go where action changes the outcome.' },
    { t: 'mc', topic: 'l2-history', q: 'Based on the reading, which is the earliest example of formal biological conservation among these?', o: ['Sacred forests of the Song dynasty in China', 'The seventh-generation principle of the Iroquois Confederacy', 'Royal forests protected by the Normans in England', 'Publication of “What is conservation biology?”'], a: 0, why: 'Song dynasty forests date to about 960 CE. The dates themselves aren’t testable; the point is that conservation practices are very old and global.' },
    { t: 'mc', topic: 'l2-ethics', q: '“The greatest good of the greatest number for the longest time” expresses which ethic?', o: ['Resource conservation ethic (Pinchot)', 'Romantic–transcendental ethic (Muir)', 'Evolutionary–ecological land ethic (Leopold)', 'Intrinsic-value ethic (Soulé)'], a: 0, why: 'Pinchot, the first Chief of the US Forest Service, championed “wise use”. Its legacy is the National Forests.' },
    { t: 'mc', topic: 'l2-ethics', q: 'The US National Parks are the clearest legacy of which ethic?', o: ['Romantic–transcendental (preservationist) ethic', 'Resource conservation ethic', 'Evolutionary–ecological land ethic', 'Ecosystem-services ethic'], a: 0, why: 'Muir, Thoreau and Emerson argued for preserving nature for its spiritual value. National Forests are the resource-conservation legacy.' },
    { t: 'mc', topic: 'l2-ethics', q: '“A thing is right when it tends to preserve the integrity, stability, and beauty of the biotic community.” Who wrote it?', o: ['Aldo Leopold', 'Gifford Pinchot', 'John Muir', 'Rachel Carson'], a: 0, why: 'From A Sand County Almanac (1949), the source of the evolutionary–ecological land ethic.' },
    { t: 'mc', topic: 'l2-ethics', q: 'Why wasn’t conservation a major part of public policy until the mid-1900s, even though science was increasingly applied to it?', o: ['The public didn’t perceive a problem until pesticide impacts such as DDT biomagnification were publicized', 'No scientific methods for studying ecosystems existed yet', 'National Parks had already solved most conservation problems', 'Hunters opposed all conservation laws'], a: 0, why: 'Synthetic pesticides arrived in the 1950s, and Carson’s Silent Spring (1962) made the contamination visible to the public.' },
    { t: 'mc', topic: 'l2-controversy', q: 'Which statement comes from Soulé’s 1985 postulates rather than Kareiva & Marvier (2012)?', o: ['Biotic diversity has intrinsic value, irrespective of its utilitarian value', 'Conservationists must work with corporations', 'Pristine nature, untouched by humans, no longer exists', 'Conservation must occur within human-altered landscapes'], a: 0, why: 'Soulé sits on the preservation side. The other three are Kareiva & Marvier’s sustainable-use postulates.' },
    { t: 'mc', topic: 'l2-controversy', q: 'On the lecture’s two-axis diagram, where do Kareiva & Marvier (and TNC today) fall?', o: ['Sustainable-use ethic, focused on human-dominated systems', 'Preservation ethic, focused on pristine systems', 'Preservation ethic, focused on human-dominated systems', 'Sustainable-use ethic, focused on pristine systems'], a: 0, why: 'They argue that pristine nature is gone and that conservation must work within human-altered landscapes and with business.' },
    { t: 'mc', topic: 'l2-controversy', q: 'The Nature Conservancy took $10 million from Dow Chemical. According to the instructor, which answer is correct?', o: ['Several positions are reasonable; there is no single right answer', 'Wrong, because taking money from polluters is always corrupting', 'Right, because any conservation gain justifies any partnership', 'Wrong, because TNC was founded only to buy land'], a: 0, why: 'This is a values question on the preservation vs. sustainable-use divide. Be ready to argue either side.' },
    { t: 'mc', topic: 'l2-services', q: 'Costa Rica’s jungles offer some of the world’s best birdwatching. What kind of ecosystem service is that?', o: ['Cultural', 'Provisioning', 'Regulating', 'Supporting'], a: 0, why: 'Recreation and ecotourism are non-material benefits.' },
    { t: 'mc', topic: 'l2-services', q: 'Which is the best example of a provisioning service?', o: ['Picking blackberries to make pies', 'Mangroves protecting people from storms', 'Wilderness nourishing people’s souls', 'Rain falling and helping crops grow'], a: 0, why: 'Provisioning means things we harvest. Mangroves = regulating, wilderness = cultural, rain = supporting.' },
    { t: 'mc', topic: 'l2-services', q: 'Which of these is NOT an ecosystem service?', o: ['Harvesting solar energy with solar panels', 'Pollination of crops by wild bees', 'Nutrient recycling by decomposers', 'Timber harvested from a forest'], a: 0, why: 'Solar panels don’t need an ecosystem. The others are regulating, supporting and provisioning.' },
    { t: 'mc', topic: 'l2-services', q: 'Decomposition and nutrient recycling fall under which category?', o: ['Supporting', 'Regulating', 'Provisioning', 'Cultural'], a: 0, why: 'Supporting services are the underlying processes that make the other three possible.' },
    { t: 'mc', topic: 'l2-services', q: 'Why is the ecosystem-services framework controversial?', o: ['It encourages trade-off thinking and handles poorly things that can’t be valued', 'It ignores the benefits people get from nature', 'It has only one category, so it can’t tell services apart', 'It was rejected by the Millennium Ecosystem Assessment'], a: 0, why: 'Putting services on a common scale invites trading one for another, and some things can’t be priced or have infinite value.' },
    { t: 'mc', topic: 'l2-impacts', q: 'Which group has the largest total biomass among Earth’s mammals?', o: ['Domesticated mammals (~630 Mt)', 'Humans (~390 Mt)', 'Wild marine mammals (~40 Mt)', 'Wild land mammals (~20 Mt)'], a: 0, why: 'Livestock, mostly cattle, outweigh humans, and both far outweigh wild mammals.' },
    { t: 'mc', topic: 'l2-impacts', q: 'The “Pleistocene overkill hypothesis” proposes that…', o: ['Hunting by prehistoric humans caused large-animal extinctions across whole continents', 'Climate warming alone ended the Ice Age megafauna', 'Modern overfishing is driving whales extinct', 'Domestic livestock outcompeted wild grazers'], a: 0, why: 'A 2023 study linked late-Quaternary megafauna extinctions to human range expansion, not climate change.' },
    { t: 'mc', topic: 'l2-impacts', q: 'According to FAO (2026), about what fraction of fish stocks are fished at or beyond their sustainable limit?', o: ['About 80%', 'About 20%', 'About 50%', 'Nearly 100%'], a: 0, why: 'Maximally sustainably fished plus overfished stocks make up about 80%.' },
    { t: 'recall', topic: 'l2-ethics', q: 'Name the three conservation ethics from 1850–1950. For each, give a key person and its core idea or legacy.', model: 'Romantic–transcendental (preservationist): Muir, Thoreau, Emerson. Preserve nature for its spiritual value; legacy is the National Parks.<br>Resource conservation: Pinchot. “Wise use”, the greatest good for the greatest number for the longest time; legacy is the National Forests.<br>Evolutionary–ecological land ethic: Leopold. Humans are part of the biotic community; right actions preserve its integrity, stability and beauty.', points: ['Preservationist ethic linked to Muir, Thoreau or Emerson', 'Preservation for spiritual value / National Parks', 'Resource conservation ethic linked to Pinchot', 'Wise/sustainable use / National Forests', 'Land ethic linked to Leopold, with humans as part of the ecological community'] },
    { t: 'recall', topic: 'l2-services', q: 'List the four Millennium Ecosystem Assessment categories of ecosystem services, with one example of each.', model: 'Provisioning: things we harvest (food, timber, water, medicines).<br>Regulating: control of natural processes (mangrove storm protection, pollination, water purification).<br>Cultural: non-material benefits (recreation, birdwatching, spiritual value).<br>Supporting: underlying processes that make the rest possible (nutrient cycling, decomposition, biomass production).', points: ['Provisioning + valid example', 'Regulating + valid example', 'Cultural + valid example', 'Supporting + valid example'] },
    { t: 'recall', topic: 'l2-controversy', q: 'Describe the two axes that organize current controversies in conservation, and where most conservation biologists fall.', model: 'One axis runs from the preservation ethic (leave it alone) to the sustainable-use ethic (use it wisely). The other runs from a focus on pristine systems to a focus on human-dominated systems. Most conservation biologists fall along the diagonal, from preservation and pristine (Soulé, Sierra Club) to sustainable use and human-dominated (Kareiva & Marvier, TNC).', points: ['Preservation vs. sustainable-use axis', 'Pristine vs. human-dominated axis', 'Most conservation biologists fall along the diagonal between the two'] },
    { t: 'recall', topic: 'l2-what', q: 'Explain why conservation biology is called a crisis discipline, and what triage means in this context.', model: 'Decisions must be made quickly with limited, messy information, because waiting risks losing the species. Triage borrows from battlefield medicine: sort cases into beyond urgency (dying anyway), absolute urgency (can be saved) and relative urgency (will live anyway), and focus effort on those that can be saved.', points: ['Decisions made quickly with limited information', 'Triage sorts cases into three categories', 'Focus goes to those that can be saved'] }
  ]
});
