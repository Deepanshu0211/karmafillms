export default function Footer() {
  return (
    <footer className="py-20 border-t border-[var(--border)]">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-lg mb-4">Karmā Films</h3>
            <p className="text-gray-400 text-sm">
              Creating digital experiences
              <br />
              that matter.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/work" className="text-gray-400 text-sm hover:text-white">
                  Work
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 text-sm hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 text-sm hover:text-white">
                  Team
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 text-sm hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4">Social</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-4">Contact</h4>
            <p className="text-gray-400 text-sm">
              hello@studio.com
              <br />
              +1 (555) 123-4567
            </p>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-[var(--border)] text-center text-sm text-gray-400">
          © 2024 Studio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

