"use client"

import Link from "next/link"
import { MessageSquare, ArrowRight, ShieldCheck } from "lucide-react"

let animationId: number | null = null

function customScrollTo(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault()
  const target = document.getElementById(id)
  if (!target) return

  if (animationId) cancelAnimationFrame(animationId)

  const headerOffset = 70
  const targetY = target.getBoundingClientRect().top + window.scrollY - headerOffset
  const startY = window.scrollY
  const diff = targetY - startY
  const duration = 350
  let start: number | null = null

  function step(timestamp: number) {
    if (!start) start = timestamp
    const elapsed = timestamp - start
    const progress = Math.min(elapsed / duration, 1)
    const ease = 1 - Math.pow(1 - progress, 4)

    window.scrollTo(0, startY + diff * ease)

    if (elapsed < duration) {
      animationId = requestAnimationFrame(step)
    } else {
      animationId = null
    }
  }

  animationId = requestAnimationFrame(step)
}

export function HeroSection() {
  return (
    <section className="relative pt-8 pb-20 md:pt-14 md:pb-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          
          {/* Tag / Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-100 border border-slate-200 text-xs sm:text-sm font-medium text-slate-600 mb-8">
            <ShieldCheck className="w-4 h-4 text-red-700 shrink-0" />
            <span>Assessoria Contábil em Maceió — AL</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.18] mb-8 tracking-tight">
            Mais de 30 anos levando{" "}
            <span className="text-red-800">segurança, clareza</span> e estratégia para a sua empresa.
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Soluções contábeis e assessoria técnica especializada em Maceió para fazer seu negócio crescer com tranquilidade.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
            <Link
              href="https://wa.me/558299923184?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20contador%20da%20ASCONTEC."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-red-800 hover:bg-red-900 text-white font-medium rounded-full px-6 py-4 gap-2.5 text-sm sm:text-base shadow-md shadow-red-900/10 transition-colors w-full sm:w-auto text-center"
            >
              <MessageSquare className="w-5 h-5 shrink-0" />
              <span>Falar com um Contador no WhatsApp</span>
            </Link>

            <a
              href="#servicos"
              onClick={(e) => customScrollTo(e, "servicos")}
              className="inline-flex items-center justify-center border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium rounded-full px-6 py-4 gap-2.5 text-sm sm:text-base transition-colors w-full sm:w-auto text-center cursor-pointer"
            >
              <span>Conheça nossos serviços</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}