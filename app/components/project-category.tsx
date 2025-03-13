"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface ProjectCategoryProps {
  title: string
  description: string
  image: string
  onClick: () => void
  delay?: number
}

export default function ProjectCategory({ title, description, image, onClick, delay = 0 }: ProjectCategoryProps) {
  return (
    <motion.div
      className="group cursor-pointer overflow-hidden rounded-xl card-box relative"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
      data-cursor="button"
    >
      <div className="relative h-64 overflow-hidden rounded-t-xl">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-white/80 mb-4">{description}</p>
        <div className="flex items-center text-primary text-sm font-medium glass px-4 py-2 rounded-full w-fit">
          <span>View Projects</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  )
}

