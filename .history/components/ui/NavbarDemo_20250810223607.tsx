"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavbarDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white shadow-md sticky top-0 z-50 p-3">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl tracking-wide hover:text-gray-200 transition">
          MyApp
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-200 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-200 transition">About</Link>
          <Link href="/contact" className="hover:text-gray-200 transition">Contact</Link>
          <Link href="/blog" className="hover:text-gray-200 transition">Blog</Link>
          <Link href="/components-page" className="hover:text-gray-200 transition">Components</Link>
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
        <div className="md:hidden bg-blue-700">
          <div className="flex flex-col space-y-2 p-4">
            <Link href="/" onClick={closeMenu} className="hover:text-gray-200 transition">Home</Link>
            <Link href="/about" onClick={closeMenu} className="hover:text-gray-200 transition">About</Link>
            <Link href="/contact" onClick={closeMenu} className="hover:text-gray-200 transition">Contact</Link>
            <Link href="/blog" onClick={closeMenu} className="hover:text-gray-200 transition">Blog</Link>
            <Link href="/components-page" onClick={closeMenu} className="hover:text-gray-200 transition">Components</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
