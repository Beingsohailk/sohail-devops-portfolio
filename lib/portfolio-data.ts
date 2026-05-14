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
  resumePdfPath: "/resume.pdf",
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
  "I design and operate reliable cloud platforms with a focus on automation, observability, and secure delivery pipelines.",
  "I collaborate closely with engineering stakeholders to shorten feedback loops and standardize infrastructure as code.",
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
    items: ["Jenkins", "GitHub Actions", "GitLab CI/CD", "ArgoCD"],
  },
  {
    title: "Observability",
    icon: LineChart,
    items: ["Prometheus", "Grafana", "Dynatrace"],
  },
  {
    title: "Languages & Tooling",
    icon: GitBranch,
    items: ["Python", "Shell", "Git", "GitHub"],
  },
]

export const experience = [
  {
    company: "T-Machine Software Solutions",
    role: "DevOps Engineer",
    period: "Jan 2023 – May 2025",
    summary:
      "Owned CI/CD workflows, cloud automation, and production operations.",
    icon: Cloud,
  },
  {
    company: "Zensar Technologies",
    role: "DevOps Intern",
    period: "Jan 2022 – May 2022",
    summary:
      "Supported pipeline automation and enterprise delivery practices.",
    icon: BarChart3,
  },
]

export const certifications = [
  { name: "AWS Cloud Practitioner", status: "In Progress" },
  { name: "Docker Essentials" },
  { name: "GitOps with ArgoCD" },
]

export const achievements = [
  {
    title: "Faster Deployments",
    detail: "Reduced deployment time by 40%",
    icon: Workflow,
  },
  {
    title: "High Availability",
    detail: "Maintained >99% uptime",
    icon: Shield,
  },
  {
    title: "Release Efficiency",
    detail: "Optimized release cycle efficiency",
    icon: Award,
  },
]

export const projects = [
  {
    title: "Cloud-Native DevOps Pipeline on AWS EKS",
    description:
      "Built a cloud-native DevOps workflow using AWS EKS, Terraform, Docker, Kubernetes, and GitHub Actions CI/CD.",
    image: "/projects/eks-cicd.jpg",
    highlights: [
      "AWS EKS",
      "Terraform",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
    ],
    href: "https://github.com/Beingsohailk",
  },

  {
    title: "Scalable & Secure Web Application on AWS",
    description:
      "Designed and deployed a scalable Nginx-based web application using ALB, Auto Scaling, NAT Gateway, and AWS WAF.",
    image: "/projects/aws-autoscaling.jpeg",
    highlights: [
      "VPC",
      "EC2",
      "ALB",
      "Auto Scaling",
      "AWS WAF",
    ],
    href: "https://github.com/Beingsohailk",
  },

  {
    title: "Microservices Monitoring with OpenTelemetry",
    description:
      "Built distributed monitoring using OpenTelemetry and Docker Compose.",
    image: "/projects/opentelemetry.jpeg",
    highlights: [
      "Docker Compose",
      "OpenTelemetry",
      "Monitoring",
      "Tracing",
    ],
    href: "https://github.com/Beingsohailk",
  },

  {
    title: "Automated Code Quality Analysis with SonarQube",
    description:
      "Implemented automated code quality analysis using SonarQube.",
    image: "/projects/sonarqube.jpeg",
    highlights: ["SonarQube", "Docker", "Maven", "Ubuntu"],
    href: "https://github.com/Beingsohailk",
  },
]