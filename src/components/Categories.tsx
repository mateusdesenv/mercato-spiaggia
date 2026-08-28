import { categories } from '../data/products'

export function Categories() {
  return (
    <section id="colecoes" className="bg-cream py-24 md:py-32" aria-labelledby="categories-title">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-copper">Curadoria</p>
          <h2 id="categories-title" className="font-serif text-4xl font-medium text-ink md:text-5xl">
            Explore por Categoria
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-dark">
            Cada seção do nosso mercado é uma porta de entrada para sabores selecionados e
            experiências memoráveis.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl border border-ink/5 bg-cream-warm p-8 shadow-sm transition-all hover:border-copper/30 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-wine/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <h3 className="font-serif text-2xl font-medium text-ink">{category.name}</h3>
                <p className="mt-2 text-sm text-stone-dark">{category.count} itens</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-copper">
                  Explorar
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
