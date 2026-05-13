"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { profile, navLinks } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[border-color,background-color,box-shadow] duration-300",
        scrolled
          ? "border-border/80 bg-background/85 shadow-sm shadow-black/20 supports-backdrop-filter:backdrop-blur-xl"
          : "border-transparent bg-background/40 supports-backdrop-filter:backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:h-[4.25rem] sm:px-6 lg:px-10">
        <Link
          href="#hero"
          className="group/brand flex min-w-0 flex-col gap-0.5 leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="truncate font-heading text-[0.95rem] font-semibold tracking-tight text-foreground sm:text-base">
            {profile.name}
          </span>
          <span className="font-mono text-[10px] font-medium tracking-[0.12em] text-cyan-500/85 uppercase sm:text-[11px]">
            {profile.role}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-3 py-2 text-[13px] font-medium tracking-wide text-muted-foreground transition-colors duration-200",
                "hover:text-foreground",
                "after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-cyan-400/0 after:via-cyan-400/70 after:to-cyan-400/0 after:transition-transform after:duration-300 after:ease-out",
                "hover:after:scale-x-100"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden h-9 border-border/80 font-mono text-[11px] tracking-wide uppercase transition-colors hover:border-cyan-500/25 hover:bg-cyan-500/5 sm:inline-flex"
          >
            <a href={profile.resumePdfPath} download={profile.resumeDownloadName}>
              Resume
            </a>
          </Button>
          <Button
            asChild
            variant="default"
            size="sm"
            className="hidden h-9 px-4 text-xs font-medium shadow-sm shadow-cyan-500/10 sm:inline-flex"
          >
            <Link href="#contact">Connect</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon-sm"
                className="border-border/80 lg:hidden"
                aria-label="Open menu"
              >
                <Menu aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="gap-0 border-border/80 p-0">
              <SheetHeader className="border-b border-border/80 bg-muted/20 p-5 text-left">
                <SheetTitle className="font-heading text-lg">Navigate</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-2" aria-label="Mobile">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-3 text-[15px] font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={profile.resumePdfPath}
                  download={profile.resumeDownloadName}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-[15px] font-medium text-foreground transition-colors hover:bg-muted"
                >
                  Download resume
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
