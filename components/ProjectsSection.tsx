'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import {
  FaHospitalUser,
  FaGlobeAsia,
  FaCity,
  FaHotel,
  FaVoteYea,
  FaGithub,
  FaExternalLinkAlt,
} from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

type Project = {
  title: string
  description: string
  image: string
  github?: string | null
  live?: string | null
  techStack: string[]
  icon: React.ReactNode
}

const projects: Project[] = [
  {
    title: 'Citywide Hospital Management System',
    description:
      'A city-level hospital network system supporting multiple hospitals, admin controls, and secure patient data sharing.',
    image: '/projects/Citywide-HMS.jpg',
    github: null,
    live: null,
    techStack: ['Next.js', 'MySQL', 'MongoDB', 'Resend Email API', 'TailwindCSS'],
    icon: <FaCity className="text-blue-500 text-2xl" />,
  },
  {
    title: 'Decentralized Voting Application',
    description:
      'A blockchain-based secure voting system ensuring transparency, anonymity, and tamper-proof elections.',
    image: '/projects/voting.png',
    github: 'https://github.com/rawatesudarshan5015/Decentralized-Voting-App',
    live: null,
    techStack: ['Solidity', 'Hardhat', 'Next.js', 'Ethers.js', 'MetaMask'],
    icon: <FaVoteYea className="text-green-500 text-2xl" />,
  },
  {
    title: 'Itinerary Travel Planning Website',
    description:
      'A smart travel planner that helps users design custom itineraries, manage bookings, and track trip progress.',
    image: '/projects/travel.png',
    github: null,
    live: null,
    techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
    icon: <FaGlobeAsia className="text-orange-500 text-2xl" />,
  },
  {
    title: 'Hospital Management System',
    description:
      'A digital platform to manage hospital staff, patient records, appointments, and departmental operations.',
    image: '/projects/hospital.png',
    github: 'https://github.com/rawatesudarshan5015/hospital-management',
    live: null,
    techStack: ['Java', 'JDBC', 'MySQL', 'Swing UI'],
    icon: <FaHospitalUser className="text-teal-500 text-2xl" />,
  },
  {
    title: 'Hotel Management System',
    description:
      'A hotel booking and management system with room availability, guest check-in/out, and billing features.',
    image: '/projects/hotel.jpg',
    github: 'https://github.com/rawatesudarshan5015/Hotel-Management-System',
    live: null,
    techStack: ['Java', 'JDBC', 'MySQL', 'Swing UI'],
    icon: <FaHotel className="text-purple-500 text-2xl" />,
  },
]

const ProjectsSection: React.FC = () => {
  const { theme } = useTheme()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-[#0a1420] text-gray-900 dark:text-gray-100 transition-colors duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
        💼 My Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group border border-gray-300 dark:border-gray-700 rounded-2xl bg-white dark:bg-[#101d2e] shadow-md hover:shadow-xl hover:border-blue-500 transition-all duration-300 overflow-hidden cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {/* Image */}
            <div className="relative w-full h-48 sm:h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  {project.icon}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Quick Links */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  Click to view more →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-[#0f1a2b] rounded-2xl p-6 max-w-lg w-full shadow-xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500"
                onClick={() => setSelectedProject(null)}
              >
                <IoClose size={28} />
              </button>

              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={700}
                height={400}
                className="rounded-lg mb-4 object-cover"
              />

              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {selectedProject.description}
              </p>

              <h4 className="text-gray-900 dark:text-gray-200 font-semibold mb-2">
                Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 justify-between">

                {selectedProject.github && (
                  <Link
                    href={selectedProject.github}
                    target="_blank"
                    className="flex items-center gap-2 bg-gray-900 dark:bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition"
                  >
                    <FaGithub />
                    GitHub
                  </Link>
                )}

                {selectedProject.live && (
                  <Link
                    href={selectedProject.live}
                    target="_blank"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </Link>
                )}

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProjectsSection;
