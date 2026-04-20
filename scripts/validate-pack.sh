#!/usr/bin/env bash
set -euo pipefail

required=(
  "handoff/HANDOFF_FULL_CONTEXT.md"
  "handoff/IMPLEMENTATION_REQUEST_FOR_CLAUDE.md"
  "docs/ops/PROJECT_EXECUTION_MODEL.md"
  "docs/ops/AGENT_PROFILES.md"
  "docs/ops/TASK_PROFILES.md"
  "docs/ops/STATUS_MODEL.md"
  ".claude/agents/planner-checker.md"
  ".claude/agents/implementer.md"
  ".claude/agents/test-runner.md"
  ".claude/agents/reviewer.md"
  ".claude/agents/docs-updater.md"
  ".claude/agents/risk-logger.md"
  "scripts/worker.sh"
  "scripts/run-task.sh"
)

for f in "${required[@]}"; do
  if [ ! -f "$f" ]; then
    echo "[missing] $f"
    exit 1
  fi
done

echo "[ok] pack structure validated"
