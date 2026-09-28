import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Home from "@/components/home/Home";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <Home />;
}
