# NIRUP MADADGAAR

A responsive, motion-led job discovery and community homepage for Bengaluru. Built with plain HTML, CSS and JavaScript so it runs without a package install or build step.

## Run and preview

Open `index.html` in a modern browser, or run `npm run build` to create the Vercel-ready `dist/` output. The page requests Google Fonts, so an internet connection is needed for the selected fonts; system fallbacks are included. The original generated photography is stored in `assets/` and works locally.

## Deploy to Vercel

Import the repository in Vercel using the repository root as the project root. `vercel.json` selects `npm run build` and the `dist/` output directory. No environment variables or backend services are required for this demo. Node.js 18 or newer is used by the dependency-free build script.

## Demo interactions

- Search sample Bengaluru jobs by category, location, qualification, skills, experience and salary.
- Open role details, save roles, and mark interest locally.
- Read, like and comment on illustrated sample story previews; follow sample worker profiles and record demo referral requests.
- Filter sample accommodation to women-only stays and preview an enquiry.
- Use demo signup/login, messages, reports, newsletter and admin dashboard interactions.

No accounts, messages, applications, reports, subscriptions or enquiries are sent to a server. Sample listings and profiles are fictional. Do not enter real passwords or sensitive identity information.

## Design and assets

The homepage follows the approved first visual concept: a warm-ivory editorial layout with deep navy, muted teal and subtle gold, floating opportunity cards, photographic story and accommodation cards, and a responsive mobile composition. The supplied NR logo artwork is preserved in `assets/nirup-madadgaar-logo-original.png`; the navbar uses a crop of the NR mark, the footer uses a resized web copy, and `assets/nirup-favicon.svg` is a simplified monogram favicon. The supplied homepage reference is kept in `assets/approved-homepage-reference.png`. Hero, story and accommodation photography are generated for this project; optimized JPEGs are used in the page while the original PNGs are retained.

English display typography uses Plus Jakarta Sans and DM Sans. Hindi uses Tiro Devanagari Hindi, Mukta and Noto Sans Devanagari. These fonts load from Google Fonts when online; the project includes system fallbacks and no local font files. No private font credentials or font service keys are required.

## Future expansion

The prototype can later move to Next.js/React with TypeScript and Supabase when a real backend and authentication flow are ready. Keep future secrets in server-side environment variables; none are needed for this demo.
