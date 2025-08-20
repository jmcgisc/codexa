// src/components/animations/Reveal.tsx
'use client'

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
}

export default function Reveal({ children, direction = "up", delay = 0 }: RevealProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // solo se ejecuta 1 vez
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
