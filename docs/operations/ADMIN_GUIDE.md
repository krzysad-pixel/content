# Przewodnik Administratora

> Dla osoby odpowiedzialnej za utrzymanie systemu po wdrożeniu.
> Zakłada dostęp do serwera i podstawową znajomość terminala.

## Rutynowe czynności

### Sprawdzenie stanu systemu

```bash
# Czy backend działa?
[UZUPEŁNIJ: np. curl -s https://[DOMENA]/api/health]

# Czy kontenery są UP?
[UZUPEŁNIJ: np. docker compose ps]

# Ostatnie logi (szukaj ERRORów)
[UZUPEŁNIJ: np. docker compose logs api --tail=100 | grep -i error]
```

### Restart usług

```bash
# Restart backendu
[UZUPEŁNIJ: np. docker compose -f docker-compose.prod.yml restart api]

# Restart nginx
nginx -t && systemctl reload nginx
```

### Backup bazy danych

```bash
[UZUPEŁNIJ: np.
# PostgreSQL dump
docker exec [DB_CONTAINER] pg_dump -U [USER] [DB_NAME] > backup_$(date +%Y%m%d).sql
]
```

## Zarządzanie użytkownikami

[UZUPEŁNIJ: jak dodawać/usuwać/modyfikować użytkowników — przez panel admin lub bezpośrednio w bazie]

## Panel administracyjny

- URL: [UZUPEŁNIJ: np. https://[DOMENA]/admin]
- Login: [UZUPEŁNIJ: np. dane z pliku .env: ADMIN_USER + ADMIN_PASS]
- Funkcje: [UZUPEŁNIJ: co można zrobić przez panel]

## Aktualizacja aplikacji

→ Patrz `docs/ops/DEPLOYMENT.md` — sekcja "Deploy standardowy"

## Zarządzanie certyfikatem SSL

```bash
# Sprawdzenie ważności
[UZUPEŁNIJ: np. certbot certificates]

# Odnowienie (certbot)
[UZUPEŁNIJ: np. certbot renew]
# lub Let's Encrypt przez Nginx Proxy Manager — interfejs web
```

## Eskalacja problemów

W przypadku problemu którego nie można rozwiązać za pomocą tej dokumentacji:
1. Sprawdź `docs/ops/TROUBLESHOOTING.md`
2. Sprawdź logi (patrz wyżej)
3. Skontaktuj się z: [UZUPEŁNIJ: osoba/kanał kontaktu]
