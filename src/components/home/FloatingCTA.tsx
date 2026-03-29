'use client'
import { useState, useEffect } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

export function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  // Show after scrolling 300px
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Expanded label */}
          <AnimatePresence>
            {expanded && (
              <m.a
                href="#contact"
                onClick={() => setExpanded(false)}
                initial={{ opacity: 0, x: 12, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 12, scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="gold-gradient text-on-primary font-bold px-5 py-3 rounded-xl font-headline uppercase tracking-wider text-sm shadow-[0_4px_24px_rgba(255,193,7,0.35)] hover:shadow-[0_4px_32px_rgba(255,193,7,0.55)] transition-shadow whitespace-nowrap"
              >
                Get a Free Assessment
              </m.a>
            )}
          </AnimatePresence>

          {/* FAB button */}
          <button
            onClick={() => setExpanded((v) => !v)}
            aria-label={expanded ? 'Close contact prompt' : 'Get a free assessment'}
            className="relative w-14 h-14 rounded-full gold-gradient text-on-primary shadow-[0_4px_24px_rgba(255,193,7,0.4)] hover:shadow-[0_4px_36px_rgba(255,193,7,0.6)] transition-shadow flex items-center justify-center overflow-hidden group"
          >
            <span className="absolute inset-0 w-1/2 -skew-x-[18deg] bg-white/20 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out" />
            <m.span
              animate={{ rotate: expanded ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              {expanded ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
            </m.span>
          </button>
        </m.div>
      )}
    </AnimatePresence>
  )
}
