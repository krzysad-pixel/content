# AGENT_IMPLEMENTATION_SPEC

## Cel
Specyfikacja operacyjna agentów procesowych do wdrożenia w Claude CLI.

## planner-checker
Wejście:
- task file
- status zależności
Wyjście:
- ready / needs_human / blocked_by_dependency

## implementer
Wejście:
- task file
- kontekst repo
Wyjście:
- implemented / partially_implemented / blocked

## test-runner
Wejście:
- zmiana w kodzie
- task file
Wyjście:
- tests_passed / tests_failed / tests_missing / tests_not_required

## reviewer
Wejście:
- diff
- task file
Wyjście:
- review_ok / review_changes_requested / review_blocked

## docs-updater
Wejście:
- zmienione obszary repo
Wyjście:
- docs_updated / docs_not_needed / docs_missing

## risk-logger
Wejście:
- pełen stan taska
Wyjście:
- no_risk / risk_logged / needs_decision / blocked_by_risk
