'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">Sudarshan</div>
          <div className="hidden md:flex space-x-6">
            {navItems.map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                className={`hover:text-blue-400 transition ${
                  pathname === path ? 'text-blue-400' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-2">
            {navItems.map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                className={`block hover:text-blue-400 ${
                  pathname === path ? 'text-blue-400' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
