# TASK-002 — Backend API (Express + odczyt markdown)

## Cel

Zbudować Node.js + Express API które czyta pliki markdown z dysku i zwraca dane jako JSON. To fundament całej aplikacji.

## W zakresie (In Scope)

- `package.json` z zależnościami: `express`, `gray-matter` (parsowanie frontmatter)
- `src/server.js` — Express app na porcie 3333
- Endpointy:
  - `GET /api/products` — lista produktów (katalogi w `content/products/`)
  - `GET /api/units?product=zgoda&status=backlog` — lista units z filtrami
  - `GET /api/units/:id` — pełna treść jednego unitu
  - `PATCH /api/units/:id/status` — zmiana statusu (body: `{ status: "ready" }`)
- CORS włączony (frontend będzie na tym samym porcie)
- Pliki markdown czytane z `../content/` (relatywnie do `src/`)

## Poza zakresem (Out of Scope)

- Tworzenie nowych units przez API (to późniejszy task)
- Autentykacja
- Frontend (to TASK-003)

## Referencje

- AI Context: `ai/AI_CONTEXT.md`
- Model danych: `content/_system/CONTENT_MODEL.md`
- Przykładowy unit: `content/products/zgoda/units/CU-001-organizacje.md`

## Kryteria akceptacji

- [ ] `node src/server.js` startuje bez błędów na porcie 3333
- [ ] `curl http://localhost:3333/api/products` zwraca `["zgoda"]`
- [ ] `curl http://localhost:3333/api/units?product=zgoda` zwraca listę z CU-001
- [ ] `curl -X PATCH http://localhost:3333/api/units/CU-001/status -H "Content-Type: application/json" -d '{"status":"ready"}'` zmienia status w pliku markdown

## Notatki

- Użyj `gray-matter` do parsowania frontmatter — standard w ekosystemie markdown
- `PATCH /status` musi zapisać zmianę z powrotem do pliku (nadpisać frontmatter)
- Ścieżka do pliku: znajdź plik gdzie `id: CU-NNN` w frontmatter pasuje do `:id`
- **Planowany koszt:** M

## Status

`ready`
