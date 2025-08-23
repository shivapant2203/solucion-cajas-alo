import type { NextApiRequest, NextApiResponse } from 'next'

const aboutData = {
  title: 'About Solucion en Cajas ALO',
  description:
    'En Solucion en Cajas ALO nos especializamos en la fabricación de cajas de cartón a la medida exacta que tu negocio necesita. Creamos soluciones personalizadas, con o sin impresión, en cartón sencillo o doble corrugado, adaptándonos por completo a tus requerimientos. Nuestro lema lo dice todo: Tus ideas, nuestras cajas.Contamos con una infraestructura moderna y maquinaria de alto rendimiento, como flexo, pegadora y suajadora, que nos permite producir desde tirajes pequeños hasta grandes volúmenes con la mejor calidad y puntualidad. Además, contamos con transporte propio para llevar tu pedido directamente a tus instalaciones, sin complicaciones.En Solucion en Cajas ALO, convertimos tus necesidades en soluciones prácticas y profesionales, para que tu producto llegue siempre bien presentado y protegido.',
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(aboutData)
}
