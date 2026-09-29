import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

/** BreadcrumbList for a top-level page: Home › {name}. */
export function breadcrumbJsonLd(name: string, path: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: `${siteConfig.url}${path}`,
      },
    ],
  };
}

/** BreadcrumbList for any depth: Home › …trail. */
export function breadcrumbTrailJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      ...trail.map((t, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: t.name,
        item: `${siteConfig.url}${t.path}`,
      })),
    ],
  };
}

/** FAQPage for questions that are also visible on the page (Google requires both). */
export function faqJsonLd(
  faqs: readonly { q: string; a: string }[],
  pageUrl: string,
) {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** PostalAddress from siteConfig, leaving out empty fields. */
export function postalAddressJsonLd() {
  const { street, locality, region, postalCode, country } = siteConfig.address;
  return {
    "@type": "PostalAddress",
    addressCountry: country,
    ...(street && { streetAddress: street }),
    ...(locality && { addressLocality: locality }),
    ...(region && { addressRegion: region }),
    ...(postalCode && { postalCode }),
  };
}

export const areaServedJsonLd = () =>
  siteConfig.areaServed.map((name) =>
    name === "India" ? { "@type": "Country", name } : { "@type": "City", name },
  );

const SHARE_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — AI-first software development company in India`,
};

/**
 * Full metadata for an inner page. Setting `openGraph` on a page replaces the root layout's
 * object entirely, so every field (image, URL, site name…) is spelled out here.
 */
export function pageMetadata({
  path,
  title,
  description,
  keywords,
}: {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
}): Metadata {
  const shareTitle = `${title} | ${siteConfig.name}`;
  return {
    title,
    description,
    ...(keywords && { keywords }),
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: shareTitle,
      description,
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [SHARE_IMAGE.url],
    },
  };
}
