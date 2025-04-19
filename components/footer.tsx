"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    // Check if window is defined before using it
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  // Get current year safely
  const currentYear = typeof Date !== "undefined" ? new Date().getFullYear() : 2023

  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <Link href="#home" className="text-2xl font-bold">
              <span className="text-blue-500">SERVI-FI</span> TECH
            </Link>
            <p className="text-gray-400 mt-2 max-w-md">
              Pioneering AI solutions for businesses, empowering digital transformation through innovative technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 text-sm mb-4 md:mb-0"
          >
            © {currentYear} SERVI-FI TECH. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex space-x-6"
          >
            <Link href="#home" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
              Home
            </Link>
            <Link href="#about" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
              About
            </Link>
            <Link href="#services" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
              Services
            </Link>
            <Link href="#projects" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
              Projects
            </Link>
            <Link href="#clients" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
              Clients
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
              Contact
            </Link>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 mt-6 md:mt-0"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
