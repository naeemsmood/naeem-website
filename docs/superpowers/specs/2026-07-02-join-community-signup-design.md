# Join My Community — Email Signup Section

## Purpose

Add an email opt-in section near the top of naeemmahmood.com so visitors see it right away, driving signups to the "Peak Humans" Substack publication.

## Placement

A new `<section class="community">` inserted directly after the hero section and before the client-logo marquee, in `public/index.html`.

Order becomes:
1. Hero
2. **Join My Community (new)**
3. Client logos marquee
4. Testimonials
5. ...(rest unchanged)

## Content

- Heading: `Join My Community`
- Subtext (one line, adapted from the Peak Humans Substack tagline):
  > Your resource for mastering the art of peak performance — insights and strategies to help you achieve excellence, delivered to your inbox.
- Signup form: Substack's official embeddable widget, an iframe pointing at:
  `https://nmood.substack.com/embed`

No custom backend is needed. Substack's iframe handles the submission directly against the `nmood.substack.com` publication (Peak Humans). Nothing else on the site or its infrastructure changes.

## Visual style

- Section background: white (default page background), preserving the site's alternating white / light-gray section rhythm (hero white → community white → logos gray-50 → testimonials white...).
- Centered card inside the section, matching the visual language already established by `.compare__col--good`:
  - max-width 600px, centered horizontally
  - white fill
  - 2px solid gold border (`var(--color-gold)`)
  - 12px border radius
  - generous padding (~2.5rem 2rem)
  - text-align center
- Card content stacked top to bottom: heading → subtext → embed.
- Subtext styled like `.hero__subtitle` (gray-600, constrained max-width) for consistency.

## Embed responsiveness

Substack's default embed snippet is:
```html
<iframe src="https://nmood.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
```

This will be wrapped in a container with CSS to make it responsive:
- `width: 100%; max-width: 480px; margin: 0 auto; display: block;`
- Height stays fixed at 320px (Substack's iframe content is not resizable), which is enough to show the email field, subscribe button, and Substack's required legal text without clipping.

## New CSS (added to `public/assets/css/styles.css`)

New rules under a `/* Join Community */` comment block:
- `.community__card` — the gold-bordered card described above
- `.community__subtitle` — subtext styling (reuses `.hero__subtitle`-like treatment)
- `.community__embed iframe` — responsive iframe override

No changes to existing CSS rules or classes.

## Out of scope

- No custom email collection/backend (Substack handles storage).
- No changes to the existing "Apply to Work With Me" hero CTA or any other existing section.
- No A/B testing, analytics, or exit-intent variants — just a static section.
