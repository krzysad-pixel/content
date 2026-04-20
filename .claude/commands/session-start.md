Start a project work session. Read the project context and prepare for focused implementation work.

## Steps

1. Read the following files in this order:
   - `ai/AI_CONTEXT.md` — what the project is, stack, architecture
   - `ai/AI_RULES.md` — work rules and autonomy boundaries
   - `ai/REPO_MAP.md` — what is where in the repo
   - `tasks/QUEUE_INDEX.md` — current state of the task queue
   - The current file in `tasks/active/` (if any exists)

2. Run: `git pull origin main` (or remind the user to do so if you can't run commands directly)

3. Summarize clearly:
   - **Project:** one-line description of what we're building
   - **Active task:** title + goal + acceptance criteria (from the task file)
   - **Session goal:** what needs to be done today to complete the task
   - **Out of scope today:** what we are explicitly NOT touching this session

4. If there is no active task:
   - Show the top 3 tasks from `tasks/queue/` ordered by priority
   - Ask which one to move to `tasks/active/` to start

5. Ask: "Ready to start? Any constraints for this session (time, scope changes)?"

## Notes

- Do NOT load the entire repo — use REPO_MAP + specific files as needed
- One task per session — do not start a second task if the first isn't done
- If the active task file is missing but QUEUE_INDEX shows one active — flag it and ask the user
- Default mode: work autonomously within task scope, ask only when going out of scope, changing architecture, or facing a destructive operation
