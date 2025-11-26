/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'cdn.builder.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_BUILDER_API_KEY: process.env.NEXT_PUBLIC_BUILDER_API_KEY || 'YOUR_BUILDER_API_KEY',
  },
};

module.exports = nextConfig;