"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "./ui/button"
import ImageModal from "./ImageModal" // Import ImageModal

interface Project {
  title: string
  image?: string
  file?: string
}

interface CategoryContent {
  title: string
  description: string
  projects: Project[]
}

interface ProjectModalProps {
  content: CategoryContent
  onClose: () => void
}

export default function ProjectModal({ content, onClose }: ProjectModalProps) {
  const [selectedFile, setSelectedFile] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedFile) {
          setSelectedFile(null) // Close image modal first
        } else {
          onClose()
        }
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [selectedFile, onClose])

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
              onClick={(e) => {
                e.stopPropagation()
                onClose()
              }}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Modal Content */}
            <div className="mb-10 card-box p-6">
              <h2 className="text-2xl font-bold mb-4">{content.title}</h2>
              <p className="text-muted-foreground">{content.description}</p>
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
              {content.projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group card-box flex flex-col overflow-hidden rounded-xl shadow-lg transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
                  onClick={() => setSelectedFile(project.file || project.image || "")}
                >
                  {/* Image or PDF Thumbnail */}
                  <div className="relative w-full h-[180px] overflow-hidden rounded-t-xl">
                    {project.file ? (
                      <iframe
                        src={`${project.file}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-full h-full object-cover"
                        title={project.title}
                      />
                    ) : (
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                  </div>

                  {/* Project Title */}
                  <div className="h-12 flex items-center px-4 py-2">
                    <h3 className="text-sm font-medium truncate">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Image/PDF Modal */}
      {selectedFile && <ImageModal fileUrl={selectedFile} onClose={() => setSelectedFile(null)} />}
    </AnimatePresence>
  )
}
