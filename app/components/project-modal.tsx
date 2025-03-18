"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "./ui/button"

interface ProjectModalProps {
  content: {
    title: string
    description: string
    projects: {
      title: string
      image: string
    }[]
  }
  onClose: () => void
}

export default function ProjectModal({ content, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  // Close modal when escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="glass w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative p-8">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 h-10 w-10 flex items-center justify-center rounded-full glass z-50"
            style={{ lineHeight: 1 }} // Ensures perfect centering
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            data-cursor="button"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>


            <div className="mb-10 card-box p-6">
              <h2 className="text-2xl font-bold mb-4">{content.title}</h2>
              <p className="text-muted-foreground">{content.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group card-box overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

