"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const headerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={headerVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-700">
            Nuvianix
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-gray-700 hover:text-primary-700 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden md:block bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Let's Talk
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        className="md:hidden fixed top-[60px] right-0 w-full h-screen bg-white/95 backdrop-blur-md"
      >
        <div className="flex flex-col items-center pt-10 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-xl text-gray-700 hover:text-primary-700 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-6 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let's Talk
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
