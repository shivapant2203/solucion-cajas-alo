import type { NextApiRequest, NextApiResponse } from 'next'

const contactData = {
  title: 'Contact Solucion en Cajas ALO',
  address: 'San Jose El Jaral, Atizapan De Zaragoza, 52924, Mexico',
  phone: '+52-55-1234-5678',
  email: 'contacto@cajaempaquesarely.com',
  description:
    'We serve clients all across Mexico from our two manufacturing factories in San Jose El Jaral.',
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(contactData)
}
