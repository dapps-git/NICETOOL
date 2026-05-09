import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="contact-page page-fade">
      {/* Header */}
      <section className="sub-hero">
        <div className="container text-center">
          <h1 className="typewriter delay-1" style={{ fontSize: 'clamp(1.6rem, 6vw, 3rem)', textTransform: 'uppercase', letterSpacing: '4px' }}>{t.contactUs}</h1>
          <div style={{ width: '50px', height: '3px', background: 'var(--primary)', margin: '20px auto' }}></div>
          <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>{t.getInTouch}</p>
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
                    <h4 style={{ marginBottom: '5px', fontSize: '17px' }}>{t.phone}</h4>
                    <p style={{ color: 'var(--grey)', fontSize: '14px' }}>
                      <a href="tel:+966541802013" style={{ color: 'inherit' }}>054 180 2013</a>
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ color: 'var(--primary)', marginTop: '5px' }}><Mail size={22} /></div>
                  <div>
                    <h4 style={{ marginBottom: '5px', fontSize: '17px' }}>{t.emailInquiry}</h4>
                    <p style={{ color: 'var(--grey)', fontSize: '14px' }}>
                      <a href="mailto:info@nicetoolsa.com" style={{ color: 'inherit' }}>info@nicetoolsa.com</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Company IDs */}
              <div style={{ marginTop: '50px', padding: '25px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #eee' }}>
                <p style={{ fontSize: '13px', marginBottom: '8px' }}><strong>VAT #:</strong> 310973524100003</p>
                <p style={{ fontSize: '13px' }}><strong>C.R.:</strong> 4030421338</p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div style={{ maxWidth: '500px' }}>
              <h2 style={{ fontSize: '26px', marginBottom: '40px' }}>{t.inquiryForm}</h2>
              <form style={{ display: 'grid', gap: '15px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <input type="text" placeholder={t.fullName} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px' }} />
                  <input type="email" placeholder={t.emailAddress} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px' }} />
                </div>
                <input type="text" placeholder={t.subject} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px' }} />
                <textarea placeholder={t.messagePlaceholder} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', minHeight: '120px', fontSize: '14px' }}></textarea>
                <button type="submit" className="btn btn-primary" style={{ padding: '15px', fontSize: '15px', fontWeight: 600 }}>{t.sendInquiry}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ height: '400px', width: '100%', borderTop: '1px solid #eee' }}>
        <iframe
          title="NICE TOOLS Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.7171439401!2d39.2458!3d21.4011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d1f0!2zSmVkZGFo!5e0!3m2!1sen!2ssa!4v1715243400000!5m2!1sen!2ssa"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
