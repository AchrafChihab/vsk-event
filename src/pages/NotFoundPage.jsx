import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Reveal } from '../components/Reveal';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="not-found-page section-wrap">
      <Reveal><p className="microcopy">Erreur 404</p><h1>Cette page n’est pas dans le programme.</h1><p>Le lien est peut-être incorrect ou la page a été déplacée.</p><div className="not-found-page__actions"><button type="button" className="text-link" onClick={() => navigate(-1)}><ArrowLeft aria-hidden="true" /> Retour</button><Link to="/" className="button button-primary">Accueil <ArrowRight aria-hidden="true" /></Link></div></Reveal>
    </div>
  );
}
