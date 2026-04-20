# Wdrożenie skillów na nowej maszynie

> Wykonaj raz na każdej maszynie gdzie używasz Claude CLI.
> Skille żyją globalnie w `~/.claude/commands/` — niezależnie od projektu.

## Krok 1 — pobierz projekt-template-v2

```bash
# Sklonuj lub skopiuj project-template-v2 na maszynę
git clone [URL_TWOJEGO_REPO_TEMPLATE] ~/project-template-v2
```

## Krok 2 — skonfiguruj ~/.claude/settings.json

> `bypassPermissions` jest zablokowane dla root — używaj `acceptEdits` + lista `allow`.

```bash
cat > ~/.claude/settings.json << 'EOF'
{
  "permissions": {
    "defaultMode": "acceptEdits",
    "allow": [
      "Bash(git:*)",
      "Bash(npm:*)",
      "Bash(node:*)",
      "Bash(docker:*)",
      "Bash(find:*)",
      "Bash(grep:*)",
      "Bash(cd:*)",
      "Bash(mkdir:*)",
      "Bash(cp:*)",
      "Bash(mv:*)",
      "Bash(cat:*)",
      "Bash(curl:*)",
      "Bash(ls:*)"
    ]
  }
}
EOF
```

- `acceptEdits` — pliki tworzone/edytowane bez pytań
- lista `allow` — git, docker, narzędzia systemowe i compound commands (`cd && git`) bez pytań
- **Nie używaj** `bypassPermissions` — zablokowane dla root przez Claude CLI

## Krok 3 — wdróż skille

```bash
mkdir -p ~/.claude/commands
cp ~/project-template-v2/commands/*.md ~/.claude/commands/
# Pomiń ten plik (DEPLOY.md) — nie jest skilliem
rm -f ~/.claude/commands/DEPLOY.md
```

## Krok 4 — sprawdź

```bash
ls ~/.claude/commands/
# Powinno być: intake.md  new-task.md  session-end.md  session-start.md
```

Teraz w każdej sesji Claude CLI na tej maszynie możesz używać:
- `/intake` — onboarding nowego projektu
- `/session-start` — start sesji pracy
- `/new-task` — tworzenie nowego taska
- `/session-end` — zamknięcie sesji i commit

---

## Aktualizacja skillów (gdy zmienisz procedurę)

```bash
# Na maszynie gdzie edytujesz skille:
# 1. Edytuj plik w ~/project-template-v2/commands/
# 2. Zcommituj i pushuj

# Na każdej VM do zsynchronizowania:
git -C ~/project-template-v2 pull origin main
cp ~/project-template-v2/commands/*.md ~/.claude/commands/
rm -f ~/.claude/commands/DEPLOY.md
```

> Nie edytuj plików bezpośrednio w `~/.claude/commands/` — zmiany zostaną nadpisane przy następnym pull.
> Zawsze edytuj w `project-template-v2/commands/` i synchronizuj.
