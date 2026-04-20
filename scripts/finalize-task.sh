#!/usr/bin/env bash
set -euo pipefail

TASK_FILE="$(find tasks/active -maxdepth 1 -type f -name 'TASK-*.md' | head -n 1 || true)"
[ -n "${TASK_FILE:-}" ] || exit 0

echo "[finalize] review ręczne logiki końcowej do dopracowania"
