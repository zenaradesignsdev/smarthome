'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
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
      {/* Default text */}
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full text-on-surface-variant text-sm font-medium font-headline uppercase tracking-wider">
        {label}
      </span>
      {/* Hover text (slides up from below) */}
      <span className="absolute top-full left-0 block transition-transform duration-300 ease-out group-hover:-translate-y-full text-primary-container text-sm font-medium font-headline uppercase tracking-wider">
        {label}
      </span>
    </a>
  )
}

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          borderRadius: isOpen ? '1rem' : '9999px',
        }}
        transition={{
          y: { type: 'spring', stiffness: 280, damping: 28, delay: 0.1 },
          opacity: { duration: 0.4, delay: 0.1 },
          borderRadius: { type: 'spring', stiffness: 400, damping: 35 },
        }}
        className={[
          'w-full max-w-4xl overflow-hidden',
          'border transition-[background,box-shadow,border-color] duration-300',
          scrolled
            ? 'bg-background/85 backdrop-blur-2xl border-outline-variant/35 shadow-[0_12px_50px_rgba(0,0,0,0.6)]'
            : 'bg-background/60 backdrop-blur-xl border-outline-variant/20',
        ].join(' ')}
      >
        {/* Main bar */}
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-7 h-7 rounded-lg gold-gradient flex items-center justify-center">
              <span className="text-on-primary text-[10px] font-black font-headline leading-none">
                SH
              </span>
            </div>
            <span className="hidden sm:block text-sm font-bold tracking-tight text-primary font-headline uppercase">
              Smart House
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map(({ href, label }) => (
              <NavLink key={href} href={href} label={label} />
            ))}
          </nav>

          {/* Desktop CTA — gold pill with light-sweep shimmer */}
          <Link
            href="#contact"
            className="hidden md:inline-flex relative overflow-hidden items-center gold-gradient text-on-primary font-bold px-5 py-2 rounded-full text-sm font-headline uppercase tracking-wider group"
          >
            <span className="relative z-10">Free Assessment</span>
            {/* Shimmer sweep */}
            <span className="absolute inset-0 w-1/3 -skew-x-[18deg] bg-white/30 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-700 ease-out" />
          </Link>

          {/* Mobile toggle */}
          <motion.button
            className="md:hidden p-1.5 rounded-lg text-on-surface-variant hover:text-foreground hover:bg-surface-container-high transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.88 }}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? 'x' : 'menu'}
                initial={{ rotate: -80, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 80, opacity: 0 }}
                transition={{ duration: 0.14 }}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile menu — springs open inside the pill */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              className="overflow-hidden md:hidden"
            >
              <div className="px-5 pt-1 pb-5 border-t border-outline-variant/15">
                <nav className="flex flex-col">
                  {links.map(({ href, label }, i) => (
                    <motion.a
                      key={href}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.055 + 0.04 }}
                      className="py-3 text-sm text-on-surface-variant hover:text-primary-container transition-colors font-headline uppercase tracking-wider border-b border-outline-variant/10 last:border-0"
                    >
                      {label}
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <motion.div
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
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
