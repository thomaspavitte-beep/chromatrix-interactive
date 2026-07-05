# Chromatrix — Scroll to Colour

An interactive, single-page "scroll to colour" demo from the **Chromatrix**
series by [Thomas Pavitte](https://www.thomasmakesstuff.com). Scroll and the
artwork builds itself in four beats: a white line draws itself, the fill
segments outline in, the six tones paint over one by one darkest → lightest,
and the outlines melt away to leave the finished piece.

A calm dark-mode toy — no frameworks, no build step, one vanilla `index.html`
with inline CSS + JS.

## Run locally

Any static server works, e.g.:

```bash
python3 -m http.server 4623
```

then open <http://localhost:4623>.

## Colour it your way

Open **Colours** for curated palettes, two "surprise me" generators
(cohesive / vibrant), or six free colour wells. **Uncoloured** strips the paint
back to the bare white line; **Show line** lifts the line work over the finished
colours.

## Add another artwork

Drop `art/<id>/colours.svg` (six tone groups, darkest → lightest) and an
optional `art/<id>/line.svg`, then add an entry to
[`art/manifest.js`](art/manifest.js) — the file documents the format. Switch
between artworks with the **Artworks** button or `?art=<id>`.
