(function () {
  var G = window.CBGen;

  window.CB_DATA.lectures.push({
    id: 'l7',
    num: 7,
    title: 'Detecting problems: measuring population size',
    short: 'Measuring population size',
    nav: 'Counting',
    reading: 'Textbook Ch. 13, pp. 421–426',
    blurb: 'How many North Atlantic right whales are left? Census versus estimate, scaling up from quadrats, why clumped species give big errors, correcting for individuals you miss, and mark–recapture.',
    flags: [
      { kind: 'know', text: '<strong>Know these equations:</strong> average density = total observed ÷ area sampled; total population = average density × total area; and mark–recapture N = MC/R.' },
      { kind: 'know', text: 'You often need to account for <strong>detection probability</strong>, because you rarely see every individual that is there.' },
      { kind: 'skip', text: 'The distance-sampling half-width math. “I would not ask you for the half-width math.”' },
      { kind: 'note', text: 'The textbook uses “census” loosely (p. 422). In this class a census is a <strong>complete count</strong> of every individual.' }
    ],
    sections: [
      {
        id: 'l7-pop',
        title: 'Right whales and the population',
        html: `
<p>The running case for Lectures 7–10 is the <strong>North Atlantic right whale</strong> (<em>Eubalaena glacialis</em>). The 2024 estimate is <strong>about 384 whales</strong>, down from a peak around 2010. Whales are killed by <strong>entanglement in fishing gear</strong> and <strong>ship strikes</strong>.</p>
<p>Three questions organize this part of the course:</p>
<ol class="keylist">
  <li><strong>How many are left?</strong> Measuring population size (this lecture).</li>
  <li><strong>What is the likely outcome if we do nothing?</strong> Population growth models (Lecture 8).</li>
  <li><strong>What can biology tell us about the best way to help?</strong> Structured models and population viability analysis (Lectures 9–10).</li>
</ol>
<p class="definition"><strong>Population:</strong> a group of actually or potentially interbreeding organisms occupying a defined area during a specific time.</p>
<ul class="keylist">
  <li>A population is described by the <strong>number of individuals</strong> in it. It grows or declines as that number changes.</li>
  <li>Often only <strong>females</strong> are counted, and sometimes ages or stages are counted separately.</li>
  <li>Why the population is the unit of interest: <strong>human interests and management usually operate at population scales</strong>.</li>
</ul>`,
        recall: [
          ['What are the three key questions for the right whale?', 'How many are left? What is the likely outcome if we do nothing? What can biology tell us about the best option to help?'],
          ['Define a population.', 'A group of actually or potentially interbreeding organisms occupying a defined area during a specific time.'],
          ['About how many North Atlantic right whales were there in 2024, and what kills them?', 'About 384. Entanglement in fishing gear and ship strikes.']
        ]
      },
      {
        id: 'l7-census',
        title: 'Census: counting everyone',
        html: `
<p class="definition"><strong>Census:</strong> a count of <em>all</em> individuals. Total population = number observed.</p>
<p>A true census is rare. It is possible only when:</p>
<ol class="keylist">
  <li><strong>You can count the organisms faster than they can move.</strong> Mapping every tree in a plot is technically easy, but still expensive. Aerial surveys of large mammals such as elephants in fixed areas also work (Ngene et al. 2011).</li>
  <li><strong>The habitat being sampled is small.</strong></li>
  <li><strong>You can tell individuals apart reliably.</strong> Humpback whale flukes, stripes, scars and leg bands identify individuals. You get close to a census when you <strong>stop seeing new individuals</strong>.</li>
</ol>
<p>Full counts are very rare in wildlife biology. They are practical only for small areas or small populations, and usually very costly. They are <strong>more common in conservation</strong>, where populations are small and intensively managed, than in ecology generally.</p>
<p class="callout warn"><strong>Not in the book:</strong> the textbook (p. 422) says a census is meant to be a complete count, then gives examples that don’t aim for one. For this class, a census means counting every individual.</p>`,
        recall: [
          ['Name the three conditions that make a true census possible.', 'You can count the organisms faster than they move; the habitat is small; you can reliably tell individuals apart.'],
          ['How does photo-ID of whale flukes get you close to a census?', 'Each fluke is distinctive, so you can catalogue individuals. When you stop seeing new ones, you have counted nearly all of them.'],
          ['Why are censuses more common in conservation than in ecology generally?', 'Conservation often deals with small, intensively managed populations, where counting everyone is feasible.']
        ]
      },
      {
        id: 'l7-subsample',
        title: 'Subsampling: scaling up from quadrats',
        html: `
<p class="definition"><strong>Population estimate:</strong> a guess at the total based on observing a subset of the population. The simplest method extrapolates from the density in subsamples such as <strong>quadrats</strong> (plots) or <strong>transects</strong> (strips).</p>
<p class="formula">Average density = total observed ÷ area sampled</p>
<p class="formula">Total population = average density × total area</p>
<p><strong>Example:</strong> one 100 m² quadrat holds 20 plants. Density = 20 ÷ 100 = 0.2 per m², so a 1,000 m² area holds about 0.2 × 1,000 = <strong>200 plants</strong>.</p>
${CBFig.quadratField()}
<h4>You must know the area sampled</h4>
<p class="scenario">Clicker: you set 20 traps in a 1,000 m² field and catch 0.5 mice per trap on average. What is the total population?</p>
<p><strong>You can’t say from these data.</strong> You don’t know how much area each trap samples, so you can’t turn catch per trap into a density.</p>
<div class="compare">
  <div class="compare-col"><p class="eyebrow">Total abundance</p><p>The number of individuals in an area, i.e. a <strong>density</strong> (number per area). It can be scaled up to a population size.</p></div>
  <div class="compare-col"><p class="eyebrow">Relative abundance</p><p>A metric that <strong>scales with</strong> the number of individuals but <strong>can’t be converted to density</strong>. Useful for comparing sites or years.</p></div>
</div>
<p><strong>Proxies for abundance:</strong> vocalization rates (calls per unit time, such as breeding-chorus surveys of leopard frogs), pitfall and light traps, fecal pellet counts, artifact counts (nests, insect pupal cases, bird tracks), and fishing catch per unit effort.</p>`,
        recall: [
          ['Write the two equations for estimating a total population from quadrats.', 'Average density = total observed ÷ area sampled. Total population = average density × total area.'],
          ['Why can’t you estimate total mice from “0.5 mice per trap”?', 'You don’t know how much area each trap samples, so catch per trap can’t be converted to a density. It is only relative abundance.'],
          ['What is the difference between total and relative abundance?', 'Total abundance is a density (number per area) that can be scaled to a population size. Relative abundance (calls per hour, pellets, catch per effort) scales with numbers but can’t be converted to density.']
        ]
      },
      {
        id: 'l7-uncertainty',
        title: 'Uncertainty: sample size and clumping',
        html: `
<p>Adding quadrats can move your estimate <strong>up or down</strong>, depending on what the new quadrat contains. What reliably changes is your <strong>confidence</strong>: more samples mean less uncertainty. For western chimpanzees in Taï National Park, Côte d’Ivoire, the predicted coefficient of variation of camera-trap estimates falls as sampling locations are added (Cappelle et al. 2021).</p>
<p>Error also depends on how the species is <strong>distributed</strong>:</p>
${CBFig.distPatterns()}
<ul class="keylist">
  <li><strong>Regular</strong> distributions are easy to sample well.</li>
  <li><strong>Clumped</strong> distributions are hard: the same effort can give a very high or a very low estimate.</li>
  <li><strong>Rare species with clumped distributions are especially hard.</strong> You could double your effort and still easily miss them.</li>
</ul>
<h4>Habitat suitability models</h4>
<p>Where a clumped species occurs is often <strong>predictable from the environment</strong>. Fish are clumped, but predictably found in ponds; pond depth, permanence and the surrounding habitat refine the prediction. Landscape factors include <strong>topography, temperature, nutrients, substrate and wind exposure</strong>. Modeling suitable habitat lets you <strong>focus sampling on plausible places</strong>.</p>
<p class="callout warn"><strong>Caveat:</strong> a species may not be present everywhere it could be. Mountain lions have plenty of suitable habitat in the eastern US but are absent from most of it, so the model alone would mislead you about their status in the east.</p>
<p class="callout"><strong>Summary:</strong> more samples mean lower error. Clumped distributions have higher error. Habitat suitability models help when sampling clumped and rare species.</p>`,
        recall: [
          ['As you add quadrats, what happens to the estimate and to your confidence?', 'The estimate can go up or down. Confidence increases (error falls).'],
          ['Which distribution is hardest to sample, and why?', 'Clumped. Quadrats either hit a clump (overestimate) or miss (underestimate). Rare clumped species can be missed entirely.'],
          ['What is a habitat suitability model for, and what is its main pitfall?', 'Predicting where a clumped species should be from environmental factors, so you sample plausible habitat. Pitfall: the species may be absent from suitable habitat (mountain lions in the east).']
        ]
      },
      {
        id: 'l7-detect',
        title: 'Detection: accounting for individuals you miss',
        html: `
<p>Even inside the area you search, you <strong>miss individuals</strong>. One correction is <strong>distance sampling</strong> (Box 13.2).</p>
<p class="scenario">You drive 1,000 m and count zebras out to 100 m from the road: 4 within 0–50 m and 2 within 50–100 m.</p>
<p>Zebras aren’t really denser near the road. The drop-off with distance tells you <strong>you are missing animals, mostly the far ones</strong>. Distance sampling uses the drop-off to estimate how many you missed.</p>
${CBFig.distanceHist()}
<p class="muted small">Reference only: a line through the counts falls to half the near-band count at 75 m, the “effective strip half-width.” Density ≈ 6 ÷ (75 × 1,000 m²) = 0.00008 per m². The instructor won’t ask for this math.</p>
<h4>What changes detection</h4>
<ul class="keylist">
  <li>The <strong>distance</strong> you are searching.</li>
  <li><strong>How</strong> you search (on foot, from a car, from a helicopter).</li>
  <li>The <strong>habitat</strong>: woodland hides more animals than grassland.</li>
  <li><strong>Weather</strong> conditions.</li>
  <li><strong>Characteristics of individuals</strong>: size, life stage, sex.</li>
</ul>
<h4>Right whales: detection differs by life stage</h4>
<p>Fujiwara &amp; Caswell (2001) estimated sighting probabilities for female right whales. <strong>Mothers with calves are sure to be seen</strong>, so 100 mothers observed means 100 mothers. <strong>Mature females without a calf are only about 70% likely to be seen</strong>, so 100 observed in 1994 means about 100 ÷ 0.7 ≈ <strong>143</strong>. Immature females fall in between and vary from year to year.</p>
<p class="formula">Estimated number = number observed ÷ probability of detection</p>`,
        recall: [
          ['You count 4 zebras at 0–50 m and 2 at 50–100 m. What does that tell you?', 'You are missing animals, mostly the far ones. Detection falls with distance; the true density near the road isn’t higher.'],
          ['List five things that change detection probability.', 'Distance searched, how you search, habitat, weather, and characteristics of individuals (size, life stage, sex).'],
          ['You see 100 mature female right whales without calves, each 70% likely to be seen. How many are there?', 'About 100 ÷ 0.7 ≈ 143. Mothers with calves are always seen, so 100 seen means 100.']
        ]
      },
      {
        id: 'l7-cmr',
        title: 'Mark–recapture',
        html: `
<p>Mark–recapture uses the <strong>history of observations to estimate how many individuals you have not yet seen</strong>. It is common for mobile organisms.</p>
<ol class="keylist">
  <li>Capture, mark and release <strong>M</strong> individuals. They mix back into the population.</li>
  <li>Later, capture <strong>C</strong> individuals. <strong>R</strong> of them carry marks.</li>
  <li>Assume the marked fraction of the second sample equals the marked fraction of the whole population: R ÷ C = M ÷ N.</li>
</ol>
<p class="formula">N = M × C ÷ R</p>
<div class="table-wrap"><table class="num">
  <thead><tr><th>Example</th><th>M (marked, visit 1)</th><th>C (caught, visit 2)</th><th>R (marked in C)</th><th>N = MC/R</th></tr></thead>
  <tbody>
    <tr><td>Every recapture marked</td><td>100</td><td>50</td><td>50</td><td><strong>100</strong></td></tr>
    <tr><td>Half marked</td><td>100</td><td>100</td><td>50</td><td><strong>200</strong></td></tr>
    <tr><td>Trout clicker</td><td>40</td><td>60</td><td>30 (50%)</td><td><strong>80</strong></td></tr>
  </tbody>
</table></div>
<p class="muted small">The textbook works another example on pp. 424–425.</p>
<h4>Assumptions</h4>
<ul class="keylist">
  <li>The population is <strong>closed</strong>: no movement in or out, and no births or deaths.</li>
  <li>Sampling events are <strong>close together in time</strong>.</li>
  <li>The population <strong>mixes</strong> and sampling is <strong>random</strong>.</li>
  <li><strong>No tags are lost.</strong></li>
  <li><strong>Tags and traps don’t change</strong> recapture, mortality and so on.</li>
</ul>
<p class="callout"><strong>Reasoning about a broken assumption:</strong> anything that makes R too small (lost tags, marked animals avoiding traps) inflates N = MC/R, so you overestimate. Anything that makes R too big (marked animals seeking out traps) underestimates N.</p>
<h4>Marks don’t have to be tags</h4>
<ul class="keylist">
  <li><strong>Artificial marks:</strong> leg bands, paint, satellite tags and more.</li>
  <li><strong>Natural markers:</strong> dorsal-fin photo-ID of great white sharks and bottlenose dolphins in Mossel Bay, South Africa; <strong>boat-strike scars</strong> on Florida manatees.</li>
  <li><strong>Genetic mark–recapture:</strong> grizzly bears in 8,527 km² of northeastern British Columbia. 2,062 hair samples from 332 sites identified <strong>98 different bears</strong>, and the population was estimated at <strong>138</strong>.</li>
</ul>
<p>The right whale estimates in lecture come from state-space mark–recapture models of photo-identified whales (Pace et al. 2017).</p>`,
        recall: [
          ['Write the mark–recapture equation and define each letter.', 'N = MC/R. M = number marked and released on the first visit; C = total caught on the second visit; R = how many of those were already marked.'],
          ['40 trout are marked. A week later 60 are caught and half are marked. N?', 'R = 30, so N = 40 × 60 ÷ 30 = 80.'],
          ['List the assumptions of mark–recapture.', 'Closed population (no immigration, emigration, births or deaths); samples close in time; mixing and random sampling; no lost tags; tags and traps don’t affect recapture or survival.'],
          ['What served as the “mark” for grizzly bears in British Columbia?', 'DNA from hair samples. 98 bears were identified and 138 estimated.']
        ]
      }
    ],
    exam: [
      { t: 'mc', topic: 'l7-pop', q: 'Which definition of a population did the lecture use?', o: ['A group of actually or potentially interbreeding organisms occupying a defined area during a specific time', 'All individuals of a species worldwide', 'Any group of organisms counted in the same quadrat', 'All the species that interact in one habitat'], a: 0, why: 'A defined area and time are part of the definition. All interacting species in a habitat make a community, not a population.' },
      { t: 'mc', topic: 'l7-census', q: 'Which is NOT one of the conditions that make a true census possible?', o: ['The species is common and widespread', 'You can count the organisms faster than they can move', 'The habitat being sampled is small', 'You can tell individuals apart reliably'], a: 0, why: 'Common, widespread species are the hardest to count completely. Censuses are practical for small areas and small, intensively managed populations.' },
      { t: 'mc', topic: 'l7-census', q: 'Researchers photograph humpback whale flukes every season. How do they know they are close to a census?', o: ['They stop seeing new individuals', 'The number of photos per day levels off', 'They have photographed 100 whales', 'Half of the whales are resighted'], a: 0, why: 'Each fluke is distinctive, so every whale can be catalogued. When new IDs stop appearing, nearly everyone has been counted.' },
      { t: 'mc', topic: 'l7-census', q: 'How does this course’s use of “census” differ from the textbook’s?', o: ['In class a census is a complete count of every individual; the book also uses the word for counts that don’t aim to be complete', 'The book requires DNA for a census; the class doesn’t', 'In class, any population estimate is a census', 'There is no difference'], a: 0, why: 'The slide flagged this: the book is too loose with “census” (p. 422).' },
      { t: 'mc', topic: 'l7-subsample', q: 'You set 20 traps in a 1,000 m² field and catch an average of 0.5 mice per trap. What is the best estimate of the total population?', o: ['Cannot say with these data', '500 mice', '2,000 mice', '20,000 mice'], a: 0, why: 'You don’t know how much area each trap samples, so catch per trap can’t be converted to a density.' },
      { t: 'mc', topic: 'l7-subsample', q: 'Which of these measures relative abundance rather than total abundance?', o: ['Frog calls per hour in a breeding chorus', 'Plants per m² in randomly placed quadrats', 'Elephants counted in a complete aerial survey of a reserve', 'A mark–recapture estimate of trout in a pond'], a: 0, why: 'Call rates rise with the number of frogs but can’t be converted to a density.' },
      { t: 'mc', topic: 'l7-uncertainty', q: 'You have sampled 5 quadrats. As you add more, your estimate of the total population will…', o: ['Go either way, depending on what the new quadrats contain', 'Typically go up', 'Typically go down', 'Stay exactly the same'], a: 0, why: 'A sparse quadrat lowers the estimate and a dense one raises it. What reliably improves is your confidence.' },
      { t: 'mc', topic: 'l7-uncertainty', q: 'What reliably happens as you increase the number of samples?', o: ['Confidence in the estimate increases (error falls)', 'The estimate increases', 'The estimate decreases', 'The population becomes a census'], a: 0, why: 'In the Taï chimpanzee example, the predicted coefficient of variation falls as sampling locations increase.' },
      { t: 'mc', topic: 'l7-uncertainty', q: 'Which species would be hardest to estimate well with random quadrats?', o: ['A rare species with a clumped distribution', 'A common species with a regular distribution', 'A common species with a random distribution', 'A tree species planted in evenly spaced rows'], a: 0, why: 'Clumped distributions give large errors, and rare clumped species can be missed even if you double your effort.' },
      { t: 'mc', topic: 'l7-uncertainty', q: 'A habitat suitability model shows lots of suitable mountain lion habitat in the eastern US. What is the danger of using it to judge their status there?', o: ['Mountain lions are absent from much suitable habitat, so the model would overstate where they occur', 'The model ignores topography', 'Mountain lions have a regular distribution', 'Suitability models only work for fish'], a: 0, why: 'A species may not be present everywhere it could be. The model alone would mislead you about status in the east.' },
      { t: 'mc', topic: 'l7-detect', q: 'Driving 1,000 m, you count 4 zebras within 0–50 m of the road and 2 within 50–100 m. What does this pattern tell you?', o: ['You are missing animals, mostly the far ones', 'Zebra density is higher near the road', 'You are missing animals equally at all distances', 'The transect was too narrow'], a: 0, why: 'Detection drops with distance. Distance sampling uses the drop-off to estimate how many distant animals you missed.' },
      { t: 'mc', topic: 'l7-detect', q: 'Which of these was NOT listed as something to adjust for when estimating detection?', o: ['The population’s growth rate', 'The habitat being searched', 'Weather conditions', 'Size, life stage or sex of individuals'], a: 0, why: 'The list also included the distance searched and how you search.' },
      { t: 'mc', topic: 'l7-detect', q: 'In Fujiwara & Caswell’s right whale analysis, which females were essentially certain to be seen?', o: ['Mothers with calves', 'Mature females without calves', 'Immature females', 'None; all had about a 70% chance'], a: 0, why: 'Mothers with calves had a sighting probability near 1. Mature females without calves were about 70% likely to be seen.' },
      { t: 'mc', topic: 'l7-cmr', q: 'What is the essential idea of mark–recapture?', o: ['Use the history of observations to estimate how many individuals you haven’t seen', 'Count every individual exactly once', 'Scale up from the density in quadrats', 'Correct counts for distance from the observer'], a: 0, why: 'The share of marked animals in the second sample tells you what fraction of the population the first sample caught.' },
      { t: 'mc', topic: 'l7-cmr', q: 'Which is NOT an assumption of mark–recapture?', o: ['The population grows between the two samples', 'No births, deaths, immigration or emigration between samples', 'No tags are lost', 'Tags don’t change an animal’s chance of recapture or survival'], a: 0, why: 'The population must be closed. The samples should also be close in time, with good mixing and random sampling.' },
      { t: 'mc', topic: 'l7-cmr', stretch: true, q: 'Between the two samples, some marked fish lose their tags. How does this bias N = MC/R?', o: ['N is overestimated, because R is too small', 'N is underestimated, because R is too small', 'No bias, because C is unaffected', 'N is underestimated, because M is too large'], a: 0, why: 'Tagged fish that lost their tags are recorded as unmarked. R shrinks, so MC/R grows.' },
      { t: 'mc', topic: 'l7-cmr', q: 'In the grizzly bear study in British Columbia, what served as the “mark”?', o: ['DNA profiles from hair samples', 'Ear tags', 'Satellite collars', 'Photos of facial markings'], a: 0, why: '2,062 hair samples from 332 sites identified 98 bears; the population was estimated at 138.' },
      { t: 'num', topic: 'l7-subsample', q: 'You sample one 100 m² quadrat and count 20 plants. Estimate the number of plants in a 1,000 m² area.', a: 200, tol: 0.5, unit: 'plants', why: 'Density = 20 ÷ 100 = 0.2 per m². Total = 0.2 × 1,000 = 200.' },
      { t: 'num', topic: 'l7-subsample', q: 'Five 1 m² quadrats contain 3 individuals in total. The whole field is 40 m². Estimate the total population.', a: 24, tol: 0.5, unit: 'individuals', why: 'Density = 3 ÷ 5 = 0.6 per m². Total = 0.6 × 40 = 24. A true census of this field found 28, a reminder that estimates carry error.' },
      {
        t: 'num', topic: 'l7-subsample', gen: function () {
          var n = G.pick([4, 5, 8, 10]), s = G.pick([1, 2, 4, 5]), area = n * s;
          var c = G.rint(Math.max(2, Math.round(area * 0.3)), area * 3);
          var A = G.pick([100, 200, 500, 1000, 2000]), d = c / area, a = d * A;
          return {
            q: 'You place ' + n + ' random quadrats of ' + s + ' m² each and count ' + c + ' plants in total. Estimate the number of plants in the whole ' + G.fmt(A) + ' m² meadow.',
            a: a, tol: G.tol(a), unit: 'plants',
            why: 'Area sampled = ' + n + ' × ' + s + ' = ' + area + ' m². Density = ' + c + ' ÷ ' + area + ' = ' + G.fmt(d) + ' per m². Total = density × ' + G.fmt(A) + ' ≈ ' + G.fmt(a, 1) + '.'
          };
        }
      },
      { t: 'num', topic: 'l7-cmr', q: '40 trout are marked on the first visit. A week later, 60 trout are caught and 50% of them are marked. How many trout are there?', a: 80, tol: 0.5, unit: 'trout', why: 'R = 50% of 60 = 30. N = MC/R = 40 × 60 ÷ 30 = 80.' },
      {
        t: 'num', topic: 'l7-cmr', gen: function () {
          var f = G.pick([[1, 2], [1, 3], [1, 4], [1, 5], [2, 5], [3, 10], [3, 4], [1, 10]]);
          var C = f[1] * G.rint(2, 10), R = C * f[0] / f[1];
          var M = f[0] * G.rint(5, 40), N = M * f[1] / f[0];
          var sp = G.pick(['trout in a pond', 'newts in a wetland', 'deer mice in a woodlot', 'painted turtles in a lake', 'crayfish in a stream']);
          var pct = Math.round(f[0] / f[1] * 100);
          var usePct = Math.random() < 0.5;
          return {
            q: 'You mark and release ' + M + ' ' + sp + '. A week later you catch ' + C + ', and ' + (usePct ? pct + '% of them are marked' : R + ' of them are marked') + '. Estimate the population size.',
            a: N, tol: 0.51, unit: 'individuals',
            why: (usePct ? 'R = ' + pct + '% of ' + C + ' = ' + R + '. ' : '') + 'N = MC/R = ' + M + ' × ' + C + ' ÷ ' + R + ' = ' + G.fmt(N) + '.'
          };
        }
      },
      { t: 'num', topic: 'l7-detect', q: 'Mature female right whales without a calf are about 70% likely to be seen. You observe 100 of them. Estimate how many there really are (nearest whole number).', a: 143, tol: 0.6, unit: 'whales', why: '100 ÷ 0.7 ≈ 142.9, so about 143. Mothers with calves are always seen, so no correction is needed for them.' },
      {
        t: 'num', topic: 'l7-detect', gen: function () {
          var p = G.pick([0.25, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]), obs = G.rint(12, 180), a = obs / p;
          var what = G.pick(['songbirds on point counts', 'frogs on a night survey', 'lizards along a transect', 'mature female right whales without calves']);
          return {
            q: 'Each individual has a ' + Math.round(p * 100) + '% chance of being detected. You observe ' + obs + ' ' + what + '. Estimate how many are actually present (nearest whole number).',
            a: a, tol: G.tol(a, 0.004),
            why: 'Estimated number = observed ÷ detection probability = ' + obs + ' ÷ ' + p + ' ≈ ' + G.fmt(a, 1) + '.'
          };
        }
      },
      { t: 'recall', topic: 'l7-census', q: 'What is a census, when is one possible, and why are they rare in wildlife biology?', model: 'A census counts every individual (total population = number observed). It is possible when you can count organisms faster than they move (mapping trees, aerial surveys of large mammals in fixed areas), when the habitat is small, or when individuals can be told apart reliably (fluke photo-ID, stripes, scars, bands; you are close once you stop seeing new individuals). Censuses are rare because they are practical only for small areas or populations and are usually very costly. They are more common in conservation, where populations are small and intensively managed.', points: ['Census = count of every individual', 'Count faster than they move / small habitat', 'Individuals reliably distinguishable (stop seeing new ones)', 'Rare: only small areas or populations, and costly'] },
      { t: 'recall', topic: 'l7-cmr', q: 'Explain mark–recapture: the equation, what each term means, and at least four assumptions.', model: 'N = MC/R. M = number captured, marked and released on the first visit; C = total captured on the second visit; R = number in the second sample that were already marked. The logic is R/C = M/N: the marked share of the second sample equals the marked share of the population. Assumptions: the population is closed (no immigration, emigration, births or deaths); sampling events are close in time; the population mixes and sampling is random; no tags are lost; tags and traps don’t affect recapture or survival.', points: ['N = MC/R with M, C, R defined correctly', 'Logic: marked fraction in sample = marked fraction in population', 'Closed population (no movement, births or deaths)', 'At least two more: close in time, mixing/random sampling, no tag loss, tags don’t affect behavior or survival'] },
      { t: 'recall', topic: 'l7-uncertainty', q: 'What makes population estimates from subsamples uncertain, and what can you do about it?', model: 'Going from samples to a population always carries error. More samples reduce the uncertainty, though the estimate itself may move up or down as samples are added. Error also depends on spatial distribution: regular distributions are easy to sample, clumped ones give large errors, and rare clumped species can be missed entirely. Habitat suitability models, built from factors such as topography, temperature, nutrients, substrate and wind exposure, let you focus sampling on plausible habitat, but a species may be absent from suitable habitat.', points: ['More samples = lower error (estimate can go either way)', 'Clumped distributions give large errors; rare clumped species worst', 'Habitat suitability models focus sampling', 'Caveat: species not present everywhere suitable'] },
      { t: 'recall', topic: 'l7-detect', q: 'Why do raw counts undercount populations, and how can you correct for it? Use the zebra and right whale examples.', model: 'You rarely detect every individual that is present. In the zebra transect, counts fell from 4 (0–50 m) to 2 (50–100 m) because distant animals are missed; distance sampling uses that drop-off to estimate how many were missed. Detection also depends on how and where you search, habitat, weather, and the individual’s size, life stage and sex. Right whale mothers with calves are always seen, but mature females without calves are seen only about 70% of the time, so 100 observed means about 100 ÷ 0.7 ≈ 143.', points: ['Detection probability is usually below 1', 'Distance sampling: counts fall with distance, correct for the missed far animals', 'Other factors: search method, habitat, weather, traits of individuals', 'Divide by detection probability (100 ÷ 0.7 ≈ 143)'] }
    ]
  });
})();
