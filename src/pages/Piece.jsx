import { useState } from "react"
import { products } from "../data"
import { href } from "../router"

export default function Piece({ id }) {
  const piece = products.find((item) => item.id === id)
  const [color, setColor] = useState(piece?.colors[0] ?? "")
  const [placement, setPlacement] = useState(piece?.placements[0] ?? "")

  if (!piece) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="font-display text-4xl">Piece not found</h1>
        <a href={href("/catalog")} className="mt-6 inline-block text-gold">
          Back to catalog
        </a>
      </section>
    )
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
      <div className="overflow-hidden border border-line">
        <img src={piece.image} alt={piece.name} className="h-full w-full object-cover" />
      </div>
      <div>
        <a href={href("/catalog")} className="text-[11px] uppercase tracking-[0.2em] text-mute hover:text-gold">
          ← All pieces
        </a>
        <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-gold">{piece.category}</p>
        <h1 className="mt-2 font-display text-5xl md:text-6xl">{piece.name}</h1>
        <p className="mt-4 text-lg text-mute">{piece.blurb}</p>
        <p className="mt-6 font-display text-3xl text-ivory">
          From ${piece.priceFrom}
          <span className="ml-3 text-base text-mute">· {piece.print}</span>
        </p>

        <div className="mt-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-mute">Base color</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {piece.colors.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setColor(item)}
                className={`border px-3 py-2 text-sm ${
                  color === item
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-line text-mute hover:border-gold"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-mute">Print placement</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {piece.placements.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setPlacement(item)}
                className={`border px-3 py-2 text-sm ${
                  placement === item
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-line text-mute hover:border-gold"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-8 border-t border-line pt-6 text-sm text-mute">
          Selected: <span className="text-ivory">{color}</span> ·{" "}
          <span className="text-ivory">{placement}</span>
        </p>

        <a
          href={href(`/quote?piece=${piece.id}`)}
          className="mt-8 inline-block bg-gold px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-void hover:bg-gold-soft"
        >
          Brand this piece
        </a>
      </div>
    </section>
  )
}
