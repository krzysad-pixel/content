# Roadmapa Projektu

> Wizja rozwoju produktu — od MVP do wersji docelowej.

## v1 — MVP ✅ done (2026-04-20)

**Cel:** Działająca aplikacja do przeglądania i zarządzania statusami Content Units

Zrealizowane:
- Lista CU z filtrami (produkt / status / typ)
- Zmiana statusu jednym kliknięciem
- Panel podglądu CU
- Sync do GitHub (pull → commit → push)
- Dashboard produktu (foundation + gaps + statystyki)
- Dockeryzacja, działanie na VM (http://192.168.1.11:3333)

## v1.1 — UI rozszerzony ✅ done (2026-04-20)

**Cel:** Wygodniejsza praca z treścią CU bez wychodzenia do edytora

Zrealizowane:
- Ikona kopiowania body CU do schowka
- Edycja treści CU inline w przeglądarce
- Fix: sync report pokazuje lokalnie zmienione pliki

## v1.2 — Baza contentowa (w toku)

**Cel:** Kompletna baza CU gotowa do pierwszej publikacji dla Zgoda.Online

Do zrobienia:
- Min. 20 CU zgodnych z foundation (zgody + wyjazdy, kluby sportowe)
- Ustalone pierwsze 5 CU do realizacji z priorytetem
- Scenariusze publikacji (rolki, posty)

## v2 — Tworzenie i zarządzanie CU

**Cel:** Pełny cykl życia CU w przeglądarce bez zewnętrznych narzędzi

Planowane:
- Formularz tworzenia nowego CU
- Edycja frontmatter (moduł, typ, platforma)
- Dodawanie nowych produktów przez UI

## v3 — Dystrybucja i eksport

**Cel:** Zamknięcie pętli od CU do opublikowanego materiału

Planowane:
- Eksport CU do formatu gotowego do publikacji
- Harmonogram publikacji w UI
- Integracja z VDashboard (opcjonalne)

## Co celowo zostaje poza roadmapą

- Edytor WYSIWYG (prostota > funkcjonalność)
- System komentarzy / review wewnątrz aplikacji
- Moduł certyfikatów / szkoleń (zablokowany w komunikacji Zgoda.Online)
