"use client";

import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* -----------------------
   Page (Animated version)
   ----------------------- */
export default function HomePage(): JSX.Element {
  return (
    <main className="max-w-9xl mx-auto px-6 py-12 bg-white dark:bg-gray-900">
      <AnimatedHero />

      <section id="features" className="mt-20 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {features.map((f, i) => (
          <AnimatedFeatureCard key={i} {...f} />
        ))}
      </section>

      <ShowcaseSection />

      <PricingSection />

      <section className="mt-24 bg-indigo-50 dark:bg-gray-800 p-10 rounded-lg max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <TestimonialsCarousel />
      </section>

      <CallToAction />

      <footer className="mt-32 border-t border-gray-200 dark:border-gray-700 py-8 text-center text-gray-600 text-sm dark:text-gray-400">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </main>
  );
}

/* -----------------------
   Hero (staggered + floating image)
   ----------------------- */
function AnimatedHero() {
  const prefersReduced = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
  };

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-6xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center lg:text-left max-w-xl"
      >
        <motion.h1 variants={child} className="text-5xl font-bold mb-6 leading-tight">
          Welcome to <span className="text-indigo-600">MyApp</span>
        </motion.h1>

        <motion.p variants={child} className="text-xl text-gray-700 mb-8 dark:text-gray-300">
          Built with Next.js 14 and Tailwind CSS — scalable, fast, and beautiful.
        </motion.p>

        <motion.div variants={child} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <Link
            href="/about"
            className="inline-block px-8 py-3 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-md border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-gray-800"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="max-w-md w-full"
        aria-hidden={false}
      >
        {/* floating image (subtle y animation) */}
        <motion.div
          animate={prefersReduced ? {} : { y: [0, -10, 0] }}
          transition={prefersReduced ? {} : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/superhero-standing-front-sunburst_603843-1871.avif"
            alt="Hero Illustration"
            className="w-full h-auto rounded-lg shadow-lg"
            width={720}
            height={540}
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}


