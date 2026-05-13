import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import logo from '../assets/footer.png';

const Footer = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="footer" dir="ltr">
      <div className="container">
        <div className="footer-grid" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
          <div className="footer-col">
            <img src={logo} alt="NICE TOOLS" className="footer-logo" />
            <p style={{ fontSize: '13px', lineHeight: '1.7', color: '#bbb', marginTop: '15px' }}>
              {t.experts}
            </p>
          </div>
          <div className="footer-col">
            <h4>{t.industries}</h4>
            <ul style={{ fontSize: '13px', listStyle: 'none', padding: 0 }}>
              <li><Link to="/industries">{t.aerospace}</Link></li>
              <li><Link to="/industries">{t.medical}</Link></li>
              <li><Link to="/industries">{t.food}</Link></li>
              <li><Link to="/industries">{t.marine}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t.quickLinks}</h4>
            <ul style={{ fontSize: '13px', listStyle: 'none', padding: 0 }}>
              <li><Link to="/about">{t.about}</Link></li>
              <li><Link to="/services">{t.services}</Link></li>
              <li><Link to="/contact">{t.contact}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t.getInTouch}</h4>
            <div style={{ fontSize: '13px', color: '#bbb', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p><strong>{t.officeAddress}:</strong><br /> Jeddah - Al-Jawhara Dist. - P.O.Box 126002</p>
              <p><strong>{t.phone}:</strong><br /> <a href="tel:+966541802013" style={{ color: 'inherit' }}>054 180 2013</a></p>
              <p><strong>{t.emailInquiry}:</strong><br /> <a href="mailto:info@nicetoolsa.com" style={{ color: 'inherit' }}>info@nicetoolsa.com</a></p>
            </div>
          </div>
        </div>
        <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '15px', marginTop: '50px' }}>
          <p style={{ fontSize: '13px', color: '#bbb' }}>&copy; 2026 NICE TOOLS | Advanced Professional Maintenance Est.</p>
          <div className="footer-legal">
            <Link to="#" style={{ margin: '0 15px', color: '#888', fontSize: '12px' }}>{t.privacyPolicy}</Link>
            <Link to="#" style={{ margin: '0 15px', color: '#888', fontSize: '12px' }}>{t.termsOfService}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
