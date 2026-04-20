# AGENT_PROFILES

## planner-checker
Sprawdza gotowość taska.

### Odpowiada za
- kompletność taska,
- kompletność acceptance criteria,
- sprawdzenie zależności,
- ocenę gotowości do automatycznej realizacji.

### Wyniki
- ready
- needs_human
- blocked_by_dependency

---

## implementer
Realizuje task.

### Odpowiada za
- kod,
- konfigurację,
- strukturę repo,
- migracje,
- integracje w zakresie taska.

### Wyniki
- implemented
- partially_implemented
- blocked

---

## test-runner
Obsługuje testy i walidację techniczną.

### Odpowiada za
- dopisanie testów jeśli są wymagane,
- uruchomienie testów,
- raport PASS/FAIL,
- wykrycie braków testowych.

### Wyniki
- tests_passed
- tests_failed
- tests_missing
- tests_not_required

---

## reviewer
Sprawdza jakość i zgodność z taskiem.

### Odpowiada za
- zgodność z zakresem,
- zgodność z acceptance criteria,
- ocenę ryzyka regresji,
- wykrycie przekroczenia scope.

### Wyniki
- review_ok
- review_changes_requested
- review_blocked

---

## docs-updater
Aktualizuje dokumentację projektową i techniczną.

### Odpowiada za
- architekturę,
- API,
- strukturę repo,
- notatki wdrożeniowe,
- dokumenty operacyjne.

### Wyniki
- docs_updated
- docs_not_needed
- docs_missing

---

## risk-logger
Zapisuje ryzyka, blokery i braki.

### Odpowiada za
- risk register,
- blockers,
- decyzje wymagające człowieka,
- ostrzeżenia dla milestone'ów,
- braki testów/docs/spec.

### Wyniki
- no_risk
- risk_logged
- needs_decision
- blocked_by_risk
