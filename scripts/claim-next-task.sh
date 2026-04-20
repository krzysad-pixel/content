#!/usr/bin/env bash
set -euo pipefail

NEXT_TASK="$(find tasks/queue -maxdepth 1 -type f -name 'TASK-*.md' | sort | head -n 1 || true)"
if [ -z "${NEXT_TASK:-}" ]; then
  exit 0
fi

BASENAME="$(basename "$NEXT_TASK")"
mv "$NEXT_TASK" "tasks/active/$BASENAME"
bash scripts/update-queue-index.sh
echo "[claim] moved $BASENAME to active"
