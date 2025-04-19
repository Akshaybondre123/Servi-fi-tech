"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("3D rendering error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ? (
        this.props.fallback
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-blue-900/20 rounded-lg p-4 text-center">
          <div className="text-red-500 text-lg font-semibold mb-2">3D Rendering Error</div>
          <p className="text-gray-300 text-sm max-w-md">
            There was a problem rendering the 3D content. This might be due to limited system resources or browser
            compatibility issues.
          </p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
