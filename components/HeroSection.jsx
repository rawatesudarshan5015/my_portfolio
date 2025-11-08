'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import FloatingShapes from '@/components/FloatingShapes'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.6 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function HeroSection() {
  const [greeting, setGreeting] = useState('')
  const [mounted, setMounted] = useState(false)

  // 🧠 Ensure greeting is generated only on client (prevents hydration error)
  useEffect(() => {
    setMounted(true)
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('🌞 Good Morning')
    else if (hour < 18) setGreeting('☀️ Good Afternoon')
    else setGreeting('🌙 Good Evening')
  }, [])

  // 🛡 Prevent SSR/CSR mismatch
  if (!mounted) return null

  return (
    <div className="bg-gradient-to-b from-gray-50 via-blue-50 to-gray-100 
dark:from-gray-900 dark:via-gray-800 dark:to-[#0b1623] 
text-gray-900 dark:text-gray-100 relative overflow-hidden">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[90vh] md:min-h-screen 
                   bg-gradient-to-br from-gray-100 via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                   text-center md:text-left px-6 md:px-12 lg:px-16 py-12"
      >
        <FloatingShapes />

        {/* Left Side - Text */}
        <motion.div variants={itemVariants} className="flex-1 mt-10 md:mt-0 z-10">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            {greeting},
          </motion.p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
            I’m{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Sudarshan Rawate
            </span>
          </h1>

          <h2
            aria-label="Roles"
            className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6"
          >
            A{' '}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              <Typewriter
                words={['Full Stack Developer', 'Blockchain Developer', 'Web3 Enthusiast']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-400 max-w-xl mb-6 mx-auto md:mx-0">
            Crafting efficient and impactful Web3 + Web apps with modern technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md shadow-blue-500/30 
                        hover:bg-blue-700 transition duration-300"
            >
              🚀 View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full 
                        hover:bg-blue-50 dark:hover:bg-gray-800 transition duration-300"
            >
              📬 Contact Me
            </Link>
            <a
              href="/Sudarshan_Rawate_Resume.pdf"
              download
              className="px-6 py-3 border border-purple-600 text-purple-600 rounded-full 
                        hover:bg-purple-50 dark:hover:bg-gray-800 transition duration-300"
            >
              📄 Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-5 mt-8 text-2xl">
            <a
              href="https://github.com/rawatesudarshan5015"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/sudarshan-rawate"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/rawatesudarshan/"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/rawatesudafhas/"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-green-500 transition"
            >
              <SiGeeksforgeeks />
            </a>
            <a
              href="mailto:rawatesudarshan5015@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 hidden md:block">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-gray-500 dark:text-gray-400 text-sm"
            >
              ↓ Scroll to explore
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          variants={itemVariants}
          className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 z-10"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="relative group"
          >
            <div
              className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600
                         rounded-full blur-md opacity-40 group-hover:opacity-70 transition duration-300"
            ></div>
            <Image
              src="/profile.jpg"
              alt="Sudarshan Rawate profile photo"
              width={260}
              height={260}
              priority
              className="relative rounded-full border-4 border-blue-500 
                         shadow-lg shadow-blue-500/30 object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}
