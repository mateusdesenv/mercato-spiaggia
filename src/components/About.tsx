export function About() {
  return (
    <section id="sobre" className="bg-surface py-24 md:py-32" aria-labelledby="about-title">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-copper to-wine-deep">
              <img
                src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1600&auto=format&fit=crop"
                alt="Vinha ao pôr do sol"
                className="h-full w-full object-cover opacity-80 mix-blend-overlay"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 hidden rounded-2xl border border-white/10 bg-surface-elevated p-8 lg:block">
              <p className="font-serif text-4xl font-medium text-gold">08</p>
              <p className="mt-1 text-sm text-stone">Anos Curando Encontros</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Nossa História</p>
            <h2 id="about-title" className="font-serif text-4xl font-medium text-cream md:text-5xl">
              Mais que um Mercado, um Destino
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone">
              Localizado no coração de Torres, o Mercato Spiaggia nasceu do desejo de reunir o que
              há de mais autêntico na enogastronomia brasileira e mundial.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-stone">
              Nossa curadoria é pessoal e intransigente. Escolhemos cada item como se fosse para
              nossa própria casa, valorizando o pequeno produtor e a excelência técnica.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-surface-elevated p-6">
                <h3 className="font-serif text-xl font-medium text-cream">Degustações</h3>
                <p className="mt-2 text-sm text-stone">Eventos mensais com produtores e sommeliers convidados.</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-surface-elevated p-6">
                <h3 className="font-serif text-xl font-medium text-cream">Presentes</h3>
                <p className="mt-2 text-sm text-stone">Cestas personalizadas com linhos e cerâmicas autorais.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
