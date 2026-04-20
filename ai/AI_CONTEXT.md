# AI Context — content

> Czytaj na początku każdej sesji CLI. Aktualizuj przy zmianach architektury.

## Cel projektu

Lekka aplikacja webowa do zarządzania Content Units — zastępuje Notion.
Źródłem prawdy są pliki markdown w `content/products/`.
Aplikacja (Node.js + Express) czyta i zapisuje te pliki bezpośrednio z dysku.

## Kanoniczne ścieżki

- Ścieżka repo na serwerze: `~/content/`
- GitHub: `github.com/krzysad-pixel/content`

## Stack technologiczny

| Warstwa | Technologia | Wersja |
|---------|------------|--------|
| Backend | Node.js + Express | 20.x |
| Frontend | Vanilla HTML/CSS/JS | — |
| Baza danych | Pliki markdown (frontmatter) | — |
| Infrastruktura | Docker Compose | — |

## Architektura

```
Przeglądarka
  → Express API (:3333)
    → czyta/zapisuje pliki markdown z dysku
      → content/products/<produkt>/units/CU-NNN-slug.md
```

## API — endpointy

| Metoda | Endpoint | Opis |
|--------|----------|------|
| GET | `/api/products` | Lista produktów |
| GET | `/api/products/:product` | Dashboard produktu (foundation, gaps, stats) |
| GET | `/api/units` | Lista CU (filtry: product, status, type, role, module) |
| GET | `/api/units/:id` | Pojedynczy CU (frontmatter + body) |
| PATCH | `/api/units/:id/status` | Zmiana statusu CU |
| PATCH | `/api/units/:id/content` | Edycja treści (body) CU |
| POST | `/api/sync` | Pull → commit → push do GitHub |

## Frontend — funkcje

- Lista CU z filtrami (produkt / status / typ)
- Zmiana statusu jednym kliknięciem
- Panel podglądu CU z ikoną kopiowania (body do schowka)
- Edycja treści CU inline (textarea → Zapisz / Anuluj)
- Dashboard produktu (foundation.md + gaps.md + statystyki)
- Sync modal z raportem (dodane / zmienione / błędne)

## Porty i usługi

| Usługa | Port | URL |
|--------|------|-----|
| Aplikacja | 3333 | http://192.168.1.11:3333 |

## Źródła prawdy

| Co | Gdzie |
|----|-------|
| Kolejka tasków | `tasks/QUEUE_INDEX.md` |
| Stan projektu | `ai/PROJECT_STATE.md` |
| Mapa repo | `ai/REPO_MAP.md` |
| Plan / backlog | `planning/BACKLOG.md` |
| Decyzje arch. | `planning/DECISIONS.md` |
| API spec | `docs/backend/API_SPEC.md` |
| Model CU | `content/_system/CONTENT_MODEL.md` |
| Produkt zgoda | `content/products/zgoda/foundation.md` |

## Historia zmian

| Data | Zmiana |
|------|--------|
| 2026-04-20 | Init projektu, MVP (TASK-001..004) |
| 2026-04-20 | Sync do Git (TASK-005), Dashboard produktu (TASK-006) |
| 2026-04-20 | Ikona kopiuj w podglądzie CU (TASK-007) |
| 2026-04-20 | Edycja treści CU w UI (TASK-008) |
| 2026-04-20 | Fix: sync report pokazuje lokalnie zmienione pliki |
| 2026-04-20 | Uzupełnienie struktury dokumentacji wg project-template |
