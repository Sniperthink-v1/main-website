/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Adding experimental feature to fix multiple lockfiles warning
  experimental: {
    outputFileTracingRoot: "c:/Users/shiva/Downloads/main-website/main-website",
  }
}

export default nextConfig
