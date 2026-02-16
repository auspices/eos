# @auspices/eos

A React UI library

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![npm](https://img.shields.io/npm/v/@auspices/eos)](https://www.npmjs.com/package/@auspices/eos) [![CircleCI](https://dl.circleci.com/status-badge/img/gh/auspices/eos/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/auspices/eos/tree/master)

## Meta

- **State**: production

## Design Goals

Eos is designed for use in situations where it is desirable to minimize visual hierarchy. This results in the creation of user interfaces that rely on thoughtful composition for differentiation, rather than on the stylistic differences between components.

## Usage

- Migration notes for this release: [`MIGRATION.md`](./MIGRATION.md)
- Release checklist: [`RELEASE.md`](./RELEASE.md)

### Next.js App Router

- Use `@auspices/eos/client` for UI components (including when rendered from Server Components).
- Use `@auspices/eos/server` for server-safe utilities and theme tokens.

```tsx
// app/page.tsx (Server Component)
import { THEME } from "@auspices/eos/server";
import { Tag } from "@auspices/eos/client";
```

```tsx
"use client";

import { Dropdown, Modal, useConfirm } from "@auspices/eos/client";
```

### Theme Imports

- Import theme primitives from `@auspices/eos/theme`.

### Using eos with `next-themes` (controlled mode)

When your app theme is managed by `next-themes`, pass the resolved `light | dark`
scheme directly into `ThemerProvider`. This keeps eos and your app on the same
authoritative theme source and avoids mixed first paint.

```tsx
// pages/_app.tsx
import type { AppProps } from "next/app";
import React, { useEffect, useMemo, useState } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyles, ThemerProvider, useThemer } from "@auspices/eos/client";
import type { Scheme } from "@auspices/eos/theme";

const getSchemeFromDom = (): Scheme => {
  if (typeof document === "undefined") return "light";
  const fromAttribute = document.documentElement.getAttribute("data-theme");
  return fromAttribute === "dark" ? "dark" : "light";
};

const EosThemeBridge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [fallbackScheme] = useState<Scheme>(getSchemeFromDom);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scheme = useMemo<Scheme>(() => {
    if (resolvedTheme === "dark" || resolvedTheme === "light") return resolvedTheme;
    return fallbackScheme;
  }, [fallbackScheme, resolvedTheme]);

  if (!mounted) return null;

  return (
    <ThemerProvider scheme={scheme} setScheme={(nextScheme) => setTheme(nextScheme)}>
      <EosStyledThemeProvider>{children}</EosStyledThemeProvider>
    </ThemerProvider>
  );
};

const EosStyledThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useThemer();
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider attribute="data-theme" defaultTheme="system" enableSystem>
      <EosThemeBridge>
        <Component {...pageProps} />
      </EosThemeBridge>
    </NextThemesProvider>
  );
}
```

```tsx
// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html suppressHydrationWarning>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

Notes:
- In controlled mode, eos does not read or write local storage for scheme state.
- `next-themes` remains the only source of truth.
- Ensure the `scheme` prop is always a concrete `light` or `dark` value.
- Avoid rendering `useTheme()`-derived UI until client mount to prevent hydration mismatch.
- See `examples/next-pages-next-themes` for a complete pages-router SSR integration.

### Local Example App

```bash
yarn install
yarn workspace eos-next-minimal dev
yarn workspace eos-next-pages-next-themes dev
```

For production validation:

```bash
yarn verify:release
```
