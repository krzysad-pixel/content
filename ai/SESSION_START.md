# SESSION START

## Przed każdą sesją

```bash
cd ~/content
git pull origin main
cat ai/AI_CONTEXT.md
cat tasks/QUEUE_INDEX.md
```

## Aktywny task

```bash
ls tasks/active/
cat tasks/active/TASK-*.md
```

## Po zakończeniu taska

```bash
mv tasks/active/TASK-NNN-*.md tasks/done/
# zaktualizuj tasks/QUEUE_INDEX.md
git add -A && git commit -m "task: TASK-NNN — [opis]"
git push origin main
```
