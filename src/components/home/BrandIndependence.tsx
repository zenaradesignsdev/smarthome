import { Shuffle, SlidersHorizontal, Wrench } from 'lucide-react'

const pillars = [
  {
    icon: Shuffle,
    title: 'Brand Agnostic',
    body: "We evaluate Hikvision, Dahua, Axis, Bosch, Reolink, and many others. Our recommendation is based on performance, reliability, and value for your specific project — never on supplier agreements or stock preferences.",
  },
  {
    icon: SlidersHorizontal,
    title: 'Budget Flexible',
    body: 'Every system is custom-designed. Whether your budget is $1,000 or $100,000, you receive the same rigorous design process and quality of installation. We simply match the equipment tier to your goals.',
  },
  {
    icon: Wrench,
    title: 'Complete Ownership',
    body: 'We design, procure, install, configure, test, and hand over a fully working system. No subcontractors, no partial handoffs. You get one point of contact from first consultation to final sign-off.',
  },
]

export function BrandIndependence() {
  return (
    <section className="py-24 px-6 bg-surface-container-lowest relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-container/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Core message */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <span className="text-xs text-primary uppercase tracking-[0.3em] font-black">
            Our Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-headline uppercase tracking-tight leading-[1.05]">
            We Don&apos;t Sell Brands —{' '}
            <span className="text-primary-container text-glow-gold">We Build Solutions</span>
          </h2>
          <p className="text-xl text-on-surface-variant leading-relaxed border-l-2 border-primary-container/50 pl-6 text-left">
            &ldquo;We don&apos;t sell what&apos;s convenient for us — we build what&apos;s right for
            you.&rdquo;
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Unlike resellers or brand representatives, we have no financial incentive to recommend
            one manufacturer over another. Our only obligation is to you — and to delivering a
            system that performs.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-surface-container p-8 rounded-2xl border border-outline-variant/10 hover:border-primary-container/25 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center mb-6 group-hover:gold-gradient transition-all duration-300">
                <Icon className="h-6 w-6 text-primary-container group-hover:text-on-primary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold font-headline uppercase tracking-wide mb-3">
                {title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
