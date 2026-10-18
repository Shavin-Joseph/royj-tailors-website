# Royj Tailors

A mobile-first React 19 storefront for the Wattala tailoring studio. The interface uses an ivory, charcoal and olive palette with editorial typography, restrained animation and a lightweight interactive garment sketch.

## Run locally

- Node.js and npm are required.
- Install dependencies: `npm ci`
- Start the development server: `npm start`
- Production build: `npm run build`
- Regression tests: `npm test -- --watchAll=false --runInBand`

## Customer features

- Search, category links and price sorting, with filters kept in the URL.
- Saved pieces stored locally in the visitor's browser. Personal enquiry details are not saved.
- Product front/back photography where available.
- Interactive garment sketches with front/back rotation, color and fit preferences.
- Standard sizes or custom measurements, followed by a reviewable WhatsApp enquiry.
- Measurement-based size guidance with inches/centimetres support.
- Fitting requests with Sri Lanka date/time validation.
- Accessible native dialogs, keyboard navigation, reduced-motion support and missing-page recovery.

## Content and operations

Product records and existing prices are in `src/data/products.js`. Contact details are centralized in `src/data/studio.js`. Standard sizing and appointment helpers live in `src/data/sizing.js` and `src/data/appointments.js`.

This is a frontend enquiry site. There is no payment processor, inventory service or booking database. The customer reviews a message and explicitly opens WhatsApp; the studio confirms the final price, fabric, delivery and appointment availability.

The preview is a CSS-perspective illustration, not a measured 3D garment or fit simulation. Images show reference colors. All catalogue images use transparent backgrounds, with garment types matched to their listings. The school range includes a white short-sleeve shirt with navy shorts and separate white full-length trousers. The latter is quoted on enquiry because no price was supplied. School-specific details are confirmed by the studio. Generated image masters and their prompts are documented in `docs/product-image-prompts.md`.

## Deployment

Publish the `build` directory after a successful production build. Client-side routes must fall back to `index.html` on direct visits. This repository includes Netlify `public/_redirects` and Vercel `vercel.json` fallbacks; configure the equivalent on other hosts. Confirm the existing domain in `public/sitemap.xml` and `public/robots.txt` before changing domains.

The site uses the browser's native dialog API (current Chrome, Edge, Safari and Firefox). Google Fonts are optional; local font fallbacks remain usable when unavailable.

## Verification

The regression suite covers missing routes, filters and sorting, saved-piece persistence, custom measurement validation and review messages, dialog cleanup, size conversion and Sri Lanka appointment times. Browser QA should cover 320px and 390px phones, 768px tablets and laptop widths, as well as form reviews and keyboard focus. Do not send test enquiries to the real studio.
