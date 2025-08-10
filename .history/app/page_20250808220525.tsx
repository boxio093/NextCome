import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="bg-gray-50 min-h-screen font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <span className="text-green-500">nü</span> /ui
          </div>
          <nav className="flex gap-6 text-gray-600 text-sm">
            <a href="#docs" className="hover:text-blue-500">Docs</a>
            <a href="#components" className="hover:text-blue-500">Components</a>
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#playground" className="hover:text-blue-500">Playground</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden text-center py-20 bg-[url('/grid.svg')] bg-center bg-repeat">
        <h1 className="text-5xl font-extrabold text-gray-900">
          ALL YOUR COMPONENTS IN ONE <span className="text-blue-600">PLACE!</span>
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-gray-600">
          React + Next.js UI library with CLI scaffolding, TypeScript conversion, and live previews.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#get-started" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">Get Started</a>
          <a href="#learn" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">Learn More</a>
        </div>
      </section>

      {/* Stack Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Your Stack <span className="text-green-500">Everything You Need</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["/ts.svg", "/js.svg", "/react.svg", "/tailwind.svg", "/sass.svg"].map((logo) => (
            <Image key={logo} src={logo} alt="Tech logo" width={48} height={48} />
          ))}
        </div>
      </section>

      {/* Component Demos */}
      <section id="components" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Component Demos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <div className="h-32 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg"></div>
            <h3 className="mt-4 font-semibold">Glowing Card</h3>
            <p className="text-gray-600 text-sm">Interactive glowing UI card</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center font-mono text-gray-500">
              Terminal
            </div>
            <h3 className="mt-4 font-semibold">Terminal</h3>
            <p className="text-gray-600 text-sm">Showcasing CLI output in style</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <div className="h-32 bg-blue-50 rounded-lg flex items-center justify-center text-4xl">📜</div>
            <h3 className="mt-4 font-semibold">Animated List</h3>
            <p className="text-gray-600 text-sm">Sequential animated items</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Brand. All rights reserved.
      </footer>
    </main>
  );
}
