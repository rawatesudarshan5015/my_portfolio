'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { FiExternalLink } from 'react-icons/fi'

// Project type
type Project = {
  title: string
  description: string
  image: string
  link: string
}

const projects: Project[] = [
  {
    title: 'Decentralized Medical Record System',
    description: 'A blockchain-based system to share and manage medical records securely.',
    image: '/projects/medical.jpg',
    link: '/projects#medical',
  },
  {
    title: 'College Connect Platform',
    description: 'A social networking platform for college students and alumni.',
    image: '/projects/college.jpg',
    link: '/projects#college',
  },
  {
    title: 'GoQuant Trade Simulator',
    description: 'A trading simulator with live order book data and Almgren-Chriss model.',
    image: '/projects/goquant.jpg',
    link: '/projects#goquant',
  },
  {
    title: 'Hospital Management System',
    description: 'Citywide hospital platform with multi-hospital support and secure data sharing.',
    image: '/projects/hospital.jpg',
    link: '/projects#hospital',
  },
]

const ProjectsSection: React.FC = () => {
  const { theme } = useTheme()

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 transition-colors duration-500 bg-gray-50 dark:bg-[#0b1623]"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
        💼 My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group border border-gray-300 dark:border-gray-700 rounded-2xl bg-white dark:bg-[#101d2e] shadow-md hover:shadow-lg hover:border-blue-500 transition-all duration-300"
          >
            <div className="relative w-full h-48 sm:h-56 rounded-t-2xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
              </div>
              <Link
                href={project.link}
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline mt-auto"
              >
                View Details <FiExternalLink className="inline-block" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
