# CLAUDE.md

## Tech Stack

- Plain HTML, CSS, and JavaScript only.
- No frameworks and no build step: files open directly in a browser.

## Project Structure

- `index.html`: the single page, with one lesson section per slide (brief, deliverables, pitches)
- `styles.css`: plain layout and light/dark theme colours
- `script.js`: theme toggle and switching between lesson sections
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

One page (`index.html`) with one lesson section per slide. Only one lesson shows at a time. Students switch with JavaScript, using the lesson buttons at the top or the Previous/Next buttons at the bottom, and the page address (`#lesson-2`) records which lesson is open. The light/dark toggle is in the header.

1. **Your brief**: the five teams and countries
2. **What to deliver**: the five parts of the team's plan
3. **Pitches and judging**: the 4-minute pitch, peer judging, and debrief

### Phases

- **Phase 1: the course built from my slides.** One lesson per slide, switched with JavaScript, plain styling. *Done.*
- **Phase 2: design.** Style the site once it works.
