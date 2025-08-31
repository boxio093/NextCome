"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { useState } from "react";
import type { JSX } from "react";
//import * as React from "react";

/* -----------------------
   Page
----------------------- */
export default function HomePage(): JSX.Element {
  return (
    <main className="max-w-9xl mx-auto px-6 py-12 bg-white dark:bg-gray-900">
      <AnimatedHero />

      {/* Features */}
      <section
        id="features"
        className="mt-20 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {features.map((f, i) => (
          <AnimatedFeatureCard key={i} {...f} />
        ))}
      </section>

      {/* Showcase */}
      <ShowcaseSection />

      {/* Pricing */}
      <PricingSection />

      {/* Testimonials */}
      <section className="mt-24 bg-indigo-50 dark:bg-gray-800 p-10 rounded-lg max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <TestimonialsCarousel />
      </section>

      {/* CTA */}
      <CallToAction />

      {/* Footer */}
      <footer className="mt-32 border-t border-gray-200 dark:border-gray-700 py-8 text-center text-gray-600 text-sm dark:text-gray-400">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </main>
  );
}

/* -----------------------
   Hero
----------------------- */
function AnimatedHero() {
  const prefersReduced = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
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
        <motion.h1
          variants={child}
          className="text-5xl font-bold mb-6 leading-tight"
        >
          Welcome to <span className="text-indigo-600">MyApp</span>
        </motion.h1>

        <motion.p
          variants={child}
          className="text-xl text-gray-600 mb-8 dark:text-gray-300"
        >
          Built with Next.js 14 and Tailwind CSS — scalable, fast, and
          beautiful.
        </motion.p>

        <motion.div
          variants={child}
          className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
        >
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
      >
        <motion.div
          animate={prefersReduced ? {} : { y: [0, -10, 0] }}
          transition={
            prefersReduced
              ? {}
              : { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <div className="w-full h-80 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-2xl">
            Hero Illustration
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* -----------------------
   Feature Card
----------------------- */
type FeatureProps = {
  title: string;
  description: string;
  icon: string;
};

const features: FeatureProps[] = [
  { title: "Fast Performance", description: "Optimized for blazing fast load times.", icon: "⚡" },
  { title: "Easy to Use", description: "Intuitive interface for all users.", icon: "👍" },
  { title: "Secure", description: "Built with security best practices.", icon: "🔒" },
  { title: "Customizable", description: "Flexible components and themes.", icon: "🎨" },
  { title: "SEO Friendly", description: "Optimized for search engines.", icon: "🔍" },
  { title: "Scalable", description: "Grows with your business.", icon: "📈" },
  { title: "24/7 Support", description: "We're here anytime.", icon: "📞" },
  { title: "Cross-Platform", description: "Works on all devices.", icon: "📱" },
];

function AnimatedFeatureCard({ title, description, icon }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}

/* -----------------------
   Showcase Section
----------------------- */
function ShowcaseSection() {
  return (
    <section className="mt-24 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Why Choose MyApp?</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Our platform is designed for speed, flexibility, and ease of use, making
        it the perfect solution for businesses of any size.
      </p>
    </section>
  );
}

/* -----------------------
   Pricing Section
----------------------- */
function PricingSection() {
  return (
    <section className="mt-24 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Pricing</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-12">
        Choose the plan that fits your needs.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <PricingCard plan="Basic" price="$9/mo" features={["Feature 1", "Feature 2"]} />
        <PricingCard plan="Pro" price="$29/mo" features={["Everything in Basic", "Feature 3", "Feature 4"]} highlight />
        <PricingCard plan="Enterprise" price="Contact Us" features={["Custom Solutions", "Dedicated Support"]} />
      </div>
    </section>
  );
}

type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
  highlight?: boolean;
};

function PricingCard({ plan, price, features, highlight }: PricingCardProps) {
  return (
    <div
      className={`p-6 rounded-lg border ${
        highlight ? "border-indigo-600 shadow-lg" : "border-gray-200 dark:border-gray-700"
      }`}
    >
      <h3 className="text-xl font-semibold mb-4">{plan}</h3>
      <p className="text-2xl font-bold mb-4">{price}</p>
      <ul className="mb-6 space-y-2">
        {features.map((f, i) => (
          <li key={i} className="text-gray-600 dark:text-gray-300">
            {f}
          </li>
        ))}
      </ul>
      <button
        className={`px-6 py-2 rounded-md font-semibold transition ${
          highlight
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
        }`}
      >
        Choose Plan
      </button>
    </div>
  );
}

/* -----------------------
   Testimonials Carousel
----------------------- */
function TestimonialsCarousel() {
  const testimonials = [
    { quote: "MyApp transformed our workflow.", author: "Jane Doe, CEO" },
    { quote: "Super fast and reliable!", author: "John Smith, CTO" },
  ];
  const [index, setIndex] = useState(0);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <blockquote className="italic text-gray-800 dark:text-gray-200 text-lg max-w-xl mx-auto">
        “{testimonials[index].quote}”
      </blockquote>
      <cite className="block mt-4 font-semibold text-indigo-700 dark:text-indigo-400">
        — {testimonials[index].author}
      </cite>
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-indigo-600" : "bg-gray-300 dark:bg-gray-500"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* -----------------------
   Call To Action
----------------------- */
function CallToAction() {
  return (
    <section className="mt-24 text-center max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Join thousands of happy customers today.
      </p>
      <Link
        href="/signup"
        className="px-8 py-3 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
      >
        Get Started
      </Link>
    </section>
  );
}
