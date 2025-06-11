'use client'

import Image from 'next/image'

const logos = [
  { src: '/logos/google.svg', alt: 'Google' },
  { src: '/logos/spotify.svg', alt: 'Spotify' },
  { src: '/logos/shopify.svg', alt: 'Shopify' },
  { src: '/logos/netflix.svg', alt: 'Netflix' },
  { src: '/logos/stripe.svg', alt: 'Stripe' },
  { src: '/logos/airbnb.svg', alt: 'Airbnb' },
]

export default function ClientCarousel() {
  return (
    <section className="py-16 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Marcas que han confiado en nosotros
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain grayscale dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
