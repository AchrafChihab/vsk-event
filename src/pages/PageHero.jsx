import { ArrowDown } from 'lucide-react';
import { Reveal, RevealText } from '../components/Reveal';

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = '',
  variant = 'minimal',
  children,
}) {
  const isImage = Boolean(image);
  return (
    <section className={`page-hero page-hero--${variant}${isImage ? ' page-hero--image' : ''}`} aria-labelledby="page-hero-title">
      {image ? <img className="page-hero__image" src={image} alt={imageAlt} width={variant === 'service' ? '1122' : '1536'} height={variant === 'service' ? '1402' : '1024'} fetchPriority={variant === 'service' ? 'high' : undefined} /> : null}
      {isImage ? <span className="page-hero__shade" aria-hidden="true" /> : null}
      <div className="page-hero__inner section-wrap">
        <RevealText>
          {eyebrow ? <p className="microcopy">{eyebrow}</p> : null}
          <h1 id="page-hero-title">{title}</h1>
          {description ? <p className="page-hero__description">{description}</p> : null}
        </RevealText>
        {children ? <Reveal className="page-hero__actions">{children}</Reveal> : null}
        <a className="page-hero__scroll" href="#page-content" aria-label="Découvrir la suite de la page"><ArrowDown aria-hidden="true" /></a>
      </div>
    </section>
  );
}
