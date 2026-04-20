# AI Rules — content

## Zasady ogólne

1. Jeden task per sesja CLI
2. Przed sesją: `git pull origin main`
3. Po sesji: `git add -A && git commit && git push`
4. Nie ruszaj plików w `content/` — to dane użytkownika, nie kod

## Zasady dotyczące plików markdown

- Frontmatter jest źródłem prawdy dla statusów i metadanych
- Nigdy nie usuwaj istniejących Content Units bez polecenia
- Przy zmianie statusu: tylko modyfikuj pole `status:` w frontmatter

## Konwencja commitów

```
task: TASK-NNN — [krótki opis]
fix: [opis poprawki]
feat: [opis funkcji]
```
