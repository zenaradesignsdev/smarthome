import { CheckCircle } from 'lucide-react'
import { Image } from '@/components/ui/image'

const GTA_PHOTO = '/security-camera-installation.png'

const features = [
  'No manufacturer contracts — we source what performs best for your project.',
  'Rapid on-site support within 4 hours anywhere across the GTA.',
  'Expertise in heritage homes, modern condos, and commercial properties.',
]

const brands = [
  { name: 'Hikvision', logo: '/logo-hikvision.svg' },
  { name: 'Dahua', logo: '/logo-dahua.svg' },
  { name: 'Axis', logo: '/logo-axis.svg' },
  { name: 'Bosch', logo: '/logo-bosch.svg' },
]

// Duplicated for seamless infinite loop
const brandTrack = [...brands, ...brands, ...brands, ...brands]

export function GTASection() {
  return (
    <section id="solutions" className="bg-surface-container-low overflow-hidden">
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden border border-outline-variant/20 shadow-2xl aspect-video">
              <Image
                src={GTA_PHOTO}
                alt="Ilkhom Khamidov installing an Axis security camera on a residential home"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary-container/10 mix-blend-overlay" />
            </div>
          </div>

          {/* Copy */}
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-xs text-primary-container uppercase tracking-widest font-black">
              Toronto &amp; GTA
            </span>
            <h2 className="text-4xl font-bold font-headline uppercase leading-tight tracking-tight">
              Local Integrators, Independent by Design
            </h2>
            <p className="text-lg text-on-surface-variant">
              Based in Toronto, we work across all major manufacturers — evaluating Hikvision, Dahua,
              Axis, Bosch, and others — and recommending what fits each project, not what we&apos;re
              incentivised to sell. Our advice is always driven by your requirements.
            </p>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-container shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Brand carousel ── */}
      <div className="border-t border-outline-variant/15 py-8 relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-container-low to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-container-low to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="flex items-center animate-marquee shrink-0">
            {brandTrack.map(({ name, logo }, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-14 border-r border-outline-variant/10 shrink-0 h-14"
              >
                <img
                  src={logo}
                  alt={name}
                  className="h-7 w-auto object-contain opacity-50 grayscale invert brightness-200 hover:opacity-80 transition-opacity duration-300"
                  style={{ filter: 'invert(1) brightness(2) grayscale(1) drop-shadow(0 0 6px rgba(255,255,255,0.4))' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
