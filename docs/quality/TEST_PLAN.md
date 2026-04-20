# Plan Testów

> Dokumentuje co, jak i kiedy testujemy.
> Wypełnij przed wdrożeniem — nie po.

## Strategia testowania

[UZUPEŁNIJ: np. Ze względu na skalę projektu (1-2 developerów + AI) skupiamy się na testach manualnych smoke + podstawowych testach integracyjnych. Testy jednostkowe dla krytycznej logiki biznesowej.]

## Typy testów

| Typ | Zakres | Kiedy | Kto |
|-----|--------|-------|-----|
| Smoke test | Krytyczne ścieżki end-to-end | Po każdym deploy | Developer |
| Test manualny | Nowe funkcjonalności | Po każdym tasku | Developer |
| Test regresji | Cały flow | Przed release | Developer |
| [UZUPEŁNIJ] | [UZUPEŁNIJ] | [UZUPEŁNIJ] | [UZUPEŁNIJ] |

## Smoke Test — lista kontrolna

Wykonaj po każdym wdrożeniu na produkcję.

### Backend
- [ ] `GET /api/health` → 200 `{"status":"ok"}`
- [ ] [UZUPEŁNIJ: np. POST /api/auth/login z poprawnymi danymi → 200 + token]
- [ ] [UZUPEŁNIJ: np. GET /api/[endpoint] z tokenem → 200]
- [ ] Logi backendu: brak ERROR/CRITICAL

### Frontend
- [ ] Strona główna ładuje się (brak błędów JS w konsoli)
- [ ] Logowanie działa
- [ ] [UZUPEŁNIJ: np. Główny widok ładuje dane]
- [ ] [UZUPEŁNIJ: np. Formularz X działa]

### Infrastruktura
- [ ] HTTPS działa (certyfikat ważny)
- [ ] Nginx proxy przekazuje requesty poprawnie

## Scenariusze testów manualnych

### Scenariusz: [UZUPEŁNIJ, np. Rejestracja i logowanie]

| Krok | Akcja | Oczekiwany wynik |
|------|-------|-----------------|
| 1 | [UZUPEŁNIJ] | [UZUPEŁNIJ] |
| 2 | [UZUPEŁNIJ] | [UZUPEŁNIJ] |

### Scenariusz: [UZUPEŁNIJ, np. Główna funkcjonalność]

| Krok | Akcja | Oczekiwany wynik |
|------|------|-----------------|
| 1 | [UZUPEŁNIJ] | [UZUPEŁNIJ] |

## Testy wydajnościowe

[UZUPEŁNIJ: czy planujemy load testing, jeśli tak — narzędzie i progi]

## Raportowanie wyników

→ `docs/quality/TEST_RESULTS.md`
