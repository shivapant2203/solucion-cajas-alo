// 'use client'
// import { useLanguage } from '@/context/LanguageContext'
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

// const pageTranslations = {
//   en: {
//     heading: "Contact Caja y Empaques Arely",
//     subheading: "We serve clients all across Mexico from our two manufacturing factories in San Jose El Jaral.",
//     addressLabel: "Address",
//     address: "San Jose El Jaral, Atizapan De Zaragoza, 52924, Mexico",
//     phoneLabel: "Phone",
//     phone: "+52-55-1234-5678",
//     emailLabel: "Email",
//     email: "contacto@cajaempaquesarely.com",
//     cta: "Contact us",
//     form_name: "Name",
//     form_email: "Email",
//     form_message: "Message",
//     form_send: "Send",
//     whatsapp: "WhatsApp",
//     whatsapp_phone: "5215512345678"
//   },
//   es: {
//     heading: "Contacto Caja y Empaques Arely",
//     subheading: "Atendemos clientes en todo México desde nuestras dos fábricas en San José El Jaral.",
//     addressLabel: "Dirección",
//     address: "San José El Jaral, Atizapán de Zaragoza, 52924, México",
//     phoneLabel: "Teléfono",
//     phone: "+52-55-1234-5678",
//     emailLabel: "Correo",
//     email: "contacto@cajaempaquesarely.com",
//     cta: "Contáctanos",
//     form_name: "Nombre",
//     form_email: "Correo electrónico",
//     form_message: "Mensaje",
//     form_send: "Enviar",
//     whatsapp: "WhatsApp",
//     whatsapp_phone: "5215512345678"
//   }
// }

// export default function ContactPage() {
//   const { language } = useLanguage()
//   const t = pageTranslations[language]

//   return (
//     <div className="bg-packaging-light min-h-screen w-full font-sans px-6 py-14">
//       {/* Header */}
//       <section className="max-w-3xl mx-auto mb-12 text-center">
//         <h1 className="text-4xl sm:text-5xl font-extrabold text-packaging-dark tracking-tight mb-2">
//           {t.heading}
//         </h1>
//         <div className="mx-auto w-16 h-1 rounded bg-packaging-accent mb-6"></div>
//         <p className="text-lg sm:text-xl text-packaging-dark max-w-2xl mx-auto font-medium mb-8">
//           {t.subheading}
//         </p>
//       </section>

//       {/* Contact Details */}
//       <section className="max-w-xl mx-auto flex flex-col gap-7 text-left mb-8">
//         <div className="flex items-start gap-5">
//           <div className="mt-2 text-packaging-accent">
//             <FaMapMarkerAlt className="w-6 h-6" />
//           </div>
//           <div>
//             <span className="font-bold text-packaging-dark">{t.addressLabel}: </span>
//             <span className="text-packaging-dark">{t.address}</span>
//           </div>
//         </div>
//         <div className="flex items-start gap-5">
//           <div className="mt-2 text-packaging-accent">
//             <FaPhoneAlt className="w-6 h-6" />
//           </div>
//           <div>
//             <span className="font-bold text-packaging-dark">{t.phoneLabel}: </span>
//             <span className="text-packaging-dark">{t.phone}</span>
//           </div>
//         </div>
//         <div className="flex items-start gap-5">
//           <div className="mt-2 text-packaging-accent">
//             <FaEnvelope className="w-6 h-6" />
//           </div>
//           <div>
//             <span className="font-bold text-packaging-dark">{t.emailLabel}: </span>
//             <a
//               href={`mailto:${t.email}`}
//               className="text-packaging-accent underline break-all"
//             >
//               {t.email}
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* WhatsApp Button */}
//       <div className="flex justify-center my-8">
//         <a
//           href={`https://wa.me/${t.whatsapp_phone}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full font-bold text-lg shadow transition"
//         >
//           <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor">
//             <path d="M16.05 3A13 13 0 003 16.155a12.92 12.92 0 001.764 6.493L3 29l6.522-1.716A13 13 0 1016.05 3zm6.514 18.326c-.27.76-1.562 1.498-2.143 1.58-.579.08-1.29.115-2.078-.132-.482-.152-1.105-.36-1.908-.704-3.367-1.455-5.572-5.02-5.736-5.264-.163-.242-1.373-1.788-1.373-3.413s.87-2.428 1.18-2.762c.308-.333.67-.416.892-.416.222 0 .445.002.641.012.206.01.483-.077.757.576.255.622.86 2.07.936 2.221.077.151.127.335.025.558-.102.224-.153.362-.308.557-.154.195-.324.43-.461.578-.153.166-.311.347-.134.688.177.342.785 1.293 1.684 2.184 1.145 1.122 2.107 1.48 2.448 1.645.341.166.538.137.73-.082.191-.217.873-1.037 1.106-1.39.236-.354.495-.292.832-.175.338.12 2.14 1.009 2.506 1.194.367.186.612.276.693.432.079.154.079.89-.192 1.65z" />
//           </svg>
//           {t.whatsapp}
//         </a>
//       </div>

//       {/* Google Map */}
//       <section className="max-w-2xl mx-auto mb-10 rounded-2xl overflow-hidden border border-packaging-DEFAULT shadow bg-packaging-light">
//         <iframe
//           title="Google Maps Location"
//           src="https://www.google.com/maps?q=San+Jose+El+Jaral,+Atizapan+De+Zaragoza,+52924,+Mexico&output=embed"
//           width="100%"
//           height="250"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           className="w-full h-[250px]"
//         ></iframe>
//       </section>

//       {/* Embedded Contact Form */}
//       <section className="max-w-xl mx-auto bg-packaging-light rounded-2xl shadow border border-packaging-DEFAULT px-8 py-8 mt-8">
//         <form
//           action={`mailto:${t.email}`}
//           method="POST"
//           encType="text/plain"
//           className="flex flex-col gap-5"
//         >
//           <div>
//             <label className="font-bold text-packaging-dark block mb-1" htmlFor="name">{t.form_name}</label>
//             <input name="name" id="name" className="w-full border border-packaging-DEFAULT rounded px-3 py-2 outline-none" required />
//           </div>
//           <div>
//             <label className="font-bold text-packaging-dark block mb-1" htmlFor="email">{t.form_email}</label>
//             <input name="email" id="email" type="email" className="w-full border border-packaging-DEFAULT rounded px-3 py-2 outline-none" required />
//           </div>
//           <div>
//             <label className="font-bold text-packaging-dark block mb-1" htmlFor="message">{t.form_message}</label>
//             <textarea name="message" id="message" rows={4} className="w-full border border-packaging-DEFAULT rounded px-3 py-2 outline-none" required />
//           </div>
//           <button
//             type="submit"
//             className="bg-packaging-accent hover:bg-packaging-accentDark transition text-white font-bold px-6 py-3 rounded-full shadow mt-4"
//           >
//             {t.form_send}
//           </button>
//         </form>
//       </section>
//     </div>
//   )
// }

'use client'
import { useLanguage } from '@/context/LanguageContext'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const pageTranslations = {
  en: {
    heading: "Contact Caja y Empaques Arely",
    subheading: "We serve clients all across Mexico from our two manufacturing factories in San Jose El Jaral.",
    addressLabel: "Address",
    address: "San Jose El Jaral, Atizapan De Zaragoza, 52924, Mexico",
    phoneLabel: "Phone",
    phone: "+52-55-1234-5678",
    emailLabel: "Email",
    email: "contacto@cajaempaquesarely.com",
    cta: "Contact us",
    form_name: "Name",
    form_email: "Email",
    form_message: "Message",
    form_send: "Send",
    whatsapp: "WhatsApp",
    whatsapp_phone: "5215512345678"
  },
  es: {
    heading: "Contacto Caja y Empaques Arely",
    subheading: "Atendemos clientes en todo México desde nuestras dos fábricas en San José El Jaral.",
    addressLabel: "Dirección",
    address: "San José El Jaral, Atizapán de Zaragoza, 52924, México",
    phoneLabel: "Teléfono",
    phone: "+52-55-1234-5678",
    emailLabel: "Correo",
    email: "contacto@cajaempaquesarely.com",
    cta: "Contáctanos",
    form_name: "Nombre",
    form_email: "Correo electrónico",
    form_message: "Mensaje",
    form_send: "Enviar",
    whatsapp: "WhatsApp",
    whatsapp_phone: "5215512345678"
  }
}

export default function ContactPage() {
  const { language } = useLanguage()
  const t = pageTranslations[language]

  return (
    <div className="bg-packaging-light min-h-screen w-full font-sans px-6 py-14">
      {/* Header */}
      <section className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-packaging-dark tracking-tight mb-2">
          {t.heading}
        </h1>
        <div className="mx-auto w-16 h-1 rounded bg-packaging-accent mb-6"></div>
        <p className="text-lg sm:text-xl text-packaging-dark max-w-2xl mx-auto font-medium mb-8">
          {t.subheading}
        </p>
      </section>

      {/* Contact Details */}
      <section className="max-w-xl mx-auto flex flex-col gap-7 text-left mb-8">
        <div className="flex items-start gap-5">
          <div className="mt-2 text-packaging-accent">
            <FaMapMarkerAlt className="w-6 h-6" />
          </div>
          <div>
            <span className="font-bold text-packaging-dark">{t.addressLabel}: </span>
            <span className="text-packaging-dark">{t.address}</span>
          </div>
        </div>
        <div className="flex items-start gap-5">
          <div className="mt-2 text-packaging-accent">
            <FaPhoneAlt className="w-6 h-6" />
          </div>
          <div>
            <span className="font-bold text-packaging-dark">{t.phoneLabel}: </span>
            <span className="text-packaging-dark">{t.phone}</span>
          </div>
        </div>
        <div className="flex items-start gap-5">
          <div className="mt-2 text-packaging-accent">
            <FaEnvelope className="w-6 h-6" />
          </div>
          <div>
            <span className="font-bold text-packaging-dark">{t.emailLabel}: </span>
            <a
              href={`mailto:${t.email}`}
              className="text-packaging-accent underline break-all"
            >
              {t.email}
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <div className="flex justify-center my-8">
        <a
          href={`https://wa.me/${t.whatsapp_phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full font-bold text-lg shadow transition"
        >
          <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor">
            <path d="M16.05 3A13 13 0 003 16.155a12.92 12.92 0 001.764 6.493L3 29l6.522-1.716A13 13 0 1016.05 3zm6.514 18.326c-.27.76-1.562 1.498-2.143 1.58-.579.08-1.29.115-2.078-.132-.482-.152-1.105-.36-1.908-.704-3.367-1.455-5.572-5.02-5.736-5.264-.163-.242-1.373-1.788-1.373-3.413s.87-2.428 1.18-2.762c.308-.333.67-.416.892-.416.222 0 .445.002.641.012.206.01.483-.077.757.576.255.622.86 2.07.936 2.221.077.151.127.335.025.558-.102.224-.153.362-.308.557-.154.195-.324.43-.461.578-.153.166-.311.347-.134.688.177.342.785 1.293 1.684 2.184 1.145 1.122 2.107 1.48 2.448 1.645.341.166.538.137.73-.082.191-.217.873-1.037 1.106-1.39.236-.354.495-.292.832-.175.338.12 2.14 1.009 2.506 1.194.367.186.612.276.693.432.079.154.079.89-.192 1.65z" />
          </svg>
          {t.whatsapp}
        </a>
      </div>

      {/* Google Map */}
      <section className="max-w-2xl mx-auto mb-10 rounded-2xl overflow-hidden border border-packaging-DEFAULT shadow bg-packaging-light">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps?q=San+Jose+El+Jaral,+Atizapan+De+Zaragoza,+52924,+Mexico&output=embed"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[250px]"
        ></iframe>
      </section>

      {/* Embedded Contact Form */}
      <section className="max-w-xl mx-auto bg-packaging-light rounded-2xl shadow border border-packaging-DEFAULT px-8 py-8 mt-8">
        <form
          action={`mailto:${t.email}`}
          method="POST"
          encType="text/plain"
          className="flex flex-col gap-5"
        >
          <div>
            <label className="font-bold text-packaging-dark block mb-1" htmlFor="name">{t.form_name}</label>
            <input name="name" id="name" className="w-full border border-packaging-DEFAULT rounded px-3 py-2 outline-none" required />
          </div>
          <div>
            <label className="font-bold text-packaging-dark block mb-1" htmlFor="email">{t.form_email}</label>
            <input name="email" id="email" type="email" className="w-full border border-packaging-DEFAULT rounded px-3 py-2 outline-none" required />
          </div>
          <div>
            <label className="font-bold text-packaging-dark block mb-1" htmlFor="message">{t.form_message}</label>
            <textarea name="message" id="message" rows={4} className="w-full border border-packaging-DEFAULT rounded px-3 py-2 outline-none" required />
          </div>
          <button
            type="submit"
            className="bg-packaging-accent hover:bg-packaging-accentDark transition text-white font-bold px-6 py-3 rounded-full shadow mt-4"
          >
            {t.form_send}
          </button>
        </form>
      </section>
    </div>
  )
}
