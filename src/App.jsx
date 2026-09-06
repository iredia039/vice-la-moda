import { useEffect } from "react"
import Shell from "./components/Shell"
import Catalog from "./pages/Catalog"
import Home from "./pages/Home"
import Piece from "./pages/Piece"
import Process from "./pages/Process"
import Quote from "./pages/Quote"
import Work from "./pages/Work"
import { useRoute } from "./router"

export default function App() {
  const route = useRoute()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [route.path, route.id])

  let page = <Home />
  if (route.name === "catalog") page = <Catalog />
  if (route.name === "process") page = <Process />
  if (route.name === "work") page = <Work />
  if (route.name === "quote") page = <Quote />
  if (route.name === "piece") page = <Piece id={route.id} />

  return <Shell route={route}>{page}</Shell>
}
