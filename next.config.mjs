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
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/.next/**',
        '**/dist/**',
        '**/build/**',
        '**/*.log',
        '**/coverage/**',
        '**/main-website/**',
        '**/6LayerLP/**',
        '**/aiagents/**',
      ],
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
}

export default nextConfig
