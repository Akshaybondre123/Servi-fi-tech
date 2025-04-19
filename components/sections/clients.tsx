"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const clients = [
  { name: "Adobe", color: "bg-red-600" },
  { name: "Google", color: "bg-blue-500" },
  { name: "AWS", color: "bg-yellow-500" },
  { name: "Jumbo", color: "bg-green-500" },
  { name: "Rotary", color: "bg-blue-700" },
  { name: "CF", color: "bg-blue-400" },
  { name: "Ruvena Holidays", color: "bg-purple-500" },
  { name: "Kajaria", color: "bg-red-500" },
  { name: "JK LAKSHMI CEMENT LTD", color: "bg-gray-600" },
  { name: "TATA", color: "bg-blue-800" },
  { name: "HYUNDAI", color: "bg-blue-600" },
  { name: "Sasta Safar", color: "bg-green-600" },
  { name: "Microsoft", color: "bg-blue-500" },
  { name: "IBM", color: "bg-blue-900" },
  { name: "Oracle", color: "bg-red-700" },
  { name: "Samsung", color: "bg-blue-600" },
  { name: "LG", color: "bg-red-500" },
  { name: "Sony", color: "bg-gray-800" },
]

export default function Clients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Create three identical sets of logos for seamless infinite scrolling
  const tripleClients = [...clients, ...clients, ...clients]

  return (
    <section id="clients" ref={ref} className="py-20 bg-gradient-to-b from-black to-blue-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Clients</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Trusted by leading companies across various industries worldwide
          </p>
        </motion.div>

        {/* Single row of client logos - slower, smoother animation */}
        <div className="relative mb-12 overflow-hidden">
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-33.33%" }}
            transition={{
              duration: 120, // Much slower animation (doubled from 60 to 120)
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="flex absolute"
          >
            {tripleClients.map((client, index) => (
              <motion.div
                key={`row1-${index}`}
                whileHover={{
                  y: -5, // Reduced hover lift
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
                  borderColor: "#3b82f6",
                }}
                transition={{ duration: 0.4 }}
                className="mx-4 h-20 w-48 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 shadow-xl flex items-center justify-center px-4 hover:border-blue-500 transition-all duration-500"
              >
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-lg ${client.color} flex items-center justify-center mr-3 shadow-lg`}>
                    <span className="text-white font-bold text-sm">{client.name.charAt(0)}</span>
                  </div>
                  <span className="text-white font-bold text-sm">{client.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Static placeholder for spacing */}
          <div className="h-20"></div>
        </div>

        {/* Remove the second row completely */}

        {/* Client testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-10">What Our Clients Say</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)",
              }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 shadow-xl"
            >
              <div className="mb-6">
                <svg className="w-10 h-10 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6 italic">
                "SERVI-FI TECH's AI solutions have transformed our customer service operations. Their chatbot
                implementation has reduced response times by 70% while maintaining high customer satisfaction."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                  <span className="text-white font-bold">R</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Robert Johnson</p>
                  <p className="text-gray-400 text-sm">CTO, Rotary International</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)",
              }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 shadow-xl"
            >
              <div className="mb-6">
                <svg className="w-10 h-10 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6 italic">
                "The AI-powered marketing platform developed by SERVI-FI TECH has significantly increased our venue
                bookings. Their team's expertise in AI and data analytics is unmatched."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mr-3">
                  <span className="text-white font-bold">S</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Sarah Williams</p>
                  <p className="text-gray-400 text-sm">Marketing Director, G2IT</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)",
              }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 shadow-xl"
            >
              <div className="mb-6">
                <svg className="w-10 h-10 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6 italic">
                "The Kailasa AI advisor has revolutionized how we provide personalized guidance to our users. SERVI-FI
                TECH delivered a sophisticated AI solution that exceeded our expectations."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                  <span className="text-white font-bold">A</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Anil Patel</p>
                  <p className="text-gray-400 text-sm">CEO, Kailasa</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
