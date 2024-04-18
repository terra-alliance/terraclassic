import { useWindowSize } from "@uidotdev/usehooks"
import { Text } from "@react-three/drei"
import { animated } from "@react-spring/three"

export default function Navbar({ scroll, scrollspring }) {
  const windowsize = useWindowSize()
  const width = Math.min(windowsize.width - 75, 700)

  return (
    <>
      <Bar windowsize={windowsize} width={width} />
      <Selected windowsize={windowsize} width={width} scrollspring={scrollspring} />
      <Buttons scroll={scroll} windowsize={windowsize} width={width} />
    </>
  )
}

function Bar({ windowsize, width }) {
  return (
    <mesh position={[0, windowsize.height / 2 - 50, 500]} rotation-z={90 * (Math.PI / 180)}>
      <capsuleGeometry args={[Math.min(windowsize.width / 20, 25), width, 5, 20]} />
      <meshStandardMaterial color={"black"} transparent="true" opacity={0.6} />
    </mesh>
  )
}

function Selected({ windowsize, width, scrollspring }) {
  return (
    <animated.mesh position={scrollspring.to((v) => [(width - width / 7) / -2 + v * ((width - width / 7) / 20), windowsize.height / 2 - 50, 550])} rotation-z={90 * (Math.PI / 180)}>
      <capsuleGeometry args={[Math.min(windowsize.width / 20, 25), width / 7, 5, 20]} />
      <meshStandardMaterial roughness={0.3} metalness={1} color={0xfcba03} transparent="true" opacity={1} />
    </animated.mesh>
  )
}

function Buttons({ scroll, windowsize, width }) {
  const fontSize = Math.min(windowsize.width / 40, 20)

  return (
    <>
      <Text position={[(width - width / 7) / -2, windowsize.height / 2 - 50, 600]} color={scroll.use() === 0 ? "black" : "white"} fontSize={fontSize} font={"./GothamBook.otf"}>
        Home
      </Text>
      <Text position={[(width - width / 7) / -4, windowsize.height / 2 - 50, 600]} color={scroll.use() === 5 ? "black" : "white"} fontSize={fontSize} font={"./GothamBook.otf"}>
        Learn
      </Text>
      <Text position={[0, windowsize.height / 2 - 50, 600]} color={scroll.use() === 10 ? "black" : "white"} fontSize={fontSize} font={"./GothamBook.otf"}>
        Ecosystem
      </Text>
      <Text position={[(width - width / 7) / 4, windowsize.height / 2 - 50, 600]} color={scroll.use() === 15 ? "black" : "white"} fontSize={fontSize} font={"./GothamBook.otf"}>
        Community
      </Text>
      <Text position={[(width - width / 7) / 2, windowsize.height / 2 - 50, 600]} color={scroll.use() === 20 ? "black" : "white"} fontSize={fontSize} font={"./GothamBook.otf"}>
        Build
      </Text>
    </>
  )
}
