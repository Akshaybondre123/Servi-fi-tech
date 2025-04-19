"use client"

import { useRef, useState } from "react"
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
    image: "/projects/kailasa-ai.png",
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
    image: "/projects/rotary-qr.png",
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
    image: "/projects/g2it-marketing.png",
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
    // image: "/projects/ai-agent-video.png",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeProject, setActiveProject] = useState(0)

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const getColorClass = (color: string) => {
    const colorMap: Record<string, { bg: string; light: string; border: string; text: string }> = {
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

  const colorClasses = getColorClass(projects[activeProject].color)

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
          {/* Project Content with Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="lg:w-1/2 relative">
                  {/* Background color strip at top */}
                  <div className={`h-1 ${colorClasses.bg} w-full absolute top-0 left-0 z-10`}></div>

                  <div className="relative h-64 md:h-80 lg:h-full overflow-hidden">
                    <Image
                      src={projects[activeProject].image || "/placeholder.svg"}
                      alt={projects[activeProject].title}
                      fill
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/80 via-gray-900/40 to-transparent"></div>

                    {/* Project title overlay for mobile */}
                    <div className="absolute bottom-0 left-0 p-6 lg:hidden">
                      <h3 className="text-2xl font-bold text-white mb-2">{projects[activeProject].title}</h3>
                      <p className="text-gray-300 text-sm md:text-base">{projects[activeProject].description}</p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-6 lg:p-8">
                  {/* Desktop title */}
                  <div className="hidden lg:block mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{projects[activeProject].title}</h3>
                    <p className="text-gray-300">{projects[activeProject].description}</p>
                  </div>

                  <div className="space-y-4 mt-4">
                    {projects[activeProject].points.map((point, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className={`flex-shrink-0 w-4 h-4 rounded-full ${colorClasses.bg} mt-1.5`}></div>
                        <p className="ml-3 text-gray-300">{point}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Call to action button */}
                  <motion.div
                    className="mt-8 flex justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <button
                      className={`px-6 py-2 rounded-full ${colorClasses.light} ${colorClasses.text} ${colorClasses.border} border flex items-center gap-2 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-${projects[activeProject].color}-500/20`}
                    >
                      View Case Study
                      <ExternalLink size={16} />
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevProject}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex space-x-3 items-center">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeProject ? getColorClass(projects[index].color).bg : "bg-gray-600"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextProject}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Project title links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {projects.map((project, index) => {
              const colors = getColorClass(project.color)
              return (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`px-4 py-2 rounded-md transition-all ${
                    index === activeProject
                      ? `${colors.bg} text-white shadow-lg`
                      : `bg-gray-800 text-gray-300 hover:${colors.text} hover:bg-gray-700`
                  }`}
                >
                  {project.title.split(" - ")[0]}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
