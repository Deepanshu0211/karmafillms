"use client"

import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
}

export default function AnimatedText({ text, className = "", direction = "up", delay = 0 }: AnimatedTextProps) {
  // Set initial and animate values based on direction
  const getAnimationProps = () => {
    switch (direction) {
      case "up":
        return { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 } }
      case "down":
        return { initial: { y: -20, opacity: 0 }, animate: { y: 0, opacity: 1 } }
      case "left":
        return { initial: { x: 20, opacity: 0 }, animate: { x: 0, opacity: 1 } }
      case "right":
        return { initial: { x: -20, opacity: 0 }, animate: { x: 0, opacity: 1 } }
      default:
        return { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 } }
    }
  }

  const { initial, animate } = getAnimationProps()

  return (
    <motion.p
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {text}
    </motion.p>
  )
}

