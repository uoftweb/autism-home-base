# AHB Weekly Planner

A web app for **Autism Home Base**, a non-profit that runs social and recreational programs for autistic adults, their friends and families. It replaces the Excel-based planning of the 8-week summer program with a weekly planner that tracks attendance and sends updates to each pod's families.

Built by the UofT Web Dev Club.

## Tech stack

| Part | Technology |
|---|---|
| Front end | Next.js (App Router) with React and JavaScript |
| Back end | Supabase (PostgreSQL, auth, storage, row-level security) |
| Hosting | Vercel and Supabase |

## Getting started

```bash
# 1. Download the code
git clone <repository-url>
cd autism-home-base

# 2. Install dependencies (takes a minute)
npm install

# 3. Create your local environment file
cp .env.example .env.local        # on Windows: copy .env.example .env.local

# 4. Start the dev server
npm run dev
```

Open <http://localhost:3000>. Edits you save show up in the browser automatically.

The default `.env.local` uses test data (`NEXT_PUBLIC_USE_MOCK_DATA=true`), so you do **not** need any Supabase keys to work on the UI.

## Useful commands

| Command | What it does |
|---|---|
| `npm run dev` | Start the app locally |
| `npm run lint` | Check code for problems |
| `npm run build` | Make a production build (run before opening a PR) |

## Environment variables

All variables are documented in [`.env.example`](.env.example). Never commit `.env.local`.

| Variable | Needed for UI work? | Purpose |
|---|---|---|
| `NEXT_PUBLIC_USE_MOCK_DATA` | Yes (`true`) | Use test data from `src/mock-data` |
| `NEXT_PUBLIC_SUPABASE_URL` | No | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | No | Supabase public key |
| `SUPABASE_SERVICE_ROLE_KEY` | No | Server-only admin key. Never share it |

## Project structure

```
src/
  app/                  Pages. A folder name is the URL (app/(app)/calendar = /calendar)
  components/
    ui/                 Shared: Button, Card, Input, Badge
    layout/             Navbar, PageHeader
    auth/               Login form
    dashboard/          Dashboard cards
    calendar/           Weekly calendar
    attendance/         Attendance table
    announcements/      Announcement list and form
    staff-feed/         Shared staff notes
  mock-data/            Test data shaped like the database tables
  lib/                  Constants and helpers
  styles/               Design tokens and component styles
docs/                   Team documentation
.github/                PR template, issue templates, CI
```

## How we work

- **Branching:** see [`docs/branching.md`](docs/branching.md). Never push to `main`; open a pull request.
- **Tickets:** [`docs/tasks.md`](docs/tasks.md) and the project Kanban board ([`docs/kanban.md`](docs/kanban.md)).
- **Design:** the Figma file and [`docs/design-system.md`](docs/design-system.md). Use tokens, not hard-coded colours.
- **Architecture:** [`docs/architecture.md`](docs/architecture.md).
