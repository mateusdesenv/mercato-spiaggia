export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink py-16" aria-label="Rodapé">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#" className="flex items-center gap-3" aria-label="Mercato Spiaggia - Início">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-copper text-ink">
                <span className="font-serif text-lg font-semibold">M</span>
              </div>
              <span className="font-serif text-xl font-medium tracking-wide text-cream">Mercato Spiaggia</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-stone">
              Uma curadoria consciente de sabores e afetos. Desde 2016 celebrando a cultura do vinho
              no litoral gaúcho.
            </p>
            <p className="mt-4 text-xs text-stone-dark">Se for dirigir, não beba. Aprecie com moderação.</p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium text-cream">Navegação</h3>
            <ul className="mt-4 space-y-3 text-sm text-stone">
              <li><a href="#colecoes" className="transition-colors hover:text-gold">A Carta</a></li>
              <li><a href="#sobre" className="transition-colors hover:text-gold">Nossa História</a></li>
              <li><a href="#experiencias" className="transition-colors hover:text-gold">Experiências</a></li>
              <li><a href="#contato" className="transition-colors hover:text-gold">Visite</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium text-cream">Legal</h3>
            <ul className="mt-4 space-y-3 text-sm text-stone">
              <li><a href="#" className="transition-colors hover:text-gold">Privacidade</a></li>
              <li><a href="#" className="transition-colors hover:text-gold">Termos</a></li>
              <li><a href="#" className="transition-colors hover:text-gold">Cookies</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium text-cream">Contato</h3>
            <address className="mt-4 not-italic text-sm text-stone">
              <p>Rua Silva Jardim, 416 • Centro</p>
              <p>Torres, RS</p>
              <p className="mt-3">(51) 99999-9999</p>
              <p>contato@spiaggia.com.br</p>
            </address>
            <a
              href="https://wa.me/"
              className="mt-6 inline-flex rounded-full bg-wine px-5 py-2.5 text-sm font-semibold text-cream transition-all hover:bg-wine-glow"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-stone-dark md:flex-row">
          <p>© 2026 Mercato Spiaggia. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
            Criteriosamente curado em Torres
          </p>
        </div>
      </div>
    </footer>
  )
}
