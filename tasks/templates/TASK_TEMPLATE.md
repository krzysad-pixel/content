<!--
Nazwa pliku: tasks/queue/TASK-NNN-slug.md
  - NNN = kolejny numer (zero-padded: 001, 002, ... 087)
  - slug = 2-5 słów w kebab-case, oddające istotę (np. "crm-markasanulowane", "vat-kosztów-po-dacie")

Relacja status ↔ katalog:
  - status: queue     → plik w tasks/queue/
  - status: active    → plik w tasks/active/
  - status: testing   → plik w tasks/active/    (podetap w active)
  - status: review    → plik w tasks/review/
  - status: docs      → plik w tasks/active/    (podetap w active)
  - status: risk_check→ plik w tasks/active/    (podetap w active)
  - status: done      → plik w tasks/done/
  - status: blocked   → plik w tasks/blocked/
  - status: needs_human → plik w tasks/blocked/ (zablokowany czekaniem na decyzję)

Pełny lifecycle statusów: docs/process/STATUS_MODEL.md
Profile wykonawcze (full/light/docs_only/analysis_only): docs/process/TASK_PROFILES.md
-->
---
id: TASK-XXX
title: [Tytuł — krótki, aktywny, bez kropki]
project: [project-slug]
milestone: [nazwa-milestone]
type: feature                 # feature|backend|frontend|parser|infra|docs|analysis|refactor|bugfix
execution_profile: full       # full|light|docs_only|analysis_only
status: queue                 # pełny lifecycle — zob. docs/process/STATUS_MODEL.md
priority: medium              # low|medium|high|critical
size: M                       # XS|S|M|L|XL

depends_on: []                # [TASK-NNN, TASK-MMM]
needs_human: false

# Kontekst on-demand — worker przy claim wczyta TYLKO te pliki.
# Zamiast ładować cały CLAUDE.md + ai/* + docs/*, wskaż minimum potrzebne do tego taska.
needs_context:
  - docs/process/STATUS_MODEL.md
  # - docs/backend/API_SPEC.md
  # - docs/architecture/ARCHITECTURE.md
  # - src/modules/auth/

test_status: not_started      # not_started|tests_passed|tests_failed|tests_missing|tests_not_required
docs_status: not_started      # not_started|docs_updated|docs_missing|docs_not_needed
risk_status: not_started      # not_started|no_risk|risk_logged|needs_decision|blocked_by_risk

created: [YYYY-MM-DD]
last_updated: [YYYY-MM-DD]
---

## Cel

[Co konkretnie ten task ma osiągnąć — 2-3 zdania, bez ogólników. Jaka zmiana w systemie/kodzie/dokumentacji będzie mierzalnym rezultatem.]

## Zakres

- [Konkretna zmiana 1]
- [Konkretna zmiana 2]

## Poza zakresem

- [Co celowo wyłączamy — zapobiega scope creep]
- [Sugestia do BACKLOG zamiast do tego taska]

## Acceptance Criteria

- [ ] [Weryfikowalny warunek 1]
- [ ] [Weryfikowalny warunek 2]
- [ ] Testy: zob. `test_status` w frontmatter
- [ ] Dokumentacja zaktualizowana (jeśli zmiana architektury/API/schema)
- [ ] `git add -A && git status` — zero uncommitted changes
- [ ] Commit z message `<type>(TASK-NNN): <opis>` i push do `main`
- [ ] `git status` po push = `nothing to commit, working tree clean`

## Zależności

- [TASK-NNN — krótki opis dlaczego zależność]

## Notatki wykonawcze

[Opcjonalne — napotkane problemy, alternatywy odrzucone, decyzje lokalne. Jeśli odnosi się do decyzji projektu szerokiego → wpis do `planning/DECISIONS.md`.]
