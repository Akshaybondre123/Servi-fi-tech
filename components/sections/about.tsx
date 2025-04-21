"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Code, Users, TrendingUp, CheckCircle, Zap, Award, Globe } from "lucide-react"
import Image from "next/image"

const chooseUsItems = [
  {
    title: "AI Innovation",
    description: "Pioneering AI innovations across industries with cutting-edge technology",
    icon: Brain,
  },
  {
    title: "Custom Strategies",
    description: "Custom AI strategies tailored to your unique business challenges",
    icon: Code,
  },
  {
    title: "Seamless Integration",
    description: "Seamless integration of machine learning and data insights into your workflow",
    icon: Zap,
  },
  {
    title: "Scalable Solutions",
    description: "Scalable and future-proof AI solutions that grow with your business",
    icon: TrendingUp,
  },
  {
    title: "Expert Team",
    description: "Team of AI specialists committed to driving digital transformation",
    icon: Users,
  },
  {
    title: "Reliable Support",
    description: "Transparent and reliable AI support throughout your journey",
    icon: CheckCircle,
  },
]

const stats = [
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "50+", label: "Global Clients", icon: Globe },
  { value: "100+", label: "AI Projects", icon: Brain },
  { value: "24/7", label: "Support", icon: CheckCircle },
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
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Transforming businesses through innovative AI solutions and cutting-edge technology
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Main content with image */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="SERVI-FI TECH Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold text-white">Driving AI Innovation</h3>
                  <p className="text-blue-300">Since 2008</p>
                </div>
              </div>

              {/* Stats overlay */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="bg-gray-900/80 backdrop-blur-sm p-4 rounded-lg border border-gray-800 flex items-center"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-600/30 flex items-center justify-center mr-3">
                      <stat.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">Our Story</h3>

              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  At <span className="text-blue-400 font-semibold">SERVI-FI TECH</span>, we are an AI-first company
                  dedicated to transforming digital landscapes with innovative artificial intelligence solutions.
                  Founded in 2008, we've been at the forefront of the AI revolution, helping businesses harness the
                  power of intelligent technologies.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Our expertise spans AI-driven web and mobile development, intelligent chatbot design, advanced machine
                  learning algorithms, and data analytics. We've successfully delivered over 100 AI projects for clients
                  across various industries, from fintech to healthcare.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  We empower businesses to achieve operational excellence and superior customer engagement through
                  cutting-edge AI technologies. Our solutions are designed to be scalable, future-proof, and tailored to
                  your specific business needs, ensuring you stay ahead in today's rapidly evolving digital landscape.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
                >
                  Our Services
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium rounded-md transition-colors duration-300"
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Why Choose Us section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Why Choose Us</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chooseUsItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-900/50 flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  </div>
                  <p className="text-gray-400 pl-16">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
