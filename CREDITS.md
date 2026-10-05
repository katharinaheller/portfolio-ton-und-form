# Credits and provenance — TON & FORM

Portfolio-Demoprojekt – Unternehmen und Geschäftsdaten sind fiktiv.

## Foundation and modifications

Adapted GreatStackDev/gocart (8366667a730c700a63b020f3e8c493cac449bbe1), MIT © 2025 GreatStackDev: lib/features/cart/cartSlice.js action/state model reimplemented and hardened in src/lib/cart.ts. Replaced product-id quantity dictionary/total counter with validated product-variant lines, a pure typed reducer, derived totals, integer cents and bounded quantities. Replaced Redux with React reducer/context for this small catalog. Replaced all multi-vendor pages, identities, images, account flows and styling. Next static catalog + client cart was chosen to preserve product HTML/SEO without operating a transactional backend.

Exact upstream MIT texts are retained in `licenses/` for studied/adapted priority repositories. The dependency inventory is in `DEPENDENCY_LICENSES.md`. Package manager lockfiles pin the inspected dependency graph.

## Typefaces

DM Serif Display + Instrument Sans — Adobe Systems / Google LLC; Instrument Project Authors. Source: https://github.com/googlefonts/dm-fonts ; https://github.com/Instrument/instrument-sans. Delivered by the corresponding Fontsource npm packages, licensed SIL Open Font License 1.1. Complete notices are retained in `licenses/*-OFL.txt`. Latin WOFF2 includes German umlauts/ß; fonts are locally served. Variable faces use one file; DM Serif Display uses only its regular weight. No Google Fonts requests.

## Media and original design

Five original AI-generated images: collection still life plus cup, bowl, vase and plate. Three local responsive widths. Variant sizes share a disclosed illustrative product study. These are not photographs of real purchasable products.

All raster concept imagery was created for this project with the built-in image generation tool on 2026-10-05. Prompt records are in `ASSET_PROVENANCE.json`. These generated outputs are not CC0 stock photographs and are not claimed to be copyright-exclusive. No third-party photograph or image-source license was inferred from a source-code license. The assets were selected, visually reviewed, converted to responsive WebP and shipped locally. Original generations were retained in the generation archive. OpenAI terms governing the generation service apply to the outputs; no separate stock license or paid stock source was used.

Logos, SVG favicons, CSS graphic elements and the social card are original project-specific code-native work. Icons are original simple SVG/CSS or generic Unicode symbols, not an imported icon library. No audio, external video, commercial template, copied brand asset or unlicensed texture is included.

## Libraries

Runtime/build libraries and exact versions/licenses are listed in `DEPENDENCY_LICENSES.md`. Three.js, Astro, Eleventy, Next.js, React, Radix UI and glTF Transform are used only where present in this project's package.json. Retained direct dependency notices are in `licenses/dependencies/`. Test tooling includes Playwright (Apache-2.0) and ESLint/TypeScript-related packages under their package licenses. No licensing guarantee is made beyond the inspected files and recorded provenance.

