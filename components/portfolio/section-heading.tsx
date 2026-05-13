import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl space-y-3", className)}>
      <p className="font-mono text-xs tracking-wide text-cyan-400/90 uppercase">
        <span className="text-muted-foreground">$</span> {eyebrow}
      </p>
      <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="text-muted-foreground text-base leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  )
}
