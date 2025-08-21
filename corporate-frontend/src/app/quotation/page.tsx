// // 'use client'
// // import { useState } from 'react'

// // export default function Quotation() {
// //   const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

// //   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
// //     e.preventDefault()
// //     setStatus('sending')

// //     // Save form reference before any async operations to avoid React event pooling issues
// //     const formElement = e.currentTarget
// //     const formData = new FormData(formElement)

// //     // Basic client-side validation for mobile (optional)
// //     const mobile = formData.get('mobile') as string
// //     if (!mobile || mobile.length < 7) {
// //       setStatus('error')
// //       alert('Please enter a valid mobile number.')
// //       return
// //     }

// //     const res = await fetch('/api/send-quotation', {
// //       method: 'POST',
// //       body: JSON.stringify({
// //         name: formData.get('name'),
// //         email: formData.get('email'),
// //         company: formData.get('company'),
// //         mobile: formData.get('mobile'),
// //         details: formData.get('details'),
// //       }),
// //       headers: { 'Content-Type': 'application/json' },
// //     })

// //     setStatus(res.ok ? 'sent' : 'error')

// //     if (res.ok) formElement.reset() // Use saved reference here to reset the form safely
// //   }

// //   return (
// //     <main className="flex flex-col items-center py-12 min-h-screen bg-packaging-light">
// //       <h1 className="text-3xl font-bold mb-8 text-[#795548]">Get a Quotation</h1>
// //       <form
// //         className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg border border-[#d2b48c] flex flex-col gap-4"
// //         onSubmit={handleSubmit}
// //         autoComplete="off"
// //       >
// //         <input name="name" type="text" required placeholder="Your Name" className="p-2 border rounded" />
// //         <input name="email" type="email" required placeholder="Your Email" className="p-2 border rounded" />
// //         <input name="company" type="text" placeholder="Company (optional)" className="p-2 border rounded" />
// //         <input name="mobile" type="tel" required placeholder="Your Mobile Number" className="p-2 border rounded" minLength={7} />
// //         <textarea
// //           name="details"
// //           required
// //           placeholder="Describe your needs (dimensions, quantity, etc.)"
// //           className="p-2 border rounded"
// //           rows={5}
// //         />
// //         <button
// //           type="submit"
// //           disabled={status === 'sending'}
// //           className="bg-[#FF813F] hover:bg-[#e25f0b] text-white font-semibold py-2 px-6 rounded transition"
// //         >
// //           {status === 'sending' ? 'Sending...' : 'Send Quotation Request'}
// //         </button>
// //         {status === 'sent' && <div className="text-green-600">Request sent! We’ll get back to you soon.</div>}
// //         {status === 'error' && <div className="text-red-500">There was an error or invalid mobile. Please try again or contact us directly.</div>}
// //       </form>
// //     </main>
// //   )
// // }

// 'use client'
// import { useLanguage } from '@/context/LanguageContext'
// import { FaUser, FaEnvelope, FaBuilding, FaPhoneAlt, FaRegListAlt } from 'react-icons/fa'

// const pageTranslations = {
//   en: {
//     heading: 'Get a Quotation',
//     note: 'Fill out the form and our team will reply within one business day.',
//     name: 'Your Name',
//     email: 'Your Email',
//     company: 'Company (optional)',
//     mobile: 'Your Mobile Number',
//     details: 'Describe your needs (dimensions, quantity, etc.)',
//     button: 'Send Quotation Request'
//   },
//   es: {
//     heading: 'Solicitar Cotización',
//     note: 'Completa el formulario y nuestro equipo responderá en menos de un día hábil.',
//     name: 'Tu Nombre',
//     email: 'Tu Correo',
//     company: 'Compañía (opcional)',
//     mobile: 'Tu Teléfono',
//     details: 'Describe tus necesidades (dimensiones, cantidad, etc.)',
//     button: 'Enviar Solicitud de Cotización'
//   }
// }

// export default function QuotationPage() {
//   const { language } = useLanguage()
//   const t = pageTranslations[language]

//   return (
//     <div className="bg-packaging-light min-h-screen w-full font-sans px-6 py-16 flex flex-col items-center">
//       <div className="max-w-5xl w-full flex flex-col md:flex-row gap-12 items-stretch justify-center">
//         {/* Left-aligned illustration/visual */}
//         <div className="hidden md:flex md:w-2/5 items-center justify-center">
//           <img
//             src="/brand-quote.svg"
//             alt="Brand Illustration"
//             className="w-full max-w-xs"
//           />
//         </div>
//         {/* Form column */}
//         <div className="w-full md:w-3/5 flex flex-col items-center">
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-packaging-dark tracking-tight mb-2 text-center md:text-left w-full">
//             {t.heading}
//           </h1>
//           <p className="mb-8 text-packaging-accent text-lg font-medium w-full text-center md:text-left">
//             {t.note}
//           </p>
//           <form
//             action="mailto:contacto@cajaempaquesarely.com"
//             method="POST"
//             encType="text/plain"
//             className="
//               w-full max-w-xl
//               bg-packaging-light rounded-2xl border border-packaging-DEFAULT shadow
//               px-8 py-10
//               flex flex-col gap-6
//               items-stretch
//             "
//             style={{ minWidth: '320px' }}
//           >
//             <div className="relative flex items-center">
//               <FaUser className="absolute left-4 text-packaging-accent w-5 h-5" />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder={t.name}
//                 required
//                 className="pl-12 border border-packaging-DEFAULT rounded px-4 py-3 text-lg outline-none bg-white/80 focus:ring-2 focus:ring-packaging-accent transition w-full"
//               />
//             </div>
//             <div className="relative flex items-center">
//               <FaEnvelope className="absolute left-4 text-packaging-accent w-5 h-5" />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder={t.email}
//                 required
//                 className="pl-12 border border-packaging-DEFAULT rounded px-4 py-3 text-lg outline-none bg-white/80 focus:ring-2 focus:ring-packaging-accent transition w-full"
//               />
//             </div>
//             <div className="relative flex items-center">
//               <FaBuilding className="absolute left-4 text-packaging-accent w-5 h-5" />
//               <input
//                 type="text"
//                 name="company"
//                 placeholder={t.company}
//                 className="pl-12 border border-packaging-DEFAULT rounded px-4 py-3 text-lg outline-none bg-white/80 focus:ring-2 focus:ring-packaging-accent transition w-full"
//               />
//             </div>
//             <div className="relative flex items-center">
//               <FaPhoneAlt className="absolute left-4 text-packaging-accent w-5 h-5" />
//               <input
//                 type="text"
//                 name="mobile"
//                 placeholder={t.mobile}
//                 required
//                 className="pl-12 border border-packaging-DEFAULT rounded px-4 py-3 text-lg outline-none bg-white/80 focus:ring-2 focus:ring-packaging-accent transition w-full"
//               />
//             </div>
//             <div className="relative flex items-center">
//               <FaRegListAlt className="absolute left-4 top-4 text-packaging-accent w-5 h-5" />
//               <textarea
//                 name="details"
//                 placeholder={t.details}
//                 rows={5}
//                 required
//                 className="pl-12 border border-packaging-DEFAULT rounded px-4 py-3 text-lg outline-none bg-white/80 focus:ring-2 focus:ring-packaging-accent transition w-full resize-none"
//               />
//             </div>
//             <button
//               type="submit"
//               className="mt-2 bg-packaging-accent hover:bg-packaging-accentDark transition text-white font-bold text-lg py-4 px-6 rounded-full shadow"
//             >
//               {t.button}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// 'use client'
// import { useState } from 'react'
// import { useLanguage } from '@/context/LanguageContext'
// import { FaUser, FaEnvelope, FaBuilding, FaPhoneAlt, FaRegListAlt } from 'react-icons/fa'

// const pageTranslations = {
//   en: {
//     heading: 'Get a Quotation',
//     note: 'Fill out the form and our team will reply within one business day.',
//     name: 'Your Name',
//     email: 'Your Email',
//     company: 'Company (optional)',
//     mobile: 'Your Mobile Number',
//     details: 'Describe your needs (dimensions, quantity, etc.)',
//     button: 'Send Quotation Request',
//     success: 'Quotation request sent successfully!',
//     failure: 'Failed to send quotation request. Please try again.'
//   },
//   es: {
//     heading: 'Solicitar Cotización',
//     note: 'Completa el formulario y nuestro equipo responderá en menos de un día hábil.',
//     name: 'Tu Nombre',
//     email: 'Tu Correo',
//     company: 'Compañía (opcional)',
//     mobile: 'Tu Teléfono',
//     details: 'Describe tus necesidades (dimensiones, cantidad, etc.)',
//     button: 'Enviar Solicitud de Cotización',
//     success: '¡Solicitud enviada con éxito!',
//     failure: 'Error al enviar la solicitud. Por favor intenta de nuevo.'
//   }
// }

// export default function QuotationPage() {
//   const { language } = useLanguage()
//   const t = pageTranslations[language]

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     mobile: '',
//     details: ''
//   })
//   const [loading, setLoading] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setLoading(true)
//     try {
//       const res = await fetch('/api/send-quotation', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       })

//       if (res.ok) {
//         alert(t.success)
//         setFormData({ name: '', email: '', company: '', mobile: '', details: '' })
//       } else {
//         alert(t.failure)
//       }
//     } catch (error) {
//       alert(t.failure)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="bg-packaging-light min-h-screen w-full font-sans px-6 py-16 flex flex-col items-center">
//       <div className="max-w-5xl w-full flex flex-col md:flex-row gap-12 items-stretch justify-center">
//         {/* Left-aligned illustration/visual */}
//         <div className="hidden md:flex md:w-2/5 items-center justify-center">
//           <img
//             src="/brand-quote.svg"
//             alt="Brand Illustration"
//             className="w-full max-w-xs"
//           />
//         </div>
//         {/* Form column */}
//         <div className="w-full md:w-3/5 flex flex-col items-center">
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-packaging-dark tracking-tight mb-2 text-center md:text-left w-full">
//             {t.heading}
//           </h1>
//           <p className="mb-8 text-packaging-accent text-lg font-medium w-full text-center md:text-left">
//             {t.note}
//           </p>
//           <form
//             onSubmit={handleSubmit}
//             className="
//               w-full max-w-xl
//               bg-packaging-light rounded-2xl border border-packaging-DEFAULT shadow
//               px-8 py-10
//               flex flex-col gap-6
//               items-stretch
//             "
//             style={{ minWidth: '320px' }}
//           >
//             <div className="relative flex items-center">
//               <FaUser className="absolute left-4 text-packaging-accent w-5 h-5" />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder={t.name}
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="pl-12 border border-packaging-DEFAULT rounded px-4 py-3 text-lg outline-none bg-white/80 focus:ring-2 focus:ring-packaging-accent transition w-full"
//               />
//             </div>
//             <div className="relative flex items-center">
//               <FaEnvelope className="absolute left-4 text-packaging-accent w-5 h-5" />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder={t.email}
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="pl-12 border border-packaging-DEFAULT rounded px-4 py-3 text-lg outline-none bg-white/80 focus:ring-2 focus:ring-packaging-accent transition w-full"
//               />
//             </div>
//             <div className="relative flex items-center">
//               <FaBuilding className="absolute left-4 text-packaging-accent w-5 h-5" />
//               <input
//                 type="text"
//                 name="company"
//                 placeholder={t.company}
//                 value={formData.company}
//                 onChange={handleChange}
//                 className="pl-12 border border-packaging-DEFAULT rounded px-4 py-3 text-lg outline-none bg-white/80 focus:ring-2 focus:ring-packaging-accent transition w-full"
//               />
//             </div>
//             <div className="relative flex items-center">
//               <FaPhoneAlt className="absolute left-4 text-packaging-accent w-5 h-5" />
//               <input
//                 type="text"
//                 name="mobile"
//                 placeholder={t.mobile}
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 required
//                 className="pl-12 border border-packaging-DEFAULT rounded px-4 py-3 text-lg outline-none bg-white/80 focus:ring-2 focus:ring-packaging-accent transition w-full"
//               />
//             </div>
//             <div className="relative flex items-center">
//               <FaRegListAlt className="absolute left-4 top-4 text-packaging-accent w-5 h-5" />
//               <textarea
//                 name="details"
//                 placeholder={t.details}
//                 value={formData.details}
//                 onChange={handleChange}
//                 rows={5}
//                 required
//                 className="pl-12 border border-packaging-DEFAULT rounded px-4 py-3 text-lg outline-none bg-white/80 focus:ring-2 focus:ring-packaging-accent transition w-full resize-none"
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="mt-2 bg-packaging-accent hover:bg-packaging-accentDark transition text-white font-bold text-lg py-4 px-6 rounded-full shadow disabled:opacity-50"
//             >
//               {loading ? t.button + '...' : t.button}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'
import React, { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { FaUser, FaEnvelope, FaBuilding, FaPhoneAlt, FaRegListAlt } from 'react-icons/fa'

const pageTranslations = {
  en: {
    heading: 'Get a Quotation',
    note: 'Fill out the form and our team will reply within one business day.',
    name: 'Your Name',
    email: 'Your Email',
    company: 'Company (optional)',
    mobile: 'Your Mobile Number',
    details: 'Describe your needs (dimensions, quantity, etc.)',
    button: 'Send Quotation Request',
    success: 'Quotation request sent successfully!',
    failure: 'Failed to send quotation request. Please try again.'
  },
  es: {
    heading: 'Solicitar Cotización',
    note: 'Completa el formulario y nuestro equipo responderá en menos de un día hábil.',
    name: 'Tu Nombre',
    email: 'Tu Correo',
    company: 'Compañía (opcional)',
    mobile: 'Tu Teléfono',
    details: 'Describe tus necesidades (dimensiones, cantidad, etc.)',
    button: 'Enviar Solicitud de Cotización',
    success: '¡Solicitud enviada con éxito!',
    failure: 'Error al enviar la solicitud. Por favor intenta de nuevo.'
  }
}

export default function QuotationPage() {
  const { language } = useLanguage()
  const t = pageTranslations[language]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    mobile: '',
    details: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/send-quotation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        alert(t.success)
        setFormData({ name: '', email: '', company: '', mobile: '', details: '' })
      } else {
        alert(t.failure)
      }
    } catch (error) {
      console.error('Quotation submission error:', error)
      alert(t.failure)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-packaging-light min-h-screen w-full font-sans px-6 py-16 flex flex-col items-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-12 items-stretch justify-center">
        {/* Left-aligned illustration/visual */}
        <div className="hidden md:flex md:w-2/5 items-center justify-center">
          <img
            src="/brand-quote.svg"
            alt="Brand Illustration"
            className="w-full max-w-xs"
          />
        </div>
        {/* Form column */}
        <div className="w-full md:w-3/5 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-packaging-dark tracking-tight mb-2 text-center md:text-left w-full">
            {t.heading}
          </h1>
          <p className="mb-8 text-packaging-accent text-lg font-medium w-full text-center md:text-left">
            {t.note}
          </p>
          <form
            onSubmit={handleSubmit}
            className="
              w-full max-w-xl
              bg-packaging-light rounded-2xl border border-packaging-DEFAULT shadow
              px-8 py-10
              flex flex-col gap-6
              items-stretch
            "
            style={{ minWidth: '320px' }}
          >
            <div className="relative flex items-center">
              <FaUser className="absolute left-4 text-packaging-accent w-5 h-5" aria-hidden="true" />
              <input
                type="text"
                name="name"
                placeholder={t.name}
                value={formData.name}
                onChange={handleChange}
                required
                className="pl-12 border border-packaging-DEFAULT rounded px-4 py-3 text-lg outline-none bg-white/80 focus:ring-2 focus:ring-packaging-accent transition w-full"
              />
            </div>
            <div className="relative flex items-center">
              <FaEnvelope className="absolute left-4 text-packaging-accent w-5 h-5" aria-hidden="true" />
              <input
                type="email"
                name="email"
                placeholder={t.email}
                value={formData.email}
                onChange={handleChange}
                required
                className="pl-12 border border-packaging-DEFAULT rounded px-4 py-3 text-lg outline-none bg-white/80 focus:ring-2 focus:ring-packaging-accent transition w-full"
              />
            </div>
            <div className="relative flex items-center">
              <FaBuilding className="absolute left-4 text-packaging-accent w-5 h-5" aria-hidden="true" />
              <input
                type="text"
                name="company"
                placeholder={t.company}
                value={formData.company}
                onChange={handleChange}
                className="pl-12 border border-packaging-DEFAULT rounded px-4 py-3 text-lg outline-none bg-white/80 focus:ring-2 focus:ring-packaging-accent transition w-full"
              />
            </div>
            <div className="relative flex items-center">
              <FaPhoneAlt className="absolute left-4 text-packaging-accent w-5 h-5" aria-hidden="true" />
              <input
                type="text"
                name="mobile"
                placeholder={t.mobile}
                value={formData.mobile}
                onChange={handleChange}
                required
                className="pl-12 border border-packaging-DEFAULT rounded px-4 py-3 text-lg outline-none bg-white/80 focus:ring-2 focus:ring-packaging-accent transition w-full"
              />
            </div>
            <div className="relative flex items-center">
              <FaRegListAlt className="absolute left-4 top-4 text-packaging-accent w-5 h-5" aria-hidden="true" />
              <textarea
                name="details"
                placeholder={t.details}
                value={formData.details}
                onChange={handleChange}
                rows={5}
                required
                className="pl-12 border border-packaging-DEFAULT rounded px-4 py-3 text-lg outline-none bg-white/80 focus:ring-2 focus:ring-packaging-accent transition w-full resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              aria-busy={loading}
              className="mt-2 bg-packaging-accent hover:bg-packaging-accentDark transition text-white font-bold text-lg py-4 px-6 rounded-full shadow disabled:opacity-50"
            >
              {loading ? t.button + '...' : t.button}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
