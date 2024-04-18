import { useWindowSize } from "@uidotdev/usehooks"
import { Text } from "@react-three/drei"

import Terrarium from "../components/Terrarium"
import LuncAcademy from "../components/LuncAcademy"

export default function Community({ scroll }) {
  const size = useWindowSize()
  const maxWidth = size.width / 1.1

  const components = [Terrarium, LuncAcademy, Terrarium, LuncAcademy, Terrarium, LuncAcademy]

  return (
    <group position={[(scroll.use() * size.width) / -5 + size.width * 3, 0, 0]}>
      <Text position={[0, size.height / 3.5, 0]} color="white" maxWidth={maxWidth} fontSize={Math.min(Math.max(size.width / 20, 40), 70)} textAlign="center" font="./GothamLight.otf">
        And a Wonderful Community
      </Text>
      {components.map((Component, index) => {
        return <Component key={index} position={[(index % 3) * 400 - 400, Math.floor(index / 3) * -400, 0]} scale={Math.min(size.width / 4, 130)} />
      })}
    </group>
  )
}
