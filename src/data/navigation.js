export const primaryNavigation = [
  { label: 'Accueil', to: '/', end: true },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Prestations', to: '/prestations', hasMenu: true },
  { label: 'Galerie', to: '/galerie' },
  { label: 'Avis', to: '/avis' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

export const serviceNavigation = [
  { label: 'Mariages', to: '/prestations/mariages' },
  { label: 'Soirées privées', to: '/prestations/soirees-privees' },
  { label: 'Entreprises', to: '/prestations/entreprises' },
];

export const routeMetadata = {
  '/': { title: 'DJ VSK | DJ Mariage & Événementiel Grand Est', description: 'DJ VSK accompagne mariages, soirées privées et événements d’entreprise dans le Grand Est. Découvrez les prestations et demandez un devis.' },
  '/a-propos': { title: 'À propos | VSK Events', description: 'Découvrez le parcours et l’approche de Valentin, DJ événementiel pour mariages, soirées privées et événements professionnels.' },
  '/prestations': { title: 'Prestations DJ | VSK Events', description: 'Prestations DJ pour mariages, soirées privées, anniversaires et événements d’entreprise. Une ambiance préparée selon votre événement.' },
  '/prestations/mariages': { title: 'DJ Mariage | VSK Events', description: 'Une prestation DJ de mariage préparée avec vous : son, lumière, coordination musicale et accompagnement des temps forts.' },
  '/prestations/soirees-privees': { title: 'DJ Soirées privées & anniversaires | VSK Events', description: 'Une animation DJ adaptée à vos soirées privées et anniversaires, avec une programmation préparée selon vos goûts.' },
  '/prestations/entreprises': { title: 'DJ Événement d’entreprise | VSK Events', description: 'Animation musicale et prestation DJ pour vos événements d’entreprise, préparées selon le lieu et le format.' },
  '/galerie': { title: 'Galerie | VSK Events', description: 'Découvrez en images les ambiances, les régies DJ et les moments de fête VSK Events.' },
  '/avis': { title: 'Avis clients | VSK Events', description: 'Les avis clients vérifiés de VSK Events seront publiés ici après validation.' },
  '/faq': { title: 'FAQ | VSK Events', description: 'Retrouvez les réponses aux questions fréquentes sur les prestations, la préparation musicale et les déplacements.' },
  '/contact': { title: 'Demander un devis | VSK Events', description: 'Parlez de votre événement à VSK Events et préparez une demande de devis personnalisée.' },
};
