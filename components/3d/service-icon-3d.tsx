"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import type { LucideIcon } from "lucide-react"
import * as THREE from "three"

interface ServiceIcon3DProps {
  icon: LucideIcon
  color: string
  rotation: [number, number, number]
  title: string
}

export function ServiceIcon3D({ icon: Icon, color, rotation, title }: ServiceIcon3DProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  // Safely extract colors from the gradient string with fallbacks
  const getColorFromString = (colorString: string): { primary: string; secondary: string } => {
    // Default colors in case parsing fails
    const defaultColors = {
      primary: "#3b82f6", // blue-600
      secondary: "#60a5fa", // blue-400
    }

    try {
      const parts = colorString.split(" ")

      // Find the "from-" part
      const fromPart = parts.find((part) => part.startsWith("from-"))
      // Find the "to-" part
      const toPart = parts.find((part) => part.startsWith("to-"))

      // Extract color names if found, otherwise use defaults
      const primary = fromPart ? fromPart.replace("from-", "") : defaultColors.primary
      const secondary = toPart ? toPart.replace("to-", "") : defaultColors.secondary

      return { primary, secondary }
    } catch (error) {
      console.error("Error parsing color string:", error)
      return defaultColors
    }
  }

  const { primary: colorFrom, secondary: colorTo } = getColorFromString(color)

  // Convert Tailwind color classes to actual hex colors
  const getColorHex = (colorName: string) => {
    const colorMap: Record<string, string> = {
      "blue-600": "#2563eb",
      "blue-400": "#60a5fa",
      "purple-600": "#9333ea",
      "purple-400": "#c084fc",
      "green-600": "#16a34a",
      "green-400": "#4ade80",
      "yellow-600": "#ca8a04",
      "yellow-400": "#facc15",
      "red-600": "#dc2626",
      "red-400": "#f87171",
      "indigo-600": "#4f46e5",
      "indigo-400": "#818cf8",
    }
    return colorMap[colorName] || "#3b82f6" // Default to blue if color not found
  }

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3

      if (hovered) {
        meshRef.current.scale.set(1.2, 1.2, 1.2)
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
      }
    }
  })

  return (
    <mesh
      ref={meshRef}
      rotation={rotation}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color={getColorHex(colorFrom)}
        emissive={getColorHex(colorTo)}
        emissiveIntensity={hovered ? 0.8 : 0.4}
        metalness={0.8}
        roughness={0.2}
      />
      <Html position={[0, 3, 0]} center distanceFactor={15} occlude>
        <div className="bg-black/70 backdrop-blur-sm px-3 py-1 rounded-md text-white text-sm whitespace-nowrap">
          {title}
        </div>
      </Html>
    </mesh>
  )
}
