import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Carousel } from "./components/Carousel"
import { Support } from "./components/Support"
import { EvolvingTrends } from "./components/EvolvingTrends"
import { Footer } from "./components/Footer"
// import { Testimonials } from "./components/Testimonials"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <EvolvingTrends />
      <Carousel />
      <Support />
      {/* <Testimonials /> */}
      <Footer />
    </>
  )
}

export default App
