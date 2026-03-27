import Link from 'next/link'
import { Check } from 'lucide-react'
import { cn } from '@/lib/cn'

const tiers = [
  {
    name: 'Essential',
    tagline: 'Reliable protection, lean budget',
    priceHint: 'Entry level',
    featured: false,
    features: [
      'HD IP cameras (2–4 units)',
      'Network video recorder (NVR)',
      'Remote viewing via mobile app',
      'Single-zone alarm system',
      'Basic smart lock integration',
      'Professional installation',
    ],
    cta: 'Get a Quote',
  },
  {
    name: 'Standard',
    tagline: 'Complete coverage, smart control',
    priceHint: 'Most popular',
    featured: true,
    features: [
      '4K cameras — multi-zone coverage',
      'AI motion detection & alerts',
      'Access control with guest codes',
      'Multi-zone alarm with cellular backup',
      'Integrated smart locks & intercoms',
      'Managed Wi-Fi for all devices',
      'Professional installation & configuration',
    ],
    cta: 'Get a Quote',
  },
  {
    name: 'Premium',
    tagline: 'Enterprise-grade, fully bespoke',
    priceHint: 'Full capability',
    featured: false,
    features: [
      'Commercial-grade 4K / thermal cameras',
      'Biometric & facial recognition access',
      'Redundant alarm with 24/7 monitoring',
      'Full smart home integration',
      'Enterprise mesh Wi-Fi infrastructure',
      'Whole-home audio & AV systems',
      'Dedicated project manager & ongoing SLA',
    ],
    cta: 'Get a Quote',
  },
]

export function SolutionTiers() {
  return (
    <section id="packages" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs text-primary uppercase tracking-[0.3em] font-black">
            Flexible Packages
          </span>
          <h2 className="text-4xl font-bold font-headline uppercase tracking-tight">
            A System for Every Budget
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Every tier uses the same design methodology and installation standards. What changes is
            the equipment level — selected to match your budget and requirements, not ours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map(({ name, tagline, priceHint, featured, features, cta }) => (
            <div
              key={name}
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
          ))}
        </div>

        <p className="text-center text-xs text-on-surface-variant mt-8 max-w-lg mx-auto">
          All packages include a free site assessment. Final specifications and pricing depend on
          your property size, layout, and chosen equipment tier.
        </p>
      </div>
    </section>
  )
}
