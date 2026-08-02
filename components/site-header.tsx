import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo e Nome no Canto Esquerdo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-800 text-white font-bold text-lg">
            A
          </div>
          <span className="text-base sm:text-2xl font-bold text-slate-800 tracking-tight whitespace-nowrap">
            ASCONTEC
          </span>
        </Link>

        {/* Links do Menu alinhados no Canto Direito */}
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="#servicos" className="hover:text-red-800 transition-colors">
            Serviços
          </Link>
          <Link href="#especialidades" className="hover:text-red-800 transition-colors">
            Especialidades
          </Link>
          <Link href="#sobre" className="hover:text-red-800 transition-colors hidden sm:inline-block">
            Sobre
          </Link>
          <Link href="#contato" className="hover:text-red-800 transition-colors hidden sm:inline-block">
            Contato
          </Link>
        </nav>

      </div>
    </header>
  )
}