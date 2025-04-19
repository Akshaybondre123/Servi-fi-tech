"use client"

import { motion } from "framer-motion"
import { Brain } from "lucide-react"

export default function FallbackHero() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-64 h-64 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center"
      >
        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-pulse"></div>
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Brain size={80} className="text-white" />
        </motion.div>
        <div className="absolute inset-0 rounded-full border-4 border-blue-400 border-opacity-30"></div>
        <div className="absolute -inset-4 rounded-full border border-blue-400 border-opacity-20"></div>
        <div className="absolute -inset-8 rounded-full border border-blue-400 border-opacity-10"></div>
      </motion.div>
    </div>
  )
}
