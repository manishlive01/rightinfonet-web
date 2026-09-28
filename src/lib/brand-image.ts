import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** The white logo as a data URI, for next/og share images (read from disk at build time). */
export async function logoWhiteDataUri() {
  const svg = await readFile(join(process.cwd(), "public/brand/logo-white.svg"), "utf8");
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
