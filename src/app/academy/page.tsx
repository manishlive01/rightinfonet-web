import type { Metadata } from "next";
import { breadcrumbJsonLd, pageMetadata } from "@/components/pages/seo";
import JsonLd from "@/lib/json-ld";
import styles from "@/components/home/Home.module.css";
import Header from "@/components/home/Header";
import Academy from "@/components/home/Academy";
import Footer from "@/components/home/Footer";

export const metadata: Metadata = pageMetadata({
  path: "/academy",
  title: "Academy — Software Development & AI Courses in India",
  description:
    "Bright Infonet Academy: small-cohort courses in full-stack web, Flutter mobile, applied AI agents and software validation (GAMP 5), taught by working engineers.",
});

export default function AcademyPage() {
  return (
    <div className={styles.root}>
      <a href="#main" className={styles.skip}>
        Skip to content
      </a>
      <JsonLd
        data={{ "@context": "https://schema.org", ...breadcrumbJsonLd("Academy", "/academy") }}
      />
      <Header />
      <main id="main" className={styles.pageTop}>
        <Academy />
      </main>
      <Footer />
    </div>
  );
}
