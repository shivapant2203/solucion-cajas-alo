// // 'use client'
// // import { useEffect, useState } from 'react'

// // export default function ProductsPage() {
// //   const [products, setProducts] = useState<any[]>([])
// //   const [loading, setLoading] = useState(true)

// //   useEffect(() => {
// //     fetch('/api/products')
// //       .then(res => res.json())
// //       .then(data => {
// //         setProducts(data)
// //         setLoading(false)
// //       })
// //       .catch(console.error)
// //   }, [])

// //   if (loading) return <p className="p-8 text-center">Loading products...</p>;

// //   return (
// //     <main className="max-w-6xl mx-auto py-10 px-4">
// //       <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Our Products</h1>
// //       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
// //         {products.map(product => (
// //           <div key={product.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-1 transition">
// //             <h2 className="text-xl font-semibold mb-2 text-blue-700">{product.name}</h2>
// //             <p className="text-gray-700">{product.description}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </main>
// //   )
// // }

// 'use client';

// import Link from 'next/link';
// import { 
//   FaBoxOpen, 
//   FaRecycle, 
//   FaLayerGroup, 
//   FaCogs, 
//   FaRegNewspaper 
// } from 'react-icons/fa';

// const productMenu = [
//   {
//     category: 'Packaging',
//     icon: <FaBoxOpen className="text-blue-700" />,
//     items: [
//       'Corrugated Packaging',
//       'Bulk Packaging',
//       'Solid Fiber',
//       'Retail Packaging & Display',
//       'Paper Bags',
//     ],
//   },
//   {
//     category: 'Paper',
//     icon: <FaRegNewspaper className="text-blue-700" />,
//     items: ['Containerboard', 'Saturating Kraft', 'Gypsum Board Paper'],
//   },
//   {
//     category: 'Recycling',
//     icon: <FaRecycle className="text-green-700" />,
//     items: ['Recycling Solutions', 'Recyclable Materials', 'Recycling Facilities'],
//   },
//   {
//     category: 'Packaging Services',
//     icon: <FaCogs className="text-blue-500" />,
//     items: [
//       'Structural Design',
//       'Graphic Design',
//       'Printing',
//       'Testing',
//       'Fulfillment & Assembly',
//       'Mechanical Packaging',
//     ],
//   },
//   {
//     category: 'Pulp',
//     icon: <FaLayerGroup className="text-yellow-700" />,
//     items: [
//       'Fluff Pulp',
//       'Papergrade Pulp',
//       'Specialty Pulp',
//       'Modified Fiber',
//     ],
//   },
// ];

// export default function ProductsPage() {
//   return (
//     <main className="max-w-7xl mx-auto py-10 px-4">
//       {/* Page heading */}
//       <h1 className="text-4xl font-bold text-blue-800 mb-10 text-center">
//         Products & Services
//       </h1>

//       {/* Menu grid inside the page */}
//       <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
//         {productMenu.map((section) => (
//           <div key={section.category} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
//             <div className="flex items-center gap-2 mb-3">
//               {section.icon}
//               <span className="font-semibold text-blue-700">{section.category}</span>
//             </div>
//             <ul className="space-y-2 text-sm">
//               {section.items.map((item) => (
//                 <li key={item}>
//                   <Link href="#" className="hover:text-blue-700 transition">
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

'use client'
import { FaBoxOpen, FaRecycle, FaShippingFast, FaClipboardList, FaLayerGroup } from 'react-icons/fa'

export default function ProductsPage() {
  return (
    <div className="bg-packaging-light min-h-screen w-full font-sans px-6 py-12">
      {/* Hero/Heading */}
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-packaging-dark tracking-tight mb-2">
          Productos & Servicios
        </h1>
        <div className="mx-auto w-16 h-1 rounded bg-packaging-accent mb-5"></div>
        <p className="text-lg sm:text-xl text-packaging-dark font-medium max-w-2xl mx-auto">
          Soluciones integrales que se adaptan a tus necesidades – sustentabilidad, innovación y calidad en cada producto.
        </p>
      </section>

      {/* Products Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
        {[
          {
            icon: FaBoxOpen,
            title: "Packaging",
            color: "text-packaging-accent",
            items: [
              "Cajas corrugadas",
              "Empaque a granel",
              "Cajas sólidos",
              "Exhibidores y vitrinas",
              "Bolsas de papel"
            ]
          },
          {
            icon: FaLayerGroup,
            title: "Papel",
            color: "text-packaging-accent", // now using brand orange, not blue
            items: [
              "Cartón para cajas",
              "Kraft saturado",
              "Papel para tablaroca"
            ]
          },
          {
            icon: FaRecycle,
            title: "Reciclaje",
            color: "text-packaging-accent",
            items: [
              "Soluciones de reciclaje",
              "Materiales reciclables",
              "Instalaciones de reciclaje"
            ]
          },
          {
            icon: FaShippingFast,
            title: "Servicios de Empaque",
            color: "text-packaging-accent",
            items: [
              "Diseño estructural",
              "Diseño gráfico",
              "Impresión",
              "Pruebas",
              "Ensamble y cumplimiento",
              "Empaque mecánico"
            ]
          },
          {
            icon: FaClipboardList,
            title: "Pulpa",
            color: "text-packaging-accent",
            items: [
              "Pulpa fluff",
              "Pulpa grado papel",
              "Pulpa especialidad",
              "Fibra modificada"
            ]
          }
        ].map(({ icon: Icon, title, color, items }) => (
          <div
            key={title}
            className="
              border border-packaging-DEFAULT
              bg-packaging-light
              rounded-2xl
              shadow-sm
              p-7
              flex flex-col items-start gap-2
              hover:shadow-md
              transition
              min-h-[250px]
            "
          >
            <div className={`mb-2 ${color}`}>
              <Icon className="w-8 h-8" />
            </div>
            <h2 className={`text-xl font-bold mb-3 ${color}`}>{title}</h2>
            <ul className="ml-1 text-packaging-dark text-base space-y-1 font-medium">
              {items.map(it => (
                <li key={it}>• {it}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  )
}

