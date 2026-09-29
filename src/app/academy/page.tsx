import type { Metadata } from "next";
import Link from "next/link";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  pageMetadata,
  postalAddressJsonLd,
  areaServedJsonLd,
} from "@/components/pages/seo";
import { ACADEMY_ID, courseJsonLd } from "@/components/pages/landing-seo";
import FaqSection from "@/components/pages/FaqSection";
import SectionHeading, { accent } from "@/components/home/SectionHeading";
import pages from "@/components/pages/Pages.module.css";
import landing from "@/components/pages/Landing.module.css";
import JsonLd from "@/lib/json-ld";
import styles from "@/components/home/Home.module.css";
import Header from "@/components/home/Header";
import Academy from "@/components/home/Academy";
import Footer from "@/components/home/Footer";
import { ACADEMY_PAGES } from "@/content/landing";
import { siteConfig } from "@/lib/site-config";

const description =
  "Bright Infonet Academy in the Chandigarh Tricity: small-cohort courses in full-stack web, Flutter, AI agents and software validation, taught by working engineers.";

export const metadata: Metadata = pageMetadata({
  path: "/academy",
  title: "Academy — IT Training Institute in Chandigarh Tricity",
  description,
  keywords: [
    "IT training institute Chandigarh",
    "software training Panchkula",
    "coding institute Mohali",
    "full stack course Chandigarh",
    "Flutter course Chandigarh",
    "AI course Chandigarh",
    "6 months industrial training Chandigarh",
  ],
});

const FAQS = [
  {
    q: "Where is Bright Infonet Academy?",
    a: "The Academy serves students across Panchkula, Mohali and Chandigarh. Web and Flutter tracks are hybrid with in-person Tricity sessions; the AI and software validation tracks are live online for learners anywhere in India.",
  },
  {
    q: "Which courses does the Academy offer?",
    a: "Four tracks: Full-stack Web (16 weeks), Mobile with Flutter (12 weeks), Applied AI & Agents (10 weeks) and Software Validation for pharma (8 weeks), plus project-based industrial training for B.Tech, BCA and MCA students.",
  },
  {
    q: "Who teaches the courses?",
    a: "Engineers from our software studio who build client web, mobile, AI and regulated software every week.",
  },
  {
    q: "What are the course fees?",
    a: "Fees depend on the track and format; contact us for the current fee and batch dates.",
  },
  {
    q: "Do you guarantee placement?",
    a: "No. We help with your portfolio, code reviews, CV and interview preparation, but we don’t promise jobs.",
  },
];

const url = `${siteConfig.url}/academy`;
const courses = ACADEMY_PAGES.filter((p) => p.kind === "course");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd("Academy", "/academy"),
    {
      "@type": "EducationalOrganization",
      "@id": ACADEMY_ID,
      name: `${siteConfig.name} Academy`,
      url,
      description,
      parentOrganization: { "@id": `${siteConfig.url}/#organization` },
      email: siteConfig.email,
      ...(siteConfig.phone && { telephone: siteConfig.phone }),
      address: postalAddressJsonLd(),
      areaServed: areaServedJsonLd(),
    },
    ...courses.map((p) =>
      courseJsonLd(p.trackIndex!, `${siteConfig.url}${p.path}`, p.description),
    ),
    faqJsonLd(FAQS, url),
  ],
};

export default function AcademyPage() {
  return (
    <div className={styles.root}>
      <a href="#main" className={styles.skip}>
        Skip to content
      </a>
      <JsonLd data={jsonLd} />
      <Header />
      <main id="main" className={styles.pageTop}>
        <Academy />

        <section
          className={pages.sectionPad}
          aria-labelledby="academy-pages-title"
        >
          <SectionHeading
            kicker="Courses & locations"
            id="academy-pages-title"
            title={["Find your ", accent("track.")]}
            lead="Full syllabus, format and FAQs for each course, plus training details for Panchkula, Mohali and Chandigarh."
          />
          <ul className={landing.relatedList}>
            {ACADEMY_PAGES.map((p) => (
              <li key={p.path}>
                <Link href={p.path}>
                  <span>{p.metaTitle}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <FaqSection faqs={FAQS} />
      </main>
      <Footer />
    </div>
  );
}
