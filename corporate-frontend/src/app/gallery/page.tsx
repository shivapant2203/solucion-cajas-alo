'use client'
import Image from 'next/image'

const images = [
    '/gallery/img1.jpeg',
    '/gallery/img2.jpeg',
    '/gallery/img3.jpeg',
    '/gallery/img4.jpeg',
    '/gallery/img5.jpeg',
    '/gallery/img6.jpeg',
    '/gallery/img7.jpeg',
    '/gallery/img8.jpeg',
    '/gallery/img9.jpeg',
    '/gallery/img10.jpeg',
    '/gallery/img11.jpeg',
    '/gallery/img12.jpeg',
    '/gallery/img13.jpeg',
    '/gallery/img14.jpeg',
    '/gallery/img15.jpeg',
    '/gallery/img16.jpeg',
    '/gallery/img17.jpeg',
    '/gallery/img18.jpeg',
    '/gallery/img19.jpeg',
    '/gallery/img20.jpeg',
    '/gallery/img21.jpeg',
    '/gallery/img22.jpeg',
    '/gallery/img23.jpeg',
    '/gallery/img24.jpeg',
    '/gallery/img25.jpeg',
    '/gallery/img26.jpeg',
    '/gallery/img27.jpeg',
    '/gallery/img28.jpeg'
    // Add more as needed
];

export default function Gallery() {
  return (
    <main className="bg-packaging-light min-h-screen py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#795548] mb-10">
        Product Gallery
      </h1>
      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#d2b48c]">
            <Image
              src={src}
              alt={`Product image ${idx + 1}`}
              width={600}
              height={400}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  )
}
