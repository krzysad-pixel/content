# EXECUTION_RUNBOOK

## Flow zadania
1. Task trafia do `tasks/queue/`.
2. Worker przenosi task do `tasks/active/`.
3. `planner-checker` weryfikuje gotowość.
4. Jeśli task jest gotowy, wykonywany jest pipeline wynikający z `execution_profile`.
5. Wyniki są zapisywane w tasku i logach.
6. Task trafia do:
   - `tasks/review/`
   - albo `tasks/blocked/`
   - albo `tasks/done/`

## Kiedy zatrzymać automat
- brak danych wejściowych,
- konflikt dokumentacji,
- testy nie przechodzą po 2 próbach,
- potrzebna decyzja człowieka,
- ryzyko wyjścia poza zakres taska.

## Kiedy powiadomić Mac
- `needs_human = true`
- `status = blocked`
- `risk_status = needs_decision`

## Zasada
Każdy etap zostawia ślad:
- task status,
- test status,
- docs status,
- risk status,
- log JSON.
