import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Contact from '../components/Contact';
import PageHero from './PageHero';

const serviceTypeByQuery = {
  mariage: 'Mariage',
  'soiree-privee': 'Soirée privée / anniversaire',
  entreprise: 'Événement d’entreprise',
  club: 'Soirées / clubs',
};

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const [selectedType, setSelectedType] = useState(() => serviceTypeByQuery[searchParams.get('service')] ?? '');
  const service = searchParams.get('service');

  useEffect(() => {
    setSelectedType(serviceTypeByQuery[service] ?? '');
  }, [service]);

  return (
    <div className="inner-page contact-page">
      <PageHero eyebrow="Contact" title={<>Parlons de<br />votre événement.</>} description="Décrivez votre projet, votre lieu et l’ambiance souhaitée. Nous pourrons ensuite échanger sur une proposition adaptée." />
      <div id="page-content" className="inner-page__content">
        <Contact
          selectedType={selectedType}
          types={['Mariage', 'Soirée privée / anniversaire', 'Événement d’entreprise', 'Soirées / clubs']}
        />
      </div>
    </div>
  );
}
