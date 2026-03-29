import { generateMetadata as buildMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'
import { NavBar } from '@/components/home/NavBar'
import { Hero } from '@/components/home/Hero'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { ProcessSection } from '@/components/home/ProcessSection'
import { GTASection } from '@/components/home/GTASection'
import { BrandIndependence } from '@/components/home/BrandIndependence'
import { SolutionTiers } from '@/components/home/SolutionTiers'
import { Testimonials } from '@/components/home/Testimonials'
import { ContactSection } from '@/components/home/ContactSection'
import { CTASection } from '@/components/home/CTASection'
import { SiteFooter } from '@/components/home/SiteFooter'
import { FloatingCTA } from '@/components/home/FloatingCTA'

export const metadata: Metadata = buildMetadata({
  title: 'Smart Home Security Systems — Toronto & GTA',
  description:
    "Military-grade smart home security for Toronto's most discerning residents. Custom CCTV, biometric access control, smart locks & 24/7 local monitoring.",
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <ServicesGrid />
        <ProcessSection />
        <GTASection />
        <BrandIndependence />
        <SolutionTiers />
        <Testimonials />
        <ContactSection />
        <CTASection />
      </main>
      <SiteFooter />
      <FloatingCTA />
    </>
  )
}
