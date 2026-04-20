# Backend — Dokumentacja

## Stack

- **Framework:** [UZUPEŁNIJ: np. NestJS 10 / Flask / Express]
- **Język:** [UZUPEŁNIJ: np. TypeScript / Python]
- **ORM / DB client:** [UZUPEŁNIJ: np. Prisma v5]
- **Baza danych:** [UZUPEŁNIJ: np. PostgreSQL 15]
- **Uruchamianie:** [UZUPEŁNIJ: np. Docker Compose]

## Struktura katalogów

```
[UZUPEŁNIJ: np.
backend/
├── src/
│   ├── modules/
│   │   ├── auth/
│   │   ├── admin/
│   │   └── [module]/
│   ├── common/
│   └── main.ts
├── prisma/
│   └── schema.prisma
├── Dockerfile
└── docker-compose.prod.yml
]
```

## Uruchamianie lokalne

```bash
# Instalacja zależności
[UZUPEŁNIJ: np. cd backend && npm install]

# Uruchomienie (dev)
[UZUPEŁNIJ: np. npm run start:dev]

# Uruchomienie (produkcja)
[UZUPEŁNIJ: np. docker compose -f docker-compose.prod.yml up -d --build]

# Migracje bazy
[UZUPEŁNIJ: np. npx prisma migrate deploy]
```

## Zmienne środowiskowe

| Zmienna | Opis | Przykładowa wartość |
|---------|------|-------------------|
| `DATABASE_URL` | Connection string do bazy | `postgresql://user:pass@localhost:5432/db` |
| [UZUPEŁNIJ] | [UZUPEŁNIJ] | [UZUPEŁNIJ] |

→ Wzorzec pliku env: `backend/.env.example`

## Moduły

| Moduł | Ścieżka | Odpowiedzialność |
|-------|---------|-----------------|
| [UZUPEŁNIJ: np. AuthModule] | [UZUPEŁNIJ] | [UZUPEŁNIJ] |
| [UZUPEŁNIJ] | [UZUPEŁNIJ] | [UZUPEŁNIJ] |

→ Szczegółowa dokumentacja każdego modułu: używaj szablonu `tasks/templates/module-doc-template.md`

## Pełna specyfikacja API

→ `docs/backend/API_SPEC.md`
