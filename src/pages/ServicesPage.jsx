import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, RevealImage, RevealText } from '../components/Reveal';
import { serviceCards } from '../data/services';
import PageHero from './PageHero';

export default function ServicesPage() {
  return (
    <div className="inner-page">
      <PageHero eyebrow="Prestations" title={<>Des prestations<br />pour chaque<br />événement.</>} description="Une proposition adaptée à votre événement, à votre lieu et à vos envies." />
      <div id="page-content" className="inner-page__content">
        <section className="service-overview section-wrap" aria-label="Toutes les prestations">
          {serviceCards.map((service, index) => (
            <article className={`service-overview__item${index % 2 ? ' is-reversed' : ''}`} key={service.id}>
              <RevealImage className="service-overview__media"><img src={service.image} alt={service.imageAlt} width="1122" height="1402" loading="lazy" decoding="async" /></RevealImage>
              <div className="service-overview__copy">
                <RevealText><span className="service-overview__number">0{index + 1}</span><h2>{service.title}</h2><p>{service.description}</p></RevealText>
                <Reveal>
                  {service.price ? <p className="service-overview__price">{service.price}</p> : <p className="service-overview__price">Sur demande</p>}
                  <Link className="text-link" to={service.path}>Découvrir <ArrowRight aria-hidden="true" /></Link>
                </Reveal>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
