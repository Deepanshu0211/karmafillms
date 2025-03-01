"use client"

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import type React from "react";

const projects = [
  {
    title: "Digital Platform",
    description: "A comprehensive digital platform for enterprise solutions",
    image: "/placeholder.svg?height=600&width=800",
    category: "Thumbnail",
    link: "https://example.com/digital-platform",
  },
  {
    title: "Brand Identity",
    description: "Complete brand redesign for a tech startup",
    image: "/placeholder.svg?height=600&width=800",
    category: "Poster",
    link: "https://example.com/brand-identity",
  },
  {
    title: "E-commerce Experience",
    description: "Modern e-commerce platform with unique user experience",
    image: "/placeholder.svg?height=600&width=800",
    category: "Brand Guidelines",
    link: "https://example.com/ecommerce-experience",
  },
  {
    title: "E-commerce Experience",
    description: "Modern e-commerce platform with unique user experience",
    image: "/placeholder.svg?height=600&width=800",
    category: "Long Form",
    link: "https://example.com/ecommerce-experience",
  },
  {
    title: "E-commerce Experience",
    description: "Modern e-commerce platform with unique user experience",
    image: "/placeholder.svg?height=600&width=800",
    category: "Short Form",
    link: "https://example.com/ecommerce-experience",
  },
  {
    title: "E-commerce Experience",
    description: "Modern e-commerce platform with unique user experience",
    image: "/placeholder.svg?height=600&width=800",
    category: "Design",
    link: "https://example.com/ecommerce-experience",
  },
];

const categories = [...new Set(projects.map((p) => p.category))];

function AnimatedText({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

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
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <main className="section">
      <div className="container">
        <AnimatedText className="section-title">Our Projects</AnimatedText>
        <AnimatedText className="section-subtitle">
          A collection of our recent work across design, development, and branding.
        </AnimatedText>

        <div className="projects-grid">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="category-card"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {selectedCategory && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="popup-overlay"
          onClick={() => setSelectedCategory(null)}
        >
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedCategory(null)} className="close-button">×</button>
            <h2 className="popup-title">{selectedCategory} Projects</h2>
            <div className="projects-list">
              {projects.filter((p) => p.category === selectedCategory).map((project) => (
                <div key={project.title} className="popup-project-card">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="popup-project-image"
                  />
                  <div className="popup-project-content">
                    <AnimatedText className="popup-project-title">{project.title}</AnimatedText>
                    <AnimatedText className="popup-project-description">{project.description}</AnimatedText>
                    {/* <a href={project.link} target="_blank" rel="noopener noreferrer" className="popup-project-link">View Project</a> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </main>
  );
}
