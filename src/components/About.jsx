import { Link } from 'react-router-dom';
import { aboutContent } from '../data/homeContent';
import { siteImages } from '../data/images';
import { Reveal, RevealImage, RevealText } from './Reveal';

export default function About({ content = aboutContent }) {
  return (
    <section id="apropos" className="about-section section-wrap" aria-labelledby="about-title">
      <RevealImage className="about-portrait-wrap">
        <div className="portrait-frame">
          <img
            src={siteImages.about}
            alt="Portrait de Valentin dans un cadre naturel"
            width="542"
            height="820"
            loading="lazy"
          />
        </div>
        <span className="portrait-outline" aria-hidden="true" />
        <span className="signature" aria-hidden="true">Valentin</span>
      </RevealImage>

      <div className="about-copy">
        <RevealText>
          <p className="microcopy">À propos</p>
          <h2 id="about-title">{content.title}</h2>
        </RevealText>
        <Reveal>
          {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <Link to="/a-propos" className="text-link">Découvrir mon parcours <span aria-hidden="true">→</span></Link>
        </Reveal>
      </div>

    </section>
  );
}
