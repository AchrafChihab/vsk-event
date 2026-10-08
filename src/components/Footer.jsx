import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { primaryNavigation, serviceNavigation } from '../data/navigation';

export default function Footer({ year = new Date().getFullYear() }) {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">

        {/* ── Level 1: Editorial CTA ── */}
        <div className="footer-cta">
          <div className="footer-cta__headline-wrap">
            <p className="footer-cta__eyebrow">Un projet en tête&nbsp;?</p>
            <h2 className="footer-cta__headline">
              Faisons de votre<br />
              événement un moment<br />
              <em>qui vous ressemble.</em>
            </h2>
          </div>
          <Link to="/contact" className="footer-cta__btn">
            Demander un devis <ArrowRight aria-hidden="true" />
          </Link>
        </div>

        {/* ── Divider ── */}
        <div className="footer-rule" aria-hidden="true">
          <span className="footer-rule__accent" />
        </div>

        {/* ── Level 2: Brand + Navigation ── */}
        <div className="footer-mid">
          <div className="footer-brand">
            <Link className="footer-brand__wordmark" to="/" aria-label="VSK Events — retour à l'accueil">
              <span className="footer-brand__vsk" aria-hidden="true">VSK</span>
              <span className="footer-brand__events" aria-hidden="true">EVENTS</span>
            </Link>
            <p className="footer-brand__tagline">
              Chaque soirée, une ambiance<br />
              <em>taillée sur mesure.</em>
            </p>
          </div>

          <nav className="footer-nav" aria-label="Navigation de pied de page">
            <div className="footer-nav__group">
              <span className="footer-nav__label">Navigation</span>
              {primaryNavigation
                .filter(({ to }) => to !== '/avis')
                .map(({ label, to }) => (
                  <Link to={to} key={to}>{label}</Link>
                ))}
            </div>
            <div className="footer-nav__group">
              <span className="footer-nav__label">Prestations</span>
              {serviceNavigation.map(({ label, to }) => (
                <Link to={to} key={to}>{label}</Link>
              ))}
            </div>
          </nav>
        </div>

        {/* ── Level 3: Giant brand signature ── */}
        <div className="footer-signature" aria-hidden="true">
          <span className="footer-signature__text">VSK Events</span>
        </div>

        {/* ── Bottom meta bar ── */}
        <div className="footer-meta">
          <span className="footer-meta__copy">
            &copy; {year} VSK Events &mdash; Tous droits réservés
          </span>
          <span className="footer-meta__location">
            DJ animateur &middot; Grand Est, France
          </span>
          <span className="footer-meta__credit">
            Conçu &amp; développé par{' '}
            <a
              href="https://ashrafchihab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-meta__credit-link"
            >
              ashrafchihab.com <ArrowUpRight aria-hidden="true" />
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
}
