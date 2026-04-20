# VALIDATION_CHECKLIST

## Repo / struktura
- [ ] istnieją katalogi docs/project, docs/ops, docs/quality, ai, tasks, .claude, scripts
- [ ] istnieje TASK_TEMPLATE
- [ ] istnieje QUEUE_INDEX
- [ ] istnieją taski startowe

## Dokumentacja
- [ ] istnieje PROJECT_EXECUTION_MODEL
- [ ] istnieje AGENT_PROFILES
- [ ] istnieje TASK_PROFILES
- [ ] istnieje STATUS_MODEL
- [ ] intake został zachowany jako źródło pierwotne

## Agenci
- [ ] istnieje 6 agentów procesowych
- [ ] opisy agentów są spójne
- [ ] agentów nie jest więcej niż potrzeba na tym etapie

## Skrypty
- [ ] claim-next-task działa
- [ ] update-queue-index działa
- [ ] run-task przygotowuje prompt lub wywołuje CLI
- [ ] worker może działać w pętli

## Operacyjność
- [ ] task ma type i execution_profile
- [ ] statusy są spójne z STATUS_MODEL
- [ ] pipeline można przejść dla co najmniej jednego taska testowego
