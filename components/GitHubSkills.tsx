'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
}

type LanguageCount = {
  [key: string]: number
}

const GitHubSkills: React.FC<{ username: string }> = ({ username }) => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [languages, setLanguages] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/rawatesudarshan5015/repos`)
        if (!res.ok) throw new Error('Failed to fetch')
        const data: Repo[] = await res.json()

        // Sort repos by stars descending
        const sorted = data.sort((a, b) => b.stargazers_count - a.stargazers_count)
        setRepos(sorted.slice(0, 6)) // Show top 6 repos

        // Count languages
        const langCount: LanguageCount = {}
        data.forEach((repo) => {
          if (repo.language) {
            langCount[repo.language] = (langCount[repo.language] || 0) + 1
          }
        })
        // Top 5 languages
        const topLanguages = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([lang]) => lang)
        setLanguages(topLanguages)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [username])

  if (loading) return <p className="text-center text-gray-500">Loading GitHub skills...</p>
  if (error) return <p className="text-center text-red-500">Failed to load GitHub data.</p>

  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
        🔧 GitHub Projects & Skills
      </h2>

      {/* Skills cloud */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {languages.map((lang) => (
          <motion.span
            key={lang}
            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {lang}
          </motion.span>
        ))}
      </div>

      {/* Top Repos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {repos.map((repo) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition flex flex-col gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-gray-900 text-lg">{repo.name}</h3>
            <p className="text-gray-600 text-sm flex-1">
              {repo.description || 'No description'}
            </p>
            <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
              <span>{repo.language || 'N/A'}</span>
              <span>⭐ {repo.stargazers_count}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default GitHubSkills
