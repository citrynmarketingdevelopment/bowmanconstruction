# Bowman Construction — Next.js

The complete Bowman Construction website, migrated from the original five-page HTML site to Next.js App Router. The existing design, Barlow fonts, images, video, copy, 59-photo gallery, and inquiry behavior are retained.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production preview, run `npm run build` followed by `npm run start`. In another terminal, run `npm run verify` to check that running build. Run `npm run typecheck` for TypeScript validation.

## Pages

All five pages are prerendered by Next.js. Their content and SEO metadata are present in the initial HTML.

| Route | Content |
| --- | --- |
| `/` | Home, header video, expanding services, featured work, family overview and FAQ |
| `/services` | Grading, paving/concrete, asphalt maintenance, seal coating and striping |
| `/our-story` | Family story and the father’s 35 years of asphalt experience |
| `/work` | The original 59 photographs, category filters and photo viewer |
| `/contact` | Project inquiry validation and direct phone links |

The original `.html` URLs permanently redirect to these routes, preserving query strings and browser fragments. Internal links use Next.js navigation.

- `app/`: routes, root layout, original stylesheet, metadata routes and 404 page.
- `components/`: shared navigation/footer, structured data and the client interaction boundary.
- `lib/`: SEO configuration and existing browser interactions with event/observer cleanup.
- `public/assets/`: original branding, licensed fonts, photographs, thumbnails and header video.
- `next.config.ts`: legacy URL redirects.

## Domain configuration

The production domain has intentionally not been selected. No domain is hardcoded.

Copy `.env.example` to `.env.local` for local configuration, or set environment variables on the hosting platform. When your team selects the domain, set `SITE_URL` to its HTTPS origin and rebuild. This configures canonical URLs, absolute social image URLs, organization/website/breadcrumb URLs, all five sitemap entries, and indexing together.

With `SITE_URL` blank, review builds send `noindex` metadata, disallow crawling in `robots.txt`, and leave the sitemap empty. Titles, descriptions, content and domain-independent structured data are still rendered. No localhost or guessed domain is published as the canonical address.

## Contact form

Delivery is still unconnected, matching the original website. Validation works and the site states that inquiries have not been sent while directing visitors to call (661) 361-7840.

Set `NEXT_PUBLIC_INQUIRY_ENDPOINT` to a confirmed HTTPS JSON form handler when one is ready, then rebuild. The endpoint must accept the existing form fields and return a 2xx response only after accepting the inquiry. This public value must not contain secrets.

## Video and accessibility

The original header video retains pause/play controls and a photograph fallback. It does not load with reduced-motion or data-saving preferences, and pauses when the header is out of view or the page is hidden. Existing keyboard service navigation, Escape-to-close menus, native FAQ details, gallery navigation, form labels, error focus and no-JavaScript content are preserved.

## Hosting

Deploy to a host that supports Next.js or a Node.js server running `npm run build` followed by `npm run start`. This application requires a Next.js deployment rather than a static-folder upload. The existing ChatGPT Sites HTML preview is a separate deployment and is not updated by pushing this migration branch.

Before public launch, confirm the phone number, contractor license, service area and company history with the client. The 35 years refers to the father’s asphalt experience, not the company's age.
