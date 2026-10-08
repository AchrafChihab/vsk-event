import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, RevealImage, RevealText } from '../components/Reveal';
import PageHero from './PageHero';

const PREFIX = 'À partir de ';

const ctaLabel = {
  mariage: 'Parler de votre mariage',
  'soiree-privee': 'Organiser ma soirée',
  entreprise: 'Échanger sur votre événement',
};

export default function ServiceDetailPage({ service }) {
  if (!service) return null;

  const priceAmount = service.price ? service.price.replace(PREFIX, '') : null;
  const contactLink = `/contact?service=${encodeURIComponent(service.contactService)}`;

  return (
    <div className="inner-page service-detail-page">
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.headline}
        image={service.image}
        imageAlt={service.imageAlt}
        variant="service"
      >
        <span className="service-detail__hero-price">{service.price}</span>
        <Link className="button button-primary" to={contactLink}>
          Demander un devis <ArrowRight aria-hidden="true" />
        </Link>
      </PageHero>

      <div id="page-content" className="inner-page__content">

        <section className="service-detail__intro section-wrap">
          <RevealText>
            <p className="microcopy">Une prestation sur mesure</p>
            <h2>{service.headline}</h2>
          </RevealText>
          <Reveal><p>{service.description}</p></Reveal>
        </section>

        {service.sections.length > 0 ? (
          <section className="service-detail__included section-wrap" aria-labelledby="included-title">
            <RevealText>
              <p className="microcopy">La prestation</p>
              <h2 id="included-title">Ce qui est inclus</h2>
            </RevealText>
            <div className="service-detail__groups">
              {service.sections.map((group) => (
                <Reveal className="service-detail__group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <Check aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </section>
        ) : (
          <section className="service-detail__club section-wrap">
            <RevealImage>
              <img src={service.image} alt={service.imageAlt} width="1122" height="1402" loading="lazy" />
            </RevealImage>
            <Reveal>
              <p className="microcopy">Un format à définir ensemble</p>
              <h2>Parlons de votre soirée.</h2>
              <p>Le format et les besoins sont à préciser selon le lieu et la soirée.</p>
            </Reveal>
          </section>
        )}

        {priceAmount ? (
          <section className="service-detail__pricing section-wrap">
            <Reveal>
              <div className="pricing-block">
                <p className="pricing-block__label">{service.title}</p>
                <p className="pricing-block__eyebrow">À partir de</p>
                <p className="pricing-block__amount">{priceAmount}</p>
                <p className="pricing-block__note">
                  Chaque événement étant unique, un devis personnalisé est établi selon vos besoins, le lieu et la configuration souhaitée.
                </p>
                <Link className="button button-primary" to={contactLink}>
                  {ctaLabel[service.id] ?? 'Demander un devis'} <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </section>
        ) : (
          <section className="service-detail__closing section-wrap">
            <Reveal>
              <p className="microcopy">Prochaine étape</p>
              <h2>Créons l&apos;ambiance de votre événement.</h2>
              <Link className="button button-primary" to={contactLink}>
                Demander un devis <ArrowRight aria-hidden="true" />
              </Link>
            </Reveal>
          </section>
        )}

      </div>
    </div>
  );
}
