# Monorepo Deployment Guide

## Current Issue: Products Have Identical Structure

Both `main-website1` and `6LayerLP` use the same component/folder structure (`/app/components`, `/app/css`, etc.), which causes conflicts when merging.

## Solution Options

### Option 1: Keep Products Completely Separate (Recommended for Now)

Deploy each product as a separate Vercel project:

1. **Main Website (sniperthink.com)**
   - Vercel Project 1: Points to `main-website1` folder
   - Root domain: `sniperthink.com`

2. **6LayerLP Product (sniperthink.com/6LayerLP OR 6layerlp.sniperthink.com)**
   - Vercel Project 2: Points to `6LayerLP` folder
   - Subdomain: `6layerlp.sniperthink.com` OR
   - Use Vercel rewrites in Project 1 to forward `/6LayerLP/*` → Project 2 URL

**Setup Steps:**
1. Create two Vercel projects from the same GitHub repo
2. Project 1: Set root directory to `main-website1`
3. Project 2: Set root directory to `6LayerLP`
4. (Optional) Add rewrite in main website's `vercel.json`:
   ```json
   {
     "rewrites": [
       {
         "source": "/6LayerLP/:path*",
         "destination": "https://6layerlp.sniperthink.com/:path*"
       }
     ]
   }
   ```

### Option 2: True Monorepo Merge (Requires Refactoring)

To merge into a single deployment, you need to:

1. **Rename/namespace one product's components**
   - Keep `main-website1` as-is (root site)
   - Refactor `6LayerLP` to use namespaced imports:
     - `@/app/components` → `@/app/6LayerLP/components`
     - `@/data/faqs` → `@/data/6LayerLP/faqs`
     - etc.

2. **Update all imports in 6LayerLP**
   - Find/replace in 6LayerLP files:
     - `from "@/app/components` → `from "@/app/6LayerLP/components`
     - `from "@/app/css` → `from "@/app/6LayerLP/css`
     - `from "@/data` → `from "@/data/6LayerLP`
     - `from "@/lib` → `from "@/lib/6LayerLP`
     - etc.

3. **Update the merge script**
   - Keep it as-is (already copies to `/app/6LayerLP/`)
   - But also copy dependencies to namespaced folders:
     - `lib` → `lib/6LayerLP`
     - `data` → `data/6LayerLP`
     - `hooks` → `hooks/6LayerLP`

4. **Update `main-website1/tsconfig.json`**
   ```json
   {
     "compilerOptions": {
       "paths": {
         "@/*": ["./*"],
         "@/6LayerLP/*": ["./6LayerLP/*"]
       }
     }
   }
   ```

## Current Monorepo Setup (Partial)

The current setup merges files but causes conflicts. Here's what happens:

1. Merge script copies:
   - `6LayerLP/app/*` → `main-website1/app/6LayerLP/*` ✓
   - `6LayerLP/public/*` → `main-website1/public/6LayerLP/*` ✓
   - `6LayerLP/lib/*` → `main-website1/lib/6LayerLP/*` ✓
   - (same for hooks, data, types, styles)

2. Problem:
   - 6LayerLP files import `@/app/components/...`
   - This looks for `main-website1/app/components/...`
   - But those are the MAIN WEBSITE components, not 6LayerLP components!

## Recommended Next Steps

**For immediate deployment:**
1. Use **Option 1** (separate Vercel projects)
2. Test that both sites work independently
3. Optionally set up rewrite/proxy for unified URL structure

**For long-term (single deployment):**
1. Choose one product to refactor (recommend: 6LayerLP)
2. Update all its imports to use namespaced paths
3. Test merge + build locally
4. Deploy as single Vercel project

## Commands

### Develop products independently:
```powershell
# Main website
cd main-website1
pnpm install
pnpm run dev

# 6LayerLP product
cd 6LayerLP
pnpm install
pnpm run dev
```

### Test merged build (if doing Option 2):
```powershell
# From repo root
pnpm install
pnpm run merge
pnpm run build
```

### Deploy to Vercel (Option 1 - separate projects):
1. Push to GitHub
2. In Vercel dashboard:
   - Create Project 1: Set root directory = `main-website1`
   - Create Project 2: Set root directory = `6LayerLP`
3. Both will deploy independently

## Files Modified

- `package.json` - Root workspace configuration
- `pnpm-workspace.yaml` - pnpm workspaces
- `scripts/merge-products.js` - Merge script
- `vercel.json` - Vercel config (points to root package.json)

## Current State

- ✅ Merge script works and copies files
- ✅ Build completes successfully
- ❌ `/` shows 6LayerLP instead of main-website1 (component conflict)
- ❌ Need to either: separate deployments OR refactor imports

## Questions?

Ask:
- Which deployment option do you prefer?
- Should we refactor 6LayerLP imports or keep separate?
- Do you want `/6LayerLP` path or subdomain?
