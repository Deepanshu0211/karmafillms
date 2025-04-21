"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "./ui/button"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

interface ImageModalProps {
  fileUrl: string
  onClose: () => void
}

const ModelViewer = ({ fileUrl }: { fileUrl: string }) => {
  const { scene } = useGLTF(fileUrl)
  return <primitive object={scene} scale={0.5} position={[0, 0, 0]} />
}

export default function ImageModal({ fileUrl, onClose }: ImageModalProps) {
  const is3DModel = fileUrl?.match(/\.(glb|gltf)$/i)

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

        {/* Display 3D Model */}
        {is3DModel && (
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} intensity={1} />
            <ModelViewer fileUrl={fileUrl} />
            <OrbitControls />
          </Canvas>
        )}
      </motion.div>
    </motion.div>
  )
}
