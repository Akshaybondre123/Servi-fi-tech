"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Text } from "@react-three/drei"
import type * as THREE from "three"

export function ContactForm3D() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        {/* Envelope base */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[3, 0.1, 2]} />
          <meshStandardMaterial color="#2563eb" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Envelope sides */}
        <mesh position={[0, 0.25, -1]} castShadow receiveShadow>
          <boxGeometry args={[3, 0.5, 0.1]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
        </mesh>

        <mesh position={[0, 0.25, 1]} castShadow receiveShadow>
          <boxGeometry args={[3, 0.5, 0.1]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
        </mesh>

        <mesh position={[-1.5, 0.25, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.1, 0.5, 2]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
        </mesh>

        <mesh position={[1.5, 0.25, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.1, 0.5, 2]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Envelope flap */}
        <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 4, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[3, 0.1, 1.5]} />
          <meshStandardMaterial color="#60a5fa" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Message */}
        <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.5, 0.05, 1.5]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <Text
          position={[0, 0.3, 0]}
          rotation={[0, 0, 0]}
          fontSize={0.2}
          color="#1e40af"
          anchorX="center"
          anchorY="middle"
        >
          Contact Us
        </Text>
      </Float>
    </group>
  )
}
