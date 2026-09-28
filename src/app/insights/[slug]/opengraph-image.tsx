import { ImageResponse } from "next/og";
import { POSTS, getPost } from "@/content/insights";
import { siteConfig } from "@/lib/site-config";
import { logoWhiteDataUri } from "@/lib/brand-image";

export const alt = `${siteConfig.name} Insights`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.title ?? `${siteConfig.name} Insights`;
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
          "radial-gradient(circle at 88% 12%, rgba(240,122,58,0.32), rgba(13,13,12,0) 55%), #0d0d0c",
        color: "#f2ede4",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img src={logo} width={400} height={50} alt="" />
        <div
          style={{
            display: "flex",
            padding: "10px 20px",
            borderRadius: 999,
            background: "rgba(240,122,58,0.18)",
            color: "#f07a3a",
            fontSize: 22,
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          {post?.category ?? "Insights"}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: title.length > 70 ? 60 : 72,
          lineHeight: 1.05,
          letterSpacing: -2,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", fontSize: 26, color: "#bdb7ac" }}>
        Insights · {post ? `${post.readingMinutes} min read` : "brightinfonet.com"}
      </div>
    </div>,
    size,
  );
}
