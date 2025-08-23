// 'use client'
// import { useLanguage } from '@/context/LanguageContext'
// import Link from 'next/link'

// export default function Home() {
//   const { lang } = useLanguage()

//   const headline =
//     lang === 'es'
//       ? 'Soluciones de embalaje inteligentes'
//       : 'Smart Packaging Solutions'
//   const subtitle =
//     lang === 'es'
//       ? 'Con nuestros clientes, damos forma a un mundo más seguro, inteligente y productivo — una solución de empaque innovadora a la vez.'
//       : 'With our customers, we shape a safer, smarter, and more productive world — one innovative packaging solution at a time.'
//   const ctaText =
//     lang === 'es'
//       ? 'VER CÓMO SE FABRICAN LAS CAJAS'
//       : 'SEE HOW BOXES ARE MADE'

//   return (
//     <main className="bg-packaging-light min-h-screen flex flex-col">
//       {/* Hero Section */}
//       <section
//         className="relative flex items-center min-h-[520px] md:min-h-[650px] overflow-hidden"
//         style={{
//           backgroundImage: "url('/hero-bg.jpg')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-packaging-light via-packaging-light/90 to-transparent" />

//         <div className="relative z-10 pl-8 pr-4 py-12 max-w-2xl">
//           <h1 className="text-[2.5rem] md:text-[3.2rem] font-extrabold leading-tight text-textPrimary mb-6">
//             {headline}
//           </h1>
//           <p className="text-lg text-packaging-dark mb-8 max-w-lg">
//             {subtitle}
//           </p>
//           <Link
//             href="/about"
//             className="inline-block font-extrabold tracking-wide text-packaging-accent border-b-2 border-packaging-accent hover:text-white hover:bg-packaging-accentDark hover:border-white rounded transition px-2 py-1 text-lg bg-packaging-light"
//           >
//             {ctaText} <span aria-hidden>→</span>
//           </Link>
//         </div>

//         <div
//           className="pointer-events-none absolute right-0 bottom-0"
//           style={{
//             width: '36vw',
//             minWidth: 200,
//             maxWidth: 450,
//             height: 130,
//             backgroundColor: '#D2B48C',
//             clipPath: 'polygon(0 60%,100% 0,100% 100%,0 100%)'
//           }}
//         />
//       </section>

//       {/* Feature Cards Section */}
//       <section className="bg-[#f0ead9] py-12">
//         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-6 justify-center items-stretch">
//           <div className="flex-1 bg-white rounded-2xl shadow-xl px-8 py-7 flex flex-col items-center text-center border border-[#d2b48c]">
//             <h2 className="text-xl md:text-2xl font-bold text-packaging-dark mb-2">
//               {lang === 'en' ? '2 Manufacturing Factories' : '2 Fábricas de Manufactura'}
//             </h2>
//             <p className="text-packaging-dark text-lg">
//               {lang === 'en'
//                 ? 'Located in San Jose El Jaral — premium production & logistics.'
//                 : 'Ubicadas en San José El Jaral — producción y logística premium.'}
//             </p>
//           </div>
//           <div className="flex-1 bg-white rounded-2xl shadow-xl px-8 py-7 flex flex-col items-center text-center border border-[#d2b48c]">
//             <h2 className="text-xl md:text-2xl font-bold text-packaging-dark mb-2">
//               {lang === 'en' ? '1000 Boxes / 30 Minutes' : '1000 Cajas / 30 Minutos'}
//             </h2>
//             <p className="text-packaging-dark text-lg">
//               {lang === 'en'
//                 ? 'Fast output meets big client demand with ease.'
//                 : 'Producción rápida que satisface grandes demandas con facilidad.'}
//             </p>
//           </div>
//           <div className="flex-1 bg-white rounded-2xl shadow-xl px-8 py-7 flex flex-col items-center text-center border border-[#d2b48c]">
//             <h2 className="text-xl md:text-2xl font-bold text-packaging-dark mb-2">
//               {lang === 'en' ? 'Custom Branding' : 'Branding Personalizado'}
//             </h2>
//             <p className="text-packaging-dark text-lg">
//               {lang === 'en'
//                 ? 'On-site printing for perfect branded boxes.'
//                 : 'Impresión en sitio para cajas perfectamente marcadas.'}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Product Gallery Call-to-Action Section */}
//       <section className="bg-[#f0ead9] py-14 mt-8 flex flex-col items-center">
//         <h2 className="text-2xl md:text-3xl font-bold text-[#795548] mb-5 text-center">
//           {lang === 'es' ? '¿Quieres ver ejemplos de nuestros productos?' : 'Want to see our work?'}
//         </h2>
//         <Link
//           href="/gallery"
//           className="inline-block font-bold text-white bg-[#FF813F] hover:bg-[#e25f0b] px-7 py-3 text-lg rounded-lg shadow transition"
//         >
//           {lang === 'es' ? 'Ver Galería de Productos' : 'View Product Gallery'} <span aria-hidden>→</span>
//         </Link>
//       </section>
//     </main>
//   )
// }

// 'use client'
// import { useLanguage } from '@/context/LanguageContext'
// import Link from 'next/link'

// export default function Home() {
//   const { language: lang } = useLanguage()

//   const headline =
//     lang === 'es'
//       ? 'Soluciones de embalaje inteligentes'
//       : 'Smart Packaging Solutions'
//   const subtitle =
//     lang === 'es'
//       ? 'Con nuestros clientes, damos forma a un mundo más seguro, inteligente y productivo — una solución de empaque innovadora a la vez.'
//       : 'With our customers, we shape a safer, smarter, and more productive world — one innovative packaging solution at a time.'
//   const ctaText =
//     lang === 'es'
//       ? 'VER CÓMO SE FABRICAN LAS CAJAS'
//       : 'SEE HOW BOXES ARE MADE'

//   return (
//     <main className="bg-packaging-light min-h-screen flex flex-col">
//       {/* Hero Section */}
//       <section
//         className="relative flex items-center min-h-[520px] md:min-h-[650px] overflow-hidden"
//         style={{
//           backgroundImage: "url('/hero-bg.jpg')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-packaging-light via-packaging-light/90 to-transparent" />

//         <div className="relative z-10 pl-8 pr-4 py-12 max-w-2xl">
//           <h1 className="text-[2.5rem] md:text-[3.2rem] font-extrabold leading-tight text-textPrimary mb-6">
//             {headline}
//           </h1>
//           <p className="text-lg text-packaging-dark mb-8 max-w-lg">
//             {subtitle}
//           </p>
//           <Link
//             href="/about"
//             className="inline-block font-extrabold tracking-wide text-packaging-accent border-b-2 border-packaging-accent hover:text-white hover:bg-packaging-accentDark hover:border-white rounded transition px-2 py-1 text-lg bg-packaging-light"
//           >
//             {ctaText} <span aria-hidden>→</span>
//           </Link>
//         </div>

//         <div
//           className="pointer-events-none absolute right-0 bottom-0"
//           style={{
//             width: '36vw',
//             minWidth: 200,
//             maxWidth: 450,
//             height: 130,
//             backgroundColor: '#D2B48C',
//             clipPath: 'polygon(0 60%,100% 0,100% 100%,0 100%)'
//           }}
//         />
//       </section>

//       {/* Feature Cards Section */}
//       <section className="bg-[#f0ead9] py-12">
//         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-6 justify-center items-stretch">
//           <div className="flex-1 bg-white rounded-2xl shadow-xl px-8 py-7 flex flex-col items-center text-center border border-[#d2b48c]">
//             <h2 className="text-xl md:text-2xl font-bold text-packaging-dark mb-2">
//               {lang === 'en' ? '2 Manufacturing Factories' : '2 Fábricas de Manufactura'}
//             </h2>
//             <p className="text-packaging-dark text-lg">
//               {lang === 'en'
//                 ? 'Located in San Jose El Jaral — premium production & logistics.'
//                 : 'Ubicadas en San José El Jaral — producción y logística premium.'}
//             </p>
//           </div>
//           <div className="flex-1 bg-white rounded-2xl shadow-xl px-8 py-7 flex flex-col items-center text-center border border-[#d2b48c]">
//             <h2 className="text-xl md:text-2xl font-bold text-packaging-dark mb-2">
//               {lang === 'en' ? '1000 Boxes / 30 Minutes' : '1000 Cajas / 30 Minutos'}
//             </h2>
//             <p className="text-packaging-dark text-lg">
//               {lang === 'en'
//                 ? 'Fast output meets big client demand with ease.'
//                 : 'Producción rápida que satisface grandes demandas con facilidad.'}
//             </p>
//           </div>
//           <div className="flex-1 bg-white rounded-2xl shadow-xl px-8 py-7 flex flex-col items-center text-center border border-[#d2b48c]">
//             <h2 className="text-xl md:text-2xl font-bold text-packaging-dark mb-2">
//               {lang === 'en' ? 'Custom Branding' : 'Branding Personalizado'}
//             </h2>
//             <p className="text-packaging-dark text-lg">
//               {lang === 'en'
//                 ? 'On-site printing for perfect branded boxes.'
//                 : 'Impresión en sitio para cajas perfectamente marcadas.'}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Product Gallery Call-to-Action Section */}
//       <section className="bg-[#f0ead9] py-14 mt-8 flex flex-col items-center">
//         <h2 className="text-2xl md:text-3xl font-bold text-[#795548] mb-5 text-center">
//           {lang === 'es' ? '¿Quieres ver ejemplos de nuestros productos?' : 'Want to see our work?'}
//         </h2>
//         <Link
//           href="/gallery"
//           className="inline-block font-bold text-white bg-[#FF813F] hover:bg-[#e25f0b] px-7 py-3 text-lg rounded-lg shadow transition"
//         >
//           {lang === 'es' ? 'Ver Galería de Productos' : 'View Product Gallery'} <span aria-hidden>→</span>
//         </Link>
//       </section>
//     </main>
//   )
// }

// 'use client'
// import { useLanguage } from '@/context/LanguageContext'
// import Link from 'next/link'

// export default function HomePage() {
//   const { language: lang } = useLanguage()

//   const headline =
//     lang === 'es'
//       ? 'Soluciones de embalaje inteligentes'
//       : 'Smart Packaging Solutions'
//   const subtitle =
//     lang === 'es'
//       ? 'Con nuestros clientes, damos forma a un mundo más seguro, inteligente y productivo — una solución de empaque innovadora a la vez.'
//       : 'With our customers, we shape a safer, smarter, and more productive world — one innovative packaging solution at a time.'
//   const ctaText =
//     lang === 'es'
//       ? 'VER CÓMO SE FABRICAN LAS CAJAS'
//       : 'SEE HOW BOXES ARE MADE'

//   return (
//     <main className="bg-packaging-light min-h-screen flex flex-col p-8 max-w-7xl mx-auto w-full">
//       {/* Hero Section */}
//       <section
//         className="relative flex items-center min-h-[520px] md:min-h-[650px] mb-12 overflow-hidden w-full"
//         style={{
//           backgroundImage: "url('/hero-bg.jpg')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-packaging-light via-packaging-light/90 to-transparent" />

//         <div className="relative z-10 pl-8 pr-4 py-12 max-w-2xl">
//           <h1 className="text-[2.5rem] md:text-[3.2rem] font-extrabold leading-tight text-textPrimary mb-6">
//             {headline}
//           </h1>
//           <p className="text-lg text-packaging-dark mb-8 max-w-lg">{subtitle}</p>
//           <Link
//             href="/about"
//             className="inline-block font-extrabold tracking-wide text-packaging-accent border-b-2 border-packaging-accent hover:text-white hover:bg-packaging-accentDark hover:border-white rounded transition px-2 py-1 text-lg bg-packaging-light"
//           >
//             {ctaText} <span aria-hidden>→</span>
//           </Link>
//         </div>

//         <div
//           className="pointer-events-none absolute right-0 bottom-0"
//           style={{
//             width: '36vw',
//             minWidth: 200,
//             maxWidth: 450,
//             height: 130,
//             backgroundColor: '#D2B48C',
//             clipPath: 'polygon(0 60%,100% 0,100% 100%,0 100%)',
//           }}
//         />
//       </section>

//       {/* Feature Cards Section */}
//       <section className="bg-[#f0ead9] py-12 mt-12 rounded-lg shadow-inner w-full">
//         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-6 justify-center items-stretch">
//           <div className="flex-1 bg-white rounded-2xl shadow-xl px-8 py-7 flex flex-col items-center text-center border border-[#d2b48c]">
//             <h2 className="text-xl md:text-2xl font-bold text-packaging-dark mb-2">
//               {lang === 'en' ? '2 Manufacturing Factories' : '2 Fábricas de Manufactura'}
//             </h2>
//             <p className="text-packaging-dark text-lg">
//               {lang === 'en'
//                 ? 'Located in San Jose El Jaral — premium production & logistics.'
//                 : 'Ubicadas en San José El Jaral — producción y logística premium.'}
//             </p>
//           </div>
//           <div className="flex-1 bg-white rounded-2xl shadow-xl px-8 py-7 flex flex-col items-center text-center border border-[#d2b48c]">
//             <h2 className="text-xl md:text-2xl font-bold text-packaging-dark mb-2">
//               {lang === 'en' ? '1000 Boxes / 30 Minutes' : '1000 Cajas / 30 Minutos'}
//             </h2>
//             <p className="text-packaging-dark text-lg">
//               {lang === 'en'
//                 ? 'Fast output meets big client demand with ease.'
//                 : 'Producción rápida que satisface grandes demandas con facilidad.'}
//             </p>
//           </div>
//           <div className="flex-1 bg-white rounded-2xl shadow-xl px-8 py-7 flex flex-col items-center text-center border border-[#d2b48c]">
//             <h2 className="text-xl md:text-2xl font-bold text-packaging-dark mb-2">
//               {lang === 'en' ? 'Custom Branding' : 'Branding Personalizado'}
//             </h2>
//             <p className="text-packaging-dark text-lg">
//               {lang === 'en'
//                 ? 'On-site printing for perfect branded boxes.'
//                 : 'Impresión en sitio para cajas perfectamente marcadas.'}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Product Gallery Call-to-Action Section */}
//       <section className="bg-[#f0ead9] py-14 mt-8 flex flex-col items-center w-full">
//         <h2 className="text-2xl md:text-3xl font-bold text-[#795548] mb-5 text-center">
//           {lang === 'es' ? '¿Quieres ver ejemplos de nuestros productos?' : 'Want to see our work?'}
//         </h2>
//         <Link
//           href="/gallery"
//           className="inline-block font-bold text-white bg-[#FF813F] hover:bg-[#e25f0b] px-7 py-3 text-lg rounded-lg shadow transition"
//         >
//           {lang === 'es' ? 'Ver Galería de Productos' : 'View Product Gallery'} <span aria-hidden>→</span>
//         </Link>
//       </section>
//     </main>
//   )
// }

'use client'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'

export default function HomePage() {
  const { language: lang } = useLanguage()

  const headline =
    lang === 'es'
      ? (
          <>
            Innovación y Stock Permanente<br />
            Especialistas en Cajas de Cartón Personalizadas
          </>
        )
      : (
          <>
            Innovation and Permanent Stock<br />
            Specialists in Custom Cardboard Boxes
          </>
        )

  const subtitle =
    lang === 'es'
      ? 'Ofrecemos soluciones en cajas de cartón, impresas o sencillas, para todo tipo de necesidades. Nuestra empresa destaca en México por su experiencia, compromiso y productos de alta calidad a precios accesibles.'
      : 'We offer cardboard box solutions, printed or plain, for all kinds of needs. Our company stands out in Mexico for its expertise, commitment, and high-quality products at affordable prices.'

  const ctaText =
    lang === 'es'
      ? 'VER CÓMO SE FABRICAN LAS CAJAS'
      : 'SEE HOW BOXES ARE MADE'

  return (
    <main className="bg-packaging-light min-h-screen flex flex-col p-8 max-w-7xl mx-auto w-full">
      {/* Hero Section */}
      <section
        className="relative flex items-center min-h-[520px] md:min-h-[650px] mb-12 overflow-hidden w-full"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-packaging-light via-packaging-light/90 to-transparent" />

        <div className="relative z-10 pl-8 pr-4 py-12 max-w-2xl">
          <h1 className="text-[2.5rem] md:text-[3.2rem] font-extrabold leading-tight text-textPrimary mb-6">
            {headline}
          </h1>
          <p className="text-lg text-packaging-dark mb-8 max-w-lg">{subtitle}</p>
          <Link
            href="/about"
            className="inline-block font-extrabold tracking-wide text-packaging-accent border-b-2 border-packaging-accent hover:text-white hover:bg-packaging-accentDark hover:border-white rounded transition px-2 py-1 text-lg bg-packaging-light"
          >
            {ctaText} <span aria-hidden>→</span>
          </Link>
        </div>

        <div
          className="pointer-events-none absolute right-0 bottom-0"
          style={{
            width: '36vw',
            minWidth: 200,
            maxWidth: 450,
            height: 130,
            backgroundColor: '#D2B48C',
            clipPath: 'polygon(0 60%,100% 0,100% 100%,0 100%)',
          }}
        />
      </section>

      {/* Feature Cards Section */}
      <section className="bg-[#f0ead9] py-12 mt-12 rounded-lg shadow-inner w-full">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-6 justify-center items-stretch">
          <div className="flex-1 bg-white rounded-2xl shadow-xl px-8 py-7 flex flex-col items-center text-center border border-[#d2b48c]">
            <h2 className="text-xl md:text-2xl font-bold text-packaging-dark mb-2">
              {lang === 'en' ? 'New and Recycled Boxes' : 'Caja Nueva y Reciclada'}
            </h2>
            <p className="text-packaging-dark text-lg">
              {lang === 'en'
                ? 'Eco-friendly and standard options to suit your needs.'
                : 'Opciones ecológicas y tradicionales adaptadas a tu necesidad.'}
            </p>
          </div>
          <div className="flex-1 bg-white rounded-2xl shadow-xl px-8 py-7 flex flex-col items-center text-center border border-[#d2b48c]">
            <h2 className="text-xl md:text-2xl font-bold text-packaging-dark mb-2">
              {lang === 'en' ? '1000 Boxes / 20 Minutes' : '1000 Cajas / 20 Minutos'}
            </h2>
            <p className="text-packaging-dark text-lg">
              {lang === 'en'
                ? 'Efficient production tailored to meet your business needs.'
                : 'Producción eficiente adaptada para cubrir las necesidades de tu negocio.'}
            </p>
          </div>
          <div className="flex-1 bg-white rounded-2xl shadow-xl px-8 py-7 flex flex-col items-center text-center border border-[#d2b48c]">
            <h2 className="text-xl md:text-2xl font-bold text-packaging-dark mb-2">
              {lang === 'en' ? 'Custom Printing' : 'Impresión Personalizado'}
            </h2>
            <p className="text-packaging-dark text-lg">
              {lang === 'en'
                ? 'Custom printing crafted with attention to detail.'
                : 'Impresión personalizada con atención al detalle.'}
            </p>
          </div>
        </div>
      </section>

      {/* Product Gallery Call-to-Action Section */}
      <section className="bg-[#f0ead9] py-14 mt-8 flex flex-col items-center w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-[#795548] mb-5 text-center">
          {lang === 'es' ? '¿Quieres ver ejemplos de nuestros productos?' : 'Want to see our work?'}
        </h2>
        <Link
          href="/gallery"
          className="inline-block font-bold text-white bg-[#FF813F] hover:bg-[#e25f0b] px-7 py-3 text-lg rounded-lg shadow transition"
        >
          {lang === 'es' ? 'Ver Galería de Productos' : 'View Product Gallery'} <span aria-hidden>→</span>
        </Link>
      </section>
    </main>
  )
}
