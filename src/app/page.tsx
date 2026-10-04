import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import JsonLd from "@/lib/json-ld";
import {
  areaServedJsonLd,
  localBusinessExtrasJsonLd,
  postalAddressJsonLd,
} from "@/components/pages/seo";
import Home from "@/components/home/Home";
import { INDUSTRIES, SERVICES } from "@/components/home/data";
import { testimonialsFor } from "@/content/trust";

const homeReviews = testimonialsFor();

// Hourly, so the insights teaser picks up scheduled posts on their publish day.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: { absolute: siteConfig.title },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#service`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  logo: `${siteConfig.url}/brand/logo.png`,
  image: `${siteConfig.url}/brand/logo.png`,
  email: siteConfig.email,
  parentOrganization: { "@id": `${siteConfig.url}/#organization` },
  ...(siteConfig.phone && { telephone: siteConfig.phone }),
  address: postalAddressJsonLd(),
  ...localBusinessExtrasJsonLd(),
  areaServed: areaServedJsonLd(),
  // Real, permissioned testimonials only (src/content/trust.ts); none = no Review markup.
  ...(homeReviews.length > 0 && {
    review: homeReviews.map((t) => ({
      "@type": "Review",
      reviewBody: t.quote,
      author: { "@type": "Person", name: t.name },
      ...(t.source && {
        publisher: { "@type": "Organization", name: t.source },
      }),
    })),
  }),
  knowsAbout: [
    "Custom software development",
    "Web application development",
    "Mobile app development",
    "AI agents",
    "LIMS",
    "Pharmacovigilance software",
    "GxP computer system validation",
  ],
  audience: INDUSTRIES.map((i) => ({
    "@type": "BusinessAudience",
    audienceType: i.t,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software development services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.t, description: s.d },
    })),
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <Home />
    </>
  );
}
