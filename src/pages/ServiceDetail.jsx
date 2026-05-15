import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { ChevronRight, ArrowLeft } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
    const serviceName = t[`${id}-title`] || id;
    document.title = `${serviceName} | NICE TOOLS Precision Engineering`;
  }, [id, t, lang]);

  const serviceFull = t[`${id}-full`];
  const serviceFeatures = t[`${id}-features`] || [];

  const serviceImages = {
    'cnc-milling': "/cnc-milling.png",
    'cnc-lathe': "/cnc-lathe.png",
    'tooling': "/molds.png",
    'maintenance': "/plant-maintenance.png"
  };

  if (!serviceFull) {
    return (
      <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
        <h2>Service Not Found</h2>
        <Link to="/services" className="btn btn-primary">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page page-fade">
      <section className="sub-hero">
        <div className="container text-center">
          <h1 className="typewriter delay-1" style={{ fontSize: 'clamp(1.6rem, 6vw, 3rem)', textTransform: 'uppercase', letterSpacing: '4px' }}>{t[`${id}-title`]}</h1>
          <div style={{ width: '50px', height: '3px', background: 'var(--primary)', margin: '20px auto' }}></div>
          <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>{t[`${id}-desc`]}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '60px', paddingBottom: '100px' }}>
        <div className="container">
          <Link to="/services" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            color: 'var(--primary)', 
            textDecoration: 'none', 
            marginBottom: '50px', 
            fontWeight: 700,
            fontSize: '17px'
          }} className="back-link">
            <ArrowLeft size={20} /> {lang === 'en' ? 'Back to All Services' : 'العودة إلى جميع الخدمات'}
          </Link>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div style={{ order: lang === 'ar' ? 2 : 1 }}>
              <h2 style={{ fontSize: '32px', marginBottom: '25px', fontWeight: 800 }}>{lang === 'en' ? 'Service Overview' : 'نظرة عامة على الخدمة'}</h2>
              <p style={{ fontSize: '19px', lineHeight: '1.8', color: 'var(--dark)', marginBottom: '30px' }}>
                {serviceFull}
              </p>
              
              <div style={{ background: 'var(--dark)', color: '#fff', padding: '40px', borderLeft: '5px solid var(--primary)', marginBottom: '60px' }}>
                <h3 style={{ fontSize: '22px', marginBottom: '20px', color: 'var(--primary)' }}>{lang === 'en' ? 'Key Capabilities' : 'القدرات الرئيسية'}</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {serviceFeatures.map((f, i) => (
                    <li key={i} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '17px' }}>
                      <ChevronRight size={18} color="var(--primary)" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ order: lang === 'ar' ? 1 : 2 }}>
              <div style={{ 
                height: '500px', 
                width: '100%', 
                overflow: 'hidden', 
                boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                border: '1px solid #eee'
              }}>
                <img 
                  src={serviceImages[id]} 
                  alt={t[`${id}Service`]} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>
          </div>

          <div style={{ marginTop: '80px', background: '#f9f9f9', padding: '40px', border: '1px solid #eee', textAlign: 'center' }}>
            <h3 style={{ fontSize: '22px', marginBottom: '20px' }}>{lang === 'en' ? 'Request for Service' : 'طلب خدمة'}</h3>
            <p style={{ color: 'var(--grey)', marginBottom: '25px', fontSize: '16px' }}>
              {lang === 'en' ? 'Have a project that requires precision engineering? Our team is ready to help.' : 'لديك مشروع يتطلب هندسة دقيقة؟ فريقنا جاهز للمساعدة.'}
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-block' }}>{t.contactUs}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
