"use client"

import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import type React from "react"
import { useRef } from "react"
import { useEffect, useState } from "react";

const services = [
  {
    title: "Digital Design",
    description: "We create beautiful, intuitive interfaces that engage users.",
    deliverables: ["UI/UX Design", "Design Systems", "Interactive Prototypes", "User Research"],
  },
  {
    title: "Development",
    description: "We build robust, scalable applications using modern technologies.",
    deliverables: ["Web Applications", "Mobile Apps", "E-commerce", "CMS Development"],
  },
  {
    title: "Branding",
    description: "We develop cohesive brand identities that resonate with audiences.",
    deliverables: ["graphic Desigining", "Visual Identity", "Brand Guidelines", "Marketing Materials"],
  },
  {
    title: "Video Editing",
    description: "We craft seamless video edits that captivate audiences and bring stories to life.",
    deliverables: ["Short Form", "Long Form", "Motion Desging"],
  },
  
]

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

function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="section"
    >
      {children}
    </motion.section>
  )
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 2000); // Delay loading for smooth experience
  }, []);


  return (
    <main>
      
      
      <Section>
        <div className="container">
        <div className="spline-container">
        <iframe src="https://my.spline.design/liquidgradientabstractbackground-4a5898e5a6dcea8b7d9a3d38a27fcedf/"  className="spline-bg"
         loading="lazy"
          allow="fullscreen; xr-spatial-tracking; accelerometer"
          style={{ willChange: "transform", pointerEvents: "none" }}></iframe>
        </div>
          <div className="hero">
            <AnimatedText className="hero-title">We craft digital experiences</AnimatedText>
            <AnimatedText className="hero-subtitle">
              A creative studio focused on design, development, and branding. We help brands stand out in the digital
              age.
            </AnimatedText>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/projects" className="btn">
                View Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <AnimatedText className="section-title">Our Services</AnimatedText>
          <div className="services">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="service-card"
              >
                <AnimatedText className="service-title">{service.title}</AnimatedText>
                <AnimatedText className="service-description">{service.description}</AnimatedText>
                <ul className="service-list">
                  {service.deliverables.map((item) => (
                    <AnimatedText key={item} className="service-list-item">
                      • {item}
                    </AnimatedText>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <AnimatedText className="section-title">Our Team</AnimatedText>
          <div className="team">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="team-member"
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="team-member-image"
                />
                <AnimatedText className="team-member-name">{member.name}</AnimatedText>
                <AnimatedText className="team-member-role">{member.role}</AnimatedText>
                <AnimatedText className="team-member-bio">{member.bio}</AnimatedText>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  )
}

