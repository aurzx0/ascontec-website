"use client"

import Link from "next/link"

// Variável para cancelar a animação anterior se você clicar rápido várias vezes
let animationId: number | null = null

function customScrollTo(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault()
  const target = document.getElementById(id)
  if (!target) return

  // Cancela qualquer rolagem que esteja acontecendo no momento do clique
  if (animationId) cancelAnimationFrame(animationId)

  const headerOffset = 70 // Desconto do menu fixo para não cobrir o título
  const targetY = target.getBoundingClientRect().top + window.scrollY - headerOffset
  const startY = window.scrollY
  const diff = targetY - startY
  const duration = 350 // Rápido e responsivo (350 milissegundos)
  let start: number | null = null

  function step(timestamp: number) {
    if (!start) start = timestamp
    const elapsed = timestamp - start
    const progress = Math.min(elapsed / duration, 1)

    // Curva de desaceleração suave (easeOutQuart)
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

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 gap-3">
        
        {/* Logo e Nome Fixo no Canto Esquerdo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <img 
            src="/logo.png" 
            alt="ASCONTEC" 
            className="h-9 w-auto object-contain"
          />
          <span className="text-base sm:text-2xl font-bold text-slate-800 tracking-tight whitespace-nowrap">
            ASCONTEC
          </span>
        </Link>

        {/* Links do Menu com Rolagem Sem Cooldown */}
        <nav className="flex items-center gap-4 sm:gap-6 text-sm font-medium text-slate-600 overflow-x-auto whitespace-nowrap py-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <a
            href="#servicos"
            onClick={(e) => customScrollTo(e, "servicos")}
            className="hover:text-red-800 transition-colors shrink-0 cursor-pointer"
          >
            Serviços
          </a>
          <a
            href="#especialidades"
            onClick={(e) => customScrollTo(e, "especialidades")}
            className="hover:text-red-800 transition-colors shrink-0 cursor-pointer"
          >
            Especialidades
          </a>
          <a
            href="#sobre"
            onClick={(e) => customScrollTo(e, "sobre")}
            className="hover:text-red-800 transition-colors shrink-0 cursor-pointer"
          >
            Sobre
          </a>
          <a
            href="#contato"
            onClick={(e) => customScrollTo(e, "contato")}
            className="hover:text-red-800 transition-colors shrink-0 cursor-pointer"
          >
            Contato
          </a>
        </nav>

      </div>
    </header>
  )
}