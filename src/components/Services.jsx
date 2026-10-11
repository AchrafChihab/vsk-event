import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services as defaultServices } from '../data/homeContent';
import { Reveal, RevealText } from './Reveal';
import ResponsiveImage from './ResponsiveImage';

const CARD_CLASSES = [
  'service-card service-card--large',
  'service-card service-card--portrait',
  'service-card service-card--portrait-b',
  'service-card service-card--wide',
];

const CARD_SIZES = [
  '(max-width: 768px) 100vw, 67vw',
  '(max-width: 768px) 100vw, 33vw',
  '(max-width: 768px) 100vw, 33vw',
  '(max-width: 768px) 100vw, 67vw',
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
              aria-label={service.id === 'contact-cta' ? 'Demander un devis' : `Découvrir la prestation ${service.title}`}
              tabIndex={0}
            >
              <ResponsiveImage
                className="service-card__image"
                image={service.image}
                alt={service.imageAlt}
                sizes={CARD_SIZES[index]}
                loading="lazy"
              />
              <div className="service-card__overlay" aria-hidden="true" />
              {service.id !== 'contact-cta' && (
                <span className="service-card__num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              )}
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
