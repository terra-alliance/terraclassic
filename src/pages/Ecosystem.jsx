import { useObservable } from "@legendapp/state/react"
import { useWindowSize } from "@uidotdev/usehooks"
import { Text, RoundedBox } from "@react-three/drei"

import Station3D from "../components/Station3D"

export default function Ecosystem({ scroll }) {
  const size = useWindowSize()
  const maxWidth = size.width / 1.1

  const localscroll = useObservable(0)

  const components = [Station3D, Station3D, Station3D, Station3D, Station3D, Station3D]

  return (
    <group position={[(scroll.use() * size.width) / -5 + size.width * 2, 0, 0]}>
      <Text position={[0, size.height / 3.5, 600]} color="white" maxWidth={maxWidth} fontSize={Math.min(Math.max(size.width / 20, 40), 70)} textAlign="center" font="./GothamLight.otf">
        An Amazing Ecosystem
      </Text>
      <mesh position={[0, 415, 400]}>
        <boxGeometry args={[size.width, 500, 1]} />
        <meshBasicMaterial color={"black"} transparent={true} reflectivity={1} metalness={1} roughness={0} opacity={0.8} />
      </mesh>
      <RoundedBox
        onWheel={(ev) => {
          localscroll.set((prev) => Math.max(Math.min(prev + Math.sign(ev.deltaY) * 25, 1000), 0))
          ev.stopPropagation()
        }}
        position={[0, -size.width / 8, 400]}
        args={[size.width / 1.6, 800, 1]}
        radius={100}
      >
        <meshBasicMaterial color={"white"} transparent={true} reflectivity={1} metalness={1} roughness={0} opacity={0.08} />
      </RoundedBox>
      {components.map((Component, index) => {
        return <Component key={index} position={[(index % 3) * 400 - 400, Math.floor(index / 3) * -400 + localscroll.use(), 0]} scale={Math.min(size.width / 4, 130)} onClick={null} />
      })}
    </group>
  )
}
