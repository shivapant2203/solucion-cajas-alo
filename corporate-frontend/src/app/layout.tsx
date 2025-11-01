// import './globals.css'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import WhatsAppButton from '@/components/WhatsappButton'
// import ContactButton from '@/components/ContactButton'
// import { LanguageProvider } from '@/context/LanguageContext'

// export const metadata = {
//   title: 'Solucion en Cajas ALO',
//   description: 'Premium packaging and branding specialist in Mexico.',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className="flex flex-col min-h-screen bg-packaging-light text-textPrimary">
//         <LanguageProvider>
//           <Navbar />
//           <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
//             {children}
//           </main>
//           <ContactButton />
//           <WhatsAppButton />
//           <Footer />
//         </LanguageProvider>
//       </body>
//     </html>
//   )
// }

// import './globals.css'
// import { Metadata } from 'next'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import WhatsAppButton from '@/components/WhatsappButton'
// import ContactButton from '@/components/ContactButton'
// import { LanguageProvider } from '@/context/LanguageContext'

// export const metadata: Metadata = {
//   title: 'Solucion en Cajas ALO',
//   description: 'Premium packaging and branding specialist in Mexico.',
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://rsms.me/" />
//         <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
//       </head>
//       <body className="font-sans flex flex-col min-h-screen bg-packaging-light text-textPrimary">
//         <LanguageProvider>
//           <Navbar />
//           <main className="flex-grow max-w-7xl mx-auto px-4 py-8">{children}</main>
//           <ContactButton />
//           <WhatsAppButton />
//           <Footer />
//         </LanguageProvider>
//       </body>
//     </html>
//   )
// }


import './globals.css'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsappButton'
import ContactButton from '@/components/ContactButton'
import { LanguageProvider } from '@/context/LanguageContext'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Solucion en Cajas ALO',
  description: 'Premium packaging and branding specialist in Mexico.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="font-sans flex flex-col min-h-screen bg-packaging-light text-textPrimary">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow max-w-7xl mx-auto px-4 py-8">{children}</main>
          <ContactButton />
          <WhatsAppButton />
          <Footer />
        </LanguageProvider>
        <Script id="chatbase-widget" strategy="afterInteractive">
          {`
            (function(){
              if(!window.chatbase||window.chatbase("getState")!=="initialized"){
                window.chatbase=(...arguments)=>{
                  if(!window.chatbase.q){window.chatbase.q=[]}
                  window.chatbase.q.push(arguments)
                };
                window.chatbase=new Proxy(window.chatbase,{
                  get(target,prop){
                    if(prop==="q"){return target.q}
                    return(...args)=>target(prop,...args)
                  }
                })
              }
              const onLoad=function(){
                const script=document.createElement("script");
                script.src="https://www.chatbase.co/embed.min.js";
                script.id="xXwBUB4q6TRGrAeFgJjYM"; // <-- your actual Chatbase bot ID, change if needed
                script.domain="www.chatbase.co";
                document.body.appendChild(script)
              };
              if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
