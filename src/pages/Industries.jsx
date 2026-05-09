import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Industries = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const sectors = [
    { name: t.aerospace, img: '✈️', desc: t.aerospaceDesc },
    { name: t.medical, img: '🩺', desc: t.medicalDesc },
    { name: t.food, img: '🥫', desc: t.foodDesc },
    { name: t.marine, img: '⚓', desc: t.marineDesc }
  ];

  return (
    <div className="industries-page page-fade">
      <section className="sub-hero">
        <div className="container text-center">
          <h1 className="typewriter delay-1" style={{ fontSize: 'clamp(1.6rem, 6vw, 3rem)', textTransform: 'uppercase', letterSpacing: '4px' }}>{t.industries}</h1>
          <div style={{ width: '50px', height: '3px', background: 'var(--primary)', margin: '20px auto' }}></div>
          <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>{t.integratedSupport}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {sectors.map((s, i) => (
              <div key={i} style={{
                background: 'var(--dark)',
                color: '#fff',
                padding: '40px 30px',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>{s.img}</div>
                <h3 style={{ color: 'var(--primary)', marginBottom: '12px', fontSize: '20px' }}>{s.name}</h3>
                <p style={{ color: '#aaa', fontSize: '13px', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
