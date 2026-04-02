import type { MetadataRoute } from "next";

import { serviceAreaPages } from "@/lib/service-areas";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...serviceAreaPages.map((area) => ({
      url: `${siteConfig.siteUrl}/zone/${area.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    })),
  ];
}
