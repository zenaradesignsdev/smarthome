import { Phone, Mail } from 'lucide-react'
import { ContactForm } from '@/components/contact/ContactForm'
import { FadeIn } from '@/components/ui/fade-in'

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left: info */}
        <FadeIn variant="left" className="space-y-8">
          <div>
            <span className="text-4xl font-bold font-headline uppercase tracking-tight text-foreground leading-none block">
              Secure Your <br />
              <span className="text-primary-container">Sanctuary Today</span>
            </span>
          </div>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-md">
            Ready to upgrade your home&apos;s intelligence and security? Complete the form and our
            design consultants will contact you to schedule a professional site audit.
          </p>

          <address className="not-italic space-y-6 pt-4">
            <a href="tel:+14376063658" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center text-primary-container group-hover:gold-gradient group-hover:text-on-primary transition-all duration-300">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-black text-on-surface-variant">
                  Direct Line
                </p>
                <p className="text-xl font-bold font-headline tracking-wide">437.606.3658</p>
              </div>
            </a>

            <a href="mailto:smarthousecan@gmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center text-primary-container group-hover:gold-gradient group-hover:text-on-primary transition-all duration-300">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-black text-on-surface-variant">
                  Email
                </p>
                <p className="text-xl font-bold font-headline tracking-wide">smarthousecan@gmail.com</p>
              </div>
            </a>
          </address>
        </FadeIn>

        {/* Right: form */}
        <FadeIn variant="right" className="bg-surface-container-low p-8 md:p-10 rounded-2xl border border-outline-variant/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 blur-3xl rounded-full" />
          <div className="relative z-10">
            <ContactForm />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
