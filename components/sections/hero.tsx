"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import WebGLWrapper from "@/components/3d/webgl-check"
import ErrorBoundary from "@/components/3d/error-boundary"
import FallbackHero from "@/components/3d/fallback-hero"

// Dynamically import the 3D components with no SSR
const HeroCanvas = dynamic(() => import("@/components/3d/hero-canvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] md:h-[500px] bg-blue-900/20 rounded-lg flex items-center justify-center">
      <div className="text-blue-500 text-lg">Loading 3D Scene...</div>
    </div>
  ),
})

export default function Hero() {
  // Animation variants for smoother transitions
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
        delay: 0.4,
      },
    },
  }

  const canvasVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1,
      },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-blue-950 to-black overflow-hidden pt-20"
    >
      {/* Animated particles background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500 opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            <span className="text-blue-500">SERVI-FI TECH:</span>
            <br />
            AI SOLUTIONS
          </motion.h1>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            At SERVI-FI TECH, we pioneer cutting-edge digital solutions, specializing in AI agents, chatbots, and
            web/mobile app development. Our advanced AI technologies power real-time communication, automation, and data
            insights, empowering businesses to optimize operations, enhance customer experiences, and drive innovation.
          </motion.p>
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 text-center"
            >
              Get Started
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, backgroundColor: "#3b82f6", color: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="px-8 py-3 bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium rounded-md transition-colors duration-300 text-center"
            >
              Our Services
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          variants={canvasVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-1/2 h-[400px] md:h-[500px]"
        >
          <ErrorBoundary fallback={<FallbackHero />}>
            <WebGLWrapper fallback={<FallbackHero />}>
              <HeroCanvas />
            </WebGLWrapper>
          </ErrorBoundary>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-1 h-2 bg-blue-500 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
