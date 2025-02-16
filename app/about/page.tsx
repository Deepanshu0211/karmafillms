"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

function AnimatedText({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-6">
        <motion.div className="max-w-4xl mx-auto">
          <AnimatedText className="text-5xl md:text-6xl font-medium tracking-tight mb-8">About Us</AnimatedText>
          <div className="space-y-8 text-lg text-gray-400">
            <AnimatedText>
              We are a creative studio at the intersection of design and technology. Founded in 2020, we've been helping
              brands transform their digital presence through innovative design and cutting-edge development.
            </AnimatedText>
            <AnimatedText>
              Our approach combines strategic thinking with creative execution. We believe that great design is not just
              about aesthetics – it's about solving problems and creating meaningful experiences that resonate with
              users.
            </AnimatedText>
            <AnimatedText className="text-3xl text-white font-medium tracking-tight mt-16 mb-8">
              Our Philosophy
            </AnimatedText>
            <AnimatedText>
              We believe in the power of design to transform businesses and enhance people's lives. Our work is guided
              by three core principles:
            </AnimatedText>
            <ul className="space-y-4 list-disc pl-6">
              <AnimatedText>
                <li>
                  <strong className="text-white">Innovation:</strong> We push boundaries and explore new possibilities
                  in design and technology.
                </li>
              </AnimatedText>
              <AnimatedText>
                <li>
                  <strong className="text-white">Quality:</strong> We maintain the highest standards in everything we
                  do, from design to development.
                </li>
              </AnimatedText>
              <AnimatedText>
                <li>
                  <strong className="text-white">Impact:</strong> We focus on creating solutions that drive real results
                  for our clients.
                </li>
              </AnimatedText>
            </ul>
            <AnimatedText className="text-3xl text-white font-medium tracking-tight mt-16 mb-8">
              Our Process
            </AnimatedText>
            <AnimatedText>
              We follow a collaborative, iterative process that ensures we deliver solutions that meet our clients'
              needs and exceed their expectations:
            </AnimatedText>
            <ol className="space-y-4 list-decimal pl-6">
              <AnimatedText>
                <li>
                  <strong className="text-white">Discovery:</strong> Understanding your business, goals, and challenges.
                </li>
              </AnimatedText>
              <AnimatedText>
                <li>
                  <strong className="text-white">Strategy:</strong> Developing a comprehensive plan to achieve your
                  objectives.
                </li>
              </AnimatedText>
              <AnimatedText>
                <li>
                  <strong className="text-white">Design:</strong> Creating beautiful, functional solutions that engage
                  users.
                </li>
              </AnimatedText>
              <AnimatedText>
                <li>
                  <strong className="text-white">Development:</strong> Building robust, scalable applications using
                  modern technologies.
                </li>
              </AnimatedText>
              <AnimatedText>
                <li>
                  <strong className="text-white">Launch:</strong> Ensuring a smooth deployment and ongoing support.
                </li>
              </AnimatedText>
            </ol>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

