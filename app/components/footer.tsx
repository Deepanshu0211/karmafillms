"use client"

import Link from "next/link"
import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Linkedin,
  Phone,
} from "lucide-react"
import { categories } from "../data/categories"

export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 bg-muted/30 backdrop-blur-sm border-t">
      <div className="container px-1 grid gap-8 md:gap-12">
        <div className="card-box p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Social/Brand */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Karmā Film</h3>
              <p className="text-sm text-body max-w-xs">
                We craft compelling visual narratives that captivate audiences and elevate brands.
              </p>
              <div className="flex space-x-2">
                <Link href="https://www.instagram.com/karmafilms7" target="_blank" className="glass p-2 rounded-full hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="https://www.youtube.com/@KarmaFilms7" target="_blank" className="glass p-2 rounded-full hover:text-foreground">
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link href="https://www.facebook.com/karmafilms7" target="_blank" className="glass p-2 rounded-full hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://www.linkedin.com/company/karmāfilms/" target="_blank" className="glass p-2 rounded-full hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Dynamic Services */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold">Services</h3>
              <ul className="space-y-2 text-sm">
                {categories.map((cat) => (
                  <li key={cat.id} className="card-box p-2 px-4">
                    <Link
                      href={`/projects/${cat.id}`}
                      className="text-body hover:text-foreground transition-colors block"
                    >
                      {cat.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold">Company</h3>
              <ul className="space-y-2 text-sm">
                <li className="card-box p-2 px-4">
                  <Link href="/about" className="text-body hover:text-foreground block">
                    About Us
                  </Link>
                </li>
                <li className="card-box p-2 px-4">
                  <Link href="/projects" className="text-body hover:text-foreground block">
                    Our Work
                  </Link>
                </li>
                <li className="card-box p-2 px-4">
                  <Link href="/contact" className="text-body hover:text-foreground block">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold">Need Support?</h3>
              <ul className="space-y-2 text-sm">
                <li
                  onClick={() =>
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=karmaafilms@gmail.com",
                      "_blank",
                      "width=600,height=700,left=100,top=100"
                    )
                  }
                  className="flex items-center gap-2 text-body card-box p-3 cursor-pointer"
                >
                  <Mail className="h-4 w-4" />
                  karmaafilms@gmail.com
                </li>
                <li className="card-box p-3">
                  <Link href="tel:+919033912081" className="flex items-center gap-2 text-body">
                    <Phone className="h-4 w-4" />
                    +91 9033912081
                  </Link>
                </li>
                <li className="card-box p-3">
                  <Link href="tel:+918758395535" className="flex items-center gap-2 text-body">
                    <Phone className="h-4 w-4" />
                    +91 8758395535
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="card-box p-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-body">
              &copy; {new Date().getFullYear()} Karma Film. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
