"use client"

import { motion } from "framer-motion"

type ShapeKind = "square" | "triangle" | "circle" | "ring" | "diamond"

type Shape = {
  kind: ShapeKind
  size: number
  top: string
  left: string
  duration: number
  delay: number
  drift: number
  rotate: number
  opacity: number
  tone: "brand" | "bright" | "muted"
}

/* Distribuídas ao longo de toda a página, com movimento e rotação lentos. */
const SHAPES: Shape[] = [
  { kind: "square", size: 140, top: "6%", left: "82%", duration: 22, delay: 0, drift: 40, rotate: 45, opacity: 0.5, tone: "brand" },
  { kind: "triangle", size: 120, top: "14%", left: "8%", duration: 26, delay: 1.5, drift: 34, rotate: 30, opacity: 0.45, tone: "bright" },
  { kind: "ring", size: 180, top: "22%", left: "60%", duration: 30, delay: 0.8, drift: 46, rotate: 20, opacity: 0.4, tone: "muted" },
  { kind: "circle", size: 90, top: "34%", left: "16%", duration: 20, delay: 2.2, drift: 30, rotate: 0, opacity: 0.5, tone: "brand" },
  { kind: "diamond", size: 110, top: "44%", left: "88%", duration: 24, delay: 1, drift: 38, rotate: 15, opacity: 0.4, tone: "bright" },
  { kind: "triangle", size: 150, top: "56%", left: "5%", duration: 28, delay: 0.4, drift: 42, rotate: -25, opacity: 0.38, tone: "muted" },
  { kind: "square", size: 100, top: "62%", left: "72%", duration: 23, delay: 2.6, drift: 32, rotate: 40, opacity: 0.45, tone: "brand" },
  { kind: "ring", size: 130, top: "74%", left: "22%", duration: 27, delay: 1.2, drift: 36, rotate: 10, opacity: 0.4, tone: "bright" },
  { kind: "circle", size: 160, top: "82%", left: "82%", duration: 31, delay: 0.6, drift: 48, rotate: 0, opacity: 0.35, tone: "muted" },
  { kind: "diamond", size: 90, top: "90%", left: "40%", duration: 21, delay: 2, drift: 30, rotate: 20, opacity: 0.42, tone: "brand" },
]

function toneColor(tone: Shape["tone"]) {
  if (tone === "brand") return "var(--brand)"
  if (tone === "bright") return "var(--brand-bright)"
  return "var(--muted-foreground)"
}

function ShapeVisual({ shape }: { shape: Shape }) {
  const color = toneColor(shape.tone)
  const common = {
    width: shape.size,
    height: shape.size,
  } as const

  if (shape.kind === "triangle") {
    return (
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: `${shape.size / 2}px solid transparent`,
          borderRight: `${shape.size / 2}px solid transparent`,
          borderBottom: `${shape.size}px solid ${color}`,
        }}
      />
    )
  }

  if (shape.kind === "circle") {
    return <div style={{ ...common, borderRadius: "9999px", background: color }} />
  }

  if (shape.kind === "ring") {
    return (
      <div
        style={{
          ...common,
          borderRadius: "9999px",
          border: `${Math.max(8, shape.size * 0.12)}px solid ${color}`,
          background: "transparent",
        }}
      />
    )
  }

  if (shape.kind === "diamond") {
    return (
      <div
        style={{ ...common, background: color, transform: "rotate(45deg)", borderRadius: 12 }}
      />
    )
  }

  // square
  return <div style={{ ...common, background: color, borderRadius: 18 }} />
}

export function FloatingShapes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {SHAPES.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute blur-2xl"
          style={{
            top: shape.top,
            left: shape.left,
            opacity: shape.opacity,
          }}
          initial={{ y: 0, x: 0, rotate: 0 }}
          animate={{
            y: [0, -shape.drift, 0, shape.drift * 0.6, 0],
            x: [0, shape.drift * 0.5, 0, -shape.drift * 0.4, 0],
            rotate: [0, shape.rotate, 0, -shape.rotate, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ShapeVisual shape={shape} />
        </motion.div>
      ))}
    </div>
  )
}
