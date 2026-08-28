export function Experience() {
  return (
    <section id="experiencias" className="relative overflow-hidden bg-cream" aria-labelledby="experience-title">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1470158499416-75be9aa0c6db?q=80&w=2100&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/90 to-cream/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-copper">Experiências</p>
            <h2 id="experience-title" className="font-serif text-4xl font-medium text-ink md:text-5xl">
              Deguste o Inesperado
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-dark">
              Nossa adega não é apenas um local de compra, mas um espaço de convívio. Participe de
              degustações privadas guiadas por sommeliers especializados e descubra rótulos que
              contam histórias.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#agenda"
                className="rounded-full bg-wine px-8 py-4 text-center text-sm font-semibold text-cream transition-all hover:bg-wine-glow"
              >
                Agenda de Eventos
              </a>
              <a
                href="#privado"
                className="rounded-full border border-ink/20 px-8 py-4 text-center text-sm font-medium text-ink transition-all hover:border-copper hover:text-copper"
              >
                Eventos Privados
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-ink/5 bg-cream-warm/80 p-8 shadow-sm backdrop-blur-xl md:p-10">
            <h3 className="font-serif text-2xl font-medium text-ink">Visite a Nossa Casa</h3>
            <address className="mt-6 not-italic text-stone-dark">
              <p className="text-ink">Rua Silva Jardim, 416</p>
              <p>Centro • Torres — RS</p>
            </address>
            <div className="mt-6 space-y-2 text-stone-dark">
              <p>
                <span className="text-ink">Atendimento:</span>
              </p>
              <p>Seg — Sáb: 09h às 23h</p>
              <p>Dom: 10h às 18h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
