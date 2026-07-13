---
'@web3icons/core': patch
---

emit `.d.ts` declarations for deep SVG imports (e.g. `@web3icons/core/svgs/tokens/branded/BTC.svg.js`), add missing `./svgs/exchanges/*` to package exports, and point the `types` field at the actual `dist/index.d.ts` (fixes #194)
