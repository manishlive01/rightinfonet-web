import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import home from "@/components/home/Home.module.css";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import SectionHeading, { accent } from "@/components/home/SectionHeading";
import PostCard from "@/components/insights/PostCard";
import PostCover from "@/components/insights/PostCover";
import Toc from "@/components/insights/Toc";
import styles from "@/components/insights/Insights.module.css";
import { POSTS, formatDate, getPost, relatedPosts } from "@/content/insights";
import JsonLd from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";
import { faqJsonLd } from "@/components/pages/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${siteConfig.url}/insights/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      publishedTime: post.published,
      modifiedTime: post.updated ?? post.published,
      authors: [siteConfig.url],
      section: post.category,
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${siteConfig.url}/insights/${post.slug}`;
  const updated = post.updated ?? post.published;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        url,
        mainEntityOfPage: url,
        image: `${url}/opengraph-image`,
        datePublished: post.published,
        dateModified: updated,
        inLanguage: "en-IN",
        articleSection: post.category,
        keywords: post.keywords.join(", "),
        timeRequired: `PT${post.readingMinutes}M`,
        author: { "@id": `${siteConfig.url}/#organization` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        isPartOf: { "@id": `${siteConfig.url}/insights#blog` },
      },
      ...(post.faqs?.length ? [faqJsonLd(post.faqs, url)] : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Insights",
            item: `${siteConfig.url}/insights`,
          },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <div className={home.root}>
      <a href="#main" className={home.skip}>
        Skip to content
      </a>
      <JsonLd data={jsonLd} />
      <Header />
      <main id="main" className={home.pageTop}>
        <article aria-labelledby="article-title">
          <header className={styles.hero}>
            <nav className={styles.crumbs} aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/insights">Insights</Link>
                </li>
                <li aria-current="page">{post.category}</li>
              </ol>
            </nav>
            <div className={`${styles.heroMeta} ${home.mono}`}>
              <span className={styles.catPill}>{post.category}</span>
              <time dateTime={post.published}>
                {formatDate(post.published)}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readingMinutes} min read</span>
            </div>
            <h1 id="article-title" className={`${styles.title} ${home.serif}`}>
              {post.title}
            </h1>
            <p className={styles.dek}>{post.description}</p>
            <div className={styles.byline}>
              <span className={styles.bylineMark} aria-hidden="true" />
              <span className={styles.bylineText}>
                <span>{siteConfig.name} Engineering</span>
                <span className={styles.bylineSub}>
                  {post.updated ? (
                    <>
                      Updated{" "}
                      <time dateTime={updated}>{formatDate(updated)}</time>
                    </>
                  ) : (
                    "Written by the team that builds these systems"
                  )}
                </span>
              </span>
            </div>
            <div className={styles.heroCover}>
              <PostCover variant={post.cover} label={post.category} large />
            </div>
          </header>

          <div className={styles.layout}>
            <aside className={styles.aside}>
              <Toc
                items={[
                  ...post.sections.map(({ id, title }) => ({ id, title })),
                  ...(post.faqs?.length ? [{ id: "faq", title: "FAQ" }] : []),
                ]}
              />
            </aside>

            <div className={styles.content}>
              <div className={styles.takeaways}>
                <span className={`${styles.takeawaysTitle} ${home.mono}`}>
                  Key takeaways
                </span>
                <ul>
                  {post.takeaways.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.prose}>
                {post.intro}
                {post.sections.map((section) => (
                  <section key={section.id} aria-labelledby={section.id}>
                    <h2 id={section.id}>{section.title}</h2>
                    {section.body}
                  </section>
                ))}
                {post.faqs && post.faqs.length > 0 && (
                  <section aria-labelledby="faq">
                    <h2 id="faq">Frequently asked questions</h2>
                    {post.faqs.map((f) => (
                      <div key={f.q}>
                        <h3>{f.q}</h3>
                        <p>{f.a}</p>
                      </div>
                    ))}
                  </section>
                )}
              </div>

              <aside className={styles.endCta} aria-label="Work with us">
                <p className={`${styles.endCtaTitle} ${home.serif}`}>
                  Building something{" "}
                  <span className={home.accentItalic}>like this?</span>
                </p>
                <p className={styles.endCtaText}>
                  Tell us what you&rsquo;re working on. An engineer &mdash; not
                  a sales rep &mdash; will reply within one working day.
                </p>
                <Link href="/#contact" className={home.btnPrimary}>
                  Start a project <span className={home.btnArrow}>&rarr;</span>
                </Link>
              </aside>
            </div>
          </div>
        </article>

        <section className={styles.related} aria-labelledby="related-title">
          <SectionHeading
            kicker="Keep reading"
            id="related-title"
            title={["More from ", accent("the build.")]}
          />
          <div className={`${styles.grid} ${styles.grid3}`}>
            {relatedPosts(post).map((p, i) => (
              <PostCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
