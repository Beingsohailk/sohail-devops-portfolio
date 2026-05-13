import Link from "next/link"
import { Cloud } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border/80 bg-gradient-to-b from-muted/25 to-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-md flex-col gap-4">
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "flex size-10 items-center justify-center rounded-xl border border-cyan-500/20",
                  "bg-gradient-to-br from-cyan-500/15 to-transparent text-cyan-400"
                )}
              >
                <Cloud className="size-5" aria-hidden />
              </span>
              <div>
                <p className="font-heading text-lg font-semibold tracking-tight text-foreground">
                  {profile.name}
                </p>
                <p className="text-sm text-muted-foreground">{profile.role}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Cloud infrastructure, delivery automation, and production operations.
              Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
            <p className="font-mono text-xs tracking-wide text-muted-foreground/90">
              © {year} {profile.name}. All rights reserved.
            </p>
          </div>

          <nav
            className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10"
            aria-label="Footer"
          >
            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Connect
              </span>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
                <Link
                  className="text-sm font-medium text-foreground/90 transition-colors hover:text-cyan-400/90"
                  href={`mailto:${profile.email}`}
                >
                  Email
                </Link>
                <Link
                  className="text-sm font-medium text-foreground/90 transition-colors hover:text-cyan-400/90"
                  href={profile.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </Link>
                <Link
                  className="text-sm font-medium text-foreground/90 transition-colors hover:text-cyan-400/90"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </Link>
              </div>
            </div>
            <div className="h-px w-full bg-border/60 sm:hidden" />
            <Link
              href="#hero"
              className="inline-flex items-center justify-center rounded-lg border border-border/80 bg-muted/30 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-cyan-500/25 hover:bg-cyan-500/5 sm:shrink-0"
            >
              Back to top
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
