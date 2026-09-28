import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

/** BreadcrumbList for a top-level page: Home › {name}. */
export function breadcrumbJsonLd(name: string, path: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name, item: `${siteConfig.url}${path}` },
    ],
  };
}

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
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  const shareTitle = `${title} | ${siteConfig.name}`;
  return {
    title,
    description,
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
