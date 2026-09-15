import { useEffect } from 'react'
import { useLang } from './hooks/useLang'
import { COPY } from './i18n/translations'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Proposals from './components/Proposals'
import Team from './components/Team'
import Contact from './components/Contact'
import HowToVote from './components/HowToVote'
import CTA from './components/CTA'

export default function App() {
  const [lang, setLang] = useLang()
  const t = COPY[lang]

  useEffect(() => {
    const els = document.querySelectorAll('[data-animate]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <Header t={t} lang={lang} onLangChange={setLang} />
      <Hero t={t} />
      <About t={t} />
      <Proposals t={t} />
      <Team t={t} />
      <Contact t={t} />
      <HowToVote t={t} />
      <CTA t={t} />
    </div>
  )
}
