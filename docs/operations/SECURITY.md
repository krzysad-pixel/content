# Bezpieczeństwo

## Zarządzanie sekretami

- Wszystkie sekrety trzymane w pliku `.env` na serwerze
- Plik `.env` NIE jest commitowany do repo (dodaj do `.gitignore`)
- Wzorzec: `.env.example` (bez wartości) — commitowany do repo

**Rotacja haseł:**
- [UZUPEŁNIJ: jak często i jak rotować hasła adminów]
- Po rotacji: zaktualizuj `.env` na serwerze, zrestartuj usługi

## Klucze SSH

- Klucz do serwera: `[UZUPEŁNIJ: np. ~/.ssh/id_ed25519]`
- [UZUPEŁNIJ: zasady przechowywania i rotacji kluczy]

## HTTPS / SSL

- Dostawca certyfikatu: [UZUPEŁNIJ: np. Let's Encrypt]
- Automatyczne odnowienie: [UZUPEŁNIJ: tak/nie, jak]
- Ważność: certbot sprawdza co [UZUPEŁNIJ] dni

## Autoryzacja w aplikacji

[UZUPEŁNIJ: opis modelu autoryzacji — kto ma dostęp do czego]

### Jeśli projekt używa JWT (uzupełnij w Sesji 3 intake):

| Parametr | Wartość |
|----------|---------|
| Access token TTL | [np. 15m] |
| Refresh token TTL | [np. 7d] |
| Refresh token storage | [httpOnly cookie / DB / Redis] |
| bcrypt rounds | [np. 10] |
| JWT_SECRET źródło | `.env` na serwerze — min. 32 znaki, losowe |
| JWT_REFRESH_SECRET | osobny secret — nigdy ten sam co JWT_SECRET |

### Rate limiting (jeśli projekt ma publiczne endpointy auth):
- `POST /auth/login` — limit: [np. 10 req/min per IP]
- `POST /auth/register` — limit: [np. 5 req/min per IP]
- Implementacja: [np. @nestjs/throttler / nginx limit_req]

## Co NIE powinno trafić do repo

- `.env` (sekrety)
- Klucze SSH
- Certyfikaty SSL
- Dane produkcyjne / dumpy bazy z danymi użytkowników
- [UZUPEŁNIJ: inne]

## Incydent bezpieczeństwa — procedura

1. [UZUPEŁNIJ: np. Natychmiast zmień hasła adminów]
2. [UZUPEŁNIJ: np. Sprawdź logi dostępu]
3. [UZUPEŁNIJ: np. Poinformuj właściciela projektu]
4. [UZUPEŁNIJ: np. Udokumentuj incydent]
