import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { eventTypes } from '../data/homeContent';
import { Reveal, RevealText } from './Reveal';

export default function Contact({ types = eventTypes, onSubmit, selectedType = '' }) {
  const [eventType, setEventType] = useState(selectedType);

  useEffect(() => setEventType(selectedType), [selectedType]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.(event);
  };

  return (
    <section id="contact" className="contact-section section-wrap" aria-labelledby="contact-title">
      <div className="contact-layout">
        <RevealText className="contact-copy">
          <p className="microcopy">Votre événement</p>
          <h2 id="contact-title">Demandez votre devis <em>dès maintenant</em></h2>
          <p>Parlez-moi de votre projet. Je vous réponds rapidement pour construire votre soirée.</p>
        </RevealText>

        <Reveal className="contact-form-wrap">
          <form className="contact-form" onSubmit={handleSubmit} aria-describedby="contact-form-note">
            <label>
              <span>Nom</span>
              <input name="name" autoComplete="name" placeholder="Votre nom" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" autoComplete="email" placeholder="vous@email.fr" required />
            </label>
            <label>
              <span>Téléphone</span>
              <input type="tel" name="phone" autoComplete="tel" placeholder="Votre numéro" />
            </label>
            <label>
              <span>Date de l’événement</span>
              <input type="date" name="eventDate" />
            </label>
            <label>
              <span>Lieu</span>
              <input name="location" autoComplete="street-address" placeholder="Ville ou lieu" />
            </label>
            <label>
              <span>Type d’événement</span>
              <select name="eventType" value={eventType} onChange={(event) => setEventType(event.target.value)}>
                <option value="" disabled>Sélectionnez une prestation</option>
                {types.map((type) => <option key={type} value={type}>{type}</option>)}
              </select>
            </label>
            <label>
              <span>Nombre d’invités</span>
              <input type="number" name="guestCount" min="1" inputMode="numeric" placeholder="Nombre estimé" />
            </label>
            <label className="form-wide">
              <span>Message</span>
              <textarea name="message" placeholder="Décrivez votre événement et l’ambiance souhaitée" required />
            </label>
            <p id="contact-form-note" className="form-note form-wide">
              L’envoi en ligne n’est pas encore configuré. Vos informations ne seront pas transmises tant qu’un moyen de contact n’aura pas été connecté.
            </p>
            <button className="button button-primary form-wide" type="submit">
              Préparer ma demande <ArrowRight aria-hidden="true" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
