"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavbarDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="border rounded-md p-4 bg-white shadow">
      <h3 className="text-lg font-semibold mb-3">Navbar Demo</h3>
      <p className="text-sm text-gray-600 mb-4">
        Responsive navigation bar with mobile toggle.
      </p>

      <nav className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white rounded-md shadow-md">
        <div className="max-w-md mx-auto flex justify-between items-center p-3">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl tracking-wide hover:text-gray-200 transition">
            MyApp
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-5">
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
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-blue-700 rounded-b-md">
            <div className="flex flex-col space-y-2 p-3">
              <Link href="/" onClick={closeMenu} className="hover:text-gray-200 transition">Home</Link>
              <Link href="/about" onClick={closeMenu} className="hover:text-gray-200 transition">About</Link>
              <Link href="/contact" onClick={closeMenu} className="hover:text-gray-200 transition">Contact</Link>
              <Link href="/blog" onClick={closeMenu} className="hover:text-gray-200 transition">Blog</Link>
              <Link href="/components-page" onClick={closeMenu} className="hover:text-gray-200 transition">Components</Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
