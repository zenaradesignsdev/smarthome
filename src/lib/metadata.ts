import type { Metadata } from 'next'

/**
 * Per-client: update siteConfig after forking.
 * All pages call generateMetadata() to merge page-level overrides
 * with these site-wide defaults.
 */
export const siteConfig = {
  name: 'Smart House',
  description: 'Military-grade smart home security systems for Toronto and the GTA. Custom CCTV, biometric access control, smart locks, and 24/7 local monitoring. Brand-agnostic, fully bespoke.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://smarthouse.to',
  ogImage: '/og-image.jpg',
  locale: 'en_CA',
} as const

type MetadataOverrides = {
  title?: string
  description?: string
  ogImage?: string
  path?: string  // page path e.g. '/contact' — used for canonical URL and og:url
  noIndex?: boolean
}

export function generateMetadata(overrides: MetadataOverrides = {}): Metadata {
  const title = overrides.title ? `${overrides.title} | ${siteConfig.name}` : siteConfig.name
  const description = overrides.description ?? siteConfig.description
  const ogImage = overrides.ogImage ?? siteConfig.ogImage
  const pageUrl = overrides.path
    ? `${siteConfig.url}${overrides.path}`
    : siteConfig.url

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: siteConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: overrides.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  }
}
