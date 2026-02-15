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

### Local Example App

```bash
yarn install
yarn workspace eos-next-minimal dev
```

For production validation:

```bash
yarn verify:release
```
