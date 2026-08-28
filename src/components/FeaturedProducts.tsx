import { products } from '../data/products'
import { ProductCard } from './ProductCard'

export function FeaturedProducts() {
  return (
    <section id="vinhos" className="bg-ink py-24 md:py-32" aria-labelledby="featured-title">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Seleção Editorial</p>
          <h2 id="featured-title" className="font-serif text-4xl font-medium text-cream md:text-5xl">
            Rótulos em Destaque
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone">
            Cada garrafa é escolhida por sua história, procedência e capacidade de criar momentos
            memoráveis em torno da mesa.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#colecao"
            className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-8 py-4 text-sm font-medium text-cream transition-all hover:border-gold hover:text-gold"
          >
            Ver Coleção Completa
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
