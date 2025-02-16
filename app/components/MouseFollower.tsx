"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const springConfig = { damping: 25, stiffness: 120 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)
  const scale = useSpring(1, springConfig)

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    const handleMouseOver = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  useEffect(() => {
    x.set(mousePosition.x - 20)
    y.set(mousePosition.y - 20)
    scale.set(isHovering ? 1.5 : 1)
  }, [mousePosition, isHovering, x, y, scale])

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          x,
          y,
          scale,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "2px solid rgba(255, 255, 0.8)",
          mixBlendMode: "difference",
        }}
      />
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          x,
          y,
          scale: scale.get() * 0.4,
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "white",
          mixBlendMode: "difference",
        }}
      />
    </>
  )
}

