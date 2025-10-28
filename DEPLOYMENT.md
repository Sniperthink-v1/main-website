# Vercel Deployment Guide

This guide provides step-by-step instructions for deploying the Sniperthink Unified Website to Vercel.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Project Overview](#project-overview)
- [Deployment Methods](#deployment-methods)
  - [Method 1: Deploy via Vercel Dashboard (Recommended)](#method-1-deploy-via-vercel-dashboard-recommended)
  - [Method 2: Deploy via Vercel CLI](#method-2-deploy-via-vercel-cli)
- [Configuration](#configuration)
- [Environment Variables](#environment-variables)
- [Custom Domain Setup](#custom-domain-setup)
- [Post-Deployment](#post-deployment)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before deploying, ensure you have:

- ✅ A [GitHub](https://github.com) account with this repository pushed
- ✅ A [Vercel](https://vercel.com) account (sign up with GitHub for easier integration)
- ✅ Node.js 18+ installed locally (for testing)
- ✅ pnpm installed (or npm/yarn as fallback)

---

## Project Overview

This is a unified Next.js 15 application containing three products:

| Product | Route | Description |
|---------|-------|-------------|
| **Main Website** | `/` | Root landing page |
| **6 Layers Intelligence** | `/6LayersLP` | Intelligence Growth Engine |
| **AI Agents** | `/aiagents` | AI Chat + Voice Agents |

**Tech Stack:**
- Framework: Next.js 15.5.2
- React: 19
- TypeScript: 5
- Styling: Tailwind CSS
- Package Manager: pnpm

---

## Deployment Methods

### Method 1: Deploy via Vercel Dashboard (Recommended)

This is the easiest and most straightforward method.

#### Step 1: Push to GitHub

```bash
# Ensure all changes are committed
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

#### Step 2: Import Project to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Select **"Import Git Repository"**
4. Choose your GitHub repository: `6-layer-engine-landing-page-in-use-with-vercel`
5. Click **"Import"**

#### Step 3: Configure Project Settings

Vercel will auto-detect Next.js. Verify these settings:

| Setting | Value |
|---------|-------|
| **Framework Preset** | Next.js |
| **Root Directory** | `./` (root) |
| **Build Command** | `next build` (auto-detected) |
| **Output Directory** | `.next` (auto-detected) |
| **Install Command** | `pnpm install` |
| **Node Version** | 18.x or higher |

#### Step 4: Deploy

1. Click **"Deploy"**
2. Wait 2-5 minutes for the build to complete
3. Your site will be live at `https://your-project-name.vercel.app`

---

### Method 2: Deploy via Vercel CLI

For advanced users who prefer command-line deployment.

#### Step 1: Install Vercel CLI

```bash
# Install globally
npm i -g vercel

# Or use pnpm
pnpm add -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate.

#### Step 3: Deploy

```bash
# Navigate to project directory
cd d:\GitHub\ProductsMonoWebsite

# Deploy to production
vercel --prod
```

Follow the CLI prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account/team
- **Link to existing project?** → No (first time) or Yes (subsequent deploys)
- **What's your project's name?** → Enter a name (e.g., `sniperthink-unified`)
- **In which directory is your code located?** → `./`

The CLI will automatically detect Next.js settings from `vercel.json`.

---

## Configuration

### vercel.json Configuration

Your project includes a `vercel.json` file with the following settings:

```json
{
  "buildCommand": "next build",
  "devCommand": "next dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "outputDirectory": ".next",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

**Key Points:**
- ✅ Uses `pnpm` as the package manager
- ✅ Configures rewrites for proper routing
- ✅ Optimized for Next.js framework

### next.config.mjs Settings

The project configuration includes:

```javascript
{
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [...],
    unoptimized: true
  }
}
```

**Note:** Consider removing `ignoreBuildErrors` for production to catch TypeScript issues.

---

## Environment Variables

If your application requires environment variables:

### Via Vercel Dashboard

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add variables:
   - **Key**: Variable name (e.g., `NEXT_PUBLIC_API_URL`)
   - **Value**: Variable value
   - **Environment**: Select Production, Preview, and/or Development

### Via Vercel CLI

```bash
# Add a single variable
vercel env add NEXT_PUBLIC_API_URL production

# Pull environment variables locally
vercel env pull .env.local
```

### Common Environment Variables

```bash
# Example .env.local (not committed to git)
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# Add any API keys or secrets here
```

---

## Custom Domain Setup

### Add a Custom Domain

1. In Vercel Dashboard, go to your project
2. Navigate to **Settings** → **Domains**
3. Click **"Add"**
4. Enter your domain (e.g., `sniperthink.com`)
5. Follow the DNS configuration instructions

### DNS Configuration

You'll need to add records to your domain registrar:

**Option A: Use Vercel Nameservers (Recommended)**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Option B: Use A and CNAME Records**
```
A Record:
  Name: @
  Value: 76.76.21.21

CNAME Record:
  Name: www
  Value: cname.vercel-dns.com
```

### SSL Certificate

Vercel automatically provisions SSL certificates for all domains. No additional configuration needed! 🎉

---

## Post-Deployment

### Verify Deployment

Check that all routes work correctly:

- ✅ Root: `https://your-site.vercel.app/`
- ✅ 6 Layers: `https://your-site.vercel.app/6LayersLP`
- ✅ AI Agents: `https://your-site.vercel.app/aiagents`

### Test Navigation

1. Visit the main page
2. Click "Start Scaling" buttons in the Products section
3. Verify navigation to `/6LayersLP` and `/aiagents`
4. Check responsive design on mobile devices

### Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Edge caching
- ✅ Image optimization
- ✅ Compression (gzip/brotli)

### Analytics (Optional)

Enable Vercel Analytics:

1. Go to your project dashboard
2. Navigate to **Analytics** tab
3. Click **"Enable Vercel Analytics"**
4. Add the package to your project:

```bash
pnpm add @vercel/analytics
```

Update `app/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## Troubleshooting

### Build Fails

**Problem:** Build fails with TypeScript errors

**Solution:** The config has `ignoreBuildErrors: true`, but you can fix issues by running locally:

```bash
pnpm build
```

Review errors and fix them before deploying.

---

**Problem:** Build fails with dependency issues

**Solution:**

```bash
# Clear lock file and reinstall
rm pnpm-lock.yaml
pnpm install
git add pnpm-lock.yaml
git commit -m "Update dependencies"
git push
```

---

### Deployment Timeout

**Problem:** Build takes too long and times out

**Solution:** 
- Check if you have large files in the repository
- Ensure `.gitignore` excludes `node_modules/`, `.next/`, etc.
- Consider upgrading to Vercel Pro for longer build times

---

### Routes Not Working

**Problem:** `/6LayersLP` or `/aiagents` return 404

**Solution:**
- Verify the directory structure matches: `app/6LayersLP/` and `app/aiagents/`
- Ensure each has a `page.tsx` file
- Check `vercel.json` rewrites configuration
- Redeploy after fixing

---

### Images Not Loading

**Problem:** Images show broken or don't load

**Solution:**
- Ensure images are in `/public/images/` directory
- Use correct paths: `/images/filename.jpg` (not `../public/images/`)
- Check `next.config.mjs` image configuration
- For external images, add domains to `remotePatterns`

---

### Environment Variables Not Working

**Problem:** Environment variables are undefined

**Solution:**
- Public variables must start with `NEXT_PUBLIC_`
- Redeploy after adding new environment variables
- Check variable names for typos
- Verify variables are set for the correct environment (Production/Preview)

---

## Continuous Deployment

### Automatic Deployments

Once connected to GitHub, Vercel automatically:

- 🚀 Deploys every push to `main` branch → **Production**
- 🔍 Creates preview deployments for pull requests
- 📧 Sends email notifications on deployment status

### Manual Redeployment

To manually redeploy without code changes:

1. Go to Vercel Dashboard
2. Navigate to your project
3. Click **"Deployments"** tab
4. Click **"..."** on the latest deployment
5. Select **"Redeploy"**

Or via CLI:

```bash
vercel --prod --force
```

---

## Monitoring & Logs

### View Deployment Logs

1. Go to your project in Vercel Dashboard
2. Click on a deployment
3. View **Build Logs** and **Function Logs**

### Real-time Logs (CLI)

```bash
# Stream production logs
vercel logs your-project-name --follow

# View specific deployment logs
vercel logs [deployment-url]
```

---

## Rollback

If a deployment causes issues:

1. Go to **Deployments** in Vercel Dashboard
2. Find a previous working deployment
3. Click **"..."** → **"Promote to Production"**

This instantly reverts your site to the selected deployment.

---

## Additional Resources

- 📘 [Vercel Documentation](https://vercel.com/docs)
- 📘 [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- 📘 [Vercel CLI Reference](https://vercel.com/docs/cli)
- 💬 [Vercel Community](https://github.com/vercel/vercel/discussions)

---

## Quick Reference Commands

```bash
# Local development
pnpm dev                    # Start dev server
pnpm build                  # Test production build
pnpm start                  # Run production locally

# Vercel CLI
vercel                      # Deploy to preview
vercel --prod              # Deploy to production
vercel logs --follow       # Stream logs
vercel domains add [domain] # Add custom domain
vercel env pull            # Download env variables
vercel rollback            # Rollback to previous deployment

# Git workflow
git add .
git commit -m "Your message"
git push origin main       # Triggers automatic deployment
```

---

## Support

For deployment issues:

1. Check [Vercel Status](https://vercel-status.com)
2. Review build logs in Vercel Dashboard
3. Search [Vercel Discussions](https://github.com/vercel/vercel/discussions)
4. Contact [Vercel Support](https://vercel.com/support)

---

**Last Updated:** October 29, 2025

**Project Repository:** [6-layer-engine-landing-page-in-use-with-vercel](https://github.com/SniperThink/6-layer-engine-landing-page-in-use-with-vercel)

**Deployment Status:** [![Vercel](https://vercelbadge.vercel.app/api/[your-username]/[your-project])](https://vercel.com)

---

*Happy Deploying! 🚀*
