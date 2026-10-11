import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryItems as defaultItems } from '../data/homeContent';
import { Reveal, RevealImage, RevealText } from './Reveal';
import ResponsiveImage from './ResponsiveImage';

const GALLERY_SIZES = {
  feature: '(max-width: 768px) 100vw, 67vw',
  portrait: '(max-width: 768px) 50vw, 33vw',
  wide: '(max-width: 768px) 100vw, 58vw',
  'portrait-small': '(max-width: 768px) 50vw, 25vw',
  small: '(max-width: 768px) 50vw, 42vw',
};

export default function Gallery({ items = defaultItems }) {
  return (
    <section id="galerie" className="gallery-section section-wrap" aria-labelledby="gallery-title">
      <RevealText className="section-heading gallery-heading">
        <p className="microcopy">En images</p>
        <h2 id="gallery-title">Des ambiances <em>uniques</em></h2>
      </RevealText>

      <div className="gallery-grid">
        {items.map((item, index) => (
          <RevealImage className={`gallery-cell gallery-cell-${index + 1}`} key={item.src}>
            <figure className="gallery-item">
              <picture>
                <ResponsiveImage
                  image={item}
                  alt={item.alt}
                  sizes={GALLERY_SIZES[item.layout] ?? '50vw'}
                  loading="lazy"
                />
              </picture>
              {item.label ? <figcaption>{item.label}</figcaption> : null}
            </figure>
          </RevealImage>
        ))}
      </div>

      <Reveal className="gallery-action">
        <Link to="/galerie" className="text-link">Voir toute la galerie <ArrowRight aria-hidden="true" /></Link>
      </Reveal>
    </section>
  );
}
