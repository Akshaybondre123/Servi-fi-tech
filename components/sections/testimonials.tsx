"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: string
  name: string
  company: string
  position?: string
  rating: number
  content: string
  image?: string
  featured: boolean
}

// Fallback testimonials if database is empty or API fails
const fallbackTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    position: "CTO",
    rating: 5,
    content: "Servifitech transformed our customer service with their AI chatbot solution. Response times decreased by 80% and customer satisfaction increased dramatically.",
    featured: true
  },
  {
    id: "2", 
    name: "Michael Chen",
    company: "RetailMax",
    position: "CEO",
    rating: 5,
    content: "The AI-powered analytics dashboard they built gives us insights we never had before. Our revenue grew 30% in just 6 months.",
    featured: true
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez", 
    company: "MedTech Solutions",
    position: "Director of Innovation",
    rating: 5,
    content: "Their healthcare AI system streamlined our diagnostic processes. The team's expertise in both AI and healthcare is unmatched.",
    featured: true
  },
  {
    id: "4",
    name: "James Wilson",
    company: "FinanceFlow",
    position: "VP of Technology",
    rating: 5,
    content: "Servifitech delivered a fraud detection system that saved us millions. Their AI solutions are enterprise-grade and reliable.",
    featured: false
  }
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/testimonials?featured=true&limit=6')
      const result = await response.json()
      
      if (result.success && result.testimonials.length > 0) {
        setTestimonials(result.testimonials)
      }
    } catch (error) {
      console.log('Using fallback testimonials:', error)
      // Keep fallback testimonials
    } finally {
      setIsLoading(false)
    }
  }

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-400"}`}
      />
    ))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-b from-blue-950 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-64 h-8 bg-gray-700 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="w-20 h-1 bg-gray-700 mx-auto mb-6 animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-800 rounded-xl p-6 animate-pulse">
                <div className="w-full h-32 bg-gray-700 rounded mb-4"></div>
                <div className="w-3/4 h-4 bg-gray-700 rounded mb-2"></div>
                <div className="w-1/2 h-4 bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gradient-to-b from-blue-950 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            See what our clients say about working with us and the transformative impact of our AI solutions.
          </p>
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700">
            <Quote className="w-12 h-12 text-blue-400 mb-6" />
            
            <div className="flex items-center justify-between mb-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <div className="flex-1 mx-8">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4">
                    {testimonials[currentIndex].image && (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-600">
                        <Image
                          src={testimonials[currentIndex].image!}
                          alt={testimonials[currentIndex].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="text-white font-semibold">{testimonials[currentIndex].name}</h4>
                      <p className="text-gray-400 text-sm">
                        {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
            
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-blue-500" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)",
              }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700 group"
            >
              <div className="flex items-center mb-4">
                <div className="flex mr-4">
                  {renderStars(testimonial.rating)}
                </div>
                {testimonial.featured && (
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                {testimonial.image ? (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-600 mr-3">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs">
                    {testimonial.position} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Ready to join our satisfied clients?
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
