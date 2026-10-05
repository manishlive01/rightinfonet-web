import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getPublishedPosts } from "@/content/insights";
import { FOUNDER } from "@/content/authors";
import {
  ACADEMY_PAGES,
  INDEXABLE_LOCAL_PAGES,
  INDUSTRY_PAGES,
  SERVICE_PAGES,
  type Landing,
} from "@/content/landing";
import { LANDING_UPDATED_DEFAULT, PAGE_UPDATED } from "@/content/page-dates";

// Hourly, so a scheduled post enters the sitemap on its publish day (live posts only).
export const revalidate = 3600;

// lastModified comes from fixed content dates (src/content/page-dates.ts, Landing.updated, post
// updated/published), never new Date(): with hourly ISR that would report a fresh lastmod every
// hour for unchanged pages. No priority/changeFrequency: Google ignores both, and uniform values
// carry no signal.
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts();
  const postDate = (post: (typeof posts)[number]) =>
    post.updated ?? post.published;

  const entry = (path: string, date: string) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(date),
  });
  const page = (path: string) => entry(path, PAGE_UPDATED[path]);
  const landing = (p: Landing) =>
    entry(p.path, p.updated ?? LANDING_UPDATED_DEFAULT);

  const latestPostDate = posts.map(postDate).sort().at(-1);

  return [
    page(""),
    ...["/services", "/industries", "/process", "/about"].map(page),
    ...SERVICE_PAGES.map(landing),
    ...INDUSTRY_PAGES.map(landing),
    // noindexed thin local pages are left out
    ...INDEXABLE_LOCAL_PAGES.map(landing),
    page("/academy"),
    ...ACADEMY_PAGES.filter((p) => !p.noindex).map(landing),
    // founder profile only once the owner has filled it in (src/content/authors.ts)
    ...(FOUNDER?.name.trim() ? [page("/about/founder")] : []),
    page("/work"),
    page("/tools/app-development-cost-calculator"),
    entry("/insights", latestPostDate ?? LANDING_UPDATED_DEFAULT),
    ...posts.map((post) => entry(`/insights/${post.slug}`, postDate(post))),
  ];
}
