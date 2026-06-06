# ECOSYSTEM FOUNDATION BASELINE
# Audit Date: 2026-06-06
# Evidence only — no assumptions

## Live Production Check Results

```
200  https://app.rald.cloud          ✅ LIVE
200  https://profiles.rald.cloud     ✅ LIVE
200  https://status.rald.cloud       ✅ LIVE
200  https://rald.cloud              ✅ LIVE
200  https://auth.rald.cloud/health  ✅ LIVE v2.3.0
000  https://learn.rald.cloud        ❌ CODE READY — CLOUDFLARE NOT CONNECTED
000  https://trust.rald.cloud        ❌ CODE READY — CLOUDFLARE NOT CONNECTED
```

## Baseline Score: 86/100

| Property | Score | Status |
|---|---|---|
| profiles.rald.cloud | 100 | ✅ Live |
| app.rald.cloud | 97 | ✅ Live (CI fixed 2026-06-06) |
| learn.rald.cloud | 60 | ⚠️ Code ready, DNS not connected |
| trust.rald.cloud | 60 | ⚠️ Code ready, DNS not connected |
| status.rald.cloud | 100 | ✅ Live |
| auth.rald.cloud | 100 | ✅ Live v2.3.0 |

## To Reach 100/100

Connect rald-docs and rald-trust in Cloudflare Pages Dashboard:
1. Pages → Create application → Connect to Git → Ostinato-Loop/rald-docs
2. Build: `npm install && npm run build` · Output: `dist`
3. Custom domain: learn.rald.cloud
4. Repeat for rald-trust → trust.rald.cloud

No code changes needed — all repos are deployment-ready.

**Auditor:** RALD CTO Program · LILCKY STUDIO LIMITED
