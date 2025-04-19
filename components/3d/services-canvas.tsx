"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float } from "@react-three/drei"
import { ServiceIcon3D } from "@/components/3d/service-icon-3d"
import type { LucideIcon } from "lucide-react"

interface Service {
  title: string
  icon: LucideIcon
  color: string
  rotation: [number, number, number]
}

interface ServicesCanvasProps {
  services: Service[]
}

export default function ServicesCanvas({ services }: ServicesCanvasProps) {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      {services.map((service, index) => (
        <Float
          key={index}
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={0.5}
          position={[
            8 * Math.cos((index * 2 * Math.PI) / services.length),
            0,
            8 * Math.sin((index * 2 * Math.PI) / services.length),
          ]}
        >
          <ServiceIcon3D icon={service.icon} color={service.color} rotation={service.rotation} title={service.title} />
        </Float>
      ))}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enablePan={false} />
    </Canvas>
  )
}
