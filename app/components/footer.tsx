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
    <footer className="w-full py-12 md:py-16 bg-muted/30 backdrop-blur-sm border-t shadow-inner">
      <div className="container px-4 sm:px-6 lg:px-8 grid gap-8 md:gap-12">
        <div className="rounded-xl shadow-md bg-white/5 backdrop-blur-sm p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {/* Social/Brand */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Karmā Film</h3>
              <p className="text-sm text-body max-w-xs">
                We craft compelling visual narratives that captivate audiences and elevate brands.
              </p>
              <div className="flex space-x-3">
                {[
                  { icon: <Instagram className="h-5 w-5" />, link: "https://www.instagram.com/karmafilms7" },
                  { icon: <Youtube className="h-5 w-5" />, link: "https://www.youtube.com/@KarmaFilms7" },
                  { icon: <Facebook className="h-5 w-5" />, link: "https://www.facebook.com/karmafilms7" },
                  { icon: <Linkedin className="h-5 w-5" />, link: "https://www.linkedin.com/company/karmāfilms/" },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item.link}
                    target="_blank"
                    className="glass p-2 rounded-full hover:text-foreground transition"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
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
                {[
                  { title: "About Us", href: "/about" },
                  { title: "Our Work", href: "/projects" },
                  { title: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.title} className="card-box p-2 px-4">
                    <Link href={link.href} className="text-body hover:text-foreground block">
                      {link.title}
                    </Link>
                  </li>
                ))}
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
                {[
                  { number: "+91 9033912081" },
                  { number: "+91 8758395535" },
                ].map((item) => (
                  <li key={item.number} className="card-box p-3">
                    <Link href={`tel:${item.number.replace(/\s/g, "")}`} className="flex items-center gap-2 text-body">
                      <Phone className="h-4 w-4" />
                      {item.number}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="card-box p-4 md:p-6 text-center md:text-left">
          <p className="text-xs text-body">
            &copy; {new Date().getFullYear()} Karma Film. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
