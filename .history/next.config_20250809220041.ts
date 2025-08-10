import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.example.com", // replace if needed
      },
    ],
  },
  webpack(config) {
    // Always use a CSP-safe source map type (no eval)
    config.devtool = "source-map";
    return config;
  },
};

export default nextConfig;
