"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

export default function VideoModal({ videoUrl, onClose }: VideoModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative p-4 rounded-xl shadow-2xl max-w-xl w-full max-h-[80vh] overflow-hidden bg-white/20 dark:bg-black/30 backdrop-blur-md border border-white/30 dark:border-gray-800"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Button variant="ghost" size="icon" className="absolute z-50 top-2 right-2 dark:text-white text-black" onClick={onClose}>
          <X className="h-6 w-6" />
        </Button>

        <video controls autoPlay className="w-full max-h-[70vh] rounded-lg">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </motion.div>
  );
}
