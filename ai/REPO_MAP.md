# Repo Map — content

> Mapa nawigacyjna repo. Aktualizuj przy każdej zmianie struktury katalogów.
> Używaj tego pliku zamiast eksplorowania całego repo.

## Struktura katalogów

```
content/
│
├── CLAUDE.md                    ← główny plik konfiguracji sesji CLI
├── CHANGELOG.md                 ← historia wydań
│
├── ai/                          ← kontekst i zasady dla AI
│   ├── AI_CONTEXT.md            ← opis projektu, stack, architektura
│   ├── AI_RULES.md              ← zasady pracy Claude CLI
│   ├── PROJECT_STATE.md         ← aktualny stan projektu
│   ├── REPO_MAP.md              ← ten plik
│   └── SESSION_START.md         ← flow każdej sesji
│
├── content/                     ← dane — pliki markdown (źródło prawdy)
│   ├── _system/                 ← definicje systemowe
│   │   ├── CONTENT_MODEL.md     ← model Content Unit (pola, statusy)
│   │   ├── GPT_BRIEF.md         ← wzorzec dla GPT do generowania CU
│   │   └── PRODUCTS.md          ← rejestr produktów
│   └── products/
│       └── zgoda/
│           ├── foundation.md    ← opis produktu, persona, problem
│           ├── gaps.md          ← braki do uzupełnienia
│           └── units/           ← Content Units (CU-NNN-slug.md)
│
├── src/                         ← kod aplikacji (backend)
│   └── server.js                ← Express API
│
├── public/                      ← kod aplikacji (frontend)
│   ├── index.html
│   ├── app.js
│   └── style.css
│
├── planning/                    ← planowanie projektu
│   ├── MASTER_PLAN.md          ← plan realizacji (źródło prawdy)
│   ├── BACKLOG.md              ← odłożona praca i follow-upy
│   ├── DECISIONS.md            ← log decyzji architektonicznych
│   ├── MILESTONES.md           ← kamienie milowe
│   ├── ROADMAP.md              ← mapa drogowa
│   └── TASK_COST_LOG.md        ← historia kosztów tasków
│
├── tasks/                       ← zarządzanie taskami
│   ├── QUEUE_INDEX.md          ← aktualny stan kolejki (czytaj na starcie)
│   ├── active/                 ← aktywny task (max 1 plik)
│   ├── queue/                  ← kolejne taski do zrealizowania
│   ├── done/                   ← zakończone taski
│   └── templates/              ← szablony
│       ├── task-template.md
│       ├── module-doc-template.md
│       └── review-template.md
│
├── docs/                        ← dokumentacja projektu
│   ├── business/               ← dokumenty biznesowe
│   │   ├── PROJECT_CHARTER.md
│   │   ├── PROBLEM_STATEMENT.md
│   │   ├── USER_STORIES.md
│   │   └── BUSINESS_MODEL.md
│   ├── architecture/           ← architektura systemu
│   │   ├── README.md
│   │   └── DECISIONS.md
│   ├── backend/                ← dokumentacja backendu
│   │   ├── README.md
│   │   └── API_SPEC.md
│   ├── frontend/               ← dokumentacja frontendu
│   │   └── README.md
│   ├── integrations/           ← integracje z zewnętrznymi systemami
│   │   └── README.md
│   ├── ops/                    ← dokumentacja operacyjna
│   │   ├── DEPLOYMENT.md
│   │   ├── ADMIN_GUIDE.md
│   │   ├── TROUBLESHOOTING.md
│   │   └── SECURITY.md
│   ├── product/                ← dokumentacja produktu
│   │   └── README.md
│   ├── quality/                ← testy i jakość
│   │   ├── TEST_PLAN.md
│   │   ├── TEST_RESULTS.md
│   │   └── QA_CHECKLIST.md
│   └── user/                   ← dokumentacja użytkownika
│       └── USER_GUIDE.md
│
├── post-project/               ← dokumentacja po zakończeniu projektu
│   ├── RETROSPECTIVE.md
│   ├── LESSONS_LEARNED.md
│   ├── HANDOVER.md
│   └── KNOWLEDGE_TRANSFER.md
│
├── diagrams/                   ← diagramy (Mermaid, SVG, PDF)
│
└── scripts/                    ← skrypty pomocnicze (smoke tests, deploy)
```

## Gdzie co szukać — szybki indeks

| Czego szukasz | Gdzie |
|--------------|-------|
| Co projekt robi | `ai/AI_CONTEXT.md` |
| Zasady pracy AI | `ai/AI_RULES.md` |
| Aktualny task | `tasks/active/` |
| Kolejka tasków | `tasks/QUEUE_INDEX.md` |
| Plan projektu | `planning/MASTER_PLAN.md` |
| Odłożona praca | `planning/BACKLOG.md` |
| Decyzje arch. | `planning/DECISIONS.md` |
| Kontrakt API | `docs/backend/API_SPEC.md` |
| Deploy | `docs/ops/DEPLOYMENT.md` |
| Problemy | `docs/ops/TROUBLESHOOTING.md` |
| Testy | `docs/quality/TEST_PLAN.md` |
| Cel biznesowy | `docs/business/PROJECT_CHARTER.md` |
| Po projekcie | `post-project/RETROSPECTIVE.md` |

## Kluczowe pliki kodu

| Komponent | Ścieżka |
|-----------|---------|
| Backend entrypoint | `src/server.js` |
| Frontend SPA | `public/app.js` |
| Docker | `docker-compose.yml` |
| Model CU | `content/_system/CONTENT_MODEL.md` |
