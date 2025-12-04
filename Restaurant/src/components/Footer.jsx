import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer({ refs , scrollSection}) {  
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">🍽️ Dish & Delight</h2>
            <p className="text-gray-400">Crafting unforgettable culinary experiences since 2022.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a onClick={() => scrollSection(refs.homeRef)} className="text-gray-400 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a onClick={() => scrollSection(refs.aboutRef)} className="text-gray-400 hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a onClick={() => scrollSection(refs.menuRef)} className="text-gray-400 hover:text-white transition">
                  Menu
                </a>
              </li>
              <li>
                <a onClick={() => scrollSection(refs.contactRef)} className="text-gray-400 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Menu Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Appetizers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Main Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Desserts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Beverages
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-dark transition text-white"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-dark transition text-white"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-dark transition text-white"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Taste Haven. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
