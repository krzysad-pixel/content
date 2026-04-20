# Backlog — Odłożona Praca

> Lista rzeczy, które są warte zrobienia, ale celowo odłożone na później.
> Nie są to bugi ani blokerzy — to świadome decyzje "nie teraz".
> Regularnie przeglądaj i awansuj do tasks/queue/ gdy nadejdzie czas.

---

## Do Następnego Etapu

### Tworzenie nowych CU przez UI
- **Skąd pochodzi:** MASTER_PLAN.md — backlog po MVP
- **Dlaczego odłożone:** Aktualnie CU tworzone przez Claude/GPT + wklejanie do repo
- **Kiedy wrócić:** Gdy baza CU osiągnie 30+, a ręczny import stanie się wąskim gardłem
- **Estymacja:** M

### Edycja frontmatter CU w UI
- **Skąd pochodzi:** TASK-008 (edycja body już działa)
- **Dlaczego odłożone:** Poza zakresem TASK-008, edge case — rzadka potrzeba
- **Kiedy wrócić:** Na żądanie użytkownika
- **Estymacja:** S

### Dodawanie nowych produktów przez UI
- **Skąd pochodzi:** MASTER_PLAN.md — backlog po MVP
- **Dlaczego odłożone:** Aktualnie 1 produkt (zgoda), ręczne tworzenie katalogu wystarczy
- **Kiedy wrócić:** Przy dodaniu drugiego produktu
- **Estymacja:** S

### Kolejność i harmonogram publikacji CU
- **Skąd pochodzi:** gaps.md produktu zgoda
- **Dlaczego odłożone:** Praca merytoryczna po stronie użytkownika + GPT
- **Kiedy wrócić:** Po ukończeniu bazy min. 20 CU
- **Estymacja:** XS (implementacja w repo)

### Eksport CU do formatu publikacyjnego
- **Skąd pochodzi:** MASTER_PLAN.md — backlog po MVP
- **Dlaczego odłożone:** Wymaga decyzji o formacie docelowym
- **Kiedy wrócić:** Po ustaleniu scenariuszy publikacji
- **Estymacja:** M

---

## Techniczny Dług

### Brak testów automatycznych
- **Skąd pochodzi:** Projekt bootstrapowany szybko
- **Dlaczego odłożone:** Mały projekt, ręczny smoke test wystarczy
- **Kiedy wrócić:** Przy wzroście złożoności API lub refaktorze frontendu
- **Estymacja:** M

### Sync pull/push bez auth fallbacku
- **Skąd pochodzi:** TASK-005
- **Dlaczego odłożone:** Działa na VM z skonfigurowanymi credentials
- **Kiedy wrócić:** Przy problemach z tokenem lub rotacją credentials
- **Estymacja:** S

---

## Pomysły / Nice-to-Have

### Filtr po platformie (instagram / linkedin / tiktok)
- Przydatny przy planowaniu dystrybucji CU

### Podgląd markdown renderowany w detail panelu
- Aktualnie body pokazywane jako plain text

### Statystyki per seria (Fundament / AI / Build in public)
- Licznik CU per seria na dashboardzie produktu

---

## Wstrzymane (zależności zewnętrzne)

### Integracja z VDashboard
- **Czeka na:** Decyzję o architekturze VDashboard
- **Estymacja:** L
