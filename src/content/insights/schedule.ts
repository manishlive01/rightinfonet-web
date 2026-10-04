import type { Post } from "./types";

const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;

const istDay = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Kolkata",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

/**
 * Today's date in India (YYYY-MM-DD). Evaluated on every call, because ISR re-renders pages
 * inside a long-running server process.
 *
 * CONTENT_NOW (YYYY-MM-DD, server-only) pretends today is that day so scheduled posts can be
 * previewed in a local build. Local QA only: never set it in production.
 */
export function todayIST(): string {
  const override = process.env.CONTENT_NOW;
  if (override && ISO_DAY.test(override)) return override;
  return istDay.format(new Date());
}

/** A post is live from 00:00 IST on its `published` day. */
export function isPublished(post: Pick<Post, "published">, today = todayIST()) {
  return post.published <= today;
}
