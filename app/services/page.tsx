"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Digital Design",
    description: "We create beautiful, intuitive interfaces that engage users and drive results.",
    deliverables: ["UI/UX Design", "Design Systems", "Interactive Prototypes", "User Research"],
  },
  {
    title: "Development",
    description: "We build robust, scalable applications using modern technologies and best practices.",
    deliverables: ["Web Applications", "Mobile Apps", "E-commerce", "CMS Development"],
  },
  {
    title: "Branding",
    description: "We develop cohesive brand identities that resonate with your target audience.",
    deliverables: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Marketing Materials"],
  },
]

export default function Services() {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-8">Services</h1>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl">
            We offer a comprehensive range of digital services to help your business grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-lg border border-neutral-200 border-white/10 hover:border-white/20 transition-colors dark:border-neutral-800"
            >
              <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-8">{service.description}</p>
              <ul className="space-y-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="text-sm text-gray-400">
                    • {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

