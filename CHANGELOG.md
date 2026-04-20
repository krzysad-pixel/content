# Changelog

> Historia wydań projektu. Format: [Keep a Changelog](https://keepachangelog.com/pl/1.0.0/)

---

## [Unreleased]

### Planowane
- Tworzenie nowych CU przez UI (formularz)
- Rozbudowa bazy CU do 20+ dla produktu zgoda

---

## [1.1.0] — 2026-04-20

### Dodano
- Ikona kopiowania body CU do schowka w panelu podglądu (TASK-007)
- Edycja treści (body) CU inline w przeglądarce — textarea + Zapisz/Anuluj (TASK-008)
- Endpoint `PATCH /api/units/:id/content`
- Fallback kopiowania przez `document.execCommand` dla kontekstu HTTP (non-HTTPS)
- `Cache-Control: no-store` dla wszystkich odpowiedzi `/api/*`

### Naprawiono
- Sync report pokazywał "Zmienione: brak" przy lokalnych zmianach statusów/treści — teraz raportuje wszystko co trafia do commita
- Sync był zahardkodowany na `git pull/push origin main` — teraz wykrywa aktualny branch repo

---

## [1.0.0] — 2026-04-20

### Dodano
- Init struktury repo (TASK-001)
- Backend API: Express + gray-matter, endpointy CRUD dla CU (TASK-002)
- Frontend SPA: tabela CU, filtry, zmiana statusu, panel podglądu (TASK-003)
- Dockeryzacja: Dockerfile + docker-compose, uruchomienie na VM http://192.168.1.11:3333 (TASK-004)
- Sync do GitHub: `POST /api/sync` — pull → commit → push, raport w UI (TASK-005)
- Dashboard produktu: foundation.md + gaps.md + statystyki CU per status (TASK-006)
- Baza 16 Content Units dla produktu zgoda (CU-001..016)
- Foundation i gaps dla Zgoda.Online (kluby sportowe, fokus na zgody + wyjazdy)
