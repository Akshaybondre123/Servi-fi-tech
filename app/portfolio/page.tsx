"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, ArrowLeft } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

// Portfolio projects data
const portfolioProjects = [
  {
    id: 1,
    title: "Kailasa AI Advisor",
    description:
      "AI-powered personalized guidance platform with multi-language support and document analysis capabilities.",
    image: "/projects/kailasa-ai.png",
    category: "AI Assistant",
  },
  {
    id: 2,
    title: "Insurance AI Training",
    description:
      "Revolutionary AI-powered chatbot designed specifically for insurance agent training and customer support.",
    image: "/projects/insurance-ai-screen.png",
    category: "Training & Support",
  },
  {
    id: 3,
    title: "Rotary QR Solution",
    description:
      "AI-integrated QR scan solution that streamlined data collection and processing for Rotary International.",
    image: "/projects/rotary-qr.png",
    category: "Data Processing",
  },
  {
    id: 4,
    title: "G2IT Marketing Platform",
    description:
      "Location-based marketing platform that boosts venue visibility and enhances user engagement for clients.",
    image: "/projects/g2it-marketing.png",
    category: "Marketing",
  },
  {
    id: 5,
    title: "AI Agent Video Support",
    description: "AI-powered video call system with real-time lip syncing technology for lag-free communication.",
    image: "/projects/ai-agent-video.png",
    category: "Customer Support",
  },
  {
    id: 6,
    title: "Healthcare Diagnostics AI",
    description: "AI system for analyzing medical images and assisting in early disease detection with high accuracy.",
    image: "/projects/healthcarediagonasiswithai.png",
    category: "Healthcare",
  },
  {
    id: 7,
    title: "Financial Fraud Detection",
    description: "Machine learning system that identifies suspicious patterns in financial transactions in real-time.",
    image: "/projects/fraudDetationwithai.png",
    category: "Fintech",
  },
  {
    id: 8,
    title: "E-commerce Recommendation Engine",
    description:
      "AI-powered product recommendation system that increases conversion rates through personalized suggestions.",
    image: "/projects/ecommereceRecommandwithai.png",
    category: "E-commerce",
  },
  {
    id: 9,
    title: "Autonomous Inventory Management",
    description: "AI solution for retail inventory management using computer vision and predictive analytics.",
    image: "/projects/autonomusInvontary.png",
    category: "Retail",
  },
  {
    id: 10,
    title: "Smart City Traffic Optimization",
    description: "AI system that analyzes traffic patterns and optimizes signal timing to reduce congestion.",
    image: "/projects/smartCityTraffic.png",
    category: "Transportation",
  },
  {
    id: 11,
    title: "Manufacturing Quality Control",
    description: "Computer vision system that detects defects in manufacturing processes with 99.8% accuracy.",
    image: "/projects/manufacturingQualityControl.png",
    category: "Manufacturing",
  },
  {
    id: 12,
    title: "Personalized Learning Platform",
    description:
      "Adaptive learning system that customizes educational content based on student performance and preferences.",
    image: "/projects/PersonalizedLearningPlatform.png",
    category: "Education",
  },
  {
    id: 13,
    title: "Legal Document Analysis",
    description: "NLP system that reviews legal documents, extracts key information, and identifies potential issues.",
    image: "/projects/LegalDocumentAnalysis.png",
    category: "Legal",
  },
  {
    id: 14,
    title: "Predictive Maintenance System",
    description: "IoT and AI solution that predicts equipment failures before they occur, reducing downtime.",
    image: "/projects/PredactiveMentationSystem.png",
    category: "Industrial",
  },
  {
    id: 15,
    title: "Customer Sentiment Analysis",
    description: "AI tool that analyzes customer feedback across multiple channels to identify trends and issues.",
    image: "/projects/sentimentwithai.png",
    category: "Customer Experience",
  },
  {
    id: 16,
    title: "Supply Chain Optimization",
    description: "AI-driven system that optimizes logistics and inventory management across complex supply chains.",
    image: "/projects/supplychainoptimization.png",
    category: "Logistics",
  },
]

export default function PortfolioPage() {
  // Ensure page scrolls to top when loaded
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-blue-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4">
        <Link
            href="/"
            className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-all duration-300 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>



          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Portfolio</h1>
          <div className="w-20 h-1 bg-blue-500 mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore our collection of AI-driven projects that have transformed businesses across industries. Each
            project showcases our commitment to innovation and excellence in artificial intelligence.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl group hover:border-blue-500 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/20"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex justify-end">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md flex items-center gap-2 transition-colors">
                      View Details
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-blue-950 to-black">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-white mb-2">700+</div>
                <div className="text-gray-400">Projects Delivered</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-white mb-2">70%</div>
                <div className="text-gray-400">Client Retention Rate</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center text-4xl font-bold text-white mb-2">
                  4.9
                  <span className="text-yellow-400 ml-2">★</span>
                </div>
                <div className="text-gray-400">Average Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
