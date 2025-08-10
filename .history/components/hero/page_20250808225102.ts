import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDark(mql.matches);
      const listener = (e: MediaQueryListEvent) => setIsDark(e.matches);
      mql.addEventListener("change", listener);
      return () => mql.removeEventListener("change", listener);
    }
  }, []);

  const bgColor = isDark ? "#0a0a0a" : "#ffffff";
  const dotColor = isDark ? "#94a3b8" : "#64748b";

  return (
    <section
      className="relative overflow-hidden text-center py-20 bg-repeat bg-center transition-colors duration-500"
      style={{
        backgroundImage: "url('/grid.svg')",
        backgroundSize: "80px 80px",
        backgroundColor: bgColor,
      }}
    >
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100">
        ALL YOUR COMPONENTS IN ONE <span className="text-blue-600">PLACE!</span>
      </h1>
      <p className="mt-4 max-w-xl mx-auto text-gray-600 dark:text-gray-300">
        React + Next.js UI library with CLI scaffolding, TypeScript conversion, and live previews.
      </p>

      {/* Animated dot overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle 1px, ${dotColor} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          animation: "dotMove 20s linear infinite",
          mixBlendMode: "overlay",
        }}
      />
      <style jsx>{`
        @keyframes dotMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 80px 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
