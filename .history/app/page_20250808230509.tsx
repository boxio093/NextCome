import Hero from "@/components/Hero";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="bg-gray-50 min-h-screen font-sans text-gray-700">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2 font-extrabold text-2xl text-blue-600 select-none">
            <span className="text-green-500">nü</span> /ui
          </div>
          <nav className="flex gap-8 text-gray-600 text-sm font-medium">
            {["Docs", "Components", "About", "Playground"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-600 transition"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <Hero />

      {/* Call to Action Section */}
      <section
        className="relative overflow-hidden text-center py-24 bg-[url('/grid.svg')] bg-center bg-repeat"
        aria-label="Hero Call to Action"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 max-w-4xl mx-auto leading-tight">
          ALL YOUR COMPONENTS IN ONE{" "}
          <span className="text-blue-600">PLACE!</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
          React + Next.js UI library with CLI scaffolding, TypeScript conversion, and live previews.
        </p>
        <div className="mt-12 flex justify-center gap-6">
          <a
            href="#get-started"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold"
          >
            Get Started
          </a>
          <a
            href="#learn"
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition font-semibold"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Stack Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-extrabold mb-10">
          Your Stack{" "}
          <span className="text-green-500">Everything You Need</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {["/ts.svg", "/js.svg", "/react.svg", "/tailwind.svg", "/saas.svg"].map(
            (logo) => (
              <Image
                key={logo}
                src={logo}
                alt={`${logo.replace("/", "").replace(".svg", "")} logo`}
                width={64}
                height={64}
                className="filter transition-transform hover:scale-110"
                priority
              />
            )
          )}
        </div>
      </section>

      {/* Component Demos */}
      <section
        id="components"
        className="max-w-6xl mx-auto px-6 py-20 bg-white rounded-xl shadow-lg"
      >
        <h2 className="text-4xl font-extrabold text-center mb-14">
          Component Demos
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer">
            <div className="h-40 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg" />
            <h3 className="mt-6 font-semibold text-xl">Glowing Card</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Interactive glowing UI card
            </p>
          </div>
          <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer">
            <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center font-mono text-gray-500">
              Terminal
            </div>
            <h3 className="mt-6 font-semibold text-xl">Terminal</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Showcasing CLI output in style
            </p>
          </div>
          <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer">
            <div className="h-40 bg-blue-50 rounded-lg flex items-center justify-center text-5xl">
              📜
            </div>
            <h3 className="mt-6 font-semibold text-xl">Animated List</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Sequential animated items
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-20 py-8 text-center text-gray-500 text-sm select-none">
        © {new Date().getFullYear()} Your Brand. All rights reserved.
      </footer>
    </main>
  );
}
