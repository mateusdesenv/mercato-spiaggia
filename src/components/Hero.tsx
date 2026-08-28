export function Hero() {
  return (
    <section
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-16"
      aria-label="Apresentação principal"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2100&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Torres, Rio Grande do Sul
        </p>
        <h1 className="mx-auto max-w-4xl font-serif text-5xl font-medium leading-[1.1] text-cream md:text-7xl lg:text-8xl">
          Vinhos em <br className="hidden md:block" />
          <span className="italic text-gold">Estado de Arte</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone md:text-xl">
          Uma seleção editorial de rótulos raros, carnes nobres e objetos de mesa que transformam o
          cotidiano em celebração.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#vinhos"
            className="rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink transition-all hover:bg-gold-light"
          >
            Descobrir Coleção
          </a>
          <a
            href="#experiencias"
            className="rounded-full border border-cream/20 px-8 py-4 text-sm font-medium text-cream backdrop-blur-sm transition-all hover:border-gold hover:text-gold"
          >
            Agendar Degustação
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <a href="#colecoes" aria-label="Rolar para conteúdo principal">
          <svg className="h-6 w-6 text-stone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
