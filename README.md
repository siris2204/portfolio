# Pendyala Siri — Portfolio

A single-page portfolio site built with plain HTML, CSS and JavaScript (no build step, no framework, no dependencies). Includes a light/dark theme toggle, animated stats, a responsive layout, and a downloadable résumé.

## Structure

```
portfolio/
├── index.html      # all page content/sections
├── styles.css      # design system + layout + responsive rules
├── script.js       # theme toggle, mobile nav, stat counters
└── assets/
    └── Pendyala_Siri_Resume.pdf   # downloadable résumé (linked from the hero button)
```

## Run locally

No build tools needed. Either:

- Open `index.html` directly in a browser, or
- Serve it (recommended, avoids any `file://` quirks):
  ```
  npx serve .
  ```

## Deploy to Vercel

**Option A — Vercel CLI (fastest)**

```
npm i -g vercel
cd portfolio
vercel
```
Accept the defaults (it will detect this as a static site — no framework, no build command, output directory `.`). Run `vercel --prod` to promote to production.

**Option B — GitHub + Vercel dashboard**

1. Push this folder to a new GitHub repo:
   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to https://vercel.com/new, import the repo.
3. Framework preset: "Other" (static). Leave build command empty, output directory as `.`.
4. Deploy.

No `vercel.json` is required — this is a static site and Vercel serves it as-is.

## Customizing

- Update copy directly in `index.html` (sections are labeled: Hero, About, Experience, Projects, Skills, Research, Contact).
- Swap `assets/Pendyala_Siri_Resume.pdf` with an updated résumé (keep the same filename, or update the link in the hero section of `index.html`).
- Colors/spacing live in `styles.css` under the `:root` and `[data-theme="dark"]` CSS variables at the top of the file.
