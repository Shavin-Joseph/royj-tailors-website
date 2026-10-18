<<<<<<< HEAD
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
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> bbd6728eab04548842ae8036b6e641589e8eaba9
