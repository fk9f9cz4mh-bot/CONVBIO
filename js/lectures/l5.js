window.CB_DATA.lectures.push({
  id: 'l5',
  num: 5,
  title: 'Endangered species and biodiversity loss',
  short: 'Endangered species',
  reading: 'McCauley et al. 2017 assigned for the next class',
  blurb: 'What makes species vulnerable, the IUCN Red List and its data limits, IPAT and the major threats, and how extinction rates are estimated directly and with species–area curves.',
  flags: [
    { kind: 'know', text: 'The list of traits that make species vulnerable to extinction, with an example species for several of them.' },
    { kind: 'know', text: 'How the species–area relationship is used to estimate extinction, and the reasons it may over- or underestimate losses.' },
    { kind: 'note', text: 'The vaquita and ivory-billed woodpecker counts illustrate uncertainty. Know the pattern (steep decline, disputed status), not every yearly number.' }
  ],
  sections: [
    {
      id: 'l5-terms',
      title: 'Extinction vocabulary',
      html: `
<dl class="terms">
  <dt>Extinction</dt><dd>Loss of all individuals of a given species.</dd>
  <dt>Local extinction (extirpation)</dt><dd>A species disappears from one geographic area but persists elsewhere.</dd>
  <dt>Global extinction</dt><dd>Loss of a species over its entire range.</dd>
  <dt>Endangered species</dt><dd>A species that is presently threatened with extinction.</dd>
</dl>
<h4>Case: the American bison (local extinction)</h4>
<p>Hunting collapsed the bison’s range across North America. Bison are <strong>not in danger of extinction</strong> today because they are domesticated for meat. Across most of their range they have been replaced by cattle, which have very different ecological effects: cattle crop grass much lower, and although they need less land, they <strong>reduce biodiversity, increase erosion and cause topsoil loss</strong>.</p>`,
      recall: [
        ['What is extirpation?', 'Local extinction: a species disappears from one area but survives elsewhere.'],
        ['Why are bison an example of local, not global, extinction?', 'They vanished from most of their range, but the species survives, partly because it is domesticated for meat.']
      ]
    },
    {
      id: 'l5-traits',
      title: 'What makes a species vulnerable to extinction?',
      html: `
<div class="traits">
  <div><strong>Valuable and easy to harvest</strong><span>passenger pigeon, bison</span></div>
  <div><strong>Seen as a pest by humans</strong><span>passenger pigeon</span></div>
  <div><strong>Low reproductive rate</strong> (often long-lived)</div>
  <div><strong>Larger animals</strong></div>
  <div><strong>“Rare” species:</strong> narrow habitat or niche, small populations, small geographic ranges<span>dodo (island)</span></div>
  <div><strong>Poor dispersal ability</strong></div>
  <div><strong>Dependent on another species</strong><span>passenger pigeon louse</span></div>
  <div><strong>A combination</strong> of these characteristics</div>
</div>
<h4>Cases</h4>
<ul class="keylist">
  <li><strong>Passenger pigeon:</strong> global extinction. Martha, the last one, died on Sept 1, 1914 at 1:00 pm.</li>
  <li><strong>Dodo:</strong> last seen in 1681.</li>
  <li><strong><em>Columbicola extinctus</em></strong>, the passenger pigeon chewing louse, depended on its host. It was found dead on museum specimens in 1937 and presumed extinct, then in 1999 it turned up <strong>still surviving on band-tailed pigeons</strong>. Declaring extinction is hard.</li>
</ul>`,
      recall: [
        ['List at least six traits that make a species vulnerable to extinction.', 'Valuable/easy to harvest; seen as a pest; low reproductive rate (long-lived); large body size; rarity (narrow niche, small population, small range); poor dispersal; dependence on another species; or a combination.'],
        ['What does Columbicola extinctus teach about extinction?', 'Species that depend on another species are vulnerable, and extinction is hard to confirm: the louse “extinct” with its host was later found on band-tailed pigeons.']
      ]
    },
    {
      id: 'l5-iucn',
      title: 'Describing endangerment: the IUCN Red List',
      html: `
<p>The <strong>IUCN</strong> (International Union for Conservation of Nature) is a <strong>non-profit, non-legislative</strong> body. Its Red List is the main list of imperiled species.</p>
<ol class="redlist" aria-label="IUCN Red List categories from highest to lowest risk">
  <li><span class="rl rl-ex">EX</span> Extinct</li>
  <li><span class="rl rl-ew">EW</span> Extinct in the Wild</li>
  <li class="threat"><span class="rl rl-cr">CR</span> Critically Endangered</li>
  <li class="threat"><span class="rl rl-en">EN</span> Endangered</li>
  <li class="threat"><span class="rl rl-vu">VU</span> Vulnerable</li>
  <li><span class="rl rl-nt">NT</span> Near Threatened</li>
  <li><span class="rl rl-lc">LC</span> Least Concern</li>
  <li><span class="rl rl-dd">DD</span> Data Deficient (evaluated, but not enough data)</li>
  <li><span class="rl rl-ne">NE</span> Not Evaluated</li>
</ol>
<p class="muted small">CR, EN and VU together are the “threatened” categories.</p>
<p class="callout"><strong>Clicker:</strong> <strong>most species have NOT been assessed, and most assessments use little data.</strong> In a review of mammal listings (perhaps the best-studied group), only <strong>12%</strong> cited any data or scientific study. Expert opinion is necessary to cover this many species. It is often quite good for well-studied species, and “who knows” is rarely a more useful answer.</p>
<ul>
  <li>Groups such as amphibians (~8,577 species) are largely assessed. Insects, with millions of species, barely are.</li>
  <li>Many assessed species are <strong>DD, Data Deficient</strong>.</li>
  <li>Assessments keep growing, but compare them with ~2 million named species and 3–30 million total (Lecture 3).</li>
</ul>`,
      recall: [
        ['List the IUCN categories from highest to lowest risk, and name the three “threatened” ones.', 'EX, EW, CR, EN, VU, NT, LC (plus DD and NE). Threatened = CR, EN, VU.'],
        ['What fraction of species has the IUCN assessed, and how much data do assessments use?', 'Most species have not been assessed, and most assessments use little data. Only 12% of mammal listings cite a study.'],
        ['What is the difference between DD and NE?', 'DD (Data Deficient): evaluated, but there isn’t enough data to assign a category. NE: never evaluated.']
      ]
    },
    {
      id: 'l5-threats',
      title: 'Why species are threatened: IPAT and the major threats',
      html: `
<p class="formula">I = P × A × T</p>
<p class="center small">Environmental <strong>I</strong>mpact = <strong>P</strong>opulation × <strong>A</strong>ffluence × <strong>T</strong>echnology<br><span class="muted">Paul Ehrlich and John Holdren, 1971</span></p>
<p>These drivers work through agriculture, fisheries, industry, urbanization and trade, producing four main environmental changes: <strong>habitat loss</strong>, <strong>overexploitation</strong>, <strong>invasive species</strong> and <strong>climate change</strong> (plus pollution and disease).</p>
<ul class="keylist">
  <li><strong>Habitat loss/degradation</strong> is the largest share of threat for birds, mammals, and reptiles and amphibians.</li>
  <li><strong>Overexploitation</strong> is the largest threat for <strong>fishes</strong>.</li>
  <li>These breakdowns come from <strong>expert opinion</strong>, and <strong>usually multiple threats act together</strong>.</li>
</ul>`,
      recall: [
        ['What does IPAT stand for, and who proposed it?', 'Impact = Population × Affluence × Technology. Ehrlich and Holdren, 1971.'],
        ['Which threat dominates for fishes, and which for birds and mammals?', 'Fishes: overexploitation. Birds and mammals: habitat loss/degradation.']
      ]
    },
    {
      id: 'l5-direct',
      title: 'Measuring extinction directly',
      html: `
<p>Direct observation of recent extinctions is <strong>only really possible for well-studied species</strong>, and even then it is hard to prove something is gone.</p>
<ul class="keylist">
  <li><strong>Ivory-billed woodpecker:</strong> presumed extinct since 1944, with multiple claimed sightings in the 2000s based on its swooping flight and “double knock” sound. A 2025 BioScience paper compared the 2006 video with specimens. As of 2025 the US Fish &amp; Wildlife Service has <strong>declined to remove it from the endangered list as extinct</strong>.</li>
  <li><strong>Vaquita</strong> (critically endangered porpoise): drowned in <strong>gillnets set illegally for the totoaba</strong>, an endangered fish whose swim bladders sell for $5,000+ per pound in China. About 600 in 1997, 6–22 by 2018, and 7–10 in 2025 plus 2 calves. Is it extinct? Not yet.</li>
</ul>`,
      recall: [
        ['Why is direct observation a limited way to measure extinction rates?', 'It only works for well-studied species, and absence is hard to prove (ivory-billed woodpecker, the louse, vaquita).'],
        ['What is driving the vaquita toward extinction?', 'Bycatch in illegal gillnets set for totoaba, whose swim bladders are extremely valuable.']
      ]
    },
    {
      id: 'l5-sar',
      title: 'Indirect estimates: the species–area relationship',
      html: `
<p>Habitat loss means less area, and less area means fewer species. Like accumulation curves, the more area you sample the more species you find.</p>
<p class="formula"><span class="nw">S = C · A<sup>z</sup></span> &nbsp;⇔&nbsp; <span class="nw">log S = log C + z · log A</span></p>
<p class="center small muted">S = number of species, A = area, C and z = fitted constants. On natural axes it curves and flattens. On log–log axes it is a straight line with slope z. Fish in ponds: S = 3.13 × A<sup>0.28</sup>.</p>
${CBFig.sarCurve()}
<ul class="keylist">
  <li>Islands follow it: Puerto Rico (9,104 km²) has about 385 bird species, while St. Croix (218 km²) has about 150.</li>
  <li><strong>Halving a large habitat loses less than 50% of its species</strong>, because the curve is flattening at large areas.</li>
  <li><strong>The smaller the patch, the more species you lose per unit of habitat destroyed.</strong> Removing 0.2 units from a small pond costs more fish species than any other option in the Lecture 6 team clicker.</li>
</ul>`,
      recall: [
        ['Write the species–area relationship and describe its shape on linear vs. log–log axes.', 'S = C·Aᶻ. It curves and flattens on linear axes and is a straight line with slope z on log–log axes.'],
        ['If half of a large forest is destroyed, do we lose more than, about, or less than 50% of species?', 'Less than 50%, because the curve flattens at large areas.'],
        ['Is it worse to remove 2,000 ha from a small patch or from a large one?', 'From a small patch. The curve is steepest at small areas, so more species are lost per hectare.']
      ]
    },
    {
      id: 'l5-sar-limits',
      title: 'When species–area estimates go wrong',
      html: `
<div class="compare">
  <div class="compare-col">
    <p class="eyebrow">May OVERestimate extinction</p>
    <ol>
      <li><strong>Extinction debt.</strong> Species take time to go extinct after habitat loss, so some are doomed but not yet gone (estimates run from 70,000 to 2,700,000 species). That is good news, because they can still be saved. Puerto Rico had lost 99% of its forest by 1900, yet 88% of native birds survive because <strong>the forests were allowed to regrow</strong>.</li>
      <li><strong>Protected areas may be better than average.</strong> Not all areas are equal: protecting the best areas for biodiversity (e.g., hotspots in the Florida Natural Areas Inventory) can save more species than total area predicts.</li>
      <li><strong>Converted habitat isn’t empty.</strong> The American prairie is nearly 100% gone, but it became pasture and cornfields, not lava or ocean. Some species can live in the new habitat, and the species–area relationship ignores them.</li>
    </ol>
  </div>
  <div class="compare-col">
    <p class="eyebrow">May UNDERestimate extinction</p>
    <p>It <strong>accounts only for habitat loss</strong> and ignores every other threat: overexploitation, invasive species, pollution, climate change and disease.</p>
  </div>
</div>`,
      recall: [
        ['Give three reasons species–area curves may overestimate extinction.', '(1) Extinction debt: doomed species haven’t died yet and may be saved. (2) Protected areas may be better than average. (3) Converted habitat still supports some species.'],
        ['Why might species–area curves underestimate extinction?', 'They only consider habitat loss and ignore other threats such as harvest, invasives and climate change.'],
        ['What is extinction debt, and why is it “good news”?', 'Species doomed by past habitat loss that haven’t gone extinct yet. They can still be saved if we act, for example by letting forest regrow.']
      ]
    }
  ],
  exam: [
    { t: 'mc', topic: 'l5-terms', q: 'A species disappears from Florida but persists in Georgia and the Carolinas. This is…', o: ['Local extinction (extirpation)', 'Global extinction', 'Extinction debt', 'Extinction in the wild'], a: 0, why: 'Global extinction means loss across the species’ entire range.' },
    { t: 'mc', topic: 'l5-terms', q: 'Why are American bison not in danger of global extinction despite being wiped out across most of their range?', o: ['They are domesticated for meat', 'They were never hunted heavily', 'Cattle interbred with them and replaced their genes', 'They recolonized their full range naturally'], a: 0, why: 'Cattle replaced bison across most of the range, with more erosion, topsoil loss and reduced biodiversity.' },
    { t: 'mc', topic: 'l5-traits', q: 'Which trait was NOT listed as making species vulnerable to extinction?', o: ['A large geographic range', 'Low reproductive rate', 'Being seen as a pest by humans', 'Dependence on another species'], a: 0, why: 'Small geographic ranges (rarity) increase vulnerability. Large ranges buffer against it.' },
    { t: 'mc', topic: 'l5-traits', q: 'The passenger pigeon louse Columbicola extinctus best illustrates which vulnerability trait?', o: ['Dependence on another species', 'Large body size', 'Being valuable and easy to harvest', 'Poor dispersal ability'], a: 0, why: 'A parasite loses its habitat when its host disappears. This louse was later found surviving on band-tailed pigeons.' },
    { t: 'mc', topic: 'l5-traits', q: 'Which pair of traits best explains the passenger pigeon’s extinction?', o: ['Valuable and easy to harvest; seen as a pest', 'Small geographic range; poor dispersal', 'Large body size; low reproductive rate', 'Narrow niche; dependence on another species'], a: 0, why: 'Vast flocks made them easy to kill, they were eaten, and they were treated as crop pests. Martha, the last one, died in 1914.' },
    { t: 'mc', topic: 'l5-iucn', q: 'Which statement describes the IUCN?', o: ['A non-profit, non-legislative organization that maintains the Red List', 'A US federal agency that enforces the Endangered Species Act', 'A UN treaty that bans wildlife trade', 'A university consortium that names new species'], a: 0, why: 'The Red List has no legal force by itself, unlike the ESA.' },
    { t: 'mc', topic: 'l5-iucn', q: 'Which IUCN categories together make up the “threatened” species?', o: ['Critically Endangered, Endangered, Vulnerable', 'Extinct, Extinct in the Wild, Critically Endangered', 'Endangered, Vulnerable, Near Threatened', 'Vulnerable, Near Threatened, Least Concern'], a: 0, why: 'Near Threatened is just below the threatened categories.' },
    { t: 'mc', topic: 'l5-iucn', q: 'Which statement best describes IUCN assessments?', o: ['Most species have NOT been assessed, and little data is used in most assessments', 'Most species have been assessed, with lots of data', 'Most species have been assessed, with little data', 'Most species have NOT been assessed, but assessments use lots of data'], a: 0, why: 'Only 12% of mammal listings reference any data or study. Expert opinion fills the gap.' },
    { t: 'mc', topic: 'l5-iucn', q: 'A species was evaluated by the IUCN but there wasn’t enough information to assign a risk category. Its status is…', o: ['DD, Data Deficient', 'NE, Not Evaluated', 'LC, Least Concern', 'NT, Near Threatened'], a: 0, why: 'NE means never evaluated. DD means evaluated with inadequate data. Many assessed species are DD.' },
    { t: 'mc', topic: 'l5-threats', q: 'In the IPAT equation, what do the letters stand for?', o: ['Impact = Population × Affluence × Technology', 'Invasion = Pollution × Agriculture × Temperature', 'Impact = Pollution × Area × Time', 'Index = Population × Abundance × Taxa'], a: 0, why: 'Ehrlich and Holdren (1971) framed human impact as the product of these three drivers.' },
    { t: 'mc', topic: 'l5-threats', q: 'For which group is overexploitation the largest share of threat?', o: ['Fishes', 'Birds', 'Mammals', 'Reptiles and amphibians'], a: 0, why: 'Habitat loss/degradation is the largest share for the other groups. These figures are expert opinion, and multiple threats usually co-occur.' },
    { t: 'mc', topic: 'l5-direct', q: 'Why is directly observing extinctions a limited way to measure extinction rates?', o: ['It is only really possible for well-studied species, and absence is hard to prove', 'Extinctions happen too slowly to ever observe', 'The IUCN forbids declaring species extinct', 'It always overestimates extinction'], a: 0, why: 'The ivory-billed woodpecker is still debated, and the louse was “extinct” until it was found again.' },
    { t: 'mc', topic: 'l5-direct', q: 'What is the main cause of the vaquita’s decline?', o: ['Drowning in illegal gillnets set for totoaba', 'Habitat loss from coastal development', 'An invasive predator', 'Disease spread from captive dolphins'], a: 0, why: 'Totoaba swim bladders sell for $5,000+ per pound, which drives illegal gillnetting where vaquitas live.' },
    { t: 'mc', topic: 'l5-sar', q: 'Plotted on log–log axes, the species–area relationship S = C·Aᶻ is…', o: ['A straight line with slope z', 'A curve that flattens at large areas', 'A horizontal line', 'A U-shaped curve'], a: 0, why: 'log S = log C + z·log A is linear. On natural axes it curves and flattens.' },
    { t: 'mc', topic: 'l5-sar', q: 'Using a typical species–area curve, what fraction of species would be lost if half of a large forest were destroyed?', o: ['Less than 50%', 'About 50%', 'More than 50%', 'None'], a: 0, why: 'At large areas the curve is flat, so halving area removes a smaller fraction of species.' },
    { t: 'mc', topic: 'l5-sar', q: 'Which action causes the greatest loss of fish species?', o: ['Removing 0.2 units of habitat from a small pond', 'Removing 0.1 units from a small pond', 'Removing 0.2 units from a large pond', 'Removing 0.1 units from a large pond'], a: 0, why: 'More habitat removed means more loss, and removing it from smaller patches costs more species because the curve is steep there.' },
    { t: 'mc', topic: 'l5-sar-limits', q: 'By 1900, 99% of Puerto Rico’s forests had been destroyed, yet 88% of native bird species survive. Why?', o: ['The forests have been allowed to regrow', 'Birds don’t need forest habitat', 'No exotic birds were introduced', 'The birds were maintained by captive breeding'], a: 0, why: 'Extinction debt: doomed species hadn’t died yet, and regrowth let the debt be avoided.' },
    { t: 'mc', topic: 'l5-sar-limits', q: 'The American prairie is nearly 100% gone, but converted to pasture and cornfields rather than lava. Which species–area limitation does this illustrate?', o: ['It ignores species that can live in the converted habitat, so it may overestimate losses', 'It ignores threats other than habitat loss, so it may underestimate losses', 'Extinction debt', 'Protected areas may be better than average'], a: 0, why: 'Species–area predictions assume lost habitat supports zero species.' },
    { t: 'mc', topic: 'l5-sar-limits', q: 'Which is a reason species–area relationships may UNDERestimate extinction?', o: ['They don’t account for threats other than habitat loss', 'Species take time to go extinct after habitat loss', 'Protected areas are often better than average', 'Some species live in converted habitat'], a: 0, why: 'The other three are reasons it may overestimate.' },
    { t: 'num', topic: 'l5-sar', stretch: true, q: 'If S = C·Aᶻ with z = 0.25, what percentage of species is eventually lost when a habitat is cut to half its area? (Round to a whole percent.)', a: 16, tol: 1.2, unit: '%', why: 'S_new / S_old = 0.5^0.25 ≈ 0.84, so about 16% of species are lost. That is far less than 50%, which is the point of the clicker question.' },
    { t: 'recall', topic: 'l5-traits', q: 'List as many traits as you can that make a species vulnerable to extinction, and match two of them to example species.', model: 'Valuable and easy to harvest; seen as a pest; low reproductive rate (often long-lived); large body size; rarity (narrow habitat or niche, small population, small range); poor dispersal; dependence on another species; a combination of these.<br>Examples: passenger pigeon (easy to harvest, seen as a pest); dodo (small island range); Columbicola extinctus (depends on its host).', points: ['At least four valid traits', 'Rarity broken into narrow niche / small population / small range', 'Dependence on another species', 'Two correct species examples'] },
    { t: 'recall', topic: 'l5-sar-limits', q: 'Give three reasons species–area relationships might overestimate extinction and one reason they might underestimate it.', model: 'Overestimate: (1) extinction debt, since species take time to disappear and may still be saved; (2) protected areas may hold more biodiversity than average; (3) species–area predictions ignore species that can live in converted habitat.<br>Underestimate: they account only for habitat loss and ignore other threats such as overexploitation, invasive species and climate change.', points: ['Extinction debt / time lag', 'Protected areas better than average', 'Converted habitat still supports species', 'Underestimate: ignores threats other than habitat loss'] },
    { t: 'recall', topic: 'l5-iucn', q: 'List the IUCN Red List categories from highest to lowest risk, and explain two limitations of Red List data.', model: 'Extinct, Extinct in the Wild, Critically Endangered, Endangered, Vulnerable (the threatened categories are CR/EN/VU), Near Threatened, Least Concern, plus Data Deficient and Not Evaluated.<br>Limitations: most species haven’t been assessed (especially insects), many assessed species are Data Deficient, and most assessments rely on expert opinion rather than data (only 12% of mammal listings cite a study).', points: ['Correct order EX → EW → CR → EN → VU → NT → LC', 'CR/EN/VU identified as threatened', 'Most species not assessed', 'Little data / expert opinion used'] }
  ]
});
