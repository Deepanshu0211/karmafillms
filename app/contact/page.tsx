"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import AnimatedText from "../components/animated-text"
import PageTransition from "../components/page-transition"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  // ✅ FIXED: Added proper event typing for inputs & textareas
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // ✅ FIXED: Added event typing for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    // Show success message
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <PageTransition>
        <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[40vh] px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/80 backdrop-blur-sm z-0"></div>
          <div className="container relative z-10 flex flex-col items-center text-center gap-8 max-w-5xl">
            <div className="card-box p-10">
              <AnimatedText text="Get in Touch" className="text-4xl md:text-6xl font-bold tracking-tight" direction="down" />
              <AnimatedText text="Let's discuss your project and create something amazing together." className="text-xl md:text-2xl text-body max-w-3xl mt-6" direction="up" delay={0.3} />
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-container">
          <div className="container max-w-6xl">
            <div className="card-box p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                    <p className="text-body mb-8">Reach out to us for inquiries, collaborations, or just to say hello. We&apos;re always excited to connect with new clients and partners.</p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 card-box p-4">
                      <div className="glass p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-body">hello@karmafilm.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 card-box p-4">
                      <div className="glass p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-body">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 card-box p-4">
                      <div className="glass p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Office</h3>
                        <p className="text-body">
                          123 Creative Avenue
                          <br />
                          Suite 456
                          <br />
                          Los Angeles, CA 90001
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="card-box p-8">
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required data-cursor="input" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" required data-cursor="input" className="rounded-xl" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="What's this about?" required data-cursor="input" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." rows={6} required data-cursor="input" className="rounded-xl" />
                    </div>
                    <Button type="submit" className="w-full rounded-xl" data-cursor="button">
                      Send Message
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 px-4">
          <div className="container max-w-6xl">
            <div className="card-box h-[400px] flex items-center justify-center">
              <p className="text-body">Map placeholder - would integrate Google Maps or similar here</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </PageTransition>
  )
}
