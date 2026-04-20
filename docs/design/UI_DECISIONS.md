# UI Decisions — [NAZWA PROJEKTU]

> Decyzje podjęte podczas przeglądu mockupu / prototypu.
> Co zatwierdzamy, co poprawiamy, co robimy sami.
> Uzupełnij po przeglądzie mockupu — przed TASK-UI-init.

## Źródło mockupu

- Narzędzie: [np. Google Stitch / Figma / ręczny szkic]
- Plik: [np. stitch-preview.html / link do Figma]
- Data przeglądu: [UZUPEŁNIJ]

---

## Ekrany — status przeglądu

| Ekran | Status | Uwagi |
|-------|--------|-------|
| [np. Login] | ✅ Zatwierdzony | [np. Drobna zmiana — usunąć przyciski Google/Apple z MVP] |
| [np. Dashboard] | ✅ Zatwierdzony | — |
| [np. Lista miejsc] | ✅ Zatwierdzony | — |
| [np. Trasa/Itinerary] | ✅ Zatwierdzony | — |
| [np. Desktop layout] | ⚠️ Do poprawy | [np. Bottom nav na desktopie — zastąpić sidebarem] |
| [np. Import tab] | ❌ Brak w mockupie | Implementujemy sami wg design systemu |
| [np. Modal nowej wycieczki] | ❌ Brak w mockupie | Implementujemy sami |

---

## Zatwierdzone decyzje UI

### [np. Bottom navigation na mobile]
**Decyzja:** 4 zakładki w bottom nav: Import / List / Route / Map
**Powód:** Stitch tak wygenerował, jest czytelne i zgodne z mobile UX patterns
**Implementacja:** [np. shadcn Tabs z custom styling]

### [np. FAB button "+"]
**Decyzja:** Żółty FAB w prawym dolnym rogu na dashboardzie
**Powód:** Standardowy mobile pattern dla primary action
**Implementacja:** Floating button nad bottom nav

---

## Do poprawy / do implementacji samodzielnie

### [np. Desktop sidebar]
**Problem:** Mockup desktop ma bottom nav zamiast sidebara
**Decyzja:** Implementujemy sidebar na desktop (md: breakpoint), wzorując się na stylu `RouteDetailScreen` z mockupu
**Task:** [np. TASK-010]

### [np. Ekran Register]
**Problem:** Mockup pokazuje tylko tab "Zaloguj się", nie ma widoku "Zarejestruj"
**Decyzja:** Implementujemy sami — analogiczny layout do logowania, pola: name + email + hasło
**Task:** [np. TASK-006]

---

## Co celowo pomijamy z mockupu

| Element | Powód pominięcia |
|---------|-----------------|
| [np. Przyciski Google / Apple SSO] | Poza zakresem v1, wymaga OAuth setup |
| [np. Zdjęcia w kartach wycieczek] | Zbędna złożoność w MVP |
| [np. "V2.0.4 // GLOBAL NODE" footer] | Był w mockupie ale zbędny w produkcji |
