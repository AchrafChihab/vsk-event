import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import { faqItems } from '../data/homeContent';
import { Reveal } from '../components/Reveal';
import PageHero from './PageHero';

export default function FAQPage() {
  return (
    <div className="inner-page faq-page">
      <PageHero
        eyebrow="FAQ"
        title={<>Vos questions.<br />Nos réponses.</>}
        description="Les informations utiles pour préparer votre événement avec VSK Events."
      />
      <div id="page-content" className="inner-page__content">
        <section className="faq-page__list section-wrap" aria-label="Questions fréquentes">
          <FAQ
            items={faqItems}
            initiallyOpen={-1}
            title="Tout ce que vous devez savoir avant de nous contacter."
          />
        </section>
        <section className="inner-page__cta section-wrap">
          <Reveal>
            <p className="microcopy">Besoin d'un renseignement ?</p>
            <h2>Vous avez d'autres questions ?</h2>
            <Link className="button button-primary" to="/contact">
              Contactez-moi <ArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
