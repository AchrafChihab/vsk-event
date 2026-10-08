import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteImages } from '../data/images';
import { Reveal, RevealImage } from '../components/Reveal';
import PageHero from './PageHero';

const gallery = siteImages.gallery;

export default function GalleryPage() {
  const [active, setActive] = useState(-1);
  const closeRef = useRef(null);
  const triggerRef = useRef(null);

  const isOpen = active >= 0;

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActive(-1);
      if (event.key === 'ArrowRight') setActive((index) => (index + 1) % gallery.length);
      if (event.key === 'ArrowLeft') setActive((index) => (index - 1 + gallery.length) % gallery.length);
      if (event.key === 'Tab') {
        const controls = [...document.querySelectorAll('.lightbox button:not([disabled])')];
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  const openAt = (index, event) => {
    triggerRef.current = event.currentTarget;
    setActive(index);
  };

  return (
    <div className="inner-page gallery-page">
      <PageHero eyebrow="Galerie" title={<>Des moments.<br />Des ambiances.<br />Des souvenirs.</>} description="Quelques images pour découvrir les ambiances et les instants d’une soirée." />
      <div id="page-content" className="inner-page__content">
        <section className="gallery-wall section-wrap" aria-label="Photographies d’événements">
          {gallery.map((item, index) => <RevealImage className={`gallery-wall__item gallery-wall__item--${index + 1}`} key={item.src}>
            <button type="button" className="gallery-wall__trigger" onClick={(event) => openAt(index, event)} aria-label={`Agrandir l’image : ${item.alt}`}>
              <img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" style={{ objectPosition: item.position ?? 'center' }} />
              <span className="gallery-wall__hint" aria-hidden="true">Voir l’image</span>
            </button>
          </RevealImage>)}
        </section>
        <section className="gallery-page-cta section-wrap">
          <Reveal>
            <p className="microcopy">Un événement à célébrer ?</p>
            <h2>Votre soirée pourrait être ici.</h2>
            <Link className="button button-primary" to="/contact">
              Demander un devis <ArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </section>
      </div>
      {active >= 0 ? <div className="lightbox" role="dialog" aria-modal="true" aria-label="Aperçu de la galerie" onMouseDown={(event) => { if (event.target === event.currentTarget) setActive(-1); }}>
        <button ref={closeRef} className="lightbox__close" type="button" onClick={() => setActive(-1)} aria-label="Fermer l’aperçu"><X aria-hidden="true" /></button>
        <button className="lightbox__previous" type="button" onClick={() => setActive((active - 1 + gallery.length) % gallery.length)} aria-label="Image précédente"><ArrowLeft aria-hidden="true" /></button>
        <figure className="lightbox__figure"><img src={gallery[active].src} alt={gallery[active].alt} width={gallery[active].width} height={gallery[active].height} /><figcaption>{active + 1} / {gallery.length}</figcaption></figure>
        <button className="lightbox__next" type="button" onClick={() => setActive((active + 1) % gallery.length)} aria-label="Image suivante"><ArrowRight aria-hidden="true" /></button>
      </div> : null}
    </div>
  );
}
