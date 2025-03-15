import Link from "next/link"
import { Instagram, Twitter, Youtube, Facebook, Mail, Linkedin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 bg-muted/30 backdrop-blur-sm border-t">
      <div className="container grid gap-8 md:gap-12">
        <div className="card-box p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Karma Film</h3>
              <p className="text-sm text-body max-w-xs">
                We craft compelling visual narratives that captivate audiences and elevate brands.
              </p>
              <div className="flex space-x-1">
                <Link href="#" className="text-body hover:text-foreground transition-colors glass p-2 rounded-full">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-body hover:text-foreground transition-colors glass p-2 rounded-full">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-body hover:text-foreground transition-colors glass p-2 rounded-full">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
                <Link href="#" className="text-body hover:text-foreground transition-colors glass p-2 rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">Linkedin</span>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold">Services</h3>
              <ul className="space-y-2 text-sm">
                <li className="card-box p-2 px-4">
                  <Link href="/projects" className="text-body hover:text-foreground transition-colors block">
                    Content Creation
                  </Link>
                </li>
                <li className="card-box p-2 px-4">
                  <Link href="/projects" className="text-body hover:text-foreground transition-colors block">
                    Short Form Content
                  </Link>
                </li>
                <li className="card-box p-2 px-4">
                  <Link href="/projects" className="text-body hover:text-foreground transition-colors block">
                    Long Form Production
                  </Link>
                </li>
                <li className="card-box p-2 px-4">
                  <Link href="/projects" className="text-body hover:text-foreground transition-colors block">
                    Visual Design
                  </Link>
                </li>
                <li className="card-box p-2 px-4">
                  <Link href="/projects" className="text-body hover:text-foreground transition-colors block">
                    Brand Identity
                  </Link>
                  
                </li>
                <li className="card-box p-2 px-4">
                  <Link href="/projects" className="text-body hover:text-foreground transition-colors block">
                    3D Animation
                  </Link>
                  
                </li>
                <li className="card-box p-2 px-4">
                  <Link href="/projects" className="text-body hover:text-foreground transition-colors block">
                    Rendering Services
                  </Link>
                  
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold">Company</h3>
              <ul className="space-y-2 text-sm">
                <li className="card-box p-2 px-4">
                  <Link href="/about" className="text-body hover:text-foreground transition-colors block">
                    About Us
                  </Link>
                </li>
                <li className="card-box p-2 px-4">
                  <Link href="/projects" className="text-body hover:text-foreground transition-colors block">
                    Our Work
                  </Link>
                </li>
                <li className="card-box p-2 px-4">
                  <Link href="/contact" className="text-body hover:text-foreground transition-colors block">
                    Contact
                  </Link>
                </li>
                
                <li className="card-box p-2 px-4">
                  <Link href="#" className="text-body hover:text-foreground transition-colors block">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-body card-box p-3">
                  <Mail className="h-4 w-4" />
                  hello@karmafilm.com
                </li>
                <li className="flex items-center gap-2 text-body card-box p-3">
                  <Phone className="h-4 w-4" />
                  74374734724
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card-box p-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-body">&copy; {new Date().getFullYear()} Karma Film. All rights reserved.</p>
           
          </div>
        </div>
      </div>
    </footer>
  )
}

