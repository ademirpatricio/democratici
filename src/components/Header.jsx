import { useState } from 'react'

export default function Header({ t, lang, onLangChange }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(11,40,66,0.96)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(255,255,255,0.12)',
    }}>
      {/* Barra principal */}
      <div style={{
        maxWidth: 1240,
        margin: '0 auto',
        padding: '16px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
      }}>
        {/* Logo */}
        <a href="#top" onClick={close} style={{ display: 'flex', alignItems: 'center', flex: '0 0 auto' }}>
          <img
            src="/assets/logo-h-white.svg"
            alt="Democratici in Brasile"
            style={{ height: 34, width: 'auto', display: 'block' }}
          />
        </a>

        {/* Nav desktop */}
        <nav className="nav-desktop">
          <a href="#chi-siamo" className="nav-link">{t.navAbout}</a>
          <a href="#proposte" className="nav-link">{t.navProposals}</a>
          <a href="#squadra" className="nav-link">{t.navTeam}</a>
          <a href="#contatti" className="nav-link">{t.navContact}</a>
          <a href="#adesione" className="btn-join">{t.navJoin}</a>
          <div className="lang-divider">
            <img
              src={lang === 'it' ? '/assets/flag-it.png' : '/assets/flag-br.png'}
              alt={lang === 'it' ? 'Italiano' : 'Português'}
              style={{ width: 20, height: 15, objectFit: 'cover', borderRadius: 2, flex: '0 0 auto' }}
            />
            <select value={lang} onChange={e => onLangChange(e.target.value)} aria-label="Lingua / Idioma" className="lang-select">
              <option value="it" style={{ color: '#16202B' }}>IT · Italiano</option>
              <option value="pt" style={{ color: '#16202B' }}>PT · Português</option>
            </select>
          </div>
        </nav>

        {/* Controles mobile: bandeira + hamburger */}
        <div className="mobile-controls">
          <button
            onClick={() => onLangChange(lang === 'it' ? 'pt' : 'it')}
            aria-label="Mudar idioma"
            className="lang-flag-btn"
            title={lang === 'it' ? 'Mudar para Português' : 'Passa a Italiano'}
          >
            <img
              src={lang === 'it' ? '/assets/flag-it.png' : '/assets/flag-br.png'}
              alt={lang === 'it' ? 'Italiano' : 'Português'}
              style={{ width: 24, height: 18, objectFit: 'cover', borderRadius: 2 }}
            />
            <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.04em' }}>
              {lang.toUpperCase()}
            </span>
          </button>

          <button
            className="hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Drawer mobile */}
      {open && (
        <div className="nav-mobile">
          <a href="#chi-siamo" className="nav-mobile-link" onClick={close}>{t.navAbout}</a>
          <a href="#proposte" className="nav-mobile-link" onClick={close}>{t.navProposals}</a>
          <a href="#squadra" className="nav-mobile-link" onClick={close}>{t.navTeam}</a>
          <a href="#contatti" className="nav-mobile-link" onClick={close}>{t.navContact}</a>
          <div style={{ padding: '20px 28px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <a href="#adesione" className="btn-join" onClick={close} style={{ display: 'block', textAlign: 'center', width: '100%' }}>
              {t.navJoin}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
