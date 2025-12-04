import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar({ scrollTo, refs, activeSection }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkClass = (name) =>
    `cursor-pointer font-medium transition-colors ${
      activeSection === name
        ? "text-primary font-bold"
        : scrolled
        ? "text-gray-700"
        : "text-white"
    }`;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-white shadow-md backdrop-blur-md" : "bg-transparent shadow-xl"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <h1 className="text-3xl font-bold text-primary">🍽️ Dish & Delight</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <span className={linkClass("home")} onClick={() => scrollTo(refs.homeRef)}>Home</span>
            <span className={linkClass("about")} onClick={() => scrollTo(refs.aboutRef)}>About</span>
            <span className={linkClass("menu")} onClick={() => scrollTo(refs.menuRef)}>Menu</span>
            <span className={linkClass("contact")} onClick={() => scrollTo(refs.contactRef)}>Contact</span>
          </div>

          {/* Search */}
          <input type="text" placeholder="Search" className={`hidden md:block outline-none border-b-2 border-primary px-2 py-1 ${scrolled ? "text-gray-700 placeholder:text-gray-700" : "text-white placeholder:text-white"}`} />

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-primary text-2xl">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className={`md:hidden text-gray-700 bg-white shadow-lg rounded-lg mt-2 py-4 ${scrolled ? "bg-transparent" : "bg-black"}`}>
            <ul className="flex flex-col space-y-2 px-4">
              {["home","about","menu","contact"].map((section) => (
                <li key={section} className="cursor-pointer hover:text-primary"
                  onClick={() => {
                    scrollTo(refs[`${section}Ref`])
                    setOpen(false)
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
