import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import home from "@/components/home/Home.module.css";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import SectionHeading, { accent } from "@/components/home/SectionHeading";
import AuthorBox from "@/components/insights/AuthorBox";
import PillarNav from "@/components/insights/PillarNav";
import PostCard from "@/components/insights/PostCard";
import PostCover from "@/components/insights/PostCover";
import Toc from "@/components/insights/Toc";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import styles from "@/components/insights/Insights.module.css";
import {
  formatDate,
  getPost,
  getPublishedPosts,
  postCta,
  relatedPosts,
} from "@/content/insights";
import { getPostAuthor, isFounder } from "@/content/authors";
import JsonLd from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";
import {
  breadcrumbTrailJsonLd,
  faqJsonLd,
  seoTitle,
} from "@/components/pages/seo";

// Live posts are prerendered; a post whose publish day arrives after the build renders on demand
// (dynamicParams), and every page re-renders hourly so pillar/related links stay current.
// Scheduled and unknown slugs 404 (that 404 is also refreshed within the hour).
export const dynamicParams = true;
export const revalidate = 3600;

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
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
  const author = getPostAuthor(post);
  return {
    title: seoTitle(post.metaTitle),
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/insights/${post.slug}` },
    ...(author && {
      authors: [{ name: author.name, url: author.linkedin || undefined }],
    }),
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      publishedTime: post.published,
      modifiedTime: post.updated ?? post.published,
      authors: [author?.linkedin || siteConfig.url],
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
  const author = getPostAuthor(post);
  const cta = postCta(post);
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
        image: {
          "@type": "ImageObject",
          url: `${url}/opengraph-image`,
          width: 1200,
          height: 630,
        },
        datePublished: post.published,
        dateModified: updated,
        inLanguage: "en-IN",
        articleSection: post.category,
        keywords: post.keywords.join(", "),
        timeRequired: `PT${post.readingMinutes}M`,
        // A real, named author gets a Person; otherwise the post is credited to the company.
        author: author
          ? {
              "@type": "Person",
              name: author.name,
              ...(author.role && { jobTitle: author.role }),
              ...(author.linkedin && { sameAs: [author.linkedin] }),
              ...(author.credentials?.length && {
                knowsAbout: author.credentials,
              }),
              ...(isFounder(author) && {
                url: `${siteConfig.url}/about/founder`,
              }),
              worksFor: { "@id": `${siteConfig.url}/#organization` },
            }
          : { "@id": `${siteConfig.url}/#organization` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        isPartOf: { "@id": `${siteConfig.url}/insights#blog` },
      },
      ...(post.download
        ? [
            {
              "@type": "DigitalDocument",
              "@id": `${url}#template`,
              name: post.download.name,
              description: post.description,
              url: `${siteConfig.url}${post.download.href}`,
              encodingFormat: post.download.encodingFormat,
              inLanguage: "en-IN",
              isAccessibleForFree: true,
              publisher: { "@id": `${siteConfig.url}/#organization` },
              mainEntityOfPage: url,
            },
          ]
        : []),
      ...(post.faqs?.length ? [faqJsonLd(post.faqs, url)] : []),
      breadcrumbTrailJsonLd([
        { name: "Insights", path: "/insights" },
        { name: post.title, path: `/insights/${post.slug}` },
      ]),
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
              <span>{post.readingMinutes} min read</span>
            </div>
            <h1 id="article-title" className={`${styles.title} ${home.serif}`}>
              {post.title}
            </h1>
            <p className={styles.dek}>{post.description}</p>
            <div className={styles.byline}>
              <span className={styles.bylineMark} aria-hidden="true" />
              <span className={styles.bylineText}>
                <span>
                  {author ? author.name : `${siteConfig.name} Engineering`}
                </span>
                <span className={styles.bylineSub}>
                  Published{" "}
                  <time dateTime={post.published}>
                    {formatDate(post.published)}
                  </time>
                  <span aria-hidden="true"> &middot; </span>
                  Last updated{" "}
                  <time dateTime={updated}>{formatDate(updated)}</time>
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
                  ...(post.download
                    ? [{ id: "download", title: "Download" }]
                    : []),
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
                {post.download && (
                  <section id="download" aria-labelledby="download-title">
                    <h2 id="download-title">Download the template</h2>
                    <p>What the free file covers:</p>
                    <ul>
                      {post.download.inside.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <LeadCaptureForm
                      downloadHref={post.download.href}
                      downloadLabel={post.download.label}
                      form={post.download.form}
                    />
                  </section>
                )}
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

              {author && <AuthorBox author={author} />}

              <PillarNav post={post} />

              <aside className={styles.endCta} aria-label="Work with us">
                <p className={`${styles.endCtaTitle} ${home.serif}`}>
                  Building something{" "}
                  <span className={home.accentItalic}>like this?</span>
                </p>
                <p className={styles.endCtaText}>
                  Tell us what you&rsquo;re working on. An engineer &mdash; not
                  a sales rep &mdash; will reply within one working day.
                </p>
                <div className={styles.endCtaActions}>
                  <Link href={cta.href} className={home.btnPrimary}>
                    {cta.label} <span className={home.btnArrow}>&rarr;</span>
                  </Link>
                  <Link href="/#contact" className={home.btnOutline}>
                    Start a project{" "}
                    <span className={home.btnArrow}>&rarr;</span>
                  </Link>
                </div>
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
