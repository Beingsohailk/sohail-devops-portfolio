import { SectionHeading } from "@/components/portfolio/section-heading"
import {
  FadeIn,
  FadeInItem,
  FadeInStagger,
} from "@/components/portfolio/motion"
import { skillGroups } from "@/lib/portfolio-data"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-b border-border/60 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-10">
        <FadeIn>
          <SectionHeading
            eyebrow="kubectl describe skills"
            title="Technical skills"
            description="Platforms and practices I use to ship infrastructure changes safely and observe them in production."
          />
        </FadeIn>

        <FadeInStagger className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <FadeInItem key={group.title}>
                <Card
                  className={cn(
                    "h-full border-border/70 bg-card/35 shadow-sm ring-1 ring-foreground/[0.04] backdrop-blur-sm transition-all duration-300",
                    "hover:-translate-y-0.5 hover:border-cyan-500/20 hover:bg-card/55 hover:shadow-lg hover:shadow-cyan-500/[0.08] hover:ring-cyan-500/15",
                    "motion-reduce:transform-none motion-reduce:hover:transform-none"
                  )}
                >
                  <CardHeader className="border-b border-border/50 pb-5">
                    <div className="flex items-start gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/25 bg-gradient-to-br from-cyan-500/15 to-cyan-500/5 text-cyan-300 shadow-inner shadow-cyan-500/10">
                        <Icon className="size-[1.15rem]" aria-hidden />
                      </span>
                      <div className="min-w-0 space-y-1.5">
                        <CardTitle className="text-[1.05rem] font-semibold tracking-tight">
                          {group.title}
                        </CardTitle>
                        <CardDescription className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                          Stack
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2 pt-5">
                    {group.items.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="border border-transparent font-normal transition-colors hover:border-border/80 hover:bg-muted"
                      >
                        {item}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              </FadeInItem>
            )
          })}
        </FadeInStagger>
      </div>
    </section>
  )
}
