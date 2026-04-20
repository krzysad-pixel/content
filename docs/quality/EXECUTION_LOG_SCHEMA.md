# EXECUTION_LOG_SCHEMA

## Cel
Ustandaryzowany log wykonania taska.

## Proponowany format
```json
{
  "task_id": "TASK-000",
  "project": "VDashboard",
  "started_at": "2026-03-23T10:00:00Z",
  "finished_at": "2026-03-23T10:20:00Z",
  "execution_profile": "analysis_only",
  "agents_run": [
    "planner-checker",
    "reviewer",
    "docs-updater",
    "risk-logger"
  ],
  "final_status": "done",
  "test_status": "tests_not_required",
  "docs_status": "docs_updated",
  "risk_status": "no_risk",
  "needs_human": false,
  "notes": []
}
```
