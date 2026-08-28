import { SkipLink } from './components/SkipLink'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { FeaturedProducts } from './components/FeaturedProducts'
import { Experience } from './components/Experience'
import { About } from './components/About'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <SkipLink />
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Experience />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
