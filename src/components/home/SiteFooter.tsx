import Link from 'next/link'

const solutions = ['CCTV', 'Access Control', 'Smart Locks', 'Alarm Systems']
const company = ['Contact Us']

export function SiteFooter() {
  return (
    <footer className="bg-surface-container-lowest w-full py-12 px-6 border-t border-outline-variant/15">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="col-span-2 space-y-6">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="IK Smart Solution" className="h-12 w-auto" />
            <span className="text-lg font-bold text-primary uppercase tracking-widest font-headline">
              IK Smart Solution
            </span>
          </Link>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm">
            High-performance security engineering for the modern architectural landscape.
            Professional systems, military-grade reliability.
          </p>
          <a
            href="https://ca.nextdoor.com/pages/smart-house/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="IK Smart Solution on Nextdoor"
            className="inline-block transition-opacity duration-200 hover:opacity-70"
          >
            <img
              src="/logo-nextdoor.png"
              alt="Nextdoor"
              className="h-7 w-auto"
              style={{ filter: 'brightness(0) saturate(100%) invert(84%) sepia(50%) saturate(800%) hue-rotate(357deg) brightness(105%)' }}
            />
          </a>
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
                  href="#solutions"
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
          © {new Date().getFullYear()} IK Smart Solution Security. Serving the GTA with Precision.
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
