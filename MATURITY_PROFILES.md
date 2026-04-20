# MATURITY_PROFILES

Poziomy dojrzałości dokumentacji i procesu. Nie każde repo musi mieć pełny szkielet L3 — dobierz poziom do rzeczywistej roli repo.

## L0 — minimal

**Przypadek użycia:** Playbook, snippet, single-purpose, referencja bez aktywnej pracy.

**Obowiązuje:**
- `README.md`
- `CHANGELOG.md` (opcjonalnie)

**Nie obowiązuje:** wszystko inne.

**Przykład:** dokumentacja recovery, pojedynczy skrypt, collection utilities.

---

## L1 — knowledge

**Przypadek użycia:** Repo wiedzy / pomysłów, bez kodu produkcyjnego. Domena własna (np. katalog `ideas/` w repo `ideas`).

**Obowiązuje:**
- L0 +
- `CLAUDE.md` (indeks jak prowadzić pracę z tym repo)
- Domena własna (`ideas/`, `notes/`, itp.)

**Przykład:** repo `ideas`, `meta-knowledge`, notatki badawcze.

---

## L2 — project-light

**Przypadek użycia:** Aktywny projekt prowadzony głównie ręcznie (Mac-driven). Bez auto-pipeline'u na VM.

**Obowiązuje:**
- L1 +
- `.claude/agents/` — 6 agentów procesowych (ready na przyszłość, ale nieuruchamiane cyklicznie)
- `ai/AI_CONTEXT.md`, `ai/AI_RULES.md`, `ai/PROJECT_STATE.md`, `ai/REPO_MAP.md`
- `tasks/` — `QUEUE_INDEX.md` + `queue/active/done/blocked/` + `templates/TASK_TEMPLATE.md`
- `planning/` — `MASTER_PLAN.md`, `BACKLOG.md`, `DECISIONS.md`, `MILESTONES.md`, `TASK_COST_LOG.md`
- `docs/` — conditional subset:
  - `architecture/`, `backend/` (jeśli ma backend), `frontend/` (jeśli ma frontend), `database/` (jeśli ma DB)
  - `quality/RISK_REGISTER.md`, `quality/BLOCKERS.md`
  - `operations/` — wybrane (co najmniej DEPLOYMENT lub RUNBOOK)
- `CHANGELOG.md`

**Nie obowiązuje na L2:**
- `.claude/settings.json` + `scripts/` z pipeline'em workera — te dwa tworzą parę (settings.json odpala hooki z `scripts/`; jeden bez drugiego = dead hooks lub nieużywane skrypty). Dodawaj dopiero przy upgrade do L3.
- `.claude/commands/` — opcjonalnie jako częściowy upgrade, gdy chcesz slash-commands (`/intake`, `/new-task`, `/session-start`, `/session-end`) bez włączania workera. Bez ryzyka — nie zależą od skryptów.

**Przykład:** cashflow-manager-api (L2 + `.claude/commands/`), Accordo-backend, planner-wyjazd-w-v3.

---

## L3 — project-full

**Przypadek użycia:** Projekt z auto-pipelinem agentów na VM. Worker cyklicznie pobiera taski, raportuje, człowiek decyduje tylko na bramkach.

**Obowiązuje:**
- L2 +
- `.claude/commands/` — 5 slash-commands (intake, new-task, session-start, session-end, DEPLOY)
- `.claude/settings.json` + `scripts/` — **para zależna**, obie obowiązkowe razem. `settings.json` konfiguruje 3 hooki Claude Code (`SessionStart` → `session-start-hook.sh`, `PostToolUse` na Edit/Write → `ci-check.sh` 30s, `Stop` → `finalize-task.sh` 60s); bez odpowiednich skryptów hooki rzucą błędami. Dlatego włączamy oba lub żaden.
- `scripts/` — pipeline operacyjny:
  - `worker.sh`, `claim-next-task.sh`, `run-task.sh`, `finalize-task.sh`
  - `update-queue-index.sh`, `session-start-hook.sh`, `ci-check.sh`, `validate-pack.sh`
- `docs/process/` — pełny komplet:
  - `PROJECT_EXECUTION_MODEL.md`, `STATUS_MODEL.md`, `STATUS_TRANSITIONS.md`
  - `TASK_PROFILES.md`, `AGENT_PROFILES.md`, `AGENT_IMPLEMENTATION_SPEC.md`
  - `VALIDATION_CHECKLIST.md`, `EXECUTION_RUNBOOK.md`, `CLAUDE_CLI_ADAPTATION.md`
- `docs/business/` — PROJECT_CHARTER, PROBLEM_STATEMENT, USER_STORIES, BUSINESS_MODEL
- `docs/product/` — KPI, MILESTONE_STATUS, PROJECT_OVERVIEW
- `docs/quality/` — pełny komplet (QA_CHECKLIST, TEST_PLAN, TEST_RESULTS, TEST_STATUS, QUALITY_GATE_RULES, DOC_COVERAGE, EXECUTION_LOG_SCHEMA)
- `post-project/` — HANDOVER, RETROSPECTIVE, LESSONS_LEARNED, KNOWLEDGE_TRANSFER (po zamknięciu projektu)

**Przykład:** vdashboard (gold reference), docelowo dashboard-tkomp2.

---

## Jak wybrać poziom

| Kryterium | L0 | L1 | L2 | L3 |
|---|---|---|---|---|
| Kod produkcyjny | — | — | ✓ | ✓ |
| Aktywna praca (taski) | — | — | ✓ | ✓ |
| Auto-pipeline na VM | — | — | — | ✓ |
| Taski trafiają przez worker | — | — | — | ✓ |
| Zespół > 1 osoba | — | — | opcjonalnie | ✓ |
| Projekt produkcyjny z klientem | — | — | ✓ | ✓ |

Przy wątpliwościach — wybierz niżej. Dodanie plików później jest tańsze niż tłumaczenie „co robi ten plik" każdemu nowemu.

## Upgrade ścieżka

L0 → L1: dodaj CLAUDE.md + domenę.  
L1 → L2: dodaj `.claude/agents/`, `ai/`, `tasks/`, `planning/`, wybrane `docs/`.  
L2 → L3: dodaj `.claude/commands/`, `scripts/`, `docs/process/`, `docs/business/`, `post-project/`.

## Relacja do kanonu

Ten dokument definiuje **co obowiązuje na danym poziomie**. Pliki faktyczne (treść, formatowanie, frontmatter) są w `project-template-current/` — kopiuj z tego katalogu przy inicjalizacji nowego repo.
