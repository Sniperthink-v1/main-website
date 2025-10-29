# Testing and Running Guide

Complete guide for building, testing, and running the Sniperthink Unified Website locally and in production.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Initial Setup](#initial-setup)
- [Development Server](#development-server)
- [Building the Project](#building-the-project)
- [Production Testing](#production-testing)
- [Testing Individual Routes](#testing-individual-routes)
- [Manual Testing Checklist](#manual-testing-checklist)
- [Performance Testing](#performance-testing)
- [Troubleshooting](#troubleshooting)
- [Advanced Testing](#advanced-testing)

---

## Prerequisites

### Required Software

Ensure you have the following installed:

| Software | Minimum Version | Recommended | Check Command |
|----------|----------------|-------------|---------------|
| **Node.js** | 18.0.0 | 20.x or later | `node --version` |
| **pnpm** | 8.0.0 | Latest | `pnpm --version` |
| **Git** | 2.0.0 | Latest | `git --version` |

### Install pnpm (if not installed)

```powershell
# Windows PowerShell
npm install -g pnpm

# Verify installation
pnpm --version
```

### System Requirements

- **RAM:** 4GB minimum, 8GB recommended
- **Disk Space:** 2GB free space
- **OS:** Windows 10/11, macOS, or Linux

---

## Initial Setup

### 1. Clone the Repository

```powershell
# Navigate to your workspace
cd d:\GitHub

# Clone the repository (if not already cloned)
git clone https://github.com/SniperThink/6-layer-engine-landing-page-in-use-with-vercel.git ProductsMonoWebsite

# Navigate to project directory
cd ProductsMonoWebsite
```

### 2. Install Dependencies

```powershell
# Install all dependencies using pnpm
pnpm install

# Alternative: Use npm (slower)
npm install
```

**Expected Output:**
```
Progress: resolved XXX, reused XXX, downloaded XX, added XXX
Done in XXs
```

### 3. Verify Installation

```powershell
# Check if node_modules exists
ls node_modules

# Verify Next.js installation
pnpm next --version
```

---

## Development Server

### Start Development Mode

```powershell
# Start the development server
pnpm dev

# Alternative command
npm run dev
```

**Expected Output:**
```
▲ Next.js 15.5.2
- Local:        http://localhost:3000
- Environments: .env.local

✓ Ready in 2.5s
```

### Access the Application

Open your browser and navigate to:

- **Main Website:** [http://localhost:3000](http://localhost:3000)
- **6 Layers Intelligence:** [http://localhost:3000/6LayerLP](http://localhost:3000/6LayerLP)
- **AI Agents:** [http://localhost:3000/aiagents](http://localhost:3000/aiagents)

### Development Features

The dev server includes:
- ✅ **Hot Module Replacement (HMR)** - Changes reflect instantly
- ✅ **Error Overlay** - Visual error messages in browser
- ✅ **Fast Refresh** - Preserves component state during edits
- ✅ **TypeScript Checking** - Real-time type validation

### Stop Development Server

Press `Ctrl + C` in the terminal to stop the server.

---

## Building the Project

### Production Build

Create an optimized production build:

```powershell
# Build the project
pnpm build

# Alternative
npm run build
```

**Build Process:**
```
1. ✓ Creating an optimized production build
2. ✓ Compiled successfully
3. ✓ Linting and checking validity of types
4. ✓ Collecting page data
5. ✓ Generating static pages (XX/XX)
6. ✓ Finalizing page optimization

Route (app)                                Size     First Load JS
┌ ○ /                                      XXX kB         XXX kB
├ ○ /6LayerLP                             XXX kB         XXX kB
└ ○ /aiagents                              XXX kB         XXX kB
```

### Build Output Analysis

After building, check the `.next` folder:

```powershell
# List build output
ls .next

# Expected directories:
# - cache/       Build cache
# - server/      Server-side code
# - static/      Static assets
# - standalone/  (if enabled)
```

### Build Validation

Check for build warnings or errors:

- ✅ **Success:** "Compiled successfully"
- ⚠️ **Warnings:** Review but build continues
- ❌ **Errors:** Build fails - must fix before proceeding

---

## Production Testing

### Run Production Build Locally

Test the production build before deployment:

```powershell
# Start production server
pnpm start

# Alternative
npm run start
```

**Expected Output:**
```
▲ Next.js 15.5.2
- Local:        http://localhost:3000

✓ Ready in XXXms
```

### Production vs Development Differences

| Feature | Development | Production |
|---------|-------------|------------|
| **Speed** | Slower (unoptimized) | Fast (optimized) |
| **Error Messages** | Detailed | Minimal |
| **Hot Reload** | Yes | No |
| **Bundle Size** | Large | Minified |
| **Source Maps** | Included | Optional |

---

## Testing Individual Routes

### Main Website (`/`)

```powershell
# Start dev server
pnpm dev
```

**Test Checklist:**
- [ ] Page loads without errors
- [ ] Hero section displays correctly
- [ ] Navigation menu works
- [ ] "Start Scaling" buttons navigate to sub-apps
- [ ] Products section visible
- [ ] Footer loads properly
- [ ] Images and animations render

**Browser Console Check:**
```javascript
// Open DevTools (F12) and run:
console.log('Main page loaded:', window.location.pathname);
```

### 6 Layers Intelligence (`/6LayerLP`)

Visit: [http://localhost:3000/6LayerLP](http://localhost:3000/6LayerLP)

**Test Checklist:**
- [ ] Page loads independently
- [ ] Unique styling applies (not main site styles)
- [ ] Interactive elements work
- [ ] FAQs accordion functions
- [ ] Features display correctly
- [ ] Process steps visible
- [ ] Testimonials carousel works

### AI Agents (`/aiagents`)

Visit: [http://localhost:3000/aiagents](http://localhost:3000/aiagents)

**Test Checklist:**
- [ ] Page loads independently
- [ ] Unique layout renders
- [ ] Voice agent interface visible
- [ ] Chat components functional
- [ ] Responsive design works
- [ ] Navigation back to main site works

---

## Manual Testing Checklist

### Cross-Browser Testing

Test on multiple browsers:

| Browser | Version | Status |
|---------|---------|--------|
| **Chrome** | Latest | [ ] Tested |
| **Firefox** | Latest | [ ] Tested |
| **Edge** | Latest | [ ] Tested |
| **Safari** | Latest | [ ] Tested (macOS) |

### Responsive Design Testing

Test on different screen sizes:

```powershell
# Open DevTools (F12) > Toggle Device Toolbar (Ctrl+Shift+M)
```

| Device | Resolution | Status |
|--------|------------|--------|
| **Mobile** | 375x667 | [ ] Tested |
| **Tablet** | 768x1024 | [ ] Tested |
| **Laptop** | 1366x768 | [ ] Tested |
| **Desktop** | 1920x1080 | [ ] Tested |

### Navigation Testing

- [ ] Home → 6 Layers (via button)
- [ ] Home → AI Agents (via button)
- [ ] Direct URL access to `/6LayerLP`
- [ ] Direct URL access to `/aiagents`
- [ ] Back button functionality
- [ ] Footer links work
- [ ] Header navigation functional

### Visual Regression Testing

Compare pages visually:

1. Take screenshots of each route
2. Compare with previous version
3. Check for layout shifts
4. Verify image loading
5. Confirm animation smoothness

### Accessibility Testing

```powershell
# Install Lighthouse CLI (optional)
npm install -g lighthouse

# Run accessibility audit
lighthouse http://localhost:3000 --only-categories=accessibility --view
```

**Manual Checks:**
- [ ] Keyboard navigation works (Tab, Enter, Esc)
- [ ] Focus indicators visible
- [ ] Alt text on images
- [ ] Proper heading hierarchy
- [ ] Color contrast sufficient
- [ ] Screen reader compatibility

---

## Performance Testing

### Lighthouse Performance Audit

```powershell
# Run full Lighthouse audit
lighthouse http://localhost:3000 --view

# Run specific categories
lighthouse http://localhost:3000 --only-categories=performance,seo --view
```

**Target Scores:**
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 90+
- **SEO:** 95+

### Bundle Size Analysis

```powershell
# Analyze bundle size
pnpm build

# Review output in terminal
# Look for: "First Load JS" sizes
```

**Size Guidelines:**
- **First Load JS:** < 200 KB (good), < 100 KB (excellent)
- **Individual Pages:** < 50 KB additional per route

### Network Performance

Using Browser DevTools:

1. Open DevTools (F12)
2. Go to **Network** tab
3. Reload page
4. Check metrics:
   - [ ] Total page size < 2 MB
   - [ ] Number of requests < 50
   - [ ] DOMContentLoaded < 1.5s
   - [ ] Load time < 3s

### Memory Leaks

```javascript
// Open DevTools > Performance > Memory
// 1. Take heap snapshot
// 2. Navigate between routes
// 3. Take another snapshot
// 4. Compare - memory should be released
```

---

## Troubleshooting

### Build Errors

#### Error: "Module not found"

```powershell
# Solution 1: Clear cache and reinstall
rm -r node_modules
rm pnpm-lock.yaml
pnpm install

# Solution 2: Clear Next.js cache
rm -r .next
pnpm build
```

#### Error: "TypeScript errors"

The project has `ignoreBuildErrors: true` in `next.config.mjs`. To see actual errors:

```powershell
# Run TypeScript compiler
npx tsc --noEmit

# Fix errors shown, then rebuild
```

#### Error: "Port 3000 already in use"

```powershell
# Solution 1: Use different port
pnpm dev --port 3001

# Solution 2: Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Runtime Errors

#### Error: "Hydration failed"

This occurs when server HTML differs from client HTML.

**Common Causes:**
- Conditional rendering based on `window` object
- Date/time formatting differences
- Random values in SSR

**Solution:**
```tsx
// Use useEffect for client-only code
import { useEffect, useState } from 'react';

function Component() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  return <div>{/* Client-only content */}</div>;
}
```

#### Error: Images not loading

```powershell
# Verify image paths
ls public/images

# Images should be referenced as:
# /images/filename.jpg (not ../public/images/)
```

### Performance Issues

#### Slow Development Server

```powershell
# Clear Next.js cache
rm -r .next

# Reduce watched files (already configured in next.config.mjs)
# Check webpack.watchOptions in next.config.mjs
```

#### Large Bundle Size

```powershell
# Analyze what's causing large bundles
pnpm build

# Consider:
# 1. Dynamic imports for large components
# 2. Remove unused dependencies
# 3. Optimize images
```

---

## Advanced Testing

### Unit Testing Setup (Optional)

If you want to add unit tests:

```powershell
# Install testing dependencies
pnpm add -D jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom

# Create jest.config.js
```

**jest.config.js:**
```javascript
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};
```

**jest.setup.js:**
```javascript
import '@testing-library/jest-dom';
```

**Add test script to package.json:**
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

### End-to-End Testing with Playwright (Optional)

```powershell
# Install Playwright
pnpm add -D @playwright/test

# Initialize Playwright
pnpm dlx playwright install

# Create playwright.config.ts
```

**Example E2E Test:**
```typescript
// tests/navigation.spec.ts
import { test, expect } from '@playwright/test';

test('navigate to 6LayerLP', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('text=Start Scaling'); // Button to 6LayerLP
  await expect(page).toHaveURL(/.*6LayerLP/);
});
```

### Load Testing

For high-traffic testing:

```powershell
# Install k6 (load testing tool)
# Visit: https://k6.io/docs/get-started/installation/

# Create load test script
```

**load-test.js:**
```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10, // 10 virtual users
  duration: '30s',
};

export default function () {
  let res = http.get('http://localhost:3000');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
```

```powershell
# Run load test
k6 run load-test.js
```

---

## Environment Variables Testing

### Local Environment Variables

Create a `.env.local` file for local testing:

```bash
# .env.local (not committed to git)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# Add your test variables here
```

### Test Environment Variables

```powershell
# Verify variables are loaded
pnpm dev

# In browser console:
console.log(process.env.NEXT_PUBLIC_SITE_URL);
```

---

## Continuous Integration Testing

### GitHub Actions Workflow (Optional)

Create `.github/workflows/test.yml`:

```yaml
name: Build and Test

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'
        
    - uses: pnpm/action-setup@v2
      with:
        version: 8
        
    - name: Install dependencies
      run: pnpm install
      
    - name: Build
      run: pnpm build
      
    - name: Run tests (if available)
      run: pnpm test
```

---

## Quick Reference Commands

### Development Workflow

```powershell
# Fresh start
pnpm install
pnpm dev

# Production build
pnpm build
pnpm start

# Clean and rebuild
rm -r .next, node_modules
pnpm install
pnpm build

# Check for updates
pnpm outdated
pnpm update
```

### Debugging Commands

```powershell
# Check Node version
node --version

# Check pnpm version
pnpm --version

# List all scripts
pnpm run

# Verbose build output
pnpm build --debug

# Check Next.js info
pnpm next info
```

### Port Management

```powershell
# Find process on port
netstat -ano | findstr :3000

# Kill process (replace PID)
taskkill /PID <PID> /F

# Use alternative port
pnpm dev --port 3001
```

---

## Pre-Deployment Testing Checklist

Before deploying to Vercel, verify:

### ✅ Build Successfully
- [ ] `pnpm build` completes without errors
- [ ] All routes compile successfully
- [ ] No critical warnings in output

### ✅ All Routes Work
- [ ] `/` loads correctly
- [ ] `/6LayerLP` loads correctly
- [ ] `/aiagents` loads correctly
- [ ] Navigation between routes works

### ✅ Performance Metrics
- [ ] Lighthouse score > 90
- [ ] First Load JS < 200 KB per route
- [ ] No memory leaks detected

### ✅ Visual Testing
- [ ] All images load
- [ ] Animations work smoothly
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Cross-browser compatibility confirmed

### ✅ Functionality
- [ ] All buttons clickable
- [ ] Forms submit correctly (if any)
- [ ] Links navigate properly
- [ ] No console errors

### ✅ SEO & Accessibility
- [ ] Meta tags present
- [ ] Alt text on images
- [ ] Proper heading structure
- [ ] Keyboard navigation works

---

## Monitoring Production

After deployment to Vercel:

### Check Live Site

```powershell
# Test production URLs
curl https://your-site.vercel.app
curl https://your-site.vercel.app/6LayerLP
curl https://your-site.vercel.app/aiagents
```

### Monitor Performance

- Use Vercel Analytics (if enabled)
- Check Vercel Dashboard for errors
- Review function logs for issues
- Monitor Core Web Vitals

---

## Getting Help

### Common Resources

- 📘 [Next.js Documentation](https://nextjs.org/docs)
- 📘 [pnpm Documentation](https://pnpm.io)
- 💬 [Next.js Discussions](https://github.com/vercel/next.js/discussions)
- 🐛 [Report Issues](https://github.com/SniperThink/6-layer-engine-landing-page-in-use-with-vercel/issues)

### Debug Checklist

When encountering issues:

1. ✅ Check error message in terminal
2. ✅ Review browser console (F12)
3. ✅ Clear cache and rebuild
4. ✅ Verify Node/pnpm versions
5. ✅ Check for typos in file paths
6. ✅ Restart development server
7. ✅ Search for similar issues online

---

**Last Updated:** October 29, 2025

**Project Repository:** [6-layer-engine-landing-page-in-use-with-vercel](https://github.com/SniperThink/6-layer-engine-landing-page-in-use-with-vercel)

---

*Happy Testing! 🧪*
