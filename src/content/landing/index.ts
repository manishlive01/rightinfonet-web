import { ACADEMY_PAGES } from "./academy";
import { LOCAL_PAGES } from "./local";
import { SERVICE_PAGES } from "./services";
import type { Landing } from "./types";

export type { Landing } from "./types";
export { ACADEMY_PAGES, LOCAL_PAGES, SERVICE_PAGES };

export const ALL_LANDING_PAGES: Landing[] = [...SERVICE_PAGES, ...LOCAL_PAGES, ...ACADEMY_PAGES];

/** Last path segment → page, for a route's dynamic segment. */
export function landingBySlug(pages: Landing[], slug: string) {
  return pages.find((p) => p.path.split("/").pop() === slug);
}

export const slugOf = (p: Landing) => p.path.split("/").pop()!;
