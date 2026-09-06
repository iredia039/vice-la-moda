import { useEffect, useState } from "react"

function readHash() {
  const raw = window.location.hash.replace(/^#/, "") || "/"
  const withoutQuery = raw.split("?")[0]
  const path = withoutQuery.startsWith("/") ? withoutQuery : `/${withoutQuery}`
  const parts = path.split("/").filter(Boolean)
  if (parts[0] === "piece" && parts[1]) {
    return { name: "piece", id: parts[1], path }
  }
  const name = parts[0] || "home"
  return { name, id: null, path: path === "//" ? "/" : path }
}

export function useRoute() {
  const [route, setRoute] = useState(readHash)

  useEffect(() => {
    const onChange = () => setRoute(readHash())
    window.addEventListener("hashchange", onChange)
    return () => window.removeEventListener("hashchange", onChange)
  }, [])

  return route
}

export function href(to) {
  return `#${to.startsWith("/") ? to : `/${to}`}`
}
