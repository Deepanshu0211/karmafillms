"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

import ProjectCategory from "../components/project-category"
import AnimatedText from "../components/animated-text"
import PageTransition from "../components/page-transition"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { categories } from "../data/categories"

export default function ProjectsPage() {
  const router = useRouter()

  return (
    <PageTransition>
      <Navbar />
      <main className="flex min-h-screen flex-col py-24 px-4">
        <div className="container mx-auto">
          <div className="card-box px-1 p-8 mb-10 text-center">
            <AnimatedText
              text="Our&nbsp;Projects"
              className="text-3xl md:text-5xl font-bold mb-4"
              direction="down"
            />
            <AnimatedText
              text="Explore our work across different categories"
              className="text-xl text-body"
              direction="up"
              delay={0.2}
            />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {categories.map((category, index) => (
              <ProjectCategory
                key={category.id}
                title={category.title}
                
                image={category.image}
                onClick={() => router.push(`/projects/${category.id}`)}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>

        <Footer />
      </main>
    </PageTransition>
  )
}
