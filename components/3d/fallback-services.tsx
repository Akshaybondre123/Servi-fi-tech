"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Bot, MessageSquare, Wifi, BarChart3 } from "lucide-react"

const services = [
  { icon: Globe, color: "bg-blue-500" },
  { icon: Smartphone, color: "bg-purple-500" },
  { icon: Bot, color: "bg-green-500" },
  { icon: MessageSquare, color: "bg-yellow-500" },
  { icon: Wifi, color: "bg-red-500" },
  { icon: BarChart3, color: "bg-indigo-500" },
]

export default function FallbackServices() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-full max-w-md">
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`m-3 w-16 h-16 rounded-lg ${service.color} flex items-center justify-center`}
                style={{
                  transform: `rotate(${index * 60}deg) translateX(100px) rotate(${-index * 60}deg)`,
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  <Icon size={32} className="text-white" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
