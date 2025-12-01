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
  SiPostman,
  SiNotion,
  SiVscodium,
  SiGraphql,
} from 'react-icons/si'
import { FaTools, FaKey } from 'react-icons/fa'
import { RiJavaFill } from 'react-icons/ri'

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
    { key: 'tailwind', label: 'Tailwind CSS', level: 90, icon: <SiTailwindcss /> },
    { key: 'ts', label: 'TypeScript', level: 88, icon: <SiTypescript /> },
  ],
  Backend: [
    { key: 'node', label: 'Node.js / Express', level: 85, icon: <SiNodedotjs /> },
    { key: 'mongodb', label: 'MongoDB', level: 82, icon: <SiMongodb /> },
    { key: 'mysql', label: 'MySQL', level: 78, icon: <SiMysql /> },
    { key: 'rest_api', label: 'REST API Design', level: 83, icon: <FaKey /> },
    { key: 'graphql', label: 'GraphQL', level: 70, icon: <SiGraphql /> },
    { key: 'auth', label: 'Authentication & Authorization (JWT, OAuth)', level: 78, icon: <FaKey /> },
    { key: 'solidity', label: 'Solidity', level: 80, icon: <SiSolidity /> },
  ],
  Languages: [
    { key: 'cpp', label: 'C++', level: 82, icon: <SiCplusplus /> },
    { key: 'java', label: 'Java', level: 82, icon: <RiJavaFill /> },
    { key: 'js', label: 'JavaScript', level: 90, icon: <SiTypescript /> },
  ],
  Tools: [
    { key: 'docker', label: 'Docker', level: 72, icon: <SiDocker /> },
    { key: 'git', label: 'Git / CI-CD', level: 80, icon: <SiGit /> },
    { key: 'postman', label: 'Postman', level: 78 },
    { key: 'vscode', label: 'VS Code', level: 90, icon: <SiVscodium /> },
    { key: 'notion', label: 'Notion', level: 75, icon: <SiNotion /> },
  ],
  'Other': [
    { key: 'dsa', label: 'Data Structures & Algorithms (DSA)', level: 88 },
    { key: 'prob_solve', label: 'Problem Solving', level: 85 },
    { key: 'cp', label: 'Competitive Programming', level: 82 },
    { key: 'sys_design', label: 'System Design', level: 75 },
    { key: 'oop', label: 'Object-Oriented Programming (OOP)', level: 85 },
    { key: 'os', label: 'Operating Systems', level: 80 },
  ],
}

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
}

export default function SkillSection() {
  const [activeTab, setActiveTab] = useState<string>('Frontend')

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-[#0f1a2b] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            <FaTools className="text-green-500" />
            Skills & Technologies
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base">
            A collection of tools and technologies I use to design, build, and scale modern
            web applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.keys(SKILL_CATEGORIES).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow'
                  : 'bg-transparent border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#101b2b]'
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Skills List */}
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="bg-white dark:bg-[#0f1724] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
        >
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
            {activeTab} Skills
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {SKILL_CATEGORIES[activeTab].map((skill) => (
              <motion.div
                key={skill.key}
                variants={itemVariants}
                className="p-4 rounded-lg border border-gray-100 dark:border-gray-800 bg-gradient-to-b from-transparent to-white/5 dark:to-white/5 hover:shadow-inner hover:scale-[1.02] transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-[#0b1220] text-xl text-green-500">
                      {skill.icon || <SiReact />}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        {skill.label}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Proficiency</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</div>
                </div>

                <div className="w-full bg-gray-200 dark:bg-gray-800 h-3 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
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
