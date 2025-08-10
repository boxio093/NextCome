import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Hero({}: Props) {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Smarter <span className="text-yellow-400">Web Experiences</span>
          </h1>
          <p className="text-lg text-gray-200">
            We create fast, responsive, and visually stunning websites that captivate and convert.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://via.placeholder.com/500"
            alt="Hero Illustration"
            className="w-full max-w-lg mx-auto rounded-xl shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
