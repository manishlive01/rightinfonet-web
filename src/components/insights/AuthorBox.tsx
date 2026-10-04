import Image from "next/image";
import home from "../home/Home.module.css";
import styles from "./Insights.module.css";
import type { Author } from "@/content/authors";

/** Visible author credit at the end of a post. Only rendered for a real, named author. */
export default function AuthorBox({ author }: { author: Author }) {
  return (
    <aside className={styles.authorBox} aria-label="About the author">
      {author.photo && (
        <Image
          src={author.photo}
          alt={author.name}
          width={72}
          height={72}
          className={styles.authorPhoto}
        />
      )}
      <div className={styles.authorText}>
        <span className={`${styles.takeawaysTitle} ${home.mono}`}>
          Written by
        </span>
        <p className={styles.authorName}>
          {author.name}
          {author.role && (
            <span className={styles.authorRole}>{author.role}</span>
          )}
        </p>
        {author.bio && <p className={styles.authorBio}>{author.bio}</p>}
        {author.linkedin && (
          <a href={author.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn profile
          </a>
        )}
      </div>
    </aside>
  );
}
