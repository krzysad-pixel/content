# Knowledge Transfer — Przekazanie Wiedzy Technicznej

> Dla dewelopera przejmującego projekt. Zakłada podstawową znajomość użytego stacku.

## Jak skonfigurować środowisko deweloperskie

```bash
# 1. Klonowanie
git clone [UZUPEŁNIJ: URL] ~/[PROJEKT]
cd ~/[PROJEKT]

# 2. Konfiguracja env
cp backend/.env.example backend/.env
# Edytuj backend/.env — uzupełnij wartości dla dev

# 3. Start backendu
[UZUPEŁNIJ: np. cd backend && docker compose up -d]

# 4. Start frontendu
[UZUPEŁNIJ: np. cd frontend && npm install && npm run dev]

# 5. Weryfikacja
[UZUPEŁNIJ: np. curl http://localhost:3001/api/health]
# Frontend: http://localhost:[PORT]
```

## Architektura — co warto wiedzieć

[UZUPEŁNIJ: 5-10 zdań opisujących kluczowe decyzje architektoniczne, które nie są oczywiste z kodu]

np.:
- Dlaczego używamy cienkiego gateway zamiast bezpośrednich wywołań
- Gdzie jest logika autoryzacji i dlaczego tam
- Nieoczywiste konwencje nazewnictwa
- Znane "pułapki" w kodzie

## Moduły — co robi co

→ `ai/REPO_MAP.md` — mapa nawigacyjna

[UZUPEŁNIJ: kluczowe moduły i ich odpowiedzialność — to co nie jest oczywiste z nazwy]

## Przepływ typowej zmiany (developer workflow)

```
1. git pull origin main
2. Utwórz task w tasks/queue/ (z szablonu tasks/templates/task-template.md)
3. Przesuń task do tasks/active/
4. Zaimplementuj zmianę
5. Przetestuj lokalnie (smoke test)
6. Zaktualizuj dokumentację jeśli zmiana architektury
7. git commit -m "task: TASK-XXX — opis" && git push origin main
```

## Jak używać AI (Claude CLI) do pracy z tym projektem

1. Otwórz terminal w katalogu repo lub na serwerze
2. Uruchom: `claude` (Claude CLI)
3. Claude przeczyta `CLAUDE.md` automatycznie
4. Opisz task lub wskaż plik z `tasks/active/`
5. Claude pracuje autonomicznie — zatwierdź plan jeśli pyta

**Wskazówki:**
- Zawsze rób `git pull` przed sesją CLI
- Jeden task per sesja — nie dawaj 3 zadań naraz
- Jeśli AI zbacza — zresetuj sesję i wróć do pliku taska

## Znane techniczne pułapki

- [UZUPEŁNIJ: np. Port X jest zajęty przez Y — nie zmieniaj go w konfiguracji]
- [UZUPEŁNIJ: np. Migracje bazy muszą być uruchamiane przez Z, nie przez Y]
- [UZUPEŁNIJ]

## Kontakty

| Rola | Imię | Kontakt |
|------|------|---------|
| Autor projektu | [UZUPEŁNIJ] | [UZUPEŁNIJ] |
| Właściciel infrastruktury | [UZUPEŁNIJ] | [UZUPEŁNIJ] |
| Właściciel produktu | [UZUPEŁNIJ] | [UZUPEŁNIJ] |
