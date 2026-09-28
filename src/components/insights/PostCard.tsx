import Link from "next/link";
import { formatDate, type Post } from "@/content/insights";
import home from "../home/Home.module.css";
import Reveal from "../home/Reveal";
import PostCover from "./PostCover";
import styles from "./Insights.module.css";

export default function PostCard({
  post,
  index = 0,
  featured = false,
  headingLevel = "h3",
}: {
  post: Post;
  index?: number;
  featured?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <Reveal
      as="article"
      className={`${styles.card} ${featured ? styles.cardFeatured : ""}`}
      delay={index * 0.08}
    >
      <Link href={`/insights/${post.slug}`} className={styles.cardLink}>
        <PostCover variant={post.cover} label={post.category} large={featured} />
        <div className={styles.cardBody}>
          <span className={`${styles.cardMeta} ${home.mono}`}>
            <time dateTime={post.published}>{formatDate(post.published)}</time>
            <span aria-hidden="true">&middot;</span>
            {post.readingMinutes} min read
          </span>
          <Heading className={`${styles.cardTitle} ${home.serif}`}>{post.title}</Heading>
          <p className={styles.cardExcerpt}>{post.excerpt}</p>
          <span className={styles.cardMore}>
            Read article
            <span className={styles.cardMoreIcon} aria-hidden="true">
              &rarr;
            </span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
