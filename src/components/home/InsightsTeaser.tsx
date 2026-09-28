import Link from "next/link";
import home from "./Home.module.css";
import SectionHeading, { accent } from "./SectionHeading";
import Reveal from "./Reveal";
import PostCard from "../insights/PostCard";
import styles from "../insights/Insights.module.css";
import { POSTS } from "@/content/insights";

export default function InsightsTeaser() {
  return (
    <section id="insights" className={home.section} aria-labelledby="insights-home-title">
      <SectionHeading
        kicker="(07) Insights"
        id="insights-home-title"
        title={["Notes from ", accent("the build.")]}
        lead="Practical guides on regulated software, AI agents and app development — written by the engineers who ship them."
      />
      <div className={`${styles.grid} ${styles.grid3}`}>
        {POSTS.slice(0, 3).map((post, i) => (
          <PostCard key={post.slug} post={post} index={i} />
        ))}
      </div>
      <Reveal className={styles.listFoot}>
        <Link href="/insights" className={home.btnOutline}>
          All insights <span className={home.btnArrow}>&rarr;</span>
        </Link>
      </Reveal>
    </section>
  );
}
