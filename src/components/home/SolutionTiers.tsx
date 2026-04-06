import Link from 'next/link'
import { Check } from 'lucide-react'
import { cn } from '@/lib/cn'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/ui/fade-in'

const tiers = [
  {
    name: 'Essential',
    tagline: 'Core protection for smaller properties',
    priceHint: 'Entry level',
    featured: false,
    features: [
      'IP security cameras',
      'Smart lock',
      'Alarm system',
      'Remote viewing via mobile app',
      'Professional installation & full setup',
    ],
    cta: 'Get a Quote',
  },
  {
    name: 'Standard',
    tagline: 'Expanded coverage, smarter control',
    priceHint: 'Most popular',
    featured: true,
    features: [
      'IP security cameras — extended coverage',
      'Smart locks',
      'Multi-zone alarm system',
      'Remote viewing & motion alerts',
      'Guest access codes & remote control',
      'Professional installation & full setup',
    ],
    cta: 'Get a Quote',
  },
  {
    name: 'Premium',
    tagline: 'Full-property coverage, inside & out',
    priceHint: 'Full coverage',
    featured: false,
    features: [
      'IP security cameras — full perimeter',
      'Smart locks on all entry points',
      'Multi-zone alarm with 24/7 monitoring',
      'Cloud backup & remote access',
      'Advanced motion detection & alerts',
      'Professional installation & full setup',
    ],
    cta: 'Get a Quote',
  },
]

export function SolutionTiers() {
  return (
    <section id="packages" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16 space-y-4">
          <span className="text-xs text-primary uppercase tracking-[0.3em] font-black">
            Service Packages
          </span>
          <h2 className="text-4xl font-bold font-headline uppercase tracking-tight">
            Same Service. Every Package.
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Every package comes with the same professional installation, configuration, and support — what changes is the hardware bundle. Choose the coverage that fits your property.
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map(({ name, tagline, priceHint, featured, features, cta }) => (
            <FadeInItem key={name}>
            <div
              className={cn(
                'flex flex-col rounded-2xl border p-8 transition-all duration-300',
                featured
                  ? 'bg-surface-container border-primary-container/40 shadow-[0_0_40px_rgba(255,193,7,0.08)] relative'
                  : 'bg-surface-container-low border-outline-variant/10 hover:border-outline-variant/30',
              )}
            >
              {featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="gold-gradient text-on-primary text-xs font-bold px-4 py-1 rounded-full font-headline uppercase tracking-widest">
                    {priceHint}
                  </span>
                </div>
              )}

              <div className="mb-8">
                {!featured && (
                  <span className="text-xs text-on-surface-variant uppercase tracking-widest font-bold mb-3 block">
                    {priceHint}
                  </span>
                )}
                <h3 className="text-3xl font-bold font-headline uppercase tracking-tight">
                  {name}
                </h3>
                <p className="text-on-surface-variant text-sm mt-2">{tagline}</p>
                {featured && (
                  <div className="h-0.5 w-12 bg-primary-container mt-4" />
                )}
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm">
                    <Check
                      className={cn(
                        'h-4 w-4 mt-0.5 shrink-0',
                        featured ? 'text-primary-container' : 'text-on-surface-variant',
                      )}
                    />
                    <span className={featured ? 'text-foreground' : 'text-on-surface-variant'}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={cn(
                  'block text-center font-bold py-3.5 rounded-xl font-headline uppercase tracking-wider text-sm transition-all',
                  featured
                    ? 'gold-gradient text-on-primary hover:shadow-[0_0_20px_rgba(255,193,7,0.4)]'
                    : 'border border-outline-variant/30 text-on-surface-variant hover:border-primary-container/40 hover:text-foreground',
                )}
              >
                {cta}
              </Link>
            </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <p className="text-center text-xs text-on-surface-variant mt-8 max-w-lg mx-auto">
          All packages include a free site assessment. Camera placement, lock compatibility, and alarm zones are confirmed on-site before any work begins.
        </p>
      </div>
    </section>
  )
}
