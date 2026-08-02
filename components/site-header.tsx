import Link from "next/link"

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

        {/* Links do Menu com Rolagem Horizontal Fluida no Mobile */}
        <nav className="flex items-center gap-4 sm:gap-6 text-sm font-medium text-slate-600 overflow-x-auto whitespace-nowrap py-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <Link href="#servicos" className="hover:text-red-800 transition-colors shrink-0">
            Serviços
          </Link>
          <Link href="#especialidades" className="hover:text-red-800 transition-colors shrink-0">
            Especialidades
          </Link>
          <Link href="#sobre" className="hover:text-red-800 transition-colors shrink-0">
            Sobre
          </Link>
          <Link href="#contato" className="hover:text-red-800 transition-colors shrink-0">
            Contato
          </Link>
        </nav>

      </div>
    </header>
  )
}