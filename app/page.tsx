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
