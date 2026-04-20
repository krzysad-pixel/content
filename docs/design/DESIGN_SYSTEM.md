# Design System — [NAZWA PROJEKTU]

> Źródło prawdy dla kolorów, fontów, komponentów i stylu UI.
> Uzupełnij w Sesji 3 intake (jeśli masz mockup) lub po TASK-UI-init.

## Kolory

| Nazwa | Hex | Użycie |
|-------|-----|--------|
| Primary | `[np. #ffd166]` | CTA, akcenty, przyciski główne |
| Secondary | `[np. #40efb7]` | Postęp, sukces, oznaczenia |
| Tertiary / Error | `[np. #ef476f]` | Błędy, usuń, ostrzeżenia |
| Background | `[np. #121317]` | Tło główne |
| Surface | `[np. #1a1b24]` | Karty, panele |
| Surface variant | `[np. #343439]` | Inputy, secondary surface |
| On-surface | `[np. #e8e8f0]` | Tekst główny |
| On-surface muted | `[np. #8888a0]` | Tekst pomocniczy, placeholdery |

## Fonty

| Rola | Font | Wagi | Użycie |
|------|------|------|--------|
| [np. Headline] | [np. Outfit] | [np. 700, 800] | Nagłówki, tytuły |
| [np. Body] | [np. Outfit] | [np. 400, 600] | Treść, formularze |
| [np. Label/Mono] | [np. Space Mono] | [np. 400, 700] | Badge'e, etykiety, numery |

Import (Google Fonts):
```
[UZUPEŁNIJ: np. https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Space+Mono:wght@400;700]
```

## Spacing / Border radius

| Element | Wartość |
|---------|---------|
| Border radius — karty | [np. 14px] |
| Border radius — przyciski | [np. 12px] |
| Border radius — inputy | [np. 10px] |
| Padding karty | [np. 16px] |

## Komponenty bazowe

| Komponent | Opis | Plik |
|-----------|------|------|
| Button primary | Żółte tło, ciemny tekst | [UZUPEŁNIJ po implementacji] |
| Button secondary | Outline / ghost | [UZUPEŁNIJ] |
| Card | Ciemna karta z radius | [UZUPEŁNIJ] |
| Input | Ciemne tło, jaśniejszy border | [UZUPEŁNIJ] |
| Badge | Mały pill z etykietą | [UZUPEŁNIJ] |
| Progress bar | Gradient teal → primary | [UZUPEŁNIJ] |

## Dark / Light mode

- [ ] Aplikacja obsługuje dark mode
- [ ] Aplikacja obsługuje light mode
- [x] Tylko dark mode (wystarczy na MVP)

## Mobile first

- Breakpoint mobile: `< 768px`
- Breakpoint tablet: `768px – 1024px`
- Breakpoint desktop: `> 1024px`
- Domyślny viewport do projektowania: `375 x 812px` (iPhone 14)

## Źródło mockupu / prototypu

| Narzędzie | Plik / URL | Zatwierdzone ekrany |
|-----------|-----------|---------------------|
| [np. Google Stitch] | [np. stitch-preview.html] | [np. Login, Dashboard, Lista miejsc, Trasa] |
| [np. Figma] | [URL] | [UZUPEŁNIJ] |

> Szczegóły przeglądu mockupu → `docs/design/UI_DECISIONS.md`
