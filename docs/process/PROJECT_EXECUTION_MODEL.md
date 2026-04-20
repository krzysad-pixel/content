# PROJECT_EXECUTION_MODEL — VDashboard

## 1. Cel modelu
Zapewnienie automatycznej realizacji tasków w projektach software’owych z jednoczesnym:
- zachowaniem kontroli człowieka na etapie planowania,
- zbieraniem danych operacyjnych do dashboardu,
- minimalizacją ręcznej ingerencji w trakcie realizacji.

## 2. Architektura pracy
### Mac (Claude)
- intake projektu,
- przygotowanie dokumentacji,
- rozbicie na taski,
- przypisanie typów i execution_profile,
- akceptacja tasków.

### VM (Claude CLI)
- worker pobiera task z kolejki,
- uruchamia pipeline agentów,
- zapisuje wyniki,
- przechodzi do kolejnego taska.

## 3. Główna zasada
Nie istnieje jeden pipeline dla wszystkich tasków.
Każdy task ma:
- type,
- execution_profile.

Na tej podstawie dobierany jest pipeline agentów.

## 4. Pipeline ogólny
queue → planner-checker → implementer → test-runner → reviewer → docs-updater → risk-logger → done

Z możliwością:
- blocked
- needs_human

## 5. Profile wykonania
### full
planner → implementer → test → review → docs → risk

### light
planner → implementer → review → risk

### docs_only
planner → docs → review → risk

### analysis_only
planner → review → docs → risk

## 6. Reguły przejścia
- brak READY → task nie startuje,
- testy FAIL → retry max 2 razy,
- review FAIL → wraca do implementera,
- needs_human → stop pipeline,
- brak blockerów → done.

## 7. Dane produkowane przez task
Każdy task zapisuje:
- status,
- test_status,
- docs_status,
- risk_status,
- last_updated.

## 8. Źródło prawdy
Źródłem prawdy NIE jest rozmowa z Claude.
Źródłem są:
- pliki tasks/,
- docs/,
- ai/.

## 9. Cel pod dashboard
Dashboard będzie czytał:
- task status,
- milestone progress,
- risk count,
- missing elements (tests/docs).

## 10. Zasada operacyjna
Najpierw działa pipeline agentów.
Dashboard jest tylko wizualizacją tych danych.
