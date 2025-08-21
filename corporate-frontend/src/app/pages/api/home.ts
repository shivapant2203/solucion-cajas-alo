import type { NextApiRequest, NextApiResponse } from 'next'

const homeData = {
  title: 'Welcome to Caja y Empaques Arely',
  description:
    'En Cajas y Empaques Arely nos especializamos en la fabricación de cajas de cartón a la medida exacta que tu negocio necesita. Creamos soluciones personalizadas, con o sin impresión, en cartón sencillo o doble corrugado, adaptándonos por completo a tus requerimientos. Nuestro lema lo dice todo: Tus ideas, nuestras cajas.',
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(homeData)
}
