# project-template-agent — AI-Assisted Development (Agent Model)

> Szkielet projektu do realizacji w modelu Mac/Claude + VM/Claude CLI z agentami procesowymi.
> Rozszerza project-template-v2 o warstwę wykonawczą opartą na agentach.

---

## Model pracy

```
Mac / Claude          →   planowanie, intake, klasyfikacja tasków, decyzje
VM / Claude CLI       →   seryjne wykonanie tasków przez pipeline agentów
```

Agenci procesowi: `planner-checker → implementer → test-runner → reviewer → docs-updater → risk-logger`

Nie każdy task przechodzi przez pełny pipeline — dobierasz `execution_profile` na Macu.

---

## Szybki start

### 1. Skopiuj szablon

```bash
cp -r project-template-agent ~/moj-projekt
cd ~/moj-projekt
git init && git add -A && git commit -m "init"
```

### 2. Wdróż skille na każdej maszynie

```bash
mkdir -p ~/.claude/commands
cp commands/*.md ~/.claude/commands/
rm -f ~/.claude/commands/DEPLOY.md
```

### 3. Intake projektu

```
/intake
```

Claude przeprowadzi przez 4 sesje zbierania informacji i uzupełni pliki projektu.

### 4. Pętla pracy

**Mac (planowanie):**
```
/new-task    → utwórz task z type + execution_profile
```

**VM / Claude CLI (wykonanie):**
```bash
./scripts/claim-next-task.sh    # pobierz task z kolejki
./scripts/run-task.sh           # uruchom pipeline agentów
./scripts/finalize-task.sh      # zamknij task, zaktualizuj statusy
```

---

## Zasada projektowa

> **Skille = procedury (HOW)**
> **Pliki = kontekst i stan (WHAT + WHERE)**
> **Agenci = wykonanie (DO)**

---

## Profile wykonania

| Profile | Agenci | Kiedy |
|---------|--------|-------|
| `full` | wszyscy 6 | feature, backend, ważny bugfix |
| `light` | planner, implementer, reviewer, risk | mały refactor, config |
| `docs_only` | planner, docs-updater, reviewer, risk | dokumentacja |
| `analysis_only` | planner, reviewer, docs-updater, risk | analiza, setup |

---

## Struktura repozytorium

```
projekt/
├── CLAUDE.md                      ← kontekst projektu dla Claude CLI
├── PROJECT_PROCEDURES.md          ← procedury pracy — czytaj raz
│
├── .claude/
│   ├── agents/                    ← profile agentów procesowych (6 plików)
│   └── settings.json
│
├── commands/                      ← skille do wdrożenia globalnie
│   ├── DEPLOY.md
│   ├── intake.md
│   ├── session-start.md
│   ├── new-task.md
│   └── session-end.md
│
├── scripts/                       ← skrypty worker flow (VM)
│   ├── worker.sh
│   ├── claim-next-task.sh
│   ├── run-task.sh
│   ├── finalize-task.sh
│   └── ...
│
├── ai/
│   ├── AI_CONTEXT.md              ← opis projektu, stack, architektura
│   ├── AI_RULES.md                ← zasady pracy agentów
│   ├── PROJECT_STATE.md           ← aktualny stan projektu
│   └── REPO_MAP.md
│
├── docs/
│   ├── intake/                    ← notatki z intake
│   ├── ops/                       ← model wykonania, profile agentów/tasków, runbook
│   ├── project/                   ← PROJECT_OVERVIEW, MILESTONES, BACKLOG, KPI, DECISIONS
│   ├── quality/                   ← TEST_STATUS, RISK_REGISTER, BLOCKERS, DOC_COVERAGE
│   ├── business/
│   ├── architecture/
│   ├── backend/
│   ├── frontend/
│   └── design/
│
├── tasks/
│   ├── QUEUE_INDEX.md             ← live state kolejki
│   ├── queue/                     ← taski gotowe do realizacji
│   ├── active/                    ← task w trakcie (max 1)
│   ├── review/
│   ├── blocked/
│   ├── done/
│   ├── logs/                      ← execution logs
│   └── templates/
│       ├── TASK_TEMPLATE.md
│       └── TASK_TEMPLATE_REALIZATION.md
│
├── planning/                      ← MASTER_PLAN, MILESTONES, ROADMAP
└── post-project/                  ← retro, handover
```

---

Pełna dokumentacja procedur: `PROJECT_PROCEDURES.md`
Dokumentacja modelu agentowego: `docs/ops/PROJECT_EXECUTION_MODEL.md`
