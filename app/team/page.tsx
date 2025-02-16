"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const team = [
  {
    name: "Alex Chen",
    role: "Creative Director",
    bio: "With over 10 years of experience in digital design and brand strategy.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sarah Miller",
    role: "Lead Designer",
    bio: "Specializing in user interface design and systems.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "James Wilson",
    role: "Technical Lead",
    bio: "Expert in modern web technologies and application architecture.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Emma Davis",
    role: "Strategy Director",
    bio: "Focused on helping brands develop their digital presence.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function Team() {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-8">Our Team</h1>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl">
            Meet the creative minds behind our successful projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg mb-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">{member.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

