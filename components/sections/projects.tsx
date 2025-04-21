"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Kailasa - Your Personalized AI Advisor",
    description:
      "AI-powered personalized guidance platform with multi-language support and document analysis capabilities.",
    points: [
      "Multi-language support for global accessibility, allowing users from different regions to benefit from personalized AI guidance.",
      "Intuitive chat & voice interactions providing a seamless user experience for health, wealth, and relationship advice.",
      "Document upload feature for in-depth analysis, enabling the AI to provide more personalized and contextual insights.",
      "Expert AI-driven recommendations that help users make informed decisions about health, finances, and relationships.",
    ],
    color: "blue",
    // image: "/images/projects/kailasa-ai.png",
  },
  {
    title: "Insurance AI - Smart Training Solution",
    description:
      "Revolutionary AI-powered chatbot designed specifically for insurance agent training and customer support.",
    points: [
      "Revolutionary AI-powered chatbot designed specifically for insurance agent training and customer support.",
      "Real-time assistance capabilities that reduce training time and improve operational efficiency for insurance companies.",
      "Seamless web integration allowing for easy deployment across existing insurance platforms and systems.",
      "Continuous learning through user feedback, ensuring the AI constantly improves its responses and recommendations.",
    ],
    color: "purple",
    // image: "/images/projects/insurance-ai.png",
  },
  {
    title: "Rotary International QR Solution",
    description:
      "AI-integrated QR scan solution that streamlined data collection and processing for Rotary International.",
    points: [
      "Enhanced Operational Efficiency: The AI-integrated QR scan solution significantly streamlined data collection and processing, saving time and reducing manual errors, improving overall operational efficiency for Rotary International.",
      "Real-Time Data Access: The integrated database ensures Rotary International can access up-to-date information instantly, supporting faster decisions and better data management across operations.",
    ],
    color: "green",
    // image: "/images/projects/rotary-qr.png",
  },
  {
    title: "G2IT Venue Marketing Platform",
    description:
      "Location-based marketing platform that boosts venue visibility and enhances user engagement for clients.",
    points: [
      "G2IT's platform boosts venue visibility through location-based advertising, attracting more local customers and enhancing brand exposure for businesses.",
      "Targeted Marketing: With optimized marketing strategies, G2IT helps clients reach the right audience, increasing foot traffic and maximizing event attendance.",
      "The custom-developed app enhances user engagement, streamlining interactions and providing a seamless experience for customers and venue owners.",
      "The platform provides real-time tracking, enabling clients to measure the effectiveness of campaigns and adjust strategies for better results.",
    ],
    color: "yellow",
    // image: "/images/projects/g2it-marketing.png",
  },
  {
    title: "AI Agent Live Video Support",
    description: "AI-powered video call system with real-time lip syncing technology for lag-free communication.",
    points: [
      "The AI agent enables real-time video calls with no lag, ensuring seamless communication and efficient problem-solving for clients.",
      "The AI assistant provides fast, accurate support, resolving issues quickly and enhancing customer satisfaction with minimal human intervention.",
      "Real-time lip syncing technology improves the user experience, making video calls feel natural and enhancing communication clarity.",
      "Clients benefit from smooth, lag-free video interactions, ensuring consistent support and delivering an overall enhanced user experience.",
    ],
    color: "red",
    // image: "/images/projects/ai-agent-video.png",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeProjects, setActiveProjects] = useState([0, 1])
  const [autoplay, setAutoplay] = useState(true)

  // Auto-rotate projects every 5 seconds
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextProjects()
    }, 5000)

    return () => clearInterval(interval)
  }, [activeProjects, autoplay])

  // Pause autoplay when user interacts with navigation
  const pauseAutoplay = () => {
    setAutoplay(false)
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000)
  }

  const nextProjects = () => {
    setActiveProjects((prev) => {
      const next = [(prev[0] + 2) % projects.length, (prev[1] + 2) % projects.length]
      return next
    })
  }

  const prevProjects = () => {
    setActiveProjects((prev) => {
      const next = [
        (prev[0] - 2 + projects.length) % projects.length,
        (prev[1] - 2 + projects.length) % projects.length,
      ]
      return next
    })
  }

  const goToProjects = (index) => {
    // Calculate the pair of projects to show
    const secondIndex = (index + 1) % projects.length
    setActiveProjects([index, secondIndex])
    pauseAutoplay()
  }

  const getColorClass = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-600",
        light: "bg-blue-500/20",
        border: "border-blue-500",
        text: "text-blue-500",
      },
      purple: {
        bg: "bg-purple-600",
        light: "bg-purple-500/20",
        border: "border-purple-500",
        text: "text-purple-500",
      },
      green: {
        bg: "bg-green-600",
        light: "bg-green-500/20",
        border: "border-green-500",
        text: "text-green-500",
      },
      yellow: {
        bg: "bg-yellow-600",
        light: "bg-yellow-500/20",
        border: "border-yellow-500",
        text: "text-yellow-500",
      },
      red: {
        bg: "bg-red-600",
        light: "bg-red-500/20",
        border: "border-red-500",
        text: "text-red-500",
      },
    }
    return colorMap[color] || colorMap.blue
  }

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

        <div className="relative">
          {/* Two projects side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeProjects.map((projectIndex, i) => {
              const project = projects[projectIndex]
              const colorClasses = getColorClass(project.color)

              return (
                <AnimatePresence mode="wait" key={`project-${projectIndex}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl h-full"
                  >
                    {/* Background color strip at top */}
                    <div className={`h-1 ${colorClasses.bg} w-full`}></div>

                    {/* Project Image */}
                    <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/80 via-gray-900/40 to-transparent"></div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>

                      {/* Key points - show only 2 for cleaner look */}
                      <div className="space-y-3 mb-4">
                        {project.points.slice(0, 2).map((point, index) => (
                          <div key={index} className="flex items-start">
                            <div className={`flex-shrink-0 w-3 h-3 rounded-full ${colorClasses.bg} mt-1.5`}></div>
                            <p className="ml-3 text-gray-300 text-sm">{point}</p>
                          </div>
                        ))}
                      </div>

                      {/* Call to action button */}
                      <div className="flex justify-end">
                        <button
                          className={`px-4 py-1.5 rounded-full ${colorClasses.light} ${colorClasses.text} ${colorClasses.border} border flex items-center gap-2 transition-all hover:-translate-y-1 text-sm`}
                        >
                          View Details
                          <ExternalLink size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => {
                prevProjects()
                pauseAutoplay()
              }}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
              aria-label="Previous projects"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Pagination Dots */}
            <div className="flex space-x-3 items-center">
              {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, index) => {
                // Calculate if this dot represents the current active projects
                const isActive =
                  activeProjects.includes(index * 2) ||
                  (index * 2 + 1 < projects.length && activeProjects.includes(index * 2 + 1))

                return (
                  <button
                    key={index}
                    onClick={() => goToProjects(index * 2)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      isActive ? "bg-blue-500" : "bg-gray-600 hover:bg-gray-500"
                    }`}
                    aria-label={`Go to projects ${index + 1}`}
                  ></button>
                )
              })}
            </div>

            <button
              onClick={() => {
                nextProjects()
                pauseAutoplay()
              }}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
              aria-label="Next projects"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
