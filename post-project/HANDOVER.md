# Handover — Przekazanie Projektu

> Dokument dla osoby przejmującej projekt / odpowiedzialnej za utrzymanie.
> Musi być zrozumiały bez udziału autora projektu.

## Podstawowe informacje

| Pole | Wartość |
|------|---------|
| Projekt | [UZUPEŁNIJ] |
| Wersja | [UZUPEŁNIJ: np. v1.0.0] |
| Data przekazania | [UZUPEŁNIJ] |
| Przekazuje | [UZUPEŁNIJ: imię] |
| Przejmuje | [UZUPEŁNIJ: imię] |
| Repo | [UZUPEŁNIJ: URL GitHub] |

## Stan systemu w momencie przekazania

- **Środowisko produkcyjne:** [UZUPEŁNIJ: URL, serwer]
- **Ostatni deploy:** [UZUPEŁNIJ: data, wersja]
- **Stan:** ✅ Działa stabilnie / ⚠️ Działa z zastrzeżeniami / ❌ Ma znane problemy
- **Znane problemy:** [UZUPEŁNIJ lub "Brak"]

## Jak uruchomić i zatrzymać system

```bash
# Start
[UZUPEŁNIJ]

# Stop
[UZUPEŁNIJ]

# Restart
[UZUPEŁNIJ]

# Sprawdzenie stanu
[UZUPEŁNIJ]
```

## Dostępy i kredencjale

> ⚠️ Nie wpisuj haseł tutaj — wskaż gdzie są przechowywane.

| Dostęp | Gdzie znajdziesz |
|--------|-----------------|
| SSH do serwera | [UZUPEŁNIJ: np. klucz w LastPass / od admina infra] |
| Hasło admina aplikacji | [UZUPEŁNIJ: np. plik .env na serwerze] |
| GitHub repo | [UZUPEŁNIJ] |
| [UZUPEŁNIJ] | [UZUPEŁNIJ] |

## Rutynowe czynności (co, kiedy, jak)

| Czynność | Częstotliwość | Dokumentacja |
|----------|--------------|-------------|
| Backup bazy | [UZUPEŁNIJ] | `docs/ops/ADMIN_GUIDE.md` |
| Odnowienie SSL | Co roku (automatyczne) | `docs/ops/SECURITY.md` |
| Aktualizacja zależności | [UZUPEŁNIJ] | [UZUPEŁNIJ] |
| [UZUPEŁNIJ] | [UZUPEŁNIJ] | [UZUPEŁNIJ] |

## Kluczowe pliki i lokalizacje

| Co | Gdzie |
|----|-------|
| Plik konfiguracyjny (.env) | `[UZUPEŁNIJ: ścieżka na serwerze]` |
| Logi backendu | [UZUPEŁNIJ] |
| Pliki frontendu (static) | [UZUPEŁNIJ: np. /var/www/projekt/] |
| Backup bazy | [UZUPEŁNIJ] |

## Gdzie szukać pomocy

1. `docs/ops/TROUBLESHOOTING.md` — rozwiązania typowych problemów
2. `docs/ops/ADMIN_GUIDE.md` — rutynowe czynności
3. `ai/AI_CONTEXT.md` — opis architektury
4. Kontakt: [UZUPEŁNIJ: imię, email — autor projektu]

## Planowane prace (backlog)

→ `planning/BACKLOG.md` — lista odłożonych funkcjonalności i technicznego długu

## Otwarte kwestie

- [UZUPEŁNIJ: np. Monitoring nie został wdrożony — planowany w v1.1]
- [UZUPEŁNIJ lub "Brak"]
