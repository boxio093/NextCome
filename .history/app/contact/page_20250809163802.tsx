"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-5xl font-bold mb-6">
          Welcome to <span className="text-indigo-600">MyApp</span>
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Built with Next.js 14 and Tailwind CSS — scalable, fast, and beautiful.
        </p>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Get in Touch</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Your message..."
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full px-8 py-3 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.section>

      {/* Back Link */}
      <div className="mt-10 text-center">
        <Link href="/" className="text-indigo-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
