import { MotionConfig } from "framer-motion"
import Navbar from "./components/nav-bar"
import Contact from "./sections/Contact"
import FAQ from "./sections/FAQ"
import Features from "./sections/Features"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Pricing from "./sections/Pricing"
import RecentWork from "./sections/RecentWork"
import Services from "./sections/Services"
import Testimonials from "./sections/Testimonials"
import WorksCarousel from "./sections/WorksCarousel"


function App() {

  return (
    <MotionConfig
      reducedMotion={"user"}
    >
      <Navbar />
      <div
        id="hero-container"
        className="bg-neutral flex flex-col gap-y-24 max-w-[1200px] mx-auto overflow-x-hidden">
        <Hero />
        <WorksCarousel />
      </div>
      <main id="main-container">
        <Features />
        <Services />
        <RecentWork />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </MotionConfig>
  )
}

export default App
