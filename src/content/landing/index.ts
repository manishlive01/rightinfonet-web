import { ACADEMY_PAGES } from "./academy";
import { INDUSTRY_PAGES } from "./industries";
import { LOCAL_PAGES } from "./local";
import { SERVICE_PAGES } from "./services";
import type { Landing } from "./types";

export type { Landing } from "./types";
export { ACADEMY_PAGES, INDUSTRY_PAGES, LOCAL_PAGES, SERVICE_PAGES };

export const ALL_LANDING_PAGES: Landing[] = [
  ...SERVICE_PAGES,
  ...INDUSTRY_PAGES,
  ...LOCAL_PAGES,
  ...ACADEMY_PAGES,
];

/** Last path segment → page, for a route's dynamic segment. */
export function landingBySlug(pages: Landing[], slug: string) {
  return pages.find((p) => p.path.split("/").pop() === slug);
}

export const slugOf = (p: Landing) => p.path.split("/").pop()!;

/** Paths of landing pages marked `noindex` (thin local pages). */
const NOINDEX_PATHS = new Set(
  ALL_LANDING_PAGES.filter((p) => p.noindex).map((p) => p.path),
);

/** false only for a noindexed landing page; any other href (incl. #hash) is indexable. */
export const isIndexable = (href: string) =>
  !NOINDEX_PATHS.has(href.split("#")[0].split("?")[0]);

/** Local pages that are indexed (sitemap, llms.txt, footer). */
export const INDEXABLE_LOCAL_PAGES = LOCAL_PAGES.filter((p) => !p.noindex);
