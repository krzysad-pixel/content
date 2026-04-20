# TASK-003 — Frontend UI (vanilla HTML/JS)

## Cel

Zbudować interfejs webowy serwowany przez Express. Użytkownik widzi listę Content Units, może filtrować i zmieniać statusy jednym kliknięciem.

## W zakresie (In Scope)

- `public/index.html` — jedna strona aplikacji
- `public/app.js` — logika: fetch API, render, filtry, zmiana statusu
- `public/style.css` — minimalne style (czytelna tabela, kolorowe badge statusów)
- Widoki:
  - Tabela units z kolumnami: ID, Tytuł, Produkt, Moduł, Typ, Rola, Status, Akcje
  - Filtry: dropdown Produkt, dropdown Status, dropdown Typ
  - Przycisk zmiany statusu w wierszu (np. "→ ready", "→ published")
  - Klik w wiersz → panel boczny z pełną treścią unitu (Problem, Rozwiązanie, Hook, CTA)
- Express serwuje `public/` jako static files

## Poza zakresem (Out of Scope)

- Edycja treści markdown w przeglądarce (osobny task)
- Tworzenie nowych units w UI
- Logowanie / autentykacja

## Referencje

- Backend API: `src/server.js` (TASK-002)
- Model danych: `content/_system/CONTENT_MODEL.md`

## Kryteria akceptacji

- [ ] `http://192.168.1.11:3333` otwiera się w przeglądarce
- [ ] Widoczna lista units produktu `zgoda`
- [ ] Filtr po statusie działa
- [ ] Klik "→ ready" zmienia status i odświeża listę bez przeładowania strony
- [ ] Klik w wiersz pokazuje pełną treść unitu

## Notatki

- Vanilla JS — bez React, bez bundlera. Prosty fetch + innerHTML.
- Badge statusów: backlog=szary, ready=niebieski, published=zielony, archived=czerwony
- **Planowany koszt:** M

## Status

`blocked`
