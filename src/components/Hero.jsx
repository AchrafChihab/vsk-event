import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteImages } from '../data/images';

const revealEase = [0.22, 1, 0.36, 1];

const copyVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const riseVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: revealEase } },
};

const lineVariants = {
  hidden: { y: '108%' },
  visible: { y: 0, transition: { duration: 0.82, ease: revealEase } },
};

function useSmallViewport() {
  const [smallViewport, setSmallViewport] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 760px)');
    const update = () => setSmallViewport(mediaQuery.matches);
    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  return smallViewport;
}

export default function Hero({ ready = true, image = siteImages.hero }) {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const smallViewport = useSmallViewport();
  const parallaxEnabled = !reduceMotion && !smallViewport;
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.76]);

  return (
    <section ref={heroRef} id="accueil" className="hero-section">
      <motion.img
        className="hero-photo"
        src={image}
        alt="DJ en performance aux commandes de sa régie, face à la piste de danse"
        width="1672"
        height="941"
        fetchPriority="high"
        decoding="async"
        initial={reduceMotion ? false : { scale: 1.06 }}
        animate={ready ? { scale: 1 } : { scale: 1.06 }}
        transition={{ duration: reduceMotion ? 0 : 1.25, ease: revealEase }}
        style={{ y: parallaxEnabled ? imageY : 0 }}
      />
      <div className="hero-shade" aria-hidden="true" />

      <motion.div
        className="hero-copy"
        variants={copyVariants}
        initial={reduceMotion ? false : 'hidden'}
        animate={ready ? 'visible' : 'hidden'}
        style={{ y: parallaxEnabled ? contentY : 0, opacity: parallaxEnabled ? contentOpacity : 1 }}
      >
        <motion.p className="microcopy" variants={riseVariants}>DJ VSK · GRAND EST</motion.p>
        <h1 aria-label="Votre soirée. Votre ambiance. Votre moment.">
          <span className="hero-line-mask" aria-hidden="true"><motion.span variants={lineVariants}>Votre soirée.</motion.span></span>
          <span className="hero-line-mask" aria-hidden="true"><motion.span variants={lineVariants}>Votre ambiance.</motion.span></span>
          <span className="hero-line-mask" aria-hidden="true"><motion.em variants={lineVariants}>Votre moment.</motion.em></span>
        </h1>
        <motion.p className="hero-intro" variants={riseVariants}>
          Mariages, anniversaires, soirées privées et événements d’entreprise. Une ambiance pensée pour votre public, votre lieu et votre histoire.
        </motion.p>
        <motion.div className="hero-actions" variants={riseVariants}>
          <Link to="/contact" className="button button-primary">Demander un devis <ArrowRight aria-hidden="true" /></Link>
          <Link to="/prestations" className="button button-outline">Découvrir les prestations</Link>
        </motion.div>
        <motion.ul className="hero-trust" variants={riseVariants} aria-label="Types d’événements et zone desservie">
          <li>Mariages</li>
          <li>Entreprises</li>
          <li>Soirées privées</li>
          <li>Grand Est</li>
        </motion.ul>
      </motion.div>
    </section>
  );
}
