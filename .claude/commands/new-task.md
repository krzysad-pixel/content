Create a new task file for the project task queue.

## Steps

1. Read `tasks/QUEUE_INDEX.md` to determine the next task number (e.g. if last task is TASK-003, new one is TASK-004).

2. Ask the user conversationally for the task details:
   - **Title:** Short, action-oriented (e.g. "Implement user authentication")
   - **Goal:** What should this task achieve? (2-3 sentences max)
   - **In scope:** Specific work to be done (bullet list)
   - **Out of scope:** What are we explicitly excluding to prevent scope creep?
   - **Acceptance criteria:** Concrete, verifiable conditions (checkboxes)
   - **Size:** XS / S / M / L / XL and estimated hours
   - **Dependencies:** Does this task depend on another task being done first?

3. Read `tasks/templates/task-template.md` to get the task file structure.

4. Create the file `tasks/queue/TASK-XXX-[short-slug].md` filled with the gathered information.

5. Update `tasks/QUEUE_INDEX.md`:
   - Add the new task to the queue table
   - Set correct priority position
   - Set status to `ready` (or `blocked` if it has dependencies)

6. Confirm to the user:
   - File created: `tasks/queue/TASK-XXX-[name].md`
   - Position in queue: #N
   - Dependencies: (if any)

## Notes

- If the user gives vague acceptance criteria (e.g. "it should work"), probe for something concrete and verifiable
- If scope is unclear, push for explicit out-of-scope items — this prevents future misunderstandings
- Size guide: XS = <1h, S = 1-2h, M = 2-4h, L = 4-8h, XL = >8h (should be split)
