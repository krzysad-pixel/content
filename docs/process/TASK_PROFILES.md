# TASK_PROFILES

## Typy tasków
- feature
- backend
- frontend
- parser
- infra
- docs
- analysis
- refactor
- bugfix

## Profile wykonania
### full
Dla:
- feature
- backend
- parser
- ważny bugfix
- elementy MVP wpływające na działanie systemu

Agenci:
- planner-checker
- implementer
- test-runner
- reviewer
- docs-updater
- risk-logger

### light
Dla:
- prosty refactor
- mała konfiguracja
- niewielka zmiana niekrytyczna

Agenci:
- planner-checker
- implementer
- reviewer
- risk-logger

### docs_only
Dla:
- uzupełnienie dokumentacji
- update struktury projektu
- opis API bez zmian w kodzie

Agenci:
- planner-checker
- docs-updater
- reviewer
- risk-logger

### analysis_only
Dla:
- analiza nowego projektu
- przygotowanie standardu metadata
- rozpisanie ryzyk
- przygotowanie backlogu

Agenci:
- planner-checker
- reviewer
- docs-updater
- risk-logger

## Zasada
Profil może być ręcznie nadany lub zmieniony przez człowieka na Macu.
Nie dobieramy pipeline'u automatycznie wyłącznie na podstawie typu taska.
