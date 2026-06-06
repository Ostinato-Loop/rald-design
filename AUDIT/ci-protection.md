# CI PROTECTION POLICY
# RALD Ecosystem — Zero CI Failures
# Effective: 2026-06-06

## Policy

No commit merged to `main` if:
- `npm run typecheck` fails (strict + noUncheckedIndexedAccess)
- `npm run lint` fails at error level (Biome)
- `npm run build` fails (Vite)

## noUncheckedIndexedAccess Patterns

```typescript
// ✅ Correct
const perms = DEFAULT_PERMISSIONS[app.id] ?? [];
const first = items[0] ?? null;

// ❌ Wrong — TS2532 / TS18048
const perms = DEFAULT_PERMISSIONS[app.id];
perms.map(...); // 'perms' is possibly 'undefined'
```

## Failure History

| Date | Repo | Error | Fix |
|---|---|---|---|
| 2026-06-06 | rald-auth-ui | TS2532, TS18048 | Added `?? []` on DEFAULT_PERMISSIONS[app.id] |

## Branch Protection (Required)

All `main` branches: require Type Check + Build to pass before merge.

**Owner:** RALD CTO Program · LILCKY STUDIO LIMITED
