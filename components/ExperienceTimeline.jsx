'use client'

import { motion } from 'framer-motion'
import { FaBriefcase, FaHandsHelping } from 'react-icons/fa'

const experiences = [
  {
    role: 'Blockchain Developer',
    company: 'Quranium',
    type: 'Internship',
    duration: 'Oct 2024 – Mar 2025',
    description: [
      'Built and deployed secure smart contracts using Solidity, Hardhat, and Web3.js.',
      'Optimized gas usage and reduced on-chain transaction overhead.',
      'Integrated decentralized data layers for seamless DApp functionality.',
    ],
  },
]

const volunteering = [
  {
    role: 'Blockchain Lead',
    organization: 'Google Developer Student Clubs (GDSC) – I²IT Pune',
    duration: 'Aug 2023 – May 2024',
    description: [
      'Led the blockchain division, mentoring 50+ students through workshops and projects.',
      'Taught DApp development using Solidity and Polygon network.',
      'Organized hackathons and promoted blockchain learning on campus.',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-[#0f1a2b] transition-colors duration-500"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        💼 Professional Experience
      </motion.h2>

      {/* Work Experience */}
      <div className="max-w-4xl mx-auto space-y-10 relative border-l border-gray-200 dark:border-gray-700 pl-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-4 top-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900 group-hover:scale-125 transition-transform duration-300" />

            {/* Card */}
            <div className="bg-white dark:bg-[#11182a] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-transparent group-hover:border-blue-400 duration-300">
              <div className="flex items-center gap-3 mb-2">
                <FaBriefcase className="text-blue-500 text-lg" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {exp.role}
                </h3>
              </div>

              <p className="text-blue-600 dark:text-blue-400 font-medium">
                {exp.company} <span className="text-gray-500 dark:text-gray-400">({exp.type})</span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-4">{exp.duration}</p>

              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed space-y-1.5">
                {exp.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Volunteering Section */}
      <motion.h3
        className="text-3xl md:text-4xl font-bold text-center mt-20 mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🤝 Volunteering
      </motion.h3>

      <div className="max-w-4xl mx-auto space-y-10 relative border-l border-gray-200 dark:border-gray-700 pl-8">
        {volunteering.map((vol, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-4 top-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 group-hover:scale-125 transition-transform duration-300" />

            {/* Card */}
            <div className="bg-white dark:bg-[#11182a] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-transparent group-hover:border-green-400 duration-300">
              <div className="flex items-center gap-3 mb-2">
                <FaHandsHelping className="text-green-500 text-lg" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {vol.role}
                </h3>
              </div>

              <p className="text-green-600 dark:text-green-400 font-medium">{vol.organization}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-4">{vol.duration}</p>

              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed space-y-1.5">
                {vol.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
