# ConsBio Recall: Lectures 7–10

A second study site for Conservation Biology, covering the population-numbers lectures. It works like the Lectures 2–6 site in the repository root: high-yield notes per lecture, quick-recall prompts, and an active recall exam at the end of each lecture.

| Lecture | Topic | Exam |
|---|---|---|
| 7 | Detecting problems: measuring population size (census, quadrats, detection, mark–recapture) | 28 questions |
| 8 | Population dynamics (BIDE, λ and R, geometric and logistic growth, survivorship) | 28 questions |
| 9 | Evaluating population interventions (life cycles, transition rates, projection matrices, Dall sheep) | 24 questions |
| 10 | Population viability analysis (one-stage projection, stable stage structure, loggerhead TEDs, stochasticity) | 30 questions |

## What’s different from the first site

- **Fresh numbers.** 12 calculation questions (mark–recapture, quadrat scaling, detection, λ, BIDE, logistic steps, transition rates, one-stage matrix projections, good/bad-year growth) generate new numbers every time they are asked, including when you retry a flagged question. You practice the method, not the answer.
- **Formula sheet.** `#formulas` lists every equation from Lectures 7–10 as a cover-and-recall card, labelled with what the instructor said about it (know it, understand it, exercises only). Cards can be shuffled.
- **Calculation drill.** 12 calculation problems across all four lectures, from the formula sheet or the Mixed exam page.
- **Matrix and life-cycle figures.** The loggerhead and Dall sheep matrices use one colour code for F (reproduce), S (survive and stay) and G (survive and grow), matching the life-cycle diagrams. The stable-stage chart is projected from the lecture’s matrix.

Everything else carries over: confidence ratings, flags for confident mistakes and lucky guesses, the IUCN-style gap map, retrying only flagged questions, and balanced and gap-targeted mixed exams. Progress is saved in this browser only, separately from the Lectures 2–6 site.

## Running it

Static files, no build step. Open `index.html`, or serve the repository root and visit `/lectures-7-10/`:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000/lectures-7-10/
```

## Layout

```
index.html              page shell
css/style.css           the first site's styles plus matrix, formula-card and third-series additions
js/gen.js               helpers for fresh-number questions
js/figures.js           SVG figures and HTML projection matrices
js/formulas.js          formula sheet data
js/lectures/l7–l10.js   notes, recall prompts and exam questions
js/app.js               routing, exam engine, formula sheet, drill and gap map
```

In `exam` arrays, a multiple-choice question lists the correct option first (`a: 0`); options are shuffled when shown. A calculation with a `gen` function returns `{ q, a, tol, why }` each time it is asked.
