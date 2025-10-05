import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

/** @type {import('next').NextConfig} */
const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  // Point outputFileTracingRoot to the monorepo root so Next doesn't need to infer the workspace root
  outputFileTracingRoot: resolve(__dirname, ".."),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
