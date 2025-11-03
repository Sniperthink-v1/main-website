Combine the three provided React apps—`main-website`, `6LayerLP`, and `aiagents`—into a single deployable React project. The resulting architecture should serve each sub-project at the following routes:

- `main-website` at: https://localhost:3000/
- `6LayerLP` at: https://localhost:3000/6LayerLP
- `aiagents` at: https://localhost:3000/aiagents

Requirements:

1. Integrate all provided folders so each app works independently, reachable at the specified routes above.
2. The 'start scaling' button in the `products` section of `main-website` must link to `/6LayerLP` and `/aiagents` using proper React Router navigation.
3. Use React Router v6 (or later) for nested route handling.
4. Ensure all static assets and internal routes within sub-apps work when accessed from their respective sub-paths.
5. Merge or re-structure `package.json`, dependencies, and scripts as needed to support a single build and serve process.
6. Ensure the project is production-ready and can be served locally as a single app using these routes.

**For Vercel deployment readiness:**

7. Add a `vercel.json` configuration file to ensure correct client-side routing and rewrites on Vercel (catch-all to `/index.html`).
8. Ensure that all external/static asset paths and base URLs work both in development (`localhost:3000`) and on Vercel’s hosted domains.
9. Include build and output settings that are compatible with Vercel’s React (or Next.js if converted) deployment best practices.
10. Ensure the combined app can be deployed to Vercel from a single root directory as a static or serverless site.

You will receive folders for `main-website`, `6LayerLP`, and `aiagents` as seen in the project folder.