import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import PageHero from './PageHero';

// Keep reviews data-driven; render entries only after the client supplies verified copy.
export const verifiedReviews = [];

export default function ReviewsPage() {
  return (
    <div className="inner-page reviews-page">
      <PageHero
        eyebrow="Avis clients"
        title={<>La parole<br />aux clients.</>}
        description="Les retours seront publiés ici une fois validés et transmis par les clients."
      />
      <div id="page-content" className="inner-page__content">
        {verifiedReviews.length > 0 ? (
          <section className="reviews-list section-wrap">
            {verifiedReviews.map((review) => (
              <Reveal className="review-card" key={`${review.name}-${review.event}`}>
                <blockquote className="review-card__quote">{review.quote}</blockquote>
                <footer className="review-card__footer">
                  <span className="review-card__name">{review.name}</span>
                  <span className="review-card__event">{review.event}</span>
                </footer>
              </Reveal>
            ))}
          </section>
        ) : (
          <section className="reviews-empty section-wrap" aria-live="polite">
            <Reveal>
              <div className="reviews-empty__inner">
                <span className="reviews-empty__mark" aria-hidden="true">"</span>
                <h2>Les témoignages arrivent bientôt.</h2>
                <p>Les premiers avis clients seront publiés ici après validation.</p>
                <Link className="button button-primary" to="/contact">
                  Planifier votre événement <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </section>
        )}
      </div>
    </div>
  );
}
