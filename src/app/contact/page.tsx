import { generateMetadata as buildMetadata } from '@/lib/metadata'
import { ContactForm } from '@/components/contact/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us — Free Security Assessment in Toronto & GTA',
  description:
    'Book a free on-site security assessment with Smart House. Serving Toronto and the GTA with custom CCTV, access control, and smart home systems. Call 437-606-3658.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-semibold tracking-tight">
        Book a Free Site Assessment in Toronto &amp; GTA
      </h1>
      <p className="mt-4 text-muted-foreground">
        Tell us about your property and goals. We&apos;ll arrange a free on-site visit and come back
        with a custom system design — no pressure, no obligation.
      </p>
      <div className="mt-12">
        <ContactForm />
      </div>
    </main>
  )
}
