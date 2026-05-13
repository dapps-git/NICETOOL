import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { MapPin, Phone, Mail } from 'lucide-react';
import img1 from '../assets/image.png';
import img2 from '../assets/image copy.png';
import img3 from '../assets/image copy 2.png';
import img4 from '../assets/image copy 3.png';
import img5 from '../assets/image copy 4.png';
import img6 from '../assets/image copy 5.png';
import img7 from '../assets/image copy 6.png';
import img8 from '../assets/image copy 7.png';

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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    
    // SEO Logic
    document.title = lang === 'en' ? "NICE TOOLS | Precision CNC Machining & Manufacturing Saudi Arabia" : "نايس تولز | تصنيع CNC دقيق وحلول هندسية - السعودية";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.advancedCncDesc);
    }
    
    return () => window.removeEventListener('resize', handleResize);
  }, [lang, t.advancedCncDesc]);

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
      <section className="section bg-light-grey" style={{ background: '#fcfcfc', padding: isMobile ? '40px 0' : '80px 0' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: isMobile ? '30px' : '60px', 
            alignItems: 'center' 
          }}>
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
      <section className="section" style={{ 
        background: '#f8f9fa', 
        padding: isMobile ? '40px 0' : '80px 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #eee',
        borderBottom: '1px solid #eee'
      }}>
        {/* Technical Grid Pattern */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundImage: 'radial-gradient(#ddd 0.5px, transparent 0.5px)', 
          backgroundSize: '20px 20px', 
          opacity: 0.3 
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--dark)' }}>{t.machiningCapabilitiesTitle}</h2>
            <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '20px auto' }}></div>
          </div>
          
          <div style={{ 
            background: '#fff', 
            padding: isMobile ? '30px 20px' : '60px', 
            borderRadius: '16px', 
            boxShadow: '0 15px 50px rgba(0,0,0,0.06)', 
            border: '1px solid #eee',
            position: 'relative',
            zIndex: 2
          }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
              gap: isMobile ? '40px' : '60px' 
            }}>
              {/* Processes column */}
              <div>
                <h3 style={{ color: 'var(--primary)', marginBottom: '30px', borderBottom: '2px solid #f8f9fa', paddingBottom: '15px', fontWeight: 700, fontSize: '24px' }}>{t.processesTitle}</h3>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
                  gap: isMobile ? '12px' : '18px' 
                }}>
                  {t.processesList.map((p, i) => (
                    <div key={i} className="process-item" style={{ 
                      fontSize: isMobile ? '14px' : '16px', 
                      color: 'var(--grey)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontWeight: 500
                    }}>
                      <span style={{ color: 'var(--primary)', fontWeight: '900', fontSize: '18px' }}>✓</span>
                      {p}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical & Materials column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '25px', borderBottom: '2px solid #f8f9fa', paddingBottom: '15px', fontWeight: 700, fontSize: '20px' }}>{t.technicalSpecsTitle}</h3>
                  <div style={{ background: '#fcfcfc', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--primary)', marginBottom: '20px', border: '1px solid #f0f0f0' }}>
                    <p style={{ color: 'var(--dark)', fontWeight: 700, fontSize: '16px', margin: 0 }}>{t.tolerances}</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', fontWeight: 700 }}>{t.machineryAxesTitle}</h4>
                    <p style={{ color: 'var(--dark)', fontWeight: 600, fontSize: '18px' }}>{t.axesList}</p>
                  </div>
                </div>
                
                <div>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '20px', borderBottom: '2px solid #f8f9fa', paddingBottom: '15px', fontWeight: 700, fontSize: '20px' }}>{t.materialsTitle}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {t.materialsList.split(', ').map((mat, i) => (
                      <span key={i} style={{ 
                        padding: '8px 14px', 
                        background: '#fcfcfc', 
                        border: '1px solid #eee', 
                        borderRadius: '6px', 
                        fontSize: '13px', 
                        color: 'var(--grey)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>{mat}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: isMobile ? '40px' : '80px', textAlign: 'center' }}>
            <Link to="/services" className="btn btn-primary" style={{ padding: isMobile ? '12px 30px' : '15px 40px', fontSize: isMobile ? '12px' : '14px', fontWeight: 700 }}>
              {t.viewServices}
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits & Machine Shop */}
      <section className="section" style={{ padding: isMobile ? '40px 0' : '80px 0' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: isMobile ? '40px' : '80px' 
          }}>
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
      <section className="section bg-light-grey" style={{ padding: isMobile ? '40px 0' : '80px 0', background: '#fcfcfc' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '32px', marginBottom: '15px', fontWeight: 800 }}>{t.topClientsTitle}</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--primary)', margin: isMobile ? '0 auto 30px' : '0 auto 50px' }}></div>
          
          <div className="mobile-2-col" style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: isMobile ? '15px' : '30px',
            marginBottom: isMobile ? '30px' : '50px'
          }}>
            {[
              { id: 1, name: t.client1, desc: t.client1Desc, img: img1 },
              { id: 2, name: t.client2, desc: t.client2Desc, img: img2 },
              { id: 3, name: t.client3, desc: t.client3Desc, img: img3 },
              { id: 4, name: t.client4, desc: t.client4Desc, img: img4 },
              { id: 5, name: t.client5, desc: t.client5Desc, img: img5 },
              { id: 6, name: t.client6, desc: t.client6Desc, img: img6 },
              { id: 7, name: t.client7, desc: t.client7Desc, img: img7 },
              { id: 8, name: t.client8, desc: t.client8Desc, img: img8 }
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

      {/* Contact & Map Section */}
      <section className="section" style={{ background: '#fff', borderTop: '1px solid #eee' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
            gap: isMobile ? '40px' : '80px',
            alignItems: 'start'
          }}>
            {/* Left: Contact Info */}
            <div>
              <h2 style={{ fontSize: isMobile ? '28px' : '36px', marginBottom: '30px', fontWeight: 800 }}>{t.contactUs}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ color: 'var(--primary)', marginTop: '5px' }}><MapPin size={22} /></div>
                  <div>
                    <h4 style={{ marginBottom: '5px', fontSize: '17px', fontWeight: 700 }}>{t.officeAddress}</h4>
                    <p style={{ color: 'var(--grey)', fontSize: '14px', lineHeight: 1.6 }}>
                      Jeddah - Al-Jawhara Dist.<br />
                      Near Al-Jawhara Petrol Station<br />
                      P.O.Box 126002 - Jeddah 21352
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ color: 'var(--primary)', marginTop: '5px' }}><Phone size={22} /></div>
                  <div>
                    <h4 style={{ marginBottom: '5px', fontSize: '17px', fontWeight: 700 }}>{t.phone}</h4>
                    <p style={{ color: 'var(--grey)', fontSize: '14px' }}>
                      <a href="tel:+966541802013" style={{ color: 'inherit', textDecoration: 'none' }}>054 180 2013</a>
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ color: 'var(--primary)', marginTop: '5px' }}><Mail size={22} /></div>
                  <div>
                    <h4 style={{ marginBottom: '5px', fontSize: '17px', fontWeight: 700 }}>{t.emailInquiry}</h4>
                    <p style={{ color: 'var(--grey)', fontSize: '14px' }}>
                      <a href="mailto:info@nicetoolsa.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@nicetoolsa.com</a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div style={{ marginTop: '40px' }}>
                 <Link to="/contact" className="btn btn-primary" style={{ padding: '12px 30px' }}>
                   {lang === 'en' ? 'Send Inquiry' : 'إرسال استفسار'}
                 </Link>
              </div>
            </div>

            {/* Right: Map in a Card */}
            <div style={{ 
              height: isMobile ? '300px' : '400px', 
              width: '100%', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              border: '1px solid #eee'
            }}>
              <iframe
                title="NICE TOOLS Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.7171439401!2d39.2458!3d21.4011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d1f0!2zSmVkZGFo!5e0!3m2!1sen!2ssa!4v1715243400000!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="eager" // Changed from lazy to eager for faster loading
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
