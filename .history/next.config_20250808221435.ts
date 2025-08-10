import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // helps catch errors early
  swcMinify: true, // faster build & smaller bundle
  images: {
    formats: ["image/avif", "image/webp"], // modern formats for speed
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.example.com", // replace with your image host if needed
      },
    ],
  },
  experimental: {
    // appDir is not supported in this Next.js version
  },
};

export default nextConfig;
