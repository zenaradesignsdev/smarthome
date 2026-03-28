import type { Metadata } from 'next'
import { fontSans, fontHeadline } from '@/lib/fonts'
import { Providers } from '@/providers/Providers'
import { generateMetadata } from '@/lib/metadata'
import '@/app/globals.css'

export const metadata: Metadata = generateMetadata()

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Smart House',
  description:
    'Independent smart home security integrators serving Toronto and the GTA. Custom CCTV, biometric access control, smart locks, and 24/7 monitoring.',
  url: 'https://smarthouse.to',
  telephone: '+14376063658',
  email: 'smarthousecan@gmail.com',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 43.7, longitude: -79.42 },
    geoRadius: '50000',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toronto',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
  serviceArea: 'Toronto, Mississauga, Brampton, Vaughan, Markham, Oakville, GTA',
  priceRange: '$$',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontHeadline.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
