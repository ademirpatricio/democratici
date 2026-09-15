export default function Contact({ t }) {
  return (
    <section id="contatti" style={{ background: '#FFFFFF', padding: '100px 28px' }}>
      <div style={{
        maxWidth: 1240,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 72,
        alignItems: 'start',
      }}>
        <div data-animate style={{ minWidth: 0 }}>
          <div style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 12,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#10395F',
            marginBottom: 20,
          }}>
            {t.contactKicker}
          </div>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(30px, 3.4vw, 44px)',
            lineHeight: 1.12,
            letterSpacing: '-0.015em',
            color: '#10395F',
            margin: '0 0 32px',
          }}>
            {t.contactTitle}
          </h2>

          <div style={{ display: 'grid', gap: 26, maxWidth: '44ch' }}>
            {[
              { label: t.labelOffice, value: 'Rua Lorem Ipsum, 000 · Conjunto 00\nSão Paulo · SP · 00000-000' },
              { label: t.labelEmail, value: 'dib@democratici.com.br', href: 'mailto:dib@democratici.com.br' },
              { label: t.labelPhone, value: '+55 11 0000-0000' },
              { label: t.labelHours, value: t.hoursValue },
            ].map((item, i) => (
              <div key={i} style={{ borderTop: '1px solid #E6E2DC', paddingTop: 18 }}>
                <div style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#7B8794',
                  marginBottom: 8,
                }}>
                  {item.label}
                </div>
                {item.href ? (
                  <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0 }}>
                    <a href={item.href}>{item.value}</a>
                  </p>
                ) : (
                  <p style={{ fontSize: 17, lineHeight: 1.6, color: '#16202B', margin: 0, whiteSpace: 'pre-line' }}>
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div data-animate data-delay="2" style={{ minWidth: 0, background: '#F6F4F1', padding: '40px 36px 44px' }}>
          <h3 style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: 22,
            color: '#10395F',
            margin: '0 0 8px',
          }}>
            {t.formTitle}
          </h3>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: '#5C6B7A', margin: '0 0 28px' }}>{t.formIntro}</p>

          <div style={{ display: 'grid', gap: 16 }}>
            <label style={{ display: 'grid', gap: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#16202B' }}>{t.formName}</span>
              <input type="text" placeholder={t.formNamePh} className="form-input" />
            </label>
            <label style={{ display: 'grid', gap: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#16202B' }}>{t.formEmail}</span>
              <input type="email" placeholder="nome@email.com" className="form-input" />
            </label>
            <label style={{ display: 'grid', gap: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#16202B' }}>{t.formMessage}</span>
              <textarea rows={4} placeholder={t.formMessagePh} className="form-textarea" />
            </label>
            <button type="button" className="btn-submit">{t.formSubmit}</button>
          </div>
        </div>
      </div>
    </section>
  )
}
