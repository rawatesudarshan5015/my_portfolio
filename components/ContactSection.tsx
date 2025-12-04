'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
import toast, { Toaster } from 'react-hot-toast'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      toast.error('⚠️ Please fill all fields before sending.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        toast.success('✅ Message sent successfully!')
        setForm({ name: '', email: '', message: '' })
      } else {
        toast.error('❌ Failed to send message. Try again.')
      }
    } catch (err) {
      toast.error('⚠️ Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-[#0f1a2b] transition-colors duration-500">
      <Toaster
        position="top-center"
        toastOptions={{
          style: { background: '#111827', color: '#fff' },
        }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          Get in Touch
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-8 rounded-2xl shadow-xl space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div>
            <label className="block mb-1 text-left font-medium">Name</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-gray-100"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-1 text-left font-medium">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-gray-100"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-left font-medium">Message</label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-gray-100"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition disabled:opacity-70"
          >
            {loading ? '🚀 Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>

      <motion.div
  className="flex justify-center space-x-6 mt-8 text-2xl"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
>
  <a
    href="mailto:rawatesudarshan5015@gmail.com"
    className="text-gray-400 dark:text-gray-200 hover:text-red-400 transition"
  >
    <FaEnvelope />
  </a>
  <a
    href="https://github.com/rawatesudarshan5015"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 dark:text-gray-200 hover:text-green-300 transition"
  >
    <FaGithub />
  </a>
  <a
    href="https://linkedin.com/in/sudarshan-rawate"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 dark:text-gray-200 hover:text-blue-500 transition"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://leetcode.com/u/rawatesudarshan/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 dark:text-gray-200 hover:text-yellow-400 transition"
  >
    <SiLeetcode />
  </a>
  <a
    href="https://www.geeksforgeeks.org/profile/rawatesudafhas?tab=activity"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 dark:text-gray-200 hover:text-green-400 transition"
  >
    <SiGeeksforgeeks />
  </a>
</motion.div>
      </div>
    </section>
  )
}
