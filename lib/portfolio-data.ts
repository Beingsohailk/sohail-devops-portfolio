import type { LucideIcon } from "lucide-react"
import {
  Award,
  BarChart3,
  Cloud,
  Container,
  GitBranch,
  LineChart,
  Shield,
  Workflow,
} from "lucide-react"

export const profile = {
  name: "Sohail Bagali",
  role: "DevOps & Cloud Engineer",
  tagline:
    "Building scalable cloud infrastructure, CI/CD pipelines, containerized deployments, and automation workflows.",
  email: "sohailcloudy@gmail.com",
  linkedIn: "https://www.linkedin.com/in/sohail-bagali",
  github: "https://github.com/Beingsohailk",
  /** Public path to PDF — place your file at `public/resume.pdf` (or update this path). */
  resumePdfPath: "/profile.png",
  resumeDownloadName: "Sohail-Bagali-Resume.pdf",
  profileImagePath: "/profile.png",
} as const

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certs" },
  { href: "#achievements", label: "Impact" },
  { href: "#contact", label: "Contact" },
] as const

export const aboutParagraphs = [
  "I design and operate reliable cloud platforms with a focus on automation, observability, and secure delivery pipelines. My work spans AWS foundations, container orchestration, and GitOps-style deployments that teams can trust in production.",
  "I collaborate closely with engineering stakeholders to shorten feedback loops, standardize infrastructure as code, and keep systems measurable—from commit to production.",
] as const

export const skillGroups: {
  title: string
  icon: LucideIcon
  items: readonly string[]
}[] = [
  {
    title: "Cloud & AWS",
    icon: Cloud,
    items: ["EC2", "S3", "IAM", "VPC", "CloudWatch"],
  },
  {
    title: "Containers & Orchestration",
    icon: Container,
    items: ["Docker", "Kubernetes (EKS)"],
  },
  {
    title: "Infrastructure as Code",
    icon: Shield,
    items: ["Terraform", "CloudFormation"],
  },
  {
    title: "CI/CD & GitOps",
    icon: Workflow,
    items: [
      "Jenkins",
      "GitHub Actions",
      "GitLab CI/CD",
      "ArgoCD",
    ],
  },
  {
    title: "Observability",
    icon: LineChart,
    items: ["Prometheus", "Grafana", "Dynatrace"],
  },
  {
    title: "Languages & tooling",
    icon: GitBranch,
    items: ["Python", "Shell", "Git", "GitHub"],
  },
] as const

export const projects: {
  title: string
  description: string
  highlights: readonly string[]
  /** Shown as screenshot placeholder when no image yet */
  screenshotLabel?: string
  href?: string
}[] = [
  {
    title: "EKS platform & GitOps delivery",
    description:
      "Terraform-defined networking and workloads on Amazon EKS with ArgoCD for progressive rollouts and environment parity.",
    highlights: ["EKS", "ArgoCD", "Terraform", "IAM least-privilege"],
    screenshotLabel: "EKS · GitOps",
    href: profile.github,
  },
  {
    title: "CI/CD modernization",
    description:
      "Unified build and deploy pipelines across services with automated quality gates, artifact promotion, and rollback-safe releases.",
    highlights: ["GitHub Actions", "GitLab CI", "Jenkins", "Containers"],
    screenshotLabel: "Pipelines",
    href: profile.github,
  },
  {
    title: "Observability & SRE metrics",
    description:
      "Dashboards and alerting wired into Prometheus and Grafana with Dynatrace for deep-dive analysis and uptime reporting.",
    highlights: ["Prometheus", "Grafana", "Dynatrace", "SLO mindset"],
    screenshotLabel: "Dashboards",
    href: profile.github,
  },
] as const

export const experience: {
  company: string
  role: string
  period: string
  summary: string
  icon: LucideIcon
}[] = [
  {
    company: "T-Machine Software Solutions",
    role: "DevOps Engineer",
    period: "Jan 2023 – May 2025",
    summary:
      "Owned CI/CD workflows, cloud automation, and production operations—improving release cadence and platform stability.",
    icon: Cloud,
  },
  {
    company: "Zensar Technologies",
    role: "DevOps Intern",
    period: "Jan 2022 – May 2022",
    summary:
      "Supported pipeline automation, documentation, and hands-on exposure to enterprise delivery practices and tooling.",
    icon: BarChart3,
  },
] as const

export const certifications: {
  name: string
  status?: string
}[] = [
  { name: "AWS Cloud Practitioner", status: "In progress" },
  { name: "Docker Essentials" },
  { name: "GitOps with ArgoCD" },
] as const

export const achievements: {
  title: string
  detail: string
  icon: LucideIcon
}[] = [
  {
    title: "Faster deployments",
    detail: "Reduced deployment time by 40%",
    icon: Workflow,
  },
  {
    title: "High availability",
    detail: "Maintained >99% uptime",
    icon: Shield,
  },
  {
    title: "Release efficiency",
    detail: "Optimized release cycle efficiency",
    icon: Award,
  },
] as const
