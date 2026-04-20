# CLAUDE.md — content

## Połączenie z serwerem

```bash
ssh -i ~/.ssh/id_ed25519 root@192.168.1.11
```

| Parametr | Wartość |
|----------|---------|
| Host | 192.168.1.11 |
| User | root |
| Ścieżka repo | ~/content/ |

## Git sync przed pracą

```bash
git -C ~/content pull origin main
```

## Stack i uruchamianie

```bash
# Uruchomienie (po TASK-004)
cd ~/content && docker compose up -d

# Logi
docker compose logs content-app --tail=30

# Bez Dockera (dev)
cd ~/content && node src/server.js
```

| Komponent | URL / Port |
|-----------|-----------|
| Aplikacja | http://192.168.1.11:3333 |

## Zadania (workflow AI)

- Kolejka: `tasks/queue/`
- Aktywne: `tasks/active/`
- Zrobione: `tasks/done/`
- Indeks: `tasks/QUEUE_INDEX.md`

**Przed każdą sesją:**
1. `cat ai/SESSION_START.md`
2. `cat tasks/QUEUE_INDEX.md`
3. `git pull origin main`

**Po zakończeniu:**
1. `mv tasks/active/TASK-NNN-*.md tasks/done/`
2. Zaktualizuj `tasks/QUEUE_INDEX.md`
3. `git add -A && git commit -m "task: TASK-NNN — [opis]" && git push`

## Zasady projektu

- Pliki w `content/products/` to dane użytkownika — nie usuwaj bez polecenia
- Jeden task per sesja CLI
- Port 3333 (3000 i 4000 zajęte przez inne usługi)
