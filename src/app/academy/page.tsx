import type { Metadata } from "next";
import styles from "@/components/home/Home.module.css";
import Header from "@/components/home/Header";
import Academy from "@/components/home/Academy";
import Footer from "@/components/home/Footer";

export const metadata: Metadata = {
  title: "Academy — Software Development & AI Courses in India",
  description:
    "Bright Infonet Academy: small-cohort courses in full-stack web, Flutter mobile, applied AI agents and software validation (GAMP 5), taught by working engineers.",
  alternates: {
    canonical: "/academy",
  },
};

export default function AcademyPage() {
  return (
    <div className={styles.root}>
      <a href="#main" className={styles.skip}>
        Skip to content
      </a>
      <Header />
      <main id="main" className={styles.pageTop}>
        <Academy />
      </main>
      <Footer />
    </div>
  );
}
