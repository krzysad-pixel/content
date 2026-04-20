# TASK-007 — Ikona kopiuj w podglądzie CU

## Cel

Dodać ikonę/przycisk „kopiuj" w panelu podglądu Content Unit, który kopiuje treść danego CU do schowka (clipboard). Ułatwia pracę z treścią — jedno kliknięcie zamiast ręcznego zaznaczania tekstu.

## W zakresie (In Scope)

- Ikona kopiuj widoczna w panelu detail (obok tytułu lub w nagłówku panelu)
- Kliknięcie kopiuje pełną treść CU (body markdownem — tak jak jest w pliku, bez frontmatter)
- Feedback po skopiowaniu: zmiana ikony lub krótki tooltip „Skopiowano!"
- Zmiany tylko w `public/app.js` i `public/style.css`

## Poza zakresem (Out of Scope)

- Kopiowanie frontmatter
- Kopiowanie z widoku listy (tylko detail panel)
- Zmiany w backendzie

## Referencje

- AI Context: `ai/AI_CONTEXT.md`
- Frontend: `public/app.js` (funkcja `showDetail`, linia ~116)
- Style: `public/style.css`

## Kryteria akceptacji

- [ ] Ikona kopiuj widoczna w panelu podglądu CU
- [ ] Kliknięcie kopiuje body CU do schowka
- [ ] Widoczny feedback po skopiowaniu (min. 1,5 s)
- [ ] Działa w Chrome i Safari (navigator.clipboard)
- [ ] Smoke test przeszedł (aplikacja działa w przeglądarce)
- [ ] `git push origin main` wykonany

## Notatki

- **Planowany zakres:** zmiany tylko frontendowe, bez nowych endpointów
- **Planowany koszt:** XS

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
