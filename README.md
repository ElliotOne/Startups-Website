# XOREN Startups Hub

This is the public hub for `https://startups.xoren.co.uk/`.

The custom domain should be connected to this hub project only. Each startup stays deployed as its own Vercel project and is mounted under a path by `vercel.json` rewrites.

## Current paths

- `/codebase-map` -> Codebase Map
- `/rebrain` -> Rebrain

## Vercel setup

1. Create a new Vercel project from this directory.
2. Attach `startups.xoren.co.uk` to the hub project.
3. Replace the upstream `.vercel.app` destinations in `vercel.json` if your Vercel project names are different.
4. Make sure each startup app exposes a matching App Router path.

Codebase Map:

```text
app/codebase-map/page.tsx
```

Rebrain:

```text
app/rebrain/page.tsx
```

## Commands

```bash
npm install
npm run dev
npm run build
```
