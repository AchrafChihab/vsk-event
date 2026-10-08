import { siteImages } from './images';

export const aboutContent = {
  title: "Moi, c'est Valentin.",
  paragraphs: [
    "DJ depuis 2025, je me suis spécialisé dans l'événementiel avec une idée en tête : faire de chaque soirée un moment unique.",
    "Mariages, anniversaires, bars, soirées privées ou événements d'entreprise, je construis une ambiance qui s'adapte à vos envies et à votre public.",
  ],
};

export const services = [
  {
    title: 'Mariages',
    description: 'Un jour unique, une ambiance inoubliable.',
    image: siteImages.services.wedding,
    imageAlt: "Illustration d'une ouverture de bal lors d'une réception de mariage",
    path: '/prestations/mariages',
  },
  {
    title: 'Anniversaires',
    description: 'Des soirées à votre image.',
    image: siteImages.services.private,
    imageAlt: "Invités réunis sur la piste lors d'une soirée",
    path: '/prestations/soirees-privees',
  },
  {
    title: "Événements d'entreprise",
    description: 'Professionnalisme et ambiance sur mesure.',
    image: siteImages.services.corporate,
    imageAlt: 'Salle préparée pour un événement professionnel',
    path: '/prestations/entreprises',
  },
  {
    title: 'Soirées privées',
    description: 'Tous styles, toutes ambiances.',
    image: siteImages.services.club,
    imageAlt: 'Valentin aux commandes de sa régie DJ',
    path: '/prestations',
  },
];

export const galleryItems = siteImages.homeGallery;

export const faqItems = [
  {
    question: "Quel est le tarif d'une prestation ?",
    answer: 'Chaque événement est unique. Le devis dépend du format, de la durée, du lieu et des options techniques choisies.',
  },
  {
    question: "Jusqu'où te déplaces-tu ?",
    answer: "Les déplacements sont étudiés selon le lieu et le format de votre événement. Indiquez l'adresse dans votre demande pour recevoir une proposition adaptée.",
  },
  {
    question: 'Peut-on choisir les musiques ?',
    answer: "Oui. Nous préparons ensemble les titres incontournables, les morceaux à éviter et l'ambiance souhaitée.",
  },
];

export const marqueeItems = [
  'VSK Events',
  'Mariages',
  'Soirées privées',
  'Entreprises',
  'Grand Est',
];

export const eventTypes = services.map(({ title }) => title);
