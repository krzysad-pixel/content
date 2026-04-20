# TASK-008 — Edycja treści CU w UI

## Cel

Umożliwić edycję treści (body) Content Unit bezpośrednio w panelu podglądu w przeglądarce. Użytkownik klika „Edytuj", poprawia markdown w textarea, klika „Zapisz" — plik jest nadpisany na dysku. Sync do GitHub osobno, jak zawsze.

## W zakresie (In Scope)

- Przycisk „Edytuj" w detail panelu
- Textarea z aktualną treścią CU (body markdownem, bez frontmatter)
- Przyciski „Zapisz" i „Anuluj"
- Nowy endpoint `PATCH /api/units/:id/content` — nadpisuje body, zachowuje frontmatter bez zmian
- Feedback po zapisie (np. krótki komunikat „Zapisano")

## Poza zakresem (Out of Scope)

- Edycja frontmatter (id, status, platform itd.)
- Podgląd renderowanego markdown podczas edycji
- Walidacja treści
- Auto-sync po zapisie

## Referencje

- AI Context: `ai/AI_CONTEXT.md`
- Backend: `src/server.js` (wzór: endpoint `PATCH /api/units/:id/status`)
- Frontend: `public/app.js` (funkcja `showDetail`, ~linia 116)
- Style: `public/style.css`

## Kryteria akceptacji

- [ ] Przycisk „Edytuj" widoczny w panelu podglądu CU
- [ ] Textarea pokazuje aktualną treść (body) po kliknięciu „Edytuj"
- [ ] „Zapisz" wysyła `PATCH /api/units/:id/content` i nadpisuje plik na dysku
- [ ] Frontmatter pliku pozostaje niezmieniony po zapisie
- [ ] „Anuluj" przywraca widok podglądu bez zmian
- [ ] Widoczny feedback po zapisie
- [ ] Smoke test przeszedł (aplikacja działa w przeglądarce)
- [ ] `git push origin main` wykonany

## Notatki

- **Planowany zakres:** 1 nowy endpoint + zmiany w detail panelu frontendu
- **Planowany koszt:** S

## Status

`todo`

---

## Notatki z realizacji

**Zrealizowany zakres:**
[co faktycznie zostało zaimplementowane]

**Weryfikacja bookkeepingu:**
- [ ] Task przeniesiony do `tasks/done/`
- [ ] `tasks/QUEUE_INDEX.md` zaktualizowany
- [ ] Commit i push wykonany
