import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  
  pageExtensions: ["tsx", "jsx", "js", "ts"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;