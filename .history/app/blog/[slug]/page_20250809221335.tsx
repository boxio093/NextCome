import { notFound } from "next/navigation";
import React from "react";

type Post = {
  title: string;
  content: string[];
  author: string;
  date: string;
};

const posts: Record<string, Post> = {
  "getting-started-nextjs-15": {
    title: "Getting Started with Next.js 15",
    author: "John Doe",
    date: "2025-08-01",
    content: [
      "Next.js 15 introduces powerful new features like Turbopack and Server Actions. In this post, we'll guide you through setting it up and building your first project.",
      "Start by installing Next.js 15 using `npx create-next-app@latest`. Explore the new Turbopack build system for lightning-fast development.",
      "We'll also cover how to structure your project, manage routing with the App Router, and use the new React Server Components effectively.",
    ],
  },
  "tailwind-css-best-practices": {
    title: "Tailwind CSS Best Practices",
    author: "Jane Smith",
    date: "2025-07-20",
    content: [
      "Tailwind CSS allows you to build clean, responsive designs quickly.",
      "Use utility-first classes for layout, and extract reusable components for frequently used UI patterns.",
      "We also recommend using `@apply` for repetitive styles in custom CSS files to keep your codebase organized.",
    ],
  },
  "supabase-nextjs-integration": {
    title: "Integrating Supabase with Next.js",
    author: "Michael Lee",
    date: "2025-07-28",
    content: [
      "Supabase is a backend-as-a-service platform that integrates perfectly with Next.js.",
      "We'll walk through creating a Supabase project, setting up authentication, and storing data securely.",
      "By the end, you'll have a full-stack Next.js app with a Supabase database powering your backend.",
    ],
  },
};

const formatDate = (dateStr: string) =>
  new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" }).format(
    new Date(dateStr)
  );

const BlogPostPage: React.FC<{ params: { slug: string } }> = ({ params }) => {
  const post = posts[params.slug];

  if (!post) return notFound();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-4">{post.title}</h1>
        <p className="text-lg text-blue-100">
          By {post.author} • {formatDate(post.date)}
        </p>
      </section>

      {/* Blog Content */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        {post.content.map((paragraph, idx) => (
          <p
            key={idx}
            className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 dark:bg-gray-800 py-10 text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4">Enjoyed this post?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Subscribe to our blog to get the latest updates straight to your inbox.
        </p>
        <a
          href="/contact"
          aria-label="Subscribe to blog updates"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow"
        >
          Subscribe Now
        </a>
      </section>
    </>
  );
};

export default BlogPostPage;
