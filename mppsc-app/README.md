# MPPSC Prep Tracker

A full-stack study & practice tracker for the MPPSC exam-prep MCQ content in this workspace, with spaced-repetition
revision, mock tests, bookmarks, search, and progress statistics — all running locally via Docker Compose.

## Features

- 🏠 **Home dashboard** — total MCQs across all units, per-unit MCQ counts, attempted/accuracy, streaks, daily goal.
- 📚 **Unit & topic browsing** — drill into any unit to see its topics and per-topic progress.
- 📝 **Practice mode** — practice a whole unit or a single topic, shuffled, with instant feedback + explanations.
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

On first boot, the database will be empty. Click **"Import MCQ Content"** on the home page (or go to
Settings → "Re-import Content") to scan the MCQ HTML files and populate all units/topics/questions.
Alternatively, run it from the CLI:

```bash
docker compose exec backend npm run import
```

The importer is safe to re-run at any time — it updates content in place and preserves all your practice
history, bookmarks, and revision schedule.

### Content source

The backend container mounts the parent folder (the `Structured-units` workspace root, one level above
`mppsc-app`) read-only at `/content`, and auto-detects the numbered unit folders (e.g. `1) मध्यप्रदेश का इतिहास...`
through `10) MP की जनजातीय...`). No changes are made to your original HTML files.

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
