import { SectionHeading } from "@/components/portfolio/section-heading"
import { FadeIn, FadeInItem, FadeInStagger } from "@/components/portfolio/motion"
import { experience } from "@/lib/portfolio-data"
import { Separator } from "@/components/ui/separator"

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-border/60 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-10">
        <FadeIn>
          <SectionHeading
            eyebrow="jobs —history"
            title="Experience"
            description="Roles where I grew from intern to owning production-grade automation and cloud operations."
          />
        </FadeIn>

        <FadeInStagger className="relative">
          <div
            className="pointer-events-none absolute left-[15px] top-2 bottom-4 hidden w-px bg-gradient-to-b from-cyan-500/50 via-border to-transparent sm:block"
            aria-hidden
          />
          <ol className="space-y-8">
            {experience.map((job) => {
              const Icon = job.icon
              return (
                <FadeInItem key={job.company}>
                  <li className="relative sm:pl-12">
                    <div className="absolute left-0 top-1 hidden size-8 items-center justify-center rounded-full border border-cyan-500/30 bg-background text-cyan-400 sm:flex">
                      <Icon className="size-4" aria-hidden />
                    </div>
                    <article className="rounded-xl border border-border/80 bg-card/40 p-5 ring-1 ring-foreground/5 sm:p-6">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="font-heading text-lg font-semibold text-foreground">
                            {job.role}
                          </h3>
                          <p className="text-muted-foreground">{job.company}</p>
                        </div>
                        <p className="shrink-0 font-mono text-xs text-cyan-500/90 uppercase sm:text-sm">
                          {job.period}
                        </p>
                      </div>
                      <Separator className="my-4" />
                      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {job.summary}
                      </p>
                    </article>
                  </li>
                </FadeInItem>
              )
            })}
          </ol>
        </FadeInStagger>
      </div>
    </section>
  )
}
