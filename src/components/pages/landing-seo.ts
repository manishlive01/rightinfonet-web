import type { Metadata } from "next";
import { TRACKS } from "../home/data";
import {
  areaServedJsonLd,
  breadcrumbTrailJsonLd,
  faqJsonLd,
  pageMetadata,
} from "./seo";
import type { Landing } from "@/content/landing/types";
import { siteConfig } from "@/lib/site-config";

export const ACADEMY_ID = `${siteConfig.url}/academy#academy`;

export function landingMetadata(page: Landing): Metadata {
  return pageMetadata({
    path: page.path,
    title: page.metaTitle,
    description: page.description,
    keywords: page.keywords,
  });
}

/** Course entity for an Academy track; shared by course pages and the Academy page. */
export function courseJsonLd(trackIndex: number, url: string, description?: string) {
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
  const trail = [...(page.parent ? [page.parent] : []), { name: page.crumb, path: page.path }];
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
        : {
            "@type": "Service",
            "@id": `${url}#service`,
            name: page.metaTitle,
            serviceType: page.serviceType,
            description: page.description,
            url,
            provider: { "@id": `${siteConfig.url}/#organization` },
            areaServed: area,
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
      main,
      breadcrumbTrailJsonLd(trail),
      faqJsonLd(page.faqs, url),
    ],
  };
}
