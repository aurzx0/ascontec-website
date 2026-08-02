"use client"

import { useMemo, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

const POINT_COUNT = 90
const MAX_DISTANCE = 2.4

function generatePoints(count: number) {
  const arr: THREE.Vector3[] = []
  for (let i = 0; i < count; i++) {
    arr.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
      ),
    )
  }
  return arr
}

function ParticleNetwork() {
  const groupRef = useRef<THREE.Group>(null)
  const pointsRef = useRef<THREE.Points>(null)
  const { viewport } = useThree()

  const basePoints = useMemo(() => generatePoints(POINT_COUNT), [])

  // Static geometry for the glowing points
  const pointsGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(basePoints.length * 3)
    basePoints.forEach((p, i) => {
      positions[i * 3] = p.x
      positions[i * 3 + 1] = p.y
      positions[i * 3 + 2] = p.z
    })
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    return geo
  }, [basePoints])

  // Pre-computed connecting lines between nearby points
  const lineGeometry = useMemo(() => {
    const positions: number[] = []
    for (let i = 0; i < basePoints.length; i++) {
      for (let j = i + 1; j < basePoints.length; j++) {
        if (basePoints[i].distanceTo(basePoints[j]) < MAX_DISTANCE) {
          positions.push(basePoints[i].x, basePoints[i].y, basePoints[i].z)
          positions.push(basePoints[j].x, basePoints[j].y, basePoints[j].z)
        }
      }
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(positions), 3))
    return geo
  }, [basePoints])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.getElapsedTime()
    // Subtle mouse-driven parallax
    const mx = (state.pointer.x * viewport.width) / 30
    const my = (state.pointer.y * viewport.height) / 30
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mx * 0.6 + t * 0.04,
      0.05,
    )
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -my * 0.5,
      0.05,
    )
  })

  return (
    <group ref={groupRef}>
      <points ref={pointsRef} geometry={pointsGeometry}>
        <pointsMaterial
          color="#9b111e"
          size={0.09}
          sizeAttenuation
          transparent
          opacity={0.85}
        />
      </points>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#c0546b" transparent opacity={0.18} />
      </lineSegments>
    </group>
  )
}

export function Hero3DBackground() {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 9], fov: 60 }} dpr={[1, 2]}>
        <ParticleNetwork />
      </Canvas>
      {/* Fade the canvas into the page for a soft, minimal look */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  )
}
