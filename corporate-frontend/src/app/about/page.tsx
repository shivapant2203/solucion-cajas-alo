
'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaBoxOpen, FaHandsHelping, FaRecycle, FaStar } from 'react-icons/fa'

interface AboutData {
  title: string;
  description: string;
}


export default function AboutPage() {
  // const [about, setAbout] = useState<any>(null)
  const [about, setAbout] = useState<AboutData | null>(null);

  useEffect(() => {
    fetch('/api/about')
      .then(res => res.json())
      .then(data => setAbout(data))
      .catch(err => console.error(err))
  }, [])

  if (!about) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <span className="text-packaging-dark font-semibold text-lg">Loading…</span>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen w-full font-sans"
      style={{
        background:
          "linear-gradient(135deg, #f5eedc 65%, #f8f6f0 100%) fixed url('https://www.transparenttextures.com/patterns/pw-maze-white.png') repeat"
      }}
    >

      {/* HERO */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto pt-24 pb-12 text-center relative"
      >
        {/* LOGO/Brand Motif */}
        <div className="mx-auto mb-7 flex justify-center">
          <img src="/logo.png" alt="Logo" className="h-14 mb-2" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-packaging-dark tracking-tight mb-4 leading-tight">
          {about.title}
        </h1>
        <span className="uppercase text-base tracking-widest font-bold text-packaging-accent mb-4 block letter-spacing-wider">
          Empaques Premium · Soluciones a Medida
        </span>
        <div className="mb-4">
          <hr className="mx-auto w-28 border-2 border-packaging-accent rounded-full" />
        </div>
        <p className="text-2xl text-packaging-dark font-light mx-auto leading-snug max-w-xl">
          Empaques inteligentes, sustentables y a la medida para tu negocio en México.
        </p>
      </motion.header>

      {/* WHAT WE DO (STATEMENTS) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="max-w-4xl mx-auto my-10 sm:my-16 grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {[
          { icon: FaBoxOpen, label: "Fabricamos cajas únicas", desc: "Personalizadas para tu producto y marca." },
          { icon: FaRecycle, label: "Pensamos en el planeta", desc: "Soluciones sustentables y reciclables." },
          { icon: FaHandsHelping, label: "Te acompañamos siempre", desc: "Asesoría y servicio desde el diseño hasta la entrega." },
        ].map(({ icon: Icon, label, desc }) => (
          <div
            key={label}
            className="bg-packaging-light/80 p-6 rounded-xl shadow border border-packaging-DEFAULT flex flex-col items-center text-center"
          >
            <Icon className="text-packaging-accent w-10 h-10 mb-3" />
            <div className="font-bold text-lg text-packaging-dark mb-1">{label}</div>
            <div className="text-textPrimary text-base">{desc}</div>
          </div>
        ))}
      </motion.section>

      {/* Brand Mission QUOTE */}
      <motion.section
        initial={{opacity: 0, y: 18}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.6, delay: 0.22}}
        className="max-w-3xl mx-auto my-12"
      >
        <blockquote className="italic font-semibold text-xl text-packaging-accent text-center">
          “Transformamos tus ideas en soluciones de empaque que destacan y protegen.”
        </blockquote>
      </motion.section>

      {/* Story Section */}
      <motion.section
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.16 }}
        className="max-w-2xl mx-auto mb-14 bg-packaging-light/95 rounded-2xl shadow border border-packaging-DEFAULT p-9"
      >
        <h2 className="text-2xl font-bold text-packaging-dark mb-5">Nuestra historia</h2>
        <div className="text-base text-packaging-dark leading-relaxed">
          {about.description.split('\n').map((para: string, idx: number) => (
            <p className="mb-5" key={idx}>{para}</p>
          ))}
        </div>
      </motion.section>

      {/* Core Values (as Icon Cards) */}
      <motion.section
        initial={{ opacity: 0, y: 23 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-14 grid grid-cols-1 sm:grid-cols-3 gap-9"
      >
        {[
          { icon: FaRecycle, label: "Sostenibilidad" },
          { icon: FaHandsHelping, label: "Confianza" },
          { icon: FaStar, label: "Calidad" },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className=" bg-white/70 p-8 rounded-xl flex flex-col items-center text-center shadow-sm border border-packaging-DEFAULT"
          >
            <Icon className="text-packaging-accent w-9 h-9 mb-3" />
            <div className="text-lg font-bold text-packaging-dark tracking-wide">{label}</div>
          </div>
        ))}
      </motion.section>

      {/* Vision - in a highlight band */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="w-full py-12"
      >
        <div className="max-w-3xl mx-auto rounded-xl px-7 py-8 text-center bg-packaging-dark/95">
          <h2 className="text-white text-2xl font-semibold mb-3">Nuestra visión</h2>
          <p className="text-white text-lg opacity-95 leading-relaxed">
            Ser el referente nacional en soluciones de empaque sustentable, elegida por empresas que buscan excelencia, rapidez y cuidado por el planeta.
          </p>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-center mb-20 mt-4"
      >
        <a
          href="/contact"
          className="bg-packaging-accent hover:bg-packaging-accentDark transition text-white font-extrabold py-4 px-12 rounded-full shadow-xl text-xl tracking-wide border border-packaging-accent"
        >
          Contáctanos hoy
        </a>
      </motion.div>
    </div>
  )
}

