import { finishes, steps } from "../data"
import { href } from "../router"

export default function Process() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Process</p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl italic md:text-6xl">
        From file to fabric
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-mute">
        Branding is placement as much as design. We keep the path short so you
        can see the mark on the piece before anyone else does.
      </p>

      <div className="mt-16 space-y-0 border-t border-line">
        {steps.map((step) => (
          <article
            key={step.n}
            className="grid gap-4 border-b border-line py-10 md:grid-cols-[120px_1fr_1.2fr] md:items-start"
          >
            <p className="font-display text-4xl text-gold">{step.n}</p>
            <h2 className="font-display text-3xl">{step.title}</h2>
            <p className="text-mute leading-relaxed">{step.copy}</p>
          </article>
        ))}
      </div>

      <div className="mt-20">
        <h2 className="font-display text-4xl italic">Finishes</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {finishes.map((item) => (
            <article key={item.name} className="border border-line bg-raise p-6">
              <h3 className="font-display text-2xl text-gold-soft">{item.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>

      <a
        href={href("/quote")}
        className="mt-14 inline-block bg-gold px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-void hover:bg-gold-soft"
      >
        Send a brief
      </a>
    </section>
  )
}
