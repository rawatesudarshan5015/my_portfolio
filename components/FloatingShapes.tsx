'use client'

import { useEffect, useState } from 'react'

export default function FloatingShapes() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Only runs on client
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Fallback to 0 offsets until window size is defined
  const offset1 = windowSize.width
    ? { x: (mousePos.x - windowSize.width / 2) * 0.02, y: (mousePos.y - windowSize.height / 2) * 0.02 }
    : { x: 0, y: 0 }

  const offset2 = windowSize.width
    ? { x: (mousePos.x - windowSize.width / 2) * -0.015, y: (mousePos.y - windowSize.height / 2) * -0.015 }
    : { x: 0, y: 0 }

  const offset3 = windowSize.width
    ? { x: (mousePos.x - windowSize.width / 2) * 0.01, y: (mousePos.y - windowSize.height / 2) * 0.01 }
    : { x: 0, y: 0 }

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute top-10 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-float-slow"
        style={{ transform: `translate(${offset1.x}px, ${offset1.y}px)` }}
      ></div>

      <div
        className="absolute top-1/2 right-10 w-32 h-32 bg-blue-300 rounded-full opacity-20 animate-float-slower"
        style={{ transform: `translate(${offset2.x}px, ${offset2.y}px)` }}
      ></div>

      <div
        className="absolute bottom-10 left-1/3 w-20 h-20 bg-blue-400 rounded-full opacity-25 animate-float-fast"
        style={{ transform: `translate(${offset3.x}px, ${offset3.y}px)` }}
      ></div>
    </div>
  )
}
