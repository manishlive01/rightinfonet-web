import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { POSTS } from "@/content/insights";
import { ACADEMY_PAGES, LOCAL_PAGES, SERVICE_PAGES } from "@/content/landing";

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
    ...LOCAL_PAGES.map((p) => page(p.path, 0.9, "monthly")),
    page("/academy", 0.9, "monthly"),
    ...ACADEMY_PAGES.map((p) => page(p.path, 0.85, "monthly")),
    page("/work", 0.8, "monthly"),
    page("/insights", 0.8, "weekly"),
    ...POSTS.map((post) => ({
      url: `${siteConfig.url}/insights/${post.slug}`,
      lastModified: new Date(post.updated ?? post.published),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
