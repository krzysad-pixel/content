# Frontend — Dokumentacja

## Stack

- **Framework:** [UZUPEŁNIJ: np. React 18 / Vue 3]
- **Build tool:** [UZUPEŁNIJ: np. Vite]
- **Język:** [UZUPEŁNIJ: np. TypeScript]
- **Styling:** [UZUPEŁNIJ: np. Tailwind CSS / CSS Modules]

## Struktura katalogów

```
[UZUPEŁNIJ: np.
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/      ← API client
│   ├── hooks/
│   ├── types/
│   └── main.tsx
├── public/
├── vite.config.ts
└── package.json
]
```

## Uruchamianie

```bash
# Instalacja
cd [UZUPEŁNIJ: katalog frontendu] && npm install

# Dev server
npm run dev          # dostępny pod: [UZUPEŁNIJ: URL + port]

# Build produkcyjny
npm run build        # output: [UZUPEŁNIJ: np. dist/]

# Preview builda
npm run preview
```

**WAŻNE:** Port deweloperski: `[UZUPEŁNIJ]` — nie zmieniaj bez aktualizacji konfiguracji nginx i dokumentacji.

## Routing

| Ścieżka | Komponent | Auth wymagany |
|---------|-----------|--------------|
| `/` | [UZUPEŁNIJ] | ❌/✅ |
| `/login` | [UZUPEŁNIJ] | ❌ |
| `/admin` | [UZUPEŁNIJ] | ✅ Admin |
| [UZUPEŁNIJ] | [UZUPEŁNIJ] | |

## Konwencje

- [UZUPEŁNIJ: np. API calls tylko przez `src/services/api.ts`]
- [UZUPEŁNIJ: np. Komponenty stronnicowe w `src/pages/`, współdzielone w `src/components/`]
- [UZUPEŁNIJ: np. Typy w `src/types/` — importuj stamtąd, nie definiuj lokalnie]

## Zmienne środowiskowe

| Zmienna | Opis | Przykład |
|---------|------|---------|
| `VITE_API_URL` | Base URL backendu | `http://localhost:3001/api` |
| [UZUPEŁNIJ] | [UZUPEŁNIJ] | [UZUPEŁNIJ] |

## Deploy

→ `docs/ops/DEPLOYMENT.md`
