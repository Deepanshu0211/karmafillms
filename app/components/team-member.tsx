"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram, Twitter, Linkedin } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  delay?: number
}

export default function TeamMember({ name, role, image, delay = 0 }: TeamMemberProps) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="relative overflow-hidden rounded-xl mb-4 card-box p-2">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={400}
            height={400}
            className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white hover:text-primary transition-colors glass p-2 rounded-full"
                data-cursor="link"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors glass p-2 rounded-full"
                data-cursor="link"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors glass p-2 rounded-full"
                data-cursor="link"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center card-box py-3 px-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </motion.div>
  )
}

