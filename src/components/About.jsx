const PILLAR_ICONS = [
  // Representação — pessoas / comunidade
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="9" r="4" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M2 22c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="21" cy="9" r="3" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M18 22c0-2.5 1.6-4.5 4-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>,
  // Serviços ao cidadão — escudo / proteção
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 3L5 7v7c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7L14 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M9.5 14l3 3 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Vínculos com a Itália — globo / conexão
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M14 4c-3 3-5 6-5 10s2 7 5 10M14 4c3 3 5 6 5 10s-2 7-5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M4 14h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>,
]

export default function About({ t }) {
  return (
    <section id="chi-siamo" style={{ background: '#F6F4F1', padding: '100px 28px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>

        {/* Bloco imagem + texto */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 72,
          alignItems: 'center',
          marginBottom: 56,
        }}>
          <div data-animate style={{ minWidth: 0 }}>
            <div style={{ aspectRatio: '5 / 6', overflow: 'hidden', borderRadius: 2, background: '#E6E2DC' }}>
              <img
                src="/assets/images/about-bg.png"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '18% center', display: 'block' }}
              />
            </div>
          </div>

          <div data-animate data-delay="2" style={{ minWidth: 0 }}>
            <div style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 12,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#10395F',
              marginBottom: 20,
            }}>
              {t.aboutKicker}
            </div>

            <h2 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(30px, 3.4vw, 44px)',
              lineHeight: 1.12,
              letterSpacing: '-0.015em',
              color: '#10395F',
              margin: '0 0 24px',
            }}>
              {t.aboutTitle}
            </h2>

            <p style={{ fontSize: 17, lineHeight: 1.68, color: '#46525F', margin: '0 0 18px' }}>{t.aboutP1}</p>
            <p style={{ fontSize: 17, lineHeight: 1.68, color: '#46525F', margin: 0 }}>{t.aboutP2}</p>
          </div>
        </div>

        {/* Pilares — linha única, 3 colunas */}
        <div className="pillars-grid">
          {t.pillars.map((p, i) => (
            <div key={i} data-animate data-delay={i + 1} style={{
              background: '#FFFFFF',
              padding: '32px 28px 36px',
              borderTop: `3px solid ${p.accent}`,
            }}>
              <div style={{ color: p.accent, marginBottom: 18 }}>
                {PILLAR_ICONS[i]}
              </div>
              <h3 style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: 18,
                color: '#10395F',
                margin: '0 0 10px',
              }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: '#5C6B7A', margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
