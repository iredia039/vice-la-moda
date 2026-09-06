import { works } from "../data"

export default function Work() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Archive</p>
      <h1 className="mt-3 font-display text-5xl italic md:text-6xl">Work</h1>
      <p className="mt-4 max-w-xl text-mute">
        Selected branding runs — hospitality kits, street drops, studio uniforms,
        and member merch.
      </p>
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {works.map((work) => (
          <article key={work.title} className="border border-line bg-raise">
            <div className="aspect-[16/11] overflow-hidden">
              <img src={work.image} alt={work.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <p className="text-[10px] uppercase tracking-[0.22em] text-gold">{work.tag}</p>
              <h2 className="mt-2 font-display text-3xl">{work.title}</h2>
              <p className="mt-2 text-sm text-mute">{work.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
