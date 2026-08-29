import { Link } from 'react-router-dom'
import type { Product } from '../types/product'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price)

  return (
    <Link
      to={`/produto/${product.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-surface-elevated transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-wine/10"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-ink">
        {product.image ? (
          <img
            src={product.image}
            alt={`Garrafa de ${product.name}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-wine-deep to-ink" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
          <h3 className="font-serif text-xl font-medium leading-tight text-cream">{product.name}</h3>
          <p className="mt-1 text-sm text-gold">{product.producer}</p>
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-ink/60 px-2.5 py-1 text-xs font-medium text-gold backdrop-blur-sm">
          {product.category}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-1 text-xs font-medium text-stone"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-stone">{product.region}</p>

        <div className="mt-4 flex items-center gap-1 text-sm text-gold">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="font-medium">{product.rating.toFixed(1)}</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="font-serif text-2xl font-medium text-cream">{formattedPrice}</span>
          <button
            type="button"
            className="rounded-full bg-wine px-4 py-2.5 text-sm font-semibold text-cream transition-all hover:bg-wine-glow"
            aria-label={`Adicionar ${product.name} ao carrinho`}
          >
            Adicionar
          </button>
        </div>
      </div>
    </Link>
  )
}
