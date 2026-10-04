import Link from "next/link";
import home from "../home/Home.module.css";
import styles from "./Insights.module.css";
import { PILLARS, pillarHub, postsByPillar, type Post } from "@/content/insights";

/**
 * Pillar ↔ cluster links on every post: "Part of" the live hub article plus the other live posts
 * in the same pillar. Updates by itself as scheduled posts go live.
 */
export default function PillarNav({ post }: { post: Post }) {
  const hub = pillarHub(post.pillar);
  const others = postsByPillar()[post.pillar].filter(
    (p) => p.slug !== post.slug && p.slug !== hub?.slug,
  );
  if (!others.length && (!hub || hub.slug === post.slug)) return null;
  const name = PILLARS[post.pillar].name;

  return (
    <nav className={styles.pillarNav} aria-label={`${name} guides`}>
      <span className={`${styles.takeawaysTitle} ${home.mono}`}>
        {post.pillarHub ? `Guides in this series: ${name}` : `More on ${name.toLowerCase()}`}
      </span>
      {hub && hub.slug !== post.slug && (
        <p className={styles.pillarHub}>
          Part of: <Link href={`/insights/${hub.slug}`}>{hub.title}</Link>
        </p>
      )}
      {others.length > 0 && (
        <ul>
          {others.map((p) => (
            <li key={p.slug}>
              <Link href={`/insights/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
