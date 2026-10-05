import type { Pillar } from "./insights/types";

// OWNER: add real people only, with their permission. An author without a name is ignored, and
// while this list is empty every post is credited to "Bright Infonet Engineering" (no author box,
// Organization as author in structured data). Set `author: "<id>"` on a post to credit someone,
// or set a default per pillar in PILLAR_AUTHORS below.
export type Author = {
  id: string;
  name: string;
  role: string;
  bio: string;
  /** full LinkedIn profile URL */
  linkedin: string;
  /** optional square photo under /public, e.g. "/team/firstname-lastname.jpg" */
  photo?: string;
  /**
   * Optional factual experience / credential lines (e.g. GxP, CSV, GAMP 5 project experience).
   * Shown as a list in the author box, team section and founder page, and emitted as `knowsAbout`.
   */
  credentials?: string[];
};

export const AUTHORS: Author[] = [
  // {
  //   id: "firstname-lastname",
  //   name: "Firstname Lastname",
  //   role: "Lead engineer, regulated software",
  //   bio: "Two or three factual sentences about real experience.",
  //   linkedin: "https://www.linkedin.com/in/your-profile/",
  //   photo: "/team/firstname-lastname.jpg",
  //   credentials: [
  //     "Only real, checkable lines, e.g. the GxP / validation work this person has actually done",
  //   ],
  // },
];

/** OWNER: the founder's profile for /about/founder. null = page and links hidden. */
export const FOUNDER = null as (Author & { story: string[] }) | null;

/**
 * OWNER: default author per topic pillar, used when a post has no `author` of its own.
 * Example: `regulated: "firstname-lastname"` credits every GAMP 5 / Part 11 post to that person.
 * Ids that don't match a real AUTHORS/FOUNDER entry are ignored (team byline stays).
 */
export const PILLAR_AUTHORS: Partial<Record<Pillar, string>> = {
  // regulated: "<author-id>",
};

/** The author for an id, only if a real name has been filled in. */
export function getAuthor(id?: string): Author | undefined {
  if (!id) return undefined;
  const author =
    AUTHORS.find((a) => a.id === id) ??
    (FOUNDER?.id === id ? FOUNDER : undefined);
  return author && author.name.trim() ? author : undefined;
}

/** The post's own author, else its pillar's default author, else undefined (team byline). */
export function getPostAuthor(post: {
  author?: string;
  pillar: Pillar;
}): Author | undefined {
  return getAuthor(post.author) ?? getAuthor(PILLAR_AUTHORS[post.pillar]);
}

/** Every real person (founder first, de-duplicated) for the About page team section. */
export function getTeam(): Author[] {
  const people = [...(FOUNDER ? [FOUNDER] : []), ...AUTHORS];
  return people.filter(
    (p, i) => p.name.trim() && people.findIndex((q) => q.id === p.id) === i,
  );
}

export const isFounder = (author: Author) =>
  FOUNDER !== null && FOUNDER.id === author.id;
