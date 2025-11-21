"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const servicesLinks = [
    { href: "/#services", label: "Leistungen" },
  ];

  const resourcesLinks = [
    { href: "/#how-it-works", label: "Ablauf" },
    { href: "/#testimonials", label: "Bewertungen" },
  ];

  const otherLinks = [
    { href: "/#about", label: "Über uns" },
    { href: "/news", label: "Blog" },
    { href: "/#contact", label: "Kontakt" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link 
          href="/" 
          className="flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="Top Docs Deutschland"
            width={140}
            height={32}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <div className="relative group">
            <button className="text-zinc-800 hover:text-blue-600 transition-colors flex items-center gap-1">
              Leistungen
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-zinc-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2">
                {servicesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-zinc-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="text-zinc-800 hover:text-blue-600 transition-colors flex items-center gap-1">
              Ressourcen
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-zinc-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2">
                {resourcesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-zinc-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {otherLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-800 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-zinc-800 hover:text-blue-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-zinc-200 bg-white overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-2">
              {/* Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-zinc-800 hover:text-blue-600 transition-colors"
                >
                  <span>Leistungen</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-1"
                    >
                      {servicesLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsServicesOpen(false);
                          }}
                          className="block px-3 py-2 text-sm text-zinc-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Dropdown */}
              <div>
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-zinc-800 hover:text-blue-600 transition-colors"
                >
                  <span>Ressourcen</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isResourcesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {isResourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-1"
                    >
                      {resourcesLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsResourcesOpen(false);
                          }}
                          className="block px-3 py-2 text-sm text-zinc-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Links */}
              {otherLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-zinc-800 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}