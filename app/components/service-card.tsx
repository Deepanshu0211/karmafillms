"use client"

import { motion } from "framer-motion"
import { VideoIcon, InstagramIcon, FilmIcon, PaletteIcon, BriefcaseIcon, SlidersIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  delay?: number
}

export default function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  // Map icon string to component
  const IconComponent = () => {
    switch (icon) {
      case "VideoIcon":
        return <VideoIcon className="h-10 w-10 text-primary" />
      case "InstagramIcon":
        return <InstagramIcon className="h-10 w-10 text-primary" />
      case "FilmIcon":
        return <FilmIcon className="h-10 w-10 text-primary" />
      case "PaletteIcon":
        return <PaletteIcon className="h-10 w-10 text-primary" />
      case "BriefcaseIcon":
        return <BriefcaseIcon className="h-10 w-10 text-primary" />
      case "SlidersIcon":
        return <SlidersIcon className="h-10 w-10 text-primary" />
      default:
        return <VideoIcon className="h-10 w-10 text-primary" />
    }
  }

  return (
    <motion.div
      className="card-box p-6 hover:border-primary/20 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="mb-4 p-3 bg-primary/5 rounded-xl w-fit glass">
        <IconComponent />
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-body">{description}</p>
    </motion.div>
  )
}

