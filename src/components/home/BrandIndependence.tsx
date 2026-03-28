const pillars = [
  {
    number: '01',
    title: 'Brand Agnostic',
    body: "We evaluate Hikvision, Dahua, Axis, Bosch, and others on merit. Our recommendation is based on performance and value for your project — never on supplier agreements.",
  },
  {
    number: '02',
    title: 'Budget Flexible',
    body: 'Whether your budget is $1,000 or $100,000, you receive the same rigorous design process. We match the equipment tier to your goals — not to our margins.',
  },
  {
    number: '03',
    title: 'Complete Ownership',
    body: 'We design, procure, install, configure, and hand over a fully working system. One point of contact from first consultation to final sign-off. No subcontractors.',
  },
]

export function BrandIndependence() {
  return (
    <section className="py-32 px-6 bg-[#0d0d0d] relative overflow-hidden">
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.09] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Diagonal line overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 40px)',
        }}
      />

      {/* Gold radial glow — top centre */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary-container/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[350px] bg-primary-container/6 blur-[100px] rounded-full" />
      </div>

      {/* Top + bottom edge fades to blend with adjacent sections */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Top label ── */}
        <p className="text-[0.65rem] uppercase tracking-[0.35em] text-on-surface-variant/50 font-headline mb-10">
          Our Philosophy
        </p>

        {/* ── Split manifesto row ── */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end border-b border-outline-variant/10 pb-16 mb-16">

          {/* Big headline */}
          <h2 className="font-headline font-bold uppercase leading-[0.9] tracking-tight text-5xl md:text-6xl xl:text-7xl">
            <span className="block text-foreground">We Don&apos;t</span>
            <span className="block text-foreground">Sell Brands —</span>
            <span className="block text-primary-container text-glow-gold">
              We Build Solutions
            </span>
          </h2>

          {/* Pull quote — right side, vertically anchored to baseline */}
          <blockquote className="lg:max-w-[320px] xl:max-w-[380px]">
            <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
              &ldquo;We don&apos;t sell what&apos;s convenient for us&nbsp;—&nbsp;we build
              what&apos;s right for you.&rdquo;
            </p>
            <p className="mt-4 text-[0.65rem] uppercase tracking-[0.25em] text-on-surface-variant/40 font-headline">
              — Ilkhom Khamidov
            </p>
          </blockquote>
        </div>

        {/* ── Three pillars — borderless, numbered ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/60">
          {pillars.map(({ number, title, body }) => (
            <div key={number} className="py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 group">
              <span className="block text-2xl font-bold font-headline text-primary-container mb-5">
                {number}
              </span>
              <h3 className="text-lg font-bold font-headline uppercase tracking-wide text-foreground mb-3 group-hover:text-primary-container transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
