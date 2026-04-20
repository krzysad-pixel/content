# QA Checklist — Przed Zamknięciem Projektu

> Wypełnij przed oficjalnym zamknięciem projektu / oddaniem do użytku.

## Funkcjonalność

- [ ] Wszystkie kryteria akceptacji z `docs/business/PROJECT_CHARTER.md` są spełnione
- [ ] Smoke test przeszedł na środowisku produkcyjnym
- [ ] Wszystkie taski z etapów A/B/C są w `tasks/done/`
- [ ] Żaden task nie jest w statusie `in_progress` lub `review`
- [ ] Backlog nie zawiera elementów blokujących produkcję

## Bezpieczeństwo

- [ ] `.env` nie jest w repo (sprawdź `git log --all -- .env`)
- [ ] Wszystkie endpointy wymagające auth są chronione
- [ ] HTTPS działa, certyfikat jest ważny
- [ ] Hasła adminów są silne i znane tylko właściwym osobom
- [ ] `docs/ops/SECURITY.md` jest wypełniony

## Dokumentacja

- [ ] `docs/business/PROJECT_CHARTER.md` — wypełniony
- [ ] `docs/business/PROBLEM_STATEMENT.md` — wypełniony
- [ ] `ai/AI_CONTEXT.md` — aktualny (odzwierciedla wdrożony stan)
- [ ] `ai/REPO_MAP.md` — aktualny (odzwierciedla realną strukturę)
- [ ] `docs/backend/API_SPEC.md` — kompletny
- [ ] `docs/ops/DEPLOYMENT.md` — zweryfikowany (czy ktoś mógłby wdrożyć od zera z tym dokumentem?)
- [ ] `docs/ops/TROUBLESHOOTING.md` — wypełniony
- [ ] `docs/ops/ADMIN_GUIDE.md` — wypełniony
- [ ] `CHANGELOG.md` — aktualny
- [ ] `planning/DECISIONS.md` — zawiera kluczowe decyzje

## Infrastruktura i ops

- [ ] Backup bazy działa (zweryfikowany)
- [ ] Logi są dostępne i czytelne
- [ ] Monitoring / alert (jeśli planowany) — aktywny
- [ ] Procedura rollback jest znana i przetestowana

## Przekazanie

- [ ] `post-project/HANDOVER.md` — wypełniony
- [ ] Właściciel produktu zaakceptował wdrożenie
- [ ] Kontakty do wsparcia są aktualne
- [ ] `post-project/RETROSPECTIVE.md` — wypełniony

## Finalizacja

- [ ] Ostatni commit + push do `origin/main`
- [ ] Tag wersji w Git: `git tag v1.0.0 && git push origin v1.0.0`
- [ ] `planning/MILESTONES.md` — wszystkie milestone oznaczone ✅
