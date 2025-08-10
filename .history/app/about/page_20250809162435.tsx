"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            About <span className="text-yellow-400">Our Company</span>
          </h1>
          <p className="text-lg text-gray-300">
            We are passionate about building exceptional digital experiences.
            Our team blends creativity, technology, and strategy to deliver
            impactful results.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition">
              Learn More
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-300 rounded-lg hover:bg-gray-300 hover:text-gray-900 transition">
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src="/team-photo.jpg"
            alt="Team photo"
            width={500}
            height={400}
            className="w-full h-auto object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
