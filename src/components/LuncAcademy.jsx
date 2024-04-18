import { Text } from "@react-three/drei"

export default function LuncAcademy({ position, scale }) {
  return (
    <>
      <group position={position}>
        <mesh scale={scale}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={"darkorange"} transparent={true} opacity={0.4} />
        </mesh>
        <Text position={[0, -175, 0]} color="white" fontSize={40} textAlign="center" font="./GothamLight.otf">
          Lunc Academy
        </Text>
      </group>
    </>
  )
}
