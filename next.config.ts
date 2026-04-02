import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [50, 65, 75, 85],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
