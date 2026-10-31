# Agent Guidelines for alhu.net

Alex Huang's personal academic website, live at https://alhu.net. It's plain HTML and CSS, with no generator and no build step: the files in `public/` are the site, served as they are. Nothing outside `public/` is published.

## Where things are

- **Home page:** `public/index.html` (profile photo: `public/assets/img/prof_pic.jpg`)
- **Secrets page:** `public/secrets/index.html`. It calls a Cloudflare Worker (`lionmail-2fa.alexhuang.workers.dev`) that isn't in this repo.
- **404 page:** `public/404.html`. It sends visitors to the home page after 3 seconds.
- **Styles:** `public/assets/css/style.css`, with the light and dark colours at the top.
- **Scripts:** `public/assets/js/theme.js` (the light/dark toggle, dark by default) and `public/assets/js/analytics.js` (Google Analytics).
- **PDFs:** `public/assets/pdf/`. The CV PDF's filename appears twice in `public/index.html` and once in `public/_redirects`; update all three if it changes.
- **Redirects:** `public/_redirects` points URLs from the old al-folio site (`/cv/`, `/blog/`) somewhere useful. Cloudflare Pages reads it; other hosts ignore it.

Each page has its own copy of the `<head>`, navbar and footer. A change to one of them goes in every page.

To add a page, copy `public/secrets/index.html` to `public/<name>/index.html` (its URL is then `/<name>/`), then change the `<title>`, the canonical link and the `<main>` content, and drop the page's `<style>` and `<script>`. Add a navbar link to it in every page if it should be in the menu.

## Local preview

```bash
python3 -m http.server 8081 -d public   # site at http://localhost:8081
```

This doesn't apply `_redirects` or serve `404.html` for missing pages; open `/404.html` directly to see it.

## Before committing

1. Format the files you changed: `npx prettier --write <files>`.
2. Check the pages you touched in the local preview, in light and dark mode (the navbar toggle) and at phone width.
3. Write the commit message as `<type>: <subject>`, where the type is `feat`, `fix`, `docs`, `style`, `config` or `chore` (`feat: Add teaching page`). Stage files by name, not with `git add .`.

## Deployment

Cloudflare Pages, connected to this repo, with no build command and `public` as the output directory. Every push to `main` goes live at alhu.net, and other branches get preview URLs.
