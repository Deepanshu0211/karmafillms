"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

function extractYouTubeID(url: string): string {
    const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : "";
  }
  

export default function VideoModal({ videoUrl, onClose }: VideoModalProps) {
  // Check if the videoUrl is a YouTube link
  const isYouTube = videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");

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
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button */}
        <Button variant="ghost" size="icon"  className="absolute z-50 top-2 right-2 bg-white dark:bg-black text-black dark:text-white rounded-full p-2 shadow-md"  onClick={onClose}
>
          <X className="h-6 w-6" />
        </Button>

        {/* Render Video Based on Type */}
        {isYouTube ? (
          <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${extractYouTubeID(videoUrl)}?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0&disablekb=1`}
          frameBorder="0"
         
          className="rounded-lg"
        ></iframe>
        ) : (
          <video
            controls
            autoPlay
            className="w-full max-h-[70vh] rounded-lg"
            controlsList="nodownload"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()} // Disable right-click
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </motion.div>
    </motion.div>
  );
}
