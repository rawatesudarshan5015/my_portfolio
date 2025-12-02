'use client'

import { motion } from 'framer-motion'
import {
  FaLaptopCode,
  FaServer,
  FaDumbbell,
  FaMountain,
  FaEthereum,
} from 'react-icons/fa'
import {
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiCplusplus,
  SiSolidity,
  SiMysql,
} from 'react-icons/si'
import { BsInfinity } from 'react-icons/bs'
import { MdApi } from 'react-icons/md'

const whatIDo = [
  {
    title: 'Blockchain Development',
    icon: <FaEthereum className="text-indigo-400 text-3xl" />,
    description:
      'Building decentralized applications using Solidity, Ethereum, and Next.js. I’ve created projects like a Medical Record Sharing DApp and a Decentralized Voting System.',
  },
  {
    title: 'Full-Stack Web Development',
    icon: <FaLaptopCode className="text-teal-400 text-3xl" />,
    description:
      'Developing scalable apps with Next.js, Node.js, Express, MongoDB, and MySQL. I enjoy designing clean architectures for platforms like Citywide Hospital Management and College Connect.',
  },
  {
    title: 'Backend & API Development',
    icon: <MdApi className="text-blue-400 text-3xl" />,
    description:
      'Creating secure RESTful and decentralized APIs with a focus on performance, scalability, and authentication using modern backend practices.',
  },
  {
    title: 'Cloud & DevOps',
    icon: <BsInfinity className="text-purple-400 text-3xl" />,
    description:
      'Experienced in deploying and managing applications on AWS with CI/CD pipelines to ensure reliability and smooth performance.',
  },
  {
    title: 'Problem Solving & DSA',
    icon: <SiCplusplus className="text-sky-400 text-3xl" />,
    description:
      'Practicing regularly on LeetCode and GeeksforGeeks. Strong in OOP, DBMS, and algorithmic problem solving.',
  },
  {
    title: 'Fitness & Focus',
    icon: <FaDumbbell className="text-pink-400 text-3xl" />,
    description:
      'I work out regularly to stay disciplined and maintain sharp focus — traits that help me code efficiently.',
  },
  {
    title: 'Trekking & Resilience',
    icon: <FaMountain className="text-emerald-400 text-3xl" />,
    description:
      'Trekking resets my perspective and strengthens my resilience — qualities that reflect in how I approach complex challenges.',
  },
]

const AboutSection: React.FC = () => {
  const hour = new Date().getHours()
  const greeting =
    hour < 12
      ? 'Good Morning ☀️'
      : hour < 18
      ? 'Good Afternoon 🌤️'
      : 'Good Evening 🌙'

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-[#0a1420] text-gray-900 dark:text-gray-100 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Greeting */}
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {greeting}
        </motion.p>

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          👋 About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="max-w-4xl mx-auto text-lg leading-relaxed mb-12 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          I’m <strong>Sudarshan Rawate</strong>, a <strong>Blockchain Developer</strong> and{' '}
          <strong>Full-Stack Engineer</strong> passionate about building secure and scalable products.
          I graduated in <strong>Information Technology</strong> from <strong>I2IT Pune</strong> with a CGPA of{' '}
          <strong>7.75</strong>.
          <br />
          <br />
          I’ve worked on projects ranging from blockchain-based Voting systems and hospital platforms to
          quantitative trading simulators. My goal is to build innovative blockchain infrastructure and collaborate
          with world-class Web3 teams like <strong>Coinbase</strong>.
          <br />
          <br />
          Outside of tech, I enjoy gym workouts, trekking, and exploring new ideas in AI, blockchain, and finance.
        </motion.p>

        {/* What I Do */}
        <motion.h3
          className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🚀 What I Do
        </motion.h3>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatIDo.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#101d2e] hover:shadow-lg hover:border-blue-400 transition-all duration-300 text-left"
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

        {/* Tech Stack */}
        <motion.div
          className="flex justify-center gap-6 mt-12 text-4xl text-gray-500 dark:text-gray-400 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SiReact className="hover:text-sky-400 transition" />
          <SiNextdotjs className="hover:text-gray-900 dark:hover:text-white transition" />
          <SiNodedotjs className="hover:text-green-500 transition" />
          <SiMongodb className="hover:text-emerald-400 transition" />
          <SiMysql className="hover:text-blue-400 transition" />
          <SiSolidity className="hover:text-indigo-400 transition" />
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection;
