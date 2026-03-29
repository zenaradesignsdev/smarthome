'use client'
import { m, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  show:   { opacity: 1, x: 0 },
}

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  show:   { opacity: 1, x: 0 },
}

type Variant = 'up' | 'left' | 'right'
const variantMap = { up: fadeUp, left: fadeLeft, right: fadeRight }

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
  variant?: Variant
}

/** Single element — fades in when scrolled into view */
export function FadeIn({ children, delay = 0, className, variant = 'up' }: FadeInProps) {
  const reduced = useReducedMotion()
  return (
    <m.div
      variants={variantMap[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      transition={
        reduced
          ? { duration: 0 }
          : { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }
      }
      className={className}
    >
      {children}
    </m.div>
  )
}

interface StaggerProps {
  children: ReactNode
  className?: string
  stagger?: number
}

/** Wrapper that staggers its direct FadeInItem children */
export function FadeInStagger({ children, className, stagger = 0.1 }: StaggerProps) {
  return (
    <m.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ show: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </m.div>
  )
}

/** Must be a direct child of FadeInStagger */
export function FadeInItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion()
  return (
    <m.div
      variants={fadeUp}
      transition={
        reduced ? { duration: 0 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
      }
      className={className}
    >
      {children}
    </m.div>
  )
}
