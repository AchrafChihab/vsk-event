import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryItems as defaultItems } from '../data/homeContent';
import { Reveal, RevealImage, RevealText } from './Reveal';

export default function Gallery({ items = defaultItems }) {
  const [isSmallViewport, setIsSmallViewport] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
  ));

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateViewport = () => setIsSmallViewport(mediaQuery.matches);
    mediaQuery.addEventListener('change', updateViewport);
    return () => mediaQuery.removeEventListener('change', updateViewport);
  }, []);

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
                {item.mobileImage ? <source media="(max-width: 768px)" srcSet={item.mobileImage.src} /> : null}
                <img
                  src={item.src}
                  alt={item.alt}
                  width={isSmallViewport && item.mobileImage ? item.mobileImage.width : item.width}
                  height={isSmallViewport && item.mobileImage ? item.mobileImage.height : item.height}
                  style={{ objectPosition: item.position ?? 'center' }}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption>{item.label}</figcaption>
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
