"use client";

import { useState, ReactNode } from "react";

type Tab = {
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs?: Tab[];
};

export default function Tabs({
  tabs = [
    { label: "Tab One", content: <p>This is the content of Tab One.</p> },
    { label: "Tab Two", content: <p>Here is the content of Tab Two.</p> },
    { label: "Tab Three", content: <p>And content for Tab Three.</p> },
  ],
}: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="flex border-b border-gray-300 dark:border-gray-700">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`px-4 py-2 -mb-px font-semibold border-b-2 transition-colors ${
              idx === activeIndex
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-600 dark:text-gray-400 hover:text-indigo-500"
            }`}
            role="tab"
            aria-selected={idx === activeIndex}
            aria-controls={`tab-panel-${idx}`}
            id={`tab-${idx}`}
            tabIndex={idx === activeIndex ? 0 : -1}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        id={`tab-panel-${activeIndex}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeIndex}`}
        className="p-4 text-gray-700 dark:text-gray-300"
      >
        {tabs[activeIndex].content}
      </div>
    </div>
  );
}
