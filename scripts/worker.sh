#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_DIR"

while true; do
  if ls tasks/active/*.md >/dev/null 2>&1; then
    bash scripts/run-task.sh
  else
    bash scripts/claim-next-task.sh || true
    if ls tasks/active/*.md >/dev/null 2>&1; then
      bash scripts/run-task.sh
    else
      sleep 60
    fi
  fi
done
