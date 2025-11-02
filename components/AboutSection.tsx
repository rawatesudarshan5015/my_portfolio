'use client'

import { motion } from 'framer-motion'
import {
  FaLaptopCode,
  FaServer,
  FaDumbbell,
  FaMountain,
} from 'react-icons/fa'
import { SiMongodb, SiNextdotjs, SiReact, SiNodedotjs, SiCplusplus } from 'react-icons/si'
import { BsInfinity } from 'react-icons/bs'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { MdApi } from 'react-icons/md'

const whatIDo = [
  {
    title: 'Front-end Development',
    icon: <FaLaptopCode className="text-sky-400 text-3xl" />,
    description:
      'With my skills in React, Next.js, and Tailwind CSS, I can create stunning and responsive user interfaces.',
  },
  {
    title: 'Back-end Development',
    icon: <FaServer className="text-teal-400 text-3xl" />,
    description:
      'Can handle database, server, and API design using Node.js and Express.',
  },
  {
    title: 'DevOps',
    icon: <BsInfinity className="text-cyan-400 text-3xl" />,
    description:
      'I can handle deployment, CI/CD pipelines, and microservice architecture.',
  },
  {
    title: 'API Development',
    icon: <MdApi className="text-rose-400 text-3xl" />,
    description: 'I can develop robust RESTful APIs with secure integrations.',
  },
  {
    title: 'Problem Solving',
    icon: <SiCplusplus className="text-blue-400 text-3xl" />,
    description: 'I enjoy solving challenging coding problems using C++.',
  },
  {
    title: 'Machine Learning',
    icon: <GiArtificialIntelligence className="text-purple-400 text-3xl" />,
    description:
      "I'm currently exploring AI/ML fundamentals to deepen my technical understanding.",
  },
  {
    title: 'Gymming',
    icon: <FaDumbbell className="text-pink-400 text-3xl" />,
    description: 'I have a habit of working out regularly to stay fit and focused.',
  },
  {
    title: 'Trekking',
    icon: <FaMountain className="text-indigo-400 text-3xl" />,
    description:
      'I have a passion for trekking, exploring remote trails, and reconnecting with nature.',
  },
]

const AboutSection: React.FC = () => {
  // Greeting based on time
  const hour = new Date().getHours()
  const greeting =
    hour < 12 ? 'Good Morning ☀️' : hour < 18 ? 'Good Afternoon 🌤️' : 'Good Evening 🌙'

  return (
    <section
      className="py-20 px-6 md:px-16 transition-colors duration-500
      bg-gray-50 text-gray-900 dark:bg-[#0d1117] dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Greeting */}
        <motion.p
          className="text-center text-lg mb-2 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {greeting}
        </motion.p>

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8
          text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          👋 About Me
        </motion.h2>

        {/* About Description */}
        <motion.p
          className="max-w-4xl mx-auto text-center text-lg leading-relaxed mb-12
          text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          I am a <strong>Software Engineer</strong> with a Bachelor's in{' '}
          <strong>Information Technology</strong> from IIIT Pune, graduated with a{' '}
          <strong>CGPA of 8.39</strong>. Alongside my engineering projects, I’ve explored
          AI/ML fundamentals and continue to deepen my knowledge in this field. Beyond coding,
          I love problem-solving with C++, participating in hackathons, hitting the gym, and
          trekking to reconnect with nature. I’m always eager to build impactful solutions and
          grow in the tech ecosystem.
        </motion.p>

        {/* What I Do */}
        <motion.h3
          className="text-3xl font-bold mb-10 text-center
          text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🚀 What I Do
        </motion.h3>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatIDo.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col p-6 rounded-xl border border-gray-200 dark:border-gray-700
                bg-white dark:bg-[#161b22] hover:shadow-lg hover:border-blue-400
                transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">{item.icon}
                <h4 className="font-semibold text-lg">{item.title}</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          className="flex justify-center gap-6 mt-12 text-4xl text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SiReact className="hover:text-sky-400 transition" />
          <SiNextdotjs className="hover:text-gray-900 dark:hover:text-white transition" />
          <SiNodedotjs className="hover:text-green-500 transition" />
          <SiMongodb className="hover:text-emerald-500 transition" />
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
