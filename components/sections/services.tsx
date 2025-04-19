"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Smartphone, Bot, MessageSquare, Wifi, BarChart3 } from "lucide-react"

const services = [
  {
    title: "Web Development",
    description:
      "Developing AI-optimized, responsive websites that integrate intelligent features for personalized user experiences.",
    icon: Globe,
    color: "from-blue-600 to-blue-400",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating AI-enhanced mobile apps for iOS and Android that deliver intuitive user interactions and smart functionalities.",
    icon: Smartphone,
    color: "from-purple-600 to-purple-400",
  },
  {
    title: "AI Agent Development",
    description:
      "Designing robust AI agents leveraging NLP, deep learning, and machine learning for real-time communication and automated support.",
    icon: Bot,
    color: "from-green-600 to-green-400",
  },
  {
    title: "Chatbot Solutions",
    description:
      "Deploying AI-powered chatbots that provide instant, intelligent customer interactions and drive engagement.",
    icon: MessageSquare,
    color: "from-yellow-600 to-yellow-400",
  },
  {
    title: "NFC & RFID Integration",
    description:
      "Integrating smart NFC and RFID technologies with AI-driven analytics for secure transactions and actionable insights.",
    icon: Wifi,
    color: "from-red-600 to-red-400",
  },
  {
    title: "Data Insights & Analytics",
    description:
      "Utilizing advanced machine learning algorithms to transform complex data into strategic business intelligence.",
    icon: BarChart3,
    color: "from-indigo-600 to-indigo-400",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  // Animation variants for smoother transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="services" ref={ref} className="py-20 bg-gradient-to-b from-black to-blue-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of AI-powered solutions to help businesses transform their digital presence
            and operations.
          </p>
        </motion.div>

        {/* Services Showcase - Professional Design with smoother animations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -15,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.4, type: "spring", stiffness: 300, damping: 15 },
              }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700 group"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mr-5 shadow-lg transform group-hover:scale-110 transition-transform duration-500`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>
                <div className="mt-6 flex justify-end">
                  <motion.div
                    className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"
                    whileHover={{ width: 96 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Stats with smoother animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <motion.div
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)",
            }}
            transition={{ duration: 0.4 }}
            className="bg-gray-900 rounded-lg p-6 border border-gray-800"
          >
            <h4 className="text-4xl font-bold text-blue-500 mb-2">100+</h4>
            <p className="text-gray-300">Projects Completed</p>
          </motion.div>
          <motion.div
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)",
            }}
            transition={{ duration: 0.4 }}
            className="bg-gray-900 rounded-lg p-6 border border-gray-800"
          >
            <h4 className="text-4xl font-bold text-blue-500 mb-2">50+</h4>
            <p className="text-gray-300">Happy Clients</p>
          </motion.div>
          <motion.div
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)",
            }}
            transition={{ duration: 0.4 }}
            className="bg-gray-900 rounded-lg p-6 border border-gray-800"
          >
            <h4 className="text-4xl font-bold text-blue-500 mb-2">15+</h4>
            <p className="text-gray-300">AI Experts</p>
          </motion.div>
          <motion.div
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)",
            }}
            transition={{ duration: 0.4 }}
            className="bg-gray-900 rounded-lg p-6 border border-gray-800"
          >
            <h4 className="text-4xl font-bold text-blue-500 mb-2">24/7</h4>
            <p className="text-gray-300">Support Available</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
