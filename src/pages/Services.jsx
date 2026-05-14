import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Services = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    document.title = lang === 'en' ? "Our Services | CNC Machining & Tooling KSA" : "خدماتنا | تشغيل CNC والقوالب بالسعودية";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.comprehensiveSolutions);
    }
  }, [lang, t.comprehensiveSolutions]);

  const services = [
    {
      id: 'cnc-milling',
      img: '/cnc-milling.png',
      name: lang === 'en' ? 'CNC Milling' : 'تفريز CNC',
      tagline: lang === 'en' ? 'Precision Multi-Axis Machining' : 'تشغيل متعدد المحاور بدقة عالية',
      desc: lang === 'en'
        ? 'Our CNC milling services cover 3-axis, 4-axis, and 5-axis machining for complex geometries. Using the latest GF Mikron and Mazak machines, we achieve tolerances of ±0.002mm for aerospace, medical, and energy sector components.'
        : 'تشمل خدمات التفريز CNC لدينا التشغيل على 3 و4 و5 محاور للأشكال الهندسية المعقدة. باستخدام أحدث آلات GF Mikron وMazak، نحقق تفاوتات ±0.002 مم لمكونات قطاعات الفضاء والطب والطاقة.',
      items: lang === 'en'
        ? ['3-Axis & 5-Axis Milling', 'High-Speed Machining', 'Aerospace Components', 'Complex Geometries', 'Prototype to Production']
        : ['تفريز ثلاثي وخماسي المحاور', 'تشغيل عالي السرعة', 'مكونات الفضاء', 'الأشكال الهندسية المعقدة', 'من النماذج إلى الإنتاج']
    },
    {
      id: 'cnc-lathe',
      img: '/cnc-lathe.png',
      name: lang === 'en' ? 'CNC Lathe / Turning' : 'مخرطة CNC',
      tagline: lang === 'en' ? 'High-Precision Turning Operations' : 'عمليات خراطة عالية الدقة',
      desc: lang === 'en'
        ? 'From small-diameter pins to large-scale shafts, our CNC lathe division handles full turning operations with live tooling, threading, grooving, and boring. Part diameters from 2mm to 350mm, lengths up to 1000mm.'
        : 'من المسامير صغيرة القطر إلى الأعمدة الكبيرة، يتولى قسم المخرطة CNC جميع عمليات الخراطة مع الأدوات المتحركة والتخريم والتفريز. أقطار القطع من 2 مم إلى 350 مم، وأطوال تصل إلى 1000 مم.',
      items: lang === 'en'
        ? ['Precision Turning', 'Shaft Manufacturing', 'Thread Milling & Tapping', 'Boring & Reaming', 'OD & ID Grinding']
        : ['الخراطة الدقيقة', 'تصنيع الأعمدة', 'التخريم والصنبرة', 'التثقيب والترويس', 'الطحن الخارجي والداخلي']
    },
    {
      id: 'tooling-dies',
      img: '/injection-mold.png',
      name: lang === 'en' ? 'Tooling, Dies & Molds' : 'الأدوات والقوالب',
      tagline: lang === 'en' ? 'Mold Manufacturing & Repair Specialists' : 'متخصصون في تصنيع القوالب وإصلاحها',
      desc: lang === 'en'
        ? 'NICETOOL specializes in injection mold repair, press tools, progressive dies, and jig & fixture manufacturing. There is always a possibility that a mold can break or wear prematurely — we fix it. Includes ECN-based engineering change support.'
        : 'تتخصص NICETOOL في إصلاح قوالب الحقن وأدوات الضغط والقوالب التقدمية وتصنيع الوصلات والمثبتات. دائمًا ما تتعرض القوالب للكسر أو التآكل المبكر — نحن نصلحها. يشمل دعم تغيير الهندسة.',
      items: lang === 'en'
        ? ['Injection Mold Repair', 'Progressive Dies', 'Press Tools', 'Jig & Fixtures', 'Wirecut & EDM Spark Erosion']
        : ['إصلاح قوالب الحقن', 'القوالب التقدمية', 'أدوات الضغط', 'الوصلات والمثبتات', 'القطع السلكي وتآكل الشرارة']
    },
    {
      id: 'plant-maintenance',
      img: '/plant-maintenance.png',
      name: lang === 'en' ? 'Plant Maintenance' : 'صيانة المصانع',
      tagline: lang === 'en' ? 'On-Site & Workshop Industrial Services' : 'خدمات صناعية ميدانية وفي ورشة العمل',
      desc: lang === 'en'
        ? 'Our plant maintenance division supports industrial facilities across KSA with mechanical repair, hydraulic component servicing, and precision component manufacturing. Reducing downtime and ensuring your operations run at peak efficiency.'
        : 'يدعم قسم صيانة المصانع لدينا المرافق الصناعية في جميع أنحاء المملكة العربية السعودية بالإصلاح الميكانيكي وصيانة المكونات الهيدروليكية وتصنيع المكونات الدقيقة. تقليل وقت التوقف وضمان عمل العمليات بكفاءة قصوى.',
      items: lang === 'en'
        ? ['Hydraulic Components', 'Machinery Repair', 'On-site Services', 'Preventive Maintenance', 'Emergency Breakdown Support']
        : ['المكونات الهيدروليكية', 'إصلاح الآلات', 'الخدمات الميدانية', 'الصيانة الوقائية', 'دعم الأعطال الطارئة']
    }
  ];

  return (
    <div className="services-page page-fade">
      <section className="sub-hero">
        <div className="container text-center">
          <h1 className="typewriter delay-1" style={{ fontSize: 'clamp(1.6rem, 6vw, 3rem)', textTransform: 'uppercase', letterSpacing: '4px' }}>{t.services}</h1>
          <div style={{ width: '50px', height: '3px', background: 'var(--primary)', margin: '20px auto' }}></div>
          <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>{t.comprehensiveSolutions}</p>
        </div>
      </section>

      {/* Services List */}
      <section className="section" style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div className="services-container" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {services.map((svc) => (
              <div key={svc.id} id={svc.id} className="service-row" style={{
                display: 'flex',
                flexDirection: 'column',
                background: '#fff',
                border: '1px solid #f0f0f0',
                transition: 'var(--transition)'
              }}>
                <div style={{
                  height: '300px',
                  width: '100%',
                  overflow: 'hidden'
                }}>
                  <img
                    src={svc.img}
                    alt={svc.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div style={{ padding: '40px' }}>
                  <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '16px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>
                    {svc.tagline}
                  </p>
                  <h2 style={{ fontSize: '32px', marginBottom: '15px', fontWeight: 800 }}>{svc.name}</h2>
                  <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'var(--grey)', marginBottom: '20px' }}>
                    {svc.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {svc.items.map((item, idx) => (
                      <span key={idx} style={{
                        padding: '8px 18px',
                        border: '1px solid #eee',
                        color: 'var(--slate)',
                        fontSize: '15px',
                        fontWeight: 600,
                        background: '#fafafa'
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Banner */}
      <section className="section" style={{ background: 'var(--primary)', padding: '60px 0' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', marginBottom: '15px', fontWeight: 800 }}>{t.integratedSupport}</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '800px', margin: '0 auto 30px', fontSize: '24px' }}>
            {t.integratedText}
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ padding: '10px 25px', background: '#fff', color: 'var(--primary)', fontWeight: 700, fontSize: '16px' }}>{t.solidWorksExpertise}</span>
            <span style={{ padding: '10px 25px', background: 'transparent', border: '2px solid #fff', color: '#fff', fontWeight: 700, fontSize: '16px' }}>{t.mastercamReady}</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ padding: '80px 0', background: '#f9f9f9', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', marginBottom: '15px', fontWeight: 800 }}>
            {lang === 'en' ? 'Ready to Start Your Project?' : 'هل أنت مستعد لبدء مشروعك؟'}
          </h2>
          <p style={{ color: 'var(--grey)', marginBottom: '30px', fontSize: '24px' }}>
            {lang === 'en' ? 'Contact our engineering team for a free quote and technical consultation.' : 'تواصل مع فريقنا الهندسي للحصول على عرض أسعار مجاني واستشارة تقنية.'}
          </p>
          <Link to="/contact" className="btn btn-primary">{t.contactUs}</Link>
        </div>
      </section>

      <style>{`
        @media (min-width: 992px) {
          .service-row {
            flex-direction: row !important;
            height: 400px;
          }
          .service-row > div:first-child {
            width: 45% !important;
            height: 100% !important;
          }
          .service-row > div:last-child {
            width: 55% !important;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
