"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="max-w-9xl mx-auto px-6 py-15 bg-white dark:bg-gray-900">
      
      {/* ===== Hero Section ===== */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left max-w-xl"
        >
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-indigo-600">MyApp</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 dark:text-gray-300">
            Built with Next.js 14 and Tailwind CSS — scalable, fast, and beautiful.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
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
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-md w-full"
        >
          <img
            src="/superhero-standing-front-sunburst_603843-1871.avif"
            alt="Hero Illustration"
            className="w-full h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* ===== Features Section ===== */}
      <section id="features" className="mt-20 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FeatureCard {...f} />
          </motion.div>
        ))}
      </section>

      {/* ===== Showcase Section ===== */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Work</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((img) => (
            <div
              key={img}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={`/portfolio-${img}.jpg`}
                alt={`Portfolio ${img}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ===== Pricing Section ===== */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className={`rounded-lg shadow-lg p-8 text-center border ${
                plan.highlight
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-4">
                ${plan.price} <span className="text-lg">/mo</span>
              </p>
              <ul className="mb-6 space-y-2 text-sm">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="opacity-90">
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`px-6 py-3 rounded-md font-semibold transition ${
                  plan.highlight
                    ? "bg-white text-indigo-600 hover:bg-gray-100"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Testimonials Section ===== */}
      <section className="mt-24 bg-indigo-50 dark:bg-gray-800 p-10 rounded-lg max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <p className="italic mb-4">“{t.quote}”</p>
              <p className="font-semibold text-indigo-600 dark:text-indigo-400">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Call to Action ===== */}
      <section className="mt-24 bg-indigo-600 text-white py-16 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-8 text-lg opacity-90">
          Join thousands of users who trust MyApp for their business.
        </p>
        <Link
          href="/signup"
          className="px-8 py-3 rounded-md bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition"
        >
          Start Free Trial
        </Link>
      </section>

      {/* ===== Footer ===== */}
      <footer className="mt-32 border-t border-gray-200 dark:border-gray-700 py-8 text-center text-gray-600 text-sm dark:text-gray-400">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </main>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

const features = [
  { title: "Fast Performance", description: "Optimized for blazing fast load times and smooth user experience.", icon: "⚡" },
  { title: "Easy to Use", description: "Intuitive interface designed for users of all skill levels.", icon: "👍" },
  { title: "Secure", description: "Built with security best practices to keep your data safe.", icon: "🔒" },
  { title: "Customizable", description: "Flexible components and themes to match your brand.", icon: "🎨" },
  { title: "SEO Friendly", description: "Optimized to help your site rank higher on search engines.", icon: "🔍" },
  { title: "Scalable", description: "Built to grow seamlessly with your business needs.", icon: "📈" },
  { title: "24/7 Support", description: "Our team is here to help you anytime, anywhere.", icon: "📞" },
  { title: "Cross-Platform", description: "Works perfectly on mobile, tablet, and desktop devices.", icon: "📱" },
];

const pricingPlans = [
  { name: "Basic", price: "19", features: ["1 Project", "Basic Support", "All Core Features"], highlight: false },
  { name: "Pro", price: "49", features: ["10 Projects", "Priority Support", "Advanced Features"], highlight: true },
  { name: "Enterprise", price: "99", features: ["Unlimited Projects", "Dedicated Support", "Custom Solutions"], highlight: false },
];

const testimonials = [
  { name: "Jane Doe, CEO of Acme Corp", quote: "MyApp transformed our workflow. It’s fast, reliable, and so easy to use!" },
  { name: "John Smith, Startup Founder", quote: "Switching to MyApp saved us so much time and money." },
  { name: "Emily Davis, Marketing Manager", quote: "Our team loves the clean design and smooth performance." },
];
