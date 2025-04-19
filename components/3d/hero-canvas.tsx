"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import * as THREE from "three"

function AiBrain() {
  const group = useRef<THREE.Group>(null)
  const neuronRefs = useRef<THREE.Mesh[]>([])
  const pathRefs = useRef<THREE.Mesh[]>([])

  // Create a more structured brain model with better animations
  useFrame((state) => {
    if (group.current) {
      // Smoother rotation
      group.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1 + state.clock.getElapsedTime() * 0.05

      // Gentle floating motion
      group.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2

      // Animate neurons
      neuronRefs.current.forEach((neuron, i) => {
        neuron.scale.setScalar(0.8 + 0.4 * Math.sin(state.clock.getElapsedTime() * 0.5 + i * 0.2))
        neuron.material.opacity = 0.7 + 0.3 * Math.sin(state.clock.getElapsedTime() * 0.3 + i * 0.2)
      })

      // Animate neural pathways
      pathRefs.current.forEach((path, i) => {
        path.material.opacity = 0.4 + 0.6 * Math.sin(state.clock.getElapsedTime() * 0.2 + i * 0.1)
      })
    }
  })

  // Create neural network structure with improved organization
  const neurons = Array.from({ length: 30 }, (_, i) => {
    // Create spherical distribution for neurons
    const phi = Math.acos(-1 + (2 * i) / 30)
    const theta = Math.sqrt(30 * Math.PI) * phi
    const radius = 2.2

    return {
      position: [
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi),
      ],
      scale: 0.08 + Math.random() * 0.05,
    }
  })

  // Create connections between neurons
  const createConnections = () => {
    const connections = []
    const connectionCount = 25

    for (let i = 0; i < connectionCount; i++) {
      const startIdx = Math.floor(Math.random() * neurons.length)
      let endIdx
      do {
        endIdx = Math.floor(Math.random() * neurons.length)
      } while (endIdx === startIdx)

      const startPos = new THREE.Vector3(...neurons[startIdx].position)
      const endPos = new THREE.Vector3(...neurons[endIdx].position)

      // Create curved path
      const midPoint = new THREE.Vector3().addVectors(startPos, endPos).multiplyScalar(0.5)
      midPoint.add(
        new THREE.Vector3((Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 1.5),
      )

      const curve = new THREE.QuadraticBezierCurve3(startPos, midPoint, endPos)

      connections.push({
        curve,
        width: 0.02 + Math.random() * 0.02,
      })
    }

    return connections
  }

  const connections = createConnections()

  return (
    <group ref={group}>
      {/* Central core - brain structure */}
      <mesh castShadow>
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#1d4ed8"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.2}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.6} transparent opacity={0.3} />
      </mesh>

      {/* Circuit pattern */}
      <mesh>
        <sphereGeometry args={[1.85, 32, 32]} />
        <meshStandardMaterial color="#1d4ed8" wireframe transparent opacity={0.4} />
      </mesh>

      {/* Neurons */}
      {neurons.map((neuron, i) => (
        <mesh
          key={`neuron-${i}`}
          position={neuron.position}
          ref={(el) => {
            if (el) neuronRefs.current[i] = el
          }}
        >
          <sphereGeometry args={[neuron.scale, 16, 16]} />
          <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={1} transparent opacity={0.8} />
        </mesh>
      ))}

      {/* Neural pathways */}
      {connections.map((connection, i) => (
        <mesh
          key={`path-${i}`}
          ref={(el) => {
            if (el) pathRefs.current[i] = el
          }}
        >
          <tubeGeometry args={[connection.curve, 20, connection.width, 8, false]} />
          <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.7} transparent opacity={0.6} />
        </mesh>
      ))}

      {/* Light points */}
      {[...Array(8)].map((_, i) => {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.random() * Math.PI
        const r = 1.8

        return (
          <pointLight
            key={`light-${i}`}
            position={[r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi)]}
            intensity={0.3}
            distance={3}
            color="#60a5fa"
          />
        )
      })}
    </group>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.6} />
      <spotLight position={[0, 5, 5]} angle={0.3} penumbra={1} intensity={0.8} castShadow />

      <AiBrain />

      <Environment preset="city" />
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.3}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        enableDamping={true}
        dampingFactor={0.05}
      />

      {/* Add subtle fog for depth */}
      <fog attach="fog" args={["#000", 7, 20]} />
    </Canvas>
  )
}
