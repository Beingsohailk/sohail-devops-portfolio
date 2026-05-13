"use client"

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

const softEase = [0.22, 1, 0.36, 1] as const

export function FadeIn({
  className,
  children,
  delay = 0,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: reduce ? 0 : 0.52, delay, ease: softEase }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeInStagger({
  className,
  children,
  stagger = 0.07,
}: {
  className?: string
  children: React.ReactNode
  stagger?: number
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-56px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduce ? 0 : stagger,
            delayChildren: reduce ? 0 : 0.06,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeInItem({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      variants={{
        hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
        show: {
          opacity: 1,
          y: 0,
          transition: reduce
            ? { duration: 0 }
            : { duration: 0.48, ease: softEase },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
