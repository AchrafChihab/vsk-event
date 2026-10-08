import { siteImages } from './images';

// Replace this single image reference when VSK supplies its own event photos.
export const serviceDetails = {
  mariage: {
    id: 'mariage',
    path: '/prestations/mariages',
    title: 'Mariages',
    eyebrow: 'Une journée unique',
    headline: 'Votre jour. Votre ambiance. Vos souvenirs.',
    description: 'Une ambiance pensée avec vous, pour accompagner chaque moment de votre journée et faire danser vos invités.',
    price: 'À partir de 1 400 €',
    image: siteImages.services.wedding,
    imageAlt: 'Illustration d’une ouverture de bal lors d’une réception de mariage',
    contactService: 'mariage',
    sections: [
      { title: 'Son & lumière', items: ['Sonorisation professionnelle, jusqu’à 4 enceintes ou caissons selon le besoin', 'Éclairage complet de la piste de danse', 'Régie DJ professionnelle'] },
      { title: 'Préparation & coordination', items: ['Deux micros sans fil', 'Animations et jeux préparés avec vous', 'Playlist personnalisée et gestion des temps forts musicaux', 'Coordination avec le traiteur, le photographe et le vidéaste'] },
      { title: 'Installation & déplacement', items: ['Installation et démontage', 'Déplacement inclus dans un rayon de 30 km'] },
    ],
  },
  'soiree-privee': {
    id: 'soiree-privee',
    path: '/prestations/soirees-privees',
    title: 'Anniversaires & soirées privées',
    eyebrow: 'Une soirée à votre image',
    headline: 'Réunissez vos proches. Profitez de la soirée.',
    description: 'Une programmation préparée selon vos goûts et un dispositif adapté à votre événement.',
    price: 'À partir de 500 €',
    image: siteImages.services.private,
    imageAlt: 'Invités réunis sur une piste de danse en extérieur',
    contactService: 'soiree-privee',
    sections: [
      { title: 'Son & lumière', items: ['Éclairage DJ de base', 'Deux enceintes professionnelles EV 30M', 'Un micro sans fil Shure', 'Régie DJ professionnelle', 'Enceinte Bluetooth pour l’apéritif'] },
      { title: 'Préparation', items: ['Échange avant l’événement', 'Playlist préparée selon vos goûts'] },
      { title: 'Installation & accueil', items: ['Installation et démontage', 'Jusqu’à environ 120 personnes', 'Déplacement inclus dans un rayon de 30 km', 'Horaires indicatifs : 19 h–3 h'] },
    ],
  },
  entreprise: {
    id: 'entreprise',
    path: '/prestations/entreprises',
    title: 'Événements d’entreprise',
    eyebrow: 'Une réception professionnelle',
    headline: 'Une ambiance juste, pour vos équipes et vos invités.',
    description: 'Un accompagnement musical préparé avec vous et adapté au format de votre événement professionnel.',
    price: 'À partir de 600 €',
    image: siteImages.services.corporate,
    imageAlt: 'Salle préparée pour un événement professionnel',
    contactService: 'entreprise',
    sections: [
      { title: 'Son & lumière', items: ['Deux à quatre enceintes professionnelles', 'Éclairage adapté à la configuration', 'Deux micros sans fil', 'Régie DJ professionnelle', 'Enceinte Bluetooth pour l’apéritif'] },
      { title: 'Préparation', items: ['Rendez-vous de préparation', 'Animation et accompagnement musical'] },
      { title: 'Installation & déroulement', items: ['Installation et démontage', 'Déplacement jusqu’à 30 km', 'Horaires indicatifs : 18 h–1 h'] },
    ],
  },
  club: {
    id: 'club',
    path: '/contact?service=club',
    title: 'Soirées & clubs',
    eyebrow: 'Performance DJ',
    headline: 'Tous styles, toutes ambiances.',
    description: 'Une prestation DJ à construire selon le lieu et le format de la soirée. Contactez VSK pour en parler.',
    image: siteImages.services.club,
    imageAlt: 'Valentin aux commandes de sa régie DJ',
    contactService: 'club',
    sections: [],
  },
};

export const serviceCards = [
  serviceDetails.mariage,
  serviceDetails['soiree-privee'],
  serviceDetails.entreprise,
  serviceDetails.club,
];
