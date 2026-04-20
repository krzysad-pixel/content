# Log Decyzji Architektonicznych

> Zapisuj każdą istotną decyzję projektową: co, dlaczego, jakie alternatywy odrzucono.
> Nie usuwaj starych wpisów — to historia decyzji, nie lista aktualnych zasad.

---

## 2026-04-20 — Vanilla JS zamiast React/Next.js

**Decyzja:** Frontend jako plain HTML + CSS + JS bez frameworka
**Uzasadnienie:** VM ma ograniczone zasoby; prostota ważniejsza niż DX; aplikacja wewnętrzna
**Odrzucone alternatywy:** React (zbyt ciężki), Next.js (overengineering dla tego zakresu)
**Wpływ:** `public/app.js`, `public/index.html`, `public/style.css`
**Autor:** krzysad

## 2026-04-20 — Pliki markdown zamiast bazy danych

**Decyzja:** Dane CU przechowywane jako pliki `.md` z frontmatter YAML
**Uzasadnienie:** Git history jako audit log; brak dodatkowych usług do utrzymania; proste do edycji ręcznej
**Odrzucone alternatywy:** SQLite (dodatkowa zależność), PostgreSQL (over-engineering)
**Wpływ:** `content/products/`, `src/server.js` (gray-matter), cały model danych
**Autor:** krzysad

## 2026-04-20 — Port 3333

**Decyzja:** Aplikacja nasłuchuje na porcie 3333
**Uzasadnienie:** Porty 3000 i 4000 zajęte przez inne usługi na VM
**Odrzucone alternatywy:** 3000, 4000, 8080
**Wpływ:** `docker-compose.yml`, `src/server.js`, CLAUDE.md
**Autor:** krzysad

## 2026-04-20 — Sync na aktualny branch (nie hardcoded main)

**Decyzja:** Endpoint `/api/sync` wykrywa aktualny branch repo i pull/push na niego
**Uzasadnienie:** Hardcoded `main` blokował sync gdy VM był na innym branchu lub pliki były na feature branch
**Odrzucone alternatywy:** Zawsze pull/push na main (powodowało brak widoczności nowych plików)
**Wpływ:** `src/server.js` — funkcja sync
**Autor:** krzysad

## 2026-04-20 — Segment startowy: kluby sportowe

**Decyzja:** Zgoda.Online komunikuje się wyłącznie do klubów sportowych na starcie
**Uzasadnienie:** Najbardziej konkretny segment z jasnym bólem (zgody na wyjazdy); łatwiej trafić z komunikatem
**Odrzucone alternatywy:** Szkoły, organizatorzy wyjazdów, firmy szkoleniowe
**Wpływ:** foundation.md, gaps.md, wszystkie CU produktu zgoda
**Autor:** krzysad

## 2026-04-20 — Certyfikaty i szkolenia wyłączone z komunikacji

**Decyzja:** Moduł certyfikatów/szkoleń nie jest komunikowany w obecnej wersji produktu
**Uzasadnienie:** Rozmywa fokus; segment startowy (kluby sportowe) potrzebuje zgód + wyjazdów
**Odrzucone alternatywy:** Dwie ścieżki komunikacji równolegle (zgody + certyfikaty)
**Wpływ:** foundation.md, gaps.md, CU-008 zastąpiony przez tworzenie-wyjazdu
**Autor:** krzysad
