import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Add remote CDN hosts here when images move off /public.
    remotePatterns: [],
  },
};

export default nextConfig;
