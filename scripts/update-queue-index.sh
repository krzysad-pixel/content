#!/usr/bin/env bash
set -euo pipefail

{
  echo "# QUEUE_INDEX"
  echo
  echo "## Queue"
  find tasks/queue -maxdepth 1 -type f -name 'TASK-*.md' -printf '%f\n' | sort | sed 's/^/- /'
  echo
  echo "## Active"
  find tasks/active -maxdepth 1 -type f -name 'TASK-*.md' -printf '%f\n' | sort | sed 's/^/- /'
  echo
  echo "## Review"
  find tasks/review -maxdepth 1 -type f -name 'TASK-*.md' -printf '%f\n' | sort | sed 's/^/- /'
  echo
  echo "## Blocked"
  find tasks/blocked -maxdepth 1 -type f -name 'TASK-*.md' -printf '%f\n' | sort | sed 's/^/- /'
  echo
  echo "## Done"
  find tasks/done -maxdepth 1 -type f -name 'TASK-*.md' -printf '%f\n' | sort | sed 's/^/- /'
} > tasks/QUEUE_INDEX.md
