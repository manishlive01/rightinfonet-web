import type { ReactNode } from "react";
import home from "../home/Home.module.css";
import Header from "../home/Header";
import Footer from "../home/Footer";
import JsonLd from "@/lib/json-ld";

/** Shell shared by the inner pages: skip link, header, main landmark and footer. */
export default function PageLayout({
  children,
  jsonLd,
}: {
  children: ReactNode;
  jsonLd?: Record<string, unknown>;
}) {
  return (
    <div className={home.root}>
      <a href="#main" className={home.skip}>
        Skip to content
      </a>
      {jsonLd && <JsonLd data={jsonLd} />}
      <Header />
      <main id="main" className={home.pageTop}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
