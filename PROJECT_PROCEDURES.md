# Procedury Pracy — AI-Assisted Development

> Ten plik opisuje jak pracować z tym systemem — od pomysłu do gotowego projektu.
> Czytaj raz. Potem używaj skillów.

---

## Jak to działa — model mentalny

System składa się z dwóch warstw:

| Warstwa | Co zawiera | Gdzie żyje |
|---------|-----------|------------|
| **Kontekst projektu** | Co budujemy, stack, decyzje, stan tasków | Pliki w tym repo |
| **Procedury pracy** | Jak startować sesję, intake, tworzyć task | Slash-commands w `.claude/commands/` |

Slash-commands **czytają** pliki projektu i na ich podstawie działają. Nie zastępują plików — współpracują z nimi.

Zasada: **commands = HOW, pliki = WHAT + WHERE**

## Profile dojrzałości

Nie każde repo potrzebuje pełnego szkieletu. Zobacz `MATURITY_PROFILES.md` — 4 poziomy (L0/L1/L2/L3). Wybierz poziom pasujący do rzeczywistej roli repo; przy wątpliwościach — wybierz niższy.

## Kontekst on-demand (oszczędność tokenów)

`CLAUDE.md` jest **indeksem**, nie encyklopedią. Przy starcie Claude CLI ładuje tylko:
- `CLAUDE.md`
- `ai/PROJECT_STATE.md`
- Pliki z pola `needs_context` w frontmatter taska

Reszta — na życzenie (Read tool). Zasada: **jeśli nie wiesz czy załadować — nie ładuj**.

---

## Cykl życia projektu

```
1. NOWY PROJEKT
   └── /intake
       Sesja 1: Problem & Cel         → docs/business/
       Sesja 2: Użytkownicy & Zakres  → docs/business/
       Sesja 3: Stack & Infra         → ai/AI_CONTEXT.md, CLAUDE.md
       Sesja 4: Plan & Pierwsze Taski → planning/, tasks/queue/

2. PRACA NAD PROJEKTEM (pętla)
   └── /session-start     → czyta kontekst, pokazuje aktywny task
   └── [praca]            → Claude implementuje w zakresie taska
   └── /session-end       → weryfikuje done criteria, commit, push

3. ZARZĄDZANIE KOLEJKĄ
   └── /new-task          → tworzy nowy task w tasks/queue/
   └── tasks/QUEUE_INDEX.md  → live state kolejki

4. ZAMKNIĘCIE PROJEKTU
   └── post-project/RETROSPECTIVE.md
   └── post-project/LESSONS_LEARNED.md
   └── post-project/HANDOVER.md
```

---

## Strona biznesowo-operacyjna

### Kiedy używać jakiego skilla

| Sytuacja | Skill |
|----------|-------|
| Nowy projekt, zero kontekstu | `/intake` |
| Kontynuujesz intake z poprzedniej sesji | `/intake` (skill sam sprawdzi co zrobione) |
| Zaczynasz sesję pracy nad kodem | `/session-start` |
| Chcesz dodać nowy task do kolejki | `/new-task` |
| Kończysz sesję pracy | `/session-end` |

### Definicja "done" dla taska

Task jest zamknięty gdy:
- Kod działa zgodnie z acceptance criteria z pliku taska
- Brak błędów w logach
- Dokumentacja zaktualizowana (jeśli zmiana API lub architektury)
- Koszt wpisany do `planning/TASK_COST_LOG.md`
- Task przesunięty z `tasks/active/` → `tasks/done/`
- `tasks/QUEUE_INDEX.md` zaktualizowany
- Commit + push do `origin/main`

### Definicja "done" dla projektu

Projekt jest ukończony gdy:
- Wszystkie taski z etapu A i B w `tasks/done/`
- Acceptance criteria z `planning/MILESTONES.md` spełnione
- `post-project/RETROSPECTIVE.md` wypełniony
- Kod na `origin/main`, działający na produkcji

### Dyscyplina jednego taska

- Jeden task per sesja CLI — nie zaczynam drugiego jeśli pierwszy nie skończony
- Każdy task ma plik w `tasks/queue/` lub `tasks/active/` lub `tasks/done/`
- `tasks/active/` ma MAX 1 plik w danej chwili

### Co robić gdy task jest za duży

Jeśli task ma rozmiar XL lub "nie wiem jak to podzielić":
- Użyj `/new-task` żeby podzielić na mniejsze (S/M)
- Zasada: jeden task = jedna sesja = jeden cel

---

## Strona techniczna

### Wymagania wstępne

- Claude CLI zainstalowane na maszynie
- Skille wdrożone do `~/.claude/commands/` (patrz `commands/DEPLOY.md`)
- Git skonfigurowany (nazwa użytkownika, email)

### Struktura katalogów projektu

```
projekt/
├── CLAUDE.md                  ← INDEKS on-demand (nie monolit). Zob. 1.5.
├── PROJECT_PROCEDURES.md      ← ten plik
├── MATURITY_PROFILES.md       ← L0/L1/L2/L3 — co obowiązuje na którym poziomie
├── CHANGELOG.md
│
├── .claude/
│   ├── agents/                ← 6 agentów procesowych (planner-checker, implementer,
│   │                            test-runner, reviewer, docs-updater, risk-logger)
│   ├── commands/              ← slash-commands (natywne Claude Code)
│   │   ├── intake.md, new-task.md, session-start.md, session-end.md, DEPLOY.md
│   └── settings.json
│
├── ai/                        ← „mózg" AI — selektywnie ładowany
│   ├── AI_CONTEXT.md          ← kto/co/dla kogo, stack, serwery
│   ├── AI_RULES.md            ← zasady kodu i dokumentacji
│   ├── PROJECT_STATE.md       ← LIVE stan (aktualizowany co sesja)
│   └── REPO_MAP.md            ← mapa „gdzie co leży"
│
├── planning/                  ← plan (co ma się stać)
│   ├── MASTER_PLAN.md, ROADMAP.md, MILESTONES.md
│   ├── BACKLOG.md             ← jedyny BACKLOG (koniec duplikacji)
│   ├── DECISIONS.md           ← jedyny DECISIONS (koniec duplikacji)
│   └── TASK_COST_LOG.md
│
├── tasks/
│   ├── QUEUE_INDEX.md
│   ├── queue/, active/, review/, blocked/, done/, logs/
│   └── templates/
│       └── TASK_TEMPLATE.md   ← jedyny kanon (z polami needs_context + status)
│
├── docs/                      ← dokumentacja (co JEST)
│   ├── business/              ← CHARTER, PROBLEM_STATEMENT, USER_STORIES, BUSINESS_MODEL
│   ├── product/               ← KPI, MILESTONE_STATUS, PROJECT_OVERVIEW
│   ├── architecture/, backend/, frontend/, database/, integrations/, user/
│   ├── design/                ← DESIGN_SYSTEM, UI_DECISIONS
│   ├── intake/                ← INTAKE_NOTES, chatgpt-intake-prompt
│   ├── operations/            ← runtime: DEPLOYMENT, VM_SETUP, SECURITY,
│   │                            TROUBLESHOOTING, ADMIN_GUIDE
│   ├── process/               ← proces wykonawczy AI:
│   │                            AGENT_PROFILES, STATUS_MODEL, STATUS_TRANSITIONS,
│   │                            TASK_PROFILES, PROJECT_EXECUTION_MODEL,
│   │                            VALIDATION_CHECKLIST, EXECUTION_RUNBOOK,
│   │                            AGENT_IMPLEMENTATION_SPEC, CLAUDE_CLI_ADAPTATION
│   └── quality/               ← RISK_REGISTER, BLOCKERS, QA_CHECKLIST, TEST_PLAN,
│                                 TEST_RESULTS, TEST_STATUS, QUALITY_GATE_RULES,
│                                 DOC_COVERAGE, EXECUTION_LOG_SCHEMA
│
├── scripts/                   ← pipeline operacyjny (L3):
│   ├── worker.sh, claim-next-task.sh, run-task.sh, finalize-task.sh
│   ├── update-queue-index.sh, session-start-hook.sh, ci-check.sh, validate-pack.sh
│
└── post-project/              ← wypełniaj po zamknięciu projektu
    ├── HANDOVER.md, RETROSPECTIVE.md, LESSONS_LEARNED.md, KNOWLEDGE_TRANSFER.md
```

### Slash-commands są PROJEKTOWE (nie globalne)

W nowym modelu slash-commands siedzą w `.claude/commands/` **wewnątrz repo projektu** — nie w `~/.claude/commands/`. To oznacza:
- Każdy projekt ma swój zestaw komend (może je dopasować).
- Nie ma synchronizacji między maszynami — są częścią repo.
- Zmiana komendy = zwykły commit do repo projektu.

Claude Code automatycznie wykrywa `.claude/commands/<name>.md` i udostępnia jako `/<name>`.

### Jak użyć template dla nowego projektu

```bash
# 1. Skopiuj project-template-current/ jako bazę
cp -r ~/project-template/project-template-current ~/moj-nowy-projekt
cd ~/moj-nowy-projekt
rm -rf .git

# 2. Zdecyduj poziom dojrzałości (L0/L1/L2/L3) — zob. MATURITY_PROFILES.md
#    Usuń pliki niepotrzebne dla wybranego poziomu
#    (np. dla L2 usuń scripts/, docs/process/ części pipeline'owe)

# 3. Wypełnij [PROJECT_NAME] w CLAUDE.md, README, itd.
#    Skorzystaj z /intake (ChatGPT lub Claude) — docs/intake/

# 4. Inicjalizuj nowe repo
git init
git add -A
git commit -m "init: projekt z project-template-current"

# 5. Utwórz repo na GitHub i pushuj
git remote add origin [URL]
git branch -M main
git push -u origin main

# 6. W Claude Code w katalogu projektu:
# /intake     (strukturyzowany intake dokumentacji)
# /new-task   (tworzy pierwszy task w tasks/queue/)
```

### Jak działa CLAUDE.md i co powinno w nim być

`CLAUDE.md` jest automatycznie ładowany przez Claude CLI na starcie każdej sesji. **Zostaw go jako INDEKS** — wskaźnik gdzie co jest, nie encyklopedię.

**Powinien zawierać:**
- Indeks plików kluczowych (z krótkim opisem roli)
- Reguła kontekstu on-demand (`needs_context` w tasku)
- Parametry projektu (stack skrót, profil dojrzałości, GitHub URL)
- Zasady commita i pushu

**Nie powinien zawierać:**
- Pełnych procedur (są w `PROJECT_PROCEDURES.md`)
- Szczegółów architektury (są w `ai/AI_CONTEXT.md`)
- Historii decyzji (są w `planning/DECISIONS.md`)
- Pełnych danych serwerów/portów (są w `ai/AI_CONTEXT.md`)

Krótszy `CLAUDE.md` = mniej tokenów per sesja = tańsza praca.

### Struktura pliku taska

Nazwa: `tasks/queue/TASK-NNN-slug.md` (NNN zero-padded, slug w kebab-case).

Każdy task to plik z frontmatter + body. Szablon: `tasks/templates/TASK_TEMPLATE.md`.

Frontmatter (kluczowe pola):
- `id`, `title`, `project`, `milestone`
- `type` (feature|backend|frontend|parser|infra|docs|analysis|refactor|bugfix)
- `execution_profile` (full|light|docs_only|analysis_only) — zob. `docs/process/TASK_PROFILES.md`
- `status` — pełny lifecycle, zob. `docs/process/STATUS_MODEL.md`
- `needs_context[]` — pliki do załadowania przy claim (kontekst on-demand)
- `depends_on[]`, `needs_human`, `priority`, `size`
- `test_status`, `docs_status`, `risk_status`, `created`, `last_updated`

Body:
- **Cel** — 2-3 zdania co osiągnąć
- **Zakres** / **Poza zakresem** — zapobiega scope creep
- **Acceptance Criteria** — checkboxy do odhaczenia
- **Zależności** — odniesienia do innych tasków
- **Notatki wykonawcze** — opcjonalne

Tworzenie: `/new-task` (slash-command).

---

## Często zadawane pytania

**Q: Czy muszę być online żeby używać slash-commands?**
A: Commands to lokalne pliki tekstowe w `.claude/commands/`. Claude Code czyta je lokalnie.

**Q: Co jeśli zapomnę wywołać `/session-start`?**
A: Powiedz Claude „przeczytaj `ai/AI_CONTEXT.md` i wskaż aktywny task z `tasks/active/`" — efekt jest taki sam, tylko mniej wygodny.

**Q: Czy slash-commands działają tylko w tym projekcie?**
A: Tak — `.claude/commands/` jest częścią repo projektu. Każdy projekt ma swój zestaw (może je dopasować).

**Q: Kiedy dodać / usunąć plik z `needs_context` taska?**
A: Dodaj, jeśli wiesz że task ewidentnie wymaga tego pliku (np. zmiana API → `docs/backend/API_SPEC.md`). Nie dodawaj z ostrożności „na wszelki wypadek" — Claude doczyta w trakcie, jeśli zajdzie potrzeba.

**Q: Co jeśli repo ma inny profil dojrzałości niż L3?**
A: Zobacz `MATURITY_PROFILES.md` — L0/L1/L2 mają węższy zakres obowiązkowych plików. Nie ma obowiązku utrzymywać pełnego `docs/process/` jeśli nie używasz auto-pipeline'u na VM.
