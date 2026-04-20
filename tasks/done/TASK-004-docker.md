# TASK-004 — Dockeryzacja + uruchomienie na VM

## Cel

Opakować aplikację w Docker Compose tak żeby działała stabilnie na VM 192.168.1.11 i startowała automatycznie po restarcie.

## W zakresie (In Scope)

- `Dockerfile` dla aplikacji Node.js
- `docker-compose.yml`:
  - serwis `content-app` na porcie `3333:3333`
  - volume montujący `./content/` do kontenera (pliki markdown poza kontenerem)
  - `restart: unless-stopped`
- `.dockerignore` — wyklucz `node_modules`, `.git`
- Test: `docker compose up -d` → aplikacja dostępna na `http://192.168.1.11:3333`

## Poza zakresem (Out of Scope)

- Nginx reverse proxy (opcjonalne rozszerzenie)
- SSL / HTTPS

## Referencje

- AI Context: `ai/AI_CONTEXT.md`
- Wzorzec: `~/vdashboard/docker-compose.yml` na VM

## Kryteria akceptacji

- [ ] `docker compose up -d` startuje bez błędów
- [ ] `http://192.168.1.11:3333` działa z innego urządzenia w sieci
- [ ] Po `docker compose restart` aplikacja wraca bez ręcznej interwencji
- [ ] Volume poprawnie montuje `./content/` — zmiana pliku markdown widoczna po odświeżeniu przeglądarki

## Notatki

- Volume na `./content/` jest kluczowy — pliki markdown to dane, nie kod. Muszą przeżyć rebuild kontenera.
- **Planowany koszt:** S

## Status

`blocked`
