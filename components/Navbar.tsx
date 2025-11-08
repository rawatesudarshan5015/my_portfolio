'use client'

import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', path: '#hero' },
    { label: 'About', path: '#about' },
    { label: 'Skills', path: '#skill' },
    { label: 'Projects', path: '#projects' },
    { label: 'Experience', path: '#experience' },
    { label: 'Contact', path: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gray-900/80 text-white shadow-lg transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <div className="text-2xl font-semibold tracking-wide">Sudarshan</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ label, path }) => (
              <a
                key={path}
                href={path}
                className="hover:text-blue-400 text-gray-300 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-800/95 border-t border-gray-700 backdrop-blur-md">
          {navItems.map(({ label, path }) => (
            <a
              key={path}
              href={path}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-lg hover:text-blue-400 text-gray-300 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
