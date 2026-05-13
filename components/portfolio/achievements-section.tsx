import { SectionHeading } from "@/components/portfolio/section-heading"
import { FadeIn, FadeInItem, FadeInStagger } from "@/components/portfolio/motion"
import { achievements } from "@/lib/portfolio-data"
import { Card, CardContent } from "@/components/ui/card"

export function AchievementsSection() {
  return (
    <section id="achievements" className="border-b border-border/60 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-10">
        <FadeIn>
          <SectionHeading
            eyebrow="metrics —summary"
            title="Impact & outcomes"
            description="Outcomes recruiters and hiring managers can anchor on—velocity, stability, and delivery quality."
          />
        </FadeIn>

        <FadeInStagger className="grid gap-4 md:grid-cols-3">
          {achievements.map((a) => {
            const Icon = a.icon
            return (
              <FadeInItem key={a.title}>
                <Card className="border-border/80 bg-gradient-to-b from-card/80 to-card/30 ring-1 ring-cyan-500/10">
                  <CardContent className="flex gap-4 pt-6">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-heading text-base font-semibold">
                        {a.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{a.detail}</p>
                    </div>
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
