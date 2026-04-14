import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  // @ts-ignore
  allowedDevOrigins: ['172.19.0.3', 'localhost', '0.0.0.0'],
};

export default nextConfig;
