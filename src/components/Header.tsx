import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Coleções', href: '#colecoes' },
  { label: 'Vinhos', href: '#vinhos' },
  { label: 'Experiências', href: '#experiencias' },
  { label: 'Sobre', href: '#sobre' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
    isScrolled
      ? 'bg-ink/85 border-b border-white/10 backdrop-blur-xl shadow-sm shadow-ink/10'
      : 'bg-transparent border-b border-transparent'
  }`

  return (
    <header className={headerClasses}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3" aria-label="Mercato Spiaggia - Início">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold to-copper text-ink">
            <span className="font-serif text-xl font-semibold">M</span>
          </div>
          <span className="font-serif text-2xl font-medium tracking-wide text-cream">
            Mercato Spiaggia
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={isHome ? item.href : `/${item.href}`}
              className="text-base font-medium text-stone transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#carrinho"
            className="text-base font-medium text-stone transition-colors hover:text-gold"
            aria-label="Carrinho de compras"
          >
            Carrinho (0)
          </a>
          <a
            href="#contato"
            className="rounded-full bg-gold px-6 py-2.5 text-base font-semibold text-ink transition-all hover:bg-gold-light"
          >
            Reservar Mesa
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-cream md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-ink/95 px-6 py-6 backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Navegação mobile">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={isHome ? item.href : `/${item.href}`}
                className="text-base font-medium text-cream transition-colors hover:text-gold"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to={isHome ? '#contato' : '/#contato'}
              className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-base font-semibold text-ink"
              onClick={() => setMenuOpen(false)}
            >
              Reservar Mesa
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
