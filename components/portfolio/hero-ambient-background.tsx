"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

/** Subtle drifting “clouds” + terminal-style grid for the hero. */
export function HeroAmbientBackground() {
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-15%,rgba(34,211,238,0.12),transparent_55%)]" />
        <div className="hero-terminal-grid absolute inset-0 opacity-[0.04]" />
      </div>
    )
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-12%,rgba(34,211,238,0.16),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_20%,rgba(6,182,212,0.08),transparent_50%)]" />

      <motion.div
        className="absolute -left-20 top-24 h-72 w-96 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ x: [0, 24, 0], y: [0, 16, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-16 top-40 h-80 w-[28rem] rounded-full bg-sky-400/8 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 28, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-teal-500/6 blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="hero-terminal-grid absolute inset-0 opacity-[0.055]" />
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent"
        animate={{ opacity: [0.2, 0.55, 0.2] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}

export function HeroBottomFade({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent",
        className
      )}
      aria-hidden
    />
  )
}
