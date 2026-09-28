import styles from "./Home.module.css";
import Header from "./Header";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Proof from "./Proof";
import Services from "./Services";
import Work from "./Work";
import Industries from "./Industries";
import Process from "./Process";
import About from "./About";
import AcademyTeaser from "./AcademyTeaser";
import Contact from "./Contact";
import Footer from "./Footer";
import WaveReveal from "./motion/WaveReveal";

export default function Home() {
  return (
    <div className={styles.root}>
      <a href="#main" className={styles.skip}>
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <WaveReveal>
          <Proof />
        </WaveReveal>
        <WaveReveal>
          <Services />
        </WaveReveal>
        <WaveReveal>
          <Work />
        </WaveReveal>
        <WaveReveal>
          <Industries />
        </WaveReveal>
        <WaveReveal>
          <Process />
        </WaveReveal>
        <WaveReveal>
          <About />
        </WaveReveal>
        <WaveReveal>
          <AcademyTeaser />
        </WaveReveal>
        <WaveReveal>
          <Contact />
        </WaveReveal>
      </main>
      <Footer />
    </div>
  );
}
