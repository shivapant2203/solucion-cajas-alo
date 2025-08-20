// 'use client'
// import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react'

// type Language = 'en' | 'es'

// interface LanguageContextType {
//   lang: Language
//   setLang: (lang: Language) => void
// }

// const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// export const LanguageProvider = ({ children }: { children: ReactNode }) => {
//   const [lang, setLang] = useState<Language>('en')

//   useEffect(() => {
//     const saved = localStorage.getItem('lang') as Language
//     if (saved === 'en' || saved === 'es') {
//       setLang(saved)
//     }
//   }, [])

//   const changeLang = (newLang: Language) => {
//     setLang(newLang)
//     localStorage.setItem('lang', newLang)
//   }

//   return (
//     <LanguageContext.Provider value={{ lang, setLang: changeLang }}>
//       {children}
//     </LanguageContext.Provider>
//   )
// }

// // Hook to use context easily
// export const useLanguage = (): LanguageContextType => {
//   const context = useContext(LanguageContext)
//   if (!context) {
//     throw new Error('useLanguage must be used within LanguageProvider')
//   }
//   return context
// }

'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es') // default language

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
