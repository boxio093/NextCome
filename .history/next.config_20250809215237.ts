import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

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
    // In dev, use a CSP-safe source map type (no eval)
    if (isDev) {
      config.devtool = "source-map";
    }
    return config;
  },
};

export default nextConfig;
