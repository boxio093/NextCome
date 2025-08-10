"use client"; // Add this at the top of Footer.tsx

// components/Footer.tsx
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">About MyApp</h3>
          <p className="text-sm leading-relaxed">
            MyApp is your go-to solution for scalable, fast, and beautiful web apps built with Next.js and Tailwind CSS.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-indigo-500 transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-indigo-500 transition">About</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-indigo-500 transition">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-indigo-500 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
          <address className="not-italic text-sm space-y-1">
            <p>123 Main Street</p>
            <p>Cityville, Country</p>
            <p>
              Email:{" "}
              <a href="mailto:support@myapp.com" className="hover:text-indigo-500">
                support@myapp.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:text-indigo-500">
                +1 (234) 567-890
              </a>
            </p>
          </address>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Newsletter</h3>
          <p className="text-sm mb-3">Subscribe to get the latest updates and offers.</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-2"
          >
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md text-gray-900"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6 mb-6 md:mb-0 text-gray-400 text-lg">
          <a
            href="https://twitter.com/yourprofile"
            aria-label="Twitter"
            className="hover:text-indigo-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com/yourprofile"
            aria-label="Facebook"
            className="hover:text-indigo-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            aria-label="Instagram"
            className="hover:text-indigo-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            aria-label="LinkedIn"
            className="hover:text-indigo-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <p className="text-sm text-gray-400">&copy; 2025 MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
}
