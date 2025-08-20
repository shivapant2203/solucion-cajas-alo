'use client'
import { useLanguage } from '@/context/LanguageContext'

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <select
      value={language}
      onChange={e => setLanguage(e.target.value as 'en' | 'es')}
      className="ml-2 p-1 rounded border border-gray-300 focus:outline-none"
      aria-label="Select Language"
    >
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>
  )
}
