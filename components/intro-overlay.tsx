"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function IntroOverlay() {
  const [showIntro, setShowIntro] = useState(false)

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro")

    if (!hasSeenIntro) {
      // First visit, show the intro
      setShowIntro(true)

      // Set the flag in session storage
      sessionStorage.setItem("hasSeenIntro", "true")

      // Hide the intro after 4 seconds for faster experience
      const timer = setTimeout(() => {
        setShowIntro(false)
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [])

  const skipIntro = () => {
    setShowIntro(false)
  }

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-black via-blue-950 to-black overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0">
            {/* Floating particles */}
            <div className="absolute inset-0">
              {Array.from({ length: 100 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1.2, 0.5]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>
            
            {/* Gradient orbs */}
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 bg-blue-600/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute bottom-32 right-16 w-24 h-24 bg-purple-600/20 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            
            <motion.div
              className="absolute top-1/2 right-1/3 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 h-full">
              {Array.from({ length: 144 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="border border-blue-400/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.02
                  }}
                />
              ))}
            </div>
          </div>

          {/* Company name and branding */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
            exit={{ opacity: 0, scale: 1.1 }}
          >
            {/* Main logo/title */}
            <motion.div
              className="text-center mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 px-4 text-center">
                <motion.span
                  className="text-blue-500"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(59, 130, 246, 0.5)",
                      "0 0 20px rgba(59, 130, 246, 0.8)",
                      "0 0 10px rgba(59, 130, 246, 0.5)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  SERVI-FI
                </motion.span>{" "}
                <span className="text-white">TECH</span>
              </h1>
              
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-blue-300 font-light"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                AI SOLUTIONS
              </motion.p>
            </motion.div>
            
            {/* Tagline */}
            <motion.p
              className="text-gray-300 text-sm md:text-base max-w-md text-center px-4 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              Pioneering AI innovation across industries with cutting-edge technology
            </motion.p>
            
            {/* Loading indicator */}
            <motion.div
              className="flex items-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-blue-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
              <motion.span
                className="text-gray-400 text-sm ml-3"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                Loading Experience...
              </motion.span>
            </motion.div>
          </motion.div>
          
          {/* Skip button */}
          <motion.button
            onClick={skipIntro}
            className="absolute bottom-8 right-8 px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm hover:bg-white/20 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skip Intro
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
