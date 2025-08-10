"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";

type CardProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

function Card({ title, description, children }: CardProps) {
  return (
    <motion.div
      className="border rounded-lg p-6 shadow hover:shadow-lg transition cursor-default"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </motion.div>
  );
}

function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  const items = [
    {
      title: "What is MyApp?",
      content:
        "MyApp is a modern UI framework built with Next.js and Tailwind CSS.",
    },
    {
      title: "How do I use the components?",
      content:
        "You can import components from the UI folder and customize them with Tailwind.",
    },
    {
      title: "Is it accessible?",
      content:
        "Yes! All components are built with accessibility best practices in mind.",
    },
  ];

  return (
    <div className="border rounded-lg divide-y">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => toggle(i)}
            className="w-full text-left px-6 py-4 font-semibold bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition flex justify-between items-center"
          >
            {item.title}
            <span>{openIndex === i ? "−" : "+"}</span>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openIndex === i ? "auto" : 0,
              opacity: openIndex === i ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden px-6 text-gray-700 dark:text-gray-300"
          >
            <p className="py-4">{item.content}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Home", "Profile", "Settings"];
  const tabContents = [
    "Welcome to the home tab content!",
    "This is your profile information.",
    "Adjust your settings here.",
  ];

  return (
    <div>
      <div className="flex border-b border-gray-300 dark:border-gray-700">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-6 py-3 font-semibold ${
              activeTab === i
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-500 hover:text-indigo-600"
            } transition`}
          >
            {tab}
          </button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="p-6 text-gray-700 dark:text-gray-300"
      >
        {tabContents[activeTab]}
      </motion.div>
    </div>
  );
}

function FormInput({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="mb-1 font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-100 transition"
      />
    </div>
  );
}

export default function ComponentsPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="max-w-6xl mx-auto p-8 space-y-20">
      <h1 className="text-4xl font-bold mb-8">UI Components Showcase</h1>

      {/* Button */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Button</h2>
        <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
      </section>

      {/* Card */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Card</h2>
        <Card title="Card Title" description="This is a simple card component demo.">
          <p>This card also supports children content inside it.</p>
        </Card>
      </section>

      {/* Modal */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Modal</h2>
        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
        {isModalOpen && (
          <Modal onClose={() => setModalOpen(false)}>
            <h3 className="text-xl font-semibold mb-4">Modal Title</h3>
            <p>This is a modal content example.</p>
            <Button onClick={() => setModalOpen(false)}>Close</Button>
          </Modal>
        )}
      </section>

      {/* Accordion */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Accordion</h2>
        <Accordion />
      </section>

      {/* Tabs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Tabs</h2>
        <Tabs />
      </section>

      {/* Form Input */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Form Input</h2>
        <form className="max-w-md">
          <FormInput label="Name" id="name" placeholder="Your name" />
          <FormInput label="Email" id="email" type="email" placeholder="you@example.com" />
          <FormInput label="Password" id="password" type="password" placeholder="••••••••" />
          <Button type="submit">Submit</Button>
        </form>
      </section>
    </main>
  );
}
