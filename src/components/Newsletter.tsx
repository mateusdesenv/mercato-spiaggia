import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <section className="bg-cream py-24 md:py-32" aria-labelledby="newsletter-title">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-cream-warm p-8 shadow-sm md:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-copper">Concierge Spiaggia</p>
            <h2 id="newsletter-title" className="font-serif text-3xl font-medium text-ink md:text-4xl">
              Receba Nossa Seleção
            </h2>
            <p className="mt-4 text-stone-dark">
              Orçamentos para adegas particulares, encomendas gourmet e lançamentos exclusivos
              direto no seu e-mail.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <label htmlFor="newsletter-email" className="sr-only">
                Endereço de e-mail
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="w-full rounded-full border border-ink/10 bg-cream px-6 py-4 text-ink placeholder-stone transition-colors focus:border-copper sm:w-80"
              />
              <button
                type="submit"
                className="rounded-full bg-wine px-8 py-4 text-sm font-semibold text-cream transition-all hover:bg-wine-glow"
              >
                Iniciar Atendimento
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
