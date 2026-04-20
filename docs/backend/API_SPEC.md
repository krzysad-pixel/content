# Specyfikacja API

> Kontrakt między frontendem a backendem. Źródło prawdy dla implementacji.
> Aktualizuj przy każdej zmianie endpointów — PRZED implementacją (design first).

## Base URL

```
Produkcja: https://[UZUPEŁNIJ]/api
Dev:       http://localhost:[PORT]/api
```

## Autoryzacja

[UZUPEŁNIJ: np.
- Endpointy publiczne: bez nagłówka autoryzacji
- Endpointy chronione: `Authorization: Bearer <token>`
- Endpointy admin: `Authorization: Bearer <token>` + flaga `isAdmin: true` w profilu
]

---

## Endpointy

### Health

#### `GET /health`
Sprawdzenie stanu serwera.

**Autoryzacja:** ❌ (publiczny)

**Response `200`:**
```json
{ "status": "ok" }
```

---

### [UZUPEŁNIJ: np. Auth]

#### `POST /auth/login`
[UZUPEŁNIJ: opis]

**Autoryzacja:** ❌ (publiczny)

**Request body:**
```json
{
  "[UZUPEŁNIJ: np. login]": "string",
  "[UZUPEŁNIJ: np. password]": "string"
}
```

**Response `200`:**
```json
{
  "[UZUPEŁNIJ]": "..."
}
```

**Response `401`:**
```json
{ "message": "Nieprawidłowe dane logowania" }
```

---

### [UZUPEŁNIJ: kolejny endpoint lub grupa]

---

## Kody błędów

| Kod | Znaczenie | Kiedy |
|-----|-----------|-------|
| 200 | OK | Sukces |
| 201 | Created | Zasób utworzony |
| 400 | Bad Request | Nieprawidłowe dane wejściowe |
| 401 | Unauthorized | Brak lub nieprawidłowy token |
| 403 | Forbidden | Brak uprawnień |
| 404 | Not Found | Zasób nie istnieje |
| 500 | Internal Server Error | Błąd serwera |

## Changelog specyfikacji API

| Data | Zmiana | Task |
|------|--------|------|
| [UZUPEŁNIJ] | Inicjalna specyfikacja | TASK-001 |
