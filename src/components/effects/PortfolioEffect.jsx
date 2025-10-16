"use client"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { useSpring, a } from "@react-spring/three"
import { useState, useRef } from "react"
import { TextureLoader, Vector3 } from "three"
import { useLoader } from "@react-three/fiber"

function FullscreenPlane({ texture, targetPos, targetScale, isActive }) {
  const meshRef = useRef()
  
  const { position, scale } = useSpring({
    position: isActive ? targetPos : [0, 0, 0],
    scale: isActive ? targetScale : [1, 1, 1],
    config: { mass: 2, tension: 180, friction: 30 },
  })

  return (
    <a.mesh ref={meshRef} position={position} scale={scale}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} />
    </a.mesh>
  )
}

export default function PortfolioEffect() {
  const images = [
    "https://cdn.pixabay.com/photo/2025/08/09/09/05/nature-9764183_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/08/09/09/05/nature-9764183_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/08/09/09/05/nature-9764183_1280.jpg",
  ]

  const [activeIndex, setActiveIndex] = useState(null)
  const textures = useLoader(TextureLoader, images)

  const { viewport } = useThree()
  const gridCols = 3
  const gridRows = Math.ceil(images.length / gridCols)
  const spacing = 2

  // calculate target positions for grid
  const positions = images.map((_, i) => {
    const row = Math.floor(i / gridCols)
    const col = i % gridCols
    return [
      (col - (gridCols - 1) / 2) * spacing,
      (-(row - (gridRows - 1) / 2)) * spacing,
      0,
    ]
  })

  return (
    <section className="h-screen w-full bg-black relative">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        {images.map((_, i) => (
          <mesh
            key={i}
            position={positions[i]}
            onClick={() => setActiveIndex(i)}
          >
            <planeGeometry args={[1.5, 1]} />
            <meshBasicMaterial map={textures[i]} />
          </mesh>
        ))}

        {/* Single fullscreen plane */}
        {activeIndex !== null && (
          <FullscreenPlane
            texture={textures[activeIndex]}
            targetPos={[0, 0, 1]} // center of screen
            targetScale={[viewport.width, viewport.height, 1]} // fill screen
            isActive={true}
          />
        )}
      </Canvas>

      {/* dark overlay */}
      {activeIndex !== null && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black/70"
          onClick={() => setActiveIndex(null)}
        />
      )}
    </section>
  )
}
