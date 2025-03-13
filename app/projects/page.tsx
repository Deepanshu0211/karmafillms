"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProjectCategory from "../components/project-category"
import ProjectModal from "../components/project-modal"
import AnimatedText from "../components/animated-text"
import PageTransition from "../components/page-transition"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// Project categories and their content
const categories = [
  {
    id: "thumbnails",
    title: "Thumbnails",
    description: "Eye-catching thumbnails that drive engagement",
    image: "/placeholder.svg?height=600&width=800",
    content: {
      title: "Thumbnail Design",
      description:
        "Our thumbnail designs are strategically crafted to maximize click-through rates while maintaining brand consistency. We combine psychology, design principles, and platform-specific optimization to create thumbnails that stand out in crowded feeds.",
      projects: [
        { title: "Tech Review Series", image: "/placeholder.svg?height=400&width=600" },
        { title: "Travel Vlog Collection", image: "/placeholder.svg?height=400&width=600" },
        { title: "Cooking Tutorial Thumbnails", image: "/placeholder.svg?height=400&width=600" },
      ],
    },
  },
  {
    id: "shortform",
    title: "Short Form",
    description: "Engaging short-form content for social platforms",
    image: "/placeholder.svg?height=600&width=800",
    content: {
      title: "Short Form Content",
      description:
        "We specialize in creating short-form videos that capture attention in seconds. Our team understands the unique requirements of platforms like TikTok, Instagram Reels, and YouTube Shorts to deliver content that resonates with your audience and drives engagement.",
      projects: [
        { title: "Product Launch Teasers", image: "/placeholder.svg?height=400&width=600" },
        { title: "Brand Story Series", image: "/placeholder.svg?height=400&width=600" },
        { title: "Educational Shorts", image: "/placeholder.svg?height=400&width=600" },
      ],
    },
  },
  {
    id: "longform",
    title: "Long Form",
    description: "Immersive long-form video content and documentaries",
    image: "/placeholder.svg?height=600&width=800",
    content: {
      title: "Long Form Production",
      description:
        "Our long-form content tells deeper stories with cinematic quality. From documentaries to in-depth tutorials, we handle the entire production process from concept development to final delivery, ensuring a compelling narrative that keeps viewers engaged.",
      projects: [
        { title: "Corporate Documentary", image: "/placeholder.svg?height=400&width=600" },
        { title: "Product Feature Film", image: "/placeholder.svg?height=400&width=600" },
        { title: "Interview Series", image: "/placeholder.svg?height=400&width=600" },
      ],
    },
  },
  {
    id: "posters",
    title: "Posters",
    description: "Striking poster designs for marketing campaigns",
    image: "/placeholder.svg?height=600&width=800",
    content: {
      title: "Poster Design",
      description:
        "Our poster designs combine visual impact with clear messaging to effectively communicate your brand's value. Whether for digital campaigns or physical displays, we create posters that capture attention and drive action.",
      projects: [
        { title: "Event Promotion Series", image: "/placeholder.svg?height=400&width=600" },
        { title: "Product Launch Campaign", image: "/placeholder.svg?height=400&width=600" },
        { title: "Brand Awareness Posters", image: "/placeholder.svg?height=400&width=600" },
      ],
    },
  },
  {
    id: "design",
    title: "Design",
    description: "Creative design solutions for various media",
    image: "/placeholder.svg?height=600&width=800",
    content: {
      title: "Visual Design",
      description:
        "Our design team creates visually stunning assets that enhance your brand's presence across all touchpoints. From social media graphics to UI/UX design, we deliver cohesive visual solutions that align with your brand identity.",
      projects: [
        { title: "Social Media Kit", image: "/placeholder.svg?height=400&width=600" },
        { title: "Website Visual Design", image: "/placeholder.svg?height=400&width=600" },
        { title: "Marketing Collateral", image: "/placeholder.svg?height=400&width=600" },
      ],
    },
  },
  {
    id: "brandguidelines",
    title: "Brand Guidelines",
    description: "Comprehensive brand identity systems",
    image: "/placeholder.svg?height=600&width=800",
    content: {
      title: "Brand Guidelines",
      description:
        "We develop comprehensive brand guidelines that ensure consistency across all platforms and touchpoints. Our brand systems include logo usage, typography, color palettes, imagery style, and voice guidelines to maintain a cohesive brand experience.",
      projects: [
        { title: "Startup Brand System", image: "/placeholder.svg?height=400&width=600" },
        { title: "Brand Refresh Guidelines", image: "/placeholder.svg?height=400&width=600" },
        { title: "Multi-Platform Brand Guide", image: "/placeholder.svg?height=400&width=600" },
      ],
    },
  },
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number] | null>(null)

interface Project {
    title: string
    image: string
}

interface CategoryContent {
    title: string
    description: string
    projects: Project[]
}

interface Category {
    id: string
    title: string
    description: string
    image: string
    content: CategoryContent
}

const openModal = (category: Category) => {
    setSelectedCategory(category)
}

  const closeModal = () => {
    setSelectedCategory(null)
  }

  return (
    <PageTransition>
        <Navbar />
      <main className="flex min-h-screen flex-col py-24 px-4">
        <div className="container">
          <div className="card-box p-8 mb-10 text-center">
            <AnimatedText text="Our Projects" className="text-3xl md:text-5xl font-bold mb-4" direction="down" />
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
                description={category.description}
                image={category.image}
                onClick={() => openModal(category)}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>

        {selectedCategory && <ProjectModal content={selectedCategory.content} onClose={closeModal} />}
        <Footer />
      </main>
    </PageTransition>
  )
}

