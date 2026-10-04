#!/usr/bin/env node
/**
 * Bright Infonet SEO crawler / auditor (zero dependencies, Node 18+).
 *
 * Usage:
 *   node .kiro/skills/seo-audit/scripts/audit.mjs [baseUrl] [--out report.md] [--max 500]
 *
 * Default baseUrl: http://localhost:3000 (run `npm run build; npm run start` first).
 * Reads /sitemap.xml, rewrites the production origin to baseUrl, fetches every page
 * and checks titles, descriptions, canonicals, headings, OG/Twitter tags, JSON-LD,
 * image alts, internal links, duplicates and response times. Exit code 1 if any
 * ERROR-level issue is found, so it can gate CI.
 */
import { writeFileSync } from "node:fs";

const args = process.argv.slice(2);
const flag = (name, def) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : def;
};
const base = (
  args.find((a) => /^https?:\/\//.test(a)) || "http://localhost:3000"
).replace(/\/$/, "");
const outFile = flag("--out", null);
const maxPages = Number(flag("--max", 500));

const issues = []; // { level, url, msg }
const add = (level, url, msg) => issues.push({ level, url, msg });

const decode = (s = "") =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();

const attr = (tag, name) => {
  const m = tag.match(
    new RegExp(`\\b${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, "i"),
  );
  return m ? decode(m[2] ?? m[3]) : null;
};

const metaContent = (html, key, val) => {
  const tags = html.match(/<meta\b[^>]*>/gi) || [];
  for (const t of tags)
    if ((attr(t, key) || "").toLowerCase() === val) return attr(t, "content");
  return null;
};

async function get(url, { method = "GET" } = {}) {
  const t0 = Date.now();
  try {
    const res = await fetch(url, {
      method,
      redirect: "manual",
      headers: { "user-agent": "BrightInfonet-SEO-Audit/1.0" },
    });
    const body = method === "GET" ? await res.text() : "";
    return {
      status: res.status,
      body,
      ms: Date.now() - t0,
      headers: res.headers,
    };
  } catch (e) {
    return { status: 0, body: "", ms: Date.now() - t0, error: String(e) };
  }
}

const toLocal = (u) => {
  try {
    const p = new URL(u);
    return base + p.pathname + p.search;
  } catch {
    return null;
  }
};

// ---------- site-level files ----------
const robots = await get(base + "/robots.txt");
if (robots.status !== 200)
  add("ERROR", "/robots.txt", `robots.txt returned ${robots.status}`);
else {
  if (/Disallow:\s*\/\s*$/m.test(robots.body) && !/Allow:/i.test(robots.body))
    add("ERROR", "/robots.txt", "robots.txt disallows the whole site");
  if (!/Sitemap:/i.test(robots.body))
    add("WARN", "/robots.txt", "robots.txt has no Sitemap: line");
}

const llms = await get(base + "/llms.txt");
if (llms.status !== 200)
  add("WARN", "/llms.txt", `llms.txt returned ${llms.status}`);

const sm = await get(base + "/sitemap.xml");
if (sm.status !== 200) {
  add(
    "ERROR",
    "/sitemap.xml",
    `sitemap.xml returned ${sm.status}; cannot crawl`,
  );
}
const sitemapUrls = [...sm.body.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map(
  (m) => m[1],
);
const sitemapPaths = new Set(
  sitemapUrls.map((u) => new URL(u).pathname.replace(/\/$/, "") || "/"),
);
const prodOrigin = sitemapUrls[0] ? new URL(sitemapUrls[0]).origin : null;

// ---------- page crawl ----------
const pages = [];
const internalLinks = new Map(); // path -> Set(sourcePaths)

for (const u of sitemapUrls.slice(0, maxPages)) {
  const path = new URL(u).pathname;
  const local = toLocal(u);
  const r = await get(local);
  const page = { path, status: r.status, ms: r.ms, bytes: r.body.length };
  pages.push(page);

  if (r.status >= 300 && r.status < 400) {
    add(
      "ERROR",
      path,
      `sitemap URL redirects (${r.status} -> ${r.headers?.get("location")}); list the final URL instead`,
    );
    continue;
  }
  if (r.status !== 200) {
    add("ERROR", path, `HTTP ${r.status}${r.error ? " " + r.error : ""}`);
    continue;
  }
  const html = r.body;
  if (r.ms > 1500) add("WARN", path, `slow response ${r.ms} ms`);
  if (html.length > 500_000)
    add("WARN", path, `large HTML ${(html.length / 1024).toFixed(0)} KB`);

  // <html lang>
  const htmlTag = html.match(/<html\b[^>]*>/i)?.[0] || "";
  if (!attr(htmlTag, "lang"))
    add("ERROR", path, "<html> missing lang attribute");

  // title
  const title = decode(
    html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "",
  );
  page.title = title;
  if (!title) add("ERROR", path, "missing <title>");
  else if (title.length < 30)
    add("WARN", path, `title too short (${title.length}): "${title}"`);
  else if (title.length > 65)
    add(
      "WARN",
      path,
      `title too long (${title.length}), may truncate: "${title}"`,
    );

  // description
  const desc = metaContent(html, "name", "description");
  page.desc = desc;
  if (!desc) add("ERROR", path, "missing meta description");
  else if (desc.length < 70)
    add("WARN", path, `description short (${desc.length})`);
  else if (desc.length > 165)
    add("WARN", path, `description long (${desc.length}), may truncate`);

  // robots meta
  const robotsMeta = (metaContent(html, "name", "robots") || "").toLowerCase();
  if (robotsMeta.includes("noindex"))
    add("ERROR", path, `page in sitemap but has robots "${robotsMeta}"`);

  // canonical
  const canonTag = (html.match(/<link\b[^>]*>/gi) || []).find(
    (t) => (attr(t, "rel") || "").toLowerCase() === "canonical",
  );
  const canon = canonTag ? attr(canonTag, "href") : null;
  if (!canon) add("ERROR", path, "missing canonical");
  else {
    if (!/^https:\/\//.test(canon))
      add("ERROR", path, `canonical not absolute https: ${canon}`);
    try {
      const cp = new URL(canon, prodOrigin || base);
      if (
        (cp.pathname.replace(/\/$/, "") || "/") !==
        (path.replace(/\/$/, "") || "/")
      )
        add("ERROR", path, `canonical points elsewhere: ${canon}`);
      if (prodOrigin && cp.origin !== prodOrigin)
        add(
          "ERROR",
          path,
          `canonical origin ${cp.origin} != sitemap origin ${prodOrigin}`,
        );
    } catch {
      add("ERROR", path, `invalid canonical: ${canon}`);
    }
  }

  // headings
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    decode(m[1].replace(/<[^>]+>/g, "")),
  );
  if (h1s.length === 0) add("ERROR", path, "no <h1>");
  else if (h1s.length > 1) add("WARN", path, `${h1s.length} <h1> tags`);
  const levels = [...html.matchAll(/<h([1-6])\b/gi)].map((m) => +m[1]);
  for (let i = 1; i < levels.length; i++)
    if (levels[i] - levels[i - 1] > 1) {
      add(
        "INFO",
        path,
        `heading level skips h${levels[i - 1]} -> h${levels[i]}`,
      );
      break;
    }

  // Open Graph / Twitter
  for (const p of [
    "og:title",
    "og:description",
    "og:image",
    "og:url",
    "og:type",
  ])
    if (!metaContent(html, "property", p))
      add(p === "og:image" ? "ERROR" : "WARN", path, `missing ${p}`);
  if (!metaContent(html, "name", "twitter:card"))
    add("WARN", path, "missing twitter:card");

  // JSON-LD
  const ld = [
    ...html.matchAll(
      /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ];
  const types = new Set();
  const walk = (n) => {
    if (Array.isArray(n)) return n.forEach(walk);
    if (n && typeof n === "object") {
      if (n["@type"]) [].concat(n["@type"]).forEach((t) => types.add(t));
      Object.values(n).forEach(walk);
    }
  };
  for (const [, raw] of ld) {
    try {
      const data = JSON.parse(raw);
      walk(data);
      // FAQ sanity
      const faqs = [];
      const findFaq = (n) => {
        if (Array.isArray(n)) return n.forEach(findFaq);
        if (n && typeof n === "object") {
          if ([].concat(n["@type"]).includes("FAQPage")) faqs.push(n);
          Object.values(n).forEach(findFaq);
        }
      };
      findFaq(data);
      for (const f of faqs) {
        const q = f.mainEntity || [];
        if (!q.length) add("ERROR", path, "FAQPage schema has no mainEntity");
        for (const item of q) {
          const qText = item.name || "";
          if (!item.acceptedAnswer?.text)
            add("ERROR", path, `FAQ "${qText}" has no acceptedAnswer.text`);
          if (
            qText &&
            !html.includes(qText.slice(0, 40).replace(/&/g, "&amp;")) &&
            !html.includes(qText.slice(0, 40))
          )
            add(
              "WARN",
              path,
              `FAQ schema question not visible on page: "${qText.slice(0, 60)}"`,
            );
        }
      }
      const bc = JSON.stringify(data).includes("BreadcrumbList");
      if (bc) page.breadcrumb = true;
    } catch (e) {
      add("ERROR", path, `invalid JSON-LD: ${String(e).slice(0, 120)}`);
    }
  }
  page.schema = [...types];
  if (!ld.length) add("WARN", path, "no JSON-LD structured data");
  if (path !== "/" && !page.breadcrumb)
    add("INFO", path, "no BreadcrumbList schema");

  // images
  const imgs = html.match(/<img\b[^>]*>/gi) || [];
  const noAlt = imgs.filter((t) => attr(t, "alt") === null);
  if (noAlt.length)
    add("ERROR", path, `${noAlt.length} <img> without alt attribute`);
  const noDims = imgs.filter((t) => !attr(t, "width") || !attr(t, "height"));
  if (noDims.length)
    add("INFO", path, `${noDims.length} <img> without width/height (CLS risk)`);

  // links
  const anchors = html.match(/<a\b[^>]*>/gi) || [];
  let internalCount = 0;
  for (const a of anchors) {
    const href = attr(a, "href");
    if (
      !href ||
      href.startsWith("#") ||
      /^(mailto|tel|javascript|whatsapp):/i.test(href)
    )
      continue;
    let target;
    try {
      target = new URL(href, prodOrigin || base);
    } catch {
      add("WARN", path, `unparseable href ${href}`);
      continue;
    }
    const isInternal =
      target.origin === prodOrigin ||
      target.origin === base ||
      href.startsWith("/");
    if (isInternal) {
      internalCount++;
      const tp = target.pathname.replace(/\/$/, "") || "/";
      if (!internalLinks.has(tp)) internalLinks.set(tp, new Set());
      internalLinks.get(tp).add(path);
    } else if (
      (attr(a, "target") || "") === "_blank" &&
      !/noopener|noreferrer/.test(attr(a, "rel") || "")
    ) {
      add("INFO", path, `external _blank link without rel=noopener: ${href}`);
    }
  }
  page.internalLinks = internalCount;
  if (internalCount < 3)
    add("WARN", path, `only ${internalCount} internal links`);

  // blog posts: contextual links inside the article body + visible "Last updated" date.
  // The first <article> is the post (related cards come later); <nav> (breadcrumb, TOC, pillar
  // nav) and <aside> (TOC, author box, end CTA) are template links, so they don't count.
  if (/^\/insights\/[^/]+\/?$/.test(path)) {
    const article = html.match(/<article\b[\s\S]*?<\/article>/i)?.[0] || "";
    const body = article
      .replace(/<aside\b[\s\S]*?<\/aside>/gi, "")
      .replace(/<nav\b[\s\S]*?<\/nav>/gi, "");
    let bodyLinks = 0;
    for (const a of body.match(/<a\b[^>]*>/gi) || []) {
      const href = attr(a, "href");
      if (
        !href ||
        href.startsWith("#") ||
        /^(mailto|tel|javascript|whatsapp):/i.test(href)
      )
        continue;
      try {
        const t = new URL(href, prodOrigin || base);
        if (
          t.origin === prodOrigin ||
          t.origin === base ||
          href.startsWith("/")
        )
          bodyLinks++;
      } catch {
        /* reported above */
      }
    }
    page.articleLinks = bodyLinks;
    if (bodyLinks < 3)
      add(
        "WARN",
        path,
        `only ${bodyLinks} internal links in the article body (aim for 3-5)`,
      );
    if (!/Last updated[\s\S]{0,80}?<time\b[^>]*dateTime=/i.test(article))
      add(
        "WARN",
        path,
        `no visible "Last updated" <time dateTime> in the article`,
      );
  }

  // word count (rough, visible text in <main> if present)
  const main = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] || html;
  const text = decode(
    main
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " "),
  );
  page.words = text.split(" ").filter(Boolean).length;
  if (page.words < 300 && path !== "/contact")
    add("WARN", path, `thin content (~${page.words} words in main)`);
}

// ---------- cross-page checks ----------
const dup = (key, label) => {
  const m = new Map();
  for (const p of pages)
    if (p[key]) m.set(p[key], [...(m.get(p[key]) || []), p.path]);
  for (const [v, ps] of m)
    if (ps.length > 1)
      add("ERROR", ps.join(", "), `duplicate ${label}: "${v.slice(0, 80)}"`);
};
dup("title", "title");
dup("desc", "meta description");

// broken internal links
const checked = new Map();
for (const [tp, sources] of internalLinks) {
  if (/\.(png|jpe?g|svg|webp|ico|pdf|txt|xml)$/i.test(tp) && tp !== "/llms.txt")
    continue;
  if (!checked.has(tp)) {
    const r = await get(base + tp, { method: "GET" });
    checked.set(tp, r.status);
  }
  const st = checked.get(tp);
  if (st >= 400 || st === 0)
    add(
      "ERROR",
      [...sources].slice(0, 3).join(", "),
      `broken internal link -> ${tp} (${st})`,
    );
  else if (st >= 300)
    add(
      "WARN",
      [...sources].slice(0, 3).join(", "),
      `internal link redirects -> ${tp} (${st})`,
    );
  else if (!sitemapPaths.has(tp))
    add("INFO", tp, "linked internally (200) but not in sitemap");
}

// orphans
for (const p of pages) {
  const key = p.path.replace(/\/$/, "") || "/";
  if (key !== "/" && !internalLinks.has(key))
    add("WARN", p.path, "orphan: in sitemap but no internal links point to it");
}

// 404 handling
const nf = await get(base + "/this-page-should-not-exist-seo-audit");
if (nf.status !== 404)
  add(
    "ERROR",
    "/404",
    `unknown URL returned ${nf.status} instead of 404 (soft 404)`,
  );

// ---------- report ----------
const order = { ERROR: 0, WARN: 1, INFO: 2 };
issues.sort(
  (a, b) => order[a.level] - order[b.level] || a.url.localeCompare(b.url),
);
const count = (l) => issues.filter((i) => i.level === l).length;
const avgMs = pages.length
  ? Math.round(pages.reduce((s, p) => s + p.ms, 0) / pages.length)
  : 0;

let md = `# SEO audit: ${base}\n\nDate: ${new Date().toISOString()}\n\n`;
md += `Pages crawled: ${pages.length} | Errors: ${count("ERROR")} | Warnings: ${count("WARN")} | Info: ${count("INFO")} | Avg response: ${avgMs} ms\n\n`;
for (const lvl of ["ERROR", "WARN", "INFO"]) {
  const list = issues.filter((i) => i.level === lvl);
  if (!list.length) continue;
  md += `## ${lvl} (${list.length})\n\n`;
  for (const i of list) md += `- \`${i.url}\` ${i.msg}\n`;
  md += "\n";
}
md += `## Pages\n\n| Path | Status | ms | Words | Links | Body links | Schema |\n|---|---|---|---|---|---|---|\n`;
for (const p of pages)
  md += `| ${p.path} | ${p.status} | ${p.ms} | ${p.words ?? "-"} | ${p.internalLinks ?? "-"} | ${p.articleLinks ?? "-"} | ${(p.schema || []).join(", ")} |\n`;

if (outFile) {
  writeFileSync(outFile, md);
  console.log(`Report written to ${outFile}`);
}
console.log(md.split("## Pages")[0]);
process.exit(count("ERROR") ? 1 : 0);
