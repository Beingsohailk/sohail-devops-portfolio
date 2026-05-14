"use client"

import Image from "next/image"
import Link from "next/link"

type Props = {
  title: string
  description: string
  highlights: readonly string[]
  image?: string
  href?: string
  className?: string
}

export function ProjectCard({
  title,
  description,
  highlights,
  image,
  href,
  className,
}: Props) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-cyan-500/20 bg-black/40 ${className ?? ""}`}
    >
      <div className="relative h-64 w-full">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-zinc-500">
            No Image
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold">
          {title}
        </h3>

        <p className="mb-4 text-zinc-400">
          {description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {highlights.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-500/30 px-3 py-1 text-xs text-cyan-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {href && (
          <Link
            href={href}
            target="_blank"
            className="text-cyan-400 hover:underline"
          >
            View Project →
          </Link>
        )}
      </div>
    </div>
  )
}