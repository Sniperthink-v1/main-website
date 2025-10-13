/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vercel.app',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'sniperthink-bi-landing.vercel.app',
        pathname: '**',
      }
    ],
    unoptimized: false,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : undefined,
}

export default nextConfig
