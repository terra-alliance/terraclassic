import { useObservable } from "@legendapp/state/react"
import { useSpringValue } from "@react-spring/three"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Learn from "./pages/Learn"
import Community from "./pages/Community"
import Ecosystem from "./pages/Ecosystem"

var timeout
function stepRound(number, increment, offset) {
  return Math.round((number - offset) / increment) * increment + offset
}

export default function Body() {
  const scroll = useObservable(0)
  const scrollspring = useSpringValue(0, { config: { mass: 1, friction: 30, tension: 2000, clamp: false } })
  scrollspring.start(scroll.use())

  return (
    <>
      <mesh
        onWheel={(ev) => {
          scroll.set((prev) => Math.max(Math.min(prev + Math.sign(ev.deltaY) / 1.5, 20), 0))
          clearTimeout(timeout)
          timeout = setTimeout(() => {
            scroll.set((prev) => stepRound(prev, 5, 0))
          }, "400")
        }}
        position={[0, 0, 0]}
      >
        <boxGeometry args={[2000, 1000, 1]} />
        <meshStandardMaterial color={"black"} transparent="true" opacity={0} depthWrite={false} />
      </mesh>
      <ambientLight />
      <pointLight decay={0} intensity={18} position={[0, 0, 10000]} />
      <Navbar scroll={scroll} scrollspring={scrollspring} />
      <Home scroll={scroll} scrollspring={scrollspring} />
      <Learn scroll={scroll} scrollspring={scrollspring} />
      <Community scroll={scroll} scrollspring={scrollspring} />
      <Ecosystem scroll={scroll} scrollspring={scrollspring} />
    </>
  )
}
