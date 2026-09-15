const STEP_IMAGES = [
  '/assets/images/vote-step-1.jpg',
  '/assets/images/vote-step-2.jpg',
  '/assets/images/vote-step-3.jpg',
]

export default function HowToVote({ t }) {
  return (
    <section id="come-votare" style={{ background: '#0B2842', padding: '100px 28px', color: '#FFFFFF' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div data-animate style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 40,
          alignItems: 'end',
          marginBottom: 64,
        }}>
          <div style={{ minWidth: 0 }}>
            <div style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 12,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 20,
            }}>
              {t.voteKicker}
            </div>
            <h2 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(30px, 3.4vw, 44px)',
              lineHeight: 1.12,
              letterSpacing: '-0.015em',
              color: '#FFFFFF',
              margin: 0,
            }}>
              {t.voteTitle}
            </h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', margin: 0, maxWidth: '48ch' }}>
            {t.voteIntro}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          marginBottom: 48,
        }}>
          {t.voteSteps.map((step, i) => (
            <div key={i} data-animate data-delay={i + 1} style={{
              background: 'rgba(255,255,255,0.06)',
              borderTop: `3px solid ${step.accent}`,
              minWidth: 0,
              overflow: 'hidden',
            }}>
              {/* Imagem do passo */}
              <div style={{
                aspectRatio: '4 / 3',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.04)',
              }}>
                <img
                  src={STEP_IMAGES[i]}
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Conteúdo */}
              <div style={{ padding: '28px 32px 36px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                  <span style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.4)',
                  }}>
                    {step.num}
                  </span>
                  <span style={{ display: 'block', width: 26, height: 3, background: step.accent }} />
                </div>
                <h3 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: 21,
                  lineHeight: 1.25,
                  color: '#FFFFFF',
                  margin: '0 0 14px',
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.68)', margin: 0 }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.14)',
          paddingTop: 36,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 24,
          justifyContent: 'space-between',
        }}>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.68)', margin: 0, maxWidth: '58ch' }}>
            {t.voteHelp}
          </p>
          <a href="#contatti" className="btn-outline" style={{ whiteSpace: 'nowrap' }}>
            {t.navContact}
          </a>
        </div>
      </div>
    </section>
  )
}
