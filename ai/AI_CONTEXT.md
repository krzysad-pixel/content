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
    → czyta/zapisuje pliki markdown z disk
      → content/products/<produkt>/units/CU-NNN-slug.md
```

## Moduły aplikacji

- `api/units` — CRUD content units (odczyt frontmatter + body)
- `api/products` — lista produktów (katalogi w content/products/)
- `api/status` — zmiana statusu unitu (patch frontmatter)
- `frontend/` — SPA vanilla JS: lista, filtry, podgląd, zmiana statusu

## Porty i usługi

| Usługa | Port | URL |
|--------|------|-----|
| Aplikacja | 3333 | http://192.168.1.11:3333 |

## Źródła prawdy

- Plan: `planning/MASTER_PLAN.md`
- Kolejka tasków: `tasks/QUEUE_INDEX.md`
- Model Content Unit: `content/_system/CONTENT_MODEL.md`
- Zasady pracy AI: `ai/AI_RULES.md`

## Historia zmian

| Data | Zmiana | Kto |
|------|--------|-----|
| 2026-04-20 | Init projektu | krzysad |
