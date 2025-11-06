'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiSolidity,
  SiDocker,
  SiPython,
  SiMysql,
  SiGit,
  SiCplusplus,
  SiTensorflow,
} from 'react-icons/si'
import { FaGraduationCap, FaDownload, FaBriefcase, FaAws } from 'react-icons/fa'

type Skill = {
  key: string
  label: string
  level: number
  icon?: React.ReactNode
}

const SKILL_CATEGORIES: Record<string, Skill[]> = {
  Frontend: [
    { key: 'react', label: 'React.js', level: 90, icon: <SiReact /> },
    { key: 'next', label: 'Next.js', level: 85, icon: <SiNextdotjs /> },
    { key: 'ts', label: 'TypeScript', level: 88, icon: <SiTypescript /> },
    { key: 'tailwind', label: 'Tailwind CSS', level: 90, icon: <SiTailwindcss /> },
    { key: 'mui', label: 'Material UI', level: 80, icon: <SiReact /> },
  ],
  Backend: [
    { key: 'node', label: 'Node.js / Express', level: 85, icon: <SiNodedotjs /> },
    { key: 'mongodb', label: 'MongoDB', level: 82, icon: <SiMongodb /> },
    { key: 'mysql', label: 'MySQL', level: 78, icon: <SiMysql /> },
    { key: 'solidity', label: 'Solidity / Smart Contracts', level: 80, icon: <SiSolidity /> },
  ],
  'AI / ML': [
    { key: 'python', label: 'Python', level: 75, icon: <SiPython /> },
    { key: 'ml', label: 'TensorFlow / ML Basics', level: 65, icon: <SiTensorflow /> },
  ],
  Languages: [
    { key: 'cpp', label: 'C++', level: 82, icon: <SiCplusplus /> },
    { key: 'js', label: 'JavaScript', level: 90, icon: <SiTypescript /> },
    { key: 'ts', label: 'TypeScript', level: 88, icon: <SiTypescript /> },
  ],
  'DevOps & Tools': [
    { key: 'docker', label: 'Docker', level: 72, icon: <SiDocker /> },
    { key: 'aws', label: 'AWS (Basic)', level: 68, icon: <FaAws /> },
    { key: 'git', label: 'Git / CI-CD', level: 80, icon: <SiGit /> },
  ],
  Security: [
    { key: 'oauth', label: 'OAuth / JWT Auth', level: 72 },
    { key: 'websec', label: 'Web Security Essentials', level: 65 },
  ],
  Architecture: [
    { key: 'design', label: 'System Design', level: 70 },
    { key: 'micro', label: 'Microservices Architecture', level: 62 },
  ],
  Testing: [
    { key: 'unit', label: 'Unit / Integration Testing', level: 70 },
    { key: 'e2e', label: 'E2E Testing (Cypress)', level: 60 },
  ],
}

const tabKeys = Object.keys(SKILL_CATEGORIES)

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
}

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState<string>('Frontend')

  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50 dark:bg-[#0b1623] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h3 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full text-white shadow">
                <FaGraduationCap />
              </span>
              Resume
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl text-sm md:text-base">
              Education, experience highlights, and a categorized skill matrix recruiters actually care about.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/Sudarshan_Rawate_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-green-500 to-teal-500 text-white shadow hover:scale-[1.03] active:scale-[0.98] transition"
            >
              <FaDownload />
              Download Resume
            </a>

            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#0f1724] transition"
            >
              <FaBriefcase />
              Experience
            </a>
          </div>
        </div>

        {/* Education Card */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-10"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-[#0f1724] border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start gap-6">
              <div className="w-2.5 rounded-full bg-gradient-to-b from-green-400 to-emerald-500 h-24" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    B.E. Information Technology
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">(2021 - 2025)</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 font-medium">
                  International Institute of Information Technology, Pune
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  Graduating with a CGPA of <strong>8.39</strong>, focusing on software engineering, full-stack
                  development, and AI/ML fundamentals with multiple hands-on projects and internships.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tabs */}
        <div className="mb-6 flex flex-wrap gap-3">
          {tabKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow'
                    : 'bg-transparent border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#101b2b]'
                }`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Skills */}
<motion.div
  key={activeTab} // ✅ Forces re-render when tab changes
  initial="hidden"
  animate="show"
  variants={containerVariants}
  className="bg-white dark:bg-[#0f1724] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
>
  <div className="mb-4">
    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{activeTab}</h4>
    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
      Core tools and proficiency in <strong>{activeTab}</strong>.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {SKILL_CATEGORIES[activeTab].map((skill) => (
      <motion.div
        key={skill.key}
        variants={itemVariants}
        className="p-4 rounded-lg border border-gray-100 dark:border-gray-800 bg-gradient-to-b from-transparent to-white/5 dark:to-white/5 hover:shadow-inner hover:scale-[1.01] transition"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-[#0b1220] text-xl text-green-500">
              {skill.icon || <SiReact />}
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">{skill.label}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Proficiency</div>
            </div>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</div>
        </div>

        <div className="w-full bg-gray-200 dark:bg-gray-800 h-3 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
          />
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

      </div>
    </section>
  )
}
