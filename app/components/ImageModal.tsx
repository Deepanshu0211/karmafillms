"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "./ui/button"

interface ImageModalProps {
  fileUrl: string
  onClose: () => void
}

export default function ImageModal({ fileUrl, onClose }: ImageModalProps) {
  const isVideo = fileUrl?.match(/\.(mp4|mov|avi)$/i)
  const isPdf = fileUrl?.match(/\.pdf$/i)

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative p-6 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto bg-white/20 dark:bg-black/30 backdrop-blur-md border border-white/30 dark:border-gray-800 text-black dark:text-white"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 dark:text-white text-black"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Display Image */}
        {!(isVideo || isPdf) && (
          <img
            src={fileUrl}
            alt="Preview"
            className="w-full max-h-[80vh] object-contain rounded-lg"
          />
        )}

        {/* Display Video */}
        {isVideo && (
          <video controls className="w-full max-h-[80vh] rounded-lg">
            <source src={fileUrl} />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Display PDF without toolbar/download */}
        {isPdf && (
          <iframe
            src={`${fileUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-[80vh] rounded-lg border border-white/30 dark:border-gray-800"
            title="PDF Viewer"
          />
        )}
      </motion.div>
    </motion.div>
  )
}
