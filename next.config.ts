import type { NextConfig } from "next";

const cspReportOnly = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
  "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com",
  "frame-src https://www.googletagmanager.com",
  "form-action 'self' https://wa.me",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    qualities: [50, 65, 75, 85],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
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
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          {
            key: "Content-Security-Policy-Report-Only",
            value: cspReportOnly,
          },
        ],
      },
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
