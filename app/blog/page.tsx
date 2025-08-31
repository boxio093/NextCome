"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    slug: "healthy-spine-exercises",
    title: "5 Exercises for a Healthy Spine",
    excerpt:
      "Learn the best exercises to keep your spine strong and flexible, reducing back pain risks.",
    image: "/blog-1.jpg",
    date: "2025-07-15",
  },
  {
    slug: "supabase-nextjs-integration",
    title: "Integrating Supabase with Next.js",
    excerpt: "Learn how to connect your Next.js app to Supabase for authentication and database management.",
    date: "2025-07-28",
    image: "/blog/supabase.jpg",
  },
  {
    slug: "knee-replacement-surgery",
    title: "Understanding Knee Replacement Surgery",
    excerpt:
      "We break down the steps, recovery time, and benefits of modern knee replacement techniques.",
    image: "/blog-2.jpg",
    date: "2025-07-10",
  },
  {
    slug: "sleeping-positions-spine-health",
    title: "Best Sleeping Positions for Spine Health",
    excerpt:
      "Discover how your sleeping posture can help reduce back pain and improve recovery.",
    image: "/blog-3.jpg",
    date: "2025-07-05",
  },
  {
    slug: "getting-started-nextjs-15",
    title: "Getting Started with Next.js 15",
    excerpt: "Learn how to build modern web apps with Next.js 15 using Turbopack and Server Components.",
    date: "2025-08-01",
    image: "/blog/nextjs15.jpg",
  },
  {
    slug: "tailwind-css-best-practices",
    title: "Tailwind CSS Best Practices",
    excerpt: "Discover tips and tricks for building scalable and maintainable designs with Tailwind CSS.",
    date: "2025-07-20",
    image: "/blog/tailwind.jpg",
  },
];

export default function BlogPage() {
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
          Our <span className="text-indigo-600">Blog</span>
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Insights, tips, and the latest news in web development and technology.
        </p>
      </motion.section>

      {/* Blog Grid */}
      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.article
             key={`${post.slug}-${index}`} // unique key now
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <div className="relative w-full h-56">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                Blog Image
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-indigo-600 font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </motion.article>
        ))}
      </section>

      {/* Back Link */}
      <div className="mt-16 text-center">
        <Link href="/" className="text-indigo-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
