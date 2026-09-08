import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import StatsBar from '@/components/stats-bar'
import About from '@/components/about'
import Projects from '@/components/projects'
import Values from '@/components/values'
import ContractTracker from '@/components/contract-tracker'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'
import SocialFloatingBar from '@/components/social-floating-bar'

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Projects />
      <Values />
      <ContractTracker />
      <CTASection />
      <Footer />
      <SocialFloatingBar />
    </main>
  )
}
