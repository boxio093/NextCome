"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl tracking-wide text-indigo-600 hover:text-indigo-700 transition">
          MyApp
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link href="/about" className="hover:text-indigo-600 transition">About</Link>
          <Link href="/contact" className="hover:text-indigo-600 transition">Contact</Link>
          <Link href="/blog" className="hover:text-indigo-600 transition">Blog</Link>
          <Link href="/components-page" className="hover:text-indigo-600 transition">Components</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col space-y-2 p-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition">About</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition">Contact</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition">Blog</Link>
            <Link href="/components-page" onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition">Components</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
