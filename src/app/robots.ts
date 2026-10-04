import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// AI assistants and search engines that cite or index the site. "*" already allows them; the
// explicit group makes the intent unambiguous for crawlers that look for their own name.
const AI_AND_SEARCH_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_AND_SEARCH_BOTS, allow: "/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
