import { useOutletContext } from 'react-router-dom';
import { galleryItems } from './data/homeContent';
import { serviceCards } from './data/services';
import About from './components/About';
import HomeContact from './components/HomeContact';
import FAQ from './components/FAQ';
import FinalCta from './components/FinalCta';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';

export default function HomePage() {
  const { heroReady } = useOutletContext();

  return (
    <>
      <Hero ready={heroReady} />
      <Marquee />
      <About />
      <Services items={serviceCards} />
      <Gallery items={galleryItems} />
      <FAQ initiallyOpen={-1} />
      <HomeContact />
      <FinalCta href="/contact" />
    </>
  );
}
