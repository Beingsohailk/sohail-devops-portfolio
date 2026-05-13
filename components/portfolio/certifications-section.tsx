import { SectionHeading } from "@/components/portfolio/section-heading"
import { FadeIn, FadeInItem, FadeInStagger } from "@/components/portfolio/motion"
import { certifications } from "@/lib/portfolio-data"
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollText } from "lucide-react"

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="border-b border-border/60 bg-muted/15 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-10">
        <FadeIn>
          <SectionHeading
            eyebrow="trust store"
            title="Certifications"
            description="Formal learning paths that complement hands-on platform ownership."
          />
        </FadeIn>

        <FadeInStagger className="grid gap-4 md:grid-cols-3">
          {certifications.map((c) => (
            <FadeInItem key={c.name}>
              <Card className="h-full border-border/80 bg-card/50 ring-foreground/5">
                <CardHeader className="flex-row items-start gap-3 space-y-0">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40 text-foreground">
                    <ScrollText className="size-4" aria-hidden />
                  </span>
                  <div className="min-w-0 space-y-2">
                    <CardTitle className="text-base leading-snug">
                      {c.name}
                    </CardTitle>
                    {c.status ? (
                      <Badge variant="secondary" className="font-mono text-[10px] uppercase">
                        {c.status}
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="font-mono text-[10px] uppercase">
                        Completed
                      </Badge>
                    )}
                  </div>
                </CardHeader>
              </Card>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
