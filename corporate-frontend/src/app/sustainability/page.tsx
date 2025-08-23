'use client'
import { FaLeaf } from 'react-icons/fa'

export default function SustainabilityPage() {
  return (
    <div className="bg-packaging-light min-h-screen w-full font-sans px-6 py-12">
      {/* Header */}
      <section className="max-w-3xl mx-auto text-center mb-14">
        <div className="flex justify-center mb-5">
          <FaLeaf className="w-12 h-12 text-packaging-accent" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-packaging-dark tracking-tight mb-3">
          Compromiso con la Sostenibilidad
        </h1>
        <div className="mx-auto w-20 h-1 rounded bg-packaging-accent mb-5"></div>
        <p className="text-lg sm:text-xl text-packaging-dark max-w-2xl mx-auto font-medium">
          Llevamos la responsabilidad ambiental al centro de nuestro proceso productivo.
        </p>
      </section>

      {/* Highlight/Quick Facts */}
      <section className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-8 mb-14">
        <div className="rounded-2xl border border-packaging-DEFAULT p-7 flex-1 bg-packaging-light shadow-sm text-center">
          <strong className="block text-3xl text-packaging-accent font-black mb-1">80%+</strong>
          <span className="block text-packaging-dark font-semibold mb-2">de residuos reciclados en planta</span>
          <p className="text-packaging-dark text-base">Procesos eficientes y separación en origen.</p>
        </div>
        <div className="rounded-2xl border border-packaging-DEFAULT p-7 flex-1 bg-packaging-light shadow-sm text-center">
          <strong className="block text-3xl text-packaging-accent font-black mb-1">100%</strong>
          <span className="block text-packaging-dark font-semibold mb-2">materiales ecoamigables</span>
          <p className="text-packaging-dark text-base">Cajas y empaques reciclables y biodegradables.</p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-packaging-dark mb-4 text-left">
          Fabricación responsable, futuro verde.
        </h2>
        <p className="text-lg text-packaging-dark leading-relaxed mb-5">
          En Solucion en Cajas ALO, diseñamos soluciones de empaque pensando en el planeta y en las generaciones futuras. Nuestras fábricas utilizan energía eficiente, materiales renovables y una política activa de reducción y reciclaje de residuos.
        </p>
        <p className="text-lg text-packaging-dark leading-relaxed">
          Al colaborar con proveedores certificados y aplicar procesos sustentables en cada paso, minimizamos nuestro impacto ambiental y ayudamos a otros negocios a alcanzar sus objetivos de sostenibilidad.
        </p>
      </section>

      {/* CTA */}
      <div className="flex justify-center mt-10">
        <a
          href="/contact"
          className="bg-packaging-accent hover:bg-packaging-accentDark transition text-white font-bold py-4 px-10 rounded-full shadow-lg text-xl"
        >
          Descubre nuestras soluciones ecológicas
        </a>
      </div>
    </div>
  )
}
