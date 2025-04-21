"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import * as THREE from "three"

function AiBrainIntro() {
  const group = useRef<THREE.Group>(null)
  const neuronRefs = useRef<THREE.Mesh[]>([])
  const pathRefs = useRef<THREE.Mesh[]>([])

  // Create a more structured brain model with better animations
  useFrame((state) => {
    if (group.current) {
      // Smoother rotation
      group.current.rotation.y = state.clock.getElapsedTime() * 0.1
      group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1

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
  const neurons = Array.from({ length: 50 }, (_, i) => {
    // Create spherical distribution for neurons
    const phi = Math.acos(-1 + (2 * i) / 50)
    const theta = Math.sqrt(50 * Math.PI) * phi
    const radius = 3.5

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
    const connectionCount = 40

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
    <group ref={group} scale={1.5}>
      {/* Central core - brain structure */}
      <mesh castShadow>
        <sphereGeometry args={[2.5, 64, 64]} />
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
        <sphereGeometry args={[2.3, 32, 32]} />
        <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={0.6} transparent opacity={0.3} />
      </mesh>

      {/* Circuit pattern */}
      <mesh>
        <sphereGeometry args={[2.6, 32, 32]} />
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
      {[...Array(12)].map((_, i) => {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.random() * Math.PI
        const r = 2.5

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

// Create particles floating around the brain
function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  // Create particles
  const particleCount = 1000
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)
  const sizes = new Float32Array(particleCount)

  for (let i = 0; i < particleCount; i++) {
    // Position particles in a spherical shape
    const radius = 5 + Math.random() * 10
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(Math.random() * 2 - 1)

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = radius * Math.cos(phi)

    // Blue color gradient
    const blueShade = Math.random() * 0.4 + 0.6
    colors[i * 3] = 0.1 * blueShade
    colors[i * 3 + 1] = 0.4 * blueShade
    colors[i * 3 + 2] = 1.0 * blueShade

    // Random size for each particle
    sizes[i] = Math.random() * 0.1 + 0.03
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={particleCount} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial size={0.1} sizeAttenuation vertexColors alphaTest={0.001} transparent depthWrite={false} />
    </points>
  )
}

// Update the camera settings to be more responsive on mobile
export default function IntroCanvas() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 15], // Increased z position to show more of the scene on small screens
        fov: 60, // Wider field of view for mobile
        near: 0.1,
        far: 50,
      }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.6} />
      <spotLight position={[0, 5, 5]} angle={0.3} penumbra={1} intensity={0.8} castShadow />

      <AiBrainIntro />
      <FloatingParticles />

      <Environment preset="city" />
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.3}
        enablePan={false}
        enableDamping={true}
        dampingFactor={0.05}
      />

      {/* Add subtle fog for depth */}
      <fog attach="fog" args={["#000", 10, 30]} />
    </Canvas>
  )
}
