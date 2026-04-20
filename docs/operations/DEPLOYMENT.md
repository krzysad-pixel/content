# Deployment — Instrukcja Wdrożenia

## Środowiska

| Środowisko | URL | Serwer | Branch |
|-----------|-----|--------|--------|
| Produkcja | [UZUPEŁNIJ] | [UZUPEŁNIJ: np. 192.168.1.148] | `main` |
| Dev (lokalny) | [UZUPEŁNIJ: np. localhost:3001] | localhost | dowolny |

## Wymagania wstępne

- [ ] Docker + Docker Compose zainstalowane na serwerze
- [ ] Nginx skonfigurowany ([UZUPEŁNIJ: patrz sekcja Nginx)
- [ ] Klucz SSH do repo (jeśli prywatne)
- [ ] Plik `.env` wypełniony na serwerze

## Deploy standardowy (update istniejącego wdrożenia)

```bash
# 1. Połącz z serwerem
ssh -i ~/.ssh/id_ed25519 [USER]@[HOST]

# 2. Pobierz zmiany
cd ~/[PROJEKT]
git pull origin main

# 3. Rebuild i restart backendu
[UZUPEŁNIJ: np. cd backend && docker compose -f docker-compose.prod.yml up -d --build]

# 4. Build i deploy frontendu
[UZUPEŁNIJ: np.
cd frontend-src
npm install
npm run build
cp -r dist/. /var/www/[PROJEKT]/
]

# 5. Weryfikacja
[UZUPEŁNIJ: np. curl -s https://[DOMENA]/api/health]
```

## Deploy świeży (fresh install)

```bash
# 1. Klonowanie repo
git clone [UZUPEŁNIJ: URL repo] ~/[PROJEKT]

# 2. Konfiguracja env
cp ~/[PROJEKT]/backend/.env.example ~/[PROJEKT]/backend/.env
# Edytuj .env — uzupełnij sekrety

# 3. Uruchomienie backendu
[UZUPEŁNIJ: np. cd ~/[PROJEKT]/backend && docker compose -f docker-compose.prod.yml up -d --build]

# 4. Migracje bazy
[UZUPEŁNIJ: np. docker exec [CONTAINER] npx prisma migrate deploy]

# 5. Build frontendu
[UZUPEŁNIJ]

# 6. Konfiguracja Nginx
[UZUPEŁNIJ: patrz sekcja Nginx poniżej]
```

## Nginx

```nginx
# [UZUPEŁNIJ: ścieżka vhost, np. /etc/nginx/sites-available/projekt.example.com]

server {
    listen 80;
    server_name [UZUPEŁNIJ: domena];

    root [UZUPEŁNIJ: np. /var/www/projekt];
    index index.html;

    location /api/ {
        proxy_pass http://127.0.0.1:[PORT]/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

```bash
# Aktywacja i reload
ln -s /etc/nginx/sites-available/[PLIK] /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

## Rollback

```bash
# W przypadku problemów po deploy — przywróć poprzednią wersję
cd ~/[PROJEKT]
git log --oneline -5           # znajdź dobry commit
git checkout [COMMIT_HASH]     # lub git revert
[UZUPEŁNIJ: restart backendu]
```

## Weryfikacja po deploy

- [ ] `curl https://[DOMENA]/api/health` → `{"status":"ok"}`
- [ ] Strona główna ładuje się poprawnie
- [ ] Logowanie działa
- [ ] [UZUPEŁNIJ: kluczowa funkcjonalność 1] działa
- [ ] Logi backendu bez błędów: `[UZUPEŁNIJ: komenda logów]`
