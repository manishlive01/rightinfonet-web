// Verifies every old-URL redirect against a running server.
// Usage: node --experimental-strip-types --no-warnings scripts/check-redirects.mjs http://localhost:3100
import { OLD_URL_REDIRECTS } from "../src/lib/redirects.ts";

const base = (process.argv[2] || "http://localhost:3100").replace(/\/$/, "");
const SAMPLES = {
  "/blog/:path+": "/blog/old-post",
  "/blogs/:path+": "/blogs/old-post",
  "/tutorials/:path+": "/tutorials/java",
  "/courses/:path+": "/courses/java",
};
const STAY_404 = ["/privacy", "/terms"];

let fail = 0;
const pathOf = (u) => new URL(u, base).pathname;

async function check(path, destination) {
  let res = await fetch(base + path, { redirect: "manual" });
  const first = res.status;
  let url = base + path;
  let hops = 0;
  while (res.status >= 300 && res.status < 400 && hops < 4) {
    url = new URL(res.headers.get("location"), url).toString();
    res = await fetch(url, { redirect: "manual" });
    hops++;
  }
  const want = destination.split("#")[0];
  const ok = first === 308 && res.status === 200 && pathOf(url) === want;
  if (!ok) fail++;
  console.log(`${ok ? "PASS" : "FAIL"} ${path} -> ${first} ... ${res.status} ${pathOf(url)} (${hops} hops)`);
}

for (const r of OLD_URL_REDIRECTS) {
  if (r.source.includes(":")) {
    await check(SAMPLES[r.source] ?? r.source.replace(/\/:path\+$/, "/x"), r.destination);
  } else {
    await check(r.source, r.destination);
    await check(r.source + "/", r.destination);
  }
}
for (const p of STAY_404) {
  const res = await fetch(base + p, { redirect: "manual" });
  const ok = res.status === 404;
  if (!ok) fail++;
  console.log(`${ok ? "PASS" : "FAIL"} ${p} stays 404 (${res.status})`);
}
console.log(fail ? `\n${fail} FAILED` : "\nAll redirects PASS");
process.exit(fail ? 1 : 0);
