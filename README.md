# Namastack - Landing Website

This repository contains the Namastack master landing site built with Next.js. It showcases the
Namastack Outbox project (an open-source transactional outbox for Spring Boot) and provides
documentation, feature highlights, and legal information.

The site uses:

- Next.js (App Router)
- Tailwind CSS for styling
- Framer Motion for smooth UI animations
- Vanta.js (Topology) for the animated hero background
- p5 and three (runtime for Vanta effects)

This README gives a concise guide to running, building, and contributing to the landing site.

---

## Quick start

Requirements:

- Node.js 18+ (recommended)
- npm (or yarn / pnpm)

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

Available scripts (from `package.json`):

```bash
npm run dev    # start Next.js dev server
npm run build  # build a production version
npm run start  # start the production server (after build)
npm run lint   # run ESLint
```

---

## Project structure

- `app/` — Next.js App Router pages and layout
    - `app/page.tsx` — main landing page that composes all sections
    - `app/legal/page.tsx` — legal notice & privacy page
    - `app/globals.css` — global Tailwind CSS config + theme variables
- `components/` — React components used by the landing page
    - `Hero.tsx` — animated hero with Vanta background and logo
    - `VantaBackground.tsx` — wrapper that loads Vanta (topology) and p5
    - `About.tsx`, `FeaturedProject.tsx`, `Reliability.tsx`, `CTA.tsx`, `Footer.tsx` — site sections
- `public/` — static assets (logo, icons, SVGs)
- `legal-notice.md` — source legal content used on `/legal`
- `package.json` — project dependencies & scripts

---

## Development notes

- The Hero animation uses Vanta's Topology effect which depends on `p5` at runtime. The
  `VantaBackground` component dynamically loads p5 and the Vanta script only in the browser to avoid
  SSR issues.

- Framer Motion's `useScroll` and `useTransform` are used to create a scroll-linked effect so hero
  content fades/moves as the user scrolls.

- Tailwind CSS is configured via `app/globals.css`. Adjust CSS variables there (for colors, primary
  accent, etc.).

---

## Deploying

This site is optimized for deployment on Vercel (the creators of Next.js). To deploy:

1. Push the repository to GitHub (or another Git host)
2. Import the project on Vercel and follow the prompts

Vercel will run `npm run build` automatically. The site expects static prerendering for the main
pages and will work out-of-the-box on Vercel.

---

## Contributing

Contributions are welcome. Typical contribution workflow:

1. Fork the repository
2. Create a feature branch
3. Run and test locally
4. Open a pull request with a clear description

---

## License

This website, including source code, text, images, and other assets in this repository, is the
personal homepage and project site for Namastack and its maintainer. It is not intended to be
reused or redistributed.

All rights reserved. © 2026 Namastack (Roland Beisel).

If you need permission to reuse any portion of this repository (for example, code snippets,
images, or documentation), please contact the maintainer listed in the legal notice at `/legal`.

---

## Contact

If you need help or want to discuss the project, open an issue or contact the maintainer listed in
the legal notice (`/legal`).

---

_Last updated: March 2026_
