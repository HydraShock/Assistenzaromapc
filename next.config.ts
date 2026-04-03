import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [50, 65, 75, 85],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "query", key: "page_id", value: "72" }],
        destination: "/",
        permanent: true,
      },
      {
        source: "/prodotto/:slug*",
        destination: "/assistenza-a-domicilio",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/backgrounds/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/hero/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
