"use client"

import { useRef, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import type * as THREE from "three"

export function AiHologram() {
  const groupRef = useRef<THREE.Group>(null)
  const [centered, setCentered] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCentered(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      // Rotate the hologram
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2

      // Floating animation
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
    }
  })

  // Calculate position based on centered state
  const position = centered ? [0, 0, 0] : [0, 0, 0]
  const scale = centered ? 1.5 : 1

  return (
    <group
      ref={groupRef}
      position={position as any}
      scale={[scale, scale, scale]}
      userData={{
        transition: { duration: 1.5, ease: "easeInOut" },
      }}
    >
      {/* Holographic platform */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[2, 2.2, 0.2, 32]} />
        <meshStandardMaterial
          color="#1e40af"
          emissive="#3b82f6"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Holographic rings */}
      {[1.8, 1.4, 1].map((radius, i) => (
        <mesh key={i} position={[0, -0.9 + i * 0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.05, 16, 100]} />
          <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.8} transparent opacity={0.7} />
        </mesh>
      ))}

      {/* Holographic text */}
      <group position={[0, 0.5, 0]}>
        <Text
          position={[0, 0.5, 0]}
          fontSize={0.4}
          color="#60a5fa"
          anchorX="center"
          anchorY="middle"
          // font="/fonts/Inter-Bold.ttf"
        >
          SERVI-FI
        </Text>
        <Text
          position={[0, 0, 0]}
          fontSize={0.4}
          color="#60a5fa"
          anchorX="center"
          anchorY="middle"
          // font="/fonts/Inter-Bold.ttf"
        >
          TECH
        </Text>
        <Text
          position={[0, -0.5, 0]}
          fontSize={0.3}
          color="#93c5fd"
          anchorX="center"
          anchorY="middle"
          // font="/fonts/Inter-Bold.ttf"
        >
          AI SOLUTIONS
        </Text>
      </group>

      {/* Holographic particles */}
      {Array.from({ length: 50 }).map((_, i) => {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(Math.random() * 2 - 1)
        const r = 1.5 + Math.random() * 1

        return (
          <mesh
            key={i}
            position={[r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi)]}
          >
            <sphereGeometry args={[0.03 + Math.random() * 0.03, 8, 8]} />
            <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={1} transparent opacity={0.7} />
          </mesh>
        )
      })}
    </group>
  )
}
