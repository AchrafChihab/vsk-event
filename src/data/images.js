import hero from '../assets/VSK_maquette_hero_image.png';
import hero768 from '../assets/VSK_maquette_hero_image.png';
import hero1200 from '../assets/VSK_maquette_hero_image.png';
import weddingIllustration from '../assets/mariage.png';
import weddingIllustration480 from '../assets/optimized/design/service-wedding-480.webp';
import weddingIllustration768 from '../assets/optimized/design/service-wedding-768.webp';
import privateIllustration from '../assets/Soirée DJ sous les lumières nocturnes.png';
import privateIllustration480 from '../assets/optimized/design/service-private-480.webp';
import privateIllustration768 from '../assets/optimized/design/service-private-768.webp';
import corporateIllustration from '../assets/Soirée séminaire avec DJ et foule animée.png';
import corporateIllustration480 from '../assets/optimized/design/service-corporate-480.webp';
import corporateIllustration768 from '../assets/optimized/design/service-corporate-768.webp';
import realPortrait from '../assets/optimized/design/vsk-portrait-1022.webp';
import realPortrait480 from '../assets/optimized/design/vsk-portrait-480.webp';
import realPortrait768 from '../assets/optimized/design/vsk-portrait-768.webp';
import realDjAtHome from '../assets/VSK_Events_Images_Enhanced/vsk-real-03.webp';
import realDjAtHome480 from '../assets/optimized/real/vsk-real-03-480.webp';
import realDjAtSetup from '../assets/VSK_Events_Images_Enhanced/vsk-real-07.webp';
import realDjAtSetup480 from '../assets/optimized/real/vsk-real-07-480.webp';
import realDjWarm from '../assets/VSK_Events_Images_Enhanced/vsk-real-12.webp';
import realDjWarm480 from '../assets/optimized/real/vsk-real-12-480.webp';
import realDjWarm768 from '../assets/optimized/real/vsk-real-12-768.webp';
import realCrew from '../assets/VSK_Events_Images_Enhanced/vsk-real-15.webp';
import realCrew480 from '../assets/optimized/real/vsk-real-15-480.webp';
import realCrew768 from '../assets/optimized/real/vsk-real-15-768.webp';
import realCorporateVenue from '../assets/VSK_Events_Images_Enhanced/vsk-real-16.webp';
import realCorporateVenue480 from '../assets/optimized/real/vsk-real-16-480.webp';
import realDjAtMixer from '../assets/VSK_Events_Images_Enhanced/vsk-real-17.webp';
import realDjAtMixer480 from '../assets/optimized/real/vsk-real-17-480.webp';
import realDjPov from '../assets/VSK_Events_Images_Enhanced/vsk-real-21.webp';
import realDjPov480 from '../assets/optimized/real/vsk-real-21-480.webp';
import realCrowd from '../assets/Soirée DJ sous les lumières nocturnes.png';
import realCrowd480 from '../assets/Soirée DJ sous les lumières nocturnes.png';
import realCrowd768 from '../assets/Soirée DJ sous les lumières nocturnes.png';
import realVenueWide from '../assets/mariage.png';
import realVenueWide480 from '../assets/mariage.png';
import realVenueWide768 from '../assets/mariage.png';
import realWarmVenue from '../assets/VSK_Events_Images_Enhanced/vsk-real-27.webp';
import realWarmVenue480 from '../assets/optimized/real/vsk-real-27-480.webp';
import realVenue from '../assets/VSK_Events_Images_Enhanced/vsk-real-28.webp';
import realVenue480 from '../assets/optimized/real/vsk-real-28-480.webp';
import realWoodVenue from '../assets/VSK_Events_Images_Enhanced/vsk-real-29.webp';
import realWoodVenue480 from '../assets/optimized/real/vsk-real-29-480.webp';
import realBooth from '../assets/VSK_Events_Images_Enhanced/vsk-real-31.webp';
import realBooth360 from '../assets/optimized/real/vsk-real-31-360.webp';
import realCorporateShow from '../assets/VSK_Events_Images_Enhanced/vsk-real-33.webp';
import realCorporateShow480 from '../assets/optimized/real/vsk-real-33-480.webp';
import realLighting from '../assets/VSK_Events_Images_Enhanced/vsk-real-35.webp';
import realLighting480 from '../assets/optimized/real/vsk-real-35-480.webp';
import realBoothVenue from '../assets/VSK_Events_Images_Enhanced/vsk-real-36.webp';
import realBoothVenue480 from '../assets/optimized/real/vsk-real-36-480.webp';
import realCorporateDj from '../assets/Soirée séminaire avec DJ et foule animée.png';
import realCorporateDj480 from '../assets/Soirée séminaire avec DJ et foule animée.png';
import realHallDj from '../assets/DJ au coucher du soleil dans un lieu élégant.png';
import realHallDj480 from '../assets/DJ au coucher du soleil dans un lieu élégant.png';
import cta from '../assets/vsk-cta.webp';

const image = ({ src, width, height, sources = [], ...metadata }) => ({
  src,
  width,
  height,
  srcSet: [...sources, { src, width }]
    .sort((a, b) => a.width - b.width)
    .map((source) => `${source.src} ${source.width}w`)
    .join(', '),
  ...metadata,
});

export const imageLibrary = {
  hero: image({ src: hero, width: 1600, height: 900, sources: [{ src: hero768, width: 768 }, { src: hero1200, width: 1200 }], kind: 'design' }),
  portrait: image({ src: realPortrait, width: 1022, height: 1539, sources: [{ src: realPortrait480, width: 480 }, { src: realPortrait768, width: 768 }], kind: 'enhanced-real' }),
  weddingEditorial: image({ src: weddingIllustration, width: 1122, height: 1402, sources: [{ src: weddingIllustration480, width: 480 }, { src: weddingIllustration768, width: 768 }], kind: 'design' }),
  privateEditorial: image({ src: privateIllustration, width: 1122, height: 1402, sources: [{ src: privateIllustration480, width: 480 }, { src: privateIllustration768, width: 768 }], kind: 'design' }),
  corporateEditorial: image({ src: corporateIllustration, width: 1122, height: 1402, sources: [{ src: corporateIllustration480, width: 480 }, { src: corporateIllustration768, width: 768 }], kind: 'design' }),
  djPreparing: image({ src: realDjAtHome, width: 718, height: 1080, sources: [{ src: realDjAtHome480, width: 480 }], kind: 'real' }),
  djAtSetup: image({ src: realDjAtSetup, width: 718, height: 1080, sources: [{ src: realDjAtSetup480, width: 480 }], kind: 'real' }),
  djWarmLandscape: image({ src: realDjWarm, width: 1076, height: 720, sources: [{ src: realDjWarm480, width: 480 }, { src: realDjWarm768, width: 768 }], kind: 'real' }),
  crewAtEvent: image({ src: realCrew, width: 1080, height: 720, sources: [{ src: realCrew480, width: 480 }, { src: realCrew768, width: 768 }], kind: 'real' }),
  corporateVenue: image({ src: realCorporateVenue, width: 564, height: 752, sources: [{ src: realCorporateVenue480, width: 480 }], kind: 'real' }),
  djAtMixer: image({ src: realDjAtMixer, width: 598, height: 896, sources: [{ src: realDjAtMixer480, width: 480 }], kind: 'real' }),
  djCrowdPov: image({ src: realDjPov, width: 720, height: 960, sources: [{ src: realDjPov480, width: 480 }], kind: 'real' }),
  outdoorDancefloor: image({ src: realCrowd, width: 1080, height: 720, sources: [{ src: realCrowd480, width: 480 }, { src: realCrowd768, width: 768 }], kind: 'real' }),
  outdoorReception: image({ src: realVenueWide, width: 1080, height: 720, sources: [{ src: realVenueWide480, width: 480 }, { src: realVenueWide768, width: 768 }], kind: 'real' }),
  warmVenue: image({ src: realWarmVenue, width: 510, height: 680, sources: [{ src: realWarmVenue480, width: 480 }], kind: 'real' }),
  emptyVenue: image({ src: realVenue, width: 516, height: 688, sources: [{ src: realVenue480, width: 480 }], kind: 'real' }),
  woodVenue: image({ src: realWoodVenue, width: 502, height: 670, sources: [{ src: realWoodVenue480, width: 480 }], kind: 'real' }),
  cleanBooth: image({ src: realBooth, width: 468, height: 624, sources: [{ src: realBooth360, width: 360 }], kind: 'real' }),
  corporateShow: image({ src: realCorporateShow, width: 598, height: 796, sources: [{ src: realCorporateShow480, width: 480 }], kind: 'real' }),
  redLighting: image({ src: realLighting, width: 600, height: 800, sources: [{ src: realLighting480, width: 480 }], kind: 'real' }),
  boothVenue: image({ src: realBoothVenue, width: 588, height: 786, sources: [{ src: realBoothVenue480, width: 480 }], kind: 'real' }),
  corporateDj: image({ src: realCorporateDj, width: 536, height: 716, sources: [{ src: realCorporateDj480, width: 480 }], kind: 'real' }),
  hallDjPov: image({ src: realHallDj, width: 530, height: 706, sources: [{ src: realHallDj480, width: 480 }], kind: 'real' }),
};

export const siteImages = {
  hero: imageLibrary.hero,
  about: imageLibrary.portrait,
  services: {
    wedding: { ...imageLibrary.outdoorReception, position: 'center 54%' },
    private: { ...imageLibrary.outdoorDancefloor, position: 'center 55%' },
    corporate: { ...imageLibrary.corporateDj, position: '58% 48%' },
    club: { ...imageLibrary.hallDjPov, position: '52% 58%' },
  },
  serviceHeroes: {
    wedding: imageLibrary.weddingEditorial,
    private: imageLibrary.privateEditorial,
    corporate: imageLibrary.corporateEditorial,
  },
  aboutStory: imageLibrary.djWarmLandscape,
  aboutHuman: imageLibrary.djAtMixer,
  homeGallery: [
    { ...imageLibrary.djWarmLandscape, alt: 'Valentin anime une soirée depuis sa régie', position: '62% 46%', layout: 'feature' },
    { ...imageLibrary.djCrowdPov, alt: 'Valentin mixe face aux invités pendant une soirée en extérieur', position: '52% 48%', layout: 'portrait' },
    { ...imageLibrary.corporateShow, alt: "Régie VSK installée pour un événement d'entreprise", position: '50% 56%', layout: 'wide' },
    { ...imageLibrary.warmVenue, alt: 'Régie installée dans un lieu de réception chaleureux', position: 'center 48%', layout: 'portrait-small' },
    { ...imageLibrary.redLighting, alt: 'Installation son et lumière prête pour une soirée', position: 'center 58%', layout: 'portrait-small' },
    { ...imageLibrary.woodVenue, alt: 'Lieu de réception en bois avant l’arrivée des invités', position: 'center 48%', layout: 'wide' },
  ],
  gallery: [
    { ...imageLibrary.crewAtEvent, alt: "L'équipe réunie pendant une prestation VSK", position: 'center 48%', layout: 'feature' },
    { ...imageLibrary.djPreparing, alt: 'Valentin prépare un mix sur sa régie', position: '52% 44%', layout: 'portrait' },
    { ...imageLibrary.corporateShow, alt: "Régie VSK installée pour un événement d'entreprise", position: '50% 56%', layout: 'portrait-small' },
    { ...imageLibrary.boothVenue, alt: 'Régie DJ et installation lumineuse dans un lieu de réception', position: '55% center', layout: 'portrait-small' },
    { ...imageLibrary.djAtMixer, alt: 'Valentin aux commandes de sa régie DJ', position: '50% 44%', layout: 'portrait' },
    { ...imageLibrary.djAtSetup, alt: "Valentin en train de mixer lors d'une prestation", position: '50% 44%', layout: 'portrait' },
    { ...imageLibrary.cleanBooth, alt: 'Régie VSK installée dans un espace professionnel', position: 'center 56%', layout: 'small' },
    { ...imageLibrary.corporateVenue, alt: 'Salle préparée pour un événement professionnel', position: 'center 56%', layout: 'small' },
    { ...imageLibrary.djCrowdPov, alt: 'Vue depuis la régie vers les invités réunis sur la piste', position: '52% 48%', layout: 'portrait' },
    { ...imageLibrary.redLighting, alt: 'Éclairage rouge installé pour une soirée', position: 'center 58%', layout: 'portrait-small' },
    { ...imageLibrary.warmVenue, alt: 'Régie installée dans un lieu de réception chaleureux', position: 'center 48%', layout: 'small' },
    { ...imageLibrary.woodVenue, alt: 'Lieu de réception en bois avant l’arrivée des invités', position: 'center 48%', layout: 'portrait-small' },
    { ...imageLibrary.djWarmLandscape, alt: 'Valentin anime une soirée depuis sa régie', position: '62% 46%', layout: 'wide' },
    { ...imageLibrary.emptyVenue, alt: "Vue d'un lieu de réception avant l'arrivée des invités", position: 'center 52%', layout: 'portrait-small' },
    { ...imageLibrary.outdoorReception, alt: "Ambiance d'une réception en extérieur", position: 'center 54%', layout: 'feature' },
    { ...imageLibrary.corporateDj, alt: 'DJ aux commandes pendant un événement professionnel', position: '58% 48%', layout: 'portrait' },
    { ...imageLibrary.outdoorDancefloor, alt: 'Invités réunis sur une piste de danse en extérieur', position: 'center 55%', layout: 'wide' },
    { ...imageLibrary.hallDjPov, alt: "Vue de la régie sur les invités d'un grand événement", position: '52% 58%', layout: 'portrait' },
  ],
  cta,
};
