export default function Proposals({ t }) {
  return (
    <section id="proposte" style={{ background: '#FFFFFF', padding: '100px 28px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 40,
          alignItems: 'end',
          marginBottom: 56,
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
              {t.propKicker}
            </div>
            <h2 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(30px, 3.4vw, 44px)',
              lineHeight: 1.12,
              letterSpacing: '-0.015em',
              color: '#10395F',
              margin: 0,
            }}>
              {t.propTitle}
            </h2>
          </div>
          <p data-animate data-delay="2" style={{ fontSize: 17, lineHeight: 1.65, color: '#5C6B7A', margin: 0, maxWidth: '46ch' }}>
            {t.propIntro}
          </p>
        </div>

        <div className="proposals-grid">
          {t.proposals.map((p, i) => (
            <article key={i} data-animate data-delay={i + 1} className="proposal-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: '#9AA7B4' }}>{p.num}</span>
                <span style={{ display: 'block', width: 26, height: 3, background: p.accent }} />
              </div>
              <h3 style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: 21,
                lineHeight: 1.25,
                color: '#10395F',
                margin: 0,
              }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: '#5C6B7A', margin: 0 }}>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
