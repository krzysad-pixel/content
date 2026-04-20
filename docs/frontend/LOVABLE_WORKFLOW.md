# Lovable Integration Workflow

> Wzorzec dla projektów używających Lovable do generowania UI.
> Stosuj gdy: masz działający backend i chcesz zbudować frontend przez Lovable.

---

## Założenie

Lovable generuje warstwę wizualną. Claude CLI podłącza ją do backendu.
Bez jasnego podziału — konflikty w repozytorium i ręczne poprawki po każdej iteracji.

---

## Strefy własności

```
frontend/src/
├── components/     ← LOVABLE   (wizualne — karty, tabele, formularze)
├── pages/          ← LOVABLE   (ekrany / widoki)
├── styles/         ← LOVABLE   (CSS, Tailwind, design tokens)
├── api/            ← CLAUDE CLI (fetch, axios, integracja z endpointami)
├── hooks/          ← CLAUDE CLI (logika, stan, React Query)
└── context/        ← CLAUDE CLI (auth context, org context, router)
```

**Zasada:** Lovable nie dotyka `api/`, `hooks/`, `context/`.
Claude CLI nie dotyka `components/`, `pages/`, `styles/` — chyba że podpina dane (propsy).

---

## Git strategy

```
main
 └── lovable/[feature]   ← Lovable GitHub sync pushuje tutaj
```

### Krok 1 — Stwórz branch

```bash
git checkout -b lovable/[feature]
git push -u origin lovable/[feature]
```

### Krok 2 — Podłącz Lovable do GitHub

W Lovable: **Settings → GitHub → Connect**
- Repo: `[twoje-repo]`
- Branch: `lovable/[feature]`
- Folder: `frontend/`

Od tej chwili każda zmiana w Lovable → auto-push do brancha.

### Krok 3 — Claude CLI integruje

```bash
git checkout lovable/[feature]
git pull origin lovable/[feature]
# → dodaj api/, hooks/, context/
# → PR: lovable/[feature] → main
git push origin lovable/[feature]
```

### Krok 4 — Merge

```bash
git checkout main
git merge lovable/[feature]
git push origin main
```

---

## Iteracja (korekta UI)

```
Zmiana w Lovable
    ↓ auto-push do lovable/[feature]
Claude CLI: git pull lovable/[feature]
    ↓ sprawdź czy api/ hooks/ context/ nie zostały nadpisane
    ↓ jeśli tak: przywróć (git checkout main -- frontend/src/api/)
    ↓ PR → main
```

### Zabezpieczenie przed nadpisaniem

Dodaj do `.gitattributes` w projekcie:

```
frontend/src/api/**    merge=ours
frontend/src/hooks/**  merge=ours
frontend/src/context/** merge=ours
```

---

## Wymagania przed Lovable

Zawsze przygotuj przed sesją w Lovable:

1. **`docs/backend/API_SPEC.md`** — generuje Claude CLI (TASK: api-spec)
2. **`docs/design/UI_REQUIREMENTS.md`** — generuje ChatGPT (`/front-build`)
3. **`docs/design/LOVABLE_PROMPT.md`** — generuje ChatGPT (`/front-build`)
4. Branch `lovable/[feature]` w repo

---

## Kolejność pracy (pełny cykl)

```
1. Claude CLI → API_SPEC.md (czyta kod, dokumentuje endpointy)
2. ChatGPT /front-build → UI_REQUIREMENTS.md + LOVABLE_PROMPT.md
3. Stwórz branch lovable/[feature]
4. Podłącz Lovable do GitHub (branch lovable/[feature])
5. Lovable: wklej LOVABLE_PROMPT.md → generuj UI
6. Lovable: iterate → auto-push do brancha
7. Claude CLI: pull brancha → wire up API → PR → main
8. Deploy: docker compose up -d --build
```

---

## Remix istniejącego projektu Lovable

Jeśli masz istniejący projekt Lovable z komponentami do reużycia:

1. W Lovable: **Remix project** → zaznacz co zachować
2. Usuń niepotrzebne ekrany
3. Zmień prompt żeby opisywał docelowy zakres
4. Dopiero potem podłącz GitHub sync

W `UI_REQUIREMENTS.md` zaznacz które ekrany "bazują na remix" — Claude CLI wie żeby nie ruszać tych komponentów.
