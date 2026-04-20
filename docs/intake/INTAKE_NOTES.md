# INTAKE_NOTES — VDashboard

> Wygenerowano przez ChatGPT Intake Assistant
> Ostatnia aktualizacja: 2026-03-22
> Status: Sesja 4/4 ukończona

---

## [S1] Problem i Cel

### Problem
VDashboard ma rozwiązać problem braku szybkiego, zbiorczego widoku postępu prac w wielu projektach prowadzonych równolegle na bazie dokumentacji projektowej przechowywanej w repozytorium.

Obecnie osoby realizujące i zarządzające projektami muszą ręcznie czytać dokumentację, przełączać się między projektami i samodzielnie zbierać statusy, milestone’y, backlog oraz ryzyka. Jest to szczególnie problematyczne w małym zespole, który obsługuje kilka projektów równolegle, a docelowo będzie ich znacznie więcej.

Problem odczuwają:
- osoby realizujące projekty,
- osoby zarządzające projektami i nadzorujące postęp prac.

Na start system ma być używany bez rozbudowanego modelu uprawnień, nawet przez 1 użytkownika, ale z obsługą wielu projektów jednocześnie.

### Dlaczego teraz
Potrzeba wynika z rosnącej liczby projektów i rosnącego kosztu przełączania się między nimi. Już teraz przy kilku projektach równoległych zbieranie statusów i odpowiadanie na pytania o postęp jest trudne i czasochłonne. Wraz ze wzrostem liczby projektów problem będzie narastał.

Jeśli narzędzie nie powstanie, konsekwencjami będą:
- chaos informacyjny,
- wolniejsze decyzje,
- pomijanie ryzyk,
- spadek efektywności zespołu.

Koszt obecny:
- czasochłonne ręczne szukanie danych o statusach projektów,
- częste przełączanie kontekstu między projektami,
- brak szybkiego widoku managerskiego dla wielu inicjatyw.
Dokładny koszt czasowy / finansowy: [TBD]

Deadline: [TBD]

### Definicja sukcesu
3 miesiące po wdrożeniu użytkownik po wejściu do systemu widzi zbiorczy obraz projektów i ma poczucie kontroli nad wieloma złożonymi zadaniami bez konieczności ręcznego przekopywania dokumentacji.

Sukces oznacza, że:
- można obsługiwać na starcie do 10 projektów,
- użytkownik może szybko wejść w widok konkretnego projektu,
- status, milestone’y, taski, backlog i ryzyka są widoczne w jednym miejscu,
- dane są odczytywane bezpośrednio z repo dokumentacji / Git,
- zespół szybciej odpowiada na pytania o postęp i zakres wykonanych prac.

Mierniki sukcesu: [TBD]

### Zakres MVP (Must Have)
- lista wielu projektów,
- status projektu,
- milestone’y,
- taski active / queue / done,
- backlog,
- ryzyka,
- widok szczegółowy projektu,
- odczyt danych z repo dokumentacji / z Git,
- obsługa wielu repozytoriów GitHub.

### Poza zakresem v1
- rozbudowany system uprawnień,
- zaawansowana analityka i metryki historyczne,
- automatyczne powiadomienia,
- zaawansowane raporty przekrojowe,
- funkcje administracyjne dla wielu użytkowników.

### Ograniczenia
- Deadline: [TBD]
- Budżet: [TBD]
- Infrastruktura: repozytoria GitHub jako źródło danych
- Serwer: VM `.148` (Ubuntu, Proxmox)
- Zespół: mały zespół obsługujący wiele projektów równolegle
- Uprawnienia: brak w v1 (single admin)

### Właściciel projektu
[TBD]

---

## [S2] Użytkownicy i Zakres

### Persony użytkowników
**Admin**
- Opis: główny użytkownik systemu, odpowiedzialny za nadzór nad projektami i kontrolę postępu prac.
- Główny cel: wejść do systemu i od razu zobaczyć dane potrzebne do kontroli stanu projektów bez ręcznego przeszukiwania dokumentacji.
- Ból: grzebanie w dokumentach i repozytorium, trudność w szybkim ustaleniu co już jest, czego nie ma, jaki jest poziom wykonania, czy są ryzyka, testy i brakujące elementy.

### User Stories (MoSCoW)
**Must Have:**
- Jako Admin, chcę widzieć listę projektów, żeby szybko przełączać się między nimi.
- Jako Admin, chcę widzieć status projektu, żeby od razu ocenić postęp prac.
- Jako Admin, chcę widzieć milestone’y, żeby rozumieć gdzie projekt jest względem planu.
- Jako Admin, chcę widzieć taski active / queue / done, żeby wiedzieć co jest w toku, co czeka i co zostało zakończone.
- Jako Admin, chcę widzieć backlog, żeby wiedzieć jaki zakres prac jeszcze pozostał.
- Jako Admin, chcę widzieć ryzyka, żeby niczego nie przeoczyć.
- Jako Admin, chcę wejść w widok szczegółowy projektu, żeby ocenić jego stan bez czytania całej dokumentacji.
- Jako Admin, chcę odczytywać dane z repo dokumentacji / Git, żeby dashboard bazował na rzeczywistym stanie projektu.
- Jako Admin, chcę obsługiwać wiele repozytoriów, żeby mieć jeden dashboard dla wielu projektów.

**Should Have:**
- widok KPI projektu,
- informacja o brakujących elementach (np. testy, dokumentacja).

**Could Have:**
- porównanie projektów,
- powiadomienia,
- automatyczne wykrywanie braków,
- scoring dojrzałości projektu.

**Won't Have (v1):**
- role i uprawnienia,
- multi-user,
- zaawansowana analityka.

### Wartość biznesowa
Zmniejszenie czasu potrzebnego na zarządzanie projektami, zwiększenie kontroli nad postępem i ryzykami, ograniczenie chaosu informacyjnego oraz poprawa efektywności pracy małego zespołu obsługującego wiele projektów równolegle.

### KPI
- czas sprawdzenia statusu projektu: [TBD]
- liczba projektów obsługiwanych jednocześnie: min. 10
- [TBD] liczba wykrytych braków / ryzyk
- [TBD] % projektów z kompletną strukturą

---

## [S3] Stack i Infrastruktura

### Stack
- Frontend: React (Lovable / CLI)
- Backend: Node.js API
- Baza danych: PostgreSQL (propozycja)
- Inne: parser markdown, Git integration

### Serwer
- Host: VM `.148`
- System: Ubuntu
- Deploy: Docker
- Reverse proxy: [TBD]
- Domena: [TBD]
- SSL: [TBD]

### GitHub
- Repo: GitHub
- Prywatne: [TBD]

### Integracje
- GitHub (multi-repo)
- parser markdown

### UI/Frontend
- Mockup: brak (do wygenerowania)

### Komponenty i porty
| Komponent | Port | URL |
|-----------|------|-----|
| Frontend | [TBD] | [TBD] |
| Backend API | [TBD] | [TBD] |
| Baza danych | [TBD] | localhost |

---

## [S4] Plan Realizacji

### Etap A — MVP
| Task | Opis | Rozmiar | Zależności |
|------|------|---------|-----------|
| TASK-001 | Setup repo + backend + frontend skeleton | M | — |
| TASK-002 | Integracja z GitHub (multi-repo) | L | TASK-001 |
| TASK-003 | Parser markdown dokumentacji | XL | TASK-002 |
| TASK-004 | Model danych (project, tasks, milestones, backlog, risks) | M | TASK-003 |
| TASK-005 | Baza danych + zapis snapshotów | M | TASK-004 |
| TASK-006 | API do pobierania danych projektu | M | TASK-005 |
| TASK-007 | Lista projektów UI | S | TASK-006 |
| TASK-008 | Widok projektu (status, milestone’y, taski, backlog, ryzyka) | L | TASK-007 |
| TASK-009 | Podstawowy dashboard (overview) | M | TASK-008 |

### Etap B — Jakość danych
| Task | Opis | Rozmiar | Zależności |
|------|------|---------|-----------|
| TASK-010 | Standaryzacja dokumentacji (metadata / frontmatter) | L | TASK-003 |
| TASK-011 | Walidacja danych | M | TASK-010 |
| TASK-012 | KPI projektu | M | TASK-011 |
| TASK-013 | Wykrywanie braków | L | TASK-011 |

### Etap C — Rozszerzenia
| Task | Opis | Rozmiar | Zależności |
|------|------|---------|-----------|
| TASK-014 | Porównanie projektów | M | TASK-009 |
| TASK-015 | Powiadomienia | M | TASK-009 |
| TASK-016 | Scoring dojrzałości | M | TASK-013 |
| TASK-017 | Historia i trendy | L | TASK-005 |

### Kamienie milowe
| Milestone | Data | Kryteria |
|-----------|------|---------|
| MVP gotowy | [TBD] | działa dashboard dla wielu repo |
| Beta | [TBD] | stabilne dane + walidacja |
| Produkcja | [TBD] | rozszerzenia i optymalizacja |

### Pierwszy task do realizacji
TASK-001 — Setup repo + backend + frontend skeleton

---

## Otwarte pytania / TBD
- dokładne KPI,
- sposób liczenia progressu,
- standard metadata w dokumentacji,
- częstotliwość synchronizacji z Git,
- reverse proxy i domena.

## Decyzje podjęte podczas intake
- VDashboard jako internal tool,
- dane z GitHub jako source of truth,
- multi-repo od startu,
- brak uprawnień w v1,
- stack: React + Node + Docker,
- architektura: parser + DB + dashboard.