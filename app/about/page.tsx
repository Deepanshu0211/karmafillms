"use client"

import Image from "next/image"
import AnimatedText from "../components/animated-text"
import { motion } from "framer-motion"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import PageTransition from "../components/page-transition"

export default function AboutPage() {
  return (
    <PageTransition>
        <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[60vh] px-4 pt-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/80 backdrop-blur-sm z-0"></div>
          <div className="container relative z-10 flex flex-col items-center text-center px-1 gap-8 max-w-9xl">
            <div className="card-box px-10 py-8">
              <AnimatedText
                text="About Karma&nbsp;Film"
                className="text-4xl md:text-6  font-bold tracking-tight px-10"
                direction="down"
              />
              <AnimatedText
                text="We're a team of passionate creators dedicated to visual storytelling."
                className="text-xl md:text-2xl text-body max-w-3xl mt-6"
                direction="up"
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-container">
          <div className="container px-1 max-w-5xl">
            <div className="card-box py-8 px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden"
                >
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Karma Film team at work"
                    width={600}
                    height={600}
                    className="w-full"
                  />
                </motion.div>
                <div>
                  <AnimatedText text="Our Story" className="text-3xl font-bold mb-6" direction="right" />
                  <div className="space-y-4 text-body">
                    <p>
                      Founded in 2018, Karma Film began as a small team of filmmakers with a shared vision: to create
                      visual content that not only looks beautiful but also tells meaningful stories.
                    </p>
                    <p>
                      Over the years, we&apos;ve evolved into a full-service content creation agency, working with brands and
                      creators across industries to develop compelling visual narratives.
                    </p>
                    <p>
                      Our name &quot;Karma&quot; reflects our philosophy that great content creates a positive cycle—good content
                      leads to engaged audiences, which leads to growth and more opportunities to create impactful work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="section-container bg-muted/50">
          <div className="container px-1 max-w-5xl">
            <div className="card-box p-8 mb-12 text-center">
              <AnimatedText text="Our Approach" className="text-3xl md:text-4xl font-bold" direction="up" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="card-box p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              >
                <h3 className="text-xl font-bold mb-4">Understand</h3>
                <p className="text-body">
                  We begin by deeply understanding your brand, audience, and objectives. This foundation ensures our
                  creative work aligns with your strategic goals.
                </p>
              </motion.div>

              <motion.div
                className="card-box p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              >
                <h3 className="text-xl font-bold mb-4">Create</h3>
                <p className="text-body">
                  Our creative process combines technical expertise with artistic vision. We craft content that&apos;s not
                  only visually stunning but strategically effective.
                </p>
              </motion.div>

              <motion.div
                className="card-box p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              >
                <h3 className="text-xl font-bold mb-4">Deliver</h3>
                <p className="text-body">
                  We&apos;re committed to excellence in execution, delivering polished content on time and on budget, with
                  attention to every detail.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-container">
          <div className="container px-1 max-w-5xl">
            <div className="card-box p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <AnimatedText text="Our Values" className="text-3xl font-bold mb-6" direction="left" />
                  <div className="space-y-4 px-1 text-body">
                    <p className="card-box p-4">
                      <strong>Creativity:</strong> We push boundaries and explore new approaches to visual storytelling.
                    </p>
                    <p className="card-box p-4">
                      <strong>Quality:</strong> We&apos;re committed to excellence in every frame, pixel, and interaction.
                    </p>
                    <p className="card-box p-4">
                      <strong>Collaboration:</strong> We believe the best work happens through partnership with our
                      clients.
                    </p>
                    <p className="card-box p-4">
                      <strong>Impact:</strong> We create content that moves audiences and drives meaningful results.
                    </p>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden"
                >
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Karma Film creative process"
                    width={600}
                    height={600}
                    className="w-full"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}

