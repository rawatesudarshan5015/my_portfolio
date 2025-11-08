'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import GitHubCalendar from 'react-github-calendar'

type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
}

type LanguageCount = { [key: string]: number }

const GitHubSkills: React.FC<{ username: string }> = ({ username }) => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [languages, setLanguages] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  // Fetch GitHub data
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`)
        if (!res.ok) throw new Error('Failed to fetch repositories.')

        const data: Repo[] = await res.json()

        // Sort by stars and take top 6
        const sorted = data.sort((a, b) => b.stargazers_count - a.stargazers_count)
        setRepos(sorted.slice(0, 6))

        // Count top languages
        const langCount: LanguageCount = {}
        data.forEach((repo) => {
          if (repo.language) {
            langCount[repo.language] = (langCount[repo.language] || 0) + 1
          }
        })

        const topLanguages = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([lang]) => lang)

        setLanguages(topLanguages)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [username])

  if (!mounted) return null
  if (loading)
    return <p className="text-center text-gray-500">Loading GitHub data...</p>
  if (error)
    return <p className="text-center text-red-500">Failed to load GitHub data.</p>

  return (
    <section  className="py-20 px-6 md:px-16 bg-[#0b1623] dark:bg-[#0a1420] text-gray-100 transition-colors duration-500">
      {/* 🧠 Section Header */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🧩 GitHub Projects & Skills
      </motion.h2>

      {/* 🧠 Top Languages */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {languages.map((lang) => (
          <motion.span
            key={lang}
            className="px-5 py-2.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full font-medium shadow-sm hover:shadow-md transition-transform transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            {lang}
          </motion.span>
        ))}
      </div>

      {/* 🗂️ Repositories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {repos.map((repo) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-[#11182a] p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-transparent hover:border-blue-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-1">
              {repo.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 flex-1 leading-relaxed">
              {repo.description || 'No description provided.'}
            </p>
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-auto">
              <span>{repo.language || 'N/A'}</span>
              <span>⭐ {repo.stargazers_count}</span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* 🟩 GitHub Contribution Graph */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.h3
          className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🟢 GitHub Activity
        </motion.h3>

        <div className="overflow-x-auto mb-14 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#11182a] p-4 shadow-sm">
          <GitHubCalendar
            username={username}
            blockSize={15}
            blockMargin={5}
            colorScheme={theme}
            fontSize={14}
          />
        </div>

        {/* 📊 Streak + Stats */}
        <div className="grid md:grid-cols-2 gap-8 justify-center items-center">
          <motion.img
            loading="lazy"
            src={`https://streak-stats.demolab.com?user=${username}&theme=${theme}&hide_border=true`}
            alt="GitHub Streak"
            className="mx-auto rounded-xl shadow-md"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
          <motion.img
            loading="lazy"
            src={`https://github-readme-stats-sigma-five.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&hide_border=true`}
            alt="GitHub Stats"
            className="mx-auto rounded-xl shadow-md"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  )
}

export default GitHubSkills
