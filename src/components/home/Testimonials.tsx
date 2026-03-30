import { Star } from 'lucide-react'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/ui/fade-in'

const testimonials = [
  {
    quote:
      "They didn't push any particular brand. They showed us three options at different price points, explained the trade-offs clearly, and let us decide. The system they installed is exactly what we needed.",
    name: 'David L.',
    location: 'North York, Toronto',
  },
  {
    quote:
      "I'd been quoted far more by other providers who were clearly just pushing their preferred equipment. IK Smart Solution came in, assessed our property, and designed something genuinely tailored to us.",
    name: 'Sarah M.',
    location: 'Bridle Path, Toronto',
  },
  {
    quote:
      "What stood out was the transparency. We saw options from budget to premium, understood the differences, and chose what made sense. The installation was flawless and the system has been rock-solid.",
    name: 'Marcus R.',
    location: 'Oakville, GTA',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-background border-y border-outline-variant/5">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="text-xs text-primary uppercase tracking-[0.3em] font-black">
            Client Feedback
          </span>
          <h2 className="text-4xl font-bold font-headline uppercase tracking-tight mt-4">
            Security Proven in the Field
          </h2>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, name, location }) => (
            <FadeInItem key={name}>
            <div
              className="bg-surface-container p-8 rounded-2xl border border-outline-variant/10 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-primary-container fill-primary-container"
                    />
                  ))}
                </div>
                <p className="text-lg text-foreground font-medium leading-relaxed mb-8 italic">
                  &ldquo;{quote}&rdquo;
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/10">
                <h4 className="font-headline uppercase font-bold tracking-wider text-primary">
                  {name}
                </h4>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                  {location}
                </p>
              </div>
            </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
