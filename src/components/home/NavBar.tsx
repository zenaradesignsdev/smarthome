'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { m, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'How We Work', href: '#process' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
]

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative inline-flex flex-col overflow-hidden"
      style={{ height: '1.1em' }}
    >
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full text-foreground/70 text-sm font-medium font-headline uppercase tracking-wider">
        {label}
      </span>
      <span className="absolute top-full left-0 block transition-transform duration-300 ease-out group-hover:-translate-y-full text-primary-container text-sm font-medium font-headline uppercase tracking-wider">
        {label}
      </span>
    </a>
  )
}

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <m.div
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          backgroundColor: scrolled ? 'rgba(10,10,10,0.88)' : 'rgba(0,0,0,0)',
          borderColor: scrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0)',
          boxShadow: scrolled ? '0 12px 50px rgba(0,0,0,0.7)' : '0 0px 0px rgba(0,0,0,0)',
        }}
        transition={{
          y: { type: 'spring', stiffness: 280, damping: 28, delay: 0.1 },
          opacity: { duration: 0.4, delay: 0.1 },
          backgroundColor: { duration: 0.35, ease: 'easeInOut' },
          borderColor: { duration: 0.35, ease: 'easeInOut' },
          boxShadow: { duration: 0.35, ease: 'easeInOut' },
        }}
        className={[
          'w-full max-w-4xl overflow-hidden border rounded-2xl',
          scrolled ? 'backdrop-blur-2xl' : '',
        ].join(' ')}
      >
        {/* Main bar */}
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img src="/logo.svg" alt="IK Smart Solution" className="h-9 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map(({ href, label }) => (
              <NavLink key={href} href={href} label={label} />
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex relative overflow-hidden items-center gold-gradient text-on-primary font-bold px-5 py-2 rounded-full text-sm font-headline uppercase tracking-wider group"
          >
            <span className="relative z-10">Free Assessment</span>
            <span className="absolute inset-0 w-1/3 -skew-x-[18deg] bg-white/30 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-out" />
          </Link>

          {/* Mobile toggle */}
          <m.button
            className="md:hidden p-2.5 rounded-lg text-on-surface-variant hover:text-foreground hover:bg-surface-container-high transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.88 }}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={isOpen ? 'x' : 'menu'}
                initial={{ rotate: -80, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 80, opacity: 0 }}
                transition={{ duration: 0.14 }}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </m.div>
            </AnimatePresence>
          </m.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <m.div
              id="mobile-menu"
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : {
                height: { duration: 0.38, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.25, ease: 'easeOut' },
              }}
              className="overflow-hidden md:hidden bg-background/95 backdrop-blur-2xl"
            >
              <div className="px-5 pt-1 pb-5 border-t border-outline-variant/15">
                <nav className="flex flex-col">
                  {links.map(({ href, label }, i) => (
                    <m.a
                      key={href}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.055 + 0.04 }}
                      className="py-3 text-sm text-on-surface-variant hover:text-primary-container transition-colors font-headline uppercase tracking-wider border-b border-outline-variant/10 last:border-0"
                    >
                      {label}
                    </m.a>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <m.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: links.length * 0.055 + 0.08 }}
                  className="mt-4"
                >
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="relative overflow-hidden flex items-center justify-center gold-gradient text-on-primary font-bold py-3 rounded-full font-headline uppercase tracking-wider text-sm group"
                  >
                    <span className="relative z-10">Book a Free Assessment</span>
                    <span className="absolute inset-0 w-1/3 -skew-x-[18deg] bg-white/30 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-out" />
                  </a>
                </m.div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </m.div>
    </div>
  )
}
