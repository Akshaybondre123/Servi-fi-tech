"use client"

import { motion } from "framer-motion"
import { Smartphone, Globe, Sparkles, Download, Star, Camera, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import DownloadOptions from "@/components/sections/download-options"
import Image from 'next/image'

export default function PhotosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden min-h-[80vh] flex items-center justify-center">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-2xl"></div>
            
            {/* Animated floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/30 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-purple-400/30 rounded-full"
            ></motion.div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-full px-6 py-3 mb-8"
              >
                <Camera className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Capture & Share Moments Instantly</span>
              </motion.div>

              {/* Main Heading */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex items-center justify-center gap-6 mb-6"
              >
               

                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight"> Get
                  Garba Photos <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">by SERVIFITECH</span>
                </h1>
              </motion.div>
              
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                Experience the magic of Garba through our professionally captured moments
              </motion.p>

              {/* Buttons Container */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
              >
                {/* Mobile App Button */}
                <motion.a
                  href="https://kwikpic-in.app.link/nZX00HLNUWb?groupCode=YVM0AV"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-full shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    <span>For Mobile App</span>
                    
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"></div>
                </motion.a>

                {/* Website Button */}
                <motion.a
                  href="https://kwikpic-in.app.link/e/mZX00HLNUWb?uCode=YVM0AV"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-transparent text-white font-semibold py-4 px-8 rounded-full border-2 border-blue-400/50 hover:border-blue-400 transition-all duration-300 hover:bg-blue-500/10 w-full sm:w-auto text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Globe className="w-5 h-5" />
                    <span>For Website</span>
                  </div>
                </motion.a>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap justify-center items-center gap-6 mt-12 text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm">4.9 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-green-400" />
                  <span className="text-sm">10K+ Downloads</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">Premium Features</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-md border-t border-gray-800 py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">SERVI-FI TECH</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pioneering AI & Digital Solutions for the future of business and technology. 
                Creating innovative platforms that connect people through cutting-edge technology.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300 flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300 flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300 flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/photos" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300 flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    Photos
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <a href="tel:+91 966605 98505">+91 966605 98505</a>
                </li>
                <li className="flex items-center text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <a href="mailto:info@servifitech.com">hritikgoyal689@gmail.com</a>
                </li>
              </ul>
              
              <div className="mt-4 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                <p className="text-xs text-gray-400">
                  FLAT NO-603, UPASANA RESIDENCY, JAIPUR, SEN COLONY, BANIPARK, RAJASTHAN, JAIPUR, Pin 302001
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                {new Date().getFullYear()} SERVI-FI TECH. All rights reserved.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <span className="text-gray-500 text-sm">Privacy Policy</span>
                <span className="text-gray-500 text-sm">Terms of Service</span>
                <span className="text-gray-500 text-sm">Cookie Policy</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}