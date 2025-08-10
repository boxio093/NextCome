export default function HeroDemo() {
  return (
    <section
      aria-label="Hero section"
      className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-md p-6 sm:p-10 max-w-xl mx-auto shadow-lg"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
        Welcome to MyApp
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-8 max-w-prose leading-relaxed">
        Build amazing user interfaces quickly with our modern component library.
      </p>

      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        {/* Primary Button */}
        <button
          type="button"
          className="w-full sm:w-auto bg-white text-blue-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
        >
          Get Started
        </button>

        {/* Secondary Button */}
        <button
          type="button"
          className="w-full sm:w-auto bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-white transition"
        >
          Learn More
        </button>
      </div>
    </section>
  );
}
