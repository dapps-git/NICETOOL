import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import img1 from '../assets/image.png';
import img2 from '../assets/image copy.png';
import img3 from '../assets/image copy 2.png';
import img4 from '../assets/image copy 3.png';

const StatCounter = ({ end, duration = 2000, suffix = "", lang }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  const toArabic = (num) => {
    const symbols = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().replace(/\d/g, (d) => symbols[d]);
  };

  const displayCount = lang === 'ar' ? toArabic(count) : count;
  const displaySuffix = lang === 'ar' && suffix === "K+" ? " ألف+" : suffix;

  return <span>{displayCount}{displaySuffix}</span>;
};

const Home = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="home-page page-fade">
      {/* Hero Section */}
      <section className="hero" style={{
        minHeight: '100dvh',
        padding: '100px 0 120px',
        background: 'url("/hero-bg.png") no-repeat center center/cover',
        backgroundAttachment: 'scroll',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.45))',
          zIndex: 1
        }}></div>
        <div className="container hero-content" style={{ position: 'relative', zIndex: 10 }}>
          <h1 style={{
            fontSize: 'clamp(1.3rem, 4vw, 2.5rem)',
            color: '#fff',
            marginBottom: '20px',
            lineHeight: 1.1,
            fontWeight: 800
          }}>
            <span className="typewriter delay-1">
              {t.precision.split(' ')[0]} <span style={{ color: 'var(--primary)' }}>{t.precision.split(' ')[1]}</span>
            </span><br />
            <span className="typewriter delay-2">{t.quality}</span>
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1rem)',
            color: '#eee',
            marginBottom: '40px',
            maxWidth: '750px',
            marginInline: 'auto',
            fontWeight: 250,
            lineHeight: 1.6
          }}>
            {t.experts}
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/services" className="btn btn-primary" style={{ padding: '14px 32px' }}>{t.viewServices}</Link>
            <Link to="/contact" className="btn btn-outline" style={{ padding: '14px 32px' }}>{t.contactUs}</Link>
          </div>
        </div>

        {/* Hero Stats Bar */}
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">
              <StatCounter end={15} suffix="+" lang={lang} />
            </span>
            <span className="stat-label">{t.stat1Label}</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">
              <StatCounter end={10} suffix="K+" lang={lang} />
            </span>
            <span className="stat-label">{t.stat2Label}</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">
              <StatCounter end={6} lang={lang} />
            </span>
            <span className="stat-label">{t.stat3Label}</span>
          </div>
        </div>
      </section>

      {/* Intro / About Section */}
      <section className="section bg-light-grey" style={{ background: '#fcfcfc', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '36px', marginBottom: '25px', fontWeight: 800 }}>{t.whoWeAre}</h2>
              <div style={{ width: '60px', height: '4px', background: 'var(--primary)', marginBottom: '30px' }}></div>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--dark)', marginBottom: '20px', fontWeight: 500 }}>
                {t.advancedCncDesc}
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--grey)' }}>
                {t.vastVarietyDesc}
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              <img src="/cnc.png" alt="CNC Machining" style={{ width: '100%', boxShadow: '20px 20px 0 var(--primary)', objectFit: 'cover', height: '400px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section bg-dark text-white" style={{ background: '#111', padding: '100px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', marginBottom: '50px', fontWeight: 800, textAlign: 'center' }}>{t.machiningCapabilitiesTitle}</h2>
          
          <div className="capabilities-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {/* Processes */}
            <div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '25px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>{t.processesTitle}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {t.processesList.map((p, i) => (
                  <div key={i} className="process-item" style={{ fontSize: '14px', color: '#ccc' }}>• {p}</div>
                ))}
              </div>
            </div>

            {/* Technical Specs & Materials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div>
                <h3 style={{ color: 'var(--primary)', marginBottom: '25px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>{t.technicalSpecsTitle}</h3>
                <p style={{ color: '#fff', fontWeight: 600, marginBottom: '10px' }}>{t.tolerances}</p>
                <div style={{ marginTop: '20px' }}>
                  <h4 style={{ fontSize: '14px', color: '#888', textTransform: 'uppercase', marginBottom: '10px' }}>{t.machineryAxesTitle}</h4>
                  <p style={{ color: '#fff' }}>{t.axesList}</p>
                </div>
              </div>
              <div>
                <h3 style={{ color: 'var(--primary)', marginBottom: '15px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>{t.materialsTitle}</h3>
                <p style={{ color: '#ccc', fontSize: '13px', lineHeight: 1.6 }}>{t.materialsList}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Machine Shop */}
      <section className="section" style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px' }}>
            <div>
              <h2 style={{ fontSize: '28px', marginBottom: '30px', fontWeight: 800 }}>{t.benefitsTitle}</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[t.reducedLabor, t.isoStandards, t.fastProduction, t.highPrecision, t.customSpecs].map((b, i) => (
                  <li key={i} style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="machine-shop-box" style={{ background: 'var(--dark)', color: '#fff', padding: '50px' }}>
              <h2 style={{ fontSize: '28px', marginBottom: '20px', color: 'var(--primary)' }}>{t.machineShopTitle}</h2>
              <p style={{ fontSize: '16px', lineHeight: '1.8', opacity: 0.9 }}>
                {t.shopDesc}
              </p>
              <div style={{ marginTop: '30px' }}>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>{t.contactUs}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Clients Section */}
      <section className="section bg-light-grey" style={{ padding: '100px 0', background: '#fcfcfc' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '32px', marginBottom: '15px', fontWeight: 800 }}>{t.topClientsTitle}</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--primary)', margin: '0 auto 50px' }}></div>
          
          <div className="mobile-2-col" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '30px',
            marginBottom: '50px'
          }}>
            {[
              { id: 1, name: t.client1, desc: t.client1Desc, img: img1 },
              { id: 2, name: t.client2, desc: t.client2Desc, img: img2 },
              { id: 3, name: t.client3, desc: t.client3Desc, img: img3 },
              { id: 4, name: t.client4, desc: t.client4Desc, img: img4 }
            ].map((client) => (
              <div key={client.id} style={{
                background: '#fff',
                padding: '30px',
                border: '1px solid #eee',
                transition: 'var(--transition)',
                textAlign: 'center'
              }} className="client-card-home">
                <div style={{ 
                  height: '80px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <img src={client.img} alt={client.name} style={{ maxWidth: '100%', maxHeight: '60px', objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontSize: '18px', marginBottom: '10px', color: 'var(--primary)' }}>{client.name}</h3>
                <p style={{ color: 'var(--grey)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                  {client.desc}
                </p>
              </div>
            ))}
          </div>
          
          <Link to="/clients" className="btn btn-outline-dark" style={{ padding: '12px 30px' }}>
            {t.viewMoreClients}
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
