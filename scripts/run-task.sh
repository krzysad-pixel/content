#!/usr/bin/env bash
set -euo pipefail

TASK_FILE="$(find tasks/active -maxdepth 1 -type f -name 'TASK-*.md' | head -n 1 || true)"
[ -n "${TASK_FILE:-}" ] || exit 0

PROMPT=$(cat <<EOF
Pracujesz nad taskiem zapisanym w pliku:
$TASK_FILE

Czytaj też:
- MASTER_BRIEF.md
- ai/AI_CONTEXT.md
- ai/AI_RULES.md
- ai/REPO_MAP.md
- docs/ops/PROJECT_EXECUTION_MODEL.md
- docs/ops/AGENT_PROFILES.md
- docs/ops/TASK_PROFILES.md
- docs/ops/STATUS_MODEL.md

Zastosuj pipeline wynikający z execution_profile taska.
Nie zgaduj. Nie rozszerzaj scope. Aktualizuj statusy.
EOF
)

echo "$PROMPT"
echo "[run-task] tu należy podpiąć właściwe wywołanie claude CLI"
