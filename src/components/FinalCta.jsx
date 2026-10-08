import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteImages } from '../data/images';
import { RevealText } from './Reveal';

export default function FinalCta({ href = '/contact' }) {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <img
        className="final-cta-image"
        src={siteImages.cta}
        alt=""
        width="1916"
        height="821"
        loading="lazy"
        aria-hidden="true"
      />
      <div className="final-cta-overlay" aria-hidden="true" />
      <RevealText className="final-cta-content">
        <h2 id="final-cta-title">
          <span className="final-cta-line">Votre événement.</span>
          <span className="final-cta-line">Votre public.</span>
          <span className="final-cta-line final-cta-line--accent">La bonne ambiance.</span>
        </h2>
        <Link className="button button-primary" to={href}>Demander mon devis <ArrowRight aria-hidden="true" /></Link>
      </RevealText>
    </section>
  );
}
