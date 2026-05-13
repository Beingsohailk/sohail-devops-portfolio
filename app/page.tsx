import { Navbar } from "@/components/portfolio/navbar"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { CertificationsSection } from "@/components/portfolio/certifications-section"
import { AchievementsSection } from "@/components/portfolio/achievements-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { SiteFooter } from "@/components/portfolio/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
