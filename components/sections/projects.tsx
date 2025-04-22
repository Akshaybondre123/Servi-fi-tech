"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Featured projects for the homepage
const featuredProjects = [
  {
    id: 1,
    title: "Kailasa AI Advisor",
    description:
      "AI-powered personalized guidance platform with multi-language support and document analysis capabilities.",
    image: "/projects/kailasa-ai.png",
    color: "from-blue-600 to-blue-400",
  },
  {
    id: 2,
    title: "Insurance AI Training",
    description:
      "Revolutionary AI-powered chatbot designed specifically for insurance agent training and customer support.",
    image: "/projects/insurance-ai-screen.png",
    color: "from-purple-600 to-purple-400",
  },
  {
    id: 3,
    title: "Rotary QR Solution",
    description:
      "AI-integrated QR scan solution that streamlined data collection and processing for Rotary International.",
    image: "/projects/rotary-qr.png",
    color: "from-green-600 to-green-400",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="projects" ref={ref} className="py-20 bg-gradient-to-b from-blue-950 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Work Portfolio</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our successful projects delivering innovative AI solutions across various industries
          </p>
        </motion.div>

        {/* Three featured projects in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl h-full group hover:border-blue-500 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md flex items-center gap-2 transition-colors"
                  >
                    View Details
                    <ExternalLink size={14} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats and Portfolio Link - Three cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Projects Delivered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 flex flex-col items-center justify-center text-center hover:border-blue-500 transition-all duration-300"
          >
            <div className="text-3xl font-bold text-white mb-3">
              Delivered <span className="text-blue-500">700+</span> Projects
            </div>
            <Link href="/portfolio" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md flex items-center gap-2 transition-colors mt-4"
              >
                Visit Portfolio
                <ExternalLink size={16} />
              </motion.button>
            </Link>
          </motion.div>

          {/* Card 2: Client Retention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 flex flex-col items-center justify-center text-center hover:border-blue-500 transition-all duration-300"
          >
            <div className="text-5xl font-bold text-white mb-3">70%</div>
            <div className="text-gray-300 text-lg">Client Retention Rate</div>
            <div className="mt-4 w-16 h-1 bg-blue-500 rounded-full"></div>
          </motion.div>

          {/* Card 3: Client Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 flex flex-col items-center justify-center text-center hover:border-blue-500 transition-all duration-300"
          >
            <div className="text-5xl font-bold text-white mb-3">4.9</div>
            <div className="flex mb-2">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${i < 4 ? "text-yellow-400 fill-yellow-400" : i === 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                />
              ))}
            </div>
            <div className="text-gray-300 text-lg">Client Rating</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
