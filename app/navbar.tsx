"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "./components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./components/ui/sheet"
import { ThemeToggle } from "./components/theme-toggle"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [visible, setVisible] = useState(true)
  const pathname = usePathname()
  const sheetTriggerRef = useRef(null)
  const closeButtonRef = useRef(null)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if scrolled down from top
      if (currentScrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Determine scroll direction for hiding/showing
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setVisible(false)
      } else {
        // Scrolling up
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.3,
      },
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? "py-2 glass shadow-lg rounded-b-2xl mx-4 mt-2" : "py-4 bg-transparent"
          }`}
          variants={navVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="container flex items-center justify-between">
            <Link href="/" className="font-bold text-xl">
              Karma Film
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === link.href ? "text-primary font-semibold" : "text-body hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />

              {/* Mobile Navigation */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    ref={sheetTriggerRef}
                    variant="outline"
                    size="icon"
                    className="md:hidden rounded-full glass border-primary/20"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] glass border-l">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <Link href="/" className="font-bold text-xl">
                        Karma Film
                      </Link>
                      <SheetClose asChild>
                        <Button
                          ref={closeButtonRef}
                          variant="outline"
                          size="icon"
                          className="rounded-full glass border-primary/20"
                        >
                          <X className="h-5 w-5" />
                          <span className="sr-only">Close menu</span>
                        </Button>
                      </SheetClose>
                    </div>
                    <nav className="flex flex-col space-y-6">
                      {navLinks.map((link) => (
                        <SheetClose asChild key={link.href}>
                          <Link
                            href={link.href}
                            className={`text-lg font-medium transition-colors hover:text-primary ${
                              pathname === link.href ? "text-primary font-semibold" : "text-body hover:text-primary"
                            }`}
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </nav>
                    <div className="mt-auto pt-8">
                      <SheetClose asChild>
                        <Button asChild className="w-full rounded-xl" size="lg">
                          <Link href="/contact">Get in Touch</Link>
                        </Button>
                      </SheetClose>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  )
}

