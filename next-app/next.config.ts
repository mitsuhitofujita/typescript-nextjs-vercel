import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  serverExternalPackages: ['@prisma/client', 'prisma'],
};

export default nextConfig;
