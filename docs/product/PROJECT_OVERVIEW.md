# PROJECT_OVERVIEW — VDashboard

## Cel
Zbudować internal dashboard do odczytu stanu wielu projektów z repozytoriów GitHub i dokumentacji markdown.

## MVP
- lista wielu projektów,
- status projektu,
- milestone'y,
- taski active / queue / done,
- backlog,
- ryzyka,
- widok szczegółowy projektu,
- odczyt danych z repo / Git,
- obsługa wielu repozytoriów GitHub.

## Poza zakresem v1
- rozbudowane role i uprawnienia,
- multi-user,
- zaawansowana analityka,
- automatyczne powiadomienia.

## Użytkownik główny
Admin — osoba chcąca szybko ocenić stan projektu bez ręcznego czytania dokumentacji.

## Stack
- Frontend: React
- Backend: Node.js
- DB: PostgreSQL
- Inne: parser markdown, Git integration

## Infrastruktura
- VM `.148`
- Ubuntu
- Docker
- GitHub jako źródło danych
