"use client";
import { Variants, motion } from "framer-motion";
//import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  // Variants for animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemLeftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  };

  const itemRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-16"
      >
        <h1 className="text-5xl font-bold mb-6 text-center">
          Welcome to <span className="text-indigo-600">MyApp</span>
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 text-center">
          Built with Next.js 14 and Tailwind CSS — scalable, fast, and beautiful.
        </p>

        {/* Contact Info + Map Grid with animations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Info */}
          <motion.div
            className="space-y-6 text-gray-800 dark:text-gray-200"
            variants={itemLeftVariants}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">Our Location</h2>
              <p>123 Main Street<br />Lagos, Nigeria</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Phone</h2>
              <p>
                <a href="tel:+2348012345678" className="text-indigo-600 hover:underline">
                  +234 801 234 5678
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Email</h2>
              <p>
                <a href="mailto:contact@myapp.com" className="text-indigo-600 hover:underline">
                  contact@myapp.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Embedded Google Map */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-lg"
            variants={itemRightVariants}
          >
            <iframe
              title="MyApp Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5328742011923!2d3.3792057153127884!3d6.524379395282457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf43bc3b3cc4d%3A0xb63935ca0a3f6f54!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1691598327149!5m2!1sen!2sus"
              width="100%"
              height="300"
              allowFullScreen={false}
              loading="lazy"
              className="border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>
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
