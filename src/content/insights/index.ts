import { aiAgentsGuide } from "./ai-agents-business";
import { flutterVsNative } from "./flutter-vs-native";
import { gamp5Guide } from "./gamp-5-validation-guide";
import { part11Checklist } from "./part-11-lims-checklist";
import type { Post } from "./types";

export type { Post, PostSection, CoverVariant } from "./types";

/** Newest first; posts with the same date keep this order. */
export const POSTS: Post[] = [part11Checklist, aiAgentsGuide, gamp5Guide, flutterVsNative].sort(
  (a, b) => b.published.localeCompare(a.published),
);

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

/** Same-category posts first, then the newest of the rest. */
export function relatedPosts(post: Post, count = 3) {
  const others = POSTS.filter((p) => p.slug !== post.slug);
  return [
    ...others.filter((p) => p.category === post.category),
    ...others.filter((p) => p.category !== post.category),
  ].slice(0, count);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
