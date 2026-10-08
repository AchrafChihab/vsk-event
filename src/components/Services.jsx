import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services as defaultServices } from '../data/homeContent';
import { Reveal, RevealText } from './Reveal';

const CARD_CLASSES = [
  'service-card service-card--large',
  'service-card service-card--portrait',
  'service-card service-card--portrait-b',
  'service-card service-card--wide',
];

export default function Services({ items = defaultServices }) {
  return (
    <section id="prestations" className="services-section" aria-labelledby="services-title">
      <RevealText className="services-heading">
        <p className="microcopy">Prestations</p>
        <h2 id="services-title">Des prestations <em>sur mesure</em></h2>
      </RevealText>

      <div className="services-bento">
        {items.map((service, index) => (
          <Reveal
            key={service.title}
            className={CARD_CLASSES[index]}
            delay={index * 0.06}
          >
            <Link
              to={service.path ?? '/prestations'}
              aria-label={`Découvrir la prestation ${service.title}`}
              tabIndex={0}
            >
              <img
                className="service-card__image"
                src={service.image}
                alt={service.imageAlt}
                loading="lazy"
                decoding="async"
              />
              <div className="service-card__overlay" aria-hidden="true" />
              <span className="service-card__num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="service-card__content">
                <h3 className="service-card__title">{service.title}</h3>
                <span className="service-card__arrow" aria-hidden="true">
                  <ArrowRight />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
