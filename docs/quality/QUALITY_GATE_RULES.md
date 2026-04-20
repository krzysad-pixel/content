# QUALITY_GATE_RULES

## Ogólne bramki jakości
- brak acceptance criteria -> task nie startuje
- brak spełnionych zależności -> task blocked
- tests_failed po 2 próbach -> needs_human lub blocked
- review_changes_requested -> powrót do implementer
- docs_missing przy zmianie architektury/API -> task nie może wejść do done
- blocked_by_risk -> task nie może wejść do done
