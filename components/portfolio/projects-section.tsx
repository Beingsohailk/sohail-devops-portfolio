import { SectionHeading } from "@/components/portfolio/section-heading"
import { FadeIn } from "@/components/portfolio/motion"
import { ProjectCard } from "@/components/portfolio/project-card"
import { projects } from "@/lib/portfolio-data"

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-b border-border/60 bg-muted/15 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-10">
        <FadeIn>
          <SectionHeading
            eyebrow="helm list"
            title="Selected projects"
            description="Representative themes from my DevOps and cloud work—platform design, pipelines, and observability."
          />
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              highlights={project.highlights}
              screenshotLabel={project.screenshotLabel}
              href={project.href}
              className={
                index === projects.length - 1 && projects.length % 2 === 1
                  ? "lg:col-span-2 lg:mx-auto lg:w-full lg:max-w-4xl"
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
