import { CheckCircle, Video, Fingerprint, Lock, Bell, Wifi, Volume2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { FadeIn } from '@/components/ui/fade-in'

const serviceIcons: { icon: LucideIcon; label: string }[] = [
  { icon: Video, label: 'Video Surveillance' },
  { icon: Fingerprint, label: 'Access Control' },
  { icon: Lock, label: 'Smart Locks' },
  { icon: Bell, label: 'Alarm Systems' },
  { icon: Wifi, label: 'Wi-Fi Networks' },
  { icon: Volume2, label: 'Audio Systems' },
]

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
          {/* Service icons grid */}
          <FadeIn variant="left" className="w-full md:w-1/2">
            <div
              className="relative p-6 rounded-3xl"
              style={{
                background: 'rgba(255,255,255,0.02)',
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            >
              {/* Radial gold glow behind grid */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)',
                }}
              />
              <div className="relative grid grid-cols-3 gap-3">
                {serviceIcons.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="group relative flex flex-col items-center gap-3 p-5 cursor-default overflow-visible"
                    style={{ isolation: 'isolate' }}
                  >
                    {/* Card bg */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/5 group-hover:border-primary-container/30 transition-colors duration-300" />

                    {/* Corner brackets on hover */}
                    <div className="pointer-events-none absolute inset-0 hidden group-hover:block">
                      <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary-container rounded-tl-sm" />
                      <div className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-primary-container rounded-tr-sm" />
                      <div className="absolute -left-px -bottom-px h-3 w-3 border-l-2 border-b-2 border-primary-container rounded-bl-sm" />
                      <div className="absolute -right-px -bottom-px h-3 w-3 border-r-2 border-b-2 border-primary-container rounded-br-sm" />
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 group-hover:bg-primary-container/10 transition-all duration-300">
                      {/* icon glow */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ boxShadow: '0 0 18px 4px rgba(212,175,55,0.25)' }}
                      />
                      <Icon className="relative z-10 h-5 w-5 text-on-surface-variant group-hover:text-primary-container transition-colors duration-300" />
                    </div>

                    {/* Label */}
                    <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-center leading-tight text-on-surface-variant/60 group-hover:text-primary-container transition-colors duration-300">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Copy */}
          <FadeIn variant="right" className="w-full md:w-1/2 space-y-6">
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
          </FadeIn>
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
