"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import type React from "react"

const projects = [
  {
    title: "Digital Platform",
    description: "A comprehensive digital platform for enterprise solutions",
    image: "/placeholder.svg?height=600&width=800",
    category: "Development",
    link: "https://example.com/digital-platform",
  },
  {
    title: "Brand Identity",
    description: "Complete brand redesign for a tech startup",
    image: "/placeholder.svg?height=600&width=800",
    category: "Branding",
    link: "https://example.com/brand-identity",
  },
  {
    title: "E-commerce Experience",
    description: "Modern e-commerce platform with unique user experience",
    image: "/placeholder.svg?height=600&width=800",
    category: "Design",
    link: "https://example.com/ecommerce-experience",
  },
]

function AnimatedText({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Projects() {
  return (
    <main className="section">
      <div className="container">
        <AnimatedText className="section-title">Our Projects</AnimatedText>
        <AnimatedText className="section-subtitle">
        &nbsp; 
        A collection of our recent work across design, development, and branding.
        </AnimatedText>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="project-card"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="project-image"
                />
                <div className="project-content">
                  <AnimatedText className="project-title">{project.title}</AnimatedText>
                  <AnimatedText className="project-description">{project.description}</AnimatedText>
                  <AnimatedText className="project-category">{project.category}</AnimatedText>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
