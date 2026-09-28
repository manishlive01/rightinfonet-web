import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — AI-first software development company in India`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
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
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34, fontWeight: 600 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 999,
              border: "3px solid #f07a3a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 999, background: "#f07a3a" }} />
          </div>
          bright infonet
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", fontSize: 92, lineHeight: 1, letterSpacing: -3 }}>
            We build software that&nbsp;<span style={{ color: "#f07a3a" }}>thinks.</span>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#bdb7ac" }}>
            Web platforms · Mobile apps · AI agents · GxP software — India
          </div>
        </div>
      </div>
    ),
    size,
  );
}
