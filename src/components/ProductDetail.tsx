import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import { SkipLink } from './SkipLink'
import { Header } from './Header'
import { Footer } from './Footer'

export function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen bg-ink text-cream">
        <SkipLink />
        <Header />
        <main id="conteudo-principal" className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
          <h1 className="font-serif text-4xl font-medium text-cream">Vinho não encontrado</h1>
          <p className="mt-4 text-stone">O rótulo que você procura não está na nossa seleção.</p>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-cream/20 px-8 py-4 text-sm font-medium text-cream transition-all hover:border-gold hover:text-gold"
          >
            Voltar para a loja
          </button>
        </main>
        <Footer />
      </div>
    )
  }

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price)

  return (
    <div className="min-h-screen bg-ink text-cream">
      <SkipLink />
      <Header />
      <main id="conteudo-principal" className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="mb-8 inline-flex items-center gap-2 text-sm text-stone transition-colors hover:text-gold"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para a loja
          </button>

          <article className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-surface">
              {product.image ? (
                <img
                  src={product.image}
                  alt={`Garrafa de ${product.name}`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-wine-deep to-ink" />
              )}
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-wine/20 px-3 py-1 text-xs font-medium text-gold">
                  {product.category}
                </span>
                <div className="flex items-center gap-1 text-sm text-gold">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-medium">{product.rating.toFixed(1)}</span>
                </div>
              </div>

              <h1 className="font-serif text-4xl font-medium leading-tight text-cream md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-2 text-lg text-gold">{product.producer}</p>
              <p className="mt-1 text-sm text-stone">{product.region}</p>

              <p className="mt-6 max-w-xl leading-relaxed text-stone">
                Um rótulo selecionado pela equipe do Mercato Spiaggia. Perfeito para momentos especiais,
                harmoniza com boa comida, boa companhia e conversas que se estendem pela noite.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-stone"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone">Origem</p>
                  <p className="mt-1 font-medium text-cream">{product.region}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone">Categoria</p>
                  <p className="mt-1 font-medium text-cream">{product.category}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone">Avaliação</p>
                  <p className="mt-1 font-medium text-cream">{product.rating.toFixed(1)} / 5.0</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone">Disponibilidade</p>
                  <p className="mt-1 font-medium text-cream">Em estoque</p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-serif text-4xl font-medium text-cream">{formattedPrice}</span>
                <button
                  type="button"
                  className="rounded-full bg-wine px-8 py-4 text-base font-semibold text-cream transition-all hover:bg-wine-glow"
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
