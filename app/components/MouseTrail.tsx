"use client"
import "../styles/globals.css"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function MouseTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([])

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  useEffect(() => {
    setTrail((prevTrail) => [...prevTrail, mousePosition].slice(-20))
  }, [mousePosition])

  return (
    <>
      {trail.map((position, index) => (
        <motion.div
          key={index}
          className="mouse-trail"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1 - index * 0.05,
            scale: 1 - index * 0.05,
            x: position.x,
            y: position.y,
          }}
          transition={{ duration: 0.5 }}
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: `hsl(${index * 10}, 100%, 50%)`,
            position: "fixed",
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  )
}

