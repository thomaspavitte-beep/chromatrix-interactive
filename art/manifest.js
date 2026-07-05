// Chromatrix — artwork manifest. The switcher lists entries in this order.
//
// To add an artwork:
//   1. Create art/<id>/colours.svg — the tone export. Six top-level groups,
//      Illustrator layers named "1".."6" (they export as id="_x31_".."_x36_"),
//      ordered darkest (1) -> lightest (6).
//   2. Optionally add art/<id>/line.svg — the line work drawn on top. Paths
//      should carry pathLength="1" (added automatically if missing). If the
//      file is absent the demo simply skips the line-drawing phase.
//   3. Add an entry below. <id> must be lowercase letters/digits/hyphens.
//
// Entry fields:
//   id     (required) folder name under art/
//   title  (required) shown in the HUD and switcher
//   book   (optional) book name for the switcher + completion card
//   cover  (optional) e.g. "covers/chromatrix.jpg" — falls back to a lettered tile
//   buy    (optional) URL for the "Get the book" link on the completion card
//   credit (optional) overrides the default "Chromatrix · by Thomas Pavitte"

window.CHROMATRIX_MANIFEST = [
  { id: "masterpiece-1", title: "Masterpiece 1", book: "Chromatrix" }
];
