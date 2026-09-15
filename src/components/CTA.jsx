export default function CTA({ t }) {
  return (
    <section id="adesione" style={{
      backgroundImage: 'linear-gradient(rgba(11,40,66,0.78) 0%, rgba(11,40,66,0.84) 100%), url(/assets/images/cta-bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      padding: '96px 28px 0',
    }}>
      {/* CTA principal */}
      <div data-animate style={{
        maxWidth: 680,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        paddingBottom: 96,
      }}>
        <h2 style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 600,
          fontSize: 'clamp(28px, 3.2vw, 42px)',
          lineHeight: 1.14,
          letterSpacing: '-0.015em',
          color: '#FFFFFF',
          margin: '0 0 20px',
          textWrap: 'balance',
        }}>
          {t.ctaTitle}
        </h2>

        <p style={{
          fontSize: 18,
          lineHeight: 1.65,
          color: 'rgba(255,255,255,0.82)',
          margin: '0 0 40px',
        }}>
          {t.ctaBody}
        </p>

        <div className="cta-buttons">
          <a href="https://form.democraticinbrasile.com" className="btn-cta-primary" style={{ flex: 1, justifyContent: 'center' }}>
            {t.ctaBtn1}
          </a>
          <a href="#come-votare" className="btn-cta-outline" style={{ flex: 1, justifyContent: 'center' }}>
            {t.ctaBtn2}
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-bar">
        {/* Logo + copyright */}
        <div className="footer-brand">
          <a href="#top">
            <img
              src="/assets/logo-h-white.svg"
              alt="Democratici in Brasile"
              style={{ height: 28, display: 'block' }}
            />
          </a>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)' }}>
            © 2026 Democratici in Brasile
          </span>
        </div>

        {/* Links + botões */}
        <div className="footer-right">
          <div className="footer-links">
            <a href="#" className="footer-link" style={{ fontSize: 14 }}>{t.privacy}</a>
            <a href="#" className="footer-link" style={{ fontSize: 14 }}>{t.transparency}</a>
          </div>
          <div className="footer-actions">
            <a href="#contatti" className="footer-btn-outline">{t.navContact}</a>
            <a href="https://form.democraticinbrasile.com" className="footer-btn-solid">{t.ctaBtn1}</a>
          </div>
        </div>
      </footer>
    </section>
  )
}
