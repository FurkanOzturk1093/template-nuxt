# DeployWise — Nuxt Template

A production-ready Nuxt 3 starter, pre-configured for one-click deployment to your VPS with [DeployWise](https://deploywise.dev).

## What's Included

- Nuxt 3 with auto-imports and TypeScript
- SSR and static generation support
- Optimized for PM2 + Nginx deployment

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy with DeployWise

1. Push this repo to GitHub
2. Open [deploywise.dev/dashboard](https://deploywise.dev/dashboard)
3. Add your VPS → Create a project → Select this repo
4. Click **Deploy**

DeployWise automatically runs `nuxt build`, starts with PM2 (`.output/server/index.mjs`), configures Nginx, and issues a free SSL certificate.

## Project Structure

```
├── app.vue           # Root component
├── nuxt.config.ts    # Nuxt configuration
├── public/           # Static assets
└── package.json
```

## Learn More

- [Deploy Nuxt to VPS Guide](https://deploywise.dev/guides/deploy-nuxt-to-vps)
- [DeployWise Docs](https://deploywise.dev/docs)
- [Nuxt Documentation](https://nuxt.com/docs)

---

Deployed with [DeployWise](https://deploywise.dev) — free, open source.
