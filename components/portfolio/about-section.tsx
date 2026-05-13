import { SectionHeading } from "@/components/portfolio/section-heading"
import { FadeIn } from "@/components/portfolio/motion"
import { aboutParagraphs } from "@/lib/portfolio-data"

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-border/60 bg-muted/20 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
        <FadeIn>
          <SectionHeading
            eyebrow="whoami"
            title="About me"
            description="A concise snapshot of how I work and what I optimize for in platform and delivery engineering."
          />
        </FadeIn>
        <FadeIn delay={0.08} className="grid gap-6 lg:grid-cols-[1fr_280px] lg:items-start">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <aside className="rounded-xl border border-border/80 bg-card/50 p-4 font-mono text-xs text-muted-foreground ring-1 ring-foreground/5 sm:text-sm">
            <div className="mb-2 text-cyan-500/90"># values.cfg</div>
            <ul className="space-y-2">
              <li>
                <span className="text-foreground/80">reliability:</span>{" "}
                measurable SLOs
              </li>
              <li>
                <span className="text-foreground/80">security:</span> least
                privilege by default
              </li>
              <li>
                <span className="text-foreground/80">velocity:</span>{" "}
                automated, repeatable paths
              </li>
              <li>
                <span className="text-foreground/80">clarity:</span> docs &
                runbooks that age well
              </li>
            </ul>
          </aside>
        </FadeIn>
      </div>
    </section>
  )
}
