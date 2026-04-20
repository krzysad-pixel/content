# TASK-006 — Dashboard produktu

## Cel

Dodać drugi ekran aplikacji: widok pojedynczego produktu z podsumowaniem foundation, gaps i statystykami CU. Użytkownik klika na nazwę produktu i widzi pełny kontekst.

## W zakresie (In Scope)

- Endpoint `GET /api/products/:product` w `src/server.js`:
  - odczytuje `content/products/:product/foundation.md` — zwraca body jako HTML (markdown → HTML) lub surowy tekst
  - odczytuje `content/products/:product/gaps.md` — analogicznie
  - liczy CU w `units/` i grupuje po statusie: `{ total, backlog, ready, published, archived }`
- Nowa strona `public/product.html` lub dynamiczny widok w `public/app.js` (SPA — podmiana widoku bez przeładowania)
- Widok produktu zawiera:
  - Nazwa produktu (nagłówek)
  - Statystyki CU: total / backlog / ready / published (kolorowe liczniki)
  - Sekcja "Foundation" — treść `foundation.md`
  - Sekcja "Gaps" — treść `gaps.md` z checkboxami (readonly)
  - Przycisk "← Wróć do listy CU"
- Nawigacja: nazwa produktu w głównej liście CU staje się klikalnym linkiem do dashboardu

## Poza zakresem (Out of Scope)

- Edycja foundation.md i gaps.md w UI (osobny task)
- Wykresy / wizualizacje statystyk

## Referencje

- Backend: `src/server.js`
- Frontend: `public/app.js`, `public/index.html`
- Przykład danych: `content/products/zgoda/foundation.md`, `content/products/zgoda/gaps.md`

## Kryteria akceptacji

- [ ] Kliknięcie nazwy produktu w UI otwiera dashboard produktu
- [ ] Widoczne liczniki: total / backlog / ready / published
- [ ] Treść foundation.md wyrenderowana czytelnie
- [ ] Treść gaps.md z checkboxami (zaznaczone / odznaczone zgodnie z plikiem)
- [ ] Przycisk powrotu do listy CU działa
- [ ] Smoke test: działa dla produktu `zgoda`

## Notatki

- Do renderowania markdown → HTML użyj lekkiej biblioteki `marked` (npm) lub prostego regex dla nagłówków/list — bez ciężkich zależności
- Statystyki licz po stronie backendu, nie frontendu
- **Planowany koszt:** M

## Status

`ready`
