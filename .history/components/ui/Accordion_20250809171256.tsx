"use client";

import { useState } from "react";

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items?: AccordionItem[];
};

export default function Accordion({
  items = [
    { title: "First Item", content: "This is the content of the first item." },
    { title: "Second Item", content: "Content for the second item goes here." },
    { title: "Third Item", content: "And here is the third item content." },
  ],
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 border rounded-md">
      {items.map((item, idx) => (
        <div key={idx} className="border-b last:border-b-0">
          <button
            onClick={() => toggleIndex(idx)}
            className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-expanded={openIndex === idx}
            aria-controls={`accordion-content-${idx}`}
            id={`accordion-header-${idx}`}
          >
            <span className="font-semibold">{item.title}</span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                openIndex === idx ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === idx && (
            <div
              id={`accordion-content-${idx}`}
              role="region"
              aria-labelledby={`accordion-header-${idx}`}
              className="px-4 py-3 text-gray-700 dark:text-gray-300"
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
