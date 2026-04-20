# Architektura Systemu

## Przegląd

[UZUPEŁNIJ: 3-5 zdań opisujących architekturę wysokopoziomowo]

## Diagram (tekstowy)

```
[UZUPEŁNIJ: np.

Użytkownik (przeglądarka)
    ↓ HTTPS
Nginx (reverse proxy)
    ↓ HTTP
Backend API (port 3001)
    ├── /api/* → NestJS (Docker)
    └── /       → Frontend (static files)
                    ↓
              PostgreSQL (Docker)
]
```

## Komponenty

| Komponent | Technologia | Rola | Lokalizacja w repo |
|-----------|------------|------|-------------------|
| Frontend | [UZUPEŁNIJ] | [UZUPEŁNIJ] | [UZUPEŁNIJ] |
| Backend API | [UZUPEŁNIJ] | [UZUPEŁNIJ] | [UZUPEŁNIJ] |
| Baza danych | [UZUPEŁNIJ] | [UZUPEŁNIJ] | — |
| Reverse proxy | [UZUPEŁNIJ] | [UZUPEŁNIJ] | [UZUPEŁNIJ] |

## Przepływ danych

### Scenariusz: [UZUPEŁNIJ, np. Logowanie użytkownika]
```
1. Frontend → POST /api/auth/login
2. Backend waliduje credentials w [UZUPEŁNIJ: np. zewnętrznym API]
3. Backend tworzy sesję / token
4. Frontend przechowuje token w [UZUPEŁNIJ: np. localStorage / cookie]
5. Kolejne requesty: Authorization header / cookie
```

## Decyzje architektoniczne

→ Patrz `planning/DECISIONS.md`

## Schematy (diagramy Mermaid)

→ Patrz `diagrams/`
