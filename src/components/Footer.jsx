export default function Footer({ t }) {
  const navLinks = [
    { label: t.navAbout, href: '#chi-siamo' },
    { label: t.navProposals, href: '#proposte' },
    { label: t.navTeam, href: '#squadra' },
    { label: t.navContact, href: '#contatti' },
    { label: t.heroCta2, href: '#come-votare' },
  ]

  return (
    <footer style={{ background: '#061824', color: '#FFFFFF', padding: '72px 28px 40px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 48,
          marginBottom: 64,
        }}>
          {/* Brand */}
          <div style={{ minWidth: 0, gridColumn: 'span 1' }}>
            <a href="#top" style={{ display: 'inline-block', marginBottom: 20 }}>
              <img
                src="/assets/logo-h-white.svg"
                alt="Democratici in Brasile"
                style={{ height: 32, display: 'block' }}
              />
            </a>
            <p style={{
              fontSize: 14,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.5)',
              margin: 0,
              maxWidth: '30ch',
            }}>
              {t.footerTagline}
            </p>
          </div>

          {/* Navigation */}
          <div style={{ minWidth: 0 }}>
            <div style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: 20,
            }}>
              {t.footerNavTitle}
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 12 }}>
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community links */}
          <div style={{ minWidth: 0 }}>
            <div style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: 20,
            }}>
              {t.footerCommunityTitle}
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 12 }}>
              {t.footerLinks.map((label, i) => (
                <li key={i}>
                  <a href="#" className="footer-link">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div style={{ minWidth: 0 }}>
            <div style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: 20,
            }}>
              {t.newsTitle}
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', margin: '0 0 20px' }}>
              {t.newsBody}
            </p>
            <div style={{ display: 'flex', gap: 0 }}>
              <input
                type="email"
                placeholder="nome@email.com"
                className="newsletter-input"
                style={{ flex: 1, minWidth: 0 }}
              />
              <button type="button" className="btn-newsletter">{t.newsBtn}</button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 28,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', margin: 0 }}>
            © {new Date().getFullYear()} Democratici in Brasile
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" className="footer-link" style={{ fontSize: 13 }}>{t.privacy}</a>
            <a href="#" className="footer-link" style={{ fontSize: 13 }}>{t.transparency}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
