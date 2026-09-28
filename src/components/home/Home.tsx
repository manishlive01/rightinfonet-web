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
import Tone from "./Tone";

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
        <Tone kind="raised">
          <Services />
        </Tone>
        <Work />
        <Tone kind="navy">
          <Industries />
        </Tone>
        <Process />
        <Tone kind="raised">
          <About />
        </Tone>
        <AcademyTeaser />
        <InsightsTeaser />
        <Tone kind="ember">
          <Contact />
        </Tone>
      </main>
      <Footer />
    </div>
  );
}
