"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "./components/ui/button"
import ServiceCard from "./components/service-card"
import TeamMember from "./components/team-member"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import AnimatedText from "./components/animated-text"
import PageTransition from "./components/page-transition"

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/80 backdrop-blur-sm z-0"></div>
          <div className="container relative z-10 flex flex-col items-center text-center gap-8 max-w-5xl">
            <div className="card-box p-8 md:p-12">
              <AnimatedText
                text="Transforming Visions into Visual&nbsp;Stories"
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                direction="down"
              />
              <AnimatedText
                text="We craft compelling visual narratives that captivate audiences and elevate brands."
                className="text-xl md:text-2xl text-body max-w-3xl mt-6"
                direction="up"
                delay={0.3}
              />
              <Button asChild size="lg" className="mt-8 group rounded-xl" data-cursor="button">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div 
            className="absolute bottom-8 left-0 right-0 flex justify-center"
            onClick={() => window.scrollBy({ top: 700, behavior: "smooth" })}
          >
            <div className="animate-bounce glass p-3 rounded-full cursor-pointer">
              <ArrowRight className="h-6 w-6 rotate-90" />
            </div>
          </div>

        </section>

        {/* Services Section */}
        <section className="section-container bg-muted/50">
          <div className="container">
            <div className="card-box px-1 p-8 mb-16 text-center">
              <AnimatedText text="Our Services" className="text-3xl md:text-4xl font-bold" direction="left" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Content Creation"
                description="From concept to final cut, we create engaging content that tells your story."
                icon="VideoIcon"
                delay={0.1}
              />
              <ServiceCard
                title="Short Form Content"
                description="Impactful short-form videos optimized for social media and digital platforms."
                icon="InstagramIcon"
                delay={0.2}
              />
              <ServiceCard
                title="Long Form Production"
                description="Documentaries, films, and in-depth storytelling with cinematic quality."
                icon="FilmIcon"
                delay={0.3}
              />
              <ServiceCard
                title="Visual Design"
                description="Eye-catching graphics, thumbnails, and visual assets that enhance your brand."
                icon="PaletteIcon"
                delay={0.4}
              />
              <ServiceCard
                title="Brand Identity"
                description="Cohesive visual language and guidelines that strengthen your brand presence."
                icon="BriefcaseIcon"
                delay={0.5}
              />
              <ServiceCard
                title="Post-Production"
                description="Expert editing, color grading, and visual effects to perfect your content."
                icon="SlidersIcon"
                delay={0.6}
              />
            </div>
          </div>
        </section>
        {/* left to right in phone */}
        {/* Team Section */}
      
        <section className="section-container">
          <div className="container">
            <div className="card-box p-8 mb-16 text-center">
              <AnimatedText text="Meet Our Team" className="text-3xl md:text-4xl font-bold" direction="up" />
            </div>
            <div className="relative overflow-hidden">
              {/* Carousel container */}
              <div className="overflow-x-scroll snap-x snap-mandatory pb-8 hide-scrollbar">
                <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 px-12">
                 <div className="flex-shrink-0 w-[15rem] h-auto snap-center mx-4">
                    <TeamMember
                      name="Vivek Ahir"
                      role="Brand Strategist"
                      image="/assets/bihari.png"
                      delay={0.1}
                      className="w-full h-full transition-all duration-300"
                    />
                  </div>
                  <div className="flex-shrink-0 w-[15rem] h-auto snap-center mx-4">
                    <TeamMember
                      name="Rahul Patel"
                      role="Creative Director"
                      image="/assets/rahul.png"
                      delay={0.2}
                      className="w-full h-full transition-all duration-300"
                    />
                  </div>
                  <div className="flex-shrink-0 w-[15rem] h-auto snap-center mx-4">
                    <TeamMember
                      name="Deepanshu Ahir"
                      role="Developer"
                      image="/assets/kumar.png"
                      delay={0.3}
                      className="w-full h-full transition-all duration-300"
                    />
                  </div>
                  <div className="flex-shrink-0 w-[15rem] h-auto snap-center mx-4">
                    <TeamMember
                      name="Yash Singh"
                      role="3D visual & Editor"
                      image="/assets/yash-singh.png"
                      delay={0.4}
                      className="w-full h-full transition-all duration-300"
                    />
                  </div>
                  <div className="flex-shrink-0 w-[15rem] h-auto snap-center mx-4">
                    <TeamMember
                      name="Ehtisham Sageer"
                      role="Junior Designer"
                      image="/assets/ehtisham.png"
                      delay={0.5}
                      className="w-full h-full transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div> 
             
          </div>
        </section>
        {/* CTA Section */}
        <section className="section-container bg-primary/5 backdrop-blur-sm">
          <div className="container px-1 max-w-4xl">
            <div className="card-box p-10 text-center">
              <AnimatedText
                text="Ready&nbsp;to transform your vision?"
                className="text-3xl md:text-4xl font-bold mb-6"
                direction="up"
              />
              <AnimatedText
                text="Let's create something extraordinary together."
                className="text-xl text-body mb-8"
                direction="up"
                delay={0.2}
              />
              <Button asChild size="lg" className="rounded-xl" data-cursor="button">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>

       <Footer />
      </main>
    </PageTransition>
  )
}

