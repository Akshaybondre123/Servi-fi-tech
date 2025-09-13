"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X, ArrowLeft } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10)
      }

      handleScroll()
      window.addEventListener("scroll", handleScroll, { passive: true })

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/80 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-2xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span className="text-blue-500">SERVI-FI</span> TECH
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={item.href} className="text-white hover:text-blue-400 transition-colors font-medium">
                {item.name}
              </Link>
            </motion.div>
          ))}
          
          {/* Buy Now Button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
          >
            <button 
              onClick={() => router.push('/buy-now')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors"
            >
              Buy Now
            </button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {/* Mobile Buy Now Button (visible on small screens) */}
          <button 
            onClick={() => router.push('/buy-now')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-3 py-1.5 rounded-md text-sm mr-4 transition-colors"
          >
            Buy Now
          </button>
          
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-blue-400 transition-colors py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Buy Now Link in menu */}
              <button
                onClick={() => {
                  router.push('/buy-now')
                  setIsOpen(false)
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md text-center transition-colors mt-4"
              >
                Buy Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

// Buy Now Page Component
export function BuyNowPage() {
  const [mobileNumber, setMobileNumber] = useState("")
  const [otpSent, setOtpSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleGetOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simple validation
    if (!mobileNumber || mobileNumber.length < 10) {
      alert("Please enter a valid mobile number")
      return
    }
    
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setOtpSent(true)
      
      // Hide success message after 3 seconds
      setTimeout(() => setOtpSent(false), 3000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />
      
      <div className="pt-24 pb-16 container mx-auto px-4">
        <button 
          onClick={() => router.back()}
          className="flex items-center text-blue-400 hover:text-blue-300 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" /> Back
        </button>
        
        <div className="max-w-md mx-auto bg-gray-800/50 backdrop-blur-md rounded-xl p-6 shadow-xl">
          <h1 className="text-2xl font-bold mb-2">Buy Now</h1>
          <p className="text-gray-400 mb-6">Enter your mobile number to proceed with your purchase</p>
          
          <div className="mb-6 p-4 bg-blue-900/20 rounded-lg border border-blue-700/30 text-center">
            <p className="text-sm text-gray-300 mb-2">This service is provided on behalf of</p>
            <a 
              href="https://www.zanzarrotary.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              ZANZAR ROTARY
            </a>
          </div>
          
          <form onSubmit={handleGetOtp}>
            <div className="mb-6">
              <label htmlFor="mobile" className="block text-sm font-medium mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                placeholder="Enter your 10-digit mobile number"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending OTP..." : "Get OTP"}
            </button>
          </form>
          
          <AnimatePresence>
            {otpSent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 p-4 bg-green-900/30 border border-green-800 rounded-lg"
              >
                <p className="text-green-400">✓ OTP has been sent to your mobile number</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}