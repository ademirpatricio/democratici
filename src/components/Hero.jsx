export default function Hero({ t }) {
  return (
    <section id="top" style={{
      background: '#0B2842',
      backgroundImage: 'linear-gradient(rgba(11,40,66,0.88) 0%, rgba(11,40,66,0.92) 100%), url(/assets/images/1.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#FFFFFF',
      padding: '88px 28px 72px',
    }}>
      <div style={{
        maxWidth: 1240,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 64,
        alignItems: 'center',
      }}>
        {/* Imagem — primeira coluna */}
        <div data-animate style={{ minWidth: 0 }}>
          <div style={{
            position: 'relative',
            aspectRatio: '5 / 5',
            overflow: 'hidden',
            borderRadius: 2,
            background: '#123A5F',
          }}>
            <img
              src="/assets/images/hero-person.png"
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '10% 15%', display: 'block' }}
            />
          </div>
          <div style={{ display: 'flex', height: 8 }}>
            <span style={{ flex: 1, background: '#009246' }} />
            <span style={{ flex: 1, background: '#F6F4F1' }} />
            <span style={{ flex: 1, background: '#CE2B37' }} />
          </div>
        </div>

        {/* Texto — segunda coluna */}
        <div data-animate data-delay="2" style={{ minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <span style={{
              display: 'block',
              width: 44,
              height: 4,
              background: 'linear-gradient(to right, #009246 0 33.3%, #FFFFFF 33.3% 66.6%, #CE2B37 66.6% 100%)',
              flex: '0 0 auto',
            }} />
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 12,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.72)',
            }}>
              {t.heroKicker}
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(38px, 5.2vw, 64px)',
            lineHeight: 1.04,
            letterSpacing: '-0.02em',
            margin: '0 0 24px',
            textWrap: 'balance',
          }}>
            {t.heroTitle}
          </h1>

          <p style={{
            fontSize: 19,
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.78)',
            maxWidth: '54ch',
            margin: '0 0 36px',
          }}>
            {t.heroBody}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <a href="https://genealogiaitaliana.com.br/" className="btn-primary" target="_blank">{t.heroCta1}</a>
            <a href="#come-votare" className="btn-outline">{t.heroCta2}</a>
          </div>
        </div>
      </div>

      <div data-animate style={{
        maxWidth: 1240,
        margin: '72px auto 0',
        paddingTop: 40,
        borderTop: '1px solid rgba(255,255,255,0.16)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 32,
      }}>
        {t.stats.map((s, i) => (
          <div key={i} style={{ minWidth: 0 }}>
            <div style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: 40,
              lineHeight: 1,
              marginBottom: 8,
            }}>
              {s.value}
            </div>
            <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
