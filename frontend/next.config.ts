import type { NextConfig } from "next";

// console.log("Loading Next.js config...");

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's.gravatar.com',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
    // domains: ["s.gravatar.com"],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', '192.168.1.36:3000', 'tasktracker.dcamill.com']
    },
  }
};

// console.log("Next.js config loaded:", nextConfig);

export default nextConfig;

// import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
// initOpenNextCloudflareForDev();