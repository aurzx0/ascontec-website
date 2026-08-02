import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageSquare, LogIn } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image 
            src="/logo.png" 
            alt="Ascontec Assessoria Contábil" 
            width={180} 
            height={50} 
            className="h-12 w-auto object-contain"
            priority 
          />
        </Link>

        {/* Links do Menu - Esconde em telas pequenas e organiza com gaps dinâmicos */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8 text-sm font-medium text-slate-700">
          <Link href="#especialidades" className="hover:text-red-700 transition-colors whitespace-nowrap">
            Especialidades
          </Link>
          <Link href="#servicos" className="hover:text-red-700 transition-colors whitespace-nowrap">
            Serviços
          </Link>
          <Link href="#sobre" className="hover:text-red-700 transition-colors whitespace-nowrap">
            Sobre
          </Link>
          <Link href="#contato" className="hover:text-red-700 transition-colors whitespace-nowrap">
            Contato
          </Link>
        </nav>

        {/* Botões de Ação */}
        <div className="flex items-center gap-3 shrink-0">
          <Button variant="outline" size="sm" className="hidden lg:inline-flex rounded-full gap-2 border-slate-300">
            <LogIn className="w-4 h-4" />
            Área do Cliente
          </Button>
          <Button size="sm" className="bg-red-800 hover:bg-red-900 text-white rounded-full gap-2 px-4">
            <MessageSquare className="w-4 h-4" />
            <span className="hidden sm:inline">Falar com Contador</span>
            <span className="sm:hidden">Contato</span>
          </Button>
        </div>

      </div>
    </header>
  )
}