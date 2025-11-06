'use client'

import { motion } from 'framer-motion'
import {
  FaLaptopCode,
  FaServer,
  FaDumbbell,
  FaMountain,
  FaEthereum,
  FaUsers
} from 'react-icons/fa'
import {
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiCplusplus,
  SiSolidity,
  SiMysql
} from 'react-icons/si'
import { BsInfinity } from 'react-icons/bs'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { MdApi } from 'react-icons/md'

const whatIDo = [
  {
    title: 'Blockchain Development',
    icon: <FaEthereum className="text-purple-400 text-3xl" />,
    description:
      'Experienced in building decentralized applications with Solidity, Ethereum, and smart contract integration using Next.js and Alchemy. Built projects like Decentralized Medical Record Sharing System and Voting DApp.',
  },
  {
    title: 'Full-Stack Web Development',
    icon: <FaLaptopCode className="text-sky-400 text-3xl" />,
    description:
      'Developing secure, scalable applications using Next.js, Node.js, Express, MongoDB, and MySQL. Skilled at designing modular architectures like Citywide Hospital Management and College Connect platforms.',
  },
  {
    title: 'Backend & API Engineering',
    icon: <MdApi className="text-rose-400 text-3xl" />,
    description:
      'Designing RESTful and decentralized APIs with focus on efficiency, security, and scalability. Comfortable with authentication, role-based access, and microservice patterns.',
  },
  {
    title: 'Cloud & DevOps',
    icon: <BsInfinity className="text-cyan-400 text-3xl" />,
    description:
      'Hands-on experience with AWS and CI/CD pipelines. Skilled in deploying production-ready applications and managing infrastructure for performance and reliability.',
  },
  {
    title: 'Problem Solving & DSA',
    icon: <SiCplusplus className="text-blue-400 text-3xl" />,
    description:
      'Regularly solving data structure and algorithm problems on LeetCode and GeeksforGeeks. Strong in OOP, DBMS, and system design concepts.',
  },
  {
    title: 'AI & Quant Exploration',
    icon: <GiArtificialIntelligence className="text-indigo-400 text-3xl" />,
    description:
      'Exploring AI/ML and quantitative finance through projects like GoQuant Trade Simulator based on the Almgren–Chriss market impact model.',
  },
  {
    title: 'Open Source & Collaboration',
    icon: <FaUsers className="text-green-400 text-3xl" />,
    description:
      'Contributing to open source projects to learn, share knowledge, and collaborate with other developers globally. Open to contributing to Web3 and fintech repositories.',
  },
  {
    title: 'Gymming & Discipline',
    icon: <FaDumbbell className="text-pink-400 text-3xl" />,
    description:
      'Working out regularly to maintain focus, discipline, and mental clarity. Fitness keeps my problem-solving sharp.',
  },
  {
    title: 'Trekking & Resilience',
    icon: <FaMountain className="text-emerald-400 text-3xl" />,
    description:
      'Trekking helps me reset my perspective and build resilience — a trait I carry into debugging and engineering challenges.',
  },
]

const AboutSection: React.FC = () => {
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
          I’m <strong>Sudarshan Rawate</strong>, a <strong>Blockchain Developer</strong> and
          <strong> Full-Stack Engineer</strong> passionate about building scalable, secure, and impactful products.
          I hold a B.E. in Information Technology from <strong>IIIT Pune</strong> with a CGPA of <strong>8.39</strong>.
          <br />
          My work spans from decentralized medical record systems and hospital management
          platforms to market simulators and cloud-integrated web apps. My long-term goal is to
          build innovative blockchain infrastructure and work with teams like <strong>Coinbase</strong> that
          push Web3 forward.
          <br />
          When I’m not coding, you’ll find me training at the gym, exploring trails, or
          learning advanced concepts in blockchain, AI, and quant systems.
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
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col p-6 rounded-xl border border-gray-200 dark:border-gray-700
                bg-white dark:bg-[#161b22] hover:shadow-xl hover:border-blue-400
                transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
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
          className="flex justify-center gap-6 mt-12 text-4xl text-gray-500 dark:text-gray-400 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SiReact className="hover:text-sky-400 transition" />
          <SiNextdotjs className="hover:text-gray-900 dark:hover:text-white transition" />
          <SiNodedotjs className="hover:text-green-500 transition" />
          <SiMongodb className="hover:text-emerald-500 transition" />
          <SiMysql className="hover:text-blue-400 transition" />
          <SiSolidity className="hover:text-purple-400 transition" />
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
