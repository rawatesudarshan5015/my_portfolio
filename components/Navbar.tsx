'use client'

import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', path: '#hero' },
    { label: 'About', path: '#about' },
    { label: 'Skills', path: '#skills' },
    { label: 'Projects', path: '#projects' },
    { label: 'Experience', path: '#experience' },
    { label: 'Contact', path: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black">
      
      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-6">

        {/* GRADIENT ONLY INSIDE WIDTH (NO ROUNDED CORNERS) */}
        <div
          className="
            bg-gradient-to-b from-gray-50/80 via-white/70 to-white/40
            dark:bg-gradient-to-b dark:from-gray-900/80 dark:via-gray-800/70 dark:to-gray-900/40
            backdrop-blur-xl shadow-lg
            transition-all duration-300
            h-16
            flex justify-between items-center
          "
        >
          {/* Logo */}
          <div className="text-2xl font-semibold tracking-wide text-gray-900 dark:text-white">
            Sudarshan
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ label, path }) => (
              <a
                key={path}
                href={path}
                className="
                  text-gray-700 dark:text-gray-300
                  hover:text-blue-600 dark:hover:text-blue-400
                  transition-colors duration-200
                "
              >
                {label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-900 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="bg-black">
          <div
            className="
              max-w-6xl mx-auto px-6 pb-4 space-y-2
              bg-white/90 dark:bg-gray-800/95
              text-gray-900 dark:text-white
              backdrop-blur-xl border-t border-gray-200 dark:border-gray-700
            "
          >
            {navItems.map(({ label, path }) => (
              <a
                key={path}
                href={path}
                onClick={() => setIsOpen(false)}
                className="
                  block py-2 text-lg
                  hover:text-blue-600 dark:hover:text-blue-400
                  transition-colors duration-200
                "
              >
                {label}
              </a>
            ))}

            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
