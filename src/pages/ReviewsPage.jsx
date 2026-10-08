import PageHero from './PageHero';
import { Reveal } from '../components/Reveal';

// Keep reviews data-driven; render entries only after the client supplies verified copy.
export const verifiedReviews = [];

export default function ReviewsPage() {
  return (
    <div className="inner-page">
      <PageHero eyebrow="Avis" title="La parole aux clients." description="Les retours seront publiés ici lorsqu’ils auront été validés et transmis par les clients." />
      <div id="page-content" className="inner-page__content">
        <section className="reviews-empty section-wrap" aria-live="polite">
          {verifiedReviews.length ? verifiedReviews.map((review) => <Reveal className="reviews-empty__review" key={`${review.name}-${review.event}`}><span className="reviews-empty__mark" aria-hidden="true">“</span><blockquote>{review.quote}</blockquote><p>{review.name} · {review.event}</p></Reveal>) : <Reveal><span className="reviews-empty__mark" aria-hidden="true">“</span><h2>Les premiers avis arrivent bientôt.</h2><p>Aucun témoignage vérifié n’est disponible pour le moment.</p></Reveal>}
        </section>
      </div>
    </div>
  );
}
