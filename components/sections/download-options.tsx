"use client"

import { motion } from "framer-motion"
import { Smartphone, Globe, Sparkles, Download, Star, Users } from "lucide-react"
import Link from "next/link"

export default function DownloadOptions() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-2xl"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="w-6 h-6 text-blue-400/40" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
        <Star className="w-6 h-6 text-purple-400/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-full px-6 py-2 mb-6"
          >
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Join 10,000+ Photography Enthusiasts</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Join <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SERVIFITECH</span> Today
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Choose your preferred way to join our vibrant community of photography enthusiasts and start sharing your moments
          </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Mobile App Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <Link 
                href="https://kwikpic-in.app.link/nZX00HLNUWb?groupCode=YVM0AV" 
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full relative z-10"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-2xl p-8 text-white text-center backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
                  
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-500/30 rounded-tl-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-blue-500/30 rounded-br-2xl"></div>

                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Smartphone className="w-10 h-10" />
                    </div>
                    
                    {/* Recommendation Badge */}
                    <div className="inline-flex items-center gap-1 bg-blue-600/30 border border-blue-500/50 rounded-full px-4 py-1 mb-4">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-blue-200 text-sm font-semibold">Recommended</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                      Mobile App
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Get the ultimate photography experience with our feature-rich mobile application
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 text-blue-300 group-hover:text-blue-200 transition-colors">
                      <Download className="w-5 h-5" />
                      <span className="font-semibold">Download Now</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Website Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <Link 
                href="https://kwikpic-in.app.link/e/mZX00HLNUWb?uCode=YVM0AV" 
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full relative z-10"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-2xl p-8 text-white text-center backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 shadow-2xl hover:shadow-purple-500/10 overflow-hidden">
                  
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-purple-500/30 rounded-tr-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-purple-500/30 rounded-bl-2xl"></div>

                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Globe className="w-10 h-10" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                      Web Platform
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Access our platform directly from your browser with full desktop functionality
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 text-purple-300 group-hover:text-purple-200 transition-colors">
                      <Globe className="w-5 h-5" />
                      <span className="font-semibold">Visit Website</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="text-center"
          >
            <p className="text-gray-400 text-sm">
              Both options offer full access to our community. <span className="text-blue-400">Sync your progress across devices!</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}