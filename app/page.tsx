"use client"

import { useEffect } from "react"
import Hero from "@/components/sections/hero"
import Features from "@/components/sections/features"
import About from "@/components/sections/about"
import Services from "@/components/sections/services"
import Projects from "@/components/sections/projects"
import Clients from "@/components/sections/clients"
import Contact from "@/components/sections/contact"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  // Add scroll animation observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          const animation = target.dataset.animation || "animate-fadeInUp"
          const delay = target.dataset.delay || "0"

          // Add animation class after the specified delay
          setTimeout(() => {
            target.classList.add(animation)
          }, Number.parseInt(delay))

          // Unobserve after animation is applied
          observer.unobserve(target)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions)

    // Observe all elements with the animate-on-scroll class
    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element)
    })

    // Setup parallax effect
    const handleParallax = () => {
      document.querySelectorAll(".parallax-bg").forEach((element) => {
        const scrollPosition = window.scrollY
        const elementTop = element.closest(".parallax")?.getBoundingClientRect().top || 0
        const speed = Number.parseFloat((element as HTMLElement).dataset.speed || "0.5")

        // Apply parallax effect
        ;(element as HTMLElement).style.transform = `translateY(${(scrollPosition - elementTop) * speed}px)`
      })
    }

    window.addEventListener("scroll", handleParallax)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleParallax)
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Services />
      <Projects />
      <Clients />
      <Contact />
      <Footer />
    </main>
  )
}
