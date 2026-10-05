import {
  PILLARS,
  pillarHub,
  postsByPillar,
  type Pillar,
} from "@/content/insights";
import {
  ACADEMY_PAGES,
  ALL_LANDING_PAGES,
  INDEXABLE_LOCAL_PAGES,
  INDUSTRY_PAGES,
  SERVICE_PAGES,
  type Landing,
} from "@/content/landing";
import { PRICING } from "@/content/trust";
import { napAddressLine, siteConfig } from "@/lib/site-config";

// A plain-text summary for AI assistants and crawlers (https://llmstxt.org). Prerendered at build
// time and regenerated hourly so scheduled posts are listed from their publish day.
export const dynamic = "force-static";
export const revalidate = 3600;

const line = (p: Landing) =>
  `- [${p.metaTitle}](${siteConfig.url}${p.path}): ${p.answer}`;

/** Name, address, phone, email and WhatsApp, leaving out every empty field (no stray separators). */
function napLine() {
  return [
    siteConfig.name,
    napAddressLine(),
    siteConfig.phone,
    siteConfig.email,
    siteConfig.whatsapp ? `WhatsApp https://wa.me/${siteConfig.whatsapp}` : "",
  ]
    .filter(Boolean)
    .join(" · ");
}

/** One line of real starting prices, only when the owner has filled PRICING. */
function pricingLine() {
  const entries = Object.entries(PRICING);
  if (entries.length === 0) return "";
  const items = entries.map(([path, price]) => {
    const page = ALL_LANDING_PAGES.find((p) => p.path === path);
    return `${page?.crumb ?? path} from ${price.from}`;
  });
  return `\nPricing (starting prices; final price depends on scope, get a written quote): ${items.join("; ")}\n`;
}

const PILLAR_ORDER: Pillar[] = ["regulated", "cost", "ai", "academy"];

/** Live guides grouped by pillar, hub article first; empty pillars are left out. */
function guidesByPillar() {
  const groups = postsByPillar();
  return PILLAR_ORDER.filter((pillar) => groups[pillar].length > 0)
    .map((pillar) => {
      const hub = pillarHub(pillar);
      const posts = hub
        ? [hub, ...groups[pillar].filter((p) => p.slug !== hub.slug)]
        : groups[pillar];
      const lines = posts.map(
        (p) =>
          `- [${p.title}](${siteConfig.url}/insights/${p.slug})${p === hub ? " (pillar guide)" : ""}: ${p.description}`,
      );
      return `### ${PILLARS[pillar].name}\n${lines.join("\n")}`;
    })
    .join("\n\n");
}

export function GET() {
  const { locality, region } = siteConfig.address;
  const body = `# ${siteConfig.name}

> ${siteConfig.description}

${siteConfig.name} is an AI-first software studio${locality ? ` based in ${locality}${region ? `, ${region}` : ""}` : ""}, India. It serves businesses and students across ${siteConfig.areaServed.join(", ")} and clients worldwide. One senior team designs, builds and launches web platforms, Flutter mobile apps, AI agents and GxP-ready regulated software (LIMS, pharmacovigilance). Its Academy trains developers in full-stack web, Flutter, applied AI and software validation.

Contact (NAP): ${napLine()}
Enquiries: ${siteConfig.url}/#contact
Careers and internships: ${siteConfig.hrEmail}
${pricingLine()}
## Services
${SERVICE_PAGES.map(line).join("\n")}

## Industries
- [Industries](${siteConfig.url}/industries): pharma and life sciences, diagnostic and QC labs, healthcare, SaaS and retail
${INDUSTRY_PAGES.map(line).join("\n")}

## Local and India-wide services
${INDEXABLE_LOCAL_PAGES.map(line).join("\n")}

## Academy
${ACADEMY_PAGES.filter((p) => !p.noindex)
  .map(line)
  .join("\n")}

## Tools & resources
- [App development cost calculator](${siteConfig.url}/tools/app-development-cost-calculator): a free calculator that returns an indicative cost range and typical timeline for a mobile app, website or MVP in India, using the ranges published in the cost guides (indicative; get a written quote)
- [Free LIMS URS template](${siteConfig.url}/insights/lims-urs-template): a free CSV template of example LIMS user requirements with ID, GxP/business type, priority, Part 11 and Annex 11 references and verification method (file: ${siteConfig.url}/downloads/lims-urs-template.csv)

## Guides
${guidesByPillar()}

## Company
- [Work](${siteConfig.url}/work): selected projects, including PVgenix and a LIMS
- [Process](${siteConfig.url}/process): how projects run week by week
- [About](${siteConfig.url}/about)
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
