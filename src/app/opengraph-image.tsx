import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";
import { logoWhiteDataUri } from "@/lib/brand-image";

export const alt = `${siteConfig.name} — AI-first software development company in India`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await logoWhiteDataUri();
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background:
          "radial-gradient(circle at 85% 20%, rgba(240,122,58,0.35), rgba(13,13,12,0) 55%), #0d0d0c",
        color: "#f2ede4",
      }}
    >
      <img src={logo} width={400} height={50} alt="" />
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div
          style={{ display: "flex", flexWrap: "wrap", fontSize: 84, lineHeight: 1.05, letterSpacing: -2 }}
        >
          <span>We build software that&nbsp;</span>
          <span style={{ color: "#f07a3a" }}>thinks.</span>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#bdb7ac" }}>
          Web platforms · Mobile apps · AI agents · GxP software — India
        </div>
      </div>
    </div>,
    size,
  );
}
