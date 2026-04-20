# Master Plan — content

## Cel

Lekka aplikacja webowa do zarządzania Content Units dla wielu produktów.
Zastępuje Notion. Źródło prawdy: pliki markdown w repo.

## MVP (TASK-001..004)

Po ukończeniu TASK-004 działa:
- Lista content units z filtrami
- Zmiana statusu jednym kliknięciem
- Podgląd treści unitu
- Dostępne na http://192.168.1.11:3333

## Backlog (po MVP)

- Tworzenie nowych Content Units w UI (formularz)
- Edycja treści markdown w przeglądarce
- Dodawanie nowych produktów przez UI
- Eksport do formatu gotowego do publikacji
- Integracja z VDashboard (opcjonalne)

## Decyzje architektoniczne

| Data | Decyzja | Powód |
|------|---------|-------|
| 2026-04-20 | Vanilla JS zamiast React/Next.js | VM ma ograniczone zasoby, prostota ważniejsza |
| 2026-04-20 | Pliki markdown zamiast bazy danych | Git history jako audit log, brak dodatkowych usług |
| 2026-04-20 | Port 3333 | 3000 i 4000 zajęte na VM |
