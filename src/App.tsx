import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import ProgramSection from './components/ProgramSection'
import AuthoritySection from './components/AuthoritySection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#0A0A0B] selection:bg-[#FF5C00] selection:text-white overflow-x-hidden">
      <div className="grain-overlay" />
      
      <Header />
      
      <article className="relative">
        <HeroSection />
        
        <div className="relative z-10 bg-[#FAF9F6]">
          <ProblemSection />
          <AuthoritySection />
          <ProgramSection />
          <CTASection />
        </div>
      </article>

      <Footer />
    </main>
  )
}

export default App
