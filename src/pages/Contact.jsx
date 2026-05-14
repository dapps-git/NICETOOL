import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    document.title = lang === 'en' ? "Contact Us | NICE TOOLS Jeddah KSA" : "اتصل بنا | نايس تولز جدة السعودية";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', lang === 'en' ? 'Get in touch with NICE TOOLS in Jeddah for precision CNC machining inquiries and technical support.' : 'تواصل مع نايس تولز في جدة لاستفسارات تشغيل CNC والدعم الفني.');
    }
  }, [lang]);

  return (
    <div className="contact-page page-fade">
      {/* Header */}
      <section className="sub-hero">
        <div className="container text-center">
          <h1 className="typewriter delay-1" style={{ fontSize: 'clamp(1.6rem, 6vw, 3rem)', textTransform: 'uppercase', letterSpacing: '4px' }}>{t.contactUs}</h1>
          <div style={{ width: '50px', height: '3px', background: 'var(--primary)', margin: '20px auto' }}></div>
          <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>{t.getInTouch}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px'
          }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ fontSize: '26px', marginBottom: '40px' }}>{t.getInTouch}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ color: 'var(--primary)', marginTop: '5px' }}><MapPin size={22} /></div>
                  <div>
                    <h4 style={{ marginBottom: '5px', fontSize: '17px' }}>{t.officeAddress}</h4>
                    <p style={{ color: 'var(--grey)', fontSize: '15px', lineHeight: 1.6 }}>
                      Jeddah - Al-Jawhara Dist.<br />
                      Near Al-Jawhara Petrol Station<br />
                      P.O.Box 126002 - Jeddah 21352
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ color: 'var(--primary)', marginTop: '5px' }}><Phone size={22} /></div>
                  <div>
                    <h4 style={{ marginBottom: '5px', fontSize: '17px' }}>{t.phone}</h4>
                    <p style={{ color: 'var(--grey)', fontSize: '15px' }}>
                      <a href="tel:+966541802013" style={{ color: 'inherit' }}>054 180 2013</a>
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ color: 'var(--primary)', marginTop: '5px' }}><Mail size={22} /></div>
                  <div>
                    <h4 style={{ marginBottom: '5px', fontSize: '17px' }}>{t.emailInquiry}</h4>
                    <p style={{ color: 'var(--grey)', fontSize: '15px' }}>
                      <a href="mailto:info@nicetoolsa.com" style={{ color: 'inherit' }}>info@nicetoolsa.com</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Company IDs */}
              <div style={{ marginTop: '50px', padding: '25px', background: '#f9f9f9', border: '1px solid #eee' }}>
                <p style={{ fontSize: '15px', marginBottom: '8px' }}><strong>VAT #:</strong> 310973524100003</p>
                <p style={{ fontSize: '15px' }}><strong>C.R.:</strong> 4030421338</p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div style={{ maxWidth: '500px' }}>
              <h2 style={{ fontSize: '26px', marginBottom: '40px' }}>{t.inquiryForm}</h2>
              <form style={{ display: 'grid', gap: '15px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <input type="text" placeholder={t.fullName} style={{ width: '100%', padding: '15px', border: '1px solid #ddd', fontSize: '16px' }} />
                  <input type="email" placeholder={t.emailAddress} style={{ width: '100%', padding: '15px', border: '1px solid #ddd', fontSize: '16px' }} />
                </div>
                <input type="text" placeholder={t.subject} style={{ width: '100%', padding: '15px', border: '1px solid #ddd', fontSize: '16px' }} />
                <textarea placeholder={t.messagePlaceholder} style={{ width: '100%', padding: '15px', border: '1px solid #ddd', minHeight: '150px', fontSize: '16px' }}></textarea>
                <button type="submit" className="btn btn-primary" style={{ padding: '18px', fontSize: '16px', fontWeight: 600 }}>{t.sendInquiry}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section" style={{ background: '#fcfcfc' }}>
        <div className="container">
          <div style={{
            height: '400px',
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
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
