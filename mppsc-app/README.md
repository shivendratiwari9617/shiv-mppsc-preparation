# MPPSC Prep Tracker

A full-stack study & practice tracker for the MPPSC exam-prep MCQ content in this workspace, with spaced-repetition
revision, mock tests, bookmarks, search, and progress statistics — all running locally via Docker Compose.

## Features

- 🏠 **Home dashboard** — total MCQs across all units, per-unit MCQ counts, attempted/accuracy, streaks, daily goal.
- 📚 **Unit & topic browsing** — drill into any unit to see its topics and per-topic progress.
- 📝 **Practice mode** — practice a whole unit or a single topic, shuffled, with instant feedback + explanations.
- 📝 **MPSI Notes** — deep-dive Markdown study notes (`mpsi-syllabus/notes/`), browsable by category with a
  mark-as-read toggle and prev/next navigation.
- ✅ **Syllabus Checklist** — the full official MPPSC Prelims syllabus (`mppsc-syllabus/prelims/`) as a per-topic
  checklist, with checkboxes tracked per item and progress bars per file/unit.
- ⏱️ **Mock test mode** — timed tests across one or all units, optionally filtered by priority tag.
- 🔁 **Leitner spaced-repetition** — questions you get wrong resurface sooner; a "Revision Due" queue schedules
  reviews at increasing intervals (1 → 3 → 7 → 14 days) as you answer correctly.
- ❌ **Wrong-answers deck** — every question you've ever missed, in one place.
- 🔖 **Bookmarks** — flag any question during practice to revisit later.
- 🔍 **Full-text search** — find MCQs by keyword across all units, then practice the results.
- 📊 **Statistics** — 90-day activity heatmap, accuracy by unit, accuracy by priority tag.
- ⚙️ **Settings** — daily goal, re-import content, reset progress.
- 🌙 Dark mode, responsive UI.

## Architecture

- **Frontend**: React + TypeScript + Vite + TailwindCSS, served by Nginx (which also reverse-proxies `/api` to the backend).
- **Backend**: Node.js + Express + TypeScript + Prisma ORM.
- **Database**: PostgreSQL 16.
- All three services run via a single `docker compose up`.

## Running it

From the `mppsc-app` folder:

```bash
docker compose up --build
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:3000/api/* (proxied) or http://localhost:4000/api/* directly

On first boot, the database will be empty. Click **"Import Content"** on the home page (or go to
Settings → "Re-import Content") to scan the content folders and populate all units/topics/questions, MPSI
notes, and the syllabus checklist in one go. Alternatively, run it from the CLI:

```bash
docker compose exec backend npm run import
```

The importer is safe to re-run at any time — it updates content in place and preserves all your practice
history, bookmarks, revision schedule, read/checked state on notes and checklist items. It can take several
minutes on a first run given the volume of content (1,700+ MCQ topics, 270+ notes, 2,000+ checklist items).

### Content source

The backend container mounts the parent folder (the workspace root, one level above `mppsc-app`) read-only at
`/content`. It auto-detects three separate content trees there, no changes are ever made to the source files:

- **MCQ practice content** — numbered unit folders (`1) मध्यप्रदेश का इतिहास...` through `10) MP की जनजातीय...`).
- **MPSI study notes** — `mpsi-syllabus/notes/<NN-category>/<NN-point>.md`.
- **Syllabus checklist** — `mppsc-syllabus/prelims/<unit-NN-... or paper-N-...>/**/*.md`.

### Configuration

Copy `.env.example` to `.env` to customize the Postgres credentials (optional — sensible defaults are used
otherwise):

```bash
cp .env.example .env
```

## Stopping / resetting

```bash
docker compose down          # stop containers, keep data
docker compose down -v       # stop containers and delete the Postgres volume (full reset)
```
