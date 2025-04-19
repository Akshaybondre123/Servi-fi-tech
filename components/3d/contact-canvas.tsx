"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text } from "@react-three/drei"
import type * as THREE from "three"

function PulsingParticles() {
  const particlesRef = useRef<THREE.Points>(null)

  // Create particles
  const particles = useMemo(() => {
    const particleCount = 500
    const positions = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      // Position particles in a spherical shape
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const r = 2 + Math.random() * 0.3

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      // Random size for each particle
      sizes[i] = Math.random() * 0.1 + 0.03

      // Blue color gradient
      const blueShade = Math.random() * 0.4 + 0.6
      colors[i * 3] = 0.1 * blueShade
      colors[i * 3 + 1] = 0.4 * blueShade
      colors[i * 3 + 2] = 1.0 * blueShade
    }

    return { positions, sizes, colors }
  }, [])

  // Animate particles
  useFrame((state) => {
    if (!particlesRef.current) return

    const geometry = particlesRef.current.geometry
    const time = state.clock.getElapsedTime()

    // Update positions with gentle wave motion
    const positions = geometry.attributes.position.array as Float32Array

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i]
      const y = positions[i + 1]
      const z = positions[i + 2]

      // Distance from center
      const dist = Math.sqrt(x * x + y * y + z * z)
      const originalDist = dist

      // Create flowing wave effect based on position and time
      const sinOffset = Math.sin(time * 0.3 + dist * 0.5) * 0.1

      // Normalize the position, add the offset, then rescale
      const scale = (originalDist + sinOffset) / originalDist

      positions[i] = x * scale
      positions[i + 1] = y * scale
      positions[i + 2] = z * scale
    }

    geometry.attributes.position.needsUpdate = true

    // Rotate the entire particle system slowly
    particlesRef.current.rotation.y = time * 0.1
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute attach="attributes-size" count={particles.sizes.length} array={particles.sizes} itemSize={1} />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.2} sizeAttenuation vertexColors alphaTest={0.001} transparent depthWrite={false} />
    </points>
  )
}

function ContactShape() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating and rotation
      groupRef.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2 + state.clock.getElapsedTime() * 0.1
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {/* Center sphere */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#2563eb"
          metalness={0.9}
          roughness={0.1}
          emissive="#1d4ed8"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Orbiting ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.08, 16, 100]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Second ring at different angle */}
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[1.6, 0.06, 16, 100]} />
        <meshStandardMaterial
          color="#60a5fa"
          emissive="#60a5fa"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Message icon in center */}
      <group position={[0, 0, 0.8]}>
        {/* Envelope body */}
        <mesh castShadow>
          <boxGeometry args={[0.7, 0.5, 0.05]} />
          <meshStandardMaterial color="white" />
        </mesh>

        {/* Envelope flap */}
        <mesh position={[0, 0.2, 0]} castShadow>
          <coneGeometry args={[0.35, 0.3, 4, 1]} rotation={[Math.PI, 0, Math.PI / 4]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>

      {/* Floating text */}
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        // font="public/fonts/Inter-Bold.ttf"
      >
        CONTACT US
      </Text>
    </group>
  )
}

export default function ContactCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.4} />
      <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={0.8} castShadow />
      <spotLight position={[-5, 5, 5]} angle={0.3} penumbra={1} intensity={0.4} castShadow />

      <PulsingParticles />
      <ContactShape />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        enablePan={false}
        enableDamping
        dampingFactor={0.05}
      />
    </Canvas>
  )
}
