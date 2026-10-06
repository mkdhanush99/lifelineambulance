# Deployment

## Stack

| | |
|---|---|
| Framework | Next.js 16.3.6 (App Router), React 19.2.8, TypeScript 5, Tailwind CSS v4 |
| Output | Static pages (39), served by `next start`. Not a static export: `next.config.ts` sets HTTP security headers, which needs the Node server |
| Node | 20.x or 22.x. Hostinger builds succeeded on both (22 on 2026-10-01 10:31 UTC, 20 on 10:49 UTC). No `engines` field is set; use 22 for new setups |
| Package manager | npm (`package-lock.json` is committed) |

## Commands

```bash
npm install            # install dependencies
npm run dev            # development server on :3000
npm run build          # production build: runs `next build --webpack`
npm start              # production server (`next start`), PORT env respected
npm run lint
```

**The build deliberately uses `--webpack`.** Turbopack (Next 16's default) crashed on Hostinger's build servers during CSS processing ("node process exited before we could connect to it"). Do not change `build` back to plain `next build` without testing on the host.

## Environment variables

All optional and public (`NEXT_PUBLIC_*`, inlined at **build time**: after changing one you must rebuild/redeploy). Template: `.env.example`.

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://lifelineambulances.in` (also the code fallback). Drives canonicals, sitemap, Open Graph, schema |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `YOUR_GA4_ID` (G-XXXXXXXXXX) or empty |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | `YOUR_ADS_ID` (AW-XXXXXXXXX) or empty |
| `NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL` | `YOUR_LABEL` (AW-XXXXXXXXX/xxxx) or empty |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | `YOUR_SEARCH_CONSOLE_CODE` or empty |

No secrets are used anywhere in the project: no API keys, database, or server-side credentials.

## Platform

Hostinger Node.js web app, account username `u100120716`, domain `lifelineambulances.in` (added as an addon website). Hostinger auto-detects: preset Next.js, build script `build`, output `.next`, npm.

### Option A: upload a zip (used so far)

```bash
git archive --format=zip -o lifelineambulance-deploy.zip HEAD
```
hPanel -> Websites -> lifelineambulances.in -> Node.js -> upload the zip. It must contain source only (no `node_modules`, no `.next`; `git archive` guarantees that). Set the 5 variables above, deploy, wait for the build to complete.

### Option B: GitHub auto-deploy

Repository `mkdhanush99/lifelineambulance` (private), branch `main`. In hPanel connect GitHub and import the repo; pushes then redeploy.

### Verify after every deploy

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://lifelineambulances.in/
curl -s https://lifelineambulances.in/sitemap.xml | head
curl -sI https://lifelineambulances.in/ | grep -i -E "strict-transport|content-security|permissions-policy"
```

## Domain and DNS

The domain is registered at Hostinger and attached to the Node.js website in hPanel; Hostinger manages the DNS records and issues the HTTPS certificate. If the domain ever moves elsewhere, point `A`/`CNAME` records at the values hPanel shows for the website, and keep `www` handled (this project does not define a `www` redirect: confirm in hPanel which hostname is canonical; the site canonicals use the bare `lifelineambulances.in`).

HSTS is sent with `includeSubDomains; preload`. Do not submit the domain to the HSTS preload list unless every subdomain will always serve HTTPS.

## Housekeeping

- A temporary site `darkgray-mosquito-287545.hostingersite.com` still exists on the same hosting account. Remove it or redirect it once the real domain is verified, to avoid duplicate content.
- `vidhyasriambulance.com` on the same account is a different, unrelated project.
