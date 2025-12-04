'use client'

import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { label: 'Home', path: '#hero' },
  { label: 'About', path: '#about' },
  { label: 'Skills', path: '#skills' },
  { label: 'Experience', path: '#experience' },
  { label: 'Projects', path: '#projects' },
  { label: 'GitHub', path: '#github' },
  { label: 'Contact', path: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="
            h-16 flex justify-between items-center shadow-lg
            bg-gradient-to-b from-gray-50 via-blue-50 to-gray-100
            dark:from-gray-900 dark:via-gray-800 dark:to-[#0b1623]
            transition-all duration-300
          "
        >
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ml-3">
            Sudarshan
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ label, path }) => (
              <a
                key={path}
                href={path}
                className="
                  text-gray-900 dark:text-gray-100
                  hover:text-blue-600 dark:hover:text-blue-400
                  font-medium transition-colors duration-200
                "
              >
                {label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-900 dark:text-gray-100 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className="
            max-w-6xl mx-auto px-6 pb-4 space-y-2
            bg-gradient-to-b from-gray-50 via-blue-50 to-gray-100
            dark:from-gray-900 dark:via-gray-800 dark:to-[#0b1623]
            text-gray-900 dark:text-gray-100
            backdrop-blur-xl border-t border-gray-200 dark:border-gray-700
            rounded-b-xl shadow-lg
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
                font-medium transition-colors duration-200
              "
            >
              {label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;