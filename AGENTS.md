# Agent Guidelines for alhu.net

Alex Huang's personal academic website, live at https://alhu.net. It's built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme but uses only a small part of it: there are no publications, projects, news, teaching pages or blog posts.

## Where things are

- **Home page:** `_pages/about.md` (profile photo: `assets/img/prof_pic.jpg`)
- **CV page:** `_pages/cv.md`, rendered from `_data/cv.yml`
- **PDFs:** `assets/pdf/`. The CV PDF's filename appears in both `_pages/about.md` and `_pages/cv.md`; update both if it changes.
- **Social links:** `_data/socials.yml`
- **Site settings and feature flags:** `_config.yml`. Keep `url: https://alhu.net` and `baseurl:` empty.

Files at the repo root are published to the site unless they're listed under `exclude:` in `_config.yml`. Add any new doc or tooling file there.

## Local development

```bash
docker compose pull && docker compose up   # site at http://localhost:8081
docker compose up --build                  # after changing the Gemfile or Dockerfile
docker compose down                        # stop and free the port
```

## Before committing

1. Format the files you changed: `npx prettier --write <files>`.
2. Build locally and check the pages you touched, including dark mode.
3. Write the commit message as described in [`.github/GIT_WORKFLOW.md`](.github/GIT_WORKFLOW.md) (`<type>: <subject>`).

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and pushes `_site` to the `gh-pages` branch. GitHub Pages serves that at alhu.net (see `CNAME`). The only other workflows are `codeql.yml` and `update-citations.yml`.

## Reference docs

These are written for the al-folio theme as a whole. Where they disagree with this file (the workflow list, the local port), this file is right for this site.

- [`.github/copilot-instructions.md`](.github/copilot-instructions.md): tech stack, build requirements, common pitfalls
- Rules for each file type, in `.github/instructions/`:

| Editing                          | Read                                                                                          |
| -------------------------------- | --------------------------------------------------------------------------------------------- |
| Pages (`_pages/`)                | [markdown-content.instructions.md](.github/instructions/markdown-content.instructions.md)     |
| `_config.yml`, `_data/`          | [yaml-configuration.instructions.md](.github/instructions/yaml-configuration.instructions.md) |
| `_includes/`, `_layouts/`        | [liquid-templates.instructions.md](.github/instructions/liquid-templates.instructions.md)     |
| BibTeX, JavaScript (`_scripts/`) | the `bibtex-bibliography` and `javascript-scripts` files in the same folder                   |

- Customizing the theme: [CUSTOMIZE.md](CUSTOMIZE.md) and [`.github/agents/customize.agent.md`](.github/agents/customize.agent.md)
- Setup and deployment: [INSTALL.md](INSTALL.md)
- Troubleshooting: [TROUBLESHOOTING.md](TROUBLESHOOTING.md), [FAQ.md](FAQ.md)
- Analytics and SEO: [ANALYTICS.md](ANALYTICS.md), [SEO.md](SEO.md)
