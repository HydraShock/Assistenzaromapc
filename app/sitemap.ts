import type { MetadataRoute } from "next";

import { localBlogPosts } from "@/lib/local-blog-posts";
import { serviceAreaPages } from "@/lib/service-areas";
import { serviceCatalog } from "@/lib/service-catalog";
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
    ...serviceCatalog.flatMap((service) =>
      serviceAreaPages.map((area) => ({
        url: `${siteConfig.siteUrl}/servizi/${service.slug}/${area.slug}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.72,
      })),
    ),
    {
      url: `${siteConfig.siteUrl}/assistenza-a-domicilio`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...localBlogPosts.map((post) => ({
      url: `${siteConfig.siteUrl}/assistenza-a-domicilio/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.74,
    })),
  ];
}
