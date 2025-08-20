
// 'use client'
// import { useLanguage } from '@/context/LanguageContext'
// import { FaUserTie, FaIndustry } from 'react-icons/fa'

// const pageTranslations = {
//   en: {
//     heading: "Careers at Caja y Empaques Arely",
//     subheading: "Grow your future with Mexico’s leader in sustainable packaging.",
//     intro: `Join our diverse team and help us create packaging solutions with purpose. We offer careers in production, quality control, sales, logistics and more, with professional growth and a commitment to values like teamwork, innovation, and sustainability.`,
//     positions: [
//       {
//         title: "Production Line Operator",
//         location: "San Jose El Jaral, Atizapan De Zaragoza",
//         type: "Full-time",
//         icon: FaIndustry
//       },
//       {
//         title: "Sales Executive",
//         location: "Remote / Mexico",
//         type: "Full-time",
//         icon: FaUserTie
//       }
//     ],
//     cta: "Apply now"
//   },
//   es: {
//     heading: "Empleos en Caja y Empaques Arely",
//     subheading: "Impulsa tu futuro en el líder mexicano de empaques sustentables.",
//     intro: `Únete a nuestro equipo y ayuda a crear soluciones de empaque con propósito. Ofrecemos carreras en producción, control de calidad, ventas, logística y más, con crecimiento profesional y compromiso con valores como trabajo en equipo, innovación y sostenibilidad.`,
//     positions: [
//       {
//         title: "Operador(a) de Línea de Producción",
//         location: "San José El Jaral, Atizapán de Zaragoza",
//         type: "Tiempo completo",
//         icon: FaIndustry
//       },
//       {
//         title: "Ejecutivo(a) de Ventas",
//         location: "Remoto / México",
//         type: "Tiempo completo",
//         icon: FaUserTie
//       }
//     ],
//     cta: "Enviar solicitud"
//   }
// }

// export default function CareersPage() {
//   const { language } = useLanguage()
//   const t = pageTranslations[language]

//   return (
//     <div
//       className="min-h-screen w-full font-sans px-6 pb-10 relative overflow-hidden"
//       style={{
//         background: 'linear-gradient(120deg,#f9f5ea 80%,#fff8ef 100%)',
//       }}
//     >
//       {/* Decorative pattern or image in background */}
//       <img
//         src="/team-illustration.svg"
//         alt="Team Illustration"
//         className="absolute right-0 top-20 opacity-20 w-96 hidden md:block pointer-events-none select-none"
//       />

//       {/* Page header */}
//       <section className="max-w-4xl mx-auto pt-16 pb-10 text-center relative z-10">
//         <h1 className="text-4xl sm:text-5xl font-extrabold text-packaging-dark tracking-tight mb-2 leading-tight">
//           {t.heading}
//         </h1>
//         <div className="text-lg sm:text-xl text-packaging-accent mb-3 font-semibold tracking-wide">
//           {t.subheading}
//         </div>
//         <div className="mx-auto w-20 h-1 rounded bg-packaging-accent mb-5"></div>
//         <p className="text-packaging-dark font-medium text-base sm:text-lg max-w-2xl mx-auto relative z-10">
//           {t.intro}
//         </p>
//       </section>

//       {/* Job openings */}
//       <section className="max-w-3xl mx-auto flex flex-col gap-8 mt-12 relative z-10">
//         {t.positions.map((job, idx) => {
//           const Icon = job.icon
//           return (
//             <div
//               key={job.title}
//               className="border border-packaging-DEFAULT bg-packaging-light rounded-2xl shadow-sm px-7 py-6 flex items-center gap-6 hover:shadow-md group transition"
//             >
//               <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-xl bg-packaging-accent/10 group-hover:bg-packaging-accent/20 transition">
//                 <Icon className="w-8 h-8 text-packaging-accent" />
//               </div>
//               <div className="flex-1">
//                 <div className="text-xl font-bold text-packaging-dark mb-1">{job.title}</div>
//                 <div className="text-packaging-dark text-sm mb-1">{job.location}</div>
//                 <div className="text-packaging-accent font-semibold text-xs">{job.type}</div>
//               </div>
//               <a
//                 href="/contact"
//                 className="hidden sm:inline bg-packaging-accent hover:bg-packaging-accentDark text-white font-bold py-2 px-5 rounded-full shadow text-sm ml-6 transition"
//               >
//                 {t.cta}
//               </a>
//             </div>
//           )
//         })}
//       </section>

//       {/* CTA band for mobile */}
//       <div className="flex sm:hidden justify-center mt-10 relative z-10">
//         <a
//           href="/contact"
//           className="bg-packaging-accent hover:bg-packaging-accentDark transition text-white font-bold py-4 px-10 rounded-full shadow-lg text-xl"
//         >
//           {t.cta}
//         </a>
//       </div>
//     </div>
//   )
// }

'use client'
import { useLanguage } from '@/context/LanguageContext'
import { FaUserTie, FaIndustry } from 'react-icons/fa'

const pageTranslations = {
  en: {
    heading: "Careers at Caja y Empaques Arely",
    subheading: "Grow your future with Mexico’s leader in sustainable packaging.",
    intro: `Join our diverse team and help us create packaging solutions with purpose. We offer careers in production, quality control, sales, logistics and more, with professional growth and a commitment to values like teamwork, innovation, and sustainability.`,
    positions: [
      {
        title: "Production Line Operator",
        location: "San Jose El Jaral, Atizapan De Zaragoza",
        type: "Full-time",
        icon: FaIndustry
      },
      {
        title: "Sales Executive",
        location: "Remote / Mexico",
        type: "Full-time",
        icon: FaUserTie
      }
    ],
    cta: "Apply now"
  },
  es: {
    heading: "Empleos en Caja y Empaques Arely",
    subheading: "Impulsa tu futuro en el líder mexicano de empaques sustentables.",
    intro: `Únete a nuestro equipo y ayuda a crear soluciones de empaque con propósito. Ofrecemos carreras en producción, control de calidad, ventas, logística y más, con crecimiento profesional y compromiso con valores como trabajo en equipo, innovación y sostenibilidad.`,
    positions: [
      {
        title: "Operador(a) de Línea de Producción",
        location: "San José El Jaral, Atizapán de Zaragoza",
        type: "Tiempo completo",
        icon: FaIndustry
      },
      {
        title: "Ejecutivo(a) de Ventas",
        location: "Remoto / México",
        type: "Tiempo completo",
        icon: FaUserTie
      }
    ],
    cta: "Enviar solicitud"
  }
}

export default function CareersPage() {
  const { language } = useLanguage()
  const t = pageTranslations[language]

  return (
    <div
      className="min-h-screen w-full font-sans px-4 pb-10 relative overflow-hidden"
      style={{
        background: 'linear-gradient(120deg,#f9f5ea 80%,#fff8ef 100%)',
      }}
    >
      {/* Decorative illustration (optional) */}
      <img
        src="/team-illustration.svg"
        alt="Team Illustration"
        className="absolute right-0 top-20 opacity-20 w-96 hidden md:block pointer-events-none select-none"
      />

      {/* Page header */}
      <section className="max-w-4xl mx-auto pt-16 pb-10 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-packaging-dark tracking-tight mb-2 leading-tight">
          {t.heading}
        </h1>
        <div className="text-lg sm:text-xl text-packaging-accent mb-3 font-semibold tracking-wide">
          {t.subheading}
        </div>
        <div className="mx-auto w-20 h-1 rounded bg-packaging-accent mb-5"></div>
        <p className="text-packaging-dark font-medium text-base sm:text-lg max-w-2xl mx-auto">
          {t.intro}
        </p>
      </section>

      {/* Job openings */}
      <section className="max-w-3xl mx-auto flex flex-col gap-8 mt-12 relative z-10">
        {t.positions.map((job, idx) => {
          const Icon = job.icon
          return (
            <div
              key={job.title}
              className="border border-packaging-DEFAULT bg-packaging-light rounded-2xl shadow-sm px-7 py-6 flex items-center gap-6 hover:shadow-md group transition"
            >
              <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-xl bg-packaging-accent/10 group-hover:bg-packaging-accent/20 transition">
                <Icon className="w-8 h-8 text-packaging-accent" />
              </div>
              <div className="flex-1">
                <div className="text-xl font-bold text-packaging-dark mb-1">{job.title}</div>
                <div className="text-packaging-dark text-sm mb-1">{job.location}</div>
                <div className="text-packaging-accent font-semibold text-xs">{job.type}</div>
              </div>
              <a
                href="/contact"
                className="hidden sm:inline bg-packaging-accent hover:bg-packaging-accentDark text-white font-bold py-2 px-5 rounded-full shadow text-sm ml-6 transition"
              >
                {t.cta}
              </a>
            </div>
          )
        })}
      </section>

      {/* CTA band for mobile */}
      <div className="flex sm:hidden justify-center mt-10 relative z-10">
        <a
          href="/contact"
          className="bg-packaging-accent hover:bg-packaging-accentDark transition text-white font-bold py-4 px-10 rounded-full shadow-lg text-xl"
        >
          {t.cta}
        </a>
      </div>
    </div>
  )
}
