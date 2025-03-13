"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function CustomCursor() {
  const { theme } = useTheme() // 🔥 Get current theme (light/dark)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    if (typeof window === "undefined") return

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    if (!isMobile) {
      const onMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY })
        setDotPosition({ x: e.clientX, y: e.clientY })
      }

      const onMouseEnter = () => setIsVisible(true)
      const onMouseLeave = () => setIsVisible(false)

      const onHoverEnter = () => setIsHovering(true)
      const onHoverLeave = () => setIsHovering(false)

      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)

      const interactiveElements = document.querySelectorAll("a, button, [data-cursor='button'], [data-cursor='link'], [data-cursor='input']")
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", onHoverEnter)
        el.addEventListener("mouseleave", onHoverLeave)
      })

      return () => {
        window.removeEventListener("resize", checkMobile)
        document.removeEventListener("mousemove", onMouseMove)
        document.removeEventListener("mouseenter", onMouseEnter)
        document.removeEventListener("mouseleave", onMouseLeave)

        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", onHoverEnter)
          el.removeEventListener("mouseleave", onHoverLeave)
        })
      }
    }

    return () => window.removeEventListener("resize", checkMobile)
  }, [isMobile])

  if (isMobile) return null

  // 🔥 Auto-invert based on theme
  const cursorColor = theme === "light" ? "black" : "white"

  return (
    <>
      <motion.div
        className={`custom-cursor ${isHovering ? "hover" : ""}`}
        style={{
          backgroundColor: cursorColor,
          mixBlendMode: "difference", // 🔥 Always inverted
        }}
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          opacity: isVisible ? 0.5 : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
      <motion.div
        className="custom-cursor-dot"
        style={{
          backgroundColor: cursorColor,
          mixBlendMode: "difference",
        }}
        animate={{
          x: dotPosition.x - 4,
          y: dotPosition.y - 4,
          opacity: isVisible ? 0.8 : 0,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 400,
          mass: 0.3,
        }}
      />
    </>
  )
}

