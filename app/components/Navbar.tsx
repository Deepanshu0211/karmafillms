"use client"
import "../styles/globals.css"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <header className="header">
      <div className="header-bg" />
      <nav className="nav container">
        <Link href="/" className="nav-logo">
          Karmā Films
        </Link>

        {!isMobile && (
          <div className="nav-links">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className={`nav-link ${pathname === item.href ? "active" : ""}`}>
                <span>{item.name}</span>
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="nav-link-indicator"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
          </div>
        )}

        {isMobile && (
          <>
            <button className="mobile-menu-button" onClick={toggleMenu} aria-label="Toggle menu">
              <span className={`hamburger ${isOpen ? "open" : ""}`} />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={menuVariants}
                  className="mobile-menu"
                >
                  {navItems.map((item) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={`mobile-menu-link ${pathname === item.href ? "active" : ""}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </nav>
    </header>
  )
}

