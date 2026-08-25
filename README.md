# Portfolio

My software developer portfolio site. Plain TypeScript compiled to static assets — no framework — deployed to Azure Static Web Apps via GitHub Actions.

## Stack

TypeScript 5.5 · vanilla DOM · Azure Static Web Apps

## Layout

```
src/
  index.html          markup
  main.ts             rendering and interaction
  styles.css          styling
  data/projects.json  project entries, edited by hand
.github/workflows/    Azure Static Web Apps deploy
```

Projects are data, not markup — adding one means an entry in `src/data/projects.json`, not a new template.

## Running

```bash
npm install
npm run build      # tsc
npm run watch      # tsc --watch
```

Open `src/index.html` directly, or serve the folder with any static server.

## Deploying

Pushes to the default branch trigger the Azure Static Web Apps workflow. No manual step.
