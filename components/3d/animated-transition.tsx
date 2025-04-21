"use client"

import type React from "react"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

// This component adds smooth transitions to any 3D object
// It should be used as a wrapper around other 3D components
export function AnimatedTransition({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null)

  // Apply transitions to all children with userData.transition
  useFrame(() => {
    if (!groupRef.current) return

    groupRef.current.traverse((object) => {
      if (object.userData.transition && object.userData.targetPosition) {
        // Position transition
        if (object.position && object.userData.targetPosition) {
          object.position.lerp(
            new THREE.Vector3(
              object.userData.targetPosition[0],
              object.userData.targetPosition[1],
              object.userData.targetPosition[2],
            ),
            0.05,
          )
        }

        // Scale transition
        if (object.scale && object.userData.targetScale) {
          object.scale.lerp(
            new THREE.Vector3(
              object.userData.targetScale[0],
              object.userData.targetScale[1],
              object.userData.targetScale[2],
            ),
            0.05,
          )
        }

        // Rotation transition
        if (object.rotation && object.userData.targetRotation) {
          object.rotation.x += (object.userData.targetRotation[0] - object.rotation.x) * 0.05
          object.rotation.y += (object.userData.targetRotation[1] - object.rotation.y) * 0.05
          object.rotation.z += (object.userData.targetRotation[2] - object.rotation.z) * 0.05
        }
      }
    })
  })

  return <group ref={groupRef}>{children}</group>
}
