export default function Team({ t }) {
  return (
    <section id="squadra" style={{ background: '#F6F4F1', padding: '100px 28px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div data-animate style={{ maxWidth: 620, marginBottom: 56 }}>
          <div style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 12,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#10395F',
            marginBottom: 20,
          }}>
            {t.teamKicker}
          </div>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(30px, 3.4vw, 44px)',
            lineHeight: 1.12,
            letterSpacing: '-0.015em',
            color: '#10395F',
            margin: '0 0 20px',
          }}>
            {t.teamTitle}
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: '#5C6B7A', margin: 0 }}>{t.teamIntro}</p>
        </div>

        <div className="team-grid">
          {t.team.map((m, i) => (
            <article key={i} data-animate data-delay={i + 1} style={{ minWidth: 0 }}>
              <div style={{
                aspectRatio: '4 / 5',
                backgroundColor: '#E6E2DC',
                backgroundImage: 'repeating-linear-gradient(135deg, rgba(16,57,95,0.09) 0 8px, rgba(16,57,95,0) 8px 16px)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                padding: 14,
                marginBottom: 18,
              }}>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11,
                  letterSpacing: '0.08em',
                  color: '#7B8794',
                  background: '#FFFFFF',
                  padding: '6px 10px',
                }}>
                  {t.photoSlot}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <span style={{ display: 'block', width: 18, height: 3, background: m.accent, flex: '0 0 auto' }} />
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#7B8794',
                }}>
                  {m.role}
                </span>
              </div>
              <h3 style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: 19,
                color: '#10395F',
                margin: '0 0 8px',
              }}>
                {m.name}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: '#5C6B7A', margin: 0 }}>{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
