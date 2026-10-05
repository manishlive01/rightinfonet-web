import type { NextConfig } from "next";
import { OLD_URL_REDIRECTS } from "./src/lib/redirects";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  // Old site URLs → new pages (308 permanent; Google treats it like 301).
  async redirects() {
    return OLD_URL_REDIRECTS.map((r) => ({ ...r, permanent: true }));
  },
};
export default nextConfig;
