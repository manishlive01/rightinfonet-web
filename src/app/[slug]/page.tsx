import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingView from "@/components/pages/LandingView";
import { landingMetadata } from "@/components/pages/landing-seo";
import { LOCAL_PAGES, landingBySlug, slugOf } from "@/content/landing";

// Local pages (/mobile-app-development-panchkula …) live at the site root; anything else 404s.
export const dynamicParams = false;
// Hourly, so related links to scheduled posts appear on their publish day.
export const revalidate = 3600;

export function generateStaticParams() {
  return LOCAL_PAGES.map((p) => ({ slug: slugOf(p) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const page = landingBySlug(LOCAL_PAGES, (await params).slug);
  return page ? landingMetadata(page) : {};
}

export default async function LocalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const page = landingBySlug(LOCAL_PAGES, (await params).slug);
  if (!page) notFound();
  return <LandingView page={page} />;
}
