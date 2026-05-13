import Link from "next/link"
import { Code, Mail, Network } from "lucide-react"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { FadeIn } from "@/components/portfolio/motion"
import { profile } from "@/lib/portfolio-data"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-10">
        <FadeIn>
          <SectionHeading
            eyebrow="ping -c 1 recruiter"
            title="Contact"
            description="Reach out for full-time opportunities, contract platform work, or collaboration on cloud and delivery engineering."
          />
        </FadeIn>

        <FadeIn delay={0.06}>
          <Card className="overflow-hidden border-border/80 bg-card/50 ring-1 ring-foreground/5">
            <CardHeader>
              <CardTitle className="text-xl">Let&apos;s connect</CardTitle>
              <CardDescription>
                Prefer email for detailed threads; LinkedIn for quick intros;
                GitHub for code and activity.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="gap-2">
                <Link href={`mailto:${profile.email}`}>
                  <Mail className="size-4" aria-hidden />
                  {profile.email}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href={profile.linkedIn} target="_blank" rel="noreferrer">
                  <Network className="size-4" aria-hidden />
                  LinkedIn profile
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href={profile.github} target="_blank" rel="noreferrer">
                  <Code className="size-4" aria-hidden />
                  GitHub
                </Link>
              </Button>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  )
}
