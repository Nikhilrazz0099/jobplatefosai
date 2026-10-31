# NIRUP MADADGAAR

**Find Your Job. Find Your Place.**

A responsive, desktop-first job discovery and worker community website. It includes a blue-gradient feed, work stories, sample social posts, a dark job vacancies preview, and an active PG, room rental and mess listings section. It uses the existing dependency-free HTML, CSS and JavaScript project structure.

## Run locally

You need Node.js 18 or newer. No package installation is required.

1. Open the project folder in a terminal.
2. Run `npm run build` to create the Vercel-ready `dist/` folder.
3. Open `index.html` directly in a browser, or serve the folder with any local static web server.

The page loads its display fonts from Google Fonts when internet access is available and falls back to system fonts. Brand artwork and sample photography are stored in `assets/`.

## Demo interactions

- Switch between Following and Explore feeds.
- Follow workers, like and comment on posts, share a post, and create a local demo post.
- Browse work stories and sample job details.
- Filter vacancies by qualification, keyword, city, experience, salary and job category.
- Save sample jobs in this browser.
- Browse PGs, room rentals and mess plans; filter by location, budget, food, sharing and amenities.
- Preview a stay or meal enquiry without sending it to an owner.

Interactions are stored locally in the browser. There is no account system, backend, real application submission, live listing verification or owner contact information in this phase. Job, worker and stay details are fictional portfolio demo content. Do not enter real passwords or sensitive identity information.

## Build and deployment

Run `npm run build` to copy the site and referenced assets into `dist/`. `vercel.json` points Vercel to this output. The current project does not require paid APIs, environment variables or a domain purchase.

Supabase, authentication and live data are later development stages; no backend service is connected yet.
