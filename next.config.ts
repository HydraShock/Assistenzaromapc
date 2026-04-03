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
        source: "/assistenza-a-domicilio/assistenza-a-domicilio-a-roma",
        destination: "/assistenza-a-domicilio",
        permanent: true,
      },
      {
        source: "/assistenza-a-domicilio/tecnico-computer-a-domicilio-a-garbatella",
        destination: "/zone/roma-sud",
        permanent: true,
      },
      {
        source: "/assistenza-a-domicilio/tecnico-computer-a-domicilio-a-ostiense",
        destination: "/zone/roma-sud",
        permanent: true,
      },
      {
        source: "/assistenza-a-domicilio/tecnico-computer-a-domicilio-a-parioli",
        destination: "/zone/roma-nord",
        permanent: true,
      },
      {
        source: "/assistenza-a-domicilio/tecnico-computer-a-domicilio-a-piazza-bologna-interventi-rapidi-e-affidabili",
        destination: "/zone/roma-nord",
        permanent: true,
      },
      {
        source: "/assistenza-a-domicilio/tecnico-computer-a-domicilio-a-prati",
        destination: "/zone/roma-centro",
        permanent: true,
      },
      {
        source: "/assistenza-a-domicilio/tecnico-computer-a-domicilio-a-san-giovanni",
        destination: "/zone/roma-sud-est",
        permanent: true,
      },
      {
        source: "/assistenza-a-domicilio/tecnico-computer-a-domicilio-a-termini",
        destination: "/zone/roma-centro",
        permanent: true,
      },
      {
        source: "/assistenza-a-domicilio/tecnico-computer-a-domicilio-a-tiburtina",
        destination: "/zone/roma-est",
        permanent: true,
      },
      {
        source: "/assistenza-a-domicilio/tecnico-computer-a-domicilio-a-trastevere",
        destination: "/zone/roma-centro",
        permanent: true,
      },
      {
        source: "/assistenza-a-domicilio/tecnico-computer-a-domicilio-eur",
        destination: "/zone/roma-sud",
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
