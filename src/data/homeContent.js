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
    id: 'contact-cta',
    title: 'Un autre projet\u00a0?',
    description: 'Parlons-en.',
    image: siteImages.services.club,
    imageAlt: 'Valentin aux commandes de sa régie DJ',
    path: '/contact',
  },
];

export const galleryItems = siteImages.homeGallery;

export const faqItems = [
  {
    question: "Quels types d'événements animez-vous ?",
    answer: "Mariages, soirées privées, anniversaires et événements d'entreprise. Chaque prestation est préparée selon votre événement, votre public et l'ambiance souhaitée.",
  },
  {
    question: "Quel est le tarif d'une prestation ?",
    answer: "Chaque événement est unique. Le devis dépend du format, de la durée, du lieu et des options techniques choisies. Les mariages débutent à partir de 1 400 €, les soirées privées à partir de 500 €, et les événements d'entreprise à partir de 600 €.",
  },
  {
    question: 'Comment se déroule la préparation musicale ?',
    answer: "Avant chaque événement, un échange est organisé pour comprendre vos goûts musicaux, les moments forts à accompagner et les titres à éviter. La playlist est construite en amont et ajustée en temps réel le soir venu.",
  },
  {
    question: 'Peut-on personnaliser la playlist ?',
    answer: "Oui. Nous préparons ensemble les titres incontournables, les morceaux à éviter et l'ambiance souhaitée. La programmation finale reste adaptable selon l'énergie de la salle.",
  },
  {
    question: 'Le matériel son et lumière est-il inclus ?',
    answer: 'Oui. Selon la formule choisie, la prestation inclut sonorisation, éclairage, régie DJ et micros sans fil. Le matériel exact est précisé dans chaque devis.',
  },
  {
    question: 'Le déplacement est-il inclus ?',
    answer: 'Les déplacements dans un rayon de 30 km sont inclus dans les formules standard. Au-delà, un forfait déplacement est ajouté au devis selon la distance.',
  },
  {
    question: 'Combien de temps à l\u2019avance faut-il réserver ?',
    answer: 'Les disponibilités varient selon les dates. Pour les mariages notamment, il est conseillé de prendre contact le plus tôt possible afin de garantir votre date.',
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
