"use client"

import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"
import type React from "react"

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <main className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-form"
        >
          <AnimatedText className="section-title">Get in Touch</AnimatedText>
          <AnimatedText className="section-subtitle">
            Let&apos;s discuss your project and see how we can help your business grow.
          </AnimatedText>

          <form onSubmit={handleSubmit} className="form">
            <AnimatedText>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  required
                  whileFocus={{ scale: 1.02, boxShadow: "0 10px rgba(255, 255, 0.3)" }}
                />
              </div>
            </AnimatedText>
            <AnimatedText>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                  required
                  whileFocus={{ scale: 1.02, boxShadow: "0 10px rgba(255, 255, 0.3)" }}
                />
              </div>
            </AnimatedText>
            <AnimatedText>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                  required
                  whileFocus={{ scale: 1.02, boxShadow: "0 10px rgba(255, 255, 0.3)" }}
                />
              </div>
            </AnimatedText>
            <AnimatedText>
              <motion.button
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.05, boxShadow: "0 15px rgba(255, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </AnimatedText>
          </form>
        </motion.div>
      </div>
    </main>
  )
}
