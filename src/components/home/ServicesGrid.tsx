import { Video, Fingerprint, Lock, Bell, Wifi, Volume2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Video,
    title: 'Video Surveillance',
    description:
      'Thermal imaging and AI-powered person detection with encrypted off-site cloud storage.',
  },
  {
    icon: Fingerprint,
    title: 'Access Control',
    description: 'Keyless entry management with temporary guest codes and biometric validation.',
  },
  {
    icon: Lock,
    title: 'Smart Locks',
    description: 'Automated deadbolts that integrate with your smart home protocols seamlessly.',
  },
  {
    icon: Bell,
    title: 'Alarm Systems',
    description:
      'Redundant cellular monitoring that alerts our 24/7 command center in milliseconds.',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi Networks',
    description: "Enterprise-grade mesh networks ensuring your security backbone never drops.",
  },
  {
    icon: Volume2,
    title: 'Audio Systems',
    description: 'High-fidelity whole-home audio that doubles as a deterrent system.',
  },
]

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 px-6 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs text-primary uppercase tracking-[0.3em] font-black">
            What We Build
          </span>
          <h2 className="text-4xl font-bold font-headline uppercase tracking-tight mt-4">
            End-to-End Systems, Built for You
          </h2>
          <p className="text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
            We cover every layer of a modern security and smart home system — designing, supplying,
            installing, and configuring each component as part of one cohesive solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-surface-container-low p-8 rounded-2xl border border-outline-variant/5 hover:border-primary-container/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center mb-6 transition-all duration-500 group-hover:gold-gradient">
                <Icon className="h-7 w-7 text-on-surface-variant group-hover:text-on-primary transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-headline uppercase tracking-wide">
                {title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{description}</p>
              <div className="h-1 w-0 group-hover:w-full bg-primary-container transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
