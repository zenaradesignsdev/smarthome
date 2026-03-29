import { FadeIn, FadeInStagger, FadeInItem } from '@/components/ui/fade-in'

const steps = [
  {
    number: '01',
    label: '1',
    title: 'Assessment',
    description:
      "A comprehensive audit of your site's physical vulnerabilities and technical requirements.",
  },
  {
    number: '02',
    label: '2',
    title: 'Design',
    description:
      'Custom architecture plans detailing camera angles, network hubs, and sensor placements.',
  },
  {
    number: '03',
    label: '3',
    title: 'Installation',
    description:
      'Bespoke integration by certified technicians with zero visible wiring and system testing.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn className="text-center mb-20">
          <h2 className="text-4xl font-bold font-headline uppercase tracking-tight mb-4">
            Precision Deployment
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            From first consultation to final commissioning, our white-glove process ensures zero
            friction and absolute reliability.
          </p>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-3 gap-12 relative">
          {steps.map(({ number, label, title, description }) => (
            <FadeInItem key={title}>
              <div className="relative text-center md:text-left">
                <div className="text-[8rem] font-black text-surface-container-high absolute -top-24 left-0 select-none opacity-30 z-0 font-headline">
                  {number}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-4 font-headline uppercase tracking-wide justify-center md:justify-start">
                    <span className="w-10 h-10 rounded-full border border-primary-container flex items-center justify-center text-primary-container font-mono shrink-0">
                      {label}
                    </span>
                    {title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">{description}</p>
                </div>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
