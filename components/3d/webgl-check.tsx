"use client"

import type React from "react"

import { useState, useEffect } from "react"

export function useWebGLAvailable() {
  const [isWebGLAvailable, setIsWebGLAvailable] = useState<boolean | null>(null)

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")

      // Check if WebGL is available
      setIsWebGLAvailable(!!gl)

      // Clean up
      if (gl) {
        const loseContext = gl.getExtension("WEBGL_lose_context")
        if (loseContext) loseContext.loseContext()
      }
    } catch (e) {
      console.error("Error checking WebGL support:", e)
      setIsWebGLAvailable(false)
    }
  }, [])

  return isWebGLAvailable
}

interface WebGLWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default function WebGLWrapper({ children, fallback }: WebGLWrapperProps) {
  const isWebGLAvailable = useWebGLAvailable()

  // Show loading state while checking WebGL availability
  if (isWebGLAvailable === null) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-blue-900/20 rounded-lg">
        <div className="text-blue-500 text-lg">Checking WebGL support...</div>
      </div>
    )
  }

  // Show fallback if WebGL is not available
  if (isWebGLAvailable === false) {
    return fallback ? (
      <>{fallback}</>
    ) : (
      <div className="w-full h-full flex flex-col items-center justify-center bg-blue-900/20 rounded-lg p-4 text-center">
        <div className="text-red-500 text-lg font-semibold mb-2">WebGL not available</div>
        <p className="text-gray-300 text-sm max-w-md">
          Your browser or device doesn't support WebGL, which is required to display 3D content. Try using a modern
          browser or enabling hardware acceleration.
        </p>
      </div>
    )
  }

  // Render children if WebGL is available
  return <>{children}</>
}
