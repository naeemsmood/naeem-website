# The Mood Method — naeemmahmood.com

Static rebuild of the site, previously hosted on GoHighLevel. Plain HTML/CSS/JS, no build step, no framework.

## Local preview

```
python3 -m http.server 8843
```

Then open http://localhost:8843/

## Structure

- `index.html` — the whole site (single page)
- `assets/css/styles.css` — all styles
- `assets/js/main.js` — click-to-load YouTube embeds
- `assets/img/` — self-hosted images (logos, hero photo)

## Deploying (GitHub + Cloudflare Pages)

1. Create a new GitHub repo (e.g. `naeem-website`), push this folder to it.
2. In Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, select the repo.
3. Build settings: **no build command**, output directory `/` (root).
4. Deploy. Cloudflare gives you a `*.pages.dev` URL immediately; add your custom domain (`naeemmahmood.com`) under the project's **Custom domains** tab once you're ready to cut over DNS.

## Known follow-ups (not done in v1)

- "Apply to Work With Me" buttons link to TidyCal (`https://tidycal.com/moodmethod/mood-method-discovery-call`) instead of rebuilding the old GHL lead-qualification form.
- Favicon not yet set (old one was a blank GHL placeholder).
