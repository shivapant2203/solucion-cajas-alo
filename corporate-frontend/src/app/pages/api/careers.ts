import type { NextApiRequest, NextApiResponse } from 'next'

const careersData = {
  title: 'Careers at Caja y Empaques Arely',
  description:
    'Join our growing team at Caja y Empaques Arely, a leader in sustainable packaging solutions across Mexico. Based in San Jose El Jaral, Atizapan De Zaragoza, we operate two manufacturing plants and a printing facility and offer opportunities in production, quality control, sales, logistics, and administration. We value teamwork, innovation, and dedication to customer satisfaction.',
  openings: [
    {
      id: 1,
      role: 'Production Line Operator',
      location: 'San Jose El Jaral, Atizapan De Zaragoza',
      type: 'Full-time',
    },
    {
      id: 2,
      role: 'Sales Executive',
      location: 'Remote / Mexico',
      type: 'Full-time',
    },
  ],
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(careersData)
}
