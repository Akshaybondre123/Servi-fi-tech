"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Code, Users, TrendingUp } from "lucide-react"

const features = [
  {
    title: "Cutting-Edge AI Technology",
    description:
      "Leveraging the latest in artificial intelligence, machine learning, and deep learning frameworks to deliver groundbreaking solutions.",
    icon: Brain,
    color: "bg-blue-500",
  },
  {
    title: "Custom AI Solutions",
    description:
      "Tailored AI strategies designed to meet your unique business challenges with precision and innovation.",
    icon: Code,
    color: "bg-purple-500",
  },
  {
    title: "Expert AI Team",
    description:
      "A dedicated team of seasoned AI specialists committed to driving digital transformation and innovation.",
    icon: Users,
    color: "bg-green-500",
  },
  {
    title: "Proven ROI",
    description:
      "Our AI-driven solutions deliver measurable results and significant return on investment through smart automation and data insights.",
    icon: TrendingUp,
    color: "bg-red-500",
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="features" ref={ref} className="py-20 bg-gradient-to-b from-black to-blue-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Features</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-800 group"
            >
              <div
                className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-400 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
