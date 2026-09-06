import { useState } from "react"
import { href } from "../router"

const links = [
  { to: "/catalog", label: "Pieces" },
  { to: "/process", label: "Process" },
  { to: "/work", label: "Work" },
  { to: "/quote", label: "Brief" },
]

export default function Shell({ route, children }) {
  const [open, setOpen] = useState(false)
  const active = route.name === "piece" ? "catalog" : route.name

  return (
    <div className="min-h-svh bg-void text-ivory">
      <header className="sticky top-0 z-40 border-b border-line/80 bg-void/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8">
          <a href={href("/")} className="group flex items-baseline gap-3">
            <span className="font-display text-2xl tracking-wide text-ivory">
              Vice La Moda
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.28em] text-mute sm:inline">
              Branding · Print
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.to}
                href={href(link.to)}
                className={`text-[11px] uppercase tracking-[0.22em] transition ${
                  active === link.to.slice(1)
                    ? "text-gold"
                    : "text-mute hover:text-ivory"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={href("/quote")}
              className="border border-gold/70 bg-gold px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-void transition hover:bg-gold-soft"
            >
              Start a brief
            </a>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-line text-ivory md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-lg leading-none">{open ? "×" : "☰"}</span>
          </button>
        </div>

        {open ? (
          <nav className="border-t border-line px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.to}
                  href={href(link.to)}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.2em] text-ivory"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
          <div>
            <p className="font-display text-3xl italic text-ivory">Vice La Moda</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mute">
              A print house for marks that belong on cloth. Custom branding on
              apparel and accessories, from one-off proofs to full drops.
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-gold">Studio</p>
            <p className="mt-3 text-sm text-mute">Lagos · by appointment</p>
            <p className="mt-1 text-sm text-mute">hello@vicelamoda.studio</p>
            <p className="mt-1 text-sm text-mute">+234 800 000 0000</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-gold">Move</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a href={href("/catalog")} className="text-mute hover:text-ivory">
                Pieces
              </a>
              <a href={href("/process")} className="text-mute hover:text-ivory">
                How we print
              </a>
              <a href={href("/quote")} className="text-mute hover:text-ivory">
                Send a brief
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-line px-5 py-5 text-center text-[10px] uppercase tracking-[0.22em] text-mute md:px-8">
          © {new Date().getFullYear()} Vice La Moda · All rights reserved
        </div>
      </footer>
    </div>
  )
}
