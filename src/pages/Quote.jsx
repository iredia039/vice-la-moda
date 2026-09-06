import { useMemo, useState } from "react"
import { products } from "../data"

const methods = ["Screen print", "Embroidery", "DTG", "Heat / vinyl", "Not sure"]

function prefillPiece() {
  const hash = window.location.hash
  const query = hash.includes("?") ? hash.slice(hash.indexOf("?") + 1) : ""
  const params = new URLSearchParams(query)
  return params.get("piece") ?? ""
}

export default function Quote() {
  const initialPiece = useMemo(() => prefillPiece(), [])
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    piece: initialPiece,
    quantity: "25–50",
    method: "Not sure",
    notes: "",
  })

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function submit(event) {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <section className="mx-auto max-w-2xl px-5 py-24 text-center md:py-32">
        <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Received</p>
        <h1 className="mt-4 font-display text-5xl italic">The brief is in.</h1>
        <p className="mt-5 text-mute">
          Thank you, {form.name || "friend"}. This is a frontend studio — in a live
          house we would now send a proof path to {form.email || "your inbox"}.
          For now, your selections are held on this page.
        </p>
        <p className="mt-6 text-sm text-ivory">
          {form.piece || "Open piece"} · {form.quantity} · {form.method}
        </p>
      </section>
    )
  }

  const field =
    "w-full border border-line bg-ink px-4 py-3 text-ivory outline-none transition focus:border-gold"

  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <p className="text-[11px] uppercase tracking-[0.28em] text-gold">Brief</p>
      <h1 className="mt-3 font-display text-5xl italic md:text-6xl">Start a print</h1>
      <p className="mt-4 text-mute">
        Tell us the piece, how many, and what the mark should do. We reply with
        a proof and a quote.
      </p>

      <form onSubmit={submit} className="mt-12 grid gap-6">
        <label className="grid gap-2">
          <span className="text-[11px] uppercase tracking-[0.18em] text-mute">Name</span>
          <input
            required
            className={field}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </label>
        <label className="grid gap-2">
          <span className="text-[11px] uppercase tracking-[0.18em] text-mute">Email</span>
          <input
            required
            type="email"
            className={field}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </label>
        <div className="grid gap-6 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-[11px] uppercase tracking-[0.18em] text-mute">Piece</span>
            <select
              className={field}
              value={form.piece}
              onChange={(e) => update("piece", e.target.value)}
            >
              <option value="">Help me choose</option>
              {products.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2">
            <span className="text-[11px] uppercase tracking-[0.18em] text-mute">Quantity</span>
            <select
              className={field}
              value={form.quantity}
              onChange={(e) => update("quantity", e.target.value)}
            >
              {["1–12", "13–24", "25–50", "51–100", "100+"].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
        <label className="grid gap-2">
          <span className="text-[11px] uppercase tracking-[0.18em] text-mute">Finish</span>
          <select
            className={field}
            value={form.method}
            onChange={(e) => update("method", e.target.value)}
          >
            {methods.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2">
          <span className="text-[11px] uppercase tracking-[0.18em] text-mute">The mark</span>
          <textarea
            required
            rows={5}
            placeholder="Logo, colors, placement, deadline…"
            className={`${field} resize-y`}
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="justify-self-start bg-gold px-8 py-3 text-[11px] uppercase tracking-[0.22em] text-void hover:bg-gold-soft"
        >
          Send brief
        </button>
      </form>
    </section>
  )
}
