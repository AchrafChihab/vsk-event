import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { eventTypes } from '../data/homeContent';
import { Reveal, RevealText } from './Reveal';

export default function HomeContact({ types = eventTypes }) {
  const [eventType, setEventType] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const params = new URLSearchParams();
    if (data.get('name')) params.set('name', data.get('name'));
    if (data.get('email')) params.set('email', data.get('email'));
    if (eventType) params.set('service', eventType);
    if (data.get('eventDate')) params.set('date', data.get('eventDate'));
    navigate(`/contact?${params.toString()}`);
  };

  return (
    <section id="contact" className="contact-cta-section" aria-labelledby="home-contact-title">
      <div className="contact-cta-layout">
        <RevealText className="contact-cta-copy">
          <p className="microcopy">Votre événement</p>
          <h2 id="home-contact-title">
            Parlons de <em>votre</em> événement.
          </h2>
          <p>
            Décrivez votre projet en quelques lignes. Je vous réponds rapidement
            pour construire l'ambiance qui correspond à vos invités.
          </p>
        </RevealText>

        <Reveal className="contact-cta-form" delay={0.1}>
          <form onSubmit={handleSubmit} aria-label="Formulaire de contact rapide">
            <label>
              <span>Nom</span>
              <input
                name="name"
                autoComplete="name"
                placeholder="Votre nom"
                required
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="vous@email.fr"
                required
              />
            </label>
            <label>
              <span>Type d'événement</span>
              <select
                name="eventType"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                aria-label="Type d'événement"
              >
                <option value="" disabled>Sélectionnez</option>
                {types.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </label>
            <label>
              <span>Date souhaitée</span>
              <input type="date" name="eventDate" aria-label="Date souhaitée" />
            </label>
            <div className="cta-form-wide cta-form-actions">
              <button className="button button-primary" type="submit">
                Envoyer ma demande <ArrowRight aria-hidden="true" />
              </button>
              <Link to="/contact" className="cta-form-secondary">
                Formulaire complet →
              </Link>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
