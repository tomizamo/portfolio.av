# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Single-page portfolio for an audiovisual producer (Tomás Zamorano). Vanilla HTML/CSS/JS, **no build step, no framework, no dependencies**. `package.json` exists but has no dependencies and no meaningful scripts — do not add a bundler or framework without asking.

Three files carry everything: `index.html`, `styles.css`, `main.js`. Everything that isn't code lives under `resources/` — `resources/media/` (video, posters, portrait, CV) and `resources/fonts/` (the PP Neue Gstaad `.otf` files). Paths to it are written by hand in `main.js` and `index.html`; there is no asset pipeline to rewrite them, so moving that folder means grepping for `resources/`.

## Running it

`file://` does **not** work — the browser blocks the external `styles.css` and `main.js`. Always serve over HTTP:

```bash
python -m http.server 5501
```

`.claude/launch.json` defines this as the `portfolio` config for `preview_start`. There are no tests, no linter, and no build.

`python -m http.server` sends no `Cache-Control`, so browsers hold on to `main.js` and `styles.css` hard. **A plain reload will silently run the old JS** — verify with `location.reload()` and you will chase ghosts. Force-reload (Ctrl+Shift+R), or confirm the change actually landed by reading a value out of the page (e.g. `proyectos.length`) rather than trusting the rendered output.

## Architecture

### One array, two renders

`main.js` holds a single `proyectos` array — the only source of truth for content. Every object has the same shape:

```js
{ anio, titulo, tipo, rol, productora, video, poster, tamano }
```

The array is grouped by hand (videos first, then credits-only) and **must not be reordered to fix display order** — a derived copy handles that:

```js
const proyectosOrdenados = [...proyectos].sort((a, b) => Number(b.anio) - Number(a.anio));
```

Both renders read `proyectosOrdenados`, never `proyectos`. The spread copy matters: `sort()` mutates in place, and the hand-written grouping is the owner's editing surface. The sort relies on **stability** — projects sharing a year stay in written order, which the owner maintains chronologically within each year.

Three functions consume it; `index.html` ships their containers empty (`#bento`, `#archivo_lista`):

- **`renderBento()`** — filters to `p.video !== null`, renders the selected-works grid into `#bento`.
- **`renderArchivo()`** — renders **every** project as an accordion row into `#archivo_lista`, tagging rows whose year isn't the newest with `.oculta`.
- **`activarVerMas()`** — must run after `renderArchivo()`; wires `#ver_mas` to toggle `.expandido` on the container and writes the hidden-row count into the button label.

**`video` is the switch.** "Has a video" and "appears in selected works" are deliberately the same condition — there is no separate `selected` flag to keep in sync. Set `video: null` to drop a project from the bento while keeping it in the archive.

### Progressive disclosure in the archive

Every row is in the DOM from the start; `.oculta` only hides it (`display: none`), and `.index.expandido .row.oculta` wins it back. Nothing is created or destroyed on click. The cutoff year is derived (`proyectosOrdenados[0].anio`), not hardcoded, so it does not rot each January.

### Bento sizing

`tamano` is one of `"feature"` (2×2), `"tall"` (1×2), `"wide"` (2×1), or `""` (1×1). It is concatenated onto the class in `renderBento()` (`tile.className = 'tile ' + p.tamano`), so layout travels with each project and reordering the array does not break the grid.

The grid is 4 columns. **Spans must close in groups of 4 per row or the grid leaves visible holes** — check the bento visually after changing any `tamano`.

`grid-auto-rows: clamp(130px, 12.6vw, 250px)` is tuned so a 1×1 cell lands at ~16:9 at any viewport width. Changing it changes every tile's aspect ratio; see the video specs below before touching it.

### Video

Live footage sits in `resources/media/` as `<nombre>.mp4` plus a `<nombre>_img.jpg` poster. Every clip is 1280×720 except `peroni.mp4` (1540×720).

**Everything is 16:9 — there is no vertical source, which is why no tile uses `tall`.** A `tall` tile is 0.87:1, so `object-fit: cover` would keep only the middle ~44% of a 16:9 frame. Do not assign `tamano: "tall"` without a vertical cut to go with it.

Posters must be **JPG, not PNG**. The originals arrived as PNGs up to 5MB, which defeats the point of a poster (it has to paint before the video does); they were re-encoded with ffmpeg at `-q:v 4`, capped at 1600px wide — 24MB → 1.1MB with no visible loss. Keep new posters on that path.

All 11 videos autoplay simultaneously (~42MB). See `BACKLOG.md` — this needs an `IntersectionObserver` before the site goes public.

### Typography

**PP Neue Gstaad is the only family on the page**, self-hosted from `resources/fonts/ppNeueGstaad/`. Nothing is fetched from Google Fonts — Space Grotesk and Space Mono are gone, and so are the `preconnect` tags.

Three `.otf` cuts, each declared at its true weight in the `00 · FUENTES` block, so the browser picks a file and never synthesises one:

| Weight | File | Where |
|---|---|---|
| 300 | `PPNeueGstaad-Light.otf` | every rule using `var(--font-mono)` — year, tipo, rol, section labels, footer, buttons |
| 400 | `PPNeueGstaad-Regular.otf` | body default, project titles |
| 700 | `PPNeueGstaad-Bold.otf` | active nav link, the big display headings |

The pre-existing `font-weight: 500` and `600` declarations have no cut of their own: the CSS matching algorithm rounds 500 down to Regular and 600 up to Bold. That is the intended result, not an oversight — don't add faces to "fix" it.

**`--font-mono` no longer holds a monospace.** The name marks the small-label register, and every rule that uses it also declares `font-weight: 300` — the variable can't carry a weight, so the two travel together. Adding a label rule means writing both lines. Going back to a real mono is one line: change the variable and drop the 300s.

`.otf` is uncompressed (~85kB each). There is no build step to produce `woff2`, which would roughly halve that; if a build ever appears, this is the first thing to convert.

### The portrait cutout

`resources/media/retrato.jpg` is a studio shot on a **light grey seamless** — a bright rectangle on a near-black page. `renderRetrato()` knocks the background out on a canvas rather than softening the photo's edge.

**Luminance alone cannot do it.** Measured: background sits at 187–208, but the lit cheek reaches 214. A flood fill keyed on brightness walks in through the cheek and eats half the face. What separates them is **chroma** — the background is neutral grey (0–4) and skin is warm (73–84). `marcarFondo()` requires *both* conditions, and both are load-bearing; drop the chroma test and the face is destroyed.

After the fill: box-blur the alpha, then remap it with `corte` to pull the edge inward (the blur alone leaves a grey halo around the hair), then square-fade the bottom 30% so the shirt dissolves instead of ending on a straight line. `pluma` is a **fraction of image width**, not pixels, so a higher-resolution portrait keeps the same softness.

The reveal is gated on `IntersectionObserver` because the section sits ~6000px down the page — animating on load means nobody sees it.

### i18n

**English is the default and the markup is written in English.** `index.html` carries the English copy so the page is correct before JS runs and for crawlers; Spanish lives only in `TEXTOS.es` in `main.js`. Do not invert this.

`traducir(idioma)` walks the document and rewrites text in place — it never re-renders. That is deliberate: re-running `renderArchivo()` on a language switch would close whatever accordion row the visitor had open and redraw the portrait canvas.

Three attributes, because there are three kinds of translatable text:

| Attribute | Key is | Source |
|---|---|---|
| `data-i18n` | a key we invent | `TEXTOS[idioma]` |
| `data-tipo` | the project's literal `tipo` value | `TIPOS` |
| `data-rol` | the project's literal `rol` value | `ROLES` |

The last two are keyed by the exact string in the `proyectos` array so the mapping is traceable back to the data.

**`ROLES` is many-to-few on purpose.** The array records the same job under several spellings, in both languages — the owner writes whatever comes to hand when adding a project. Eight distinct strings collapse to three rungs, confirmed by the owner:

| Shown (EN / ES) | Written in the array as | Projects |
|---|---|---|
| PA / Ayudante de Producción | `2nd Prod. Assist`, `Ayudante de Producción` | 35 |
| Key PA / Asistente de Producción | `1st Prod. Assist`, `Asistente de Producción`, `Production Assist`, `Asistente de Producción (PA)` | 13 |
| Production Runner / Runner de Producción | `Prod. Runner`, `Aprendiz de Producción` | 7 |

**The English labels are the industry's, not a translation of the Spanish** — the trade says *PA* and *Key PA*, so the site does too, while Spanish keeps *Ayudante* / *Asistente*. A ninth key, `Producción` → *Production*, is still in the map but no project uses it; it stays so a not-yet-pinned-down credit doesn't land on screen untranslated.

*Aprendiz* and *Runner* are the same rung; the `(PA)` suffix is the same job as Key PA and is dropped on screen. Do not "clean up" the array to one string per rung — the raw values are the owner's editing surface, and `ROLES` is what makes them agree.

Adding a project with a new `tipo` or `rol` string requires adding it to that map — a missing key silently leaves the raw value on screen, in whichever language it happened to be written.

Strings go through `innerHTML`, not `textContent`, because some carry `<br>` or `&amp;`. That is only safe because every string is authored in `main.js`; copy arriving from anywhere else must not take this path.

Counts are interpolated, not concatenated: `ver_mas` holds `(+{n})` and reads the number from `data-cuantas` on the element. The "ver más" button never has its text written directly — `activarVerMas()` swaps `dataset.i18n` between `ver_mas`/`ver_menos` and calls `traducir()`.

**`#theme_btn` follows the same contract**: its label is `theme_btn_a_claro` / `theme_btn_a_oscuro`, swapped via `dataset.i18n` + `traducir(idiomaActual)`. Writing its `textContent` directly breaks it on the next language switch.

Both language and theme choices persist in `localStorage` (`idioma`, `tema`).

### Themes

Dark is the default and lives in `:root`. Light is `:root[data-tema="claro"]` and **redefines variables only** — if a light-mode fix needs a component rule, that rule has a hardcoded colour that should become a variable instead.

Three colours could not simply invert:

- `--accent` gold `#e9b44c` scores 1.9:1 on the light ground. Light mode uses `#8a6a1f` (the "Gold deep" already defined in `paleta.html`) for 4.55:1.
- `--status-green` mint `#34d399` scores 1.73:1 on light. Replaced with `#0f7a52`.
- `--text-muted` was picked as `#62605a` specifically to land at 5.67:1, near-matching the dark theme's 5.70:1 — the *hierarchy* should feel identical in both themes, not just pass.

**The bento scrim stays dark in both themes.** Underneath is filmed footage of arbitrary colour; light text on a dark scrim is the only combination readable over every frame. Against a pure-white frame the reveal still measures 16.16:1. Consequently `.tile_base`, `.tile_reveal`, `.tile_tipo` and `.reveal_meta` pin their colour to `--scrim_texto*` variables rather than inheriting `--text-main`, which would flip to near-black in light mode and vanish.

**The `<head>` carries the one inline script in the project.** It reads `localStorage.tema` and sets `data-tema` before first paint. `main.js` loads at the end of `<body>`, so without it a light-mode visitor gets a black flash on every reload. It must stay render-blocking — that is the property that makes it work.

### Accordion

Uses `grid-template-rows: 0fr → 1fr` on `.row_body` (with `overflow: hidden` on `.row_inner`) because `height: auto` is not animatable. Each row gets its listener at creation time inside the `forEach`; the handler reads `estabaAbierta` **before** clearing `.open` from all rows, so a re-click closes rather than reopens.

## Conventions

- **CSS variable names in `:root` are the owner's, not the palette file's** — e.g. `--gris_transparente` holds the "line" color. The navbar CSS was written by hand and pasted in verbatim; keep it that way and do not rename its variables or classes to something more idiomatic.
- **`--font-ppGstaadBold` still aliases `--font-sans`.** Both now resolve to PP Neue Gstaad, so the alias is a no-op kept for the two navbar rules that name it; the active-link effect comes from `font-weight`, not from a second family.
- Identifiers and comments are in **Spanish**, camelCase. Comments explain *why* (the `-50%` marquee trick, the `0fr/1fr` accordion trick), not what.
- `styles.css` is one file with numbered section comments (`00 · FUENTES`, `00a · VARIABLES`, `01 · NAVBAR`, …) in the same order as the HTML. Add new sections in HTML order.
- **All new copy needs a `data-i18n` key in both dictionaries.** See the i18n section below.

## Verifying in a headless preview

The in-app browser pane reports `document.visibilityState === "hidden"`, and a hidden page runs **neither `requestAnimationFrame` nor `IntersectionObserver` nor CSS transitions**. The transition case is the sneakiest: a transitioned property reads as its *starting* value forever, so `.row_plus` looks like the accent colour never applies. Null out the transition before measuring, or read the target value from the rule rather than the element. Anything gated on either — the portrait reveal — will never fire there, and a blank canvas is not evidence of a bug. Verify those paths by calling the pipeline's own functions directly (`marcarFondo`, `desenfocar` are top-level and reachable from the console), or replicate them offline: `ffmpeg -i resources/media/retrato.jpg -vf scale=W:H -f rawvideo -pix_fmt rgb24` gives raw pixels a Node script can run the same algorithm over and render to a PPM you can actually look at.

## Current state

55 projects, 11 with video (11 bento tiles), 6 archive rows visible before "ver archivo completo". Product truth lives in `PRODUCT.md`; open items in `BACKLOG.md` — check both before proposing work.
