'use client'

import { useState } from "react";

const images = [
  "https://placekitten.com/400/200",
  "https://placekitten.com/401/200",
  "https://placekitten.com/402/200",
];

export default function CarouselDemo() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="rounded w-full h-48 object-cover mb-4"
      />
      <div className="flex justify-between">
        <button
          onClick={prev}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Prev
        </button>
        <button
          onClick={next}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
