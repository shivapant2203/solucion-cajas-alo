import type { NextApiRequest, NextApiResponse } from 'next'

const productsData = [
  {
    id: 1,
    name: 'Custom Corrugated Box',
    description: 'Durable corrugated packaging with customizable sizes.',
  },
  {
    id: 2,
    name: 'Branded Packaging',
    description: 'High-quality printed boxes with your brand logo and colors.',
  },
  {
    id: 3,
    name: 'Heavy-Duty Shipping Box',
    description: 'Designed for extra protection during transportation.',
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(productsData)
}
