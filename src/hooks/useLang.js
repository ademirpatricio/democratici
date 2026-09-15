import { useState } from 'react'

export function useLang(defaultLang = 'it') {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('dib-lang')
      if (saved === 'it' || saved === 'pt') return saved
    } catch (e) {}
    return defaultLang
  })

  function changeLang(newLang) {
    if (newLang !== 'it' && newLang !== 'pt') return
    try { localStorage.setItem('dib-lang', newLang) } catch (e) {}
    setLang(newLang)
  }

  return [lang, changeLang]
}
