"use client"

import { motion } from "framer-motion"
import { Bot } from "lucide-react"

export default function FallbackAbout() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-64 h-64 rounded-lg bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center"
      >
        <div className="absolute inset-0 rounded-lg bg-blue-500 opacity-20 animate-pulse"></div>
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Bot size={80} className="text-white" />
        </motion.div>
        <div className="absolute inset-0 rounded-lg border-4 border-blue-400 border-opacity-30"></div>
      </motion.div>
    </div>
  )
}
