# GPT Brief — Content System

## Czym jest ten system

Repozytorium do zarządzania Content Units dla wielu produktów.
Każdy Content Unit to jeden plik markdown z frontmatter.
Aplikacja webowa (Node.js) czyta te pliki i pozwala zarządzać statusami.

## Struktura plików

```
content/
└── products/
    └── [produkt]/
        ├── foundation.md     ← opis produktu, persona, problem
        ├── gaps.md           ← braki do uzupełnienia
        └── units/
            ├── CU-001-slug.md
            ├── CU-002-slug.md
            └── ...
```

## Model Content Unit — pola frontmatter

```yaml
---
id: CU-NNN              # numer sekwencyjny, np. CU-002
product: zgoda          # slug produktu
module: organizacje     # moduł produktu którego dotyczy unit
type: feature           # feature | pain | story | edu | social-proof
role: sales             # sales | edu | community
status: backlog         # backlog | ready | published | archived
platform: []            # instagram | linkedin | tiktok | blog (lista)
published_at:           # YYYY-MM-DD lub puste
---
```

### Znaczenie typów

| Typ | Kiedy używać |
|-----|-------------|
| `feature` | pokazuje konkretną funkcję produktu |
| `pain` | zaczyna od bólu użytkownika, produkt jako rozwiązanie |
| `story` | historia z życia użytkownika (przed/po) |
| `edu` | edukacja — tłumaczy proces lub pojęcie |
| `social-proof` | opinia, case study, wynik |

### Znaczenie ról

| Rola | Cel |
|------|-----|
| `sales` | sprzedaż — kieruje na landing, zachęca do próby |
| `edu` | edukacja — buduje zaufanie i kompetencje |
| `community` | build in public — pokazuje proces powstawania produktu |

## Format pliku (body)

```markdown
# [Tytuł — krótki, konkretny]

## Problem
[jeden konkretny ból użytkownika — jedno zdanie lub dwa]

## Rozwiązanie
[co produkt z tym robi — konkretnie, bez ogólników]

## Efekt (Before / After)
**Before:** [sytuacja bez produktu]
**After:** [sytuacja z produktem]

## Hook
[pierwsze zdanie rolki lub posta — ma zatrzymać scrollowanie]

## CTA
[jedno wezwanie do działania]

## Notatki
[opcjonalne — pytania, zależności, co wymaga uzupełnienia]
```

## Nazewnictwo pliku

```
CU-NNN-slug-tytulu.md
```

Slug = tytuł małymi literami, spacje zastąpione myślnikami, bez polskich znaków.

Przykład: `CU-002-role-i-uprawnienia.md`

## Przykład gotowego Content Unit

Plik: `content/products/zgoda/units/CU-001-organizacje.md`

```markdown
---
id: CU-001
product: zgoda
module: organizacje
type: feature
role: sales
status: backlog
platform: []
published_at:
---

# Każda firma ma własną aplikację

## Problem
Dane różnych organizacji mieszają się albo trzeba płacić za osobne narzędzie dla każdego klienta.

## Rozwiązanie
W zgoda każda organizacja (klub, szkoła) ma własną, izolowaną instancję z osobnymi użytkownikami i danymi.

## Efekt (Before / After)
**Before:** Trener klubu sportowego używa jednego arkusza Excel dla trzech sekcji — dane się mieszają, trudno znaleźć właściwą listę.
**After:** Każda sekcja ma własne konto, własnych użytkowników i własne dane — zero chaosu.

## Hook
Każda firma ma własną aplikację — bez mieszania danych.

## CTA
Zobacz jak to działa → [URL]

## Notatki
Pierwszy unit z serii "Fundament".
```

## Statusy (pipeline)

| Status | Znaczenie |
|--------|-----------|
| `backlog` | pomysł, wymaga dopracowania |
| `ready` | gotowy do nagrania / napisania |
| `published` | opublikowany |
| `archived` | nieaktualny |

## Zasady przy tworzeniu nowych CU

1. Jeden unit = jeden konkretny problem lub funkcja
2. Hook musi zatrzymać scrollowanie — konkretny, nie ogólny
3. Before/After musi być z życia wzięty — nie abstrakcyjny
4. CTA zawsze jedno, zawsze z URL (lub placeholder `[URL]`)
5. Numeracja sekwencyjna — sprawdź ostatni numer w `units/` i kontynuuj
