import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { Image } from '@/components/ui/image'

// Modern luxury home exterior — Unsplash (Scott Webb)
const HERO_BG =
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80'

const trust = [
  { value: '200+', label: 'Installations' },
  { value: 'All Brands', label: 'Brand Agnostic' },
  { value: 'GTA-Based', label: 'Local Team' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 z-0">
        {/* Photo */}
        <Image
          src={HERO_BG}
          alt="Modern luxury home exterior at night"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark base wash */}
        <div className="absolute inset-0 bg-background/70" />

        {/* Left-to-right directional gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />

        {/* Subtle gold radial glow top-right */}
        <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-primary-container/6 rounded-full blur-[120px] pointer-events-none" />

        {/* Tech dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-32 pb-24">

        {/* Left: Copy */}
        <div className="space-y-8 max-w-2xl">
          {/* Headline */}
          <h1 className="font-headline font-bold uppercase leading-[0.95] tracking-tight">
            <span className="block text-6xl md:text-7xl xl:text-8xl text-foreground">
              Digital
            </span>
            <span className="block text-6xl md:text-7xl xl:text-8xl text-foreground">
              Guardians
            </span>
            <span className="block text-5xl md:text-6xl xl:text-7xl text-primary-container text-glow-gold mt-1">
              For Modern Living
            </span>
          </h1>

          {/* Body */}
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl">
            We design and build custom security &amp; smart home systems — not tied to any brand,
            not pushing inventory. Every solution is engineered around your property, goals, and
            budget.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+14376063658"
              className="relative overflow-hidden gold-gradient text-on-primary font-bold px-8 py-4 rounded-xl text-base font-headline uppercase tracking-wider hover:shadow-[0_0_32px_rgba(255,193,7,0.45)] transition-shadow group"
            >
              <span className="relative z-10">Call Now</span>
              <span className="absolute inset-0 w-1/3 -skew-x-[18deg] bg-white/25 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-out" />
            </a>
            <Link
              href="#services"
              className="bg-surface-container-high/70 backdrop-blur-sm text-foreground font-semibold px-8 py-4 rounded-xl text-base border border-outline-variant/20 hover:border-outline-variant/50 hover:bg-surface-container-high transition-all font-headline uppercase tracking-wider"
            >
              Our Services
            </Link>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2 border-t border-outline-variant/10">
            {trust.map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span className="text-sm font-bold font-headline uppercase tracking-wider text-primary-container">
                  {value}
                </span>
                <span className="text-xs text-on-surface-variant uppercase tracking-widest">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-on-surface-variant font-headline">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4 text-on-surface-variant animate-bounce" />
      </div>
    </section>
  )
}
