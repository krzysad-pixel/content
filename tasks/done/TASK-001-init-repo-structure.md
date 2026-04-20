# TASK-001 — Init struktury repo na serwerze

## Cel

Sklonować repo `krzysad-pixel/content` na VM, zainstalować zależności Node.js i zweryfikować że struktura katalogów jest poprawna.

## W zakresie (In Scope)

- `git clone https://github.com/krzysad-pixel/content ~/content`
- `cd ~/content && npm install` (po stworzeniu package.json przez TASK-002)
- Weryfikacja że katalogi `content/products/zgoda/units/` istnieją
- Weryfikacja że pliki `ai/AI_CONTEXT.md` i `content/_system/CONTENT_MODEL.md` są obecne

## Poza zakresem (Out of Scope)

- Uruchamianie aplikacji (to TASK-003)
- Docker (to TASK-004)

## Referencje

- AI Context: `ai/AI_CONTEXT.md`
- GitHub: `https://github.com/krzysad-pixel/content`

## Kryteria akceptacji

- [ ] Repo sklonowane do `~/content/`
- [ ] `ls ~/content/content/products/zgoda/units/` pokazuje CU-001
- [ ] `cat ~/content/ai/AI_CONTEXT.md` działa

## Notatki

- **Planowany zakres:** tylko clone + weryfikacja struktury
- **Planowany koszt:** XS

## Status

`ready`
