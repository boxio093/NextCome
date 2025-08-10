import { useEffect, useState } from "react";

export default function Hero() {
  // Dark mode detection
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mql.matches);
    const listener = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, []);

  // SVG filter and animation colors based on theme
  const bgColor = isDark ? "#0a0a0a" : "#fff";
  const lineColor = isDark ? "#475569" : "#CBD5E1"; // Tailwind slate-600 or blue-gray-300
  const dotColor = isDark ? "#94a3b8" : "#64748b"; // Tailwind slate-400 or blue-gray-500

  // Inline SVG as data URI with dynamic colors (optional, or just use static svg file)
  // Here we'll keep using the static file, so style colors in CSS.

  return (
    <section
      className="relative overflow-hidden text-center py-20 bg-repeat bg-center"
      style={{
        backgroundImage: "url('/grid.svg')",
        backgroundSize: "80px 80px",
        backgroundColor: bgColor,
        transition: "background-color 0.5s ease",
      }}
    >
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100">
        ALL YOUR COMPONENTS IN ONE <span className="text-blue-600">PLACE!</span>
      </h1>
      <p className="mt-4 max-w-xl mx-auto text-gray-600 dark:text-gray-300">
        React + Next.js UI library with CLI scaffolding, TypeScript conversion, and live previews.
      </p>

      {/* Animated overlay dots (optional) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle 1px, rgba(100, 116, 139, 0.3) 1px, transparent 1px)",
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
}
