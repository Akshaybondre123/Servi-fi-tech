"use client"

import { motion } from "framer-motion"

export default function Hero() {
  // Animation variants for smoother transitions
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
        delay: 0.4,
      },
    },
  }

  const partnerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
        delay: 0.3,
      },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-blue-950 to-black overflow-hidden pt-20"
    >
      {/* Animated particles background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500 opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center">
        <div className="w-full text-center mb-8">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            <span className="text-blue-500">SERVI-FI TECH:</span>
            <br />
            AI SOLUTIONS
          </motion.h1>
          
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            At SERVI-FI TECH, we pioneer cutting-edge digital solutions, specializing in AI agents, chatbots, and
            web/mobile app development. Our advanced AI technologies power real-time communication, automation, and data
            insights, empowering businesses to optimize operations, enhance customer experiences, and drive innovation.
          </motion.p>
        </div>

        {/* Partner Section - More attractive and properly positioned */}
        <motion.div
          variants={partnerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-2xl mb-10 bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-md rounded-2xl p-6 border border-blue-500/30 shadow-2xl shadow-blue-500/20 relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-28 h-28 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
          
          <div className="relative z-10 text-center">
            <p className="text-blue-300 text-sm font-semibold mb-2 uppercase tracking-wider">In Partnership With</p>
            <a 
              href="https://www.zanzarrotary.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-300 hover:to-purple-300 transition-all duration-500 mb-3"
            >
              ZANZAR ROTARY
            </a>
            <p className="text-gray-300 text-md mt-3 max-w-lg mx-auto">
              Bringing together industry expertise and innovative AI solutions to transform businesses and drive growth.
            </p>
            <div className="mt-4 flex justify-center">
              <span className="inline-flex items-center text-blue-400 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Official Technology Partner
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 text-center"
          >
            Get Started
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05, backgroundColor: "#3b82f6", color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="px-8 py-3 bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium rounded-md transition-colors duration-300 text-center"
          >
            Our Services
          </motion.a>
        </motion.div>

        {/* Feature cards section */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-blue-500 text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-white mb-2">AI Solutions</h3>
            <p className="text-gray-300">Intelligent automation and machine learning solutions tailored to your business needs.</p>
          </div>
          
          <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-blue-500 text-3xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-white mb-2">Chatbots</h3>
            <p className="text-gray-300">Advanced conversational AI that enhances customer engagement and support.</p>
          </div>
          
          <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-blue-500 text-3xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold text-white mb-2">Web & Mobile</h3>
            <p className="text-gray-300">Responsive, high-performance applications built with cutting-edge technologies.</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - improved positioning for mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-1 h-2 bg-blue-500 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}