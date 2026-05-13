"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FileDown, Terminal } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { profile } from "@/lib/portfolio-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  HeroAmbientBackground,
  HeroBottomFade,
} from "@/components/portfolio/hero-ambient-background"

export function HeroSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border/60"
    >
      <HeroAmbientBackground />
      <HeroBottomFade />

      <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-32 lg:px-10 lg:py-[8.5rem]">
        <div className="grid items-center gap-12 sm:gap-14 lg:min-h-[min(32rem,calc(100dvh-5.5rem))] lg:grid-cols-[minmax(0,1fr)_minmax(240px,300px)] lg:gap-x-14 lg:gap-y-0 xl:gap-x-20">
          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl space-y-9 lg:max-w-none lg:py-1"
          >
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge
                variant="secondary"
                className="border border-border/60 bg-secondary/80 px-2.5 py-0.5 font-mono text-[10px] tracking-wide uppercase shadow-sm"
              >
                <Terminal className="size-3" aria-hidden />
                Open to opportunities
              </Badge>
              <Badge
                variant="outline"
                className="border-cyan-500/25 bg-cyan-500/5 px-2.5 py-0.5 font-mono text-[10px] tracking-wide text-cyan-200/90 uppercase"
              >
                AWS · Kubernetes · CI/CD
              </Badge>
            </div>

            <div className="space-y-7">
              <h1 className="font-heading text-4xl font-semibold tracking-[-0.02em] text-balance text-foreground sm:text-5xl lg:text-6xl xl:text-[3.5rem] xl:leading-[1.08]">
                {profile.name}
                <span className="mt-[0.65em] block text-2xl font-normal tracking-[-0.015em] text-muted-foreground sm:text-3xl lg:text-[1.65rem] lg:leading-snug">
                  {profile.role}
                </span>
              </h1>
              <p className="max-w-xl pt-0.5 text-lg leading-[1.65] text-muted-foreground sm:max-w-2xl sm:text-xl sm:leading-[1.68]">
                {profile.tagline}
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-11 gap-2 px-6 text-sm shadow-md shadow-cyan-500/10 transition-all duration-200 ease-out hover:-translate-y-px hover:shadow-lg hover:shadow-cyan-500/20 active:translate-y-0 motion-reduce:transform-none motion-reduce:hover:transform-none"
              >
                <Link href="#contact">
                  Get in touch
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 border-border/80 px-6 text-sm transition-all duration-200 ease-out hover:-translate-y-px hover:border-cyan-500/35 hover:bg-muted/60 hover:shadow-md hover:shadow-black/10 active:translate-y-0 motion-reduce:transform-none motion-reduce:hover:transform-none"
              >
                <Link href="#projects">View work</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="h-11 gap-2 border border-border/80 bg-muted/50 px-6 text-sm transition-all duration-200 ease-out hover:-translate-y-px hover:border-cyan-500/25 hover:bg-muted hover:shadow-md hover:shadow-cyan-500/10 active:translate-y-0 motion-reduce:transform-none motion-reduce:hover:transform-none"
              >
                <a
                  href={profile.resumePdfPath}
                  download={profile.resumeDownloadName}
                >
                  <FileDown className="size-4" aria-hidden />
                  Resume
                </a>
              </Button>
            </div>
          </motion.div>

          <div className="flex flex-col items-center justify-center gap-8 self-center sm:gap-9 lg:items-end lg:justify-center lg:gap-8">
            <motion.div
              initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
              animate={reduce ? undefined : { opacity: 1, scale: 1 }}
              transition={{
                delay: reduce ? 0 : 0.12,
                duration: reduce ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto shrink-0 lg:mx-0"
            >
              <div
                className="absolute -inset-3 rounded-full bg-gradient-to-br from-cyan-400/30 via-sky-400/15 to-transparent opacity-90 blur-xl motion-reduce:opacity-70"
                aria-hidden
              />
              <div
                className="relative size-[132px] rounded-full bg-gradient-to-br from-cyan-300/45 via-cyan-500/20 to-sky-600/35 p-[2.5px] shadow-[0_16px_48px_-16px_rgba(0,0,0,0.75),0_0_0_1px_rgba(34,211,238,0.18),inset_0_1px_0_0_rgba(255,255,255,0.1)] ring-1 ring-cyan-400/30 sm:size-[156px]"
              >
                <div className="flex size-full items-center justify-center rounded-full bg-gradient-to-b from-card to-background/95 p-0.5 ring-1 ring-white/[0.07] shadow-[inset_0_2px_12px_rgba(0,0,0,0.35)]">
                  <Image
                    src={profile.profileImagePath}
                    alt={`${profile.name} — professional photo placeholder`}
                    width={200}
                    height={200}
                    priority
                    className="size-full rounded-full object-cover"
                  />
                </div>
              </div>
              <p className="sr-only">
                Replace public/profile-placeholder.svg with your headshot for
                recruiters.
              </p>
            </motion.div>

            <motion.div
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{
                delay: reduce ? 0 : 0.22,
                duration: reduce ? 0 : 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full max-w-md font-mono text-xs text-muted-foreground/95 sm:text-sm lg:max-w-none"
            >
              <div className="rounded-xl border border-border/80 bg-background/55 px-5 py-4 shadow-lg ring-1 ring-foreground/[0.06] backdrop-blur-md">
                <div className="mb-3 flex items-center gap-2 border-b border-border/60 pb-2.5">
                  <span className="size-2.5 rounded-full bg-red-500/80" />
                  <span className="size-2.5 rounded-full bg-amber-500/80" />
                  <span className="size-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-auto text-[10px] text-muted-foreground">
                    zsh — portfolio
                  </span>
                </div>
                <span className="text-cyan-500/95">~/portfolio</span>{" "}
                <span className="text-muted-foreground">$</span> kubectl get
                clusters -o wide
                <div className="mt-3 space-y-1.5 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                  <div className="font-medium tracking-wide text-foreground/70 uppercase">
                    Name · Status · Cloud · Pipeline
                  </div>
                  <div className="text-foreground/90">
                    prod-eks · Ready · AWS · GitOps
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
