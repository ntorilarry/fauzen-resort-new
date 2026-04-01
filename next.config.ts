import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Set the workspace root to silence the lockfile warning
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
        {
        protocol: "https",
        hostname: "preline.co",
      },
    ],
  },
};

export default nextConfig;
