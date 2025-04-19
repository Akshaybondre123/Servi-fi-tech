"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import dynamic from "next/dynamic"
import WebGLWrapper from "@/components/3d/webgl-check"
import ErrorBoundary from "@/components/3d/error-boundary"
import FallbackAbout from "@/components/3d/fallback-about"

// Dynamically import the 3D components with no SSR
const AboutCanvas = dynamic(() => import("@/components/3d/about-canvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] md:h-[500px] bg-blue-900/20 rounded-lg flex items-center justify-center">
      <div className="text-blue-500 text-lg">Loading 3D Scene...</div>
    </div>
  ),
})

const chooseUsItems = [
  "Pioneering AI innovations across industries",
  "Custom AI strategies tailored to your business",
  "Seamless integration of machine learning and data insights",
  "Scalable and future-proof AI solutions",
  "Advanced deep learning techniques",
  "Expert AI research and development",
  "Collaborative approach to digital transformation",
  "Transparent and reliable AI support",
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-b from-blue-950 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Us</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <div className="h-[400px] md:h-[500px]">
              <ErrorBoundary fallback={<FallbackAbout />}>
                <WebGLWrapper fallback={<FallbackAbout />}>
                  <AboutCanvas />
                </WebGLWrapper>
              </ErrorBoundary>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 lg:pl-12"
          >
            <p className="text-gray-300 text-lg mb-8">
              At SERVI-FI TECH, we are an AI-first company dedicated to transforming digital landscapes with innovative
              artificial intelligence solutions. Our expertise spans AI-driven web and mobile development, intelligent
              chatbot design, advanced machine learning algorithms, and data analytics, empowering businesses to achieve
              operational excellence and superior customer engagement.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {chooseUsItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 mt-1"></div>
                  <p className="ml-3 text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
