import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

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

      {/* Intro Section */}
      <section className="section text-center" style={{ textAlign: 'center', padding: '80px 0 40px' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', marginBottom: '20px', fontWeight: 700 }}>{t.whoWeAre}</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--primary)', margin: '0 auto 30px' }}></div>
          <p style={{ fontSize: '17px', lineHeight: '1.8', maxWidth: '900px', margin: '0 auto', color: 'var(--grey)' }}>
            {t.introText}
          </p>
        </div>
      </section>

      {/* Quick Services Grid */}
      <section className="section bg-light-grey" style={{ background: '#fcfcfc', padding: '40px 0 80px' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '30px', marginBottom: '50px', fontWeight: 700 }}>{t.coreExpertise}</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            direction: lang === 'ar' ? 'rtl' : 'ltr'
          }}>
            {[
              { 
                title: lang === 'en' ? 'CNC Machining' : 'تشغيل المعادن CNC', 
                img: '/cnc.png',
                text: lang === 'en' ? 'High-precision CNC milling and lathe work for aerospace and medical sectors.' : 'أعمال الفرز والمخرطة CNC عالية الدقة لقطاعات الفضاء والأجهزة الطبية.' 
              },
              { 
                title: lang === 'en' ? 'Tooling & Dies' : 'الأدوات والقوالب', 
                img: '/molds.png',
                text: lang === 'en' ? 'Specialized toolmaking and die manufacturing with micron-level tolerances.' : 'صناعة الأدوات المتخصصة وتصنيع القوالب بتفاوتات دقيقة جداً.' 
              },
              { 
                title: lang === 'en' ? 'Plant Maintenance' : 'صيانة المصانع', 
                img: '/lathe.png',
                text: lang === 'en' ? 'Comprehensive maintenance and repair services for industrial facilities.' : 'خدمات الصيانة والإصلاح الشاملة للمرافق الصناعية.' 
              },
              { 
                title: lang === 'en' ? 'Engineering Design' : 'التصميم الهندسي', 
                img: '/design.png',
                text: lang === 'en' ? 'SolidWorks & Mastercam expertise for advanced machinery prototyping.' : `${t.solidWorksExpertise} و ${t.mastercamReady} لنماذج الآلات المتقدمة.` 
              }
            ].map((s, i) => (
              <div key={i} style={{
                position: 'relative',
                height: '350px',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                background: `url("${s.img}") no-repeat center center/cover`,
                transition: 'var(--transition)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'}
                 onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2))',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '30px',
                  textAlign: 'left',
                  direction: 'ltr' /* Ensure text flow is readable in the overlay */
                }}>
                  <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: '22px', fontWeight: 700 }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: 1.5, margin: 0 }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/services" className="btn btn-primary" style={{ marginTop: '50px', padding: '12px 30px' }}>{t.viewServices}</Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
