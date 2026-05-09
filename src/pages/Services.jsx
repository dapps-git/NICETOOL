import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Services = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const serviceCategories = [
    { name: lang === 'en' ? 'CNC Milling' : 'تفريز CNC', items: lang === 'en' ? ['3-Axis & 5-Axis Milling', 'High-Speed Machining', 'Aerospace Components'] : ['تفريز ثلاثي وخماسي المحاور', 'تشغيل عالي السرعة', 'مكونات الفضاء'] },
    { name: lang === 'en' ? 'CNC Lathe' : 'مخرطة CNC', items: lang === 'en' ? ['Precision Turning', 'Shaft Manufacturing', 'Complex Geometries'] : ['الخراطة الدقيقة', 'تصنيع الأعمدة', 'الأشكال الهندسية المعقدة'] },
    { name: lang === 'en' ? 'Tooling & Dies' : 'الأدوات والقوالب', items: lang === 'en' ? ['Injection Mold Repair', 'Progressive Dies', 'Jig & Fixtures'] : ['إصلاح قوالب الحقن', 'القوالب التقدمية', 'الوصلات والمثبتات'] },
    { name: lang === 'en' ? 'Plant Maintenance' : 'صيانة المصانع', items: lang === 'en' ? ['Hydraulic Components', 'Machinery Repair', 'On-site Services'] : ['المكونات الهيدروليكية', 'إصلاح الآلات', 'الخدمات الميدانية'] }
  ];

  return (
    <div className="services-page page-fade">
      <section className="sub-hero">
        <div className="container text-center">
          <h1 className="typewriter delay-1" style={{ fontSize: 'clamp(1.6rem, 6vw, 3rem)', textTransform: 'uppercase', letterSpacing: '4px' }}>{t.services}</h1>
          <div style={{ width: '50px', height: '3px', background: 'var(--primary)', margin: '20px auto' }}></div>
          <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>{t.comprehensiveSolutions}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
            {serviceCategories.map((cat, i) => (
              <div key={i} style={{
                border: '1px solid #f0f0f0',
                padding: '35px',
                borderRadius: '10px',
                transition: 'var(--transition)',
                background: '#fff',
                boxShadow: '0 5px 20px rgba(0,0,0,0.02)'
              }}>
                <h3 style={{ marginBottom: '18px', borderBottom: '2px solid var(--primary)', paddingBottom: '10px', display: 'inline-block', fontSize: '20px' }}>
                  {cat.name}
                </h3>
                <ul style={{ lineHeight: 2, listStyle: 'none', padding: 0 }}>
                  {cat.items.map((item, idx) => (
                    <li key={idx} style={{ color: 'var(--grey)', fontSize: '14px' }}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="section" style={{ background: '#f9f9f9', padding: '80px 0' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>{t.integratedSupport}</h2>
          <p style={{ maxWidth: '750px', marginInline: 'auto', color: 'var(--grey)', marginBottom: '40px', fontSize: '15px' }}>
            {t.integratedText}
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <span className="btn btn-outline" style={{ cursor: 'default', padding: '10px 20px', fontSize: '13px' }}>{t.solidWorksExpertise}</span>
            <span className="btn btn-outline" style={{ cursor: 'default', padding: '10px 20px', fontSize: '13px' }}>{t.mastercamReady}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
