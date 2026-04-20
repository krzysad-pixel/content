# TASK-005 — Przycisk "Sync to Git" w UI

## Cel

Dodać przycisk w interfejsie który robi `git add -A && git commit && git push` na serwerze — bez potrzeby wchodzenia przez SSH. Jeden klik = zmiany w repo.

## W zakresie (In Scope)

- Endpoint `POST /api/sync` w `src/server.js`:
  - wykonuje `git add -A`
  - wykonuje `git commit -m "sync: YYYY-MM-DD HH:MM"` z aktualnym timestampem
  - wykonuje `git push origin main`
  - zwraca `{ ok: true, message: "..." }` lub `{ ok: false, error: "..." }`
  - jeśli nie ma nic do commitowania — zwraca `{ ok: true, message: "Brak zmian" }` bez błędu
- Przycisk "Sync to Git" w `public/index.html` — widoczny w nagłówku aplikacji
- Po kliknięciu: spinner podczas operacji, potem komunikat sukcesu lub błędu
- Logika w `public/app.js`

## Poza zakresem (Out of Scope)

- Wpisywanie własnej wiadomości commita
- Pull z repo (tylko push)
- Historia commitów w UI

## Referencje

- Backend: `src/server.js`
- Frontend: `public/app.js`, `public/index.html`

## Kryteria akceptacji

- [ ] Przycisk "Sync to Git" widoczny w nagłówku aplikacji
- [ ] Kliknięcie robi commit z timestampem i push do `origin/main`
- [ ] Gdy nie ma zmian — przycisk działa bez błędu, pokazuje "Brak zmian"
- [ ] Błąd (np. brak połączenia z GitHub) jest pokazany użytkownikowi
- [ ] Po sync widać nowy commit na `github.com/krzysad-pixel/content`

## Notatki

- Użyj `child_process.exec` lub `execSync` w Node.js do wywołania git
- Komenda commit: `git commit -m "sync: $(date '+%Y-%m-%d %H:%M')"` — lub generuj timestamp w JS i przekaż jako string
- Working directory dla git: katalog repo (`~/content/`)
- **Planowany koszt:** S

## Status

`ready`
