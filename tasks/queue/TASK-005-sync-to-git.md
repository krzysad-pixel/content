# TASK-005 — Przycisk "Sync" w UI

## Cel

Dodać przycisk "Sync" który synchronizuje repo (pull + push) i daje raport o stanie plików — bez wchodzenia przez SSH.

## Sekwencja operacji (w tej kolejności)

1. `git pull origin main` — pobierz zmiany z GitHub
2. Re-scan `content/products/*/units/*.md` — odśwież listę CU w pamięci aplikacji
3. Walidacja frontmatter każdego pliku — sprawdź wymagane pola
4. `git add -A && git commit -m "sync: YYYY-MM-DD HH:MM"` — commituj lokalne zmiany (jeśli są)
5. `git push origin main` — wyślij do GitHub

## W zakresie (In Scope)

- Endpoint `POST /api/sync` w `src/server.js` realizujący sekwencję powyżej
- Raport zwracany przez endpoint:
  ```json
  {
    "ok": true,
    "pulled": true,
    "committed": true,
    "pushed": true,
    "report": {
      "added": ["CU-009-nowy.md"],
      "changed": ["CU-003-grupy-i-przypisania.md"],
      "invalid": [
        { "file": "CU-010-brak-id.md", "errors": ["brak pola: id", "brak pola: status"] }
      ]
    }
  }
  ```
- Walidacja frontmatter — wymagane pola: `id`, `product`, `module`, `type`, `role`, `status`
- Przycisk "Sync" w nagłówku `public/index.html`
- Po kliknięciu: spinner, potem modal/panel z raportem (dodane / zmienione / błędne)
- Pliki z błędami oznaczone w liście CU (np. badge "invalid")
- Logika w `public/app.js`

## Poza zakresem (Out of Scope)

- Wpisywanie własnej wiadomości commita
- Historia synców w UI
- Auto-naprawa błędnych plików

## Referencje

- Backend: `src/server.js`
- Frontend: `public/app.js`, `public/index.html`
- Model frontmatter: `content/_system/CONTENT_MODEL.md`

## Kryteria akceptacji

- [ ] Przycisk "Sync" widoczny w nagłówku
- [ ] Pull wykonuje się przed push — nowe CU z GitHub pojawiają się w liście
- [ ] Raport pokazuje: dodane / zmienione / błędne pliki
- [ ] Plik bez wymaganego pola frontmatter pojawia się w sekcji "błędne"
- [ ] Gdy nie ma zmian do commita — sync działa bez błędu
- [ ] Błąd połączenia z GitHub jest pokazany użytkownikowi
- [ ] Po sync lista CU odświeża się automatycznie

## Notatki

- Użyj `child_process.exec` w Node.js — async, nie blokuje serwera
- `git pull` może zająć chwilę — spinner w UI jest obowiązkowy
- Working directory dla wszystkich komend git: katalog repo (`~/content/`)
- Do wykrycia added/changed: porównaj listę plików przed i po pull
- **Planowany koszt:** M (więcej niż pierwotne S — raport i walidacja dodają złożoności)

## Status

`ready`
