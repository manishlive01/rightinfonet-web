import styles from "./Home.module.css";
import Header from "./Header";
import Hero from "./Hero";
import Proof from "./Proof";
import Services from "./Services";
import Work from "./Work";
import Industries from "./Industries";
import Process from "./Process";
import About from "./About";
import AcademyTeaser from "./AcademyTeaser";
import InsightsTeaser from "./InsightsTeaser";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className={styles.root}>
      <a href="#main" className={styles.skip}>
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Proof />
        <Services />
        <Work />
        <Industries />
        <Process />
        <About />
        <AcademyTeaser />
        <InsightsTeaser />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
