# eos next pages + next-themes

Minimal Next.js pages-router app demonstrating `@auspices/eos` controlled theming with `next-themes`.

## Run

```bash
yarn workspace eos-next-pages-next-themes dev
```

## What it validates

- `next-themes` is the source of truth (`data-theme` on `<html>`).
- eos receives controlled `scheme` + `setScheme` from `next-themes`.
- theme-dependent rendering is deferred until client mount (`next-themes` hydration-safe pattern).
- styled-components SSR is configured in `pages/_document.tsx`.
- no hydration mismatch warnings when the theme is dark on initial load.
- single React/styled-components runtime is enforced via aliases in `next.config.mjs` (important for workspace development).
