import React, { useEffect } from 'react';
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
import img9 from '../assets/image copy 8.png';
import img10 from '../assets/image copy 9.png';
import img11 from '../assets/image copy 10.png';
import img12 from '../assets/image copy 12.png';
import img13 from '../assets/image copy 13.png';
import img14 from '../assets/image copy 14.png';

const Clients = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    document.title = lang === 'en' ? "Our Clients | NICE TOOLS Trusted Partners" : "عملاؤنا | شركاء نايس تولز الموثوقون";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', lang === 'en' ? 'Trusted by industry leaders including Aramco, SABIC, and Saudi Airlines for precision manufacturing.' : 'موثوق به من قبل قادة الصناعة بما في ذلك أرامكو وسابك والخطوط السعودية للتصنيع الدقيق.');
    }
  }, [lang]);

  const partners = [
    { img: img1, name: t.client1, desc: t.client1Desc },
    { img: img2, name: t.client2, desc: t.client2Desc },
    { img: img3, name: t.client3, desc: t.client3Desc },
    { img: img4, name: t.client4, desc: t.client4Desc },
    { img: img5, name: t.client5, desc: t.client5Desc },
    { img: img6, name: t.client6, desc: t.client6Desc },
    { img: img7, name: t.client7, desc: t.client7Desc },
    { img: img8, name: t.client8, desc: t.client8Desc },
    { img: img9, name: t.client9, desc: t.client9Desc },
    { img: img10, name: t.client10, desc: t.client10Desc },
    { img: img11, name: t.client11, desc: t.client11Desc },
    { img: img12, name: t.client12, desc: t.client12Desc },
    { img: img13, name: t.client13, desc: t.client13Desc },
    { img: img14, name: t.client14, desc: t.client14Desc }
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
          <div className="clients-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(1, 1fr)', 
            gap: '30px' 
          }}>
            {partners.map((partner, i) => (
              <div key={i} style={{
                background: '#fff',
                padding: '30px',
                border: '1px solid #eee',
                textAlign: 'center',
                transition: 'var(--transition)',
                boxShadow: '0 5px 15px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }} className="partner-card">
                <div style={{ 
                  height: '100px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '20px' 
                }}>
                  <img src={partner.img} alt={partner.name} style={{ maxWidth: '100%', maxHeight: '80px', objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontSize: '18px', marginBottom: '10px', color: 'var(--primary)' }}>{partner.name}</h3>
                <p style={{ color: 'var(--grey)', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <style>{`
        @media (min-width: 992px) {
          .clients-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 991px) and (min-width: 600px) {
          .clients-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Clients;
