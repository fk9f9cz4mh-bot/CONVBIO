# ConsBio Recall

A study site for Conservation Biology Lectures 2–6. Lectures 7–10 have their own site in [`lectures-7-10/`](lectures-7-10/README.md). Each lecture has high-yield notes condensed from the posted slides and an active recall exam at the end.

| Lecture | Topic |
|---|---|
| 2 | The history of conservation and human impacts |
| 3 | Measuring and defining biodiversity |
| 4 | Patterns and trends in biodiversity |
| 5 | Endangered species and biodiversity loss |
| 6 | Extinction and de-extinction |

## How it works

- **Notes.** Each lecture opens with the instructor's "know this" and "not on the test" flags from the slides, then the high-yield content section by section, with tables and diagrams.
- **Quick recall.** Every section ends with prompts to answer from memory before revealing.
- **Exams.** 113 questions in total: multiple choice, Shannon-index and species–area calculations, and free-recall questions graded against a key-point checklist. Notes are hidden while you test.
- **Confidence rating (optional).** Pick an answer and press Submit answer; tapping Sure, Unsure or Guessing first is optional. When you rate, confident mistakes and correct guesses are flagged for review.
- **Gap map.** Every topic gets an IUCN-style status (LC → CR, or NE if untested) from your latest answers. Results link back to the weak sections, and you can retry only the flagged questions.
- **Mixed exams.** A balanced exam draws 5 questions per lecture. A gap-targeted exam draws the 20 questions you're weakest on.

Progress is saved in your browser's `localStorage` only.

## Running it

It's a static site with no build step. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

It also works as-is on GitHub Pages.

## Layout

```
index.html           page shell
css/style.css        styles (light and dark themes)
js/figures.js        inline SVG diagrams (accumulation curves, species–area curve, phylogeny…)
js/lectures/l2–l6.js notes, recall prompts and exam questions for each lecture
js/app.js            routing, exam engine, scoring and gap map
```

To add or edit questions, change the `exam` array in the matching `js/lectures/lN.js` file. In multiple-choice questions `a` is the index of the correct option; options are shuffled when shown.
