import { useMemo, useState } from "react"
import { products } from "../data"
import { href } from "../router"

const filters = ["All", "Apparel", "Accessories"]

export default function Catalog() {
  const [filter, setFilter] = useState("All")
  const list = useMemo(
    () =>
      filter === "All" ? products : products.filter((item) => item.category === filter),
    [filter],
  )

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Catalog</p>
      <h1 className="mt-3 font-display text-5xl italic md:text-6xl">Pieces</h1>
      <p className="mt-4 max-w-xl text-mute">
        Every item is a canvas. Choose a base, then we print, stitch, or press
        your mark onto it.
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`border px-4 py-2 text-[11px] uppercase tracking-[0.2em] ${
              filter === item
                ? "border-gold bg-gold text-void"
                : "border-line text-mute hover:border-gold hover:text-gold"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((item) => (
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
            <div className="flex items-start justify-between gap-4 p-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold">{item.category}</p>
                <h2 className="mt-1 font-display text-2xl">{item.name}</h2>
                <p className="mt-2 text-sm text-mute">{item.blurb}</p>
              </div>
              <p className="shrink-0 text-sm text-ivory">${item.priceFrom}+</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
