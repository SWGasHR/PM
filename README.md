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

## Tech

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for the dev server and build
- No UI framework — hand-rolled CSS for full control over the aesthetic

Data is mocked in `src/data/mockData.ts`; swap it for an API to go live.
