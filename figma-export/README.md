# Susan Tumuhairwe — Static Site (Figma-ready)

A faithful, framework-free recreation of the Susan Tumuhairwe personal brand website,
built with **plain HTML, vanilla CSS, and vanilla JavaScript** — no React, no Tailwind,
no build step. This is designed to import cleanly into Figma for further fine-tuning.

## Files
- `index.html` — Master Hub (Health. Wealth. Leadership.)
- `nourish.html` — Nourish & Thrive (health & nutrition)
- `prosper.html` — Women Prosper (finance & enterprise)
- `speaking.html` — Speaking & Workshops (corporate + booking form)
- `styles.css` — All design tokens, typography, layout & components
- `app.js` — Navbar scroll state, mobile menu, scroll reveals, local form handling

## How to preview
Just open any `.html` file in a browser (double-click), or serve the folder:
```
cd figma-export
python3 -m http.server 8080
# visit http://localhost:8080
```

## How to import into Figma
The cleanest path is the **"html.to.design"** Figma plugin:
1. Open Figma → Plugins → search **html.to.design** → run it.
2. Choose **"Import from code / HTML"** (or paste a hosted URL).
3. Paste the contents of a page's `.html` **and** the `styles.css`, or point it at the
   locally-served URL (e.g. `http://localhost:8080/index.html`).
4. Repeat for each page. Each imports as an editable frame with real layers, text & colors.

Tip: import at a fixed desktop width (1440–1500px) for the intended editorial layout.

## Design system (preserved from the original)
- **Base:** warm linen `#FBF8F2`, ink text `#231A0F`, hairline border `#E5DFD3`
- **Sub-brand accents:** Sage `#33501D` (health), Pink `#C24E76` (business), Blue `#3E71A8` (speaking)
- **Type:** Cormorant Garamond (headings), Hind (body), Playfair Display (accent italic) — via Google Fonts
- **Motion:** masked hero line reveals, scroll fade-ups, marquees, hover states (CSS/JS only)

## Notes
- Images use the same remote URLs as the live site (internet connection needed to display them).
- The Speaking booking form is **front-end only** here (no backend) — on submit it shows a
  local confirmation message. This keeps the export fully static for Figma.
