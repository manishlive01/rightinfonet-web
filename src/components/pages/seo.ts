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
