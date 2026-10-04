import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getPublishedPosts } from "@/content/insights";
import { FOUNDER } from "@/content/authors";
import {
  ACADEMY_PAGES,
  INDUSTRY_PAGES,
  LOCAL_PAGES,
  SERVICE_PAGES,
} from "@/content/landing";

// Hourly, so a scheduled post enters the sitemap on its publish day (live posts only).
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (
    path: string,
    priority: number,
    changeFrequency: "weekly" | "monthly",
  ) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  });

  return [
    page("", 1, "weekly"),
    ...["/services", "/industries", "/process", "/about"].map((p) =>
      page(p, 0.9, "monthly"),
    ),
    ...SERVICE_PAGES.map((p) => page(p.path, 0.9, "monthly")),
    ...INDUSTRY_PAGES.map((p) => page(p.path, 0.9, "monthly")),
    ...LOCAL_PAGES.map((p) => page(p.path, 0.9, "monthly")),
    page("/academy", 0.9, "monthly"),
    ...ACADEMY_PAGES.map((p) => page(p.path, 0.85, "monthly")),
    // founder profile only once the owner has filled it in (src/content/authors.ts)
    ...(FOUNDER?.name.trim() ? [page("/about/founder", 0.6, "monthly")] : []),
    page("/work", 0.8, "monthly"),
    page("/insights", 0.8, "weekly"),
    ...getPublishedPosts().map((post) => ({
      url: `${siteConfig.url}/insights/${post.slug}`,
      lastModified: new Date(post.updated ?? post.published),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
