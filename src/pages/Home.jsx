import { finishes, products, steps, works } from "../data"
import { href } from "../router"

export default function Home() {
  const featured = products.slice(0, 4)

  return (
    <div>
      <section className="relative min-h-[88svh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/70 to-void" />
        <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
          <p className="text-[11px] uppercase tracking-[0.32em] text-gold">
            Print house · Clothing · Objects
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-6xl leading-[0.9] text-ivory sm:text-7xl md:text-8xl">
            Your brand,
            <span className="italic text-gold-soft"> on the body.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mute md:text-lg">
            Vice La Moda prints identity onto tees, hoodies, caps, totes, and
            the quiet extras a house actually wears. Proof first. Then ink.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={href("/catalog")}
              className="bg-gold px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-void hover:bg-gold-soft"
            >
              See the pieces
            </a>
            <a
              href={href("/quote")}
              className="border border-ivory/25 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-ivory hover:border-gold hover:text-gold"
            >
              Request a proof
            </a>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-line bg-ink py-3">
        <div className="marquee-track flex w-max gap-10 text-[11px] uppercase tracking-[0.28em] text-mute">
          {[...finishes, ...finishes, ...finishes, ...finishes].map((item, i) => (
            <span key={`${item.name}-${i}`} className="flex items-center gap-10">
              {item.name}
              <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">House line</p>
            <h2 className="mt-3 font-display text-4xl italic md:text-5xl">Pieces we print on</h2>
          </div>
          <a
            href={href("/catalog")}
            className="hidden text-[11px] uppercase tracking-[0.2em] text-mute hover:text-gold md:inline"
          >
            Full catalog →
          </a>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item) => (
            <a
              key={item.id}
              href={href(`/piece/${item.id}`)}
              className="group border border-line bg-raise"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold">{item.category}</p>
                <p className="mt-1 font-display text-2xl">{item.name}</p>
                <p className="mt-1 text-sm text-mute">From ${item.priceFrom} · {item.print}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-ink">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">The house</p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              Not a shop of clothes.
              <span className="italic text-gold-soft"> A shop of marks.</span>
            </h2>
          </div>
          <p className="self-end text-base leading-relaxed text-mute md:text-lg">
            We take a logo, a name, a palette — and place it where people actually
            meet it: on a chest, a cap, a bag leaving the room. Screen, thread,
            or press. Always a proof. Always the piece in your hand before the
            run goes wide.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Process</p>
        <h2 className="mt-3 font-display text-4xl italic md:text-5xl">Four steps to cloth</h2>
        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.n} className="bg-void p-6 md:p-8">
              <p className="font-display text-3xl text-gold">{step.n}</p>
              <h3 className="mt-4 font-display text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{step.copy}</p>
            </article>
          ))}
        </div>
        <a
          href={href("/process")}
          className="mt-8 inline-block text-[11px] uppercase tracking-[0.2em] text-mute hover:text-gold"
        >
          Read the full process →
        </a>
      </section>

      <section className="border-t border-line bg-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-4xl italic md:text-5xl">Recent work</h2>
            <a href={href("/work")} className="text-[11px] uppercase tracking-[0.2em] text-mute hover:text-gold">
              All work →
            </a>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {works.slice(0, 2).map((work) => (
              <article key={work.title} className="group overflow-hidden border border-line">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-4 p-5">
                  <div>
                    <p className="font-display text-2xl">{work.title}</p>
                    <p className="mt-1 text-sm text-mute">{work.note}</p>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold">{work.tag}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1800&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-void/70" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
          <h2 className="font-display text-4xl md:text-6xl">
            Ready to put a name
            <span className="italic text-gold-soft"> on something real?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-mute">
            Send a brief. Tell us the piece, the quantity, and the mark. We reply
            with a proof path and a quote — no account required.
          </p>
          <a
            href={href("/quote")}
            className="mt-10 inline-block bg-gold px-8 py-3 text-[11px] uppercase tracking-[0.22em] text-void hover:bg-gold-soft"
          >
            Start a brief
          </a>
        </div>
      </section>
    </div>
  )
}
