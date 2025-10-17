import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

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

export default nextConfig; // Cambia module.exports por export default
