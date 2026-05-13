"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type ProjectCardProps = {
  title: string
  description: string
  highlights: readonly string[]
  screenshotLabel?: string
  href?: string
  className?: string
}

export function ProjectCard({
  title,
  description,
  highlights,
  screenshotLabel = "Preview",
  href,
  className,
}: ProjectCardProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -4 }}
      className={cn("h-full", className)}
    >
      <Card
        className={cn(
          "group/card flex h-full min-h-[28rem] flex-col overflow-hidden border-border/70 bg-card/45 shadow-sm ring-1 ring-foreground/[0.04] transition-[box-shadow,transform,border-color] duration-300",
          "hover:border-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/[0.07] hover:ring-cyan-500/10"
        )}
      >
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden border-b border-border/60 bg-muted/30">
          <div
            className="absolute inset-0 bg-[linear-gradient(135deg,oklch(0.22_0.05_200)_0%,oklch(0.18_0.02_260)_45%,oklch(0.16_0.03_220)_100%)]"
            aria-hidden
          />
          <div className="hero-terminal-grid absolute inset-0 opacity-[0.12]" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(34,211,238,0.15),transparent_65%)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
            <span className="rounded-md border border-border/60 bg-background/40 px-2 py-1 font-mono text-[10px] tracking-wider text-cyan-400/95 uppercase backdrop-blur-sm">
              Screenshot
            </span>
            <p className="font-heading text-lg font-medium text-foreground/90 sm:text-xl">
              {screenshotLabel}
            </p>
            <p className="max-w-xs text-xs text-muted-foreground">
              Replace with a project image — drop PNG or WebP into{" "}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-[10px]">
                /public/projects/
              </code>
            </p>
          </div>
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
            aria-hidden
          />
        </div>

        <CardHeader className="gap-3 space-y-0 px-6 pb-2 pt-6 sm:px-8 sm:pt-8">
          <CardTitle className="text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
            {title}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto flex flex-wrap gap-2 px-6 sm:px-8">
          {highlights.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-border/80 font-mono text-[10px] uppercase tracking-wide"
            >
              {tag}
            </Badge>
          ))}
        </CardContent>
        {href ? (
          <CardFooter className="mt-2 justify-end border-t border-border/60 bg-muted/20 px-6 py-4 sm:px-8">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <Link href={href} target="_blank" rel="noreferrer">
                View details
                <ExternalLink className="size-3.5 opacity-70" aria-hidden />
              </Link>
            </Button>
          </CardFooter>
        ) : null}
      </Card>
    </motion.div>
  )
}
