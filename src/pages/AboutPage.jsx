import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { aboutContent } from '../data/homeContent';
import { siteImages } from '../data/images';
import { Reveal, RevealImage, RevealText } from '../components/Reveal';

/* ─── Cinematic full-bleed photo break with subtle parallax ─── */
function PhotoBreak({ src, alt, children }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['-6%', '6%']);

  return (
    <div ref={ref} className="about-photo-break" aria-label={alt}>
      <div className="about-photo-break__track">
        <motion.img
          src={src}
          alt={alt}
          style={{ y }}
          className="about-photo-break__img"
          width="1920"
          height="1080"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="about-photo-break__shade" aria-hidden="true" />
      {children && (
        <div className="about-photo-break__text section-wrap">
          {children}
        </div>
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="inner-page about-page">

      {/* ── 01 HERO — portrait right, editorial headline left ── */}
      <section className="about-hero section-wrap" aria-labelledby="about-hero-title">
        <div className="about-hero__copy">
          <RevealText>
            <p className="microcopy">À propos</p>
          </RevealText>
          <RevealText delay={0.06}>
            <h1 id="about-hero-title" className="about-hero__headline">
              Derrière VSK,<br />
              il y&nbsp;a<br />
              <em className="about-hero__accent">Valentin.</em>
            </h1>
          </RevealText>
          <Reveal delay={0.18}>
            <p className="about-hero__intro">
              {aboutContent.paragraphs[0]}
            </p>
          </Reveal>
        </div>
        <RevealImage className="about-hero__visual">
          <img
            src={siteImages.about}
            alt="Portrait de Valentin, DJ VSK Events"
            width="542"
            height="820"
            fetchPriority="high"
          />
          <span className="about-hero__frame" aria-hidden="true" />
        </RevealImage>
      </section>

      <div id="page-content">

        {/* ── 02 PERSONAL STATEMENT ── */}
        <section className="about-statement section-wrap" aria-labelledby="about-statement-title">
          <Reveal className="about-statement__label">
            <p className="microcopy">Mon approche</p>
          </Reveal>
          <RevealText className="about-statement__headline">
            <h2 id="about-statement-title">
              Pas juste passer<br />
              de la&nbsp;<em className="text-accent">musique.</em>
            </h2>
          </RevealText>
          <Reveal className="about-statement__body" delay={0.12}>
            <p>
              {aboutContent.paragraphs[1]}
            </p>
            <p>
              Chaque soirée a ses enjeux, son public, ses moments clés. Mon rôle est d'accompagner ces instants — pas de les subir.
            </p>
          </Reveal>
        </section>

        {/* ── 03 PHILOSOPHY — editorial rows, no cards ── */}
        <section className="about-philosophy section-wrap" aria-labelledby="about-philosophy-title">
          <RevealText>
            <p className="microcopy">La philosophie</p>
            <h2 id="about-philosophy-title" className="about-philosophy__title">
              Une soirée<br />
              se&nbsp;construit.
            </h2>
          </RevealText>
          <ol className="about-philosophy__list" role="list">
            {[
              {
                number: '01',
                title: 'Écouter',
                body: 'Comprendre vos attentes musicales, le profil de vos invités, les moments forts à accompagner — avant même d\'ouvrir une platine.',
              },
              {
                number: '02',
                title: 'S\'adapter',
                body: 'Lire la salle en temps réel. Ajuster le tempo, le style, l\'énergie selon ce qui se passe vraiment sur la piste.',
              },
              {
                number: '03',
                title: 'Faire vivre',
                body: 'Construire une progression, une ambiance qui monte et respire — pas une playlist qui tourne toute seule.',
              },
            ].map(({ number, title, body }, i) => (
              <Reveal key={number} delay={i * 0.1}>
                <li className="about-philosophy__item">
                  <span className="about-philosophy__number" aria-hidden="true">{number}</span>
                  <div className="about-philosophy__content">
                    <h3 className="about-philosophy__name">{title}</h3>
                    <p className="about-philosophy__desc">{body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* ── 04 CINEMATIC PHOTO BREAK ── */}
        <PhotoBreak
          src={siteImages.homeGallery[1].src}
          alt="Valentin mixe face aux invités pendant une soirée en extérieur"
        >
          <RevealText>
            <p className="about-photo-break__quote">
              Chaque public est différent.<br />
              <em>Chaque soirée aussi.</em>
            </p>
          </RevealText>
        </PhotoBreak>

        {/* ── 05 PROCESS ── */}
        <section className="about-process section-wrap" aria-labelledby="about-process-title">
          <div className="about-process__left">
            <RevealText>
              <p className="microcopy">La préparation</p>
              <h2 id="about-process-title" className="about-process__heading">
                Une soirée<br />
                se prépare<br />
                avant de<br />
                commencer.
              </h2>
            </RevealText>
          </div>
          <div className="about-process__right">
            {[
              {
                phase: 'Avant',
                title: 'L\'échange',
                body: 'On discute de votre événement : le lieu, le type de public, les moments à souligner. On définit ensemble les incontournables, les musiques à éviter et l\'ambiance souhaitée.',
              },
              {
                phase: 'Pendant',
                title: 'L\'adaptation',
                body: 'Sur place, je lis la salle. Je m\'adapte en temps réel à l\'énergie des invités, au rythme des moments — des cocktails jusqu\'aux dernières danses.',
              },
              {
                phase: 'L\'essentiel',
                title: 'L\'ambiance',
                body: 'L\'objectif n\'est pas de remplir du temps. C\'est de créer une atmosphère qui s\'imprime dans les souvenirs. Une ambiance taillée sur mesure.',
              },
            ].map(({ phase, title, body }, i) => (
              <Reveal key={phase} delay={i * 0.08} className="about-process__step">
                <span className="about-process__phase">{phase}</span>
                <h3 className="about-process__step-title">{title}</h3>
                <p className="about-process__step-body">{body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── 06 HUMAN MOMENT ── */}
        <section className="about-human section-wrap" aria-labelledby="about-human-title">
          <RevealImage className="about-human__visual">
            <img
              src={siteImages.homeGallery[0].src}
              alt="Valentin aux commandes de sa régie DJ"
              width="598"
              height="896"
              loading="lazy"
              decoding="async"
            />
          </RevealImage>
          <div className="about-human__copy">
            <Reveal>
              <p className="microcopy">En coulisses</p>
              <h2 id="about-human-title">
                Derrière chaque soirée,<br />
                un travail de&nbsp;fond.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Sélection musicale, coordination avec les autres prestataires, adaptation technique au lieu — la partie visible de la soirée repose sur une préparation que vous ne voyez pas.
              </p>
              <p>Et c'est très bien ainsi.</p>
            </Reveal>
            <span className="about-human__signature" aria-hidden="true">Valentin</span>
          </div>
        </section>

        {/* ── 07 FINAL CTA ── */}
        <section className="about-cta section-wrap" aria-labelledby="about-cta-title">
          <RevealText>
            <h2 id="about-cta-title" className="about-cta__headline">
              Vous avez un<br />
              événement<br />
              en&nbsp;<em className="text-accent">tête&nbsp;?</em>
            </h2>
          </RevealText>
          <Reveal delay={0.1} className="about-cta__body">
            <p className="about-cta__sub">Parlons-en.</p>
            <Link className="button button-primary" to="/contact">
              Demander un devis <ArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </section>

      </div>
    </div>
  );
}
