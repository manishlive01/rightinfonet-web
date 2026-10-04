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
  const posts = getPublishedPosts();
  const postDate = (post: (typeof posts)[number]) =>
    post.updated ?? post.published;

  // No lastModified on static/landing pages: with hourly ISR, new Date() would
  // report a fresh lastmod every hour for unchanged pages. Only dated content
  // (posts, and /insights via its newest post) carries a lastmod.
  const page = (
    path: string,
    priority: number,
    changeFrequency: "weekly" | "monthly",
  ) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency,
    priority,
  });

  const latestPostDate = posts.map(postDate).sort().at(-1);

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
    page("/resources/lims-urs-template", 0.7, "monthly"),
    page("/tools/app-development-cost-calculator", 0.7, "monthly"),
    {
      ...page("/insights", 0.8, "weekly"),
      ...(latestPostDate ? { lastModified: new Date(latestPostDate) } : {}),
    },
    ...posts.map((post) => ({
      url: `${siteConfig.url}/insights/${post.slug}`,
      lastModified: new Date(postDate(post)),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
