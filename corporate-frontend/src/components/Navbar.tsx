// // import Link from 'next/link';

// // export default function Navbar() {
// //   return (
// //     <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto flex flex-row items-center justify-between px-6 py-3">
// //         <Link href="/" className="text-2xl font-bold tracking-tight whitespace-nowrap">
// //           Solucion en Cajas ALO
// //         </Link>
// //         <div className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-6">
// //           <Link href="/" className="px-3 py-1 rounded hover:bg-blue-800 transition">Home</Link>
// //           <Link href="/about" className="px-3 py-1 rounded hover:bg-blue-800 transition">About</Link>
// //           <Link href="/products" className="px-3 py-1 rounded hover:bg-blue-800 transition">Products</Link>
// //           <Link href="/sustainability" className="px-3 py-1 rounded hover:bg-blue-800 transition">Sustainability</Link>
// //           <Link href="/careers" className="px-3 py-1 rounded hover:bg-blue-800 transition">Careers</Link>
// //           <Link href="/contact" className="px-3 py-1 rounded hover:bg-blue-800 transition">Contact</Link>
// //           <Link href="/quotation" className="ml-4 px-4 py-1 bg-white text-blue-900 font-medium rounded shadow hover:bg-blue-50 transition">Get Quotation</Link>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// 'use client'
// import Link from 'next/link'
// import { useState, useEffect } from 'react'
// import { translations } from '@/translations'

// export default function Navbar() {
//   const [lang, setLang] = useState<'en' | 'es'>('en')

//   // Load saved language
//   useEffect(() => {
//     const saved = localStorage.getItem('lang') as 'en' | 'es'
//     if (saved) setLang(saved)
//   }, [])

//   const t = translations[lang]

//   const changeLang = (newLang: 'en' | 'es') => {
//     setLang(newLang)
//     localStorage.setItem('lang', newLang)
//   }

//   return (
//     <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex flex-row items-center justify-between px-6 py-3">
//         <Link href="/" className="text-2xl font-bold tracking-tight whitespace-nowrap">
//           Solucion en Cajas ALO
//         </Link>
        
//         <div className="flex items-center gap-6">
//           <Link href="/" className="hover:text-blue-300 transition">{t.home}</Link>
//           <Link href="/about" className="hover:text-blue-300 transition">{t.about}</Link>
//           <Link href="/products" className="hover:text-blue-300 transition">{t.products}</Link>
//           <Link href="/sustainability" className="hover:text-blue-300 transition">{t.sustainability}</Link>
//           <Link href="/careers" className="hover:text-blue-300 transition">{t.careers}</Link>
//           <Link href="/contact" className="hover:text-blue-300 transition">{t.contact}</Link>
//           <Link href="/quotation" className="ml-3 bg-white text-blue-900 font-semibold rounded px-3 py-1 shadow hover:bg-blue-100 transition">
//             {t.quotation}
//           </Link>

//           {/* Language Switcher */}
//           <select
//             value={lang}
//             onChange={(e) => changeLang(e.target.value as 'en' | 'es')}
//             className="bg-blue-900 border border-white text-white text-sm rounded px-2 py-1"
//           >
//             <option value="en">EN</option>
//             <option value="es">ES</option>
//           </select>
//         </div>
//       </div>
//     </nav>
//   )
// }

// 'use client'
// import Link from 'next/link'
// import { useLanguage } from '@/context/LanguageContext'
// import { translations } from '@/translations'

// export default function Navbar() {
//   const { lang, setLang } = useLanguage()
//   const t = translations[lang]

//   const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setLang(e.target.value as 'en' | 'es')
//   }

//   return (
//     <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex flex-row items-center justify-between px-6 py-3">
//         <Link href="/" className="text-2xl font-bold tracking-tight whitespace-nowrap">
//           Solucion en Cajas ALO
//         </Link>

//         <div className="flex items-center gap-6">
//           <Link href="/" className="hover:text-blue-300 transition">{t.home}</Link>
//           <Link href="/about" className="hover:text-blue-300 transition">{t.about}</Link>
//           <Link href="/products" className="hover:text-blue-300 transition">{t.products}</Link>
//           <Link href="/sustainability" className="hover:text-blue-300 transition">{t.sustainability}</Link>
//           <Link href="/careers" className="hover:text-blue-300 transition">{t.careers}</Link>
//           <Link href="/contact" className="hover:text-blue-300 transition">{t.contact}</Link>
//           <Link
//             href="/quotation"
//             className="ml-3 bg-white text-blue-900 font-semibold rounded px-3 py-1 shadow hover:bg-blue-100 transition"
//           >
//             {t.quotation}
//           </Link>

//           <select
//             value={lang}
//             onChange={handleLangChange}
//             className="bg-blue-900 border border-white text-white text-sm rounded px-2 py-1"
//             aria-label="Select language"
//           >
//             <option value="en">EN</option>
//             <option value="es">ES</option>
//           </select>
//         </div>
//       </div>
//     </nav>
//   )
// }

// 'use client'
// import Link from 'next/link'
// import { useLanguage } from '@/context/LanguageContext'
// import { translations } from '@/translations'

// export default function Navbar() {
//   const { lang, setLang } = useLanguage()
//   const t = translations[lang]

//   return (
//     <nav className="bg-white text-gray-800 shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex flex-row items-center justify-between px-6 py-3">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold tracking-tight whitespace-nowrap text-gray-900">
//           Solucion en Cajas ALO
//         </Link>
//         <div className="flex items-center gap-6">
//           {/* Nav links */}
//           <Link href="/" className="hover:text-teal-600 transition">{t.home}</Link>
//           <Link href="/about" className="hover:text-teal-600 transition">{t.about}</Link>
//           <Link href="/products" className="hover:text-teal-600 transition">{t.products}</Link>
//           <Link href="/sustainability" className="hover:text-teal-600 transition">{t.sustainability}</Link>
//           <Link href="/careers" className="hover:text-teal-600 transition">{t.careers}</Link>
//           <Link href="/contact" className="hover:text-teal-600 transition">{t.contact}</Link>

//           {/* Get Quotation button */}
//           <Link
//             href="/quotation"
//             className="ml-3 bg-teal-600 text-white font-semibold rounded px-3 py-1 shadow hover:bg-teal-700 transition"
//           >
//             {t.quotation}
//           </Link>

//           {/* Language Selector */}
//           <select
//             value={lang}
//             onChange={(e) => setLang(e.target.value as 'en' | 'es')}
//             className="bg-white border border-gray-300 text-gray-800 text-sm rounded px-2 py-1"
//             aria-label="Select language"
//           >
//             <option value="en">EN</option>
//             <option value="es">ES</option>
//           </select>
//         </div>
//       </div>
//     </nav>
//   )
// }

// 'use client'
// import Link from 'next/link'
// import { useLanguage } from '@/context/LanguageContext'
// import { translations } from '@/translations'
// import LanguageSelector from '@/components/LanguageSelector'

// export default function Navbar() {
//   const { language } = useLanguage()
//   const t = translations[language]

//   return (
//     <nav className="bg-packaging-light text-textPrimary shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex flex-row items-center justify-between px-6 py-3">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold tracking-tight whitespace-nowrap text-textPrimary">
//           Solucion en Cajas ALO
//         </Link>
//         <div className="flex items-center gap-6">
//           <Link href="/" className="hover:text-textAccent transition">{t.home}</Link>
//           <Link href="/about" className="hover:text-textAccent transition">{t.about}</Link>
//           <Link href="/products" className="hover:text-textAccent transition">{t.products}</Link>
//           <Link href="/sustainability" className="hover:text-textAccent transition">{t.sustainability}</Link>
//           <Link href="/careers" className="hover:text-textAccent transition">{t.careers}</Link>
//           <Link href="/contact" className="hover:text-textAccent transition">{t.contact}</Link>
//           <Link
//             href="/quotation"
//             className="ml-3 bg-packaging-accent text-white font-semibold rounded px-3 py-1 shadow hover:bg-packaging-accentDark transition"
//           >
//             {t.quotation}
//           </Link>
//           {/* Use only the LanguageSelector, NOT a duplicate <select> */}
//           <LanguageSelector />
//         </div>
//       </div>
//     </nav>
//   )
// }


// 'use client'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useLanguage } from '@/context/LanguageContext'
// import { translations } from '@/translations'
// import LanguageSelector from '@/components/LanguageSelector'

// export default function Navbar() {
//   const { language } = useLanguage()
//   const t = translations[language]

//   return (
//     <nav className="bg-packaging-light text-textPrimary shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex flex-row items-center justify-between px-6 py-3">
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/cajasalologo.png"          // Place your logo at /public/logo.png
//             alt="Solucion en Cajas ALO logo"
//             width={140}              // Adjust these values for best fit
//             height={48}
//             priority
//           />
//         </Link>

//         <div className="flex items-center gap-6">
//           <Link href="/" className="hover:text-textAccent transition">{t.home}</Link>
//           <Link href="/about" className="hover:text-textAccent transition">{t.about}</Link>
//           <Link href="/products" className="hover:text-textAccent transition">{t.products}</Link>
//           <Link href="/sustainability" className="hover:text-textAccent transition">{t.sustainability}</Link>
//           <Link href="/careers" className="hover:text-textAccent transition">{t.careers}</Link>
//           <Link href="/contact" className="hover:text-textAccent transition">{t.contact}</Link>
//           <Link
//             href="/quotation"
//             className="ml-3 bg-packaging-accent text-white font-semibold rounded px-3 py-1 shadow hover:bg-packaging-accentDark transition"
//           >
//             {t.quotation}
//           </Link>
//           {/* Language selector component */}
//           <LanguageSelector />
//         </div>
//       </div>
//     </nav>
//   )
// }

// 'use client'
// import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useLanguage } from '@/context/LanguageContext'
// import { translations } from '@/translations'
// import LanguageSelector from '@/components/LanguageSelector'

// export default function Navbar() {
//   const { language } = useLanguage()
//   const t = translations[language]
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <nav className="bg-packaging-light text-textPrimary shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
//         {/* Logo */}
//         <Link href="/" className="flex items-center min-w-[140px]">
//           <Image
//             src="/cajasalologo.png"
//             alt="Caja y Empaques ALO logo"
//             width={48}      // Set logo height; width will auto-scale
//             height={48}
//             priority
//             className="object-contain"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-6">
//           <Link href="/" className="hover:text-textAccent transition">{t.home}</Link>
//           <Link href="/about" className="hover:text-textAccent transition">{t.about}</Link>
//           <Link href="/products" className="hover:text-textAccent transition">{t.products}</Link>
//           <Link href="/sustainability" className="hover:text-textAccent transition">{t.sustainability}</Link>
//           <Link href="/careers" className="hover:text-textAccent transition">{t.careers}</Link>
//           <Link href="/contact" className="hover:text-textAccent transition">{t.contact}</Link>
//           <Link
//             href="/quotation"
//             className="bg-packaging-accent text-white font-semibold rounded px-3 py-1 shadow hover:bg-packaging-accentDark transition"
//           >
//             {t.quotation}
//           </Link>
//           <LanguageSelector />
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className="inline-flex items-center justify-center p-2 rounded md:hidden hover:bg-packaging-accent transition"
//           aria-label="Toggle menu"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             className="w-6 h-6 text-packaging-dark"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="absolute top-full left-0 w-full bg-packaging-light shadow-md md:hidden">
//             <div className="flex flex-col items-center gap-6 py-3">
//               <Link href="/" className="hover:text-textAccent transition">{t.home}</Link>
//               <Link href="/about" className="hover:text-textAccent transition">{t.about}</Link>
//               <Link href="/products" className="hover:text-textAccent transition">{t.products}</Link>
//               <Link href="/sustainability" className="hover:text-textAccent transition">{t.sustainability}</Link>
//               <Link href="/careers" className="hover:text-textAccent transition">{t.careers}</Link>
//               <Link href="/contact" className="hover:text-textAccent transition">{t.contact}</Link>
//               <Link
//                 href="/quotation"
//                 className="bg-packaging-accent text-white font-semibold rounded px-3 py-1 shadow hover:bg-packaging-accentDark transition"
//               >
//                 {t.quotation}
//               </Link>
//               <LanguageSelector />
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/translations'
import LanguageSelector from '@/components/LanguageSelector'

export default function Navbar() {
  const { language } = useLanguage()
  const t = translations[language]
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-packaging-light text-textPrimary shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo ONLY – no text */}
        <Link href="/" className="flex items-center min-w-[48px]">
          <Image
            src="/cajasalologo.png"
            alt="Caja y Empaques ALO logo"
            width={48}
            height={48}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-textAccent transition">{t.home}</Link>
          <Link href="/about" className="hover:text-textAccent transition">{t.about}</Link>
          <Link href="/products" className="hover:text-textAccent transition">{t.products}</Link>
          <Link href="/sustainability" className="hover:text-textAccent transition">{t.sustainability}</Link>
          <Link href="/careers" className="hover:text-textAccent transition">{t.careers}</Link>
          <Link href="/contact" className="hover:text-textAccent transition">{t.contact}</Link>
          <Link
            href="/quotation"
            className="bg-packaging-accent text-white font-semibold rounded px-3 py-1 shadow hover:bg-packaging-accentDark transition"
          >
            {t.quotation}
          </Link>
          <LanguageSelector />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="inline-flex items-center justify-center p-2 rounded md:hidden hover:bg-packaging-accent transition"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-packaging-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-packaging-light shadow-md md:hidden">
            <div className="flex flex-col items-center gap-6 py-3">
              <Link href="/" className="hover:text-textAccent transition" onClick={() => setIsOpen(false)}>{t.home}</Link>
              <Link href="/about" className="hover:text-textAccent transition" onClick={() => setIsOpen(false)}>{t.about}</Link>
              <Link href="/products" className="hover:text-textAccent transition" onClick={() => setIsOpen(false)}>{t.products}</Link>
              <Link href="/sustainability" className="hover:text-textAccent transition" onClick={() => setIsOpen(false)}>{t.sustainability}</Link>
              <Link href="/careers" className="hover:text-textAccent transition" onClick={() => setIsOpen(false)}>{t.careers}</Link>
              <Link href="/contact" className="hover:text-textAccent transition" onClick={() => setIsOpen(false)}>{t.contact}</Link>
              <Link
                href="/quotation"
                className="bg-packaging-accent text-white font-semibold rounded px-3 py-1 shadow hover:bg-packaging-accentDark transition"
                onClick={() => setIsOpen(false)}
              >
                {t.quotation}
              </Link>
              <LanguageSelector />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
