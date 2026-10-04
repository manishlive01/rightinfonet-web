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

/**
 * Owner-gated local-business fields (geo, opening hours, map link) from siteConfig. Each one is
 * left out until a real value is filled in, so empty config never reaches structured data.
 */
export function localBusinessExtrasJsonLd() {
  const { geo, openingHours, googleBusinessUrl } = siteConfig;
  return {
    ...(geo.lat !== null &&
      geo.lng !== null && {
        geo: {
          "@type": "GeoCoordinates",
          latitude: geo.lat,
          longitude: geo.lng,
        },
      }),
    ...(openingHours.length > 0 && {
      openingHoursSpecification: openingHours.map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.days,
        opens: h.opens,
        closes: h.closes,
      })),
    }),
    ...(googleBusinessUrl && { hasMap: googleBusinessUrl }),
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

/** Longest <title> we ship; longer titles get cut off in search results. */
export const MAX_TITLE = 60;

/**
 * The final <title>: "{metaTitle} | Bright Infonet" when that fits in 60 characters, otherwise the
 * metaTitle alone (keyword first beats the brand suffix). metaTitle itself must be ≤ 60.
 */
export function seoTitle(metaTitle: string): { absolute: string } {
  const branded = `${metaTitle} | ${siteConfig.name}`;
  return { absolute: branded.length <= MAX_TITLE ? branded : metaTitle };
}

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
  const fullTitle = seoTitle(title);
  const shareTitle = fullTitle.absolute;
  return {
    title: fullTitle,
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
