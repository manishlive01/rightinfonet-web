#!/usr/bin/env node
/**
 * Submit every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver…). Zero
 * dependencies, Node 18+. OWNER-RUN ONLY: run it after a deploy that adds or changes pages.
 *
 * Usage (PowerShell):
 *   $env:INDEXNOW_KEY="your-key"; node scripts/indexnow-submit.mjs https://www.brightinfonet.com
 *   node scripts/indexnow-submit.mjs https://www.brightinfonet.com --dry-run
 *
 * The same INDEXNOW_KEY must be set on the deployed site, so that <site>/indexnow.txt returns
 * the key (the script checks this before submitting).
 */
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const site = (args.find((a) => /^https?:\/\//.test(a)) || process.env.NEXT_PUBLIC_SITE_URL || "https://www.brightinfonet.com").replace(/\/$/, "");
const key = (process.env.INDEXNOW_KEY || "").trim();

if (!/^[A-Za-z0-9-]{8,128}$/.test(key)) {
  console.error("Set INDEXNOW_KEY (8-128 letters, digits or dashes) before running.");
  process.exit(1);
}

const keyLocation = `${site}/indexnow.txt`;
const keyRes = await fetch(keyLocation);
const served = keyRes.ok ? (await keyRes.text()).trim() : "";
if (served !== key) {
  console.error(`${keyLocation} does not return the key (HTTP ${keyRes.status}). Deploy with INDEXNOW_KEY set first.`);
  process.exit(1);
}

const sitemapRes = await fetch(`${site}/sitemap.xml`);
if (!sitemapRes.ok) {
  console.error(`Could not read ${site}/sitemap.xml (HTTP ${sitemapRes.status}).`);
  process.exit(1);
}
const xml = await sitemapRes.text();
const host = new URL(site).host;
const urlList = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)]
  .map((m) => m[1])
  .filter((u) => new URL(u).host === host);

if (!urlList.length) {
  console.error("No URLs for this host found in the sitemap.");
  process.exit(1);
}

console.log(`${urlList.length} URLs from ${site}/sitemap.xml`);
if (dryRun) {
  console.log(urlList.join("\n"));
  process.exit(0);
}

// One request takes up to 10,000 URLs.
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation, urlList: urlList.slice(0, 10000) }),
});
console.log(`IndexNow responded ${res.status} ${res.statusText}`);
// 200 = accepted, 202 = accepted (key validation pending); anything else is a failure.
process.exit(res.status === 200 || res.status === 202 ? 0 : 1);
