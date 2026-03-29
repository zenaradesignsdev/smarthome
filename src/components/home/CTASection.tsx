import Link from 'next/link'
import { Phone } from 'lucide-react'
import { FadeIn } from '@/components/ui/fade-in'

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto rounded-3xl p-12 relative overflow-hidden bg-surface-container-high border border-outline-variant/10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-[100px] -mr-32 -mt-32" />
        <div className="relative z-10 text-center space-y-8">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold font-headline uppercase tracking-tight text-foreground">
              Planning a New Installation?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
              Partner with Smart House during your property&apos;s construction or renovation for
              seamless, hidden security integration.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="#contact"
              className="gold-gradient text-on-primary font-bold px-10 py-4 rounded-xl text-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(255,193,7,0.4)] transition-all font-headline uppercase tracking-wider"
            >
              Contact Our Team
            </Link>
            <a
              href="tel:+14376063658"
              className="flex items-center gap-3 text-primary-container font-bold px-6 py-4 font-headline uppercase tracking-wide hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
              437.606.3658
            </a>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
