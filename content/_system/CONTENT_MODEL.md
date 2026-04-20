# Content Model — definicja Content Unit

## Frontmatter (obowiązkowe pola)

```yaml
---
id: CU-001
product: zgoda          # slug produktu = nazwa katalogu w content/products/
module: organizacje     # moduł produktu którego dotyczy
type: feature           # feature | pain | story | edu | social-proof
role: sales             # sales | edu | community
status: backlog         # backlog | ready | published | archived
platform: []            # instagram | linkedin | tiktok | blog
published_at:           # YYYY-MM-DD lub puste
---
```

## Body (szablon)

```markdown
# [Tytuł Content Unit]

## Problem
[jeden konkretny ból użytkownika]

## Rozwiązanie
[co produkt z tym robi]

## Efekt (Before / After)
**Before:** [sytuacja bez produktu]
**After:** [sytuacja z produktem]

## Hook
[pierwsze zdanie rolki / posta]

## CTA
[jedno wezwanie do działania z URL]

## Notatki
[opcjonalne]
```

## Nazewnictwo pliku

```
CU-NNN-slug-tytulu.md
```

Przykład: `CU-001-organizacje-chaos.md`

## Statusy

| Status | Znaczenie |
|--------|-----------|
| backlog | pomysł, nie gotowy do produkcji |
| ready | gotowy do nagrania / napisania |
| published | opublikowany |
| archived | nieaktualny, nie używać |
