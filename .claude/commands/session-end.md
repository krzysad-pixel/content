Close the current work session: verify done criteria, update bookkeeping, commit, and push.

## Steps

1. Read the active task file from `tasks/active/` to check acceptance criteria.

2. Verify Definition of Done — for each item, confirm status:
   - [ ] Code works per acceptance criteria from the task file
   - [ ] No errors in logs (docker logs / npm run build / relevant check)
   - [ ] Documentation updated (if task changed API, architecture, or stack)
   - [ ] `planning/TASK_COST_LOG.md` entry filled (actual time + token cost if available)
   - [ ] Task file has "Notatki z realizacji" section filled in

3. If all criteria are met:
   - Move task file: `tasks/active/TASK-XXX.md` → `tasks/done/TASK-XXX.md`
   - Update `tasks/QUEUE_INDEX.md`:
     - Remove task from active
     - Move to "Zrealizowane taski" table with today's date
     - Update "Następny w kolejce" to next task from queue

4. Persist findings:
   - Technical knowledge → relevant file in `docs/`
   - Deferred work → `planning/BACKLOG.md`
   - Actionable follow-ups → new tasks in `tasks/queue/` (use `/new-task` skill if needed)
   - Architectural decisions → `planning/DECISIONS.md`

5. Commit and push:
   ```bash
   git add -A
   git commit -m "task: TASK-XXX — [brief description of what was done]"
   git push origin main
   ```

6. Confirm to the user:
   - Task closed: TASK-XXX
   - Next task in queue: TASK-YYY (title)
   - Commit pushed: yes/no
   - Any open follow-ups created: list them

## If task is NOT done

If acceptance criteria are not met, do NOT close the task. Instead:
- List which criteria are unmet
- Ask: continue now, or leave active for next session?
- If leaving for next session: update the task file with current status notes

## Notes

- Never close a task with failing acceptance criteria
- If no task is active, say so and ask what to do
- Keep `tasks/active/` to max 1 file at all times
