# Migration Guide

This release introduces package entrypoint changes to support modern Next.js usage (including App Router and Server Components).

## Breaking Changes

1. `@auspices/eos/server` is now **server-safe only**.
2. UI components must be imported from `@auspices/eos/client`.
3. Package `exports` are now explicit, so deep imports outside exported subpaths may fail.
4. The root import (`@auspices/eos`) maps to the client surface.

## Import Matrix

1. `@auspices/eos/client`
   Use for components, hooks, providers, and other client-oriented UI APIs.
2. `@auspices/eos/server`
   Use for server-safe utilities and tokens only (for example `THEME`, color helpers, pure utils).
3. `@auspices/eos/theme`
   Use for theme primitives directly.

## Before / After

### 1) Server component importing UI from `server` entrypoint

Before:

```tsx
import { Box, Tag } from "@auspices/eos/server";
```

After:

```tsx
import { Box, Tag } from "@auspices/eos/client";
```

### 2) Server component importing tokens

Before:

```tsx
import { THEME } from "@auspices/eos";
```

After:

```tsx
import { THEME } from "@auspices/eos/server";
// or
import { THEME } from "@auspices/eos/theme";
```

### 3) Root imports for UI

Before:

```tsx
import { Dropdown, Modal } from "@auspices/eos";
```

After (recommended explicitness):

```tsx
import { Dropdown, Modal } from "@auspices/eos/client";
```

## Common Errors

1. `createContext is not a function` during Next.js server build/render:
   This usually means a styled-components UI module was imported from `@auspices/eos/server`. Move that import to `@auspices/eos/client`.
2. `Module not found` for deep package paths:
   Switch to exported entrypoints: `@auspices/eos/client`, `@auspices/eos/server`, `@auspices/eos/theme`.

## Upgrade Checklist

1. Replace UI imports from `@auspices/eos/server` with `@auspices/eos/client`.
2. Move server-only token/util imports to `@auspices/eos/server` (or `@auspices/eos/theme`).
3. Remove unsupported deep imports.
4. Run your Next.js production build to validate boundaries (`next build`).
