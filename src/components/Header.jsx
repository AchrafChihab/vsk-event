import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, Menu, X } from 'lucide-react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { primaryNavigation, serviceNavigation } from '../data/navigation';

function VskLogo() {
  return (
    <span className="brand" aria-label="VSK Events">
      <strong>VS<span>K</span></strong>
      <small>EVENTS</small>
    </span>
  );
}

export default function Header({ navigation = primaryNavigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const headerRef = useRef(null);
  const servicesToggleRef = useRef(null);
  const firstMenuLinkRef = useRef(null);
  const { scrollY } = useScroll();
  const { pathname } = useLocation();
  const headerSolid = pathname !== '/' || scrolled;

  const closeMenu = useCallback((restoreFocus = false) => {
    setMenuOpen(false);
    if (restoreFocus) window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  }, []);

  const closeMenuAfterNavigation = useCallback(() => {
    closeMenu(window.matchMedia('(max-width: 1199px)').matches);
  }, [closeMenu]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const nextScrolled = latest > 56;
    setScrolled((current) => current === nextScrolled ? current : nextScrolled);
  });

  useEffect(() => setScrolled(scrollY.get() > 56), [pathname, scrollY]);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen) return undefined;
    const handleSubmenuKeyDown = (event) => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        servicesToggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleSubmenuKeyDown);
    return () => window.removeEventListener('keydown', handleSubmenuKeyDown);
  }, [servicesOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.requestAnimationFrame(() => firstMenuLinkRef.current?.focus());

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu(true);
        return;
      }
      if (event.key !== 'Tab' || !headerRef.current) return;

      const focusable = Array.from(headerRef.current.querySelectorAll('a[href], button:not([disabled])'))
        .filter((element) => element.getClientRects().length > 0);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeMenu, menuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1200px)');
    const closeAtDesktop = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    desktopQuery.addEventListener('change', closeAtDesktop);
    return () => desktopQuery.removeEventListener('change', closeAtDesktop);
  }, []);

  const headerClasses = ['site-header', headerSolid && 'is-solid', menuOpen && 'is-menu-open'].filter(Boolean).join(' ');

  return (
    <header ref={headerRef} className={headerClasses}>
      <div className="site-header__inner">
      <Link to="/" className="brand-link" onClick={closeMenuAfterNavigation} aria-label="VSK Events, accueil">
        <VskLogo />
      </Link>

      <nav
        id="primary-navigation"
        className={menuOpen ? 'primary-nav is-open' : 'primary-nav'}
        aria-label="Navigation principale"
      >
        {navigation.map(({ label, to, end, hasMenu }, index) => (
          <div className={`primary-nav__item${hasMenu ? ' primary-nav__item--services' : ''}`} key={to} onMouseEnter={hasMenu ? () => setServicesOpen(true) : undefined} onMouseLeave={hasMenu ? () => setServicesOpen(false) : undefined} onBlur={hasMenu ? (event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false);
          } : undefined}>
            <NavLink ref={index === 0 ? firstMenuLinkRef : undefined} to={to} end={end} onClick={closeMenuAfterNavigation}>
              {label}
            </NavLink>
            {hasMenu ? <>
              <button ref={servicesToggleRef} className="nav-submenu-toggle" type="button" aria-label={servicesOpen ? 'Masquer les prestations' : 'Afficher les prestations'} aria-haspopup="true" aria-expanded={servicesOpen} aria-controls="services-submenu" onClick={() => setServicesOpen((open) => !open)}>
                <ArrowDown aria-hidden="true" />
              </button>
              <div id="services-submenu" className={`nav-submenu${servicesOpen ? ' is-open' : ''}`}>
                {serviceNavigation.map((service) => <NavLink key={service.to} to={service.to} onClick={closeMenuAfterNavigation}>{service.label}</NavLink>)}
              </div>
            </> : null}
          </div>
        ))}
      </nav>

      <div className="header-actions">
        <Link className="button button-primary header-quote-cta" to="/contact" onClick={closeMenuAfterNavigation}>Demander un devis <ArrowRight aria-hidden="true" /></Link>
        <ThemeToggle />
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      </div>
    </header>
  );
}
