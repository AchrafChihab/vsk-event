import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, RevealImage, RevealText } from '../components/Reveal';
import ResponsiveImage from '../components/ResponsiveImage';
import { imageLibrary } from '../data/images';

// Keep reviews data-driven; render entries only after the client supplies verified copy.
export const verifiedReviews = [];

const eventProof = [
  {
    image: { ...imageLibrary.djWarmLandscape, position: '62% 46%' },
    alt: 'Valentin aux commandes de sa régie pendant une soirée',
    label: 'Mariages',
    className: 'reviews-proof__item--main',
  },
  {
    image: { ...imageLibrary.djAtMixer, position: '50% 44%' },
    alt: 'Valentin mixe pendant une prestation VSK',
    label: 'Soirées privées',
    className: 'reviews-proof__item--portrait',
  },
  {
    image: { ...imageLibrary.corporateShow, position: '50% 56%' },
    alt: "Régie VSK installée lors d'un événement professionnel",
    label: "Événements d'entreprise",
    className: 'reviews-proof__item--landscape',
  },
];

const approachPrinciples = [
  {
    number: '01',
    title: 'Écouter',
    description: 'Comprendre vos goûts, les moments forts à accompagner et les titres à éviter.',
  },
  {
    number: '02',
    title: "S'adapter",
    description: "Lire la salle et ajuster la programmation à l'énergie des invités, en temps réel.",
  },
  {
    number: '03',
    title: 'Faire vivre',
    description: 'Accompagner chaque moment avec un dispositif sonore et lumineux adapté.',
  },
];

function ReviewEntry({ review, featured = false, index }) {
  const firstName = review.firstName ?? review.name;
  const eventType = review.eventType ?? review.event;

  return (
    <Reveal
      className={`review-entry${featured ? ' review-entry--featured' : ''}`}
      delay={featured ? 0 : Math.min(index * 0.05, 0.2)}
    >
      <article>
        <span className="review-entry__mark" aria-hidden="true">“</span>
        <blockquote>{review.quote}</blockquote>
        <footer>
          <cite>{firstName}</cite>
          <span>{eventType}</span>
        </footer>
      </article>
    </Reveal>
  );
}

export default function ReviewsPage() {
  const [featuredReview, ...otherReviews] = verifiedReviews;

  return (
    <div className="inner-page reviews-page">
      <section className="reviews-experience-hero" aria-labelledby="reviews-title">
        <ResponsiveImage
          className="reviews-experience-hero__image"
          image={{ ...imageLibrary.djCrowdPov, position: '52% 43%' }}
          alt="Valentin mixe face aux invités pendant une soirée VSK"
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
        />
        <span className="reviews-experience-hero__shade" aria-hidden="true" />
        <div className="reviews-experience-hero__inner section-wrap">
          <RevealText className="reviews-experience-hero__copy">
            <p className="microcopy">Avis &amp; expériences</p>
            <h1 id="reviews-title">
              <span>Ils sont venus</span>
              <span>pour la soirée.</span>
              <span>Ils sont repartis</span>
              <span>avec des <em>souvenirs.</em></span>
            </h1>
          </RevealText>
        </div>
      </section>

      <div id="page-content" className="inner-page__content">
        <section className="reviews-proof section-wrap" aria-labelledby="reviews-proof-title">
          <RevealText className="reviews-proof__heading">
            <p className="microcopy">Sur le terrain</p>
            <h2 id="reviews-proof-title">Des moments<br />qui parlent <em>d'eux-mêmes.</em></h2>
          </RevealText>

          <div className="reviews-proof__grid">
            {eventProof.map((item, index) => (
              <RevealImage
                className={`reviews-proof__item ${item.className}`}
                delay={index * 0.07}
                key={item.label}
              >
                <figure>
                  <ResponsiveImage
                    image={item.image}
                    alt={item.alt}
                    sizes={index === 0 ? '(max-width: 768px) 100vw, 62vw' : '(max-width: 768px) 50vw, 38vw'}
                    loading="lazy"
                  />
                  <figcaption>{item.label}</figcaption>
                </figure>
              </RevealImage>
            ))}
          </div>
        </section>

        <section className="reviews-approach" aria-labelledby="reviews-approach-title">
          <div className="reviews-approach__inner section-wrap">
            <RevealText className="reviews-approach__heading">
              <p className="microcopy">L'approche VSK</p>
              <h2 id="reviews-approach-title">Plus qu'une playlist,<br /><em>une ambiance à construire.</em></h2>
            </RevealText>

            <div className="reviews-approach__content">
              <Reveal>
                <p className="reviews-approach__intro">
                  Chaque prestation se prépare selon votre événement, vos goûts musicaux et l'ambiance souhaitée. La programmation reste adaptable à l'énergie de la salle.
                </p>
              </Reveal>
              <ol className="reviews-principles">
                {approachPrinciples.map((principle, index) => (
                  <li key={principle.number}>
                    <Reveal className="reviews-principle" delay={index * 0.07}>
                      <span>{principle.number}</span>
                      <h3>{principle.title}</h3>
                      <p>{principle.description}</p>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="reviews-testimonials section-wrap" aria-labelledby="reviews-testimonials-title">
          <span className="reviews-testimonials__mark" aria-hidden="true">“</span>
          <RevealText className="reviews-testimonials__heading">
            <p className="microcopy">Témoignages</p>
            <h2 id="reviews-testimonials-title">
              {featuredReview ? 'Leurs mots.' : <>Vos mots,<br /><em>bientôt ici.</em></>}
            </h2>
          </RevealText>

          {featuredReview ? (
            <div className="reviews-testimonials__reviews" aria-label="Témoignages clients">
              <ReviewEntry review={featuredReview} featured index={0} />
              {otherReviews.length > 0 ? (
                <div className="reviews-list__secondary">
                  {otherReviews.map((review, index) => (
                    <ReviewEntry
                      review={review}
                      index={index + 1}
                      key={`${review.firstName ?? review.name}-${review.eventType ?? review.event}-${index}`}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            <Reveal className="reviews-testimonials__pending">
              <p>Les premiers témoignages seront bientôt partagés ici.</p>
            </Reveal>
          )}
        </section>

        <section className="reviews-final-cta section-wrap" aria-labelledby="reviews-cta-title">
          <ResponsiveImage
            className="reviews-final-cta__image"
            image={{ ...imageLibrary.crewAtEvent, position: 'center 48%' }}
            alt="L'équipe VSK réunie pendant une prestation"
            sizes="(max-width: 768px) 100vw, 92vw"
            loading="lazy"
          />
          <span className="reviews-final-cta__shade" aria-hidden="true" />
          <Reveal className="reviews-final-cta__content">
            <p className="microcopy">À votre tour</p>
            <h2 id="reviews-cta-title">Créons une soirée<br />dont on parlera<br /><em>encore demain.</em></h2>
            <Link className="button button-primary" to="/contact">
              Demander un devis <ArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
