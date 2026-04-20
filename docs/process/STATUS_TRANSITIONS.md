# STATUS_TRANSITIONS

## Task lifecycle
- queue -> active
- active -> testing
- testing -> review
- review -> docs
- docs -> risk_check
- risk_check -> done

## Odchylenia
- active -> needs_human
- testing -> blocked
- review -> blocked
- docs -> blocked
- risk_check -> needs_human

## Reguły
- task nie może wejść do `done`, jeśli nie ma końcowych statusów,
- task nie może ruszyć bez `planner-checker = ready`,
- task `docs_only` pomija implementację i testy kodu,
- task `analysis_only` nie przechodzi przez implementację.
