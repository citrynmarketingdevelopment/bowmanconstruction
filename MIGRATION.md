# Migration verification

Source: original Bowman HTML checkout at commit `bf9671095ec60cf4d7bb9c19abb1af553d1ed18f`.

The migration preserves the original design and content. The five routes are Next.js App Router server components; shared components replace repeated navigation and footer markup. Only browser interactions require the client boundary. Assets retain their original bytes under `public/assets`.

## Completed checks

- Production build and TypeScript validation pass.
- All five routes return their content, unique titles/descriptions and JSON-LD in the initial HTML.
- All 123 referenced local assets respond successfully.
- All five legacy HTML routes return permanent redirects, preserving query strings.
- Unknown routes return 404.
- Blank-domain review builds provide noindex metadata, robots disallow and an empty sitemap.
- A temporary test origin verifies production canonical URLs, absolute social images, indexing and organization/breadcrumb URLs. This origin is not saved in the application configuration.
- Headless Chrome checks all five routes at 1440, 768, 390 and 320px. Page height, main heading and main imagery match the original HTML build; there is no horizontal overflow or broken imagery.
- Mobile menu, Escape behavior, keyboard service panels, all 59 gallery photos, filtering, photo dialog navigation, contact validation, error focus and unsent-inquiry notice pass.
- Header video playback and pause/play controls pass. Reduced-motion checks retain the image fallback.
- Client navigation across all five routes preserves the document and reinitializes the page interactions without browser errors.
- Gallery content is present with JavaScript disabled.

Visual inspection retains the original brand palette, type system and photographic scrims. The design skill's generic style findings about those existing elements and the services link were treated as preservation decisions rather than a request to redesign the site.

## Deployment status

The migration is prepared on a separate GitHub branch. The original HTML main branch and existing ChatGPT Sites preview are not replaced. Deploy this branch through a Next.js-compatible host. Set `SITE_URL` and rebuild after the final domain is chosen. The form still requires a confirmed delivery handler if online inquiries are to be enabled.
