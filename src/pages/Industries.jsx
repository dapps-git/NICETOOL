import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Industries = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    document.title = lang === 'en' ? "Industries Served | NICE TOOLS Precision Manufacturing" : "الصناعات | نايس تولز للتصنيع الدقيق";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', lang === 'en' ? 'Delivering Precision Engineering Across Diverse Global Sectors including Medical, Energy, and Aerospace.' : 'تقديم الهندسة الدقيقة عبر قطاعات عالمية متنوعة تشمل الطب والطاقة والفضاء.');
    }
  }, [lang]);

  const industrySectors = [
    { 
      id: 'medical',
      name: t.medical, 
      desc: lang === 'en' ? 'Manufacturing precision surgical instruments, orthopedic implants, and medical device components with biocompatible materials.' : 'تصنيع الأدوات الجراحية الدقيقة، وغرسات العظام، ومكونات الأجهزة الطبية باستخدام مواد متوافقة حيويًا.',
      icon: "🏥" 
    },
    { 
      id: 'aerospace',
      name: t.aerospace, 
      desc: lang === 'en' ? 'Complex 5-axis machining for engine parts, structural components, and high-strength alloys requiring extreme precision.' : 'تشغيل خماسي المحاور معقد لأجزاء المحرك، والمكونات الهيكلية، والسبائك عالية القوة التي تتطلب دقة فائقة.',
      icon: "✈️" 
    },
    { 
      id: 'food',
      name: t.food, 
      desc: lang === 'en' ? 'Stainless steel component manufacturing for food processing plants, ensuring hygiene standards and corrosion resistance.' : 'تصنيع مكونات الفولاذ المقاوم للصدأ لمصانع تجهيز الأغذية، مما يضمن معايير النظافة ومقاومة التآكل.',
      icon: "🥫" 
    },
    { 
      id: 'marine',
      name: t.marine, 
      desc: lang === 'en' ? 'Manufacturing propeller shafts, marine engine parts, and specialized deck equipment resistant to saltwater environments.' : 'تصنيع أعمدة المروحة وأجزاء المحركات البحرية والمعدات الميدانية المتخصصة المقاومة لبيئات المياه المالحة.',
      icon: "⚓" 
    }
  ];

  return (
    <div className="industries-page page-fade">
      <section className="sub-hero">
        <div className="container text-center">
          <h1 className="typewriter delay-1" style={{ fontSize: 'clamp(1.6rem, 6vw, 3rem)', textTransform: 'uppercase', letterSpacing: '4px' }}>{t.industries}</h1>
          <div style={{ width: '50px', height: '3px', background: 'var(--primary)', margin: '20px auto' }}></div>
          <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
            {lang === 'en' ? 'Delivering Precision Engineering Across Diverse Global Sectors' : 'تقديم الهندسة الدقيقة عبر قطاعات عالمية متنوعة'}
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section" style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '40px' 
          }}>
            {industrySectors.map((s, i) => (
              <Link key={i} to={`/industry/${s.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="industry-card" style={{
                  background: '#fff',
                  padding: '50px',
                  border: '1px solid #eee',
                  transition: 'var(--transition)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  textAlign: 'center',
                  alignItems: 'center'
                }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    background: '#fffaf5', 
                    borderRadius: '50%',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '40px',
                    marginBottom: '25px',
                    border: '2px solid var(--primary)',
                    color: 'var(--primary)'
                  }}>{s.icon}</div>
                  <h3 style={{ marginBottom: '20px', fontSize: '28px', fontWeight: 800 }}>{s.name}</h3>
                  <p style={{ color: 'var(--grey)', fontSize: '18px', lineHeight: 1.8, margin: 0 }}>{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Banner */}
      <section className="section bg-dark text-white" style={{ padding: '80px 0' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '32px', marginBottom: '40px' }}>
            {lang === 'en' ? 'Technical Excellence Standards' : 'معايير التميز التقني'}
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {['ISO 9001:2015', 'ASME BPVC', 'ANSI / ASQ'].map((std, i) => (
              <div key={i} style={{ 
                padding: '15px 30px', 
                border: '1px solid var(--primary)', 
                color: 'var(--primary)',
                fontWeight: 700,
                fontSize: '16px',
                textTransform: 'uppercase'
              }}>
                {std}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
