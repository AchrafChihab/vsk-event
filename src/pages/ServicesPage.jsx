import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, RevealImage, RevealText } from '../components/Reveal';
import { siteImages } from '../data/images';
import PageHero from './PageHero';

const overviewServices = [
  {
    id: 'mariage',
    title: 'Mariages',
    description: "Un accompagnement musical pens\u00e9 pour chaque moment de votre journ\u00e9e \u2014 de l\u2019arriv\u00e9e des invit\u00e9s \u00e0 l\u2019ouverture de bal et jusqu\u2019\u00e0 la fin de la nuit.",
    price: 'À partir de 1 400 €',
    image: siteImages.services.wedding,
    imageAlt: "Illustration d'une ouverture de bal lors d'une réception de mariage",
    path: '/prestations/mariages',
  },
  {
    id: 'soiree-privee',
    title: 'Soirées privées',
    description: 'Anniversaires, soirées entre amis ou réceptions à votre image. Une programmation préparée selon vos goûts, un dispositif adapté à votre lieu.',
    price: 'À partir de 500 €',
    image: siteImages.services.private,
    imageAlt: "Invités réunis sur la piste lors d'une soirée",
    path: '/prestations/soirees-privees',
  },
  {
    id: 'entreprise',
    title: "Événements d'entreprise",
    description: "S\u00e9minaires, team buildings, galas ou r\u00e9ceptions professionnelles. Un accompagnement musical adapt\u00e9 \u00e0 votre public et au format de l\u2019\u00e9v\u00e9nement.",
    price: 'À partir de 600 €',
    image: siteImages.services.corporate,
    imageAlt: 'Salle préparée pour un événement professionnel',
    path: '/prestations/entreprises',
  },
];

export default function ServicesPage() {
  return (
    <div className="inner-page">
      <PageHero
        eyebrow="Prestations"
        title={<>Des prestations<br />pensées pour<br />votre événement.</>}
        description="Chaque événement est différent. VSK Events adapte l'expérience musicale selon votre lieu, votre public et l'ambiance que vous souhaitez créer."
      />
      <div id="page-content" className="inner-page__content">
        <section className="service-overview section-wrap" aria-label="Toutes les prestations">
          {overviewServices.map((service, index) => (
            <article
              className={`service-overview__item${index % 2 ? ' is-reversed' : ''}`}
              key={service.id}
            >
              <RevealImage className="service-overview__media">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  width="1122"
                  height="1402"
                  loading="lazy"
                  decoding="async"
                />
              </RevealImage>
              <div className="service-overview__copy">
                <RevealText>
                  <span className="service-overview__number">0{index + 1}</span>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </RevealText>
                <Reveal>
                  <p className="service-overview__price">{service.price}</p>
                  <Link className="text-link" to={service.path}>
                    Découvrir la prestation <ArrowRight aria-hidden="true" />
                  </Link>
                </Reveal>
              </div>
            </article>
          ))}
        </section>
        <section className="service-page-cta section-wrap">
          <Reveal>
            <p className="microcopy">Prêt à commencer ?</p>
            <h2>Discutons de votre événement.</h2>
            <Link className="button button-primary" to="/contact">
              Demander un devis <ArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
