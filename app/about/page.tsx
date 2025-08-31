"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-gray-900 text-white">
      
      {/* ===== Hero Section ===== */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-[80vh] flex items-center">
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
            <div className="w-full h-80 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
              Team Photo
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Mission & Vision ===== */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Our Mission",
              text: "To create impactful and scalable digital products that empower businesses and enrich user experiences.",
            },
            {
              title: "Our Vision",
              text: "To be a globally recognized leader in innovative web solutions, setting new standards for quality and creativity.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-gray-700 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Stats Section ===== */}
      <section className="py-16 bg-gray-900 border-t border-gray-700">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "120+", label: "Projects Delivered" },
            { value: "50+", label: "Happy Clients" },
            { value: "15+", label: "Team Members" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h4 className="text-3xl md:text-4xl font-bold text-yellow-400">{stat.value}</h4>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Team Section ===== */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meet Our <span className="text-yellow-400">Team</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { name: "John Doe", role: "CEO", img: "/team1.jpg" },
              { name: "Jane Smith", role: "Lead Designer", img: "/team2.jpg" },
              { name: "Mark Wilson", role: "Developer", img: "/team3.jpg" },
              { name: "Sara Lee", role: "Marketing", img: "/team4.jpg" },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg border-2 border-yellow-400 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="text-lg font-semibold mt-4">{member.name}</h4>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
