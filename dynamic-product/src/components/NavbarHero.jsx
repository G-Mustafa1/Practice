import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavbarHero = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Product', link: '/product' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <nav className="bg-white fixed w-full z-50 top-0 left-0 border-b border-gray-200 shadow-sm">
      
      <div className="flex items-center justify-between max-w-7xl mx-auto py-4 px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-7"
            alt="Logo"
          />
          <span className="text-xl font-bold text-gray-900">
            Mustafa Shop
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.link}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `py-2 px-1 border-b-2 transition font-medium ${
                    isActive
                      ? "text-blue-600 border-blue-600"
                      : "text-gray-700 border-transparent hover:text-blue-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border border-gray-300"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden w-full bg-white border-b border-gray-300 shadow-sm"
          >
            <ul className="flex flex-col p-4 space-y-2">
              {menuItems.map((item) => (
                <li key={item.link}>
                  <NavLink
                    to={item.link}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 px-3 border-b-2 transition ${
                        isActive
                          ? "text-blue-600  border-blue-600"
                          : "text-gray-700 border-transparent hover:text-blue-500"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default NavbarHero;
