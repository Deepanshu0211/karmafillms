"use client"

import { motion } from "framer-motion"

const projects = [
  { title: "Project Alpha", description: "A cutting-edge web application for data visualization" },
  { title: "Project Beta", description: "An innovative mobile app for fitness tracking" },
  { title: "Project Gamma", description: "A sleek e-commerce platform for luxury goods" },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
}

export default function Work() {
  return (
    <div className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <motion.h1
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        style={{ fontSize: "3rem", marginBottom: "2rem", textAlign: "center" }}
      >
        Our Work
      </motion.h1>
      <motion.div
        initial="initial"
        animate="animate"
        variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            style={{ background: "var(--secondary)", padding: "2rem", borderRadius: "8px" }}
          >
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{project.title}</h2>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

