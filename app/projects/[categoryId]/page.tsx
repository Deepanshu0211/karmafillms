"use client"

import { categories } from "./../../data/categories"
import { notFound, useRouter } from "next/navigation"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import PageTransition from "../../components/page-transition"
import { motion } from "framer-motion"
import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { X, ChevronLeft } from "lucide-react"
import AnimatedText from "../../components/animated-text" // Assuming AnimatedText component is reused
import { useTheme } from "next-themes" // Import useTheme hook
import Image from "next/image"
import { useEffect } from "react"


interface Props {
  params: {
    categoryId: string
  }
}

export default function CategoryPage({ params }: Props) {
  const { theme } = useTheme() // Access current theme (light or dark)
  const category = categories.find((cat) => cat.id === params.categoryId)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const router = useRouter()

  if (!category) return notFound()

  return (
    <PageTransition>
      <Navbar />
      <main className={`min-h-screen py-24 px-4 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => router.push("/projects")}
            className="mb-0 inline-flex items-center gap-2 text-sm font-medium text-zinc-800 dark:text-white 
                bg-white/60 dark:bg-zinc-800/30 
                border border-white/40 dark:border-white/10 
                shadow-md dark:shadow-lg 
                backdrop-blur-md 
                px-4 py-2 
                rounded-lg 
                hover:bg-white/70 dark:hover:bg-zinc-800/40 
                transition "
          >
            <span className="block sm:hidden">
              <ChevronLeft className="w-5 h-5" />
            </span>
            <span className="hidden sm:inline">← Back to Projects</span>
          </button>

          {/* Centered Title Section */}
          <section className="relative flex flex-col gap-4 items-center justify-center min-h-[50vh] px-1 sm:px-1 lg:px-1 pt-8 sm:pt-10 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-b ${theme === "dark" ? "from-background/10 to-background/80" : "from-background/5 to-background/50"} backdrop-blur-sm z-0`}></div>
            <div className="container relative z-10 flex flex-col items-center text-center gap-10 max-w-6xl">
              <div className="card-box px-4 py-12 md:px-24 md:py-16">
                <AnimatedText text={category.content.title} className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight" direction="down" />
                <AnimatedText text={category.content.description} className="text-lg sm:text-xl md:text-2xl text-body max-w-3xl mt-8" direction="up" delay={0.3} />
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.content.projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative group bg-white/30 dark:bg-zinc-800/30 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover rounded-t-2xl ${'youtube' in project || 'video' in project || 'file' in project ? 'max-h-[350px]' : 'max-h-[250px]'}`}
                  />
                  {("video" in project || "file" in project || "youtube" in project) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                      <div className="w-14 h-14 rounded-full bg-white/30 dark:bg-white/10 border-2 border-white/60 dark:border-white/20 flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-zinc-900 dark:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6 4l12 6-12 6V4z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-zinc-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dialog Modal for Project Preview */}
        <Dialog open={!!selectedProject} onClose={() => setSelectedProject(null)} className="fixed z-50 inset-0">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-lg" aria-hidden="true" /> {/* Added blur */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white dark:bg-zinc-900 p-6 rounded-2xl max-w-3xl w-full relative transform transition-all duration-300 ease-in-out scale-105">
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300
                    ${theme === "light" 
                    ? "bg-white text-zinc-800 shadow-md hover:shadow-lg" 
                    : "bg-zinc-800 text-white shadow-md hover:shadow-lg"}`}
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-white">
                {selectedProject?.title}
              </h2>

              {/* Handling YouTube, Video, PDF, or Image Display */}
              {selectedProject?.youtube ? (
                <iframe
                  src={selectedProject.youtube}
                  className="w-full aspect-video rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : selectedProject?.video ? (
                <video
                  src={selectedProject.video}
                  controls
                  controlsList="nodownload"
                  className="w-full max-h-[500px] rounded-xl"
                />
              ) : selectedProject?.file ? (
                selectedProject.file.endsWith('.pdf') ? (
                  <iframe
                    src={`${selectedProject.file}#toolbar=0`}
                    className="w-full h-[500px] rounded-xl"
                  />
                ) : (
                  <Image
                    src={selectedProject.file}
                    alt={selectedProject?.title}
                    style={{ width: '100%', maxHeight: '500px', borderRadius: '1rem', objectFit: 'contain' }}
                  />
                )
              ) : (
                <img
                  src={selectedProject?.image}
                  alt={selectedProject?.title}
                  className="w-full max-h-[500px] rounded-xl object-contain"
                />
              )}
            </Dialog.Panel>
          </div>
        </Dialog>
      </main>
      <Footer />
    </PageTransition>
  )
}
