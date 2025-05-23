import Hero from "@/components/sections/hero"
import Features from "@/components/sections/features"
import About from "@/components/sections/about"
import Services from "@/components/sections/services"
import Projects from "@/components/sections/projects"
import Clients from "@/components/sections/clients"
import IndustriesCarousel from "@/components/sections/industries-carouse."
import Contact from "@/components/sections/contact"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import IntroOverlay from "@/components/intro-overlay"
import ChatWidget from "@/components/chat-widget"

export default function Home() {
  return (
    <main className="min-h-screen">
      <IntroOverlay />
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Services />
      <Projects />
      <Clients />
      <IndustriesCarousel />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  )
}
