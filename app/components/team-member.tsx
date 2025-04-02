"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  delay?: number
  className?: string
}

export default function TeamMember({ name, role, image, delay = 0 }: TeamMemberProps) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
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
         
        </div>
      </div>
      <div className="text-center card-box py-3 px-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </motion.div>
  )
}

