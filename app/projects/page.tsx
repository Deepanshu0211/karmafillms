"use client"

import { lazy, useState } from "react"
import { motion } from "framer-motion"
import ProjectCategory from "../components/project-category"

import AnimatedText from "../components/animated-text"
import PageTransition from "../components/page-transition"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

// Project categories and their content
const ProjectModal = lazy(() => import("../components/project-modal"));
//changed


const categories = [
  {
    id: "thumbnails",
    title: "Thumbnails",
    description: "Eye-catching thumbnails that drive engagement",
    image: "/assets/thumbnails.png",
    content: {
      title: "Thumbnail Design",
      description:
        "Our thumbnail designs are strategically crafted to maximize click-through rates while maintaining brand consistency. We combine psychology, design principles, and platform-specific optimization to create thumbnails that stand out in crowded feeds.",
      projects: [
        { title: "Tech Review Series", image: "/assets/t1.jpg" },
        { title: "Travel Vlog Collection", image: "/assets/t2.jpg" },
        { title: "Prime Roast", image: "/assets/t3.png" },
        { title: "r17", image: "/assets/r17.png" },
        { title: "r17", image: "/assets/raghav-s.png" },
        { title: "r17", image: "/assets/ritvik7.png" },
      ],
    },
  },
  {
    id: "shortform",
    title: "Short Form",
    description: "Engaging short-form content for social platforms",
    image: "/assets/shortform.png",
    content: {
      title: "Short Form Content",
      description:
        "We specialize in creating short-form videos that capture attention in seconds. Our team understands the unique requirements of platforms like TikTok, Instagram Reels, and YouTube Shorts to deliver content that resonates with your audience and drives engagement.",
      projects: [
        { title: "Product Launch Teasers", image: "/assets/s1.png", video: "/video/r1.mp4" },
        { title: "Brand Story Series", image: "/assets/s2.png", video: "/video/r2.mp4"},
        { title: "Educational Shorts", image: "/assets/s3.png", video: "/video/r3.mp4" },
      ],
    },
  },
  {
    id: "longform",
    title: "Long Form",
    description: "Immersive long-form video content and documentaries",
    image: "/assets/longform.png",
    content: {
      title: "Long Form Production",
      description:
        "Our long-form content tells deeper stories with cinematic quality. From documentaries to in-depth tutorials, we handle the entire production process from concept development to final delivery, ensuring a compelling narrative that keeps viewers engaged.",
      projects: [
        { title: "Corporate Documentary", image: "/assets/l1.png", video: "https://www.youtube.com/embed/OwEh6SjX_1U" },
        { title: "Product Feature Film", image: "/assets/l2.png", video: "https://www.youtube.com/embed/nzUNuCwFKB4" },
        { title: "Interview Series", image: "/assets/l3.png", video: "https://www.youtube.com/embed/iHH7eRWF1nM" },
      ],
    },
  },
  {
    id: "posters",
    title: "Posters",
    description: "Striking poster designs for marketing campaigns",
    image: "/assets/posters.png",
    content: {
      title: "Poster Design",
      description:
        "Our poster designs combine visual impact with clear messaging to effectively communicate your brand's value. Whether for digital campaigns or physical displays, we create posters that capture attention and drive action.",
      projects: [
        { title: "Baby john poster", image: "/assets/Baby-john-poster.png?width=100&height=200" },
        { title: "pushpa-Recovered", image: "/assets/pushpa-Recovered.png" }
      
      ],
    },
  },
  {
    id: "3d",
    title: "3D Works",
    description: "Creative design solutions for various media",
    image: "/assets/3d.png",
    content: {
      title: "Visual Design",
      description:
        "Our design team creates visually stunning assets that enhance your brand's presence across all touchpoints. From social media graphics to UI/UX design, we deliver cohesive visual solutions that align with your brand identity.",
      projects: [
        { title: "Marketing Collateral", image: "/assets/a_Dark_dining_room_with_black_marble_table_and_rich_wood_finishes.webp" },
        { title: "Website Visual Design2", image: "/assets/IMG-20240804-WA0039.jpg" },
        { title: "Social Media Kit", image: "/assets/1.png" },
        { title: "Website Visual Design", image: "/assets/4-1.png" },
        { title: "Website Visual Design2", image: "/assets/office-sofa-1.jpg" },
        { title: "Website Visual Design2", image: "/assets/untitled.png" },
      ],
    },
  },
  {
    id: "brandguidelines",
    title: "Brand Guidelines",
    description: "Comprehensive brand identity systems",
    image: "/assets/brand-guidelines.png",
    content: {
      title: "Brand Guidelines",
      description:
        "We develop comprehensive brand guidelines that ensure consistency across all platforms and touchpoints. Our brand systems include logo usage, typography, color palettes, imagery style, and voice guidelines to maintain a cohesive brand experience.",
      projects: [
        { title: "Startup Brand System", image: "/assets/pdf1.png", file: "/assets/Acrements-Brand-Guideline.pdf" },
        { title: "Brand Refresh Guidelines", image: "/placeholder.svg?height=400&width=600", file:"/assets/branding-tactics-project.pdf" },
        { title: "Multi-Platform Brand Guide", image: "/placeholder.svg?height=400&width=600", file:"/assets/ivory-nepal-pitch-deck1.pdf" },
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
          <div className="card-box px-1 p-8 mb-10 text-center">
            <AnimatedText text="Our&nbsp;Projects" className="text-3xl md:text-5xl font-bold mb-4" direction="down" />
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
                onClick={() => openModal(category)}
                delay={index * 0.1} description={""}              />
            ))}
          </motion.div>
        </div>

        {selectedCategory && <ProjectModal content={selectedCategory.content} onClose={closeModal} />}
        <Footer />
      </main>
    </PageTransition>
  )
}

