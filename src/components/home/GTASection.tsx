import { CheckCircle } from 'lucide-react'
import { Image } from '@/components/ui/image'

const GTA_PHOTO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDNDgAaRhduGD79w2w6dgirVfWPhUdZiYJIUEBN28EJhqmsxSHLbqU3jKMt2iAxXDMzTSZVuDFqArgtp3k9-G2Va-WXbeVEZzExttSNsHp0QbBV9r4WvgXLzEUFNE5rNCjoDFLslEUk6T6ldPl74L9MANQ_L5t5bR6Xu0Ycx88xn6CpgNm0u39UVlBbb_ojAY1NFrmzyH9TcH-Sc4NVY-5sIdQnASD-GBcY4VcKumT1ufaTMI-C9_azga23gKLNaUbADCB6GrsbaQ'

const features = [
  'No manufacturer contracts — we source what performs best for your project.',
  'Rapid on-site support within 4 hours anywhere across the GTA.',
  'Expertise in heritage homes, modern condos, and commercial properties.',
]

export function GTASection() {
  return (
    <section id="solutions" className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <div className="relative rounded-2xl overflow-hidden border border-outline-variant/20 shadow-2xl aspect-video">
            <Image
              src={GTA_PHOTO}
              alt="Technician installing high-end security camera on a modern Toronto home"
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
    </section>
  )
}
