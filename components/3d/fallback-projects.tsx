"use client"

import { motion } from "framer-motion"

interface FallbackProjectsProps {
  title: string
  color: string
}

export default function FallbackProjects({ title, color }: FallbackProjectsProps) {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-500 text-blue-100",
    purple: "bg-purple-500 text-purple-100",
    green: "bg-green-500 text-green-100",
    yellow: "bg-yellow-500 text-yellow-100",
    red: "bg-red-500 text-red-100",
  }

  const bgColor = colorMap[color]?.split(" ")[0] || "bg-blue-500"
  const textColor = colorMap[color]?.split(" ")[1] || "text-blue-100"

  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`${bgColor} rounded-lg p-4 shadow-lg max-w-md`}
      >
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className={`text-center ${textColor} font-bold text-xl`}
        >
          {title}
        </motion.div>
      </motion.div>
    </div>
  )
}
