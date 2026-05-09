import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import img1 from '../assets/image.png';
import img2 from '../assets/image copy.png';
import img3 from '../assets/image copy 2.png';
import img4 from '../assets/image copy 3.png';
import img5 from '../assets/image copy 4.png';
import img6 from '../assets/image copy 5.png';
import img7 from '../assets/image copy 6.png';
import img8 from '../assets/image copy 7.png';

const Clients = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const partners = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 }
  ];

  return (
    <div className="clients-page page-fade">
      {/* Sub-Hero */}
      <section className="sub-hero">
        <div className="container text-center">
          <h1 className="typewriter delay-1" style={{ fontSize: 'clamp(1.6rem, 6vw, 3rem)', textTransform: 'uppercase', letterSpacing: '4px' }}>{t.clients}</h1>
          <div style={{ width: '50px', height: '3px', background: 'var(--primary)', margin: '20px auto' }}></div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section" style={{ paddingBottom: '100px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
            {partners.map((partner, i) => (
              <div key={i} style={{
                background: '#fff',
                padding: '40px 20px',
                borderRadius: '12px',
                border: '1px solid #eee',
                textAlign: 'center',
                transition: 'var(--transition)',
                boxShadow: '0 5px 15px rgba(0,0,0,0.02)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }} className="partner-card">
                <img src={partner.img} alt="Client Logo" style={{ maxWidth: '100%', maxHeight: '80px', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
