import Link from "next/link";
import type { ReactNode } from "react";
import { isPostSlugPublished } from "@/content/insights";

/**
 * Link to a blog post that only becomes a link once the post is live. Until its `published` day
 * the children render as plain text, so scheduled posts never leak through internal links.
 */
export default function PostLink({
  slug,
  children,
  className,
}: {
  slug: string;
  children: ReactNode;
  className?: string;
}) {
  if (!isPostSlugPublished(slug)) return <>{children}</>;
  return (
    <Link href={`/insights/${slug}`} className={className}>
      {children}
    </Link>
  );
}
