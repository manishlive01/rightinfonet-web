// OWNER: add real people only, with their permission. An author without a name is ignored, and
// while this list is empty every post is credited to "Bright Infonet Engineering" (no author box,
// Organization as author in structured data). Set `author: "<id>"` on a post to credit someone.
export type Author = {
  id: string;
  name: string;
  role: string;
  bio: string;
  /** full LinkedIn profile URL */
  linkedin: string;
  /** optional square photo under /public, e.g. "/team/firstname-lastname.jpg" */
  photo?: string;
};

export const AUTHORS: Author[] = [
  // {
  //   id: "firstname-lastname",
  //   name: "Firstname Lastname",
  //   role: "Lead engineer, regulated software",
  //   bio: "Two or three factual sentences about real experience.",
  //   linkedin: "https://www.linkedin.com/in/your-profile/",
  //   photo: "/team/firstname-lastname.jpg",
  // },
];

/** OWNER: the founder's profile for /about/founder. null = page and links hidden. */
export const FOUNDER = null as (Author & { story: string[] }) | null;

/** The author for an id, only if a real name has been filled in. */
export function getAuthor(id?: string): Author | undefined {
  if (!id) return undefined;
  const author = AUTHORS.find((a) => a.id === id) ?? (FOUNDER?.id === id ? FOUNDER : undefined);
  return author && author.name.trim() ? author : undefined;
}

export const isFounder = (author: Author) => FOUNDER !== null && FOUNDER.id === author.id;
