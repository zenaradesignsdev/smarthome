import Link from 'next/link'
import { Globe, Share2 } from 'lucide-react'

const solutions = ['CCTV', 'Access Control', 'Smart Locks', 'Alarm Systems']
const company = ['Wi-Fi Networks', 'Audio Systems', 'Contact Us', 'Privacy Policy']

export function SiteFooter() {
  return (
    <footer className="bg-surface-container-lowest w-full py-12 px-6 border-t border-outline-variant/15">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="col-span-2 space-y-6">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Smart House" className="h-12 w-auto" />
            <span className="text-lg font-bold text-primary uppercase tracking-widest font-headline">
              Smart House
            </span>
          </Link>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm">
            High-performance security engineering for the modern architectural landscape.
            Professional systems, military-grade reliability.
          </p>
          <div className="flex gap-2">
            <a
              href="#"
              className="p-2.5 text-primary-container hover:text-primary transition-colors"
              aria-label="Website"
            >
              <Globe className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="p-2.5 text-primary-container hover:text-primary transition-colors"
              aria-label="Share"
            >
              <Share2 className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Solutions */}
        <div className="space-y-4">
          <h4 className="text-foreground font-bold text-sm uppercase tracking-widest font-headline">
            Solutions
          </h4>
          <ul className="space-y-2">
            {solutions.map((item) => (
              <li key={item}>
                <Link
                  href="#services"
                  className="text-on-surface-variant hover:text-primary transition-colors text-sm"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h4 className="text-foreground font-bold text-sm uppercase tracking-widest font-headline">
            Company
          </h4>
          <ul className="space-y-2">
            {company.map((item) => (
              <li key={item}>
                <Link
                  href={item === 'Contact Us' ? '#contact' : '#'}
                  className="text-on-surface-variant hover:text-primary transition-colors text-sm"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-outline-variant/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="text-on-surface-variant text-sm">
          © {new Date().getFullYear()} Smart House Security. Serving the GTA with Precision.
        </p>
        <a
          href="https://www.zenaradesigns.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-on-surface-variant/60 hover:text-primary-container text-xs transition-colors"
        >
          Designed by Zenara Designs
        </a>
      </div>
    </footer>
  )
}
