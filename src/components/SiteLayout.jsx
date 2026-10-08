import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Loader from './Loader';
import ScrollToTop from './ScrollToTop';
import { routeMetadata } from '../data/navigation';

function RouteMeta() {
  const { pathname } = useLocation();
  const metadata = routeMetadata[pathname] ?? {
    title: 'Page introuvable | VSK Events',
    description: 'Cette page VSK Events est introuvable. Revenez à l’accueil ou contactez-nous pour votre événement.',
  };

  useEffect(() => {
    document.title = metadata.title;
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.append(description);
    }
    description.content = metadata.description;
  }, [metadata]);

  return null;
}

export default function SiteLayout() {
  const [heroReady, setHeroReady] = useState(false);
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const handleLoaderComplete = useCallback(() => setHeroReady(true), []);

  return (
    <>
      <RouteMeta />
      <ScrollToTop />
      <Loader onComplete={handleLoaderComplete} />
      <div className="site-shell" inert={heroReady ? undefined : true} aria-hidden={heroReady ? undefined : true}>
        <Header />
        <main id="main-content" tabIndex="-1">
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={location.pathname}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.18, ease: 'easeOut' }}
              style={{ isolation: 'isolate' }}
            >
              <Outlet context={{ heroReady }} />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}
