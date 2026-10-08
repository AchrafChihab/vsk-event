import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Contact from '../components/Contact';
import PageHero from './PageHero';

const serviceTypeByQuery = {
  mariage: 'Mariage',
  'soiree-privee': 'Soir\u00e9e priv\u00e9e / anniversaire',
  entreprise: '\u00c9v\u00e9nement d\u2019entreprise',
  club: 'Soir\u00e9es / clubs',
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
      <PageHero
        eyebrow="Contact"
        title={<>Parlons de<br />votre {'\u00e9'}v{'\u00e9'}nement.</>}
        description="D\u00e9crivez votre projet, votre lieu et l\u2019ambiance souhait\u00e9e. Je vous r\u00e9ponds rapidement pour construire votre soir\u00e9e."
      />
      <div id="page-content" className="inner-page__content">
        <Contact
          selectedType={selectedType}
          types={[
            'Mariage',
            'Soir\u00e9e priv\u00e9e / anniversaire',
            '\u00c9v\u00e9nement d\u2019entreprise',
            'Soir\u00e9es / clubs',
            'Autre',
          ]}
        />
      </div>
    </div>
  );
}
