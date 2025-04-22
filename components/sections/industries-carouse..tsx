"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

// Industry data with images and bullet points
const industries = [
  {
    id: 1,
    title: "Fintech",
    image: "/fintechwithai.png",
    color: "from-blue-600 to-blue-400",
    applications: [
      "Fraud detection & prevention",
      "Personalized banking chatbots",
      "Automated investment advice",
      "Risk assessment & credit scoring",
    ],
  },
  {
    id: 2,
    title: "Customer Service",
    image: "/Customer_Services.png",
    color: "from-purple-600 to-purple-400",
    applications: [
      "24/7 AI support agents",
      "Sentiment analysis for feedback",
      "Automated ticket routing",
      "Personalized customer interactions",
    ],
  },
  {
    id: 3,
    title: "E-learning",
    image: "/E-learningwithAI.png",
    color: "from-green-600 to-green-400",
    applications: [
      "Adaptive learning paths",
      "Automated content generation",
      "Student engagement tracking",
      "Personalized tutoring systems",
    ],
  },
  {
    id: 4,
    title: "Healthcare",
    image: "/Healthcare.png",
    color: "from-red-600 to-red-400",
    applications: [
      "Medical image analysis",
      "Patient monitoring systems",
      "Treatment recommendation",
      "Drug discovery acceleration",
    ],
  },
  {
    id: 5,
    title: "Retail & E-commerce",
    image: "E-Commerecewithai.png",
    color: "from-yellow-600 to-yellow-400",
    applications: [
      "Personalized shopping experiences",
      "Inventory optimization",
      "Visual search capabilities",
      "Dynamic pricing strategies",
    ],
  },
  {
    id: 6,
    title: "Transportation & Logistics",
    image: "/Transforamationlogistic.png",
    color: "from-indigo-600 to-indigo-400",
    applications: [
      "Route optimization",
      "Predictive maintenance",
      "Autonomous vehicle systems",
      "Supply chain forecasting",
    ],
  },
  {
    id: 7,
    title: "Manufacturing",
    image: "/mauifacturing.png",
    color: "from-teal-600 to-teal-400",
    applications: [
      "Quality control automation",
      "Predictive maintenance",
      "Production optimization",
      "Defect detection systems",
    ],
  },
  {
    id: 8,
    title: "Legal & Compliance",
    image: "/LegalCompaliancewithai.png",
    color: "from-pink-600 to-pink-400",
    applications: [
      "Contract analysis & review",
      "Legal research automation",
      "Compliance monitoring",
      "Case outcome prediction",
    ],
  },
  {
    id: 9,
    title: "Energy & Utilities",
    image: "/Ennergywithai.png",
    color: "from-orange-600 to-orange-400",
    applications: [
      "Smart grid optimization",
      "Energy consumption forecasting",
      "Predictive maintenance for infrastructure",
      "Renewable energy integration",
    ],
  },
]

// Individual industry card component
const IndustryCard = ({ industry }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="h-[350px] rounded-xl overflow-hidden relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 3000)} // Reset after 3 seconds on mobile
    >
      {/* Background gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-80 transition-opacity duration-300 ${
          isHovered ? "opacity-95" : "opacity-80"
        }`}
      ></div>

      {/* Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={industry.image || "/placeholder.svg"}
          alt={industry.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content container */}
      <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between transition-all duration-500">
        {/* Title - always visible */}
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg"
          animate={{
            y: isHovered ? 0 : 0,
            opacity: 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {industry.title}
        </motion.h3>

        {/* Applications list - visible on hover */}
        <motion.div
          className="bg-black/40 backdrop-blur-sm rounded-lg p-4 transform transition-all duration-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="text-white font-semibold mb-3">AI Applications:</h4>
          <ul className="space-y-2">
            {industry.applications.map((app, index) => (
              <li key={index} className="flex items-start text-white text-sm md:text-base">
                <span className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5">•</span>
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function IndustriesCarousel() {
  const [currentPage, setCurrentPage] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const totalPages = Math.ceil(industries.length / 3)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Auto-slide every 7 seconds
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages)
    }, 7000)

    return () => clearInterval(interval)
  }, [currentPage, totalPages, autoplay])

  // Pause autoplay when user interacts with navigation
  const pauseAutoplay = () => {
    setAutoplay(false)
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000)
  }

  // Get current visible industries
  const getCurrentIndustries = () => {
    const startIndex = currentPage * 3
    return industries.slice(startIndex, startIndex + 3)
  }

  return (
    <section id="industries" ref={ref} className="py-20 bg-gradient-to-b from-blue-950 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Delivering AI Solutions Across Industries</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our AI technologies are transforming businesses across multiple sectors, providing innovative solutions to
            complex challenges.
          </p>
        </motion.div>

        {/* Three cards in a row */}
        <div className="relative mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getCurrentIndustries().map((industry, index) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => {
              setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
              pauseAutoplay()
            }}
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label="Previous industries"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => {
              setCurrentPage((prev) => (prev + 1) % totalPages)
              pauseAutoplay()
            }}
            className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label="Next industries"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center space-x-3 items-center">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index)
                pauseAutoplay()
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentPage === index ? "bg-blue-500" : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to page ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}
