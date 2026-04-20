# Troubleshooting — Rozwiązywanie Problemów

> Dokumentuj każdy niestandardowy problem i jego rozwiązanie.
> To oszczędza czas przy kolejnych incydentach.

## Format wpisu

```
### [Tytuł problemu]
**Objaw:** [Co widać — komunikat błędu, zachowanie]
**Przyczyna:** [Dlaczego to się dzieje]
**Rozwiązanie:**
```bash
[komendy do naprawy]
```
**Zapobieganie:** [Jak unikać w przyszłości]
```

---

## Problemy z backendem

### Backend nie startuje
**Objaw:** `docker compose up` kończy się błędem lub kontener restartuje
**Diagnostyka:**
```bash
[UZUPEŁNIJ: np. docker compose -f docker-compose.prod.yml logs api --tail=50]
```
**Najczęstsze przyczyny:**
- Brak lub błędny plik `.env`
- Port zajęty przez inny proces: `lsof -i :[PORT]`
- Błąd migracji bazy

---

### API zwraca 500 Internal Server Error
**Diagnostyka:**
```bash
[UZUPEŁNIJ: komenda logów]
```
Sprawdź: błędy połączenia z bazą, brakujące zmienne env, wyjątki w logach.

---

## Problemy z bazą danych

### Błąd migracji Prisma
**Objaw:** `P3009 migrate found failed migrations`
**Rozwiązanie:**
```bash
[UZUPEŁNIJ: np. npx prisma migrate resolve --rolled-back [MIGRATION_NAME]]
[UZUPEŁNIJ: np. npx prisma migrate deploy]
```

---

## Problemy z frontendem

### Frontend nie ładuje się (biała strona)
**Diagnostyka:** Otwórz DevTools → Console. Sprawdź błędy sieciowe w zakładce Network.
**Najczęstsze przyczyny:**
- Błędny `VITE_API_URL` (frontend woła zły adres API)
- Nginx nie serwuje pliku `index.html` dla SPA routing (`try_files` brakuje)

---

## Problemy z Nginx

### 502 Bad Gateway
**Przyczyna:** Nginx nie może osiągnąć backendu
**Diagnostyka:**
```bash
systemctl status nginx
[UZUPEŁNIJ: sprawdź czy backend działa]
```

### SSL nie działa
**Diagnostyka:**
```bash
[UZUPEŁNIJ: np. certbot renew --dry-run]
```

---

## Przydatne komendy diagnostyczne

```bash
# Status usług
[UZUPEŁNIJ: np. docker compose ps]

# Logi backendu (ostatnie 50 linii)
[UZUPEŁNIJ: np. docker compose logs api --tail=50 -f]

# Test endpointu
[UZUPEŁNIJ: np. curl -s https://[DOMENA]/api/health | jq]

# Sprawdź co słucha na porcie
lsof -i :[PORT]

# Restart nginx
nginx -t && systemctl reload nginx
```
