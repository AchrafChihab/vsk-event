import hero from '../assets/VSK_maquette_hero_image.png';
import weddingIllustration from '../assets/service-wedding.webp';
import realPortrait from '../assets/VSK_Events_Images_Enhanced/Portrait masculin au jardin doré.png';
import realDjAtMixer from '../assets/VSK_Events_Images_Enhanced/vsk-real-17.webp';
import realDjPov from '../assets/VSK_Events_Images_Enhanced/vsk-real-21.webp';
import realCrowd from '../assets/VSK_Events_Images_Enhanced/vsk-real-22.webp';
import realCorporateVenue from '../assets/VSK_Events_Images_Enhanced/vsk-real-16.webp';
import realWarmVenue from '../assets/VSK_Events_Images_Enhanced/vsk-real-27.webp';
import realVenue from '../assets/VSK_Events_Images_Enhanced/vsk-real-28.webp';
import realDjAtHome from '../assets/VSK_Events_Images_Enhanced/vsk-real-03.webp';
import realDjAtSetup from '../assets/VSK_Events_Images_Enhanced/vsk-real-07.webp';
import realDjWarm from '../assets/VSK_Events_Images_Enhanced/vsk-real-12.webp';
import realEventHost from '../assets/VSK_Events_Images_Enhanced/vsk-real-10.webp';
import realLighting from '../assets/VSK_Events_Images_Enhanced/vsk-real-35.webp';
import realBoothVenue from '../assets/VSK_Events_Images_Enhanced/vsk-real-36.webp';
import cta from '../assets/vsk-cta.webp';

export const siteImages = {
  hero,
  about: realPortrait,
  services: {
    wedding: weddingIllustration,
    private: realCrowd,
    corporate: realCorporateVenue,
    club: realDjAtMixer,
  },
  homeGallery: [
    { src: realDjAtMixer, width: 598, height: 896, alt: 'Valentin aux commandes de sa régie DJ', position: '50% 44%' },
    { src: realDjPov, width: 720, height: 960, alt: 'Valentin mixe face aux invités pendant une soirée en extérieur', position: '52% 50%' },
    { src: realCrowd, width: 1080, height: 720, alt: "Invités réunis sur la piste lors d'une soirée", position: 'center 55%' },
    { src: realBoothVenue, width: 588, height: 786, alt: 'Régie et éclairage installés dans un lieu de réception', position: '55% center' },
    { src: realWarmVenue, width: 510, height: 680, alt: 'Espace de réception aménagé pour une soirée', position: 'center 50%' },
    { src: realLighting, width: 600, height: 800, alt: 'Éclairage rouge installé pour une soirée', position: 'center 55%' },
  ],
  gallery: [
    { src: realDjAtHome, width: 718, height: 1080, alt: 'Valentin prépare un mix sur sa régie', position: '52% 48%' },
    { src: realDjAtSetup, width: 718, height: 1080, alt: "Valentin en train de mixer lors d'une prestation", position: '50% 44%' },
    { src: realDjWarm, width: 1076, height: 720, alt: 'Valentin anime une soirée depuis sa régie', position: '62% center' },
    { src: realEventHost, width: 362, height: 640, alt: 'Animation au micro pendant un événement', position: '50% 42%' },
    { src: realCorporateVenue, width: 564, height: 752, alt: 'Salle préparée pour un événement professionnel', position: 'center 56%' },
    { src: realDjAtMixer, width: 598, height: 896, alt: 'Valentin aux commandes de sa régie DJ', position: '50% 44%' },
    { src: realDjPov, width: 720, height: 960, alt: 'Vue depuis la régie vers les invités réunis sur la piste', position: '52% 50%' },
    { src: realCrowd, width: 1080, height: 720, alt: 'Invités réunis sur une piste de danse en extérieur', position: 'center 55%' },
    { src: realWarmVenue, width: 510, height: 680, alt: 'Espace de réception aménagé pour une soirée', position: 'center 50%' },
    { src: realVenue, width: 516, height: 688, alt: "Vue d'un lieu de réception avant l'arrivée des invités", position: 'center 52%' },
    { src: realLighting, width: 600, height: 800, alt: 'Éclairage rouge installé pour une soirée', position: 'center 55%' },
    { src: realBoothVenue, width: 588, height: 786, alt: 'Régie DJ et installation lumineuse dans un lieu de réception', position: '55% center' },
  ],
  cta,
};
