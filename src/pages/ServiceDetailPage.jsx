import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, RevealImage, RevealText } from '../components/Reveal';
import PageHero from './PageHero';

export default function ServiceDetailPage({ service }) {
  if (!service) return null;
  return (
    <div className="inner-page service-detail-page">
      <PageHero eyebrow={service.eyebrow} title={service.title} description={service.headline} image={service.image} imageAlt={service.imageAlt} variant="service">
        <span className="service-detail__hero-price">{service.price}</span>
        <Link className="button button-primary" to={`/contact?service=${encodeURIComponent(service.contactService)}`}>Demander un devis <ArrowRight aria-hidden="true" /></Link>
      </PageHero>
      <div id="page-content" className="inner-page__content">
        <section className="service-detail__intro section-wrap">
          <RevealText><p className="microcopy">Une prestation sur mesure</p><h2>{service.headline}</h2></RevealText>
          <Reveal><p>{service.description}</p></Reveal>
        </section>
        {service.sections.length > 0 ? (
          <section className="service-detail__included section-wrap" aria-labelledby="included-title">
            <RevealText><p className="microcopy">La prestation</p><h2 id="included-title">Ce qui est inclus</h2></RevealText>
            <div className="service-detail__groups">
              {service.sections.map((group) => <Reveal className="service-detail__group" key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>)}</ul></Reveal>)}
            </div>
          </section>
        ) : (
          <section className="service-detail__club section-wrap"><RevealImage><img src={service.image} alt={service.imageAlt} width="1122" height="1402" loading="lazy" /></RevealImage><Reveal><p className="microcopy">Un format à définir ensemble</p><h2>Parlons de votre soirée.</h2><p>Le format et les besoins sont à préciser selon le lieu et la soirée.</p></Reveal></section>
        )}
        <section className="service-detail__closing section-wrap">
          <Reveal><p className="microcopy">Prochaine étape</p><h2>Créons l’ambiance de votre événement.</h2><Link className="button button-primary" to={`/contact?service=${encodeURIComponent(service.contactService)}`}>Demander un devis <ArrowRight aria-hidden="true" /></Link></Reveal>
        </section>
      </div>
    </div>
  );
}
