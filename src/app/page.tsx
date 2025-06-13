import { 
  Navbar,
  Hero, 
  About, 
  Skills, 
  Projects, 
  Experience, 
  Contact, 
  Footer 
} from '@/components'

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
} 