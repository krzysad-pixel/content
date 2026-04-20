# VM_SETUP

## Cel
Przygotowanie VM do pracy z Claude CLI jako warstwy wykonawczej.

## Minimalne wymagania
- Linux / Ubuntu
- dostęp do repo Git
- zainstalowany Claude CLI
- uprawnienia do uruchamiania skryptów bash
- możliwość uruchamiania procesu ciągłego (tmux / systemd)

## Kroki
1. Sklonować repo projektu.
2. Umieścić pliki `.claude/`, `scripts/`, `docs/`, `ai/`, `tasks/`.
3. Sprawdzić prawa wykonywania do `scripts/*.sh`.
4. Zweryfikować, że taski są w `tasks/queue/`.
5. Uruchomić najpierw testowo `scripts/claim-next-task.sh`.
6. Uruchomić testowo `scripts/run-task.sh`.
7. Dopiero potem uruchomić worker ciągły.

## Uwaga
Dokładne wywołanie Claude CLI zależy od zainstalowanej wersji. Skrypty w tym pakiecie są przygotowane tak, aby można było łatwo podmienić jedną linię wywołania CLI bez zmiany całej architektury.
