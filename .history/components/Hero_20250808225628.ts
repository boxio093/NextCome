import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden text-center py-20 bg-grid-light dark:bg-grid-dark bg-repeat bg-center transition-colors duration-500">
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100">
        ALL YOUR COMPONENTS IN ONE <span className="text-blue-600">PLACE!</span>
      </h1>
      <p className="mt-4 max-w-xl mx-auto text-gray-600 dark:text-gray-300">
        React + Next.js UI library with CLI scaffolding, TypeScript conversion, and live previews.
      </p>

      {/* Animated dots overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-dots-overlay animate-dot-move mix-blend-overlay"
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;
