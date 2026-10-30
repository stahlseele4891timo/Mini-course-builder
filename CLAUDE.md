# CLAUDE.md

## Tech Stack

- Plain HTML, CSS, and JavaScript only.
- No frameworks and no build step: files open directly in a browser.

## Project Structure

- `index.html`: the single long scrolling page (brief, deliverables, pitches, plan template)
- `styles.css`: layout and light/dark theme colours
- `script.js`: theme toggle and saving the plan template in the browser
- `Branding_and_Marketing_Activity.pptx`: an earlier sample 3-slide deck
- `README.md`: project title

## Key Requirements

1. Every page must be responsive and work on desktop, tablet, and phone.
2. Users can toggle between a light and a dark theme. The default is the light theme.

## Rules for Claude

- Explain technical terms in plain language.
- Ask before making big changes.
- Ask rather than guess.

## Feature Plan

### Site structure

One long scrolling page (`index.html`), no separate pages. A sticky header holds links that jump to each section, plus the light/dark toggle. Students scroll down in this order:

1. **Brief**: the five teams and countries
2. **Deliverables**: the five things each team must produce
3. **Pitches**: the 4-minute pitch, peer judging, and debrief
4. **Draft your plan**: a form with one box per deliverable, saved in the student's own browser

### Phases

- **Phase 1: the course built from my slides.** The three lessons plus the plan template, built once from the uploaded deck. *Done.*
- **Phase 2: hand-in.** Add a copy/print button so students can submit their plan. Only if wanted.
