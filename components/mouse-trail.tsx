"use client"

import { useEffect, useRef } from "react"

type Point = { x: number; y: number; life: number }

export function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    // Rastro é decorativo: desativa em telas de toque e movimento reduzido.
    const isTouch = window.matchMedia("(pointer: coarse)").matches
    if (prefersReduced || isTouch) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + "px"
      canvas.style.height = window.innerHeight + "px"
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener("resize", resize)

    const points: Point[] = []
    const MAX = 22

    function onMove(e: PointerEvent) {
      points.push({ x: e.clientX, y: e.clientY, life: 1 })
      if (points.length > MAX) points.shift()
    }
    window.addEventListener("pointermove", onMove)

    let rafId = 0
    function tick() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      // Decaimento rápido — o rastro some logo após parar o movimento.
      for (const p of points) p.life -= 0.08
      while (points.length && points[0].life <= 0) points.shift()

      if (points.length > 1) {
        ctx.lineCap = "round"
        ctx.lineJoin = "round"
        for (let i = 1; i < points.length; i++) {
          const p0 = points[i - 1]
          const p1 = points[i]
          const t = i / points.length
          const alpha = Math.max(0, p1.life) * t
          // Vermelho bordô -> vermelho vivo ao longo do rastro.
          ctx.strokeStyle = `rgba(200, 20, 34, ${alpha})`
          ctx.shadowColor = "rgba(220, 38, 38, 0.9)"
          ctx.shadowBlur = 14 * t
          ctx.lineWidth = 8 * t * Math.max(0, p1.life)
          ctx.beginPath()
          ctx.moveTo(p0.x, p0.y)
          ctx.lineTo(p1.x, p1.y)
          ctx.stroke()
        }
        ctx.shadowBlur = 0

        // Ponto brilhante na ponta.
        const head = points[points.length - 1]
        ctx.fillStyle = `rgba(220, 38, 38, ${Math.max(0, head.life) * 0.9})`
        ctx.shadowColor = "rgba(220, 38, 38, 0.95)"
        ctx.shadowBlur = 18
        ctx.beginPath()
        ctx.arc(head.x, head.y, 4 * head.life, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }

      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100]"
    />
  )
}
