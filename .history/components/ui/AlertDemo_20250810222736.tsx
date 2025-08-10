import { useState } from "react";

export default function AlertDemo() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative p-4 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded">
      <span>⚠️ This is an alert message — pay attention!</span>
      <button
        onClick={() => setIsVisible(false)}
        aria-label="Close alert"
        className="absolute top-2 right-2 text-yellow-800 hover:text-yellow-900 focus:outline-none"
      >
        ✖
      </button>
    </div>
  );
}
