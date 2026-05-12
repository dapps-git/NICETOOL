import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Industries = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const industrySectors = [
    { 
      name: t.medical, 
      desc: lang === 'en' ? 'Manufacturing precision surgical instruments, orthopedic implants, and medical device components with biocompatible materials.' : 'تصنيع الأدوات الجراحية الدقيقة، وغرسات العظام، ومكونات الأجهزة الطبية باستخدام مواد متوافقة حيويًا.',
      icon: "🏥" 
    },
    { 
      name: t.energy, 
      desc: lang === 'en' ? 'Providing high-durability components for oil & gas, renewable energy, and power generation infrastructure across the Middle East.' : 'توفير مكونات عالية المتانة للنفط والغاز والطاقة المتجددة والبنية التحتية لتوليد الطاقة في جميع أنحاء الشرق الأوسط.',
      icon: "⚡" 
    },
    { 
      name: t.aerospace, 
      desc: lang === 'en' ? 'Complex 5-axis machining for engine parts, structural components, and high-strength alloys requiring extreme precision.' : 'تشغيل خماسي المحاور معقد لأجزاء المحرك، والمكونات الهيكلية، والسبائك عالية القوة التي تتطلب دقة فائقة.',
      icon: "✈️" 
    },
    { 
      name: t.food, 
      desc: lang === 'en' ? 'Stainless steel component manufacturing for food processing plants, ensuring hygiene standards and corrosion resistance.' : 'تصنيع مكونات الفولاذ المقاوم للصدأ لمصانع تجهيز الأغذية، مما يضمن معايير النظافة ومقاومة التآكل.',
      icon: "🥫" 
    },
    { 
      name: t.marine, 
      desc: lang === 'en' ? 'Manufacturing propeller shafts, marine engine parts, and specialized deck equipment resistant to saltwater environments.' : 'تصنيع أعمدة المروحة وأجزاء المحركات البحرية والمعدات الميدانية المتخصصة المقاومة لبيئات المياه المالحة.',
      icon: "⚓" 
    },
    { 
      name: "Motorsports", 
      desc: lang === 'en' ? "High-performance engine components, suspension parts, and lightweight titanium racing components for professional teams." : "مكونات المحرك عالية الأداء، وأجزاء التعليق، ومكونات السباق خفيفة الوزن من التيتانيوم للفرق المحترفة.", 
      icon: "🏎️" 
    },
    { 
      name: t.machineTool, 
      desc: lang === 'en' ? 'Supporting local manufacturers with custom jig & fixture designs, die sets, and precision tooling for industrial production.' : 'دعم المصنعين المحليين بتصميمات مخصصة للوصلات والمثبتات، ومجموعات القوالب، والأدوات الدقيقة للإنتاج الصناعي.',
      icon: "🛠️" 
    },
    { 
      name: "High-Tech", 
      desc: lang === 'en' ? "Developing precision aluminum housings, semiconductor heat sinks, and complex micro-components for the electronics industry." : "تطوير علب الألومنيوم الدقيقة، والمشتتات الحرارية لأشباه الموصلات، والمكونات الدقيقة المعقدة لصناعة الإلكترونيات.", 
      icon: "🔬" 
    }
  ];

  return (
    <div className="industries-page page-fade">
      <section className="sub-hero">
        <div className="container text-center">
          <h1 className="typewriter delay-1" style={{ fontSize: 'clamp(1.6rem, 6vw, 3rem)', textTransform: 'uppercase', letterSpacing: '4px' }}>{t.industries}</h1>
          <div style={{ width: '50px', height: '3px', background: 'var(--primary)', margin: '20px auto' }}></div>
          <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
            {lang === 'en' ? 'Delivering Precision Engineering Across Diverse Global Sectors' : 'تقديم الهندسة الدقيقة عبر قطاعات عالمية متنوعة'}
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section" style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {industrySectors.map((s, i) => (
              <div key={i} style={{
                background: '#fff',
                padding: '40px',
                border: '1px solid #eee',
                transition: 'var(--transition)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: '#f9f9f9', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '24px',
                  marginBottom: '20px',
                  color: 'var(--primary)'
                }}>{s.icon}</div>
                <h3 style={{ marginBottom: '15px', fontSize: '20px', fontWeight: 800 }}>{s.name}</h3>
                <p style={{ color: 'var(--grey)', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Banner */}
      <section className="section bg-dark text-white" style={{ padding: '80px 0' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '28px', marginBottom: '40px' }}>
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
