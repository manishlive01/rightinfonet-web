import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import JsonLd from "@/lib/json-ld";
import Home from "@/components/home/Home";
import { INDUSTRIES, SERVICES } from "@/components/home/data";

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
  email: siteConfig.email,
  address: { "@type": "PostalAddress", addressCountry: siteConfig.address.country },
  areaServed: "Worldwide",
  knowsAbout: [
    "Custom software development",
    "Web application development",
    "Mobile app development",
    "AI agents",
    "LIMS",
    "Pharmacovigilance software",
    "GxP computer system validation",
  ],
  audience: INDUSTRIES.map((i) => ({ "@type": "BusinessAudience", audienceType: i.t })),
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
