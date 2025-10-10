# SniperThink Product Websites Monorepo

This monorepo contains multiple Next.js applications that are merged into a single deployment.

## Structure

```
SniperthinkProductWebsites/
├── main-website1/          # Main website (served at sniperthink.com root)
├── aiagents/               # AI Agents product (served at /aiagents)
├── product-*/              # Additional products (served at /product-name)
├── scripts/
│   └── merge-products.js   # Build script that merges all products
├── package.json            # Root workspace configuration
└── vercel.json             # Vercel deployment config
```

## How It Works

1. **Development**: Each product folder is a standalone Next.js app that can be developed independently
2. **Build**: The build script (`merge-products.js`) copies all product apps into `main-website1` before building
3. **Deployment**: Vercel builds the merged `main-website1` app containing all products

## Adding a New Product

1. Create a new folder (e.g., `product-name/`)
2. Initialize it as a Next.js app with its own `package.json`
3. Add it to the `productsToMerge` array in `scripts/merge-products.js`:
   ```javascript
   {
     name: 'product-name',
     sourceFolder: path.join(repoRoot, 'product-name'),
     targetPath: 'product-name' // URL path: /product-name
   }
   ```
4. (Optional) Add a route in `vercel.json` if needed
5. Run `pnpm install` in the root to add it to the workspace

## Commands

```bash
# Install all dependencies
pnpm install

# Develop main website
pnpm dev

# Develop aiagents product
pnpm dev:aiagents

# Merge products (without building)
pnpm run merge

# Build for production (merges + builds)
pnpm build
```

## Deployment

The repo is configured for Vercel deployment:

- Vercel runs the root `package.json` build script
- This merges all products into `main-website1/app/{product-name}/`
- The final build is a single Next.js app with all products accessible at their respective paths

## Routes

- `/` → Main website (from `main-website1/`)
- `/aiagents` → AI Agents product (from `aiagents/`)
- Additional products at their configured target paths

## Important Notes

### Version Compatibility

All product apps should use compatible Next.js and React versions. Currently:

- Check each `package.json` for version alignment
- Recommended: Use the same major versions across all products

### Before Deploying

1. Test locally: `pnpm build && pnpm --filter main-website1 start`
2. Verify all routes work: `http://localhost:3000/`, `http://localhost:3000/aiagents`, etc.
3. Check for import/dependency conflicts
