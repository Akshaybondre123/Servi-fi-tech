"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text } from "@react-three/drei"
import type * as THREE from "three"

interface ProjectTitle3DProps {
  title: string
  color: string
}

function ProjectTitle3D({ title, color }: ProjectTitle3DProps) {
  const textRef = useRef<THREE.Group>(null)
  const colorMap: Record<string, string> = {
    blue: "#3b82f6",
    purple: "#9333ea",
    green: "#16a34a",
    yellow: "#eab308",
    red: "#ef4444",
  }

  useFrame((state) => {
    if (textRef.current) {
      // Gentle floating animation
      textRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
      textRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1
    }
  })

  return (
    <group ref={textRef}>
      <Text
        color={colorMap[color]}
        fontSize={0.5}
        maxWidth={10}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor={colorMap[color]}
      >
        {title}
        <meshStandardMaterial
          color={colorMap[color]}
          emissive={colorMap[color]}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Text>
    </group>
  )
}

interface ProjectsCanvasProps {
  activeProject: number
}

const projects = [
  {
    title: "Rotary International QR Solution",
    color: "blue",
  },
  {
    title: "AI Agent Live Video Support",
    color: "purple",
  },
  {
    title: "G2IT Venue Marketing Platform",
    color: "green",
  },
  {
    title: "Kailasa AI - Personalized Guidance",
    color: "yellow",
  },
  {
    title: "MY AI - Chatbot",
    color: "red",
  },
]

export default function ProjectsCanvas({ activeProject }: ProjectsCanvasProps) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <ProjectTitle3D title={projects[activeProject].title} color={projects[activeProject].color} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} enablePan={false} />
    </Canvas>
  )
}
