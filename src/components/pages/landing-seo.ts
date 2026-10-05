import type { Metadata } from "next";
import { TRACKS } from "../home/data";
import {
  areaServedJsonLd,
  breadcrumbTrailJsonLd,
  faqJsonLd,
  pageMetadata,
} from "./seo";
import type { Landing } from "@/content/landing/types";
import { pricingFor, testimonialsFor } from "@/content/trust";
import { siteConfig } from "@/lib/site-config";

export const ACADEMY_ID = `${siteConfig.url}/academy#academy`;

export function landingMetadata(page: Landing): Metadata {
  return {
    ...pageMetadata({
      path: page.path,
      title: page.metaTitle,
      description: page.description,
      keywords: page.keywords,
    }),
    // thin local pages: kept reachable, but out of the index until they have real local content
    ...(page.noindex && { robots: { index: false, follow: true } }),
  };
}

/** Course entity for an Academy track; shared by course pages and the Academy page. */
export function courseJsonLd(
  trackIndex: number,
  url: string,
  description?: string,
) {
  const t = TRACKS[trackIndex];
  return {
    "@type": "Course",
    "@id": `${url}#course`,
    name: `${t.t} course`,
    description: description ?? t.pitch,
    url,
    provider: { "@id": ACADEMY_ID },
    educationalLevel: t.level,
    teaches: t.mods.map((m) => m.t),
    inLanguage: ["en-IN", "hi-IN"],
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: t.format === "Hybrid" ? "Blended" : "Online",
      courseWorkload: `P${t.wk}W`,
    },
  };
}

export function landingJsonLd(page: Landing) {
  const url = `${siteConfig.url}${page.path}`;
  const trail = [
    ...(page.parent ? [page.parent] : []),
    { name: page.crumb, path: page.path },
  ];
  const area = page.city
    ? [
        { "@type": "City", name: page.city },
        ...areaServedJsonLd().filter((a) => a.name !== page.city),
      ]
    : areaServedJsonLd();

  const main =
    page.kind === "course" && page.trackIndex !== undefined
      ? courseJsonLd(page.trackIndex, url, page.description)
      : page.kind === "training"
        ? {
            "@type": "ItemList",
            "@id": `${url}#courses`,
            name: `${siteConfig.name} Academy courses`,
            itemListElement: TRACKS.map((t, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `${t.t} course`,
            })),
          }
        : // service, industry and local pages
          {
            "@type": "Service",
            "@id": `${url}#service`,
            name: page.metaTitle,
            serviceType: page.serviceType,
            description: page.description,
            url,
            provider: { "@id": `${siteConfig.url}/#organization` },
            areaServed: area,
          };

  // Owner-gated: a price only with a real numeric minPrice, reviews only from real testimonials
  // tagged for this page. No AggregateRating (there are no ratings to aggregate).
  const price = pricingFor(page.path);
  const reviews = testimonialsFor(page.path);
  const extras =
    main["@type"] === "ItemList"
      ? {}
      : {
          ...(price?.minPrice !== undefined && {
            offers: {
              "@type": "Offer",
              url,
              priceCurrency: price.currency,
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: price.minPrice,
                priceCurrency: price.currency,
              },
            },
          }),
          ...(reviews.length > 0 && {
            review: reviews.map((t) => ({
              "@type": "Review",
              reviewBody: t.quote,
              author: { "@type": "Person", name: t.name },
              ...(t.source && {
                publisher: { "@type": "Organization", name: t.source },
              }),
            })),
          }),
        };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.metaTitle,
        description: page.description,
        inLanguage: "en-IN",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
      },
      { ...main, ...extras },
      breadcrumbTrailJsonLd(trail),
      faqJsonLd(page.faqs, url),
    ],
  };
}
