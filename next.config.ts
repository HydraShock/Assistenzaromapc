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
        has: [{ type: "query", key: "page_id" }],
        destination: "/assistenza-a-domicilio",
        permanent: true,
      },
      {
        source: "/category/assistenza-a-domicilio/:path*",
        destination: "/assistenza-a-domicilio",
        permanent: true,
      },
      {
        source: "/author/admin/:path*",
        destination: "/assistenza-a-domicilio",
        permanent: true,
      },
      {
        source: "/assistenza-a-domicilio/page/:page(\\d+)",
        destination: "/assistenza-a-domicilio",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/assistenza-a-domicilio",
        permanent: true,
      },
      {
        source: "/comments/feed",
        destination: "/assistenza-a-domicilio",
        permanent: true,
      },
      {
        source: "/wp-json/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/assistenza-a-domicilio/tecnico-computer-a-domicilio-a-parioli-servizio-impeccabile-7-su-7",
        destination: "/assistenza-a-domicilio/tecnico-computer-a-domicilio-a-parioli",
        permanent: true,
      },
      {
        source: "/assistenza-a-domicilio/tecnico-computer-a-domicilio-a-tuscolana-servizio-impeccabile-7-su-7",
        destination: "/assistenza-a-domicilio/tecnico-computer-a-domicilio-a-tuscolana",
        permanent: true,
      },
      {
        source: "/assistenza-a-domicilio/tecnico-computer-a-domicilio-a-trastevere-roma",
        destination: "/assistenza-a-domicilio/tecnico-computer-a-domicilio-a-trastevere",
        permanent: true,
      },
      {
        source: "/assistenza-a-domicilio/tecnico-computer-a-domicilio-a-san-giovanni-roma",
        destination: "/assistenza-a-domicilio/tecnico-computer-a-domicilio-a-san-giovanni",
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
