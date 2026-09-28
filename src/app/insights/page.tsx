import type { Metadata } from "next";
import { pageMetadata } from "@/components/pages/seo";
import Link from "next/link";
import home from "@/components/home/Home.module.css";
import work from "@/components/home/Work.module.css";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Reveal from "@/components/home/Reveal";
import PostCard from "@/components/insights/PostCard";
import styles from "@/components/insights/Insights.module.css";
import { POSTS } from "@/content/insights";
import JsonLd from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";

const description =
  "Practical guides from Bright Infonet’s engineers on 21 CFR Part 11, GAMP 5 validation, AI agents and mobile app development — written for teams building real software.";

export const metadata: Metadata = pageMetadata({
  path: "/insights",
  title: "Insights: Regulated Software, AI & App Guides",
  description: description,
});

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${siteConfig.url}/insights#blog`,
  name: `${siteConfig.name} Insights`,
  description,
  url: `${siteConfig.url}/insights`,
  inLanguage: "en-IN",
  publisher: { "@id": `${siteConfig.url}/#organization` },
  blogPost: POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${siteConfig.url}/insights/${post.slug}`,
    datePublished: post.published,
    dateModified: post.updated ?? post.published,
  })),
};

export default function InsightsPage() {
  const [featured, ...rest] = POSTS;
  return (
    <div className={home.root}>
      <a href="#main" className={home.skip}>
        Skip to content
      </a>
      <JsonLd data={blogJsonLd} />
      <Header />
      <main id="main" className={home.pageTop}>
        <section className={styles.listing} aria-labelledby="insights-title">
          <div className={`${home.sectionHeader} ${styles.listingHead}`}>
            <div className={home.sectionHeaderLead}>
              <Reveal as="span" className={home.kicker}>
                <span className={home.kickerDash} />
                Insights
              </Reveal>
              <Reveal as="h1" id="insights-title" className={`${home.h1} ${home.serif}`}>
                Notes from <span className={home.accentItalic}>the build.</span>
              </Reveal>
            </div>
            <Reveal as="p" className={home.sectionLead} delay={0.2}>
              Practical guides on regulated software, AI agents and app development &mdash; written
              by the engineers who ship them.
            </Reveal>
          </div>

          <div className={styles.featured}>
            <PostCard post={featured} featured headingLevel="h2" />
          </div>

          <div className={`${styles.grid} ${styles.grid3}`}>
            {rest.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} headingLevel="h2" />
            ))}
          </div>

          <Reveal className={work.ctaBar}>
            <span className={`${work.ctaBarText} ${home.serif}`}>
              A question we haven&rsquo;t covered?{" "}
              <span className={home.accentItalic}>Ask us.</span>
            </span>
            <Link href="/#contact" className={home.btnOutline}>
              Talk to an engineer <span className={home.btnArrow}>&rarr;</span>
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
