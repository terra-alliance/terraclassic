import { useWindowSize } from "@uidotdev/usehooks"
import { Text } from "@react-three/drei"

import Lunc from "../components/Lunc"

export default function Home({ scroll }) {
  const size = useWindowSize()
  const maxWidth = size.width / 1.1

  return (
    <group position={[(scroll.use() * size.width) / -5, 0, 0]}>
      <Text position={[0, size.height / 3.5, 0]} color="white" maxWidth={maxWidth} fontSize={Math.min(Math.max(size.width / 20, 40), 70)} textAlign="center" font="./GothamLight.otf">
        Welcome to Terra Classic
      </Text>
      <Lunc position={[0, 0, 0]} scale={Math.min(size.width / 4, 130)} />
    </group>
  )
}
