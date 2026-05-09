import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const About = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="about-page page-fade">
      {/* Sub-Hero */}
      <section className="sub-hero">
        <div className="container text-center">
          <h1 className="typewriter delay-1" style={{ fontSize: 'clamp(1.6rem, 6vw, 3rem)', textTransform: 'uppercase', letterSpacing: '4px' }}>{t.about}</h1>
          <div style={{ width: '50px', height: '3px', background: 'var(--primary)', margin: '20px auto' }}></div>
          <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>{t.legacy}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>{t.mission}</h2>
              <p style={{ color: 'var(--grey)', marginBottom: '20px', lineHeight: 1.8, fontSize: '15px' }}>
                {t.missionText}
              </p>
              <p style={{ color: 'var(--grey)', lineHeight: 1.8, fontSize: '15px' }}>
                {t.missionText2}
              </p>
            </div>
            <div style={{ background: '#f9f9f9', padding: '40px', borderRadius: '10px', border: '1px solid #eee' }}>
              <h3 style={{ marginBottom: '20px', color: 'var(--primary)', fontSize: '20px' }}>{t.coreStandards}</h3>
              <ul style={{ lineHeight: 2.2, fontWeight: 600, fontSize: '14px', listStyle: 'none', padding: 0 }}>
                <li>✓ {t.isoQuality}</li>
                <li>✓ {t.highPrecision}</li>
                <li>✓ {t.designSupport}</li>
                <li>✓ {t.expertMaintenance}</li>
                <li>✓ {t.prototyping}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
