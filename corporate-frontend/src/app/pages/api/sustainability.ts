import type { NextApiRequest, NextApiResponse } from 'next'

const sustainabilityData = {
  title: 'Our Commitment to Sustainability',
  description:
    'At Caja y Empaques Arely, we believe in responsible manufacturing. Our two factories in San Jose El Jaral use energy-efficient equipment and recycle over 80% of production waste. We work with suppliers who share our commitment to sustainability and ensure that our packaging materials are recyclable and eco‑friendly. Our goal is to deliver high‑quality boxes while minimizing our environmental footprint for a greener Mexico.',
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(sustainabilityData)
}
