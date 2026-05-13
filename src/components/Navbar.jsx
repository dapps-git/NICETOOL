import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { Globe } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparentPage = location.pathname === '/' || location.pathname === '/about' || location.pathname === '/services' || location.pathname === '/industries' || location.pathname === '/clients' || location.pathname === '/contact';

  const navClass = `navbar ${scrolled ? 'navbar-scrolled' : (isTransparentPage ? 'navbar-transparent' : '')} ${mobileMenuOpen ? 'mobile-menu-open' : ''}`;

  return (
    <nav className={navClass} dir="ltr">
      <div className="container nav-content">
        <Link to="/" className="logo">
          <img
            src={logo}
            alt="NICE TOOLS"
            style={{
              transition: 'var(--transition)'
            }}
          />
        </Link>
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>{t.home}</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>{t.about}</Link></li>
          <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>{t.services}</Link></li>
          <li><Link to="/industries" className={location.pathname === '/industries' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>{t.industries}</Link></li>
          <li><Link to="/clients" className={location.pathname === '/clients' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>{t.clients}</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>{t.contact}</Link></li>
        </ul>
        <div className="nav-actions">
          <div className="lang-switcher" onClick={toggleLang}>
            <Globe size={18} className="lang-icon" />
            <span className="lang-text" style={{ fontSize: '14px', fontWeight: 600 }}>{t.arabic}</span>
          </div>
          <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
