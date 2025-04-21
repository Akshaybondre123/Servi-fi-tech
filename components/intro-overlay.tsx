"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"
import WebGLWrapper from "@/components/3d/webgl-check"
import ErrorBoundary from "@/components/3d/error-boundary"
import FallbackHero from "@/components/3d/fallback-hero"

// Dynamically import the 3D components with no SSR
const IntroCanvas = dynamic(() => import("@/components/3d/intro-canvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="text-blue-500 text-lg">Loading 3D Scene...</div>
    </div>
  ),
})

export default function IntroOverlay() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    // After 10 seconds, hide the intro (changed from 3 seconds)
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 bg-black"
        >
          <ErrorBoundary fallback={<FallbackHero />}>
            <WebGLWrapper fallback={<FallbackHero />}>
              <IntroCanvas />
            </WebGLWrapper>
          </ErrorBoundary>

          {/* Company name overlay */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              <span className="text-blue-500">SERVI-FI</span> TECH
            </h1>
            <p className="text-xl md:text-2xl text-blue-300">AI SOLUTIONS</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
