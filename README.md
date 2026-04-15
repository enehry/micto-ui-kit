# Inertia Pagination Registry

This repository is a focused `shadcn` registry for a single component:
`inertia-pagination`.

## Included

- `InertiaPagination` for Laravel and Inertia paginator link arrays.
- Minimal shadcn-style button and pagination primitives used by the component.
- A small preview page for local development.

## Commands

```bash
pnpm install
pnpm dev
pnpm lint
pnpm registry:build
```

## Install From Registry

```bash
pnpm dlx shadcn@latest add http://localhost:3000/r/inertia-pagination.json
npx shadcn@latest add http://localhost:3000/r/inertia-pagination.json
```

## Usage

```tsx
import { Link } from "@inertiajs/react";
import { InertiaPagination } from "@/components/inertia-pagination";

<InertiaPagination links={links} LinkComponent={Link} />;
```
