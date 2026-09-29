import { POSTS } from "@/content/insights";
import { ACADEMY_PAGES, LOCAL_PAGES, SERVICE_PAGES, type Landing } from "@/content/landing";
import { siteConfig } from "@/lib/site-config";

// A plain-text summary for AI assistants and crawlers (https://llmstxt.org). Built at compile time.
export const dynamic = "force-static";

const line = (p: Landing) => `- [${p.metaTitle}](${siteConfig.url}${p.path}): ${p.answer}`;

export function GET() {
  const { locality, region } = siteConfig.address;
  const body = `# ${siteConfig.name}

> ${siteConfig.description}

${siteConfig.name} is an AI-first software studio${locality ? ` based in ${locality}${region ? `, ${region}` : ""}` : ""}, India. It serves businesses and students across ${siteConfig.areaServed.join(", ")} and clients worldwide. One senior team designs, builds and launches web platforms, Flutter mobile apps, AI agents and GxP-ready regulated software (LIMS, pharmacovigilance). Its Academy trains developers in full-stack web, Flutter, applied AI and software validation.

Contact: ${siteConfig.email}${siteConfig.phone ? ` · ${siteConfig.phone}` : ""} · ${siteConfig.url}/#contact

## Services
${SERVICE_PAGES.map(line).join("\n")}

## Local and India-wide services
${LOCAL_PAGES.map(line).join("\n")}

## Academy
${ACADEMY_PAGES.map(line).join("\n")}

## Guides
${POSTS.map((p) => `- [${p.title}](${siteConfig.url}/insights/${p.slug}): ${p.description}`).join("\n")}

## Company
- [Work](${siteConfig.url}/work): selected projects, including PVgenix and a LIMS
- [Process](${siteConfig.url}/process): how projects run week by week
- [About](${siteConfig.url}/about)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
