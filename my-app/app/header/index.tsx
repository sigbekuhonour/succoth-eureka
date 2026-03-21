"use client";

import Link from "next/link";
import { useState } from "react";
import HeaderText from "../components/HeaderText";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
        <Link
          href="/"
          className="text-white font-bold text-xl tracking-tight hover:opacity-90 transition-opacity"
        >
          Succoth Initiative Inc.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <HeaderText headerText="Find a Home" route="/find-a-home" />
          <HeaderText headerText="List a Home" route="/list-a-home" />
          <HeaderText headerText="Events" route="/events" />
          <HeaderText headerText="Contact" route="/contact" />
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/auth"
            className="hidden md:block text-sm font-semibold text-white border border-white/40 rounded-full px-6 py-2 hover:bg-white hover:text-navy transition-all duration-300"
          >
            Login
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-[#040C23]/95 backdrop-blur-md shadow-lg py-6 border-b border-white/10">
          <nav className="flex flex-col items-center gap-6">
            <div onClick={() => setIsMenuOpen(false)}>
              <HeaderText headerText="Find a Home" route="/find-a-home" />
            </div>
            <div onClick={() => setIsMenuOpen(false)}>
              <HeaderText headerText="List a Home" route="/list-a-home" />
            </div>
            <div onClick={() => setIsMenuOpen(false)}>
              <HeaderText headerText="Events" route="/events" />
            </div>
            <div onClick={() => setIsMenuOpen(false)}>
              <HeaderText headerText="Contact" route="/contact" />
            </div>
            <Link
              href="/auth"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 text-sm font-semibold text-white border border-white/40 rounded-full px-8 py-3 hover:bg-white hover:text-navy transition-all duration-300"
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
