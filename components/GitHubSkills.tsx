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

  // username= 'rawatesudarshan5015'

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

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
  if (loading) return <p className="text-center text-gray-500">Loading GitHub skills...</p>
  if (error) return <p className="text-center text-red-500">Failed to load GitHub data.</p>

  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50 dark:bg-[#0d1324] transition-colors duration-500">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
        🔧 GitHub Projects & Skills
      </h2>

      {/* 🧠 Top Languages */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {languages.map((lang) => (
          <motion.span
            key={lang}
            className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full font-medium shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {lang}
          </motion.span>
        ))}
      </div>

      {/* 🗂️ Repositories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {repos.map((repo) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-[#11182a] p-5 rounded-xl shadow-md hover:shadow-xl transition flex flex-col gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">{repo.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm flex-1">
              {repo.description || 'No description provided.'}
            </p>
            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
              <span>{repo.language || 'N/A'}</span>
              <span>⭐ {repo.stargazers_count}</span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* 🟩 GitHub Contribution Graph */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          🟢 GitHub Activity
        </h3>

        <div className="overflow-x-auto mb-10">
          <GitHubCalendar
            username={username}
            blockSize={15}
            blockMargin={5}
            colorScheme={theme}
            fontSize={14}
          />
        </div>

        {/* 📊 Streak + Stats Badges */}
        <div className="grid md:grid-cols-2 gap-6 justify-center items-center">
          <motion.img
            loading="lazy"
            src={`https://streak-stats.demolab.com?user=${username}&theme=${theme}&hide_border=true`}
            alt="GitHub Streak"
            className="mx-auto rounded-lg shadow-md"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.img
            loading="lazy"
            src={`https://github-readme-stats-sigma-five.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&hide_border=true`}
            alt="GitHub Stats"
            className="mx-auto rounded-lg shadow-md"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  )
}

export default GitHubSkills
