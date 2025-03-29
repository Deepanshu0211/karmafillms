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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative bg-white p-4 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Display Image */}
        {!(isVideo || isPdf) && (
          <img src={fileUrl} alt="Preview" className="w-full max-h-[80vh] object-contain rounded-lg" />
        )}

        {/* Display Video */}
        {isVideo && (
          <video controls className="w-full max-h-[80vh]">
            <source src={fileUrl} />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Display PDF */}
        {isPdf && (
          <iframe
            src={fileUrl}
            className="w-full h-[80vh]"
            title="PDF Viewer"
          />
        )}
      </motion.div>
    </motion.div>
  )
}
