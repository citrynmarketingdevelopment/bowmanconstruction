# Bowman Construction

Responsive five-page website for Bowman Construction LLC, built with plain HTML, CSS, and JavaScript. Fonts, photographs, logo assets, and the header video are included locally.

## Preview Locally

Requires Node.js. No dependency installation or build step is needed.

```sh
npm run dev
```

Open http://localhost:4173.

## Pages

- `index.html` — Homepage, looping header video, expanding service photos, featured work, family overview, and FAQ.
- `services.html` — Grading, paving and concrete, asphalt maintenance, seal coating, and striping.
- `our-story.html` — Family background and the father’s 35 years of asphalt experience.
- `work.html` — 59 selected project photographs with filters and a photo viewer.
- `contact.html` — Simple project inquiry form and direct call links.

## Header Video

`assets/video/bowman-construction-header.webm` is the supplied 6.46 MB video. It plays muted and loops, with pause/play controls. A still photograph remains available when playback fails or JavaScript is unavailable. The video does not load when reduced-motion or data-saving preferences are enabled, and pauses when the header is out of view or the page is hidden.

## Brand

Navy `#182C3C`, Heritage Gold `#AD8244`, Equipment Teal `#1E7180`, Warm Ivory `#F7F5F0`, White `#FFFFFF`, Slate `#596771`, and Light Stone `#DED9CF`. Typography uses local Barlow and Barlow Condensed fonts; font license files are included in `assets/fonts`.

## Before Launch

- The final domain is intentionally unset in `seo.config.json`.
- The contact form validates input, but delivery is intentionally unconnected. Configure a real HTTPS JSON form handler in `inquiry.config.js` before accepting online inquiries. Until then, the draft clearly states that messages are not sent and provides the phone number.
- Confirm the public phone number, contractor license, service area, and company history with the client before launch.
- The 35 years refers to the father’s asphalt experience, rather than the company’s age.

After confirming the final domain, run:

```sh
npm run seo:prepare -- --site-url https://YOUR-CONFIRMED-DOMAIN
```

This prepares canonical URLs, absolute social-image URLs, and a five-page sitemap. The supplied share image and logo favicons are included.

## Hosting

Upload the website files and `assets` directory to a static HTTPS host. The entry file is `index.html`; no framework build is required. Keep all relative paths together. Serve `.webm` as `video/webm`. The local `server.mjs` is for previewing the site.

Local Pen design files and account-specific preview-hosting configuration are not part of this website repository.
