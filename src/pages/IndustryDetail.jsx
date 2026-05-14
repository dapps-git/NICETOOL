import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { ChevronRight, ArrowLeft } from 'lucide-react';

const IndustryDetail = () => {
  const { id } = useParams();
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
    const industryName = t[id] || id;
    document.title = `${industryName} | NICE TOOLS Precision Engineering`;
  }, [id, t, lang]);

  const industryFull = t[`${id}Full`];
  const industryFeatures = t[`${id}Features`] || [];

  const industryImages = {
    aerospace: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1600",
    medical: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1600",
    food: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=1600",
    marine: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1600"
  };

  if (!industryFull) {
    return (
      <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
        <h2>Industry Not Found</h2>
        <Link to="/industries" className="btn btn-primary">Back to Industries</Link>
      </div>
    );
  }

  return (
    <div className="industry-detail-page page-fade">
      <section className="sub-hero">
        <div className="container text-center">
          <h1 className="typewriter delay-1" style={{ fontSize: 'clamp(1.6rem, 6vw, 3rem)', textTransform: 'uppercase', letterSpacing: '4px' }}>{t[id]}</h1>
          <div style={{ width: '50px', height: '3px', background: 'var(--primary)', margin: '20px auto' }}></div>
          <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>{t[`${id}Desc`]}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '60px', paddingBottom: '100px' }}>
        <div className="container">
          <Link to="/industries" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            color: 'var(--primary)', 
            textDecoration: 'none', 
            marginBottom: '50px', 
            fontWeight: 700,
            fontSize: '17px'
          }} className="back-link">
            <ArrowLeft size={20} /> {lang === 'en' ? 'Back to All Industries' : 'العودة إلى جميع الصناعات'}
          </Link>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div style={{ order: lang === 'ar' ? 2 : 1 }}>
              <h2 style={{ fontSize: '32px', marginBottom: '25px', fontWeight: 800 }}>{lang === 'en' ? 'Our Expertise' : 'خبرتنا'}</h2>
              <p style={{ fontSize: '19px', lineHeight: '1.8', color: 'var(--dark)', marginBottom: '30px' }}>
                {industryFull}
              </p>
              
              <div style={{ background: 'var(--dark)', color: '#fff', padding: '40px', borderLeft: '5px solid var(--primary)' }}>
                <h3 style={{ fontSize: '22px', marginBottom: '20px', color: 'var(--primary)' }}>{lang === 'en' ? 'Key Capabilities' : 'القدرات الرئيسية'}</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {industryFeatures.map((f, i) => (
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
                  src={industryImages[id]} 
                  alt={t[id]} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>
          </div>

          <div style={{ marginTop: '80px', background: '#f9f9f9', padding: '40px', border: '1px solid #eee', textAlign: 'center' }}>
            <h3 style={{ fontSize: '22px', marginBottom: '20px' }}>{lang === 'en' ? 'Inquiry for' : 'استفسار عن'} {t[id]}</h3>
            <p style={{ color: 'var(--grey)', marginBottom: '25px', fontSize: '16px' }}>
              {lang === 'en' ? 'Need precision parts for this sector? Contact our engineering team today.' : 'هل تحتاج إلى قطع غيار دقيقة لهذا القطاع؟ تواصل مع فريقنا الهندسي اليوم.'}
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-block' }}>{t.contactUs}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;
