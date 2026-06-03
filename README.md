# People Hub — HR Project Dashboard

A minimal, soft-gradient project management dashboard for the **HR** team
workspace. Track tasks, follow team progress, and stay on top of deadlines
from a single view.

## Features

- **HR board** — Kanban columns for *To Do / In Progress / Done* with
  priority chips, tags, progress bars, due dates and assignee avatars.
- **Team panel** — gradient avatars, roles, and a live count of each
  person's active workload.
- **Task detail modal** — full description, assignees, due date, and an
  interactive subtask checklist that updates the task's progress live.
- **Timeline** — a three-week schedule strip that plots every upcoming
  deadline by due date.
- **Sidebar navigation** — workspace sections and a switchable project list.

## Visual style

Minimal layout, soft purple/pink gradients, generous rounded corners, and
subtle glassmorphism. All styling lives in a single `src/index.css` driven
by CSS custom properties, so the palette is easy to retheme.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Deploying / uploading the site

> **Important:** this is a React app — it must be **built** before it will run.
> Do **not** upload the raw source files (the project `index.html` points at
> `/src/main.tsx`, which a browser cannot run, so you'd get a blank page).

Run the build, then upload the result:

```bash
npm install
npm run build
```

The build produces a **single, fully self-contained file**: `dist/index.html`.
All CSS and JavaScript (and even the favicon) are inlined into that one file —
there are no external assets and no path assumptions.

- **Any static host** (Netlify, Vercel, GitHub Pages, S3, your own server):
  upload the `dist/` folder, or just the single `dist/index.html`.
- **No host at all:** double-click `dist/index.html` to open it straight in a
  browser — it works offline.

Because everything is inlined, it works whether it's served from a domain root
(`/`) or a subfolder (`/my-project/`).

A prebuilt copy is committed at [`dist/index.html`](dist/index.html), so you can
upload that file as-is without running anything.

## Tech

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for the dev server and build
- No UI framework — hand-rolled CSS for full control over the aesthetic

Data is mocked in `src/data/mockData.ts`; swap it for an API to go live.
