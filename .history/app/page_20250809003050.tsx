import Link from "next/link";
//import ClientNavigator from "../components/ClientNavigator";


export default function HomePage() {
  return (
    <main className="max-w-9xl mx-auto px-6 py-15 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-5xl mx-auto">
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-indigo-600">MyApp</span>
          </h1>
          {/*<ClientNavigator />*/}
          <p className="text-xl text-gray-700 mb-8">
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
              className="inline-block px-8 py-3 rounded-md border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Illustration/Image */}
        <div className="max-w-md w-full">
          <img
            src="/superhero-standing-front-sunburst_603843-1871.avif"
            alt="Hero Illustration"
            className="w-full h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mt-20 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <FeatureCard
          title="Fast Performance"
          description="Optimized for blazing fast load times and smooth user experience."
          icon="⚡"
        />
        <FeatureCard
          title="Easy to Use"
          description="Intuitive interface designed for users of all skill levels."
          icon="👍"
        />
        <FeatureCard
          title="Secure"
          description="Built with security best practices to keep your data safe."
          icon="🔒"
        />
        <FeatureCard
          title="Customizable"
          description="Flexible components and themes to match your brand."
          icon="🎨"
        />
        <FeatureCard
          title="SEO Friendly"
          description="Optimized to help your site rank higher on search engines."
          icon="🔍"
        />
        <FeatureCard
          title="Scalable"
          description="Built to grow seamlessly with your business needs."
          icon="📈"
        />
        <FeatureCard
          title="24/7 Support"
          description="Our team is here to help you anytime, anywhere."
          icon="📞"
        />
        <FeatureCard
          title="Cross-Platform"
          description="Works perfectly on mobile, tablet, and desktop devices."
          icon="📱"
        />
        <FeatureCard
          title="Regular Updates"
          description="Continuous improvements and feature additions."
          icon="🔄"
        />
      </section>

      {/* Testimonial Section */}
      <section className="mt-20 bg-indigo-50 p-10 rounded-lg text-center max-w-3xl mx-auto">
        <blockquote className="italic text-gray-800 text-lg max-w-xl mx-auto">
          “MyApp transformed our workflow. It’s fast, reliable, and so easy to use!”
        </blockquote>
        <cite className="block mt-4 font-semibold text-indigo-700">— Jane Doe, CEO of Acme Corp</cite>
      </section>

      {/* Footer */}
      <footer className="mt-32 border-t border-gray-200 py-8 text-center text-gray-600 text-sm">
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
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
