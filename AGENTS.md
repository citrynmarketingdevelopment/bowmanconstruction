# Project instructions

Preserve the existing Bowman design, copy, photography and interactions unless a change is requested. The production domain is deliberately unset; use `SITE_URL` when the owner configures it. The inquiry handler is unconnected by default.

## Next.js

This Next.js version has breaking changes. Read the relevant guides in `node_modules/next/dist/docs/` before changing framework code. Heed deprecation notices. Keep page content server-rendered and browser-only behavior inside the client interaction boundary.

Run `npm run build` and `npm run typecheck` after framework changes. Against a running production build, use `npm run verify -- http://localhost:3000` to verify route content, SEO metadata, redirects and assets.
