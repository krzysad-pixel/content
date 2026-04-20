Conduct a structured project intake for a new project. This skill guides through gathering all necessary information to set up a project for AI-assisted development.

## How to start

1. Check the intake status:
   - Read `docs/business/PROJECT_CHARTER.md` — is it filled (not just placeholders)?
   - Read `docs/business/PROBLEM_STATEMENT.md` — is it filled?
   - Read `docs/business/USER_STORIES.md` — is it filled?
   - Read `docs/business/BUSINESS_MODEL.md` — is it filled?
   - Read `ai/AI_CONTEXT.md` — is it filled?
   - Read `planning/MASTER_PLAN.md` — is it filled?

2. Based on what is already filled, determine which session to start from. Do not repeat completed sessions.

3. Tell the user briefly: which sessions are done and which we're starting from.

4. Begin the first incomplete session.

---

## Session 1 — Problem & Goal

**Goal:** Fill `docs/business/PROBLEM_STATEMENT.md` and `docs/business/PROJECT_CHARTER.md`

Ask conversationally — one or two questions at a time, wait for the answer, probe, move on. Save after each meaningful answer. Confirm what was saved and where.

Questions about the problem:
- Tell me about this project — what do you want to build and why?
- What currently doesn't work or is inefficient? What's the pain?
- Who specifically feels this pain — what roles, how many people?
- How much time or money does this problem cost per week/month?
- What happens if we DON'T do this — does the pain grow or is it liveable?

Questions about goal and success:
- What does success look like 3 months after launch? Be specific.
- How will you measure it — what will look different, what will be faster/simpler?
- What MUST work for you to say "project complete" — without what is it not done?
- What are we deliberately leaving for v2?

Questions about context and constraints:
- What's the deadline? Is there an external date forcing the pace?
- What are the constraints — budget, time, resources, existing infrastructure?
- Who owns the project — who signs off that "it's done"?

**Save to:**
- `docs/business/PROBLEM_STATEMENT.md` — sections: context, problem, scale, why now
- `docs/business/PROJECT_CHARTER.md` — sections: goal, scope, definition of success, constraints, stakeholders

After the session: summarize what was captured, confirm with the user, then ask if they're ready for Session 2 or want to continue later.

---

## Session 2 — Users & Scope

**Goal:** Fill `docs/business/USER_STORIES.md` and `docs/business/BUSINESS_MODEL.md`

Questions about users:
- Who will use the system day-to-day? Describe these people — roles, technical skill level.
- What does each role want to achieve in the system — what is their main goal?
- What do they dislike most about the current way of working (the one we're replacing)?

Questions about features:
- Describe a typical user's workday with this system — from login to end of day.
- What absolutely MUST be in v1 for the system to be useful?
- What would you like to have but could live without at launch?
- Are there things that should NEVER be in this system?

Questions about business value:
- How do you justify the time spent on this project — what specifically do you gain?
- Is there someone above you who needs to see results — what result do they want to see?

**Save to:**
- `docs/business/USER_STORIES.md` — personas + stories with acceptance criteria + MoSCoW
- `docs/business/BUSINESS_MODEL.md` — value, ROI (even estimate), KPIs

---

## Session 3 — Stack & Infrastructure

**Goal:** Fill `ai/AI_CONTEXT.md`, `CLAUDE.md`

Questions about stack:
- What stack do you prefer for this project (frontend, backend, database)?
- Is there anything you must use because you already have it (existing API, server, tech from previous projects)?
- Do you have a template/boilerplate to clone, or starting from scratch?

Questions about infrastructure:
- What server will this land on? What other projects do you already have there?
- What port, domain, reverse proxy (nginx)?
- What does a typical deploy look like for your projects (docker compose, npm build, etc.)?
- Is the repo private on GitHub? What's the repo name? (if it doesn't exist yet — create it now)

Questions about integrations:
- Does this project need to connect to external systems or APIs?
- Are we reusing anything from previous projects (gateway, auth, etc.)?

Questions about UI/design (if project has a frontend):
- Do we have a prototype/mockup? (Figma, sketch, existing HTML)
- If not — do we want to generate one?

**Save to:**
- `ai/AI_CONTEXT.md` — stack, architecture, paths, modules
- `ai/AI_RULES.md` — project-specific rules (if they differ from defaults)
- `CLAUDE.md` — server, paths, start/stop commands, ports

**GitHub checkpoint:**
- [ ] Repo created on GitHub
- [ ] URL noted in `ai/AI_CONTEXT.md`
- [ ] `.gitignore` includes `.env`

---

## Session 4 — Execution Plan & First Tasks

**Goal:** Fill `planning/MASTER_PLAN.md`, `planning/MILESTONES.md`, create first tasks in `tasks/queue/`

Based on data collected in sessions 1-3, propose:
- Project phases (A, B, C) — present proposal to user
- Task list per phase — propose granularity, ask if it's OK
- Milestone dates — ask for realistic dates based on constraints from session 1
- Cost estimate per task — XS/S/M/L/XL sizing

Confirmation questions:
- Does the phase breakdown make sense? What would you change?
- Is the task granularity right (not too big, not too small)?
- Are the milestone dates realistic?
- Which task do we do FIRST?

**Save to:**
- `planning/MASTER_PLAN.md` — phases, tasks, architecture contract
- `planning/MILESTONES.md` — dates and criteria
- `planning/DECISIONS.md` — first architectural decisions
- `tasks/queue/` — task files (one file per task, using `tasks/templates/task-template.md`)
- `tasks/QUEUE_INDEX.md` — updated index with ordering

---

## After completing all 4 sessions

1. Give the user a summary:
   - What was captured and where
   - What the first task to execute is
   - The exact command to start the first CLI session: `/session-start`
2. Say clearly: **"The project is ready for the first CLI session."**
